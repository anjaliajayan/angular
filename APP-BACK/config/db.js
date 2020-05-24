const Sequelize = require('sequelize');
const { Op } = Sequelizee = require('sequelize');

//const debug = require('debug')('myapp:db');
const config = require('./config');
const dbConfig = config.database;

const pmsModel = require('../app/models/PointSaleManagement');
const travellerModel = require('../app/models/ProfileManagement/TravellerProfile');
const uploadModel = require('../app/models/Upload');
const bookingsModel = require('../app/models/Bookings/Bookings');
const flightBookingsModel = require('../app/models/Bookings/FlightBookings');
//bookings details
const flightTicketModel = require('../app/models/BookingsDetail/FlightTicket');
const flightTicketEmdModel = require('../app/models/BookingsDetail/FlightTicketEmd');
const PassengerDetailModel = require('../app/models/BookingsDetail/PassengerDetail');
const TripDetailModel = require('../app/models/BookingsDetail/TripDetail');
//users
const usersModel = require('../app/models/User');
const staffProfileModel = require('../app/models/StaffProfile');
//organization 
const organisationHeierarchyModel = require('../app/models/organization/organization');
const organizationMenuPermModel = require('../app/models/organization/organizationHeirarchy')
const organizationHierarchyModel = require('../app/models/organization/organizationHeirarchy')
// feq - start
const modelOrganisationCorporate = require('../app/models/organisation/organisation_corporate')
// feq - end
//profile management
const agencyProfileModel = require('../app/models/ProfileManagement/AgencyProfile');
const companyProfileModel = require('../app/models/ProfileManagement/CompanyProfile');
const groupProfileModel = require('../app/models/ProfileManagement/GroupProfile');
//accounts
const saleModel = require('../app/models/accounts/sale');
const organizationAccountModel = require('../app/models/accounts/organization-accounts');
const transactionModel = require('../app/models/accounts/transaction');
//corporate
const corporateApprovalSummaryModel = require('../app/models/corporate/corporate-approval-summary');
const corporateBusinessUnitModel = require('../app/models/corporate/corporate-business-unit');
const corporateOfflineBookingModel = require('../app/models/corporate/corporate-offline-booking');
const corporatePolicyModel = require('../app/models/corporate/corporate-policy');
//preset
const presetModel = require('../app/models/preset/preset');
//reports
const auditTrailModel = require('../app/models/reports/audit-trails')
//reports >> logs
const activitiesSearchLogModel = require('../app/models/reports/logs/activities-search-log');
const carSearchSearchLogModel = require('../app/models/reports/logs/car-search-logs');
const flightSearchLogModel = require('../app/models/reports/logs/flight-search-logs');
const hotelSearchLogModel = require('../app/models/reports/logs/hotel-search-log');
const insuranceSearchLogModel = require('../app/models/reports/logs/insurance-search-logs');
const transferSearchLogModel = require('../app/models/reports/logs/transfer-search-logs');
const tourcodesModel = require('../app/models/SetupConfig/AirlineDeals/Tourcodes');
const commissionsModel = require('../app/models/SetupConfig/AirlineDeals/Commissions');
const airlineRoutesModel = require('../app/models/SetupConfig/AirlineDeals/AirlineRoutes');

const markupModel = require('../app/models/SetupConfig/markupconfiguration/Markup');
const activityMarkupModel = require('../app/models/SetupConfig/markupconfiguration/ActivitiesMarkup');
const carMarkupModel = require('../app/models/SetupConfig/markupconfiguration/CarMarkup');
const cruiseMarkupModel = require('../app/models/SetupConfig/markupconfiguration/CruisesMarkup');
const hotelMarkupModel = require('../app/models/SetupConfig/markupconfiguration/HotelMarkup');
const insuranceMarkupModel = require('../app/models/SetupConfig/markupconfiguration/InsuranceMarkup');
const transferMarkupModel = require('../app/models/SetupConfig/markupconfiguration/TransfersMarkup');
const flightMarkupModel = require('../app/models/SetupConfig/markupconfiguration/FlightMarkup');

