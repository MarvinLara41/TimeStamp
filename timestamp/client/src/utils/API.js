import axios from "axios";
// import { on } from "cluster";

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
    
    let URL = "/api/signIn/account/signIn"     // change to sign in

    axios.post(URL, {                   //Robert 
      email: type.email,               //login route
      password: type.password
    }).then(function (response) {

callback(response)

    }).catch(function (error) {
      console.log(error)
    })
  },



  // userInfo:function (callback) {

  // },


  meeting: function (type,callback) {

    // const storage = localStorage.getItem("token")

    const URL = "/api/meeting/meeting";
    axios.post(URL, {                                 //Robert 
    // token:storage,
    event:type.event,
    user1:type.user1,
    user2:type.user2,
    event_date:type.event_date
  }).then(function (response) {

    console.log("meeting",response)

    callback(response)
    }).catch(function (error) {
    console.log(error)
    })
        
},



userInfo: function (callback) {

let URL = "/api/users/users"

const token = localStorage.getItem("token")

console.log("token1111",token)



    axios.post(URL, {                                 //Robert 
    token_1:token
  }).then(function (response) {

    console.log("meeting",response.data)

    callback(response.data)
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