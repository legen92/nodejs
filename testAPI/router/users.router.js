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
UsersRouter.get("/:id", jsonParse, async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findOne({
      where: {
        id: id,
      },
    });
    if (user === null) {
      return res.status(404).json({ message: "not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    return res.status(500).json({ message: "server got error" });
  }
});

//create a user new, check username, email from client
UsersRouter.post("/", jsonParse, async (req, res) => {
  const userReq = req.body;
  try {
    const userUsername = await UserModel.findOne({
      where: {
        username: userReq.username,
      },
    });
    if (userUsername) {
      return res.status(404).json({ message: "username already exists" });
    } else {
      try {
        const UserEmail = await UserModel.findOne({
          where: {
            email: userReq.email,
          },
        });
        if (UserEmail) {
          return res.status(404).json({ message: "email already exists" });
        } else {
          const userNew = await UserModel.create({
            username: userReq.username,
            email: userReq.email,
            password: userReq.password,
          });
          res.status(201).json("data created successfully");
        }
      } catch (error) {
        return res.status(500).json({ message: "server got error" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "server got error" });
  }
});

//update email from a user
UsersRouter.put("/:id", jsonParse, async (req, res) => {
  // http://localhost:8080/users/user?id=1
  const id = req.params.id;
  const userReq = req.body;
  try {
    const userID = await UserModel.findOne({
      where: {
        id: id,
      },
    });
    if (!userID) {
      return res.status(404).json({ message: "not found data from client" });
    } else {
      try {
        const UserEmail = await UserModel.findOne({
          where: {
            email: userReq.email,
          },
        });
        if (UserEmail) {
          return res.status(404).json({ message: "email already exists" });
        } else {
          await UserModel.update(
            {
              email: userReq.email,
            },
            {
              where: {
                email: userID.email,
              },
            }
          );
          res.status(202).json("Data update successfully");
        }
      } catch (error) {
        return res.status(500).json({ message: "server got error" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "server got error" });
  }
});

//delete a user
UsersRouter.delete("/:id", jsonParse,async (req, res) => {
  // http://localhost:8080/users/user?id=1
  const id = req.params.id;
  try {
    const userID = await UserModel.findOne({
      where: {
        id: id,
      },
    });
    if (!userID) {
      return res.status(404).json({ message: "not found data from client" });
    } else {
      await UserModel.destroy(
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json("Data delete successfully");
    }
  } catch (error) {
    return res.status(500).json({ message: "server got error" });
  }
  
});

module.exports = UsersRouter;
