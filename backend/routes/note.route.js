import express from "express";
const router=express.Router();

import {createNote} from "../controllers/notes.controller.js";

router.post("/add",createNote);

export default router;