const contentsModel = require('../app/models/SetupConfig/ContentMangement/Contents');
const templatesModel = require('../app/models/SetupConfig/EmailTemplates/Templates');
const suppliersModel = require('../app/models/SetupConfig/Suppliers/Suppliers');
const modelCurrency = require('../app/models/SetupConfig/Currency/Currency');
const modelCurrencyDecimal = require('../app/models/SetupConfig/Currency/CurrencyDecimal');
const roleModel = require('../app/models/SetupConfig/Role');
const segmentDetailsModel = require('../app/models/reports/logs/segments-details');

const modelOrganisation = require("../app/models/organization/organization");
const setupOrganisationModel = require("../app/models/organization/organization");
const approvalTemplateModel = require("../app/models/ApprovalTemplate");
const settingModel = require("../app/models/Setting");
const rficDetailModel = require("../app/models/RficDetail");
const registrationModel = require("../app/models/Registration");

const carsBookingsModel = require('../app/models/Bookings/CarBookings');
const activityBookingsModel = require('../app/models/Bookings/ActivityBookings');
const transferBookingsModel = require('../app/models/Bookings/TransferBookings');
const insuranceBookingsModel = require('../app/models/Bookings/InsuranceBookings');
const hotelBookingsModel = require('../app/models/Bookings/HotelBookings');
const paymentGetwayModel = require('../app/models/PaymentGetway');

const visaBookingsModel = require('../app/models/Bookings/VisaBookings');
const guideBookingsModel = require('../app/models/Bookings/GuideBookings');
const marhabalBookingsModel = require('../app/models/Bookings/MarhabaBookings');
const holidayBookingsModel = require('../app/models/Bookings/HolidayBookings');
const cruiseBookingsModel = require('../app/models/Bookings/CruiseBookings');

const topupModel = require("../app/models/Topup")
const airportModel = require('../app/models/Airport')
const auditTrialModel = require('../app/models/AuditTrials')
const countryModel = require("../app/models/Country")
const timeZoneModel = require("../app/models/TimeZone")
const cityModel = require("../app/models/City")
const organizationBranchesModel = require("../app/models/organization_branches")


const organizationVatModel = require("../app/models/organization/organization_vat")
const currencyConvertModel = require("../app/models/SetupConfig/Currency/CurrencyConverter");
const session = require('../app/models/session/cake_sessions')

const db = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
  port: dbConfig.port,
  pool: { max: 150, min: 0, acquire: 300000000, idle: 10000 },
  logging: null, //(config.isDev ? console.log : null)
});


