const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should be Medium Coverage", function() {
    const coTest = new CarInsurance([ new Product('Medium Coverage', 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Medium Coverage');
  });

  it("should be Medium Coverage", function() {
    const coTest = new CarInsurance([ new Product('Medium Coverage', 0, 51) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Medium Coverage');
  });

  it("should be Medium Coverage", function() {
    const coTest = new CarInsurance([ new Product('Medium Coverage', 0, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Medium Coverage');
  });

  it("should be Medium Coverage", function() {
    const coTest = new CarInsurance([ new Product('Medium Coverage', -1, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Medium Coverage');
  });

  it("should be Medium Coverage", function() {
    const coTest = new CarInsurance([ new Product('Medium Coverage', -1, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Medium Coverage');
  });

  it("should be Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Full Coverage');
  });

  it("should be Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', 0, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Full Coverage');
  });

  it("should be Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', -1, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Full Coverage');
  });

  it("should be Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', -1, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Full Coverage');
  });

  it("should be Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', 12, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Full Coverage');
  });

  it("should be Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', 7, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Full Coverage');
  });

  it("should be Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', -1, 49) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Full Coverage');
  });

  it("should be Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Full Coverage', 7, 51) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Full Coverage');
  });

  it("should be Low Coverage", function() {
    const coTest = new CarInsurance([ new Product('Low Coverage', 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Low Coverage');
  });

  it("should be Low Coverage", function() {
    const coTest = new CarInsurance([ new Product('Low Coverage', 0, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Low Coverage');
  });

  it("should be Low Coverage", function() {
    const coTest = new CarInsurance([ new Product('Low Coverage', -1, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Low Coverage');
  });

  it("should be Low Coverage", function() {
    const coTest = new CarInsurance([ new Product('Low Coverage', -1, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Low Coverage');
  });

  it("should be Mega Coverage", function() {
    const coTest = new CarInsurance([ new Product('Mega Coverage', 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Mega Coverage');
  });

  it("should be Mega Coverage", function() {
    const coTest = new CarInsurance([ new Product('Mega Coverage', 0, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Mega Coverage');
  });

  it("should be Mega Coverage", function() {
    const coTest = new CarInsurance([ new Product('Mega Coverage', -1, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Mega Coverage');
  });

  it("should be Mega Coverage", function() {
    const coTest = new CarInsurance([ new Product('Mega Coverage', -1, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Mega Coverage');
  });

  it("should be Special Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
  });

  it("should be Special Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 0, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
  });

  it("should be Special Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', -1, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
  });

  it("should be Special Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 12, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
  });

  it("should be Special Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 7, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
  });

  it("should be Special Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 5, 49) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
  });

  it("should be Special Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 10, 49) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
  });

  it("should be Special Full Coverage", function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', -1, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
  });

  it("should be Super Sale", function() {
    const coTest = new CarInsurance([ new Product('Super Sale', 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Super Sale');
  });

  it("should be Super Sale", function() {
    const coTest = new CarInsurance([ new Product('Super Sale', 0, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Super Sale');
  });

  it("should be Super Sale", function() {
    const coTest = new CarInsurance([ new Product('Super Sale', -1, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Super Sale');
  });

  it("should be Super Sale", function() {
    const coTest = new CarInsurance([ new Product('Super Sale', -1, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Super Sale');
  });

  it("should be Super Sale", function() {
    const coTest = new CarInsurance([ new Product('Super Sale', -1, 4) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Super Sale');
  });

  it("should be Super Sale", function() {
    const coTest = new CarInsurance([ new Product('Super Sale', 1, 51) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Super Sale');
  });

  it("should Constructor", function() {
    const coTest = new CarInsurance();
    expect(coTest).is;
  });

});
