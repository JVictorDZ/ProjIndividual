const rankingModel = require("../models/rankingModel");

async function getRankings(req, res) {
    try {
        const top3 = await rankingModel.top3Melhores();
        const top10 = await rankingModel.top10Melhores();
        res.json({ top3, top10 });
    } catch (error) {
        console.error("Ocorreu erro no fetch dos rankings:", error);
        res.status(500).json({ error: "Ocorreu erro no fetch do ranking." });
    }
}

async function getUserPoints(req, res) {
    try {
        const userId = req.params.userId;
        const maxPoints = await rankingModel.getUserMaxPoints(userId);
        const lastAttemptPoints = await rankingModel.getUserLastAttemptPoints(userId);
        res.json({ maxPoints, lastAttemptPoints });
    } catch (error) {
        console.error("Ocorreu erro no fetch dos pontos:", error);
        res.status(500).json({ error: "Ocorreu erro no fetch dos pontos." });
    }
}
async function getUserPointsHistory(req, res) {
    try {
        const userId = req.params.userId;
        const pointsHistory = await rankingModel.getUserPointsHistory(userId);
        res.json(pointsHistory);
    } catch (error) {
        console.error("Ocorreu erro no fetch do histórico de pontos:", error);
        res.status(500).json({ error: "Ocorreu erro no fetch do histórico de pontos." });
    }
}

async function getAllUserPoints(req, res) {
    try {
        const allPoints = await rankingModel.getAllUserPoints();
        res.json(allPoints);
    } catch (error) {
        console.error("Ocorreu erro no fetch dos pontos de todos os usuários:", error);
        res.status(500).json({ error: "Ocorreu erro no fetch dos pontos de todos os usuários." });
    }
}

module.exports = { getRankings, getUserPoints, getUserPointsHistory, getAllUserPoints };




