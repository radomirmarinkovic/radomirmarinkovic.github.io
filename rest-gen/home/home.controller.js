(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state', '$timeout', '$http'];

    function HomeController ($scope, $state, $timeout, $http) {
        var vm = this;

        var reset = function(){
                    //loaded from template.js
                    $scope.content = TEMPLATE;
        }

        reset();
        
        //entity name that is used in file - to be replaced
        var ENTITY_INIT_NAME = "ENTITY_NAME";

        $scope.entityName="";
        
        $scope.download = function(){
           var filename = $scope.entityName+".java";
           var text = $scope.content;
            // Set up the link
            var link = document.createElement("a");
            link.setAttribute("target","_blank");
            if(Blob !== undefined) {
                var blob = new Blob([text], {type: "text/plain"});
                link.setAttribute("href", URL.createObjectURL(blob));
            } else {
                link.setAttribute("href","data:text/plain," + encodeURIComponent(text));
            }
            link.setAttribute("download",filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        $scope.generate = function(){
            reset();
            //str.split('Microsoft').join("lol");
            $scope.content=$scope.content.split(ENTITY_INIT_NAME).join($scope.entityName);
        }
      


    }
})();