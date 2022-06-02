import express from "express";

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *    tags:
 *      - users
 *    summary: find all users.
 *    description: find all users.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: A successful response
 */
router.get("/users", getAllUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *  get:
 *    tags:
 *      - users
 *    summary: find user by it's id.
 *    description: find user by it's id.
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the user id.
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: A successful response
 */
router.get("/users/:id", getUserById);

/**
 * @swagger
 * /api/v1/users:
 *  post:
 *    tags:
 *      - users
 *    summary: create new user.
 *    description: create new user.
 *    consumes:
 *      - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: userRequest
 *        description: user input data.
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              example: Salem Nabeel Salem
 *            age:
 *              type: integer
 *              example: 25
 *            address:
 *              type: string
 *              example: Aden City
 *    responses:
 *      200:
 *        description: A successful response
 */
router.post("/users", createUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *  put:
 *    tags:
 *      - users
 *    summary: update user information by it's id.
 *    description: update user information by it's id.
 *    consumes:
 *      - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the user id.
 *        required: true
 *        type: string
 *      - in: body
 *        name: userRequest
 *        description: user input data.
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              example: Salem Nabeel Salem
 *            age:
 *              type: integer
 *              example: 25
 *            address:
 *              type: string
 *              example: Aden City
 *    responses:
 *      200:
 *        description: A successful response
 */
router.put("/users/:id", updateUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *  delete:
 *    tags:
 *      - users
 *    summary: delete user by it's id.
 *    description: delete user by it's id.
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the user id.
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: A successful response
 */
router.delete("/users/:id", deleteUser);

export default router;
