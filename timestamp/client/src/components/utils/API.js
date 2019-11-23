import axios from "axios";

export default {

  clock_In: function() {
    return axios.post("/clockin");
  },
  
  clock_Out: function() {
    return axios.post("/clockout");
  },
  
  in_Surance: function() {
    return axios.post("/insurance");
  },
  
  log_Out: function() {
    return axios.get("/logOut");
  },
  Me_etings: function() {
    return axios.post("/meeting");
  },
  pay_Stub: function() {
    return axios.post("/paystub");
  },
  signIn: function() {
    return axios.post("/signIn");
  },
  sign_Up: function() {
    return axios.post("/signup");
  },
  Verify: function() {
    return axios.get("/verify");
  },


 sendEmail:function (type, callback) {
  let URL = "/api/email/email"     // email api route sent to client

    axios.post(URL, {                    
           email: type.email,               
           message: type.message
    }).then(function (response) {

    callback(response)
    }).catch(function (error) {
      console.log(error)
    })
  }


// sendEmail:function(name, email, message) {
//   fetch('/api/email/email', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email,
//       message: message
//     })
//   })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log('here is the response: ', res);
//   })
//   .catch((err) => {
//     console.error('here is the error: ', err);
//   })
//  }
  
};

