var NotifySystem = function(host) {
  this.host = host;
};
NotifySystem.prototype.notify = function(sender, message) {
  setTimeout((function() {
    if (!(sender instanceof NotifySystem)) return; // Hey, I do not know you
    this.host.dealMessage(message);
  }).bind(this), 1000);
};
NotifySystem.prototype.feedback = function(sender, message) {} // no need
