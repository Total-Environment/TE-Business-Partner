angular.module('starter', ['ionic', 'starter.controllers','starter.services','ionic-datepicker','ngCordova','angular.filter'])

.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
})

.config(function($stateProvider, $urlRouterProvider, $provide) {
 $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
  })

  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

 .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'loginController'
      }
    }
  })
.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }
    }
  })
 .state('app.lead', {
      url: '/lead',
      views: {
        'menuContent': {
          templateUrl: 'templates/lead.html',
          controller: 'GetLeadStageAndCount'
          
        }
      }
    })
 .state('app.particular_prospect_details', {
    url: '/particular_prospect_details/{id}',
    views: {
      'menuContent': {
        templateUrl: 'templates/particular_prospect_details.html',
      
        
      }
    }
  })


.state('app.create_prospect', {
    url: '/create_prospect',
    views: {
      'menuContent': {
        templateUrl: 'templates/create_prospect.html',
        //controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.prtfolio', {
    url: '/prtfolio',
    views: {
      'menuContent': {
        templateUrl: 'templates/prtfolio.html'
        //controller: 'PlaylistCtrl'
      }
    }
  })

   .state('app.portfolio_unit', {
    url: '/portfolio_unit',
    views: {
      'menuContent': {
        templateUrl: 'templates/portfolio_unit.html'
        //controller: 'GetParticularLeadData'
      }
    }
  })

  .state('app.LeadStageForConnected', {
   url: '/LeadStageForConnected',
   views: {
     'menuContent': {
       templateUrl: 'templates/LeadStageForConnected.html'
       //controller: 'PlaylistCtrl'
     }
   }
 })

   .state('app.prospect', {
    url: '/prospect',
    views: {
      'menuContent': {
        templateUrl: 'templates/prospect.html'

      }
    }
  })

  .state('app.prtfolio_project_info', {
    url: '/prtfolio_project_info/{id}',
      params:{id:null,PrjInfo:null},
    views: {
      'menuContent': {
       
        templateUrl: 'templates/prtfolio_project_info.html',
        controller: 'GetParticularProjectID'
      }
    }
  })

   .state('app.sales_home', {
    url: '/sales_home',
    views: {
      'menuContent': {
        templateUrl: 'templates/sales_home.html'
      }
    }
  })

  .state('app.notification_panel', {
   url: '/notification_panel',
   views: {
     'menuContent': {
       templateUrl: 'templates/notification_panel.html'
     }
   }
 })

   .state('app.LeadStageForEnquiry', {
    url: '/LeadStageForEnquiry',
    views: {
      'menuContent': {
        templateUrl: 'templates/LeadStageForEnquiry.html'

      }
    }
  })

  //  .state('app.LeadStageForProspect', {
  //   url: '/LeadStageForProspect',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/LeadStageForProspect.html'

  //     }
  //   }
  // })
  
   .state('app.LeadStageForSuspect', {
    url: '/LeadStageForSuspect',
    views: {
      'menuContent': {
        templateUrl: 'templates/LeadStageForSuspect.html'

      }
    }
  })
  
    .state('app.example', {
    url: '/example',
    views: {
      'menuContent': {
        templateUrl: 'templates/example.html'

      }
    }
  })
  
   .state('app.new_temp_data', {
    url: '/new_temp_data',
    views: {
      'menuContent': {
        templateUrl: 'templates/new_temp_data.html'

      }
    }
  })
  
  .state('app.LeadDataBytemparature', {
    url: '/LeadDataBytemparature/{id}',
    views: {
      'menuContent': {
        templateUrl: 'templates/LeadDataBytemparature.html',
        controller: 'GetParticularLeadData'
      }
    }
  })
  
   .state('app.cold_temp_data', {
    url: '/cold_temp_data',
    views: {
      'menuContent': {
        templateUrl: 'templates/cold_temp_data.html'

      }
    }
  })
  
  .state('app.LeadDataBytemparatureCold', {
    url: '/LeadDataBytemparatureCold/{id}',
    views: {
      'menuContent': {
        templateUrl: 'templates/LeadDataBytemparatureCold.html',
        controller: 'GetParticularLeadData'
      }
    }
  })
  
   .state('app.hot_temp_lead_data', {
    url: '/hot_temp_lead_data',
    views: {
      'menuContent': {
        templateUrl: 'templates/hot_temp_lead_data.html'
      }
    }
  })
  .state('app.LeadDataBytemparatureHot', {
    url: '/LeadDataBytemparatureHot/{id}',
    views: {
      'menuContent': {
        templateUrl: 'templates/LeadDataBytemparatureHot.html',
        controller: 'GetParticularLeadData'
      }
    }
  })


  /*Reimbursement States*/

/*List of Claims for employee*/
   .state('app.Reimbursement', {
    url: '/Reimbursement/:user?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Employee/Reimbursement.html',
        //controller : 'ReimbursementController as vm'
      }
    }
  })
