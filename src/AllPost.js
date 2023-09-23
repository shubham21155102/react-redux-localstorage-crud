import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProperElements from "./properElements";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./styles/hello.module.css";
import axios from "axios";
const AllPost = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      if (sessionStorage.length === 0) {
        try {
          const response = await axios.get("https://my-json-server.typicode.com/shubham21155102/demo/datas");
          console.log(response.data);
          response.data.map((e) => {
            sessionStorage.setItem(e.id, JSON.stringify(e));
          })
          const savedPosts = localStorage.getItem("posts");
          const parsedPosts = savedPosts ? JSON.parse(savedPosts) : [];

          for (let i = 0; i < 20; i++) {
            if (sessionStorage.getItem(i + 1)) {
              const data = JSON.parse(sessionStorage.getItem(i + 1));
              parsedPosts.push(data);
            }
          }

          props.dispatch({
            type: "LOAD_POSTS",
            posts: parsedPosts,
          });

          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      }
      else {
        setLoading(false);
        const savedPosts = localStorage.getItem("posts");
        const parsedPosts = savedPosts ? JSON.parse(savedPosts) : [];
        for (let i = 0; i < 20; i++) {
          if (sessionStorage.getItem(i + 1)) {
            const data = JSON.parse(sessionStorage.getItem(i + 1));
            parsedPosts.push(data);
          }
        }

        props.dispatch({
          type: "LOAD_POSTS",
          posts: parsedPosts,
        });
      }
    };

    fetchData();
  }, []);

  const totalCount = props.posts.length;
  if (loading) {
    return (
      <>
        <div className="loader-container" >
          <div className="loader"></div>
          <div className="loading-text">Loading...</div>
          <Skeleton />
          <Skeleton count={20} />

        </div>
      </>
    )

  }
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
