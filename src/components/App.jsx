import { Component } from "react";
import { fetchImages } from "services/pixabay-api";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from "./Searchbar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

const scrollTarget = document.getElementById('modal-root');

export class App extends Component {
  state = {
    page: 1,
    images: [],
    loading: false,
    totalHits: 0,
  }

  async componentDidUpdate(_, prevState) {
    const { query, page, loading } = this.state

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true })

        await fetchImages(query, page)
          .then(res => this.setState(prevState => ({
            images: [...prevState.images, ...res.hits],
            loading: false,
            totalHits: res.totalHits,
          })))
        
        if (loading) {
          setTimeout(() => {
            scrollTarget.scrollIntoView({
              block: 'center',
              behavior: 'smooth',
            });
          }, 100)
        }

      } catch (error) {
        toast.warn(`${error}`)
        this.setState({ loading: false });
      }
      
    }
  }

  handleSubmit = query => {
    if (query.toLowerCase().trim() === "") {
      return toast.warn(`Enter search query`)
    }
    if (this.state.query === query) {
      return
    }
    this.setState({ query, page: 1, images: []})
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, loading: true }));
  }
  
  render() {
    const {images, loading, totalHits} = this.state
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {totalHits !== 0 && (<ImageGallery images={this.state.images} />)}
        {images.length > 0 && images.length < totalHits && loading === false && (<Button onClick={this.loadMore} />)}
        <ThreeDots 
          height="150" 
          width="150" 
          radius="9"
          color="#3f51b5" 
          ariaLabel="three-dots-loading"
          visible={this.state.loading}
          wrapperStyle={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <ToastContainer />
      </>
    )
  }
}