/*Claim book detail view*/
   .state('app.Reimbursement-view', {
    url: '/Reimbursement-view/:claimbookid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Employee/Reimbursement-view.html'
      }
    }
  })
/*Claim Book and Item creation view*/
   .state('app.Reimbursement-create', {
    url: '/Reimbursement-create/:claimbookid?,claimitemid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Employee/Reimbursement-create.html'
      }
    }
  })
  /*Not in use*/
  // .state('app.Reimbursement-add-item', {
  //   url: '/Reimbursement-add-item/:id?',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/Reimbursement/Employee/Reimbursement-add-item.html'
  //     }
  //   }
  // })
/*Claim item detail view*/
  .state('app.Reimbursement-view-item', {
    url: '/Reimbursement-view-item/:claimitemid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Employee/Reimbursement-view-item.html'
      }
    }
  })
  /*List of claims for manager approval*/
  .state('app.Reimbursement-manager', {
    url: '/Reimbursement-manager/:user?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Manager/Reimbursement-manager.html',
        //controller:"ReimbursementController as vm"
      }
    }
  })
    /*Claim book detail for manager approval*/
  .state('app.Reimbursement-manager-view', {
    url: '/Reimbursement-manager-view/:claimbookid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Manager/Reimbursement-manager-view.html'
      }
    }
  })
  /*Not in use*/
  // .state('app.Reimbursement-manager-view-item', {
  //   url: '/Reimbursement-manager-view-item',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/Reimbursement/Manager/Reimbursement-manager-view-item.html'
  //     }
  //   }
  // })
/*List of Claims finance approval*/
  .state('app.Reimbursement-Finance', {
    url: '/Reimbursement-Finance/:user?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Finance/Reimbursement-Finance.html'
      }
    }
  })
  /*Claim book detail for finance approval*/
  .state('app.Reimbursement-Finance-view', {
    url: '/Reimbursement-Finance-view/:claimbookid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Finance/Reimbursement-Finance-view.html'
      }
    }
  })
  /*Not in use*/
  // .state('app.Reimbursement-Finance-view-item', {
  //   url: '/Reimbursement-Finance-view-item',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/Reimbursement/Finance/Reimbursement-Finance-view-item.html'
  //     }
  //   }
  // })
  /*Reimbursement landing view*/
  .state('app.reimbus-all', {
    url: '/reimbus-all',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/reimbus-all.html'
      }
    }
  })

  /*Approvals Home view*/
  .state('app.Approvals_home', {
    url: '/Approvals_home',
    views: {
      'menuContent': {
        templateUrl: 'templates/Approvals_home.html'
      }
    }
  })
  .state('app.offer-list', {
    url: '/offer-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/offer-list.html'
      }
    }
  })
  .state('app.offer-approval-details', {
    url: '/offer-approval-details',
    views: {
      'menuContent': {
        templateUrl: 'templates/offer-approval-details.html'
      }
    }
  })
  .state('app.payment-schedule-list', {
    url: '/payment-schedule-list',

    views: {
      'menuContent': {
        templateUrl: 'templates/payment-schedule-list.html',
         controller: 'PaymentScheduleApprovalListController'
      }
    }
  })
  .state('app.payment-schedule-details', {
    url: '/payment-schedule-details',
     params:{Schedule:null},
    views: {
      'menuContent': {
        templateUrl: 'templates/payment-schedule-details.html',
        controller: 'PaymentScheduleApprovalDetails'
      }
    }
  })

  .state('app.offer-expiry-extension ', {
    url: '/offer-expiry-extension',
    views: {
      'menuContent': {
        templateUrl: 'templates/offer-expiry-extension.html'
      }
    }
  })

  .state('app.change-order-list ', {
    url: '/change-order-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/change-order-list.html'
      }
    }
  })
   .state('app.cancellation-list', {
    url: '/cancellation-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/cancellation-list.html'
      }
    }
  })
  .state('app.cancellation-approval-details', {
    url: '/cancellation-approval-details',
    views: {
      'menuContent': {
        templateUrl: 'templates/cancellation-approval-details.html'
      }
    }
  })
  .state('app.customization-list', {
    url: '/customization-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/customization-list.html'
      }
    }
  })
  .state('app.customization-details', {
    url: '/customization-details',
    views: {
      'menuContent': {
        templateUrl: 'templates/customization-details.html'
      }
    }
  })
  .state('app.agreement-assignment', {
    url: '/agreement-assignment',
    views: {
      'menuContent': {
        templateUrl: 'templates/agreement-assignment.html'
      }
    }
  })
  .state('app.agreement-assignment-details', {
    url: '/agreement-assignment-details',
    views: {
      'menuContent': {
        templateUrl: 'templates/agreement-assignment-details.html'
      }
    }
  })
  .state('app.milestonebilling-list', {
    url: '/milestonebilling-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/MilestoneBilling-List.html'
      }
    }
  })
    .state('app.accounttransfer-list', {
    url: '/accounttransfer-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/AccountTransfer-List.html'
      }
    }
  })
    .state('app.pricebook-list', {
    url: '/pricebook-list',

    views: {
      'menuContent': {
        templateUrl: 'templates/PricebookApproval-List.html'
      }
    }
  })
  .state('app.pricebook-details', {
    url: '/pricebook-details',     
    views: {
      'menuContent': {
        templateUrl: 'templates/PricebookApproval-Details.html'
      }
    }
  })
