import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import BookTitle from "../bookTitle/BookTitle";
import BookDetails from "../bookDetails/BookDetails";
import "./BookResult.css";

class BookResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false
    };
  }
  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  } 
  render(){
    return (<div>
      <BookTitle {...this.props.volumeInfo} onClick={this.toggleDetails.bind(this)}/>
      <ToggleDisplay show={this.state.showDetails}>
        <BookDetails {...this.props.volumeInfo} />
      </ToggleDisplay>
    </div>)
  }
}

export default BookResult;