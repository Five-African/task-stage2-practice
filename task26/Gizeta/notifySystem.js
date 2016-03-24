var NotifySystem = function(host) {
  this.host = host;
};
NotifySystem.prototype.notify = function(sender, message) {
  if (!(sender instanceof NotifySystem)) return; // Hey, I do not know you
  this.host.dealMessage(message);
  sender.feedback(this, 'ok');
};
NotifySystem.prototype.feedback = function(sender, message) {
  this.host.dealFeedback(message);
}
