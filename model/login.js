import connection from "./connection.js";
import {DataTypes} from "sequelize";

const Login = connection.define('login', {
    Username: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    NIM: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    }
}, {
    tableName: 'login',
    timestamps: false
});

export default Login;