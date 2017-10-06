
angular.module('starter.controllers', ['ionic', 'intlpnIonic', 'ngCordova'])


//Here you can declear service and use this value any controoler
.service('dataService', function($scope, $http) {
 //do something
})

//Factory for multiple controller
 .factory('GestOnlyLeadIdByFactory', function($http) {
  return {

    simplePostRequest: function(data) {
      return $http.post('http://192.168.51.248/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter', {pageno: "1", pagepercount: "10"});
    }
  }
})

//Factory for sending value portfolio project view folder
 .factory('SendOnlyProjectIdByFactory', function($http) {
  return {

    simplePostRequest1: function(data) {
      return $http.post('http://192.168.51.248/portfolio/api/TEProjectAPI/GetAllTEProjects', {});
    }
  }
})
 .factory('commonServices', function($http,Auth,$ionicLoading) {

    var PortfolioAPI=Auth.getUrl('PortfolioUrl');
    var ContactAPI=Auth.getUrl('ContactAPIUrl');
    var LeadAPI=Auth.getUrl('LeadApi');
    var PuplicPortfolioAPI='http://192.168.51.248/portfolio/';


  var urlItemMapper = { 
                getprojectList: [PortfolioAPI + 'api/TEProjectAPI/GetProjectDataDashBoard', 'post'],
                getprojectDetails: [PortfolioAPI + 'api/TEProjectAPI/GetProjectInfoByProjectIDNew', 'post'],
                getTowers: [PortfolioAPI + 'api/TETowerMasterAPI/GetAllTETowersDetailsByProjectID', 'post'],
                getTowerswithPagination: [PortfolioAPI + 'api/TETowerMasterAPI/GetTowerMasterDataByProjectID_Pagination', 'post'],
                getProducts: [PortfolioAPI + 'api/TESubProductDetailAPI/GetTESubProductDetailByProjectID_Pagination', 'post'],
                getPricebook: [PortfolioAPI + 'api/TEPriceBookMasterAPI/GetPriceBookByProdSpecID', 'post'],
                getTandC: [PortfolioAPI + 'api/TETermsANDConditionAPI/GetTETermsANDConditionByProjectID_Pagination', 'post'],
                getFactsheets: [PortfolioAPI + 'api/TEProjectDetailAPI/GetTEProjectDetailByProjectID', 'post'],
                getSalesplan: [PortfolioAPI + 'api/TESalesPlanandTargetsAPI/GetSalesPlanTargetsByProjectId_Pagination', 'post'],
                getAllTaxWithTowers: [PortfolioAPI + 'api/TETaxDetailAPI/GetTowerNamesWithTaxBook', 'post'],
                getTaxDetails: [PortfolioAPI + 'api/TETaxDetailAPI/GetTaxBookPortFolio', 'post'],
                getUnits: [PortfolioAPI + 'api/TEUnitsAPI/GetAllTEUnitsByProjectID_Pagination', 'post'],
                getSchedules: [PortfolioAPI + 'api/TEOrderPaymentScheduleAPI/GetAllScheduleMasterByProjectID_Pagenation', 'post'],
                getBankDetails: [PortfolioAPI + 'api/TEBankDetailAPI/GetAllTEBankDetailByProjectID_Pagination', 'post'],
                getLayouts: [PortfolioAPI + 'api/TEDocumentAPI/GetDocumentsByObjectandKeyId', 'post'],
                getCarparks: [PortfolioAPI + 'api/TEProjectCarParkAPI/GetAllTEProjectCarParksByProjectID_Pagination', 'post'],
                getDefaultCarpark: [PortfolioAPI + 'api/TEDefaultCarParkAPI/GetAllTEDefaultCarPark_Pagination', 'post'],
                GetCarparkInventory: [PortfolioAPI + 'api/TECarParkInventoryAPI/GetAllTECarParkInventory_Pagination', 'post'],
                getMilestones:[PortfolioAPI + 'api/TEOrderPaymentScheduleAPI/GetByScheduleMasterID', 'post'],
                getUnitsByTower:[PortfolioAPI + 'api/TEUnitsAPI/GetAllTEUnitsByTowerID_Pagination', 'post'],
                getPickListDetails:[PortfolioAPI + 'api/TEPickListItemItemAPI/GetPickListByNameNew', 'post'],
                getChildPickListDetails:[PortfolioAPI + 'api/TEPickListItemItemAPI/GetAllTEPickListItemsByParentID', 'post'],
                GetAllTEProjects:[PortfolioAPI + 'api/TEProjectAPI/GetAllTEProjects', 'post'],
                GetProducts:[PortfolioAPI + 'api/TESubProductDetailAPI/GetTESubProductDetailByProjectID', 'post'],
                getSpecificationList:[PortfolioAPI + 'api/TESpecificationMasterAPI/GetAllTESpecificationMasters', 'post'],
                getSalesConsultants:[PortfolioAPI + 'api/TEUsersRoleAPI/GetUsersRoleByRoleName', 'post'],
                CreateContact:[ContactAPI + 'api/TEContactProfile/Post', 'post'],
                SaveLead:[LeadAPI + 'api/TELeadAPI/SaveLeadInEnquiry', 'post'],
                UpdateProspect:[LeadAPI + 'api/TELeadAPI/UpdateLeadData', 'post'],
                AutoAllocateLead:[LeadAPI + 'api/TELeadAPI/AutoAllocateLead', 'post'],
                AssignLead:[LeadAPI + 'api/TELeadAPI/AssignLead', 'post'],
                PaymentScheduleApprovals:[PortfolioAPI + 'api/ApprovalCheckAPI/PaymentScheduleApprovalTransactions', 'post'],
                PaymentScheduleApprovalProcessing:[PortfolioAPI + 'api/TEOrderPaymentScheduleAPI/ApprovalProcessing', 'post'],
                PaymentScheduleRejectProcessing:[PortfolioAPI + 'api/TEOrderPaymentScheduleAPI/RejectProcessing', 'post'],
                PricebookApprovalList:[PortfolioAPI + 'api/ApprovalCheckAPI/PriceBookApprovalTransactions', 'post'],
                PricebookApprovalProcessing:[PortfolioAPI + 'api/TEPriceBookMasterAPI/ApprovalProcessing', 'post'],
                PricebookRejectProcessing:[PortfolioAPI + 'api/TEPriceBookMasterAPI/RejectProcessing', 'post'],
                GetPricebookById:[PortfolioAPI + 'api/TEPriceBookMasterAPI/GetByPriceBookID', 'post'],
                GetOfferApprovalList:[PortfolioAPI + 'api/ApprovalCheckAPI/OffersApprovalTransactions', 'post'],
                GetOfferApprovalDetails:[PortfolioAPI + 'api/TEOfferAPI/GetTotalDetailsByOfferId', 'post'],
                GetTopLeads:[LeadAPI + 'api/DashBoardAPI/GetTopLeadsByTempDepth', 'post'],
                GetPipelines:[PortfolioAPI + 'api/TEMobileCallAPI/GetLeadsDataForPipeLine', 'post'],
                GetUpcomingFollowups:[LeadAPI + 'api/DashBoardAPI/GetUpcomingFollowups', 'post'],
                GetUpcomingExpiry:[LeadAPI + 'api/DashBoardAPI/GetUpComingExpiryLeads', 'post'],
                GetLeadStageAndCount:[LeadAPI + 'api/TELeadAPI/GetLeadStageAndCount', 'post'],
                getInventoryTowers:[PortfolioAPI + 'api/TEProjectAPI/GetProjectDataDashBoardByTowers', 'post'],
                GetLeadsByStatus:[LeadAPI + 'api/TELeadAPI/GetAllTELeadDashboardDefaultFilter', 'post'],
                GetLeadDataById:[LeadAPI + 'api/TELeadAPI/GetByTELeadIDWithData', 'post'],
                UpdateLeadTemprature:[LeadAPI + 'api/TELeadAPI/UpdateTELeadTemp', 'post'],
                UpdateContact:[ContactAPI + 'api/TEContactProfile/Put', 'post'],
                
            }
  function callServices(api, json) {
            var url = urlItemMapper[api][0];
            if (urlItemMapper[api][1].toLowerCase() === 'get') {
                if (angular.isDefined(json)) {
                    var request = "";
                    url += '?';
                    $window._.forIn(json, function(value, key) {
                        request += key + "=" + value + "&";
                    });
                    url += request.substring(0, request.length - 1);
                }
            }
            return $http({
                method: urlItemMapper[api][1],
                url: url,
                dataType: 'json',
                data: json,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }).then(function(response) {

                
                return response.data;
            }, function(response) {
                return response.data;
            });
        }

        function callApprovalServices(api, json,loginid)
        {

          var url = urlItemMapper[api][0];
            if (urlItemMapper[api][1].toLowerCase() === 'get') {
                if (angular.isDefined(json)) {
                    var request = "";
                    url += '?';
                    $window._.forIn(json, function(value, key) {
                        request += key + "=" + value + "&";
                    });
                    url += request.substring(0, request.length - 1);
                }
            }
            return $http({
                method: urlItemMapper[api][1],
                url: url,
                dataType: 'json',
                data: json,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'authuser': loginid
                }

            }).then(function(response) {

                
                return response.data;
            }, function(response) {
                return response.data;
            });
        }
        function LoadingShow(){

                   $ionicLoading.show({
                           content: 'Loading',
                          animation: 'fade-in',
                          showBackdrop: true,
                          maxWidth: 200,
                          showDelay: 0
                           
                         }).then(function(){
                          
                            console.log("The loading indicator is now displayed");
                         });
                }

                function LoadingHide(){

                  $ionicLoading.hide().then(function(){
                           console.log("The loading indicator is now hidden");
                        });
                }
  return {

    callServices: callServices,
    callApprovalServices:callApprovalServices,
    LoadingShow:LoadingShow,
    LoadingHide:LoadingHide

  }
})

.controller("MpinCtrl", function($ionicPlatform, $cordovaPinDialog) {
  console.log("MPIN");
    var correctPassword = "1337"; 
    // $ionicPlatform.ready(function() {
    //     $cordovaPinDialog.prompt('Some message here').then(function(result) {
    //         if(result.input1 === correctPassword) {
    //             alert("The correct password was entered");
    //         } else {
    //             alert("Incorrect password enetered");
    //         }
    //     }, function (error) {
    //         console.error(error);
    //     });
    // });
 
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})



