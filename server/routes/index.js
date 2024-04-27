import express from 'express';
import validation from '../utility/validation.js';
import controller from '../app/controller/index.js';

const router = express.Router();

router.get("/", (req,res) => res.send("API is working"));

// create-user
router.post("/user", validation.createUser, controller.createUser);

// login
router.post("/login", validation.login, controller.loginUser);

// create channel
router.post("/channel", validation.createChannel, controller.createChannel);

// send message
router.post("/message", validation.validateAddMessage, controller.sendMessage);

// search user
router.get("/user", validation.searchUser, controller.searchUser);

// channel list
router.get("/channel", validation.getChannelList , controller.getChannelList);

export default router;