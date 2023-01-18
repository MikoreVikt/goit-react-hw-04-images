import { useState, useEffect } from "react";
import { fetchImages } from "services/pixabay-api";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from "./Searchbar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

const scrollTarget = document.getElementById('modal-root');

export const App = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalHits, setTotalHits] = useState(0)

  useEffect(() => {
    if (!query) {
      return;
    }
    (async () => {
      try {
        setLoading(true)
        const res = await fetchImages(query, page)
        setImages(pS => [...pS, ...res.hits])
        setLoading(false)
        setTotalHits(res.totalHits)
      } catch (error) {
        toast.warn(`${error}`)
        setLoading(false)}})();
  }, [query, page])

  useEffect(() => {
    if (page === 1) {
      return
    }
      setTimeout(() => {
        scrollTarget.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }, 100)
  }, [loading, page])

  const handleSubmit = searchQuery => {
    if (searchQuery.toLowerCase().trim() === "") {
      return toast.warn(`Enter search query!`)
    }
    if (query === searchQuery) {
      return toast.warn(`Enter a new search query!`)
    }
    setQuery(searchQuery)
    setPage(1)
    setImages([])
  }

  const loadMore = () => {
    setPage(page + 1)
    setLoading(true)
  }

  return (
      <>
        <SearchBar onSubmit={handleSubmit} />
        {totalHits !== 0 && (<ImageGallery images={images} />)}
        {images.length > 0 && images.length < totalHits && loading === false && (<Button onClick={loadMore} />)}
        <ThreeDots 
          height="150" 
          width="150" 
          radius="9"
          color="#3f51b5" 
          ariaLabel="three-dots-loading"
          visible={loading}
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


// ==========================================================================================
// export class App extends Component {
//   state = {
//     page: 1,
//     images: [],
//     loading: false,
//     totalHits: 0,
//   }

  // async componentDidUpdate(_, prevState) {
  //   const { query, page, loading } = this.state

  //   if (prevState.query !== query || prevState.page !== page) {
  //     try {
  //       this.setState({ loading: true })

  //       await fetchImages(query, page)
  //         .then(res => this.setState(prevState => ({
  //           images: [...prevState.images, ...res.hits],
  //           loading: false,
  //           totalHits: res.totalHits,
  //         })))
        
        // if (loading) {
        //   setTimeout(() => {
        //     scrollTarget.scrollIntoView({
        //       block: 'center',
        //       behavior: 'smooth',
        //     });
        //   }, 100)
        // }

  //     } catch (error) {
  //       toast.warn(`${error}`)
  //       this.setState({ loading: false });
  //     }
      
  //   }
  // }

  // handleSubmit = query => {
  //   if (query.toLowerCase().trim() === "") {
  //     return toast.warn(`Enter search query`)
  //   }
  //   if (this.state.query === query) {
  //     return
  //   }
  //   this.setState({ query, page: 1, images: []})
  // }

  // loadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1, loading: true }));
  // }
  
//   render() {
//     const {images, loading, totalHits} = this.state
//     return (
//       <>
//         <SearchBar onSubmit={this.handleSubmit} />
//         {totalHits !== 0 && (<ImageGallery images={this.state.images} />)}
//         {images.length > 0 && images.length < totalHits && loading === false && (<Button onClick={this.loadMore} />)}
//         <ThreeDots 
//           height="150" 
//           width="150" 
//           radius="9"
//           color="#3f51b5" 
//           ariaLabel="three-dots-loading"
//           visible={this.state.loading}
//           wrapperStyle={{
//             position: "fixed",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//           }}
//         />
//         <ToastContainer />
//       </>
//     )
//   }
// }