.controller('PlaylistCtrl', function($scope, $stateParams, Auth, $http, $timeout, $window, $location) {
   $scope.doRefresh = function() {
   console.log('Refreshing!');
   $timeout( function() {
      $window.location.reload(true)
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);  
  };   
})

.controller('MyCtrl', function($scope) {
  $scope.groups = [];
  for (var i=0; i<1; i++) {
    $scope.groups[i] = {
      name: i,
      items: [],
      show: false
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };


  //something ia testing
  $scope.groups = [];
  for (var i=0; i<1; i++) {
    $scope.groups[i] = {
      name: i,
      items: [],
      show: false
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };

})


//adding collapsable panel in ionview
.controller('CollapsablePanel', function($scope, $stateParams) {

  var stores = ['Pipe Line'];
  var subStores = ['Today', 'Amit', ''];
  $scope.groups = [];
  for (var i=0; i<stores.length; i++) {
    $scope.groups.push({
        name: stores[i],
        items: [],
        show: false
      });
    for (var j=0; j<subStores.length; j++) {
      $scope.groups[i].items.push(subStores[j]);
    }
  }

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

})


.controller('CollapsablePanel1', function($scope, $stateParams, $http) {
  //adding node here!
  var stores = ['Manjusir'];
  var subStores = ['Amit', 'Manju sir'];
  $scope.groups = [];
  for (var i=0; i<stores.length; i++) {
    $scope.groups.push({
        name: stores[i],
        items: [],
        show: false
      });
    for (var j=0; j<subStores.length; j++) {
      $scope.groups[i].items.push(subStores[j]);
    }
  }

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

})

//Show Hide div
 .controller('ShowHideCtrl', function ($scope) {
            //This will hide the DIV by default.
            $scope.IsVisible = false;
            $scope.IsVisible1 = false;


            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.IsVisible ? false : true;
            $scope.IsVisible1 = false;
            }

            $scope.ShowHide1 = function () {
                //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible1 = $scope.IsVisible1 ? false : true;
             $scope.IsVisible = false;
            }

            $scope.ShowHideProfile = function () {
                //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible1 = $scope.IsVisible1 ? false : true;
             $scope.IsVisible = false;
            };
})

//getting Te lead stage all data
.controller('GetLeadStageAndCount', function($scope, $http, $state, $rootScope, $cordovaCalendar,commonServices) {
  $scope.data = {
    isLoading: false
   };
   
  var date = new Date();
  $scope.TodaysDate =  date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + 
  ('0' + date.getDate()).slice(-2);
  var nextDay = new Date(date);
  nextDay.setDate(date.getDate()+6);
  $scope.SevenDays =   nextDay.getFullYear() + '-' + ('0' + (nextDay.getMonth() + 1)).slice(-2) + '-' + ('0' + nextDay.getDate()).slice(-2);
   
  $scope.Topleadpage_number=1;
  $scope.pagepercount=10;

  $scope.followuppage_number=1;
  $scope.expiryppage_number=1;

  $scope.TopLeads=[];
  $scope.UpcomingFolloups=[];
  $scope.UpcomingExpiries=[];
  $scope.GetLeadStageAndCount = function(){
    var json = {};
   

    commonServices.callApprovalServices("GetLeadStageAndCount", json,"3375").then(
                function(response) {
                   
                  $scope.Stages = response.result;
                 
                }
            );  
  } 

    $scope.GetTopLeads = function(){
   
    

      var json = {
                   Temperature: 3,
                   Weightage:6,
                   page_number:  $scope.Topleadpage_number,
                   pagepercount: $scope.pagepercount
                    };
   commonServices.callApprovalServices("GetTopLeads", json,"3375").then(
                function(response) {
                   if(response.result.length>0)
                   {
                    $scope.TopLeads =$scope.TopLeads.concat(response.result);
                    $scope.Topleadpage_number=$scope.Topleadpage_number+1;
                   }
                   else
                   {

                   }
                   
                 
                }
            );  


  }

 
   $scope.GetPipelineForToday = function(){
   
    

      var json = {
                   FromDate: $scope.TodaysDate,
                   ToDate:$scope.TodaysDate
                  
                    };
   commonServices.callApprovalServices("GetPipelines", json,"3375").then(
                function(response) {
                   
                   $scope.TodayPipelines = response.result;
                 
                }
            );  


  }
  $scope.GetPipelineForWeek = function(){
   
    

      var json = {
                   FromDate: $scope.TodaysDate,
                   ToDate:$scope.SevenDays
                    };
   commonServices.callApprovalServices("GetPipelines", json,"3375").then(
                function(response) {
                   
                   $scope.WeekPipelines = response.result;
                 
                }
            );  


  }

   $scope.GetUpcomingFollowups = function(){
   
    

      var json = {
                   page_number: $scope.followuppage_number,
                   pagepercount: $scope.pagepercount
                    };
   commonServices.callApprovalServices("GetUpcomingFollowups", json,"3375").then(
                function(response) {
                   if(response.result.length>0)
                   {
                    $scope.UpcomingFolloups =$scope.UpcomingFolloups.concat(response.result);
                    $scope.Topleadpage_number=$scope.Topleadpage_number+1;
                   }
                   
                 
                }
            );  


  }
   $scope.GetUpcomingExpiry = function(){
   
    

      var json = {
                   page_number: $scope.expiryppage_number,
                   pagepercount: $scope.pagepercount
                    };
   commonServices.callApprovalServices("GetUpcomingExpiry", json,"3375").then(
                function(response) {
                  if(response.result.length>0)
                   {
                    $scope.UpcomingExpiries =$scope.UpcomingExpiries.concat(response.result);
                    $scope.expiryppage_number=$scope.expiryppage_number+1;
                   }
                   
                 
                 
                }
            );  


  }

 $scope.GetTopLeads();
 $scope.GetPipelineForToday();
 $scope.GetPipelineForWeek();
  $scope.GetUpcomingFollowups();
  $scope.GetUpcomingExpiry();

    
  $scope.Leadstage = function(item){
  $rootScope.itemstage = item; 
  //Prospect Lerad stage
  $scope.checkonce = "10";
  $scope.pageno = "1";
  $scope.pagepercount = "10";
  $scope.LeadStageID = item;
  $scope.SearchAll = "";
  $scope.FromDate = "";
  $scope.ToDate = "";
  var json = {checkonce: $scope.checkonce,pageno: $scope.pageno,pagepercount: $scope.pagepercount,LeadStageID:  $scope.LeadStageID,
  SearchAll: $scope.SearchAll,FromDate: "",ToDate:"",};

  $http({
  method: 'POST',
  dataType: 'json',
  url: 'http://192.168.51.251/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
  headers: {'Content-Type': 'application/json; charset=UTF-8'},
  data: json
  }).success (function(response){
      if(response.result.length > 0 ){
        $scope.StageValue = response.result;
        //console.log($scope.StageValue);
        //$state.go('app.portfolio_unit');
      }else{
        //alert("No Data Found!");
        //$state.go('app.lead');
      }
     
     });  
 };
 
  $scope.GetAllLeadData = function(){
    $scope.pageno = "1";
    $scope.pagepercount = "100000";
    $scope.LeadTemperature = "";
    $scope.FromDate = "";
    $scope.ToDate = "";
       var json = {
                    pageno: $scope.pageno,
                    pagepercount: $scope.pagepercount,
                    FromDate: $scope.FromDate,
                    ToDate: $scope.ToDate
                    };
    $http({
    method: 'POST',
    dataType: 'json',
    url: 'http://192.168.51.251/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    data: json
     }).success (function(response){
          $scope.names = response.result;
          $scope.LeadID = response.result[0].LeadID;
          $scope.ContactID = response.result[0].ContactID;
          $scope.Citychoice_Name = response.result[0].Citychoice_Name;
          $scope.fullname = response.result[0].CallName;
          $scope.CreatedOn = response.result[0].CreatedOn;
          $scope.LeadStage = response.result[0].LeadStage;
          $scope.Mobile = response.result[0].Mobile;
          $scope.Email = response.result[0].Email;
          $scope.PreferredProjects = response.result[0].PreferredProjects;
          $scope.ESD = response.result[0].ESD;
          if(response.result[0].ESD == "" || response.result[0].ESD == null){
            $scope.ESD_Final = "Not Available";
          }else{
            var values = response.result[0].ESD.split("T");
            $scope.ESD_Final = values[0];
           // console.log($scope.ESD_Final);
          }
       });
     };
     
 
     
      //Getting upcomming Followups
     $scope.GetallActualVsTarget = function(){   
         var json = {};
         $http({
         method: 'POST',
         dataType: 'json',
         url: ' http://192.168.51.251/portfolio/api/TEMobileCallAPI/GetActualandTargetProjetcs',
         headers: {'Content-Type': 'application/json; charset=UTF-8'},
         data: json
         }).success (function(response){
         if(response.result.length > 0){
         $scope.ActualVsTarget = response.result;
         //console.log("Actual Vs Target"+$scope.ActualVsTarget);
         }else{
           console.log("No Data Found!");
         }
       });
     }
     
 
     
     
     
     $scope.createEvent = function() {
        $cordovaCalendar.createEvent({
            title: 'Space Race',
            location: 'The Moon',
            notes: 'Bring sandwiches',
            startDate: new Date(2016, 0, 15, 18, 30, 0, 0, 0),
            endDate: new Date(2016, 1, 17, 12, 0, 0, 0, 0)
        }).then(function (result) {
            console.log("Event created successfully");
            alert("Event created successfully");
        }, function (err) {
            console.error("There was an error: " + err);
        });
      }
      
     //Take Photo
      $scope.takePhoto = function () {
        console.log("Please run this code to real device then test!");
            document.addEventListener("deviceready", function () {
                var options = {
                    quality: 100,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: false,
                    encodingType: Camera.EncodingType.PNG,
                    targetWidth: 800,
                    targetHeight: 1100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
                $cordovaCamera.getPicture(options).then(function (imageData) {

                    $scope.image = "data:image/png;base64," + imageData;
                }, function (err) {
                    // error
                });
            }, false);
        };
     
     
     $scope.GetAllLeadData();
     $scope.GetLeadStageAndCount();
   
     $scope.GetallActualVsTarget();
    // $scope.GetAllLeadForPipelineForToady();
     //$scope.GetAllLeadForPipelineForSevenDays();
     //$scope.UpcommingOfferExpire();
     //$scope.takePhoto();
 
    
 })
.directive('whenScrollEnds', function() {
     return {
            restrict: "A",
            link: function(scope, element, attrs) {
                var visibleHeight = element.height();
                var threshold = 500;
                  console.log("visibleHeight"+visibleHeight);

                element.scroll(function() {
                    var scrollableHeight = element.prop('scrollHeight');
                    console.log("scrollableHeight"+scrollableHeight);
                    var hiddenContentHeight = scrollableHeight - visibleHeight;
                    if (hiddenContentHeight - element.scrollTop() <= threshold) {
                        // Scroll is almost at the bottom. Loading more rows
                        scope.$apply(attrs.whenScrollEnds);
                    }
                });
            
            }
        };
})
  //get data by lead id
 .controller('GetParticularLeadData', function($scope,$rootScope, $http,  GestOnlyLeadIdByFactory, $stateParams, $state, Auth, $timeout, $window, $location,commonServices) {
  //show list of follow ups type
  
   // console.log("userid "+$rootScope.UserId);
   var vm = this;
    $rootScope.UserId="3375";
  $scope.itemList=[];
  $scope.blisterPackTemplates=[{id:1,name:"Call"},{id:2,name:"Meeting"},{id:3,name:"Task"}, 
  {id:3,name:"Deadline"}, {id:3,name:"Email"}, {id:3,name:"Site Visit"}]
    $scope.projectlogoUrl= Auth.getUrl('ProjectLogoUrlUrl');

  $scope.FirstConnect=function(){
       // $scope.PickListID = "22";
        var json = {
                     PickListName: 'FirstConnect'
                    };

            commonServices.callServices("getPickListDetails", json).then(
                function(response) {
                   
                    $scope.FirstConnectList=[];
                     $scope.ConnectList = response.result;

                      angular.forEach($scope.ConnectList,function(value){
                        if(value.Parentid==null)
                        {
                          console.log(value.Parentid);
                            $scope.FirstConnectList.push(value);
                        }
                         
                      });
                }
            );
        
     }
     
    $scope.GetFirstConnectModeLists = function(FirstConnect){
      LoadingShow();
    $scope.PickListItemID = FirstConnect.PickListItemID;
    var json = {parentID:  $scope.PickListItemID};
    console.log($scope.PickListItemID);

     commonServices.callServices("getChildPickListDetails", json).then(
                function(response) {
                   LoadingHide();
                      $scope.FirstConnectModeValue = response.result;
                }
            );
    
    }
    
     $scope.PrimarySource =function(){
        var json = {
                   PickListName: 'PrimarySource'
                    };
        commonServices.callServices("getPickListDetails", json).then(
                function(response) {
                   
                       $scope.primarysourceList = response.result;
                }
            );


          
     }
  $scope.SecondarySourceLists = function(secondarySource){
    LoadingShow();
    $scope.PickListItemID = secondarySource.PickListItemID;
    var json = {parentID:  $scope.PickListItemID};
    console.log($scope.PickListItemID);

     commonServices.callServices("getChildPickListDetails", json).then(
                function(response) {
                     LoadingHide();
                      $scope.SecondarySourceList = response.result;
                }
            );
    
    }
    $scope.GetAllProject = function(){
    var json = {};

     commonServices.callServices("GetAllTEProjects", json).then(
                function(response) {
                   
                       $scope.projectList = response.result;

                         Auth.setUser({ProjectCode : $scope.ProjectCode,
                         ProjectName : $scope.ProjectColor,
                         ProjectColor:  $scope.ProjectColor,
                         ProjectID: $scope.ProjectID})

                }
            );

   
    }
     
    $scope.GetAllProductList = function(pselitem){
    $scope.ProjectID = pselitem.ProjectID;
    var json = {projectID:  $scope.ProjectID};
    console.log($scope.ProjectID);
    
    commonServices.callServices("GetProducts", json).then(
                function(response) {
                   
                       $scope.SubProduct = response.result;


                }
            );

    
    }
    
    $scope.GetAllSalesList = function(){


       var json = {
                   PickListName: 'SalesEngine'
                    };
        commonServices.callServices("getPickListDetails", json).then(
                function(response) {
                   
                       $scope.SalesEngineList = response.result;
                }
            );


     
    }
    
   $scope.GetAllCityList = function(){

    var json = {
                   PickListName: 'CITYCHOICE'
                    };
        commonServices.callServices("getPickListDetails", json).then(
                function(response) {
                   
                       $scope.CityChoiceList = response.result;
                }
            );


      
    }

  $scope.PrefferedLocationList = function(CityChoice){
    LoadingShow();
    $scope.PickListItemID = CityChoice.PickListItemID;
    var json = {parentID:  $scope.PickListItemID};
    console.log($scope.PickListItemID);

     commonServices.callServices("getChildPickListDetails", json).then(
                function(response) {
                   LoadingHide();
                      $scope.PrefferedLocationList = response.result;
                }
            );
    
    }

    $scope.GetOriginValues = function(location){
    $scope.PickListItemID = location.PickListItemID;
    var json = {parentID:  $scope.PickListItemID};
    console.log($scope.PickListItemID);

     commonServices.callServices("getChildPickListDetails", json).then(
                function(response) {
                   
                      $scope.OriginList = response.result;
                }
            );
    
    }
    
    $scope.GetAllSpecificationList = function(){
        var json = {};
    //console.log($scope.ProjectID);

       commonServices.callServices("getSpecificationList", json).then(
                function(response) {
                   
                         $scope.Specifications = response.result;
                }
            );

    }
    
  $scope.GetAllSalesAssignedList = function(){
        var json = {roleName:"Sales Consultant"};

        commonServices.callServices("getSalesConsultants", json).then(
                function(response) {
                   
                         $scope.AssignedData = response.result;
                }
            );

     // $http({
     // method: 'POST',
     // dataType: 'json',
     // url: 'http://192.168.51.248/portfolio/api/TEUsersRoleAPI/GetUsersRoleByRoleName',
     // headers: {'Content-Type': 'application/json; charset=UTF-8'},
     // data: json
     // }).success (function(response){
     //  if(response.result.length > 0 ){
     //    $scope.AssignedData = response.result;
     //    console.log($scope.AssignedData);
     //  }else{
     //    //alert("No Data Found!");  
     //    //$state.go('app.lead');
     //    //$window.location.reload(true) 
     //     }   
     //});
   }
  
    $scope.FirstConnect();
    $scope.PrimarySource();
    $scope.GetAllProject();
    $scope.GetAllSalesList();
    $scope.GetAllCityList();
    $scope.GetAllSpecificationList();
    $scope.GetAllSalesAssignedList();
    
  $scope.doRefresh = function() {
  console.log('Refreshing!');
  $timeout( function() {
  $window.location.reload(true)
  //Stop the ion-refresher from spinning
  $scope.$broadcast('scroll.refreshComplete');
  }, 1000);  
  };  
  
  $scope.CurrentDate = function(){
    $scope.datevalue = new Date();
  }
  
  $scope.CurrentDate();
  $scope.leaddata={};

   $scope.array = [];
    //list of salutaion 
    $scope.salutaion=[];
    $scope.salutaionItems=[{id:1,name:"Mr"},{id:2,name:"Mrs"},{id:3,name:"Ms"}, 
    {id:3,name:"M/S"}, {id:3,name:"Dr."}]
    //List of Country Code
    $scope.selectedCountry = [];
    $scope.countries = [ {name: "India",dial_code: "+91",code: "IN"},{name: "United States",dial_code: "+1",code: "US"}, {name: "Israel",dial_code: "+972",code: "IL"}, { name: "Afghanistan", dial_code: "+93",code: "AF"}, {name: "Albania",dial_code: "+355",code: "AL"}, {name: "Algeria",dial_code: "+213",code: "DZ"}, {name: "AmericanSamoa",
    dial_code: "+1 684",code: "AS"}, {name: "Andorra",dial_code: "+376",code: "AD"}, {name: "Angola",dial_code: "+244",code: "AO"}, {name: "Anguilla",dial_code: "+1 264", code: "AI"}, {
    name: "Antigua and Barbuda",dial_code: "+1268",code: "AG"}, {name: "Argentina",dial_code: "+54",code: "AR"}, { name: "Armenia",dial_code: "+374",code: "AM"}, {name: "Aruba",
    dial_code: "+297",code: "AW"}, {name: "Australia",dial_code: "+61",code: "AU"}, {name: "Austria",dial_code: "+43",code: "AT"}, {name: "Azerbaijan",dial_code: "+994",code: "AZ"}, {
    name: "Bahamas",dial_code: "+1 242",code: "BS"}, {name: "Bahrain", dial_code: "+973",code: "BH"}, {name: "Bangladesh",dial_code: "+880",code: "BD"}, {name: "Barbados",dial_code: "+1 246",code: "BB"}, {
    name: "Belarus",dial_code: "+375",code: "BY"}, {name: "Belgium",dial_code: "+32",code: "BE"}, {name: "Belize",dial_code: "+501",code: "BZ"}, {name: "Benin",dial_code: "+229",
    code: "BJ"}, {name: "Bermuda",dial_code: "+1 441",code: "BM"}, {name: "Bhutan",dial_code: "+975",code: "BT"}, {name: "Bosnia and Herzegovina",dial_code: "+387", code: "BA"}, {name: "Botswana",
    dial_code: "+267",code: "BW"}, {name: "Brazil",dial_code: "+55",code: "BR"}, { name: "British Indian Ocean Territory",dial_code: "+246",code: "IO"}, {name: "Bulgaria",dial_code: "+359",code: "BG"}, {
    name: "Burkina Faso",dial_code: "+226",code: "BF"}, {name: "Burundi",dial_code: "+257",code: "BI"}, {name: "Cambodia",dial_code: "+855",code: "KH"}, {name: "Cameroon",dial_code: "+237",code: "CM"}, {name: "Canada", dial_code: "+1",
    code: "CA"}, {name: "Cape Verde",dial_code: "+238", code: "CV"}, {name: "Cayman Islands",dial_code: "+ 345",code: "KY"}, {name: "Central African Republic",dial_code: "+236",code: "CF"
    }, { name: "Chad",dial_code: "+235",code: "TD"}, {name: "Chile",dial_code: "+56",code: "CL"}, {name: "China",dial_code: "+86", code: "CN"}, {name: "Christmas Island",dial_code: "+61",
    code: "CX"}, {name: "Colombia",dial_code: "+57",code: "CO"}, {name: "Comoros",dial_code: "+269",code: "KM"}, {name: "Congo",dial_code: "+242", code: "CG"}, {name: "Cook Islands",dial_code: "+682",
    code: "CK"}, {name: "Costa Rica",dial_code: "+506",code: "CR"}, {name: "Croatia",dial_code: "+385",code: "HR"}, {name: "Cuba",dial_code: "+53",code: "CU"}, {name: "Cyprus",
    dial_code: "+537",code: "CY"}, {name: "Czech Republic",dial_code: "+420",code: "CZ"}, {name: "Denmark",dial_code: "+45",code: "DK"}, {name: "Djibouti",dial_code: "+253",code: "DJ"}, {
    name: "Dominica",dial_code: "+1 767",code: "DM"}, {name: "Dominican Republic",dial_code: "+1 849",code: "DO"}, {name: "Ecuador",dial_code: "+593",code: "EC"}, {
    name: "Egypt",dial_code: "+20",code: "EG"}, {name: "El Salvador", dial_code: "+503",code: "SV"}, {name: "Equatorial Guinea",dial_code: "+240",code: "GQ"}, {name: "Eritrea",dial_code: "+291",code: "ER"}, {
    name: "Estonia",dial_code: "+372",code: "EE"}, {name: "Ethiopia",dial_code: "+251",code: "ET"}, {name: "Faroe Islands",dial_code: "+298",code: "FO"}, {name: "Fiji",dial_code: "+679",code: "FJ"}, {name: "Finland",dial_code: "+358",code: "FI"}, {name: "France",dial_code: "+33",
    code: "FR"}, {name: "French Guiana",dial_code: "+594",code: "GF"}, {name: "French Polynesia",dial_code: "+689",code: "PF"}, {name: "Gabon",dial_code: "+241",
    code: "GA"}, {name: "Gambia",dial_code: "+220",code: "GM"}, {name: "Georgia",dial_code: "+995",code: "GE"}, {name: "Germany",dial_code: "+49",code: "DE"}, {name: "Ghana",dial_code: "+233",code: "GH"}, {
    name: "Gibraltar",dial_code: "+350",code: "GI"}, {name: "Greece",dial_code: "+30",code: "GR"}, {name: "Greenland",dial_code: "+299",code: "GL"}, {
    name: "Grenada",dial_code: "+1 473",code: "GD"}, {name: "Guadeloupe",dial_code: "+590",code: "GP"}, {name: "Guam",dial_code: "+1 671",code: "GU"}, {name: "Guatemala",dial_code: "+502",
    code: "GT"}, {name: "Guinea",dial_code: "+224",code: "GN"}, {name: "Guinea-Bissau",dial_code: "+245",code: "GW"}, {name: "Guyana",dial_code: "+595",code: "GY"}, 
    {name: "Haiti",dial_code: "+509",code: "HT"}, {name: "Honduras",dial_code: "+504",code: "HN"}, {name: "Hungary",dial_code: "+36", code: "HU"}, {name: "Iceland",dial_code: "+354",code: "IS"}, 
   {name: "Indonesia",dial_code: "+62", code: "ID"}, {name: "Iraq",dial_code: "+964",code: "IQ"}, {name: "Ireland",dial_code: "+353",code: "IE"}, {name: "Israel",
    dial_code: "+972",code: "IL"}, {name: "Italy",dial_code: "+39",code: "IT"}, {name: "Jamaica",dial_code: "+1 876",code: "JM"}, {name: "Japan",dial_code: "+81",code: "JP"}, {name: "Jordan",
    dial_code: "+962",code: "JO"}, {   name: "Kazakhstan",  dial_code: "+7 7",    code: "KZ"}, {   name: "Kenya",    dial_code: "+254",    code: "KE"},  {
    name: "Kuwait",   dial_code: "+965",    code: "KW"},  {   name: "Madagascar",   dial_code: "+261",   code: "MG"}, {    name: "Malawi",    dial_code: "+265",
    code: "MW"}, {   name: "Malaysia",   dial_code: "+60",    code: "MY"}, {    name: "Maldives",    dial_code: "+960",    code: "MV"}, {    name: "Mali",    dial_code: "+223",   code: "ML"}, {
    name: "Malta",    dial_code: "+356",   code: "MT"}, {   name: "Marshall Islands",    dial_code: "+692",    code: "MH"}, {    name: "Martinique",    dial_code: "+596",    code: "MQ"}, {
    name: "Mauritania",   dial_code: "+222",    code: "MR"}, {    name: "Mauritius",    dial_code: "+230",    code: "MU"}, {    name: "Mayotte",    dial_code: "+262",
    code: "YT"}, {    name: "Mexico",    dial_code: "+52",code: "MX"}, {name: "Monaco",dial_code: "+377",code: "MC"}, {    name: "Mongolia",    dial_code: "+976",    code: "MN"}, {
    name: "Montenegro",   dial_code: "+382",    code: "ME"}, {    name: "Montserrat",    dial_code: "+1664",    code: "MS"}, {    name: "Morocco",    dial_code: "+212",
    code: "MA"}, {    name: "Myanmar",    dial_code: "+95",    code: "MM"}, {    name: "Namibia",    dial_code: "+264",    code: "NA"}, {    name: "Nauru",
    dial_code: "+674",code: "NR"}, {    name: "Nepal",    dial_code: "+977",    code: "NP"}, {    name: "Netherlands",    dial_code: "+31",    code: "NL"}, {
    name: "Netherlands Antilles",    dial_code: "+599",    code: "AN"}, {    name: "New Caledonia",    dial_code: "+687",    code: "NC"}, {   name: "New Zealand",
    dial_code: "+64", code: "NZ"}, {    name: "Nicaragua",    dial_code: "+505",    code: "NI"}, {    name: "Niger",    dial_code: "+227",    code: "NE"}, {
    name: "Nigeria",dial_code: "+234",   code: "NG"}, {    name: "Niue",    dial_code: "+683",    code: "NU"}, {    name: "Norfolk Island",    dial_code: "+672",
    code: "NF"}, {   name: "Northern Mariana Islands" , dial_code: "+1 670",    code: "MP"}, {    name: "Norway",    dial_code: "+47",    code: "NO"}, {
    name: "Oman",   dial_code: "+968",    code: "OM"}, {    name: "Pakistan",    dial_code: "+92",    code: "PK"}, {    name: "Palau",    dial_code: "+680",    code: "PW"}, {    name: "Panama",
    dial_code: "+507",    code: "PA"}, {    name: "Papua New Guinea",    dial_code: "+675",    code: "PG"}, {    name: "Paraguay",    dial_code: "+595",    code: "PY"}, {   name: "Peru",
    dial_code: "+51",   code: "PE"}, {    name: "Philippines",    dial_code: "+63",    code: "PH"}, {    name: "Poland",    dial_code: "+48",    code: "PL"}, {
    name: "Portugal",    dial_code: "+351",    code: "PT"},  {    name: "Qatar",    dial_code: "+974",    code: "QA"}, {    name: "Romania",    dial_code: "+40",    code: "RO"},  {    name: "San Marino",    dial_code: "+378",
    code: "SM"}, {    name: "Saudi Arabia",    dial_code: "+966",    code: "SA"}, {    name: "Senegal",    dial_code: "+221",    code: "SN"}, {
    name: "Serbia",dial_code: "+381",    code: "RS"}, {    name: "Seychelles",    dial_code: "+248",    code: "SC"},  {    name: "Singapore",    dial_code: "+65",
    code: "SG"}, {    name: "Slovakia",    dial_code: "+421",   code: "SK"}, {   name: "Slovenia",   dial_code: "+386",   code: "SI"}, {    name: "South Africa",  dial_code: "+27",
    code: "ZA"},  {    name: "Spain",    dial_code: "+34",    code: "ES"}, {    name: "Sri Lanka",    dial_code: "+94",    code: "LK"}, {    name: "Sudan",    dial_code: "+249",    code: "SD"},  {
    name: "Swaziland" ,dial_code: "+268",    code: "SZ"}, {    name: "Sweden",    dial_code: "+46",    code: "SE"}, {    name: "Switzerland",    dial_code: "+41",
    code: "CH"}, {    name: "Tajikistan",    dial_code: "+992",    code: "TJ"}, {    name: "Thailand",    dial_code: "+66",    code: "TH"},  { name: "Tunisia",    dial_code: "+216",
    code: "TN"}, {    name: "Turkey",    dial_code: "+90",    code: "TR"}, {    name: "Turks and Caicos Islands",    dial_code: "+1 649",    code: "TC"},  {
    name: "Uganda", dial_code: "+256",   code: "UG"}, {   name: "Ukraine",    dial_code: "+380",    code: "UA"}, {    name: "United Arab Emirates",    dial_code: "+971",
    code: "AE"}, {    name: "United Kingdom",    dial_code: "+44",    code: "GB"}, {    name: "Uruguay",    dial_code: "+598",    code: "UY"},  {
    name: "Hong Kong",   dial_code: "+852",    code: "HK"}, {    name: "Iran, Islamic Republic of",    dial_code: "+98",    code: "IR"},  {    name: "Korea, Democratic People's Republic of",
    dial_code: "+850",code: "KP"}, {    name: "Korea, Republic of",    dial_code: "+82",    code: "KR"}, {    name: "Macao",    dial_code: "+853",    code: "MO"},   {name: "Russia", dial_code: "+7",code: "RU"} ]
    

  $scope.contactToEdit = {
                    
                    TEContactEmails: [],
                    TEContactMobiles: [],                  
                    TEContactAddresses: [],
                    TEContactProfessions:[],
                    Loyalty:'Green'
                   
                };


  function GetLeadData(){

                 $scope.LeadID =$stateParams.id;
                var json = { LeadID:  $scope.LeadID };

     commonServices.callServices("GetLeadDataById", json).then(
                function(response) {
                   $scope.names = response.result;
                   $scope.leaddata=response.result;
                    
                   // $scope.contactToEdit.TEContactEmails=$scope.leaddata.emailid_List;
                   // $scope.contactToEdit.TEContactMobiles=$scope.leaddata.mobile_List;
                   // $scope.contactToEdit.TEContactProfessions=$scope.leaddata.profession_List;
                   // $scope.contactToEdit.TEContactAddresses=$scope.leaddata.Address_List;


                        $scope.Salutation = response.result.Salutation;
                        $scope.FirstName = response.result.FirstName;
                        $scope.LastName = response.result.LastName;
                        $scope.Organisation = response.result.Organisation;

                        vm.FormSalutation = response.result.Salutation;
                        vm.FormFirstName = response.result.FirstName;
                        vm.FormLastName = response.result.LastName;
                        

                        if($scope.leaddata.profession_List.length>0)
                        {
                          vm.FormOrganisation = $scope.leaddata.profession_List[0].Organisation;
                          vm.FormProfession = $scope.leaddata.profession_List[0].Profession;
                        }

                        if($scope.leaddata.Address_List.length>0)
                        {
                          vm.FormArea = $scope.leaddata.Address_List[0].Area;
                          vm.FormCity = $scope.leaddata.Address_List[0].City;
                          vm.FormCountry = $scope.leaddata.Address_List[0].Country;
                        }
                         if($scope.leaddata.emailid_List.length>0)
                        {
                          vm.FormEmail = $scope.leaddata.emailid_List[0].Emailid;
                          
                        }
                         if($scope.leaddata.mobile_List.length>0)
                        {
                          vm.FormMobile = $scope.leaddata.mobile_List[0].Mobile;
                          vm.FormContryCode = $scope.leaddata.mobile_List[0].CountryCode;
                          
                        }


                        $scope.House = response.result.House;
                        $scope.City = response.result.City;
                         if(response.result.LeadTemperature == null || response.result.LeadTemperature == ""){
                             //do nothing!
                         }else{
                             $scope.LeadTemperature = response.result.LeadTemperature;
                         }
                          console.log($scope.LeadTemperature);
                         if(response.result.CallName == null || response.result.CallName == ""){
                              $scope.CallName = "Not Available";
                         }else{
                              $scope.CallName = response.result.CallName;
                         }
                         if(response.result.LeadStage == null){
                             $scope.LeadStage = "Not Available";
                         }else{
                             $scope.LeadStage = response.result.LeadStage;
                         }
                         $scope.UnitSize_Name = response.result.UnitSize_Name;
                         
                         if(response.result.UnitSize == null || response.result.UnitSize == ""){
                             $scope.UnitSize = "Not Available";
                         }else{
                             $scope.UnitSize = response.result.UnitSize;
                          }
                         $scope.Specification_Name = response.result.Specification_Name;
                         if(response.result.PreferredProjects_logo == null || response.result.PreferredProjects_logo == ""){
                            $scope.PreferredProjects_logo = "ProjectLogos/After-the-Rain.png";
                         }else{
                           $scope.PreferredProjects_logo = response.result.PreferredProjects_logo;
                         }
                        //  console.log($scope.PreferredProjects_logo);
                         if(response.result.Mobile == null){
                             $scope.Mobile = "Not Available";
                         }else{
                             $scope.Mobile = response.result.Mobile;
                         }
                         if(response.result.Email == null){
                             $scope.Email = "Not Available";
                         }else{
                             $scope.Email = response.result.Email;
                         }
                         if(response.result.FirstConnect_Name == null || response.result.FirstConnect_Name == ""){
                             $scope.FirstConnect_Name = "Not Available";
                         }else{
                             $scope.FirstConnect_Name = response.result.FirstConnect_Name;
                         }
                         $scope.FirstConnectMode_Name = response.result.FirstConnectMode_Name;
                         if(response.result.SecondarySource_Name == "" || response.result.SecondarySource_Name == null){
                             $scope.SecondarySource_Name = "Not Available";
                         }else{
                             $scope.SecondarySource_Name = response.result.SecondarySource_Name;
                         }
                         if(response.result.PrimarySource_Name == null || response.result.PrimarySource_Name == ""){
                              $scope.PrimarySource_Name = "Not Available";
                         }else{
                              $scope.PrimarySource_Name = response.result.PrimarySource_Name;
                         }
                         if(response.result.SalesEngine_Name == null || response.result.SalesEngine_Name == ""){
                             $scope.SalesEngine_Name = "Not Available";
                         }else{
                             $scope.SalesEngine_Name = response.result.SalesEngine_Name;
                         }
                         if(response.result.CreatedOn == "" || response.result.CreatedOn == null){
                           $scope.CreatedOnFinal = "Not Available";
                         }
                         else{
                           $scope.CreatedOn = response.result.CreatedOn;
                           var values =  $scope.CreatedOn.split("T");
                           $scope.CreatedOnFinal = values[0];
                         }
                         if(response.result.ResponseteamMember_Name == "" || response.result.ResponseteamMember_Name == null){
                              $scope.ResponseteamMember_Name = "Not Available";
                         }else{
                              $scope.ResponseteamMember_Name = response.result.ResponseteamMember_Name;
                         }
                         if(response.result.ResponseteamMember_Name == null || response.result.ResponseteamMember_Name == ""){
                              $scope.ResponseDate = "Not Available";
                         }else{
                              // $scope.ResponseTeamMemberAssignedOn = response.result.ResponseTeamMemberAssignedOn;
                              //  var values2 =  $scope.ResponseTeamMemberAssignedOn.split("T");
                              // $scope.ResponseDate = values2[0];
                         }
                         if(response.result.SecondarySource == "" || response.result.SecondarySource == null){
                             $scope.SecondarySource = "Not Available";
                         }else{
                             $scope.SecondarySource = response.result.SecondarySource;
                         }
                         if(response.result.Citychoice_Name == null || response.result.Citychoice_Name == ""){
                              $scope.Citychoice_Name = "Not Available";
                         }else{
                              $scope.Citychoice_Name = response.result.Citychoice_Name;
                         }
                         if(response.result.PreferredLocation_Name == null || response.result.PreferredLocation_Name == ""){
                              $scope.PreferredLocation_Name = "Not Available";
                         }else{
                              $scope.PreferredLocation_Name = response.result.PreferredLocation_Name;
                         }
                         if(response.result.ConnectedTeamMember_Name == "" || response.result.ConnectedTeamMember_Name == null){
                              $scope.ConnectedTeamMember_Name = "Not Available";
                         }else{
                              $scope.ConnectedTeamMember_Name = response.result.ConnectedTeamMember_Name;
                         }
                         if(response.result.ConnectedTeamAssignedDate == null || response.result.ConnectedTeamAssignedDate == ""){
                             $scope.ConnectedResponseDate = "Not Available";
                         }else{
                             $scope.ConnectedTeamAssignedDate = response.result.ConnectedTeamAssignedDate;
                             var values1 = $scope.ConnectedTeamAssignedDate.split("T");
                          $scope.ConnectedResponseDate = values1[0];
                         }
                         if(response.result.CloseTeamMember_Name == null || response.result.CloseTeamMember_Name == ""){
                             $scope.CloseTeamMember_Name = "Not Available";
                         }else{
                             $scope.CloseTeamMember_Name = response.result.CloseTeamMember_Name;
                         }
                         if(response.result.CloseTeamAssignDate == null || response.result.CloseTeamAssignDate == "" || response.result.CloseTeamAssignDate == "null"){
                             $scope.CloseTeamAssignDateFinal = "Not Available";
                         }else{
                           $scope.CloseTeamAssignDate = response.result.CloseTeamAssignDate;
                           var values4 =  $scope.CloseTeamAssignDate.split("T");
                           $scope.CloseTeamAssignDateFinal = values4[0];
                         }
                         if(response.result.AssistedTeamMember_Name == null || response.result.AssistedTeamMember_Name == ""){
                             $scope.AssistedTeamMember_Name = "Not Available";
                         }else{
                             $scope.AssistedTeamMember_Name = response.result.AssistedTeamMember_Name;
                         }       
                         if(response.result.AssistedTeamAssignDate == "" ||  response.result.AssistedTeamAssignDate == null){
                           $scope.AssistedTeamAssignDateFinal = "Not Available";
                         }else{
                           $scope.AssistedTeamAssignDate = response.result.AssistedTeamAssignDate;
                           var values3 =  $scope.AssistedTeamAssignDate.split("T");
                           $scope.AssistedTeamAssignDateFinal = values3[0];
                         }
                         if(response.result.UnitType_Name == null || response.result.UnitType_Name == ""){
                           $scope.UnitType_Name = "Not Available";
                         }else{
                           $scope.UnitType_Name = response.result.UnitType_Name;
                         }
                         if(response.result.CreatedBy_Name = null || response.result.CreatedBy_Name == ""){
                             $scope.CreatedBy_Name = "Not Available";
                         }else{
                             $scope.CreatedBy_Name = response.result.CreatedBy_Name;
                         }
                         if(response.result.CreatedOn == "" || response.result.CreatedOn == null){
                              $scope.CreatedOnFinal = "Not Available";
                         }else{
                             $scope.CreatedOn = response.result.CreatedOn;
                             var values5 =  $scope.CreatedOn.split("T");
                             $scope.CreatedOnFinal = values5[0];
                         }
                         if(response.result.TENotesViewModels.length > 0){
                             $scope.ContextID = response.result.TENotesViewModels[0].ContextID;
                         }
                         $scope.TENotesViewModels = response.result.TENotesViewModels;
                         $scope.TETaskViewModels = response.result.TETaskViewModels;
                         console.log("fOLLOW UP: "+$scope.TETaskViewModels);
                         $scope.LastModifiedOn = response.result.LastModifiedOn;
                         $scope.InterstedProject = response.result.InterstedProject;
                         //2nd response from api
                         if(response.result.TETaskViewModels.length > 0){
                              if(response.result.TETaskViewModels[0].CreatedOn == "" || response.result.TETaskViewModels[0].CreatedOn == null){
                           $scope.createdOnNotesFinal = "Not Available";
                         }else{
                           $scope.createdOnNotes = response.result.TETaskViewModels[0].CreatedOn;
                           var values6 =  $scope.createdOnNotes.split("T");
                           $scope.createdOnNotesFinal = values6[0];
                         }
                            }
                         //$scope.ContactID = response.result.ContactID;
                         $scope.LeadTemperature = response.result.LeadTemperature;  
                         $scope.LeadID = response.result.LeadID; 
                         $scope.ContactID = response.result.ContactID;
                         $rootScope.ContactID = response.result.ContactID;
                         $scope.editorEnabled = false;
                         Auth.setUser({
                            LeadID: $scope.LeadID,
                            ContactID : $scope.ContactID,
                            ContextID : $scope.ContextID,
                            LeadTemperature : $scope.LeadTemperature})
                            console.log("Lead Id : "+$scope.LeadID + "CONTACT ID: "+$scope.ContactID+ "LeadTemperature: "+ $scope.LeadTemperature);
                                 
                  }
            ); 

  


        }
        GetLeadData();
  
  //inserting temparature data
  $scope.teampData = function(name){


     $scope.LeadID =$stateParams.id;
     
  var json = {
    LeadTemperature:name,
    LeadId:$scope.LeadID,
    ContactID:$scope.leaddata.ContactID, 
    LastModifiedBy: $rootScope.UserId, 
    LastModifiedBy_Id:$rootScope.UserId}
    
       commonServices.callServices("UpdateLeadTemprature", json).then(
                function(response) {

                  alert(response.info.errormessage);
                  $window.location.reload(true);
                   
                 
                 
                }
            ); 



  }

$scope.updateLead=function(){

             commonServices.LoadingShow();
          $scope.contactToEdit.Salutation=vm.FormSalutation;
          $scope.contactToEdit.FirstName=vm.FormFirstName;
          $scope.contactToEdit.LastName=vm.FormLastName;
          $scope.contactToEdit.CallName=vm.FormFirstName+" "+vm.FormLastName;

          $scope.contactToEdit.Uniqueid=$scope.leaddata.ContactID;
          
          var Mobiles={
            
            Mobile:vm.FormMobile,
            
        
          };
          if($scope.country)
          {
            Mobiles["CountryCode"]=$scope.country.dial_code;
          }
          if($scope.leaddata.mobile_List.length>0)
          {
            Mobiles["Uniqueid"]=$scope.leaddata.mobile_List[0].Uniqueid;
          }
          

                      
                        
                       
          var Emails={
            
            Emailid:vm.FormEmail,
            
            
          };
          if($scope.leaddata.emailid_List.length>0)
          {
              Emails["Uniqueid"] = $scope.leaddata.emailid_List[0].Uniqueid;
                          
          }
           var TEContactProfessions={
            
            Organisation:vm.organization,
            Profession:vm.designation

            
          };
         
          if($scope.leaddata.profession_List.length>0)
          {
            TEContactProfessions["Uniqueid"] = $scope.leaddata.profession_List[0].Uniqueid;
                         
          }
          console.log("area " +$scope.FormArea);
          var TEContactAddresses={
   
            Area:vm.FormArea,
            City:vm.FormCity,
            Country:vm.FormCountry
          }
            if($scope.leaddata.Address_List.length>0)
            {
              TEContactAddresses["Uniqueid"] = $scope.leaddata.Address_List[0].Uniqueid;
                          
            }

            if(vm.FormMobile)
            {
               $scope.contactToEdit.TEContactMobiles=$scope.contactToEdit.TEContactMobiles.concat(Mobiles);
            }
            if(vm.FormEmail)
            {
              $scope.contactToEdit.TEContactEmails=$scope.contactToEdit.TEContactEmails.concat(Emails);
            }
           
            
            $scope.contactToEdit.TEContactProfessions=$scope.contactToEdit.TEContactProfessions.concat(TEContactProfessions);
            $scope.contactToEdit.TEContactAddresses=$scope.contactToEdit.TEContactAddresses.concat(TEContactAddresses);
            ContactUpdateCall($scope.contactToEdit);
          

}
function ContactUpdateCall(updateContact){

  var json = {
                'ValidationType': 'Green',
                'teContact': updateContact
            };
          commonServices.callServices("UpdateContact", json).then(
                function(response) {
                   commonServices.LoadingHide();
                   
                        alert("Lead updated successfully");
                        

                }
            );
}
$scope.UpdateAssignmentDetails=function(){

      var InterestPrj=[];

          console.log($scope.pselitems);
          angular.forEach($scope.pselitems,function(value){

            console.log(value);
            InterestPrj.push(value.ProjectID);
          });
          //InterestPrj.push($scope.pselitems.ProjectID);
          console.log(InterestPrj);


          var json = {
                'InterestedProjects': ""+InterestPrj+"",
                'LastModifiedBy':  $rootScope.UserId,
                'LastModifiedBy_Id':$rootScope.UserId,
                'LeadID':"",               
                'UnitType':$scope.Productselitem

            };
            if($scope.Specification)
            {
              json["Specification"]= $scope.Specification.SpecificationID;
            }

             if($scope.pselitem)
            {
              json["PreferredProjects"]= $scope.pselitem.ProjectID;
            }


          commonServices.callServices("UpdateContact", json).then(
                function(response) {
                   commonServices.LoadingHide();
                   
                        alert("Lead updated successfully");
                        

                }
            );

}



     
   //get follow up type
   $scope.getValuefromfollowupCtrl=function(item){
   $scope.itemList.push(item.name);
   $scope.selectedItemFollowup = item.name;
   console.log($scope.selectedItemFollowup);
   } 
   
    //Adding Notes Here.
  $scope.addNotes = function(notes){
  //$scope.array.unshift(notes);

   if(notes == null || notes == ""){
       alert("Please write something!");
   }
   else{
   $scope.Notes = notes;
  
      var json = { Notes:$scope.Notes, ContextID: $scope.LeadID,
          ContactID:$scope.ContactID, LastModifiedBy: "3375",
          LastModifiedBy_Id:"3375", IsDeleted:"0"};
          console.log("contact id: "+$scope.ContactID);
          
    $http({
    method: 'POST',
    dataType: 'json',
    url: 'http://192.168.51.248/lead/api/TENotesAPI/SaveTENotesData',
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    data: json
}).success (function(response){
         $scope.value = response.info;
         $scope.errormessage = response.info.errormessage;
         alert($scope.errormessage);
         $window.location.reload(true)
       })
  .error(function(response)
       {
           alert("Failed");
       });
     }
  };   
    
    //Adding Follow Up
   $scope.addfollowUp = function(title, date, duration, data){
      // console.log("LeadId: "+ $scope.LeadID+"Follow up type: "+$scope.selectedItemFollowup+title+duration+data);
       
       $scope.TaskType =  $scope.selectedItemFollowup;
       $scope.Date = "26-09-2016";
       $scope.Time = "10.00";
       $scope.Notes = data;
       $scope.Duration = duration;
       $scope.LocationID = "";
       $scope.TaskID = "";
       $scope.ContextID =  $scope.LeadID;
       $scope.IsDeleted = "0";
       $scope.CreatedBy = "3375";
       $scope.LastModifiedBy = "3375";
       $scope.LastModifiedBy_Id = "3375";
       
      //console.log("TaskType: "+$scope.TaskType + "Date: "+$scope.Date + "Time: "+$scope.Time + "Notes: "+$scope.Notes+
      //"Duration: "+ $scope.Duration+ "LocationID: "+ $scope.LocationID + "TaskID: "+$scope.TaskID + "ContactID: "+ "" +
      //"ContextID: "+$scope.ContextID+ "IsDeleted: "+$scope.IsDeleted+"CreatedBy: "+$scope.CreatedBy+ "LastModifiedBy: "+  $scope.LastModifiedBy+ "LastModifiedBy_Id: "+$scope.LastModifiedBy_Id);


       if(title == null || duration ==null || data == null || title == "" || duration == "" || data == ""){
           alert("Fill The Boxes!");
       }
       else
       {
          var json = { TaskType:$scope.TaskType, Date:$scope.Date, Time: $scope.Time, Notes: $scope.Notes, Duration: $scope.Duration,
          LocationID:"", TaskID:"", ContactID:$scope.ContactID, "ContextID" : $scope.ContextID, LastModifiedBy: $scope.LastModifiedBy,
          LastModifiedBy_Id:$scope.LastModifiedBy_Id, IsDeleted:$scope.IsDeleted, "CreatedBy":$scope.CreatedBy };
          
    $http({
    method: 'POST',
    dataType: 'json',
    url: 'http://192.168.51.248/lead/api/TETaskAPI/SaveTETaskData',
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    data: json
}).success (function(response){
         $scope.value = response.info;
         $scope.errormessage = response.info.errormessage;
         alert($scope.errormessage);
         $window.location.reload(true)
       })
  .error(function(response)
       {
           alert("Failed");
       });
      }
    };

  //cancel followUp
  $scope.cancelFollowUp = function(){
      $window.location.reload(true);     
  };

    GestOnlyLeadIdByFactory.simplePostRequest({
   }).then(function(data) { //success
    //var LeadID =data.data.result[0].LeadID;
    
      })


    //Get Price Term sheet Data
      GestOnlyLeadIdByFactory.simplePostRequest({
      }).then(function(data) { //success
      //var LeadID =data.data.result[0].LeadID;
      $scope.LeadID =$stateParams.id;

      var json = {
                   LeadId:  $scope.LeadID
                    };
                     //console.log("Lead: " +$scope.LeadID);
    $http({
    method: 'POST',
    dataType: 'json',
    url: 'http://192.168.51.248/portfolio/api/TEOfferAPI/GetOfferList',
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    data: json
    }).success (function(response){
         //$scope.OffersList = response.result;
         if(response.result.length >0){
             if(response.result[0].PreOn == "" || response.result[0].PreOn == null){

             }else{
                  $scope.PreOn =  response.result[0].PreOn;
           var values = $scope.PreOn.split("T");
           $scope.value1 = values[0];
           console.log($scope.value1);
             }
         }
         else{
             //do nothing!
         }
         });
      })
      
     $scope.enableEditor = function() {
        $scope.editorEnabled = true;
        $scope.editableProfile = $scope.Salutation;
        $scope.editableFirstName = $scope.FirstName;
        $scope.editableLastName = $scope.LastName;
        $scope.editableTitle = $scope.CallName;
        $scope.editableOrganisation = $scope.Organisation;
        $scope.editableMobile = $scope.Mobile;
        $scope.editableEmail = $scope.Email;
        $scope.editableHouse = $scope.House;
        $scope.editableCity = $scope.City;
        //$scope.editableCity = $scope.City;
        };

    $scope.disableEditor = function() {
        $scope.editorEnabled = false;
         };

    $scope.save = function() {
       //console.log($scope.editableFirstName);
       $scope.editableTitle = $scope.CallName;
       $scope.Title =  Auth.getUser().title;
       $scope.FirstName = $scope.editableFirstName;
       $scope.LastName =  $scope.editableLastName;
       $scope.CallName = $scope.editableTitle;
       $scope.Organisation = $scope.editableOrganisation;
       $scope.Mobile = $scope.editableMobile;
       $scope.Email = $scope.editableEmail;
       $scope.House = $scope.editableHouse;
       $scope.City = $scope.editableCity;
       $scope.disableEditor();
       console.log( $scope.Title + $scope.FirstName +  $scope.LastName +  $scope.Email +  $scope.Mobile +  $scope.Organisation + $scope.House);
             var json = {Uniqueid:"",CallName: $scope.editableTitle, Status: "active", ContactType: "Customer", MiddleName: "", 
              TEOrganisation: "", LastModifiedBy_Id: "3375", LastModifiedBy: "3375", Salutation: $scope.Title, 
              firstname:$scope.FirstName, lastname: $scope.LastName, CountryCode:"91", Mobile: $scope.Mobile, Emailid:
              $scope.Email, organisation:$scope.Organisation, Address: $scope.House, City:  $scope.City};

    $http({
    method: 'POST',
    dataType: 'json',
    url: 'http://192.168.51.248/lead/api/TEContactAPI/UpdateTEContact',
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    data: json
    }).success (function(response){
            $scope.errormessage = response.info.errormessage;
            alert($scope.errormessage);          
         });     
      };   
 })
 
  //Get all products by project ID And Tower ID
 .controller('GetTowerNamesWithTaxBook', function($scope, $http,Auth,$cordovaFileTransfer) {
     
      $scope.ProjectID = Auth.getUser().ProjectID;
      var json = {ProjectID: $scope.ProjectID};
      //console.log("id: "+$scope.ProjectID + "ID: "+$scope.TowerID);
        $http({
        method: 'POST',
        dataType: 'json',
        url: 'http://192.168.51.248/portfolio/api/TEDocumentAPI/GetDocumentsByObjectandKeyId',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        data: json
    }).success (function(response){
             $scope.Layouts = response.result;
             console.log($scope.Layouts);
             });

     
 })
    
//get data using factory portfolio
 .controller('GetParticularProjectID', function($scope, $http,  SendOnlyProjectIdByFactory, $stateParams, $state, Auth, $rootScope,$filter,commonServices,$window,$cordovaFileTransfer,$ionicSlideBoxDelegate,$cordovaCamera) {
   $scope.items = [1];
   $scope.toggleDetail = function($index) {
    //$scope.isVisible = $scope.isVisible == 0 ? true : false;
    $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
   };
  //This will hide the DIV by default.
  $scope.IsVisible = false;
  $scope.ShowHide = function () {
    //If DIV is visible it will be hidden and vice versa.
    $scope.IsVisible = $scope.IsVisible ? false : true;
  }

  $scope.imageUrl11 = 'img/product-r.png';
  $scope.IsVisible = false;
  $scope.page_number = "1";
  $scope.pagepercount = "10";  

  $scope.data = {
    isLoading: false
  };

  $scope.PrjInfo=$stateParams.PrjInfo;
  //changing image of product
  $scope.onTap11 = function() {
      $scope.imageUrl11 = 'img/product.png';
  };
  $scope.onTap11 = function(x) {
  if(x.imageurl == "img/product.png"){
      x.imageurl = 'img/product-r.png';
  }
  else{
      x.imageurl = 'img/product.png';
      }
  };
  GetSubProductCode();
   //Get projects details
   $scope.GetProjectDetails = function(){
 
      //var ProjectID =data.data.result[0].ProjectID;
      $scope.ProjectID =$stateParams.id;
       var json = {projectID: $scope.ProjectID,
                  page_number: "0",
                  pagepercount: "10"};
       commonServices.callServices("getprojectDetails", json).then(
                function(response) {
                   
                    $scope.ProjectDetails = response.basicInfo;
                     $scope.ProjectName = response.basicInfo.ProjectName; 
                     $scope.ProjectCode =  response.basicInfo.ProjectCode;
                     $scope.ProjectShortName = response.basicInfo.ProjectShortName; 
                     $scope.ProjectColor =  response.basicInfo.ProjectColor;
                     $scope.Logo = response.basicInfo.Logo; 
                     $scope.CompanyName =  response.basicInfo.CompanyName;
                     $scope.Logo = response.basicInfo.Logo;
                     $scope.SoldUnits = response.SoldUnits;
                     $scope.ProjectUnit = response.ProjectUnit;
                     $scope.ProjectArea = response.ProjectArea;
                     $scope.SoldArea = response.SoldArea;
                     $scope.SoldValue = response.SoldValue;
                     $scope.ProjectValue = response.ProjectValue
                     $scope.signatory=response.signatory;
                }
            );  
    }

  //Get all Towers details
  $scope.GetallTowersByProjectId = function(){
   
     $scope.ProjectID =$stateParams.id;

      var json = {
                   projectID: $scope.ProjectID
                    };
   commonServices.callServices("getTowers", json).then(
                function(response) {
                   
                   $scope.alltowers = response.result;
                  $scope.TowerName = response.result[0].TowerName;
                  $scope.ProjectID = response.result[0].ProjectID;
                  $scope.TowerID = response.result[0].TowerID;
                  $scope.ProjectName = response.result[0].ProjectName;
                //   console.log("P :"+  $scope.ProjectID+ "T: "+$scope.TowerID);
                //  console.log("result: "+ response.result);
                //  adding in angular cookies
                  Auth.setUser({
                       ProjectID : $scope.ProjectID,
                       TowerID :  $scope.TowerID
                     })
                }
            );  


  }  
  
  //Get all Towers details
  $scope.GetAllTowersDetails = function(){
  

       $scope.ProjectID =$stateParams.id;

     var json = {projectID: $scope.ProjectID,
                  page_number: "1",
                  pagepercount: "10"};
      commonServices.callServices("getTowerswithPagination", json).then(
                function(response) {
                   
                   $scope.TowerDetails = response.result;
                   $scope.TowerID = response.result[0].TowerID;
                   $rootScope.TowerID = response.result[0].TowerID;
                }
            );  
  } 
  $scope.towerInit=function(tower){

    
    tower.showUnits=false;
    GetUnits(tower);
  }
  $scope.towerClick=function(tower){

    
    tower.showUnits=!tower.showUnits;

  }

  function getInventoryTowers()
  {
     $scope.ProjectID =$stateParams.id;

     var json = {projectID: $scope.ProjectID,
                 };
      commonServices.callServices("getInventoryTowers", json).then(
                function(response) {
                   
                   $scope.InventoryTowers = response.result;
                   $scope.TowerID = response.result[0].TowerID;
                   $rootScope.TowerID = response.result[0].TowerID;
                }
            );  
  }
  function GetUnits(tower)
  {
    $scope.ProjectID =$stateParams.id;

      var json = {
                   
                   TowerID:tower.TowerID,                   
                   page_number: 1,
                   pagepercount: 1000,
                    };
    commonServices.callServices("getUnitsByTower", json).then(
                function(response) {
                   
                   tower.Units = response.result;
                   console.log(tower.Units);
                }
            ); 
  }
  
  
  $scope.ProductdeatilsByProjectid = function(){
    $scope.page_number = "0";
    $scope.pagepercount = "10";


      $scope.ProjectID =$stateParams.id;

      var json = {
                   projectID:  $scope.ProjectID,
                   page_number: $scope.page_number,
                   pagepercount: $scope.pagepercount,
                    };
    commonServices.callServices("getProducts", json).then(
                function(response) {
                   
                   $scope.Productdetails = response.result;
                }
            ); 
  } 
  
  
  
//get all price book
  $scope.GetPriceBookByProjectId = function(){

    $scope.page_number = "1";
    $scope.pagepercount = "1000";

   

        $scope.ProjectID =$stateParams.id;

      var json = {
                   ProjectID:  $scope.ProjectID,
                   page_number: $scope.page_number,
                   pagepercount: $scope.pagepercount,
                    };
      commonServices.callServices("getPricebook", json).then(
                function(response) {
                    $scope.Pricebook=[];
                    $scope.pricebookdetails = response.result;
                    $scope.specColor = response.result[0].specColor;
                    $scope.item = response.result[0].priceBookElements;

                      angular.forEach($scope.pricebookdetails, function(prbook) {

                          // var obj = $window._.find($scope.ScheduleMaster, {
                          //           TowerID: value.TowerID,
                          //           ProductID:value.ProductID,
                          //           SpecificationID:value.SpecificationID
                          //      });
                          // console.log(obj);
                          prbook.Milestones=[];
                          prbook.LumpsumValue=0;
                          console.log("prtower"+prbook.TowerId+",prProduct"+prbook.ProductID+"prspec"+prbook.Specification);
                          angular.forEach($scope.ScheduleMaster, function(schedule) {
                                console.log("tower"+schedule.TowerID+",Product"+schedule.ProductID+"spec"+schedule.SpecificationID);
                              if(prbook.TowerId==schedule.TowerID && prbook.ProductID==schedule.ProductID && prbook.Specification == schedule.SpecificationID)
                              {
                                console.log("equal");

                                 var json = {
                                       ScheduleMasterID:  schedule.ScheduleMasterID,
                                       page_number: $scope.page_number,
                                       pagepercount: $scope.pagepercount,
                                  };
                                commonServices.callServices("getMilestones", json).then(
                                   function(response1) {

                                        $scope.Miles=response1.elements;

                                        angular.forEach($scope.Miles, function(mile) {

                                            if(mile.RevenueType=="Lumpsum")
                                            {
                                              prbook.LumpsumValue=prbook.LumpsumValue+mile.RevenueValue;
                                            }
                                            

                                        });
                                          angular.forEach($scope.Miles, function(mile) {

                                            if(prbook.LumpsumValue!=0)
                                            {
                                              if(mile.RevenueType=="Lumpsum")
                                              {
                                                mile.Value=mile.RevenueValue;
                                              }
                                              else
                                              {
                                                mile.Value=prbook.LumpsumValue*(mile.RevenueValue/100);
                                              }
                                                
                                            }
                                            else
                                            {
                                              if(mile.RevenueType=="Lumpsum")
                                              {
                                                mile.Value=mile.RevenueValue;
                                              }
                                              else
                                              {
                                                mile.Value=prbook.TotalValue*(mile.RevenueValue/100);
                                              }
                                              
                                            }
                                            
                                           
                                            
                                            prbook.Milestones= prbook.Milestones.concat(mile);
                                          });

                                       
                                       console.log($scope.pricebookdetails.Milestones);

                                   }
                                );
                              }

                          });
                              $scope.Pricebook= $scope.Pricebook.concat(prbook);
                       });


                }
            ); 
    }
    //get total value by price book(Prixce multi * rate)
    $scope.example = function(item){     
       item.TotalValue=(item.PriceMultiplier)*(item.Rate); 
       //console.log("Total Value: "+ item.TotalValue);
    }
    
    //send sub product code to templates
    function GetSubProductCode (){
   

      $scope.ProjectID =$stateParams.id;
       var json = {
                    page_number:"1",
                    pagepercount: "20",
                    projectID: $scope.ProjectID,
                    ProductID: 0
                    };
      commonServices.callServices("getTandC", json).then(
                function(response) {
                   
                              if(response.result.length > 0 ){
                   $scope.values = response.result;
                   console.log("StanderdTerm&Cond: "+$scope.values);
              }else{
                   console.log("No Data Found! & Terms & Condition");
                  }
                }
            ); 
}

     //Get Unit Of Product By Project Id, Product Id, Toer ID
    $scope.GetUnitDetailsOfProductByToerId = function(){
                  var ProjectProductID = $scope.ProjectProductID;
                  var TowerID_name =   $scope.TowerID;
                  var json = {
                               TowerID: TowerID_name,
                               ProductID: ProjectProductID
                                };
                console.log("TowerIDid: "+TowerID_name + "ProjectProductID: "+ProjectProductID);
                $http({
                method: 'POST',
                dataType: 'json',
                url: 'http://192.168.51.251/portfolio/api/TEUnitsAPI/GetUnitsByTowerProductId',
                headers: {'Content-Type': 'application/json; charset=UTF-8'},
                data: json
            }).success (function(response){
                    if(response.result.length > 0){
                      $scope.UnitDetails = response.result;
                    }else{
                        console.log("No Data Found! ");
                    }                   
              });
        }
        
        
    
  //Get all product By towerId details
  // $scope.GetAllproductsByTowerId = function(){
  //  SendOnlyProjectIdByFactory.simplePostRequest1({
  //  }).then(function(data) { //success
  //     $scope.TowerID = Auth.getUser().TowerID;
  //     var ProjectID =data.data.result[0].ProjectID;
  //     $scope.ProjectID =$stateParams.id;
      
  //    var json = {projectID: $scope.ProjectID,
  //                towerID: $scope.TowerID
  //                };
                 
  //                console.log("Project Id:"+$scope.ProjectID+ "TowerId:"+ $scope.TowerID);
  //   $http({
  //   method: 'POST',
  //   dataType: 'json',
  //   url: 'http://192.168.51.251/portfolio/api/TEProjectAPI/GetProductsByTowerID',
  //   headers: {'Content-Type': 'application/json; charset=UTF-8'},
  //   data: json
  //   }).success (function(response){
  //     $scope.Products = response.result;
  //     $scope.ProjectProductID = response.result[0].ProjectProductID;
  //     $scope.SubProductCode = response.result[0].SubProductCode;
  //     //console.log("ProjectProductID : "+$scope.ProjectProductID);
  //       });
  //    })
  // }  
  
   //Get all tax details by Project ID
  $scope.GetAllTEUnitsByProjectID = function(){

    $scope.ProjectID =$stateParams.id;

     var json = {ProjectID: $scope.ProjectID,
                 page_number:"1",pagepercount:"10000"};
 //    SendOnlyProjectIdByFactory.simplePostRequest1({
 //    }).then(function(data) {

 //      //var ProjectID =data.data.result[0].ProjectID;
 //      $scope.ProjectID =$stateParams.id;

 //     var json = {ProjectID: $scope.ProjectID,
 //                 page_number:"1",pagepercount:"10000"};
 //     $http({
 //     method: 'POST',
 //     dataType: 'json',
 //     url: 'http://192.168.51.251/portfolio/api/TEUnitsAPI/GetAllTEUnitsByProjectID_Pagination',
 //     headers: {'Content-Type': 'application/json; charset=UTF-8'},
 //     data: json
 //     }).success (function(response){
 //      if(response.result.length > 0 ){
 //        $scope.GetAllTEUnits = response.result;
 //        //console.log("GetAllTEUnits: "+ $scope.GetAllTEUnits);
 //     }else{
 //        console.log("No Data Found!!!!!!");
 //        }    
 //     });



	// })

    commonServices.callServices("getUnits", json).then(
                function(response) {
                   
                              if(response.result.length > 0 ){
                   $scope.GetAllTEUnits = response.result;
                   
              }else{
                   
                  }
                }
            ); 
}     


 //Get all tax details by Project ID
 $scope.GetallTaxDetails = function(){

   $scope.ProjectID =$stateParams.id;

       var json = {ProjectID: $scope.ProjectID};


     commonServices.callServices("getAllTaxWithTowers", json).then(
                function(response) {
                   
        if(response.result.length > 0 ){
        $scope.TaxDetails = response.result;
       //console.log("Tax Details: "+$scope.TaxDetails);
          }else{
        console.log("No Tax Details Found!");
        //$state.go('app.home');
        //$window.location.reload(true)
        }   
                }
            ); 

} 
$scope.GetTaxDetails = function(tower){

   $scope.ProjectID =$stateParams.id;

       var json = {
        ProjectID: $scope.ProjectID,
        TowerID:tower.TowerID
      };


     commonServices.callServices("getTaxDetails", json).then(
                function(response) {
                      $scope.TaxElements= response.result.taxbookDetails;
      
                }
            ); 

} 
 //get all Achedule master by project id
 $scope.GetAllScheduleMaster = function(){

  $scope.ProjectID =$stateParams.id;
    $scope.page_number = "1";
    $scope.pagepercount = "100000";
var json = {
                   ProjectId: $scope.ProjectID,
                   page_number: $scope.page_number,
                   pagepercount:$scope.pagepercount
                    };
   // SendOnlyProjectIdByFactory.simplePostRequest1({
   //  }).then(function(data) {
   //  $scope.ProjectID =$stateParams.id;
   //  $scope.page_number = "1";
   //  $scope.pagepercount = "100000";
   //  //console.log("Project ID: "+  $scope.ProjectID);

   //    var json = {
   //                 ProjectId: $scope.ProjectID,
   //                 page_number: $scope.page_number,
   //                 pagepercount:$scope.pagepercount
   //                  };

   //  $http({
   //  method: 'POST',
   //  dataType: 'json',
   //  url: 'http://192.168.51.251/portfolio/api/TEOrderPaymentScheduleAPI/GetAllScheduleMasterByProjectID_Pagenation',
   //  headers: {'Content-Type': 'application/json; charset=UTF-8'},
   //  data: json
   //  }).success (function(response){
   //      $scope.GetAllScheduleMaster = response.result;
   //      console.log( "GetAllScheduleMaster :" +$scope.GetAllScheduleMaster);
   //   });
   // })


    commonServices.callServices("getSchedules", json).then(
                function(response) {
                    $scope.ScheduleMaster = response.result;

                     $scope.GetPriceBookByProjectId();
      
                }
            );  
 } 
 
 //Get all Layouts
  $scope.GetAllLayouts = function(){
     $scope.ProjectID =$stateParams.id;
       var json = {
        objectID: "Portfolio",
                  keyID:$scope.ProjectID, 
                  page_number: "1",
                  pagepercount: "10" };
        //console.log("id: "+$scope.ProjectID + "ID: "+$scope.TowerID);
        /*$http({
        method: 'POST',
        dataType: 'json',
        url: 'http://192.168.51.251/portfolio/api/TEDocumentAPI/GetDocumentsByObjectandKeyId',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        data: json
        }).success (function(response){
             $scope.Layouts = response.result;
             console.log($scope.Layouts);
         });*/

         commonServices.callServices("getLayouts", json).then(
                function(response) {
                    $scope.Layouts = response.result;
      
                }
            ); 
     }
     $scope.FileDownload = function (url) {
 
      // File for download
      //var url = "http://www.gajotres.net/wp-content/uploads/2015/04/logo_radni.png";
       
      // File name only

      try
      {


      var filename = url.split("/").pop();
       
      // Save location
      var targetPath = cordova.file.externalRootDirectory  + filename;
 
      $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
          
          alert('Success');
      }, function (error) {
           alert('error');
      }, function (progress) {
          // PROGRESS HANDLING GOES HERE
      });
       }
       catch(ex)
       {
         alert("error "+ex.message);
       }
  }
   $scope.GetAllCarPArkSumurry = function(){
    $scope.page_number = "1";
    $scope.pagepercount = "10";

    var json = {
                   projectID:  $scope.ProjectID,
                   page_number: $scope.page_number,
                   pagepercount: $scope.pagepercount,
                    };

 
     commonServices.callServices("getCarparks", json).then(
                function(response) {
                    $scope.carparks = response.result;
      
                }
            );  
   }

  $scope.getPicture = function (options) {
  console.log("getPicture");

    try{
      var options = {
        quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
      };
    

        alert("cordovaCamera");
      $cordovaCamera.getPicture(options).then(function(imageData) {
           alert("success");
         $scope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function(err) {
         alert("error"+err);
      });
    }
    catch(ex)
    {
      alert("error"+ex.message);
    }
   };  

     $scope.GetDeafaultCarpark= function(){
    $scope.page_number = "1";
    $scope.pagepercount = "10";

    var json = {
                   ProjectID:  $scope.ProjectID,
                   page_number: $scope.page_number,
                   pagepercount: $scope.pagepercount,
                    };

 
     commonServices.callServices("getDefaultCarpark", json).then(
                function(response) {
                    $scope.Defaultcarparks = response.result;
      
                }
            );  
   }
       $scope.GetCarparkInventory= function(){
    $scope.page_number = "1";
    $scope.pagepercount = "10";

    var json = {
                   projectID:  $scope.ProjectID,
                   page_number: $scope.page_number,
                   pagepercount: $scope.pagepercount,
                    };

 
     commonServices.callServices("GetCarparkInventory", json).then(
                function(response) {
                    $scope.carparkInventory = response.result;
      
                }
            );  
   }


      
      
      $scope.GetProjectDetails();
      $scope.GetAllTowersDetails();
      $scope.ProductdeatilsByProjectid();
      //$scope.GetAllproductsByTowerId(); 
     
      $scope.GetallTaxDetails();
      $scope.GetallTowersByProjectId();
      $scope.GetAllTEUnitsByProjectID();
      getInventoryTowers();
     // $scope.GetSubProductCode();
      $scope.GetAllScheduleMaster();
      $scope.GetAllLayouts();
      $scope.GetAllCarPArkSumurry();
       $scope.GetDeafaultCarpark();
       $scope.GetCarparkInventory();
    
 })

//  //Get Product Id by Tower and project
//  .controller('GetProductIdByProjectId', function($scope, $http,  SendOnlyProjectIdByFactory, $stateParams, $state) {

//     SendOnlyProjectIdByFactory.simplePostRequest1({
//   }).then(function(data) { //success
//       //alert('server responded 2xx'); //success
//       var ProjectID =data.data.result[0].ProjectID;
//       $scope.ProjectID =$stateParams.id;

//       var json = {ProjectID:$scope.ProjectID};
//                 console.log( "Project Id:"+$scope.ProjectID);
//     $http({
//     method: 'POST',
//     dataType: 'json',
//     url: 'http://192.168.51.248/portfolio/api/TEProductAPI/GetProjectProductsByProjectID',
//     headers: {'Content-Type': 'application/json; charset=UTF-8'},
//     data: json
// }).success (function(response){
//          $scope.names = response.result;
//          $scope.ProjectProductID = response.result[0].ProjectProductID;
//          $scope.ProjectID = response.result[0].ProjectID
//          //console.log("ProductId: "+  $scope.ProjectProductID+ "ProjectId: "+  $scope.ProjectID);
//          });
// });



//  })

 //Add coustom popup here
 .controller('MycustomPopup', function($scope, $ionicPopup) {
 // When button is clicked, the popup will be shown...
   $scope.showPopup = function() {
      $scope.data = {}

      // Custom popup
      var myPopup = $ionicPopup.show({
         title: 'Success!',
         scope: $scope,

         buttons: [
            {
               text: 'Ok',
               type: 'button-positive',
                  onTap: function(e) {

                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                          // e.preventDefault();

                     } else {
                        return $scope.data.model;


                     }
                  }
            }
         ]
      });

        myPopup.then(function(res) {
        // console.log('Tapped!', res);
      });
   };

/*---------------------------------------------------------------------------------------------------------------------------------------*/
//adding Phone no dialog
   $scope.showPrompt = function() {

   var promptPopup = $ionicPopup.prompt({

      title: 'Fugue',

      template: 'Please Provide more mobile no, you wish to add.'

   });

   promptPopup.then(function(res) {

      if (res) {

         console.log('Your input is ', res);

      } else {

         console.log('Please enter input');

      }

   });

};

//Adding more email id there
 $scope.showPromptformail = function() {

   var promptPopup = $ionicPopup.prompt({

      title: 'Fugue',

      template: 'Please Provide more email id, you wish to add.'

   });

   promptPopup.then(function(res) {

      if (res) {

         console.log('Your input is ', res);

      } else {

         console.log('Please enter input');

      }

   });

};


})

//add modal window
.controller('ModalWindow', function($scope, $ionicModal, $http) {
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('modal1.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal1 = modal;
  });

  $ionicModal.fromTemplateUrl('modal2.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  $scope.createContact = function(u) {
   //$scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
    $scope.modal.hide();
    console.log("I am here");
  };

})

 //Send Email
