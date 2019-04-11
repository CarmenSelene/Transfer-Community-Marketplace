import axios from "axios";

export default {
  //Search for users based on username
  loginUser: function (usercheck) {
    console.log(usercheck);

    return axios.get("/api/user", {
      params: usercheck
  });
},
  // Gets the posts with the given Category and Location excluding the user's own posts
  getPosts: function (getPost) {
    return axios.get("/api/post",{
      params: getPost
    });
  },

  getUserPosts: function (curruser) {
    console.log("Current user in API getUserPosts is" + curruser);
    return axios.get("/api/post/" + curruser)
  },

  getUserBuys: function (curruser) {
    console.log("Current user in API getUserBuys is" + curruser);
    return axios.get("/api/buy/" + curruser)
  },
  buyPost: function (buyerUpdate) {
    return axios.put("/api/post", buyerUpdate);
  },
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/api/post", postData);
  },
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  }

};

