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
    
    // Define datas or retrieve it from wherever it should come from
   

    if (savedPosts) {
      try {
        // Parse the local storage data
        const parsedPosts = JSON.parse(savedPosts);

        // Combine the parsed data with datas
        const combinedData = [...datas, ...parsedPosts];

        // Dispatch the combined data to your Redux store or wherever you need it
        this.props.dispatch({
          type: "LOAD_POSTS",
          posts: combinedData
        });
      } catch (error) {
        console.error("Error parsing local storage data:", error);
      }
    }
  }
    // const savedPosts = localStorage.getItem("posts");
    // let x = JSON.parse(savedPosts);
    // const datas = [
    //   {
    //     "id": "3c84d956-6c1c-4b3a-af12-8e3566de1a01",
    //     "createdAt": "",
    //     "name": "John Doe",
    //     "editing":false,
    //     "email": "johndoe@example.com",
    //     "phone": "17890",
    //     "address": "Hii",
    //     "streetAddress": "123 Main St",
    //     "city": "New York",
    //     "state": "NY",
    //     "pinCode": "10001",
    //     "country": "USA",
    //     "gender": "Male",
    //     "hobbies": ["Reading", "Hiking"]
    //   }
    // ];

    // console.log(x[0])
    // console.log(datas)
    // if (savedPosts) {
    //   const parsedPosts = JSON.parse(savedPosts);
    //   const combinedData = [...parsedPosts, ...datas];
    //   console.log(combinedData)
    //   this.props.dispatch({
    //     type: "LOAD_POSTS",
    //     posts: JSON.parse(combinedData)
    //   });
    // }
    // console.log(datas)

  


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