.controller('EmailController', function ($scope, $state) {
  $scope.sendEmail = function() {
    //console.log("i am here");
        // 1
        var bodyText = "<h2>Look at this images!</h2>";
        if (null != $scope.images) {
            var images = [];
            var savedImages = $scope.images;
            for (var i = 0; i < savedImages.length; i++) {
                // 2
                images.push("" + $scope.urlForImage(savedImages[i]));
                // 3
                images[i] = images[i].replace('file://', '');
            }

            // 4
            window.plugin.email.open({
                to:          ["saimon@devdactic.com"], // email addresses for TO field
                cc:          Array, // email addresses for CC field
                bcc:         Array, // email addresses for BCC field
                attachments: images, // file paths or base64 data streams
                subject:    "Just some images", // subject of the email
                body:       bodyText, // email body (for HTML, set isHtml to true)
                isHtml:    true, // indicats if the body is HTML or plain text
            }, function () {
                console.log('email view dismissed');
            },
            this);
          }
        }
     })


 //ByfirstConnect
 .controller('ByCampaignCtrl', function($scope, $http) {

   $scope.PickListID = "";
      var json = {
                   PickListID: $scope.PickListID
                    };
    $http({
    method: 'POST',
    dataType: 'json',
    url: 'http://182.18.177.27/lead/api/TELeadAPI/dropTECampaignMaster',
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    data: json
}).success (function(response){
        $scope.controls = response.result;
        console.log($scope.controls);
       });
 })

 //Portfolio integration
 .controller('PortfolioUnitValueArea', function($scope, $http,Auth,commonServices,$state) {  
   $scope.OwnerShipType = "TE";
   $scope.projectlogoUrl= Auth.getUrl('ProjectLogoUrlUrl');
    var json = {OwnerShipType:  $scope.OwnerShipType};
//     $http({
//     method: 'POST',
//     dataType: 'json',
//     url: 'http://192.168.51.251/portfolio/api/TEProjectAPI/GetProjectDataDashBoard',
//     headers: {'Content-Type': 'application/json; charset=UTF-8'},
//     data: json
// }).success (function(response){
//         $scope.value = response.result;
//         $scope.logo = response.result[0].Logo;
//         console.log($scope.value);
//        });


          commonServices.callServices("getprojectList", json).then(
                function(response) {
                   
                    $scope.value = response.result;
                    $scope.logo = response.result[0].Logo;
                }
            );

          $scope.NavigateToProjectDetails=function(Prj){
              console.log(Prj.ProjectID);
              $state.go('app.prtfolio_project_info',{id:Prj.ProjectID,PrjInfo:Prj});

          }
 })

 //validatying phone no
 .controller('Ctrl', function($scope) {

 })

 //phone
 .directive('phone', function(Auth) {
    var PHONE_REGEXP = /^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
    return {
        restrice: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            angular.element(element).bind('blur', function() {
                var Number = this.value;
                if(PHONE_REGEXP.test(Number)) {
                    // Valid input
                    console.log("valid phone number");
                    angular.element(this).next().next().css('display','none');
                    console.log(Number);
                }
           else {
                    // Invalid input
                    alert("Invalid Mobile Number");
                    this.value = null;
                    angular.element(this).next().next().css('display','block');
                }
            });
        }
    }
})

