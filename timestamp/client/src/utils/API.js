import axios from "axios";

export default {
  signIn: function(type, callback) {
    let URL = "/api/signIn/signIn"; // change to sign in

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

    console.log("api routes", type);
    const URL = "/api/meeting/meeting";

    axios
      .post(URL, {
        //Robert
        // token:storage,
        event_s: type.event,
        user_1: type.user1,
        user_2: type.user2,
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
        token_1: token
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getuserInfoMain: function(callback) {
    let token = localStorage.getItem("userId");

    console.log("userId is in", token);

    let URL = "/api/meeting/meeting";

    axios
      .get(URL)
      .then(function(response) {
        callback(response);
        console.log("get GET ALL METTING");
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  postClocks: function(type, callback) {
    // sets a post clocks to the database
    let token = localStorage.getItem("userId");

    let URL = "/api/clockin/clockin";
    axios
      .post(URL, {
        userId: token,
        punchOut: type
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getClocks: function(callback) {
    let userId1 = localStorage.getItem("userId");

    axios
      .put("/api/clockin/clockin", {
        userId1: userId1
      })
      .then(function(response) {
        console.log("put resquest", response);
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  sendEmail: function(type, callback) {
    let URL = "/api/email/email"; // email api route sent to client
    axios
      .post(URL, {
        email: type.email,
        message: type.event
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  sendEmail: function(type, callback) {
    let URL = "/api/email/email"; // email api route sent to client

    axios
      .post(URL, {
        email: type.email,
        message: type.message
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getPayStub: function(type, callback) {
    let URL = "/api/getPay/getPay";

    axios
      .get(URL, {
        fullName: type.fullName,
        title: type.title,
        hoursWorked: type.hoursWorked,
        payRate: type.payRate,
        payOut: type.payOut,
        date: type.date
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getInsurance: function(type, callback) {
    let URL = "/api/getInsurance/getInsurance";

    axios
      .get(URL, {
        firstName: type.firstName,
        lastName: type.lastName,
        email: type.email,
        insuranceName: type.insuranceName,
        dependecies: type.dependecies,
        insuranceId: type.insuranceId,
        phoneNumber: type.phoneNumber
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
