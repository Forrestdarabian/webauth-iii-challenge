const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());

const authRouter = require("./auth/auth-router.js");
server.use("/auth", authRouter);
const usersRouter = require("./users/users-router.js");
server.use("/users", usersRouter);

const port = 8100;
server.listen(port, () => console.log(`Server on ${port}`));