//email implementation
.directive('email',  function(Auth) {
    var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return {
        restrice: 'B',
        require: 'ngModel',
        link: function($scope, element, attrs, ctrl) {
            angular.element(element).bind('blur', function() {
                var value = this.value;
                if(EMAIL_REGEXP.test(value)) {
                    // Valid input
                    angular.element(this).next().next().css('display','none');
                    Auth.setUser({value :value})
                    console.log(value);
                }
           else {
                    // Invalid input
                    alert("Invalid Email");
                    this.value = null;
                    angular.element(this).next().next().css('display','block');
                }
            });
        }
    }
})


//create lead to store data in server [all insersion ctrl is happening here.]
.controller('MyCtrl1', function($scope, $http, $location, $state, $window, Auth, $stateParams, $timeout, $rootScope,commonServices,$ionicLoading) {
  
  $scope.doRefresh = function() {
  console.log('Refreshing!');
  $timeout( function() {
  $window.location.reload(true)
  //Stop the ion-refresher from spinning
  $scope.$broadcast('scroll.refreshComplete');
  }, 500);  
  };  
  
  $scope.CurrentDate = function(){
   $scope.datevalue = new Date();
  }

 
  function LoadingShow(){

     $ionicLoading.show({
             content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
             
           }).then(function(){
            
              console.log("The loading indicator is now displayed");
           });
  }

  function LoadingHide(){

    $ionicLoading.hide().then(function(){
             console.log("The loading indicator is now hidden");
          });
  }

  $scope.FirstConnect=function(){
       // $scope.PickListID = "22";
        var json = {
                     PickListName: 'FirstConnect'
                    };

            commonServices.callServices("getPickListDetails", json).then(
                function(response) {
                   
                    $scope.FirstConnectList=[];
                     $scope.ConnectList = response.result;

                      angular.forEach($scope.ConnectList,function(value){
                        if(value.Parentid==null)
                        {
                          console.log(value.Parentid);
                            $scope.FirstConnectList.push(value);
                        }
                         
                      });
                }
            );
        
     }
     
    $scope.GetFirstConnectModeLists = function(FirstConnect){
      LoadingShow();
    $scope.PickListItemID = FirstConnect.PickListItemID;
    var json = {parentID:  $scope.PickListItemID};
    console.log($scope.PickListItemID);

     commonServices.callServices("getChildPickListDetails", json).then(
                function(response) {
                   LoadingHide();
                      $scope.FirstConnectModeValue = response.result;
                }
            );
    
    }
    
     $scope.PrimarySource =function(){
        var json = {
                   PickListName: 'PrimarySource'
                    };
        commonServices.callServices("getPickListDetails", json).then(
                function(response) {
                   
                       $scope.primarysourceList = response.result;
                }
            );


          
     }
  $scope.SecondarySourceLists = function(secondarySource){
    LoadingShow();
    $scope.PickListItemID = secondarySource.PickListItemID;
    var json = {parentID:  $scope.PickListItemID};
    console.log($scope.PickListItemID);

     commonServices.callServices("getChildPickListDetails", json).then(
                function(response) {
                     LoadingHide();
                      $scope.SecondarySourceList = response.result;
                }
            );
    
    }
    $scope.GetAllProject = function(){
    var json = {};

     commonServices.callServices("GetAllTEProjects", json).then(
                function(response) {
                   
                       $scope.projectList = response.result;

                         Auth.setUser({ProjectCode : $scope.ProjectCode,
                         ProjectName : $scope.ProjectColor,
                         ProjectColor:  $scope.ProjectColor,
                         ProjectID: $scope.ProjectID})

                }
            );

   
    }
     
    $scope.GetAllProductList = function(pselitem){
    $scope.ProjectID = pselitem.ProjectID;
    var json = {projectID:  $scope.ProjectID};
    console.log($scope.ProjectID);
    
    commonServices.callServices("GetProducts", json).then(
                function(response) {
                   
                       $scope.SubProduct = response.result;


                }
            );

    
    }
    
    $scope.GetAllSalesList = function(){


       var json = {
                   PickListName: 'SalesEngine'
                    };
        commonServices.callServices("getPickListDetails", json).then(
                function(response) {
                   
                       $scope.SalesEngineList = response.result;
                }
            );


     
    }
    
   $scope.GetAllCityList = function(){

    var json = {
                   PickListName: 'CITYCHOICE'
                    };
        commonServices.callServices("getPickListDetails", json).then(
                function(response) {
                   
                       $scope.CityChoiceList = response.result;
                }
            );


      
    }

  $scope.PrefferedLocationList = function(CityChoice){
    LoadingShow();
    $scope.PickListItemID = CityChoice.PickListItemID;
    var json = {parentID:  $scope.PickListItemID};
    console.log($scope.PickListItemID);

     commonServices.callServices("getChildPickListDetails", json).then(
                function(response) {
                   LoadingHide();
                      $scope.PrefferedLocationList = response.result;
                }
            );
    
    }

    $scope.GetOriginValues = function(location){
    $scope.PickListItemID = location.PickListItemID;
    var json = {parentID:  $scope.PickListItemID};
    console.log($scope.PickListItemID);

     commonServices.callServices("getChildPickListDetails", json).then(
                function(response) {
                   
                      $scope.OriginList = response.result;
                }
            );
    
    }
    
    $scope.GetAllSpecificationList = function(){
        var json = {};
    //console.log($scope.ProjectID);

       commonServices.callServices("getSpecificationList", json).then(
                function(response) {
                   
                         $scope.Specifications = response.result;
                }
            );

    }
    
  $scope.GetAllSalesAssignedList = function(){
        var json = {roleName:"Sales Consultant"};

        commonServices.callServices("getSalesConsultants", json).then(
                function(response) {
                   
                         $scope.AssignedData = response.result;
                }
            );

     // $http({
     // method: 'POST',
     // dataType: 'json',
     // url: 'http://192.168.51.248/portfolio/api/TEUsersRoleAPI/GetUsersRoleByRoleName',
     // headers: {'Content-Type': 'application/json; charset=UTF-8'},
     // data: json
     // }).success (function(response){
     //  if(response.result.length > 0 ){
     //    $scope.AssignedData = response.result;
     //    console.log($scope.AssignedData);
     //  }else{
     //    //alert("No Data Found!");  
     //    //$state.go('app.lead');
     //    //$window.location.reload(true) 
     //     }   
     //});
   }
    $scope.CurrentDate();
    $scope.FirstConnect();
    $scope.PrimarySource();
    $scope.GetAllProject();
    $scope.GetAllSalesList();
    $scope.GetAllCityList();
    $scope.GetAllSpecificationList();
    $scope.GetAllSalesAssignedList();
    //$scope.LeadID = Auth.getUser().LeadID;
    
     //Get Project Selected value
$scope.contactToEdit = {
                    
                    TEContactEmails: [],
                    TEContactMobiles: [],                  
                    TEContactAddresses: [],
                    TEContactProfessions:[],
                    Loyalty:'Green'
                   
                };
      $scope.SaveContact=function(){

        try{

          LoadingShow();
         //      console.log("test");
             
          if($scope.FirstName && ($scope.PhoneNo || $scope.EmailId))
          {
            $scope.contactToEdit.Salutation=$scope.Saluatation;
          $scope.contactToEdit.FirstName=$scope.FirstName;
          $scope.contactToEdit.LastName=$scope.LastName;
          $scope.contactToEdit.CallName=$scope.FirstName+" "+$scope.LastName;
          var Mobiles={
            CreatedBy:'',
            Mobile:$scope.PhoneNo,
            Type:'Home'
        
          };
          if($scope.country)
          {
            Mobiles["CountryCode"]=$scope.country.dial_code;
          }
          var Emails={
            CreatedBy:'',
            Emailid:$scope.EmailId,
            Type:'Home'
            
          };
          var TEContactProfessions={
            CreatedBy:'',
            Organisation:$scope.organization,
            Profession:$scope.designation
            
          };
            if($scope.PhoneNo)
            {
               $scope.contactToEdit.TEContactMobiles=$scope.contactToEdit.TEContactMobiles.concat(Mobiles);
            }
            if($scope.EmailId)
            {
              $scope.contactToEdit.TEContactEmails=$scope.contactToEdit.TEContactEmails.concat(Emails);
            }
           
            
            $scope.contactToEdit.TEContactProfessions=$scope.contactToEdit.TEContactProfessions.concat(TEContactProfessions);
            ContactServiceCall($scope.contactToEdit);
          }
          else
          {
            alert("Name and  Mobile or EmailId are mandatory");
            LoadingHide();

          }

        }
        catch(ex)
        {
          alert(ex.message);
          LoadingHide();
        }
       
      }

      function ContactServiceCall(NewContact){
        var json = {
                'ValidationType': 'Green',
                'teContact': NewContact
            };
          commonServices.callServices("CreateContact", json).then(
                function(response) {
                   
                        console.log(response.Result);
                        SaveLead(response.Result);

                }
            );

      }

      function SaveLead(ContactId){
        var json = {
                ContactID: ContactId,
                LastModifiedBy_Id: 251
            };
          commonServices.callServices("SaveLead", json).then(
                function(response) {
                   
                        console.log(response.LeadID,ContactId);
                        if($scope.pselitem)
                        {
                          AutoAllocateLead(response.LeadID,ContactId);

                        }
                        else
                        {
                          UpdateLead(response.LeadID,ContactId,null);
                        }
                        
                }
            );

      }
      function AutoAllocateLead(LeadId,ContactId)
      {
        var json={

          LeadID: LeadId,
          ProjectID: $scope.pselitem.ProjectID
          
        }
        if($scope.SalesEngine)
        {
          json["salesEngine"]=$scope.SalesEngine.PickListItemID
        }
      commonServices.callServices("AutoAllocateLead", json).then(
                function(response) {
                   
                        var AllocateId=response.result;
                        if(AllocateId)
                        {
                           UpdateLead(LeadId,ContactId,AllocateId);
                        }
                        else
                        {
                          alert("There is no connect consultant available for this project");
                          LoadingHide();
                        }
                       
                }
            );

      }


    function UpdateLead(LeadId,ContactId,AllocateId)
    {
      var InterestPrj=[];

          console.log($scope.pselitems);
          angular.forEach($scope.pselitems,function(value){

            console.log(value);
            InterestPrj.push(value.ProjectID);
          });
          //InterestPrj.push($scope.pselitems.ProjectID);
          console.log(InterestPrj);
         
      var Lead={
          LeadID: LeadId,                
          City: "Bengaluru, Karnataka, India",
          Mobile: $scope.PhoneNo,
          Email:$scope.EmailId,          
          FirstName:$scope.FirstName,
          LastName:$scope.LastName,  
          ContactID: ContactId,         
          Designation: $scope.designation,                
          House_: $scope.address,
          InterstedProject: ""+InterestPrj+"",
          LastModifiedBy_Id: "251",          
          LeadTemperature: "1",         
          Notes: $scope.notes,
          NotesName: "",
          Organisation: $scope.organization,                            
          Profession: $scope.designation,
          ResponseteamMember: "251",                         
          TEContact: ContactId        
        }
        if($scope.Saluatation)
        {
           Lead["Salutation"]=$scope.Saluatation.name;
        }
        if($scope.FirstConnect)
        {
           Lead["FirstConnect"]=$scope.FirstConnect.PickListItemID;
        }
        if($scope.firstconnectmode)
        {
          Lead["FirstConnectMode"]= $scope.firstconnectmode.PickListItemID;
        }
        if($scope.citychoice)
        {
          Lead["CityChoice"]= $scope.citychoice.PickListItemID;
        }
        if($scope.location)
        {
          Lead["PreferredLocation"]= $scope.location.PickListItemID;
        }
        //  if($scope.Origin)
        // {
        //   Lead["LeadOriginCity"]= $scope.Origin.PickListItemID;
        // }
        if($scope.primarysource)
        {
          Lead["PrimarySource"]= $scope.primarysource.PickListItemID;
        }
        if($scope.secondarysource)
        {
          Lead["SecondarySource"]= $scope.secondarysource.PickListItemID;
        }
         if($scope.SalesEngine)
        {
          Lead["SalesEngine"]= $scope.SalesEngine.PickListItemID;
        }
         if($scope.pselitem)
        {
          Lead["PreferredProjects"]= $scope.pselitem.ProjectID;
        }
        if($scope.Specification)
        {
          Lead["Specification"]= $scope.Specification.SpecificationID;
        }
        if(AllocateId)
        {
          Lead["ConnectedTeamMember"]=AllocateId;
          Lead["LeadStage"]="Assigned";          
  
        }
        else          
        {

          Lead["LeadStage"]="Responded";
         
        }


        commonServices.callServices("UpdateProspect", Lead).then(
                function(response) {
                        
                        if(AllocateId)
                        {
                          AssignLead(AllocateId,LeadId);
                        }
                        else
                        {
                           alert("Lead Created Succesfully");
                           //$state.transitionTo($state.current, null, { reload: true, inherit: true, notify: true });
                           LoadingHide();
                           //$state.go($state.current, {}, {notify: true});
                           //e.preventDefault();
                           //$state.go('app.home');
                           // $state.reload();
                           
                           location.reload(true) ;
                           //$route.reload();
                        }
                       
                        
                }
            );


    }
    function AssignLead(AllocateId,LeadId){

        var json={

          AssistedTeamMember: "",
          ClosedTeamMember: "",
          ConnectedTeamMember: AllocateId,
          LastModifiedBy_Id: "251",
          LeadID: LeadId
        }
       commonServices.callServices("AssignLead", json).then(
                function(response) {
                        
                         alert("Lead Created Succesfully");
                        
                         //e.preventDefault();
                         //$state.go('app.home');
                          //$state.reload();
                          //$state.transitionTo($state.current, null, { reload: true, inherit: true, notify: true });
                           LoadingHide();
                           //$state.go($state.current, {}, {notify: true});
                         //$route.reload();
                        location.reload(true) 
                        
                }
            );
    }


  $scope.getProjectValue = function(){
  $scope.ProjectCode=$scope.pselitem.ProjectCode;
  $scope.ProjectColor=$scope.pselitem.ProjectColor;
  $scope.ProjectName=$scope.pselitem.ProjectName;
  $scope.ProjectID = $scope.pselitem.ProjectID;
  console.log( $scope.ProjectColor);};
  
  //get product details
  $scope.getProductDetails = function(){
  $scope.product=$scope.Productselitem.ProductID;
  console.log($scope.product);
  };
  
   
   $scope.getValuefromtitle=function(item){
   $scope.salutaion.push(item.name);
   $scope.title = item.name;
   Auth.setUser({title :  $scope.title})
   console.log($scope.title);
   }
  
   
   $scope.getValuefromCountryCode=function(item){
   $scope.selectedCountry.push(item.dial_code);  
   $scope.CountryCode=item.dial_code;
   console.log($scope.CountryCode);
   Auth.setUser({CountryCode : $scope.CountryCode})
   }        
  
   //get selected first Connect:
   $scope.getFirstConnect = function(){
   $scope.FirstConnectValue=$scope.FirstConnect.PickListItemID;
   console.log($scope.FirstConnectValue);
   };
   
    //get selected first Connect:
   $scope.getFirstConnectMode = function(firstconnectmode){
   $scope.FirstConnectMode=$scope.firstconnectmode.PickListItemID;
   console.log($scope.FirstConnectMode);
   };
   
   //get selected first Connect:
   $scope.getAssignedValue = function(AssignedLead){
   $scope.AssignedValue=AssignedLead.UserID;
   console.log($scope.AssignedValue);
   };
   
   //Get Selected Primary source
   $scope.getPrimarySource = function(primarysource){
   $scope.PrimarySourceValue=primarysource.PickListItemID;
   console.log($scope.PrimarySourceValue);};

  //Get Selected Campaingn Master
  $scope.getCampaignValue = function(){
  $scope.CampaignValue=$scope.selitem.Name;
  console.log($scope.CampaignValue);
  };
  
   //get Specification details
  $scope.getSpecificationDetails = function(){
  $scope.SpecificationID=$scope.Specification.SpecificationID;
  $scope.SpecificationName=$scope.Specification.SpecificationName;
  console.log($scope.SpecificationID);
  //console.log($scope.SpecificationName);
  };

  //Get Project Selected value
  $scope.getCityValue = function(){
  $scope.CityValue=$scope.selitem.PickListItemID;
  console.log($scope.CityValue);
  };

   //Get Project Sales Control
  $scope.getSalesCtrl = function(){
  $scope.SalesValue=$scope.SalesEngine.PickListItemID;
  console.log($scope.SalesValue);
  };

   
     $scope.array = [];
    //list of salutaion 
    $scope.salutaion=[];
    $scope.salutaionItems=[{id:1,name:"Mr"},{id:2,name:"Mrs"},{id:3,name:"Ms"}, 
    {id:3,name:"M/S"}, {id:3,name:"Dr."}]
    //List of Country Code
    $scope.selectedCountry = [];
    $scope.countries = [{ name: "India",dial_code: "+91",code: "IN"}, {name: "United States",dial_code: "+1",code: "US"}, {name: "Israel",dial_code: "+972",code: "IL"}, { name: "Afghanistan", dial_code: "+93",code: "AF"}, {name: "Albania",dial_code: "+355",code: "AL"}, {name: "Algeria",dial_code: "+213",code: "DZ"}, {name: "AmericanSamoa",
    dial_code: "+1 684",code: "AS"}, {name: "Andorra",dial_code: "+376",code: "AD"}, {name: "Angola",dial_code: "+244",code: "AO"}, {name: "Anguilla",dial_code: "+1 264", code: "AI"}, {
    name: "Antigua and Barbuda",dial_code: "+1268",code: "AG"}, {name: "Argentina",dial_code: "+54",code: "AR"}, { name: "Armenia",dial_code: "+374",code: "AM"}, {name: "Aruba",
    dial_code: "+297",code: "AW"}, {name: "Australia",dial_code: "+61",code: "AU"}, {name: "Austria",dial_code: "+43",code: "AT"}, {name: "Azerbaijan",dial_code: "+994",code: "AZ"}, {
    name: "Bahamas",dial_code: "+1 242",code: "BS"}, {name: "Bahrain", dial_code: "+973",code: "BH"}, {name: "Bangladesh",dial_code: "+880",code: "BD"}, {name: "Barbados",dial_code: "+1 246",code: "BB"}, {
    name: "Belarus",dial_code: "+375",code: "BY"}, {name: "Belgium",dial_code: "+32",code: "BE"}, {name: "Belize",dial_code: "+501",code: "BZ"}, {name: "Benin",dial_code: "+229",
    code: "BJ"}, {name: "Bermuda",dial_code: "+1 441",code: "BM"}, {name: "Bhutan",dial_code: "+975",code: "BT"}, {name: "Bosnia and Herzegovina",dial_code: "+387", code: "BA"}, {name: "Botswana",
    dial_code: "+267",code: "BW"}, {name: "Brazil",dial_code: "+55",code: "BR"}, { name: "British Indian Ocean Territory",dial_code: "+246",code: "IO"}, {name: "Bulgaria",dial_code: "+359",code: "BG"}, {
    name: "Burkina Faso",dial_code: "+226",code: "BF"}, {name: "Burundi",dial_code: "+257",code: "BI"}, {name: "Cambodia",dial_code: "+855",code: "KH"}, {name: "Cameroon",dial_code: "+237",code: "CM"}, {name: "Canada", dial_code: "+1",
    code: "CA"}, {name: "Cape Verde",dial_code: "+238", code: "CV"}, {name: "Cayman Islands",dial_code: "+ 345",code: "KY"}, {name: "Central African Republic",dial_code: "+236",code: "CF"
    }, { name: "Chad",dial_code: "+235",code: "TD"}, {name: "Chile",dial_code: "+56",code: "CL"}, {name: "China",dial_code: "+86", code: "CN"}, {name: "Christmas Island",dial_code: "+61",
    code: "CX"}, {name: "Colombia",dial_code: "+57",code: "CO"}, {name: "Comoros",dial_code: "+269",code: "KM"}, {name: "Congo",dial_code: "+242", code: "CG"}, {name: "Cook Islands",dial_code: "+682",
    code: "CK"}, {name: "Costa Rica",dial_code: "+506",code: "CR"}, {name: "Croatia",dial_code: "+385",code: "HR"}, {name: "Cuba",dial_code: "+53",code: "CU"}, {name: "Cyprus",
    dial_code: "+537",code: "CY"}, {name: "Czech Republic",dial_code: "+420",code: "CZ"}, {name: "Denmark",dial_code: "+45",code: "DK"}, {name: "Djibouti",dial_code: "+253",code: "DJ"}, {
    name: "Dominica",dial_code: "+1 767",code: "DM"}, {name: "Dominican Republic",dial_code: "+1 849",code: "DO"}, {name: "Ecuador",dial_code: "+593",code: "EC"}, {
    name: "Egypt",dial_code: "+20",code: "EG"}, {name: "El Salvador", dial_code: "+503",code: "SV"}, {name: "Equatorial Guinea",dial_code: "+240",code: "GQ"}, {name: "Eritrea",dial_code: "+291",code: "ER"}, {
    name: "Estonia",dial_code: "+372",code: "EE"}, {name: "Ethiopia",dial_code: "+251",code: "ET"}, {name: "Faroe Islands",dial_code: "+298",code: "FO"}, {name: "Fiji",dial_code: "+679",code: "FJ"}, {name: "Finland",dial_code: "+358",code: "FI"}, {name: "France",dial_code: "+33",
    code: "FR"}, {name: "French Guiana",dial_code: "+594",code: "GF"}, {name: "French Polynesia",dial_code: "+689",code: "PF"}, {name: "Gabon",dial_code: "+241",
    code: "GA"}, {name: "Gambia",dial_code: "+220",code: "GM"}, {name: "Georgia",dial_code: "+995",code: "GE"}, {name: "Germany",dial_code: "+49",code: "DE"}, {name: "Ghana",dial_code: "+233",code: "GH"}, {
    name: "Gibraltar",dial_code: "+350",code: "GI"}, {name: "Greece",dial_code: "+30",code: "GR"}, {name: "Greenland",dial_code: "+299",code: "GL"}, {
    name: "Grenada",dial_code: "+1 473",code: "GD"}, {name: "Guadeloupe",dial_code: "+590",code: "GP"}, {name: "Guam",dial_code: "+1 671",code: "GU"}, {name: "Guatemala",dial_code: "+502",
    code: "GT"}, {name: "Guinea",dial_code: "+224",code: "GN"}, {name: "Guinea-Bissau",dial_code: "+245",code: "GW"}, {name: "Guyana",dial_code: "+595",code: "GY"}, {
    name: "Haiti",dial_code: "+509",code: "HT"}, {name: "Honduras",dial_code: "+504",code: "HN"}, {name: "Hungary",dial_code: "+36", code: "HU"}, {name: "Iceland",dial_code: "+354",code: "IS"}, 
    {name: "Indonesia",dial_code: "+62", code: "ID"}, {name: "Iraq",dial_code: "+964",code: "IQ"}, {name: "Ireland",dial_code: "+353",code: "IE"}, {name: "Israel",
    dial_code: "+972",code: "IL"}, {name: "Italy",dial_code: "+39",code: "IT"}, {name: "Jamaica",dial_code: "+1 876",code: "JM"}, {name: "Japan",dial_code: "+81",code: "JP"}, {name: "Jordan",
    dial_code: "+962",code: "JO"}, {   name: "Kazakhstan",  dial_code: "+7 7",    code: "KZ"}, {   name: "Kenya",    dial_code: "+254",    code: "KE"},  {
    name: "Kuwait",   dial_code: "+965",    code: "KW"},  {   name: "Madagascar",   dial_code: "+261",   code: "MG"}, {    name: "Malawi",    dial_code: "+265",
    code: "MW"}, {   name: "Malaysia",   dial_code: "+60",    code: "MY"}, {    name: "Maldives",    dial_code: "+960",    code: "MV"}, {    name: "Mali",    dial_code: "+223",   code: "ML"}, {
    name: "Malta",    dial_code: "+356",   code: "MT"}, {   name: "Marshall Islands",    dial_code: "+692",    code: "MH"}, {    name: "Martinique",    dial_code: "+596",    code: "MQ"}, {
    name: "Mauritania",   dial_code: "+222",    code: "MR"}, {    name: "Mauritius",    dial_code: "+230",    code: "MU"}, {    name: "Mayotte",    dial_code: "+262",
    code: "YT"}, {    name: "Mexico",    dial_code: "+52",code: "MX"}, {name: "Monaco",dial_code: "+377",code: "MC"}, {    name: "Mongolia",    dial_code: "+976",    code: "MN"}, {
    name: "Montenegro",   dial_code: "+382",    code: "ME"}, {    name: "Montserrat",    dial_code: "+1664",    code: "MS"}, {    name: "Morocco",    dial_code: "+212",
    code: "MA"}, {    name: "Myanmar",    dial_code: "+95",    code: "MM"}, {    name: "Namibia",    dial_code: "+264",    code: "NA"}, {    name: "Nauru",
    dial_code: "+674",code: "NR"}, {    name: "Nepal",    dial_code: "+977",    code: "NP"}, {    name: "Netherlands",    dial_code: "+31",    code: "NL"}, {
    name: "Netherlands Antilles",    dial_code: "+599",    code: "AN"}, {    name: "New Caledonia",    dial_code: "+687",    code: "NC"}, {   name: "New Zealand",
    dial_code: "+64", code: "NZ"}, {    name: "Nicaragua",    dial_code: "+505",    code: "NI"}, {    name: "Niger",    dial_code: "+227",    code: "NE"}, {
    name: "Nigeria",dial_code: "+234",   code: "NG"}, {    name: "Niue",    dial_code: "+683",    code: "NU"}, {    name: "Norfolk Island",    dial_code: "+672",
    code: "NF"}, {   name: "Northern Mariana Islands" , dial_code: "+1 670",    code: "MP"}, {    name: "Norway",    dial_code: "+47",    code: "NO"}, {
    name: "Oman",   dial_code: "+968",    code: "OM"}, {    name: "Pakistan",    dial_code: "+92",    code: "PK"}, {    name: "Palau",    dial_code: "+680",    code: "PW"}, {    name: "Panama",
    dial_code: "+507",    code: "PA"}, {    name: "Papua New Guinea",    dial_code: "+675",    code: "PG"}, {    name: "Paraguay",    dial_code: "+595",    code: "PY"}, {   name: "Peru",
    dial_code: "+51",   code: "PE"}, {    name: "Philippines",    dial_code: "+63",    code: "PH"}, {    name: "Poland",    dial_code: "+48",    code: "PL"}, {
    name: "Portugal",    dial_code: "+351",    code: "PT"},  {    name: "Qatar",    dial_code: "+974",    code: "QA"}, {    name: "Romania",    dial_code: "+40",    code: "RO"},  {    name: "San Marino",    dial_code: "+378",
    code: "SM"}, {    name: "Saudi Arabia",    dial_code: "+966",    code: "SA"}, {    name: "Senegal",    dial_code: "+221",    code: "SN"}, {
    name: "Serbia",dial_code: "+381",    code: "RS"}, {    name: "Seychelles",    dial_code: "+248",    code: "SC"},  {    name: "Singapore",    dial_code: "+65",
    code: "SG"}, {    name: "Slovakia",    dial_code: "+421",   code: "SK"}, {   name: "Slovenia",   dial_code: "+386",   code: "SI"}, {    name: "South Africa",  dial_code: "+27",
    code: "ZA"},  {    name: "Spain",    dial_code: "+34",    code: "ES"}, {    name: "Sri Lanka",    dial_code: "+94",    code: "LK"}, {    name: "Sudan",    dial_code: "+249",    code: "SD"},  {
    name: "Swaziland" ,dial_code: "+268",    code: "SZ"}, {    name: "Sweden",    dial_code: "+46",    code: "SE"}, {    name: "Switzerland",    dial_code: "+41",
    code: "CH"}, {    name: "Tajikistan",    dial_code: "+992",    code: "TJ"}, {    name: "Thailand",    dial_code: "+66",    code: "TH"},  { name: "Tunisia",    dial_code: "+216",
    code: "TN"}, {    name: "Turkey",    dial_code: "+90",    code: "TR"}, {    name: "Turks and Caicos Islands",    dial_code: "+1 649",    code: "TC"},  {
    name: "Uganda", dial_code: "+256",   code: "UG"}, {   name: "Ukraine",    dial_code: "+380",    code: "UA"}, {    name: "United Arab Emirates",    dial_code: "+971",
    code: "AE"}, {    name: "United Kingdom",    dial_code: "+44",    code: "GB"}, {    name: "Uruguay",    dial_code: "+598",    code: "UY"},  {
    name: "Hong Kong",   dial_code: "+852",    code: "HK"}, {    name: "Iran, Islamic Republic of",    dial_code: "+98",    code: "IR"},  {    name: "Korea, Democratic People's Republic of",
    dial_code: "+850",code: "KP"}, {    name: "Korea, Republic of",    dial_code: "+82",    code: "KR"}, {    name: "Macao",    dial_code: "+853",    code: "MO"},   {name: "Russia", dial_code: "+7",code: "RU"} ]
    
   
    //Create Projects
    $scope.addListItem = function(firstname, lastname, phone, email, organization,designation, address, city, location, notes){
    //console.log(data);
    $scope.array.unshift(firstname);
    $scope.array.unshift(lastname);
    $scope.array.unshift(email);
    $scope.array.unshift(organization);
    $scope.array.unshift(address);
    $scope.array.unshift(designation);
    $scope.array.unshift(city);
    $scope.array.unshift(location);
    $scope.array.unshift(notes);
    $scope.array.unshift(phone);
    $scope.array.unshift(email);
    var CallName = ($scope.title+" "+firstname+" "+lastname);
   
    //clear quotes
    console.log("Title :"+$scope.title);
    console.log("Fristname :"+firstname);
    console.log("Last name :"+lastname);
    console.log("CallName :"+ CallName);
    console.log("Country Code: "+ $scope.CountryCode);
    console.log("Mobile :"+phone);
    console.log("Email :"+email);
    console.log("Organization :"+organization);
    console.log("Designation :"+ designation);
    console.log("Address :"+ address);
    console.log("City :"+ city);
    console.log("First Connect :"+ $scope.PickListItemID);
    console.log("First Connect Mode :"+ $scope.FirstConnectMode);
    console.log("Primary Source :"+  $scope.PrimarySourceValue);
    console.log("Sales Engine :"+  $scope.SalesValue);
    console.log("City Choice: "+ $scope.CityValue);
    console.log("Preffered Location :"+ location);
    console.log("Project ID: "+$scope.ProjectID);
    console.log("Project Color: "+ $scope.ProjectColor);
    console.log("Product: "+ $scope.product);
    console.log("Specification Name: "+$scope.SpecificationID);
    console.log("Assigned To: "+$scope.AssignedValue);  
    if(!angular.isDefined($scope.AssignedValue) || $scope.AssignedValue == " " || $scope.AssignedValue == null){
    $scope.AssignedValue ="Enquiry";  
    }else{}  
    console.log("Notes :"+ notes);
    // $scope.Notes = notes;
    // $scope.LastModifiedBy = "1007";
    // $scope.LastModifiedBy_Id = "1007";
    // $scope.IsDeleted = "0";

   
  var json = {UniqueID:"0",Status:"active",ContactType:"Prospect",MiddleName:"",TEOrganisation:"",
  Contactid:"",LastModifiedBy_Id:"3375",CountryCode:$scope.CountryCode,Emailid:email, LeadID:"0",LeadStage:$scope.AssignedValue,FirstName:firstname,LastName:lastname,
  ContactID:"",TEContact:"",Email:email,Mobile:phone,Salutation:$scope.title,CallName:CallName,PreferredProjects:$scope.ProjectID,
  InterstedProject:"[]",LastModifiedBy:"3375",CreatedBy:"3375",ResponseteamMember:"3375",ConnectedTeamMember:"",CloseTeamMember:"",LeadTemperature:"1",
  Notes:notes,Organisation:organization,Designation:designation,Profession:designation,Address:address,
  House_:address,City:city,FirstConnect:$scope.PickListItemID,FirstConnectMode:$scope.FirstConnectMode,PrimarySource:$scope.PrimarySourceValue,Campaign:"",
  SalesEngine:$scope.SalesValue,CityChoice:$scope.CityValue,PreferredLocation:location,NotesName:notes,UnitType:$scope.product,UnitSize:"",Specification:$scope.SpecificationID}
     
    $http({
    method: 'POST',
    dataType: 'json',
    url: 'http://192.168.51.248/lead/api/TELeadAPI/CommonSaveLead',
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    data: json
    }).success (function(response){
         $scope.value = response.info;
         $scope.errormessage = response.info.errormessage;
         alert($scope.errormessage);
         $window.location.reload(true)
       })
    .error(function(response)
       {
          alert($scope.errormessage);
       });   
    };
    
    //update source of enquiry
    $scope.SaveSourceOfenquiry = function(){        
     console.log(" Contact ID :"+  $rootScope.ContactID);
     var json = {ContactID: ""};
     $http({
     method: 'POST',
     dataType: 'json',
     url: 'http://192.168.51.248/lead/api/TELeadAPI/UpdateTELeadSourceOfEnquiry',
     headers: {'Content-Type': 'application/json; charset=UTF-8'},
     data: json
     }).success (function(response){
       
      }).error(function(response){
        
      })
    }     
})