// Sales pending pages 18-05-2017

  .state('app.sales-offer', {
    url: '/sales-offer',     
    views: {
      'menuContent': {
        templateUrl: 'templates/sales-offer.html'
      }
    }
  })
  .state('app.sale-offer-details', {
    url: '/sale-offer-details',     
    views: {
      'menuContent': {
        templateUrl: 'templates/sale-offer-details.html'
      }
    }
  })

.state('app.sales-closure', {
    url: '/sales-closure',     
    views: {
      'menuContent': {
        templateUrl: 'templates/sales-closure.html'
      }
    }
  })
  .state('app.sale-closure-sale-details', {
    url: '/sale-closure-sale-details',     
    views: {
      'menuContent': {
        templateUrl: 'templates/sale-closure-sale-details.html'
      }
    }
  })
  .state('app.customer-payments', {
    url: '/customer-payments',     
    views: {
      'menuContent': {
        templateUrl: 'templates/customer-payments.html'
      }
    }
  })
  .state('app.projection-milestone-approval', {
    url: '/projection-milestone-approval',     
    views: {
      'menuContent': {
        templateUrl: 'templates/projection-milestone-approval.html'
      }
    }
  })
.state('app.collection_home', {
    url: '/collection_home',     
    views: {
      'menuContent': {
        templateUrl: 'templates/collection_home.html'
      }
    }
  })
  .state('app.daily-receipts', {
    url: '/daily-receipts',     
    views: {
      'menuContent': {
        templateUrl: 'templates/daily-receipts.html'
      }
    }
  })
  .state('app.fortnightly-receipts', {
    url: '/fortnightly-receipts',     
    views: {
      'menuContent': {
        templateUrl: 'templates/fortnightly-receipts.html'
      }
    }
  })
  .state('app.annual-receipts', {
    url: '/annual-receipts',     
    views: {
      'menuContent': {
        templateUrl: 'templates/annual-receipts.html'
      }
    }
  })
  .state('app.overdue-confirmation', {
    url: '/overdue-confirmation',     
    views: {
      'menuContent': {
        templateUrl: 'templates/overdue-confirmation.html'
      }
    }
  })
