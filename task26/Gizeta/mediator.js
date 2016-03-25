var Mediator = (function() {
  var ships = {};
  var hq = null;

  var loss = function() {
    return Math.random() * 3 < 1;
  }

  return {
    registerShip: function(id, ship) {
      ships[id] = ship;
    },
    registerHq: function(headQuater) {
      hq = headQuater;
    },
    notifyShips: function(data) {
      Object.keys(ships).forEach(function(id) {
        if (!loss()) {
          ships[id].notify(hq, JSON.stringify(data));
        } else {
          Logger.warn('packet to ship ' + id + ' is lost', Mediator);
        }
      });
    },
    toString: function() {
      return "Mediator";
    }
  };
})();
