//fungsi: menerima parameter ketiga "next"
import jwt from "jsonwebtoken"

const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token){
        return res.status(401).json({error: "Token tidak ditemukan"});
    }

    try {
        const decoded = jwt.verify(token, "secret"); //nanti bagian ini tarok di env, bahaya ini
        req.Username  = decoded.Username;
        next();
    } 
    catch (error) {
        return res.status(401).json({
            error: "Token tidak valid atau sudah expired"
        });
    }
};

export default authenticate;