const jobSeekerRoutes = require ('./jobSeekerRoutes');
const loginRoutes = require("./login");
const signupRoutes = require("./signup");

const constructorMethod = app => {
    app.use("/applicant", jobSeekerRoutes);
    app.use("/signup", signupRoutes);
    app.use("/", loginRoutes);
    app.use("*", (req, res) => {
        return res.redirect("/");
    });
  };

module.exports = constructorMethod;