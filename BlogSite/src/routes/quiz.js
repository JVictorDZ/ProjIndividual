const express = require("express");
const router = express.Router();
const db = require("../database/config");

// Função para lidar com a submissão do quiz
const submitQuiz = async (req, res) => {
  try {
    const { idUsuario, quizId, score } = req.body;

    // Inserir os dados na tabela Tentativa
    const query = `
      INSERT INTO Tentativa (fkUsuario, fkQuiz, pontos) 
      VALUES (${idUsuario}, ?, ${score})
    `;
    await db.query(query, [idUsuario, quizId, score]);

    res
      .status(201)
      .json({ message: "Pontuação do quiz inserida com sucesso." });
  } catch (error) {
    console.error("Erro ao inserir pontuação do quiz:", error);
    res.status(500).json({ error: "Erro ao inserir pontuação do quiz." });
  }
};

// Rota para lidar com a submissão do quiz
router.post("/submit", submitQuiz);

module.exports = router;
