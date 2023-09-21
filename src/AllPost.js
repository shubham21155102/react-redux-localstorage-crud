import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditComponent";
import "./styles/allpost.module.css"
import datas from "./samples";
class AllPost extends Component {
  componentDidMount() {
    // Load data from local storage when the component mounts
    const savedPosts = localStorage.getItem("posts");

    // Parse the local storage data or initialize as an empty array
    const parsedPosts = savedPosts ? JSON.parse(savedPosts) : [];
  
    // Combine the parsed data with datas
    const combinedData = [...datas, ...parsedPosts];
  
    // Dispatch the combined data to your Redux store or wherever you need it
    this.props.dispatch({
      type: "LOAD_POSTS",
      posts: combinedData
    });
   
   
  }

  


  render() {
    const totalCount = this.props.posts.length; // Calculate the total count

    return (
      <div style={{
        position: "absolute",
        left: 0,
      }}>
        <h1>Total Items: {totalCount} </h1>
        <center>
          <table>
            <thead >
              <tr style={{ backgroundColor: "white" }}>
                <th>UserId</th>
                <th>CreatedAt</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Pincode</th>
                <th>Country</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.posts.map((entry, index) => (
                <tr key={index} style={{ backgroundColor: "white" }}>
                  <td>{entry.id}</td>
                  <td>{entry.createdAt}</td>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.phone}</td>
                  <td>{entry.address}</td>
                  <td>{entry.streetAddress}</td>
                  <td>{entry.city}</td>
                  <td>{entry.state}</td>
                  <td>{entry.pinCode}</td>
                  <td>{entry.country}</td>
                  <td>{entry.gender}</td>
                  <td>{entry.hobbies}</td>
                  <td
                    key={entry.id} style={{ display: "flex", gap: "1px" }}>
                    {entry.editing ? (
                      <EditComponent post={entry} key={entry.id} />
                    ) : (
                      <Post key={entry.id} post={entry} />
                    )}


                  </td> </tr>
              ))}
            </tbody>
          </table>
        </center>
        {/* {
          this.props.posts.map((post) => (
          <div key={post.id}>
            {post.editing ? (
              <EditComponent post={post} key={post.id} />
            ) : (
              <Post key={post.id} post={post} />
            )}
          </div>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(AllPost);
