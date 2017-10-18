app.controller('ctrl', function($scope) {
   
  $scope.list = [{
      id: 1,
      nome: "Otavio Guimaraes",
      idade: 22,
      carro: "Fiat",
      habilitacao: true
      }, {
      id: 2,
      nome: "Mateus Costa",
      idade: 25,
      carro: "Ford",
      habilitacao: true
      }, {
        id: 3,
        nome: "Mike Chane",
        idade: 18,
        carro: "Porsche",
        habilitacao: false
      }, {
        id: 4,
        nome: "Louis Richard",
        idade: 26,
        carro: "Dodge",
        habilitacao: true
      }, {
        id: 5,
        nome: "Brad Tony",
        idade: 35,
        carro: "Hyundai",
        habilitacao: false
      }
  ]
});