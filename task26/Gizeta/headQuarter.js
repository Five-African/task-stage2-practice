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
        Logger.error('cannot create any more', headQuarter);
        return;
      }
      var shipId = ShipFactory.create();
      ships[shipId] = 0;
    },
    startupShip: function(id) {
      if (ships[id] == null || ships[id] == -1) {
        Logger.error('ship ' + id + ' not found or has destroyed', headQuarter);
        return;
      }
      sendCommand(id, 'startup');
      Logger.log('startup ship ' + id.toString(), headQuarter);
      ships[id] = 1;
    },
    shutdownShip: function(id) {
      if (ships[id] == null || ships[id] == -1) {
        Logger.error('ship ' + id + ' not found or has destroyed', headQuarter);
        return;
      }
      sendCommand(id, 'shutdown');
      Logger.log('shutdown ship ' + id.toString(), headQuarter);
      ships[id] = 0;
    },
    destroyShip: function(id) {
      if (ships[id] == null || ships[id] == -1) {
        Logger.error('ship ' + id + ' not found or has destroyed', headQuarter);
        return;
      }
      sendCommand(id, 'destroy');
      Logger.log('destroy ship ' + id.toString(), headQuarter);
      delete ships[id];
    },
    getShips: function() {
      return Object.keys(ships);
    },
    toString: function() {
      return "HeadQuarter";
    }
  }
  headQuarter.notifySystem = new NotifySystem(headQuarter);
  return headQuarter;
})();

Mediator.registerHq(HeadQuarter.notifySystem);
