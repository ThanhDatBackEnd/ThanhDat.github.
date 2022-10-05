import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("------------------");
    console.log(data);
    console.log("------------------");
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("aboutpage.ejs");
};

let postCRUD = (req, res) => {
  console.log(req.body);
  return res.send("gửi lên server");
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  postCRUD: postCRUD,
};
