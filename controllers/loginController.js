import Login from "../model/login.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default class loginController {

    static async login(req, res) {
        const { Username, Password } = req.body;

        // Cari username
        const user = await Login.findOne({
            where: { Username }
        });

         if (!user) {
            return res.status(404).json({
                message: "Username tidak ditemukan"
            });
        }

        const valid = await bcrypt.compare(Password, user.Password);

        if (!valid) {
            return res.status(401).json({
                message: "Password salah"
            });
        }

        const token = jwt.sign(
            { Username: user.Username},
            "secret", //nanti bagian ini tarok di env, bahaya ini
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login berhasil",
            token
        });

    }

    static async store(req, res) {
    //Note: ini untuk buat akun, hanya bisa data yang sudah ada NIM nya pada table mahasiswa, karena ini foreign key
       const {Username, Password, NIM} = req.body;

        const hashedPassword = await bcrypt.hash(Password, 10);

        const user = await Login.create({Username, Password: hashedPassword, NIM});
        res.json(user);
    }

    static async me(req, res){
        const Username  = req.Username ;
        const user = await Login.findOne({where: {Username : Username }})
        res.json(user);
    }

}