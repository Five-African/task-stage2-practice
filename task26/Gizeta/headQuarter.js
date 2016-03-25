var HeadQuarter = (function() {
  var ships = {};

  var sendCommand = function(id, command) {
    Mediator.notifyShips({
      id: id,
      command: command
    });
  }

  var headQuarter = {
    createShip: function() {
      if (Object.keys(ships).length > 3) {
        Logger.error('cannot create any more', headQuater);
        return;
      }
      var shipId = ShipFactory.create();
      ships[shipId] = 0;
    },
    startupShip: function(id) {
      sendCommand(id, 'startup');
      Logger.log('startup ship ' + id.toString(), headQuater);
      ships[id] = 1;
    },
    shutdownShip: function(id) {
      sendCommand(id, 'shutdown');
      Logger.log('shutdown ship ' + id.toString(), headQuater);
      ships[id] = 0;
    },
    destroyShip: function(id) {
      sendCommand(id, 'destroy');
      Logger.log('destroy ship ' + id.toString(), headQuater);
      delete ships[id];
    },
    toString: function() {
      return "HeadQuarter";
    }
  }
  headQuarter.notifySystem = new NotifySystem(headQuarter);
  return headQuarter;
})();

Mediator.registerHq(HeadQuarter.notifySystem);
