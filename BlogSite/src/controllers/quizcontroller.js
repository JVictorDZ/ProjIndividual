const rankingModel = require("../models/rankingModel");

async function getRankings(req, res) {
    try {
        const top3 = await rankingModel.top3Melhores();
        const top10 = await rankingModel.top10Melhores();
        
        res.json({ top3, top10 });
    } catch (error) {
        console.error("Error while fetching rankings:", error);
        res.status(500).json({ error: "Erro ao buscar rankings." });
    }
}

module.exports = { getRankings };
