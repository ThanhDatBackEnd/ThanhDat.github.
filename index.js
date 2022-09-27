var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.listen(3000);

//cấu hình ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/trangchu", function (req, res) {
  res.render("trangchu"); //khai báo tempplate sử dụng ejs
});

app.get("/chitiet", function (req, res) {
  res.render("chitiet", { hoten: "Dương Thành Đạt" });
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get("/hello", function (req, res) {
  var i = req.params.id;
  res.send("Đây là phương thức get");
});
app.post("/hello", urlencodedParser, function (req, res) {
  var u = req.body.user;
  var p = req.body.pass;
  res.send("Username: " + u + " Password: " + p);
});

app.get("/tintuc/:id", function (req, res) {
  var i = req.params.id; //lấy dữ liệu dạng get và địa chỉ url dùng req.params
  res.send("server nhan duoc id= " + i);
});
