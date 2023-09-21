import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      <>
       
        <button
         style={{ borderRadius: "10px" }}
          onClick={() =>
            this.props.dispatch({
              type: "EDIT_POST",
              id: this.props.post.id
            })
          }
        >
          Edit
        </button>
        <button
         style={{ borderRadius: "10px", backgroundColor: "red" }}
          onClick={() =>
            this.props.dispatch({
              type: "DELETE_POST",
              id: this.props.post.id
            })
          }
        >
          Delete
        </button>
      </>
    );
  }
}

export default connect()(Post);
