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
            <input
              ref={(input) => (this.getName = input)}
              required
              type="text"
              placeholder="Name"
            />
            <br />
            <br />
            <input
              ref={(input) => (this.getEmail = input)}
              required
              type="email"
              placeholder="Email"
            />
            <br />
            <br />
            <input
              ref={(input) => (this.getPhone = input)}
              required
              type="tel"
              placeholder="Phone"
            />
            <br />
            <br />
            <input
              ref={(input) => (this.getAddress = input)}
              required
              type="text"
              placeholder="Address"
            />
            <br />
            <br />
            <input
              ref={(input) => (this.getStreetAddress = input)}
              required
              type="text"
              placeholder="Street Address"
            />
            <br />
            <br />
            <input
              ref={(input) => (this.getCity = input)}
              required
              type="text"
              placeholder="City"
            />
            <br />
            <br />
            <input
              ref={(input) => (this.getState = input)}
              required
              type="text"
              placeholder="State"
            />
            <br />
            <br />
            <input
              ref={(input) => (this.getPincode = input)}
              required
              type="text"
              placeholder="Pincode"
            />
            <br />
            <br />
           
            <select ref={(input) => (this.getCountry = input)} required>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">United States</option>
              <option value="other">Other</option>
            </select>
           
            <br />
            <br />
            <br />
            <br />
            <select ref={(input) => (this.getGender = input)} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />
            <div style={{left:"1px"}}>
              Hobbies:
              <label>
                <input
                  ref={(input) => (this.getHobbyReading = input)}
                  type="checkbox"
                />
                Reading
              </label>
              <label>
                <input
                  ref={(input) => (this.getHobbySports = input)}
                  type="checkbox"
                />
                Sports
              </label>
              <label>
                <input
                  ref={(input) => (this.getHobbyMusic = input)}
                  type="checkbox"
                />
                Music
              </label>
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
