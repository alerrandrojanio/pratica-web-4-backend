const Carro = require("../models/carro");
const CarroService = require("../services/carro-service");
var carroService = new CarroService();

exports.get = (req, res) => {
  res.json(carroService.getAll());
};

exports.getById = (req, res) => {
  res.json(carroService.getById(req.params.id));
};

exports.post = (req, res) => {
  res.json(carroService.add(new Carro(req.body.nome, req.body.preco)));
};

exports.put = (req, res) => {
  res.json(
    carroService.update(
      req.params.id,
      new Carro(req.body.nome, req.body.preco)
    )
  );
};

exports.delete = (req, res) => {
  res.json(carroService.delete(req.params.id));
};