const db = require("../database/config");

async function top3Melhores() {
    try {
        const query = `
            SELECT usuario.nome, tentativa.pontos, usuario.idUsuario
            FROM Tentativa 
            JOIN usuario ON tentativa.fkUsuario = usuario.idUsuario
            ORDER BY tentativa.pontos DESC
            LIMIT 3;
        `;
        const results = await db.executar(query);
        return results;
    } catch (error) {
        console.error("Erro ao buscar os top 3 melhores:", error);
        throw error;
    }
}

async function top10Melhores() {
    try {
        const query = `
        SELECT usuario.nome, tentativa.pontos ,usuario.idUsuario
        FROM Tentativa 
        JOIN usuario ON tentativa.fkUsuario = usuario.idUsuario
        ORDER BY tentativa.pontos DESC
        LIMIT 10;
        `;
        const results = await db.executar(query);
        return results;
    } catch (error) {
        console.error("erro ao buscar os top 3 melhores:", error);
        throw error;
    }
}

async function getUserMaxPoints(userId) {
    try {
        const query = `
            SELECT MAX(tentativa.pontos) AS maxPoints
            FROM Tentativa 
            WHERE fkUsuario = ${userId};
        `;
        const results = await db.executar(query);
        return results[0];
    } catch (error) {
        console.error("Erro ao buscar os pontos máximos do usuário:", error);
        throw error;
    }
}

async function getUserLastAttemptPoints(userId) {
    try {
        const query = `
            SELECT tentativa.pontos
            FROM Tentativa 
            WHERE fkUsuario = ${userId}
            ORDER BY tentativa.idTentativa DESC
            LIMIT 1;
        `;
        const results = await db.executar(query);
        return results[0];
    } catch (error) {
        console.error("Erro ao buscar os pontos da última tentativa do usuário:", error);
        throw error;
    }
}

module.exports = { top3Melhores, top10Melhores, getUserMaxPoints, getUserLastAttemptPoints };