// Sales pending pages 24-05-2017
.state('app.overdue-payments', {
    url: '/overdue-payments',     
    views: {
      'menuContent': {
        templateUrl: 'templates/overdue-payments.html'
      }
    }
  })

  .state('app.pending-invoices', {
    url: '/pending-invoices',     
    views: {
      'menuContent': {
        templateUrl: 'templates/pending-invoices.html'
      }
    }
  })
  .state('app.closed', {
    url: '/closed',     
    views: {
      'menuContent': {
        templateUrl: 'templates/closed.html'
      }
    }
  })
  .state('app.closed-detail-project', {
    url: '/closed-detail-project',     
    views: {
      'menuContent': {
        templateUrl: 'templates/closed-detail-project.html'
      }
    }
  })
  .state('app.followups', {
    url: '/followups',     
    views: {
      'menuContent': {
        templateUrl: 'templates/followups.html'
      }
    }
  })
  .state('app.followup-create', {
    url: '/followup-create',     
    views: {
      'menuContent': {
        templateUrl: 'templates/followup-create.html'
      }
    }
  })
  .state('app.followup-call', {
    url: '/followup-call',     
    views: {
      'menuContent': {
        templateUrl: 'templates/followup-call.html'
      }
    }
  })
  .state('app.followup-sitevisit', {
    url: '/followup-sitevisit',     
    views: {
      'menuContent': {
        templateUrl: 'templates/followup-sitevisit.html'
      }
    }
  })
  .state('app.pending-transition', {
    url: '/pending-transition',     
    views: {
      'menuContent': {
        templateUrl: 'templates/pending-transition.html'
      }
    }
  })
  .state('app.customer-details', {
    url: '/customer-details',     
    views: {
      'menuContent': {
        templateUrl: 'templates/customer-details.html'
      }
    }
  })
   .state('app.closed-agreement', {
    url: '/closed-agreement',     
    views: {
      'menuContent': {
        templateUrl: 'templates/closed-agreement.html'
      }
    }
  })
  .state('app.profile', {
    url: '/profile',     
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })

  .state('app.pipeline', {
    url: '/pipeline',     
    views: {
      'menuContent': {
        templateUrl: 'templates/pipeline.html'
      }
    }
  })

   .state('app.appointment-view', {
    url: '/appointment-view',     
    views: {
      'menuContent': {
        templateUrl: 'templates/appointment-view.html'
      }
    }
  })
  .state('app.performance', {
    url: '/performance',     
    views: {
      'menuContent': {
        templateUrl: 'templates/performance.html'
      }
    }
  })
  .state('app.calendar', {
    url: '/calendar',     
    views: {
      'menuContent': {
        templateUrl: 'templates/calendar.html',
		controller: 'calendarController'
      }
    }
  })
   .state('app.appointment-details', {
    url: '/appointment-details',     
    views: {
      'menuContent': {
        templateUrl: 'templates/appointment-details.html'
      }
    }
  })
   .state('app.sample-offer', {
    url: '/sample-offer',     
    views: {
      'menuContent': {
        templateUrl: 'templates/sample-offer.html'
      }
    }
  })
   .state('app.check-list-details', {
    url: '/check-list-details',     
    views: {
      'menuContent': {
        templateUrl: 'templates/check-list-details.html'
      }
    }
  })

  .state('app.popup', {
    url: '/popup',     
    views: {
      'menuContent': {
        templateUrl: 'templates/popup.html'
      }
    }
  })
  .state('app.helpdesk', {
    url: '/helpdesk',     
    views: {
      'menuContent': {
        templateUrl: 'templates/helpdesk.html'
      }
    }
  })
  .state('app.new-ticket', {
    url: '/new-ticket',     
    views: {
      'menuContent': {
        templateUrl: 'templates/new-ticket.html'
      }
    }
  })
  .state('app.new-ticket-create', {
    url: '/new-ticket-create',     
    views: {
      'menuContent': {
        templateUrl: 'templates/new-ticket-create.html'
      }
    }
  })

  .state('app.track-ticket', {
    url: '/track-ticket',     
    views: {
      'menuContent': {
        templateUrl: 'templates/track-ticket.html'
      }
    }
  })
  .state('app.track-ticket-details', {
    url: '/track-ticket-details',     
    views: {
      'menuContent': {
        templateUrl: 'templates/track-ticket-details.html'
      }
    }
  })
  .state('app.ticket-status', {
    url: '/ticket-status',     
    views: {
      'menuContent': {
        templateUrl: 'templates/ticket-status.html'
      }
    }
  })
  .state('app.my-ticket', {
    url: '/my-ticket',     
    views: {
      'menuContent': {
        templateUrl: 'templates/my-ticket.html'
      }
    }
  })
  .state('app.manage-ticket', {
    url: '/manage-ticket',     
    views: {
      'menuContent': {
        templateUrl: 'templates/manage-ticket.html'
      }
    }
  })
  
  
// if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});