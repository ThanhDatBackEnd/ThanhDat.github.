const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("thanhdatbackend", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("kết nối thành công");
  } catch (error) {
    console.error("kết nối không thành công", error);
  }
};

module.exports = connectDB;