//----- Model bind with db and Sequelize---//
// ---- START----- //
const Traveller = travellerModel(db, Sequelize);
const PMS = pmsModel(db, Sequelize);
const Bookings = bookingsModel(db, Sequelize);
const FlightBookings = flightBookingsModel(db, Sequelize);
const upload = uploadModel(db, Sequelize);
//profile
const AgencyProfile = agencyProfileModel(db, Sequelize);
const CompanyProfile = companyProfileModel(db, Sequelize);
const GroupProfile = groupProfileModel(db, Sequelize);
//booking details
const FlightTicket = flightTicketModel(db, Sequelize);
const FlightTicketEmd = flightTicketEmdModel(db, Sequelize);
const PassengerDetail = PassengerDetailModel(db, Sequelize);
const TripDetails = TripDetailModel(db, Sequelize);
//users
const Users = usersModel(db, Sequelize);
const StaffProfile = staffProfileModel(db, Sequelize);
const StaffProfile_M = staffProfileModel(db, Sequelize);
//organization
const organisationHModel = organisationHeierarchyModel(db, Sequelize);
const organizationMpModel = organizationMenuPermModel(db, Sequelize);
const organisationBranchModel = organizationBranchesModel(db, Sequelize);
const organizationVModel = organizationVatModel(db, Sequelize);
//accounts
const OrganizationAccount = organizationAccountModel(db, Sequelize);
const Transaction = transactionModel(db, Sequelize);
const Sale = saleModel(db, Sequelize)
//corporate
const CorporateApprovalSummary = corporateApprovalSummaryModel(db, Sequelize);
const CorporateBusinessUnit = corporateBusinessUnitModel(db, Sequelize);
const CorporateOfflineBooking = corporateOfflineBookingModel(db, Sequelize);
const CorporatePolicy = corporatePolicyModel(db, Sequelize);
//preset
const Preset = presetModel(db, Sequelize);
//reports
const AuditTrail = auditTrailModel(db, Sequelize);
//reports >> log
const ActivitiesSearchLog = activitiesSearchLogModel(db, Sequelize);
const CarSearchLog = carSearchSearchLogModel(db, Sequelize);
const FlightSearchLog = flightSearchLogModel(db, Sequelize);
const HotelSearchLog = hotelSearchLogModel(db, Sequelize);
const InsuranceSearchLog = insuranceSearchLogModel(db, Sequelize);
const TransferSearchLog = transferSearchLogModel(db, Sequelize);
const Commissions = commissionsModel(db, Sequelize);
const AirlineRoutes = airlineRoutesModel(db, Sequelize);

// markup models start
const Markups = markupModel(db, Sequelize);
const activityMarkup = activityMarkupModel(db, Sequelize);
const carMarkup = carMarkupModel(db, Sequelize);
const cruiseMarkup = cruiseMarkupModel(db, Sequelize);
const hotelMarkup = hotelMarkupModel(db, Sequelize);
const insuranceMarkup = insuranceMarkupModel(db, Sequelize);
const transferMarkup = transferMarkupModel(db, Sequelize);
const flightMarkup = flightMarkupModel(db, Sequelize)
// markup models end

const Tourcodes = tourcodesModel(db, Sequelize);
const Suppliers = suppliersModel(db, Sequelize);
const Contents = contentsModel(db, Sequelize);
const Templates = templatesModel(db, Sequelize);
const sequelizeCurrency = modelCurrency(db, Sequelize);
const sequelizeCurrencyDecimal = modelCurrencyDecimal(db, Sequelize);
const SegmentDetails = segmentDetailsModel(db, Sequelize);
const RegistrationModel = registrationModel(db, Sequelize);
const CurrencyConvert = currencyConvertModel(db, Sequelize);

const SessionModel = session(db, Sequelize);
//-------END ------//

const sequelizeOrganisation = modelOrganisation(db, Sequelize);
const sequelizeOrganisation_B = modelOrganisation(db, Sequelize);
const setupOrganisation = setupOrganisationModel(db, Sequelize);

Markups.belongsTo(Sale, { foreignKey: 'sale_id', targetKey: 'sale_id' });

Markups.hasOne(activityMarkup, { foreignKey: 'markup_id', targetKey: 'markup_id' });
Markups.hasOne(carMarkup, { foreignKey: 'markup_id', targetKey: 'markup_id' });
Markups.hasOne(cruiseMarkup, { foreignKey: 'markup_id', targetKey: 'markup_id' });
Markups.hasOne(hotelMarkup, { foreignKey: 'markup_id', targetKey: 'markup_id' });
Markups.hasOne(insuranceMarkup, { foreignKey: 'markup_id', targetKey: 'markup_id' });
Markups.hasOne(transferMarkup, { foreignKey: 'markup_id', targetKey: 'markup_id' });
Markups.hasOne(flightMarkup, { foreignKey: 'markup_id', targetKey: 'markup_id' });
AirlineRoutes.hasOne(sequelizeOrganisation, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });



Sale.belongsTo(sequelizeOrganisation, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
Markups.belongsTo(Sale, { foreignKey: 'sale_id', targetKey: 'sale_id' });
Sale.belongsTo(sequelizeOrganisation, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });

