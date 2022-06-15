const express = require("express");
const bodyParse = require("body-parser");
const UsersRouter = express.Router();
const { sequelize, UserModel } = require("../models/users.model");

const jsonParse = bodyParse.json();

//get all users
UsersRouter.get("/", jsonParse, async (req, res) => {
  const users = await UserModel.findAll();
  res.send(users);
});

//get a user
UsersRouter.get("/user", jsonParse, (req, res) => {
  const user = req.body;
  UserModel.findOne({
    where: {
      firstName: `${user.firstName}`,
    },
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//create a user new
UsersRouter.post("/user", jsonParse, (req, res) => {
  const user = req.body;
  UserModel.create({
    username: `${user.username}`,
    email: `${user.email}`,
    password: `${user.password}`,
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//update a user
UsersRouter.put("/user", jsonParse, (req, res) => {
  // http://localhost:8080/users/user?id=1
  const user = req.query;
  const userReq = req.body;
  UserModel.update(
    {
      firstName: `${userReq.firstName}`,
    },
    {
      where: {
        id: `${user.id}`,
      },
    }
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//delete a user
UsersRouter.delete("/user", jsonParse, (req, res) => {
  // http://localhost:8080/users/user?id=1
  const user = req.query;
  UserModel.destroy({
    where: {
      id: `${user.id}`,
    },
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = UsersRouter;
