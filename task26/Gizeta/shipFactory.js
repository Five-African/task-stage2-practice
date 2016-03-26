/* 造船厂 */
var ShipFactory = (function() {
  var ships = [];

  /* 机密 */
  var Ship = function(id) {
    this.id = id;
    this.state = 0;
    this.power = 100;
    this.maxPower = 100;
    this.position = 0;
    this.powerSystem = new PowerSystem(this);
    this.supplySystem = new SupplySystem(this);
    this.destroySystem = new DestroySystem(this);
    this.notifySystem = new NotifySystem(this);
  }
  Ship.prototype.toString = function() { // let me know who are you
    return "Ship No. " + this.id;
  }
  Ship.prototype.dealMessage = function(message) {
    if (this.state == -1) return;
    var data = JSON.parse(message);
    if (data.id != this.id) return;
    switch (data.command) {
      case "startup":
        this.powerSystem.run();
        break;
      case "shutdown":
        this.powerSystem.stop();
        break;
      case "destroy":
        this.destroySystem.destroy();
        break;
      default:
        Logger.warn('喵喵喵？', this);
        break;
    }
  };

  return {
    create: function() {
      var ship = new Ship(ships.length + 1);
      ships.push(ship);
      Mediator.registerShip(ship.id, ship.notifySystem);
      Logger.log('created', ship);
      return ship.id;
    },
    getShips: function() {
      return ships;
    }
  };
})();
