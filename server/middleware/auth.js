const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    // เข้าถึง header               ชือที่ส่งมา
    const token = req.headers["authtoken"];

    if (!token) {
      return res.status(401).send("no tokenn authoriztion denied");
    }
    //decode token
    const decoded = jwt.verify(token, "jwtSecret");

    console.log("midleware", decoded);
    req.user = decoded.user 

    //ไปทำ controllerต่อ
    next()


  } catch (err) {
    console.log(err);
    res.status(401).send("Token Invalid!!");
  }
};
