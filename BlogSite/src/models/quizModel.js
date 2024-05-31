const db = require("../database/config");

async function submitQuiz(userId, quizId, score) {
    try {
        const query = `
            INSERT INTO Tentativa (fkUsuario, fkQuiz, pontos)
            VALUES (?, ?, ?);
        `;
        const results = await db.query(query, [userId, quizId, score]);
        return results;
    } catch (error) {
        console.error("Error while submitting quiz score:", error);
        throw error;
    }
}

module.exports = { submitQuiz };
