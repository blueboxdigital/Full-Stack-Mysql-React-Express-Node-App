const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");

const User = require("../models").User;
module.exports = {
  get(req, res) {
    return User
      .findAll({
      attributes: ["first", "last", "id", "email", "password"]
    })
      .then(user => res.status(200).send(user))
      .catch(error => {
        res
          .status(400)
          .send(error);
      });
  },

  getById(req, res) {
    return User
      .findById(req.params.id, {
      attributes: ["first", "last", "id", "email", "password"]
    })
      .then(user => res.status(200).send(user))
      .catch(error => {
        res
          .status(400)
          .send(error);
      });
  },

  // Sign up controller
  async create(req, res) {
    // hash the password provided by the user with bcrypt so that we are never
    // storing plain text passwords. This is crucial for keeping your db clean of
    // sensitive data
    const hash = bcrypt.hashSync(req.body.password, 10);

    try {
      // create a new user with the password hash from bcrypt
      let user = await User.create(Object.assign(req.body, {
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        password: hash
      }));

      // data will be an object with the user and it's authToken
      let data = await user.authorize();

      // send back the new user and auth token to the client { user, authToken }
      return res.json(data);
    } catch (err) {
      return res
        .status(400)
        .send(err);
    }
  },

  // Login controller
  async login(req, res) {
    const {email, password} = req.body;

    // if the email / password is missing, we use status code 400 indicating a bad
    // request was made and send back a message
    if (!email || !password) {
      return res
        .status(400)
        .send("Request missing email or password param");
    }

    try {
      // we will cover the user authenticate method in the next section
      let user = await User.authenticate(email, password);
      return (res.cookie("auth", user.authToken.token, {maxAge: 864000000}), res.send("Check your cookies. One should be in there now"));
      //return res.json(user.authToken.token);
    } catch (err) {
      return res
        .status(400)
        .send(`something went wrong, here is the error: ${err}`);
    }
  },

  // Logout controller
  async logout(req, res) {
    const {
      user,
      cookies: {
        auth: authToken
      }
    } = req;

    if (user && authToken) {
      await req
        .user
        .logout(authToken);
      return res
        .status(204)
        .send();
    }

    return res
      .status(400)
      .send({
        errors: [
          {
            message: "not authenticated"
          }
        ]
      });
  },

  // Current user controller
  async currentUser(req, res) {
    if (req.user) {
      return res.send(req.user);
    }
    res
      .status(404)
      .send({
        errors: [
          {
            message: "missing auth token"
          }
        ]
      });
  }
};
