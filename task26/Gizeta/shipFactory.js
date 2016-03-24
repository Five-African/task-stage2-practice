/* 造船厂 */
var ShipFactory = (function() {
  var shipCount = 0;

  /* 国家机密 is private */
  var Ship = function(id) {
    this.id = id;
    this.state = -1; // not exist
    this.power = 100;
    this.maxPower = 100;
    this.powerSystem = new PowerSystem();
    this.supplySystem = new SupplySystem();
    this.destroySystem = new DestroySystem();
    this.notifySystem = new NotifySystem();
  }
  Ship.prototype.toString = function() { // let me know who are you
    return "Ship No. " + this.id;
  }
  Ship.prototype.dealMessage = function(message) {
    switch (message) {
      case "create":
        this.state = 0;
        Logger.log('created', this);
        break;
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
  Ship.prototype.dealFeedback = function() {};

  return {
    create: function() {
      return new Ship(++shipCount);
    }
  };
})();
