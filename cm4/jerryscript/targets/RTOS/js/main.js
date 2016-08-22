(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
global = {};
var EventEmitter = require('ml-event').EventEmitter;
var eventStatus = new EventEmitter();
global.eventStatus = eventStatus;

var a = "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss1123,3333,2222";
print(a.split(",")[0]);
var b = "dasdasdyyy";
var c = b.replace("yyy", "123123");
print(c);
var fff = "weweqweqe8823812381823";
print(/1823/.test(fff));
if (/1823/.test(fff)) {
print(222);
} else {
print(444);
}
print("123123123");
for (var i = 0; i< 999999999; i++) {
print(123);
}
},{"ml-event":2}],2:[function(require,module,exports){
var util = require('ml-utils');
function EventEmitter() {
  this._events = {};
};

module.exports.EventEmitter = EventEmitter;

EventEmitter.prototype.emit = function(type) {
  if (!this._events) {
    this._events = {};
  }

  // About to emit 'error' event but there are no listeners for it.
  if (type === 'error' && !this._events.error) {
    var err = arguments[1];
    if (err instanceof Error) {
      throw err;
    } else {
      throw Error("Uncaught 'error' event");
    }
    return false;
  }

  var listeners = this._events[type];
  if (util.isArray(listeners)) {
    listeners = listeners.slice();
    var len = arguments.length;
    var args = new Array(len - 1);
    for (var i = 1; i < len; ++i) {
      args[i - 1] = arguments[i];
    }
    for (var i = 0; i < listeners.length; ++i) {
      listeners[i].apply(this, args);
    }
    return true;
  }

  return false;
};


EventEmitter.prototype.addListener = function(type, listener) {
  if (!util.isFunction(listener)) {
    throw new TypeError('listener must be a function');
  }

  if (!this._events) {
    this._events = {};
  }
  if (!this._events[type]) {
    this._events[type] = [];
  }

  this._events[type].push(listener);

  return this;
};


EventEmitter.prototype.on = EventEmitter.prototype.addListener;


EventEmitter.prototype.once = function(type, listener) {
  if (!util.isFunction(listener)) {
    throw new TypeError('listener must be a function');
  }

  var f = function() {
    // here `this` is this not global, because EventEmitter binds event object
    // for this when it calls back the handler.
    this.removeListener(f.type, f);
    f.listener.apply(this, arguments);
  };

  f.type = type;
  f.listener = listener;

  this.on(type, f);

  return this;
};


EventEmitter.prototype.removeListener = function(type, listener) {
  if (!util.isFunction(listener)) {
    throw new TypeError('listener must be a function');
  }

  var list = this._events[type];
  if (Array.isArray(list)) {
    for (var i = list.length - 1; i >= 0; --i) {
      if (list[i] == listener ||
          (list[i].listener && list[i].listener == listener)) {
        list.splice(i, 1);
        break;
      }
    }
  }

  return this;

};


EventEmitter.prototype.removeAllListeners = function(type) {
  if (arguments.length === 0) {
    this._events = {};
  } else {
    delete this._events[type];
  }

  return this;
};
},{"ml-utils":3}],3:[function(require,module,exports){
function isFunction(arg) {
  return typeof arg === 'function';
}

module.exports.isFunction = isFunction;
module.exports.isArray = Array.isArray;

},{}]},{},[1]);

