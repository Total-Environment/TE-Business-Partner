
angular.module('starter.controllers')
.service('dataService', function($scope, $http) {
})
.controller('ReimbursementController', ['$scope', '$ionicPopup', '$ionicModal', '$http', '$state', '$window', '$stateParams', '$filter',  function ($scope,$ionicPopup,$ionicModal,$http,$state,$window,$stateParams,$filter,Auth, $rootScope,location) {
    var vm = this;

    vm.claimbook = [];
    vm.ClaimBookCollection = [];
    vm.ClaimBookSelected = [];
    vm.ClaimTypeCollection = [];
    vm.getClaimBookByID = getClaimBookByID;
    vm.getAllClaimBookByEmpId = getAllClaimBookByEmpId;
    vm.getClaimType = getClaimType;
    vm.getClaimCategory = getClaimCategory;
    vm.saveClaimBook = saveClaimBook;
    vm.addClaimItem = addClaimItem;
    vm.saveClaimBookLog=saveClaimBookLog;
    vm.ClaimBookCollectionForMgrApproval=[];
    vm.ClaimBookCollectionForFinanceApproval=[];
    vm.ClaimBookCollectionForApproval=[];
    vm.AllEmployeeCollection=[];
    vm.getManagerApprovals = getManagerApprovals;
    vm.getWBSByFundCenter = getWBSByFundCenter;
    vm.calimItemAmtCalc=calimItemAmtCalc;
    // vm.showPopup=showPopup;
    // vm.firstpopup=firstpopup;
    vm.ClaimItemCollection = [];
    vm.ClaimItem = [];
    vm.ClaimCategoryCollection = [];
    vm.saveClaimItem = saveClaimItem;
    vm.pickListTransportMode =[];
    vm.ClaimUnitCollection = [];
    vm.ClaimFundCenterCollection=[];
    vm.WBSByFundCenterCollection=[];
    vm.getExchangeRatebyDate = getExchangeRatebyDate;
    vm.ExchangeRateForSelected_Currency = [];
    vm.ClaimBookLogCollection=[];
    vm.ClaimCategoryDetails={};
    vm.getAllUnitByClaimCategory = getAllUnitByClaimCategory;
    vm.mode = 'Insert';
    vm.claimitem_mode='Insert';
    vm.ClaimItemClaimCategory={};
    vm.ClaimBookSelected.ClaimDate=new Date();
    vm.AutoGenerationUniqueId="";

  /*Call services*/

    /*Development*/
      // var ReimbursementUrl='http://localhost:40496/';

    /*Development-192.168.51.248*/
      var ReimbursementUrl='http://192.168.51.248/TEExpenseManagementAPI/';
      var TELeadManagemantApi='http://192.168.51.248/TELeadManagementAPI/';
      var TEHRISAPI = 'http://192.168.51.248/TEHRISAPI';

    /*UAT-192.168.51.251*/
      // var ReimbursementUrl='http://192.168.51.251/TEExpenseManagementAPI/';
      // var TELeadManagemantApi='http://192.168.51.251/TELeadManagementAPI/';
      // var TEHRISAPI = 'http://192.168.51.251/TEHRISAPI';


    var urlItemMapper = 
    {
      getClaimBookList: [ReimbursementUrl + 'api/ClaimBook/GetAllClaimBook', 'get'],
      getAllClaimBookByEmpId: [ReimbursementUrl + 'api/ClaimBook/GetClaimBookByEmpID', 'get'],
      getClaimBookByID: [ReimbursementUrl + 'api/ClaimBook/GetDetailsByClaimBookID', 'get'],
      getClaimItemByID: [ReimbursementUrl + 'api/ClaimItem/GetDetailsByClaimItemID', 'get'],
      getClaimType:[ReimbursementUrl + 'api/ClaimType/GetAllClaimType', 'get'],
      getClaimCategory:[ReimbursementUrl + 'api/ClaimCategory/GetCategoryByClaimTypeID', 'get'],
      saveClaimBook:[ReimbursementUrl + 'api/ClaimBook/SaveClaimBook', 'post'],
      saveClaimItem:[ReimbursementUrl + 'api/ClaimItem/Post', 'post'],
      getManagerApprovals:[ReimbursementUrl + 'api/ClaimBookApproval/GetClaimBookByApproverID', 'get'],
      getPickList:[TELeadManagemantApi + 'api/Account/GetPickListBy', 'post'],
      getFundCenter :[ReimbursementUrl + 'api/ClaimBook/GetAllFundCenter', 'get'],
      getWBSByFundCenter :[ReimbursementUrl + 'api/ClaimBook/GetAllWBSDetailsByFundCenter', 'get'],
      getExchangeRatebyDate :[ReimbursementUrl + 'api/ExchangeRate/GetExchangeRatebyDate','get'],
      getAllUnitByClaimCategory :[ReimbursementUrl + 'api/ClaimBook/GetAllUnitByClaimCategory','get'],
      getClaimBookLog :  [ReimbursementUrl + 'api/ClaimBookLog/GetLogByClaimBookID', 'get'],
      saveClaimBookLog : [ReimbursementUrl + 'api/ClaimBookLog/SaveClaimBookLog', 'post'],
      getAllEmployee:[TEHRISAPI + '/api/TEEmployeeInformation/GetAll', 'get'],
      getAutoGenerationUniqueId: [ReimbursementUrl + '/api/ClaimBook/GetAutoGenerationUniqueId','get']
    }
    function callServices(api, json) 
    {
      var url = urlItemMapper[api][0];
      if (urlItemMapper[api][1].toLowerCase() === 'get') 
      {
          if (angular.isDefined(json)) 
          {
              var request = "";
              url += '?';
             // $window._.forIn(json, function(value, key) {
              angular.forEach(json, function(value, key){
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
      }).then(function(response) 
          {               
              return response.data;
          }, 
          function(response) 
          {
              return response.data;
          });
    }
 /*Call services*/
  activate();
    function activate() 
    {
      getClaimType();
      getFundCenter();
      getPickList();
      getAllEmployee();
      getAutoGenerationUniqueId();
      if ($stateParams && $stateParams.claimbookid) 
      {              
        getClaimBookByID($stateParams.claimbookid);            
      }
      setTimeout(function()
      {
        if ($stateParams && $stateParams.claimitemid) 
        {
          getClaimItemByID($stateParams.claimitemid);
        }
      },3000);     
      if($stateParams && $stateParams.user=='Employee')
      {
        getAllClaimBookByEmpId();
      }
      if($stateParams && ($stateParams.user=='Manager' || $stateParams.user=='Finance'))
      {
        getManagerApprovals();
      }
        
    }
    // function getAllClaimBook() {
    // 	console.log("getAllClaimBook");
    //         var data = {
    //     "isdeleted": "false"
    // };
    //         commonServices.callServices("getClaimBookList", data).then(
    //             function(response) {
    //                 if (response.data) {
    //                 	console.log(response.data);
    //                     vm.claimbook = vm.claimbook.concat(response.data);
    //                     console.log(vm.claimbook);
                      
    //                 }
                   
    //             }
    //         );
    //     }
    
 	  function getAllClaimBookByEmpId()
    {
      console.log("getAllClaimBookByEmpId");
      var data={
          isdeleted : false,
          userProfileID: 1630
          // userProfileID: 5080,
          /*userProfileID: 3375*/
      };
      callServices("getAllClaimBookByEmpId", data).then(
          function(response) 
          {
              vm.ClaimBookCollection = response;                   
          }
        );
 	      /*var url = 'http://localhost:40496/api/ClaimBook/Get';
        var method = 'get';
  	    $http({
  	    method: 'GET',
  	    dataType: 'json',
  	    url: 'http://localhost:40496/api/ClaimBook/Get',
  	    headers: {'Content-Type': 'application/json; charset=UTF-8'},
  	    data: data
  	    }).success (function(response)
          {
  	        console.log(response);
  	        vm.ClaimBookCollection = response;
  	      });*/       
	 }
   function getClaimType() 
   {
      console.log("getClaimType");
      var data={
          isdeleted : false
      };
      callServices("getClaimType", data).then(
        function(response) 
        {
          vm.ClaimTypeCollection = response;   
        }
        );
   }
    function getClaimCategory(claimTypeID) 
    {
      console.log("getClaimCategory");
      var data={
              isdeleted : false,
              claimTypeID:claimTypeID
      };
      callServices("getClaimCategory", data).then(
        function(response) 
        {
          vm.ClaimCategoryCollection = response;  
        }
      );
    }
    function getFundCenter() 
    {
      console.log("getFundCenter");
      var data={
          isdeleted : false
      };
      callServices("getFundCenter", data).then(
        function(response) 
        {
          vm.ClaimFundCenterCollection = response;   
        }
      );
    }
    function getAllUnitByClaimCategory(ClaimCategory) 
    {
      console.log("getAllUnitByClaimCategory");
      vm.ClaimItemClaimCategory=JSON.parse(ClaimCategory);    
      var data={
          isdeleted : false,
          ClaimCategoryID :vm.ClaimItemClaimCategory.UniqueId
      };
      callServices("getAllUnitByClaimCategory", data).then(
        function(response) 
        {
          vm.ClaimUnitCollection = response;   
        }
      );
    }
     function getAllUnitByClaimCategoryByID(ClaimCategory) 
    {
      console.log("getAllUnitByClaimCategoryByID");
       vm.ClaimItemClaimCategory=ClaimCategory;   
      var data={
          isdeleted : false,
          ClaimCategoryID :vm.ClaimItemClaimCategory.UniqueId
      };
      callServices("getAllUnitByClaimCategory", data).then(
        function(response) 
        {
          vm.ClaimUnitCollection = response;   
        }
      );
    }
    function getWBSByFundCenter(fundcenterID) 
    {
      console.log("getWBSByFundCenter");
      var data={
          fundcenter : fundcenterID
      };
      callServices("getWBSByFundCenter", data).then(
        function(response) 
        {
          vm.WBSByFundCenterCollection = response;   
        }
      );
    }
    function getExchangeRatebyDate(claimItem,toCurrency)
    {
      console.log("getExchangeRatebyDate");
      var fromDate = $filter('date')(claimItem.FromDate, "yyyy-MM-dd HH:mm:ss");
      var data={
          fromCurrency : claimItem.FromCurrency,
          toCurrency : toCurrency,
          fromDate : fromDate
      };
      callServices("getExchangeRatebyDate", data).then(
        function(response) 
        {
          vm.ExchangeRateForSelected_Currency = response;
          calimItemAmtCalc(vm.ClaimItem,vm.ExchangeRateForSelected_Currency.ExchangeRate);   
        }
      );
    }
    
	  function getClaimBookByID(id)
    {
      console.log("getClaimBookByID");
      vm.mode = 'Edit';
      var data={
          isdeleted : false,
          claimBookID : id
      };
      callServices("getClaimBookByID", data).then(
          function(response) 
          {
            vm.ClaimBookSelected = response;
            vm.AutoGenerationUniqueId=response.UniqueId;
            getClaimCategory(response.ClaimType.UniqueId);
            getWBSByFundCenter(response.FundCenter.UniqueId);
            getClaimBookLog(response.UniqueId);

          }
      );
	  }

    function getClaimItemByID(id)
    {
      console.log("getClaimItemByID");
      vm.claimitem_mode='Edit';
      vm.mode = 'Edit';
      var data={
          isdeleted : false,
          claimItemID : id
      };
      callServices("getClaimItemByID", data).then(
        function(response) 
        {
          vm.ClaimItem = response;
          vm.ClaimItem.FromDate = new Date(vm.ClaimItem.FromDate);
          vm.ClaimItem.ToDate = new Date(vm.ClaimItem.ToDate);
          vm.PaidBy = response.IsPaidByCompany==1?"Company":"Employee";
          vm.ChargedTo = response.AmtChargedtoCustomer!=""?"Customer":"";
          vm.ChargedTo = response.AmtChargedtoCompany!=""?"Company":"";
          vm.ChargedTo = response.AmtChargedtoVendor!=""?"Vendor":"";
          getExchangeRatebyDate(response,'INR');
          getAllUnitByClaimCategoryByID(response.ClaimCategory);
        }
      );
    }

    
    function addClaimItem()
    {
      vm.ClaimItemCollection=[];
      vm.ClaimItemCollection.push({
        ClaimCategory :  vm.ClaimItemClaimCategory.UniqueId,
        Merchant : vm.ClaimItem.Merchant,
        AmountInINR : vm.ClaimItem.AmountInINR,
        BaseAmount : vm.ClaimItem.BaseAmount,
        BillNo: vm.ClaimItem.BillNo,
        FromDate: $filter('date')(vm.ClaimItem.FromDate, "yyyy-MM-dd HH:mm:ss"),
        ToDate:  $filter('date')(vm.ClaimItem.ToDate, "yyyy-MM-dd HH:mm:ss"),
        Mode:vm.ClaimItem.Mode,
        FromPlace : vm.ClaimItem.FromPlace,
        ToPlace : vm.ClaimItem.ToPlace,
        FromCurrency:vm.ClaimItem.FromCurrency,
        JobAssignedBy : vm.ClaimItem.JobAssignedBy,
        Quantity : vm.ClaimItem.Quantity,
        Rate : vm.ClaimItem.Rate,
        Unit : vm.ClaimItem.Unit,
        Justification:vm.ClaimItem.Justification,
        IsPaidByCompany : vm.PaidBy =="Company"?1:0,
        AmtChargedtoCompany : vm.ChargedTo == "Company"?vm.ClaimItem.AmountInINR:"",
        AmtChargedtoCustomer : vm.ChargedTo == "Customer"?vm.ClaimItem.AmountInINR:"",
        AmtChargedtoVendor : vm.ChargedTo == "Vendor"?vm.ClaimItem.AmountInINR:"",
        //EntityCode: vm.ClaimItem.EntityCode,
        WBSCode: vm.ClaimItem.WBSCode,
        LastModifiedBy :"User",
        CreatedBy :"User",
        UniqueId : vm.ClaimItem.UniqueId!=""?vm.ClaimItem.UniqueId:""
      });
        // if( vm.ClaimItem.UniqueId !=null )
        //     {
        //        vm.ClaimItemCollection.push({
        //         UniqueId :  vm.ClaimItem.UniqueId
        //        });
              
        //     }                            
    }
    function saveClaimBook(Status,ClaimBookSelected,AutoGenerationUniqueId)
    {
      console.log("saveClaimBook");
      if(Status == "Draft")
      {
        addClaimItem();
      }      
      var data={
          isdeleted : false,
          ClaimDate: $filter('date')(ClaimBookSelected.ClaimDate, "yyyy-MM-dd HH:mm:ss"),
          Remarks: ClaimBookSelected.Remarks,
          ClaimType: ClaimBookSelected.ClaimType.UniqueId,
          //PaymentRefDetails: "Cheqno1234",
          CreatedBy:"User",
          LastModifiedBy:"User",
          Status:Status,
          FundCenter : ClaimBookSelected.FundCenter.UniqueId,
          Employee:1630,
          //Employee:5080,
          // Employee:3375,
          ClaimItem: vm.ClaimItemCollection
      };
      if( ClaimBookSelected.UniqueId !=null )
      {
        data.UniqueId = vm.AutoGenerationUniqueId;
      }
      callServices("saveClaimBook", data).then(
        function(response) 
        {
          vm.ClaimBookSelected = response;  
          vm.ClaimItemCollection=[];
          $window.location.reload(true);
          if(response.Status == "Draft")
          {
            $state.go('app.Reimbursement-view',{claimbookid:response.UniqueId});
          }
          else if(response.Status == "Submitted for Approval" || response.Status == "Manager Approved" || response.Status == "FundCenter Owner Approved")
          {
            $state.go('app.Reimbursement-manager',{user:'Manager'});               
          }
          else if(response.Status == "Approved")
          {
            $state.go('app.Reimbursement-Finance',{user:'Finanace'});              
          }
        }
      );
    }
    function saveClaimItem()
    {
      console.log("saveClaimItem");
      var data={
          isdeleted : false,
          ClaimBook: vm.ClaimBookSelected.UniqueId,
          ClaimCategory : vm.ClaimItem.ClaimCategory,
          Merchant : vm.ClaimItem.Merchant,
          FromPlace: vm.ClaimItem.FromPlace,
          ToPlace: vm.ClaimItem.ToPlace,
          JobAssignedBy: vm.ClaimItem.JobAssignedBy,
          Rate :vm.ClaimItem.Rate,
          Unit: vm.ClaimItem.Unit,
          Quantity: vm.ClaimItem.Quantity,
          BaseAmount : vm.ClaimItem.BaseAmount,
          AmountInINR : vm.ClaimItem.AmountInINR,
          IsPaidByCompany : 1,
          AmtChargedtoCustomer: vm.ClaimItem.AmtChargedtoCustomer,
          BillNo: vm.ClaimItem.BillNo,
          FromDate: "2017-01-04",
          ToDate: "2017-02-06",
          LastmodifiedBy :"User",
          CreatedBy :"User",
          Mode:vm.ClaimItem.Mode         
      };
      if( vm.ClaimItem.UniqueId !=null )
      {
        data.UniqueId =  vm.ClaimItem.UniqueId;
      }
      callServices("saveClaimItem", data).then(
        function(response) 
        {
            vm.ClaimItem = response;
            $state.go('app.Reimbursement-view',{claimbookid:vm.ClaimItem.ClaimBook});
            $window.location.reload(true); 
        }
      );
    }
    function getManagerApprovals()
    {
      console.log("getManagerApprovals");
      var data={
          isdeleted : false,
          approverID : 1630
      };
      callServices("getManagerApprovals", data).then(
        function(response) 
        {
          vm.ClaimBookCollectionForApproval = response;
          angular.forEach(vm.ClaimBookCollectionForApproval, function(value) { 
            if(value.Status=="Submitted for Approval" || value.Status=="Manager Approved") 
            {
              vm.ClaimBookCollectionForMgrApproval=vm.ClaimBookCollectionForMgrApproval.concat(value);
            }
            if(value.Status=="FundCenter Owner Approved")
            {
              vm.ClaimBookCollectionForFinanceApproval=vm.ClaimBookCollectionForFinanceApproval.concat(value);
            } 
          });   
        }
      );
    }
    function getPickList() 
    {
      var data = {
          "PickListNames": ["ModeofTransport","Currency"]
      };
      callServices("getPickList", data).then(
        function(response) 
        {
          if (response[0].PickLstNmeVluMap) 
          {
            vm.pickListTransportMode = [];
            vm.pickListCurrency=[];   
            angular.forEach(response[0].PickLstNmeVluMap.ModeofTransport, function(value, key) 
            {
              vm.pickListTransportMode.push(value.ChildDescription);
            });
            angular.forEach(response[0].PickLstNmeVluMap.Currency, function(value, key) 
            {
              vm.pickListCurrency.push(value.ChildDescription);
                
            });
          }  
        }
      );            
    }
    function getClaimBookLog(claimBookID)
    {
      console.log("getClaimBookLog");
      console.log(claimBookID);
      var data={
          isdeleted : false,
          claimBookID : claimBookID,
          userProfileID : 1630

      };
      callServices("getClaimBookLog", data).then(
        function(response) 
        {
          vm.ClaimBookLogCollection = response;
          console.log(vm.ClaimBookLogCollection);
        }
      );

    }
    function saveClaimBookLog()
    {
      console.log("saveClaimBookLog");
      var data={
          ClaimBook : vm.ClaimBookSelected.UniqueId,
          Employee : 1630,
          Remarks : vm.ClaimBookLogSelected.Remarks,
          Status : "Comments",
          LastmodifiedBy :"User",
          CreatedBy :"User",
      };
      callServices("saveClaimBookLog", data).then(
        function(response) 
        {
            vm.ClaimBookLogSelected.Remarks="";
           getClaimBookLog(vm.ClaimBookSelected.UniqueId);

        }
      );
    }
   
    
    function calimItemAmtCalc(claimItem,ExchangeRate)
    {
      if(claimItem.Rate !=null)
      {
        console.log("calimItemAmtCalc");
        console.log(ExchangeRate);
        vm.ClaimItem.BaseAmount = claimItem.Rate * claimItem.Quantity;
        vm.ClaimItem.AmountInINR = claimItem.BaseAmount!=null?claimItem.BaseAmount * ExchangeRate:0;
      }
    }
  
    /*Get all employee details on page load*/
        function getAllEmployee() 
        {
          console.log("getAllEmployee");
            var data = {
                "isdeleted": "false"
            };
           callServices("getAllEmployee", data).then(
            function(response) 
            {
                vm.AllEmployeeCollection = vm.AllEmployeeCollection.concat(response);
            });
        }
         function getAutoGenerationUniqueId()
          {
            console.log("getAutoGenerationUniqueId");
            var data = {
                  "isdeleted": false
              };
             callServices("getAutoGenerationUniqueId", data).then(
              function(response) 
              {
                  vm.AutoGenerationUniqueId = response;
              });
          }
//    function firstpopup(){
//   $scope.modalFirst.show()
// }
//   $ionicModal.fromTemplateUrl('templates/modal.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modalFirst = modal;
//     })
  

//  function showPopup() {

//    $scope.data = {}

//    var myPopup = $ionicPopup.show({

//       template: ' Enter Password<input type="password" ng-model="data.userPassword">   <br> Enter Confirm Password  <input type="password" ng-model="data.confirmPassword" > ',

//       title: 'Enter Password',

//       subTitle: 'Please use normal things',

//       scope: $scope,

//       buttons: [{

//          text: 'Cancel'

//       }, {

//          text: '<b>Save</b>',

//          type: 'button-positive',

//          onTap: function(e) {

//             if (!$scope.data.userPassword) {

//                //don't allow the user to close unless he enters wifi password

//                e.preventDefault();

//             } else {

//                return $scope.data;

//             }

//          }

//       }, ]

//    });

//    myPopup.then(function(res) {

//       if (res) {

//          if (res.userPassword == res.confirmPassword) {

//             console.log('Password Is Ok');

//          } else {

//             console.log('Password not matched');

//          }

//       } else {

//          console.log('Enter password');

//       }

//    });

// };
}]);