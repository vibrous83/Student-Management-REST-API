import connection from "./connection.js";
import {DataTypes} from "sequelize";

const User = connection.define('mahasiswa', {
    NIM: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    Nama: {
        type: DataTypes.STRING(40)
    },
    Angkatan: {
        type: DataTypes.INTEGER
    },
    Jenis_Kelamin: {
        type: DataTypes.CHAR(1)
    },
    IPK: {
        type: DataTypes.DOUBLE
    }
}, 
{
    tableName: 'mahasiswa',
    timestamps: false
})

export default User;