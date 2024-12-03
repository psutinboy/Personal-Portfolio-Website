const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const projectsRouter = require("./routes/routeProjects");
const workoutProRouter = require("./routes/routeWorkout-pro");
const passwordManagerRouter = require("./routes/routePassword-manager");
const iTravelRouter = require("./routes/routeItravel");
const aboutMeAppRouter = require("./routes/routeAbout-me-app");
const javaCalculatorRouter = require("./routes/routeJava-calculator");
const contactFormRouter = require("./routes/routeContactForm");
const javaAtmRouter = require("./routes/routeJava-atm");

// Use routes
app.use("/projects", projectsRouter);
app.use("/projects/workout-pro", workoutProRouter);
app.use("/projects/password-manager", passwordManagerRouter);
app.use("/projects/itravel", iTravelRouter);
app.use("/projects/about-me-app", aboutMeAppRouter);
app.use("/projects/java-calculator", javaCalculatorRouter);
app.use("/projects/java-atm", javaAtmRouter);
app.use("/contact/form", contactFormRouter);

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "My Personal Website",
    // Add any other data you want to pass to the template
  });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
