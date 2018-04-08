var rp = require('request-promise');
var _partial = require('lodash.partial');

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

var NUSBUSES = function() {

  this.getAllBuses = getAllBuses;
  this.getBus = getBus;
  this.getAS7 = _partial(getBus,AS7);
  this.getBIZ2 = _partial(getBus,BIZ2);
  this.getBotanicGardenMRT = _partial(getBus,BG_MRT);
  this.getOeiTiongHamBuilding = _partial(getBus,BUKITTIMAH_BTC2);
  this.getCentralLibary = _partial(getBus,CENLIB);
  this.getCollegeGreenHostel = _partial(getBus,CGH);
  this.getCOM2 = _partial(getBus,COM2);
  this.getComputerCentre = _partial(getBus,COMCEN);
  this.getEA = _partial(getBus,BLK_EA_OPP);
  this.getKentRidgeBusTerminal = _partial(getBus,KR_BT);
  this.getKentRidgeMRT = _partial(getBus,KR_MRT);
  this.getKentVale = _partial(getBus,KV);
  this.getLT13 = _partial(getBus,LT13);
  this.getLT29 = _partial(getBus,LT29);
  this.getMuseum = _partial(getBus,MUSEUM);
  this.getOppHSSML = _partial(getBus,HSSML_OPP);
  this.getOppKentRidgeMRT = _partial(getBus,KR_MRT_OPP);
  this.getOppNUSS = _partial(getBus,NUSS_OPP);
  this.getOppPGP12 = _partial(getBus,PGP12_OPP);
  this.getOppUHall = _partial(getBus,UHALL_OPP);
  this.getOppStaffClub = _partial(getBus,STAFFCLUB_OPP);

  this.getPGP12 = _partial(getBus,PGP12);
  this.getPGP1415 = _partial(getBus,PGP14_15);
  this.getPGP7 = _partial(getBus,PGP7);
  this.getPGPR = _partial(getBus,PGP);
  this.getPrinceGeorgesPark = _partial(getBus,PGPT);
  this.getRafflesHall = _partial(getBus,RAFFLES);

  this.getS17 = _partial(getBus,S17);
  this.getUHall = _partial(getBus,UHALL);
  this.getStaffClub = _partial(getBus,STAFFCLUB);
  this.getUTown = _partial(getBus,UTown);
  this.getOppLT13 = _partial(getBus,LT13_OPP);
  this.getYIH = _partial(getBus,YIH);
  

  function getAllBuses() {
    return rp(ALL_BUSES_URL);
  }

  function getBus(busId) {
    return rp(PUBLIC_URL+busId);
  }

}

module.exports = NUSBUSES;