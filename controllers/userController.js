import User from "../model/user.js";

export default class userController {
    static async store(req, res) {
        const {NIM, Nama, Angkatan, Jenis_Kelamin, IPK} = req.body;
        const user = await User.create({NIM, Nama, Angkatan, Jenis_Kelamin, IPK});
        res.json(user);
    }
    static async get(req, res) {
        const users = await User.findAll();
        res.json(users);
    }
    static async detail(req, res) {
        const users = await User.findOne({where: {NIM: req.params.NIM}})
        res.json(users)
    }
    static async update(req, res) {        
        const {NIM, Nama, Angkatan, Jenis_Kelamin, IPK} = req.body;
         
        const users = await User.update(
            {NIM, Nama, Angkatan, Jenis_Kelamin, IPK},
            {where: {NIM: req.params.NIM}}
        )
        res.json(users)
    }
    static async delete(req, res) {
        const users = await User.destroy({where: {NIM: req.params.NIM}})
        res.json(users)
    }
}