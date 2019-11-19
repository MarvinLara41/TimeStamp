import axios from "axios";

export default {
  // Gets all books
  clock_In: function() {
    return axios.post("/api/account/clockin");
  },
  // Gets the book with the given id
  clock_Out: function() {
    return axios.post("/api/account/clockout");
  },
  // Deletes the book with the given id
  in_Surance: function() {
    return axios.post("/api/account/insurance");
  },
  // Saves a book to the database
  log_Out: function() {
    return axios.get("/logOut");
  },
  Me_etings: function() {
    return axios.post("/meeting");
  },
  pay_Stub: function() {
    return axios.post("/paystub");
  },
  signIn:function (type, callback) {
    

    // console.log("type",type.password )

    let URL = "/api/signIn/account/signIn"     // change to sign in

    axios.post(URL, {                   //Robert 
      email: type.email,               //login route
      password: type.password
    }).then(function (response) {

    // console.log(response)
  



callback(response)

    }).catch(function (error) {
      console.log(error)
    })

    
  },
  sign_Up: function() {
    return axios.post("/signup");
  },
  Verify: function() {
    return axios.get("/verify");
  },
};