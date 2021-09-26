import express from "express";

import { getAllUsers } from "../controllers/users.js";
import { getUserById } from "../controllers/users.js";
import { createUser } from "../controllers/users.js";
import { updateUser } from "../controllers/users.js";
import { deleteUser } from "../controllers/users.js";

const router = express.Router();

/** 
 * @swagger
 * /api/v1/users:
 *  get:
 *    description: Get all users
 *    responses:
 *      200:
 *        description: A successful response
*/
router.get("/users", getAllUsers);

// GET /users/:id -> get user by id.
router.get("/users/:id", getUserById);

// POST /users -> create a new user.
router.post("/users", createUser);

// PUT /users/:id -> update user by id.
router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;
