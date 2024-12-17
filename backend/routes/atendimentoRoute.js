const { Router } = require("express");
const router = Router();
const atendimentoController = require("../controllers/atendimentoController");

router.get("/atendimentos", (req, res) => {
    const listaAtendimentos = atendimentoController.buscar();
    listaAtendimentos
        .then(atendimentos => res.status(200).json(atendimentos))
        .catch(error => res.status(400).json(error.message));
});

router.post("/atendimentos", (req, res) => {
    const novoAtendimento = req.body;
    const atendimento = atendimentoController.criar(novoAtendimento);
    atendimento
        .then(atendimentoCriado => res.status(200).json(atendimentoCriado))
        .catch(error => res.status(400).json(error.message));
});

router.put("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    const atendimentoAtualizado = req.body;
    const atendimento = atendimentoController.atualizar(atendimentoAtualizado, id);
    atendimento
        .then(resultaAtendimentoAtualizado => res.status(200).json(resultaAtendimentoAtualizado))
        .catch(error => res.status(400).json(error.message));
});

router.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    const resposta = atendimentoController.delete(id);
    resposta
        .then(result => res.status(200).json({ message: "Atendimento deletado com sucesso", result }))
        .catch(error => res.status(400).json({ message: "Erro ao deletar atendimento", error: error.message }));
});

module.exports = router;