const ApprovalTemplateModel = approvalTemplateModel(db, Sequelize);
const SettingModel = settingModel(db, Sequelize);

const carsBookings = carsBookingsModel(db, Sequelize);
const activityBookings = activityBookingsModel(db, Sequelize);
const hotelBookings = hotelBookingsModel(db, Sequelize);
const transferBookings = transferBookingsModel(db, Sequelize);
const insuranceBookings = insuranceBookingsModel(db, Sequelize);
const paymentGetway = paymentGetwayModel(db, Sequelize);

const visaBookings = visaBookingsModel(db, Sequelize);
const guideBookings = guideBookingsModel(db, Sequelize);
const marhabalBookings = marhabalBookingsModel(db, Sequelize);
const holidayBookings = holidayBookingsModel(db, Sequelize);
const cruiseBookings = cruiseBookingsModel(db, Sequelize);
const Topup = topupModel(db, Sequelize);
const Airport = airportModel(db, Sequelize)
const AuditTrialModel = auditTrialModel(db, Sequelize)
const Topup_M = topupModel(db, Sequelize);
const Country = countryModel(db, Sequelize);

const Transaction_M = transactionModel(db, Sequelize);
const Bookings_M = bookingsModel(db, Sequelize);
const Suppliers_M = suppliersModel(db, Sequelize);
const Suppliers_Z = suppliersModel(db, Sequelize);
const flightBookingsModel_Z = flightBookingsModel(db, Sequelize);
const User_B = usersModel(db,Sequelize);

const carsBookings_M = carsBookingsModel(db, Sequelize);
const activityBookings_M = activityBookingsModel(db, Sequelize);
const hotelBookings_M = hotelBookingsModel(db, Sequelize);
const transferBookings_M = transferBookingsModel(db, Sequelize);
const insuranceBookings_M = insuranceBookingsModel(db, Sequelize);
const paymentGetway_M = paymentGetwayModel(db, Sequelize);
const visaBookings_M = visaBookingsModel(db, Sequelize);
const guideBookings_M = guideBookingsModel(db, Sequelize);
const marhabalBookings_M = marhabalBookingsModel(db, Sequelize);
const holidayBookings_M = holidayBookingsModel(db, Sequelize);
const cruiseBookings_M = cruiseBookingsModel(db, Sequelize);
const FlightBookings_M = flightBookingsModel(db, Sequelize);
const Users_M = usersModel(db, Sequelize);
const Country_M = countryModel(db, Sequelize);
const OrganisationModel_M = modelOrganisation(db, Sequelize);
const Currency_M = modelCurrency(db, Sequelize);
const Currency_Z = modelCurrency(db, Sequelize);
const Country_Z = countryModel(db, Sequelize);
const OrganizationAccount_M = organizationAccountModel(db, Sequelize);
const RficDetailModel = rficDetailModel(db, Sequelize);
// feq - start
const sequelizeOrganisationCorporate = modelOrganisationCorporate(db, Sequelize);
// feq - end

// for bookings 
const flightTicketEmdModel_AJ = flightTicketEmdModel(db, Sequelize);

const organsationModel_AJ = modelOrganisation(db, Sequelize);

const organsationModelForHeirarchy_AJ = organisationHeierarchyModel(db, Sequelize);
const organsationHierarchyModel_AJ = organizationHierarchyModel(db, Sequelize);
const roleModel_AJ = roleModel(db, Sequelize)

