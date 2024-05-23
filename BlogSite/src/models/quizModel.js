const db = require("../database/config");

async function submitQuiz(idUsuario, quizId, score) {
  try {
    const query = `
      INSERT INTO Tentativa (fkUsuario, fkQuiz, pontos) 
      VALUES (?, ?, ?)
    `;
    await db.query(query, [idUsuario, quizId, score]);

    return { message: "Pontuação do quiz inserida com sucesso." };
  } catch (error) {
    console.error("Erro ao inserir pontuação do quiz:", error);
    throw error;
  }
}

module.exports = { submitQuiz };
