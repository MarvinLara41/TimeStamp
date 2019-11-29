import axios from "axios";

export default {
  // // Gets all books
  // clock_In: function() {
  //   return axios.post("/api/account/clockin");
  // },
  // // Gets the book with the given id
  // clock_Out: function() {
  //   return axios.post("/api/account/clockout");
  // },
  // // Deletes the book with the given id
  // in_Surance: function() {
  //   return axios.post("/api/account/insurance");
  // },
  // // Saves a book to the database
  // log_Out: function() {
  //   return axios.get("/logOut");
  // },
  // Me_etings: function() {
  //   return axios.post("/meeting");
  // },
  // pay_Stub: function() {
  //   return axios.post("/paystub");
  // },ƒ

  signIn: function(type, callback) {
    let URL = "/api/signIn/account/signIn"; // change to sign in

    axios
      .post(URL, {
        //Robert
        email: type.email, //login route
        password: type.password
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  meeting: function(type, callback) {
    // const storage = localStorage.getItem("token")

    const URL = "/api/meeting/meeting";
    axios
      .post(URL, {
        //Robert
        // token:storage,
        event: type.event,
        user1: type.user1,
        user2: type.user2,
        event_date: type.event_date
      })
      .then(function(response) {
        // console.log("meeting",response)

        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  userInfo: function(callback) {
    const token = localStorage.getItem("token");

    console.log("the one", token);
    let URL = "/api/verify/verify";

    axios
      .post(URL, {
        //Robert

        query: token
      })
      .then(function(response) {
        // console.log("meeting",response)

        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  userInfoMain: function(callback) {
    let token = localStorage.getItem("userId");

    console.log("userId is in", token);

    let URL = "/api/users/users";

    axios
      .post(URL, {
        //Robert

        token_1: token
      })
      .then(function(response) {
        //  console.log("main users",response)

        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // sign_Up: function() {
  //   return axios.post("/signup");
  // },
  // Verify: function() {
  //   return axios.get("/verify");
  // }
};
