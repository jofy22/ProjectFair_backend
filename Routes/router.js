// 1
const express = require("express");

// 2 create router
const router = express.Router();

// 3 import userControl
const userController = require("../Controllers/userController");
const jwtMiddleware = require("../Middlewares/jwtMiddleWare");
const projectController = require("../Controllers/projectController");
const multerMiddleware = require("../Middlewares/multerMiddleware");

// 4 route
router.post("/api/register", userController.registerAPI);

router.post("/api/login", userController.LoginAPI);

router.post(
  "/api/addProject",
  jwtMiddleware,
  multerMiddleware.single("projectImg"),
  projectController.addProjectAPI
);

router.get('/api/getAllUserProject',jwtMiddleware,projectController.getAllUserProject)

router.get('/api/getUserProject',jwtMiddleware,projectController.getUserProject)

router.get('/api/getHomeProject',projectController.getHomeProject)

router.put(
  "/api/editProject/:projectId",
  jwtMiddleware,
  multerMiddleware.single("projectImg"),
  projectController.editProjectAPI
);

router.delete('/api/deleteProject/:projectId',jwtMiddleware,projectController.deleteProjectAPI)



module.exports = router;