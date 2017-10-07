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
        nome: "Italo Jose",
        idade: 15,
        carro: "Chevrolet",
        habilitacao: false
      }
  ]
});