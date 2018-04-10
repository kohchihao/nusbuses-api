let rp = require('request-promise');
let _partial = require('lodash.partial');

const ALL_BUSES_URL = 'https://nextbus.comfortdelgro.com.sg/eventservice.svc/BusStops';
const PUBLIC_URL = 'https://nextbus.comfortdelgro.com.sg/eventservice.svc/Shuttleservice?busstopname=';

const AS7 = 'AS7';
const BIZ2 = 'BIZ2';
const BG_MRT = 'BG-MRT';
const BUKITTIMAH_BTC2 = 'BUKITTIMAH-BTC2';
const CENLIB = 'CENLIB';
const CGH = 'CGH';
const COM2 = 'COM2';
const COMCEN = 'COMCEN';
const BLK_EA_OPP = 'BLK-EA-OPP';
const KR_BT = 'KR-BT';
const KR_MRT = 'KR-MRT';
const KV = 'KV';
const LT13 = 'LT13';
const LT29 = 'LT29';
const MUSEUM = 'MUSEUM';
const HSSML_OPP = 'HSSML-OPP';
const KR_MRT_OPP = 'KR-MRT-OPP';
const NUSS_OPP = 'NUSS-OPP';
const PGP12_OPP = 'PGP12-OPP';
const UHALL_OPP = 'UHALL-OPP';
const STAFFCLUB_OPP = 'STAFFCLUB-OPP';
const PGP12 = 'PGP12';
const PGP14_15 = 'PGP14-15';
const PGP7 = 'PGP7';
const PGP = 'PGP';
const PGPT = 'PGPT';
const RAFFLES = 'RAFFLES';
const S17 = 'S17';
const UHALL = 'UHALL';
const STAFFCLUB = 'STAFFCLUB';
const UTown = 'UTown';
const LT13_OPP = 'LT13-OPP';
const YIH = 'YIH';

const getAllBuses = () => {
  return rp(ALL_BUSES_URL);
}

const getBus = (busId) => (busId) => {
  return rp(PUBLIC_URL+busId);
}

module.exports.getBus = getBus();
module.exports.getAllBuses = getAllBuses;
module.exports.getAS7 = getBus(AS7);
module.exports.getBIZ2 = getBus(BIZ2);
module.exports.getBotanicGardenMRT = getBus(BG_MRT);
module.exports.getOeiTiongHamBuilding = getBus(BUKITTIMAH_BTC2);
module.exports.getCentralLibary = getBus(CENLIB);
module.exports.getCollegeGreenHostel = getBus(CGH);
module.exports.getCOM2 = getBus(COM2);
module.exports.getComputerCentre = getBus(COMCEN);
module.exports.getEA = getBus(BLK_EA_OPP);
module.exports.getKentRidgeBusTerminal = getBus(KR_BT);
module.exports.getKentRidgeMRT = getBus(KR_MRT);
module.exports.getKentVale = getBus(KV);
module.exports.getLT13 = getBus(LT13);
module.exports.getLT29 = getBus(LT29);
module.exports.getMuseum = getBus(MUSEUM);
module.exports.getOppHSSML = getBus(HSSML_OPP);
module.exports.getOppKentRidgeMRT = getBus(KR_MRT_OPP);
module.exports.getOppNUSS = getBus(NUSS_OPP);
module.exports.getOppPGP12 = getBus(PGP12_OPP);
module.exports.getOppUHall = getBus(UHALL_OPP);
module.exports.getOppStaffClub = getBus(STAFFCLUB_OPP);
module.exports.getPGP12 = getBus(PGP12);
module.exports.getPGP1415 = getBus(PGP14_15);
module.exports.getPGP7 = getBus(PGP7);
module.exports.getPGPR = getBus(PGP);
module.exports.getPrinceGeorgesPark = getBus(PGPT);
module.exports.getRafflesHall = getBus(RAFFLES);
module.exports.getS17 = getBus(S17);
module.exports.getUHall = getBus(UHALL);
module.exports.getStaffClub = getBus(STAFFCLUB);
module.exports.getUTown = getBus(UTown);
module.exports.getOppLT13 = getBus(LT13_OPP);
module.exports.getYIH = getBus(YIH);



