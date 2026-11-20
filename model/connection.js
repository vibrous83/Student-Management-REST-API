import { Sequelize } from "sequelize";

const connection = new Sequelize("kuliah", "root", "vibrous", {
    host: "localhost",
    dialect: "mysql"
});

export default connection;