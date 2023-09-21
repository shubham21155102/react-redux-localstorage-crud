import React, { Component } from "react";
import { connect } from "react-redux";
class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
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
      editing: false
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
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
          <input
            ref={(input) => (this.getCountry = input)}
            required
            type="text"
            placeholder="Country"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
