import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import "./styles/main.module.css";

const PostForm = (props) => {
  const [posts, setPosts] = useState([]);
  const getName = useRef(null);
  const getEmail = useRef(null);
  const getAddress = useRef(null);
  const getStreetAddress = useRef(null);
  const getPhone = useRef(null);
  const getCity = useRef(null);
  const getState = useRef(null);
  const getPincode = useRef(null);
  const getCountry = useRef(null);
  const getGender = useRef(null);
  const getHobbyReading = useRef(null);
  const getHobbySports = useRef(null);
  const getHobbyMusic = useRef(null);

  useEffect(() => {
    // Retrieve data from local storage and initialize the state
    const savedData = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedData);
  }, []);

  const handleReset = () => {
    getName.current.value = "";
    getEmail.current.value = "";
    getAddress.current.value = "";
    getStreetAddress.current.value = "";
    getPhone.current.value = "";
    getCity.current.value = "";
    getState.current.value = "";
    getPincode.current.value = "";
    getCountry.current.value = "";
    getGender.current.value = "";
    getHobbyReading.current.checked = false;
    getHobbySports.current.checked = false;
    getHobbyMusic.current.checked = false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hobbies = [];
    if (getHobbyReading.current.checked) {
      hobbies.push("Reading");
    }
    if (getHobbySports.current.checked) {
      hobbies.push("Sports");
    }
    if (getHobbyMusic.current.checked) {
      hobbies.push("Music");
    }

    const name = getName.current.value;
    const email = getEmail.current.value;
    const address = getAddress.current.value;
    const streetAddress = getStreetAddress.current.value;
    const phone = getPhone.current.value;
    const city = getCity.current.value;
    const state = getState.current.value;
    const pinCode = getPincode.current.value;
    const country = getCountry.current.value;
    const gender = getGender.current.value;

    const data = {
      id: uuidv4(),
      createdAt: new Date().toDateString(),
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

    setPosts((prevPosts) => [...prevPosts, data]);

    // Save the updated data to local storage
    localStorage.setItem("posts", JSON.stringify([...posts, data]));

    props.dispatch({
      type: "ADD_POST",
      data
    });

    handleReset();
  };

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
          onSubmit={handleSubmit}
          style={{ backgroundColor: "white", width: "100%" }}
        >
          <label>Name</label>
          <input
            ref={getName}
            required
            type="text"
            placeholder="Enter Name"
          />
          <br />
          <br />
          <label>Email</label>
          <input
            ref={getEmail}
            required
            type="email"
            placeholder="Enter Email"
          />
          <br />
          <br />
          <label>Phone</label>
          <input
            ref={getPhone}
            required
            type="tel"
            placeholder="Enter Phone Number"
          />
          <br />
          <br />
          <label>Address</label>
          <textarea
            ref={getAddress}
            style={{ width: "100%", marginBottom: "10px" }}
            required
            type="text"
            placeholder="Enter Address"
          />
          <br />
          <br />
          <label>Street Address</label>
          <input
            ref={getStreetAddress}
            required
            type="text"
            placeholder="Enter Street Address"
          />
          <br />
          <br />
          <label>City</label>
          <input
            ref={getCity}
            required
            type="text"
            placeholder="Enter City"
          />
          <br />
          <br />
          <label>State</label>
          <input
            ref={getState}
            required
            type="text"
            placeholder="Enter State"
          />
          <br />
          <br />
          <label>Pincode</label>
          <input
            ref={getPincode}
            required
            type="text"
            placeholder="Enter Pincode"
          />
          <br />
          <br />
          <label>Country</label>
          <select ref={getCountry} required>
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
                ref={getGender}
                name="gender"
                value="male"
                required
              />
              Male
            </span>
            <span>
              <input
                type="radio"
                ref={getGender}
                name="gender"
                value="female"
                required
              />
              Female
            </span>
            <span>
              <input
                type="radio"
                ref={getGender}
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
            <label>Hobbies: </label>
            <input
              ref={getHobbyReading}
              type="checkbox"
            />
            Reading
            <input
              ref={getHobbySports}
              type="checkbox"
            />
            Sports
            <input
              ref={getHobbyMusic}
              type="checkbox"
            />
            Music
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={handleReset}>Reset</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default connect()(PostForm);