const bookingModel_AJ = bookingsModel(db, Sequelize);
const flightTicketModel_AJ = flightTicketModel(db, Sequelize);
const flightBookingModel_AJ = flightBookingsModel(db, Sequelize);
const hotelBookingModel_AJ = hotelBookingsModel(db, Sequelize);
const carBookingModel_AJ = carsBookingsModel(db, Sequelize);
const insuranceBookingModel_AJ = insuranceBookingsModel(db, Sequelize);
const transferBookingModel_AJ = transferBookingsModel(db, Sequelize);
const activityBooking_AJ = activityBookingsModel(db, Sequelize);
const holidayBookingModel_AJ = holidayBookingsModel(db, Sequelize);
const cruiseBookingModel_AJ = cruiseBookingsModel(db, Sequelize);
const supplierModel_AJ = suppliersModel(db, Sequelize);
const passengerDetailModel_AJ = PassengerDetailModel(db, Sequelize);
const tripDetailModel_AJ = TripDetailModel(db, Sequelize);
const segmentDetailModel_AJ = segmentDetailsModel(db, Sequelize);
const userModel_AJ = usersModel(db, Sequelize);
const flightSearchLogModel_AJ = flightSearchLogModel(db, Sequelize);
const TimeZoneModel_AJ = timeZoneModel(db, Sequelize);
const CityModel_AJ = cityModel(db, Sequelize);

module.exports = {
  Sequelize,
  db,
  Op,
  Airport,
  AuditTrialModel,
  Markups,
  activityMarkup,
  carMarkup,
  cruiseMarkup,
  hotelMarkup,
  insuranceMarkup,
  transferMarkup,
  flightMarkup,
  Sale,
  Traveller,
  PMS,
  Bookings,
  FlightBookings,
  upload,
  Users,
  organisationHModel,
  organizationMpModel,
  organisationBranchModel,
  organizationVModel,
  StaffProfile,
  AgencyProfile,
  CompanyProfile,
  GroupProfile,
  OrganizationAccount,
  Transaction,
  CorporateApprovalSummary,
  CorporateBusinessUnit,
  CorporateOfflineBooking,
  CorporatePolicy,
  Preset,
  AuditTrail,
  ActivitiesSearchLog,
  CarSearchLog,
  FlightSearchLog,
  HotelSearchLog,
  InsuranceSearchLog,
  TransferSearchLog,
  Tourcodes,
  Commissions,
  AirlineRoutes,
  Suppliers,
  Contents,
  Templates,
  sequelizeCurrency,
  SegmentDetails,
  sequelizeOrganisation,
  sequelizeOrganisation_B,
  ApprovalTemplateModel,
  SettingModel,
  RegistrationModel,
  carsBookings,
  activityBookings,
  hotelBookings,
  transferBookings,
  insuranceBookings,
  visaBookings,
  guideBookings,
  marhabalBookings,
  holidayBookings,
  cruiseBookings,
  paymentGetway,
  Topup,
  //booking details 
  FlightTicket,
  FlightTicketEmd,
  PassengerDetail,
  TripDetails,
  setupOrganisation,
  organsationModel_AJ,
  organsationModelForHeirarchy_AJ,
  organsationHierarchyModel_AJ,
  sequelizeOrganisationCorporate,
  roleModel_AJ,
  bookingModel_AJ,
  flightTicketModel_AJ,
  flightBookingModel_AJ,
  hotelBookingModel_AJ,
  carBookingModel_AJ,
  insuranceBookingModel_AJ,
  transferBookingModel_AJ,
  activityBooking_AJ,
  holidayBookingModel_AJ,
  cruiseBookingModel_AJ,
  supplierModel_AJ,
  flightTicketEmdModel_AJ,
  passengerDetailModel_AJ,
  tripDetailModel_AJ,
  segmentDetailModel_AJ,
  userModel_AJ,
  flightSearchLogModel_AJ,
  TimeZoneModel_AJ,
  CityModel_AJ,
  Country,
  StaffProfile_M,
  OrganisationModel_M,
  Topup_M,
  Transaction_M,
  Bookings_M,
  Suppliers_M,
  Suppliers_Z,
  User_B,
  flightBookingsModel_Z,
  carsBookings_M,
  activityBookings_M,
  hotelBookings_M,
  transferBookings_M,
  insuranceBookings_M,
  paymentGetway_M,
  visaBookings_M,
  guideBookings_M,
  marhabalBookings_M,
  holidayBookings_M,
  cruiseBookings_M,
  FlightBookings_M,
  Users_M,
  Country_M,
  Currency_M,
  Currency_Z,
  Country_Z,
  OrganizationAccount_M,
  RficDetailModel,
  CurrencyConvert,
  SessionModel
};