.controller('AlertCtrl', function($scope, $ionicPopup) {
   $scope.showAlert = function(name) {

      var alertPopup = $ionicPopup.alert({
         title: name,
         template: '<p align="center">No Data Found!</p>'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };
})

//Adding Slide Box here
 .controller("SlideCtrl", function($scope, $ionicSlideBoxDelegate) {
    $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    }
})

//changing image dynamically with button clicked//
.controller('imageChange', function($scope){
$scope.imageUrl1 = 'img/star-1.png';
$scope.imageUrl2 = 'img/star-2.png';
$scope.imageUrl3 = 'img/star-3.png';
$scope.imageUrl4 = 'img/star-4.png';
$scope.imageUrl5 = 'img/star-5.png';
$scope.imageUrl6 = 'img/star-6.png';
$scope.imageUrl7 = 'img/star-7.png';
$scope.imageUrl8 = 'img/star-8.png';
$scope.imageUrl9 = 'img/star-9.png';
$scope.imageUrl10 = 'img/star-10.png';



$scope.onTap1 = function() {
if($scope.imageUrl1 == 'img/star-1-r.png'){
  $scope.imageUrl1 = 'img/star-1.png';
}
else{
$scope.imageUrl1 = 'img/star-1-r.png';
}
  };

$scope.onTap2 = function() {
$scope.imageUrl2 = 'img/star-2-r.png';
  };


$scope.onTap3 = function() {
$scope.imageUrl3 = 'img/star-3-r.png';
  };

$scope.onTap4 = function() {
$scope.imageUrl4 = 'img/star-4-r.png';
  };

$scope.onTap5 = function() {
$scope.imageUrl5 = 'img/star-5-r.png';
  };

  $scope.onTap6 = function() {
$scope.imageUrl6 = 'img/star-6-r.png';
  };

  $scope.onTap7 = function() {
$scope.imageUrl7 = 'img/star-7-r.png';
  };

  $scope.onTap8 = function() {
$scope.imageUrl8 = 'img/star-8-r.png';
  };

  $scope.onTap9 = function() {
$scope.imageUrl9 = 'img/star-9-r.png';
  };

  $scope.onTap10 = function() {
$scope.imageUrl10 = 'img/star-10-r.png';
  };

  //changing image of product
  $scope.onTap11 = function() {
$scope.imageUrl11 = 'img/product.png';
  };
  })

//common alert Popup
.controller('CommonAlert', function($scope){
  $scope.ShowAlert = function(){
  alert("You have successfully submitted notes!");
  };
})

.controller('TabController', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}])

 //Getting GetTEProjectDetailByProjectID
 .controller('GetTEProjectDetailByProjectID', function($scope, $http, SendOnlyProjectIdByFactory, $stateParams, $state,commonServices) {

    $scope.page_number = "1";
    $scope.pagepercount = "10";

   

           $scope.ProjectID =$stateParams.id;

      var json = {
                   projectID:  $scope.ProjectID,
                   page_number: $scope.page_number,
                   pagepercount: $scope.pagepercount,
                    };
        commonServices.callServices("getFactsheets", json).then(
                function(response) {
                   
                  if(response.result.length > 0 ){
                    $scope.results = response.result;
                    $scope.InformationItem = response.result[0].InformationItem;
                  }else{
                      console.log("No data Found!");
                       }
                }
            ); 
 })


 //Getting GetTEProjectDetailByProjectID
 .controller('GetAllTEBankDetailByProjectID', function($scope, $http, SendOnlyProjectIdByFactory, $stateParams, $state,commonServices) {

    $scope.page_number = "1";
    $scope.pagepercount = "20";
var json = {
                   projectID:  $scope.ProjectID,
                   page_number: $scope.page_number,
                   pagepercount: $scope.pagepercount,
                    };
//     SendOnlyProjectIdByFactory.simplePostRequest1({
//   }).then(function(data) {

//       var ProjectID =data.data.result[0].ProjectID;
//       $scope.ProjectID =$stateParams.id;

//       var json = {
//                    projectID:  $scope.ProjectID,
//                    page_number: $scope.page_number,
//                    pagepercount: $scope.pagepercount,
//                     };
//                    //console.log($scope.ProjectID + $scope.page_number+ $scope.pagepercount);
//     $http({
//     method: 'POST',
//     dataType: 'json',
//     url: 'http://192.168.51.251/portfolio/api/TEBankDetailAPI/GetAllTEBankDetailByProjectID_Pagination',
//     headers: {'Content-Type': 'application/json; charset=UTF-8'},
//     data: json
// }).success (function(response){
//         $scope.bankDetails = response.result;
//         //console.log( $scope.results );

//          });
//       })

  commonServices.callServices("getBankDetails", json).then(
                function(response) {
                   $scope.bankDetails = response.result;
                  
                }
            ); 
 })
 
 //Getting Sales plan & target
 .controller('GetSalesPlanTargetsByProjectId', function($scope, $http, SendOnlyProjectIdByFactory, $stateParams, $state,commonServices) {

    $scope.page_number = "1";
    $scope.pagepercount = "10";


       $scope.ProjectID =$stateParams.id;

      var json = {
                   ProjectId:  $scope.ProjectID,
                   page_number: $scope.page_number,
                   pagepercount: $scope.pagepercount,
                    };

//     SendOnlyProjectIdByFactory.simplePostRequest1({
//   }).then(function(data) {

//       var ProjectID =data.data.result[0].ProjectID;
//       $scope.ProjectID =$stateParams.id;

//       var json = {
//                    ProjectId:  $scope.ProjectID,
//                    page_number: $scope.page_number,
//                    pagepercount: $scope.pagepercount,
//                     };
//                    //console.log($scope.ProjectID + $scope.page_number+ $scope.pagepercount);
//     $http({
//     method: 'POST',
//     dataType: 'json',
//     url: 'http://192.168.51.248/portfolio/api/TESalesPlanandTargetsAPI/GetSalesPlanTargetsByProjectId_Pagination',
//     headers: {'Content-Type': 'application/json; charset=UTF-8'},
//     data: json
// }).success (function(response){
//         if(response.result != null){
//         $scope.results = response.result;
//         $scope.FinancialYear = response.result[0].FinancialYear;
//         $scope.FinancialQuarter = response.result[0].FinancialQuarter;
//         $scope.ProjectName = response.result[0].ProjectName;
//         $scope.SubProductCode = response.result[0].SubProductCode;
//         $scope.SalesValue = response.result[0].SalesValue;
//         $scope.NoOfSales = response.result[0].NoOfSales;
//         }else{
//              console.log("No Data Found!");
//         }
//          });


          
//       })

  commonServices.callServices("getSalesplan", json).then(
                function(response) {
                 if(response.result != null){

                   $scope.results = response.result;
                }
                else
                {
                  console.log("No Data Found!");
                }
              }
            ); 
 })

 //Project default car park
 .controller('GetAllTEDefaultCarPark', function($scope, $http, SendOnlyProjectIdByFactory, $stateParams, $state) {

//     $scope.page_number = "1";
//     $scope.pagepercount = "10";

//     SendOnlyProjectIdByFactory.simplePostRequest1({
//   }).then(function(data) {

//       var ProjectID =data.data.result[0].ProjectID;
//       $scope.ProjectID =$stateParams.id;

//       var json = {
//                    ProjectID:  $scope.ProjectID,
//                    page_number: $scope.page_number,
//                    pagepercount: $scope.pagepercount,
//                     };
//                    //console.log($scope.ProjectID + $scope.page_number+ $scope.pagepercount);
//     $http({
//     method: 'POST',
//     dataType: 'json',
//     url: 'http://192.168.51.251/portfolio/api/TEDefaultCarParkAPI/GetAllTEDefaultCarPark_Pagination',
//     headers: {'Content-Type': 'application/json; charset=UTF-8'},
//     data: json
// }).success (function(response){
//         $scope.results = response.result;
//        // console.log( $scope.results);

//          });
//       })
 })

 //Project default car park Inventry
 .controller('GetAllTECarParkInventory', function($scope, $http, SendOnlyProjectIdByFactory, $stateParams, $state) {

//     $scope.page_number = "1";
//     $scope.pagepercount = "10";

//     SendOnlyProjectIdByFactory.simplePostRequest1({
//   }).then(function(data) {

//       var ProjectID =data.data.result[0].ProjectID;
//       $scope.ProjectID =$stateParams.id;

//       var json = {
//                    projectID:  $scope.ProjectID,
//                    page_number: $scope.page_number,
//                    pagepercount: $scope.pagepercount,
//                     };
//                    //console.log($scope.ProjectID + $scope.page_number+ $scope.pagepercount);
//     $http({
//     method: 'POST',
//     dataType: 'json',
//     url: 'http://192.168.51.251/portfolio/api/TECarParkInventoryAPI/GetAllTECarParkInventory_Pagenation',
//     headers: {'Content-Type': 'application/json; charset=UTF-8'},
//     data: json
// }).success (function(response){
//         if(response.result.length > 0){
//         $scope.results = response.result;
//         console.log( $scope.results);
//         }else{
//             alert("No Data Found!");
//             $state.go('app.home');
//         }
//        });
//     })
 })

 .controller('mddialog', function($scope, $mdDialog) {
  $scope.openFromLeft = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Opening from the left')
        .textContent('Closing to the right!')
        .ariaLabel('Left to right demo')
        .ok('Nice!')
        // You can specify either sting with query selector
        .openFrom('#left')
        // or an element
        .closeTo(angular.element(document.querySelector('#right')))
    );
  };

  $scope.openOffscreen = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Opening from offscreen')
        .textContent('Closing to offscreen')
        .ariaLabel('Offscreen Demo')
        .ok('Amazing!')
        // Or you can specify the rect to do the transition from
        .openFrom({
          top: -50,
          width: 30,
          height: 80
        })
        .closeTo({
          left: 1500
        })
    );
  };
})

