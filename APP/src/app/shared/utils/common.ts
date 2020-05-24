import { LOCAL_STORAGE_GLOBALS, LOCAL_STORAGE_BOOKING } from './type';
import { Globals } from './globals';
import { Booking } from './booking';

export const saluteNames = ['Mr.', 'Master', 'Mrs.', 'Miss', 'Ms.', 'Dr.']

export const statusRow = [{id: 0, value: "Inactive"}, {id: 1, value: "Active"}]

export const preferedService = [{id: 1, value: "Filghts"}, {id: 1, value: "Hotels"}, {id: 1, value: "Insurance"}, {id: 1, value: "Office Request"}]

/*export const seatPreference = [
    "WINDOW SEAT",
    "MIDDLE SEAT",
    "AISLE SEAT",
    "BULKHEAD SEAT",
    "BASINET SEAT",
    "EXIT ROW SEAT"
];

export const hotelLoyalty = [
    { key: "Starwood_Preferred_Guest", value: "Starwood Preferred Guest" },
    { key: "Wyndham_Rewards", value: "Wyndham Rewards" },
    { key: "World_of_Hyatt", value: "World of Hyatt" },
    { key: "Hilton_Honors", value: "Hilton Honors" },
    { key: "Le_Club_AccorHotels", value: "Le Club AccorHotels" },
    { key: "Marriott_Rewards", value: "Marriott Rewards" },
    { key: "IHG_Rewards", value: "IHG Rewards" },
    { key: "Best_Western_Rewards", value: "Best Western Rewards" },
    { key: "Choice_Privileges", value: "Choice Privileges" },
    { key: "Club_Carlson", value: "Club Carlson" }];

export const preferredClass = [
    { key: 'Y', value: "Economy/Coach" },
    { key: 'F', value: "First Class" },
    { key: 'C', value: "Business" },
    { key: 'W', value: "Premium Economy" }
]*/

export const organizationTypes = ['Agent','Corporate','B2C','Mobile']

export const bookingStatus = ['Cancel','Confirm','Draft','Hold','Partial','Void']

export const topupSubtype = ['Bank Transfer','Cash Deposit','Cheque Deposit','Credit Card']

export const paymentType = ['credit','debit']

export const rbdArrayList =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

export function prepareGlobals() {
    let _globalsString = JSON.parse(localStorage.getItem(LOCAL_STORAGE_GLOBALS));
    let _globals = new Globals();
    if (_globalsString !== null) {
      _globals.deserialize(_globalsString);
    }
    return _globals;
  }

export function saveGlobals(_globals: Globals) {
  localStorage.setItem(LOCAL_STORAGE_GLOBALS, JSON.stringify(_globals.serialize()));
}

export function prepareBooking() {
    let _bookingString = JSON.parse(localStorage.getItem(LOCAL_STORAGE_BOOKING));
    let _booking = new Booking();
    if (_bookingString !== null) {
        _booking.deserialize(_bookingString);
    }
    return _booking;
  }

export function saveBooking(_booking: Booking) {
  localStorage.setItem(LOCAL_STORAGE_BOOKING, JSON.stringify(_booking.serialize()));
}

export function getCookie(cname) {
  var name = cname + "=";
  
  var exp = new Date(new Date().getTime());
  console.log("get cookie----1----",document.cookie)
  document.cookie = 'ExpirationCookieTest=1; expires='+exp.toUTCString();
  console.log("get cookie----2----",document.cookie)
  var decodedCookie = decodeURIComponent(document.cookie);
  console.log("Cookie Value : ===================" , decodedCookie);

  var ca = decodedCookie.split(';');
  console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFF", ca);
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function commonGetCabinType(code: string) {
  switch (code) {
    case 'Y':
      return "Economy/Coach";
    case 'F':
      return "First Class";
    case 'W':
      return "Premium Economy";
    case 'O':
      return "Euro Traveller";
    case 'I':
      return "Club World";
    case 'B':
    case 'E':
    case 'G':
    case 'H':
    case 'K':
    case 'L':
    case 'M':
    case 'N':
    case 'Q':
    case 'R':
    case 'S':
    case 'T':
    case 'U':
    case 'V':
    case 'X':
    case 'Y':
      return "Economy";
    case 'C':
    case 'D':
    case 'J':
    case 'P':
      return "Business";
    case 'A':
    case 'R':
    case 'Z':
      return "First";
    default:
      return "All";
  }
}
