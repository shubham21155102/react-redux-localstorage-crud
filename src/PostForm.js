import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import "./styles/main.module.css";
class PostForm extends Component {
  constructor(props) {
    super(props);

    // Retrieve data from local storage or initialize an empty array
    const savedData = JSON.parse(localStorage.getItem("posts")) || [];

    this.state = {
      posts: savedData // Store data in the component state
    };
  }
  handleReset = () => {
    this.getName.value = "";
    this.getEmail.value = "";
    this.getAddress.value = "";
    this.getStreetAddress.value = "";
    this.getPhone.value = "";
    this.getCity.value = "";
    this.getState.value = "";
    this.getPincode.value = "";
    this.getCountry.value = "";
    this.getGender.value = "";
    this.getHobbyReading.checked = false;
    this.getHobbySports.checked = false;
    this.getHobbyMusic.checked = false;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const hobbies = [];
    if (this.getHobbyReading.checked) {
      hobbies.push("Reading");
    }
    if (this.getHobbySports.checked) {
      hobbies.push("Sports");
    }
    if (this.getHobbyMusic.checked) {
      hobbies.push("Music");
    }
    const name = this.getName.value;
    const email = this.getEmail.value;
    const address = this.getAddress.value;
    const streetAddress = this.getStreetAddress.value;
    const phone = this.getPhone.value;
    const city = this.getCity.value;
    const state = this.getState.value;
    const pinCode = this.getPincode.value;
    const country = this.getCountry.value;
    const gender = this.getGender.value;
    const data = {
      id: uuidv4(),
      createdAt:new Date().toDateString(),
      name,
      email,
      phone,
      address,
      streetAddress,
      city,
      country,
      state,
      pinCode,
      gender,
      hobbies,
      editing: false
    };
    this.setState(
      (prevState) => ({
        posts: [...prevState.posts, data]
      }),
      () => {
        // Save the updated data to local storage
        localStorage.setItem("posts", JSON.stringify(this.state.posts));
      }
    );
    this.props.dispatch({
      type: "ADD_POST",
      data
    });

    this.getName.value = "";
    this.getEmail.value = "";
    this.getAddress.value = "";
    this.getStreetAddress.value = "";
    this.getPhone.value = "";
    this.getCity.value = "";
    this.getState.value = "";
    this.getPincode.value = "";
    this.getCountry.value = "";
    this.getGender.value = "";
  };

  render() {
    return (
     <>
        <h1 style={{ color: "white" }}>Form</h1>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            borderRadius: "10px",
            borderWidth: "10px",
            borderColor: "black",
            
          }}
        >
          <form
            onSubmit={this.handleSubmit}
            style={{ backgroundColor: "white", width: "100%" }}
          > 
            <label>Name</label>
            <input
              ref={(input) => (this.getName = input)}
              required
              type="text"
              placeholder="Enter Name"
            />
            <br />
            <br />
            <label>Email</label>
            <input
              ref={(input) => (this.getEmail = input)}
              required
              type="email"
              placeholder="Enter Email"
            />
            <br />
            <br />
            <label>Phone</label>
            <input
              ref={(input) => (this.getPhone = input)}
              required
              type="tel"
              placeholder="Enter Phone Number"
            />
            <br />
            <br />
            <label>Address</label>
            <textarea
              ref={(input) => (this.getAddress = input)}
              style={{width:"100%",marginBottom:"10px"}}
              required
              type="text"
              placeholder="Enter Address"
            />
            <br />
            <br />
            <label>Street Address</label>
            <input
              ref={(input) => (this.getStreetAddress = input)}
              required
              type="text"
              placeholder="Enter Street Address"
            />
            <br />
            <br />
            <label>City</label>
            <input
              ref={(input) => (this.getCity = input)}
              required
              type="text"
              placeholder="Enter City"
            />
            <br />
            <br />
            <label>State</label>
            <input
              ref={(input) => (this.getState = input)}
              required
              type="text"
              placeholder="Enter State"
            />
            <br />
            <br />
            <label>Pincode</label>
            <input
              ref={(input) => (this.getPincode = input)}
              required
              type="text"
              placeholder="Enter Pincode"
            />
            <br />
            <br />
            <label>Country</label>
            <select ref={(input) => (this.getCountry = input)} required >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">United States</option>
              <option value="other">Other</option>
            </select>
           
            <br />
            <br />
            <br />
            <br />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

          <label>Gender</label>
              <span> 
                <input
                  type="radio"
                  ref={(input) => (this.getGender = input)}
                  name="gender"
                  value="male"
                  required
                  placeholder="Male"
                />
                Male
              </span>
              <span>
                <input
                  type="radio"
                  ref={(input) => (this.getGender = input)}
                  name="gender"
                  value="female"
                  required
                />
                Female
              </span>
              <span>
                <input
                  type="radio"
                  ref={(input) => (this.getGender = input)}
                  name="gender"
                  value="other"
                  required
                />
                Other
              </span>
            </div>
            <br />
            <br />
            <br />
            <div>
            <label>    Hobbies:   </label>
           
                <input
                  ref={(input) => (this.getHobbyReading = input)}
                  type="checkbox"
                />
                Reading
           
             
                <input
                  ref={(input) => (this.getHobbySports = input)}
                  type="checkbox"
                />
                Sports
             
                <input
                  ref={(input) => (this.getHobbyMusic = input)}
                  type="checkbox"
                />
                Music
             
            </div>
            <br/>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={this.handleReset}>Reset</button>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default connect()(PostForm);
