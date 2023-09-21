const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.data]);
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.id);
    case "EDIT_POST":
      return state.map((post) =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            name: action.data.newName,
            email: action.data.newEmail,
            phone: action.data.newPhone,
            address: action.data.newAddress,
            streetAddress: action.data.newStreetAddress,
            city: action.data.newCity,
            state: action.data.newState,
            country: action.data.newCountry,
            pinCode:action.data.newPincode,
            gender: action.data.newGender,
            editing: !post.editing
          };
        } else return post;
      });
    case "LOAD_POSTS":
      return action.posts; // Replace the state with the loaded posts
    default:
      return state;
  }
};

export default postReducer;
