const Carro = require("../models/carro");
const CarroService = require("../services/carro-service");
var carroService = new CarroService();

exports.get = (req, res) => {
  res.json(carroService.getAll());
};

exports.getById = (req, res) => {
  res.json(carroService.getById(req.params.id));
};

exports.getByMarca = (req, res) =>{
  res.json(carroService.getByMarca(req.query.marca));
};

exports.getQtd = (req, res) =>{
  res.json(carroService.getQtd(req.query.qtd));
};

exports.post = (req, res) => {
  res.json(carroService.add(new Carro(req.body.nome, req.body.marca, req.body.anoFabricacao, req.body.anoModelo, req.body.dataVenda)));
};

exports.put = (req, res) => {
  res.json(
    carroService.update(
      req.params.id,
      new Carro(req.body.nome, req.body.marca, req.body.anoFabricacao, req.body.anoModelo, req.body.dataVenda)
    )
  );
};

exports.delete = (req, res) => {
  res.json(carroService.delete(req.params.id));
};
