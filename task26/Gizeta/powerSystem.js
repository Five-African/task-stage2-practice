var PowerSystem = function(ship) {
  this.ship = ship;
  this.speed = 20;
  this.consume = 5;
  this.timer = null;
};
PowerSystem.prototype.run = function() {
  if (this.timer != null || this.ship.state == -1) return;
  if (this.ship.state == 0) {
    this.ship.state = 1;
  }
  this.timer = setInterval((function() {
    if (this.ship.state == -1) {
      this.stop();
      return;
    }
    if (this.ship.power >= this.consume) {
      this.ship.power -= this.consume;
    }
    else {
      this.stop();
    }
  }).bind(this), 1000);
  Logger.log('startup', this);
}
PowerSystem.prototype.stop = function() {
  if (this.timer == null || this.ship.state == -1) return;
  if (this.ship.state == 1) {
    this.ship.state = 0;
  }
  clearInterval(this.timer);
  this.timer = null;
  Logger.log('shutdown', this);
}
