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

const BigHouseMaster = new Director(new BigHouseBuilder());
const SimpleHouseMaster = new Director(new SimpleHouseBuilder());

SimpleHouseMaster
    .buildCascadeRoof()
    .buildFloorWithWindow()
    .buildFloorWithDoor();
const SimpleHouse = SimpleHouseMaster.buildHouse();
console.log(SimpleHouse);

BigHouseMaster
    .buildGableRoof()
    .buildFloorWithWindow()
    .buildFloorWithDoor();
const BigHouse = BigHouseMaster.buildHouse();
console.log(BigHouse);

BigHouseMaster
    .destroyHouse()
    .buildCascadeRoof()
    .buildFloorWithDoor();
const NewHouse = BigHouseMaster.buildHouse();
console.log(NewHouse);

const Castle = BigHouseMaster.destroyThisCrapAndBuildCastle();
console.log(Castle);