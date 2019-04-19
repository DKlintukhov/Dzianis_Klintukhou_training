class SimpleHouseBuilder {

    buildGableRoof() {
        return `
     /\\
    /__\\        
   /____\\
  /______\\         
 /________\\
/__________\\`;
    }

    buildCascadeRoof() {
        return ` 
 __________
/__________\\`;
    }

    buildFloorWithDoor() {
        return `
 |        |              
 |        |
 |   __   |
 |  |  |  |
 |__|__|__|`;
    }


    buildFloorWithWindow() {
        return `
 |   __   |
 |  |  |  |
 |  |__|  |
 |        |
 |________|`;
    }
}

class BigHouseBuilder {

    buildGableRoof() {
        return `
          / \\
         /___\\       
       /       \\
     /___________\\
   /               \\
  /                 \\
 /___________________\\`
    }

    buildCascadeRoof() {
        return ` 
   _________________
  /                 \\
 /___________________\\`
    }

    buildFloorWithWindow() {
        return `
  |   __   |   __   |
  |  |  |  |  |  |  |
  |  |__|  |  |__|  |
  |        |        |
  |________|________|`
    }


    buildFloorWithDoor() {
        return `
  |        |        |
  |        |        |
  |       _|_       |
  |      | | |      |
  |______|_|_|______|`;
    }
}


class Director {
    constructor(builder) {
        this._builder = builder;
        this._house = "";
    }

    buildCascadeRoof() {
        this._house += this._builder.buildCascadeRoof();
        return this;
    }

    buildGableRoof() {
        this._house += this._builder.buildGableRoof();
        return this;
    }

    buildFloorWithWindow() {
        this._house += this._builder.buildFloorWithWindow();
        return this;
    }

    buildFloorWithDoor() {
        this._house += this._builder.buildFloorWithDoor();
        return this;
    }

    buildHouse() {
        return this._house || "You're build nothing!";
    }

    destroyHouse() {
        this._house = " ";
        return this;
    }

    destroyThisCrapAndBuildCastle() {
        this._house = " ";
        return `                       
        -|             |-
        -|                  [-_-_-_-_-_-_-_-]                  |-
        [-_-_-_-_-]          |             |          [-_-_-_-_-]
         | o   o |           [  0   0   0  ]           | o   o |
          |     |    -|       |           |       |-    |     |
          |     |_-___-___-___-|         |-___-___-___-_|     |
          |  o  ]              [    0    ]              [  o  |
          |     ]   o   o   o  [ _______ ]  o   o   o   [     | ----__________
_____-----|     ]              [ ||||||| ]              [     |
          |     ]              [ |     | ]              [     |
      _-_-|_____]--------------[_|     |_]--------------[_____|-_-_
     ( (__________------------_____________-------------_________) )`;
    }
}

const bigHouseMaster = new Director(new BigHouseBuilder());
const simpleHouseMaster = new Director(new SimpleHouseBuilder());

simpleHouseMaster
    .buildCascadeRoof()
    .buildFloorWithWindow()
    .buildFloorWithDoor();
const simpleHouse = simpleHouseMaster.buildHouse();
console.log(simpleHouse);

bigHouseMaster
    .buildGableRoof()
    .buildFloorWithWindow()
    .buildFloorWithDoor();
const bigHouse = bigHouseMaster.buildHouse();
console.log(bigHouse);

bigHouseMaster
    .destroyHouse()
    .buildCascadeRoof()
    .buildFloorWithDoor();
const newHouse = bigHouseMaster.buildHouse();
console.log(newHouse);

const castle = bigHouseMaster.destroyThisCrapAndBuildCastle();
console.log(castle);