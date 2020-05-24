export const MENU_ITEMS = [
  {
    name: 'Dashboard',
    icon: './../../../../assets/img/sidebar-icons/dashboard.svg',
    route: '/dashboard',
    roleKey: 'dashboard',
  },
   {
    name: 'Profile Management',
    icon: './../../../../assets/img/sidebar-icons/profile-management.svg',
    route: '',
    roleKey: 'profile',
    children: [
      {
        name: 'Create Traveller Profile',
        icon: 'playlist_add',
        route: '/profile-management/create-new-profile/new-traveller-profile',
        roleKey: '',
        // children: [
          // {
          //   name: 'New Traveller Profile',
          //   icon: 'playlist_add',
          //   route: '/profile-management/create-new-profile/new-traveller-profile',
          //   roleKey: '',
          // },
          //  {
          //   name: 'New Group Profile',
          //   icon: 'playlist_add_check',
          //   route: '/profile-management/create-new-profile/new-group-profile',
          //   roleKey: '',
          // },
          // {
          //   name: 'New Agency Profile',
          //   icon: 'playlist_add_check',
          //   route: '/profile-management/create-new-profile/new-agency-profile',
          //   roleKey: '',
          // },
          // {
          //   name: 'New Company Profile',
          //   icon: 'playlist_add_check',
          //   route: '/profile-management/create-new-profile/new-company-profile',
          //   roleKey: '',
          // }
        // ]
      },
      {
        name: 'Retrieve Profile',
        icon: 'playlist_add',
        route: '/profile-management/retrieve-profile',
        roleKey: '',
      },
      // {
      //   name: 'Search Profile',
      //   icon: 'playlist_add',
      //   route: '/profile-management/search-profile',
      //   roleKey: '',
      // },
      // {
      //   name: 'Profile Follow up',
      //   icon: 'playlist_add',
      //   route: '/profile-management/profile-follow-up',
      //   roleKey: '',
      // }
    ]
  }, {
    name: 'Point of Sale Management',
    icon: './../../../../assets/img/sidebar-icons/pos.svg',
    route: '',
    roleKey: 'pos',
    children: [
      {
        name: 'Add Point of Sale',
        icon: 'playlist_add',
        route: '/pos/basic-info',
        roleKey: 'add',
      }, {
        name: 'List Point of Sale',
        icon: 'playlist_add_check',
        route: '/pos/pos-read',
        roleKey: 'list',
      },
      {
        name: 'Registration',
        icon: 'playlist_add_check',
        route: '/point-sales-management/registration',
        roleKey: '',
      },
    ]
  }, {
    name: 'User Role Management',
    icon: './../../../../assets/img/sidebar-icons/urm.svg',
    route: '',
    roleKey: 'user',
    children: [
      {
        name: 'Create New User',
        icon: 'create',
        // route: '/user-role-management/create-user',
        route: '/users/new',
        roleKey: 'add'
      },
      {
        name: 'List of Users',
        icon: 'create',
        route: '/users',
        // route: '/user-role-management/list-user',
        roleKey: 'list'
      }, {
        name: 'Update My Profile',
        icon: 'perm_identity',
        route: '/user-role-management/update-profile',
        roleKey: ''
      }
    ]
  }, {
    name: 'Setup / Configuration',
    icon: './../../../../assets/img/sidebar-icons/setup.svg',
    route: '',
    roleKey: 'setting',
    children: [
      {
        name: 'Markup Configuration',
        icon: 'markunread_mailbox',
        route: '/setup-configuration/markup-configuration',
        roleKey: 'markup',
      }, {
        name: 'Roles',
        icon: 'markunread_mailbox',
        route: '/setup-configuration/roles',
        roleKey: 'role',
      },
      {
        name: 'Airline Deals',
        icon: 'airplanemode_active',
        route: '/setup-configuration/airline-deals',
        roleKey: 'commissions',
      }, {
        name: 'Supplier',
        icon: 'supervisor_account',
        route: '/setup-configuration/supplier',
        roleKey: 'supplier',
      },
      // {
      //   name: 'Content Management',
      //   icon: 'supervisor_account',
      //   route: '/setup-configuration/content-management',
      //   roleKey: 'supplier',
      // },
      // {
      //   name: 'Promotion content',
      //   icon: 'supervisor_account',
      //   route: '/setup-configuration/promotion-content',
      //   roleKey: 'supplier',
      // },
       {
        name: 'Currency Configuration',
        icon: 'monetization_on',
        route: '/setup-configuration/currency-configuration',
        roleKey: 'currencyConfig',
      },
      {
        name: 'Email Templates',
        icon: 'email',
        route: '/setup-configuration/email-templates',
        roleKey: 'emailTemplate',
      }
    ]
  }, {
    name: 'Search',
    icon: './../../../../assets/img/sidebar-icons/search.svg',
    route: '',
    roleKey: 'search',
    children: [
      {
        name: 'Flights',
        icon: './../../../../assets/img/sidebar-icons/flight.svg',
        route: '/search/flights',
        roleKey: 'flight',
        scenario: 'airshopping'
      }, 
      // {
      //   name: 'Reshop',
      //   icon: 'flight_takeoff',
      //   route: '/search/flights/reshop',
      //   roleKey: '',
      //   scenario: 'airshopping'
      // },
      {
        name: 'Hotels',
        icon: './../../../../assets/img/sidebar-icons/hotel.svg',
        route: '/search/hotels',
        roleKey: '',
        scenario: 'airshopping'
      }, 
      {
        name: 'Cars',
        icon: './../../../../assets/img/sidebar-icons/car.svg',
        route: '/search/cars',
        roleKey: '',
        scenario: ''
      },
      {
        name: 'Activities',
        icon: './../../../../assets/img/sidebar-icons/activities.svg',
        route: '/search/activities',
        roleKey: '',
        scenario: ''
      },
      {
        name: 'Insurances',
        icon: './../../../../assets/img/sidebar-icons/insurance.svg',
        route: '/search/insurances',
      },
    ]
  },
  {
    name: 'Bookings',
    icon: './../../../../assets/img/sidebar-icons/bookings.svg',
    route: '/bookings', roleKey: 'booking',
  }, {
    name: 'Accounts',
    icon: './../../../../assets/img/sidebar-icons/accounts.svg',
    route: '/accounts',
    roleKey: 'account',
    children: [
      {
        name: 'My Transactions',
        icon: 'monetization_on',
        route: '/accounts/transactions',
        roleKey: 'transaction',
      },
      // {
      //   name: 'Topup',
      //   icon: 'account_balance_wallet',
      //   route: '/accounts/floating-deposits',
      //   roleKey: 'topup',
      // },
      {
        name: 'Floating Deposit',
        icon: 'account_balance_wallet',
        route: '/accounts/floating-deposits',
        roleKey: 'floating',
      }
      // , {
      //   name: 'IUR',
      //   icon: 'file_copy',
      //   route: '/accounts/iur', roleKey: '',
      // }
    ]
  }, {
    name: 'Report',
    icon: './../../../../assets/img/sidebar-icons/report.svg',
    route: '/report',
    roleKey: 'reports'
  },
  {
    name: 'Help',
    icon: './../../../../assets/img/sidebar-icons/help.svg',
    route: '', roleKey: 'help',
  }
];
