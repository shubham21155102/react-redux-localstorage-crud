import React, { useRef, useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
const properElements = (props) => {
    const entry = props.post;
    const [ml, setMl] = useState(false)
    const [gender, setGender] = useState(entry.gender);
    const [fm, setFm] = useState(false);
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    function deleteItemFromLocalStorage(key) {
        localStorage.removeItem(key);
    }
    useEffect(() => {
        // Update the gender when ml or fm changes
        if (ml) {
            setGender("Male");
        } else if (fm) {
            setGender("Female");
        }
    }, [ml, fm]);
   
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
    const getGender = useRef(entry.gender);
    const getHobbies = useRef(entry.getHobbies);
    const getHobbyReading = useRef(null);
    const getHobbySports = useRef(null);
    const getHobbyMusic = useRef(null);
    // console.log(getHobbies)
    const handleEditClick = () => {
        setEditing(true);
        setMl(entry.gender === "Male"); // Set ml and fm based on the entry.gender
        setFm(entry.gender === "Female");

    };
    const handleUpdateClick = () => {

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
        setSelectedHobbies(hobbies); 
        console.log(hobbies)
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
            gender: gender,
            hobbies: hobbies,
        };
        console.log(updatedData)
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
                gender: gender

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
                        <select
                            ref={getCountry}
                            defaultValue={entry.country}

                        >
                            <option value="India">India</option>
                            <option value="USA">United States</option>
                            <option value="SriLanka">Sri Lanka</option>
                            <option value="other">Other</option>
                        </select>
                    ) : (
                        entry.country
                    )}
                </td>
                <td>
                    {
                        editing ? (<>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    id="male"
                                    checked={ml} // Use checked to determine if this radio button should be selected
                                    onChange={() => {
                                        setMl(true);
                                        setFm(false);
                                        setGender("Male"); // Update the gender state
                                    }}
                                    className="form-check-input"
                                />
                                <label for="male" className="form-check-label">Male</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    id="female"
                                    checked={fm} // Use checked to determine if this radio button should be selected
                                    onChange={() => {
                                        setFm(true);
                                        setMl(false);
                                        setGender("Female"); // Update the gender state
                                    }}
                                    className="form-check-input"
                                />
                                <label for="female" className="form-check-label">Female</label>
                            </div>
                        </>) : (
                            entry.gender
                        )}
                </td>

                <td>
                    {editing ? (
                        <>
                        <fieldset className="form-group">
                <h6 className="form-legend">Hobbies</h6>
                <div className="form-check"><input type="checkbox" name="hobbies" value="swimming" id="swimming" ref={getHobbyReading}
                  className="form-check-input" /><label for="swimming"
                    className="form-check-label">Swimming</label></div>
                <div className="form-check"><input type="checkbox" name="hobbies" value="singing" id="singing" ref={getHobbySports}
                  className="form-check-input" /><label for="singing"
                    className="form-check-label">Singing</label></div>
                <div className="form-check"><input type="checkbox" name="hobbies" value="writing" id="writing" ref={getHobbyMusic}
                  className="form-check-input" /><label for="writing"
                    className="form-check-label">Writing</label></div>
              </fieldset>
                        </>
                    ) : (
                        entry.hobbies.join(', ')
                    )}
                </td>


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