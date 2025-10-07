import express from "express";
const router=express.Router();
import middleware from "../middlewares/middleware.js";

import {createNote} from "../controllers/notes.controller.js";

router.post("/add",middleware,createNote);

export default router;