.controller('SortingByLeadStage', function($scope, $http, $filter, $state, $rootScope) {
   console.log($rootScope.itemstage);
  //Prospect Lerad stage
  $scope.checkonce = "10";
  $scope.pageno = "1";
  $scope.pagepercount = "10";
  $scope.LeadStageID = $rootScope.itemstage;
  $scope.SearchAll = "";
  $scope.FromDate = "";
  $scope.ToDate = "";
  var json = {checkonce: $scope.checkonce,pageno: $scope.pageno,pagepercount: $scope.pagepercount,LeadStageID:  $scope.LeadStageID,
  SearchAll: $scope.SearchAll,FromDate: "",ToDate:"",};

  $http({
  method: 'POST',
  dataType: 'json',
  url: 'http://192.168.51.248/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
  headers: {'Content-Type': 'application/json; charset=UTF-8'},
  data: json
 }).success (function(response){
      if(response.result.length > 0 ){
        $scope.StageValue = response.result;
        console.log($scope.StageValue);
      }else{
        alert("No Data Found!");
        $state.go('app.lead');
      }
     
     });  
})

// //Lead data for connected stage
// .controller('SortingByLeadStageWithConnected', function($scope, $http, $filter, $state) {
 
//   $scope.checkonce = "10";
//   $scope.pageno = "1";
//   $scope.pagepercount = "10";
//   $scope.LeadStageID = "Connected";
//   $scope.SearchAll = "";
//   $scope.FromDate = "";
//   $scope.ToDate = "";
//   var json = {
//     checkonce: $scope.checkonce,
//     pageno: $scope.pageno,
//     pagepercount: $scope.pagepercount,
//     LeadStageID:  $scope.LeadStageID,
//     SearchAll: $scope.SearchAll,
//     FromDate: "",
//     ToDate:"",
//   };

