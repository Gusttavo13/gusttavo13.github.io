var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const p$8 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$8();
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$4 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$7 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$3 = Symbol.for("react.profiler"), t$4 = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$3 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$2(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = z$2 && a2[z$2] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$5 = Object.assign, D$1 = {};
function E$3(a2, b2, e) {
  this.props = a2;
  this.context = b2;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$3.prototype.isReactComponent = {};
E$3.prototype.setState = function(a2, b2) {
  if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$3.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$3() {
}
F$3.prototype = E$3.prototype;
function G$1(a2, b2, e) {
  this.props = a2;
  this.context = b2;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$2 = G$1.prototype = new F$3();
H$2.constructor = G$1;
C$5(H$2, E$3.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e) {
  var d, c2 = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (d in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      J$1.call(b2, d) && !L$2.hasOwnProperty(d) && (c2[d] = b2[d]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    c2.children = e;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d in g2 = a2.defaultProps, g2)
      c2[d] === void 0 && (c2[d] = g2[d]);
  return { $$typeof: l$4, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$4(a2, b2) {
  return { $$typeof: l$4, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$2(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === l$4;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$1 = /\/+/g;
function Q$2(a2, b2) {
  return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
}
function R$2(a2, b2, e, d, c2) {
  var k2 = typeof a2;
  if (k2 === "undefined" || k2 === "boolean")
    a2 = null;
  var h2 = false;
  if (a2 === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$4:
          case n$2:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = d === "" ? "." + Q$2(h2, 0) : d, I$2(c2) ? (e = "", a2 != null && (e = a2.replace(P$1, "$&/") + "/"), R$2(c2, b2, e, "", function(a3) {
      return a3;
    })) : c2 != null && (O$2(c2) && (c2 = N$4(c2, e + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d = d === "" ? "." : d + ":";
  if (I$2(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d + Q$2(k2, g2);
      h2 += R$2(k2, b2, e, f2, c2);
    }
  else if (f2 = A$2(a2), typeof f2 === "function")
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d + Q$2(k2, g2++), h2 += R$2(k2, b2, e, f2, c2);
  else if (k2 === "object")
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + (b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$1(a2, b2, e) {
  if (a2 == null)
    return a2;
  var d = [], c2 = 0;
  R$2(a2, d, "", "", function(a3) {
    return b2.call(e, a3, c2++);
  });
  return d;
}
function T$4(a2) {
  if (a2._status === -1) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 2, a2._result = b3;
    });
    a2._status === -1 && (a2._status = 0, a2._result = b2);
  }
  if (a2._status === 1)
    return a2._result.default;
  throw a2._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a2, b2, e) {
  S$1(a2, function() {
    b2.apply(this, arguments);
  }, e);
}, count: function(a2) {
  var b2 = 0;
  S$1(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$1(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$2(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$3;
react_production_min.Fragment = p$7;
react_production_min.Profiler = r$3;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a2, b2, e) {
  if (a2 === null || a2 === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d = C$5({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = K$1.current);
    b2.key !== void 0 && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    d.children = e;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d.children = g2;
  }
  return { $$typeof: l$4, type: a2.type, key: c2, ref: k2, props: d, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$4, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$1, render: a2 };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a2 }, _init: T$4 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$3, type: a2, compare: b2 === void 0 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a2();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$1.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$1.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$1.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$1.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e) {
  return U$1.current.useImperativeHandle(a2, b2, e);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$1.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$1.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$1.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e) {
  return U$1.current.useReducer(a2, b2, e);
};
react_production_min.useRef = function(a2) {
  return U$1.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$1.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e) {
  return U$1.current.useSyncExternalStore(a2, b2, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.1.0";
{
  react.exports = react_production_min;
}
var React = react.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d = c2 - 1 >>> 1, e = a2[d];
        if (0 < g2(e, b2))
          a2[d] = b2, a2[c2] = e, c2 = d;
        else
          break a;
      }
  }
  function h2(a2) {
    return a2.length === 0 ? null : a2[0];
  }
  function k2(a2) {
    if (a2.length === 0)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d = 0, e = a2.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2))
            n2 < e && 0 > g2(x2, C2) ? (a2[d] = x2, a2[n2] = c2, d = n2) : (a2[d] = C2, a2[m2] = c2, d = m2);
          else if (n2 < e && 0 > g2(x2, c2))
            a2[d] = x2, a2[n2] = c2, d = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a2.id - b2.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = typeof setTimeout === "function" ? setTimeout : null, E2 = typeof clearTimeout === "function" ? clearTimeout : null, F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); b2 !== null; ) {
      if (b2.callback === null)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2)
      if (h2(r2) !== null)
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        b2 !== null && K2(H2, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); v2 !== null && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d = v2.callback;
        if (typeof d === "function") {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e === "function" ? v2.callback = e : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (v2 !== null)
        var w2 = true;
      else {
        var m2 = h2(t2);
        m2 !== null && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (O2 !== null) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if (typeof F2 === "function")
    S2 = function() {
      F2(R2);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d = exports.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d + c2 : d) : c2 = d;
    switch (a2) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c2 + e;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e, sortIndex: -1 };
    c2 > d ? (a2.sortIndex = c2, f2(t2, a2), h2(r2) === null && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d))) : (a2.sortIndex = e, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, ba = scheduler.exports;
function p$6(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function na(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function oa(a2, b2, c2, d) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function pa(a2, b2, c2, d) {
  if (b2 === null || typeof b2 === "undefined" || oa(a2, b2, c2, d))
    return true;
  if (d)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function t$3(a2, b2, c2, d, e, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$1[a2] = new t$3(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$1[b2] = new t$3(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$1[a2] = new t$3(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$1[a2] = new t$3(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$1[a2] = new t$3(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$1[a2] = new t$3(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$1[a2] = new t$3(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$1[a2] = new t$3(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$1[a2] = new t$3(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var qa = /[\-:]([a-z])/g;
function ra(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$1[b2] = new t$3(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$1[b2] = new t$3(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$1[b2] = new t$3(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$1[a2] = new t$3(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$1.xlinkHref = new t$3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$1[a2] = new t$3(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function sa(a2, b2, c2, d) {
  var e = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
  if (e !== null ? e.type !== 0 : d || !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N")
    pa(b2, c2, e, d) && (c2 = null), d || e === null ? na(b2) && (c2 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e.mustUseProperty ? a2[e.propertyName] = c2 === null ? e.type === 3 ? false : "" : c2 : (b2 = e.attributeName, d = e.attributeNamespace, c2 === null ? a2.removeAttribute(b2) : (e = e.type, c2 = e === 3 || e === 4 && c2 === true ? "" : "" + c2, d ? a2.setAttributeNS(d, b2, c2) : a2.setAttribute(b2, c2)));
}
var ta = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ua = Symbol.for("react.element"), va = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), xa = Symbol.for("react.strict_mode"), za = Symbol.for("react.profiler"), Aa = Symbol.for("react.provider"), Ba = Symbol.for("react.context"), Ca = Symbol.for("react.forward_ref"), Da = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), Ga = Symbol.for("react.lazy");
var Ha = Symbol.for("react.offscreen");
var Ia = Symbol.iterator;
function Ja(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ia && a2[Ia] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var A$1 = Object.assign, Ka;
function La(a2) {
  if (Ka === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ka = b2 && b2[1] || "";
    }
  return "\n" + Ka + a2;
}
var Ma = false;
function Na(a2, b2) {
  if (!a2 || Ma)
    return "";
  Ma = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d && typeof l2.stack === "string") {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2]) {
                var k2 = "\n" + e[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Ma = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? La(a2) : "";
}
function Oa(a2) {
  switch (a2.tag) {
    case 5:
      return La(a2.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Na(a2.type, false), a2;
    case 11:
      return a2 = Na(a2.type.render, false), a2;
    case 1:
      return a2 = Na(a2.type, true), a2;
    default:
      return "";
  }
}
function Pa(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case wa:
      return "Fragment";
    case va:
      return "Portal";
    case za:
      return "Profiler";
    case xa:
      return "StrictMode";
    case Da:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case Ba:
        return (a2.displayName || "Context") + ".Consumer";
      case Aa:
        return (a2._context.displayName || "Context") + ".Provider";
      case Ca:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Fa:
        return b2 = a2.displayName || null, b2 !== null ? b2 : Pa(a2.type) || "Memo";
      case Ga:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Pa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Qa(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || (a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(b2);
    case 8:
      return b2 === xa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b2 === "function")
        return b2.displayName || b2.name || null;
      if (typeof b2 === "string")
        return b2;
  }
  return null;
}
function Ra(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Sa(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ta(a2) {
  var b2 = Sa(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a3) {
      d = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a3) {
      d = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Ua(a2) {
  a2._valueTracker || (a2._valueTracker = Ta(a2));
}
function Va(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d = "";
  a2 && (d = Sa(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Wa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Xa(a2, b2) {
  var c2 = b2.checked;
  return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked });
}
function Ya(a2, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Ra(b2.value != null ? b2.value : c2);
  a2._wrapperState = { initialChecked: d, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function Za(a2, b2) {
  b2 = b2.checked;
  b2 != null && sa(a2, "checked", b2, false);
}
function $a(a2, b2) {
  Za(a2, b2);
  var c2 = Ra(b2.value), d = b2.type;
  if (c2 != null)
    if (d === "number") {
      if (c2 === 0 && a2.value === "" || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if (d === "submit" || d === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Ra(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d = b2.type;
    if (!(d !== "submit" && d !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  c2 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c2 !== "" && (a2.name = c2);
}
function bb(a2, b2, c2) {
  if (b2 !== "number" || Wa(a2.ownerDocument) !== a2)
    c2 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var db = Array.isArray;
function eb(a2, b2, c2, d) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e = 0; e < c2.length; e++)
      b2["$" + c2[e]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e && (a2[c2].selected = e), e && d && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Ra(c2);
    b2 = null;
    for (e = 0; e < a2.length; e++) {
      if (a2[e].value === c2) {
        a2[e].selected = true;
        d && (a2[e].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e].disabled || (b2 = a2[e]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function fb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(p$6(91));
  return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function gb(a2, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(p$6(92));
      if (db(c2)) {
        if (1 < c2.length)
          throw Error(p$6(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Ra(c2) };
}
function hb(a2, b2) {
  var c2 = Ra(b2.value), d = Ra(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), b2.defaultValue == null && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  d != null && (a2.defaultValue = "" + d);
}
function ib(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
function jb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? jb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var lb, mb = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d, e);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    lb = lb || document.createElement("div");
    lb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = lb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function nb(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var ob = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, pb = ["Webkit", "ms", "Moz", "O"];
Object.keys(ob).forEach(function(a2) {
  pb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    ob[b2] = ob[a2];
  });
});
function qb(a2, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || ob.hasOwnProperty(a2) && ob[a2] ? ("" + b2).trim() : b2 + "px";
}
function rb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d = c2.indexOf("--") === 0, e = qb(c2, b2[c2], d);
      c2 === "float" && (c2 = "cssFloat");
      d ? a2.setProperty(c2, e) : a2[c2] = e;
    }
}
var sb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function tb(a2, b2) {
  if (b2) {
    if (sb[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(p$6(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(p$6(60));
      if (typeof b2.dangerouslySetInnerHTML !== "object" || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$6(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(p$6(62));
  }
}
function ub(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var vb = null;
function wb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var xb = null, yb = null, zb = null;
function Ab(a2) {
  if (a2 = Bb(a2)) {
    if (typeof xb !== "function")
      throw Error(p$6(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Cb(b2), xb(a2.stateNode, a2.type, b2));
  }
}
function Db(a2) {
  yb ? zb ? zb.push(a2) : zb = [a2] : yb = a2;
}
function Eb() {
  if (yb) {
    var a2 = yb, b2 = zb;
    zb = yb = null;
    Ab(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Ab(b2[a2]);
  }
}
function Fb(a2, b2) {
  return a2(b2);
}
function Gb() {
}
var Hb = false;
function Ib(a2, b2, c2) {
  if (Hb)
    return a2(b2, c2);
  Hb = true;
  try {
    return Fb(a2, b2, c2);
  } finally {
    if (Hb = false, yb !== null || zb !== null)
      Gb(), Eb();
  }
}
function Jb(a2, b2) {
  var c2 = a2.stateNode;
  if (c2 === null)
    return null;
  var d = Cb(c2);
  if (d === null)
    return null;
  c2 = d[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a2 = a2.type, d = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(p$6(231, b2, typeof c2));
  return c2;
}
var Kb = false;
if (ia)
  try {
    var Lb = {};
    Object.defineProperty(Lb, "passive", { get: function() {
      Kb = true;
    } });
    window.addEventListener("test", Lb, Lb);
    window.removeEventListener("test", Lb, Lb);
  } catch (a2) {
    Kb = false;
  }
function Mb(a2, b2, c2, d, e, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Nb = false, Ob = null, Pb = false, Qb = null, Rb = { onError: function(a2) {
  Nb = true;
  Ob = a2;
} };
function Sb(a2, b2, c2, d, e, f2, g2, h2, k2) {
  Nb = false;
  Ob = null;
  Mb.apply(Rb, arguments);
}
function Tb(a2, b2, c2, d, e, f2, g2, h2, k2) {
  Sb.apply(this, arguments);
  if (Nb) {
    if (Nb) {
      var l2 = Ob;
      Nb = false;
      Ob = null;
    } else
      throw Error(p$6(198));
    Pb || (Pb = true, Qb = l2);
  }
}
function Ub(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 4098) !== 0 && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c2 : null;
}
function Vb(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function Wb(a2) {
  if (Ub(a2) !== a2)
    throw Error(p$6(188));
}
function Xb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Ub(a2);
    if (b2 === null)
      throw Error(p$6(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d = b2; ; ) {
    var e = c2.return;
    if (e === null)
      break;
    var f2 = e.alternate;
    if (f2 === null) {
      d = e.return;
      if (d !== null) {
        c2 = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c2)
          return Wb(e), a2;
        if (f2 === d)
          return Wb(e), b2;
        f2 = f2.sibling;
      }
      throw Error(p$6(188));
    }
    if (c2.return !== d.return)
      c2 = e, d = f2;
    else {
      for (var g2 = false, h2 = e.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e;
          d = f2;
          break;
        }
        if (h2 === d) {
          g2 = true;
          d = e;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d = e;
            break;
          }
          if (h2 === d) {
            g2 = true;
            d = f2;
            c2 = e;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$6(189));
      }
    }
    if (c2.alternate !== d)
      throw Error(p$6(190));
  }
  if (c2.tag !== 3)
    throw Error(p$6(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Yb(a2) {
  a2 = Xb(a2);
  return a2 !== null ? Zb(a2) : null;
}
function Zb(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2;
  for (a2 = a2.child; a2 !== null; ) {
    var b2 = Zb(a2);
    if (b2 !== null)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var $b = ba.unstable_scheduleCallback, ac = ba.unstable_cancelCallback, bc = ba.unstable_shouldYield, cc = ba.unstable_requestPaint, B = ba.unstable_now, dc = ba.unstable_getCurrentPriorityLevel, ec = ba.unstable_ImmediatePriority, fc = ba.unstable_UserBlockingPriority, gc = ba.unstable_NormalPriority, hc = ba.unstable_LowPriority, ic = ba.unstable_IdlePriority, jc = null, kc = null;
function lc(a2) {
  if (kc && typeof kc.onCommitFiberRoot === "function")
    try {
      kc.onCommitFiberRoot(jc, a2, void 0, (a2.current.flags & 128) === 128);
    } catch (b2) {
    }
}
var nc = Math.clz32 ? Math.clz32 : mc, oc = Math.log, pc = Math.LN2;
function mc(a2) {
  a2 >>>= 0;
  return a2 === 0 ? 32 : 31 - (oc(a2) / pc | 0) | 0;
}
var qc = 64, rc = 4194304;
function sc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function tc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (c2 === 0)
    return 0;
  var d = 0, e = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (g2 !== 0) {
    var h2 = g2 & ~e;
    h2 !== 0 ? d = sc(h2) : (f2 &= g2, f2 !== 0 && (d = sc(f2)));
  } else
    g2 = c2 & ~e, g2 !== 0 ? d = sc(g2) : f2 !== 0 && (d = sc(f2));
  if (d === 0)
    return 0;
  if (b2 !== 0 && b2 !== d && (b2 & e) === 0 && (e = d & -d, f2 = b2 & -b2, e >= f2 || e === 16 && (f2 & 4194240) !== 0))
    return b2;
  (d & 4) !== 0 && (d |= c2 & 16);
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d; 0 < b2; )
      c2 = 31 - nc(b2), e = 1 << c2, d |= a2[c2], b2 &= ~e;
  return d;
}
function uc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d = a2.pingedLanes, e = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - nc(f2), h2 = 1 << g2, k2 = e[g2];
    if (k2 === -1) {
      if ((h2 & c2) === 0 || (h2 & d) !== 0)
        e[g2] = uc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function xc() {
  var a2 = qc;
  qc <<= 1;
  (qc & 4194240) === 0 && (qc = 64);
  return a2;
}
function yc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function zc(a2, b2, c2) {
  a2.pendingLanes |= b2;
  b2 !== 536870912 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - nc(b2);
  a2[b2] = c2;
}
function Ac(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e = 31 - nc(c2), f2 = 1 << e;
    b2[e] = 0;
    d[e] = -1;
    a2[e] = -1;
    c2 &= ~f2;
  }
}
function Bc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d = 31 - nc(c2), e = 1 << d;
    e & b2 | a2[d] & b2 && (a2[d] |= b2);
    c2 &= ~e;
  }
}
var C$4 = 0;
function Cc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? (a2 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Dc, Ec, Fc, Gc, Hc, Ic = false, Jc = [], Kc = null, Lc = null, Mc = null, Nc = /* @__PURE__ */ new Map(), Oc = /* @__PURE__ */ new Map(), Pc = [], Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Kc = null;
      break;
    case "dragenter":
    case "dragleave":
      Lc = null;
      break;
    case "mouseover":
    case "mouseout":
      Mc = null;
      break;
    case "pointerover":
    case "pointerout":
      Nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oc.delete(b2.pointerId);
  }
}
function Sc(a2, b2, c2, d, e, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, b2 !== null && (b2 = Bb(b2), b2 !== null && Ec(b2)), a2;
  a2.eventSystemFlags |= d;
  b2 = a2.targetContainers;
  e !== null && b2.indexOf(e) === -1 && b2.push(e);
  return a2;
}
function Tc(a2, b2, c2, d, e) {
  switch (b2) {
    case "focusin":
      return Kc = Sc(Kc, a2, b2, c2, d, e), true;
    case "dragenter":
      return Lc = Sc(Lc, a2, b2, c2, d, e), true;
    case "mouseover":
      return Mc = Sc(Mc, a2, b2, c2, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Nc.set(f2, Sc(Nc.get(f2) || null, a2, b2, c2, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Oc.set(f2, Sc(Oc.get(f2) || null, a2, b2, c2, d, e)), true;
  }
  return false;
}
function Uc(a2) {
  var b2 = Vc(a2.target);
  if (b2 !== null) {
    var c2 = Ub(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = Vb(c2), b2 !== null) {
          a2.blockedOn = b2;
          Hc(a2.priority, function() {
            Fc(c2);
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Wc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Xc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c2 === null) {
      c2 = a2.nativeEvent;
      var d = new c2.constructor(c2.type, c2);
      vb = d;
      c2.target.dispatchEvent(d);
      vb = null;
    } else
      return b2 = Bb(c2), b2 !== null && Ec(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Yc(a2, b2, c2) {
  Wc(a2) && c2.delete(b2);
}
function Zc() {
  Ic = false;
  Kc !== null && Wc(Kc) && (Kc = null);
  Lc !== null && Wc(Lc) && (Lc = null);
  Mc !== null && Wc(Mc) && (Mc = null);
  Nc.forEach(Yc);
  Oc.forEach(Yc);
}
function $c(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Ic || (Ic = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Zc)));
}
function ad(a2) {
  function b2(b3) {
    return $c(b3, a2);
  }
  if (0 < Jc.length) {
    $c(Jc[0], a2);
    for (var c2 = 1; c2 < Jc.length; c2++) {
      var d = Jc[c2];
      d.blockedOn === a2 && (d.blockedOn = null);
    }
  }
  Kc !== null && $c(Kc, a2);
  Lc !== null && $c(Lc, a2);
  Mc !== null && $c(Mc, a2);
  Nc.forEach(b2);
  Oc.forEach(b2);
  for (c2 = 0; c2 < Pc.length; c2++)
    d = Pc[c2], d.blockedOn === a2 && (d.blockedOn = null);
  for (; 0 < Pc.length && (c2 = Pc[0], c2.blockedOn === null); )
    Uc(c2), c2.blockedOn === null && Pc.shift();
}
var bd = ta.ReactCurrentBatchConfig, cd = true;
function dd(a2, b2, c2, d) {
  var e = C$4, f2 = bd.transition;
  bd.transition = null;
  try {
    C$4 = 1, ed(a2, b2, c2, d);
  } finally {
    C$4 = e, bd.transition = f2;
  }
}
function fd(a2, b2, c2, d) {
  var e = C$4, f2 = bd.transition;
  bd.transition = null;
  try {
    C$4 = 4, ed(a2, b2, c2, d);
  } finally {
    C$4 = e, bd.transition = f2;
  }
}
function ed(a2, b2, c2, d) {
  if (cd) {
    var e = Xc(a2, b2, c2, d);
    if (e === null)
      gd(a2, b2, d, hd, c2), Rc(a2, d);
    else if (Tc(e, a2, b2, c2, d))
      d.stopPropagation();
    else if (Rc(a2, d), b2 & 4 && -1 < Qc.indexOf(a2)) {
      for (; e !== null; ) {
        var f2 = Bb(e);
        f2 !== null && Dc(f2);
        f2 = Xc(a2, b2, c2, d);
        f2 === null && gd(a2, b2, d, hd, c2);
        if (f2 === e)
          break;
        e = f2;
      }
      e !== null && d.stopPropagation();
    } else
      gd(a2, b2, d, null, c2);
  }
}
var hd = null;
function Xc(a2, b2, c2, d) {
  hd = null;
  a2 = wb(d);
  a2 = Vc(a2);
  if (a2 !== null)
    if (b2 = Ub(a2), b2 === null)
      a2 = null;
    else if (c2 = b2.tag, c2 === 13) {
      a2 = Vb(b2);
      if (a2 !== null)
        return a2;
      a2 = null;
    } else if (c2 === 3) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return b2.tag === 3 ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  hd = a2;
  return null;
}
function id(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dc()) {
        case ec:
          return 1;
        case fc:
          return 4;
        case gc:
        case hc:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jd = null, kd = null, ld = null;
function md() {
  if (ld)
    return ld;
  var a2, b2 = kd, c2 = b2.length, d, e = "value" in jd ? jd.value : jd.textContent, f2 = e.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d = 1; d <= g2 && b2[c2 - d] === e[f2 - d]; d++)
    ;
  return ld = e.slice(a2, 1 < d ? 1 - d : void 0);
}
function nd(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function od() {
  return true;
}
function pd() {
  return false;
}
function qd(a2) {
  function b2(b3, d, e, f2, g2) {
    this._reactName = b3;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? od : pd;
    this.isPropagationStopped = pd;
    return this;
  }
  A$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = od);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = od);
  }, persist: function() {
  }, isPersistent: od });
  return b2;
}
var rd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, sd = qd(rd), td = A$1({}, rd, { view: 0, detail: 0 }), ud = qd(td), vd, wd, xd, zd = A$1({}, td, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== xd && (xd && a2.type === "mousemove" ? (vd = a2.screenX - xd.screenX, wd = a2.screenY - xd.screenY) : wd = vd = 0, xd = a2);
  return vd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : wd;
} }), Ad = qd(zd), Bd = A$1({}, zd, { dataTransfer: 0 }), Cd = qd(Bd), Dd = A$1({}, td, { relatedTarget: 0 }), Ed = qd(Dd), Fd = A$1({}, rd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = qd(Fd), Hd = A$1({}, rd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Id = qd(Hd), Jd = A$1({}, rd, { data: 0 }), Kd = qd(Jd), Ld = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Md = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Od(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Nd[a2]) ? !!b2[a2] : false;
}
function yd() {
  return Od;
}
var Pd = A$1({}, td, { key: function(a2) {
  if (a2.key) {
    var b2 = Ld[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = nd(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Md[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(a2) {
  return a2.type === "keypress" ? nd(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? nd(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
} }), Qd = qd(Pd), Rd = A$1({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sd = qd(Rd), Td = A$1({}, td, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), Ud = qd(Td), Vd = A$1({}, rd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = qd(Vd), Xd = A$1({}, zd, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yd = qd(Xd), Zd = [9, 13, 27, 32], $d = ia && "CompositionEvent" in window, ae$1 = null;
ia && "documentMode" in document && (ae$1 = document.documentMode);
var be$2 = ia && "TextEvent" in window && !ae$1, ce$2 = ia && (!$d || ae$1 && 8 < ae$1 && 11 >= ae$1), de$2 = String.fromCharCode(32), ee = false;
function fe$1(a2, b2) {
  switch (a2) {
    case "keyup":
      return Zd.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function ge$2(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var he$1 = false;
function ie$1(a2, b2) {
  switch (a2) {
    case "compositionend":
      return ge$2(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      ee = true;
      return de$2;
    case "textInput":
      return a2 = b2.data, a2 === de$2 && ee ? null : a2;
    default:
      return null;
  }
}
function je(a2, b2) {
  if (he$1)
    return a2 === "compositionend" || !$d && fe$1(a2, b2) ? (a2 = md(), ld = kd = jd = null, he$1 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return ce$2 && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var ke = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function le$1(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!ke[a2.type] : b2 === "textarea" ? true : false;
}
function me$2(a2, b2, c2, d) {
  Db(d);
  b2 = ne(b2, "onChange");
  0 < b2.length && (c2 = new sd("onChange", "change", null, c2, d), a2.push({ event: c2, listeners: b2 }));
}
var oe$2 = null, pe$1 = null;
function qe(a2) {
  re$1(a2, 0);
}
function se$1(a2) {
  var b2 = te(a2);
  if (Va(b2))
    return a2;
}
function ue$1(a2, b2) {
  if (a2 === "change")
    return b2;
}
var ve$2 = false;
if (ia) {
  var we;
  if (ia) {
    var xe$2 = "oninput" in document;
    if (!xe$2) {
      var ye$2 = document.createElement("div");
      ye$2.setAttribute("oninput", "return;");
      xe$2 = typeof ye$2.oninput === "function";
    }
    we = xe$2;
  } else
    we = false;
  ve$2 = we && (!document.documentMode || 9 < document.documentMode);
}
function ze() {
  oe$2 && (oe$2.detachEvent("onpropertychange", Ae$1), pe$1 = oe$2 = null);
}
function Ae$1(a2) {
  if (a2.propertyName === "value" && se$1(pe$1)) {
    var b2 = [];
    me$2(b2, pe$1, a2, wb(a2));
    Ib(qe, b2);
  }
}
function Be(a2, b2, c2) {
  a2 === "focusin" ? (ze(), oe$2 = b2, pe$1 = c2, oe$2.attachEvent("onpropertychange", Ae$1)) : a2 === "focusout" && ze();
}
function Ce$2(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return se$1(pe$1);
}
function De(a2, b2) {
  if (a2 === "click")
    return se$1(b2);
}
function Ee$2(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return se$1(b2);
}
function Fe(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var Ge$1 = typeof Object.is === "function" ? Object.is : Fe;
function He(a2, b2) {
  if (Ge$1(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a2), d = Object.keys(b2);
  if (c2.length !== d.length)
    return false;
  for (d = 0; d < c2.length; d++) {
    var e = c2[d];
    if (!ja.call(b2, e) || !Ge$1(a2[e], b2[e]))
      return false;
  }
  return true;
}
function Ie$2(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Je(a2, b2) {
  var c2 = Ie$2(a2);
  a2 = 0;
  for (var d; c2; ) {
    if (c2.nodeType === 3) {
      d = a2 + c2.textContent.length;
      if (a2 <= b2 && d >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ie$2(c2);
  }
}
function Ke(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Ke(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Le$1() {
  for (var a2 = window, b2 = Wa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Wa(a2.document);
  }
  return b2;
}
function Me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
function Ne(a2) {
  var b2 = Le$1(), c2 = a2.focusedElem, d = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Ke(c2.ownerDocument.documentElement, c2)) {
    if (d !== null && Me(c2)) {
      if (b2 = d.start, a2 = d.end, a2 === void 0 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e = c2.textContent.length, f2 = Math.min(d.start, e);
        d = d.end === void 0 ? f2 : Math.min(d.end, e);
        !a2.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Je(c2, f2);
        var g2 = Je(c2, d);
        e && g2 && (a2.rangeCount !== 1 || a2.anchorNode !== e.node || a2.anchorOffset !== e.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a2.removeAllRanges(), f2 > d ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      a2.nodeType === 1 && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    typeof c2.focus === "function" && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Oe$1 = ia && "documentMode" in document && 11 >= document.documentMode, Pe = null, Qe$1 = null, Re$1 = null, Se$2 = false;
function Te$2(a2, b2, c2) {
  var d = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Se$2 || Pe == null || Pe !== Wa(d) || (d = Pe, "selectionStart" in d && Me(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Re$1 && He(Re$1, d) || (Re$1 = d, d = ne(Qe$1, "onSelect"), 0 < d.length && (b2 = new sd("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d }), b2.target = Pe)));
}
function Ue(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var Ve = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd") }, We = {}, Xe = {};
ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
function Ye(a2) {
  if (We[a2])
    return We[a2];
  if (!Ve[a2])
    return a2;
  var b2 = Ve[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Xe)
      return We[a2] = b2[c2];
  return a2;
}
var Ze = Ye("animationend"), $e = Ye("animationiteration"), af = Ye("animationstart"), bf = Ye("transitionend"), cf = /* @__PURE__ */ new Map(), df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ef(a2, b2) {
  cf.set(a2, b2);
  fa(b2, [a2]);
}
for (var ff = 0; ff < df.length; ff++) {
  var gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
  ef(hf, "on" + jf);
}
ef(Ze, "onAnimationEnd");
ef($e, "onAnimationIteration");
ef(af, "onAnimationStart");
ef("dblclick", "onDoubleClick");
ef("focusin", "onFocus");
ef("focusout", "onBlur");
ef(bf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
function mf(a2, b2, c2) {
  var d = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Tb(d, b2, void 0, a2);
  a2.currentTarget = null;
}
function re$1(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d = a2[c2], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d.length - 1; 0 <= g2; g2--) {
          var h2 = d[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          mf(e, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d.length; g2++) {
          h2 = d[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          mf(e, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Pb)
    throw a2 = Qb, Pb = false, Qb = null, a2;
}
function D(a2, b2) {
  var c2 = b2[nf];
  c2 === void 0 && (c2 = b2[nf] = /* @__PURE__ */ new Set());
  var d = a2 + "__bubble";
  c2.has(d) || (of(b2, a2, 2, false), c2.add(d));
}
function pf(a2, b2, c2) {
  var d = 0;
  b2 && (d |= 4);
  of(c2, a2, d, b2);
}
var qf = "_reactListening" + Math.random().toString(36).slice(2);
function rf(a2) {
  if (!a2[qf]) {
    a2[qf] = true;
    da.forEach(function(b3) {
      b3 !== "selectionchange" && (lf.has(b3) || pf(b3, false, a2), pf(b3, true, a2));
    });
    var b2 = a2.nodeType === 9 ? a2 : a2.ownerDocument;
    b2 === null || b2[qf] || (b2[qf] = true, pf("selectionchange", false, b2));
  }
}
function of(a2, b2, c2, d) {
  switch (id(b2)) {
    case 1:
      var e = dd;
      break;
    case 4:
      e = fd;
      break;
    default:
      e = ed;
  }
  c2 = e.bind(null, b2, c2, a2);
  e = void 0;
  !Kb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e = true);
  d ? e !== void 0 ? a2.addEventListener(b2, c2, { capture: true, passive: e }) : a2.addEventListener(b2, c2, true) : e !== void 0 ? a2.addEventListener(b2, c2, { passive: e }) : a2.addEventListener(b2, c2, false);
}
function gd(a2, b2, c2, d, e) {
  var f2 = d;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g2 = d.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d.stateNode.containerInfo;
          if (h2 === e || h2.nodeType === 8 && h2.parentNode === e)
            break;
          if (g2 === 4)
            for (g2 = d.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e || k2.nodeType === 8 && k2.parentNode === e)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = Vc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d = d.return;
      }
  Ib(function() {
    var d2 = f2, e2 = wb(c2), g3 = [];
    a: {
      var h3 = cf.get(a2);
      if (h3 !== void 0) {
        var k3 = sd, m2 = a2;
        switch (a2) {
          case "keypress":
            if (nd(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Qd;
            break;
          case "focusin":
            m2 = "focus";
            k3 = Ed;
            break;
          case "focusout":
            m2 = "blur";
            k3 = Ed;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Ed;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Ad;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Ud;
            break;
          case Ze:
          case $e:
          case af:
            k3 = Gd;
            break;
          case bf:
            k3 = Wd;
            break;
          case "scroll":
            k3 = ud;
            break;
          case "wheel":
            k3 = Yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Sd;
        }
        var w2 = (b2 & 4) !== 0, J2 = !w2 && a2 === "scroll", v2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var x2 = d2, r2; x2 !== null; ) {
          r2 = x2;
          var F2 = r2.stateNode;
          r2.tag === 5 && F2 !== null && (r2 = F2, v2 !== null && (F2 = Jb(x2, v2), F2 != null && w2.push(sf(x2, F2, r2))));
          if (J2)
            break;
          x2 = x2.return;
        }
        0 < w2.length && (h3 = new k3(h3, m2, null, c2, e2), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && c2 !== vb && (m2 = c2.relatedTarget || c2.fromElement) && (Vc(m2) || m2[tf]))
          break a;
        if (k3 || h3) {
          h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (m2 = c2.relatedTarget || c2.toElement, k3 = d2, m2 = m2 ? Vc(m2) : null, m2 !== null && (J2 = Ub(m2), m2 !== J2 || m2.tag !== 5 && m2.tag !== 6))
              m2 = null;
          } else
            k3 = null, m2 = d2;
          if (k3 !== m2) {
            w2 = Ad;
            F2 = "onMouseLeave";
            v2 = "onMouseEnter";
            x2 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Sd, F2 = "onPointerLeave", v2 = "onPointerEnter", x2 = "pointer";
            J2 = k3 == null ? h3 : te(k3);
            r2 = m2 == null ? h3 : te(m2);
            h3 = new w2(F2, x2 + "leave", k3, c2, e2);
            h3.target = J2;
            h3.relatedTarget = r2;
            F2 = null;
            Vc(e2) === d2 && (w2 = new w2(v2, x2 + "enter", m2, c2, e2), w2.target = r2, w2.relatedTarget = J2, F2 = w2);
            J2 = F2;
            if (k3 && m2)
              b: {
                w2 = k3;
                v2 = m2;
                x2 = 0;
                for (r2 = w2; r2; r2 = uf(r2))
                  x2++;
                r2 = 0;
                for (F2 = v2; F2; F2 = uf(F2))
                  r2++;
                for (; 0 < x2 - r2; )
                  w2 = uf(w2), x2--;
                for (; 0 < r2 - x2; )
                  v2 = uf(v2), r2--;
                for (; x2--; ) {
                  if (w2 === v2 || v2 !== null && w2 === v2.alternate)
                    break b;
                  w2 = uf(w2);
                  v2 = uf(v2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && vf(g3, h3, k3, w2, false);
            m2 !== null && J2 !== null && vf(g3, J2, m2, w2, true);
          }
        }
      }
      a: {
        h3 = d2 ? te(d2) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var Z2 = ue$1;
        else if (le$1(h3))
          if (ve$2)
            Z2 = Ee$2;
          else {
            Z2 = Ce$2;
            var ya = Be;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (Z2 = De);
        if (Z2 && (Z2 = Z2(a2, d2))) {
          me$2(g3, Z2, c2, e2);
          break a;
        }
        ya && ya(a2, h3, d2);
        a2 === "focusout" && (ya = h3._wrapperState) && ya.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      ya = d2 ? te(d2) : window;
      switch (a2) {
        case "focusin":
          if (le$1(ya) || ya.contentEditable === "true")
            Pe = ya, Qe$1 = d2, Re$1 = null;
          break;
        case "focusout":
          Re$1 = Qe$1 = Pe = null;
          break;
        case "mousedown":
          Se$2 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Se$2 = false;
          Te$2(g3, c2, e2);
          break;
        case "selectionchange":
          if (Oe$1)
            break;
        case "keydown":
        case "keyup":
          Te$2(g3, c2, e2);
      }
      var ab;
      if ($d)
        b: {
          switch (a2) {
            case "compositionstart":
              var ca = "onCompositionStart";
              break b;
            case "compositionend":
              ca = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ca = "onCompositionUpdate";
              break b;
          }
          ca = void 0;
        }
      else
        he$1 ? fe$1(a2, c2) && (ca = "onCompositionEnd") : a2 === "keydown" && c2.keyCode === 229 && (ca = "onCompositionStart");
      ca && (ce$2 && c2.locale !== "ko" && (he$1 || ca !== "onCompositionStart" ? ca === "onCompositionEnd" && he$1 && (ab = md()) : (jd = e2, kd = "value" in jd ? jd.value : jd.textContent, he$1 = true)), ya = ne(d2, ca), 0 < ya.length && (ca = new Kd(ca, a2, null, c2, e2), g3.push({ event: ca, listeners: ya }), ab ? ca.data = ab : (ab = ge$2(c2), ab !== null && (ca.data = ab))));
      if (ab = be$2 ? ie$1(a2, c2) : je(a2, c2))
        d2 = ne(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Kd("onBeforeInput", "beforeinput", null, c2, e2), g3.push({ event: e2, listeners: d2 }), e2.data = ab);
    }
    re$1(g3, b2);
  });
}
function sf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function ne(a2, b2) {
  for (var c2 = b2 + "Capture", d = []; a2 !== null; ) {
    var e = a2, f2 = e.stateNode;
    e.tag === 5 && f2 !== null && (e = f2, f2 = Jb(a2, c2), f2 != null && d.unshift(sf(a2, f2, e)), f2 = Jb(a2, b2), f2 != null && d.push(sf(a2, f2, e)));
    a2 = a2.return;
  }
  return d;
}
function uf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function vf(a2, b2, c2, d, e) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e ? (k2 = Jb(c2, f2), k2 != null && g2.unshift(sf(c2, k2, h2))) : e || (k2 = Jb(c2, f2), k2 != null && g2.push(sf(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a2.push({ event: b2, listeners: g2 });
}
var wf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
function yf(a2) {
  return (typeof a2 === "string" ? a2 : "" + a2).replace(wf, "\n").replace(xf, "");
}
function zf(a2, b2, c2) {
  b2 = yf(b2);
  if (yf(a2) !== b2 && c2)
    throw Error(p$6(425));
}
function Af() {
}
var Bf = null, Cf = null;
function Df(a2, b2) {
  return a2 === "textarea" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var Ef = typeof setTimeout === "function" ? setTimeout : void 0, Ff = typeof clearTimeout === "function" ? clearTimeout : void 0, Gf = typeof Promise === "function" ? Promise : void 0, If = typeof queueMicrotask === "function" ? queueMicrotask : typeof Gf !== "undefined" ? function(a2) {
  return Gf.resolve(null).then(a2).catch(Hf);
} : Ef;
function Hf(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Jf(a2, b2) {
  var c2 = b2, d = 0;
  do {
    var e = c2.nextSibling;
    a2.removeChild(c2);
    if (e && e.nodeType === 8)
      if (c2 = e.data, c2 === "/$") {
        if (d === 0) {
          a2.removeChild(e);
          ad(b2);
          return;
        }
        d--;
      } else
        c2 !== "$" && c2 !== "$?" && c2 !== "$!" || d++;
    c2 = e;
  } while (c2);
  ad(b2);
}
function Kf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
    if (b2 === 8) {
      b2 = a2.data;
      if (b2 === "$" || b2 === "$!" || b2 === "$?")
        break;
      if (b2 === "/$")
        return null;
    }
  }
  return a2;
}
function Lf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c2 = a2.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Mf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Mf, Of = "__reactProps$" + Mf, tf = "__reactContainer$" + Mf, nf = "__reactEvents$" + Mf, Pf = "__reactListeners$" + Mf, Qf = "__reactHandles$" + Mf;
function Vc(a2) {
  var b2 = a2[Nf];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[tf] || c2[Nf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a2 = Lf(a2); a2 !== null; ) {
          if (c2 = a2[Nf])
            return c2;
          a2 = Lf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Bb(a2) {
  a2 = a2[Nf] || a2[tf];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function te(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(p$6(33));
}
function Cb(a2) {
  return a2[Of] || null;
}
var Rf = [], Sf = -1;
function Tf(a2) {
  return { current: a2 };
}
function E$2(a2) {
  0 > Sf || (a2.current = Rf[Sf], Rf[Sf] = null, Sf--);
}
function G(a2, b2) {
  Sf++;
  Rf[Sf] = a2.current;
  a2.current = b2;
}
var Uf = {}, H$1 = Tf(Uf), Vf = Tf(false), Wf = Uf;
function Xf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Uf;
  var d = a2.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c2)
    e[f2] = b2[f2];
  d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Yf(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Zf() {
  E$2(Vf);
  E$2(H$1);
}
function $f(a2, b2, c2) {
  if (H$1.current !== Uf)
    throw Error(p$6(168));
  G(H$1, b2);
  G(Vf, c2);
}
function ag(a2, b2, c2) {
  var d = a2.stateNode;
  b2 = b2.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c2;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b2))
      throw Error(p$6(108, Qa(a2) || "Unknown", e));
  return A$1({}, c2, d);
}
function bg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Uf;
  Wf = H$1.current;
  G(H$1, a2);
  G(Vf, Vf.current);
  return true;
}
function cg(a2, b2, c2) {
  var d = a2.stateNode;
  if (!d)
    throw Error(p$6(169));
  c2 ? (a2 = ag(a2, b2, Wf), d.__reactInternalMemoizedMergedChildContext = a2, E$2(Vf), E$2(H$1), G(H$1, a2)) : E$2(Vf);
  G(Vf, c2);
}
var dg = null, eg = false, fg = false;
function gg(a2) {
  dg === null ? dg = [a2] : dg.push(a2);
}
function hg(a2) {
  eg = true;
  gg(a2);
}
function ig() {
  if (!fg && dg !== null) {
    fg = true;
    var a2 = 0, b2 = C$4;
    try {
      var c2 = dg;
      for (C$4 = 1; a2 < c2.length; a2++) {
        var d = c2[a2];
        do
          d = d(true);
        while (d !== null);
      }
      dg = null;
      eg = false;
    } catch (e) {
      throw dg !== null && (dg = dg.slice(a2 + 1)), $b(ec, ig), e;
    } finally {
      C$4 = b2, fg = false;
    }
  }
  return null;
}
var jg = ta.ReactCurrentBatchConfig;
function kg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$1({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      b2[c2] === void 0 && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var lg = Tf(null), mg = null, ng = null, og = null;
function pg() {
  og = ng = mg = null;
}
function qg(a2) {
  var b2 = lg.current;
  E$2(lg);
  a2._currentValue = b2;
}
function rg(a2, b2, c2) {
  for (; a2 !== null; ) {
    var d = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, d !== null && (d.childLanes |= b2)) : d !== null && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function sg(a2, b2) {
  mg = a2;
  og = ng = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (tg = true), a2.firstContext = null);
}
function ug(a2) {
  var b2 = a2._currentValue;
  if (og !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, ng === null) {
      if (mg === null)
        throw Error(p$6(308));
      ng = a2;
      mg.dependencies = { lanes: 0, firstContext: a2 };
    } else
      ng = ng.next = a2;
  return b2;
}
var vg = null, wg = false;
function xg(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function zg(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a2, b2) {
  var c2 = a2.updateQueue;
  c2 !== null && (c2 = c2.shared, Bg(a2) ? (a2 = c2.interleaved, a2 === null ? (b2.next = b2, vg === null ? vg = [c2] : vg.push(c2)) : (b2.next = a2.next, a2.next = b2), c2.interleaved = b2) : (a2 = c2.pending, a2 === null ? b2.next = b2 : (b2.next = a2.next, a2.next = b2), c2.pending = b2));
}
function Cg(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (b2 !== null && (b2 = b2.shared, (c2 & 4194240) !== 0)) {
    var d = b2.lanes;
    d &= a2.pendingLanes;
    c2 |= d;
    b2.lanes = c2;
    Bc(a2, c2);
  }
}
function Dg(a2, b2) {
  var c2 = a2.updateQueue, d = a2.alternate;
  if (d !== null && (d = d.updateQueue, c2 === d)) {
    var e = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e = f2 = b2 : f2 = f2.next = b2;
    } else
      e = f2 = b2;
    c2 = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function Eg(a2, b2, c2, d) {
  var e = a2.updateQueue;
  wg = false;
  var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
  if (h2 !== null) {
    e.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a2.alternate;
    n2 !== null && (n2 = n2.updateQueue, h2 = n2.lastBaseUpdate, h2 !== g2 && (h2 === null ? n2.firstBaseUpdate = l2 : h2.next = l2, n2.lastBaseUpdate = k2));
  }
  if (f2 !== null) {
    var u2 = e.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    h2 = f2;
    do {
      var q2 = h2.lane, y2 = h2.eventTime;
      if ((d & q2) === q2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var m2 = a2, w2 = h2;
          q2 = b2;
          y2 = c2;
          switch (w2.tag) {
            case 1:
              m2 = w2.payload;
              if (typeof m2 === "function") {
                u2 = m2.call(y2, u2, q2);
                break a;
              }
              u2 = m2;
              break a;
            case 3:
              m2.flags = m2.flags & -65537 | 128;
            case 0:
              m2 = w2.payload;
              q2 = typeof m2 === "function" ? m2.call(y2, u2, q2) : m2;
              if (q2 === null || q2 === void 0)
                break a;
              u2 = A$1({}, u2, q2);
              break a;
            case 2:
              wg = true;
          }
        }
        h2.callback !== null && h2.lane !== 0 && (a2.flags |= 64, q2 = e.effects, q2 === null ? e.effects = [h2] : q2.push(h2));
      } else
        y2 = { eventTime: y2, lane: q2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, n2 === null ? (l2 = n2 = y2, k2 = u2) : n2 = n2.next = y2, g2 |= q2;
      h2 = h2.next;
      if (h2 === null)
        if (h2 = e.shared.pending, h2 === null)
          break;
        else
          q2 = h2, h2 = q2.next, q2.next = null, e.lastBaseUpdate = q2, e.shared.pending = null;
    } while (1);
    n2 === null && (k2 = u2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = n2;
    b2 = e.shared.interleaved;
    if (b2 !== null) {
      e = b2;
      do
        g2 |= e.lane, e = e.next;
      while (e !== b2);
    } else
      f2 === null && (e.shared.lanes = 0);
    Fg |= g2;
    a2.lanes = g2;
    a2.memoizedState = u2;
  }
}
function Gg(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d = a2[b2], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c2;
        if (typeof e !== "function")
          throw Error(p$6(191, e));
        e.call(d);
      }
    }
}
var Hg = new aa.Component().refs;
function Ig(a2, b2, c2, d) {
  b2 = a2.memoizedState;
  c2 = c2(d, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : A$1({}, b2, c2);
  a2.memoizedState = c2;
  a2.lanes === 0 && (a2.updateQueue.baseState = c2);
}
var Mg = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Ub(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d = Jg(), e = Kg(a2), f2 = zg(d, e);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  b2 = Lg(a2, e, d);
  b2 !== null && Cg(b2, a2, e);
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d = Jg(), e = Kg(a2), f2 = zg(d, e);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  b2 = Lg(a2, e, d);
  b2 !== null && Cg(b2, a2, e);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = Jg(), d = Kg(a2), e = zg(c2, d);
  e.tag = 2;
  b2 !== void 0 && b2 !== null && (e.callback = b2);
  Ag(a2, e);
  b2 = Lg(a2, d, c2);
  b2 !== null && Cg(b2, a2, d);
} };
function Ng(a2, b2, c2, d, e, f2, g2) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !He(c2, d) || !He(e, f2) : true;
}
function Og(a2, b2, c2) {
  var d = false, e = Uf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = ug(f2) : (e = Yf(b2) ? Wf : H$1.current, d = b2.contextTypes, f2 = (d = d !== null && d !== void 0) ? Xf(a2, e) : Uf);
  b2 = new b2(c2, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Mg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Pg(a2, b2, c2, d) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d);
  b2.state !== a2 && Mg.enqueueReplaceState(b2, b2.state, null);
}
function Qg(a2, b2, c2, d) {
  var e = a2.stateNode;
  e.props = c2;
  e.state = a2.memoizedState;
  e.refs = Hg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e.context = ug(f2) : (f2 = Yf(b2) ? Wf : H$1.current, e.context = Xf(a2, f2));
  e.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Ig(a2, b2, f2, c2), e.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b2 = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b2 !== e.state && Mg.enqueueReplaceState(e, e.state, null), Eg(a2, c2, e, d), e.state = a2.memoizedState);
  typeof e.componentDidMount === "function" && (a2.flags |= 4194308);
}
var Rg = [], Sg = 0, Tg = null, Ug = 0, Vg = [], Wg = 0, Xg = null, Yg = 1, Zg = "";
function $g(a2, b2) {
  Rg[Sg++] = Ug;
  Rg[Sg++] = Tg;
  Tg = a2;
  Ug = b2;
}
function ah(a2, b2, c2) {
  Vg[Wg++] = Yg;
  Vg[Wg++] = Zg;
  Vg[Wg++] = Xg;
  Xg = a2;
  var d = Yg;
  a2 = Zg;
  var e = 32 - nc(d) - 1;
  d &= ~(1 << e);
  c2 += 1;
  var f2 = 32 - nc(b2) + e;
  if (30 < f2) {
    var g2 = e - e % 5;
    f2 = (d & (1 << g2) - 1).toString(32);
    d >>= g2;
    e -= g2;
    Yg = 1 << 32 - nc(b2) + e | c2 << e | d;
    Zg = f2 + a2;
  } else
    Yg = 1 << f2 | c2 << e | d, Zg = a2;
}
function bh(a2) {
  a2.return !== null && ($g(a2, 1), ah(a2, 1, 0));
}
function ch(a2) {
  for (; a2 === Tg; )
    Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
  for (; a2 === Xg; )
    Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
}
var dh = null, eh = null, I$1 = false, fh = null;
function gh(a2, b2) {
  var c2 = hh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  b2 === null ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function ih(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, dh = a2, eh = Kf(b2.firstChild), true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, dh = a2, eh = null, true) : false;
    case 13:
      return b2 = b2.nodeType !== 8 ? null : b2, b2 !== null ? (c2 = Xg !== null ? { id: Yg, overflow: Zg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = hh(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, dh = a2, eh = null, true) : false;
    default:
      return false;
  }
}
function jh(a2) {
  return (a2.mode & 1) !== 0 && (a2.flags & 128) === 0;
}
function kh(a2) {
  if (I$1) {
    var b2 = eh;
    if (b2) {
      var c2 = b2;
      if (!ih(a2, b2)) {
        if (jh(a2))
          throw Error(p$6(418));
        b2 = Kf(c2.nextSibling);
        var d = dh;
        b2 && ih(a2, b2) ? gh(d, c2) : (a2.flags = a2.flags & -4097 | 2, I$1 = false, dh = a2);
      }
    } else {
      if (jh(a2))
        throw Error(p$6(418));
      a2.flags = a2.flags & -4097 | 2;
      I$1 = false;
      dh = a2;
    }
  }
}
function lh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  dh = a2;
}
function mh(a2) {
  if (a2 !== dh)
    return false;
  if (!I$1)
    return lh(a2), I$1 = true, false;
  var b2;
  (b2 = a2.tag !== 3) && !(b2 = a2.tag !== 5) && (b2 = a2.type, b2 = b2 !== "head" && b2 !== "body" && !Df(a2.type, a2.memoizedProps));
  if (b2 && (b2 = eh)) {
    if (jh(a2)) {
      for (a2 = eh; a2; )
        a2 = Kf(a2.nextSibling);
      throw Error(p$6(418));
    }
    for (; b2; )
      gh(a2, b2), b2 = Kf(b2.nextSibling);
  }
  lh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$6(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c2 = a2.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              eh = Kf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      eh = null;
    }
  } else
    eh = dh ? Kf(a2.stateNode.nextSibling) : null;
  return true;
}
function nh() {
  eh = dh = null;
  I$1 = false;
}
function oh(a2) {
  fh === null ? fh = [a2] : fh.push(a2);
}
function ph(a2, b2, c2) {
  a2 = c2.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(p$6(309));
        var d = c2.stateNode;
      }
      if (!d)
        throw Error(p$6(147, a2));
      var e = d, f2 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e.refs;
        b3 === Hg && (b3 = e.refs = {});
        a3 === null ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(p$6(284));
    if (!c2._owner)
      throw Error(p$6(290, a2));
  }
  return a2;
}
function qh(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$6(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function rh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function sh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d2 = b3.deletions;
      d2 === null ? (b3.deletions = [c3], b3.flags |= 16) : d2.push(c3);
    }
  }
  function c2(c3, d2) {
    if (!a2)
      return null;
    for (; d2 !== null; )
      b2(c3, d2), d2 = d2.sibling;
    return null;
  }
  function d(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e(a3, b3) {
    a3 = th(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d2) {
    b3.index = d2;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d2 = b3.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c3 ? (b3.flags |= 2, c3) : d2;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && b3.alternate === null && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d2) {
    if (b3 === null || b3.tag !== 6)
      return b3 = uh(c3, a3.mode, d2), b3.return = a3, b3;
    b3 = e(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d2) {
    var f3 = c3.type;
    if (f3 === wa)
      return n2(a3, b3, c3.props.children, d2, c3.key);
    if (b3 !== null && (b3.elementType === f3 || typeof f3 === "object" && f3 !== null && f3.$$typeof === Ga && rh(f3) === b3.type))
      return d2 = e(b3, c3.props), d2.ref = ph(a3, b3, c3), d2.return = a3, d2;
    d2 = vh(c3.type, c3.key, c3.props, null, a3.mode, d2);
    d2.ref = ph(a3, b3, c3);
    d2.return = a3;
    return d2;
  }
  function l2(a3, b3, c3, d2) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = wh(c3, a3.mode, d2), b3.return = a3, b3;
    b3 = e(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function n2(a3, b3, c3, d2, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = xh(c3, a3.mode, d2, f3), b3.return = a3, b3;
    b3 = e(b3, c3);
    b3.return = a3;
    return b3;
  }
  function u2(a3, b3, c3) {
    if (typeof b3 === "string" && b3 !== "" || typeof b3 === "number")
      return b3 = uh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case ua:
          return c3 = vh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = ph(a3, null, b3), c3.return = a3, c3;
        case va:
          return b3 = wh(b3, a3.mode, c3), b3.return = a3, b3;
        case Ga:
          var d2 = b3._init;
          return u2(a3, d2(b3._payload), c3);
      }
      if (db(b3) || Ja(b3))
        return b3 = xh(b3, a3.mode, c3, null), b3.return = a3, b3;
      qh(a3, b3);
    }
    return null;
  }
  function q2(a3, b3, c3, d2) {
    var e2 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" && c3 !== "" || typeof c3 === "number")
      return e2 !== null ? null : h2(a3, b3, "" + c3, d2);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case ua:
          return c3.key === e2 ? k2(a3, b3, c3, d2) : null;
        case va:
          return c3.key === e2 ? l2(a3, b3, c3, d2) : null;
        case Ga:
          return e2 = c3._init, q2(a3, b3, e2(c3._payload), d2);
      }
      if (db(c3) || Ja(c3))
        return e2 !== null ? null : n2(a3, b3, c3, d2, null);
      qh(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d2, e2) {
    if (typeof d2 === "string" && d2 !== "" || typeof d2 === "number")
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case ua:
          return a3 = a3.get(d2.key === null ? c3 : d2.key) || null, k2(b3, a3, d2, e2);
        case va:
          return a3 = a3.get(d2.key === null ? c3 : d2.key) || null, l2(b3, a3, d2, e2);
        case Ga:
          var f3 = d2._init;
          return y2(a3, b3, c3, f3(d2._payload), e2);
      }
      if (db(d2) || Ja(d2))
        return a3 = a3.get(c3) || null, n2(b3, a3, d2, e2, null);
      qh(b3, d2);
    }
    return null;
  }
  function m2(e2, g3, h3, k3) {
    for (var l3 = null, n3 = null, r2 = g3, m3 = g3 = 0, x2 = null; r2 !== null && m3 < h3.length; m3++) {
      r2.index > m3 ? (x2 = r2, r2 = null) : x2 = r2.sibling;
      var v2 = q2(e2, r2, h3[m3], k3);
      if (v2 === null) {
        r2 === null && (r2 = x2);
        break;
      }
      a2 && r2 && v2.alternate === null && b2(e2, r2);
      g3 = f2(v2, g3, m3);
      n3 === null ? l3 = v2 : n3.sibling = v2;
      n3 = v2;
      r2 = x2;
    }
    if (m3 === h3.length)
      return c2(e2, r2), I$1 && $g(e2, m3), l3;
    if (r2 === null) {
      for (; m3 < h3.length; m3++)
        r2 = u2(e2, h3[m3], k3), r2 !== null && (g3 = f2(r2, g3, m3), n3 === null ? l3 = r2 : n3.sibling = r2, n3 = r2);
      I$1 && $g(e2, m3);
      return l3;
    }
    for (r2 = d(e2, r2); m3 < h3.length; m3++)
      x2 = y2(r2, e2, m3, h3[m3], k3), x2 !== null && (a2 && x2.alternate !== null && r2.delete(x2.key === null ? m3 : x2.key), g3 = f2(x2, g3, m3), n3 === null ? l3 = x2 : n3.sibling = x2, n3 = x2);
    a2 && r2.forEach(function(a3) {
      return b2(e2, a3);
    });
    I$1 && $g(e2, m3);
    return l3;
  }
  function w2(e2, g3, h3, k3) {
    var l3 = Ja(h3);
    if (typeof l3 !== "function")
      throw Error(p$6(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(p$6(151));
    for (var n3 = l3 = null, m3 = g3, r2 = g3 = 0, x2 = null, v2 = h3.next(); m3 !== null && !v2.done; r2++, v2 = h3.next()) {
      m3.index > r2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var w3 = q2(e2, m3, v2.value, k3);
      if (w3 === null) {
        m3 === null && (m3 = x2);
        break;
      }
      a2 && m3 && w3.alternate === null && b2(e2, m3);
      g3 = f2(w3, g3, r2);
      n3 === null ? l3 = w3 : n3.sibling = w3;
      n3 = w3;
      m3 = x2;
    }
    if (v2.done)
      return c2(e2, m3), I$1 && $g(e2, r2), l3;
    if (m3 === null) {
      for (; !v2.done; r2++, v2 = h3.next())
        v2 = u2(e2, v2.value, k3), v2 !== null && (g3 = f2(v2, g3, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
      I$1 && $g(e2, r2);
      return l3;
    }
    for (m3 = d(e2, m3); !v2.done; r2++, v2 = h3.next())
      v2 = y2(m3, e2, r2, v2.value, k3), v2 !== null && (a2 && v2.alternate !== null && m3.delete(v2.key === null ? r2 : v2.key), g3 = f2(v2, g3, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
    a2 && m3.forEach(function(a3) {
      return b2(e2, a3);
    });
    I$1 && $g(e2, r2);
    return l3;
  }
  function J2(a3, d2, f3, h3) {
    typeof f3 === "object" && f3 !== null && f3.type === wa && f3.key === null && (f3 = f3.props.children);
    if (typeof f3 === "object" && f3 !== null) {
      switch (f3.$$typeof) {
        case ua:
          a: {
            for (var k3 = f3.key, l3 = d2; l3 !== null; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === wa) {
                  if (l3.tag === 7) {
                    c2(a3, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a3;
                    a3 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga && rh(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = ph(a3, l3, f3);
                  d2.return = a3;
                  a3 = d2;
                  break a;
                }
                c2(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === wa ? (d2 = xh(f3.props.children, a3.mode, h3, f3.key), d2.return = a3, a3 = d2) : (h3 = vh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = ph(a3, d2, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case va:
          a: {
            for (l3 = f3.key; d2 !== null; ) {
              if (d2.key === l3)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c2(a3, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a3;
                  a3 = d2;
                  break a;
                } else {
                  c2(a3, d2);
                  break;
                }
              else
                b2(a3, d2);
              d2 = d2.sibling;
            }
            d2 = wh(f3, a3.mode, h3);
            d2.return = a3;
            a3 = d2;
          }
          return g2(a3);
        case Ga:
          return l3 = f3._init, J2(a3, d2, l3(f3._payload), h3);
      }
      if (db(f3))
        return m2(a3, d2, f3, h3);
      if (Ja(f3))
        return w2(a3, d2, f3, h3);
      qh(a3, f3);
    }
    return typeof f3 === "string" && f3 !== "" || typeof f3 === "number" ? (f3 = "" + f3, d2 !== null && d2.tag === 6 ? (c2(a3, d2.sibling), d2 = e(d2, f3), d2.return = a3, a3 = d2) : (c2(a3, d2), d2 = uh(f3, a3.mode, h3), d2.return = a3, a3 = d2), g2(a3)) : c2(a3, d2);
  }
  return J2;
}
var yh = sh(true), zh = sh(false), Ah = {}, Bh = Tf(Ah), Ch = Tf(Ah), Dh = Tf(Ah);
function Eh(a2) {
  if (a2 === Ah)
    throw Error(p$6(174));
  return a2;
}
function Fh(a2, b2) {
  G(Dh, b2);
  G(Ch, a2);
  G(Bh, Ah);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : kb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = kb(b2, a2);
  }
  E$2(Bh);
  G(Bh, b2);
}
function Gh() {
  E$2(Bh);
  E$2(Ch);
  E$2(Dh);
}
function Hh(a2) {
  Eh(Dh.current);
  var b2 = Eh(Bh.current);
  var c2 = kb(b2, a2.type);
  b2 !== c2 && (G(Ch, a2), G(Bh, c2));
}
function Ih(a2) {
  Ch.current === a2 && (E$2(Bh), E$2(Ch));
}
var K = Tf(0);
function Jh(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 128) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Kh = [];
function Lh() {
  for (var a2 = 0; a2 < Kh.length; a2++)
    Kh[a2]._workInProgressVersionPrimary = null;
  Kh.length = 0;
}
var Mh = ta.ReactCurrentDispatcher, Nh = ta.ReactCurrentBatchConfig, Oh = 0, L$1 = null, M$1 = null, N$3 = null, Ph = false, Qh = false, Rh = 0, Sh = 0;
function O$1() {
  throw Error(p$6(321));
}
function Th(a2, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!Ge$1(a2[c2], b2[c2]))
      return false;
  return true;
}
function Uh(a2, b2, c2, d, e, f2) {
  Oh = f2;
  L$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Mh.current = a2 === null || a2.memoizedState === null ? Vh : Wh;
  a2 = c2(d, e);
  if (Qh) {
    f2 = 0;
    do {
      Qh = false;
      Rh = 0;
      if (25 <= f2)
        throw Error(p$6(301));
      f2 += 1;
      N$3 = M$1 = null;
      b2.updateQueue = null;
      Mh.current = Xh;
      a2 = c2(d, e);
    } while (Qh);
  }
  Mh.current = Yh;
  b2 = M$1 !== null && M$1.next !== null;
  Oh = 0;
  N$3 = M$1 = L$1 = null;
  Ph = false;
  if (b2)
    throw Error(p$6(300));
  return a2;
}
function Zh() {
  var a2 = Rh !== 0;
  Rh = 0;
  return a2;
}
function $h() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  N$3 === null ? L$1.memoizedState = N$3 = a2 : N$3 = N$3.next = a2;
  return N$3;
}
function ai() {
  if (M$1 === null) {
    var a2 = L$1.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = M$1.next;
  var b2 = N$3 === null ? L$1.memoizedState : N$3.next;
  if (b2 !== null)
    N$3 = b2, M$1 = a2;
  else {
    if (a2 === null)
      throw Error(p$6(310));
    M$1 = a2;
    a2 = { memoizedState: M$1.memoizedState, baseState: M$1.baseState, baseQueue: M$1.baseQueue, queue: M$1.queue, next: null };
    N$3 === null ? L$1.memoizedState = N$3 = a2 : N$3 = N$3.next = a2;
  }
  return N$3;
}
function bi(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function ci(a2) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$6(311));
  c2.lastRenderedReducer = a2;
  var d = M$1, e = d.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e !== null) {
      var g2 = e.next;
      e.next = f2.next;
      f2.next = g2;
    }
    d.baseQueue = e = f2;
    c2.pending = null;
  }
  if (e !== null) {
    f2 = e.next;
    d = d.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var n2 = l2.lane;
      if ((Oh & n2) === n2)
        k2 !== null && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a2(d, l2.action);
      else {
        var u2 = {
          lane: n2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        k2 === null ? (h2 = k2 = u2, g2 = d) : k2 = k2.next = u2;
        L$1.lanes |= n2;
        Fg |= n2;
      }
      l2 = l2.next;
    } while (l2 !== null && l2 !== f2);
    k2 === null ? g2 = d : k2.next = h2;
    Ge$1(d, b2.memoizedState) || (tg = true);
    b2.memoizedState = d;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d;
  }
  a2 = c2.interleaved;
  if (a2 !== null) {
    e = a2;
    do
      f2 = e.lane, L$1.lanes |= f2, Fg |= f2, e = e.next;
    while (e !== a2);
  } else
    e === null && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function di(a2) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$6(311));
  c2.lastRenderedReducer = a2;
  var d = c2.dispatch, e = c2.pending, f2 = b2.memoizedState;
  if (e !== null) {
    c2.pending = null;
    var g2 = e = e.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e);
    Ge$1(f2, b2.memoizedState) || (tg = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d];
}
function ei() {
}
function fi(a2, b2) {
  var c2 = L$1, d = ai(), e = b2(), f2 = !Ge$1(d.memoizedState, e);
  f2 && (d.memoizedState = e, tg = true);
  d = d.queue;
  gi(hi.bind(null, c2, d, a2), [a2]);
  if (d.getSnapshot !== b2 || f2 || N$3 !== null && N$3.memoizedState.tag & 1) {
    c2.flags |= 2048;
    ii(9, ji.bind(null, c2, d, e, b2), void 0, null);
    if (P === null)
      throw Error(p$6(349));
    (Oh & 30) !== 0 || ki(c2, b2, e);
  }
  return e;
}
function ki(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = L$1.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L$1.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, c2 === null ? b2.stores = [a2] : c2.push(a2));
}
function ji(a2, b2, c2, d) {
  b2.value = c2;
  b2.getSnapshot = d;
  li(b2) && Lg(a2, 1, -1);
}
function hi(a2, b2, c2) {
  return c2(function() {
    li(b2) && Lg(a2, 1, -1);
  });
}
function li(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !Ge$1(a2, c2);
  } catch (d) {
    return true;
  }
}
function mi(a2) {
  var b2 = $h();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ni.bind(null, L$1, a2);
  return [b2.memoizedState, a2];
}
function ii(a2, b2, c2, d) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d, next: null };
  b2 = L$1.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d = c2.next, c2.next = a2, a2.next = d, b2.lastEffect = a2));
  return a2;
}
function oi() {
  return ai().memoizedState;
}
function pi(a2, b2, c2, d) {
  var e = $h();
  L$1.flags |= a2;
  e.memoizedState = ii(1 | b2, c2, void 0, d === void 0 ? null : d);
}
function qi(a2, b2, c2, d) {
  var e = ai();
  d = d === void 0 ? null : d;
  var f2 = void 0;
  if (M$1 !== null) {
    var g2 = M$1.memoizedState;
    f2 = g2.destroy;
    if (d !== null && Th(d, g2.deps)) {
      e.memoizedState = ii(b2, c2, f2, d);
      return;
    }
  }
  L$1.flags |= a2;
  e.memoizedState = ii(1 | b2, c2, f2, d);
}
function ri(a2, b2) {
  return pi(8390656, 8, a2, b2);
}
function gi(a2, b2) {
  return qi(2048, 8, a2, b2);
}
function si(a2, b2) {
  return qi(4, 2, a2, b2);
}
function ti(a2, b2) {
  return qi(4, 4, a2, b2);
}
function ui(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function vi(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return qi(4, 4, ui.bind(null, b2, a2), c2);
}
function wi() {
}
function xi(a2, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d = c2.memoizedState;
  if (d !== null && b2 !== null && Th(b2, d[1]))
    return d[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function yi(a2, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d = c2.memoizedState;
  if (d !== null && b2 !== null && Th(b2, d[1]))
    return d[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function zi(a2, b2, c2) {
  if ((Oh & 21) === 0)
    return a2.baseState && (a2.baseState = false, tg = true), a2.memoizedState = c2;
  Ge$1(c2, b2) || (c2 = xc(), L$1.lanes |= c2, Fg |= c2, a2.baseState = true);
  return b2;
}
function Ai(a2, b2) {
  var c2 = C$4;
  C$4 = c2 !== 0 && 4 > c2 ? c2 : 4;
  a2(true);
  var d = Nh.transition;
  Nh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$4 = c2, Nh.transition = d;
  }
}
function Bi() {
  return ai().memoizedState;
}
function Ci(a2, b2, c2) {
  var d = Kg(a2);
  c2 = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
  Di(a2) ? Ei(b2, c2) : (Fi(a2, b2, c2), c2 = Jg(), a2 = Lg(a2, d, c2), a2 !== null && Gi(a2, b2, d));
}
function ni(a2, b2, c2) {
  var d = Kg(a2), e = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Di(a2))
    Ei(b2, e);
  else {
    Fi(a2, b2, e);
    var f2 = a2.alternate;
    if (a2.lanes === 0 && (f2 === null || f2.lanes === 0) && (f2 = b2.lastRenderedReducer, f2 !== null))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e.hasEagerState = true;
        e.eagerState = h2;
        if (Ge$1(h2, g2))
          return;
      } catch (k2) {
      } finally {
      }
    c2 = Jg();
    a2 = Lg(a2, d, c2);
    a2 !== null && Gi(a2, b2, d);
  }
}
function Di(a2) {
  var b2 = a2.alternate;
  return a2 === L$1 || b2 !== null && b2 === L$1;
}
function Ei(a2, b2) {
  Qh = Ph = true;
  var c2 = a2.pending;
  c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Fi(a2, b2, c2) {
  Bg(a2) ? (a2 = b2.interleaved, a2 === null ? (c2.next = c2, vg === null ? vg = [b2] : vg.push(b2)) : (c2.next = a2.next, a2.next = c2), b2.interleaved = c2) : (a2 = b2.pending, a2 === null ? c2.next = c2 : (c2.next = a2.next, a2.next = c2), b2.pending = c2);
}
function Gi(a2, b2, c2) {
  if ((c2 & 4194240) !== 0) {
    var d = b2.lanes;
    d &= a2.pendingLanes;
    c2 |= d;
    b2.lanes = c2;
    Bc(a2, c2);
  }
}
var Yh = { readContext: ug, useCallback: O$1, useContext: O$1, useEffect: O$1, useImperativeHandle: O$1, useInsertionEffect: O$1, useLayoutEffect: O$1, useMemo: O$1, useReducer: O$1, useRef: O$1, useState: O$1, useDebugValue: O$1, useDeferredValue: O$1, useTransition: O$1, useMutableSource: O$1, useSyncExternalStore: O$1, useId: O$1, unstable_isNewReconciler: false }, Vh = { readContext: ug, useCallback: function(a2, b2) {
  $h().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: ug, useEffect: ri, useImperativeHandle: function(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return pi(4194308, 4, ui.bind(null, b2, a2), c2);
}, useLayoutEffect: function(a2, b2) {
  return pi(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return pi(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = $h();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d = $h();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d.memoizedState = d.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d.queue = a2;
  a2 = a2.dispatch = Ci.bind(null, L$1, a2);
  return [d.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = $h();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: mi, useDebugValue: wi, useDeferredValue: function(a2) {
  return $h().memoizedState = a2;
}, useTransition: function() {
  var a2 = mi(false), b2 = a2[0];
  a2 = Ai.bind(null, a2[1]);
  $h().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d = L$1, e = $h();
  if (I$1) {
    if (c2 === void 0)
      throw Error(p$6(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (P === null)
      throw Error(p$6(349));
    (Oh & 30) !== 0 || ki(d, b2, c2);
  }
  e.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e.queue = f2;
  ri(hi.bind(null, d, f2, a2), [a2]);
  d.flags |= 2048;
  ii(9, ji.bind(null, d, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = $h(), b2 = P.identifierPrefix;
  if (I$1) {
    var c2 = Zg;
    var d = Yg;
    c2 = (d & ~(1 << 32 - nc(d) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Rh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Sh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Wh = {
  readContext: ug,
  useCallback: xi,
  useContext: ug,
  useEffect: gi,
  useImperativeHandle: vi,
  useInsertionEffect: si,
  useLayoutEffect: ti,
  useMemo: yi,
  useReducer: ci,
  useRef: oi,
  useState: function() {
    return ci(bi);
  },
  useDebugValue: wi,
  useDeferredValue: function(a2) {
    var b2 = ai();
    return zi(b2, M$1.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = ci(bi)[0], b2 = ai().memoizedState;
    return [a2, b2];
  },
  useMutableSource: ei,
  useSyncExternalStore: fi,
  useId: Bi,
  unstable_isNewReconciler: false
}, Xh = { readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function() {
  return di(bi);
}, useDebugValue: wi, useDeferredValue: function(a2) {
  var b2 = ai();
  return M$1 === null ? b2.memoizedState = a2 : zi(b2, M$1.memoizedState, a2);
}, useTransition: function() {
  var a2 = di(bi)[0], b2 = ai().memoizedState;
  return [a2, b2];
}, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false };
function Hi(a2, b2) {
  try {
    var c2 = "", d = b2;
    do
      c2 += Oa(d), d = d.return;
    while (d);
    var e = c2;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e };
}
function Ii(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ji = typeof WeakMap === "function" ? WeakMap : Map;
function Ki(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d = b2.value;
  c2.callback = function() {
    Li || (Li = true, Mi = d);
    Ii(a2, b2);
  };
  return c2;
}
function Ni(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d = a2.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b2.value;
    c2.payload = function() {
      return d(e);
    };
    c2.callback = function() {
      Ii(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    Ii(a2, b2);
    typeof d !== "function" && (Oi === null ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
function Pi(a2, b2, c2) {
  var d = a2.pingCache;
  if (d === null) {
    d = a2.pingCache = new Ji();
    var e = /* @__PURE__ */ new Set();
    d.set(b2, e);
  } else
    e = d.get(b2), e === void 0 && (e = /* @__PURE__ */ new Set(), d.set(b2, e));
  e.has(c2) || (e.add(c2), a2 = Qi.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ri(a2) {
  do {
    var b2;
    if (b2 = a2.tag === 13)
      b2 = a2.memoizedState, b2 = b2 !== null ? b2.dehydrated !== null ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (a2 !== null);
  return null;
}
function Si(a2, b2, c2, d, e) {
  if ((a2.mode & 1) === 0)
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, c2.tag === 1 && (c2.alternate === null ? c2.tag = 17 : (b2 = zg(-1, 1), b2.tag = 2, Ag(c2, b2))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e;
  return a2;
}
var Ti, Ui, Vi, Wi;
Ti = function(a2, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a2.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ui = function() {
};
Vi = function(a2, b2, c2, d) {
  var e = a2.memoizedProps;
  if (e !== d) {
    a2 = b2.stateNode;
    Eh(Bh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e = Xa(a2, e);
        d = Xa(a2, d);
        f2 = [];
        break;
      case "select":
        e = A$1({}, e, { value: void 0 });
        d = A$1({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = fb(a2, e);
        d = fb(a2, d);
        f2 = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a2.onclick = Af);
    }
    tb(c2, d);
    var g2;
    c2 = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
        if (l2 === "style") {
          var h2 = e[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h2 = e != null ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && D("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Wi = function(a2, b2, c2, d) {
  c2 !== d && (b2.flags |= 4);
};
function Xi(a2, b2) {
  if (!I$1)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d = null; c2 !== null; )
          c2.alternate !== null && (d = c2), c2 = c2.sibling;
        d === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d.sibling = null;
    }
}
function Q$1(a2) {
  var b2 = a2.alternate !== null && a2.alternate.child === a2.child, c2 = 0, d = 0;
  if (b2)
    for (var e = a2.child; e !== null; )
      c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a2, e = e.sibling;
  else
    for (e = a2.child; e !== null; )
      c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a2, e = e.sibling;
  a2.subtreeFlags |= d;
  a2.childLanes = c2;
  return b2;
}
function Yi(a2, b2, c2) {
  var d = b2.pendingProps;
  ch(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Q$1(b2), null;
    case 1:
      return Yf(b2.type) && Zf(), Q$1(b2), null;
    case 3:
      d = b2.stateNode;
      Gh();
      E$2(Vf);
      E$2(H$1);
      Lh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a2 === null || a2.child === null)
        mh(b2) ? b2.flags |= 4 : a2 === null || a2.memoizedState.isDehydrated && (b2.flags & 256) === 0 || (b2.flags |= 1024, fh !== null && (Zi(fh), fh = null));
      Ui(a2, b2);
      Q$1(b2);
      return null;
    case 5:
      Ih(b2);
      var e = Eh(Dh.current);
      c2 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Vi(a2, b2, c2, d, e), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d) {
          if (b2.stateNode === null)
            throw Error(p$6(166));
          Q$1(b2);
          return null;
        }
        a2 = Eh(Bh.current);
        if (mh(b2)) {
          d = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d[Nf] = b2;
          d[Of] = f2;
          a2 = (b2.mode & 1) !== 0;
          switch (c2) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < kf.length; e++)
                D(kf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D("error", d);
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Ya(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              gb(d, f2), D("invalid", d);
          }
          tb(c2, f2);
          e = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              g2 === "children" ? typeof h2 === "string" ? d.textContent !== h2 && (f2.suppressHydrationWarning !== true && zf(d.textContent, h2, a2), e = ["children", h2]) : typeof h2 === "number" && d.textContent !== "" + h2 && (f2.suppressHydrationWarning !== true && zf(d.textContent, h2, a2), e = ["children", "" + h2]) : ea.hasOwnProperty(g2) && h2 != null && g2 === "onScroll" && D("scroll", d);
            }
          switch (c2) {
            case "input":
              Ua(d);
              cb(d, f2, true);
              break;
            case "textarea":
              Ua(d);
              ib(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d.onclick = Af);
          }
          d = e;
          b2.updateQueue = d;
          d !== null && (b2.flags |= 4);
        } else {
          g2 = e.nodeType === 9 ? e : e.ownerDocument;
          a2 === "http://www.w3.org/1999/xhtml" && (a2 = jb(c2));
          a2 === "http://www.w3.org/1999/xhtml" ? c2 === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d.is === "string" ? a2 = g2.createElement(c2, { is: d.is }) : (a2 = g2.createElement(c2), c2 === "select" && (g2 = a2, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Nf] = b2;
          a2[Of] = d;
          Ti(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = ub(c2, d);
            switch (c2) {
              case "dialog":
                D("cancel", a2);
                D("close", a2);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a2);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < kf.length; e++)
                  D(kf[e], a2);
                e = d;
                break;
              case "source":
                D("error", a2);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D("error", a2);
                D("load", a2);
                e = d;
                break;
              case "details":
                D("toggle", a2);
                e = d;
                break;
              case "input":
                Ya(a2, d);
                e = Xa(a2, d);
                D("invalid", a2);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d.multiple };
                e = A$1({}, d, { value: void 0 });
                D("invalid", a2);
                break;
              case "textarea":
                gb(a2, d);
                e = fb(a2, d);
                D("invalid", a2);
                break;
              default:
                e = d;
            }
            tb(c2, e);
            h2 = e;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                f2 === "style" ? rb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && mb(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && nb(a2, k2) : typeof k2 === "number" && nb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ea.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && D("scroll", a2) : k2 != null && sa(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Ua(a2);
                cb(a2, d, false);
                break;
              case "textarea":
                Ua(a2);
                ib(a2);
                break;
              case "option":
                d.value != null && a2.setAttribute("value", "" + Ra(d.value));
                break;
              case "select":
                a2.multiple = !!d.multiple;
                f2 = d.value;
                f2 != null ? eb(a2, !!d.multiple, f2, false) : d.defaultValue != null && eb(a2, !!d.multiple, d.defaultValue, true);
                break;
              default:
                typeof e.onClick === "function" && (a2.onclick = Af);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 512, b2.flags |= 2097152);
      }
      Q$1(b2);
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Wi(a2, b2, a2.memoizedProps, d);
      else {
        if (typeof d !== "string" && b2.stateNode === null)
          throw Error(p$6(166));
        c2 = Eh(Dh.current);
        Eh(Bh.current);
        if (mh(b2)) {
          d = b2.stateNode;
          c2 = b2.memoizedProps;
          d[Nf] = b2;
          if (f2 = d.nodeValue !== c2) {
            if (a2 = dh, a2 !== null)
              switch (a2.tag) {
                case 3:
                  zf(d.nodeValue, c2, (a2.mode & 1) !== 0);
                  break;
                case 5:
                  a2.memoizedProps.suppressHydrationWarning !== true && zf(d.nodeValue, c2, (a2.mode & 1) !== 0);
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d), d[Nf] = b2, b2.stateNode = d;
      }
      Q$1(b2);
      return null;
    case 13:
      E$2(K);
      d = b2.memoizedState;
      if (I$1 && eh !== null && (b2.mode & 1) !== 0 && (b2.flags & 128) === 0) {
        for (d = eh; d; )
          d = Kf(d.nextSibling);
        nh();
        b2.flags |= 98560;
        return b2;
      }
      if (d !== null && d.dehydrated !== null) {
        d = mh(b2);
        if (a2 === null) {
          if (!d)
            throw Error(p$6(318));
          d = b2.memoizedState;
          d = d !== null ? d.dehydrated : null;
          if (!d)
            throw Error(p$6(317));
          d[Nf] = b2;
        } else
          nh(), (b2.flags & 128) === 0 && (b2.memoizedState = null), b2.flags |= 4;
        Q$1(b2);
        return null;
      }
      fh !== null && (Zi(fh), fh = null);
      if ((b2.flags & 128) !== 0)
        return b2.lanes = c2, b2;
      d = d !== null;
      c2 = false;
      a2 === null ? mh(b2) : c2 = a2.memoizedState !== null;
      d !== c2 && d && (b2.child.flags |= 8192, (b2.mode & 1) !== 0 && (a2 === null || (K.current & 1) !== 0 ? R$1 === 0 && (R$1 = 3) : $i()));
      b2.updateQueue !== null && (b2.flags |= 4);
      Q$1(b2);
      return null;
    case 4:
      return Gh(), Ui(a2, b2), a2 === null && rf(b2.stateNode.containerInfo), Q$1(b2), null;
    case 10:
      return qg(b2.type._context), Q$1(b2), null;
    case 17:
      return Yf(b2.type) && Zf(), Q$1(b2), null;
    case 19:
      E$2(K);
      f2 = b2.memoizedState;
      if (f2 === null)
        return Q$1(b2), null;
      d = (b2.flags & 128) !== 0;
      g2 = f2.rendering;
      if (g2 === null)
        if (d)
          Xi(f2, false);
        else {
          if (R$1 !== 0 || a2 !== null && (a2.flags & 128) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g2 = Jh(a2);
              if (g2 !== null) {
                b2.flags |= 128;
                Xi(f2, false);
                d = g2.updateQueue;
                d !== null && (b2.updateQueue = d, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a2 = d, f2.flags &= 14680066, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                G(K, K.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          f2.tail !== null && B() > aj && (b2.flags |= 128, d = true, Xi(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d)
          if (a2 = Jh(g2), a2 !== null) {
            if (b2.flags |= 128, d = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Xi(f2, true), f2.tail === null && f2.tailMode === "hidden" && !g2.alternate && !I$1)
              return Q$1(b2), null;
          } else
            2 * B() - f2.renderingStartTime > aj && c2 !== 1073741824 && (b2.flags |= 128, d = true, Xi(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (f2.tail !== null)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = K.current, G(K, d ? c2 & 1 | 2 : c2 & 1), b2;
      Q$1(b2);
      return null;
    case 22:
    case 23:
      return bj(), d = b2.memoizedState !== null, a2 !== null && a2.memoizedState !== null !== d && (b2.flags |= 8192), d && (b2.mode & 1) !== 0 ? (cj & 1073741824) !== 0 && (Q$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : Q$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$6(156, b2.tag));
}
var dj = ta.ReactCurrentOwner, tg = false;
function ej(a2, b2, c2, d) {
  b2.child = a2 === null ? zh(b2, null, c2, d) : yh(b2, a2.child, c2, d);
}
function fj(a2, b2, c2, d, e) {
  c2 = c2.render;
  var f2 = b2.ref;
  sg(b2, e);
  d = Uh(a2, b2, c2, d, f2, e);
  c2 = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e, gj(a2, b2, e);
  I$1 && c2 && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, d, e);
  return b2.child;
}
function hj(a2, b2, c2, d, e) {
  if (a2 === null) {
    var f2 = c2.type;
    if (typeof f2 === "function" && !ij(f2) && f2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = f2, jj(a2, b2, f2, d, e);
    a2 = vh(c2.type, null, d, b2, b2.mode, e);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if ((a2.lanes & e) === 0) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = c2 !== null ? c2 : He;
    if (c2(g2, d) && a2.ref === b2.ref)
      return gj(a2, b2, e);
  }
  b2.flags |= 1;
  a2 = th(f2, d);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function jj(a2, b2, c2, d, e) {
  if (a2 !== null) {
    var f2 = a2.memoizedProps;
    if (He(f2, d) && a2.ref === b2.ref)
      if (tg = false, b2.pendingProps = d = f2, (a2.lanes & e) !== 0)
        (a2.flags & 131072) !== 0 && (tg = true);
      else
        return b2.lanes = a2.lanes, gj(a2, b2, e);
  }
  return kj(a2, b2, c2, d, e);
}
function lj(a2, b2, c2) {
  var d = b2.pendingProps, e = d.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d.mode === "hidden")
    if ((b2.mode & 1) === 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(mj, cj), cj |= c2;
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d = f2 !== null ? f2.baseLanes : c2, G(mj, cj), cj |= d;
    else
      return a2 = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G(mj, cj), cj |= a2, null;
  else
    f2 !== null ? (d = f2.baseLanes | c2, b2.memoizedState = null) : d = c2, G(mj, cj), cj |= d;
  ej(a2, b2, e, c2);
  return b2.child;
}
function nj(a2, b2) {
  var c2 = b2.ref;
  if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function kj(a2, b2, c2, d, e) {
  var f2 = Yf(c2) ? Wf : H$1.current;
  f2 = Xf(b2, f2);
  sg(b2, e);
  c2 = Uh(a2, b2, c2, d, f2, e);
  d = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e, gj(a2, b2, e);
  I$1 && d && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, c2, e);
  return b2.child;
}
function oj(a2, b2, c2, d, e) {
  if (Yf(c2)) {
    var f2 = true;
    bg(b2);
  } else
    f2 = false;
  sg(b2, e);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Og(b2, c2, d), Qg(b2, c2, d, e), d = true;
  else if (a2 === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = ug(l2) : (l2 = Yf(c2) ? Wf : H$1.current, l2 = Xf(b2, l2));
    var n2 = c2.getDerivedStateFromProps, u2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    u2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d || k2 !== l2) && Pg(b2, g2, d, l2);
    wg = false;
    var q2 = b2.memoizedState;
    g2.state = q2;
    Eg(b2, d, g2, e);
    k2 = b2.memoizedState;
    h2 !== d || q2 !== k2 || Vf.current || wg ? (typeof n2 === "function" && (Ig(b2, c2, n2, d), k2 = b2.memoizedState), (h2 = wg || Ng(b2, c2, h2, d, q2, k2, l2)) ? (u2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4194308)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k2), g2.props = d, g2.state = k2, g2.context = l2, d = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), d = false);
  } else {
    g2 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : kg(b2.type, h2);
    g2.props = l2;
    u2 = b2.pendingProps;
    q2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = ug(k2) : (k2 = Yf(c2) ? Wf : H$1.current, k2 = Xf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (n2 = typeof y2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== u2 || q2 !== k2) && Pg(b2, g2, d, k2);
    wg = false;
    q2 = b2.memoizedState;
    g2.state = q2;
    Eg(b2, d, g2, e);
    var m2 = b2.memoizedState;
    h2 !== u2 || q2 !== m2 || Vf.current || wg ? (typeof y2 === "function" && (Ig(b2, c2, y2, d), m2 = b2.memoizedState), (l2 = wg || Ng(b2, c2, l2, d, q2, m2, k2) || false) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d, m2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d, m2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 1024)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = m2), g2.props = d, g2.state = m2, g2.context = k2, d = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 1024), d = false);
  }
  return pj(a2, b2, c2, d, f2, e);
}
function pj(a2, b2, c2, d, e, f2) {
  nj(a2, b2);
  var g2 = (b2.flags & 128) !== 0;
  if (!d && !g2)
    return e && cg(b2, c2, false), gj(a2, b2, f2);
  d = b2.stateNode;
  dj.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d.render();
  b2.flags |= 1;
  a2 !== null && g2 ? (b2.child = yh(b2, a2.child, null, f2), b2.child = yh(b2, null, h2, f2)) : ej(a2, b2, h2, f2);
  b2.memoizedState = d.state;
  e && cg(b2, c2, true);
  return b2.child;
}
function qj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? $f(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && $f(a2, b2.context, false);
  Fh(a2, b2.containerInfo);
}
function rj(a2, b2, c2, d, e) {
  nh();
  oh(e);
  b2.flags |= 256;
  ej(a2, b2, c2, d);
  return b2.child;
}
var sj = { dehydrated: null, treeContext: null, retryLane: 0 };
function tj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function uj(a2, b2) {
  return { baseLanes: a2.baseLanes | b2, cachePool: null, transitions: a2.transitions };
}
function vj(a2, b2, c2) {
  var d = b2.pendingProps, e = K.current, f2 = false, g2 = (b2.flags & 128) !== 0, h2;
  (h2 = g2) || (h2 = a2 !== null && a2.memoizedState === null ? false : (e & 2) !== 0);
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (a2 === null || a2.memoizedState !== null)
    e |= 1;
  G(K, e & 1);
  if (a2 === null) {
    kh(b2);
    a2 = b2.memoizedState;
    if (a2 !== null && (a2 = a2.dehydrated, a2 !== null))
      return (b2.mode & 1) === 0 ? b2.lanes = 1 : a2.data === "$!" ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    e = d.children;
    a2 = d.fallback;
    return f2 ? (d = b2.mode, f2 = b2.child, e = { mode: "hidden", children: e }, (d & 1) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = e) : f2 = wj(e, d, 0, null), a2 = xh(a2, d, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = tj(c2), b2.memoizedState = sj, a2) : xj(b2, e);
  }
  e = a2.memoizedState;
  if (e !== null) {
    h2 = e.dehydrated;
    if (h2 !== null) {
      if (g2) {
        if (b2.flags & 256)
          return b2.flags &= -257, yj(a2, b2, c2, Error(p$6(422)));
        if (b2.memoizedState !== null)
          return b2.child = a2.child, b2.flags |= 128, null;
        f2 = d.fallback;
        e = b2.mode;
        d = wj({ mode: "visible", children: d.children }, e, 0, null);
        f2 = xh(f2, e, c2, null);
        f2.flags |= 2;
        d.return = b2;
        f2.return = b2;
        d.sibling = f2;
        b2.child = d;
        (b2.mode & 1) !== 0 && yh(b2, a2.child, null, c2);
        b2.child.memoizedState = tj(c2);
        b2.memoizedState = sj;
        return f2;
      }
      if ((b2.mode & 1) === 0)
        b2 = yj(a2, b2, c2, null);
      else if (h2.data === "$!")
        b2 = yj(a2, b2, c2, Error(p$6(419)));
      else if (d = (c2 & a2.childLanes) !== 0, tg || d) {
        d = P;
        if (d !== null) {
          switch (c2 & -c2) {
            case 4:
              f2 = 2;
              break;
            case 16:
              f2 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              f2 = 32;
              break;
            case 536870912:
              f2 = 268435456;
              break;
            default:
              f2 = 0;
          }
          d = (f2 & (d.suspendedLanes | c2)) !== 0 ? 0 : f2;
          d !== 0 && d !== e.retryLane && (e.retryLane = d, Lg(a2, d, -1));
        }
        $i();
        b2 = yj(a2, b2, c2, Error(p$6(421)));
      } else
        h2.data === "$?" ? (b2.flags |= 128, b2.child = a2.child, b2 = zj.bind(null, a2), h2._reactRetry = b2, b2 = null) : (c2 = e.treeContext, eh = Kf(h2.nextSibling), dh = b2, I$1 = true, fh = null, c2 !== null && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c2.id, Zg = c2.overflow, Xg = b2), b2 = xj(b2, b2.pendingProps.children), b2.flags |= 4096);
      return b2;
    }
    if (f2)
      return d = Aj(a2, b2, d.children, d.fallback, c2), f2 = b2.child, e = a2.child.memoizedState, f2.memoizedState = e === null ? tj(c2) : uj(e, c2), f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = sj, d;
    c2 = Bj(a2, b2, d.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d = Aj(a2, b2, d.children, d.fallback, c2), f2 = b2.child, e = a2.child.memoizedState, f2.memoizedState = e === null ? tj(c2) : uj(e, c2), f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = sj, d;
  c2 = Bj(a2, b2, d.children, c2);
  b2.memoizedState = null;
  return c2;
}
function xj(a2, b2) {
  b2 = wj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function Bj(a2, b2, c2, d) {
  var e = a2.child;
  a2 = e.sibling;
  c2 = th(e, { mode: "visible", children: c2 });
  (b2.mode & 1) === 0 && (c2.lanes = d);
  c2.return = b2;
  c2.sibling = null;
  a2 !== null && (d = b2.deletions, d === null ? (b2.deletions = [a2], b2.flags |= 16) : d.push(a2));
  return b2.child = c2;
}
function Aj(a2, b2, c2, d, e) {
  var f2 = b2.mode;
  a2 = a2.child;
  var g2 = a2.sibling, h2 = { mode: "hidden", children: c2 };
  (f2 & 1) === 0 && b2.child !== a2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, b2.deletions = null) : (c2 = th(a2, h2), c2.subtreeFlags = a2.subtreeFlags & 14680064);
  g2 !== null ? d = th(g2, d) : (d = xh(d, f2, e, null), d.flags |= 2);
  d.return = b2;
  c2.return = b2;
  c2.sibling = d;
  b2.child = c2;
  return d;
}
function yj(a2, b2, c2, d) {
  d !== null && oh(d);
  yh(b2, a2.child, null, c2);
  a2 = xj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function Cj(a2, b2, c2) {
  a2.lanes |= b2;
  var d = a2.alternate;
  d !== null && (d.lanes |= b2);
  rg(a2.return, b2, c2);
}
function Dj(a2, b2, c2, d, e) {
  var f2 = a2.memoizedState;
  f2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c2, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c2, f2.tailMode = e);
}
function Ej(a2, b2, c2) {
  var d = b2.pendingProps, e = d.revealOrder, f2 = d.tail;
  ej(a2, b2, d.children, c2);
  d = K.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b2.flags |= 128;
  else {
    if (a2 !== null && (a2.flags & 128) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && Cj(a2, c2, b2);
          else if (a2.tag === 19)
            Cj(a2, c2, b2);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d &= 1;
  }
  G(K, d);
  if ((b2.mode & 1) === 0)
    b2.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c2 = b2.child;
        for (e = null; c2 !== null; )
          a2 = c2.alternate, a2 !== null && Jh(a2) === null && (e = c2), c2 = c2.sibling;
        c2 = e;
        c2 === null ? (e = b2.child, b2.child = null) : (e = c2.sibling, c2.sibling = null);
        Dj(b2, false, e, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e = b2.child;
        for (b2.child = null; e !== null; ) {
          a2 = e.alternate;
          if (a2 !== null && Jh(a2) === null) {
            b2.child = e;
            break;
          }
          a2 = e.sibling;
          e.sibling = c2;
          c2 = e;
          e = a2;
        }
        Dj(b2, true, c2, null, f2);
        break;
      case "together":
        Dj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function gj(a2, b2, c2) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Fg |= b2.lanes;
  if ((c2 & b2.childLanes) === 0)
    return null;
  if (a2 !== null && b2.child !== a2.child)
    throw Error(p$6(153));
  if (b2.child !== null) {
    a2 = b2.child;
    c2 = th(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; a2.sibling !== null; )
      a2 = a2.sibling, c2 = c2.sibling = th(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function Fj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      qj(b2);
      nh();
      break;
    case 5:
      Hh(b2);
      break;
    case 1:
      Yf(b2.type) && bg(b2);
      break;
    case 4:
      Fh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d = b2.type._context, e = b2.memoizedProps.value;
      G(lg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b2.memoizedState;
      if (d !== null) {
        if (d.dehydrated !== null)
          return G(K, K.current & 1), b2.flags |= 128, null;
        if ((c2 & b2.child.childLanes) !== 0)
          return vj(a2, b2, c2);
        G(K, K.current & 1);
        a2 = gj(a2, b2, c2);
        return a2 !== null ? a2.sibling : null;
      }
      G(K, K.current & 1);
      break;
    case 19:
      d = (c2 & b2.childLanes) !== 0;
      if ((a2.flags & 128) !== 0) {
        if (d)
          return Ej(a2, b2, c2);
        b2.flags |= 128;
      }
      e = b2.memoizedState;
      e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(K, K.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, lj(a2, b2, c2);
  }
  return gj(a2, b2, c2);
}
function Gj(a2, b2) {
  ch(b2);
  switch (b2.tag) {
    case 1:
      return Yf(b2.type) && Zf(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Gh(), E$2(Vf), E$2(H$1), Lh(), a2 = b2.flags, (a2 & 65536) !== 0 && (a2 & 128) === 0 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Ih(b2), null;
    case 13:
      E$2(K);
      a2 = b2.memoizedState;
      if (a2 !== null && a2.dehydrated !== null) {
        if (b2.alternate === null)
          throw Error(p$6(340));
        nh();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$2(K), null;
    case 4:
      return Gh(), null;
    case 10:
      return qg(b2.type._context), null;
    case 22:
    case 23:
      return bj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hj = false, S = false, Ij = typeof WeakSet === "function" ? WeakSet : Set, T$3 = null;
function Jj(a2, b2) {
  var c2 = a2.ref;
  if (c2 !== null)
    if (typeof c2 === "function")
      try {
        c2(null);
      } catch (d) {
        U(a2, b2, d);
      }
    else
      c2.current = null;
}
function Kj(a2, b2, c2) {
  try {
    c2();
  } catch (d) {
    U(a2, b2, d);
  }
}
var Lj = false;
function Mj(a2, b2) {
  Bf = cd;
  a2 = Le$1();
  if (Me(a2)) {
    if ("selectionStart" in a2)
      var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d = c2.getSelection && c2.getSelection();
        if (d && d.rangeCount !== 0) {
          c2 = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (Z2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, n2 = 0, u2 = a2, q2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                u2 !== c2 || e !== 0 && u2.nodeType !== 3 || (h2 = g2 + e);
                u2 !== f2 || d !== 0 && u2.nodeType !== 3 || (k2 = g2 + d);
                u2.nodeType === 3 && (g2 += u2.nodeValue.length);
                if ((y2 = u2.firstChild) === null)
                  break;
                q2 = u2;
                u2 = y2;
              }
              for (; ; ) {
                if (u2 === a2)
                  break b;
                q2 === c2 && ++l2 === e && (h2 = g2);
                q2 === f2 && ++n2 === d && (k2 = g2);
                if ((y2 = u2.nextSibling) !== null)
                  break;
                u2 = q2;
                q2 = u2.parentNode;
              }
              u2 = y2;
            }
          c2 = h2 === -1 || k2 === -1 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Cf = { focusedElem: a2, selectionRange: c2 };
  cd = false;
  for (T$3 = b2; T$3 !== null; )
    if (b2 = T$3, a2 = b2.child, (b2.subtreeFlags & 1028) !== 0 && a2 !== null)
      a2.return = b2, T$3 = a2;
    else
      for (; T$3 !== null; ) {
        b2 = T$3;
        try {
          var m2 = b2.alternate;
          if ((b2.flags & 1024) !== 0)
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m2 !== null) {
                  var w2 = m2.memoizedProps, J2 = m2.memoizedState, v2 = b2.stateNode, x2 = v2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? w2 : kg(b2.type, w2), J2);
                  v2.__reactInternalSnapshotBeforeUpdate = x2;
                }
                break;
              case 3:
                var r2 = b2.stateNode.containerInfo;
                if (r2.nodeType === 1)
                  r2.textContent = "";
                else if (r2.nodeType === 9) {
                  var F2 = r2.body;
                  F2 != null && (F2.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$6(163));
            }
        } catch (Z2) {
          U(b2, b2.return, Z2);
        }
        a2 = b2.sibling;
        if (a2 !== null) {
          a2.return = b2.return;
          T$3 = a2;
          break;
        }
        T$3 = b2.return;
      }
  m2 = Lj;
  Lj = false;
  return m2;
}
function Nj(a2, b2, c2) {
  var d = b2.updateQueue;
  d = d !== null ? d.lastEffect : null;
  if (d !== null) {
    var e = d = d.next;
    do {
      if ((e.tag & a2) === a2) {
        var f2 = e.destroy;
        e.destroy = void 0;
        f2 !== void 0 && Kj(b2, c2, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Oj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = b2 !== null ? b2.lastEffect : null;
  if (b2 !== null) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d = c2.create;
        c2.destroy = d();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Pj(a2) {
  var b2 = a2.ref;
  if (b2 !== null) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    typeof b2 === "function" ? b2(a2) : b2.current = a2;
  }
}
function Qj(a2) {
  var b2 = a2.alternate;
  b2 !== null && (a2.alternate = null, Qj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  a2.tag === 5 && (b2 = a2.stateNode, b2 !== null && (delete b2[Nf], delete b2[Of], delete b2[nf], delete b2[Pf], delete b2[Qf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Rj(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function Sj(a2) {
  a:
    for (; ; ) {
      for (; a2.sibling === null; ) {
        if (a2.return === null || Rj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 18; ) {
        if (a2.flags & 2)
          continue a;
        if (a2.child === null || a2.tag === 4)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Tj(a2, b2, c2) {
  var d = a2.tag;
  if (d === 5 || d === 6)
    a2 = a2.stateNode, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = Af));
  else if (d !== 4 && (a2 = a2.child, a2 !== null))
    for (Tj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Tj(a2, b2, c2), a2 = a2.sibling;
}
function Uj(a2, b2, c2) {
  var d = a2.tag;
  if (d === 5 || d === 6)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (d !== 4 && (a2 = a2.child, a2 !== null))
    for (Uj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Uj(a2, b2, c2), a2 = a2.sibling;
}
var V = null, Vj = false;
function Wj(a2, b2, c2) {
  for (c2 = c2.child; c2 !== null; )
    Xj(a2, b2, c2), c2 = c2.sibling;
}
function Xj(a2, b2, c2) {
  if (kc && typeof kc.onCommitFiberUnmount === "function")
    try {
      kc.onCommitFiberUnmount(jc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      S || Jj(c2, b2);
    case 6:
      var d = V, e = Vj;
      V = null;
      Wj(a2, b2, c2);
      V = d;
      Vj = e;
      V !== null && (Vj ? (a2 = V, c2 = c2.stateNode, a2.nodeType === 8 ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : V.removeChild(c2.stateNode));
      break;
    case 18:
      V !== null && (Vj ? (a2 = V, c2 = c2.stateNode, a2.nodeType === 8 ? Jf(a2.parentNode, c2) : a2.nodeType === 1 && Jf(a2, c2), ad(a2)) : Jf(V, c2.stateNode));
      break;
    case 4:
      d = V;
      e = Vj;
      V = c2.stateNode.containerInfo;
      Vj = true;
      Wj(a2, b2, c2);
      V = d;
      Vj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!S && (d = c2.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
        e = d = d.next;
        do {
          var f2 = e, g2 = f2.destroy;
          f2 = f2.tag;
          g2 !== void 0 && ((f2 & 2) !== 0 ? Kj(c2, b2, g2) : (f2 & 4) !== 0 && Kj(c2, b2, g2));
          e = e.next;
        } while (e !== d);
      }
      Wj(a2, b2, c2);
      break;
    case 1:
      if (!S && (Jj(c2, b2), d = c2.stateNode, typeof d.componentWillUnmount === "function"))
        try {
          d.props = c2.memoizedProps, d.state = c2.memoizedState, d.componentWillUnmount();
        } catch (h2) {
          U(c2, b2, h2);
        }
      Wj(a2, b2, c2);
      break;
    case 21:
      Wj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (S = (d = S) || c2.memoizedState !== null, Wj(a2, b2, c2), S = d) : Wj(a2, b2, c2);
      break;
    default:
      Wj(a2, b2, c2);
  }
}
function Yj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    c2 === null && (c2 = a2.stateNode = new Ij());
    b2.forEach(function(b3) {
      var d = Zj.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d, d));
    });
  }
}
function ak(a2, b2) {
  var c2 = b2.deletions;
  if (c2 !== null)
    for (var d = 0; d < c2.length; d++) {
      var e = c2[d];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a:
          for (; h2 !== null; ) {
            switch (h2.tag) {
              case 5:
                V = h2.stateNode;
                Vj = false;
                break a;
              case 3:
                V = h2.stateNode.containerInfo;
                Vj = true;
                break a;
              case 4:
                V = h2.stateNode.containerInfo;
                Vj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (V === null)
          throw Error(p$6(160));
        Xj(f2, g2, e);
        V = null;
        Vj = false;
        var k2 = e.alternate;
        k2 !== null && (k2.return = null);
        e.return = null;
      } catch (l2) {
        U(e, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; b2 !== null; )
      bk(b2, a2), b2 = b2.sibling;
}
function bk(a2, b2) {
  var c2 = a2.alternate, d = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ak(b2, a2);
      ck(a2);
      if (d & 4) {
        try {
          Nj(3, a2, a2.return), Oj(3, a2);
        } catch (m2) {
          U(a2, a2.return, m2);
        }
        try {
          Nj(5, a2, a2.return);
        } catch (m2) {
          U(a2, a2.return, m2);
        }
      }
      break;
    case 1:
      ak(b2, a2);
      ck(a2);
      d & 512 && c2 !== null && Jj(c2, c2.return);
      break;
    case 5:
      ak(b2, a2);
      ck(a2);
      d & 512 && c2 !== null && Jj(c2, c2.return);
      if (a2.flags & 32) {
        var e = a2.stateNode;
        try {
          nb(e, "");
        } catch (m2) {
          U(a2, a2.return, m2);
        }
      }
      if (d & 4 && (e = a2.stateNode, e != null)) {
        var f2 = a2.memoizedProps, g2 = c2 !== null ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (k2 !== null)
          try {
            h2 === "input" && f2.type === "radio" && f2.name != null && Za(e, f2);
            ub(h2, g2);
            var l2 = ub(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var n2 = k2[g2], u2 = k2[g2 + 1];
              n2 === "style" ? rb(e, u2) : n2 === "dangerouslySetInnerHTML" ? mb(e, u2) : n2 === "children" ? nb(e, u2) : sa(e, n2, u2, l2);
            }
            switch (h2) {
              case "input":
                $a(e, f2);
                break;
              case "textarea":
                hb(e, f2);
                break;
              case "select":
                var q2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                y2 != null ? eb(e, !!f2.multiple, y2, false) : q2 !== !!f2.multiple && (f2.defaultValue != null ? eb(e, !!f2.multiple, f2.defaultValue, true) : eb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Of] = f2;
          } catch (m2) {
            U(a2, a2.return, m2);
          }
      }
      break;
    case 6:
      ak(b2, a2);
      ck(a2);
      if (d & 4) {
        if (a2.stateNode === null)
          throw Error(p$6(162));
        l2 = a2.stateNode;
        n2 = a2.memoizedProps;
        try {
          l2.nodeValue = n2;
        } catch (m2) {
          U(a2, a2.return, m2);
        }
      }
      break;
    case 3:
      ak(b2, a2);
      ck(a2);
      if (d & 4 && c2 !== null && c2.memoizedState.isDehydrated)
        try {
          ad(b2.containerInfo);
        } catch (m2) {
          U(a2, a2.return, m2);
        }
      break;
    case 4:
      ak(b2, a2);
      ck(a2);
      break;
    case 13:
      ak(b2, a2);
      ck(a2);
      l2 = a2.child;
      l2.flags & 8192 && l2.memoizedState !== null && (l2.alternate === null || l2.alternate.memoizedState === null) && (dk = B());
      d & 4 && Yj(a2);
      break;
    case 22:
      l2 = c2 !== null && c2.memoizedState !== null;
      a2.mode & 1 ? (S = (n2 = S) || l2, ak(b2, a2), S = n2) : ak(b2, a2);
      ck(a2);
      if (d & 8192) {
        n2 = a2.memoizedState !== null;
        a:
          for (u2 = null, q2 = a2; ; ) {
            if (q2.tag === 5) {
              if (u2 === null) {
                u2 = q2;
                try {
                  e = q2.stateNode, n2 ? (f2 = e.style, typeof f2.setProperty === "function" ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = k2 !== void 0 && k2 !== null && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = qb("display", g2));
                } catch (m2) {
                  U(a2, a2.return, m2);
                }
              }
            } else if (q2.tag === 6) {
              if (u2 === null)
                try {
                  q2.stateNode.nodeValue = n2 ? "" : q2.memoizedProps;
                } catch (m2) {
                  U(a2, a2.return, m2);
                }
            } else if ((q2.tag !== 22 && q2.tag !== 23 || q2.memoizedState === null || q2 === a2) && q2.child !== null) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2)
              break a;
            for (; q2.sibling === null; ) {
              if (q2.return === null || q2.return === a2)
                break a;
              u2 === q2 && (u2 = null);
              q2 = q2.return;
            }
            u2 === q2 && (u2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        if (n2 && !l2 && (a2.mode & 1) !== 0)
          for (T$3 = a2, a2 = a2.child; a2 !== null; ) {
            for (l2 = T$3 = a2; T$3 !== null; ) {
              n2 = T$3;
              u2 = n2.child;
              switch (n2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nj(4, n2, n2.return);
                  break;
                case 1:
                  Jj(n2, n2.return);
                  f2 = n2.stateNode;
                  if (typeof f2.componentWillUnmount === "function") {
                    q2 = n2;
                    y2 = n2.return;
                    try {
                      e = q2, f2.props = e.memoizedProps, f2.state = e.memoizedState, f2.componentWillUnmount();
                    } catch (m2) {
                      U(q2, y2, m2);
                    }
                  }
                  break;
                case 5:
                  Jj(n2, n2.return);
                  break;
                case 22:
                  if (n2.memoizedState !== null) {
                    ek(l2);
                    continue;
                  }
              }
              u2 !== null ? (u2.return = n2, T$3 = u2) : ek(l2);
            }
            a2 = a2.sibling;
          }
      }
      break;
    case 19:
      ak(b2, a2);
      ck(a2);
      d & 4 && Yj(a2);
      break;
    case 21:
      break;
    default:
      ak(b2, a2), ck(a2);
  }
}
function ck(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; c2 !== null; ) {
          if (Rj(c2)) {
            var d = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$6(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (nb(e, ""), d.flags &= -33);
          var f2 = Sj(a2);
          Uj(a2, f2, e);
          break;
        case 3:
        case 4:
          var g2 = d.stateNode.containerInfo, h2 = Sj(a2);
          Tj(a2, h2, g2);
          break;
        default:
          throw Error(p$6(161));
      }
    } catch (k2) {
      U(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function fk(a2, b2, c2) {
  T$3 = a2;
  gk(a2);
}
function gk(a2, b2, c2) {
  for (var d = (a2.mode & 1) !== 0; T$3 !== null; ) {
    var e = T$3, f2 = e.child;
    if (e.tag === 22 && d) {
      var g2 = e.memoizedState !== null || Hj;
      if (!g2) {
        var h2 = e.alternate, k2 = h2 !== null && h2.memoizedState !== null || S;
        h2 = Hj;
        var l2 = S;
        Hj = g2;
        if ((S = k2) && !l2)
          for (T$3 = e; T$3 !== null; )
            g2 = T$3, k2 = g2.child, g2.tag === 22 && g2.memoizedState !== null ? hk(e) : k2 !== null ? (k2.return = g2, T$3 = k2) : hk(e);
        for (; f2 !== null; )
          T$3 = f2, gk(f2), f2 = f2.sibling;
        T$3 = e;
        Hj = h2;
        S = l2;
      }
      ik(a2);
    } else
      (e.subtreeFlags & 8772) !== 0 && f2 !== null ? (f2.return = e, T$3 = f2) : ik(a2);
  }
}
function ik(a2) {
  for (; T$3 !== null; ) {
    var b2 = T$3;
    if ((b2.flags & 8772) !== 0) {
      var c2 = b2.alternate;
      try {
        if ((b2.flags & 8772) !== 0)
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              S || Oj(5, b2);
              break;
            case 1:
              var d = b2.stateNode;
              if (b2.flags & 4 && !S)
                if (c2 === null)
                  d.componentDidMount();
                else {
                  var e = b2.elementType === b2.type ? c2.memoizedProps : kg(b2.type, c2.memoizedProps);
                  d.componentDidUpdate(e, c2.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              f2 !== null && Gg(b2, f2, d);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (g2 !== null) {
                c2 = null;
                if (b2.child !== null)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                Gg(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (c2 === null && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b2.memoizedState === null) {
                var l2 = b2.alternate;
                if (l2 !== null) {
                  var n2 = l2.memoizedState;
                  if (n2 !== null) {
                    var u2 = n2.dehydrated;
                    u2 !== null && ad(u2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(p$6(163));
          }
        S || b2.flags & 512 && Pj(b2);
      } catch (q2) {
        U(b2, b2.return, q2);
      }
    }
    if (b2 === a2) {
      T$3 = null;
      break;
    }
    c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T$3 = c2;
      break;
    }
    T$3 = b2.return;
  }
}
function ek(a2) {
  for (; T$3 !== null; ) {
    var b2 = T$3;
    if (b2 === a2) {
      T$3 = null;
      break;
    }
    var c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T$3 = c2;
      break;
    }
    T$3 = b2.return;
  }
}
function hk(a2) {
  for (; T$3 !== null; ) {
    var b2 = T$3;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Oj(4, b2);
          } catch (k2) {
            U(b2, c2, k2);
          }
          break;
        case 1:
          var d = b2.stateNode;
          if (typeof d.componentDidMount === "function") {
            var e = b2.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              U(b2, e, k2);
            }
          }
          var f2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U(b2, g2, k2);
          }
      }
    } catch (k2) {
      U(b2, b2.return, k2);
    }
    if (b2 === a2) {
      T$3 = null;
      break;
    }
    var h2 = b2.sibling;
    if (h2 !== null) {
      h2.return = b2.return;
      T$3 = h2;
      break;
    }
    T$3 = b2.return;
  }
}
var jk = Math.ceil, kk = ta.ReactCurrentDispatcher, lk = ta.ReactCurrentOwner, mk = ta.ReactCurrentBatchConfig, W = 0, P = null, X$2 = null, Y$1 = 0, cj = 0, mj = Tf(0), R$1 = 0, nk = null, Fg = 0, ok = 0, pk = 0, qk = null, rk = null, dk = 0, aj = Infinity, sk = null, Li = false, Mi = null, Oi = null, tk = false, uk = null, vk = 0, wk = 0, xk = null, yk = -1, zk = 0;
function Jg() {
  return (W & 6) !== 0 ? B() : yk !== -1 ? yk : yk = B();
}
function Kg(a2) {
  if ((a2.mode & 1) === 0)
    return 1;
  if ((W & 2) !== 0 && Y$1 !== 0)
    return Y$1 & -Y$1;
  if (jg.transition !== null)
    return zk === 0 && (zk = xc()), zk;
  a2 = C$4;
  if (a2 !== 0)
    return a2;
  a2 = window.event;
  a2 = a2 === void 0 ? 16 : id(a2.type);
  return a2;
}
function Lg(a2, b2, c2) {
  if (50 < wk)
    throw wk = 0, xk = null, Error(p$6(185));
  var d = Ak(a2, b2);
  if (d === null)
    return null;
  zc(d, b2, c2);
  if ((W & 2) === 0 || d !== P)
    d === P && ((W & 2) === 0 && (ok |= b2), R$1 === 4 && Bk(d, Y$1)), Ck(d, c2), b2 === 1 && W === 0 && (a2.mode & 1) === 0 && (aj = B() + 500, eg && ig());
  return d;
}
function Ak(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Bg(a2) {
  return (P !== null || vg !== null) && (a2.mode & 1) !== 0 && (W & 2) === 0;
}
function Ck(a2, b2) {
  var c2 = a2.callbackNode;
  vc(a2, b2);
  var d = tc(a2, a2 === P ? Y$1 : 0);
  if (d === 0)
    c2 !== null && ac(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d & -d, a2.callbackPriority !== b2) {
    c2 != null && ac(c2);
    if (b2 === 1)
      a2.tag === 0 ? hg(Dk.bind(null, a2)) : gg(Dk.bind(null, a2)), If(function() {
        W === 0 && ig();
      }), c2 = null;
    else {
      switch (Cc(d)) {
        case 1:
          c2 = ec;
          break;
        case 4:
          c2 = fc;
          break;
        case 16:
          c2 = gc;
          break;
        case 536870912:
          c2 = ic;
          break;
        default:
          c2 = gc;
      }
      c2 = Ek(c2, Fk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Fk(a2, b2) {
  yk = -1;
  zk = 0;
  if ((W & 6) !== 0)
    throw Error(p$6(327));
  var c2 = a2.callbackNode;
  if (Gk() && a2.callbackNode !== c2)
    return null;
  var d = tc(a2, a2 === P ? Y$1 : 0);
  if (d === 0)
    return null;
  if ((d & 30) !== 0 || (d & a2.expiredLanes) !== 0 || b2)
    b2 = Hk(a2, d);
  else {
    b2 = d;
    var e = W;
    W |= 2;
    var f2 = Ik();
    if (P !== a2 || Y$1 !== b2)
      sk = null, aj = B() + 500, Jk(a2, b2);
    do
      try {
        Kk();
        break;
      } catch (h2) {
        Lk(a2, h2);
      }
    while (1);
    pg();
    kk.current = f2;
    W = e;
    X$2 !== null ? b2 = 0 : (P = null, Y$1 = 0, b2 = R$1);
  }
  if (b2 !== 0) {
    b2 === 2 && (e = wc(a2), e !== 0 && (d = e, b2 = Mk(a2, e)));
    if (b2 === 1)
      throw c2 = nk, Jk(a2, 0), Bk(a2, d), Ck(a2, B()), c2;
    if (b2 === 6)
      Bk(a2, d);
    else {
      e = a2.current.alternate;
      if ((d & 30) === 0 && !Nk(e) && (b2 = Hk(a2, d), b2 === 2 && (f2 = wc(a2), f2 !== 0 && (d = f2, b2 = Mk(a2, f2))), b2 === 1))
        throw c2 = nk, Jk(a2, 0), Bk(a2, d), Ck(a2, B()), c2;
      a2.finishedWork = e;
      a2.finishedLanes = d;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$6(345));
        case 2:
          Ok(a2, rk, sk);
          break;
        case 3:
          Bk(a2, d);
          if ((d & 130023424) === d && (b2 = dk + 500 - B(), 10 < b2)) {
            if (tc(a2, 0) !== 0)
              break;
            e = a2.suspendedLanes;
            if ((e & d) !== d) {
              Jg();
              a2.pingedLanes |= a2.suspendedLanes & e;
              break;
            }
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), b2);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 4:
          Bk(a2, d);
          if ((d & 4194240) === d)
            break;
          b2 = a2.eventTimes;
          for (e = -1; 0 < d; ) {
            var g2 = 31 - nc(d);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e && (e = g2);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * jk(d / 1960)) - d;
          if (10 < d) {
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), d);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 5:
          Ok(a2, rk, sk);
          break;
        default:
          throw Error(p$6(329));
      }
    }
  }
  Ck(a2, B());
  return a2.callbackNode === c2 ? Fk.bind(null, a2) : null;
}
function Mk(a2, b2) {
  var c2 = qk;
  a2.current.memoizedState.isDehydrated && (Jk(a2, b2).flags |= 256);
  a2 = Hk(a2, b2);
  a2 !== 2 && (b2 = rk, rk = c2, b2 !== null && Zi(b2));
  return a2;
}
function Zi(a2) {
  rk === null ? rk = a2 : rk.push.apply(rk, a2);
}
function Nk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (c2 !== null && (c2 = c2.stores, c2 !== null))
        for (var d = 0; d < c2.length; d++) {
          var e = c2[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!Ge$1(f2(), e))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && c2 !== null)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; b2.sibling === null; ) {
        if (b2.return === null || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Bk(a2, b2) {
  b2 &= ~pk;
  b2 &= ~ok;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - nc(b2), d = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d;
  }
}
function Dk(a2) {
  if ((W & 6) !== 0)
    throw Error(p$6(327));
  Gk();
  var b2 = tc(a2, 0);
  if ((b2 & 1) === 0)
    return Ck(a2, B()), null;
  var c2 = Hk(a2, b2);
  if (a2.tag !== 0 && c2 === 2) {
    var d = wc(a2);
    d !== 0 && (b2 = d, c2 = Mk(a2, d));
  }
  if (c2 === 1)
    throw c2 = nk, Jk(a2, 0), Bk(a2, b2), Ck(a2, B()), c2;
  if (c2 === 6)
    throw Error(p$6(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Ok(a2, rk, sk);
  Ck(a2, B());
  return null;
}
function Pk(a2, b2) {
  var c2 = W;
  W |= 1;
  try {
    return a2(b2);
  } finally {
    W = c2, W === 0 && (aj = B() + 500, eg && ig());
  }
}
function Qk(a2) {
  uk !== null && uk.tag === 0 && (W & 6) === 0 && Gk();
  var b2 = W;
  W |= 1;
  var c2 = mk.transition, d = C$4;
  try {
    if (mk.transition = null, C$4 = 1, a2)
      return a2();
  } finally {
    C$4 = d, mk.transition = c2, W = b2, (W & 6) === 0 && ig();
  }
}
function bj() {
  cj = mj.current;
  E$2(mj);
}
function Jk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  c2 !== -1 && (a2.timeoutHandle = -1, Ff(c2));
  if (X$2 !== null)
    for (c2 = X$2.return; c2 !== null; ) {
      var d = c2;
      ch(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Zf();
          break;
        case 3:
          Gh();
          E$2(Vf);
          E$2(H$1);
          Lh();
          break;
        case 5:
          Ih(d);
          break;
        case 4:
          Gh();
          break;
        case 13:
          E$2(K);
          break;
        case 19:
          E$2(K);
          break;
        case 10:
          qg(d.type._context);
          break;
        case 22:
        case 23:
          bj();
      }
      c2 = c2.return;
    }
  P = a2;
  X$2 = a2 = th(a2.current, null);
  Y$1 = cj = b2;
  R$1 = 0;
  nk = null;
  pk = ok = Fg = 0;
  rk = qk = null;
  if (vg !== null) {
    for (b2 = 0; b2 < vg.length; b2++)
      if (c2 = vg[b2], d = c2.interleaved, d !== null) {
        c2.interleaved = null;
        var e = d.next, f2 = c2.pending;
        if (f2 !== null) {
          var g2 = f2.next;
          f2.next = e;
          d.next = g2;
        }
        c2.pending = d;
      }
    vg = null;
  }
  return a2;
}
function Lk(a2, b2) {
  do {
    var c2 = X$2;
    try {
      pg();
      Mh.current = Yh;
      if (Ph) {
        for (var d = L$1.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        Ph = false;
      }
      Oh = 0;
      N$3 = M$1 = L$1 = null;
      Qh = false;
      Rh = 0;
      lk.current = null;
      if (c2 === null || c2.return === null) {
        R$1 = 1;
        nk = b2;
        X$2 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Y$1;
        h2.flags |= 32768;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2, n2 = h2, u2 = n2.tag;
          if ((n2.mode & 1) === 0 && (u2 === 0 || u2 === 11 || u2 === 15)) {
            var q2 = n2.alternate;
            q2 ? (n2.updateQueue = q2.updateQueue, n2.memoizedState = q2.memoizedState, n2.lanes = q2.lanes) : (n2.updateQueue = null, n2.memoizedState = null);
          }
          var y2 = Ri(g2);
          if (y2 !== null) {
            y2.flags &= -257;
            Si(y2, g2, h2, f2, b2);
            y2.mode & 1 && Pi(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var m2 = b2.updateQueue;
            if (m2 === null) {
              var w2 = /* @__PURE__ */ new Set();
              w2.add(k2);
              b2.updateQueue = w2;
            } else
              m2.add(k2);
            break a;
          } else {
            if ((b2 & 1) === 0) {
              Pi(f2, l2, b2);
              $i();
              break a;
            }
            k2 = Error(p$6(426));
          }
        } else if (I$1 && h2.mode & 1) {
          var J2 = Ri(g2);
          if (J2 !== null) {
            (J2.flags & 65536) === 0 && (J2.flags |= 256);
            Si(J2, g2, h2, f2, b2);
            oh(k2);
            break a;
          }
        }
        f2 = k2;
        R$1 !== 4 && (R$1 = 2);
        qk === null ? qk = [f2] : qk.push(f2);
        k2 = Hi(k2, h2);
        h2 = g2;
        do {
          switch (h2.tag) {
            case 3:
              h2.flags |= 65536;
              b2 &= -b2;
              h2.lanes |= b2;
              var v2 = Ki(h2, k2, b2);
              Dg(h2, v2);
              break a;
            case 1:
              f2 = k2;
              var x2 = h2.type, r2 = h2.stateNode;
              if ((h2.flags & 128) === 0 && (typeof x2.getDerivedStateFromError === "function" || r2 !== null && typeof r2.componentDidCatch === "function" && (Oi === null || !Oi.has(r2)))) {
                h2.flags |= 65536;
                b2 &= -b2;
                h2.lanes |= b2;
                var F2 = Ni(h2, f2, b2);
                Dg(h2, F2);
                break a;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
      }
      Rk(c2);
    } catch (Z2) {
      b2 = Z2;
      X$2 === c2 && c2 !== null && (X$2 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Ik() {
  var a2 = kk.current;
  kk.current = Yh;
  return a2 === null ? Yh : a2;
}
function $i() {
  if (R$1 === 0 || R$1 === 3 || R$1 === 2)
    R$1 = 4;
  P === null || (Fg & 268435455) === 0 && (ok & 268435455) === 0 || Bk(P, Y$1);
}
function Hk(a2, b2) {
  var c2 = W;
  W |= 2;
  var d = Ik();
  if (P !== a2 || Y$1 !== b2)
    sk = null, Jk(a2, b2);
  do
    try {
      Sk();
      break;
    } catch (e) {
      Lk(a2, e);
    }
  while (1);
  pg();
  W = c2;
  kk.current = d;
  if (X$2 !== null)
    throw Error(p$6(261));
  P = null;
  Y$1 = 0;
  return R$1;
}
function Sk() {
  for (; X$2 !== null; )
    Tk(X$2);
}
function Kk() {
  for (; X$2 !== null && !bc(); )
    Tk(X$2);
}
function Tk(a2) {
  var b2 = Uk(a2.alternate, a2, cj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Rk(a2) : X$2 = b2;
  lk.current = null;
}
function Rk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 32768) === 0) {
      if (c2 = Yi(c2, b2, cj), c2 !== null) {
        X$2 = c2;
        return;
      }
    } else {
      c2 = Gj(c2, b2);
      if (c2 !== null) {
        c2.flags &= 32767;
        X$2 = c2;
        return;
      }
      if (a2 !== null)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        R$1 = 6;
        X$2 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      X$2 = b2;
      return;
    }
    X$2 = b2 = a2;
  } while (b2 !== null);
  R$1 === 0 && (R$1 = 5);
}
function Ok(a2, b2, c2) {
  var d = C$4, e = mk.transition;
  try {
    mk.transition = null, C$4 = 1, Vk(a2, b2, c2, d);
  } finally {
    mk.transition = e, C$4 = d;
  }
  return null;
}
function Vk(a2, b2, c2, d) {
  do
    Gk();
  while (uk !== null);
  if ((W & 6) !== 0)
    throw Error(p$6(327));
  c2 = a2.finishedWork;
  var e = a2.finishedLanes;
  if (c2 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(p$6(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Ac(a2, f2);
  a2 === P && (X$2 = P = null, Y$1 = 0);
  (c2.subtreeFlags & 2064) === 0 && (c2.flags & 2064) === 0 || tk || (tk = true, Ek(gc, function() {
    Gk();
    return null;
  }));
  f2 = (c2.flags & 15990) !== 0;
  if ((c2.subtreeFlags & 15990) !== 0 || f2) {
    f2 = mk.transition;
    mk.transition = null;
    var g2 = C$4;
    C$4 = 1;
    var h2 = W;
    W |= 4;
    lk.current = null;
    Mj(a2, c2);
    bk(c2, a2);
    Ne(Cf);
    cd = !!Bf;
    Cf = Bf = null;
    a2.current = c2;
    fk(c2);
    cc();
    W = h2;
    C$4 = g2;
    mk.transition = f2;
  } else
    a2.current = c2;
  tk && (tk = false, uk = a2, vk = e);
  f2 = a2.pendingLanes;
  f2 === 0 && (Oi = null);
  lc(c2.stateNode);
  Ck(a2, B());
  if (b2 !== null)
    for (d = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      d(b2[c2]);
  if (Li)
    throw Li = false, a2 = Mi, Mi = null, a2;
  (vk & 1) !== 0 && a2.tag !== 0 && Gk();
  f2 = a2.pendingLanes;
  (f2 & 1) !== 0 ? a2 === xk ? wk++ : (wk = 0, xk = a2) : wk = 0;
  ig();
  return null;
}
function Gk() {
  if (uk !== null) {
    var a2 = Cc(vk), b2 = mk.transition, c2 = C$4;
    try {
      mk.transition = null;
      C$4 = 16 > a2 ? 16 : a2;
      if (uk === null)
        var d = false;
      else {
        a2 = uk;
        uk = null;
        vk = 0;
        if ((W & 6) !== 0)
          throw Error(p$6(331));
        var e = W;
        W |= 4;
        for (T$3 = a2.current; T$3 !== null; ) {
          var f2 = T$3, g2 = f2.child;
          if ((T$3.flags & 16) !== 0) {
            var h2 = f2.deletions;
            if (h2 !== null) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (T$3 = l2; T$3 !== null; ) {
                  var n2 = T$3;
                  switch (n2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(8, n2, f2);
                  }
                  var u2 = n2.child;
                  if (u2 !== null)
                    u2.return = n2, T$3 = u2;
                  else
                    for (; T$3 !== null; ) {
                      n2 = T$3;
                      var q2 = n2.sibling, y2 = n2.return;
                      Qj(n2);
                      if (n2 === l2) {
                        T$3 = null;
                        break;
                      }
                      if (q2 !== null) {
                        q2.return = y2;
                        T$3 = q2;
                        break;
                      }
                      T$3 = y2;
                    }
                }
              }
              var m2 = f2.alternate;
              if (m2 !== null) {
                var w2 = m2.child;
                if (w2 !== null) {
                  m2.child = null;
                  do {
                    var J2 = w2.sibling;
                    w2.sibling = null;
                    w2 = J2;
                  } while (w2 !== null);
                }
              }
              T$3 = f2;
            }
          }
          if ((f2.subtreeFlags & 2064) !== 0 && g2 !== null)
            g2.return = f2, T$3 = g2;
          else
            b:
              for (; T$3 !== null; ) {
                f2 = T$3;
                if ((f2.flags & 2048) !== 0)
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(9, f2, f2.return);
                  }
                var v2 = f2.sibling;
                if (v2 !== null) {
                  v2.return = f2.return;
                  T$3 = v2;
                  break b;
                }
                T$3 = f2.return;
              }
        }
        var x2 = a2.current;
        for (T$3 = x2; T$3 !== null; ) {
          g2 = T$3;
          var r2 = g2.child;
          if ((g2.subtreeFlags & 2064) !== 0 && r2 !== null)
            r2.return = g2, T$3 = r2;
          else
            b:
              for (g2 = x2; T$3 !== null; ) {
                h2 = T$3;
                if ((h2.flags & 2048) !== 0)
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oj(9, h2);
                    }
                  } catch (Z2) {
                    U(h2, h2.return, Z2);
                  }
                if (h2 === g2) {
                  T$3 = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (F2 !== null) {
                  F2.return = h2.return;
                  T$3 = F2;
                  break b;
                }
                T$3 = h2.return;
              }
        }
        W = e;
        ig();
        if (kc && typeof kc.onPostCommitFiberRoot === "function")
          try {
            kc.onPostCommitFiberRoot(jc, a2);
          } catch (Z2) {
          }
        d = true;
      }
      return d;
    } finally {
      C$4 = c2, mk.transition = b2;
    }
  }
  return false;
}
function Wk(a2, b2, c2) {
  b2 = Hi(c2, b2);
  b2 = Ki(a2, b2, 1);
  Ag(a2, b2);
  b2 = Jg();
  a2 = Ak(a2, 1);
  a2 !== null && (zc(a2, 1, b2), Ck(a2, b2));
}
function U(a2, b2, c2) {
  if (a2.tag === 3)
    Wk(a2, a2, c2);
  else
    for (; b2 !== null; ) {
      if (b2.tag === 3) {
        Wk(b2, a2, c2);
        break;
      } else if (b2.tag === 1) {
        var d = b2.stateNode;
        if (typeof b2.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Oi === null || !Oi.has(d))) {
          a2 = Hi(c2, a2);
          a2 = Ni(b2, a2, 1);
          Ag(b2, a2);
          a2 = Jg();
          b2 = Ak(b2, 1);
          b2 !== null && (zc(b2, 1, a2), Ck(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Qi(a2, b2, c2) {
  var d = a2.pingCache;
  d !== null && d.delete(b2);
  b2 = Jg();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  P === a2 && (Y$1 & c2) === c2 && (R$1 === 4 || R$1 === 3 && (Y$1 & 130023424) === Y$1 && 500 > B() - dk ? Jk(a2, 0) : pk |= c2);
  Ck(a2, b2);
}
function Xk(a2, b2) {
  b2 === 0 && ((a2.mode & 1) === 0 ? b2 = 1 : (b2 = rc, rc <<= 1, (rc & 130023424) === 0 && (rc = 4194304)));
  var c2 = Jg();
  a2 = Ak(a2, b2);
  a2 !== null && (zc(a2, b2, c2), Ck(a2, c2));
}
function zj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  b2 !== null && (c2 = b2.retryLane);
  Xk(a2, c2);
}
function Zj(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d = a2.stateNode;
      var e = a2.memoizedState;
      e !== null && (c2 = e.retryLane);
      break;
    case 19:
      d = a2.stateNode;
      break;
    default:
      throw Error(p$6(314));
  }
  d !== null && d.delete(b2);
  Xk(a2, c2);
}
var Uk;
Uk = function(a2, b2, c2) {
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || Vf.current)
      tg = true;
    else {
      if ((a2.lanes & c2) === 0 && (b2.flags & 128) === 0)
        return tg = false, Fj(a2, b2, c2);
      tg = (a2.flags & 131072) !== 0 ? true : false;
    }
  else
    tg = false, I$1 && (b2.flags & 1048576) !== 0 && ah(b2, Ug, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      var e = Xf(b2, H$1.current);
      sg(b2, c2);
      e = Uh(null, b2, d, a2, e, c2);
      var f2 = Zh();
      b2.flags |= 1;
      typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0 ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Yf(d) ? (f2 = true, bg(b2)) : f2 = false, b2.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, xg(b2), e.updater = Mg, b2.stateNode = e, e._reactInternals = b2, Qg(b2, d, a2, c2), b2 = pj(null, b2, d, true, f2, c2)) : (b2.tag = 0, I$1 && f2 && bh(b2), ej(null, b2, e, c2), b2 = b2.child);
      return b2;
    case 16:
      d = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        e = d._init;
        d = e(d._payload);
        b2.type = d;
        e = b2.tag = Yk(d);
        a2 = kg(d, a2);
        switch (e) {
          case 0:
            b2 = kj(null, b2, d, a2, c2);
            break a;
          case 1:
            b2 = oj(null, b2, d, a2, c2);
            break a;
          case 11:
            b2 = fj(null, b2, d, a2, c2);
            break a;
          case 14:
            b2 = hj(null, b2, d, kg(d.type, a2), c2);
            break a;
        }
        throw Error(p$6(306, d, ""));
      }
      return b2;
    case 0:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : kg(d, e), kj(a2, b2, d, e, c2);
    case 1:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : kg(d, e), oj(a2, b2, d, e, c2);
    case 3:
      a: {
        qj(b2);
        if (a2 === null)
          throw Error(p$6(387));
        d = b2.pendingProps;
        f2 = b2.memoizedState;
        e = f2.element;
        yg(a2, b2);
        Eg(b2, d, null, c2);
        var g2 = b2.memoizedState;
        d = g2.element;
        if (f2.isDehydrated)
          if (f2 = {
            element: d,
            isDehydrated: false,
            cache: g2.cache,
            pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries,
            transitions: g2.transitions
          }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e = Error(p$6(423));
            b2 = rj(a2, b2, d, c2, e);
            break a;
          } else if (d !== e) {
            e = Error(p$6(424));
            b2 = rj(a2, b2, d, c2, e);
            break a;
          } else
            for (eh = Kf(b2.stateNode.containerInfo.firstChild), dh = b2, I$1 = true, fh = null, c2 = zh(b2, null, d, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          nh();
          if (d === e) {
            b2 = gj(a2, b2, c2);
            break a;
          }
          ej(a2, b2, d, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Hh(b2), a2 === null && kh(b2), d = b2.type, e = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g2 = e.children, Df(d, e) ? g2 = null : f2 !== null && Df(d, f2) && (b2.flags |= 32), nj(a2, b2), ej(a2, b2, g2, c2), b2.child;
    case 6:
      return a2 === null && kh(b2), null;
    case 13:
      return vj(a2, b2, c2);
    case 4:
      return Fh(b2, b2.stateNode.containerInfo), d = b2.pendingProps, a2 === null ? b2.child = yh(b2, null, d, c2) : ej(a2, b2, d, c2), b2.child;
    case 11:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : kg(d, e), fj(a2, b2, d, e, c2);
    case 7:
      return ej(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return ej(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return ej(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d = b2.type._context;
        e = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e.value;
        G(lg, d._currentValue);
        d._currentValue = g2;
        if (f2 !== null)
          if (Ge$1(f2.value, g2)) {
            if (f2.children === e.children && !Vf.current) {
              b2 = gj(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, f2 !== null && (f2.return = b2); f2 !== null; ) {
              var h2 = f2.dependencies;
              if (h2 !== null) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; k2 !== null; ) {
                  if (k2.context === d) {
                    if (f2.tag === 1) {
                      k2 = zg(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (l2 !== null) {
                        l2 = l2.shared;
                        var n2 = l2.pending;
                        n2 === null ? k2.next = k2 : (k2.next = n2.next, n2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    k2 !== null && (k2.lanes |= c2);
                    rg(f2.return, c2, b2);
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (f2.tag === 10)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (f2.tag === 18) {
                g2 = f2.return;
                if (g2 === null)
                  throw Error(p$6(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                h2 !== null && (h2.lanes |= c2);
                rg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (g2 !== null)
                g2.return = f2;
              else
                for (g2 = f2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (f2 !== null) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        ej(a2, b2, e.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e = b2.type, d = b2.pendingProps.children, sg(b2, c2), e = ug(e), d = d(e), b2.flags |= 1, ej(a2, b2, d, c2), b2.child;
    case 14:
      return d = b2.type, e = kg(d, b2.pendingProps), e = kg(d.type, e), hj(a2, b2, d, e, c2);
    case 15:
      return jj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : kg(d, e), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Yf(d) ? (a2 = true, bg(b2)) : a2 = false, sg(b2, c2), Og(b2, d, e), Qg(b2, d, e, c2), pj(null, b2, d, true, a2, c2);
    case 19:
      return Ej(a2, b2, c2);
    case 22:
      return lj(a2, b2, c2);
  }
  throw Error(p$6(156, b2.tag));
};
function Ek(a2, b2) {
  return $b(a2, b2);
}
function Zk(a2, b2, c2, d) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function hh(a2, b2, c2, d) {
  return new Zk(a2, b2, c2, d);
}
function ij(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Yk(a2) {
  if (typeof a2 === "function")
    return ij(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Ca)
      return 11;
    if (a2 === Fa)
      return 14;
  }
  return 2;
}
function th(a2, b2) {
  var c2 = a2.alternate;
  c2 === null ? (c2 = hh(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function vh(a2, b2, c2, d, e, f2) {
  var g2 = 2;
  d = a2;
  if (typeof a2 === "function")
    ij(a2) && (g2 = 1);
  else if (typeof a2 === "string")
    g2 = 5;
  else
    a:
      switch (a2) {
        case wa:
          return xh(c2.children, e, f2, b2);
        case xa:
          g2 = 8;
          e |= 8;
          break;
        case za:
          return a2 = hh(12, c2, b2, e | 2), a2.elementType = za, a2.lanes = f2, a2;
        case Da:
          return a2 = hh(13, c2, b2, e), a2.elementType = Da, a2.lanes = f2, a2;
        case Ea:
          return a2 = hh(19, c2, b2, e), a2.elementType = Ea, a2.lanes = f2, a2;
        case Ha:
          return wj(c2, e, f2, b2);
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case Aa:
                g2 = 10;
                break a;
              case Ba:
                g2 = 9;
                break a;
              case Ca:
                g2 = 11;
                break a;
              case Fa:
                g2 = 14;
                break a;
              case Ga:
                g2 = 16;
                d = null;
                break a;
            }
          throw Error(p$6(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = hh(g2, c2, b2, e);
  b2.elementType = a2;
  b2.type = d;
  b2.lanes = f2;
  return b2;
}
function xh(a2, b2, c2, d) {
  a2 = hh(7, a2, d, b2);
  a2.lanes = c2;
  return a2;
}
function wj(a2, b2, c2, d) {
  a2 = hh(22, a2, d, b2);
  a2.elementType = Ha;
  a2.lanes = c2;
  a2.stateNode = {};
  return a2;
}
function uh(a2, b2, c2) {
  a2 = hh(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function wh(a2, b2, c2) {
  b2 = hh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function $k(a2, b2, c2, d, e) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = yc(0);
  this.expirationTimes = yc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = yc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function al(a2, b2, c2, d, e, f2, g2, h2, k2) {
  a2 = new $k(a2, b2, c2, h2, k2);
  b2 === 1 ? (b2 = 1, f2 === true && (b2 |= 8)) : b2 = 0;
  f2 = hh(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  xg(f2);
  return a2;
}
function bl(a2, b2, c2) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: va, key: d == null ? null : "" + d, children: a2, containerInfo: b2, implementation: c2 };
}
function cl(a2) {
  if (!a2)
    return Uf;
  a2 = a2._reactInternals;
  a: {
    if (Ub(a2) !== a2 || a2.tag !== 1)
      throw Error(p$6(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Yf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (b2 !== null);
    throw Error(p$6(171));
  }
  if (a2.tag === 1) {
    var c2 = a2.type;
    if (Yf(c2))
      return ag(a2, c2, b2);
  }
  return b2;
}
function dl(a2, b2, c2, d, e, f2, g2, h2, k2) {
  a2 = al(c2, d, true, a2, e, f2, g2, h2, k2);
  a2.context = cl(null);
  c2 = a2.current;
  d = Jg();
  e = Kg(c2);
  f2 = zg(d, e);
  f2.callback = b2 !== void 0 && b2 !== null ? b2 : null;
  Ag(c2, f2);
  a2.current.lanes = e;
  zc(a2, e, d);
  Ck(a2, d);
  return a2;
}
function el(a2, b2, c2, d) {
  var e = b2.current, f2 = Jg(), g2 = Kg(e);
  c2 = cl(c2);
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a2 };
  d = d === void 0 ? null : d;
  d !== null && (b2.callback = d);
  Ag(e, b2);
  a2 = Lg(e, g2, f2);
  a2 !== null && Cg(a2, e, g2);
  return g2;
}
function fl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function gl(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c2 = a2.retryLane;
    a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function hl(a2, b2) {
  gl(a2, b2);
  (a2 = a2.alternate) && gl(a2, b2);
}
function il() {
  return null;
}
var jl = typeof reportError === "function" ? reportError : function(a2) {
  console.error(a2);
};
function kl(a2) {
  this._internalRoot = a2;
}
ll.prototype.render = kl.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (b2 === null)
    throw Error(p$6(409));
  el(a2, b2, null, null);
};
ll.prototype.unmount = kl.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (a2 !== null) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Qk(function() {
      el(null, a2, null, null);
    });
    b2[tf] = null;
  }
};
function ll(a2) {
  this._internalRoot = a2;
}
ll.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Gc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Pc.length && b2 !== 0 && b2 < Pc[c2].priority; c2++)
      ;
    Pc.splice(c2, 0, a2);
    c2 === 0 && Uc(a2);
  }
};
function ml(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11);
}
function nl(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function ol() {
}
function pl(a2, b2, c2, d, e) {
  if (e) {
    if (typeof d === "function") {
      var f2 = d;
      d = function() {
        var a3 = fl(g2);
        f2.call(a3);
      };
    }
    var g2 = dl(b2, d, a2, 0, null, false, false, "", ol);
    a2._reactRootContainer = g2;
    a2[tf] = g2.current;
    rf(a2.nodeType === 8 ? a2.parentNode : a2);
    Qk();
    return g2;
  }
  for (; e = a2.lastChild; )
    a2.removeChild(e);
  if (typeof d === "function") {
    var h2 = d;
    d = function() {
      var a3 = fl(k2);
      h2.call(a3);
    };
  }
  var k2 = al(a2, 0, false, null, null, false, false, "", ol);
  a2._reactRootContainer = k2;
  a2[tf] = k2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  Qk(function() {
    el(b2, k2, c2, d);
  });
  return k2;
}
function ql(a2, b2, c2, d, e) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if (typeof e === "function") {
      var h2 = e;
      e = function() {
        var a3 = fl(g2);
        h2.call(a3);
      };
    }
    el(b2, g2, a2, e);
  } else
    g2 = pl(c2, b2, a2, e, d);
  return fl(g2);
}
Dc = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = sc(b2.pendingLanes);
        c2 !== 0 && (Bc(b2, c2 | 1), Ck(b2, B()), (W & 6) === 0 && (aj = B() + 500, ig()));
      }
      break;
    case 13:
      var d = Jg();
      Qk(function() {
        return Lg(a2, 1, d);
      });
      hl(a2, 1);
  }
};
Ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg();
    Lg(a2, 134217728, b2);
    hl(a2, 134217728);
  }
};
Fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg(), c2 = Kg(a2);
    Lg(a2, c2, b2);
    hl(a2, c2);
  }
};
Gc = function() {
  return C$4;
};
Hc = function(a2, b2) {
  var c2 = C$4;
  try {
    return C$4 = a2, b2();
  } finally {
    C$4 = c2;
  }
};
xb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      $a(a2, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d = c2[b2];
          if (d !== a2 && d.form === a2.form) {
            var e = Cb(d);
            if (!e)
              throw Error(p$6(90));
            Va(d);
            $a(d, e);
          }
        }
      }
      break;
    case "textarea":
      hb(a2, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && eb(a2, !!c2.multiple, b2, false);
  }
};
Fb = Pk;
Gb = Qk;
var rl = { usingClientEntryPoint: false, Events: [Bb, te, Cb, Db, Eb, Pk] }, sl = { findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" };
var tl = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Yb(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ul.isDisabled && ul.supportsFiber)
    try {
      jc = ul.inject(tl), kc = ul;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ml(b2))
    throw Error(p$6(200));
  return bl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!ml(a2))
    throw Error(p$6(299));
  var c2 = false, d = "", e = jl;
  b2 !== null && b2 !== void 0 && (b2.unstable_strictMode === true && (c2 = true), b2.identifierPrefix !== void 0 && (d = b2.identifierPrefix), b2.onRecoverableError !== void 0 && (e = b2.onRecoverableError));
  b2 = al(a2, 1, false, null, null, c2, false, d, e);
  a2[tf] = b2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  return new kl(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(p$6(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$6(268, a2));
  }
  a2 = Yb(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Qk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!nl(b2))
    throw Error(p$6(200));
  return ql(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!ml(a2))
    throw Error(p$6(405));
  var d = c2 != null && c2.hydratedSources || null, e = false, f2 = "", g2 = jl;
  c2 !== null && c2 !== void 0 && (c2.unstable_strictMode === true && (e = true), c2.identifierPrefix !== void 0 && (f2 = c2.identifierPrefix), c2.onRecoverableError !== void 0 && (g2 = c2.onRecoverableError));
  b2 = dl(b2, null, a2, 1, c2 != null ? c2 : null, e, false, f2, g2);
  a2[tf] = b2.current;
  rf(a2);
  if (d)
    for (a2 = 0; a2 < d.length; a2++)
      c2 = d[a2], e = c2._getVersion, e = e(c2._source), b2.mutableSourceEagerHydrationData == null ? b2.mutableSourceEagerHydrationData = [c2, e] : b2.mutableSourceEagerHydrationData.push(c2, e);
  return new ll(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!nl(b2))
    throw Error(p$6(200));
  return ql(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!nl(a2))
    throw Error(p$6(40));
  return a2._reactRootContainer ? (Qk(function() {
    ql(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[tf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Pk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d) {
  if (!nl(c2))
    throw Error(p$6(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(p$6(38));
  return ql(a2, b2, c2, false, d);
};
reactDom_production_min.version = "18.1.0-next-22edb9f77-20220426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
  return obj;
};
var BeforeUnloadEventType = "beforeunload";
var PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$window = _options.window, window2 = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window2.history;
  function getIndexAndLocation() {
    var _window$location = window2.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname,
      search,
      hash,
      state: state.usr || null,
      key: state.key || "default"
    })];
  }
  var blockedPopTx = null;
  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;
      var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;
          if (delta) {
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        }
      } else {
        applyTx(nextAction);
      }
    }
  }
  window2.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;
  var _getIndexAndLocation2 = getIndexAndLocation(), index = _getIndexAndLocation2[0], location = _getIndexAndLocation2[1];
  var listeners = createEvents();
  var blockers = createEvents();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }
    return readOnly(_extends({
      pathname: location.pathname,
      hash: "",
      search: ""
    }, typeof to === "string" ? parsePath(to) : to, {
      state,
      key: createKey()
    }));
  }
  function getHistoryStateAndUrl(nextLocation, index2) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index2
    }, createHref(nextLocation)];
  }
  function allowTx(action2, location2, retry) {
    return !blockers.length || (blockers.call({
      action: action2,
      location: location2,
      retry
    }), false);
  }
  function applyTx(nextAction) {
    action = nextAction;
    var _getIndexAndLocation3 = getIndexAndLocation();
    index = _getIndexAndLocation3[0];
    location = _getIndexAndLocation3[1];
    listeners.call({
      action,
      location
    });
  }
  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      push(to, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        window2.location.assign(url);
      }
      applyTx(nextAction);
    }
  }
  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);
    function retry() {
      replace(to, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
      globalHistory.replaceState(historyState, "", url);
      applyTx(nextAction);
    }
  }
  function go(delta) {
    globalHistory.go(delta);
  }
  var history = {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    createHref,
    push,
    replace,
    go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);
      if (blockers.length === 1) {
        window2.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }
      return function() {
        unblock();
        if (!blockers.length) {
          window2.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
function promptBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = "";
}
function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },
    push: function push(fn) {
      handlers.push(fn);
      return function() {
        handlers = handlers.filter(function(handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function(fn) {
        return fn && fn(arg);
      });
    }
  };
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    var searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const NavigationContext = /* @__PURE__ */ react.exports.createContext(null);
const LocationContext = /* @__PURE__ */ react.exports.createContext(null);
const RouteContext = /* @__PURE__ */ react.exports.createContext({
  outlet: null,
  matches: []
});
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    matches = matchRouteBranch(branches[i2], pathname);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ? invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? a2[a2.length - 1] - b2[b2.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "");
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename.length) || "/";
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
function useInRouterContext() {
  return react.exports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return react.exports.useContext(LocationContext).location;
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    matches: parentMatches
  } = react.exports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null)
    return null;
  return matches.reduceRight((outlet, match, index) => {
    return /* @__PURE__ */ react.exports.createElement(RouteContext.Provider, {
      children: match.route.element !== void 0 ? match.route.element : outlet,
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
function Route(_props) {
  invariant(false);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = react.exports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = react.exports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ react.exports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ react.exports.createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
}
function createRoutesFromChildren(children) {
  let routes = [];
  react.exports.Children.forEach(children, (element) => {
    if (!/* @__PURE__ */ react.exports.isValidElement(element)) {
      return;
    }
    if (element.type === react.exports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window: window2
  } = _ref;
  let historyRef = react.exports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2
    });
  }
  let history = historyRef.current;
  let [state, setState] = react.exports.useState({
    action: history.action,
    location: history.location
  });
  react.exports.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ react.exports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function o$2() {
  let a2 = [], i2 = [], n2 = { enqueue(e) {
    i2.push(e);
  }, addEventListener(e, t2, r2, s2) {
    return e.addEventListener(t2, r2, s2), n2.add(() => e.removeEventListener(t2, r2, s2));
  }, requestAnimationFrame(...e) {
    let t2 = requestAnimationFrame(...e);
    return n2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e) {
    return n2.requestAnimationFrame(() => n2.requestAnimationFrame(...e));
  }, setTimeout(...e) {
    let t2 = setTimeout(...e);
    return n2.add(() => clearTimeout(t2));
  }, add(e) {
    return a2.push(e), () => {
      let t2 = a2.indexOf(e);
      if (t2 >= 0) {
        let [r2] = a2.splice(t2, 1);
        r2();
      }
    };
  }, dispose() {
    for (let e of a2.splice(0))
      e();
  }, async workQueue() {
    for (let e of i2.splice(0))
      await e();
  } };
  return n2;
}
function p$5() {
  let [e] = react.exports.useState(o$2);
  return react.exports.useEffect(() => () => e.dispose(), [e]), e;
}
const t$2 = typeof window != "undefined" ? react.exports.useLayoutEffect : react.exports.useEffect;
let r$2 = { serverHandoffComplete: false };
function a$1() {
  let [e, f2] = react.exports.useState(r$2.serverHandoffComplete);
  return react.exports.useEffect(() => {
    e !== true && f2(true);
  }, [e]), react.exports.useEffect(() => {
    r$2.serverHandoffComplete === false && (r$2.serverHandoffComplete = true);
  }, []), e;
}
var u$1;
let l$3 = 0;
function r$1() {
  return ++l$3;
}
let I = (u$1 = React.useId) != null ? u$1 : function() {
  let n2 = a$1(), [e, o2] = React.useState(n2 ? r$1 : null);
  return t$2(() => {
    e === null && o2(r$1());
  }, [e]), e != null ? "" + e : void 0;
};
function s$3(e) {
  let r2 = react.exports.useRef(e);
  return t$2(() => {
    r2.current = e;
  }, [e]), r2;
}
let l$2 = Symbol();
function T$2(...n2) {
  let t2 = react.exports.useRef(n2);
  react.exports.useEffect(() => {
    t2.current = n2;
  }, [n2]);
  let c2 = react.exports.useCallback((e) => {
    for (let u2 of t2.current)
      u2 != null && (typeof u2 == "function" ? u2(e) : u2.current = e);
  }, [t2]);
  return n2.every((e) => e == null || (e == null ? void 0 : e[l$2])) ? void 0 : c2;
}
function u(r2, n2, ...a2) {
  if (r2 in n2) {
    let e = n2[r2];
    return typeof e == "function" ? e(...a2) : e;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
var b$1 = ((n2) => (n2[n2.None = 0] = "None", n2[n2.RenderStrategy = 1] = "RenderStrategy", n2[n2.Static = 2] = "Static", n2))(b$1 || {}), x$2 = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(x$2 || {});
function A({ ourProps: r2, theirProps: t2, slot: e, defaultTag: n2, features: o2, visible: a2 = true, name: l2 }) {
  let s2 = m$1(t2, r2);
  if (a2)
    return p$4(s2, e, n2, l2);
  let u$12 = o2 != null ? o2 : 0;
  if (u$12 & 2) {
    let _a = s2, { static: i2 = false } = _a, d = __objRest(_a, ["static"]);
    if (i2)
      return p$4(d, e, n2, l2);
  }
  if (u$12 & 1) {
    let _b = s2, { unmount: i2 = true } = _b, d = __objRest(_b, ["unmount"]);
    return u(i2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return p$4(__spreadProps(__spreadValues({}, d), { hidden: true, style: { display: "none" } }), e, n2, l2);
    } });
  }
  return p$4(s2, e, n2, l2);
}
function p$4(r2, t2 = {}, e, n2) {
  let _a = f$4(r2, ["unmount", "static"]), { as: o2 = e, children: a2, refName: l2 = "ref" } = _a, s2 = __objRest(_a, ["as", "children", "refName"]), u2 = r2.ref !== void 0 ? { [l2]: r2.ref } : {}, i2 = typeof a2 == "function" ? a2(t2) : a2;
  if (s2.className && typeof s2.className == "function" && (s2.className = s2.className(t2)), o2 === react.exports.Fragment && Object.keys(y(s2)).length > 0) {
    if (!react.exports.isValidElement(i2) || Array.isArray(i2) && i2.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s2).map((d) => `  - ${d}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d) => `  - ${d}`).join(`
`)].join(`
`));
    return react.exports.cloneElement(i2, Object.assign({}, m$1(i2.props, y(f$4(s2, ["ref"]))), u2));
  }
  return react.exports.createElement(o2, Object.assign({}, f$4(s2, ["ref"]), o2 !== react.exports.Fragment && u2), i2);
}
function m$1(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e = {};
  for (let o2 of r2)
    for (let a2 in o2)
      a2.startsWith("on") && typeof o2[a2] == "function" ? (e[a2] != null || (e[a2] = []), e[a2].push(o2[a2])) : t2[a2] = o2[a2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e).map((o2) => [o2, void 0])));
  for (let o2 in e)
    Object.assign(t2, { [o2](a2) {
      let l2 = e[o2];
      for (let s2 of l2) {
        if (a2.defaultPrevented)
          return;
        s2(a2);
      }
    } });
  return t2;
}
function H(r2) {
  var t2;
  return Object.assign(react.exports.forwardRef(r2), { displayName: (t2 = r2.displayName) != null ? t2 : r2.name });
}
function y(r2) {
  let t2 = Object.assign({}, r2);
  for (let e in t2)
    t2[e] === void 0 && delete t2[e];
  return t2;
}
function f$4(r2, t2 = []) {
  let e = Object.assign({}, r2);
  for (let n2 of t2)
    n2 in e && delete e[n2];
  return e;
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
function f$3(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(a || {});
function x$1(r2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n2.resolveActiveIndex(), s2 = l2 != null ? l2 : -1, d = (() => {
    switch (r2.focus) {
      case 0:
        return t2.findIndex((e) => !n2.resolveDisabled(e));
      case 1: {
        let e = t2.slice().reverse().findIndex((i2, c2, u2) => s2 !== -1 && u2.length - c2 - 1 >= s2 ? false : !n2.resolveDisabled(i2));
        return e === -1 ? e : t2.length - 1 - e;
      }
      case 2:
        return t2.findIndex((e, i2) => i2 <= s2 ? false : !n2.resolveDisabled(e));
      case 3: {
        let e = t2.slice().reverse().findIndex((i2) => !n2.resolveDisabled(i2));
        return e === -1 ? e : t2.length - 1 - e;
      }
      case 4:
        return t2.findIndex((e) => n2.resolveId(e) === r2.id);
      case 5:
        return null;
      default:
        f$3(r2);
    }
  })();
  return d === -1 ? l2 : d;
}
function r(n2) {
  let e = n2.parentElement, l2 = null;
  for (; e && !(e instanceof HTMLFieldSetElement); )
    e instanceof HTMLLegendElement && (l2 = e), e = e.parentElement;
  let t2 = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return t2 && i$1(l2) ? false : t2;
}
function i$1(n2) {
  if (!n2)
    return false;
  let e = n2.previousElementSibling;
  for (; e !== null; ) {
    if (e instanceof HTMLLegendElement)
      return false;
    e = e.previousElementSibling;
  }
  return true;
}
function t$1(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function s$2(e, r2, n2) {
  let o2 = s$3(r2);
  react.exports.useEffect(() => {
    function t2(i2) {
      o2.current(i2);
    }
    return window.addEventListener(e, t2, n2), () => window.removeEventListener(e, t2, n2);
  }, [e, n2]);
}
var C$3 = ((r2) => (r2[r2.None = 1] = "None", r2[r2.IgnoreScrollbars = 2] = "IgnoreScrollbars", r2))(C$3 || {});
function w$1(c2, a2, r2 = 1) {
  let i2 = react.exports.useRef(false), l2 = s$3((n2) => {
    if (i2.current)
      return;
    i2.current = true, t$1(() => {
      i2.current = false;
    });
    let f2 = function t2(e) {
      return typeof e == "function" ? t2(e()) : Array.isArray(e) || e instanceof Set ? e : [e];
    }(c2), o2 = n2.target;
    if (!!o2.ownerDocument.documentElement.contains(o2)) {
      if ((r2 & 2) === 2) {
        let t2 = 20, e = o2.ownerDocument.documentElement;
        if (n2.clientX > e.clientWidth - t2 || n2.clientX < t2 || n2.clientY > e.clientHeight - t2 || n2.clientY < t2)
          return;
      }
      for (let t2 of f2) {
        if (t2 === null)
          continue;
        let e = t2 instanceof HTMLElement ? t2 : t2.current;
        if (e != null && e.contains(o2))
          return;
      }
      return a2(n2, o2);
    }
  });
  s$2("pointerdown", (...n2) => l2.current(...n2)), s$2("mousedown", (...n2) => l2.current(...n2));
}
let o = react.exports.createContext(null);
o.displayName = "OpenClosedContext";
var p$3 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(p$3 || {});
function s$1() {
  return react.exports.useContext(o);
}
function C$2({ value: t2, children: n2 }) {
  return React.createElement(o.Provider, { value: t2 }, n2);
}
function i(t2) {
  var n2;
  if (t2.type)
    return t2.type;
  let e = (n2 = t2.as) != null ? n2 : "button";
  if (typeof e == "string" && e.toLowerCase() === "button")
    return "button";
}
function s(t2, e) {
  let [n2, u2] = react.exports.useState(() => i(t2));
  return t$2(() => {
    u2(i(t2));
  }, [t2.type, t2.as]), t$2(() => {
    n2 || !e.current || e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && u2("button");
  }, [n2, e]), n2;
}
function t(n2) {
  return typeof window == "undefined" ? null : n2 instanceof Node ? n2.ownerDocument : n2 != null && n2.hasOwnProperty("current") && n2.current instanceof Node ? n2.current.ownerDocument : document;
}
function F$2({ container: e, accept: t$12, walk: r2, enabled: c2 = true }) {
  let o2 = react.exports.useRef(t$12), l2 = react.exports.useRef(r2);
  react.exports.useEffect(() => {
    o2.current = t$12, l2.current = r2;
  }, [t$12, r2]), t$2(() => {
    if (!e || !c2)
      return;
    let n2 = t(e);
    if (!n2)
      return;
    let f2 = o2.current, p2 = l2.current, d = Object.assign((i2) => f2(i2), { acceptNode: f2 }), u2 = n2.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, d, false);
    for (; u2.nextNode(); )
      p2(u2.currentNode);
  }, [e, c2, o2, l2]);
}
let f$2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var E$1 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(E$1 || {}), p$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(p$2 || {}), L = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(L || {});
function N$2(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(f$2));
}
var T$1 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(T$1 || {});
function O(e, r2 = 0) {
  var t$12;
  return e === ((t$12 = t(e)) == null ? void 0 : t$12.body) ? false : u(r2, { [0]() {
    return e.matches(f$2);
  }, [1]() {
    let l2 = e;
    for (; l2 !== null; ) {
      if (l2.matches(f$2))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
let b = ["textarea", "input"].join(",");
function M(e) {
  var r2, t2;
  return (t2 = (r2 = e == null ? void 0 : e.matches) == null ? void 0 : r2.call(e, b)) != null ? t2 : false;
}
function h(e, r2 = (t2) => t2) {
  return e.slice().sort((t2, l2) => {
    let o2 = r2(t2), a2 = r2(l2);
    if (o2 === null || a2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(a2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function F$1(e, r2) {
  let t2 = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l2 = Array.isArray(e) ? h(e) : N$2(e), o2 = t2.activeElement, a2 = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), n2 = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, l2.indexOf(o2)) - 1;
    if (r2 & 4)
      return Math.max(0, l2.indexOf(o2)) + 1;
    if (r2 & 8)
      return l2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = r2 & 32 ? { preventScroll: true } : {}, c2 = 0, i2 = l2.length, u2;
  do {
    if (c2 >= i2 || c2 + i2 <= 0)
      return 0;
    let s2 = n2 + c2;
    if (r2 & 16)
      s2 = (s2 + i2) % i2;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= i2)
        return 1;
    }
    u2 = l2[s2], u2 == null || u2.focus(d), c2 += a2;
  } while (u2 !== t2.activeElement);
  return r2 & 6 && M(u2) && u2.select(), u2.hasAttribute("tabindex") || u2.setAttribute("tabindex", "0"), 2;
}
function E(n2, e, a2, t2) {
  let i2 = s$3(a2);
  react.exports.useEffect(() => {
    n2 = n2 != null ? n2 : window;
    function r2(o2) {
      i2.current(o2);
    }
    return n2.addEventListener(e, r2, t2), () => n2.removeEventListener(e, r2, t2);
  }, [n2, e, t2]);
}
function f$1() {
  let e = react.exports.useRef(false);
  return t$2(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}
function n$1(...e) {
  return react.exports.useMemo(() => t(...e), [...e]);
}
var oe$1 = ((a2) => (a2[a2.Open = 0] = "Open", a2[a2.Closed = 1] = "Closed", a2))(oe$1 || {}), ae = ((a2) => (a2[a2.Pointer = 0] = "Pointer", a2[a2.Other = 1] = "Other", a2))(ae || {}), ie = ((o2) => (o2[o2.OpenMenu = 0] = "OpenMenu", o2[o2.CloseMenu = 1] = "CloseMenu", o2[o2.GoToItem = 2] = "GoToItem", o2[o2.Search = 3] = "Search", o2[o2.ClearSearch = 4] = "ClearSearch", o2[o2.RegisterItem = 5] = "RegisterItem", o2[o2.UnregisterItem = 6] = "UnregisterItem", o2))(ie || {});
function k$1(t2, i2 = (a2) => a2) {
  let a2 = t2.activeItemIndex !== null ? t2.items[t2.activeItemIndex] : null, e = h(i2(t2.items.slice()), (u2) => u2.dataRef.current.domRef.current), r2 = a2 ? e.indexOf(a2) : null;
  return r2 === -1 && (r2 = null), { items: e, activeItemIndex: r2 };
}
let ue = { [1](t2) {
  return t2.menuState === 1 ? t2 : __spreadProps(__spreadValues({}, t2), { activeItemIndex: null, menuState: 1 });
}, [0](t2) {
  return t2.menuState === 0 ? t2 : __spreadProps(__spreadValues({}, t2), { menuState: 0 });
}, [2]: (t2, i2) => {
  var r2;
  let a2 = k$1(t2), e = x$1(i2, { resolveItems: () => a2.items, resolveActiveIndex: () => a2.activeItemIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.current.disabled });
  return __spreadProps(__spreadValues(__spreadValues({}, t2), a2), { searchQuery: "", activeItemIndex: e, activationTrigger: (r2 = i2.trigger) != null ? r2 : 1 });
}, [3]: (t2, i2) => {
  let e = t2.searchQuery !== "" ? 0 : 1, r2 = t2.searchQuery + i2.value.toLowerCase(), s2 = (t2.activeItemIndex !== null ? t2.items.slice(t2.activeItemIndex + e).concat(t2.items.slice(0, t2.activeItemIndex + e)) : t2.items).find((l2) => {
    var p2;
    return ((p2 = l2.dataRef.current.textValue) == null ? void 0 : p2.startsWith(r2)) && !l2.dataRef.current.disabled;
  }), o2 = s2 ? t2.items.indexOf(s2) : -1;
  return o2 === -1 || o2 === t2.activeItemIndex ? __spreadProps(__spreadValues({}, t2), { searchQuery: r2 }) : __spreadProps(__spreadValues({}, t2), { searchQuery: r2, activeItemIndex: o2, activationTrigger: 1 });
}, [4](t2) {
  return t2.searchQuery === "" ? t2 : __spreadProps(__spreadValues({}, t2), { searchQuery: "", searchActiveItemIndex: null });
}, [5]: (t2, i2) => {
  let a2 = k$1(t2, (e) => [...e, { id: i2.id, dataRef: i2.dataRef }]);
  return __spreadValues(__spreadValues({}, t2), a2);
}, [6]: (t2, i2) => {
  let a2 = k$1(t2, (e) => {
    let r2 = e.findIndex((u2) => u2.id === i2.id);
    return r2 !== -1 && e.splice(r2, 1), e;
  });
  return __spreadProps(__spreadValues(__spreadValues({}, t2), a2), { activationTrigger: 1 });
} }, w = react.exports.createContext(null);
w.displayName = "MenuContext";
function C$1(t2) {
  let i2 = react.exports.useContext(w);
  if (i2 === null) {
    let a2 = new Error(`<${t2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a2, C$1), a2;
  }
  return i2;
}
function se(t2, i2) {
  return u(i2.type, ue, t2, i2);
}
let le = react.exports.Fragment, ce$1 = H(function(i2, a2) {
  let e = react.exports.useReducer(se, { menuState: 1, buttonRef: react.exports.createRef(), itemsRef: react.exports.createRef(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: r2, itemsRef: u$12, buttonRef: s2 }, o2] = e, l2 = T$2(a2);
  w$1([s2, u$12], (M2, R2) => {
    var T2;
    r2 === 0 && (o2({ type: 1 }), O(R2, T$1.Loose) || (M2.preventDefault(), (T2 = s2.current) == null || T2.focus()));
  });
  let p2 = react.exports.useMemo(() => ({ open: r2 === 0 }), [r2]), g2 = i2, f2 = { ref: l2 };
  return React.createElement(w.Provider, { value: e }, React.createElement(C$2, { value: u(r2, { [0]: p$3.Open, [1]: p$3.Closed }) }, A({ ourProps: f2, theirProps: g2, slot: p2, defaultTag: le, name: "Menu" })));
}), pe = "button", de$1 = H(function(i2, a$12) {
  var T2;
  let [e, r$12] = C$1("Menu.Button"), u2 = T$2(e.buttonRef, a$12), s$12 = `headlessui-menu-button-${I()}`, o2 = p$5(), l2 = react.exports.useCallback((c2) => {
    switch (c2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        c2.preventDefault(), c2.stopPropagation(), r$12({ type: 0 }), o2.nextFrame(() => r$12({ type: 2, focus: a.First }));
        break;
      case o$1.ArrowUp:
        c2.preventDefault(), c2.stopPropagation(), r$12({ type: 0 }), o2.nextFrame(() => r$12({ type: 2, focus: a.Last }));
        break;
    }
  }, [r$12, o2]), p2 = react.exports.useCallback((c2) => {
    switch (c2.key) {
      case o$1.Space:
        c2.preventDefault();
        break;
    }
  }, []), g2 = react.exports.useCallback((c2) => {
    if (r(c2.currentTarget))
      return c2.preventDefault();
    i2.disabled || (e.menuState === 0 ? (r$12({ type: 1 }), o2.nextFrame(() => {
      var b2;
      return (b2 = e.buttonRef.current) == null ? void 0 : b2.focus({ preventScroll: true });
    })) : (c2.preventDefault(), c2.stopPropagation(), r$12({ type: 0 })));
  }, [r$12, o2, e, i2.disabled]), f2 = react.exports.useMemo(() => ({ open: e.menuState === 0 }), [e]), M2 = i2, R2 = { ref: u2, id: s$12, type: s(i2, e.buttonRef), "aria-haspopup": true, "aria-controls": (T2 = e.itemsRef.current) == null ? void 0 : T2.id, "aria-expanded": i2.disabled ? void 0 : e.menuState === 0, onKeyDown: l2, onKeyUp: p2, onClick: g2 };
  return A({ ourProps: R2, theirProps: M2, slot: f2, defaultTag: pe, name: "Menu.Button" });
}), me$1 = "div", fe = b$1.RenderStrategy | b$1.Static, Te$1 = H(function(i2, a$12) {
  var b2, O2;
  let [e, r2] = C$1("Menu.Items"), u2 = T$2(e.itemsRef, a$12), s2 = n$1(e.itemsRef), o2 = `headlessui-menu-items-${I()}`, l2 = p$5(), p2 = s$1(), g2 = (() => p2 !== null ? p2 === p$3.Open : e.menuState === 0)();
  react.exports.useEffect(() => {
    let n2 = e.itemsRef.current;
    !n2 || e.menuState === 0 && n2 !== (s2 == null ? void 0 : s2.activeElement) && n2.focus({ preventScroll: true });
  }, [e.menuState, e.itemsRef, s2]), F$2({ container: e.itemsRef.current, enabled: e.menuState === 0, accept(n2) {
    return n2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n2) {
    n2.setAttribute("role", "none");
  } });
  let f2 = react.exports.useCallback((n2) => {
    var m2, S2;
    switch (l2.dispose(), n2.key) {
      case o$1.Space:
        if (e.searchQuery !== "")
          return n2.preventDefault(), n2.stopPropagation(), r2({ type: 3, value: n2.key });
      case o$1.Enter:
        if (n2.preventDefault(), n2.stopPropagation(), r2({ type: 1 }), e.activeItemIndex !== null) {
          let { dataRef: A2 } = e.items[e.activeItemIndex];
          (S2 = (m2 = A2.current) == null ? void 0 : m2.domRef.current) == null || S2.click();
        }
        o$2().nextFrame(() => {
          var A2;
          return (A2 = e.buttonRef.current) == null ? void 0 : A2.focus({ preventScroll: true });
        });
        break;
      case o$1.ArrowDown:
        return n2.preventDefault(), n2.stopPropagation(), r2({ type: 2, focus: a.Next });
      case o$1.ArrowUp:
        return n2.preventDefault(), n2.stopPropagation(), r2({ type: 2, focus: a.Previous });
      case o$1.Home:
      case o$1.PageUp:
        return n2.preventDefault(), n2.stopPropagation(), r2({ type: 2, focus: a.First });
      case o$1.End:
      case o$1.PageDown:
        return n2.preventDefault(), n2.stopPropagation(), r2({ type: 2, focus: a.Last });
      case o$1.Escape:
        n2.preventDefault(), n2.stopPropagation(), r2({ type: 1 }), o$2().nextFrame(() => {
          var A2;
          return (A2 = e.buttonRef.current) == null ? void 0 : A2.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        n2.preventDefault(), n2.stopPropagation();
        break;
      default:
        n2.key.length === 1 && (r2({ type: 3, value: n2.key }), l2.setTimeout(() => r2({ type: 4 }), 350));
        break;
    }
  }, [r2, l2, e, s2]), M2 = react.exports.useCallback((n2) => {
    switch (n2.key) {
      case o$1.Space:
        n2.preventDefault();
        break;
    }
  }, []), R2 = react.exports.useMemo(() => ({ open: e.menuState === 0 }), [e]), T2 = i2, c2 = { "aria-activedescendant": e.activeItemIndex === null || (b2 = e.items[e.activeItemIndex]) == null ? void 0 : b2.id, "aria-labelledby": (O2 = e.buttonRef.current) == null ? void 0 : O2.id, id: o2, onKeyDown: f2, onKeyUp: M2, role: "menu", tabIndex: 0, ref: u2 };
  return A({ ourProps: c2, theirProps: T2, slot: R2, defaultTag: me$1, features: fe, visible: g2, name: "Menu.Items" });
}), Ie$1 = react.exports.Fragment, ye$1 = H(function(i2, a$12) {
  let _a = i2, { disabled: e = false } = _a, r2 = __objRest(_a, ["disabled"]), [u2, s2] = C$1("Menu.Item"), o2 = `headlessui-menu-item-${I()}`, l2 = u2.activeItemIndex !== null ? u2.items[u2.activeItemIndex].id === o2 : false, p2 = react.exports.useRef(null), g2 = T$2(a$12, p2);
  t$2(() => {
    if (u2.menuState !== 0 || !l2 || u2.activationTrigger === 0)
      return;
    let n2 = o$2();
    return n2.requestAnimationFrame(() => {
      var m2, S2;
      (S2 = (m2 = p2.current) == null ? void 0 : m2.scrollIntoView) == null || S2.call(m2, { block: "nearest" });
    }), n2.dispose;
  }, [p2, l2, u2.menuState, u2.activationTrigger, u2.activeItemIndex]);
  let f2 = react.exports.useRef({ disabled: e, domRef: p2 });
  t$2(() => {
    f2.current.disabled = e;
  }, [f2, e]), t$2(() => {
    var n2, m2;
    f2.current.textValue = (m2 = (n2 = p2.current) == null ? void 0 : n2.textContent) == null ? void 0 : m2.toLowerCase();
  }, [f2, p2]), t$2(() => (s2({ type: 5, id: o2, dataRef: f2 }), () => s2({ type: 6, id: o2 })), [f2, o2]);
  let M2 = react.exports.useCallback((n2) => {
    if (e)
      return n2.preventDefault();
    s2({ type: 1 }), o$2().nextFrame(() => {
      var m2;
      return (m2 = u2.buttonRef.current) == null ? void 0 : m2.focus({ preventScroll: true });
    });
  }, [s2, u2.buttonRef, e]), R2 = react.exports.useCallback(() => {
    if (e)
      return s2({ type: 2, focus: a.Nothing });
    s2({ type: 2, focus: a.Specific, id: o2 });
  }, [e, o2, s2]), T2 = react.exports.useCallback(() => {
    e || l2 || s2({ type: 2, focus: a.Specific, id: o2, trigger: 0 });
  }, [e, l2, o2, s2]), c2 = react.exports.useCallback(() => {
    e || !l2 || s2({ type: 2, focus: a.Nothing });
  }, [e, l2, s2]), b2 = react.exports.useMemo(() => ({ active: l2, disabled: e }), [l2, e]);
  return A({ ourProps: { id: o2, ref: g2, role: "menuitem", tabIndex: e === true ? void 0 : -1, "aria-disabled": e === true ? true : void 0, disabled: void 0, onClick: M2, onFocus: R2, onPointerMove: T2, onMouseMove: T2, onPointerLeave: c2, onMouseLeave: c2 }, theirProps: r2, slot: b2, defaultTag: Ie$1, name: "Menu.Item" });
}), Qe = Object.assign(ce$1, { Button: de$1, Items: Te$1, Item: ye$1 });
var ve$1 = ((f2) => (f2[f2.Open = 0] = "Open", f2[f2.Closed = 1] = "Closed", f2))(ve$1 || {}), ce = ((l2) => (l2[l2.TogglePopover = 0] = "TogglePopover", l2[l2.ClosePopover = 1] = "ClosePopover", l2[l2.SetButton = 2] = "SetButton", l2[l2.SetButtonId = 3] = "SetButtonId", l2[l2.SetPanel = 4] = "SetPanel", l2[l2.SetPanelId = 5] = "SetPanelId", l2))(ce || {});
let de = { [0]: (a2) => __spreadProps(__spreadValues({}, a2), { popoverState: u(a2.popoverState, { [0]: 1, [1]: 0 }) }), [1](a2) {
  return a2.popoverState === 1 ? a2 : __spreadProps(__spreadValues({}, a2), { popoverState: 1 });
}, [2](a2, o2) {
  return a2.button === o2.button ? a2 : __spreadProps(__spreadValues({}, a2), { button: o2.button });
}, [3](a2, o2) {
  return a2.buttonId === o2.buttonId ? a2 : __spreadProps(__spreadValues({}, a2), { buttonId: o2.buttonId });
}, [4](a2, o2) {
  return a2.panel === o2.panel ? a2 : __spreadProps(__spreadValues({}, a2), { panel: o2.panel });
}, [5](a2, o2) {
  return a2.panelId === o2.panelId ? a2 : __spreadProps(__spreadValues({}, a2), { panelId: o2.panelId });
} }, z = react.exports.createContext(null);
z.displayName = "PopoverContext";
function N$1(a2) {
  let o2 = react.exports.useContext(z);
  if (o2 === null) {
    let f2 = new Error(`<${a2} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f2, N$1), f2;
  }
  return o2;
}
let J = react.exports.createContext(null);
J.displayName = "PopoverAPIContext";
function oe(a2) {
  let o2 = react.exports.useContext(J);
  if (o2 === null) {
    let f2 = new Error(`<${a2} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f2, oe), f2;
  }
  return o2;
}
let Q = react.exports.createContext(null);
Q.displayName = "PopoverGroupContext";
function re() {
  return react.exports.useContext(Q);
}
let X$1 = react.exports.createContext(null);
X$1.displayName = "PopoverPanelContext";
function ye() {
  return react.exports.useContext(X$1);
}
function Te(a2, o2) {
  return u(o2.type, de, a2, o2);
}
let Ee$1 = "div", Se$1 = H(function(o2, f2) {
  let e = `headlessui-popover-button-${I()}`, P2 = `headlessui-popover-panel-${I()}`, n2 = react.exports.useRef(null), l2 = T$2(f2, n2), i2 = n$1(n2), s2 = react.exports.useReducer(Te, { popoverState: 1, button: null, buttonId: e, panel: null, panelId: P2 }), [{ popoverState: v2, button: t2, panel: E$12 }, u$12] = s2;
  react.exports.useEffect(() => u$12({ type: 3, buttonId: e }), [e, u$12]), react.exports.useEffect(() => u$12({ type: 5, panelId: P2 }), [P2, u$12]);
  let S2 = react.exports.useMemo(() => ({ buttonId: e, panelId: P2, close: () => u$12({ type: 1 }) }), [e, P2, u$12]), c2 = re(), d = c2 == null ? void 0 : c2.registerPopover, p2 = react.exports.useCallback(() => {
    var r2;
    return (r2 = c2 == null ? void 0 : c2.isFocusWithinPopoverGroup()) != null ? r2 : (i2 == null ? void 0 : i2.activeElement) && ((t2 == null ? void 0 : t2.contains(i2.activeElement)) || (E$12 == null ? void 0 : E$12.contains(i2.activeElement)));
  }, [c2, t2, E$12]);
  react.exports.useEffect(() => d == null ? void 0 : d(S2), [d, S2]), E(i2 == null ? void 0 : i2.defaultView, "focus", () => {
    v2 === 0 && (p2() || !t2 || !E$12 || u$12({ type: 1 }));
  }, true), w$1([t2, E$12], (r2, T2) => {
    v2 === 0 && (u$12({ type: 1 }), O(T2, T$1.Loose) || (r2.preventDefault(), t2 == null || t2.focus()));
  });
  let y2 = react.exports.useCallback((r2) => {
    u$12({ type: 1 });
    let T2 = (() => r2 ? r2 instanceof HTMLElement ? r2 : r2.current instanceof HTMLElement ? r2.current : t2 : t2)();
    T2 == null || T2.focus();
  }, [u$12, t2]), b2 = react.exports.useMemo(() => ({ close: y2 }), [y2]), g2 = react.exports.useMemo(() => ({ open: v2 === 0, close: y2 }), [v2, y2]), C2 = o2, h2 = { ref: l2 };
  return React.createElement(z.Provider, { value: s2 }, React.createElement(J.Provider, { value: b2 }, React.createElement(C$2, { value: u(v2, { [0]: p$3.Open, [1]: p$3.Closed }) }, A({ ourProps: h2, theirProps: C2, slot: g2, defaultTag: Ee$1, name: "Popover" }))));
}), be$1 = "button", me = H(function(o2, f2) {
  let [e, P2] = N$1("Popover.Button"), n2 = react.exports.useRef(null), l2 = re(), i2 = l2 == null ? void 0 : l2.closeOthers, s$12 = ye(), v2 = s$12 === null ? false : s$12 === e.panelId, t2 = T$2(n2, f2, v2 ? null : (r2) => P2({ type: 2, button: r2 })), E$22 = T$2(n2, f2), u2 = n$1(n2), S2 = react.exports.useRef(null), c2 = react.exports.useRef(null);
  E(u2 == null ? void 0 : u2.defaultView, "focus", () => {
    c2.current = S2.current, S2.current = u2 == null ? void 0 : u2.activeElement;
  }, true);
  let d = react.exports.useCallback((r2) => {
    var T2, R2, k2, V2;
    if (v2) {
      if (e.popoverState === 1)
        return;
      switch (r2.key) {
        case o$1.Space:
        case o$1.Enter:
          r2.preventDefault(), (R2 = (T2 = r2.target).click) == null || R2.call(T2), P2({ type: 1 }), (k2 = e.button) == null || k2.focus();
          break;
      }
    } else
      switch (r2.key) {
        case o$1.Space:
        case o$1.Enter:
          r2.preventDefault(), r2.stopPropagation(), e.popoverState === 1 && (i2 == null || i2(e.buttonId)), P2({ type: 0 });
          break;
        case o$1.Escape:
          if (e.popoverState !== 0)
            return i2 == null ? void 0 : i2(e.buttonId);
          if (!n2.current || (u2 == null ? void 0 : u2.activeElement) && !n2.current.contains(u2.activeElement))
            return;
          r2.preventDefault(), r2.stopPropagation(), P2({ type: 1 });
          break;
        case o$1.Tab:
          if (e.popoverState !== 0 || !e.panel || !e.button)
            return;
          if (r2.shiftKey) {
            if (!c2.current || (V2 = e.button) != null && V2.contains(c2.current) || e.panel.contains(c2.current))
              return;
            let Z2 = N$2(u2 == null ? void 0 : u2.body), ne2 = Z2.indexOf(c2.current);
            if (Z2.indexOf(e.button) > ne2)
              return;
            r2.preventDefault(), r2.stopPropagation(), F$1(e.panel, E$1.Last);
          } else
            r2.preventDefault(), r2.stopPropagation(), F$1(e.panel, E$1.First);
          break;
      }
  }, [P2, e.popoverState, e.buttonId, e.button, e.panel, n2, i2, v2]), p2 = react.exports.useCallback((r2) => {
    var T2;
    if (!v2 && (r2.key === o$1.Space && r2.preventDefault(), e.popoverState === 0 && !!e.panel && !!e.button))
      switch (r2.key) {
        case o$1.Tab:
          if (!c2.current || (T2 = e.button) != null && T2.contains(c2.current) || e.panel.contains(c2.current))
            return;
          let R2 = N$2(u2 == null ? void 0 : u2.body), k2 = R2.indexOf(c2.current);
          if (R2.indexOf(e.button) > k2)
            return;
          r2.preventDefault(), r2.stopPropagation(), F$1(e.panel, E$1.Last);
          break;
      }
  }, [e.popoverState, e.panel, e.button, v2]), y2 = react.exports.useCallback((r$12) => {
    var T2, R2;
    r(r$12.currentTarget) || o2.disabled || (v2 ? (P2({ type: 1 }), (T2 = e.button) == null || T2.focus()) : (r$12.preventDefault(), r$12.stopPropagation(), e.popoverState === 1 && (i2 == null || i2(e.buttonId)), (R2 = e.button) == null || R2.focus(), P2({ type: 0 })));
  }, [P2, e.button, e.popoverState, e.buttonId, o2.disabled, i2, v2]), b2 = react.exports.useMemo(() => ({ open: e.popoverState === 0 }), [e]), g2 = s(o2, n2), C2 = o2, h2 = v2 ? { ref: E$22, type: g2, onKeyDown: d, onClick: y2 } : { ref: t2, id: e.buttonId, type: g2, "aria-expanded": o2.disabled ? void 0 : e.popoverState === 0, "aria-controls": e.panel ? e.panelId : void 0, onKeyDown: d, onKeyUp: p2, onClick: y2 };
  return A({ ourProps: h2, theirProps: C2, slot: b2, defaultTag: be$1, name: "Popover.Button" });
}), ge$1 = "div", Ae = b$1.RenderStrategy | b$1.Static, Ce$1 = H(function(o2, f2) {
  let [{ popoverState: e }, P2] = N$1("Popover.Overlay"), n2 = T$2(f2), l2 = `headlessui-popover-overlay-${I()}`, i2 = s$1(), s2 = (() => i2 !== null ? i2 === p$3.Open : e === 0)(), v2 = react.exports.useCallback((S2) => {
    if (r(S2.currentTarget))
      return S2.preventDefault();
    P2({ type: 1 });
  }, [P2]), t2 = react.exports.useMemo(() => ({ open: e === 0 }), [e]);
  return A({ ourProps: { ref: n2, id: l2, "aria-hidden": true, onClick: v2 }, theirProps: o2, slot: t2, defaultTag: ge$1, features: Ae, visible: s2, name: "Popover.Overlay" });
}), Re = "div", Oe = b$1.RenderStrategy | b$1.Static, Ie = H(function(o2, f2) {
  let _a = o2, { focus: e = false } = _a, P2 = __objRest(_a, ["focus"]), [n2, l2] = N$1("Popover.Panel"), { close: i2 } = oe("Popover.Panel"), s2 = react.exports.useRef(null), v2 = T$2(s2, f2, (p2) => {
    l2({ type: 4, panel: p2 });
  }), t2 = n$1(s2), E$22 = s$1(), u2 = (() => E$22 !== null ? E$22 === p$3.Open : n2.popoverState === 0)(), S2 = react.exports.useCallback((p2) => {
    var y2;
    switch (p2.key) {
      case o$1.Escape:
        if (n2.popoverState !== 0 || !s2.current || (t2 == null ? void 0 : t2.activeElement) && !s2.current.contains(t2.activeElement))
          return;
        p2.preventDefault(), p2.stopPropagation(), l2({ type: 1 }), (y2 = n2.button) == null || y2.focus();
        break;
    }
  }, [n2, s2, l2]);
  react.exports.useEffect(() => () => l2({ type: 4, panel: null }), [l2]), react.exports.useEffect(() => {
    var p2;
    o2.static || n2.popoverState === 1 && ((p2 = o2.unmount) != null ? p2 : true) && l2({ type: 4, panel: null });
  }, [n2.popoverState, o2.unmount, o2.static, l2]), react.exports.useEffect(() => {
    if (!e || n2.popoverState !== 0 || !s2.current)
      return;
    let p2 = t2 == null ? void 0 : t2.activeElement;
    s2.current.contains(p2) || F$1(s2.current, E$1.First);
  }, [e, s2, n2.popoverState]), E(t2 == null ? void 0 : t2.defaultView, "keydown", (p2) => {
    var b2;
    if (n2.popoverState !== 0 || !s2.current || p2.key !== o$1.Tab || !(t2 != null && t2.activeElement) || !s2.current || !s2.current.contains(t2.activeElement))
      return;
    p2.preventDefault();
    let y2 = F$1(s2.current, p2.shiftKey ? E$1.Previous : E$1.Next);
    if (y2 === p$2.Underflow)
      return (b2 = n2.button) == null ? void 0 : b2.focus();
    if (y2 === p$2.Overflow) {
      if (!n2.button)
        return;
      let g2 = N$2(t2.body), C2 = g2.indexOf(n2.button), h2 = g2.splice(C2 + 1).filter((r2) => {
        var T2;
        return !((T2 = s2.current) != null && T2.contains(r2));
      });
      F$1(h2, E$1.First) === p$2.Error && F$1(t2.body, E$1.First);
    }
  }), E(t2 == null ? void 0 : t2.defaultView, "focus", () => {
    var p2;
    !e || n2.popoverState === 0 && (!s2.current || (t2 == null ? void 0 : t2.activeElement) && ((p2 = s2.current) == null ? void 0 : p2.contains(t2.activeElement)) || l2({ type: 1 }));
  }, true);
  let c2 = react.exports.useMemo(() => ({ open: n2.popoverState === 0, close: i2 }), [n2, i2]), d = { ref: v2, id: n2.panelId, onKeyDown: S2 };
  return React.createElement(X$1.Provider, { value: n2.panelId }, A({ ourProps: d, theirProps: P2, slot: c2, defaultTag: Re, features: Oe, visible: u2, name: "Popover.Panel" }));
}), Le = "div", xe$1 = H(function(o2, f2) {
  let e = react.exports.useRef(null), P2 = T$2(e, f2), [n2, l2] = react.exports.useState([]), i2 = react.exports.useCallback((d) => {
    l2((p2) => {
      let y2 = p2.indexOf(d);
      if (y2 !== -1) {
        let b2 = p2.slice();
        return b2.splice(y2, 1), b2;
      }
      return p2;
    });
  }, [l2]), s2 = react.exports.useCallback((d) => (l2((p2) => [...p2, d]), () => i2(d)), [l2, i2]), v2 = react.exports.useCallback(() => {
    var y2;
    let d = t(e);
    if (!d)
      return false;
    let p2 = d.activeElement;
    return (y2 = e.current) != null && y2.contains(p2) ? true : n2.some((b2) => {
      var g2, C2;
      return ((g2 = d.getElementById(b2.buttonId)) == null ? void 0 : g2.contains(p2)) || ((C2 = d.getElementById(b2.panelId)) == null ? void 0 : C2.contains(p2));
    });
  }, [e, n2]), t$12 = react.exports.useCallback((d) => {
    for (let p2 of n2)
      p2.buttonId !== d && p2.close();
  }, [n2]), E2 = react.exports.useMemo(() => ({ registerPopover: s2, unregisterPopover: i2, isFocusWithinPopoverGroup: v2, closeOthers: t$12 }), [s2, i2, v2, t$12]), u2 = react.exports.useMemo(() => ({}), []), S2 = o2, c2 = { ref: P2 };
  return React.createElement(Q.Provider, { value: E2 }, A({ ourProps: c2, theirProps: S2, slot: u2, defaultTag: Le, name: "Popover.Group" }));
}), tt = Object.assign(Se$1, { Button: me, Overlay: Ce$1, Panel: Ie, Group: xe$1 });
function l$1(r2) {
  let e = { called: false };
  return (...t2) => {
    if (!e.called)
      return e.called = true, r2(...t2);
  };
}
function p$1(t2, ...e) {
  t2 && e.length > 0 && t2.classList.add(...e);
}
function v(t2, ...e) {
  t2 && e.length > 0 && t2.classList.remove(...e);
}
var g = ((n2) => (n2.Ended = "ended", n2.Cancelled = "cancelled", n2))(g || {});
function T(t2, e) {
  let n2 = o$2();
  if (!t2)
    return n2.dispose;
  let { transitionDuration: l2, transitionDelay: a2 } = getComputedStyle(t2), [d, s2] = [l2, a2].map((i2) => {
    let [r2 = 0] = i2.split(",").filter(Boolean).map((o2) => o2.includes("ms") ? parseFloat(o2) : parseFloat(o2) * 1e3).sort((o2, E2) => E2 - o2);
    return r2;
  });
  if (d + s2 !== 0) {
    let i2 = [];
    i2.push(n2.addEventListener(t2, "transitionrun", () => {
      i2.splice(0).forEach((r2) => r2()), i2.push(n2.addEventListener(t2, "transitionend", () => {
        e("ended"), i2.splice(0).forEach((r2) => r2());
      }, { once: true }), n2.addEventListener(t2, "transitioncancel", () => {
        e("cancelled"), i2.splice(0).forEach((r2) => r2());
      }, { once: true }));
    }, { once: true }));
  } else
    e("ended");
  return n2.add(() => e("cancelled")), n2.dispose;
}
function C(t2, e, n2, l2) {
  let a2 = n2 ? "enter" : "leave", d = o$2(), s2 = l2 !== void 0 ? l$1(l2) : () => {
  }, m2 = u(a2, { enter: () => e.enter, leave: () => e.leave }), i2 = u(a2, { enter: () => e.enterTo, leave: () => e.leaveTo }), r2 = u(a2, { enter: () => e.enterFrom, leave: () => e.leaveFrom });
  return v(t2, ...e.enter, ...e.enterTo, ...e.enterFrom, ...e.leave, ...e.leaveFrom, ...e.leaveTo, ...e.entered), p$1(t2, ...m2, ...r2), d.nextFrame(() => {
    v(t2, ...r2), p$1(t2, ...i2), T(t2, (o2) => (o2 === "ended" && (v(t2, ...m2), p$1(t2, ...e.entered)), s2(o2)));
  }), d.dispose;
}
function x({ container: u$12, direction: o2, classes: c2, events: t2, onStart: d, onStop: l2 }) {
  let f2 = f$1(), m2 = p$5(), e = s$3(o2), b2 = s$3(() => u(e.current, { enter: () => t2.current.beforeEnter(), leave: () => t2.current.beforeLeave(), idle: () => {
  } })), p2 = s$3(() => u(e.current, { enter: () => t2.current.afterEnter(), leave: () => t2.current.afterLeave(), idle: () => {
  } }));
  t$2(() => {
    let r2 = o$2();
    m2.add(r2.dispose);
    let s2 = u$12.current;
    if (!!s2 && e.current !== "idle" && !!f2.current)
      return r2.dispose(), b2.current(), d.current(e.current), r2.add(C(s2, c2.current, e.current === "enter", (v2) => {
        r2.dispose(), u(v2, { [g.Ended]() {
          p2.current(), l2.current(e.current);
        }, [g.Cancelled]: () => {
        } });
      })), r2.dispose;
  }, [o2]);
}
function c(e = "") {
  return e.split(" ").filter((r2) => r2.trim().length > 1);
}
let N = react.exports.createContext(null);
N.displayName = "TransitionContext";
var he = ((t2) => (t2.Visible = "visible", t2.Hidden = "hidden", t2))(he || {});
function ge() {
  let e = react.exports.useContext(N);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function ve() {
  let e = react.exports.useContext(R);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let R = react.exports.createContext(null);
R.displayName = "NestingContext";
function F(e) {
  return "children" in e ? F(e.children) : e.current.filter(({ state: r2 }) => r2 === "visible").length > 0;
}
function X(e) {
  let r2 = s$3(e), t2 = react.exports.useRef([]), n2 = f$1(), u$12 = s$3((s2, o2 = x$2.Hidden) => {
    let i2 = t2.current.findIndex(({ id: d }) => d === s2);
    i2 !== -1 && (u(o2, { [x$2.Unmount]() {
      t2.current.splice(i2, 1);
    }, [x$2.Hidden]() {
      t2.current[i2].state = "hidden";
    } }), t$1(() => {
      var d;
      !F(t2) && n2.current && ((d = r2.current) == null || d.call(r2));
    }));
  }), m2 = s$3((s2) => {
    let o2 = t2.current.find(({ id: i2 }) => i2 === s2);
    return o2 ? o2.state !== "visible" && (o2.state = "visible") : t2.current.push({ id: s2, state: "visible" }), () => u$12.current(s2, x$2.Unmount);
  });
  return react.exports.useMemo(() => ({ children: t2, register: m2, unregister: u$12 }), [m2, u$12, t2]);
}
function Ce() {
}
let be = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Y(e) {
  var t2;
  let r2 = {};
  for (let n2 of be)
    r2[n2] = (t2 = e[n2]) != null ? t2 : Ce;
  return r2;
}
function Se(e) {
  let r2 = react.exports.useRef(Y(e));
  return react.exports.useEffect(() => {
    r2.current = Y(e);
  }, [e]), r2;
}
let xe = "div", Z = b$1.RenderStrategy, $ = H(function(r2, t2) {
  let _a = r2, { beforeEnter: n2, afterEnter: u$12, beforeLeave: m2, afterLeave: s2, enter: o2, enterFrom: i2, enterTo: d, entered: S2, leave: x$12, leaveFrom: E2, leaveTo: L2 } = _a, p2 = __objRest(_a, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]), h2 = react.exports.useRef(null), y2 = T$2(h2, t2), [f2, A$12] = react.exports.useState("visible"), D2 = p2.unmount ? x$2.Unmount : x$2.Hidden, { show: g2, appear: ee2, initial: te2 } = ge(), { register: P2, unregister: H2 } = ve(), O2 = react.exports.useRef(null), a2 = I(), re2 = react.exports.useRef(false), k2 = X(() => {
    re2.current || (A$12("hidden"), H2.current(a2));
  });
  react.exports.useEffect(() => {
    if (!!a2)
      return P2.current(a2);
  }, [P2, a2]), react.exports.useEffect(() => {
    if (D2 === x$2.Hidden && !!a2) {
      if (g2 && f2 !== "visible") {
        A$12("visible");
        return;
      }
      u(f2, { ["hidden"]: () => H2.current(a2), ["visible"]: () => P2.current(a2) });
    }
  }, [f2, a2, P2, H2, g2, D2]);
  let ne2 = s$3({ enter: c(o2), enterFrom: c(i2), enterTo: c(d), entered: c(S2), leave: c(x$12), leaveFrom: c(E2), leaveTo: c(L2) }), ie2 = Se({ beforeEnter: n2, afterEnter: u$12, beforeLeave: m2, afterLeave: s2 }), w2 = a$1();
  react.exports.useEffect(() => {
    if (w2 && f2 === "visible" && h2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [h2, f2, w2]);
  let M2 = te2 && !ee2, se2 = (() => !w2 || M2 || O2.current === g2 ? "idle" : g2 ? "enter" : "leave")();
  x({ container: h2, classes: ne2, events: ie2, direction: se2, onStart: s$3(() => {
  }), onStop: s$3((le2) => {
    le2 === "leave" && !F(k2) && (A$12("hidden"), H2.current(a2));
  }) }), react.exports.useEffect(() => {
    !M2 || (D2 === x$2.Hidden ? O2.current = null : O2.current = g2);
  }, [g2, M2, f2]);
  let oe2 = p2, ae2 = { ref: y2 };
  return React.createElement(R.Provider, { value: k2 }, React.createElement(C$2, { value: u(f2, { ["visible"]: p$3.Open, ["hidden"]: p$3.Closed }) }, A({ ourProps: ae2, theirProps: oe2, defaultTag: xe, features: Z, visible: f2 === "visible", name: "Transition.Child" })));
}), j = H(function(r2, t2) {
  let _a = r2, { show: n2, appear: u$12 = false, unmount: m2 } = _a, s2 = __objRest(_a, ["show", "appear", "unmount"]), o2 = T$2(t2);
  a$1();
  let i2 = s$1();
  if (n2 === void 0 && i2 !== null && (n2 = u(i2, { [p$3.Open]: true, [p$3.Closed]: false })), ![true, false].includes(n2))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [d, S2] = react.exports.useState(n2 ? "visible" : "hidden"), x2 = X(() => {
    S2("hidden");
  }), [E2, L2] = react.exports.useState(true), p2 = react.exports.useRef([n2]);
  t$2(() => {
    E2 !== false && p2.current[p2.current.length - 1] !== n2 && (p2.current.push(n2), L2(false));
  }, [p2, n2]);
  let h2 = react.exports.useMemo(() => ({ show: n2, appear: u$12, initial: E2 }), [n2, u$12, E2]);
  react.exports.useEffect(() => {
    n2 ? S2("visible") : F(x2) || S2("hidden");
  }, [n2, x2]);
  let y2 = { unmount: m2 };
  return React.createElement(R.Provider, { value: x2 }, React.createElement(N.Provider, { value: h2 }, A({ ourProps: __spreadProps(__spreadValues({}, y2), { as: react.exports.Fragment, children: React.createElement($, __spreadValues(__spreadValues({ ref: o2 }, y2), s2)) }), theirProps: {}, defaultTag: react.exports.Fragment, features: Z, visible: d === "visible", name: "Transition" })));
});
function Ee(e) {
  let r2 = react.exports.useContext(N) !== null, t2 = s$1() !== null;
  return React.createElement(React.Fragment, null, !r2 && t2 ? React.createElement(j, __spreadValues({}, e)) : React.createElement($, __spreadValues({}, e)));
}
let Ge = Object.assign(j, { Child: Ee, Root: j });
function ChevronDownIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$c = react.exports.forwardRef(ChevronDownIcon);
var ChevronDownIcon$1 = ForwardRef$c;
function DotsVerticalIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
  }));
}
const ForwardRef$b = react.exports.forwardRef(DotsVerticalIcon);
var DotsVerticalIcon$1 = ForwardRef$b;
function ChartBarIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  }));
}
const ForwardRef$a = react.exports.forwardRef(ChartBarIcon);
var ChartBarIcon$1 = ForwardRef$a;
function CursorClickIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
  }));
}
const ForwardRef$9 = react.exports.forwardRef(CursorClickIcon);
var CursorClickIcon$1 = ForwardRef$9;
function DocumentReportIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}
const ForwardRef$8 = react.exports.forwardRef(DocumentReportIcon);
var DocumentReportIcon$1 = ForwardRef$8;
function IdentificationIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
  }));
}
const ForwardRef$7 = react.exports.forwardRef(IdentificationIcon);
var IdentificationIcon$1 = ForwardRef$7;
function MenuIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 6h16M4 12h16M4 18h16"
  }));
}
const ForwardRef$6 = react.exports.forwardRef(MenuIcon);
var MenuIcon$1 = ForwardRef$6;
function RefreshIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  }));
}
const ForwardRef$5 = react.exports.forwardRef(RefreshIcon);
var RefreshIcon$1 = ForwardRef$5;
function ShieldCheckIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }));
}
const ForwardRef$4 = react.exports.forwardRef(ShieldCheckIcon);
var ShieldCheckIcon$1 = ForwardRef$4;
function SpeakerphoneIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
  }));
}
const ForwardRef$3 = react.exports.forwardRef(SpeakerphoneIcon);
var SpeakerphoneIcon$1 = ForwardRef$3;
function UserAddIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
  }));
}
const ForwardRef$2 = react.exports.forwardRef(UserAddIcon);
var UserAddIcon$1 = ForwardRef$2;
function ViewGridIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  }));
}
const ForwardRef$1 = react.exports.forwardRef(ViewGridIcon);
var ViewGridIcon$1 = ForwardRef$1;
function XIcon(props, svgRef) {
  return /* @__PURE__ */ react.exports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
const ForwardRef = react.exports.forwardRef(XIcon);
var XIcon$1 = ForwardRef;
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = react.exports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c2, a2, g2) {
  var b2, d = {}, e = null, h2 = null;
  g2 !== void 0 && (e = "" + g2);
  a2.key !== void 0 && (e = "" + a2.key);
  a2.ref !== void 0 && (h2 = a2.ref);
  for (b2 in a2)
    m.call(a2, b2) && !p.hasOwnProperty(b2) && (d[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      d[b2] === void 0 && (d[b2] = a2[b2]);
  return { $$typeof: k, type: c2, key: e, ref: h2, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
const solutions = [{
  name: "Bicicleta",
  description: "Get a better understanding of where your traffic is coming from.",
  href: "#",
  icon: ChartBarIcon$1,
  disabled: false
}, {
  name: "Moto",
  description: "Speak directly to your customers in a more meaningful way.",
  href: "#",
  icon: CursorClickIcon$1,
  disabled: true
}, {
  name: "Carro",
  description: "Your customers' data will be safe and secure.",
  href: "#",
  icon: ShieldCheckIcon$1,
  disabled: true
}, {
  name: "Van",
  description: "Connect with third-party tools that you're already using.",
  href: "#",
  icon: ViewGridIcon$1,
  disabled: true
}, {
  name: "Caminh\xE3o",
  description: "Build strategic funnels that will drive your customers to convert",
  href: "#",
  icon: RefreshIcon$1,
  disabled: true
}, {
  name: "Carreta",
  description: "Get detailed reports that will help you make more informed decisions ",
  href: "#",
  icon: DocumentReportIcon$1,
  disabled: true
}];
const resources = [{
  name: "Help Center",
  description: "Obtenha todas as suas perguntas respondidas em nossos f\xF3runs ou entre em contato com o suporte.",
  href: "#"
}, {
  name: "Quem somos?",
  description: "Obtenha todas as informa\xE7\xF5es sobre a Transporte F\xE1cil",
  href: "#"
}, {
  name: "Como funciona",
  description: "Entenda como essa empresa entrega seu produto de forma eficiente.",
  href: "#"
}, {
  name: "Seguran\xE7a",
  description: "Entenda como levamos sua privacidade a s\xE9rio.",
  href: "security"
}];
class ElementNavbar extends React.Component {
  render() {
    return /* @__PURE__ */ jsxs(tt, {
      className: "relative bg-white select-none",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10",
        children: [/* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsxs("a", {
            href: "/",
            className: "flex",
            children: [/* @__PURE__ */ jsx("span", {
              className: "sr-only",
              children: "Workflow"
            }), /* @__PURE__ */ jsx("img", {
              className: "h-8 w-auto sm:h-10",
              src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
              alt: ""
            })]
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "-mr-2 -my-2 md:hidden ",
          children: /* @__PURE__ */ jsxs(tt.Button, {
            className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",
            children: [/* @__PURE__ */ jsx("span", {
              className: "sr-only",
              children: "Abrir menu"
            }), /* @__PURE__ */ jsx(MenuIcon$1, {
              className: "h-6 w-6",
              "aria-hidden": "true"
            })]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "hidden md:flex-1 md:flex md:items-center md:justify-between",
          children: [/* @__PURE__ */ jsxs(tt.Group, {
            as: "nav",
            className: "flex space-x-10",
            children: [/* @__PURE__ */ jsx(tt, {
              className: "relative",
              children: ({
                open
              }) => /* @__PURE__ */ jsxs(Fragment, {
                children: [/* @__PURE__ */ jsxs(tt.Button, {
                  className: classNames(open ? "text-gray-900" : "text-gray-500", "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"),
                  children: [/* @__PURE__ */ jsx("span", {
                    children: "Servi\xE7os"
                  }), /* @__PURE__ */ jsx(ChevronDownIcon$1, {
                    className: classNames(open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"),
                    "aria-hidden": "true"
                  })]
                }), /* @__PURE__ */ jsx(Ge, {
                  as: react.exports.Fragment,
                  enter: "transition ease-out duration-200",
                  enterFrom: "opacity-0 translate-y-1",
                  enterTo: "opacity-100 translate-y-0",
                  leave: "transition ease-in duration-150",
                  leaveFrom: "opacity-100 translate-y-0",
                  leaveTo: "opacity-0 translate-y-1",
                  children: /* @__PURE__ */ jsx(tt.Panel, {
                    className: "absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl",
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",
                      children: [/* @__PURE__ */ jsx("div", {
                        className: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2",
                        children: solutions.map((item) => /* @__PURE__ */ jsxs("a", {
                          href: !item.disabled ? item.href : "",
                          className: classNames(item.disabled ? "cursor-not-allowed" : "hover:bg-gray-50", "-m-3 p-3 flex items-start rounded-lg"),
                          children: [/* @__PURE__ */ jsx("div", {
                            className: classNames(item.disabled ? "bg-sky-900" : "bg-sky-500", "flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white sm:h-12 sm:w-12"),
                            children: /* @__PURE__ */ jsx(item.icon, {
                              className: "h-6 w-6",
                              "aria-hidden": "true"
                            })
                          }), /* @__PURE__ */ jsxs("div", {
                            className: "ml-4",
                            children: [/* @__PURE__ */ jsx("p", {
                              className: "text-base font-medium text-gray-900",
                              children: item.name
                            }), /* @__PURE__ */ jsx("p", {
                              className: "mt-1 text-sm text-gray-500",
                              children: item.description
                            })]
                          })]
                        }, item.name))
                      }), /* @__PURE__ */ jsx("div", {
                        className: "p-5 bg-gray-50 sm:p-8",
                        children: /* @__PURE__ */ jsxs("a", {
                          href: "#",
                          className: "-m-3 p-3 flow-root rounded-md hover:bg-gray-100",
                          children: [/* @__PURE__ */ jsxs("div", {
                            className: "flex items-center",
                            children: [/* @__PURE__ */ jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: "Empresas"
                            }), /* @__PURE__ */ jsx("span", {
                              className: "ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-sky-100 text-sky-800",
                              children: "Novo"
                            })]
                          }), /* @__PURE__ */ jsx("p", {
                            className: "mt-1 text-sm text-gray-500",
                            children: "Capacite toda a sua equipe com ferramentas ainda mais avan\xE7adas."
                          })]
                        })
                      })]
                    })
                  })
                })]
              })
            }), /* @__PURE__ */ jsx("a", {
              href: "#",
              className: "text-base font-medium text-gray-500 hover:text-gray-900",
              children: "Pre\xE7os"
            }), /* @__PURE__ */ jsx(tt, {
              className: "relative",
              children: ({
                open
              }) => /* @__PURE__ */ jsxs(Fragment, {
                children: [/* @__PURE__ */ jsxs(tt.Button, {
                  className: classNames(open ? "text-gray-900" : "text-gray-500", "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"),
                  children: [/* @__PURE__ */ jsx("span", {
                    children: "Suporte"
                  }), /* @__PURE__ */ jsx(ChevronDownIcon$1, {
                    className: classNames(open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"),
                    "aria-hidden": "true"
                  })]
                }), /* @__PURE__ */ jsx(Ge, {
                  as: react.exports.Fragment,
                  enter: "transition ease-out duration-200",
                  enterFrom: "opacity-0 translate-y-1",
                  enterTo: "opacity-100 translate-y-0",
                  leave: "transition ease-in duration-150",
                  leaveFrom: "opacity-100 translate-y-0",
                  leaveTo: "opacity-0 translate-y-1",
                  children: /* @__PURE__ */ jsx(tt.Panel, {
                    className: "absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0",
                    children: /* @__PURE__ */ jsx("div", {
                      className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",
                      children: /* @__PURE__ */ jsx("div", {
                        className: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8",
                        children: resources.map((item) => /* @__PURE__ */ jsxs("a", {
                          href: item.href,
                          className: "-m-3 p-3 block rounded-md hover:bg-gray-50",
                          children: [/* @__PURE__ */ jsx("p", {
                            className: "text-base font-medium text-gray-900",
                            children: item.name
                          }), /* @__PURE__ */ jsx("p", {
                            className: "mt-1 text-sm text-gray-500",
                            children: item.description
                          })]
                        }, item.name))
                      })
                    })
                  })
                })]
              })
            })]
          }), /* @__PURE__ */ jsx(LoginSystem, {
            token: "123",
            login: true
          })]
        })]
      }), /* @__PURE__ */ jsx(Ge, {
        as: react.exports.Fragment,
        enter: "duration-200 ease-out",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "duration-100 ease-in",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ jsx(tt.Panel, {
          focus: true,
          className: "z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
          children: /* @__PURE__ */ jsxs("div", {
            className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "pt-5 pb-6 px-5",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center justify-between",
                children: [/* @__PURE__ */ jsx("div", {
                  children: /* @__PURE__ */ jsx("img", {
                    className: "h-8 w-auto",
                    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
                    alt: "Workflow"
                  })
                }), /* @__PURE__ */ jsx("div", {
                  className: "-mr-2",
                  children: /* @__PURE__ */ jsxs(tt.Button, {
                    className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "sr-only",
                      children: "Fechar menu"
                    }), /* @__PURE__ */ jsx(XIcon$1, {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    })]
                  })
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-6",
                children: /* @__PURE__ */ jsx("nav", {
                  className: "grid gap-6",
                  children: solutions.map((item) => /* @__PURE__ */ jsxs("a", {
                    href: item.href,
                    className: "-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-sky-500 text-white",
                      children: /* @__PURE__ */ jsx(item.icon, {
                        className: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    }), /* @__PURE__ */ jsx("div", {
                      className: "ml-4 text-base font-medium text-gray-900",
                      children: item.name
                    })]
                  }, item.name))
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "py-6 px-5",
              children: [/* @__PURE__ */ jsx("div", {
                className: "grid grid-cols-2 gap-4",
                children: resources.map((item) => /* @__PURE__ */ jsx("a", {
                  href: item.href,
                  className: "text-base font-medium text-gray-900 hover:text-gray-700",
                  children: item.name
                }, item.name))
              }), /* @__PURE__ */ jsxs("div", {
                className: "mt-6",
                children: [/* @__PURE__ */ jsx("a", {
                  href: "#",
                  className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700",
                  children: "Cadastre-se"
                }), /* @__PURE__ */ jsxs("p", {
                  className: "mt-6 text-center text-base font-medium text-gray-500",
                  children: ["Possui conta?", " ", /* @__PURE__ */ jsx("a", {
                    href: "#",
                    className: "text-sky-600 hover:text-sky-500",
                    children: "Fazer login"
                  })]
                })]
              })]
            })]
          })
        })
      })]
    });
  }
}
function LoginSystem(props) {
  if (props.token == "123" && props.login) {
    return /* @__PURE__ */ jsx(PerfilButton, {});
  } else {
    return /* @__PURE__ */ jsx(LoginButtons, {});
  }
}
function PerfilButton(props) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("a", {
      href: "#",
      className: "flex-shrink-0 group block mx-4",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex items-center",
        children: [/* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx("img", {
            className: "inline-block h-9 w-9 rounded-full",
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            alt: ""
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "ml-3",
          children: [/* @__PURE__ */ jsx("p", {
            className: "text-sm font-medium text-gray-700 group-hover:text-gray-900",
            children: "Gustavo Sousa"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-xs font-medium text-gray-500 group-hover:text-gray-700",
            children: "Abrir painel"
          })]
        })]
      })
    }), /* @__PURE__ */ jsxs(Qe, {
      as: "div",
      className: "relative left-[10.5rem] bottom-7 inline-block text-left",
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsxs(Qe.Button, {
          className: "bg-gray-200 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-sky-500",
          children: [/* @__PURE__ */ jsx("span", {
            className: "sr-only",
            children: "Abrir op\xE7\xF5es"
          }), /* @__PURE__ */ jsx(DotsVerticalIcon$1, {
            className: "h-5 w-5",
            "aria-hidden": "true"
          })]
        })
      }), /* @__PURE__ */ jsx(Ge, {
        as: react.exports.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ jsx(Qe.Items, {
          className: "origin-top-right absolute right-0 mt-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
          children: /* @__PURE__ */ jsxs("div", {
            className: "py-1",
            children: [/* @__PURE__ */ jsx(Qe.Item, {
              children: ({
                active
              }) => /* @__PURE__ */ jsx("a", {
                href: "#",
                className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                children: "Configura\xE7\xF5es"
              })
            }), /* @__PURE__ */ jsx(Qe.Item, {
              children: ({
                active
              }) => /* @__PURE__ */ jsx("a", {
                href: "#",
                className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                children: "Empresa"
              })
            }), /* @__PURE__ */ jsx("form", {
              method: "POST",
              action: "logout",
              children: /* @__PURE__ */ jsx(Qe.Item, {
                children: ({
                  active
                }) => /* @__PURE__ */ jsx("button", {
                  type: "submit",
                  className: classNames(active ? "bg-gray-100 text-red-900" : "text-gray-700", "block w-full text-left px-4 py-2 text-sm"),
                  children: "Finalizar sess\xE3o"
                })
              })
            })]
          })
        })
      })]
    })]
  });
}
function LoginButtons(props) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex items-center md:ml-12",
      children: [/* @__PURE__ */ jsxs("a", {
        href: "login",
        className: "inline-flex items-center text-base font-medium text-gray-500 hover:text-gray-900",
        children: [/* @__PURE__ */ jsx(IdentificationIcon$1, {
          className: "-ml-1 mr-3 w-5",
          "aria-hidden": "true"
        }), " Fazer Login"]
      }), /* @__PURE__ */ jsxs("a", {
        href: "register",
        className: "ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-400 hover:bg-sky-600",
        children: [/* @__PURE__ */ jsx(UserAddIcon$1, {
          className: "-ml-1 mr-3 w-5",
          "aria-hidden": "true"
        }), " Cadastre-se"]
      })]
    })
  });
}
function NavbarComponent() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(ElementNavbar, {})
  });
}
function Header() {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-white",
    children: /* @__PURE__ */ jsx("main", {
      children: /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsxs("div", {
          className: "relative select-none",
          children: [/* @__PURE__ */ jsx("div", {
            className: "absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"
          }), /* @__PURE__ */ jsx("div", {
            className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
            children: /* @__PURE__ */ jsxs("div", {
              className: "relative shadow-xl sm:rounded-2xl sm:overflow-hidden",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "absolute inset-0",
                children: [/* @__PURE__ */ jsx("img", {
                  className: "h-full w-full object-cover",
                  src: "https://media.istockphoto.com/photos/transportation-and-technology-concept-its-mobility-as-a-service-picture-id1331571740",
                  alt: "People working on laptops"
                }), /* @__PURE__ */ jsx("div", {
                  className: "absolute inset-0 bg-sky-700 mix-blend-multiply"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8",
                children: [/* @__PURE__ */ jsxs("h1", {
                  className: "text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "block text-white",
                    children: "Assuma o controle"
                  }), /* @__PURE__ */ jsx("span", {
                    className: "block text-indigo-200",
                    children: "do seu transporte"
                  })]
                }), /* @__PURE__ */ jsx("p", {
                  className: "mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl",
                  children: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                }), /* @__PURE__ */ jsx("div", {
                  className: "mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center",
                  children: /* @__PURE__ */ jsxs("div", {
                    className: "space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5",
                    children: [/* @__PURE__ */ jsx("a", {
                      href: "#",
                      className: "transition ease-in duration-300 hover:duration-150 hover:scale-110 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md hover:shadow-lg hover:shadow-sky-500 text-sky-700 bg-white hover:bg-indigo-50 sm:px-8",
                      children: "Enviar encomenda"
                    }), /* @__PURE__ */ jsx("a", {
                      href: "track",
                      className: "transition ease-in duration-300 hover:duration-150 hover:scale-110 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8",
                      children: "Localizar encomenda"
                    })]
                  })
                })]
              })]
            })
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "bg-gray-100",
          children: /* @__PURE__ */ jsxs("div", {
            className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8",
            children: [/* @__PURE__ */ jsx("p", {
              className: "text-center text-sm font-semibold uppercase text-gray-500 tracking-wide",
              children: "CONFI\xC1VEL POR MAIS DE 5 EMPRESAS"
            }), /* @__PURE__ */ jsxs("div", {
              className: "mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5",
              children: [/* @__PURE__ */ jsx("div", {
                className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1",
                children: /* @__PURE__ */ jsx("img", {
                  className: "h-12",
                  src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
                  alt: "Tuple"
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1",
                children: /* @__PURE__ */ jsx("img", {
                  className: "h-12",
                  src: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
                  alt: "Mirage"
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1",
                children: /* @__PURE__ */ jsx("img", {
                  className: "h-12",
                  src: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
                  alt: "StaticKit"
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1",
                children: /* @__PURE__ */ jsx("img", {
                  className: "h-12",
                  src: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
                  alt: "Transistor"
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1",
                children: /* @__PURE__ */ jsx("img", {
                  className: "h-12",
                  src: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
                  alt: "Workcation"
                })
              })]
            })]
          })
        })]
      })
    })
  });
}
function JoinTeam() {
  return /* @__PURE__ */ jsx("div", {
    className: "z-10 relative py-16 bg-white select-none",
    children: /* @__PURE__ */ jsx("div", {
      className: "max-w-7xl mx-auto bg-sky-600 lg:bg-transparent lg:px-8",
      children: /* @__PURE__ */ jsxs("div", {
        className: "lg:grid lg:grid-cols-12",
        children: [/* @__PURE__ */ jsx("div", {
          className: "relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent",
          children: /* @__PURE__ */ jsx("div", {
            className: "max-w-md mx-auto px-4 pt-5 sm:max-w-1xl md:max-w-2xl sm:px-6 lg:max-w-none lg:p-0",
            children: /* @__PURE__ */ jsx("div", {
              className: "aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1",
              children: /* @__PURE__ */ jsx("img", {
                className: "object-cover object-center rounded-3xl shadow-2xl hover:-skew-y-2",
                src: "https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
                alt: ""
              })
            })
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "relative bg-sky-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "hidden absolute inset-0 overflow-hidden rounded-3xl lg:block",
            "aria-hidden": "true",
            children: [/* @__PURE__ */ jsxs("svg", {
              className: "absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0",
              width: 404,
              height: 384,
              fill: "none",
              viewBox: "0 0 404 384",
              "aria-hidden": "true",
              children: [/* @__PURE__ */ jsx("defs", {
                children: /* @__PURE__ */ jsx("pattern", {
                  id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
                  x: 0,
                  y: 0,
                  width: 20,
                  height: 20,
                  patternUnits: "userSpaceOnUse",
                  children: /* @__PURE__ */ jsx("rect", {
                    x: 0,
                    y: 0,
                    width: 4,
                    height: 4,
                    className: "text-sky-500",
                    fill: "currentColor"
                  })
                })
              }), /* @__PURE__ */ jsx("rect", {
                width: 404,
                height: 384,
                fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              })]
            }), /* @__PURE__ */ jsxs("svg", {
              className: "absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2",
              width: 404,
              height: 384,
              fill: "none",
              viewBox: "0 0 404 384",
              "aria-hidden": "true",
              children: [/* @__PURE__ */ jsx("defs", {
                children: /* @__PURE__ */ jsx("pattern", {
                  id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
                  x: 0,
                  y: 0,
                  width: 20,
                  height: 20,
                  patternUnits: "userSpaceOnUse",
                  children: /* @__PURE__ */ jsx("rect", {
                    x: 0,
                    y: 0,
                    width: 4,
                    height: 4,
                    className: "text-sky-500",
                    fill: "currentColor"
                  })
                })
              }), /* @__PURE__ */ jsx("rect", {
                width: 404,
                height: 384,
                fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-3xl font-extrabold text-white",
              id: "join-heading",
              children: "Trabalhe conosco"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-lg text-white",
              children: "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."
            }), /* @__PURE__ */ jsx("a", {
              className: "transition ease-in duration-300 hover:duration-150 hover:scale-110 block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-sky-700 hover:bg-gray-50 sm:inline-block sm:w-auto",
              href: "#",
              children: "Explore nossas oportunidades"
            })]
          })]
        })]
      })
    })
  });
}
const navigation = {
  solu\u00E7\u00F5es: [{
    name: "Transportes",
    href: "#"
  }, {
    name: "Encomendas",
    href: "#"
  }, {
    name: "Alta Demanda",
    href: "#"
  }, {
    name: "Insights",
    href: "#"
  }],
  suporte: [{
    name: "Pre\xE7os",
    href: "#"
  }, {
    name: "Documenta\xE7\xE3o",
    href: "#"
  }, {
    name: "Guias",
    href: "#"
  }, {
    name: "API Status",
    href: "#"
  }],
  companhia: [{
    name: "Sobre",
    href: "#"
  }, {
    name: "Blog",
    href: "#"
  }, {
    name: "Empregos",
    href: "#"
  }, {
    name: "Parceiros",
    href: "#"
  }],
  legal: [{
    name: "Direitos",
    href: "#"
  }, {
    name: "Privacidade",
    href: "#"
  }, {
    name: "Termos",
    href: "#"
  }],
  social: [{
    name: "Facebook",
    href: "#",
    icon: (props) => /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, props), {
      children: /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
        clipRule: "evenodd"
      })
    }))
  }, {
    name: "Instagram",
    href: "#",
    icon: (props) => /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, props), {
      children: /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
        clipRule: "evenodd"
      })
    }))
  }, {
    name: "Twitter",
    href: "#",
    icon: (props) => /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, props), {
      children: /* @__PURE__ */ jsx("path", {
        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
      })
    }))
  }, {
    name: "GitHub",
    href: "#",
    icon: (props) => /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, props), {
      children: /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        clipRule: "evenodd"
      })
    }))
  }, {
    name: "Dribbble",
    href: "#",
    icon: (props) => /* @__PURE__ */ jsx("svg", __spreadProps(__spreadValues({
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, props), {
      children: /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
        clipRule: "evenodd"
      })
    }))
  }]
};
function Footer() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsxs("footer", {
      className: "bg-white select-none",
      "aria-labelledby": "footer-heading",
      children: [/* @__PURE__ */ jsx("h2", {
        id: "footer-heading",
        className: "sr-only",
        children: "Footer"
      }), /* @__PURE__ */ jsxs("div", {
        className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "xl:grid xl:grid-cols-3 xl:gap-8",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "space-y-8 xl:col-span-1",
            children: [/* @__PURE__ */ jsx("img", {
              className: "h-10",
              src: "https://tailwindui.com/img/logos/workflow-mark-gray-300.svg",
              alt: "Transporte F\xE1cil Logo"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-500 text-base",
              children: "Fazendo o mundo do transporte um lugar melhor e com um custo benef\xEDcio."
            }), /* @__PURE__ */ jsx("div", {
              className: "flex space-x-6",
              children: navigation.social.map((item) => /* @__PURE__ */ jsxs("a", {
                href: item.href,
                className: "text-gray-400 hover:text-sky-500",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "sr-only",
                  children: item.name
                }), /* @__PURE__ */ jsx(item.icon, {
                  className: "h-6 w-6",
                  "aria-hidden": "true"
                })]
              }, item.name))
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "md:grid md:grid-cols-2 md:gap-8",
              children: [/* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                  children: "Solu\xE7\xF5es"
                }), /* @__PURE__ */ jsx("ul", {
                  role: "list",
                  className: "mt-4 space-y-4",
                  children: navigation.solu\u00E7\u00F5es.map((item) => /* @__PURE__ */ jsx("li", {
                    children: /* @__PURE__ */ jsx("a", {
                      href: item.href,
                      className: "text-base text-gray-500 hover:text-sky-900",
                      children: item.name
                    })
                  }, item.name))
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "mt-12 md:mt-0",
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                  children: "Suporte"
                }), /* @__PURE__ */ jsx("ul", {
                  role: "list",
                  className: "mt-4 space-y-4",
                  children: navigation.suporte.map((item) => /* @__PURE__ */ jsx("li", {
                    children: /* @__PURE__ */ jsx("a", {
                      href: item.href,
                      className: "text-base text-gray-500 hover:text-sky-900",
                      children: item.name
                    })
                  }, item.name))
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "md:grid md:grid-cols-2 md:gap-8",
              children: [/* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                  children: "Compania"
                }), /* @__PURE__ */ jsx("ul", {
                  role: "list",
                  className: "mt-4 space-y-4",
                  children: navigation.companhia.map((item) => /* @__PURE__ */ jsx("li", {
                    children: /* @__PURE__ */ jsx("a", {
                      href: item.href,
                      className: "text-base text-gray-500 hover:text-sky-900",
                      children: item.name
                    })
                  }, item.name))
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "mt-12 md:mt-0",
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                  children: "Legal"
                }), /* @__PURE__ */ jsx("ul", {
                  role: "list",
                  className: "mt-4 space-y-4",
                  children: navigation.legal.map((item) => /* @__PURE__ */ jsx("li", {
                    children: /* @__PURE__ */ jsx("a", {
                      href: item.href,
                      className: "text-base text-gray-500 hover:text-sky-900",
                      children: item.name
                    })
                  }, item.name))
                })]
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-12 border-t border-gray-200 pt-8",
          children: /* @__PURE__ */ jsx("p", {
            className: "text-base text-gray-400 xl:text-center",
            children: "\xA9 2022 Transporte F\xE1cil, Inc. Todos os direitos reservados."
          })
        })]
      })]
    })
  });
}
function DownloadApp() {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-white select-none",
    children: /* @__PURE__ */ jsx("div", {
      className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8",
      children: /* @__PURE__ */ jsxs("div", {
        className: "bg-sky-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4",
        children: [/* @__PURE__ */ jsx("div", {
          className: "pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20",
          children: /* @__PURE__ */ jsxs("div", {
            className: "lg:self-center",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-3xl font-extrabold text-white sm:text-4xl",
              children: /* @__PURE__ */ jsx("span", {
                className: "block",
                children: "Instale nosso aplicativo"
              })
            }), /* @__PURE__ */ jsx("p", {
              className: "mt-4 text-lg leading-6 text-indigo-200",
              children: "Comece agora transportando suas encomendas para o onde voc\xEA quiser."
            }), /* @__PURE__ */ jsx("img", {
              className: "transform scale-50 hover:translate-y-2 translate-x-6 rounded-md object-cover object-left-top sm:translate-x-2",
              src: "https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png",
              alt: "apple app store download"
            })]
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "-mt-6 aspect-w-5 hover:skew-y-2 aspect-h-3 md:aspect-w-2 md:aspect-h-1",
          children: /* @__PURE__ */ jsx("img", {
            className: "transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20",
            src: "https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg",
            alt: "App screenshot"
          })
        })]
      })
    })
  });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavbarComponent, {}), /* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(JoinTeam, {}), /* @__PURE__ */ jsx(DownloadApp, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
}
function Register() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavbarComponent, {}), /* @__PURE__ */ jsxs("div", {
      className: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "sm:mx-auto sm:w-full sm:max-w-md",
        children: [/* @__PURE__ */ jsx("img", {
          className: "mx-auto h-12 w-auto",
          src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
          alt: "Transporte F\xE1cil"
        }), /* @__PURE__ */ jsx("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
          children: "Registre uma nova conta"
        }), /* @__PURE__ */ jsxs("p", {
          className: "mt-2 text-center text-sm text-gray-600",
          children: ["Ou", " ", /* @__PURE__ */ jsx("a", {
            href: "#",
            className: "font-medium text-sky-600 hover:text-sky-500",
            children: "fa\xE7a login."
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
        children: /* @__PURE__ */ jsxs("div", {
          className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
          children: [/* @__PURE__ */ jsxs("form", {
            className: "space-y-6",
            action: "#",
            method: "POST",
            children: [/* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("label", {
                htmlFor: "cpf",
                className: "block text-sm font-medium text-gray-700",
                children: "CPF/CNPJ"
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-1",
                children: /* @__PURE__ */ jsx("input", {
                  id: "cpf",
                  name: "cpf",
                  type: "text",
                  autoComplete: "cpf",
                  required: true,
                  className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("label", {
                htmlFor: "cpf",
                className: "block text-sm font-medium text-gray-700",
                children: "E-mail"
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-1",
                children: /* @__PURE__ */ jsx("input", {
                  id: "email",
                  name: "email",
                  type: "email",
                  autoComplete: "email",
                  required: true,
                  className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("label", {
                htmlFor: "cpf",
                className: "block text-sm font-medium text-gray-700",
                children: "Confirme o seu E-mail"
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-1",
                children: /* @__PURE__ */ jsx("input", {
                  id: "emailconfirm",
                  name: "emailconfirm",
                  type: "email",
                  autoComplete: "confirm-email",
                  required: true,
                  className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("label", {
                htmlFor: "password",
                className: "block text-sm font-medium text-gray-700",
                children: "Senha"
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-1",
                children: /* @__PURE__ */ jsx("input", {
                  id: "password",
                  name: "password",
                  type: "password",
                  autoComplete: "current-password",
                  required: true,
                  className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("label", {
                htmlFor: "password",
                className: "block text-sm font-medium text-gray-700",
                children: "Confirme sua senha"
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-1",
                children: /* @__PURE__ */ jsx("input", {
                  id: "passwordconfirm",
                  name: "passwordconfirm",
                  type: "password",
                  autoComplete: "confirm-password",
                  required: true,
                  className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center justify-between",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center",
                children: [/* @__PURE__ */ jsx("input", {
                  id: "remember-me",
                  name: "remember-me",
                  type: "checkbox",
                  className: "h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                }), /* @__PURE__ */ jsx("label", {
                  htmlFor: "remember-me",
                  className: "ml-2 block text-sm text-gray-900",
                  children: "Voc\xEA aceita os termos de uso?"
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "text-sm",
                children: /* @__PURE__ */ jsx("a", {
                  href: "#",
                  className: "font-medium text-sky-600 hover:text-sky-500",
                  children: "Termos de Uso"
                })
              })]
            }), /* @__PURE__ */ jsx("div", {
              children: /* @__PURE__ */ jsx("button", {
                type: "submit",
                className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500",
                children: "Fazer cadastro"
              })
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-6",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "relative",
              children: [/* @__PURE__ */ jsx("div", {
                className: "absolute inset-0 flex items-center",
                children: /* @__PURE__ */ jsx("div", {
                  className: "w-full border-t border-gray-300"
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "relative flex justify-center text-sm",
                children: /* @__PURE__ */ jsx("span", {
                  className: "px-2 bg-white text-gray-500",
                  children: "Ou cadastre-se com"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "mt-6 grid grid-cols-3 gap-3",
              children: [/* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsxs("a", {
                  href: "#",
                  className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "sr-only",
                    children: "Sign in with Facebook"
                  }), /* @__PURE__ */ jsx("svg", {
                    className: "w-5 h-5",
                    "aria-hidden": "true",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ jsx("path", {
                      fillRule: "evenodd",
                      d: "M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z",
                      clipRule: "evenodd"
                    })
                  })]
                })
              }), /* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsxs("a", {
                  href: "#",
                  className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "sr-only",
                    children: "Sign in with Twitter"
                  }), /* @__PURE__ */ jsx("svg", {
                    className: "w-5 h-5",
                    "aria-hidden": "true",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ jsx("path", {
                      d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                    })
                  })]
                })
              }), /* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsxs("a", {
                  href: "#",
                  className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "sr-only",
                    children: "Sign in with GitHub"
                  }), /* @__PURE__ */ jsx("svg", {
                    className: "w-5 h-5",
                    "aria-hidden": "true",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ jsx("path", {
                      fillRule: "evenodd",
                      d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
                      clipRule: "evenodd"
                    })
                  })]
                })
              })]
            })]
          })]
        })
      })]
    })]
  });
}
function Login() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavbarComponent, {}), /* @__PURE__ */ jsxs("div", {
      className: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "sm:mx-auto sm:w-full sm:max-w-md",
        children: [/* @__PURE__ */ jsx("img", {
          className: "mx-auto h-12 w-auto",
          src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
          alt: "Transporte F\xE1cil"
        }), /* @__PURE__ */ jsx("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
          children: "Logue com sua conta"
        }), /* @__PURE__ */ jsxs("p", {
          className: "mt-2 text-center text-sm text-gray-600",
          children: ["Ou", " ", /* @__PURE__ */ jsx("a", {
            href: "#",
            className: "font-medium text-sky-600 hover:text-sky-500",
            children: "crie uma nova conta."
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
        children: /* @__PURE__ */ jsxs("div", {
          className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
          children: [/* @__PURE__ */ jsxs("form", {
            className: "space-y-6",
            action: "#",
            method: "POST",
            children: [/* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("label", {
                htmlFor: "cpf",
                className: "block text-sm font-medium text-gray-700",
                children: "CPF/CNPJ"
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-1",
                children: /* @__PURE__ */ jsx("input", {
                  id: "cpf",
                  name: "cpf",
                  type: "text",
                  autoComplete: "cpf",
                  required: true,
                  className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("label", {
                htmlFor: "password",
                className: "block text-sm font-medium text-gray-700",
                children: "Senha"
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-1",
                children: /* @__PURE__ */ jsx("input", {
                  id: "password",
                  name: "password",
                  type: "password",
                  autoComplete: "current-password",
                  required: true,
                  className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center justify-between",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center",
                children: [/* @__PURE__ */ jsx("input", {
                  id: "remember-me",
                  name: "remember-me",
                  type: "checkbox",
                  className: "h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                }), /* @__PURE__ */ jsx("label", {
                  htmlFor: "remember-me",
                  className: "ml-2 block text-sm text-gray-900",
                  children: "Remember me"
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "text-sm",
                children: /* @__PURE__ */ jsx("a", {
                  href: "#",
                  className: "font-medium text-sky-600 hover:text-sky-500",
                  children: "Esqueceu sua senha?"
                })
              })]
            }), /* @__PURE__ */ jsx("div", {
              children: /* @__PURE__ */ jsx("button", {
                type: "submit",
                className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500",
                children: "Fazer login"
              })
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-6",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "relative",
              children: [/* @__PURE__ */ jsx("div", {
                className: "absolute inset-0 flex items-center",
                children: /* @__PURE__ */ jsx("div", {
                  className: "w-full border-t border-gray-300"
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "relative flex justify-center text-sm",
                children: /* @__PURE__ */ jsx("span", {
                  className: "px-2 bg-white text-gray-500",
                  children: "Ou continue com"
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "mt-6 grid grid-cols-3 gap-3",
              children: [/* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsxs("a", {
                  href: "#",
                  className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "sr-only",
                    children: "Sign in with Facebook"
                  }), /* @__PURE__ */ jsx("svg", {
                    className: "w-5 h-5",
                    "aria-hidden": "true",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ jsx("path", {
                      fillRule: "evenodd",
                      d: "M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z",
                      clipRule: "evenodd"
                    })
                  })]
                })
              }), /* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsxs("a", {
                  href: "#",
                  className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "sr-only",
                    children: "Sign in with Twitter"
                  }), /* @__PURE__ */ jsx("svg", {
                    className: "w-5 h-5",
                    "aria-hidden": "true",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ jsx("path", {
                      d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                    })
                  })]
                })
              }), /* @__PURE__ */ jsx("div", {
                children: /* @__PURE__ */ jsxs("a", {
                  href: "#",
                  className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                  children: [/* @__PURE__ */ jsx("span", {
                    className: "sr-only",
                    children: "Sign in with GitHub"
                  }), /* @__PURE__ */ jsx("svg", {
                    className: "w-5 h-5",
                    "aria-hidden": "true",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ jsx("path", {
                      fillRule: "evenodd",
                      d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
                      clipRule: "evenodd"
                    })
                  })]
                })
              })]
            })]
          })]
        })
      })]
    })]
  });
}
const products$1 = [{
  id: 1,
  name: "Cold Brew Bottle",
  description: "This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.",
  href: "#",
  quantity: 1,
  price: "$32.00",
  imageSrc: "https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg",
  imageAlt: "Glass bottle with black plastic pour top and mesh insert."
}];
function TrackItem(props) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 mx-4 mb-20",
      children: [/* @__PURE__ */ jsx("div", {
        className: "px-4 py-5 sm:px-6",
        children: /* @__PURE__ */ jsx("div", {
          className: "bg-white",
          children: /* @__PURE__ */ jsxs("div", {
            className: "max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "max-w-xl",
              children: [/* @__PURE__ */ jsx("h1", {
                className: "text-sm font-semibold uppercase tracking-wide text-sky-600",
                children: "Rastreio da Encomenda!"
              }), /* @__PURE__ */ jsx("p", {
                className: "mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl",
                children: "Chegar\xE1 em 5 minutos!"
              }), /* @__PURE__ */ jsxs("p", {
                className: "mt-2 text-base text-gray-500",
                children: ["Sua encomenda #", props.trackitemid, " chegar\xE1 em breve no seu endere\xE7o."]
              }), /* @__PURE__ */ jsxs("dl", {
                className: "mt-12 text-sm font-medium",
                children: [/* @__PURE__ */ jsx("dt", {
                  className: "text-gray-900",
                  children: "N\xFAmero da encomenda"
                }), /* @__PURE__ */ jsx("dd", {
                  className: "text-sky-600 mt-2",
                  children: props.tracknumber
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "mt-10 border-t border-gray-200",
              children: [/* @__PURE__ */ jsx("h2", {
                className: "sr-only",
                children: "Sua encomenda"
              }), /* @__PURE__ */ jsx("h3", {
                className: "sr-only",
                children: "Produto"
              }), products$1.map((product) => /* @__PURE__ */ jsxs("div", {
                className: "py-10 border-b border-gray-200 flex space-x-6",
                children: [/* @__PURE__ */ jsx("img", {
                  src: product.imageSrc,
                  alt: product.imageAlt,
                  className: "flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "flex-auto flex flex-col",
                  children: [/* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("h4", {
                      className: "font-medium text-gray-900",
                      children: /* @__PURE__ */ jsx("a", {
                        href: product.href,
                        children: product.name
                      })
                    }), /* @__PURE__ */ jsx("p", {
                      className: "mt-2 text-sm text-gray-600",
                      children: product.description
                    })]
                  }), /* @__PURE__ */ jsx("div", {
                    className: "mt-6 flex-1 flex items-end",
                    children: /* @__PURE__ */ jsxs("dl", {
                      className: "flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6",
                      children: [/* @__PURE__ */ jsxs("div", {
                        className: "flex",
                        children: [/* @__PURE__ */ jsx("dt", {
                          className: "font-medium text-gray-900",
                          children: "Quantity"
                        }), /* @__PURE__ */ jsx("dd", {
                          className: "ml-2 text-gray-700",
                          children: product.quantity
                        })]
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "pl-4 flex sm:pl-6",
                        children: [/* @__PURE__ */ jsx("dt", {
                          className: "font-medium text-gray-900",
                          children: "Price"
                        }), /* @__PURE__ */ jsx("dd", {
                          className: "ml-2 text-gray-700",
                          children: product.price
                        })]
                      })]
                    })
                  })]
                })]
              }, product.id)), /* @__PURE__ */ jsxs("div", {
                className: "sm:ml-40 sm:pl-6",
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "sr-only",
                  children: "Your information"
                }), /* @__PURE__ */ jsx("h4", {
                  className: "sr-only",
                  children: "Addresses"
                }), /* @__PURE__ */ jsxs("dl", {
                  className: "grid grid-cols-2 gap-x-6 text-sm py-10",
                  children: [/* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("dt", {
                      className: "font-medium text-gray-900",
                      children: "Shipping address"
                    }), /* @__PURE__ */ jsx("dd", {
                      className: "mt-2 text-gray-700",
                      children: /* @__PURE__ */ jsxs("address", {
                        className: "not-italic",
                        children: [/* @__PURE__ */ jsx("span", {
                          className: "block",
                          children: "Kristin Watson"
                        }), /* @__PURE__ */ jsx("span", {
                          className: "block",
                          children: "7363 Cynthia Pass"
                        }), /* @__PURE__ */ jsx("span", {
                          className: "block",
                          children: "Toronto, ON N3Y 4H8"
                        })]
                      })
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("dt", {
                      className: "font-medium text-gray-900",
                      children: "Billing address"
                    }), /* @__PURE__ */ jsx("dd", {
                      className: "mt-2 text-gray-700",
                      children: /* @__PURE__ */ jsxs("address", {
                        className: "not-italic",
                        children: [/* @__PURE__ */ jsx("span", {
                          className: "block",
                          children: "Kristin Watson"
                        }), /* @__PURE__ */ jsx("span", {
                          className: "block",
                          children: "7363 Cynthia Pass"
                        }), /* @__PURE__ */ jsx("span", {
                          className: "block",
                          children: "Toronto, ON N3Y 4H8"
                        })]
                      })
                    })]
                  })]
                }), /* @__PURE__ */ jsx("h3", {
                  className: "sr-only",
                  children: "Summary"
                }), /* @__PURE__ */ jsxs("dl", {
                  className: "space-y-6 border-t border-gray-200 text-sm pt-10",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "flex justify-between",
                    children: [/* @__PURE__ */ jsx("dt", {
                      className: "font-medium text-gray-900",
                      children: "Subtotal"
                    }), /* @__PURE__ */ jsx("dd", {
                      className: "text-gray-700",
                      children: "$36.00"
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "flex justify-between",
                    children: [/* @__PURE__ */ jsxs("dt", {
                      className: "flex font-medium text-gray-900",
                      children: ["Discount", /* @__PURE__ */ jsx("span", {
                        className: "rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2",
                        children: "STUDENT50"
                      })]
                    }), /* @__PURE__ */ jsx("dd", {
                      className: "text-gray-700",
                      children: "-$18.00 (50%)"
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "flex justify-between",
                    children: [/* @__PURE__ */ jsx("dt", {
                      className: "font-medium text-gray-900",
                      children: "Shipping"
                    }), /* @__PURE__ */ jsx("dd", {
                      className: "text-gray-700",
                      children: "$5.00"
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "flex justify-between",
                    children: [/* @__PURE__ */ jsx("dt", {
                      className: "font-medium text-gray-900",
                      children: "Total"
                    }), /* @__PURE__ */ jsx("dd", {
                      className: "text-gray-900",
                      children: "$23.00"
                    })]
                  })]
                })]
              })]
            })]
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "px-8 py-8 sm:p-6",
        children: /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx("iframe", {
            className: "container mx-auto my-8",
            src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          })
        })
      })]
    })
  });
}
const products = [
  {
    id: 1,
    name: "Copo Preto",
    description: "Esse produto tem uma descri\xE7\xE3o mas estou com pregui\xE7a de escrever.",
    href: "#",
    price: "35.00",
    status: "Preparando para transportar",
    step: 1,
    date: "16 de Mar\xE7o",
    datetime: "2021-03-24",
    address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    email: "f\u2022\u2022\u2022@example.com",
    phone: "+55 (11) 99999-9999",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg",
    imageAlt: "Copo Preto da Stolen"
  },
  {
    id: 2,
    name: "Rel\xF3gio Falsificado",
    description: "Esse produto tem uma descri\xE7\xE3o mas estou com pregui\xE7a de escrever.",
    href: "#",
    price: "149.00",
    status: "Transportando",
    step: 0,
    date: "31 de Maio",
    datetime: "2021-03-23",
    address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    email: "email@example.com",
    phone: "+55 (11) 99999-9999",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-02.jpg",
    imageAlt: "Rel\xF3gio Falsificado de x pessoa"
  }
];
function TrackList(props) {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-gray-50",
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-2xl mx-auto pt-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0",
        children: [/* @__PURE__ */ jsx("div", {
          className: "flex sm:items-baseline sm:space-x-4",
          children: /* @__PURE__ */ jsxs("h1", {
            className: "text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl",
            children: ["Pedido #", props.trackNumber]
          })
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-sm text-gray-600",
          children: ["Pedido realizado", " ", /* @__PURE__ */ jsx("time", {
            dateTime: "2021-03-22",
            className: "font-medium text-gray-900",
            children: "March 22, 2021"
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mt-6",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "sr-only",
          children: "Produtos comprados"
        }), /* @__PURE__ */ jsx("div", {
          className: "space-y-8",
          children: products.map((product) => /* @__PURE__ */ jsxs("div", {
            className: "bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "sm:flex lg:col-span-7",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40",
                  children: /* @__PURE__ */ jsx("img", {
                    src: product.imageSrc,
                    alt: product.imageAlt,
                    className: "w-full h-full object-center object-cover sm:w-full sm:h-full"
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "mt-6 sm:mt-0 sm:ml-6",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: "text-base font-medium text-gray-900",
                    children: /* @__PURE__ */ jsx("a", {
                      href: product.href,
                      children: product.name
                    })
                  }), /* @__PURE__ */ jsxs("p", {
                    className: "mt-2 text-sm font-medium text-gray-900",
                    children: ["$", product.price]
                  }), /* @__PURE__ */ jsx("p", {
                    className: "mt-3 text-sm text-gray-500",
                    children: product.description
                  })]
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-6 lg:mt-0 lg:col-span-5",
                children: /* @__PURE__ */ jsxs("dl", {
                  className: "grid grid-cols-2 gap-x-6 text-sm",
                  children: [/* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("dt", {
                      className: "font-medium text-gray-900",
                      children: "Endere\xE7o de Entrega"
                    }), /* @__PURE__ */ jsxs("dd", {
                      className: "mt-3 text-gray-500",
                      children: [/* @__PURE__ */ jsx("span", {
                        className: "block",
                        children: product.address[0]
                      }), /* @__PURE__ */ jsx("span", {
                        className: "block",
                        children: product.address[1]
                      }), /* @__PURE__ */ jsx("span", {
                        className: "block",
                        children: product.address[2]
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("dt", {
                      className: "font-medium text-gray-900",
                      children: "Informa\xE7\xF5es de Contato"
                    }), /* @__PURE__ */ jsxs("dd", {
                      className: "mt-3 text-gray-500 space-y-3",
                      children: [/* @__PURE__ */ jsx("p", {
                        children: product.email
                      }), /* @__PURE__ */ jsx("p", {
                        children: product.phone
                      })]
                    })]
                  })]
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8",
              children: [/* @__PURE__ */ jsx("h4", {
                className: "sr-only",
                children: "Status"
              }), /* @__PURE__ */ jsxs("p", {
                className: "text-sm font-medium text-gray-900",
                children: [product.status, " em ", /* @__PURE__ */ jsx("time", {
                  dateTime: product.datetime,
                  children: product.date
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "mt-6",
                "aria-hidden": "true",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "bg-gray-200 rounded-full overflow-hidden",
                  children: /* @__PURE__ */ jsx("div", {
                    className: "h-2 bg-sky-600 rounded-full",
                    style: {
                      width: `calc((${product.step} * 2 + 1) / 8 * 100%)`
                    }
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "text-indigo-600",
                    children: "Pedido realizado"
                  }), /* @__PURE__ */ jsx("div", {
                    className: classNames(product.step > 0 ? "text-sky-600" : "", "text-center"),
                    children: "Processando"
                  }), /* @__PURE__ */ jsx("div", {
                    className: classNames(product.step > 1 ? "text-sky-600" : "", "text-center"),
                    children: "Encaminhado"
                  }), /* @__PURE__ */ jsx("div", {
                    className: classNames(product.step > 2 ? "text-sky-600" : "", "text-right"),
                    children: "Entregue"
                  })]
                })]
              })]
            })]
          }, product.id))
        })]
      })]
    })
  });
}
function Notify(props) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      className: "bg-sky-600",
      children: /* @__PURE__ */ jsx("div", {
        className: "max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between flex-wrap",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "w-0 flex-1 flex items-center",
            children: [/* @__PURE__ */ jsx("span", {
              className: "flex p-2 rounded-lg bg-sky-800",
              children: /* @__PURE__ */ jsx(SpeakerphoneIcon$1, {
                className: "h-6 w-6 text-white",
                "aria-hidden": "true"
              })
            }), /* @__PURE__ */ jsxs("p", {
              className: "ml-3 font-medium text-white truncate",
              children: [/* @__PURE__ */ jsx("span", {
                className: "md:hidden",
                children: props.shortMessage
              }), /* @__PURE__ */ jsx("span", {
                className: "hidden md:inline",
                children: props.message
              })]
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto",
            children: /* @__PURE__ */ jsx("a", {
              href: "#",
              className: "flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-sky-600 bg-white hover:bg-indigo-50",
              children: "Baixar o aplicativo"
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "order-2 flex-shrink-0 sm:order-3 sm:ml-3",
            children: /* @__PURE__ */ jsxs("button", {
              type: "button",
              className: "-mr-1 flex p-2 rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2",
              children: [/* @__PURE__ */ jsx("span", {
                className: "sr-only",
                children: "Fechar"
              }), /* @__PURE__ */ jsx(XIcon$1, {
                className: "h-6 w-6 text-white",
                "aria-hidden": "true"
              })]
            })
          })]
        })
      })
    })
  });
}
function TrackSearch() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      className: "bg-white py-16 sm:py-24",
      children: /* @__PURE__ */ jsxs("div", {
        className: "relative sm:py-16",
        children: [/* @__PURE__ */ jsxs("div", {
          "aria-hidden": "true",
          className: "hidden sm:block",
          children: [/* @__PURE__ */ jsx("div", {
            className: "absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"
          }), /* @__PURE__ */ jsxs("svg", {
            className: "absolute top-8 left-1/2 -ml-3",
            width: 404,
            height: 392,
            fill: "none",
            viewBox: "0 0 404 392",
            children: [/* @__PURE__ */ jsx("defs", {
              children: /* @__PURE__ */ jsx("pattern", {
                id: "8228f071-bcee-4ec8-905a-2a059a2cc4fb",
                x: 0,
                y: 0,
                width: 20,
                height: 20,
                patternUnits: "userSpaceOnUse",
                children: /* @__PURE__ */ jsx("rect", {
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4,
                  className: "text-gray-200",
                  fill: "currentColor"
                })
              })
            }), /* @__PURE__ */ jsx("rect", {
              width: 404,
              height: 392,
              fill: "url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8",
          children: /* @__PURE__ */ jsxs("div", {
            className: "relative rounded-2xl px-6 py-10 bg-sky-600 overflow-hidden shadow-xl sm:px-12 sm:py-20",
            children: [/* @__PURE__ */ jsx("div", {
              "aria-hidden": "true",
              className: "absolute inset-0 -mt-72 sm:-mt-32 md:mt-0",
              children: /* @__PURE__ */ jsxs("svg", {
                className: "absolute inset-0 h-full w-full",
                preserveAspectRatio: "xMidYMid slice",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 1463 360",
                children: [/* @__PURE__ */ jsx("path", {
                  className: "text-sky-500 text-opacity-40",
                  fill: "currentColor",
                  d: "M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                }), /* @__PURE__ */ jsx("path", {
                  className: "text-sky-700 text-opacity-40",
                  fill: "currentColor",
                  d: "M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                })]
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "relative",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "sm:text-center",
                children: [/* @__PURE__ */ jsx("h2", {
                  className: "text-3xl font-extrabold text-white tracking-tight sm:text-4xl",
                  children: "Rastreie suas encomendas em tempo real"
                }), /* @__PURE__ */ jsx("p", {
                  className: "mt-6 mx-auto max-w-2xl text-lg text-indigo-200",
                  children: "Rastreie seus pedidos ou os seus pacotes enviados em tempo real at\xE9 o seu destino."
                })]
              }), /* @__PURE__ */ jsxs("form", {
                action: "track",
                className: "mt-12 sm:mx-auto sm:max-w-lg sm:flex",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "min-w-0 flex-1",
                  children: [/* @__PURE__ */ jsx("label", {
                    htmlFor: "cta-email",
                    className: "sr-only",
                    children: "C\xF3digo de Rastreio"
                  }), /* @__PURE__ */ jsx("input", {
                    id: "cta-email",
                    type: "text",
                    name: "tracknumber",
                    className: "block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600",
                    placeholder: "Insira seu c\xF3digo de rastreio"
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "mt-4 sm:mt-0 sm:ml-3",
                  children: /* @__PURE__ */ jsx("button", {
                    type: "submit",
                    className: "block w-full rounded-md border border-transparent px-5 py-3 bg-sky-500 text-base font-medium text-white shadow hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600 sm:px-10",
                    children: "Rastrear"
                  })
                })]
              })]
            })]
          })
        })]
      })
    })
  });
}
function SystemOrder(iddopedido, iddoitem) {
  if (iddopedido && !iddoitem) {
    return /* @__PURE__ */ jsx(TrackList, {
      trackNumber: iddopedido
    });
  } else if (iddoitem && iddopedido) {
    return /* @__PURE__ */ jsx(TrackItem, {
      tracknumber: iddopedido,
      trackitemid: iddoitem
    });
  } else {
    return /* @__PURE__ */ jsx(TrackSearch, {});
  }
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Track() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavbarComponent, {}), /* @__PURE__ */ jsx(Notify, {
      shortMessage: "Baixe o nosso aplicativo",
      message: "Para mais funcionalidades baixe nosso aplicativo e receba 10% de desconto."
    }), SystemOrder(useQuery().get("tracknumber"), useQuery().get("trackitem"))]
  });
}
function AppRoutes() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(BrowserRouter, {
      children: /* @__PURE__ */ jsxs(Routes, {
        children: [/* @__PURE__ */ jsx(Route, {
          path: "/",
          element: /* @__PURE__ */ jsx(Home, {})
        }), /* @__PURE__ */ jsx(Route, {
          path: "login",
          element: /* @__PURE__ */ jsx(Login, {})
        }), /* @__PURE__ */ jsx(Route, {
          path: "register",
          element: /* @__PURE__ */ jsx(Register, {})
        }), /* @__PURE__ */ jsx(Route, {
          path: "track",
          element: /* @__PURE__ */ jsx(Track, {})
        })]
      })
    })
  });
}
var Global = "";
function App() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(AppRoutes, {})
  });
}
ReactDOM.hydrate(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(App, {})
}), document.getElementById("root"));
