var app = angular.module('visitorApp',[]);

app.controller('controllerLogin',function($scope,$http) 
{  
    $scope.validateUserExistDummy = function ()
    {
        var username = $('#itxtUserName').val();
        var password = $('#ipPsw').val();
    
        if(username == "simon" && password == "123")
        {
            $scope.message = "User "+username+" exist";
        }
        else
        {
            $scope.message = "User "+username+" doesnt exist";
        }
    }
      
    $scope.validateUserExist = function ()
    {
        var username = $('#itxtUserName').val();
        var password = $('#ipPsw').val();
    
       $http({
                url: "http://192.168.1.55/museo/baseDeDatos/UsuarioControlador.php",
                method: "POST",
                data: {
                        'accion': "verificar",
                        'usuario': username,
                        'contrasena': password
                      },
                contentType: 'application/json',
                dataType: 'json',
                headers: {'Content-Type': 'application/json'}
            }).then(function successCallback(response) 
               {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log(response.data);
                    
                    if(response.data == "no_existe")
                    {
                        alert("Invalid username and password");
                    }
                    else 
                    {
                        $('#progress').addClass("mdl-spinner mdl-js-spinner is-active");
                        window.location.href = "home_visitor.html";
                    }
                   
                    
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert("Error requesting service");
            });
    }
    
});