//   $http({
//   method: 'POST',
//   dataType: 'json',
//   url: 'http://192.168.51.248/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
//   headers: {'Content-Type': 'application/json; charset=UTF-8'},
//   data: json
//  }).success (function(response){
//       if(response.result.length > 0 ){
//         $scope.StageValue = response.result;
//         console.log($scope.StageValue);
//       }else{
//         alert("No Data Found!");
//         $state.go('app.lead');
//       }
//      });
// })

// //Lead data for Suspect stage
// .controller('SortingByLeadStageWithSuspect', function($scope, $http, $filter, $state) {
 
//   $scope.checkonce = "10";
//   $scope.pageno = "1";
//   $scope.pagepercount = "10";
//   $scope.LeadStageID = "Suspect";
//   $scope.SearchAll = "";
//   $scope.FromDate = "";
//   $scope.ToDate = "";
//   var json = {
//     checkonce: $scope.checkonce,
//     pageno: $scope.pageno,
//     pagepercount: $scope.pagepercount,
//     LeadStageID:  $scope.LeadStageID,
//     SearchAll: $scope.SearchAll,
//     FromDate: "",
//     ToDate:"",
//   };

//   $http({
//   method: 'POST',
//   dataType: 'json',
//   url: 'http://192.168.51.248/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
//   headers: {'Content-Type': 'application/json; charset=UTF-8'},
//   data: json
//  }).success (function(response){
//       if(response.result.length > 0 ){
//         $scope.StageValue = response.result;
//         console.log($scope.StageValue);
//       }else{
//         alert("No Data Found!");
//         $state.go('app.lead');
//       }
//      });
// })


// //Lead data for prospect stage
// .controller('SortingByLeadStageWithProspect', function($scope, $http, $filter, $state) {
//   //Connected Lerad stage
//   $scope.checkonce = "10";
//   $scope.pageno = "1";
//   $scope.pagepercount = "10";
//   $scope.LeadStageID = "Prospect";
//   $scope.SearchAll = "";
//   $scope.FromDate = "";
//   $scope.ToDate = "";
//   var json = {
//     checkonce: $scope.checkonce,
//     pageno: $scope.pageno,
//     pagepercount: $scope.pagepercount,
//     LeadStageID:  $scope.LeadStageID,
//     SearchAll: $scope.SearchAll,
//     FromDate: "",
//     ToDate:"",
//   };

