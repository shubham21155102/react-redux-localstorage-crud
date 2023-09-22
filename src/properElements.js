import React, { useRef, useState } from 'react';
import { connect, useDispatch } from "react-redux";
const properElements = (props) => {
    function deleteItemFromLocalStorage(key) {
        localStorage.removeItem(key);
      }
    const entry = props.post;
    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch()
    const getName = useRef(entry.name);
    const getEmail = useRef(entry.email);
    const getPhone = useRef(entry.phone);
    const getAddress = useRef(entry.address);
    const getStreetAddress = useRef(entry.streetAddress);
    const getCity = useRef(entry.city);
    const getState = useRef(entry.state);
    const getPincode = useRef(entry.pinCode);
    const getCountry = useRef(entry.country);
    const handleEditClick = () => {
        setEditing(true);
    };
    const handleUpdateClick = () => {
        const postIdToUpdate = entry.id;
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const indexToUpdate = posts.findIndex((post) => post.id === postIdToUpdate);
        const updatedData = {
            name: getName.current.value,
            email: getEmail.current.value,
            phone: getPhone.current.value,
            address: getAddress.current.value,
            streetAddress: getStreetAddress.current.value,
            city: getCity.current.value,
            state: getState.current.value,
            pinCode: getPincode.current.value,
            country: getCountry.current.value,
        };
        if (indexToUpdate !== -1) {
            // Update the data for the found post
            posts[indexToUpdate] = {
              ...posts[indexToUpdate], // Preserve existing properties
              name: getName.current.value,
              email: getEmail.current.value,
              phone: getPhone.current.value,
              address: getAddress.current.value,
              streetAddress: getStreetAddress.current.value,
              city: getCity.current.value,
              state: getState.current.value,
              pinCode: getPincode.current.value,
              country: getCountry.current.value,
            };
            localStorage.setItem('posts', JSON.stringify(posts));

        props.dispatch({ type: 'UPDATE', id: props.post.id, data: updatedData });
        
        }
        setEditing(false);
    };

    return (
        <>
            <tr key={props.key} style={{ backgroundColor: "white" }} >
                <td>{entry.id}</td>
                <td>{entry.createdAt}</td>
                <td>
                    {editing ? (<input
                        ref={getName}
                        type="name"
                        placeholder={entry.name}
                        defaultValue={entry.name}
                    />
                    ) : (
                        entry.name
                    )}
                </td>
                <td>
                    {editing ? (
                        <input
                            ref={getEmail}
                            type="email"
                            defaultValue={entry.email}
                        />
                    ) : (
                        entry.email
                    )}
                </td>
                <td>
                    {editing ? (
                        <input
                            ref={getPhone}
                            type="text"
                            defaultValue={entry.phone}
                        />
                    ) : (
                        entry.phone
                    )}
                </td>
                <td>
                    {editing ? (
                        <input
                            ref={getAddress}
                            type="text"
                            defaultValue={entry.address}
                        />
                    ) : (
                        entry.address
                    )}
                </td>
                <td>
                    {editing ? (
                        <input
                            ref={getStreetAddress}
                            type="text"
                            defaultValue={entry.streetAddress}
                        />
                    ) : (
                        entry.streetAddress
                    )}
                </td>
                <td>
                    {editing ? (
                        <input
                            ref={getCity}
                            type="text"
                            defaultValue={entry.city}
                        />
                    ) : (
                        entry.city
                    )}
                </td>
                <td>
                    {editing ? (
                        <input
                            ref={getState}
                            type="text"
                            defaultValue={entry.state}
                        />
                    ) : (
                        entry.state
                    )}
                </td>
                <td>
                    {editing ? (
                        <input
                            ref={getPincode}
                            type="text"
                            defaultValue={entry.pinCode}
                        />
                    ) : (
                        entry.pinCode
                    )}
                </td>
                <td>
                    {editing ? (
                        <input
                            ref={getCountry}
                            type="text"
                            defaultValue={entry.country}
                        />
                    ) : (
                        entry.country
                    )}
                </td>


                <td>{entry.gender}</td>
                <td style={{ gap: "10px" }}>{entry.hobbies}</td>
                <td
                    key={entry.id}
                    style={{ display: "flex", gap: "1px" }}
                >
                    {editing ? (
                        <>
                            <button
                                style={{ borderRadius: '10px', backgroundColor: '#007bff' }}
                                onClick={handleUpdateClick}
                            >
                                Update
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                style={{ borderRadius: '10px', backgroundColor: 'green' }}
                                onClick={handleEditClick}
                            >
                                Edit
                            </button>
                            <button
                                style={{ borderRadius: '10px', backgroundColor: 'red' }}
                                onClick={() => {
                                    dispatch({
                                        type: 'DELETE_POST',
                                        id: entry.id,
                                    });
                                    const posts = JSON.parse(localStorage.getItem('posts')) || [];
                                    const newPosts = posts.filter((post) => post.id !== entry.id);
                                    const updatedPosts = posts.filter((post) => post.id !== entry.id);
                                    localStorage.setItem('posts', JSON.stringify(updatedPosts));

                                    // Call the deleteItemFromLocalStorage function
                                    deleteItemFromLocalStorage(entry.id);
                                }


                                }
                            >
                                Delete
                            </button>
                        </>
                    )}

                </td>
            </tr>
        </>
    )
}

export default connect()(properElements);