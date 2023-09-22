import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProperElements from "./properElements";
import { useDispatch } from "react-redux";
import "./styles/hello.module.css";
import datas from "./samples";

const AllPost = (props) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch({
      type: "DELETE_POST",
      id: props.post.id,
    });
  };
useEffect(() => {
  const savedPosts = localStorage.getItem("posts");
  const parsedPosts = savedPosts ? JSON.parse(savedPosts) : [];
  console.log(savedPosts)
  const combinedPosts = [...datas,...parsedPosts]; 

  props.dispatch({
    type: "LOAD_POSTS",
    posts: combinedPosts,
  });
}, []);

  const totalCount = props.posts.length; 

  return (
    <div>
      <center style={{ backgroundColor: "blue", borderRadius: "10px" }}>
        <h2 className="totalCount" style={{ color: "white", fontSize: "20px" }}>
          Total Items : <span className="total">{totalCount}</span>
        </h2>
      </center>

      <table>
        <thead>
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
          {props.posts.map((entry, index) => (
            <ProperElements post={entry} key={entry.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(mapStateToProps)(AllPost);
