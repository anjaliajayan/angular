module.exports = function (app, base) {
  app.use(`${base}/`, require('./controllers/Auth'));
  app.use(`${base}/`, require('./middlewares/authenticate'));
  // app.use(`${base}/`, require('./middlewares/cookies'));
  app.use(`${base}/`, require('./middlewares/userStateParams'));
  app.use(`${base}/`, require('./controllers/profile_management/create_new_profile/TravellerProfile'));
  app.use(`${base}/`, require('./controllers/profile_management/create_new_profile/AgencyProfile'));
  app.use(`${base}/`, require('./controllers/profile_management/create_new_profile/CompanyProfile'));
  app.use(`${base}/`, require('./controllers/profile_management/create_new_profile/GroupProfile'));
  app.use(`${base}/`, require('./controllers/profile_management/RetrieveProfile'));
  app.use(`${base}/`, require('./controllers/user-role-management/User'));
  app.use(`${base}/`, require('./controllers/user-role-management/StaffProfile'));
  app.use(`${base}/`, require('./controllers/Dashboard'));
  app.use(`${base}/`, require('./controllers/Bookings'));
  app.use(`${base}/`, require('./controllers/Reports'));
  app.use(`${base}/`, require('./controllers/PointSaleManagement'));
  app.use(`${base}/`, require('./controllers/Upload'));
  app.use(`${base}/`, require('./controllers/setup-configuration/airline-deals/Tourcodes'));
  app.use(`${base}/`, require('./controllers/setup-configuration/airline-deals/Commissions'));
  app.use(`${base}/`, require('./controllers/setup-configuration/airline-deals/AirlineRoutes'));
  app.use(`${base}/`, require('./controllers/setup-configuration/suppliers/Suppliers'));
  app.use(`${base}/`, require('./controllers/setup-configuration/content-management/ContentManagement'));
  app.use(`${base}/`, require('./controllers/setup-configuration/currency-configuration/CurrencyConfig'));
  app.use(`${base}/`, require('./controllers/setup-configuration/email-templates/EmailTemplates'));
  app.use(`${base}/roles/`, require('./controllers/setup-configuration/roles/Roles'));
  app.use(`${base}/`, require('./controllers/reports/reports'));
  app.use(`${base}/`, require('./controllers/common'));
  app.use(`${base}/`, require('./controllers/Registration'));
  app.use(`${base}/`, require('./controllers/organization/organization'));
  app.use(`${base}/organization/`, require('./controllers/organization/organization-hierarchy'));
  app.use(`${base}/organization/`, require('./controllers/organization/pos'));
  app.use(`${base}/`, require('./controllers/setup-configuration/markup-configuration/sale'));
  app.use(`${base}/`, require('./controllers/setup-configuration/markup-configuration/markup'));
  app.use(`${base}/`, require('./controllers/preset/preset'));
  app.use(`${base}/`, require('./controllers/accounts/transaction'));
  app.use(`${base}/`, require('./controllers/booking_details/bookingDetail'));

  app.use(`${base}/flights`, require('./controllers/flights.controller'));
  app.use(`${base}/hotels`, require('./controllers/hotels.controller'));
  app.use(`${base}/pos`, require('./controllers/pos.controller'));


  app.use(`${base}/activities`, require('./controllers/activity.controller'));
  app.use(`${base}/cars`, require('./controllers/cars.controller'));

  app.use(`${base}/payments`, require('./controllers/paymentGateway.controller'));

  app.use(`${base}/settings`, require('./controllers/settings.controller'));
  app.use(`${base}/sample`, require('./controllers/sample.controller'));
  app.use(`${base}/branches`, require('./controllers/branches.controller'));
  app.use(`${base}/insurance`, require('./controllers/insurance.controller'));
  app.use(`${base}/tests`, require('./controllers/tests.controller'));
};