db
  .authenticate()
  .then(() => {
    // console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//@commit by mukesh
Bookings.hasMany(FlightBookings, { foreignKey: 'booking_id', targetKey: 'booking_id', as: 'Flights' });

Bookings.hasOne(paymentGetway, { foreignKey: 'booking_id', targetKey: 'booking_id' });
paymentGetway.belongsTo(Bookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });

// Bookings.hasOne(hotelBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });
// hotelBookings.belongsTo(Bookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings.belongsTo(hotelBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });

//Bookings.hasMany(FlightBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings.hasMany(FlightTicket, { foreignKey: 'ticket_booking_id', targetKey: 'booking_id', as: 'flight_ticket' });
Bookings.hasMany(TripDetails, { foreignKey: 'trip_booking_id', targetKey: 'booking_id', as: 'trip_details' });
Bookings.hasMany(PassengerDetail, { foreignKey: 'pax_booking_id', targetKey: 'booking_id', as: 'passenger_details' });
Bookings.hasMany(carsBookings, { foreignKey: 'booking_id', targetKey: 'booking_id', as: 'car_details' });
Bookings.hasMany(activityBookings, { foreignKey: 'booking_id', targetKey: 'booking_id', as: 'activity_details' });

Bookings.hasMany(insuranceBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id', as: 'insurance_details' });

// FlightBookings.belongsTo(Suppliers, { foreignKey: 'pnr_no', targetKey: 'Gds_code' });
//@commit by mukesh
// FlightBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// hotelBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// carsBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// activityBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// guideBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// holidayBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// transferBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// visaBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// marhabalBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// cruiseBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
// insuranceBookings.belongsTo(Suppliers, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });

// Bookings.belongsTo(carsBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });
// Bookings.belongsTo(insuranceBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });
// Bookings.belongsTo(transferBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });
// Bookings.belongsTo(activityBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });

// ------------ comment above by mukesh

Bookings_M.hasOne(paymentGetway_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
paymentGetway_M.belongsTo(Bookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });

Bookings.belongsTo(sequelizeOrganisation, { foreignKey: 'agent_code', targetKey: 'agent_code' });
Transaction.belongsTo(sequelizeOrganisation, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });


// for bookings search start

organsationModel_AJ.hasMany(bookingModel_AJ, { foreignKey: 'agent_code', sourceKey: 'agent_code' })
flightSearchLogModel_AJ.belongsTo(organsationModel_AJ, { foreignKey: 'agent_code', targetKey: 'agent_code' })

bookingModel_AJ.belongsTo(userModel_AJ, { foreignKey: 'users_id', targetKey: 'users_id' })
bookingModel_AJ.belongsTo(organsationModel_AJ, { foreignKey: 'agent_code', targetKey: 'agent_code' });

bookingModel_AJ.hasMany(passengerDetailModel_AJ, { foreignKey: 'pax_booking_id', targetKey: 'booking_id' })//@mukesh bel to hasmany also changed keys
bookingModel_AJ.belongsTo(tripDetailModel_AJ, { foreignKey: 'booking_id', targetKey: 'trip_booking_id' })

tripDetailModel_AJ.hasMany(segmentDetailModel_AJ, { foreignKey: 'trip_id', targetKey: 'trip_id' })//@mukesh bel to hasmany
tripDetailModel_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'trip_booking_id', targetKey: 'booking_id' })

segmentDetailModel_AJ.belongsTo(tripDetailModel_AJ, { foreignKey: 'trip_id', targetKey: 'trip_id' })

