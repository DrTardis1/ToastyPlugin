function ToastyPlugin() {}

ToastyPlugin.prototype.show = function (message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;

  // cordova.exec(successCallback, errorCallback, "ToastyPlugin", "check", [options]);
  cordova.exec(successCallback, errorCallback, "ToastyPlugin", "check", []);
};

ToastyPlugin.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.toastyPlugin = new ToastyPlugin();
  return window.plugins.toastyPlugin;
};

cordova.addConstructor(ToastyPlugin.install);
