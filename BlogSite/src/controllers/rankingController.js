const rankingModel = require("../models/rankingModel");

async function getRankings(req, res) {
    try {
        const top3 = await rankingModel.top3Melhores();
        const top10 = await rankingModel.top10Melhores();
        res.json({ top3, top10 });
    } catch (error) {
        console.error("Error while fetching rankings:", error);
        res.status(500).json({ error: "Error while fetching rankings." });
    }
}

async function getUserPoints(req, res) {
    try {
        const userId = req.params.userId;
        const maxPoints = await rankingModel.getUserMaxPoints(userId);
        const lastAttemptPoints = await rankingModel.getUserLastAttemptPoints(userId);
        res.json({ maxPoints, lastAttemptPoints });
    } catch (error) {
        console.error("Error while fetching user points:", error);
        res.status(500).json({ error: "Error while fetching user points." });
    }
}

module.exports = { getRankings, getUserPoints };
