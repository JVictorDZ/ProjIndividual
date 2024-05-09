var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

// Route to handle user registration (POST request)
router.post("/cadastrar", function (req, res) {
  usuarioController.cadastrar(req, res);
});

module.exports = router;