bookingModel_AJ.hasMany(flightBookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
bookingModel_AJ.hasMany(hotelBookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
bookingModel_AJ.hasMany(carBookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
bookingModel_AJ.hasMany(insuranceBookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
bookingModel_AJ.hasMany(transferBookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
bookingModel_AJ.hasMany(activityBooking_AJ, { foreignKey: 'booking_id', sourceKey: 'booking_id' });
bookingModel_AJ.hasMany(visaBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });
bookingModel_AJ.hasMany(guideBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });
bookingModel_AJ.hasMany(marhabalBookings, { foreignKey: 'booking_id', targetKey: 'booking_id' });
bookingModel_AJ.hasMany(holidayBookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
bookingModel_AJ.hasMany(cruiseBookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });

//--------------========
flightTicketModel_AJ.belongsTo(flightBookingModel_AJ, { foreignKey: 'ticket_booking_id', targetKey: 'booking_id' });
flightTicketModel_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'ticket_booking_id', targetKey: 'booking_id' });

flightBookingModel_AJ.hasMany(flightTicketModel_AJ, { foreignKey: 'ticket_booking_id', sourceKey: 'booking_id' })
flightBookingModel_AJ.hasMany(flightTicketEmdModel_AJ, { foreignKey: 'booking_flight_id', sourceKey: 'booking_flight_id' })

flightBookingModel_AJ.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });

flightBookingModel_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
carBookingModel_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });

hotelBookingModel_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
insuranceBookingModel_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
activityBooking_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
transferBookingModel_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
cruiseBookingModel_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });
holidayBookingModel_AJ.belongsTo(bookingModel_AJ, { foreignKey: 'booking_id', targetKey: 'booking_id' });

hotelBookingModel_AJ.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
carBookingModel_AJ.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
activityBooking_AJ.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
guideBookings.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
holidayBookingModel_AJ.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
transferBookingModel_AJ.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
visaBookings.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
marhabalBookings.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
cruiseBookingModel_AJ.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
insuranceBookingModel_AJ.belongsTo(supplierModel_AJ, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });

// for bookings search end
Transaction.belongsTo(sequelizeOrganisation, { foreignKey: 'organisation_id', targetKey: 'organisation_id' })
Bookings_M.hasMany(hotelBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
hotelBookings_M.belongsTo(Bookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
insuranceBookings_M.belongsTo(Bookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });

// @mukesh 
FlightBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
hotelBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
carsBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
activityBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
guideBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
holidayBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
transferBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
visaBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
marhabalBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
cruiseBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
insuranceBookings_M.belongsTo(Suppliers_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });

