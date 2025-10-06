import express from 'express';
import { SignupController } from "../controllers/auth.controller.js";
const router=express.Router();


router.post("/signup",SignupController);
export default router;

