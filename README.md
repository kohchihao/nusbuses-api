# nusbuses

# Installation
```bash
$ npm install --save nusbuses
```

## Usage

```javascript
const nusbuses = require('nusbuses');

nusbuses.getAllBuses()
.then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.log(err);
})


//data 
/*{
  "ShuttleServiceResult": {
    "caption": "COM2 (CP13)",
    "name": "COM2",
    "shuttles": [
      {
        "arrivalTime": "32",
        "name": "A1",
        "nextArrivalTime": "62",
        "nextPassengers": "-",
        "passengers": "-"
      },
      {
        "arrivalTime": "16",
        "name": "D1(To BIZ2)",
        "nextArrivalTime": "51",
        "nextPassengers": "-",
        "passengers": "-"
      },
      {
        "arrivalTime": "2",
        "name": "D1(To UTown)",
        "nextArrivalTime": "32",
        "nextPassengers": "-",
        "passengers": "-"
      },
      {
        "arrivalTime": "4",
        "name": "A2",
        "nextArrivalTime": "24",
        "nextPassengers": "-",
        "passengers": "-"
      }
    ]
  }
}*/
```

# Available Methods 
All public method returns [Bluebird Promise](https://github.com/petkaantonov/bluebird/)

- `getBus(busId)` : busId is the id for the Bus. Eg : `AS7`
- `getAllBuses` : To get all the buses in NUS
- `getAS7` 
- `getBIZ2`
- `getBotanicGardenMRT`
- `getOeiTiongHamBuilding`
- `getCentralLibary`
- `getCollegeGreenHostel`
- `getCOM2`
- `getComputerCentre`
- `getEA`
- `getKentRidgeBusTerminal`
- `getKentRidgeMRT`
- `getKentVale`
- `getLT13`
- `getLT29`
- `getMuseum`
- `getOppHSSML`
- `getOppKentRidgeMRT`
- `getOppNUSS`
- `getOppPGP12`
- `getOppUHall`
- `getOppStaffClub`
- `getPGP12`
- `getPGP1415`
- `getPGP7`
- `getPGPR`
- `getPrinceGeorgesPark`
- `getRafflesHall`
- `getS17`
- `getUHall`
- `getStaffClub`
- `getUTown`
- `getOppLT13`
- `getYIH`

All requests are made by [request-promise](https://github.com/request/request-promise).