// @mukesh 
Bookings_M.hasMany(carsBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings_M.hasMany(insuranceBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings_M.hasMany(transferBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings_M.hasMany(activityBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings_M.hasMany(visaBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings_M.hasMany(guideBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings_M.hasMany(marhabalBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings_M.hasMany(holidayBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Bookings_M.hasMany(cruiseBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
// @mukesh
Transaction_M.belongsTo(OrganisationModel_M, { foreignKey: 'organisation_id', targetKey: 'organisation_id' })
Transaction_M.belongsTo(Currency_M, { foreignKey: 'currency_id', targetKey: 'currency_id' })
OrganisationModel_M.belongsTo(Currency_M, { foreignKey: "currency_id", targetKey: "currency_id" });
OrganisationModel_M.belongsTo(OrganizationAccount_M, { foreignKey: "organisation_id", targetKey: "organisation_id" });
Topup_M.belongsTo(Users_M, { foreignKey: "organization_id", targetKey: "organisation_id" });
StaffProfile_M.belongsTo(Users_M, { foreignKey: "users_id", targetKey: "users_id" });
OrganisationModel_M.belongsTo(Country_M, { foreignKey: "currency_id", targetKey: "currency_id" });

// @mukesh
Bookings_M.belongsTo(Users_M, { foreignKey: 'users_id', targetKey: 'users_id' });
Bookings_M.hasMany(FlightBookings_M, { foreignKey: 'booking_id', targetKey: 'booking_id' });
Users_M.belongsTo(OrganisationModel_M, { foreignKey: 'agent_code', targetKey: 'agent_code' });


organizationMpModel.belongsTo(organsationModel_AJ, { foreignKey: 'hierarchy_id', targetKey: 'hierarchy_id' });
bookingModel_AJ.hasMany(Transaction_M, { foreignKey: 'trip_id', sourceKey: 'trip_id' });
// organizationMpModel.hasMany(organizationMpModel, { primaryKey: 'hierarchy_id', foreignKey: 'parent_id', sourceKey: 'hierarchy_id' });
organizationMpModel.hasMany(organizationMpModel, { primaryKey: 'hierarchy_id', foreignKey: 'parent_id', sourceKey: 'hierarchy_id' });
// organsationHierarchyModel_AJ.belongsTo(organsationModel_AJ, { foreignKey: 'hierarchy_id', targetKey: 'hierarchy_id' });
// organsationHierarchyModel_AJ.hasMany(organsationHierarchyModel_AJ, { foreignKey: 'parent_id', sourceKey: 'hierarchy_id' });
// organsationModel_AJ.belongsTo(organsationHierarchyModel_AJ, { foreignKey: 'hierarchy_id', targetKey: 'hierarchy_id' });

organsationModelForHeirarchy_AJ.hasMany(organsationModelForHeirarchy_AJ, { foreignKey: 'hierarchy_parent', sourceKey: 'hierarchy_id', as: 'childs' });
organsationModelForHeirarchy_AJ.hasOne(roleModel_AJ, { foreignKey: 'role_id', sourceKey: 'role_id' });
organsationModelForHeirarchy_AJ.hasOne(userModel_AJ, { foreignKey: 'organisation_id', sourceKey: 'organisation_id', as: 'admin' });

Suppliers_M.hasMany(FlightBookings_M, { foreignKey: 'supplier_id', targetKey: 'supplier_id' });
Suppliers_M.belongsTo(Currency_M, { foreignKey: 'currency_id', targetKey: 'currency_id' });

Suppliers_Z.belongsTo(flightBookingsModel_Z, { foreignKey: 'supplier_id' });
Suppliers_Z.belongsTo(Currency_Z, { foreignKey: 'currency_id' });
//Suppliers_Z.belongsTo(Country_Z, { foreignKey: 'country_id' });
//@muk
Users.belongsTo(OrganisationModel_M, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
// @belal
FlightSearchLog.belongsTo(sequelizeOrganisation_B, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
HotelSearchLog.belongsTo(sequelizeOrganisation_B, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
CarSearchLog.belongsTo(sequelizeOrganisation_B, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
ActivitiesSearchLog.belongsTo(sequelizeOrganisation_B, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
InsuranceSearchLog.belongsTo(sequelizeOrganisation_B, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
TransferSearchLog.belongsTo(sequelizeOrganisation_B, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });

FlightSearchLog.belongsTo(User_B, { foreignKey: 'user_id' });
HotelSearchLog.belongsTo(User_B, { foreignKey: 'user_id'});
CarSearchLog.belongsTo(User_B, { foreignKey: 'user_id' });
ActivitiesSearchLog.belongsTo(User_B, { foreignKey: 'user_id' });
InsuranceSearchLog.belongsTo(User_B, { foreignKey: 'user_id' });
TransferSearchLog.belongsTo(User_B, { foreignKey: 'user_id' });
// feq - start
sequelizeCurrency.belongsTo(sequelizeCurrencyDecimal, { foreignKey: 'code', targetKey: 'code' });
sequelizeOrganisation.belongsTo(sequelizeCurrency, { foreignKey: 'currency_id', targetKey: 'currency_id' });
sequelizeOrganisation.belongsTo(sequelizeOrganisationCorporate, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
sequelizeOrganisation.belongsTo(OrganizationAccount, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
Users.belongsTo(sequelizeOrganisation, { foreignKey: 'organisation_id', targetKey: 'organisation_id' });
// feq - end
