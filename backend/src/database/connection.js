const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const UserModel = require("../models/user");

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false, native: false }
);

UserModel(sequelize);

const { User } = sequelize.models;

module.exports = {
    User,
    conn: sequelize
};
