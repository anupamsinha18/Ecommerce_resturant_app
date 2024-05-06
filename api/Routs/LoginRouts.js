// Routs/LoginRouts.js

import express from "express"
import {login, logout} from "../Contex/LoginContex.js"

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);

export default router;