//   $http({
//   method: 'POST',
//   dataType: 'json',
//   url: 'http://192.168.51.248/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
//   headers: {'Content-Type': 'application/json; charset=UTF-8'},
//   data: json
//  }).success (function(response){
//       if(response.result.length > 0 ){
//         $scope.StageValue = response.result;
//         console.log($scope.StageValue);
//       }else{
//         alert("No Data Found!");
//         $state.go('app.lead');
//       }
//      });
// })


// //Lead data for Enquiry stage
// .controller('SortingByLeadStageWithEnquiry', function($scope, $http, $filter, $state) {
 
// })

//Here showing image at fullscreen portfolio Layout details
.controller('FullscreenImageCtrl', ['$scope', '$ionicModal',
  function ($scope, $ionicModal) {
     //console.log("i ma here");
    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.showImage = function(index) {
        $scope.imageSrc = 'http://192.168.51.251/portfolio/'+index;
        console.log($scope.imageSrc);
        $scope.openModal();
    }
  }
])


// //Lead data for Enquiry stage
// .controller('PortfolioTaxDetails', function($scope, $http, $filter, $state, Auth, $rootScope) {
 
 
// })

//here we are inserting users lead Temparature(HOT, WARM, COLD, NEW)
.controller('NewLeadData', function($scope, $http, $filter, $state, $location, $window, $rootScope,commonServices) {
  var json = {checkonce:"10", pageno:"1", pagepercount:"100000", LeadStageID:"", 
  SearchAll:"", LeadTemperature:"1", FromDate:"", ToDate:""};

 //  $http({
 //  method: 'POST',
 //  dataType: 'json',
 //  url: 'http://192.168.51.248/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
 //  headers: {'Content-Type': 'application/json; charset=UTF-8'},
 //  data: json
 // }).success (function(response){
 //      if(response.result.length > 0 ){
 //        $scope.NewLeadData = response.result;
 //        $rootScope.lengthnew = response.result.length;
 //        console.log($scope.NewLeadData);
 //        console.log("Lenght: "+$scope.length);
       
 //      }else{
 //        //alert("No Data Found!");
 //        $state.go('app.lead');
 //        //$window.location.reload(true)
 //      }
     
 //     });

 commonServices.callServices("GetLeadsByStatus", json).then(
                function(response) {
                 if(response.result != null){

                   $scope.NewLeadData = response.result;
                   $rootScope.lengthnew = response.result.length;
                }
                else{
                  //alert("No Data Found!");
                  $state.go('app.lead');
                  //$window.location.reload(true)
                }
              }
            );

})

//here we are inserting users lead Temparature(HOT, WARM, COLD, NEW)
.controller('ColdLeadData', function($scope, $http, $filter, $state, $location, $window, $rootScope,commonServices) {
  var json = {checkonce:"10", pageno:"1", pagepercount:"100000", LeadStageID:"", 
  SearchAll:"", LeadTemperature:"2", FromDate:"", ToDate:""};

 //  $http({
 //  method: 'POST',
 //  dataType: 'json',
 //  url: 'http://192.168.51.248/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
 //  headers: {'Content-Type': 'application/json; charset=UTF-8'},
 //  data: json
 // }).success (function(response){
 //      if(response.result.length > 0 ){
 //        $scope.ColdLeadData = response.result;
 //        $rootScope.lenghtcold = response.result.length;
 //        console.log($scope.ColdLeadData);
 //      }else{
 //        //alert("No Data Found!");   
 //        $state.go('app.lead');
 //        //$window.location.reload(true)
 //      }   
 //   });


 commonServices.callServices("GetLeadsByStatus", json).then(
                function(response) {
                 if(response.result != null){

                    $scope.ColdLeadData = response.result;
                    $rootScope.lenghtcold = response.result.length;
                }
                else{
                  //alert("No Data Found!");
                  $state.go('app.lead');
                  //$window.location.reload(true)
                }
              }
            );

})

//here we are inserting users lead Temparature(HOT, WARM, COLD, NEW)
.controller('WarmLeadData', function($scope, $http, $filter, $state, $location, $window, $rootScope,commonServices) {
  var json = {checkonce:"10", pageno:"1", pagepercount:"100000", LeadStageID:"", 
  SearchAll:"", LeadTemperature:"3", FromDate:"", ToDate:""};

 //  $http({
 //  method: 'POST',
 //  dataType: 'json',
 //  url: 'http://192.168.51.248/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
 //  headers: {'Content-Type': 'application/json; charset=UTF-8'},
 //  data: json
 // }).success (function(response){
 //      if(response.result.length > 0 ){
 //        $scope.names = response.result;
 //        console.log($scope.names);
 //        $rootScope.lenghtwarm = response.result.length;
 //      }else{
 //        //alert("No Data Found!");  
 //        $state.go('app.lead');
 //        //$window.location.reload(true) 
 //      }   
 //   });

 commonServices.callServices("GetLeadsByStatus", json).then(
                function(response) {
                 if(response.result != null){

                     $scope.names = response.result;
                    console.log($scope.names);
                    $rootScope.lenghtwarm = response.result.length;
                }
                else{
                  //alert("No Data Found!");
                  $state.go('app.lead');
                  //$window.location.reload(true)
                }
              }
            );

})

//here we are inserting users lead Temparature(HOT, WARM, COLD, NEW)
.controller('HotLeadData', function($scope, $http, $filter, $state, $location, $window, $rootScope,commonServices) {
  var json = {checkonce:"10", pageno:"1", pagepercount:"100000", LeadStageID:"", 
  SearchAll:"", LeadTemperature:"4", FromDate:"", ToDate:""};

 //  $http({
 //  method: 'POST',
 //  dataType: 'json',
 //  url: 'http://192.168.51.248/lead/api/TELeadAPI/GetAllTELeadDashboardDefaultFilter',
 //  headers: {'Content-Type': 'application/json; charset=UTF-8'},
 //  data: json
 // }).success (function(response){
 //      if(response.result.length > 0 ){
 //        $scope.HotLeadData = response.result;
 //        $rootScope.lenghthot = response.result.length;
 //        console.log($scope.HotLeadData);
 //      }else{
 //        //alert("No Data Found!");  
 //        $state.go('app.lead');
 //        //$window.location.reload(true) 
 //      }   
 //   });

 commonServices.callServices("GetLeadsByStatus", json).then(
                function(response) {
                 if(response.result != null){

                     $scope.HotLeadData = response.result;
                    $rootScope.lenghthot = response.result.length;
                    console.log($scope.HotLeadData);
                }
                else{
                  //alert("No Data Found!");
                  $state.go('app.lead');
                  //$window.location.reload(true)
                }
              }
            );

})

.controller('HomeController', function($scope, $http, $filter, $state, $location, $window, $rootScope,commonServices) {
 
  $rootScope.UserId="3375";
  console.log($rootScope.UserId);

})
.controller('PaymentScheduleApprovalListController', function($scope, $http, $filter, $state, $location, $window, $rootScope,commonServices) {
 
  commonServices.LoadingShow();

    $rootScope.ProjectColor={

      'Learning To Fly':'LearningToFly',
      'Windmills of Your Mind':'WindmillsofYourMind',
      'In That Quiet Earth':'InThatQuietEarth'

    }
   $scope.GetPaymentscheduleList = function(){
   
    

      var json = {
                      page_number: 1,
                      pagepercount:10
                    };
   commonServices.callApprovalServices("PaymentScheduleApprovals", json,"251").then(
                function(response) {
                   commonServices.LoadingHide();
                   $scope.PaymentScheduleApprovalList=response.result;
                 
                }
            );  


  } 

  $scope.GetPaymentscheduleList(); 

  $scope.ScheduleClick=function(schedule){

      console.log(schedule);

      $state.go('app.payment-schedule-details',{Schedule:schedule});

  }

})
.controller('PaymentScheduleApprovalDetails', function($scope, $http, $filter, $state,$stateParams, $location, $window, $rootScope,commonServices) {
 
 commonServices.LoadingShow();

 console.log($stateParams.Schedule);
if($stateParams.Schedule)
{
  $scope.ScheduleDetails=$stateParams.Schedule;
}

 

var json = {
       ScheduleMasterID:  $scope.ScheduleDetails.ScheduleMasterID,
       page_number: 1,
       pagepercount:20,
  };
commonServices.callServices("getMilestones", json).then(
   function(response) {
     commonServices.LoadingHide();
      $scope.ApprovalScheduleMilestones=response.elements;

   }
   );

 $scope.Approve=function(){
  commonServices.LoadingShow();
  //console.log("Approve");
      var json = {

        LastModifiedBy:"251",
        ProjectID:$scope.ScheduleDetails.ProjectID,
        Remarks:"",
        ScheduleMasterID:  $scope.ScheduleDetails.ScheduleMasterID,
        UserId: 251
      
  };
      commonServices.callApprovalServices("PaymentScheduleApprovalProcessing", json,"251").then(
         function(response) {
            commonServices.LoadingHide();
            if(response.info.errormessage=="Successfully Approved")
            {
              alert("Successfully Approved");
              $state.go('app.payment-schedule-list');
            }

         }
         );
  }

   $scope.Reject=function(){
        //console.log("Reject");
         commonServices.LoadingShow();
      var json = {

        LastModifiedBy:"251",
        ProjectID:$scope.ScheduleDetails.ProjectID,
        Remarks:"test",
        ScheduleMasterID:  $scope.ScheduleDetails.ScheduleMasterID,
        UserId: 251
      
  };
      commonServices.callApprovalServices("PaymentScheduleRejectProcessing", json,"251").then(
         function(response) {
             commonServices.LoadingHide();
            if(response.info.errormessage=="Schedule Rejected Successfully")
            {
              alert("Successfully Rejected");
              $state.go('app.payment-schedule-list');
            }

         }
         );
  }

  

})
.controller('PricebookApprovalList', function($scope, $http, $filter, $state, $location, $window, $rootScope,commonServices) {
 

 commonServices.LoadingShow();
   $scope.GetPricebookList = function(){
   
    

      var json = {
                      page_number: 1,
                      pagepercount:10
                };
   commonServices.callApprovalServices("PricebookApprovalList", json,"251").then(
                function(response) {
                    commonServices.LoadingHide();
                  $scope.PricebookApprovalList=response.result;
                 
                }
            );  


  } 

  $scope.GetPricebookList(); 

  $scope.PricebookClick=function(pricebook){

      //console.log(schedule);
      $rootScope.selectedPricebook=pricebook;
      $state.go('app.pricebook-details');

  }

})
.controller('PricebookApprovalDetails', function($scope, $http, $filter, $state,$stateParams, $location, $window, $rootScope,commonServices) {
 
 //$scope.GetAllScheduleMaster();
$scope.GetPriceBookByProjectId = function(){

    $scope.page_number = "1";
    $scope.pagepercount = "100";

   

        $scope.PriceBookID =$rootScope.selectedPricebook.PriceBookID;

      var json = {
                   PriceBookID:  $scope.PriceBookID,
                    };
      commonServices.callApprovalServices("GetPricebookById", json,"251").then(
                function(response) {
                    $scope.Pricebook=[];
                    var prbook = response.result;
                    $scope.priceBookElements = response.elements;
                    //$scope.specColor = response.result[0].specColor;
                   // $scope.item = response.result[0].priceBookElements;

                    //angular.forEach($scope.pricebookdetails, function(prbook) {

                          // var obj = $window._.find($scope.ScheduleMaster, {
                          //           TowerID: value.TowerID,
                          //           ProductID:value.ProductID,
                          //           SpecificationID:value.SpecificationID
                          //      });
                          // console.log(obj);
                          prbook.Milestones=[];
                          prbook.LumpsumValue=0;
                          //console.log("prtower"+prbook.TowerId+",prProduct"+prbook.ProductID+"prspec"+prbook.Specification);
                          angular.forEach($scope.ScheduleMaster, function(schedule) {
                                //console.log("tower"+schedule.TowerID+",Product"+schedule.ProductID+"spec"+schedule.SpecificationID);
                              if(prbook.TowerID==schedule.TowerID && prbook.ProjectProductID==schedule.ProductID && prbook.Specification == schedule.SpecificationID)
                              {
                                //console.log("equal");

                                 var json = {
                                       ScheduleMasterID:  schedule.ScheduleMasterID,
                                       page_number: $scope.page_number,
                                       pagepercount: $scope.pagepercount,
                                  };
                                commonServices.callServices("getMilestones", json).then(
                                   function(response1) {

                                        $scope.Miles=response1.elements;

                                        angular.forEach($scope.Miles, function(mile) {

                                            if(mile.RevenueType=="Lumpsum")
                                            {
                                              prbook.LumpsumValue=prbook.LumpsumValue+mile.RevenueValue;
                                            }
                                            

                                        });
                                          angular.forEach($scope.Miles, function(mile) {

                                            if(prbook.LumpsumValue!=0)
                                            {
                                              if(mile.RevenueType=="Lumpsum")
                                              {
                                                mile.Value=mile.RevenueValue;
                                              }
                                              else
                                              {
                                                mile.Value=prbook.LumpsumValue*(mile.RevenueValue/100);
                                              }
                                                
                                            }
                                            else
                                            {
                                              if(mile.RevenueType=="Lumpsum")
                                              {
                                                mile.Value=mile.RevenueValue;
                                              }
                                              else
                                              {
                                                mile.Value=prbook.TotalValue*(mile.RevenueValue/100);
                                              }
                                              
                                            }
                                            
                                           
                                            
                                            prbook.Milestones= prbook.Milestones.concat(mile);
                                          });

                                       
                                       //console.log($scope.pricebookdetails.Milestones);

                                   }
                                );
                              }

                          });
                               commonServices.LoadingHide();
                              $scope.Pricebook= $scope.Pricebook.concat(prbook);
                              console.log($scope.Pricebook);
                     
                       


                       // });
                }
            ); 
    }
    $scope.GetAllScheduleMaster = function(){
        commonServices.LoadingShow();
        $scope.ProjectID =$rootScope.selectedPricebook.ProjectID;
          $scope.page_number = "1";
          $scope.pagepercount = "100";
      var json = {
                         ProjectId: $scope.ProjectID,
                         page_number: $scope.page_number,
                         pagepercount:$scope.pagepercount
                  };
  

    commonServices.callServices("getSchedules", json).then(
                function(response) {
                    $scope.ScheduleMaster = response.result;

                     $scope.GetPriceBookByProjectId();
      
                }
            );  
 } 
 
  $scope.Approve=function(){
  commonServices.LoadingShow();
  console.log("Approve");
      var json = {

        LastModifiedBy:"251",
        PriceBookId:$rootScope.selectedPricebook.PriceBookID,
        ProjectID:$rootScope.selectedPricebook.ProjectID,
        Remarks:"",        
        UserId: "251"
      
  };
      commonServices.callApprovalServices("PricebookApprovalProcessing", json,"251").then(
         function(response) {
            commonServices.LoadingHide();
            if(response.info.errormessage=="Successfully Approved")
            {
              alert("Successfully Approved");
              $state.go('app.pricebook-list');
            }

         }
         );
  }

   $scope.Reject=function(){
        console.log("Reject");
         commonServices.LoadingShow();
      var json = {

        LastModifiedBy:"251",
        ProjectID:$rootScope.selectedPricebook.ProjectID,
        Remarks:"test",
        PriceBookId:$rootScope.selectedPricebook.PriceBookID,
        UserId: 251
      
  };
      commonServices.callApprovalServices("PricebookRejectProcessing", json,"251").then(
         function(response) {
             commonServices.LoadingHide();
            if(response.info.errormessage=="Rejected Successfully")
            {
              alert("Successfully Rejected");
              $state.go('app.pricebook-list');
            }

         }
         );
  }

})
.controller('OfferApprovalList', function($scope, $http, $filter, $state, $location, $window, $rootScope,commonServices) {
 

 //commonServices.LoadingShow();
   $scope.GetOfferList = function(){
   
    

      var json = {
                      page_number: 1,
                      pagepercount:100
                };
   commonServices.callApprovalServices("GetOfferApprovalList", json,"251").then(
                function(response) {
                    commonServices.LoadingHide();
                  $scope.OfferApprovalList=response.result;
                 
                }
            );  


  } 

  //$scope.GetOfferList(); 

  $scope.PricebookClick=function(pricebook){

      //console.log(schedule);
      $rootScope.selectedPricebook=pricebook;
      $state.go('app.pricebook-details');

  }

})
.controller('OfferApprovalDetails', function($scope, $http, $filter, $state,$stateParams, $location, $window, $rootScope,commonServices) {
 
 commonServices.LoadingShow();



 

var json = {
       OfferId:  2099
      
  };
commonServices.callServices("GetOfferApprovalDetails", json).then(
   function(response) {
     commonServices.LoadingHide();
      
      $scope.SelectedOffer=response;

   }
   );

 $scope.Approve=function(){
  commonServices.LoadingShow();
  //console.log("Approve");
      var json = {

        LastModifiedBy:"251",
        ProjectID:$scope.ScheduleDetails.ProjectID,
        Remarks:"",
        ScheduleMasterID:  $scope.ScheduleDetails.ScheduleMasterID,
        UserId: 251
      
  };
      commonServices.callApprovalServices("PaymentScheduleApprovalProcessing", json,"251").then(
         function(response) {
            commonServices.LoadingHide();
            if(response.info.errormessage=="Successfully Approved")
            {
              alert("Successfully Approved");
              $state.go('app.payment-schedule-list');
            }

         }
         );
  }

   $scope.Reject=function(){
        //console.log("Reject");
         commonServices.LoadingShow();
      var json = {

        LastModifiedBy:"251",
        ProjectID:$scope.ScheduleDetails.ProjectID,
        Remarks:"test",
        ScheduleMasterID:  $scope.ScheduleDetails.ScheduleMasterID,
        UserId: 251
      
  };
      commonServices.callApprovalServices("PaymentScheduleRejectProcessing", json,"251").then(
         function(response) {
             commonServices.LoadingHide();
            if(response.info.errormessage=="Schedule Rejected Successfully")
            {
              alert("Successfully Rejected");
              $state.go('app.payment-schedule-list');
            }

         }
         );
  }

  


  .controller('$ionicList', [
    '$scope',
    '$attrs',
    '$ionicListDelegate',
    '$ionicHistory',
  function ($scope, $attrs, $ionicListDelegate, $ionicHistory) {
              var self = this;
  
              //[NEW] object with can-swipe attr and swipe-direction side attr, default direction is left
              var swipe = {
                  isSwipeable: true,
                  side: 'left'
              };
              var isReorderShown = false;
              var isDeleteShown = false;
  
              var deregisterInstance = $ionicListDelegate._registerInstance(
                  self, $attrs.delegateHandle,
                  function () {
                      return $ionicHistory.isActiveScope($scope);
                  }
              );
              $scope.$on('$destroy', deregisterInstance);
  
              self.showReorder = function (show) {
                  if (arguments.length) {
                      isReorderShown = !!show;
                  }
                  return isReorderShown;
              };
  
              self.showDelete = function (show) {
                  if (arguments.length) {
                      isDeleteShown = !!show;
                  }
                  return isDeleteShown;
              };
  
              //[NEW] get swipe direction attribute and store it in a variable to access in other function
              self.canSwipeItems = function (can) {
                  if (arguments.length) {
                      swipe.isSwipeable = !!can;
                      swipe.side = $attrs.swipeDirection;
                  }
                  return swipe;
              };
  
              self.closeOptionButtons = function () {
                  self.listView && self.listView.clearDragEffects();
              };
  }]);

  
  
});



