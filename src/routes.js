const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const CoursesController = require("./controllers/CoursesController");
const ExperiencesController = require("./controllers/ExperiencesController");
// const ContactsControllers = require("./controllers/ContactsControllers");

const routes = express.Router();

// Courses
routes.get("/courses", CoursesController.list);
routes.post("/courses", CoursesController.create);

// Experiences
routes.get("/experiences", ExperiencesController.list);
routes.post("/experiences", ExperiencesController.create);

// Contacts
// routes.get("/contacts", ContactsControllers.list);
// routes.post("/contacts", ContactsControllers.create);

module.exports = routes;
