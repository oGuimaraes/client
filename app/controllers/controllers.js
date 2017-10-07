app.controller('ListCtrl', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
});

app.controller('EditCtrl', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
});