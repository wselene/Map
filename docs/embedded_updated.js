!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("mapbox-gl"))
    : "function" == typeof define && define.amd
    ? define(["exports", "mapbox-gl"], t)
    : t(((e = e || self).bundle = {}), e.mapboxgl);
})(this, function (e, t) {
  "use strict";
  function n(e) {
    return (n =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function i(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function o(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
  }
  function s(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? a(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : a(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function l(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && h(e, t);
  }
  function c(e) {
    return (c = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function h(e, t) {
    return (h =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function d(e, t) {
    if (null == e) return {};
    var n,
      i,
      r = (function (e, t) {
        if (null == e) return {};
        var n,
          i,
          r = {},
          o = Object.keys(e);
        for (i = 0; i < o.length; i++)
          (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
        (n = o[i]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
  }
  function f(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function v(e, t) {
    return !t || ("object" != typeof t && "function" != typeof t) ? f(e) : t;
  }
  function p(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        i = c(e);
      if (t) {
        var r = c(this).constructor;
        n = Reflect.construct(i, arguments, r);
      } else n = i.apply(this, arguments);
      return v(this, n);
    };
  }
  function y(e, t, n) {
    return (y =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (e, t, n) {
            var i = (function (e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = c(e));

              );
              return e;
            })(e, t);
            if (i) {
              var r = Object.getOwnPropertyDescriptor(i, t);
              return r.get ? r.get.call(n) : r.value;
            }
          })(e, t, n || e);
  }
  function m(e, t) {
    return (
      t || (t = e.slice(0)),
      Object.freeze(
        Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
      )
    );
  }
  function g(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return A(e);
      })(e) ||
      (function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      })(e) ||
      b(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function b(e, t) {
    if (e) {
      if ("string" == typeof e) return A(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? A(e, t)
          : void 0
      );
    }
  }
  function A(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function w(e, t) {
    var n;
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (
        Array.isArray(e) ||
        (n = b(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var i = 0,
          r = function () {};
        return {
          s: r,
          n: function () {
            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
          },
          e: function (e) {
            throw e;
          },
          f: r,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var o,
      s = !0,
      a = !1;
    return {
      s: function () {
        n = e[Symbol.iterator]();
      },
      n: function () {
        var e = n.next();
        return (s = e.done), e;
      },
      e: function (e) {
        (a = !0), (o = e);
      },
      f: function () {
        try {
          s || null == n.return || n.return();
        } finally {
          if (a) throw o;
        }
      },
    };
  }
  function k(e) {
    return ("0" + e.toString(16)).substr(-2);
  }
  function _(e) {
    var t = new Uint8Array((e || 40) / 2);
    return (
      (window.crypto ? window.crypto : window.msCrypto).getRandomValues(t),
      Array.from(t, k).join("")
    );
  }
  function x(e, t) {
    e.forEach(function (e) {
      t[e] = t[e].bind(t);
    });
  }
  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  var O,
    S = {
      selectTool: function (e, t) {
        return u(u({}, e), {}, { activeTool: t.id });
      },
      openDropdownMenu: function (e) {
        return u(u({}, e), {}, { dropdownMenuOpen: !0 });
      },
      closeDropdownMenu: function (e) {
        return u(u({}, e), {}, { dropdownMenuOpen: !1 });
      },
    },
    E = (function (e) {
      var t = {},
        n = function (e) {
          t[e] = function (t) {
            return u(u({}, t), {}, { type: e });
          };
        };
      for (var i in e) n(i);
      return t;
    })(S),
    M = (function (e) {
      return function (t, n) {
        return e.hasOwnProperty(n.type) ? e[n.type](t, n) : t;
      };
    })(S),
    N =
      ((O = { toolbar: M }),
      function (e, t) {
        var n = !1,
          i = {};
        for (var r in O) (i[r] = O[r](e[r], t)), (n = n || i[r] !== e[r]);
        return n ? i : e;
      }),
    T = new WeakMap(),
    B = function (e) {
      return "function" == typeof e && T.has(e);
    },
    j =
      "undefined" != typeof window &&
      null != window.customElements &&
      void 0 !== window.customElements.polyfillWrapFlushCallback,
    P = function (e, t) {
      for (
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        t !== n;

      ) {
        var i = t.nextSibling;
        e.removeChild(t), (t = i);
      }
    },
    C = {},
    L = {},
    I = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
    R = "\x3c!--".concat(I, "--\x3e"),
    F = new RegExp("".concat(I, "|").concat(R)),
    D = function e(t, n) {
      i(this, e), (this.parts = []), (this.element = n);
      for (
        var r = [],
          o = [],
          s = document.createTreeWalker(n.content, 133, null, !1),
          a = 0,
          u = -1,
          l = 0,
          c = t.strings,
          h = t.values.length;
        l < h;

      ) {
        var d = s.nextNode();
        if (null !== d) {
          if ((u++, 1 === d.nodeType)) {
            if (d.hasAttributes()) {
              for (var f = d.attributes, v = f.length, p = 0, y = 0; y < v; y++)
                V(f[y].name, "$lit$") && p++;
              for (; p-- > 0; ) {
                var m = c[l],
                  g = Q.exec(m)[2],
                  b = g.toLowerCase() + "$lit$",
                  A = d.getAttribute(b);
                d.removeAttribute(b);
                var w = A.split(F);
                this.parts.push({
                  type: "attribute",
                  index: u,
                  name: g,
                  strings: w,
                }),
                  (l += w.length - 1);
              }
            }
            "TEMPLATE" === d.tagName &&
              (o.push(d), (s.currentNode = d.content));
          } else if (3 === d.nodeType) {
            var k = d.data;
            if (k.indexOf(I) >= 0) {
              for (
                var _ = d.parentNode, x = k.split(F), O = x.length - 1, S = 0;
                S < O;
                S++
              ) {
                var E = void 0,
                  M = x[S];
                if ("" === M) E = H();
                else {
                  var N = Q.exec(M);
                  null !== N &&
                    V(N[2], "$lit$") &&
                    (M =
                      M.slice(0, N.index) +
                      N[1] +
                      N[2].slice(0, -"$lit$".length) +
                      N[3]),
                    (E = document.createTextNode(M));
                }
                _.insertBefore(E, d),
                  this.parts.push({ type: "node", index: ++u });
              }
              "" === x[O]
                ? (_.insertBefore(H(), d), r.push(d))
                : (d.data = x[O]),
                (l += O);
            }
          } else if (8 === d.nodeType)
            if (d.data === I) {
              var T = d.parentNode;
              (null !== d.previousSibling && u !== a) ||
                (u++, T.insertBefore(H(), d)),
                (a = u),
                this.parts.push({ type: "node", index: u }),
                null === d.nextSibling ? (d.data = "") : (r.push(d), u--),
                l++;
            } else
              for (var B = -1; -1 !== (B = d.data.indexOf(I, B + 1)); )
                this.parts.push({ type: "node", index: -1 }), l++;
        } else s.currentNode = o.pop();
      }
      for (var j = 0, P = r; j < P.length; j++) {
        var C = P[j];
        C.parentNode.removeChild(C);
      }
    },
    V = function (e, t) {
      var n = e.length - t.length;
      return n >= 0 && e.slice(n) === t;
    },
    U = function (e) {
      return -1 !== e.index;
    },
    H = function () {
      return document.createComment("");
    },
    Q =
      /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,
    Z = (function () {
      function e(t, n, r) {
        i(this, e),
          (this.__parts = []),
          (this.template = t),
          (this.processor = n),
          (this.options = r);
      }
      return (
        o(e, [
          {
            key: "update",
            value: function (e) {
              var t,
                n = 0,
                i = w(this.__parts);
              try {
                for (i.s(); !(t = i.n()).done; ) {
                  var r = t.value;
                  void 0 !== r && r.setValue(e[n]), n++;
                }
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
              var o,
                s = w(this.__parts);
              try {
                for (s.s(); !(o = s.n()).done; ) {
                  var a = o.value;
                  void 0 !== a && a.commit();
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
            },
          },
          {
            key: "_clone",
            value: function () {
              for (
                var e,
                  t = j
                    ? this.template.element.content.cloneNode(!0)
                    : document.importNode(this.template.element.content, !0),
                  n = [],
                  i = this.template.parts,
                  r = document.createTreeWalker(t, 133, null, !1),
                  o = 0,
                  s = 0,
                  a = r.nextNode();
                o < i.length;

              )
                if (((e = i[o]), U(e))) {
                  for (; s < e.index; )
                    s++,
                      "TEMPLATE" === a.nodeName &&
                        (n.push(a), (r.currentNode = a.content)),
                      null === (a = r.nextNode()) &&
                        ((r.currentNode = n.pop()), (a = r.nextNode()));
                  if ("node" === e.type) {
                    var u = this.processor.handleTextExpression(this.options);
                    u.insertAfterNode(a.previousSibling), this.__parts.push(u);
                  } else {
                    var l;
                    (l = this.__parts).push.apply(
                      l,
                      g(
                        this.processor.handleAttributeExpressions(
                          a,
                          e.name,
                          e.strings,
                          this.options
                        )
                      )
                    );
                  }
                  o++;
                } else this.__parts.push(void 0), o++;
              return j && (document.adoptNode(t), customElements.upgrade(t)), t;
            },
          },
        ]),
        e
      );
    })(),
    z = " ".concat(I, " "),
    Y = (function () {
      function e(t, n, r, o) {
        i(this, e),
          (this.strings = t),
          (this.values = n),
          (this.type = r),
          (this.processor = o);
      }
      return (
        o(e, [
          {
            key: "getHTML",
            value: function () {
              for (
                var e = this.strings.length - 1, t = "", n = !1, i = 0;
                i < e;
                i++
              ) {
                var r = this.strings[i],
                  o = r.lastIndexOf("\x3c!--");
                n = (o > -1 || n) && -1 === r.indexOf("--\x3e", o + 1);
                var s = Q.exec(r);
                t +=
                  null === s
                    ? r + (n ? z : R)
                    : r.substr(0, s.index) + s[1] + s[2] + "$lit$" + s[3] + I;
              }
              return (t += this.strings[e]);
            },
          },
          {
            key: "getTemplateElement",
            value: function () {
              var e = document.createElement("template");
              return (e.innerHTML = this.getHTML()), e;
            },
          },
        ]),
        e
      );
    })(),
    G = function (e) {
      return null === e || !("object" === n(e) || "function" == typeof e);
    },
    J = function (e) {
      return Array.isArray(e) || !(!e || !e[Symbol.iterator]);
    },
    K = (function () {
      function e(t, n, r) {
        i(this, e),
          (this.dirty = !0),
          (this.element = t),
          (this.name = n),
          (this.strings = r),
          (this.parts = []);
        for (var o = 0; o < r.length - 1; o++)
          this.parts[o] = this._createPart();
      }
      return (
        o(e, [
          {
            key: "_createPart",
            value: function () {
              return new X(this);
            },
          },
          {
            key: "_getValue",
            value: function () {
              for (
                var e = this.strings, t = e.length - 1, n = "", i = 0;
                i < t;
                i++
              ) {
                n += e[i];
                var r = this.parts[i];
                if (void 0 !== r) {
                  var o = r.value;
                  if (G(o) || !J(o)) n += "string" == typeof o ? o : String(o);
                  else {
                    var s,
                      a = w(o);
                    try {
                      for (a.s(); !(s = a.n()).done; ) {
                        var u = s.value;
                        n += "string" == typeof u ? u : String(u);
                      }
                    } catch (e) {
                      a.e(e);
                    } finally {
                      a.f();
                    }
                  }
                }
              }
              return (n += e[t]);
            },
          },
          {
            key: "commit",
            value: function () {
              this.dirty &&
                ((this.dirty = !1),
                this.element.setAttribute(this.name, this._getValue()));
            },
          },
        ]),
        e
      );
    })(),
    X = (function () {
      function e(t) {
        i(this, e), (this.value = void 0), (this.committer = t);
      }
      return (
        o(e, [
          {
            key: "setValue",
            value: function (e) {
              e === C ||
                (G(e) && e === this.value) ||
                ((this.value = e), B(e) || (this.committer.dirty = !0));
            },
          },
          {
            key: "commit",
            value: function () {
              for (; B(this.value); ) {
                var e = this.value;
                (this.value = C), e(this);
              }
              this.value !== C && this.committer.commit();
            },
          },
        ]),
        e
      );
    })(),
    W = (function () {
      function e(t) {
        i(this, e),
          (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.options = t);
      }
      return (
        o(e, [
          {
            key: "appendInto",
            value: function (e) {
              (this.startNode = e.appendChild(H())),
                (this.endNode = e.appendChild(H()));
            },
          },
          {
            key: "insertAfterNode",
            value: function (e) {
              (this.startNode = e), (this.endNode = e.nextSibling);
            },
          },
          {
            key: "appendIntoPart",
            value: function (e) {
              e.__insert((this.startNode = H())),
                e.__insert((this.endNode = H()));
            },
          },
          {
            key: "insertAfterPart",
            value: function (e) {
              e.__insert((this.startNode = H())),
                (this.endNode = e.endNode),
                (e.endNode = this.startNode);
            },
          },
          {
            key: "setValue",
            value: function (e) {
              this.__pendingValue = e;
            },
          },
          {
            key: "commit",
            value: function () {
              if (null !== this.startNode.parentNode) {
                for (; B(this.__pendingValue); ) {
                  var e = this.__pendingValue;
                  (this.__pendingValue = C), e(this);
                }
                var t = this.__pendingValue;
                t !== C &&
                  (G(t)
                    ? t !== this.value && this.__commitText(t)
                    : t instanceof Y
                    ? this.__commitTemplateResult(t)
                    : t instanceof Node
                    ? this.__commitNode(t)
                    : J(t)
                    ? this.__commitIterable(t)
                    : t === L
                    ? ((this.value = L), this.clear())
                    : this.__commitText(t));
              }
            },
          },
          {
            key: "__insert",
            value: function (e) {
              this.endNode.parentNode.insertBefore(e, this.endNode);
            },
          },
          {
            key: "__commitNode",
            value: function (e) {
              this.value !== e &&
                (this.clear(), this.__insert(e), (this.value = e));
            },
          },
          {
            key: "__commitText",
            value: function (e) {
              var t = this.startNode.nextSibling,
                n = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
              t === this.endNode.previousSibling && 3 === t.nodeType
                ? (t.data = n)
                : this.__commitNode(document.createTextNode(n)),
                (this.value = e);
            },
          },
          {
            key: "__commitTemplateResult",
            value: function (e) {
              var t = this.options.templateFactory(e);
              if (this.value instanceof Z && this.value.template === t)
                this.value.update(e.values);
              else {
                var n = new Z(t, e.processor, this.options),
                  i = n._clone();
                n.update(e.values), this.__commitNode(i), (this.value = n);
              }
            },
          },
          {
            key: "__commitIterable",
            value: function (t) {
              Array.isArray(this.value) || ((this.value = []), this.clear());
              var n,
                i,
                r = this.value,
                o = 0,
                s = w(t);
              try {
                for (s.s(); !(i = s.n()).done; ) {
                  var a = i.value;
                  void 0 === (n = r[o]) &&
                    ((n = new e(this.options)),
                    r.push(n),
                    0 === o
                      ? n.appendIntoPart(this)
                      : n.insertAfterPart(r[o - 1])),
                    n.setValue(a),
                    n.commit(),
                    o++;
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
              o < r.length && ((r.length = o), this.clear(n && n.endNode));
            },
          },
          {
            key: "clear",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.startNode;
              P(this.startNode.parentNode, e.nextSibling, this.endNode);
            },
          },
        ]),
        e
      );
    })(),
    q = (function () {
      function e(t, n, r) {
        if (
          (i(this, e),
          (this.value = void 0),
          (this.__pendingValue = void 0),
          2 !== r.length || "" !== r[0] || "" !== r[1])
        )
          throw new Error(
            "Boolean attributes can only contain a single expression"
          );
        (this.element = t), (this.name = n), (this.strings = r);
      }
      return (
        o(e, [
          {
            key: "setValue",
            value: function (e) {
              this.__pendingValue = e;
            },
          },
          {
            key: "commit",
            value: function () {
              for (; B(this.__pendingValue); ) {
                var e = this.__pendingValue;
                (this.__pendingValue = C), e(this);
              }
              if (this.__pendingValue !== C) {
                var t = !!this.__pendingValue;
                this.value !== t &&
                  (t
                    ? this.element.setAttribute(this.name, "")
                    : this.element.removeAttribute(this.name),
                  (this.value = t)),
                  (this.__pendingValue = C);
              }
            },
          },
        ]),
        e
      );
    })(),
    $ = (function (e) {
      l(n, e);
      var t = p(n);
      function n(e, r, o) {
        var s;
        return (
          i(this, n),
          ((s = t.call(this, e, r, o)).single =
            2 === o.length && "" === o[0] && "" === o[1]),
          s
        );
      }
      return (
        o(n, [
          {
            key: "_createPart",
            value: function () {
              return new ee(this);
            },
          },
          {
            key: "_getValue",
            value: function () {
              return this.single
                ? this.parts[0].value
                : y(c(n.prototype), "_getValue", this).call(this);
            },
          },
          {
            key: "commit",
            value: function () {
              this.dirty &&
                ((this.dirty = !1),
                (this.element[this.name] = this._getValue()));
            },
          },
        ]),
        n
      );
    })(K),
    ee = (function (e) {
      l(n, e);
      var t = p(n);
      function n() {
        return i(this, n), t.apply(this, arguments);
      }
      return n;
    })(X),
    te = !1;
  !(function () {
    try {
      var e = {
        get capture() {
          return (te = !0), !1;
        },
      };
      window.addEventListener("test", e, e),
        window.removeEventListener("test", e, e);
    } catch (e) {}
  })();
  var ne = (function () {
      function e(t, n, r) {
        var o = this;
        i(this, e),
          (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.element = t),
          (this.eventName = n),
          (this.eventContext = r),
          (this.__boundHandleEvent = function (e) {
            return o.handleEvent(e);
          });
      }
      return (
        o(e, [
          {
            key: "setValue",
            value: function (e) {
              this.__pendingValue = e;
            },
          },
          {
            key: "commit",
            value: function () {
              for (; B(this.__pendingValue); ) {
                var e = this.__pendingValue;
                (this.__pendingValue = C), e(this);
              }
              if (this.__pendingValue !== C) {
                var t = this.__pendingValue,
                  n = this.value,
                  i =
                    null == t ||
                    (null != n &&
                      (t.capture !== n.capture ||
                        t.once !== n.once ||
                        t.passive !== n.passive)),
                  r = null != t && (null == n || i);
                i &&
                  this.element.removeEventListener(
                    this.eventName,
                    this.__boundHandleEvent,
                    this.__options
                  ),
                  r &&
                    ((this.__options = ie(t)),
                    this.element.addEventListener(
                      this.eventName,
                      this.__boundHandleEvent,
                      this.__options
                    )),
                  (this.value = t),
                  (this.__pendingValue = C);
              }
            },
          },
          {
            key: "handleEvent",
            value: function (e) {
              "function" == typeof this.value
                ? this.value.call(this.eventContext || this.element, e)
                : this.value.handleEvent(e);
            },
          },
        ]),
        e
      );
    })(),
    ie = function (e) {
      return (
        e &&
        (te
          ? { capture: e.capture, passive: e.passive, once: e.once }
          : e.capture)
      );
    },
    re = new ((function () {
      function e() {
        i(this, e);
      }
      return (
        o(e, [
          {
            key: "handleAttributeExpressions",
            value: function (e, t, n, i) {
              var r = t[0];
              return "." === r
                ? new $(e, t.slice(1), n).parts
                : "@" === r
                ? [new ne(e, t.slice(1), i.eventContext)]
                : "?" === r
                ? [new q(e, t.slice(1), n)]
                : new K(e, t, n).parts;
            },
          },
          {
            key: "handleTextExpression",
            value: function (e) {
              return new W(e);
            },
          },
        ]),
        e
      );
    })())();
  function oe(e) {
    var t = se.get(e.type);
    void 0 === t &&
      ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
      se.set(e.type, t));
    var n = t.stringsArray.get(e.strings);
    if (void 0 !== n) return n;
    var i = e.strings.join(I);
    return (
      void 0 === (n = t.keyString.get(i)) &&
        ((n = new D(e, e.getTemplateElement())), t.keyString.set(i, n)),
      t.stringsArray.set(e.strings, n),
      n
    );
  }
  var se = new Map(),
    ae = new WeakMap(),
    ue = function (e, t, n) {
      var i = ae.get(t);
      void 0 === i &&
        (P(t, t.firstChild),
        ae.set(t, (i = new W(Object.assign({ templateFactory: oe }, n)))),
        i.appendInto(t)),
        i.setValue(e),
        i.commit();
    };
  "undefined" != typeof window &&
    (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.2.1");
  var le = function (e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    )
      n[i - 1] = arguments[i];
    return new Y(e, n, "html", re);
  };
  function ce(e, t) {
    var n = (function (e) {
      for (var t = 0; t < e.length; t++)
        if (e[t].id.includes("label")) return e[t].id;
    })(e.getStyle().layers);
    e.addLayer(t, n);
  }
  var he = (function () {
      function e(t, n, r) {
        var o;
        i(this, e),
          (this.map = t),
          (this.id = n.id),
          (this.sourceId =
            "string" == typeof (o = n.source) || o instanceof String
              ? n.source
              : n.id),
          (this.type = n.type),
          (this.sourceLayer = n["source-layer"]),
          r ? r(t, n) : t.addLayer(n),
          (this.getFeature = this.getFeature.bind(this));
      }
      return (
        o(e, [
          {
            key: "setOpacity",
            value: function (e) {
              this.setPaintProperty("".concat(this.type, "-opacity"), e);
            },
          },
          {
            key: "setColor",
            value: function (e) {
              this.setPaintProperty("".concat(this.type, "-color"), e);
            },
          },
          {
            key: "getColor",
            value: function () {
              return this.getPaintProperty("".concat(this.type, "-color"));
            },
          },
          {
            key: "setPaintProperties",
            value: function (e) {
              for (var t in e) this.setPaintProperty(t, e[t]);
            },
          },
          {
            key: "setFeatureState",
            value: function (e, t) {
              this.map.setFeatureState(
                { source: this.sourceId, sourceLayer: this.sourceLayer, id: e },
                t
              );
            },
          },
          {
            key: "setPaintProperty",
            value: function (e, t) {
              this.map.setPaintProperty(this.id, e, t);
            },
          },
          {
            key: "getPaintProperty",
            value: function (e) {
              return this.map.getPaintProperty(this.id, e);
            },
          },
          {
            key: "getFeatureState",
            value: function (e) {
              return this.map.getFeatureState({
                source: this.sourceId,
                sourceLayer: this.sourceLayer,
                id: e,
              });
            },
          },
          {
            key: "getFeature",
            value: function (e) {
              return this.map.querySourceFeatures(this.sourceId, {
                sourceLayer: this.sourceLayer,
                filter: ["==", ["id"], e],
              })[0];
            },
          },
          {
            key: "queryRenderedFeatures",
            value: function () {
              return this.map.queryRenderedFeatures(null, {
                layers: [this.id],
              });
            },
          },
          {
            key: "querySourceFeatures",
            value: function () {
              return this.map.querySourceFeatures(this.sourceId, {
                sourceLayer: this.sourceLayer,
              });
            },
          },
          {
            key: "getAssignment",
            value: function (e) {
              return this.getFeatureState(e).color;
            },
          },
          {
            key: "setAssignment",
            value: function (e, t) {
              this.setFeatureState(e.id, u(u({}, e.state), {}, { color: t }));
            },
          },
          {
            key: "on",
            value: function (e) {
              for (
                var t,
                  n = arguments.length,
                  i = new Array(n > 1 ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                i[r - 1] = arguments[r];
              (t = this.map).on.apply(t, [e, this.id].concat(i));
            },
          },
          {
            key: "off",
            value: function (e) {
              for (
                var t,
                  n = arguments.length,
                  i = new Array(n > 1 ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                i[r - 1] = arguments[r];
              (t = this.map).off.apply(t, [e, this.id].concat(i));
            },
          },
          {
            key: "untilSourceLoaded",
            value: function (e) {
              var t = this;
              if (this.map.isSourceLoaded(this.sourceId)) return e();
              this.map.on("sourcedata", function n() {
                return e(function () {
                  return t.map.off("sourcedata", n);
                });
              });
            },
          },
        ]),
        e
      );
    })(),
    de = function e(n, r, o) {
      i(this, e),
        (this.map = new t.Map(
          u(
            {
              container: n,
              style: o,
              attributionControl: !1,
              minZoom: 10,
              pitchWithRotate: !1,
              dragPan: !0,
              touchZoomRotate: !0,
            },
            r
          )
        )),
        (this.nav = new t.NavigationControl()),
        this.map.addControl(this.nav, "top-left"),
        (this.mapboxgl = t);
    };
  function fe(e, t, n) {
    return {
      units: new he(
        e,
        {
          id: t.sourceLayer,
          source: t.sourceLayer,
          "source-layer": t.sourceLayer,
          type: "fill",
          paint: {
            "fill-color": [
              "case",
              ["boolean", ["feature-state", "hover"], !1],
              ["match", ["feature-state", "color"], 0, "#000000", "#777777"],
              [
                "match",
                ["feature-state", "color"],
                0,
                "#202f24",
                "rgba(0, 0, 0, 0)",
              ],
            ],
            "fill-opacity": 0.55,
          },
        },
        n
      ),
      unitsBorders: new he(
        e,
        {
          id: "units-borders",
          type: "line",
          source: t.sourceLayer,
          "source-layer": t.sourceLayer,
          paint: {
            "line-color": "#444444",
            "line-width": ["interpolate", ["linear"], ["zoom"], 9.5, 0, 17, 2],
            "line-opacity": 0.2,
          },
        },
        n
      ),
    };
  }
  function ve(e, t, n, i) {
    return new he(
      e,
      {
        id: "ovrlay",
        source: t.sourceLayer,
        "source-layer": t.sourceLayer,
        type: "fill",
        paint: i,
      },
      n
    );
  }
  var pe = (function () {
      function e(t) {
        var n = t.key,
          r = t.name;
        i(this, e), (this.key = n), (this.name = r);
      }
      return (
        o(e, [
          {
            key: "getValue",
            value: function (e) {
              if (void 0 !== e.properties) return e.properties[this.key];
            },
          },
        ]),
        e
      );
    })(),
    ye = (function () {
      function e(t) {
        var n = t.id,
          r = t.idColumn;
        i(this, e),
          (this.id = n || _(8)),
          (this.assignment = {}),
          (this.idColumn = r);
      }
      return (
        o(e, [
          {
            key: "update",
            value: function (e, t) {
              this.assignment[this.idColumn.getValue(e)] = t;
            },
          },
        ]),
        e
      );
    })(),
    me = (function () {
      function e(t, n) {
        var r = n.id,
          o = n.units,
          s = n.showOverlay,
          a = n.overlayRule,
          l = d(n, ["id", "units", "showOverlay", "overlayRule"]);
        i(this, e),
          (this.unitsRecord = o),
          (this.idColumn = new pe(o.idColumn)),
          (this.plan = new ye(
            u(u({ id: r }, l), {}, { idColumn: this.idColumn })
          )),
          this.initializeMapState(t, o, ce, s, a),
          (this.subscribers = []),
          (this.update = this.update.bind(this)),
          (this.render = this.render.bind(this));
      }
      return (
        o(e, [
          {
            key: "initializeMapState",
            value: function (e, t, n, i, r) {
              (t.tileset.source.promoteId = {}),
                (t.tileset.source.promoteId[t.tileset.sourceLayer] =
                  t.idColumn.key);
              var o = (function (e, t, n) {
                  var i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3],
                    r =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : {};
                  e.addSource(t.sourceLayer, t.source);
                  var o = i ? ve(e, t, n, r) : null,
                    s = fe(e, t, n),
                    a = s.units,
                    u = s.unitsBorders;
                  return { units: a, unitsBorders: u, overlay: o };
                })(e, t.tileset, n, i, r),
                s = o.units,
                a = o.unitsBorders,
                u = o.overlay;
              (this.units = s),
                (this.unitsBorders = a),
                (this.layers = [s, u]),
                (this.map = e);
            },
          },
          {
            key: "update",
            value: function (e, t) {
              this.plan.update(e, t);
            },
          },
          {
            key: "subscribe",
            value: function (e) {
              this.subscribers.push(e), this.render();
            },
          },
          {
            key: "render",
            value: function () {
              var e,
                t = w(this.subscribers);
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  (0, e.value)();
                }
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            },
          },
          {
            key: "hasExpectedData",
            value: function (e) {
              if (void 0 === e || void 0 === e.properties) return !1;
              var t,
                n = w(this.columns);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var i = t.value;
                  if (void 0 === e.properties[i.key]) return !1;
                }
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
              return !0;
            },
          },
        ]),
        e
      );
    })();
  function ge() {
    var e = m([
      '\n    <div class="ui-option">\n        <legend class="ui-label ui-label--row">\n            ',
      '\n        </legend>\n        <div class="slider-container">\n            <input\n                class="slider"\n                type="range"\n                value="',
      '"\n                min="1"\n                max="40"\n                @change=',
      '\n            />\n            <input\n                class="slider-value"\n                type="number"\n                value="',
      '"\n                min="1"\n                max="40"\n                @change=',
      "\n            />\n        </div>\n    </div>\n",
    ]);
    return (
      (ge = function () {
        return e;
      }),
      e
    );
  }
  var be = function (e, t, n) {
    return le(ge(), n ? n.title : "Brush Size", e, t, e, t);
  };
  function Ae() {
    var e = m([
      '\n            <div class="icon-list__item" title="',
      '">\n                <label>',
      '</label>\n                <input\n                    type="radio"\n                    id="tool-',
      '"\n                    name="tool"\n                    value="',
      '"\n                    @change=',
      "\n                    ?checked=",
      '\n                />\n                <div class="icon-list__item__radio"></div>\n                ',
      "\n            </div>\n        ",
    ]);
    return (
      (Ae = function () {
        return e;
      }),
      e
    );
  }
  var we = (function () {
    function e(t, n, r) {
      i(this, e),
        (this.id = t),
        (this.name = n),
        (this.icon = r),
        (this.active = !1);
    }
    return (
      o(e, [
        {
          key: "activate",
          value: function () {
            this.active = !0;
          },
        },
        {
          key: "deactivate",
          value: function () {
            this.active = !1;
          },
        },
        {
          key: "render",
          value: function (e) {
            var t = this;
            return le(
              Ae(),
              this.name,
              this.name,
              this.id,
              this.id,
              function () {
                return e(t.id);
              },
              this.active,
              this.icon
            );
          },
        },
      ]),
      e
    );
  })();
  function ke() {
    var e = m(["", ""]);
    return (
      (ke = function () {
        return e;
      }),
      e
    );
  }
  function _e() {
    var e = m([
      '<img src="',
      '" alt="Brush" \n            style="display: inline-block; height: 26px !important; z-index: 100;"></img>',
    ]);
    return (
      (_e = function () {
        return e;
      }),
      e
    );
  }
  var xe = (function (e) {
      l(n, e);
      var t = p(n);
      function n(e) {
        var r;
        i(this, n);
        var o = le(
          _e(),
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABXUlEQVR4Ae3ZEXTDYBiF4UGhUBgMCoNBoVAYDmrDQGFQrNNwfgrDwnBQKASCxcEgEJxTITAMFAPfXgj1bH/W5Kev957z+Dmv3itN0zRN0zRNu6QNsUSBPRJozUbIYSc2OJ3ihCMpTjiS4oQjKU5Yojhhe8UJKxQnbKk4f8swgJMpjuIojuIojuIojuIojuIojuIojuIojuIojuI43afihPeEOlocRQrHUaRwHEUKx1EkV3EesEGBQyPHGrMOkdzEmeAD1iLFuD2SrzhzVLB/KjFtiZR6iTPFEXamEmO4XwHrKIXrJbCeZnC7HaynNdyuhPWUw+0sggNc7hYWQQmXe4RFUMDl3mERZHC3e9SwCFZwtTm+YRHUuPEQZYQ5UlhEb3CxDBZZhbEumt/VSOBqA+xgETzD7VaoYB0csYD7XeP1zFBb3OGiNsQCW3yhhjVK5HjBBJqmaZqmaZrmcz/pIiIIU7ugBgAAAABJRU5ErkJggg=="
        );
        return (
          ((r = t.call(this, "brush", "Draw", o)).brush = e),
          (r.options = new Oe(e)),
          r
        );
      }
      return (
        o(n, [
          {
            key: "activate",
            value: function () {
              y(c(n.prototype), "activate", this).call(this),
                this.brush.activate();
            },
          },
          {
            key: "deactivate",
            value: function () {
              y(c(n.prototype), "deactivate", this).call(this),
                this.brush.deactivate();
            },
          },
        ]),
        n
      );
    })(we),
    Oe = (function () {
      function e(t, n) {
        i(this, e),
          (this.brush = t),
          (this.renderToolbar = n),
          (this.changeRadius = this.changeRadius.bind(this));
      }
      return (
        o(e, [
          {
            key: "changeRadius",
            value: function (e) {
              e.stopPropagation();
              var t = parseInt(e.target.value);
              this.brush.radius != t && (this.brush.radius = t),
                this.renderToolbar();
            },
          },
          {
            key: "render",
            value: function () {
              return le(ke(), be(this.brush.radius, this.changeRadius));
            },
          },
        ]),
        e
      );
    })();
  function Se() {
    var e = m(["\n            ", "\n        "]);
    return (
      (Se = function () {
        return e;
      }),
      e
    );
  }
  function Ee() {
    var e = m([
      '<img src="',
      '" alt="Erase" \n            style="display: inline-block; height: 26px !important; z-index: 100;"></img>',
    ]);
    return (
      (Ee = function () {
        return e;
      }),
      e
    );
  }
  var Me = (function (e) {
      l(n, e);
      var t = p(n);
      function n(e) {
        var r;
        i(this, n);
        var o = le(
          Ee(),
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABBElEQVRo3u3Yuw7BYBiH8WdmcLorXIxuRjtuSWKjTiM3YBWjSQ3yJY00aL9TX94n+UbJ7y/apkDTNO2fagJz4ARcgSUwjI36tjaQAtnLuQNJbNynWsC6AJ8/49hIG3xtR5TB125EFXxtRtjgo49wgY82wiU++Agf+GAj2sDGE94cbw+7EHjzxB5IxZuzkozPgJtkfAacJeMzYCoZnwING7zP+/ynswe6ile84uXgezb4JsX/HoQ4W6BjgweYScYDHCPgD1j+bPJdAuN3rr5500IyHqDP8+UhBN7qVvmuRDLeNPKEL7pgJyU+H3WELb70AJcjXOArDXAxwhW+8gBN0zTtN3sAFI5CX1O33XwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMDRUMDI6NDg6NDkrMDA6MDADjPrkAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTA0VDAyOjQ4OjQ5KzAwOjAwctFCWAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
        );
        return (
          ((r = t.call(this, "eraser", "Erase", o)).brush = e),
          (r.options = new Ne(e)),
          r
        );
      }
      return (
        o(n, [
          {
            key: "activate",
            value: function () {
              y(c(n.prototype), "activate", this).call(this),
                this.brush.activate(),
                this.brush.startErasing();
            },
          },
          {
            key: "deactivate",
            value: function () {
              y(c(n.prototype), "deactivate", this).call(this),
                this.brush.deactivate(),
                this.brush.stopErasing();
            },
          },
        ]),
        n
      );
    })(we),
    Ne = (function () {
      function e(t, n) {
        i(this, e),
          (this.brush = t),
          (this.renderToolbar = n),
          (this.changeRadius = this.changeRadius.bind(this));
      }
      return (
        o(e, [
          {
            key: "changeRadius",
            value: function (e) {
              e.stopPropagation();
              var t = parseInt(e.target.value);
              this.brush.radius != t && (this.brush.radius = t),
                this.renderToolbar();
            },
          },
          {
            key: "render",
            value: function () {
              return le(
                Se(),
                be(this.brush.radius, this.changeRadius, {
                  title: "Eraser Size",
                })
              );
            },
          },
        ]),
        e
      );
    })();
  function Te() {
    var e = m([
      '<img src="',
      '" alt="Pan" \n            style="display: inline-block; height: 24px !important; z-index: 100;"></img>',
    ]);
    return (
      (Te = function () {
        return e;
      }),
      e
    );
  }
  var Be = (function (e) {
    l(n, e);
    var t = p(n);
    function n() {
      i(this, n);
      var e = le(
        Te(),
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABtElEQVR4AezWAWYDURSF4SIIsoCgiwiCIgAUUGQBs4QACugyggK6hCAoAgigKIKiyAIGRTC4/QGlcR6PiTH3HL4N/OOOdzfQTbDBO76xQwPmTXBAXPGG9HtBCA1S7xMh7LKfZBS02U8ySrKfZJTVnOTwN8MKDZaY1gaqOMnB7xFnxB8nLPsPhIFvgU583fvsgfYIYZs9UIsQPrIHirLbBtIPSwfSD0sHKj8skwcqPyyzB4qC1oEKHMiBHMiBHMiBHMiBHKiHOZADOZADOZADOZADDUCSQA7kQA7kQA40caD/m2GLFhfs8QQHYnOcEFccsEgSSMcROrxiniSQjiO0eMY0S6AjosIX1hkCPeAHUemAxdj/QauKSOL/NJ5A9ZHE/2kkgXSkhPQcSc+RCnMkOR3p4kB6a3QO5Eh6jqTnSMU5kp4j6TlST2tGEueM3rYZQaDj7/B7cTSQVoM8MRpIpG+oGw0kaEUjgttLo4HUj9sro4H0HnfqGQ2k3+DjMwYYVA/iwMlmGCQgfDCNTELd4s0wyIAKEK8fBKlmPvhglUEMdIC4Gdpy/UynLsRh6FydCrGOBABk1k0h3bUPJgAAAABJRU5ErkJggg=="
      );
      return t.call(this, "pan", "Pan", e);
    }
    return n;
  })(we);
  var je = (function (e) {
    l(n, e);
    var t = p(n);
    function n(e, r, o) {
      var s;
      return (
        i(this, n),
        ((s = t.call(this, e, r)).color = o),
        (s.coloring = !1),
        (s.locked = !1),
        (s.listeners = { colorend: [], colorfeature: [], mouseup: [] }),
        x(["onMouseDown", "onMouseUp", "onClick", "onTouchStart"], f(s)),
        s
      );
    }
    return (
      o(n, [
        {
          key: "setColor",
          value: function (e) {
            this.color = parseInt(e);
          },
        },
        {
          key: "startErasing",
          value: function () {
            (this._previousColor = this.color),
              (this.color = null),
              (this.erasing = !0);
          },
        },
        {
          key: "stopErasing",
          value: function () {
            (this.color = this._previousColor), (this.erasing = !1);
          },
        },
        {
          key: "hoverOn",
          value: function (e) {
            (this.hoveredFeatures = e),
              !0 === this.coloring
                ? this.colorFeatures()
                : y(c(n.prototype), "hoverOn", this).call(this, e);
          },
        },
        {
          key: "colorFeatures",
          value: function () {
            var e = this;
            this.locked && !this.erasing
              ? this._colorFeatures(function (e) {
                  return null === e.state.color || void 0 === e.state.color;
                })
              : this._colorFeatures(function (t) {
                  return t.state.color !== e.color;
                });
          },
        },
        {
          key: "_colorFeatures",
          value: function (e) {
            var t,
              n = new Set(),
              i = w(this.hoveredFeatures);
            try {
              for (i.s(); !(t = i.n()).done; ) {
                var r = t.value;
                if (e(r) && !r.state.home) {
                  if (!n.has(r.id)) {
                    n.add(r.id);
                    var o,
                      s = w(this.listeners.colorfeature);
                    try {
                      for (s.s(); !(o = s.n()).done; ) {
                        (0, o.value)(r, this.color);
                      }
                    } catch (e) {
                      s.e(e);
                    } finally {
                      s.f();
                    }
                  }
                  this.layer.setFeatureState(
                    r.id,
                    u(u({}, r.state), {}, { color: this.color, hover: !0 })
                  ),
                    (r.state.color = this.color);
                } else
                  this.layer.setFeatureState(
                    r.id,
                    u(u({}, r.state), {}, { hover: !0 })
                  );
              }
            } catch (e) {
              i.e(e);
            } finally {
              i.f();
            }
            var a,
              l = w(this.listeners.colorend);
            try {
              for (l.s(); !(a = l.n()).done; ) {
                (0, a.value)();
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
          },
        },
        {
          key: "onClick",
          value: function () {
            this.colorFeatures();
          },
        },
        {
          key: "onMouseDown",
          value: function (e) {
            e.preventDefault(),
              (this.coloring = !0),
              window.addEventListener("mouseup", this.onMouseUp),
              window.addEventListener("touchend", this.onMouseUp),
              window.addEventListener("touchcancel", this.onMouseUp),
              document.body.classList.add("stop-scrolling");
          },
        },
        {
          key: "onMouseUp",
          value: function () {
            (this.coloring = !1),
              window.removeEventListener("mouseup", this.onMouseUp),
              window.removeEventListener("touchend", this.onMouseUp),
              window.removeEventListener("touchcancel", this.onMouseUp),
              setTimeout(function () {
                document.body.classList.remove("stop-scrolling");
              }, 60);
            var e,
              t = w(this.listeners.mouseup);
            try {
              for (t.s(); !(e = t.n()).done; ) {
                (0, e.value)();
              }
            } catch (e) {
              t.e(e);
            } finally {
              t.f();
            }
          },
        },
        {
          key: "onTouchStart",
          value: function (e) {
            e.points && e.points.length <= 1 && this.onMouseDown(e);
          },
        },
        {
          key: "activate",
          value: function () {
            this.layer.map.getCanvas().classList.add("brush-tool"),
              y(c(n.prototype), "activate", this).call(this),
              this.layer.map.dragPan.disable(),
              this.layer.map.touchZoomRotate.disable(),
              this.layer.map.doubleClickZoom.disable(),
              this.layer.on("click", this.onClick),
              this.layer.map.on("touchstart", this.onTouchStart),
              this.layer.map.on("mousedown", this.onMouseDown);
          },
        },
        {
          key: "deactivate",
          value: function () {
            this.layer.map.getCanvas().classList.remove("brush-tool"),
              y(c(n.prototype), "deactivate", this).call(this),
              this.layer.map.dragPan.enable(),
              this.layer.map.doubleClickZoom.enable(),
              this.layer.map.touchZoomRotate.enable(),
              this.layer.off("click", this.onClick),
              this.layer.map.off("touchstart", this.onTouchStart),
              this.layer.map.off("mousedown", this.onMouseDown);
          },
        },
        {
          key: "on",
          value: function (e, t) {
            this.listeners[e].push(t);
          },
        },
      ]),
      n
    );
  })(
    (function (e) {
      l(n, e);
      var t = p(n);
      function n(e, r) {
        var o;
        return (
          i(this, n),
          ((o = t.call(this, e)).radius = r),
          (o.hoveredFeatures = []),
          o
        );
      }
      return (
        o(n, [
          {
            key: "hoverOff",
            value: function () {
              var e = this;
              this.hoveredFeatures.forEach(function (t) {
                e.layer.setFeatureState(
                  t.id,
                  u(u({}, t.state), {}, { hover: !1 })
                );
              }),
                (this.hoveredFeatures = []);
            },
          },
          {
            key: "hoverOn",
            value: function (e) {
              var t = this;
              (this.hoveredFeatures = e),
                this.hoveredFeatures.forEach(function (e) {
                  t.layer.setFeatureState(
                    e.id,
                    u(u({}, e.state), {}, { hover: !0 })
                  );
                });
            },
          },
          {
            key: "onMouseMove",
            value: function (e) {
              var t,
                n,
                i,
                r =
                  ((t = e.point),
                  (n = this.radius),
                  (i = [t.x + n, t.y + n]),
                  [[t.x - n, t.y - n], i]),
                o = this.layer.map.queryRenderedFeatures(r, {
                  layers: [this.layer.id],
                });
              o.length > 0 && (this.hoverOff(), this.hoverOn(o));
            },
          },
        ]),
        n
      );
    })(
      (function () {
        function e(t) {
          i(this, e),
            (this.layer = t),
            (this.hoveredFeature = null),
            (this.onMouseMove = this.onMouseMove.bind(this)),
            (this.onMouseLeave = this.onMouseLeave.bind(this)),
            (this.hoverOff = this.hoverOff.bind(this));
        }
        return (
          o(e, [
            {
              key: "hoverOff",
              value: function () {
                null !== this.hoveredFeature &&
                  (this.layer.setFeatureState(
                    this.hoveredFeature.id,
                    u(u({}, this.hoveredFeature.state), {}, { hover: !1 })
                  ),
                  (this.hoveredFeature = null));
              },
            },
            {
              key: "hoverOn",
              value: function (e) {
                (this.hoveredFeature = e),
                  this.layer.setFeatureState(
                    e.id,
                    u(u({}, e.state), {}, { hover: !0 })
                  );
              },
            },
            {
              key: "onMouseMove",
              value: function (e) {
                e.features.length > 0 &&
                  (this.hoverOff(), this.hoverOn(e.features[0]));
              },
            },
            {
              key: "onMouseLeave",
              value: function () {
                this.hoverOff();
              },
            },
            {
              key: "activate",
              value: function () {
                this.layer.on("mousemove", this.onMouseMove),
                  this.layer.on("mouseleave", this.onMouseLeave),
                  this.layer.on("touchmove", this.onMouseMove, { passive: !1 }),
                  this.layer.on("touchend", this.onMouseLeave);
              },
            },
            {
              key: "deactivate",
              value: function () {
                this.layer.off("mousemove", this.onMouseMove),
                  this.layer.off("mouseleave", this.onMouseLeave),
                  this.layer.off("touchmove", this.onMouseMove),
                  this.layer.off("touchend", this.onMouseLeave);
              },
            },
          ]),
          e
        );
      })()
    )
  );
  var Pe,
    Ce = (function () {
      function e(t, n) {
        i(this, e),
          (this.reducer = t),
          (this.state = n),
          (this.subscribers = []),
          x(["dispatch", "subscribe"], this);
      }
      return (
        o(e, [
          {
            key: "dispatch",
            value: function (e) {
              var t = this,
                n = this.reducer(this.state, e);
              n !== this.state &&
                ((this.state = n),
                this.subscribers.forEach(function (e) {
                  return e(t.state, t.dispatch);
                }));
            },
          },
          {
            key: "subscribe",
            value: function (e) {
              this.subscribers.push(e);
            },
          },
        ]),
        e
      );
    })(),
    Le = function (e, t) {
      var n = e.startNode.parentNode,
        i = void 0 === t ? e.endNode : t.startNode,
        r = n.insertBefore(H(), i);
      n.insertBefore(H(), i);
      var o = new W(e.options);
      return o.insertAfterNode(r), o;
    },
    Ie = function (e, t) {
      return e.setValue(t), e.commit(), e;
    },
    Re = function (e, t, n) {
      var i = e.startNode.parentNode,
        r = n ? n.startNode : e.endNode,
        o = t.endNode.nextSibling;
      o !== r &&
        (function (e, t) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            t !== n;

          ) {
            var r = t.nextSibling;
            e.insertBefore(t, i), (t = r);
          }
        })(i, t.startNode, o, r);
    },
    Fe = function (e) {
      P(e.startNode.parentNode, e.startNode, e.endNode.nextSibling);
    },
    De = function (e, t, n) {
      for (var i = new Map(), r = t; r <= n; r++) i.set(e[r], r);
      return i;
    },
    Ve = new WeakMap(),
    Ue = new WeakMap(),
    He =
      ((Pe = function (e, t, n) {
        var i;
        return (
          void 0 === n ? (n = t) : void 0 !== t && (i = t),
          function (t) {
            if (!(t instanceof W))
              throw new Error("repeat can only be used in text bindings");
            var r,
              o,
              s,
              a = Ve.get(t) || [],
              u = Ue.get(t) || [],
              l = [],
              c = [],
              h = [],
              d = 0,
              f = w(e);
            try {
              for (f.s(); !(r = f.n()).done; ) {
                var v = r.value;
                (h[d] = i ? i(v, d) : d), (c[d] = n(v, d)), d++;
              }
            } catch (e) {
              f.e(e);
            } finally {
              f.f();
            }
            for (
              var p = 0, y = a.length - 1, m = 0, g = c.length - 1;
              p <= y && m <= g;

            )
              if (null === a[p]) p++;
              else if (null === a[y]) y--;
              else if (u[p] === h[m]) (l[m] = Ie(a[p], c[m])), p++, m++;
              else if (u[y] === h[g]) (l[g] = Ie(a[y], c[g])), y--, g--;
              else if (u[p] === h[g])
                (l[g] = Ie(a[p], c[g])), Re(t, a[p], l[g + 1]), p++, g--;
              else if (u[y] === h[m])
                (l[m] = Ie(a[y], c[m])), Re(t, a[y], a[p]), y--, m++;
              else if (
                (void 0 === o && ((o = De(h, m, g)), (s = De(u, p, y))),
                o.has(u[p]))
              )
                if (o.has(u[y])) {
                  var b = s.get(h[m]),
                    A = void 0 !== b ? a[b] : null;
                  if (null === A) {
                    var k = Le(t, a[p]);
                    Ie(k, c[m]), (l[m] = k);
                  } else (l[m] = Ie(A, c[m])), Re(t, A, a[p]), (a[b] = null);
                  m++;
                } else Fe(a[y]), y--;
              else Fe(a[p]), p++;
            for (; m <= g; ) {
              var _ = Le(t, l[g + 1]);
              Ie(_, c[m]), (l[m++] = _);
            }
            for (; p <= y; ) {
              var x = a[p++];
              null !== x && Fe(x);
            }
            Ve.set(t, l), Ue.set(t, h);
          }
        );
      }),
      function () {
        var e = Pe.apply(void 0, arguments);
        return T.set(e, !0), e;
      });
  function Qe() {
    var e = m([
      '\n    <section\n        class="tool-options ',
      '"\n    >\n        ',
      "\n    </section>\n",
    ]);
    return (
      (Qe = function () {
        return e;
      }),
      e
    );
  }
  function Ze() {
    var e = m([
      '\n        <div class="districtr__mini-toolbar">\n            <nav>\n                <div class="districtr__mini-toolbar-top">\n                    <div class="icon-list">\n                        ',
      "\n                    </div>\n                </div>\n            </nav>\n            ",
      "\n            </div>\n        </div>\n        ",
    ]);
    return (
      (Ze = function () {
        return e;
      }),
      e
    );
  }
  var ze = (function () {
    function e(t, n) {
      i(this, e),
        (this.tools = []),
        (this.toolsById = {}),
        (this.menuItems = []),
        (this.renderCallback = n.render),
        (this.render = this.render.bind(this)),
        (this.selectTool = this.selectTool.bind(this)),
        (this.addTool = this.addTool.bind(this)),
        (this.store = t);
    }
    return (
      o(e, [
        {
          key: "selectTool",
          value: function (e) {
            this.activeTool && this.activeTool.deactivate(),
              this.toolsById[e].activate(),
              this.store.dispatch(E.selectTool({ id: e }));
          },
        },
        {
          key: "addTool",
          value: function (e) {
            void 0 !== e.options &&
              (e.options.renderToolbar = this.renderCallback),
              (this.toolsById[e.id] = e),
              this.tools.push(e);
          },
        },
        {
          key: "setMenuItems",
          value: function (e) {
            this.menuItems = e;
          },
        },
        {
          key: "render",
          value: function () {
            var e,
              t = this;
            return le(
              Ze(),
              He(
                this.tools,
                function (e) {
                  return e.id;
                },
                function (e) {
                  return e.render(t.selectTool);
                }
              ),
              ((e = this.activeTool),
              le(
                Qe(),
                void 0 !== e.options ? "active" : "",
                void 0 !== e.options ? e.options.render() : ""
              ))
            );
          },
        },
        {
          key: "activeTool",
          get: function () {
            return this.toolsById[this.store.state.toolbar.activeTool];
          },
        },
      ]),
      e
    );
  })();
  function Ye() {
    var e = m(["<h4>An error occurred.</h4>"]);
    return (
      (Ye = function () {
        return e;
      }),
      e
    );
  }
  var Ge = [
      function (e) {
        var t = e.state,
          n = e.toolbar,
          i = new je(t.units, 10, 0);
        i.on("colorfeature", t.update), i.on("colorend", t.render);
        for (
          var r = 0, o = [new Be(), new xe(i), new Me(i)];
          r < o.length;
          r++
        ) {
          var s = o[r];
          n.addTool(s);
        }
        n.selectTool("pan");
      },
    ],
    Je = (function () {
      function e(n, r, o) {
        var s = this;
        i(this, e),
          (this.render = this.render.bind(this)),
          (t.accessToken = r.token),
          (o = u({ style: "mapbox://styles/mapbox/outdoors-v11" }, o));
        var a = document.querySelector(n);
        a.classList.add("districtr__embed-container");
        var l = document.createElement("div"),
          c = _(8);
        l.setAttribute("id", c),
          (l.style = "height: 100%; width: 100%"),
          a.appendChild(l),
          (this.toolbarTarget = document.createElement("div")),
          a.appendChild(this.toolbarTarget),
          (this.addressMarker = null),
          (this.graph = null),
          (this.showError = r.errors),
          (this.allowProceed = r.allowProceed),
          fetch(r.graph)
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              s.graph = e;
            }),
          fetch(r.url)
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              (s.bounds = e.units.bounds),
                (s.zoomTo = r.zoomTo || e.units.zoomTo || 14),
                (s.mapState = new de(
                  c,
                  {
                    bounds: e.units.bounds,
                    fitBoundsOptions: {
                      padding: { top: 50, right: 50, left: 50, bottom: 50 },
                    },
                  },
                  o.style
                )),
                s.mapState.map.on("load", function () {
                  (e.showOverlay = r.showOverlay),
                    (e.overlayRule = r.overlayRule),
                    (s.state = new me(s.mapState.map, e, function () {
                      return null;
                    })),
                    (s.enableMap = function () {
                      var e = this;
                      if (!this.enabled) {
                        (this.enabled = !0),
                          (this.store = new Ce(N, { toolbar: {} })),
                          (this.toolbar = new ze(this.store, this));
                        var t,
                          n = w(Ge);
                        try {
                          for (n.s(); !(t = n.n()).done; ) {
                            (0, t.value)(this);
                          }
                        } catch (e) {
                          n.e(e);
                        } finally {
                          n.f();
                        }
                        this.store.subscribe(this.render),
                          this.state.subscribe(this.render),
                          this.map.boxZoom.enable(),
                          this.map.scrollZoom.enable(),
                          this.map.dragPan.enable(),
                          this.map.dragRotate.enable(),
                          this.map.keyboard.enable(),
                          this.map.doubleClickZoom.enable(),
                          this.map.touchZoomRotate.enable();
                        var i = document.createElement("div");
                        (i.id = "ns__msg-draw"),
                          (i.className = "ns__msg"),
                          (i.style.margin = "0"),
                          (i.style.borderRadius = "0"),
                          (i.hidden = !0),
                          this.toolbarTarget.prepend(i);
                        var r = -1,
                          o = this.checkConnected.bind(this, i);
                        this.toolbar.toolsById.brush.brush.on(
                          "mouseup",
                          function () {
                            window.clearTimeout(r),
                              (r = window.setTimeout(o, 50));
                          }
                        );
                        var s = document.querySelector("#ns__clear-all");
                        (s.hidden = !1),
                          s.addEventListener("click", function () {
                            e.clearNeighborhood.call(e),
                              window.setTimeout(o, 50);
                          });
                      }
                    }),
                    (s.disableMap = function () {
                      (this.enabled = !1),
                        this.map.boxZoom.disable(),
                        this.map.scrollZoom.disable(),
                        this.map.dragPan.disable(),
                        this.map.dragRotate.disable(),
                        this.map.keyboard.disable(),
                        this.map.doubleClickZoom.disable(),
                        this.map.touchZoomRotate.disable();
                    }),
                    s.disableMap();
                });
            })
            .catch(function (e) {
              console.error(e), ue(le(Ye()), a);
            });
      }
      return (
        o(e, [
          {
            key: "render",
            value: function () {
              this.toolbarTarget &&
                this.toolbar &&
                ue(this.toolbar.render(), this.toolbarTarget);
            },
          },
          {
            key: "checkConnected",
            value: function (e) {
                return true;
            },
          },
          {
            key: "loadAddress",
            value: function (e, n) {
              var i = this,
                r =
                  "https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(
                    encodeURIComponent(e),
                    ".json"
                  ) +
                  "?autocomplete=false&limit=1&bbox=" +
                  this.bounds[0][0] +
                  "," +
                  this.bounds[0][1] +
                  "," +
                  this.bounds[1][0] +
                  "," +
                  this.bounds[1][1] +
                  "&access_token=".concat(t.accessToken);
              fetch(r)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  if (0 != e.features.length) {
                    i.showError(null),
                      i.enableMap(),
                      n && (n.value = e.features[0].place_name);
                    var r = e.features[0].center;
                    i.addressMarker && i.addressMarker.remove(),
                      (i.addressMarker = new t.Marker({ color: "#ff4f49" })
                        .setLngLat(r)
                        .addTo(i.map));
                    var o = !1,
                      s = function () {
                        var e = this.map.queryRenderedFeatures(
                          this.map.project(r),
                          { layers: [this.state.units.id], validate: !1 }
                        )[0];
                        e &&
                          !o &&
                          ((o = !0),
                          this.homeBlock &&
                            (this.map.setFeatureState(
                              this.homeBlock,
                              u(u({}, this.homeBlock.state), {}, { home: !1 })
                            ),
                            this.clearNeighborhood.call(this, !1),
                            console.log("INSIDE")),
                          this.state.units.setAssignment(e, 0),
                          (this.state.plan.assignment[e.id] = 0),
                          (this.homeBlock = e),
                          (e.state.home = !0),
                          this.map.setFeatureState(
                            e,
                            u(u({}, e.state), {}, { home: !0 })
                          ),
                          console.log("OUTSIDE"));
                      }.bind(i);
                    i.map.once("moveend", function () {
                      i.state.layers[0].untilSourceLoaded(s);
                    }),
                      i.map.easeTo({ center: r, zoom: i.zoomTo });
                  } else i.showError("Address not found.");
                });
            },
          },
          {
            key: "getNeighborhood",
            value: function () {
              var e = this.state.plan.assignment;
              return Object.keys(e)
                .filter(function (t) {
                  return 0 === e[t];
                })
                .join(",");
            },
          },
          {
            key: "clearNeighborhood",
            value: function () {
              var e = this,
                t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                n = Object.keys(this.state.plan.assignment),
                i = map.state.units.querySourceFeatures().filter(function (e) {
                  return n.includes(e.id);
                });
              i.map(function (t) {
                return e.state.units.setAssignment(t, null);
              }),
                n.map(function (t) {
                  e.state.plan.assignment[t] = null;
                }),
                this.homeBlock &&
                  t &&
                  (console.log(this.homeBlock.id),
                  this.state.units.setAssignment(this.homeBlock, 0),
                  (this.state.plan.assignment[this.homeBlock.id] = 0));
            },
          },
          {
            key: "map",
            get: function () {
              return this.mapState.map;
            },
          },
        ]),
        e
      );
    })();
  (window.MapDraw = function (e, t, n) {
    return new Je(e, t, n);
  }),
    (window.showError = function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "#ns__msg-search",
        n = document.querySelector(t);
      null !== e
        ? ((n.hidden = !1), (n.innerHTML = e))
        : ((n.hidden = !0), (n.innerHTML = "&nbsp;"));
    }),
    (window.BivariateOverlay = function (e) {
      return {
        "fill-color": [
          "interpolate-hcl",
          ["linear"],
          [
            "case",
            ["==", e.denominator || ["get", "pop"], 0],
            e.midpt || 0.5,
            [
              "/",
              e.numerator || ["get", "gop"],
              e.denominator || ["get", "pop"],
            ],
          ],
          0,
          e.colorLow || "rgb(30, 60, 210)",
          e.midpt || 0.5,
          "rgba(255, 255, 255, 0)",
          1,
          e.colorHigh || "rgb(210, 30, 20)",
        ],
        "fill-opacity": e.opacity || 0.375,
      };
    }),
    (window.UnivariateOverlay = function (e) {
      return {
        "fill-color": [
          "interpolate-hcl",
          ["linear"],
          [
            "case",
            ["==", e.denominator || ["get", "pop"], 0],
            0,
            [
              "/",
              e.numerator || ["get", "dem"],
              e.denominator || ["get", "pop"],
            ],
          ],
          0,
          "rgba(255, 255, 255, 0)",
          1,
          e.color || "#c0b010",
        ],
        "fill-opacity": e.opacity || 0.375,
      };
    }),
    (e.EmbeddedDistrictr = Je),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
