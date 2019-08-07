import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <h4>Select a book to get started.</h4>;
    }

    return (
      <div>
        <h3>Book Detail:</h3>
        {this.props.activeBook.title}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeBook: state.activeBook
  };
};

export default connect(mapStateToProps)(BookDetail);
