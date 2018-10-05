const userController = require("../controllers").user;
const pagesController = require("../controllers").pages;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );

  // Users
  app.get("/api/users/", userController.get);
  app.get("/api/users/:id", userController.getById);
  // Sign up
  app.post("/api/signup", userController.create);
  // Login
  app.post("/api/login", userController.login);
  // Logout
  app.delete("/api/logout", userController.logout);
  // Current User
  app.get("/api/currentUser", userController.currentUser);
  // Pages
  app.get("/api/pages", pagesController.get);
  app.get("/api/currentPage/:id", pagesController.currentPage);
  app.post("/api/newPage", pagesController.create);
  app.put("/api/editPage/:id", pagesController.update);
  app.delete("/api/deletePage/:id", pagesController.delete);
};
