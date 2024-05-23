// quizController.js

const quizModel = require("../models/quizModel");

async function submitQuiz(req, res) {
  try {
    const { idUsuario, quizId, score } = req.body;

    // Chame a função do modelo para inserir a pontuação do quiz
    const result = await quizModel.submitQuiz(idUsuario, quizId, score);

    res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao inserir pontuação do quiz:", error);
    res.status(500).json({ error: "Erro ao inserir pontuação do quiz." });
  }
}

module.exports = { submitQuiz };
