var connectionIp = "10.18.18.22";
angular.module('starter.services', ['ngCookies'])

.factory('Auth', function($cookieStore) {
        var _user = $cookieStore.get('starter.user');
        

        var setUser = function(user) {
            _user = user;
            $cookieStore.put('starter.user', _user);
        }  
        var url = {
           
            PortfolioUrl: 'http://'+connectionIp+'/portfolio/',
            ContactAPIUrl:'http://'+connectionIp+'/TEContactManagementAPI/',
            LeadApi:'http://'+connectionIp+'/lead/',
            TEEmailApi: 'http://'+connectionIp+'/TEEmailAPI/',
            FugueLangingPage: 'http://'+connectionIp+'/fuguelanding/index.html',
            TESAPPurchaseService: 'http://'+connectionIp+'/sappurchaseservice/podocuments/',
            TELeadManagementAPI:'http://'+connectionIp+'/TELeadManagementAPI/',
            ProjectLogoUrlUrl:'http://'+connectionIp+'/portfolio_ProductionTest/'
           
        };
         function getUrl(host) {
            return url[host];
        }
        return{
            setUser: setUser,
            getUrl: getUrl,
            isLoggedIn: function () {
                return _user ?  true : false;
            },
            getUser: function() {
                return _user;
            },
            logout: function() {
                $cookieStore.remove('starter.user');
                _user = null;
            }
        }
})
.factory('commonUtilService', function($scope) {
        
        

        return{
          
             getUrl: getUrl
            
        }

    })
.filter('currencyDecimalFormat',currencyDecimalFormat)
function currencyDecimalFormat() {
        return function(input) {
          
             var dec="";
             var request="";
              request=String(input);
             
         if (request.indexOf('.') > -1) {
            
             dec=request.split('.')[1];
             if(dec.length>2)
             {
                
                dec=dec.substr(0, 2);
             }
         }
          
            var number = parseFloat(request)
           
            if (number == request) {
                //var n1, n3 = angular.copy(Math.round(number));
                var n1, n3 = angular.copy(number);
                 
               //n3=parseFloat(n3);
               n3 = n3 + '' || '';
               
              console.log(n3);  
                n1 = n3.split('.');
               
                        
                n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                if(dec!="00" && dec!="000" && dec!="")
                {
                      n1=n1+"."+dec;
                   
                }
                else
                {
                    //alert(dec);
                    n1=n1;
                }
               
                return (n1);
            }
        }
    }