
# User Data Form JavaScript Project
# react-redux-localstorage-crud
## Overview

This React project creates a user data form with various fields, including Name, Email, Phone, Address, Street Address, City, Country, Gender, and Hobbies. Users can edit and delete their information. The project integrates with a JSON API to fetch demo data, stores data in `localStorage and session storage(loaded api data)`, and optimizes data loading.Also used react-redux for smart state management.


## Features

- User input fields with validation.
- Integration with a JSON API to fetch demo data.
- Data storage in `localStorage` to retain user input.
- Edit option for each field.
- Delete option to remove user data.

## Implementation Steps

1. **Data Loading Logic:**

   - On the first page load, check if session data is stored. If not, make an API call to fetch demo data and store it in `sessionStorage`.

2. **Data Storage:**

   - Combine session data with local storage values named "datas" to create a complete dataset.
   - Store user data in `localStorage` after editing.

3. **Edit and Delete Functionality:**

   - Implement an edit option for each field, allowing users to update their information.
   - Implement a delete option to remove user data.

## Dependencies
## My Views

- **Project Complexity:** This project may appear deceptively simple but is, in fact, quite challenging due to various intricacies.

- **Objectives:**
  - Handle user input and save it to local storage.
  - Manage demo data retrieved from a JSON API.
  - Minimize unnecessary API calls.
  - Enhance user experience with a loader.

- **Form Fields:**
  - Name
  - Email (with validation)
  - Phone (with validation)
  - Address (including street, city, country dropdown)
  - Gender (radio buttons)
  - Hobbies (checkboxes storing multiple values in an array)

- **Implementation Steps:**
  1. Check for session data on initial page load.
  2. Make an API call and store data in session storage if absent.
  3. Implement logic to avoid redundant API calls when session data exists.
  4. Merge session and local storage data.
  5. Enable editing for all fields, including radio buttons.
  6. Add a delete option for individual data entries.

- **Project Challenge:** Despite its seemingly simple nature, this project poses challenges that require careful consideration.
 ### Redux - React-Redux
 ``` json{
 {
  "import": "datas from \"../samples\"",
  "postReducer": {
    "state": [],
    "action": {
      "type": "ADD_POST",
      "type": "DELETE_POST",
      "type": "EDIT_POST",
      "type": "UPDATE",
      "type": "LOAD_POSTS"
    }
  }
}
}
```
** Deleting Datas **
``` json {
    onClick={() => {
  dispatch({
    type: 'DELETE_POST',
    id: entry.id,
  });
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const newPosts = posts.filter((post) => post.id !== entry.id);
  const updatedPosts = posts.filter((post) => post.id !== entry.id);
  localStorage.setItem('posts', JSON.stringify(updatedPosts));

  if (entry.id > 0 && entry.id <= 20) {
    console.log(entry.id)
    console.log(sessionStorage.getItem(entry.id))
    sessionStorage.removeItem(entry.id);
  }
  deleteItemFromLocalStorage(entry.id);
}}

}
```
