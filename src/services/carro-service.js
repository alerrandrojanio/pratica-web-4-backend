class CarroService {
  constructor() {
    this.carros = [];
    this.id = 0;
  }
  
  add(carro) {
    this.id++;
    carro.id = this.id;
    this.carros.push(carro);
  }
  
  getAll() {
    return this.carros;
  }
  
  getById(id) {
    return this.carros.find((carro) => carro.id == id);
  }

  getByMarca(marca) {
    this.carros = this.carros.filter(function (c) {
        return c.marca == marca;
    });
  }
  
  update(id, carro) {
    this.carros.forEach(function (c) {
      if (id && id == c.id) {
        for (var i in carro) {
          c[i] = carro[i];
        }
      }
    });
  }
  
  delete(id) {
    this.products = this.products.filter(function (c) {
      return c.id != id;
    });
  }
}
  
module.exports = CarroService;