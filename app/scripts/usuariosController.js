var miApp = {
    app: null,
    initAngular: function (api, freshState) {
        miApp.app = angular.module('appControl', []);

        miApp.app.controller('accesoDatosController', ['$scope', function ($scope) {

            $scope.geotabUsers = [];
            $scope.state = freshState;
            $scope.lstaccesoDatos = [];

            $scope.lstDevices = [];
            $scope.lstGrupos = [];


            var calls = [
                ["Get", {
                    typeName: "Device"
                }],
                ["Get", {
                    typeName: "Group"
                }]
            ];

            api.multiCall(calls, function (result) {
                $scope.$apply(function () {
                    $scope.lstDevices = result[0];
                    $scope.lstGrupos = result[1];
                });
            }, function (error) {
                console.log(error.message);
            });

            /*api.call("Get", {
                typeName: "Group"
            }, function (accesoDatos) {
                $scope.$apply(function () {
                    $scope.lstaccesoDatos = accesoDatos[0];
                });

            }, function (error) {
                console.log(error.messaje);
            });*/
        }]);
    }
}