import { Component } from "react";
import PropTypes from 'prop-types';
import { Header, Form, Input, Btn } from "./SearchBar.styled";
import { BiSearchAlt2 } from 'react-icons/bi';

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    query: "",
  }

  handleChange = e => {
    this.setState({query: e.currentTarget.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.query.toLowerCase().trim())
    this.setState({query: ""})
  }

    render() {
        return (
          <Header onSubmit={this.handleSubmit}>
            <Form>
              <Btn type="submit">
                <BiSearchAlt2 />
              </Btn>

              <Input
                onChange={this.handleChange}
                value={this.state.query}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </Form>
          </Header>
        )
    }
}
