import express from "express"
import userController from "./controllers/userController.js";
import loginController from "./controllers/loginController.js";
import authenticate from "./middleware/authenticate.js";
import axios from "axios";

const router = express.Router();

// User dan login
router.get("/user", userController.get);
router.get("/user/:NIM", userController.detail);
router.post("/user", userController.store);
router.put("/user/:NIM", userController.update);
router.delete("/user/:NIM", userController.delete);
router.post("/login", loginController.login);
router.get("/login/me", authenticate, loginController.me);
router.post("/register", loginController.store);

//belajar axious
router.get("/fakeproduct", async (req, res) => {
    const response = await axios.get("https://fakestoreapi.com/products/")
    return res.json(response.data)
})

export default router;