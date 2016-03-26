var Render = (function() {
  var $ = function (el) { return document.querySelector(el); };

  var shipIdCache = [];

  var shouldRenderShip = function() {
    return true; // always
  };

  var shouldRenderController = function() {
    var shipId = HeadQuarter.getShips();
    if (shipIdCache.toString() != shipId.toString()) {
      shipIdCache = shipId;
      return true;
    }
    return false;
  };

  var renderShips = function() {
    var shipDom = $('#ships');
    var content = '';
    var count = 0;
    ShipFactory.getShips().forEach(function(ship) {
      if (ship.state == -1) return;
      content += "<div style='transform:rotate(" + ship.position + "deg);transform-origin:50% " +
        (50 + count * 30) + "px;'>" + ship.id.toString() +
        "(" + Math.round(ship.power) + "%)</div>";
      count++;
    });
    shipDom.innerHTML = content;
  }

  var renderController = function() {
    var controllerDom = $('#ship-controller');
    var content = '';
    shipIdCache.forEach(function(id) {
      content += "<div>对" + id + "号飞船下达指令：";
      content += "<button onclick='javascript:HeadQuarter.startupShip(" + id + ")'>开始飞行</button>";
      content += "<button onclick='javascript:HeadQuarter.shutdownShip(" + id + ")'>停止飞行</button>";
      content += "<button onclick='javascript:HeadQuarter.destroyShip(" + id + ")'>销毁</button>";
      content += "</div>";
    });
    controllerDom.innerHTML = content;
  }

  var render = {
    render: function() {
      if (shouldRenderShip()) {
        renderShips();
      }
      if (shouldRenderController()) {
        renderController();
      }
    },
    toString: function() {
      return "Render";
    }
  };
  render.init = function() {
    $('#create-btn').onclick = function() {
      HeadQuarter.createShip();
    }

    setInterval(function() {
      render.render();
    }, 100);
  };
  return render;
})();

Render.init();
