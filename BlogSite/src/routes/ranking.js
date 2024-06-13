const express = require("express");
const router = express.Router();
const rankingController = require("../controllers/rankingController");

router.get("/getRankings", function (req, res) {
    rankingController.getRankings(req, res);
});

router.get('/ranking/getUserPoints/:userId', rankingController.getUserPoints);

router.get('/getUserPointsHistory/:userId', rankingController.getUserPointsHistory);

router.get('/getAllUserPoints', rankingController.getAllUserPoints);




module.exports = router;
