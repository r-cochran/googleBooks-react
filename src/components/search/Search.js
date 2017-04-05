import React, { Component } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import BookResultsList from "../bookResultsList/BookResultsList";
import "./Search.css";


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchText: ""
    };
  }
  handleKeyPress(event){
    let self = this;
    let value = event.target.value;
    this.setState({searchText: value})
    if(event.key === "Enter" && value){
      self.search()
    }
  }
  search() {
    let self = this
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + self.state.searchText, {
        method: "GET",
        dataType: 'json'
      })
      .then((r) => r.json())
      .then(books => self.setState({books: books.items}) )
  }

  render(){
    return (<Row>
              <Col md={12}>
                <FormControl type="text" id='searchText' placeholder="Search" onKeyPress={this.handleKeyPress.bind(this)}/> 
                <Button id="search" bsStyle="primary" onClick={this.search.bind(this)}><FontAwesome name='search' /> Search</Button>
                <BookResultsList books={this.state.books}></BookResultsList>
              </Col>
            </Row>)
  }
}

export default Search;