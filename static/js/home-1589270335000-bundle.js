!function (t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }

    i.m = t, i.c = e, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
            return t[e]
        }.bind(null, r));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 357)
}([function (t, e, i) {
    var n = i(3), r = i(19), s = i(12), o = i(13), a = i(20), l = function (t, e, i) {
        var c, u, h, d, f = t & l.F, p = t & l.G, v = t & l.S, g = t & l.P, m = t & l.B,
            y = p ? n : v ? n[e] || (n[e] = {}) : (n[e] || {}).prototype, b = p ? r : r[e] || (r[e] = {}),
            w = b.prototype || (b.prototype = {});
        for (c in p && (i = e), i) h = ((u = !f && y && void 0 !== y[c]) ? y : i)[c], d = m && u ? a(h, n) : g && "function" == typeof h ? a(Function.call, h) : h, y && o(y, c, h, t & l.U), b[c] != h && s(b, c, d), g && w[c] != h && (w[c] = h)
    };
    n.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
}, function (t, e, i) {
    var n = i(5);
    t.exports = function (t) {
        if (!n(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function n(e) {
        return "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? t.exports = n = function (t) {
            return i(t)
        } : t.exports = n = function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t)
        }, n(e)
    }

    t.exports = n
}, function (t, e) {
    var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = i)
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, i) {
    var n = i(53)("wks"), r = i(34), s = i(3).Symbol, o = "function" == typeof s;
    (t.exports = function (t) {
        return n[t] || (n[t] = o && s[t] || (o ? s : r)("Symbol." + t))
    }).store = n
}, function (t, e, i) {
    var n = i(22), r = Math.min;
    t.exports = function (t) {
        return t > 0 ? r(n(t), 9007199254740991) : 0
    }
}, function (t, e, i) {
    t.exports = !i(4)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, i) {
    var n = i(1), r = i(96), s = i(24), o = Object.defineProperty;
    e.f = i(8) ? Object.defineProperty : function (t, e, i) {
        if (n(t), e = s(e, !0), n(i), r) try {
            return o(t, e, i)
        } catch (t) {
        }
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
        return "value" in i && (t[e] = i.value), t
    }
}, function (t, e, i) {
    var n = i(25);
    t.exports = function (t) {
        return Object(n(t))
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, i) {
    var n = i(9), r = i(33);
    t.exports = i(8) ? function (t, e, i) {
        return n.f(t, e, r(1, i))
    } : function (t, e, i) {
        return t[e] = i, t
    }
}, function (t, e, i) {
    var n = i(3), r = i(12), s = i(15), o = i(34)("src"), a = Function.toString, l = ("" + a).split("toString");
    i(19).inspectSource = function (t) {
        return a.call(t)
    }, (t.exports = function (t, e, i, a) {
        var c = "function" == typeof i;
        c && (s(i, "name") || r(i, "name", e)), t[e] !== i && (c && (s(i, o) || r(i, o, t[e] ? "" + t[e] : l.join(String(e)))), t === n ? t[e] = i : a ? t[e] ? t[e] = i : r(t, e, i) : (delete t[e], r(t, e, i)))
    })(Function.prototype, "toString", function () {
        return "function" == typeof this && this[o] || a.call(this)
    })
}, function (t, e, i) {
    var n = i(0), r = i(4), s = i(25), o = /"/g, a = function (t, e, i, n) {
        var r = String(s(t)), a = "<" + e;
        return "" !== i && (a += " " + i + '="' + String(n).replace(o, "&quot;") + '"'), a + ">" + r + "</" + e + ">"
    };
    t.exports = function (t, e) {
        var i = {};
        i[t] = e(a), n(n.P + n.F * r(function () {
            var e = ""[t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        }), "String", i)
    }
}, function (t, e) {
    var i = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return i.call(t, e)
    }
}, function (t, e, i) {
    var n = i(49), r = i(25);
    t.exports = function (t) {
        return n(r(t))
    }
}, function (t, e, i) {
    var n = i(50), r = i(33), s = i(16), o = i(24), a = i(15), l = i(96), c = Object.getOwnPropertyDescriptor;
    e.f = i(8) ? c : function (t, e) {
        if (t = s(t), e = o(e, !0), l) try {
            return c(t, e)
        } catch (t) {
        }
        if (a(t, e)) return r(!n.f.call(t, e), t[e])
    }
}, function (t, e, i) {
    var n = i(15), r = i(10), s = i(70)("IE_PROTO"), o = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = r(t), n(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
    }
}, function (t, e) {
    var i = t.exports = {version: "2.6.0"};
    "number" == typeof __e && (__e = i)
}, function (t, e, i) {
    var n = i(11);
    t.exports = function (t, e, i) {
        if (n(t), void 0 === e) return t;
        switch (i) {
            case 1:
                return function (i) {
                    return t.call(e, i)
                };
            case 2:
                return function (i, n) {
                    return t.call(e, i, n)
                };
            case 3:
                return function (i, n, r) {
                    return t.call(e, i, n, r)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    var i = {}.toString;
    t.exports = function (t) {
        return i.call(t).slice(8, -1)
    }
}, function (t, e) {
    var i = Math.ceil, n = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
    }
}, function (t, e, i) {
    "use strict";
    var n = i(4);
    t.exports = function (t, e) {
        return !!t && n(function () {
            e ? t.call(null, function () {
            }, 1) : t.call(null)
        })
    }
}, function (t, e, i) {
    var n = i(5);
    t.exports = function (t, e) {
        if (!n(t)) return t;
        var i, r;
        if (e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r;
        if ("function" == typeof (i = t.valueOf) && !n(r = i.call(t))) return r;
        if (!e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, i) {
    var n = i(0), r = i(19), s = i(4);
    t.exports = function (t, e) {
        var i = (r.Object || {})[t] || Object[t], o = {};
        o[t] = e(i), n(n.S + n.F * s(function () {
            i(1)
        }), "Object", o)
    }
}, function (t, e, i) {
    var n = i(20), r = i(49), s = i(10), o = i(7), a = i(86);
    t.exports = function (t, e) {
        var i = 1 == t, l = 2 == t, c = 3 == t, u = 4 == t, h = 6 == t, d = 5 == t || h, f = e || a;
        return function (e, a, p) {
            for (var v, g, m = s(e), y = r(m), b = n(a, p, 3), w = o(y.length), x = 0, T = i ? f(e, w) : l ? f(e, 0) : void 0; w > x; x++) if ((d || x in y) && (g = b(v = y[x], x, m), t)) if (i) T[x] = g; else if (g) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return x;
                case 2:
                    T.push(v)
            } else if (u) return !1;
            return h ? -1 : c || u ? u : T
        }
    }
}, function (t, e, i) {
    "use strict";
    if (i(8)) {
        var n = i(31), r = i(3), s = i(4), o = i(0), a = i(64), l = i(94), c = i(20), u = i(40), h = i(33), d = i(12),
            f = i(42), p = i(22), v = i(7), g = i(124), m = i(36), y = i(24), b = i(15), w = i(44), x = i(5), T = i(10),
            C = i(83), E = i(37), S = i(18), _ = i(38).f, k = i(85), M = i(34), P = i(6), L = i(27), D = i(54),
            A = i(52), I = i(88), $ = i(46), O = i(59), z = i(39), N = i(87), j = i(113), F = i(9), H = i(17), R = F.f,
            B = H.f, q = r.RangeError, W = r.TypeError, G = r.Uint8Array, Y = Array.prototype, V = l.ArrayBuffer,
            X = l.DataView, U = L(0), K = L(2), Q = L(3), J = L(4), Z = L(5), tt = L(6), et = D(!0), it = D(!1),
            nt = I.values, rt = I.keys, st = I.entries, ot = Y.lastIndexOf, at = Y.reduce, lt = Y.reduceRight,
            ct = Y.join, ut = Y.sort, ht = Y.slice, dt = Y.toString, ft = Y.toLocaleString, pt = P("iterator"),
            vt = P("toStringTag"), gt = M("typed_constructor"), mt = M("def_constructor"), yt = a.CONSTR, bt = a.TYPED,
            wt = a.VIEW, xt = L(1, function (t, e) {
                return _t(A(t, t[mt]), e)
            }), Tt = s(function () {
                return 1 === new G(new Uint16Array([1]).buffer)[0]
            }), Ct = !!G && !!G.prototype.set && s(function () {
                new G(1).set({})
            }), Et = function (t, e) {
                var i = p(t);
                if (i < 0 || i % e) throw q("Wrong offset!");
                return i
            }, St = function (t) {
                if (x(t) && bt in t) return t;
                throw W(t + " is not a typed array!")
            }, _t = function (t, e) {
                if (!(x(t) && gt in t)) throw W("It is not a typed array constructor!");
                return new t(e)
            }, kt = function (t, e) {
                return Mt(A(t, t[mt]), e)
            }, Mt = function (t, e) {
                for (var i = 0, n = e.length, r = _t(t, n); n > i;) r[i] = e[i++];
                return r
            }, Pt = function (t, e, i) {
                R(t, e, {
                    get: function () {
                        return this._d[i]
                    }
                })
            }, Lt = function (t) {
                var e, i, n, r, s, o, a = T(t), l = arguments.length, u = l > 1 ? arguments[1] : void 0, h = void 0 !== u,
                    d = k(a);
                if (null != d && !C(d)) {
                    for (o = d.call(a), n = [], e = 0; !(s = o.next()).done; e++) n.push(s.value);
                    a = n
                }
                for (h && l > 2 && (u = c(u, arguments[2], 2)), e = 0, i = v(a.length), r = _t(this, i); i > e; e++) r[e] = h ? u(a[e], e) : a[e];
                return r
            }, Dt = function () {
                for (var t = 0, e = arguments.length, i = _t(this, e); e > t;) i[t] = arguments[t++];
                return i
            }, At = !!G && s(function () {
                ft.call(new G(1))
            }), It = function () {
                return ft.apply(At ? ht.call(St(this)) : St(this), arguments)
            }, $t = {
                copyWithin: function (t, e) {
                    return j.call(St(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                }, every: function (t) {
                    return J(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, fill: function (t) {
                    return N.apply(St(this), arguments)
                }, filter: function (t) {
                    return kt(this, K(St(this), t, arguments.length > 1 ? arguments[1] : void 0))
                }, find: function (t) {
                    return Z(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, findIndex: function (t) {
                    return tt(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, forEach: function (t) {
                    U(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, indexOf: function (t) {
                    return it(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, includes: function (t) {
                    return et(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, join: function (t) {
                    return ct.apply(St(this), arguments)
                }, lastIndexOf: function (t) {
                    return ot.apply(St(this), arguments)
                }, map: function (t) {
                    return xt(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, reduce: function (t) {
                    return at.apply(St(this), arguments)
                }, reduceRight: function (t) {
                    return lt.apply(St(this), arguments)
                }, reverse: function () {
                    for (var t, e = St(this).length, i = Math.floor(e / 2), n = 0; n < i;) t = this[n], this[n++] = this[--e], this[e] = t;
                    return this
                }, some: function (t) {
                    return Q(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, sort: function (t) {
                    return ut.call(St(this), t)
                }, subarray: function (t, e) {
                    var i = St(this), n = i.length, r = m(t, n);
                    return new (A(i, i[mt]))(i.buffer, i.byteOffset + r * i.BYTES_PER_ELEMENT, v((void 0 === e ? n : m(e, n)) - r))
                }
            }, Ot = function (t, e) {
                return kt(this, ht.call(St(this), t, e))
            }, zt = function (t) {
                St(this);
                var e = Et(arguments[1], 1), i = this.length, n = T(t), r = v(n.length), s = 0;
                if (r + e > i) throw q("Wrong length!");
                for (; s < r;) this[e + s] = n[s++]
            }, Nt = {
                entries: function () {
                    return st.call(St(this))
                }, keys: function () {
                    return rt.call(St(this))
                }, values: function () {
                    return nt.call(St(this))
                }
            }, jt = function (t, e) {
                return x(t) && t[bt] && "symbol" != typeof e && e in t && String(+e) == String(e)
            }, Ft = function (t, e) {
                return jt(t, e = y(e, !0)) ? h(2, t[e]) : B(t, e)
            }, Ht = function (t, e, i) {
                return !(jt(t, e = y(e, !0)) && x(i) && b(i, "value")) || b(i, "get") || b(i, "set") || i.configurable || b(i, "writable") && !i.writable || b(i, "enumerable") && !i.enumerable ? R(t, e, i) : (t[e] = i.value, t)
            };
        yt || (H.f = Ft, F.f = Ht), o(o.S + o.F * !yt, "Object", {
            getOwnPropertyDescriptor: Ft,
            defineProperty: Ht
        }), s(function () {
            dt.call({})
        }) && (dt = ft = function () {
            return ct.call(this)
        });
        var Rt = f({}, $t);
        f(Rt, Nt), d(Rt, pt, Nt.values), f(Rt, {
            slice: Ot, set: zt, constructor: function () {
            }, toString: dt, toLocaleString: It
        }), Pt(Rt, "buffer", "b"), Pt(Rt, "byteOffset", "o"), Pt(Rt, "byteLength", "l"), Pt(Rt, "length", "e"), R(Rt, vt, {
            get: function () {
                return this[bt]
            }
        }), t.exports = function (t, e, i, l) {
            var c = t + ((l = !!l) ? "Clamped" : "") + "Array", h = "get" + t, f = "set" + t, p = r[c], m = p || {},
                y = p && S(p), b = !p || !a.ABV, T = {}, C = p && p.prototype, k = function (t, i) {
                    R(t, i, {
                        get: function () {
                            return function (t, i) {
                                var n = t._d;
                                return n.v[h](i * e + n.o, Tt)
                            }(this, i)
                        }, set: function (t) {
                            return function (t, i, n) {
                                var r = t._d;
                                l && (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), r.v[f](i * e + r.o, n, Tt)
                            }(this, i, t)
                        }, enumerable: !0
                    })
                };
            b ? (p = i(function (t, i, n, r) {
                u(t, p, c, "_d");
                var s, o, a, l, h = 0, f = 0;
                if (x(i)) {
                    if (!(i instanceof V || "ArrayBuffer" == (l = w(i)) || "SharedArrayBuffer" == l)) return bt in i ? Mt(p, i) : Lt.call(p, i);
                    s = i, f = Et(n, e);
                    var m = i.byteLength;
                    if (void 0 === r) {
                        if (m % e) throw q("Wrong length!");
                        if ((o = m - f) < 0) throw q("Wrong length!")
                    } else if ((o = v(r) * e) + f > m) throw q("Wrong length!");
                    a = o / e
                } else a = g(i), s = new V(o = a * e);
                for (d(t, "_d", {b: s, o: f, l: o, e: a, v: new X(s)}); h < a;) k(t, h++)
            }), C = p.prototype = E(Rt), d(C, "constructor", p)) : s(function () {
                p(1)
            }) && s(function () {
                new p(-1)
            }) && O(function (t) {
                new p, new p(null), new p(1.5), new p(t)
            }, !0) || (p = i(function (t, i, n, r) {
                var s;
                return u(t, p, c), x(i) ? i instanceof V || "ArrayBuffer" == (s = w(i)) || "SharedArrayBuffer" == s ? void 0 !== r ? new m(i, Et(n, e), r) : void 0 !== n ? new m(i, Et(n, e)) : new m(i) : bt in i ? Mt(p, i) : Lt.call(p, i) : new m(g(i))
            }), U(y !== Function.prototype ? _(m).concat(_(y)) : _(m), function (t) {
                t in p || d(p, t, m[t])
            }), p.prototype = C, n || (C.constructor = p));
            var M = C[pt], P = !!M && ("values" == M.name || null == M.name), L = Nt.values;
            d(p, gt, !0), d(C, bt, c), d(C, wt, !0), d(C, mt, p), (l ? new p(1)[vt] == c : vt in C) || R(C, vt, {
                get: function () {
                    return c
                }
            }), T[c] = p, o(o.G + o.W + o.F * (p != m), T), o(o.S, c, {BYTES_PER_ELEMENT: e}), o(o.S + o.F * s(function () {
                m.of.call(p, 1)
            }), c, {
                from: Lt,
                of: Dt
            }), "BYTES_PER_ELEMENT" in C || d(C, "BYTES_PER_ELEMENT", e), o(o.P, c, $t), z(c), o(o.P + o.F * Ct, c, {set: zt}), o(o.P + o.F * !P, c, Nt), n || C.toString == dt || (C.toString = dt), o(o.P + o.F * s(function () {
                new p(1).slice()
            }), c, {slice: Ot}), o(o.P + o.F * (s(function () {
                return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
            }) || !s(function () {
                C.toLocaleString.call([1, 2])
            })), c, {toLocaleString: It}), $[c] = P ? M : L, n || P || d(C, pt, L)
        }
    } else t.exports = function () {
    }
}, function (t, e, i) {
    var n = i(119), r = i(0), s = i(53)("metadata"), o = s.store || (s.store = new (i(122))), a = function (t, e, i) {
        var r = o.get(t);
        if (!r) {
            if (!i) return;
            o.set(t, r = new n)
        }
        var s = r.get(e);
        if (!s) {
            if (!i) return;
            r.set(e, s = new n)
        }
        return s
    };
    t.exports = {
        store: o, map: a, has: function (t, e, i) {
            var n = a(e, i, !1);
            return void 0 !== n && n.has(t)
        }, get: function (t, e, i) {
            var n = a(e, i, !1);
            return void 0 === n ? void 0 : n.get(t)
        }, set: function (t, e, i, n) {
            a(i, n, !0).set(t, e)
        }, keys: function (t, e) {
            var i = a(t, e, !1), n = [];
            return i && i.forEach(function (t, e) {
                n.push(e)
            }), n
        }, key: function (t) {
            return void 0 === t || "symbol" == typeof t ? t : String(t)
        }, exp: function (t) {
            r(r.S, "Reflect", t)
        }
    }
}, function (t, e, i) {
    var n = i(34)("meta"), r = i(5), s = i(15), o = i(9).f, a = 0, l = Object.isExtensible || function () {
        return !0
    }, c = !i(4)(function () {
        return l(Object.preventExtensions({}))
    }), u = function (t) {
        o(t, n, {value: {i: "O" + ++a, w: {}}})
    }, h = t.exports = {
        KEY: n, NEED: !1, fastKey: function (t, e) {
            if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!s(t, n)) {
                if (!l(t)) return "F";
                if (!e) return "E";
                u(t)
            }
            return t[n].i
        }, getWeak: function (t, e) {
            if (!s(t, n)) {
                if (!l(t)) return !0;
                if (!e) return !1;
                u(t)
            }
            return t[n].w
        }, onFreeze: function (t) {
            return c && h.NEED && l(t) && !s(t, n) && u(t), t
        }
    }
}, function (t, e) {
    t.exports = !1
}, function (t, e, i) {
    var n = i(6)("unscopables"), r = Array.prototype;
    null == r[n] && i(12)(r, n, {}), t.exports = function (t) {
        r[n][t] = !0
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e) {
    var i = 0, n = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
    }
}, function (t, e, i) {
    var n = i(98), r = i(71);
    t.exports = Object.keys || function (t) {
        return n(t, r)
    }
}, function (t, e, i) {
    var n = i(22), r = Math.max, s = Math.min;
    t.exports = function (t, e) {
        return (t = n(t)) < 0 ? r(t + e, 0) : s(t, e)
    }
}, function (t, e, i) {
    var n = i(1), r = i(99), s = i(71), o = i(70)("IE_PROTO"), a = function () {
    }, l = function () {
        var t, e = i(68)("iframe"), n = s.length;
        for (e.style.display = "none", i(72).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[s[n]];
        return l()
    };
    t.exports = Object.create || function (t, e) {
        var i;
        return null !== t ? (a.prototype = n(t), i = new a, a.prototype = null, i[o] = t) : i = l(), void 0 === e ? i : r(i, e)
    }
}, function (t, e, i) {
    var n = i(98), r = i(71).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return n(t, r)
    }
}, function (t, e, i) {
    "use strict";
    var n = i(3), r = i(9), s = i(8), o = i(6)("species");
    t.exports = function (t) {
        var e = n[t];
        s && e && !e[o] && r.f(e, o, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e) {
    t.exports = function (t, e, i, n) {
        if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
        return t
    }
}, function (t, e, i) {
    var n = i(20), r = i(111), s = i(83), o = i(1), a = i(7), l = i(85), c = {}, u = {};
    (e = t.exports = function (t, e, i, h, d) {
        var f, p, v, g, m = d ? function () {
            return t
        } : l(t), y = n(i, h, e ? 2 : 1), b = 0;
        if ("function" != typeof m) throw TypeError(t + " is not iterable!");
        if (s(m)) {
            for (f = a(t.length); f > b; b++) if ((g = e ? y(o(p = t[b])[0], p[1]) : y(t[b])) === c || g === u) return g
        } else for (v = m.call(t); !(p = v.next()).done;) if ((g = r(v, y, p.value, e)) === c || g === u) return g
    }).BREAK = c, e.RETURN = u
}, function (t, e, i) {
    var n = i(13);
    t.exports = function (t, e, i) {
        for (var r in e) n(t, r, e[r], i);
        return t
    }
}, function (t, e, i) {
    var n = i(9).f, r = i(15), s = i(6)("toStringTag");
    t.exports = function (t, e, i) {
        t && !r(t = i ? t : t.prototype, s) && n(t, s, {configurable: !0, value: e})
    }
}, function (t, e, i) {
    var n = i(21), r = i(6)("toStringTag"), s = "Arguments" == n(function () {
        return arguments
    }());
    t.exports = function (t) {
        var e, i, o;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        }(e = Object(t), r)) ? i : s ? n(e) : "Object" == (o = n(e)) && "function" == typeof e.callee ? "Arguments" : o
    }
}, function (t, e, i) {
    var n = i(0), r = i(25), s = i(4), o = i(74), a = "[" + o + "]", l = RegExp("^" + a + a + "*"),
        c = RegExp(a + a + "*$"), u = function (t, e, i) {
            var r = {}, a = s(function () {
                return !!o[t]() || "​" != "​"[t]()
            }), l = r[t] = a ? e(h) : o[t];
            i && (r[i] = l), n(n.P + n.F * a, "String", r)
        }, h = u.trim = function (t, e) {
            return t = String(r(t)), 1 & e && (t = t.replace(l, "")), 2 & e && (t = t.replace(c, "")), t
        };
    t.exports = u
}, function (t, e) {
    t.exports = {}
}, function (t, e, i) {
    var n = i(5);
    t.exports = function (t, e) {
        if (!n(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function (t, e, i) {
    var n;
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !function (e, i) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return i(t)
        } : i(e)
    }("undefined" != typeof window ? window : this, function (i, r) {
        "use strict";
        var s = [], o = i.document, a = Object.getPrototypeOf, l = s.slice, c = s.concat, u = s.push, h = s.indexOf,
            d = {}, f = d.toString, p = d.hasOwnProperty, v = p.toString, g = v.call(Object), m = {}, y = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            }, b = function (t) {
                return null != t && t === t.window
            }, w = {type: !0, src: !0, noModule: !0};

        function x(t, e, i) {
            var n, r = (e = e || o).createElement("script");
            if (r.text = t, i) for (n in w) i[n] && (r[n] = i[n]);
            e.head.appendChild(r).parentNode.removeChild(r)
        }

        function T(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[f.call(t)] || "object" : typeof t
        }

        var C = function (t, e) {
            return new C.fn.init(t, e)
        }, E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function S(t) {
            var e = !!t && "length" in t && t.length, i = T(t);
            return !y(t) && !b(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        C.fn = C.prototype = {
            jquery: "3.3.1", constructor: C, length: 0, toArray: function () {
                return l.call(this)
            }, get: function (t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
            }, pushStack: function (t) {
                var e = C.merge(this.constructor(), t);
                return e.prevObject = this, e
            }, each: function (t) {
                return C.each(this, t)
            }, map: function (t) {
                return this.pushStack(C.map(this, function (e, i) {
                    return t.call(e, i, e)
                }))
            }, slice: function () {
                return this.pushStack(l.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: u, sort: s.sort, splice: s.splice
        }, C.extend = C.fn.extend = function () {
            var t, e, i, n, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || y(o) || (o = {}), a === l && (o = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = o[e], o !== (n = t[e]) && (c && n && (C.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, s = i && Array.isArray(i) ? i : []) : s = i && C.isPlainObject(i) ? i : {}, o[e] = C.extend(c, s, n)) : void 0 !== n && (o[e] = n));
            return o
        }, C.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isPlainObject: function (t) {
                var e, i;
                return !(!t || "[object Object]" !== f.call(t)) && (!(e = a(t)) || "function" == typeof (i = p.call(e, "constructor") && e.constructor) && v.call(i) === g)
            }, isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, globalEval: function (t) {
                x(t)
            }, each: function (t, e) {
                var i, n = 0;
                if (S(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++) ; else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(E, "")
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (S(Object(t)) ? C.merge(i, "string" == typeof t ? [t] : t) : u.call(i, t)), i
            }, inArray: function (t, e, i) {
                return null == e ? -1 : h.call(e, t, i)
            }, merge: function (t, e) {
                for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
                return t.length = r, t
            }, grep: function (t, e, i) {
                for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) !== o && n.push(t[r]);
                return n
            }, map: function (t, e, i) {
                var n, r, s = 0, o = [];
                if (S(t)) for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && o.push(r); else for (s in t) null != (r = e(t[s], s, i)) && o.push(r);
                return c.apply([], o)
            }, guid: 1, support: m
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = s[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            d["[object " + e + "]"] = e.toLowerCase()
        });
        var _ =
            /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
            function (t) {
                var e, i, n, r, s, o, a, l, c, u, h, d, f, p, v, g, m, y, b, w = "sizzle" + 1 * new Date,
                    x = t.document, T = 0, C = 0, E = ot(), S = ot(), _ = ot(), k = function (t, e) {
                        return t === e && (h = !0), 0
                    }, M = {}.hasOwnProperty, P = [], L = P.pop, D = P.push, A = P.push, I = P.slice, $ = function (t, e) {
                        for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                        return -1
                    },
                    O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    z = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    j = "\\[" + z + "*(" + N + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + z + "*\\]",
                    F = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
                    H = new RegExp(z + "+", "g"),
                    R = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                    B = new RegExp("^" + z + "*," + z + "*"), q = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
                    W = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"), G = new RegExp(F),
                    Y = new RegExp("^" + N + "$"), V = {
                        ID: new RegExp("^#(" + N + ")"),
                        CLASS: new RegExp("^\\.(" + N + ")"),
                        TAG: new RegExp("^(" + N + "|[*])"),
                        ATTR: new RegExp("^" + j),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + O + ")$", "i"),
                        needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
                    }, X = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"), tt = function (t, e, i) {
                        var n = "0x" + e - 65536;
                        return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function (t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    }, nt = function () {
                        d()
                    }, rt = yt(function (t) {
                        return !0 === t.disabled && ("form" in t || "label" in t)
                    }, {dir: "parentNode", next: "legend"});
                try {
                    A.apply(P = I.call(x.childNodes), x.childNodes), P[x.childNodes.length].nodeType
                } catch (t) {
                    A = {
                        apply: P.length ? function (t, e) {
                            D.apply(t, I.call(e))
                        } : function (t, e) {
                            for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                            t.length = i - 1
                        }
                    }
                }

                function st(t, e, n, r) {
                    var s, a, c, u, h, p, m, y = e && e.ownerDocument, T = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== T && 9 !== T && 11 !== T) return n;
                    if (!r && ((e ? e.ownerDocument || e : x) !== f && d(e), e = e || f, v)) {
                        if (11 !== T && (h = Q.exec(t))) if (s = h[1]) {
                            if (9 === T) {
                                if (!(c = e.getElementById(s))) return n;
                                if (c.id === s) return n.push(c), n
                            } else if (y && (c = y.getElementById(s)) && b(e, c) && c.id === s) return n.push(c), n
                        } else {
                            if (h[2]) return A.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = h[3]) && i.getElementsByClassName && e.getElementsByClassName) return A.apply(n, e.getElementsByClassName(s)), n
                        }
                        if (i.qsa && !_[t + " "] && (!g || !g.test(t))) {
                            if (1 !== T) y = e, m = t; else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((u = e.getAttribute("id")) ? u = u.replace(et, it) : e.setAttribute("id", u = w), a = (p = o(t)).length; a--;) p[a] = "#" + u + " " + mt(p[a]);
                                m = p.join(","), y = J.test(t) && vt(e.parentNode) || e
                            }
                            if (m) try {
                                return A.apply(n, y.querySelectorAll(m)), n
                            } catch (t) {
                            } finally {
                                u === w && e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace(R, "$1"), e, n, r)
                }

                function ot() {
                    var t = [];
                    return function e(i, r) {
                        return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = r
                    }
                }

                function at(t) {
                    return t[w] = !0, t
                }

                function lt(t) {
                    var e = f.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ct(t, e) {
                    for (var i = t.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = e
                }

                function ut(t, e) {
                    var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (n) return n;
                    if (i) for (; i = i.nextSibling;) if (i === e) return -1;
                    return t ? 1 : -1
                }

                function ht(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function dt(t) {
                    return function (e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }

                function ft(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function pt(t) {
                    return at(function (e) {
                        return e = +e, at(function (i, n) {
                            for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                        })
                    })
                }

                function vt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                for (e in i = st.support = {}, s = st.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, d = st.setDocument = function (t) {
                    var e, r, o = t ? t.ownerDocument || t : x;
                    return o !== f && 9 === o.nodeType && o.documentElement ? (p = (f = o).documentElement, v = !s(f), x !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", nt, !1) : r.attachEvent && r.attachEvent("onunload", nt)), i.attributes = lt(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), i.getElementsByTagName = lt(function (t) {
                        return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                    }), i.getElementsByClassName = K.test(f.getElementsByClassName), i.getById = lt(function (t) {
                        return p.appendChild(t).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                    }), i.getById ? (n.filter.ID = function (t) {
                        var e = t.replace(Z, tt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, n.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && v) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }) : (n.filter.ID = function (t) {
                        var e = t.replace(Z, tt);
                        return function (t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }, n.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && v) {
                            var i, n, r, s = e.getElementById(t);
                            if (s) {
                                if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                                for (r = e.getElementsByName(t), n = 0; s = r[n++];) if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                            }
                            return []
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var i, n = [], r = 0, s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return s
                    }, n.find.CLASS = i.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && v) return e.getElementsByClassName(t)
                    }, m = [], g = [], (i.qsa = K.test(f.querySelectorAll)) && (lt(function (t) {
                        p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + z + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                    }), lt(function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = f.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + z + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (i.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function (t) {
                        i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), m.push("!=", F)
                    }), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), e = K.test(p.compareDocumentPosition), b = e || K.test(p.contains) ? function (t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function (t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, k = e ? function (t, e) {
                        if (t === e) return h = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === f || t.ownerDocument === x && b(x, t) ? -1 : e === f || e.ownerDocument === x && b(x, e) ? 1 : u ? $(u, t) - $(u, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return h = !0, 0;
                        var i, n = 0, r = t.parentNode, s = e.parentNode, o = [t], a = [e];
                        if (!r || !s) return t === f ? -1 : e === f ? 1 : r ? -1 : s ? 1 : u ? $(u, t) - $(u, e) : 0;
                        if (r === s) return ut(t, e);
                        for (i = t; i = i.parentNode;) o.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; o[n] === a[n];) n++;
                        return n ? ut(o[n], a[n]) : o[n] === x ? -1 : a[n] === x ? 1 : 0
                    }, f) : f
                }, st.matches = function (t, e) {
                    return st(t, null, null, e)
                }, st.matchesSelector = function (t, e) {
                    if ((t.ownerDocument || t) !== f && d(t), e = e.replace(W, "='$1']"), i.matchesSelector && v && !_[e + " "] && (!m || !m.test(e)) && (!g || !g.test(e))) try {
                        var n = y.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {
                    }
                    return st(e, f, null, [t]).length > 0
                }, st.contains = function (t, e) {
                    return (t.ownerDocument || t) !== f && d(t), b(t, e)
                }, st.attr = function (t, e) {
                    (t.ownerDocument || t) !== f && d(t);
                    var r = n.attrHandle[e.toLowerCase()],
                        s = r && M.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !v) : void 0;
                    return void 0 !== s ? s : i.attributes || !v ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
                }, st.escape = function (t) {
                    return (t + "").replace(et, it)
                }, st.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, st.uniqueSort = function (t) {
                    var e, n = [], r = 0, s = 0;
                    if (h = !i.detectDuplicates, u = !i.sortStable && t.slice(0), t.sort(k), h) {
                        for (; e = t[s++];) e === t[s] && (r = n.push(s));
                        for (; r--;) t.splice(n[r], 1)
                    }
                    return u = null, t
                }, r = st.getText = function (t) {
                    var e, i = "", n = 0, s = t.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
                        } else if (3 === s || 4 === s) return t.nodeValue
                    } else for (; e = t[n++];) i += r(e);
                    return i
                }, (n = st.selectors = {
                    cacheLength: 50,
                    createPseudo: at,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(Z, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, i = !t[6] && t[2];
                            return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && G.test(i) && (e = o(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(Z, tt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = E[t + " "];
                            return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && E(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        }, ATTR: function (t, e, i) {
                            return function (n) {
                                var r = st.attr(n, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(H, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (t, e, i, n, r) {
                            var s = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                            return 1 === n && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, i, l) {
                                var c, u, h, d, f, p, v = s !== o ? "nextSibling" : "previousSibling", g = e.parentNode,
                                    m = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                if (g) {
                                    if (s) {
                                        for (; v;) {
                                            for (d = e; d = d[v];) if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                            p = v = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [o ? g.firstChild : g.lastChild], o && y) {
                                        for (b = (f = (c = (u = (h = (d = g)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === T && c[1]) && c[2], d = f && g.childNodes[f]; d = ++f && d && d[v] || (b = f = 0) || p.pop();) if (1 === d.nodeType && ++b && d === e) {
                                            u[t] = [T, f, b];
                                            break
                                        }
                                    } else if (y && (b = f = (c = (u = (h = (d = e)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === T && c[1]), !1 === b) for (; (d = ++f && d && d[v] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [T, b]), d !== e));) ;
                                    return (b -= r) === n || b % n == 0 && b / n >= 0
                                }
                            }
                        }, PSEUDO: function (t, e) {
                            var i,
                                r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                            return r[w] ? r(e) : r.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, i) {
                                for (var n, s = r(t, e), o = s.length; o--;) t[n = $(t, s[o])] = !(i[n] = s[o])
                            }) : function (t) {
                                return r(t, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: at(function (t) {
                            var e = [], i = [], n = a(t.replace(R, "$1"));
                            return n[w] ? at(function (t, e, i, r) {
                                for (var s, o = n(t, null, r, []), a = t.length; a--;) (s = o[a]) && (t[a] = !(e[a] = s))
                            }) : function (t, r, s) {
                                return e[0] = t, n(e, null, s, i), e[0] = null, !i.pop()
                            }
                        }), has: at(function (t) {
                            return function (e) {
                                return st(t, e).length > 0
                            }
                        }), contains: at(function (t) {
                            return t = t.replace(Z, tt), function (e) {
                                return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                            }
                        }), lang: at(function (t) {
                            return Y.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(Z, tt).toLowerCase(), function (e) {
                                var i;
                                do {
                                    if (i = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        }, root: function (t) {
                            return t === p
                        }, focus: function (t) {
                            return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: ft(!1), disabled: ft(!0), checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        }, parent: function (t) {
                            return !n.pseudos.empty(t)
                        }, header: function (t) {
                            return U.test(t.nodeName)
                        }, input: function (t) {
                            return X.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: pt(function () {
                            return [0]
                        }), last: pt(function (t, e) {
                            return [e - 1]
                        }), eq: pt(function (t, e, i) {
                            return [i < 0 ? i + e : i]
                        }), even: pt(function (t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }), odd: pt(function (t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }), lt: pt(function (t, e, i) {
                            for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                            return t
                        }), gt: pt(function (t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = n.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) n.pseudos[e] = ht(e);
                for (e in {submit: !0, reset: !0}) n.pseudos[e] = dt(e);

                function gt() {
                }

                function mt(t) {
                    for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                    return n
                }

                function yt(t, e, i) {
                    var n = e.dir, r = e.next, s = r || n, o = i && "parentNode" === s, a = C++;
                    return e.first ? function (e, i, r) {
                        for (; e = e[n];) if (1 === e.nodeType || o) return t(e, i, r);
                        return !1
                    } : function (e, i, l) {
                        var c, u, h, d = [T, a];
                        if (l) {
                            for (; e = e[n];) if ((1 === e.nodeType || o) && t(e, i, l)) return !0
                        } else for (; e = e[n];) if (1 === e.nodeType || o) if (u = (h = e[w] || (e[w] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[n] || e; else {
                            if ((c = u[s]) && c[0] === T && c[1] === a) return d[2] = c[2];
                            if (u[s] = d, d[2] = t(e, i, l)) return !0
                        }
                        return !1
                    }
                }

                function bt(t) {
                    return t.length > 1 ? function (e, i, n) {
                        for (var r = t.length; r--;) if (!t[r](e, i, n)) return !1;
                        return !0
                    } : t[0]
                }

                function wt(t, e, i, n, r) {
                    for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++) (s = t[a]) && (i && !i(s, n, r) || (o.push(s), c && e.push(a)));
                    return o
                }

                function xt(t, e, i, n, r, s) {
                    return n && !n[w] && (n = xt(n)), r && !r[w] && (r = xt(r, s)), at(function (s, o, a, l) {
                        var c, u, h, d = [], f = [], p = o.length, v = s || function (t, e, i) {
                                for (var n = 0, r = e.length; n < r; n++) st(t, e[n], i);
                                return i
                            }(e || "*", a.nodeType ? [a] : a, []), g = !t || !s && e ? v : wt(v, d, t, a, l),
                            m = i ? r || (s ? t : p || n) ? [] : o : g;
                        if (i && i(g, m, a, l), n) for (c = wt(m, f), n(c, [], a, l), u = c.length; u--;) (h = c[u]) && (m[f[u]] = !(g[f[u]] = h));
                        if (s) {
                            if (r || t) {
                                if (r) {
                                    for (c = [], u = m.length; u--;) (h = m[u]) && c.push(g[u] = h);
                                    r(null, m = [], c, l)
                                }
                                for (u = m.length; u--;) (h = m[u]) && (c = r ? $(s, h) : d[u]) > -1 && (s[c] = !(o[c] = h))
                            }
                        } else m = wt(m === o ? m.splice(p, m.length) : m), r ? r(null, o, m, l) : A.apply(o, m)
                    })
                }

                function Tt(t) {
                    for (var e, i, r, s = t.length, o = n.relative[t[0].type], a = o || n.relative[" "], l = o ? 1 : 0, u = yt(function (t) {
                        return t === e
                    }, a, !0), h = yt(function (t) {
                        return $(e, t) > -1
                    }, a, !0), d = [function (t, i, n) {
                        var r = !o && (n || i !== c) || ((e = i).nodeType ? u(t, i, n) : h(t, i, n));
                        return e = null, r
                    }]; l < s; l++) if (i = n.relative[t[l].type]) d = [yt(bt(d), i)]; else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                            for (r = ++l; r < s && !n.relative[t[r].type]; r++) ;
                            return xt(l > 1 && bt(d), l > 1 && mt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(R, "$1"), i, l < r && Tt(t.slice(l, r)), r < s && Tt(t = t.slice(r)), r < s && mt(t))
                        }
                        d.push(i)
                    }
                    return bt(d)
                }

                return gt.prototype = n.filters = n.pseudos, n.setFilters = new gt, o = st.tokenize = function (t, e) {
                    var i, r, s, o, a, l, c, u = S[t + " "];
                    if (u) return e ? 0 : u.slice(0);
                    for (a = t, l = [], c = n.preFilter; a;) {
                        for (o in i && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = q.exec(a)) && (i = r.shift(), s.push({
                            value: i,
                            type: r[0].replace(R, " ")
                        }), a = a.slice(i.length)), n.filter) !(r = V[o].exec(a)) || c[o] && !(r = c[o](r)) || (i = r.shift(), s.push({
                            value: i,
                            type: o,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return e ? a.length : a ? st.error(t) : S(t, l).slice(0)
                }, a = st.compile = function (t, e) {
                    var i, r = [], s = [], a = _[t + " "];
                    if (!a) {
                        for (e || (e = o(t)), i = e.length; i--;) (a = Tt(e[i]))[w] ? r.push(a) : s.push(a);
                        (a = _(t, function (t, e) {
                            var i = e.length > 0, r = t.length > 0, s = function (s, o, a, l, u) {
                                var h, p, g, m = 0, y = "0", b = s && [], w = [], x = c,
                                    C = s || r && n.find.TAG("*", u), E = T += null == x ? 1 : Math.random() || .1,
                                    S = C.length;
                                for (u && (c = o === f || o || u); y !== S && null != (h = C[y]); y++) {
                                    if (r && h) {
                                        for (p = 0, o || h.ownerDocument === f || (d(h), a = !v); g = t[p++];) if (g(h, o || f, a)) {
                                            l.push(h);
                                            break
                                        }
                                        u && (T = E)
                                    }
                                    i && ((h = !g && h) && m--, s && b.push(h))
                                }
                                if (m += y, i && y !== m) {
                                    for (p = 0; g = e[p++];) g(b, w, o, a);
                                    if (s) {
                                        if (m > 0) for (; y--;) b[y] || w[y] || (w[y] = L.call(l));
                                        w = wt(w)
                                    }
                                    A.apply(l, w), u && !s && w.length > 0 && m + e.length > 1 && st.uniqueSort(l)
                                }
                                return u && (T = E, c = x), b
                            };
                            return i ? at(s) : s
                        }(s, r))).selector = t
                    }
                    return a
                }, l = st.select = function (t, e, i, r) {
                    var s, l, c, u, h, d = "function" == typeof t && t, f = !r && o(t = d.selector || t);
                    if (i = i || [], 1 === f.length) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && v && n.relative[l[1].type]) {
                            if (!(e = (n.find.ID(c.matches[0].replace(Z, tt), e) || [])[0])) return i;
                            d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                        }
                        for (s = V.needsContext.test(t) ? 0 : l.length; s-- && (c = l[s], !n.relative[u = c.type]);) if ((h = n.find[u]) && (r = h(c.matches[0].replace(Z, tt), J.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(s, 1), !(t = r.length && mt(l))) return A.apply(i, r), i;
                            break
                        }
                    }
                    return (d || a(t, f))(r, e, !v, i, !e || J.test(t) && vt(e.parentNode) || e), i
                }, i.sortStable = w.split("").sort(k).join("") === w, i.detectDuplicates = !!h, d(), i.sortDetached = lt(function (t) {
                    return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
                }), lt(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || ct("type|href|height|width", function (t, e, i) {
                    if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), i.attributes && lt(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || ct("value", function (t, e, i) {
                    if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), lt(function (t) {
                    return null == t.getAttribute("disabled")
                }) || ct(O, function (t, e, i) {
                    var n;
                    if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }), st
            }(i);
        C.find = _, C.expr = _.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = _.uniqueSort, C.text = _.getText, C.isXMLDoc = _.isXML, C.contains = _.contains, C.escapeSelector = _.escape;
        var k = function (t, e, i) {
            for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (r && C(t).is(i)) break;
                n.push(t)
            }
            return n
        }, M = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }, P = C.expr.match.needsContext;

        function L(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(t, e, i) {
            return y(e) ? C.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i
            }) : e.nodeType ? C.grep(t, function (t) {
                return t === e !== i
            }) : "string" != typeof e ? C.grep(t, function (t) {
                return h.call(e, t) > -1 !== i
            }) : C.filter(e, t, i)
        }

        C.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? C.find.matchesSelector(n, t) ? [n] : [] : C.find.matches(t, C.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, C.fn.extend({
            find: function (t) {
                var e, i, n = this.length, r = this;
                if ("string" != typeof t) return this.pushStack(C(t).filter(function () {
                    for (e = 0; e < n; e++) if (C.contains(r[e], this)) return !0
                }));
                for (i = this.pushStack([]), e = 0; e < n; e++) C.find(t, r[e], i);
                return n > 1 ? C.uniqueSort(i) : i
            }, filter: function (t) {
                return this.pushStack(A(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(A(this, t || [], !0))
            }, is: function (t) {
                return !!A(this, "string" == typeof t && P.test(t) ? C(t) : t || [], !1).length
            }
        });
        var I, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function (t, e, i) {
            var n, r;
            if (!t) return this;
            if (i = i || I, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : $.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : o, !0)), D.test(n[1]) && C.isPlainObject(e)) for (n in e) y(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (r = o.getElementById(n[2])) && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== i.ready ? i.ready(t) : t(C) : C.makeArray(t, this)
        }).prototype = C.fn, I = C(o);
        var O = /^(?:parents|prev(?:Until|All))/, z = {children: !0, contents: !0, next: !0, prev: !0};

        function N(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;) ;
            return t
        }

        C.fn.extend({
            has: function (t) {
                var e = C(t, this), i = e.length;
                return this.filter(function () {
                    for (var t = 0; t < i; t++) if (C.contains(this, e[t])) return !0
                })
            }, closest: function (t, e) {
                var i, n = 0, r = this.length, s = [], o = "string" != typeof t && C(t);
                if (!P.test(t)) for (; n < r; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && C.find.matchesSelector(i, t))) {
                    s.push(i);
                    break
                }
                return this.pushStack(s.length > 1 ? C.uniqueSort(s) : s)
            }, index: function (t) {
                return t ? "string" == typeof t ? h.call(C(t), this[0]) : h.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), C.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return k(t, "parentNode")
            }, parentsUntil: function (t, e, i) {
                return k(t, "parentNode", i)
            }, next: function (t) {
                return N(t, "nextSibling")
            }, prev: function (t) {
                return N(t, "previousSibling")
            }, nextAll: function (t) {
                return k(t, "nextSibling")
            }, prevAll: function (t) {
                return k(t, "previousSibling")
            }, nextUntil: function (t, e, i) {
                return k(t, "nextSibling", i)
            }, prevUntil: function (t, e, i) {
                return k(t, "previousSibling", i)
            }, siblings: function (t) {
                return M((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return M(t.firstChild)
            }, contents: function (t) {
                return L(t, "iframe") ? t.contentDocument : (L(t, "template") && (t = t.content || t), C.merge([], t.childNodes))
            }
        }, function (t, e) {
            C.fn[t] = function (i, n) {
                var r = C.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = C.filter(n, r)), this.length > 1 && (z[t] || C.uniqueSort(r), O.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var j = /[^\x20\t\r\n\f]+/g;

        function F(t) {
            return t
        }

        function H(t) {
            throw t
        }

        function R(t, e, i, n) {
            var r;
            try {
                t && y(r = t.promise) ? r.call(t).done(e).fail(i) : t && y(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }

        C.Callbacks = function (t) {
            t = "string" == typeof t ? function (t) {
                var e = {};
                return C.each(t.match(j) || [], function (t, i) {
                    e[i] = !0
                }), e
            }(t) : C.extend({}, t);
            var e, i, n, r, s = [], o = [], a = -1, l = function () {
                for (r = r || t.once, n = e = !0; o.length; a = -1) for (i = o.shift(); ++a < s.length;) !1 === s[a].apply(i[0], i[1]) && t.stopOnFalse && (a = s.length, i = !1);
                t.memory || (i = !1), e = !1, r && (s = i ? [] : "")
            }, c = {
                add: function () {
                    return s && (i && !e && (a = s.length - 1, o.push(i)), function e(i) {
                        C.each(i, function (i, n) {
                            y(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== T(n) && e(n)
                        })
                    }(arguments), i && !e && l()), this
                }, remove: function () {
                    return C.each(arguments, function (t, e) {
                        for (var i; (i = C.inArray(e, s, i)) > -1;) s.splice(i, 1), i <= a && a--
                    }), this
                }, has: function (t) {
                    return t ? C.inArray(t, s) > -1 : s.length > 0
                }, empty: function () {
                    return s && (s = []), this
                }, disable: function () {
                    return r = o = [], s = i = "", this
                }, disabled: function () {
                    return !s
                }, lock: function () {
                    return r = o = [], i || e || (s = i = ""), this
                }, locked: function () {
                    return !!r
                }, fireWith: function (t, i) {
                    return r || (i = [t, (i = i || []).slice ? i.slice() : i], o.push(i), e || l()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!n
                }
            };
            return c
        }, C.extend({
            Deferred: function (t) {
                var e = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
                    n = "pending", r = {
                        state: function () {
                            return n
                        }, always: function () {
                            return s.done(arguments).fail(arguments), this
                        }, catch: function (t) {
                            return r.then(null, t)
                        }, pipe: function () {
                            var t = arguments;
                            return C.Deferred(function (i) {
                                C.each(e, function (e, n) {
                                    var r = y(t[n[4]]) && t[n[4]];
                                    s[n[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, then: function (t, n, r) {
                            var s = 0;

                            function o(t, e, n, r) {
                                return function () {
                                    var a = this, l = arguments, c = function () {
                                        var i, c;
                                        if (!(t < s)) {
                                            if ((i = n.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                            c = i && ("object" == typeof i || "function" == typeof i) && i.then, y(c) ? r ? c.call(i, o(s, e, F, r), o(s, e, H, r)) : (s++, c.call(i, o(s, e, F, r), o(s, e, H, r), o(s, e, F, e.notifyWith))) : (n !== F && (a = void 0, l = [i]), (r || e.resolveWith)(a, l))
                                        }
                                    }, u = r ? c : function () {
                                        try {
                                            c()
                                        } catch (i) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(i, u.stackTrace), t + 1 >= s && (n !== H && (a = void 0, l = [i]), e.rejectWith(a, l))
                                        }
                                    };
                                    t ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()), i.setTimeout(u))
                                }
                            }

                            return C.Deferred(function (i) {
                                e[0][3].add(o(0, i, y(r) ? r : F, i.notifyWith)), e[1][3].add(o(0, i, y(t) ? t : F)), e[2][3].add(o(0, i, y(n) ? n : H))
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? C.extend(t, r) : r
                        }
                    }, s = {};
                return C.each(e, function (t, i) {
                    var o = i[2], a = i[5];
                    r[i[1]] = o.add, a && o.add(function () {
                        n = a
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), o.add(i[3].fire), s[i[0]] = function () {
                        return s[i[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[i[0] + "With"] = o.fireWith
                }), r.promise(s), t && t.call(s, s), s
            }, when: function (t) {
                var e = arguments.length, i = e, n = Array(i), r = l.call(arguments), s = C.Deferred(),
                    o = function (t) {
                        return function (i) {
                            n[t] = this, r[t] = arguments.length > 1 ? l.call(arguments) : i, --e || s.resolveWith(n, r)
                        }
                    };
                if (e <= 1 && (R(t, s.done(o(i)).resolve, s.reject, !e), "pending" === s.state() || y(r[i] && r[i].then))) return s.then();
                for (; i--;) R(r[i], o(i), s.reject);
                return s.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function (t, e) {
            i.console && i.console.warn && t && B.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, C.readyException = function (t) {
            i.setTimeout(function () {
                throw t
            })
        };
        var q = C.Deferred();

        function W() {
            o.removeEventListener("DOMContentLoaded", W), i.removeEventListener("load", W), C.ready()
        }

        C.fn.ready = function (t) {
            return q.then(t).catch(function (t) {
                C.readyException(t)
            }), this
        }, C.extend({
            isReady: !1, readyWait: 1, ready: function (t) {
                (!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== t && --C.readyWait > 0 || q.resolveWith(o, [C]))
            }
        }), C.ready.then = q.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? i.setTimeout(C.ready) : (o.addEventListener("DOMContentLoaded", W), i.addEventListener("load", W));
        var G = function (t, e, i, n, r, s, o) {
            var a = 0, l = t.length, c = null == i;
            if ("object" === T(i)) for (a in r = !0, i) G(t, e, a, i[a], !0, s, o); else if (void 0 !== n && (r = !0, y(n) || (o = !0), c && (o ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                return c.call(C(t), i)
            })), e)) for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : c ? e.call(t) : l ? e(t[0], i) : s
        }, Y = /^-ms-/, V = /-([a-z])/g;

        function X(t, e) {
            return e.toUpperCase()
        }

        function U(t) {
            return t.replace(Y, "ms-").replace(V, X)
        }

        var K = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function Q() {
            this.expando = C.expando + Q.uid++
        }

        Q.uid = 1, Q.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, K(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            }, set: function (t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[U(e)] = i; else for (n in e) r[U(n)] = e[n];
                return r
            }, get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
            }, access: function (t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            }, remove: function (t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in n ? [e] : e.match(j) || []).length;
                        for (; i--;) delete n[e[i]]
                    }
                    (void 0 === e || C.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !C.isEmptyObject(e)
            }
        };
        var J = new Q, Z = new Q, tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, et = /[A-Z]/g;

        function it(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = function (t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                    }(i)
                } catch (t) {
                }
                Z.set(t, e, i)
            } else i = void 0;
            return i
        }

        C.extend({
            hasData: function (t) {
                return Z.hasData(t) || J.hasData(t)
            }, data: function (t, e, i) {
                return Z.access(t, e, i)
            }, removeData: function (t, e) {
                Z.remove(t, e)
            }, _data: function (t, e, i) {
                return J.access(t, e, i)
            }, _removeData: function (t, e) {
                J.remove(t, e)
            }
        }), C.fn.extend({
            data: function (t, e) {
                var i, n, r, s = this[0], o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Z.get(s), 1 === s.nodeType && !J.get(s, "hasDataAttrs"))) {
                        for (i = o.length; i--;) o[i] && 0 === (n = o[i].name).indexOf("data-") && (n = U(n.slice(5)), it(s, n, r[n]));
                        J.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    Z.set(this, t)
                }) : G(this, function (e) {
                    var i;
                    if (s && void 0 === e) return void 0 !== (i = Z.get(s, t)) ? i : void 0 !== (i = it(s, t)) ? i : void 0;
                    this.each(function () {
                        Z.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    Z.remove(this, t)
                })
            }
        }), C.extend({
            queue: function (t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = J.get(t, e), i && (!n || Array.isArray(i) ? n = J.access(t, e, C.makeArray(i)) : n.push(i)), n || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var i = C.queue(t, e), n = i.length, r = i.shift(), s = C._queueHooks(t, e);
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function () {
                    C.dequeue(t, e)
                }, s)), !n && s && s.empty.fire()
            }, _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return J.get(t, i) || J.access(t, i, {
                    empty: C.Callbacks("once memory").add(function () {
                        J.remove(t, [e + "queue", i])
                    })
                })
            }
        }), C.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? C.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var i = C.queue(this, t, e);
                    C._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && C.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    C.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var i, n = 1, r = C.Deferred(), s = this, o = this.length, a = function () {
                    --n || r.resolveWith(s, [s])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) (i = J.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            rt = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"), st = ["Top", "Right", "Bottom", "Left"],
            ot = function (t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && C.contains(t.ownerDocument, t) && "none" === C.css(t, "display")
            }, at = function (t, e, i, n) {
                var r, s, o = {};
                for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                for (s in r = i.apply(t, n || []), e) t.style[s] = o[s];
                return r
            };

        function lt(t, e, i, n) {
            var r, s, o = 20, a = n ? function () {
                    return n.cur()
                } : function () {
                    return C.css(t, e, "")
                }, l = a(), c = i && i[3] || (C.cssNumber[e] ? "" : "px"),
                u = (C.cssNumber[e] || "px" !== c && +l) && rt.exec(C.css(t, e));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; o--;) C.style(t, e, u + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), u /= s;
                u *= 2, C.style(t, e, u + c), i = i || []
            }
            return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
        }

        var ct = {};

        function ut(t) {
            var e, i = t.ownerDocument, n = t.nodeName, r = ct[n];
            return r || (e = i.body.appendChild(i.createElement(n)), r = C.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ct[n] = r, r)
        }

        function ht(t, e) {
            for (var i, n, r = [], s = 0, o = t.length; s < o; s++) (n = t[s]).style && (i = n.style.display, e ? ("none" === i && (r[s] = J.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && ot(n) && (r[s] = ut(n))) : "none" !== i && (r[s] = "none", J.set(n, "display", i)));
            for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
            return t
        }

        C.fn.extend({
            show: function () {
                return ht(this, !0)
            }, hide: function () {
                return ht(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    ot(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var dt = /^(?:checkbox|radio)$/i, ft = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            pt = /^$|^module$|\/(?:java|ecma)script/i, vt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function gt(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && L(t, e) ? C.merge([t], i) : i
        }

        function mt(t, e) {
            for (var i = 0, n = t.length; i < n; i++) J.set(t[i], "globalEval", !e || J.get(e[i], "globalEval"))
        }

        vt.optgroup = vt.option, vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead, vt.th = vt.td;
        var yt, bt, wt = /<|&#?\w+;/;

        function xt(t, e, i, n, r) {
            for (var s, o, a, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++) if ((s = t[f]) || 0 === s) if ("object" === T(s)) C.merge(d, s.nodeType ? [s] : s); else if (wt.test(s)) {
                for (o = o || h.appendChild(e.createElement("div")), a = (ft.exec(s) || ["", ""])[1].toLowerCase(), l = vt[a] || vt._default, o.innerHTML = l[1] + C.htmlPrefilter(s) + l[2], u = l[0]; u--;) o = o.lastChild;
                C.merge(d, o.childNodes), (o = h.firstChild).textContent = ""
            } else d.push(e.createTextNode(s));
            for (h.textContent = "", f = 0; s = d[f++];) if (n && C.inArray(s, n) > -1) r && r.push(s); else if (c = C.contains(s.ownerDocument, s), o = gt(h.appendChild(s), "script"), c && mt(o), i) for (u = 0; s = o[u++];) pt.test(s.type || "") && i.push(s);
            return h
        }

        yt = o.createDocumentFragment().appendChild(o.createElement("div")), (bt = o.createElement("input")).setAttribute("type", "radio"), bt.setAttribute("checked", "checked"), bt.setAttribute("name", "t"), yt.appendChild(bt), m.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked, yt.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue;
        var Tt = o.documentElement, Ct = /^key/, Et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            St = /^([^.]*)(?:\.(.+)|)/;

        function _t() {
            return !0
        }

        function kt() {
            return !1
        }

        function Mt() {
            try {
                return o.activeElement
            } catch (t) {
            }
        }

        function Pt(t, e, i, n, r, s) {
            var o, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), e) Pt(t, a, i, n, e[a], s);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = kt; else if (!r) return t;
            return 1 === s && (o = r, (r = function (t) {
                return C().off(t), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = C.guid++)), t.each(function () {
                C.event.add(this, e, r, n, i)
            })
        }

        C.event = {
            global: {}, add: function (t, e, i, n, r) {
                var s, o, a, l, c, u, h, d, f, p, v, g = J.get(t);
                if (g) for (i.handler && (i = (s = i).handler, r = s.selector), r && C.find.matchesSelector(Tt, r), i.guid || (i.guid = C.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (e) {
                    return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                }), c = (e = (e || "").match(j) || [""]).length; c--;) f = v = (a = St.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (h = C.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = C.event.special[f] || {}, u = C.extend({
                    type: f,
                    origType: v,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && C.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, s), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, p, o) || t.addEventListener && t.addEventListener(f, o)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), C.event.global[f] = !0)
            }, remove: function (t, e, i, n, r) {
                var s, o, a, l, c, u, h, d, f, p, v, g = J.hasData(t) && J.get(t);
                if (g && (l = g.events)) {
                    for (c = (e = (e || "").match(j) || [""]).length; c--;) if (f = v = (a = St.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = C.event.special[f] || {}, d = l[f = (n ? h.delegateType : h.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) u = d[s], !r && v !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(s, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                        o && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, g.handle) || C.removeEvent(t, f, g.handle), delete l[f])
                    } else for (f in l) C.event.remove(t, f + e[c], i, n, !0);
                    C.isEmptyObject(l) && J.remove(t, "handle events")
                }
            }, dispatch: function (t) {
                var e, i, n, r, s, o, a = C.event.fix(t), l = new Array(arguments.length),
                    c = (J.get(this, "events") || {})[a.type] || [], u = C.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (o = C.event.handlers.call(this, a, c), e = 0; (r = o[e++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, i = 0; (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((C.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            }, handlers: function (t, e) {
                var i, n, r, s, o, a = [], l = e.delegateCount, c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                    for (s = [], o = {}, i = 0; i < l; i++) void 0 === o[r = (n = e[i]).selector + " "] && (o[r] = n.needsContext ? C(r, this).index(c) > -1 : C.find(r, this, null, [c]).length), o[r] && s.push(n);
                    s.length && a.push({elem: c, handlers: s})
                }
                return c = this, l < e.length && a.push({elem: c, handlers: e.slice(l)}), a
            }, addProp: function (t, e) {
                Object.defineProperty(C.Event.prototype, t, {
                    enumerable: !0, configurable: !0, get: y(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    }, set: function (e) {
                        Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                    }
                })
            }, fix: function (t) {
                return t[C.expando] ? t : new C.Event(t)
            }, special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== Mt() && this.focus) return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === Mt() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && L(this, "input")) return this.click(), !1
                    }, _default: function (t) {
                        return L(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, C.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, C.Event = function (t, e) {
            if (!(this instanceof C.Event)) return new C.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _t : kt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: kt,
            isPropagationStopped: kt,
            isImmediatePropagationStopped: kt,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = _t, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = _t, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = _t, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && Ct.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Et.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, C.event.addProp), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            C.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var i, n = t.relatedTarget, r = t.handleObj;
                    return n && (n === this || C.contains(this, n)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), C.fn.extend({
            on: function (t, e, i, n) {
                return Pt(this, t, e, i, n)
            }, one: function (t, e, i, n) {
                return Pt(this, t, e, i, n, 1)
            }, off: function (t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, C(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = kt), this.each(function () {
                    C.event.remove(this, t, i, e)
                })
            }
        });
        var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Dt = /<script|<style|<link/i, At = /checked\s*(?:[^=]|=\s*.checked.)/i,
            It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function $t(t, e) {
            return L(t, "table") && L(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t
        }

        function Ot(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function zt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Nt(t, e) {
            var i, n, r, s, o, a, l, c;
            if (1 === e.nodeType) {
                if (J.hasData(t) && (s = J.access(t), o = J.set(e, s), c = s.events)) for (r in delete o.handle, o.events = {}, c) for (i = 0, n = c[r].length; i < n; i++) C.event.add(e, r, c[r][i]);
                Z.hasData(t) && (a = Z.access(t), l = C.extend({}, a), Z.set(e, l))
            }
        }

        function jt(t, e, i, n) {
            e = c.apply([], e);
            var r, s, o, a, l, u, h = 0, d = t.length, f = d - 1, p = e[0], v = y(p);
            if (v || d > 1 && "string" == typeof p && !m.checkClone && At.test(p)) return t.each(function (r) {
                var s = t.eq(r);
                v && (e[0] = p.call(this, r, s.html())), jt(s, e, i, n)
            });
            if (d && (s = (r = xt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
                for (a = (o = C.map(gt(r, "script"), Ot)).length; h < d; h++) l = r, h !== f && (l = C.clone(l, !0, !0), a && C.merge(o, gt(l, "script"))), i.call(t[h], l, h);
                if (a) for (u = o[o.length - 1].ownerDocument, C.map(o, zt), h = 0; h < a; h++) l = o[h], pt.test(l.type || "") && !J.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : x(l.textContent.replace(It, ""), u, l))
            }
            return t
        }

        function Ft(t, e, i) {
            for (var n, r = e ? C.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || C.cleanData(gt(n)), n.parentNode && (i && C.contains(n.ownerDocument, n) && mt(gt(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        C.extend({
            htmlPrefilter: function (t) {
                return t.replace(Lt, "<$1></$2>")
            }, clone: function (t, e, i) {
                var n, r, s, o, a, l, c, u = t.cloneNode(!0), h = C.contains(t.ownerDocument, t);
                if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t))) for (o = gt(u), n = 0, r = (s = gt(t)).length; n < r; n++) a = s[n], l = o[n], c = void 0, "input" === (c = l.nodeName.toLowerCase()) && dt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                if (e) if (i) for (s = s || gt(t), o = o || gt(u), n = 0, r = s.length; n < r; n++) Nt(s[n], o[n]); else Nt(t, u);
                return (o = gt(u, "script")).length > 0 && mt(o, !h && gt(t, "script")), u
            }, cleanData: function (t) {
                for (var e, i, n, r = C.event.special, s = 0; void 0 !== (i = t[s]); s++) if (K(i)) {
                    if (e = i[J.expando]) {
                        if (e.events) for (n in e.events) r[n] ? C.event.remove(i, n) : C.removeEvent(i, n, e.handle);
                        i[J.expando] = void 0
                    }
                    i[Z.expando] && (i[Z.expando] = void 0)
                }
            }
        }), C.fn.extend({
            detach: function (t) {
                return Ft(this, t, !0)
            }, remove: function (t) {
                return Ft(this, t)
            }, text: function (t) {
                return G(this, function (t) {
                    return void 0 === t ? C.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            }, append: function () {
                return jt(this, arguments, function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
                })
            }, prepend: function () {
                return jt(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = $t(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return jt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return jt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(gt(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return C.clone(this, t, e)
                })
            }, html: function (t) {
                return G(this, function (t) {
                    var e = this[0] || {}, i = 0, n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Dt.test(t) && !vt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = C.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (C.cleanData(gt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return jt(this, arguments, function (e) {
                    var i = this.parentNode;
                    C.inArray(this, t) < 0 && (C.cleanData(gt(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            C.fn[t] = function (t) {
                for (var i, n = [], r = C(t), s = r.length - 1, o = 0; o <= s; o++) i = o === s ? this : this.clone(!0), C(r[o])[e](i), u.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Ht = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"), Rt = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = i), e.getComputedStyle(t)
        }, Bt = new RegExp(st.join("|"), "i");

        function qt(t, e, i) {
            var n, r, s, o, a = t.style;
            return (i = i || Rt(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || C.contains(t.ownerDocument, t) || (o = C.style(t, e)), !m.pixelBoxStyles() && Ht.test(o) && Bt.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
        }

        function Wt(t, e) {
            return {
                get: function () {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function t() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Tt.appendChild(c).appendChild(u);
                    var t = i.getComputedStyle(u);
                    n = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", a = 36 === e(t.right), r = 36 === e(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", Tt.removeChild(c), u = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }

            var n, r, s, a, l, c = o.createElement("div"), u = o.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(m, {
                boxSizingReliable: function () {
                    return t(), r
                }, pixelBoxStyles: function () {
                    return t(), a
                }, pixelPosition: function () {
                    return t(), n
                }, reliableMarginLeft: function () {
                    return t(), l
                }, scrollboxSize: function () {
                    return t(), s
                }
            }))
        }();
        var Gt = /^(none|table(?!-c[ea]).+)/, Yt = /^--/,
            Vt = {position: "absolute", visibility: "hidden", display: "block"},
            Xt = {letterSpacing: "0", fontWeight: "400"}, Ut = ["Webkit", "Moz", "ms"],
            Kt = o.createElement("div").style;

        function Qt(t) {
            var e = C.cssProps[t];
            return e || (e = C.cssProps[t] = function (t) {
                if (t in Kt) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), i = Ut.length; i--;) if ((t = Ut[i] + e) in Kt) return t
            }(t) || t), e
        }

        function Jt(t, e, i) {
            var n = rt.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function Zt(t, e, i, n, r, s) {
            var o = "width" === e ? 1 : 0, a = 0, l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; o < 4; o += 2) "margin" === i && (l += C.css(t, i + st[o], !0, r)), n ? ("content" === i && (l -= C.css(t, "padding" + st[o], !0, r)), "margin" !== i && (l -= C.css(t, "border" + st[o] + "Width", !0, r))) : (l += C.css(t, "padding" + st[o], !0, r), "padding" !== i ? l += C.css(t, "border" + st[o] + "Width", !0, r) : a += C.css(t, "border" + st[o] + "Width", !0, r));
            return !n && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5))), l
        }

        function te(t, e, i) {
            var n = Rt(t), r = qt(t, e, n), s = "border-box" === C.css(t, "boxSizing", !1, n), o = s;
            if (Ht.test(r)) {
                if (!i) return r;
                r = "auto"
            }
            return o = o && (m.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === C.css(t, "display", !1, n)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], o = !0), (r = parseFloat(r) || 0) + Zt(t, e, i || (s ? "border" : "content"), o, n, r) + "px"
        }

        function ee(t, e, i, n, r) {
            return new ee.prototype.init(t, e, i, n, r)
        }

        C.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = qt(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, o, a = U(e), l = Yt.test(e), c = t.style;
                    if (l || (e = Qt(a)), o = C.cssHooks[e] || C.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : c[e];
                    "string" === (s = typeof i) && (r = rt.exec(i)) && r[1] && (i = lt(t, e, r), s = "number"), null != i && i == i && ("number" === s && (i += r && r[3] || (C.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
                }
            },
            css: function (t, e, i, n) {
                var r, s, o, a = U(e);
                return Yt.test(e) || (e = Qt(a)), (o = C.cssHooks[e] || C.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = qt(t, e, n)), "normal" === r && e in Xt && (r = Xt[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
            }
        }), C.each(["height", "width"], function (t, e) {
            C.cssHooks[e] = {
                get: function (t, i, n) {
                    if (i) return !Gt.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? te(t, e, n) : at(t, Vt, function () {
                        return te(t, e, n)
                    })
                }, set: function (t, i, n) {
                    var r, s = Rt(t), o = "border-box" === C.css(t, "boxSizing", !1, s), a = n && Zt(t, e, n, o, s);
                    return o && m.scrollboxSize() === s.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - Zt(t, e, "border", !1, s) - .5)), a && (r = rt.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = C.css(t, e)), Jt(0, i, a)
                }
            }
        }), C.cssHooks.marginLeft = Wt(m.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(qt(t, "marginLeft")) || t.getBoundingClientRect().left - at(t, {marginLeft: 0}, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), C.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            C.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + st[n] + e] = s[n] || s[n - 2] || s[0];
                    return r
                }
            }, "margin" !== t && (C.cssHooks[t + e].set = Jt)
        }), C.fn.extend({
            css: function (t, e) {
                return G(this, function (t, e, i) {
                    var n, r, s = {}, o = 0;
                    if (Array.isArray(e)) {
                        for (n = Rt(t), r = e.length; o < r; o++) s[e[o]] = C.css(t, e[o], !1, n);
                        return s
                    }
                    return void 0 !== i ? C.style(t, e, i) : C.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), C.Tween = ee, ee.prototype = {
            constructor: ee, init: function (t, e, i, n, r, s) {
                this.elem = t, this.prop = i, this.easing = r || C.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (C.cssNumber[i] ? "" : "px")
            }, cur: function () {
                var t = ee.propHooks[this.prop];
                return t && t.get ? t.get(this) : ee.propHooks._default.get(this)
            }, run: function (t) {
                var e, i = ee.propHooks[this.prop];
                return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ee.propHooks._default.set(this), this
            }
        }, ee.prototype.init.prototype = ee.prototype, ee.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                }, set: function (t) {
                    C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[C.cssProps[t.prop]] && !C.cssHooks[t.prop] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, ee.propHooks.scrollTop = ee.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, C.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, C.fx = ee.prototype.init, C.fx.step = {};
        var ie, ne, re = /^(?:toggle|show|hide)$/, se = /queueHooks$/;

        function oe() {
            ne && (!1 === o.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(oe) : i.setTimeout(oe, C.fx.interval), C.fx.tick())
        }

        function ae() {
            return i.setTimeout(function () {
                ie = void 0
            }), ie = Date.now()
        }

        function le(t, e) {
            var i, n = 0, r = {height: t};
            for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = st[n])] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function ce(t, e, i) {
            for (var n, r = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), s = 0, o = r.length; s < o; s++) if (n = r[s].call(i, e, t)) return n
        }

        function ue(t, e, i) {
            var n, r, s = 0, o = ue.prefilters.length, a = C.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (r) return !1;
                for (var e = ie || ae(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), s = 0, o = c.tweens.length; s < o; s++) c.tweens[s].run(n);
                return a.notifyWith(t, [c, n, i]), n < 1 && o ? i : (o || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            }, c = a.promise({
                elem: t,
                props: C.extend({}, e),
                opts: C.extend(!0, {specialEasing: {}, easing: C.easing._default}, i),
                originalProperties: e,
                originalOptions: i,
                startTime: ie || ae(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = C.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (e) {
                    var i = 0, n = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i < n; i++) c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (!function (t, e) {
                var i, n, r, s, o;
                for (i in t) if (r = e[n = U(i)], s = t[i], Array.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (o = C.cssHooks[n]) && "expand" in o) for (i in s = o.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = r); else e[n] = r
            }(u, c.opts.specialEasing); s < o; s++) if (n = ue.prefilters[s].call(c, t, u, c.opts)) return y(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
            return C.map(u, ce, c), y(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        C.Animation = C.extend(ue, {
            tweeners: {
                "*": [function (t, e) {
                    var i = this.createTween(t, e);
                    return lt(i.elem, t, rt.exec(e), i), i
                }]
            }, tweener: function (t, e) {
                y(t) ? (e = t, t = ["*"]) : t = t.match(j);
                for (var i, n = 0, r = t.length; n < r; n++) i = t[n], ue.tweeners[i] = ue.tweeners[i] || [], ue.tweeners[i].unshift(e)
            }, prefilters: [function (t, e, i) {
                var n, r, s, o, a, l, c, u, h = "width" in e || "height" in e, d = this, f = {}, p = t.style,
                    v = t.nodeType && ot(t), g = J.get(t, "fxshow");
                for (n in i.queue || (null == (o = C._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
                    o.unqueued || a()
                }), o.unqueued++, d.always(function () {
                    d.always(function () {
                        o.unqueued--, C.queue(t, "fx").length || o.empty.fire()
                    })
                })), e) if (r = e[n], re.test(r)) {
                    if (delete e[n], s = s || "toggle" === r, r === (v ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[n]) continue;
                        v = !0
                    }
                    f[n] = g && g[n] || C.style(t, n)
                }
                if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(f)) for (n in h && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = J.get(t, "display")), "none" === (u = C.css(t, "display")) && (c ? u = c : (ht([t], !0), c = t.style.display || c, u = C.css(t, "display"), ht([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(t, "float") && (l || (d.done(function () {
                    p.display = c
                }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always(function () {
                    p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                })), l = !1, f) l || (g ? "hidden" in g && (v = g.hidden) : g = J.access(t, "fxshow", {display: c}), s && (g.hidden = !v), v && ht([t], !0), d.done(function () {
                    for (n in v || ht([t]), J.remove(t, "fxshow"), f) C.style(t, n, f[n])
                })), l = ce(v ? g[n] : 0, n, d), n in g || (g[n] = l.start, v && (l.end = l.start, l.start = 0))
            }], prefilter: function (t, e) {
                e ? ue.prefilters.unshift(t) : ue.prefilters.push(t)
            }
        }), C.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? C.extend({}, t) : {
                complete: i || !i && e || y(t) && t,
                duration: t,
                easing: i && e || e && !y(e) && e
            };
            return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                y(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
            }, n
        }, C.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(ot).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
            }, animate: function (t, e, i, n) {
                var r = C.isEmptyObject(t), s = C.speed(e, i, n), o = function () {
                    var e = ue(this, C.extend({}, t), s);
                    (r || J.get(this, "finish")) && e.stop(!0)
                };
                return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
            }, stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, r = null != t && t + "queueHooks", s = C.timers, o = J.get(this);
                    if (r) o[r] && o[r].stop && n(o[r]); else for (r in o) o[r] && o[r].stop && se.test(r) && n(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                    !e && i || C.dequeue(this, t)
                })
            }, finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var e, i = J.get(this), n = i[t + "queue"], r = i[t + "queueHooks"], s = C.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, C.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), C.each(["toggle", "show", "hide"], function (t, e) {
            var i = C.fn[e];
            C.fn[e] = function (t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(le(e, !0), t, n, r)
            }
        }), C.each({
            slideDown: le("show"),
            slideUp: le("hide"),
            slideToggle: le("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            C.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), C.timers = [], C.fx.tick = function () {
            var t, e = 0, i = C.timers;
            for (ie = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || C.fx.stop(), ie = void 0
        }, C.fx.timer = function (t) {
            C.timers.push(t), C.fx.start()
        }, C.fx.interval = 13, C.fx.start = function () {
            ne || (ne = !0, oe())
        }, C.fx.stop = function () {
            ne = null
        }, C.fx.speeds = {slow: 600, fast: 200, _default: 400}, C.fn.delay = function (t, e) {
            return t = C.fx && C.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, n) {
                var r = i.setTimeout(e, t);
                n.stop = function () {
                    i.clearTimeout(r)
                }
            })
        }, function () {
            var t = o.createElement("input"), e = o.createElement("select").appendChild(o.createElement("option"));
            t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = e.selected, (t = o.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value
        }();
        var he, de = C.expr.attrHandle;
        C.fn.extend({
            attr: function (t, e) {
                return G(this, C.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    C.removeAttr(this, t)
                })
            }
        }), C.extend({
            attr: function (t, e, i) {
                var n, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? C.prop(t, e, i) : (1 === s && C.isXMLDoc(t) || (r = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? he : void 0)), void 0 !== i ? null === i ? void C.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = C.find.attr(t, e)) ? void 0 : n)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!m.radioValue && "radio" === e && L(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var i, n = 0, r = e && e.match(j);
                if (r && 1 === t.nodeType) for (; i = r[n++];) t.removeAttribute(i)
            }
        }), he = {
            set: function (t, e, i) {
                return !1 === e ? C.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = de[e] || C.find.attr;
            de[e] = function (t, e, n) {
                var r, s, o = e.toLowerCase();
                return n || (s = de[o], de[o] = r, r = null != i(t, e, n) ? o : null, de[o] = s), r
            }
        });
        var fe = /^(?:input|select|textarea|button)$/i, pe = /^(?:a|area)$/i;

        function ve(t) {
            return (t.match(j) || []).join(" ")
        }

        function ge(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function me(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(j) || []
        }

        C.fn.extend({
            prop: function (t, e) {
                return G(this, C.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[C.propFix[t] || t]
                })
            }
        }), C.extend({
            prop: function (t, e, i) {
                var n, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(t) || (e = C.propFix[e] || e, r = C.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = C.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), m.optSelected || (C.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            C.propFix[this.toLowerCase()] = this
        }), C.fn.extend({
            addClass: function (t) {
                var e, i, n, r, s, o, a, l = 0;
                if (y(t)) return this.each(function (e) {
                    C(this).addClass(t.call(this, e, ge(this)))
                });
                if ((e = me(t)).length) for (; i = this[l++];) if (r = ge(i), n = 1 === i.nodeType && " " + ve(r) + " ") {
                    for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                    r !== (a = ve(n)) && i.setAttribute("class", a)
                }
                return this
            }, removeClass: function (t) {
                var e, i, n, r, s, o, a, l = 0;
                if (y(t)) return this.each(function (e) {
                    C(this).removeClass(t.call(this, e, ge(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = me(t)).length) for (; i = this[l++];) if (r = ge(i), n = 1 === i.nodeType && " " + ve(r) + " ") {
                    for (o = 0; s = e[o++];) for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                    r !== (a = ve(n)) && i.setAttribute("class", a)
                }
                return this
            }, toggleClass: function (t, e) {
                var i = typeof t, n = "string" === i || Array.isArray(t);
                return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each(function (i) {
                    C(this).toggleClass(t.call(this, i, ge(this), e), e)
                }) : this.each(function () {
                    var e, r, s, o;
                    if (n) for (r = 0, s = C(this), o = me(t); e = o[r++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else void 0 !== t && "boolean" !== i || ((e = ge(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""))
                })
            }, hasClass: function (t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && (" " + ve(ge(i)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ye = /\r/g;
        C.fn.extend({
            val: function (t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = y(t), this.each(function (i) {
                    var r;
                    1 === this.nodeType && (null == (r = n ? t.call(this, i, C(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = C.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), (e = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(ye, "") : null == i ? "" : i : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = C.find.attr(t, "value");
                        return null != e ? e : ve(C.text(t))
                    }
                }, select: {
                    get: function (t) {
                        var e, i, n, r = t.options, s = t.selectedIndex, o = "select-one" === t.type, a = o ? null : [],
                            l = o ? s + 1 : r.length;
                        for (n = s < 0 ? l : o ? s : 0; n < l; n++) if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !L(i.parentNode, "optgroup"))) {
                            if (e = C(i).val(), o) return e;
                            a.push(e)
                        }
                        return a
                    }, set: function (t, e) {
                        for (var i, n, r = t.options, s = C.makeArray(e), o = r.length; o--;) ((n = r[o]).selected = C.inArray(C.valHooks.option.get(n), s) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), C.each(["radio", "checkbox"], function () {
            C.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = C.inArray(C(t).val(), e) > -1
                }
            }, m.checkOn || (C.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), m.focusin = "onfocusin" in i;
        var be = /^(?:focusinfocus|focusoutblur)$/, we = function (t) {
            t.stopPropagation()
        };
        C.extend(C.event, {
            trigger: function (t, e, n, r) {
                var s, a, l, c, u, h, d, f, v = [n || o], g = p.call(t, "type") ? t.type : t,
                    m = p.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = f = l = n = n || o, 3 !== n.nodeType && 8 !== n.nodeType && !be.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[C.expando] ? t : new C.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : C.makeArray(e, [t]), d = C.event.special[g] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, e))) {
                    if (!r && !d.noBubble && !b(n)) {
                        for (c = d.delegateType || g, be.test(c + g) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                        l === (n.ownerDocument || o) && v.push(l.defaultView || l.parentWindow || i)
                    }
                    for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) f = a, t.type = s > 1 ? c : d.bindType || g, (h = (J.get(a, "events") || {})[t.type] && J.get(a, "handle")) && h.apply(a, e), (h = u && a[u]) && h.apply && K(a) && (t.result = h.apply(a, e), !1 === t.result && t.preventDefault());
                    return t.type = g, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), e) || !K(n) || u && y(n[g]) && !b(n) && ((l = n[u]) && (n[u] = null), C.event.triggered = g, t.isPropagationStopped() && f.addEventListener(g, we), n[g](), t.isPropagationStopped() && f.removeEventListener(g, we), C.event.triggered = void 0, l && (n[u] = l)), t.result
                }
            }, simulate: function (t, e, i) {
                var n = C.extend(new C.Event, i, {type: t, isSimulated: !0});
                C.event.trigger(n, null, e)
            }
        }), C.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    C.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var i = this[0];
                if (i) return C.event.trigger(t, e, i, !0)
            }
        }), m.focusin || C.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var i = function (t) {
                C.event.simulate(e, t.target, C.event.fix(t))
            };
            C.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this, r = J.access(n, e);
                    r || n.addEventListener(t, i, !0), J.access(n, e, (r || 0) + 1)
                }, teardown: function () {
                    var n = this.ownerDocument || this, r = J.access(n, e) - 1;
                    r ? J.access(n, e, r) : (n.removeEventListener(t, i, !0), J.remove(n, e))
                }
            }
        });
        var xe = i.location, Te = Date.now(), Ce = /\?/;
        C.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new i.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t), e
        };
        var Ee = /\[\]$/, Se = /\r?\n/g, _e = /^(?:submit|button|image|reset|file)$/i,
            ke = /^(?:input|select|textarea|keygen)/i;

        function Me(t, e, i, n) {
            var r;
            if (Array.isArray(e)) C.each(e, function (e, r) {
                i || Ee.test(t) ? n(t, r) : Me(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            }); else if (i || "object" !== T(e)) n(t, e); else for (r in e) Me(t + "[" + r + "]", e[r], i, n)
        }

        C.param = function (t, e) {
            var i, n = [], r = function (t, e) {
                var i = y(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
            if (Array.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function () {
                r(this.name, this.value)
            }); else for (i in t) Me(i, t[i], e, r);
            return n.join("&")
        }, C.fn.extend({
            serialize: function () {
                return C.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = C.prop(this, "elements");
                    return t ? C.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !C(this).is(":disabled") && ke.test(this.nodeName) && !_e.test(t) && (this.checked || !dt.test(t))
                }).map(function (t, e) {
                    var i = C(this).val();
                    return null == i ? null : Array.isArray(i) ? C.map(i, function (t) {
                        return {name: e.name, value: t.replace(Se, "\r\n")}
                    }) : {name: e.name, value: i.replace(Se, "\r\n")}
                }).get()
            }
        });
        var Pe = /%20/g, Le = /#.*$/, De = /([?&])_=[^&]*/, Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ie = /^(?:GET|HEAD)$/,
            $e = /^\/\//, Oe = {}, ze = {}, Ne = "*/".concat("*"), je = o.createElement("a");

        function Fe(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0, s = e.toLowerCase().match(j) || [];
                if (y(i)) for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function He(t, e, i, n) {
            var r = {}, s = t === ze;

            function o(a) {
                var l;
                return r[a] = !0, C.each(t[a] || [], function (t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }

            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function Re(t, e) {
            var i, n, r = C.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && C.extend(!0, t, n), t
        }

        je.href = xe.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ne,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? Re(Re(t, C.ajaxSettings), e) : Re(C.ajaxSettings, t)
            },
            ajaxPrefilter: Fe(Oe),
            ajaxTransport: Fe(ze),
            ajax: function (t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r, s, a, l, c, u, h, d, f, p = C.ajaxSetup({}, e), v = p.context || p,
                    g = p.context && (v.nodeType || v.jquery) ? C(v) : C.event, m = C.Deferred(),
                    y = C.Callbacks("once memory"), b = p.statusCode || {}, w = {}, x = {}, T = "canceled", E = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (u) {
                                if (!a) for (a = {}; e = Ae.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        }, getAllResponseHeaders: function () {
                            return u ? s : null
                        }, setRequestHeader: function (t, e) {
                            return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                        }, overrideMimeType: function (t) {
                            return null == u && (p.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (u) E.always(t[E.status]); else for (e in t) b[e] = [b[e], t[e]];
                            return this
                        }, abort: function (t) {
                            var e = t || T;
                            return n && n.abort(e), S(0, e), this
                        }
                    };
                if (m.promise(E), p.url = ((t || p.url || xe.href) + "").replace($e, xe.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
                    c = o.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = je.protocol + "//" + je.host != c.protocol + "//" + c.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), He(Oe, p, e, E), u) return E;
                for (d in (h = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ie.test(p.type), r = p.url.replace(Le, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Pe, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (Ce.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(De, "$1"), f = (Ce.test(r) ? "&" : "?") + "_=" + Te++ + f), p.url = r + f), p.ifModified && (C.lastModified[r] && E.setRequestHeader("If-Modified-Since", C.lastModified[r]), C.etag[r] && E.setRequestHeader("If-None-Match", C.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ne + "; q=0.01" : "") : p.accepts["*"]), p.headers) E.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(v, E, p) || u)) return E.abort();
                if (T = "abort", y.add(p.complete), E.done(p.success), E.fail(p.error), n = He(ze, p, e, E)) {
                    if (E.readyState = 1, h && g.trigger("ajaxSend", [E, p]), u) return E;
                    p.async && p.timeout > 0 && (l = i.setTimeout(function () {
                        E.abort("timeout")
                    }, p.timeout));
                    try {
                        u = !1, n.send(w, S)
                    } catch (t) {
                        if (u) throw t;
                        S(-1, t)
                    }
                } else S(-1, "No Transport");

                function S(t, e, o, a) {
                    var c, d, f, w, x, T = e;
                    u || (u = !0, l && i.clearTimeout(l), n = void 0, s = a || "", E.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, o && (w = function (t, e, i) {
                        for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n) for (r in a) if (a[r] && a[r].test(n)) {
                            l.unshift(r);
                            break
                        }
                        if (l[0] in i) s = l[0]; else {
                            for (r in i) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    s = r;
                                    break
                                }
                                o || (o = r)
                            }
                            s = s || o
                        }
                        if (s) return s !== l[0] && l.unshift(s), i[s]
                    }(p, E, o)), w = function (t, e, i, n) {
                        var r, s, o, a, l, c = {}, u = t.dataTypes.slice();
                        if (u[1]) for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
                        for (s = u.shift(); s;) if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                            if (!(o = c[l + " " + s] || c["* " + s])) for (r in c) if ((a = r.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === o ? o = c[r] : !0 !== c[r] && (s = a[0], u.unshift(a[1]));
                                break
                            }
                            if (!0 !== o) if (o && t.throws) e = o(e); else try {
                                e = o(e)
                            } catch (t) {
                                return {state: "parsererror", error: o ? t : "No conversion from " + l + " to " + s}
                            }
                        }
                        return {state: "success", data: e}
                    }(p, w, E, c), c ? (p.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (C.lastModified[r] = x), (x = E.getResponseHeader("etag")) && (C.etag[r] = x)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, d = w.data, c = !(f = w.error))) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (e || T) + "", c ? m.resolveWith(v, [d, T, E]) : m.rejectWith(v, [E, T, f]), E.statusCode(b), b = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [E, p, c ? d : f]), y.fireWith(v, [E, T]), h && (g.trigger("ajaxComplete", [E, p]), --C.active || C.event.trigger("ajaxStop")))
                }

                return E
            },
            getJSON: function (t, e, i) {
                return C.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return C.get(t, void 0, e, "script")
            }
        }), C.each(["get", "post"], function (t, e) {
            C[e] = function (t, i, n, r) {
                return y(i) && (r = r || n, n = i, i = void 0), C.ajax(C.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, C.isPlainObject(t) && t))
            }
        }), C._evalUrl = function (t) {
            return C.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, C.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (y(t) && (t = t.call(this[0])), e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            }, wrapInner: function (t) {
                return y(t) ? this.each(function (e) {
                    C(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = C(this), i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = y(t);
                return this.each(function (i) {
                    C(this).wrapAll(e ? t.call(this, i) : t)
                })
            }, unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    C(this).replaceWith(this.childNodes)
                }), this
            }
        }), C.expr.pseudos.hidden = function (t) {
            return !C.expr.pseudos.visible(t)
        }, C.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, C.ajaxSettings.xhr = function () {
            try {
                return new i.XMLHttpRequest
            } catch (t) {
            }
        };
        var Be = {0: 200, 1223: 204}, qe = C.ajaxSettings.xhr();
        m.cors = !!qe && "withCredentials" in qe, m.ajax = qe = !!qe, C.ajaxTransport(function (t) {
            var e, n;
            if (m.cors || qe && !t.crossDomain) return {
                send: function (r, s) {
                    var o, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(o, r[o]);
                    e = function (t) {
                        return function () {
                            e && (e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Be[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), n = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                        4 === a.readyState && i.setTimeout(function () {
                            e && n()
                        })
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                }, abort: function () {
                    e && e()
                }
            }
        }), C.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), C.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return C.globalEval(t), t
                }
            }
        }), C.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), C.ajaxTransport("script", function (t) {
            var e, i;
            if (t.crossDomain) return {
                send: function (n, r) {
                    e = C("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), o.head.appendChild(e[0])
                }, abort: function () {
                    i && i()
                }
            }
        });
        var We, Ge = [], Ye = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = Ge.pop() || C.expando + "_" + Te++;
                return this[t] = !0, t
            }
        }), C.ajaxPrefilter("json jsonp", function (t, e, n) {
            var r, s, o,
                a = !1 !== t.jsonp && (Ye.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ye, "$1" + r) : !1 !== t.jsonp && (t.url += (Ce.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return o || C.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", s = i[r], i[r] = function () {
                o = arguments
            }, n.always(function () {
                void 0 === s ? C(i).removeProp(r) : i[r] = s, t[r] && (t.jsonpCallback = e.jsonpCallback, Ge.push(r)), o && y(s) && s(o[0]), o = s = void 0
            }), "script"
        }), m.createHTMLDocument = ((We = o.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === We.childNodes.length), C.parseHTML = function (t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (m.createHTMLDocument ? ((n = (e = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, e.head.appendChild(n)) : e = o), s = !i && [], (r = D.exec(t)) ? [e.createElement(r[1])] : (r = xt([t], e, s), s && s.length && C(s).remove(), C.merge([], r.childNodes)));
            var n, r, s
        }, C.fn.load = function (t, e, i) {
            var n, r, s, o = this, a = t.indexOf(" ");
            return a > -1 && (n = ve(t.slice(a)), t = t.slice(0, a)), y(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && C.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                s = arguments, o.html(n ? C("<div>").append(C.parseHTML(t)).find(n) : t)
            }).always(i && function (t, e) {
                o.each(function () {
                    i.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            C.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), C.expr.pseudos.animated = function (t) {
            return C.grep(C.timers, function (e) {
                return t === e.elem
            }).length
        }, C.offset = {
            setOffset: function (t, e, i) {
                var n, r, s, o, a, l, c = C.css(t, "position"), u = C(t), h = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), s = C.css(t, "top"), l = C.css(t, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (o = (n = u.position()).top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), y(e) && (e = e.call(t, i, C.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : u.css(h)
            }
        }, C.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    C.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, i, n = this[0], r = {top: 0, left: 0};
                    if ("fixed" === C.css(n, "position")) e = n.getBoundingClientRect(); else {
                        for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === C.css(t, "position");) t = t.parentNode;
                        t && t !== n && 1 === t.nodeType && ((r = C(t).offset()).top += C.css(t, "borderTopWidth", !0), r.left += C.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - C.css(n, "marginTop", !0),
                        left: e.left - r.left - C.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === C.css(t, "position");) t = t.offsetParent;
                    return t || Tt
                })
            }
        }), C.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var i = "pageYOffset" === e;
            C.fn[t] = function (n) {
                return G(this, function (t, n, r) {
                    var s;
                    if (b(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === r) return s ? s[e] : t[n];
                    s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : t[n] = r
                }, t, n, arguments.length)
            }
        }), C.each(["top", "left"], function (t, e) {
            C.cssHooks[e] = Wt(m.pixelPosition, function (t, i) {
                if (i) return i = qt(t, e), Ht.test(i) ? C(t).position()[e] + "px" : i
            })
        }), C.each({Height: "height", Width: "width"}, function (t, e) {
            C.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
                C.fn[n] = function (r, s) {
                    var o = arguments.length && (i || "boolean" != typeof r),
                        a = i || (!0 === r || !0 === s ? "margin" : "border");
                    return G(this, function (e, i, r) {
                        var s;
                        return b(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? C.css(e, i, a) : C.style(e, i, r, a)
                    }, e, o ? r : void 0, o)
                }
            })
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            C.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), C.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), C.fn.extend({
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            }, undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }), C.proxy = function (t, e) {
            var i, n, r;
            if ("string" == typeof e && (i = t[e], e = t, t = i), y(t)) return n = l.call(arguments, 2), (r = function () {
                return t.apply(e || this, n.concat(l.call(arguments)))
            }).guid = t.guid = t.guid || C.guid++, r
        }, C.holdReady = function (t) {
            t ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = L, C.isFunction = y, C.isWindow = b, C.camelCase = U, C.type = T, C.now = Date.now, C.isNumeric = function (t) {
            var e = C.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, void 0 === (n = function () {
            return C
        }.apply(e, [])) || (t.exports = n);
        var Ve = i.jQuery, Xe = i.$;
        return C.noConflict = function (t) {
            return i.$ === C && (i.$ = Xe), t && i.jQuery === C && (i.jQuery = Ve), C
        }, r || (i.jQuery = i.$ = C), C
    })
}, function (t, e, i) {
    var n = i(21);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == n(t) ? t.split("") : Object(t)
    }
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, i) {
    "use strict";
    var n = i(1);
    t.exports = function () {
        var t = n(this), e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function (t, e, i) {
    var n = i(1), r = i(11), s = i(6)("species");
    t.exports = function (t, e) {
        var i, o = n(t).constructor;
        return void 0 === o || null == (i = n(o)[s]) ? e : r(i)
    }
}, function (t, e, i) {
    var n = i(19), r = i(3), s = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
        return s[t] || (s[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: n.version,
        mode: i(31) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e, i) {
    var n = i(16), r = i(7), s = i(36);
    t.exports = function (t) {
        return function (e, i, o) {
            var a, l = n(e), c = r(l.length), u = s(o, c);
            if (t && i != i) {
                for (; c > u;) if ((a = l[u++]) != a) return !0
            } else for (; c > u; u++) if ((t || u in l) && l[u] === i) return t || u || 0;
            return !t && -1
        }
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, i) {
    var n = i(21);
    t.exports = Array.isArray || function (t) {
        return "Array" == n(t)
    }
}, function (t, e, i) {
    var n = i(22), r = i(25);
    t.exports = function (t) {
        return function (e, i) {
            var s, o, a = String(r(e)), l = n(i), c = a.length;
            return l < 0 || l >= c ? t ? "" : void 0 : (s = a.charCodeAt(l)) < 55296 || s > 56319 || l + 1 === c || (o = a.charCodeAt(l + 1)) < 56320 || o > 57343 ? t ? a.charAt(l) : s : t ? a.slice(l, l + 2) : o - 56320 + (s - 55296 << 10) + 65536
        }
    }
}, function (t, e, i) {
    var n = i(5), r = i(21), s = i(6)("match");
    t.exports = function (t) {
        var e;
        return n(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == r(t))
    }
}, function (t, e, i) {
    var n = i(6)("iterator"), r = !1;
    try {
        var s = [7][n]();
        s.return = function () {
            r = !0
        }, Array.from(s, function () {
            throw 2
        })
    } catch (t) {
    }
    t.exports = function (t, e) {
        if (!e && !r) return !1;
        var i = !1;
        try {
            var s = [7], o = s[n]();
            o.next = function () {
                return {done: i = !0}
            }, s[n] = function () {
                return o
            }, t(s)
        } catch (t) {
        }
        return i
    }
}, function (t, e, i) {
    "use strict";
    var n = i(44), r = RegExp.prototype.exec;
    t.exports = function (t, e) {
        var i = t.exec;
        if ("function" == typeof i) {
            var s = i.call(t, e);
            if ("object" != typeof s) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return s
        }
        if ("RegExp" !== n(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return r.call(t, e)
    }
}, function (t, e, i) {
    "use strict";
    i(115);
    var n = i(13), r = i(12), s = i(4), o = i(25), a = i(6), l = i(89), c = a("species"), u = !s(function () {
        var t = /./;
        return t.exec = function () {
            var t = [];
            return t.groups = {a: "7"}, t
        }, "7" !== "".replace(t, "$<a>")
    }), h = function () {
        var t = /(?:)/, e = t.exec;
        t.exec = function () {
            return e.apply(this, arguments)
        };
        var i = "ab".split(t);
        return 2 === i.length && "a" === i[0] && "b" === i[1]
    }();
    t.exports = function (t, e, i) {
        var d = a(t), f = !s(function () {
            var e = {};
            return e[d] = function () {
                return 7
            }, 7 != ""[t](e)
        }), p = f ? !s(function () {
            var e = !1, i = /a/;
            return i.exec = function () {
                return e = !0, null
            }, "split" === t && (i.constructor = {}, i.constructor[c] = function () {
                return i
            }), i[d](""), !e
        }) : void 0;
        if (!f || !p || "replace" === t && !u || "split" === t && !h) {
            var v = /./[d], g = i(o, d, ""[t], function (t, e, i, n, r) {
                return e.exec === l ? f && !r ? {done: !0, value: v.call(e, i, n)} : {
                    done: !0,
                    value: t.call(i, e, n)
                } : {done: !1}
            }), m = g[0], y = g[1];
            n(String.prototype, t, m), r(RegExp.prototype, d, 2 == e ? function (t, e) {
                return y.call(t, this, e)
            } : function (t) {
                return y.call(t, this)
            })
        }
    }
}, function (t, e, i) {
    var n = i(3).navigator;
    t.exports = n && n.userAgent || ""
}, function (t, e, i) {
    "use strict";
    var n = i(3), r = i(0), s = i(13), o = i(42), a = i(30), l = i(41), c = i(40), u = i(5), h = i(4), d = i(59),
        f = i(43), p = i(75);
    t.exports = function (t, e, i, v, g, m) {
        var y = n[t], b = y, w = g ? "set" : "add", x = b && b.prototype, T = {}, C = function (t) {
            var e = x[t];
            s(x, t, "delete" == t ? function (t) {
                return !(m && !u(t)) && e.call(this, 0 === t ? 0 : t)
            } : "has" == t ? function (t) {
                return !(m && !u(t)) && e.call(this, 0 === t ? 0 : t)
            } : "get" == t ? function (t) {
                return m && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
            } : "add" == t ? function (t) {
                return e.call(this, 0 === t ? 0 : t), this
            } : function (t, i) {
                return e.call(this, 0 === t ? 0 : t, i), this
            })
        };
        if ("function" == typeof b && (m || x.forEach && !h(function () {
            (new b).entries().next()
        }))) {
            var E = new b, S = E[w](m ? {} : -0, 1) != E, _ = h(function () {
                E.has(1)
            }), k = d(function (t) {
                new b(t)
            }), M = !m && h(function () {
                for (var t = new b, e = 5; e--;) t[w](e, e);
                return !t.has(-0)
            });
            k || ((b = e(function (e, i) {
                c(e, b, t);
                var n = p(new y, e, b);
                return null != i && l(i, g, n[w], n), n
            })).prototype = x, x.constructor = b), (_ || M) && (C("delete"), C("has"), g && C("get")), (M || S) && C(w), m && x.clear && delete x.clear
        } else b = v.getConstructor(e, t, g, w), o(b.prototype, i), a.NEED = !0;
        return f(b, t), T[t] = b, r(r.G + r.W + r.F * (b != y), T), m || v.setStrong(b, t, g), b
    }
}, function (t, e, i) {
    for (var n, r = i(3), s = i(12), o = i(34), a = o("typed_array"), l = o("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, h = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); h < 9;) (n = r[d[h++]]) ? (s(n.prototype, a, !0), s(n.prototype, l, !0)) : u = !1;
    t.exports = {ABV: c, CONSTR: u, TYPED: a, VIEW: l}
}, function (t, e, i) {
    "use strict";
    t.exports = i(31) || !i(4)(function () {
        var t = Math.random();
        __defineSetter__.call(null, t, function () {
        }), delete i(3)[t]
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0);
    t.exports = function (t) {
        n(n.S, t, {
            of: function () {
                for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
                return new this(e)
            }
        })
    }
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(11), s = i(20), o = i(41);
    t.exports = function (t) {
        n(n.S, t, {
            from: function (t) {
                var e, i, n, a, l = arguments[1];
                return r(this), (e = void 0 !== l) && r(l), null == t ? new this : (i = [], e ? (n = 0, a = s(l, arguments[2], 2), o(t, !1, function (t) {
                    i.push(a(t, n++))
                })) : o(t, !1, i.push, i), new this(i))
            }
        })
    }
}, function (t, e, i) {
    var n = i(5), r = i(3).document, s = n(r) && n(r.createElement);
    t.exports = function (t) {
        return s ? r.createElement(t) : {}
    }
}, function (t, e, i) {
    var n = i(3), r = i(19), s = i(31), o = i(97), a = i(9).f;
    t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = s ? {} : n.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, {value: o.f(t)})
    }
}, function (t, e, i) {
    var n = i(53)("keys"), r = i(34);
    t.exports = function (t) {
        return n[t] || (n[t] = r(t))
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, i) {
    var n = i(3).document;
    t.exports = n && n.documentElement
}, function (t, e, i) {
    var n = i(5), r = i(1), s = function (t, e) {
        if (r(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
            try {
                (n = i(20)(Function.call, i(17).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function (t, i) {
                return s(t, i), e ? t.__proto__ = i : n(t, i), t
            }
        }({}, !1) : void 0), check: s
    }
}, function (t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function (t, e, i) {
    var n = i(5), r = i(73).set;
    t.exports = function (t, e, i) {
        var s, o = e.constructor;
        return o !== i && "function" == typeof o && (s = o.prototype) !== i.prototype && n(s) && r && r(t, s), t
    }
}, function (t, e, i) {
    "use strict";
    var n = i(22), r = i(25);
    t.exports = function (t) {
        var e = String(r(this)), i = "", s = n(t);
        if (s < 0 || s == 1 / 0) throw RangeError("Count can't be negative");
        for (; s > 0; (s >>>= 1) && (e += e)) 1 & s && (i += e);
        return i
    }
}, function (t, e) {
    t.exports = Math.sign || function (t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function (t, e) {
    var i = Math.expm1;
    t.exports = !i || i(10) > 22025.465794806718 || i(10) < 22025.465794806718 || -2e-17 != i(-2e-17) ? function (t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : i
}, function (t, e, i) {
    "use strict";
    var n = i(31), r = i(0), s = i(13), o = i(12), a = i(46), l = i(80), c = i(43), u = i(18), h = i(6)("iterator"),
        d = !([].keys && "next" in [].keys()), f = function () {
            return this
        };
    t.exports = function (t, e, i, p, v, g, m) {
        l(i, e, p);
        var y, b, w, x = function (t) {
                if (!d && t in S) return S[t];
                switch (t) {
                    case"keys":
                    case"values":
                        return function () {
                            return new i(this, t)
                        }
                }
                return function () {
                    return new i(this, t)
                }
            }, T = e + " Iterator", C = "values" == v, E = !1, S = t.prototype, _ = S[h] || S["@@iterator"] || v && S[v],
            k = _ || x(v), M = v ? C ? x("entries") : k : void 0, P = "Array" == e && S.entries || _;
        if (P && (w = u(P.call(new t))) !== Object.prototype && w.next && (c(w, T, !0), n || "function" == typeof w[h] || o(w, h, f)), C && _ && "values" !== _.name && (E = !0, k = function () {
            return _.call(this)
        }), n && !m || !d && !E && S[h] || o(S, h, k), a[e] = k, a[T] = f, v) if (y = {
            values: C ? k : x("values"),
            keys: g ? k : x("keys"),
            entries: M
        }, m) for (b in y) b in S || s(S, b, y[b]); else r(r.P + r.F * (d || E), e, y);
        return y
    }
}, function (t, e, i) {
    "use strict";
    var n = i(37), r = i(33), s = i(43), o = {};
    i(12)(o, i(6)("iterator"), function () {
        return this
    }), t.exports = function (t, e, i) {
        t.prototype = n(o, {next: r(1, i)}), s(t, e + " Iterator")
    }
}, function (t, e, i) {
    var n = i(58), r = i(25);
    t.exports = function (t, e, i) {
        if (n(e)) throw TypeError("String#" + i + " doesn't accept regex!");
        return String(r(t))
    }
}, function (t, e, i) {
    var n = i(6)("match");
    t.exports = function (t) {
        var e = /./;
        try {
            "/./"[t](e)
        } catch (i) {
            try {
                return e[n] = !1, !"/./"[t](e)
            } catch (t) {
            }
        }
        return !0
    }
}, function (t, e, i) {
    var n = i(46), r = i(6)("iterator"), s = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (n.Array === t || s[r] === t)
    }
}, function (t, e, i) {
    "use strict";
    var n = i(9), r = i(33);
    t.exports = function (t, e, i) {
        e in t ? n.f(t, e, r(0, i)) : t[e] = i
    }
}, function (t, e, i) {
    var n = i(44), r = i(6)("iterator"), s = i(46);
    t.exports = i(19).getIteratorMethod = function (t) {
        if (null != t) return t[r] || t["@@iterator"] || s[n(t)]
    }
}, function (t, e, i) {
    var n = i(235);
    t.exports = function (t, e) {
        return new (n(t))(e)
    }
}, function (t, e, i) {
    "use strict";
    var n = i(10), r = i(36), s = i(7);
    t.exports = function (t) {
        for (var e = n(this), i = s(e.length), o = arguments.length, a = r(o > 1 ? arguments[1] : void 0, i), l = o > 2 ? arguments[2] : void 0, c = void 0 === l ? i : r(l, i); c > a;) e[a++] = t;
        return e
    }
}, function (t, e, i) {
    "use strict";
    var n = i(32), r = i(114), s = i(46), o = i(16);
    t.exports = i(79)(Array, "Array", function (t, e) {
        this._t = o(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, i = this._i++;
        return !t || i >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
    }, "values"), s.Arguments = s.Array, n("keys"), n("values"), n("entries")
}, function (t, e, i) {
    "use strict";
    var n, r, s = i(51), o = RegExp.prototype.exec, a = String.prototype.replace, l = o,
        c = (n = /a/, r = /b*/g, o.call(n, "a"), o.call(r, "a"), 0 !== n.lastIndex || 0 !== r.lastIndex),
        u = void 0 !== /()??/.exec("")[1];
    (c || u) && (l = function (t) {
        var e, i, n, r, l = this;
        return u && (i = new RegExp("^" + l.source + "$(?!\\s)", s.call(l))), c && (e = l.lastIndex), n = o.call(l, t), c && n && (l.lastIndex = l.global ? n.index + n[0].length : e), u && n && n.length > 1 && a.call(n[0], i, function () {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (n[r] = void 0)
        }), n
    }), t.exports = l
}, function (t, e, i) {
    "use strict";
    var n = i(57)(!0);
    t.exports = function (t, e, i) {
        return e + (i ? n(t, e).length : 1)
    }
}, function (t, e, i) {
    var n, r, s, o = i(20), a = i(104), l = i(72), c = i(68), u = i(3), h = u.process, d = u.setImmediate,
        f = u.clearImmediate, p = u.MessageChannel, v = u.Dispatch, g = 0, m = {}, y = function () {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t], e()
            }
        }, b = function (t) {
            y.call(t.data)
        };
    d && f || (d = function (t) {
        for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
        return m[++g] = function () {
            a("function" == typeof t ? t : Function(t), e)
        }, n(g), g
    }, f = function (t) {
        delete m[t]
    }, "process" == i(21)(h) ? n = function (t) {
        h.nextTick(o(y, t, 1))
    } : v && v.now ? n = function (t) {
        v.now(o(y, t, 1))
    } : p ? (s = (r = new p).port2, r.port1.onmessage = b, n = o(s.postMessage, s, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (n = function (t) {
        u.postMessage(t + "", "*")
    }, u.addEventListener("message", b, !1)) : n = "onreadystatechange" in c("script") ? function (t) {
        l.appendChild(c("script")).onreadystatechange = function () {
            l.removeChild(this), y.call(t)
        }
    } : function (t) {
        setTimeout(o(y, t, 1), 0)
    }), t.exports = {set: d, clear: f}
}, function (t, e, i) {
    var n = i(3), r = i(91).set, s = n.MutationObserver || n.WebKitMutationObserver, o = n.process, a = n.Promise,
        l = "process" == i(21)(o);
    t.exports = function () {
        var t, e, i, c = function () {
            var n, r;
            for (l && (n = o.domain) && n.exit(); t;) {
                r = t.fn, t = t.next;
                try {
                    r()
                } catch (n) {
                    throw t ? i() : e = void 0, n
                }
            }
            e = void 0, n && n.enter()
        };
        if (l) i = function () {
            o.nextTick(c)
        }; else if (!s || n.navigator && n.navigator.standalone) if (a && a.resolve) {
            var u = a.resolve(void 0);
            i = function () {
                u.then(c)
            }
        } else i = function () {
            r.call(n, c)
        }; else {
            var h = !0, d = document.createTextNode("");
            new s(c).observe(d, {characterData: !0}), i = function () {
                d.data = h = !h
            }
        }
        return function (n) {
            var r = {fn: n, next: void 0};
            e && (e.next = r), t || (t = r, i()), e = r
        }
    }
}, function (t, e, i) {
    "use strict";
    var n = i(11);

    function r(t) {
        var e, i;
        this.promise = new t(function (t, n) {
            if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
            e = t, i = n
        }), this.resolve = n(e), this.reject = n(i)
    }

    t.exports.f = function (t) {
        return new r(t)
    }
}, function (t, e, i) {
    "use strict";
    var n = i(3), r = i(8), s = i(31), o = i(64), a = i(12), l = i(42), c = i(4), u = i(40), h = i(22), d = i(7),
        f = i(124), p = i(38).f, v = i(9).f, g = i(87), m = i(43), y = "prototype", b = "Wrong index!",
        w = n.ArrayBuffer, x = n.DataView, T = n.Math, C = n.RangeError, E = n.Infinity, S = w, _ = T.abs, k = T.pow,
        M = T.floor, P = T.log, L = T.LN2, D = r ? "_b" : "buffer", A = r ? "_l" : "byteLength",
        I = r ? "_o" : "byteOffset";

    function $(t, e, i) {
        var n, r, s, o = new Array(i), a = 8 * i - e - 1, l = (1 << a) - 1, c = l >> 1,
            u = 23 === e ? k(2, -24) - k(2, -77) : 0, h = 0, d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = _(t)) != t || t === E ? (r = t != t ? 1 : 0, n = l) : (n = M(P(t) / L), t * (s = k(2, -n)) < 1 && (n--, s *= 2), (t += n + c >= 1 ? u / s : u * k(2, 1 - c)) * s >= 2 && (n++, s /= 2), n + c >= l ? (r = 0, n = l) : n + c >= 1 ? (r = (t * s - 1) * k(2, e), n += c) : (r = t * k(2, c - 1) * k(2, e), n = 0)); e >= 8; o[h++] = 255 & r, r /= 256, e -= 8) ;
        for (n = n << e | r, a += e; a > 0; o[h++] = 255 & n, n /= 256, a -= 8) ;
        return o[--h] |= 128 * d, o
    }

    function O(t, e, i) {
        var n, r = 8 * i - e - 1, s = (1 << r) - 1, o = s >> 1, a = r - 7, l = i - 1, c = t[l--], u = 127 & c;
        for (c >>= 7; a > 0; u = 256 * u + t[l], l--, a -= 8) ;
        for (n = u & (1 << -a) - 1, u >>= -a, a += e; a > 0; n = 256 * n + t[l], l--, a -= 8) ;
        if (0 === u) u = 1 - o; else {
            if (u === s) return n ? NaN : c ? -E : E;
            n += k(2, e), u -= o
        }
        return (c ? -1 : 1) * n * k(2, u - e)
    }

    function z(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function N(t) {
        return [255 & t]
    }

    function j(t) {
        return [255 & t, t >> 8 & 255]
    }

    function F(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function H(t) {
        return $(t, 52, 8)
    }

    function R(t) {
        return $(t, 23, 4)
    }

    function B(t, e, i) {
        v(t[y], e, {
            get: function () {
                return this[i]
            }
        })
    }

    function q(t, e, i, n) {
        var r = f(+i);
        if (r + e > t[A]) throw C(b);
        var s = t[D]._b, o = r + t[I], a = s.slice(o, o + e);
        return n ? a : a.reverse()
    }

    function W(t, e, i, n, r, s) {
        var o = f(+i);
        if (o + e > t[A]) throw C(b);
        for (var a = t[D]._b, l = o + t[I], c = n(+r), u = 0; u < e; u++) a[l + u] = c[s ? u : e - u - 1]
    }

    if (o.ABV) {
        if (!c(function () {
            w(1)
        }) || !c(function () {
            new w(-1)
        }) || c(function () {
            return new w, new w(1.5), new w(NaN), "ArrayBuffer" != w.name
        })) {
            for (var G, Y = (w = function (t) {
                return u(this, w), new S(f(t))
            })[y] = S[y], V = p(S), X = 0; V.length > X;) (G = V[X++]) in w || a(w, G, S[G]);
            s || (Y.constructor = w)
        }
        var U = new x(new w(2)), K = x[y].setInt8;
        U.setInt8(0, 2147483648), U.setInt8(1, 2147483649), !U.getInt8(0) && U.getInt8(1) || l(x[y], {
            setInt8: function (t, e) {
                K.call(this, t, e << 24 >> 24)
            }, setUint8: function (t, e) {
                K.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else w = function (t) {
        u(this, w, "ArrayBuffer");
        var e = f(t);
        this._b = g.call(new Array(e), 0), this[A] = e
    }, x = function (t, e, i) {
        u(this, x, "DataView"), u(t, w, "DataView");
        var n = t[A], r = h(e);
        if (r < 0 || r > n) throw C("Wrong offset!");
        if (r + (i = void 0 === i ? n - r : d(i)) > n) throw C("Wrong length!");
        this[D] = t, this[I] = r, this[A] = i
    }, r && (B(w, "byteLength", "_l"), B(x, "buffer", "_b"), B(x, "byteLength", "_l"), B(x, "byteOffset", "_o")), l(x[y], {
        getInt8: function (t) {
            return q(this, 1, t)[0] << 24 >> 24
        }, getUint8: function (t) {
            return q(this, 1, t)[0]
        }, getInt16: function (t) {
            var e = q(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        }, getUint16: function (t) {
            var e = q(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        }, getInt32: function (t) {
            return z(q(this, 4, t, arguments[1]))
        }, getUint32: function (t) {
            return z(q(this, 4, t, arguments[1])) >>> 0
        }, getFloat32: function (t) {
            return O(q(this, 4, t, arguments[1]), 23, 4)
        }, getFloat64: function (t) {
            return O(q(this, 8, t, arguments[1]), 52, 8)
        }, setInt8: function (t, e) {
            W(this, 1, t, N, e)
        }, setUint8: function (t, e) {
            W(this, 1, t, N, e)
        }, setInt16: function (t, e) {
            W(this, 2, t, j, e, arguments[2])
        }, setUint16: function (t, e) {
            W(this, 2, t, j, e, arguments[2])
        }, setInt32: function (t, e) {
            W(this, 4, t, F, e, arguments[2])
        }, setUint32: function (t, e) {
            W(this, 4, t, F, e, arguments[2])
        }, setFloat32: function (t, e) {
            W(this, 4, t, R, e, arguments[2])
        }, setFloat64: function (t, e) {
            W(this, 8, t, H, e, arguments[2])
        }
    });
    m(w, "ArrayBuffer"), m(x, "DataView"), a(x[y], o.VIEW, !0), e.ArrayBuffer = w, e.DataView = x
}, function (t, e) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function (t, e, i) {
    t.exports = !i(8) && !i(4)(function () {
        return 7 != Object.defineProperty(i(68)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, i) {
    e.f = i(6)
}, function (t, e, i) {
    var n = i(15), r = i(16), s = i(54)(!1), o = i(70)("IE_PROTO");
    t.exports = function (t, e) {
        var i, a = r(t), l = 0, c = [];
        for (i in a) i != o && n(a, i) && c.push(i);
        for (; e.length > l;) n(a, i = e[l++]) && (~s(c, i) || c.push(i));
        return c
    }
}, function (t, e, i) {
    var n = i(9), r = i(1), s = i(35);
    t.exports = i(8) ? Object.defineProperties : function (t, e) {
        r(t);
        for (var i, o = s(e), a = o.length, l = 0; a > l;) n.f(t, i = o[l++], e[i]);
        return t
    }
}, function (t, e, i) {
    var n = i(16), r = i(38).f, s = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
        return o && "[object Window]" == s.call(t) ? function (t) {
            try {
                return r(t)
            } catch (t) {
                return o.slice()
            }
        }(t) : r(n(t))
    }
}, function (t, e, i) {
    "use strict";
    var n = i(35), r = i(55), s = i(50), o = i(10), a = i(49), l = Object.assign;
    t.exports = !l || i(4)(function () {
        var t = {}, e = {}, i = Symbol(), n = "abcdefghijklmnopqrst";
        return t[i] = 7, n.split("").forEach(function (t) {
            e[t] = t
        }), 7 != l({}, t)[i] || Object.keys(l({}, e)).join("") != n
    }) ? function (t, e) {
        for (var i = o(t), l = arguments.length, c = 1, u = r.f, h = s.f; l > c;) for (var d, f = a(arguments[c++]), p = u ? n(f).concat(u(f)) : n(f), v = p.length, g = 0; v > g;) h.call(f, d = p[g++]) && (i[d] = f[d]);
        return i
    } : l
}, function (t, e) {
    t.exports = Object.is || function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function (t, e, i) {
    "use strict";
    var n = i(11), r = i(5), s = i(104), o = [].slice, a = {};
    t.exports = Function.bind || function (t) {
        var e = n(this), i = o.call(arguments, 1), l = function () {
            var n = i.concat(o.call(arguments));
            return this instanceof l ? function (t, e, i) {
                if (!(e in a)) {
                    for (var n = [], r = 0; r < e; r++) n[r] = "a[" + r + "]";
                    a[e] = Function("F,a", "return new F(" + n.join(",") + ")")
                }
                return a[e](t, i)
            }(e, n.length, n) : s(e, n, t)
        };
        return r(e.prototype) && (l.prototype = e.prototype), l
    }
}, function (t, e) {
    t.exports = function (t, e, i) {
        var n = void 0 === i;
        switch (e.length) {
            case 0:
                return n ? t() : t.call(i);
            case 1:
                return n ? t(e[0]) : t.call(i, e[0]);
            case 2:
                return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
            case 3:
                return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
            case 4:
                return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
        }
        return t.apply(i, e)
    }
}, function (t, e, i) {
    var n = i(3).parseInt, r = i(45).trim, s = i(74), o = /^[-+]?0[xX]/;
    t.exports = 8 !== n(s + "08") || 22 !== n(s + "0x16") ? function (t, e) {
        var i = r(String(t), 3);
        return n(i, e >>> 0 || (o.test(i) ? 16 : 10))
    } : n
}, function (t, e, i) {
    var n = i(3).parseFloat, r = i(45).trim;
    t.exports = 1 / n(i(74) + "-0") != -1 / 0 ? function (t) {
        var e = r(String(t), 3), i = n(e);
        return 0 === i && "-" == e.charAt(0) ? -0 : i
    } : n
}, function (t, e, i) {
    var n = i(21);
    t.exports = function (t, e) {
        if ("number" != typeof t && "Number" != n(t)) throw TypeError(e);
        return +t
    }
}, function (t, e, i) {
    var n = i(5), r = Math.floor;
    t.exports = function (t) {
        return !n(t) && isFinite(t) && r(t) === t
    }
}, function (t, e) {
    t.exports = Math.log1p || function (t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
}, function (t, e, i) {
    var n = i(77), r = Math.pow, s = r(2, -52), o = r(2, -23), a = r(2, 127) * (2 - o), l = r(2, -126);
    t.exports = Math.fround || function (t) {
        var e, i, r = Math.abs(t), c = n(t);
        return r < l ? c * (r / l / o + 1 / s - 1 / s) * l * o : (i = (e = (1 + o / s) * r) - (e - r)) > a || i != i ? c * (1 / 0) : c * i
    }
}, function (t, e, i) {
    var n = i(1);
    t.exports = function (t, e, i, r) {
        try {
            return r ? e(n(i)[0], i[1]) : e(i)
        } catch (e) {
            var s = t.return;
            throw void 0 !== s && n(s.call(t)), e
        }
    }
}, function (t, e, i) {
    var n = i(11), r = i(10), s = i(49), o = i(7);
    t.exports = function (t, e, i, a, l) {
        n(e);
        var c = r(t), u = s(c), h = o(c.length), d = l ? h - 1 : 0, f = l ? -1 : 1;
        if (i < 2) for (; ;) {
            if (d in u) {
                a = u[d], d += f;
                break
            }
            if (d += f, l ? d < 0 : h <= d) throw TypeError("Reduce of empty array with no initial value")
        }
        for (; l ? d >= 0 : h > d; d += f) d in u && (a = e(a, u[d], d, c));
        return a
    }
}, function (t, e, i) {
    "use strict";
    var n = i(10), r = i(36), s = i(7);
    t.exports = [].copyWithin || function (t, e) {
        var i = n(this), o = s(i.length), a = r(t, o), l = r(e, o), c = arguments.length > 2 ? arguments[2] : void 0,
            u = Math.min((void 0 === c ? o : r(c, o)) - l, o - a), h = 1;
        for (l < a && a < l + u && (h = -1, l += u - 1, a += u - 1); u-- > 0;) l in i ? i[a] = i[l] : delete i[a], a += h, l += h;
        return i
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, i) {
    "use strict";
    var n = i(89);
    i(0)({target: "RegExp", proto: !0, forced: n !== /./.exec}, {exec: n})
}, function (t, e, i) {
    i(8) && "g" != /./g.flags && i(9).f(RegExp.prototype, "flags", {configurable: !0, get: i(51)})
}, function (t, e) {
    t.exports = function (t) {
        try {
            return {e: !1, v: t()}
        } catch (t) {
            return {e: !0, v: t}
        }
    }
}, function (t, e, i) {
    var n = i(1), r = i(5), s = i(93);
    t.exports = function (t, e) {
        if (n(t), r(e) && e.constructor === t) return e;
        var i = s.f(t);
        return (0, i.resolve)(e), i.promise
    }
}, function (t, e, i) {
    "use strict";
    var n = i(120), r = i(47);
    t.exports = i(63)("Map", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function (t) {
            var e = n.getEntry(r(this, "Map"), t);
            return e && e.v
        }, set: function (t, e) {
            return n.def(r(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, n, !0)
}, function (t, e, i) {
    "use strict";
    var n = i(9).f, r = i(37), s = i(42), o = i(20), a = i(40), l = i(41), c = i(79), u = i(114), h = i(39), d = i(8),
        f = i(30).fastKey, p = i(47), v = d ? "_s" : "size", g = function (t, e) {
            var i, n = f(e);
            if ("F" !== n) return t._i[n];
            for (i = t._f; i; i = i.n) if (i.k == e) return i
        };
    t.exports = {
        getConstructor: function (t, e, i, c) {
            var u = t(function (t, n) {
                a(t, u, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[v] = 0, null != n && l(n, i, t[c], t)
            });
            return s(u.prototype, {
                clear: function () {
                    for (var t = p(this, e), i = t._i, n = t._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete i[n.i];
                    t._f = t._l = void 0, t[v] = 0
                }, delete: function (t) {
                    var i = p(this, e), n = g(i, t);
                    if (n) {
                        var r = n.n, s = n.p;
                        delete i._i[n.i], n.r = !0, s && (s.n = r), r && (r.p = s), i._f == n && (i._f = r), i._l == n && (i._l = s), i[v]--
                    }
                    return !!n
                }, forEach: function (t) {
                    p(this, e);
                    for (var i, n = o(t, arguments.length > 1 ? arguments[1] : void 0, 3); i = i ? i.n : this._f;) for (n(i.v, i.k, this); i && i.r;) i = i.p
                }, has: function (t) {
                    return !!g(p(this, e), t)
                }
            }), d && n(u.prototype, "size", {
                get: function () {
                    return p(this, e)[v]
                }
            }), u
        }, def: function (t, e, i) {
            var n, r, s = g(t, e);
            return s ? s.v = i : (t._l = s = {
                i: r = f(e, !0),
                k: e,
                v: i,
                p: n = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = s), n && (n.n = s), t[v]++, "F" !== r && (t._i[r] = s)), t
        }, getEntry: g, setStrong: function (t, e, i) {
            c(t, e, function (t, i) {
                this._t = p(t, e), this._k = i, this._l = void 0
            }, function () {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? u(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, u(1))
            }, i ? "entries" : "values", !i, !0), h(e)
        }
    }
}, function (t, e, i) {
    "use strict";
    var n = i(120), r = i(47);
    t.exports = i(63)("Set", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (t) {
            return n.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, n)
}, function (t, e, i) {
    "use strict";
    var n, r = i(27)(0), s = i(13), o = i(30), a = i(101), l = i(123), c = i(5), u = i(4), h = i(47), d = o.getWeak,
        f = Object.isExtensible, p = l.ufstore, v = {}, g = function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, m = {
            get: function (t) {
                if (c(t)) {
                    var e = d(t);
                    return !0 === e ? p(h(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            }, set: function (t, e) {
                return l.def(h(this, "WeakMap"), t, e)
            }
        }, y = t.exports = i(63)("WeakMap", g, m, l, !0, !0);
    u(function () {
        return 7 != (new y).set((Object.freeze || Object)(v), 7).get(v)
    }) && (a((n = l.getConstructor(g, "WeakMap")).prototype, m), o.NEED = !0, r(["delete", "has", "get", "set"], function (t) {
        var e = y.prototype, i = e[t];
        s(e, t, function (e, r) {
            if (c(e) && !f(e)) {
                this._f || (this._f = new n);
                var s = this._f[t](e, r);
                return "set" == t ? this : s
            }
            return i.call(this, e, r)
        })
    }))
}, function (t, e, i) {
    "use strict";
    var n = i(42), r = i(30).getWeak, s = i(1), o = i(5), a = i(40), l = i(41), c = i(27), u = i(15), h = i(47),
        d = c(5), f = c(6), p = 0, v = function (t) {
            return t._l || (t._l = new g)
        }, g = function () {
            this.a = []
        }, m = function (t, e) {
            return d(t.a, function (t) {
                return t[0] === e
            })
        };
    g.prototype = {
        get: function (t) {
            var e = m(this, t);
            if (e) return e[1]
        }, has: function (t) {
            return !!m(this, t)
        }, set: function (t, e) {
            var i = m(this, t);
            i ? i[1] = e : this.a.push([t, e])
        }, delete: function (t) {
            var e = f(this.a, function (e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function (t, e, i, s) {
            var c = t(function (t, n) {
                a(t, c, e, "_i"), t._t = e, t._i = p++, t._l = void 0, null != n && l(n, i, t[s], t)
            });
            return n(c.prototype, {
                delete: function (t) {
                    if (!o(t)) return !1;
                    var i = r(t);
                    return !0 === i ? v(h(this, e)).delete(t) : i && u(i, this._i) && delete i[this._i]
                }, has: function (t) {
                    if (!o(t)) return !1;
                    var i = r(t);
                    return !0 === i ? v(h(this, e)).has(t) : i && u(i, this._i)
                }
            }), c
        }, def: function (t, e, i) {
            var n = r(s(e), !0);
            return !0 === n ? v(t).set(e, i) : n[t._i] = i, t
        }, ufstore: v
    }
}, function (t, e, i) {
    var n = i(22), r = i(7);
    t.exports = function (t) {
        if (void 0 === t) return 0;
        var e = n(t), i = r(e);
        if (e !== i) throw RangeError("Wrong length!");
        return i
    }
}, function (t, e, i) {
    var n = i(38), r = i(55), s = i(1), o = i(3).Reflect;
    t.exports = o && o.ownKeys || function (t) {
        var e = n.f(s(t)), i = r.f;
        return i ? e.concat(i(t)) : e
    }
}, function (t, e, i) {
    "use strict";
    var n = i(56), r = i(5), s = i(7), o = i(20), a = i(6)("isConcatSpreadable");
    t.exports = function t(e, i, l, c, u, h, d, f) {
        for (var p, v, g = u, m = 0, y = !!d && o(d, f, 3); m < c;) {
            if (m in l) {
                if (p = y ? y(l[m], m, i) : l[m], v = !1, r(p) && (v = void 0 !== (v = p[a]) ? !!v : n(p)), v && h > 0) g = t(e, i, p, s(p.length), g, h - 1) - 1; else {
                    if (g >= 9007199254740991) throw TypeError();
                    e[g] = p
                }
                g++
            }
            m++
        }
        return g
    }
}, function (t, e, i) {
    var n = i(7), r = i(76), s = i(25);
    t.exports = function (t, e, i, o) {
        var a = String(s(t)), l = a.length, c = void 0 === i ? " " : String(i), u = n(e);
        if (u <= l || "" == c) return a;
        var h = u - l, d = r.call(c, Math.ceil(h / c.length));
        return d.length > h && (d = d.slice(0, h)), o ? d + a : a + d
    }
}, function (t, e, i) {
    var n = i(35), r = i(16), s = i(50).f;
    t.exports = function (t) {
        return function (e) {
            for (var i, o = r(e), a = n(o), l = a.length, c = 0, u = []; l > c;) s.call(o, i = a[c++]) && u.push(t ? [i, o[i]] : o[i]);
            return u
        }
    }
}, function (t, e, i) {
    var n = i(44), r = i(130);
    t.exports = function (t) {
        return function () {
            if (n(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return r(this)
        }
    }
}, function (t, e, i) {
    var n = i(41);
    t.exports = function (t, e) {
        var i = [];
        return n(t, !1, i.push, i, e), i
    }
}, function (t, e) {
    t.exports = Math.scale || function (t, e, i, n, r) {
        return 0 === arguments.length || t != t || e != e || i != i || n != n || r != r ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - e) * (r - n) / (i - e) + n
    }
}, function (t, e, i) {
    var n;
    !function () {
        "use strict";

        /**
         * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
         *
         * @codingstandard ftlabs-jsv2
         * @copyright The Financial Times Limited [All Rights Reserved]
         * @license MIT License (see LICENSE.txt)
         */function r(t, e) {
            var i;
            if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !r.notNeeded(t)) {
                for (var n = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = 0, a = n.length; s < a; s++) this[n[s]] = l(this[n[s]], this);
                o && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, i, n) {
                    var r = Node.prototype.removeEventListener;
                    "click" === e ? r.call(t, e, i.hijacked || i, n) : r.call(t, e, i, n)
                }, t.addEventListener = function (e, i, n) {
                    var r = Node.prototype.addEventListener;
                    "click" === e ? r.call(t, e, i.hijacked || (i.hijacked = function (t) {
                        t.propagationStopped || i(t)
                    }), n) : r.call(t, e, i, n)
                }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function (t) {
                    i(t)
                }, !1), t.onclick = null)
            }

            function l(t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }
        }

        var s = navigator.userAgent.indexOf("Windows Phone") >= 0, o = navigator.userAgent.indexOf("Android") > 0 && !s,
            a = /iP(ad|hone|od)/.test(navigator.userAgent) && !s, l = a && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            c = a && /OS [6-7]_\d/.test(navigator.userAgent), u = navigator.userAgent.indexOf("BB10") > 0;
        r.prototype.needsClick = function (t) {
            switch (t.nodeName.toLowerCase()) {
                case"button":
                case"select":
                case"textarea":
                    if (t.disabled) return !0;
                    break;
                case"input":
                    if (a && "file" === t.type || t.disabled) return !0;
                    break;
                case"label":
                case"iframe":
                case"video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, r.prototype.needsFocus = function (t) {
            switch (t.nodeName.toLowerCase()) {
                case"textarea":
                    return !0;
                case"select":
                    return !o;
                case"input":
                    switch (t.type) {
                        case"button":
                        case"checkbox":
                        case"file":
                        case"image":
                        case"radio":
                        case"submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, r.prototype.sendClick = function (t, e) {
            var i, n;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
        }, r.prototype.determineEventType = function (t) {
            return o && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, r.prototype.focus = function (t) {
            var e;
            a && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, r.prototype.updateScrollParent = function (t) {
            var e, i;
            if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
                i = t;
                do {
                    if (i.scrollHeight > i.offsetHeight) {
                        e = i, t.fastClickScrollParent = i;
                        break
                    }
                    i = i.parentElement
                } while (i)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, r.prototype.getTargetElementFromEventTarget = function (t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, r.prototype.onTouchStart = function (t) {
            var e, i, n;
            if (t.targetTouches.length > 1) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], a) {
                if ((n = window.getSelection()).rangeCount && !n.isCollapsed) return !0;
                if (!l) {
                    if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, r.prototype.touchHasMoved = function (t) {
            var e = t.changedTouches[0], i = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
        }, r.prototype.onTouchMove = function (t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, r.prototype.findControl = function (t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, r.prototype.onTouchEnd = function (t) {
            var e, i, n, r, s, u = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, c && (s = t.changedTouches[0], (u = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || u).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (n = u.tagName.toLowerCase())) {
                if (e = this.findControl(u)) {
                    if (this.focus(u), o) return !1;
                    u = e
                }
            } else if (this.needsFocus(u)) return t.timeStamp - i > 100 || a && window.top !== window && "input" === n ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), a && "select" === n || (this.targetElement = null, t.preventDefault()), !1);
            return !(!a || l || !(r = u.fastClickScrollParent) || r.fastClickLastScrollTop === r.scrollTop) || (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
        }, r.prototype.onTouchCancel = function () {
            this.trackingClick = !1, this.targetElement = null
        }, r.prototype.onMouse = function (t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
        }, r.prototype.onClick = function (t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
        }, r.prototype.destroy = function () {
            var t = this.layer;
            o && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, r.notNeeded = function (t) {
            var e, i, n;
            if (void 0 === window.ontouchstart) return !0;
            if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!o) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                    if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (u && (n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && n[2] >= 3 && (e = document.querySelector("meta[name=viewport]"))) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        }, r.attach = function (t, e) {
            return new r(t, e)
        }, void 0 === (n = function () {
            return r
        }.call(e, i, e, t)) || (t.exports = n)
    }()
}, function (t, e) {
    t.exports = function (t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0, get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0, get: function () {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {enumerable: !0}), e.webpackPolyfill = 1
        }
        return e
    }
}, function (t, e) {
    (function (e) {
        t.exports = e
    }).call(this, {})
}, function (t, e, i) {
}, function (t, e, i) {
}, function (t, e, i) {
}, function (t, e, i) {
}, function (t, e, i) {
}, function (t, e, i) {
    "use strict";
    (function (t, e) {
        var n, r, s, o, a, l = i(2), c = i.n(l);
        /*!
 * ZUI: Standard edition - v1.9.1 - 2019-05-10
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git
 * Copyright (c) 2019 cnezsoft.com; Licensed MIT
 */
        /*! Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/
        !function (t, e, i) {
            if (void 0 === t) throw new Error("ZUI requires jQuery");
            t.zui || (t.zui = function (e) {
                t.isPlainObject(e) && t.extend(t.zui, e)
            });
            var n = {all: -1, left: 0, middle: 1, right: 2}, r = 0;
            t.zui({
                uuid: function (t) {
                    var e = 1e3 * (new Date).getTime() + r++ % 1e3;
                    return t ? e : e.toString(36)
                }, callEvent: function (e, n, r) {
                    if (t.isFunction(e)) {
                        r !== i && (e = t.proxy(e, r));
                        var s = e(n);
                        return n && (n.result = s), !(s !== i && !s)
                    }
                    return 1
                }, clientLang: function () {
                    var i, n = e.config;
                    if (void 0 !== n && n.clientLang && (i = n.clientLang), !i) {
                        var r = t("html").attr("lang");
                        i = r || (navigator.userLanguage || navigator.userLanguage || "zh_cn")
                    }
                    return i.replace("-", "_").toLowerCase()
                }, strCode: function (t) {
                    var e = 0;
                    if (t && t.length) for (var i = 0; i < t.length; ++i) e += i * t.charCodeAt(i);
                    return e
                }, getMouseButtonCode: function (t) {
                    return "number" != typeof t && (t = n[t]), t !== i && null !== t || (t = -1), t
                }
            }), t.fn.callEvent = function (e, n, r) {
                var s = t(this), o = e.indexOf(".zui."), a = o < 0 ? e : e.substring(0, o), l = t.Event(a, n);
                if (r === i && o > 0 && (r = s.data(e.substring(o + 1))), r && r.options) {
                    var c = r.options[a];
                    t.isFunction(c) && (l.result = t.zui.callEvent(c, l, r))
                }
                return s.trigger(l), l
            }, t.fn.callComEvent = function (e, n, r) {
                r === i || t.isArray(r) || (r = [r]);
                var s = this.triggerHandler(n, r), o = e.options[n];
                return o && (s = o.apply(e, r)), s
            }
        }(t, window, void 0), (n = t).fn.fixOlPd = function (t) {
            return t = t || 10, this.each(function () {
                var e = n(this);
                e.css("paddingLeft", Math.ceil(Math.log10(e.children().length)) * t + 10)
            })
        }, n(function () {
            n(".ol-pd-fix,.article ol").fixOlPd()
        }), function (t) {
            var e = function e(i, n) {
                this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.isLoading = !1
            };
            e.DEFAULTS = {loadingText: "loading..."}, e.prototype.setState = function (e) {
                var i = "disabled", n = this.$element, r = n.is("input") ? "val" : "html", s = n.data();
                e += "Text", s.resetText || n.data("resetText", n[r]()), n[r](s[e] || this.options[e]), setTimeout(t.proxy(function () {
                    "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
                }, this), 0)
            }, e.prototype.toggle = function () {
                var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var i = this.$element.find("input");
                    "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
                }
                t && this.$element.toggleClass("active")
            };
            var i = t.fn.button;
            t.fn.button = function (i) {
                return this.each(function () {
                    var n = t(this), r = n.data("zui.button"), s = "object" == c()(i) && i;
                    r || n.data("zui.button", r = new e(this, s)), "toggle" == i ? r.toggle() : i && r.setState(i)
                })
            }, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
                return t.fn.button = i, this
            }, t(document).on("click.zui.button.data-api", "[data-toggle^=button]", function (e) {
                var i = t(e.target);
                i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle"), e.preventDefault()
            })
        }(t), function (t) {
            var e = '[data-dismiss="alert"]', i = "zui.alert", n = function (i) {
                t(i).on("click", e, this.close)
            };
            n.prototype.close = function (e) {
                var n = t(this), r = n.attr("data-target");
                r || (r = (r = n.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
                var s = t(r);

                function o() {
                    s.trigger("closed." + i).remove()
                }

                e && e.preventDefault(), s.length || (s = n.hasClass("alert") ? n : n.parent()), s.trigger(e = t.Event("close." + i)), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one(t.support.transition.end, o).emulateTransitionEnd(150) : o())
            };
            var r = t.fn.alert;
            t.fn.alert = function (e) {
                return this.each(function () {
                    var r = t(this), s = r.data(i);
                    s || r.data(i, s = new n(this)), "string" == typeof e && s[e].call(r)
                })
            }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
                return t.fn.alert = r, this
            }, t(document).on("click." + i + ".data-api", e, n.prototype.close)
        }(e), function (t, e) {
            var i = "zui.pager", n = {page: 1, recTotal: 0, recPerPage: 10}, r = {
                zh_cn: {
                    pageOfText: "第 {0} 页",
                    prev: "上一页",
                    next: "下一页",
                    first: "第一页",
                    last: "最后一页",
                    goto: "跳转",
                    pageOf: "第 <strong>{page}</strong> 页",
                    totalPage: "共 <strong>{totalPage}</strong> 页",
                    totalCount: "共 <strong>{recTotal}</strong> 项",
                    pageSize: "每页 <strong>{recPerPage}</strong> 项",
                    itemsRange: "第 <strong>{start}</strong> ~ <strong>{end}</strong> 项",
                    pageOfTotal: "第 <strong>{page}</strong>/<strong>{totalPage}</strong> 页"
                },
                zh_tw: {
                    pageOfText: "第 {0} 頁",
                    prev: "上一頁",
                    next: "下一頁",
                    first: "第一頁",
                    last: "最後一頁",
                    goto: "跳轉",
                    pageOf: "第 <strong>{page}</strong> 頁",
                    totalPage: "共 <strong>{totalPage}</strong> 頁",
                    totalCount: "共 <strong>{recTotal}</strong> 項",
                    pageSize: "每頁 <strong>{recPerPage}</strong> 項",
                    itemsRange: "第 <strong>{start}</strong> ~ <strong>{end}</strong> 項",
                    pageOfTotal: "第 <strong>{page}</strong>/<strong>{totalPage}</strong> 頁"
                },
                en: {
                    pageOfText: "Page {0}",
                    prev: "Prev",
                    next: "Next",
                    first: "First",
                    last: "Last",
                    goto: "Goto",
                    pageOf: "Page <strong>{page}</strong>",
                    totalPage: "<strong>{totalPage}</strong> pages",
                    totalCount: "<strong>{recTotal}</strong> in total",
                    pageSize: "<strong>{recPerPage}</strong> per page",
                    itemsRange: "From <strong>{start}</strong> to <strong>{end}</strong>",
                    pageOfTotal: "Page <strong>{page}</strong> of <strong>{totalPage}</strong>"
                }
            }, s = function e(n, s) {
                var o = this;
                o.name = i, o.$ = t(n);
                var a = (s = o.options = t.extend({}, e.DEFAULTS, this.$.data(), s)).lang || t.zui.clientLang();
                o.lang = t.isPlainObject(a) ? t.extend(!0, {}, r[a.lang || t.zui.clientLang()], a) : r[a], o.state = {}, o.set(s.page, s.recTotal, s.recPerPage, !0), o.$.on("click", ".pager-goto-btn", function () {
                    var e = t(this).closest(".pager-goto"), i = parseInt(e.find(".pager-goto-input").val());
                    NaN !== i && o.set(i)
                }).on("click", ".pager-item", function () {
                    var e = t(this).data("page");
                    "number" == typeof e && e > 0 && o.set(e)
                }).on("click", ".pager-size-menu [data-size]", function () {
                    var e = t(this).data("size");
                    "number" == typeof e && e > 0 && o.set(-1, -1, e)
                })
            };
            s.prototype.set = function (e, i, r, s) {
                "object" === c()(e) && null !== e && (r = e.recPerPage, i = e.recTotal, e = e.page);
                var o = this.state;
                o || (o = t.extend({}, n));
                var a = t.extend({}, o);
                return "number" == typeof r && r > 0 && (o.recPerPage = r), "number" == typeof i && i >= 0 && (o.recTotal = i), "number" == typeof e && e >= 0 && (o.page = e), o.totalPage = o.recTotal && o.recPerPage ? Math.ceil(o.recTotal / o.recPerPage) : 1, o.page = Math.max(0, Math.min(o.page, o.totalPage)), o.pageRecCount = o.recTotal, o.page && o.recTotal && (o.page < o.totalPage ? o.pageRecCount = o.recPerPage : o.page > 1 && (o.pageRecCount = o.recTotal - o.recPerPage * (o.page - 1))), o.skip = o.page > 1 ? (o.page - 1) * o.recPerPage : 0, o.start = o.skip + 1, o.end = o.skip + o.pageRecCount, o.prev = o.page > 1 ? o.page - 1 : 0, o.next = o.page < o.totalPage ? o.page + 1 : 0, this.state = o, s || a.page === o.page && a.recTotal === o.recTotal && a.recPerPage === o.recPerPage || this.$.callComEvent(this, "onPageChange", [o, a]), this.render()
            }, s.prototype.createLinkItem = function (i, n, r) {
                n === e && (n = i);
                var s = t('<a title="' + this.lang.pageOfText.format(i) + '" class="pager-item" data-page="' + i + '"/>').attr("href", i ? this.createLink(i, this.state) : "###").html(n);
                return r || (s = t("<li />").append(s).toggleClass("active", i === this.state.page).toggleClass("disabled", !i || i === this.state.page)), s
            }, s.prototype.createNavItems = function (t) {
                var i = this, n = i.$, r = i.state, s = r.totalPage, o = r.page, a = function (t, r) {
                    if (!1 !== t) {
                        r === e && (r = t);
                        for (var s = t; s <= r; ++s) n.append(i.createLinkItem(s))
                    } else n.append(i.createLinkItem(0, r || i.options.navEllipsisItem))
                };
                t === e && (t = i.options.maxNavCount || 10), a(1), s > 1 && (s <= t ? a(2, s) : o < t - 2 ? (a(2, t - 2), a(!1), a(s)) : o > s - t + 2 ? (a(!1), a(s - t + 2, s)) : (a(!1), a(o - Math.ceil((t - 4) / 2), o + Math.floor((t - 4) / 2)), a(!1), a(s)))
            }, s.prototype.createGoto = function () {
                var e = this.state;
                return t('<div class="input-group pager-goto" style="width: ' + (35 + 9 * (e.page + "").length + 25 + 12 * this.lang.goto.length) + 'px"><input value="' + e.page + '" type="number" min="1" max="' + e.totalPage + '" placeholder="' + e.page + '" class="form-control pager-goto-input"><span class="input-group-btn"><button class="btn pager-goto-btn" type="button">' + this.lang.goto + "</button></span></div>")
            }, s.prototype.createSizeMenu = function () {
                var e = this.state, i = t('<ul class="dropdown-menu"></ul>'), n = this.options.pageSizeOptions;
                "string" == typeof n && (n = n.split(","));
                for (var r = 0; r < n.length; ++r) {
                    var s = n[r];
                    "string" == typeof s && (s = parseInt(s));
                    var o = t('<li><a href="###" data-size="' + s + '">' + s + "</a></li>").toggleClass("active", s === e.recPerPage);
                    i.append(o)
                }
                return t('<div class="btn-group pager-size-menu"><button type="button" class="btn dropdown-toggle" data-toggle="dropdown">' + this.lang.pageSize.format(e) + ' <span class="caret"></span></button></div>').addClass(this.options.menuDirection).append(i)
            }, s.prototype.createElement = function (e, i, n) {
                var r = t.proxy(this.createLinkItem, this), s = this.lang;
                switch (e) {
                    case"prev":
                        return r(n.prev, s.prev);
                    case"prev_icon":
                        return r(n.prev, '<i class="icon ' + this.options.prevIcon + '"></i>');
                    case"next":
                        return r(n.next, s.next);
                    case"next_icon":
                        return r(n.next, '<i class="icon ' + this.options.nextIcon + '"></i>');
                    case"first":
                        return r(1, s.first);
                    case"first_icon":
                        return r(1, '<i class="icon ' + this.options.firstIcon + '"></i>');
                    case"last":
                        return r(n.totalPage, s.last);
                    case"last_icon":
                        return r(n.totalPage, '<i class="icon ' + this.options.lastIcon + '"></i>');
                    case"space":
                    case"|":
                        return t('<li class="space" />');
                    case"nav":
                    case"pages":
                        return void this.createNavItems();
                    case"total_text":
                        return t(('<div class="pager-label">' + s.totalCount + "</div>").format(n));
                    case"page_text":
                        return t(('<div class="pager-label">' + s.pageOf + "</div>").format(n));
                    case"total_page_text":
                        return t(('<div class="pager-label">' + s.totalPage + "</div>").format(n));
                    case"page_of_total_text":
                        return t(('<div class="pager-label">' + s.pageOfTotal + "</div>").format(n));
                    case"page_size_text":
                        return t(('<div class="pager-label">' + s.pageSize + "</div>").format(n));
                    case"items_range_text":
                        return t(('<div class="pager-label">' + s.itemsRange + "</div>").format(n));
                    case"goto":
                        return this.createGoto();
                    case"size_menu":
                        return this.createSizeMenu();
                    default:
                        return t("<li/>").html(e.format(n))
                }
            }, s.prototype.createLink = function (i, n) {
                i === e && (i = this.state.page), n === e && (n = this.state);
                var r = this.options.linkCreator;
                return "string" == typeof r ? r.format(t.extend({}, n, {page: i})) : t.isFunction(r) ? r(i, n) : "#page=" + i
            }, s.prototype.render = function (e) {
                var i = this.state, n = this.options.elementCreator || this.createElement, r = t.isPlainObject(n);
                "string" == typeof (e = e || this.elements || this.options.elements) && (e = e.split(",")), this.elements = e, this.$.empty();
                for (var s = 0; s < e.length; ++s) {
                    var o = t.trim(e[s]), a = (r && n[o] || n).call(this, o, this.$, i);
                    !1 === a && (a = this.createElement(o, this.$, i)), a instanceof t && ("LI" !== a[0].tagName && (a = t("<li/>").append(a)), this.$.append(a))
                }
                var l = null;
                return this.$.children("li").each(function () {
                    var e = t(this), i = !!e.children(".pager-item").length;
                    l ? l.toggleClass("pager-item-right", !i) : i && e.addClass("pager-item-left"), l = i ? e : null
                }), l && l.addClass("pager-item-right"), this.$.callComEvent(this, "onRender", [i]), this
            }, s.DEFAULTS = t.extend({
                elements: ["first_icon", "prev_icon", "pages", "next_icon", "last_icon", "page_of_total_text", "items_range_text", "total_text"],
                prevIcon: "icon-double-angle-left",
                nextIcon: "icon-double-angle-right",
                firstIcon: "icon-step-backward",
                lastIcon: "icon-step-forward",
                navEllipsisItem: '<i class="icon icon-ellipsis-h"></i>',
                maxNavCount: 10,
                menuDirection: "dropdown",
                pageSizeOptions: [10, 20, 30, 50, 100]
            }, n), t.fn.pager = function (e) {
                return this.each(function () {
                    var n = t(this), r = n.data(i), o = "object" == c()(e) && e;
                    r || n.data(i, r = new s(this, o)), "string" == typeof e && r[e]()
                })
            }, s.NAME = i, t.fn.pager.Constructor = s, t(function () {
                t('[data-ride="pager"]').pager()
            })
        }(t, void 0), function (t) {
            var e = function (e) {
                this.element = t(e)
            };
            e.prototype.show = function () {
                var e = this.element, i = e.closest("ul:not(.dropdown-menu)"),
                    n = e.attr("data-target") || e.attr("data-tab");
                if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                    var r = i.find(".active:last a")[0], s = t.Event("show.zui.tab", {relatedTarget: r});
                    if (e.trigger(s), !s.isDefaultPrevented()) {
                        var o = t(n);
                        this.activate(e.parent("li"), i), this.activate(o, o.parent(), function () {
                            e.trigger({type: "shown.zui.tab", relatedTarget: r})
                        })
                    }
                }
            }, e.prototype.activate = function (e, i, n) {
                var r = i.find("> .active"), s = n && t.support.transition && r.hasClass("fade");

                function o() {
                    r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
                }

                s ? r.one(t.support.transition.end, o).emulateTransitionEnd(150) : o(), r.removeClass("in")
            };
            var i = t.fn.tab;
            t.fn.tab = function (i) {
                return this.each(function () {
                    var n = t(this), r = n.data("zui.tab");
                    r || n.data("zui.tab", r = new e(this)), "string" == typeof i && r[i]()
                })
            }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
                return t.fn.tab = i, this
            }, t(document).on("click.zui.tab.data-api", '[data-toggle="tab"], [data-tab]', function (e) {
                e.preventDefault(), t(this).tab("show")
            })
        }(e), function (t) {
            t.fn.emulateTransitionEnd = function (e) {
                var i = !1, n = this;
                t(this).one("bsTransitionEnd", function () {
                    i = !0
                });
                return setTimeout(function () {
                    i || t(n).trigger(t.support.transition.end)
                }, e), this
            }, t(function () {
                t.support.transition = function () {
                    var t = document.createElement("bootstrap"), e = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                    for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
                    return !1
                }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                    bindType: t.support.transition.end,
                    delegateType: t.support.transition.end,
                    handle: function (e) {
                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                    }
                })
            })
        }(t), function (t) {
            var e = "zui.collapse", i = function e(i, n) {
                this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
            };
            i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
                return this.$element.hasClass("width") ? "width" : "height"
            }, i.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var i = t.Event("show." + e);
                    if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                        var n = this.$parent && this.$parent.find(".in");
                        if (n && n.length) {
                            var r = n.data(e);
                            if (r && r.transitioning) return;
                            n.collapse("hide"), r || n.data(e, null)
                        }
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                        var o = function () {
                            this.$element.removeClass("collapsing").addClass("in")[s]("auto"), this.transitioning = 0, this.$element.trigger("shown." + e)
                        };
                        if (!t.support.transition) return o.call(this);
                        var a = t.camelCase(["scroll", s].join("-"));
                        this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][a])
                    }
                }
            }, i.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var i = t.Event("hide." + e);
                    if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                        var n = this.dimension();
                        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                        var r = function () {
                            this.transitioning = 0, this.$element.trigger("hidden." + e).removeClass("collapsing").addClass("collapse")
                        };
                        if (!t.support.transition) return r.call(this);
                        this.$element[n](0).one(t.support.transition.end, t.proxy(r, this)).emulateTransitionEnd(350)
                    }
                }
            }, i.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            };
            var n = t.fn.collapse;
            t.fn.collapse = function (n) {
                return this.each(function () {
                    var r = t(this), s = r.data(e), o = t.extend({}, i.DEFAULTS, r.data(), "object" == c()(n) && n);
                    s || r.data(e, s = new i(this, o)), "string" == typeof n && s[n]()
                })
            }, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
                return t.fn.collapse = n, this
            }, t(document).on("click." + e + ".data-api", "[data-toggle=collapse]", function (i) {
                var n, r = t(this),
                    s = r.attr("data-target") || i.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
                    o = t(s), a = o.data(e), l = a ? "toggle" : r.data(), c = r.attr("data-parent"), u = c && t(c);
                a && a.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + c + '"]').not(r).addClass("collapsed"), r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(l)
            })
        }(e), function (t, e) {
            var i = e(t), n = function () {
                var t = i.width();
                e("html").toggleClass("screen-desktop", t >= 992 && t < 1200).toggleClass("screen-desktop-wide", t >= 1200).toggleClass("screen-tablet", t >= 768 && t < 992).toggleClass("screen-phone", t < 768).toggleClass("device-mobile", t < 992).toggleClass("device-desktop", t >= 992)
            }, r = "", s = navigator.userAgent;
            s.match(/(iPad|iPhone|iPod)/i) ? r += " os-ios" : s.match(/android/i) ? r += " os-android" : s.match(/Win/i) ? r += " os-windows" : s.match(/Mac/i) ? r += " os-mac" : s.match(/Linux/i) ? r += " os-linux" : s.match(/X11/i) && (r += " os-unix"), "ontouchstart" in document.documentElement && (r += " is-touchable"), e("html").addClass(r), i.resize(n), n()
        }(window, t), function (t) {
            var e = {
                zh_cn: '您的浏览器版本过低，无法体验所有功能，建议升级或者更换浏览器。 <a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
                zh_tw: '您的瀏覽器版本過低，無法體驗所有功能，建議升級或者更换瀏覽器。<a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
                en: 'Your browser is too old, it has been unable to experience the colorful internet. We strongly recommend that you upgrade a better one. <a href="http://browsehappy.com/" target="_blank" class="alert-link">Learn more...</a>'
            }, i = function () {
                var t = this.isIE() || this.isIE10() || !1;
                if (t) for (var e = 10; e > 5; e--) if (this.isIE(e)) {
                    t = e;
                    break
                }
                this.ie = t, this.cssHelper()
            };
            i.prototype.cssHelper = function () {
                var e = this.ie, i = t("html");
                i.toggleClass("ie", e).removeClass("ie-6 ie-7 ie-8 ie-9 ie-10"), e && i.addClass("ie-" + e).toggleClass("gt-ie-7 gte-ie-8 support-ie", e >= 8).toggleClass("lte-ie-7 lt-ie-8 outdated-ie", e < 8).toggleClass("gt-ie-8 gte-ie-9", e >= 9).toggleClass("lte-ie-8 lt-ie-9", e < 9).toggleClass("gt-ie-9 gte-ie-10", e >= 10).toggleClass("lte-ie-9 lt-ie-10", e < 10)
            }, i.prototype.tip = function (i) {
                var n = t("#browseHappyTip");
                n.length || (n = t('<div id="browseHappyTip" class="alert alert-dismissable alert-danger-inverse alert-block" style="position: relative; z-index: 99999"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><div class="container"><div class="content text-center"></div></div></div>')).prependTo("body"), n.find(".content").html(i || this.browseHappyTip || e[t.zui.clientLang() || "zh_cn"])
            }, i.prototype.isIE = function (t) {
                if (10 === t) return this.isIE10();
                var e = document.createElement("b");
                return e.innerHTML = "\x3c!--[if IE " + (t || "") + "]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
            }, i.prototype.isIE10 = function () {
                /*@cc_on!@*/
                return !1
            }, t.zui({browser: new i}), t(function () {
                t("body").hasClass("disabled-browser-tip") || t.zui.browser.ie && t.zui.browser.ie < 8 && t.zui.browser.tip()
            })
        }(t), Date.ONEDAY_TICKS = 864e5, Date.prototype.format || (Date.prototype.format = function (t) {
            var e = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
            };
            for (var i in /(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), e) new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[i] : ("00" + e[i]).substr(("" + e[i]).length)));
            return t
        }), Date.prototype.addMilliseconds || (Date.prototype.addMilliseconds = function (t) {
            return this.setTime(this.getTime() + t), this
        }), Date.prototype.addDays || (Date.prototype.addDays = function (t) {
            return this.addMilliseconds(t * Date.ONEDAY_TICKS), this
        }), Date.prototype.clone || (Date.prototype.clone = function () {
            var t = new Date;
            return t.setTime(this.getTime()), t
        }), Date.isLeapYear || (Date.isLeapYear = function (t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        }), Date.getDaysInMonth || (Date.getDaysInMonth = function (t, e) {
            return [31, Date.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
        }), Date.prototype.isLeapYear || (Date.prototype.isLeapYear = function () {
            return Date.isLeapYear(this.getFullYear())
        }), Date.prototype.clearTime || (Date.prototype.clearTime = function () {
            return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
        }), Date.prototype.getDaysInMonth || (Date.prototype.getDaysInMonth = function () {
            return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
        }), Date.prototype.addMonths || (Date.prototype.addMonths = function (t) {
            var e = this.getDate();
            return this.setDate(1), this.setMonth(this.getMonth() + t), this.setDate(Math.min(e, this.getDaysInMonth())), this
        }), Date.prototype.getLastWeekday || (Date.prototype.getLastWeekday = function (t) {
            t = t || 1;
            for (var e = this.clone(); e.getDay() != t;) e.addDays(-1);
            return e.clearTime(), e
        }), Date.prototype.isSameDay || (Date.prototype.isSameDay = function (t) {
            return t.toDateString() === this.toDateString()
        }), Date.prototype.isSameWeek || (Date.prototype.isSameWeek = function (t) {
            var e = this.getLastWeekday(), i = e.clone().addDays(7);
            return t >= e && t < i
        }), Date.prototype.isSameYear || (Date.prototype.isSameYear = function (t) {
            return this.getFullYear() === t.getFullYear()
        }), Date.create || (Date.create = function (t) {
            return t instanceof Date || ("number" == typeof t && t < 1e10 && (t *= 1e3), t = new Date(t)), t
        }), Date.timestamp || (Date.timestamp = function (t) {
            return "number" == typeof t ? t < 1e10 && (t *= 1e3) : t = Date.create(t).getTime(), t
        }), String.prototype.format || (String.prototype.format = function (t) {
            var e, i = this;
            if (arguments.length > 0) if (arguments.length <= 2 && "object" == c()(t)) for (var n in t) void 0 !== t[n] && (e = new RegExp("(" + (arguments[1] ? arguments[1].replace("0", n) : "{" + n + "}") + ")", "g"), i = i.replace(e, t[n])); else for (var r = 0; r < arguments.length; r++) void 0 !== arguments[r] && (e = new RegExp("({[" + r + "]})", "g"), i = i.replace(e, arguments[r]));
            return i
        }), String.prototype.isNum || (String.prototype.isNum = function (t) {
            var e;
            return null !== t && (e = /\d*/i, t.match(e) == t)
        }), String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
            var i = this.toString();
            (void 0 === e || e > i.length) && (e = i.length), e -= t.length;
            var n = i.indexOf(t, e);
            return -1 !== n && n === e
        }), String.prototype.startsWith || (String.prototype.startsWith = function (t, e) {
            return e = e || 0, this.lastIndexOf(t, e) === e
        }), String.prototype.includes || (String.prototype.includes = function () {
            return -1 !== String.prototype.indexOf.apply(this, arguments)
        }),
            /*!
 * jQuery resize event - v1.1
 * http://benalman.com/projects/jquery-resize-plugin/
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * MIT & GPL http://benalman.com/about/license/
 */
            function (t, e, i) {
                var n, r = t([]), s = t.resize = t.extend(t.resize, {}), o = "setTimeout", a = "resize",
                    l = a + "-special-event", c = "delay";
                s[c] = 250, s.throttleWindow = !0, t.event.special[a] = {
                    setup: function () {
                        if (!s.throttleWindow && this[o]) return !1;
                        var i = t(this);
                        r = r.add(i), t.data(this, l, {w: i.width(), h: i.height()}), 1 === r.length && function i() {
                            n = e[o](function () {
                                r.each(function () {
                                    var e = t(this), i = e.width(), n = e.height(), r = t.data(this, l);
                                    i === r.w && n === r.h || e.trigger(a, [r.w = i, r.h = n])
                                }), i()
                            }, s[c])
                        }()
                    }, teardown: function () {
                        if (!s.throttleWindow && this[o]) return !1;
                        var e = t(this);
                        r = r.not(e), e.removeData(l), r.length || clearTimeout(n)
                    }, add: function (e) {
                        if (!s.throttleWindow && this[o]) return !1;
                        var n;

                        function r(e, r, s) {
                            var o = t(this), a = t.data(this, l) || {};
                            a.w = r !== i ? r : o.width(), a.h = s !== i ? s : o.height(), n.apply(this, arguments)
                        }

                        if (t.isFunction(e)) return n = e, r;
                        n = e.handler, e.handler = r
                    }
                }
            }(t, void 0), function (t) {
            var e = "zui.scrollspy";

            function i(n, r) {
                var s, o = t.proxy(this.process, this);
                this.$element = t(n).is("body") ? t(window) : t(n), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll." + e + ".data-api", o), this.options = t.extend({}, i.DEFAULTS, r), this.selector || (this.selector = (this.options.target || (s = t(n).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a"), this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
            }

            i.DEFAULTS = {offset: 10}, i.prototype.refresh = function () {
                var e = this.$element[0] == window ? "offset" : "position";
                this.offsets = t([]), this.targets = t([]);
                var i = this;
                this.$body.find(this.selector).map(function () {
                    var n = t(this), r = n.data("target") || n.attr("href"), s = /^#./.test(r) && t(r);
                    return s && s.length && s.is(":visible") && [[s[e]().top + (!t.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), r]] || null
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).each(function () {
                    i.offsets.push(this[0]), i.targets.push(this[1])
                })
            }, i.prototype.process = function () {
                var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                    i = (this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight) - this.$scrollElement.height(),
                    n = this.offsets, r = this.targets, s = this.activeTarget;
                if (e >= i) return s != (t = r.last()[0]) && this.activate(t);
                if (s && e <= n[0]) return s != (t = r[0]) && this.activate(t);
                for (t = n.length; t--;) s != r[t] && e >= n[t] && (!n[t + 1] || e <= n[t + 1]) && this.activate(r[t])
            }, i.prototype.activate = function (i) {
                this.activeTarget = i, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
                var n = this.selector + '[data-target="' + i + '"],' + this.selector + '[href="' + i + '"]',
                    r = t(n).parents("li").addClass("active");
                r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate." + e)
            };
            var n = t.fn.scrollspy;
            t.fn.scrollspy = function (n) {
                return this.each(function () {
                    var r = t(this), s = r.data(e), o = "object" == c()(n) && n;
                    s || r.data(e, s = new i(this, o)), "string" == typeof n && s[n]()
                })
            }, t.fn.scrollspy.Constructor = i, t.fn.scrollspy.noConflict = function () {
                return t.fn.scrollspy = n, this
            }, t(window).on("load", function () {
                t('[data-spy="scroll"]').each(function () {
                    var e = t(this);
                    e.scrollspy(e.data())
                })
            })
        }(t), function (t, e) {
            var i, n, r = "localStorage", s = "page_" + t.location.pathname + t.location.search, o = function () {
                this.slience = !0;
                try {
                    r in t && t[r] && t[r].setItem && (this.enable = !0, i = t[r])
                } catch (t) {
                }
                this.enable || (n = {}, i = {
                    getLength: function () {
                        var t = 0;
                        return e.each(n, function () {
                            t++
                        }), t
                    }, key: function (t) {
                        var i, r = 0;
                        return e.each(n, function (e) {
                            if (r === t) return i = e, !1;
                            r++
                        }), i
                    }, removeItem: function (t) {
                        delete n[t]
                    }, getItem: function (t) {
                        return n[t]
                    }, setItem: function (t, e) {
                        n[t] = e
                    }, clear: function () {
                        n = {}
                    }
                }), this.storage = i, this.page = this.get(s, {})
            };
            o.prototype.pageSave = function () {
                if (e.isEmptyObject(this.page)) this.remove(s); else {
                    var t, i = [];
                    for (t in this.page) {
                        null === this.page[t] && i.push(t)
                    }
                    for (t = i.length - 1; t >= 0; t--) delete this.page[i[t]];
                    this.set(s, this.page)
                }
            }, o.prototype.pageRemove = function (t) {
                void 0 !== this.page[t] && (this.page[t] = null, this.pageSave())
            }, o.prototype.pageClear = function () {
                this.page = {}, this.pageSave()
            }, o.prototype.pageGet = function (t, e) {
                var i = this.page[t];
                return void 0 !== e && null == i ? e : i
            }, o.prototype.pageSet = function (t, i) {
                e.isPlainObject(t) ? e.extend(!0, this.page, t) : this.page[this.serialize(t)] = i, this.pageSave()
            }, o.prototype.check = function () {
                if (!this.enable && !this.slience) throw new Error("Browser not support localStorage or enable status been set true.");
                return this.enable
            }, o.prototype.length = function () {
                return this.check() ? i.getLength ? i.getLength() : i.length : 0
            }, o.prototype.removeItem = function (t) {
                return i.removeItem(t), this
            }, o.prototype.remove = function (t) {
                return this.removeItem(t)
            }, o.prototype.getItem = function (t) {
                return i.getItem(t)
            }, o.prototype.get = function (t, e) {
                var i = this.deserialize(this.getItem(t));
                return null == i && void 0 !== e ? e : i
            }, o.prototype.key = function (t) {
                return i.key(t)
            }, o.prototype.setItem = function (t, e) {
                return i.setItem(t, e), this
            }, o.prototype.set = function (t, e) {
                return void 0 === e ? this.remove(t) : (this.setItem(t, this.serialize(e)), this)
            }, o.prototype.clear = function () {
                return i.clear(), this
            }, o.prototype.forEach = function (t) {
                for (var e = this.length() - 1; e >= 0; e--) {
                    var n = i.key(e);
                    t(n, this.get(n))
                }
                return this
            }, o.prototype.getAll = function () {
                var t = {};
                return this.forEach(function (e, i) {
                    t[e] = i
                }), t
            }, o.prototype.serialize = function (t) {
                return "string" == typeof t ? t : JSON.stringify(t)
            }, o.prototype.deserialize = function (t) {
                if ("string" == typeof t) try {
                    return JSON.parse(t)
                } catch (e) {
                    return t || void 0
                }
            }, e.zui({store: new o})
        }(window, t), function (t) {
            var e = "zui.searchBox", i = function e(i, n) {
                var r = this;
                r.name = name, r.$ = t(i), r.options = n = t.extend({}, e.DEFAULTS, r.$.data(), n);
                var s = r.$.is(n.inputSelector) ? r.$ : r.$.find(n.inputSelector);
                if (s.length) {
                    var o = function () {
                        r.changeTimer && (clearTimeout(r.changeTimer), r.changeTimer = null);
                        var t = r.getSearch();
                        if (t !== r.lastValue) {
                            var e = "" === t;
                            s.toggleClass("empty", e), r.$.callComEvent(r, "onSearchChange", [t, e]), r.lastValue = t
                        }
                    };
                    r.$input = s = s.first(), s.on(n.listenEvent, function (t) {
                        r.changeTimer = setTimeout(function () {
                            o()
                        }, n.changeDelay)
                    }).on("focus", function (t) {
                        s.addClass("focus"), r.$.callComEvent(r, "onFocus", [t])
                    }).on("blur", function (t) {
                        s.removeClass("focus"), r.$.callComEvent(r, "onBlur", [t])
                    }).on("keydown", function (t) {
                        var e = 0, i = t.which;
                        27 === i && n.escToClear ? (this.setSearch("", !0), o(), e = 1) : 13 === i && n.onPressEnter && (o(), r.$.callComEvent(r, "onPressEnter", [t])), !1 === r.$.callComEvent(r, "onKeyDown", [t]) && (e = 1), e && t.preventDefault()
                    }), r.$.on("click", ".search-clear-btn", function (t) {
                        r.setSearch("", !0), o(), r.focus(), t.preventDefault()
                    }), o()
                } else console.error("ZUI: search box init error, cannot find search box input element.")
            };
            i.DEFAULTS = {
                inputSelector: 'input[type="search"],input[type="text"]',
                listenEvent: "change input paste",
                changeDelay: 500
            }, i.prototype.getSearch = function () {
                return this.$input && t.trim(this.$input.val())
            }, i.prototype.setSearch = function (t, e) {
                var i = this.$input;
                i && (i.val(t), e || i.trigger("change"))
            }, i.prototype.focus = function () {
                this.$input && this.$input.focus()
            }, t.fn.searchBox = function (n) {
                return this.each(function () {
                    var r = t(this), s = r.data(e), o = "object" == c()(n) && n;
                    s || r.data(e, s = new i(this, o)), "string" == typeof n && s[n]()
                })
            }, i.NAME = e, t.fn.searchBox.Constructor = i
        }(t), function (t, e) {
            var i = "zui.draggable", n = {container: "body", move: !0}, r = 0, s = function (e, i) {
                this.$ = t(e), this.id = r++, this.options = t.extend({}, n, this.$.data(), i), this.init()
            };
            s.DEFAULTS = n, s.NAME = i, s.prototype.init = function () {
                var n, r, s, o, a, l = this.$, c = "." + i + "." + this.id, u = "mousedown" + c, h = "mouseup" + c,
                    d = "mousemove" + c, f = this.options, p = f.selector, v = f.handle, g = l,
                    m = t.isFunction(f.move), y = function (t) {
                        var e = t.pageX, i = t.pageY;
                        a = !0;
                        var r = {left: e - s.x, top: i - s.y};
                        g.removeClass("drag-ready").addClass("dragging"), f.move && (m ? f.move(r, g) : g.css(r)), f.drag && f.drag({
                            event: t,
                            element: g,
                            startOffset: s,
                            pos: r,
                            offset: {x: e - n.x, y: i - n.y},
                            smallOffset: {x: e - o.x, y: i - o.y}
                        }), o.x = e, o.y = i, f.stopPropagation && t.stopPropagation()
                    }, b = function (i) {
                        if (t(e).off(c), a) {
                            var r = {left: i.pageX - s.x, top: i.pageY - s.y};
                            g.removeClass("drag-ready dragging"), f.move && (m ? f.move(r, g) : g.css(r)), f.finish && f.finish({
                                event: i,
                                element: g,
                                startOffset: s,
                                pos: r,
                                offset: {x: i.pageX - n.x, y: i.pageY - n.y},
                                smallOffset: {x: i.pageX - o.x, y: i.pageY - o.y}
                            }), i.preventDefault(), f.stopPropagation && i.stopPropagation()
                        } else g.removeClass("drag-ready")
                    }, w = function (i) {
                        var l = t.zui.getMouseButtonCode(f.mouseButton);
                        if (!(l > -1 && i.button !== l)) {
                            var c = t(this);
                            if (p && (g = v ? c.closest(p) : c), f.before) if (!1 === f.before({
                                event: i,
                                element: g
                            })) return;
                            var u = t(f.container), m = g.offset();
                            r = u.offset(), n = {x: i.pageX, y: i.pageY}, s = {
                                x: i.pageX - m.left + r.left,
                                y: i.pageY - m.top + r.top
                            }, o = t.extend({}, n), a = !1, g.addClass("drag-ready"), i.preventDefault(), f.stopPropagation && i.stopPropagation(), t(e).on(d, y).on(h, b)
                        }
                    };
                v ? l.on(u, v, w) : p ? l.on(u, p, w) : l.on(u, w)
            }, s.prototype.destroy = function () {
                var n = "." + i + "." + this.id;
                this.$.off(n), t(e).off(n), this.$.data(i, null)
            }, t.fn.draggable = function (e) {
                return this.each(function () {
                    var n = t(this), r = n.data(i), o = "object" == c()(e) && e;
                    r || n.data(i, r = new s(this, o)), "string" == typeof e && r[e]()
                })
            }, t.fn.draggable.Constructor = s
        }(t, document), function (t, e, i) {
            var n = "zui.droppable", r = {
                target: ".droppable-target",
                deviation: 5,
                sensorOffsetX: 0,
                sensorOffsetY: 0,
                dropToClass: "drop-to"
            }, s = 0, o = function (e, i) {
                this.id = s++, this.$ = t(e), this.options = t.extend({}, r, this.$.data(), i), this.init()
            };
            o.DEFAULTS = r, o.NAME = n, o.prototype.trigger = function (e, i) {
                return t.zui.callEvent(this.options[e], i, this)
            }, o.prototype.init = function () {
                var r, s, o, a, l, c, u, h, d, f, p, v, g, m = this, y = m.$, b = m.options, w = b.deviation,
                    x = "." + n + "." + m.id, T = "mousedown" + x, C = "mouseup" + x, E = "mousemove" + x,
                    S = b.selector, _ = b.handle, k = b.flex, M = b.container, P = b.canMoveHere, L = b.dropToClass,
                    D = y, A = !1, I = M ? t(b.container).first() : S ? y : t("body"), $ = function (e) {
                        if (A && (p = {
                            left: e.pageX,
                            top: e.pageY
                        }, !(i.abs(p.left - h.left) < w && i.abs(p.top - h.top) < w))) {
                            if (null === o) {
                                var n = I.css("position");
                                "absolute" != n && "relative" != n && "fixed" != n && (c = n, I.css("position", "relative")), o = D.clone().removeClass("drag-from").addClass("drag-shadow").css({
                                    position: "absolute",
                                    width: D.outerWidth(),
                                    transition: "none"
                                }).appendTo(I), D.addClass("dragging"), m.trigger("start", {
                                    event: e,
                                    element: D,
                                    targets: r
                                })
                            }
                            var u = {left: p.left - f.left, top: p.top - f.top},
                                g = {left: u.left - d.left, top: u.top - d.top};
                            o.css(g), t.extend(v, p);
                            var y = !1;
                            a = !1, k || r.removeClass(L);
                            var x = null;
                            if (r.each(function () {
                                var e = t(this), i = e.offset(), n = e.outerWidth(), r = e.outerHeight(),
                                    s = i.left + b.sensorOffsetX, o = i.top + b.sensorOffsetY;
                                if (p.left > s && p.top > o && p.left < s + n && p.top < o + r && (x && x.removeClass(L), x = e, !b.nested)) return !1
                            }), x) {
                                a = !0;
                                var T = x.data("id");
                                D.data("id") != T && (l = !1), (null === s || s.data("id") !== T && !l) && (y = !0), s = x, k && r.removeClass(L), s.addClass(L)
                            }
                            k ? null !== s && s.length && (a = !0) : (D.toggleClass("drop-in", a), o.toggleClass("drop-in", a)), P && !1 === P(D, s) || m.trigger("drag", {
                                event: e,
                                isIn: a,
                                target: s,
                                element: D,
                                isNew: y,
                                selfTarget: l,
                                clickOffset: f,
                                offset: u,
                                position: {left: u.left - d.left, top: u.top - d.top},
                                mouseOffset: p
                            }), e.preventDefault()
                        }
                    }, O = function (i) {
                        if (t(e).off(x), clearTimeout(g), A) {
                            if (A = !1, c && I.css("position", c), null === o) return D.removeClass("drag-from"), void m.trigger("always", {
                                event: i,
                                cancel: !0
                            });
                            a || (s = null);
                            var n = {left: (p = i ? {left: i.pageX, top: i.pageY} : v).left - f.left, top: p.top - f.top},
                                u = {left: p.left - v.left, top: p.top - v.top};
                            v.left = p.left, v.top = p.top;
                            var h = {
                                event: i,
                                isIn: a,
                                target: s,
                                element: D,
                                isNew: !l && null !== s,
                                selfTarget: l,
                                offset: n,
                                mouseOffset: p,
                                position: {left: n.left - d.left, top: n.top - d.top},
                                lastMouseOffset: v,
                                moveOffset: u
                            };
                            m.trigger("beforeDrop", h) && a && m.trigger("drop", h), r.removeClass(L), D.removeClass("dragging").removeClass("drag-from"), o.remove(), o = null, m.trigger("finish", h), m.trigger("always", h), i && i.preventDefault()
                        }
                    }, z = function (i) {
                        var n = t.zui.getMouseButtonCode(b.mouseButton);
                        if (!(n > -1 && i.button !== n)) {
                            var p = t(this);
                            S && (D = _ ? p.closest(S) : p), D.hasClass("drag-shadow") || b.before && !1 === b.before({
                                event: i,
                                element: D
                            }) || (A = !0, r = t.isFunction(b.target) ? b.target(D, y) : I.find(b.target), s = null, o = null, a = !1, l = !0, c = null, u = D.offset(), (d = I.offset()).top = d.top - I.scrollTop(), d.left = d.left - I.scrollLeft(), h = {
                                left: i.pageX,
                                top: i.pageY
                            }, v = t.extend({}, h), f = {
                                left: h.left - u.left,
                                top: h.top - u.top
                            }, D.addClass("drag-from"), t(e).on(E, $).on(C, O), g = setTimeout(function () {
                                t(e).on(T, O)
                            }, 10), i.preventDefault(), b.stopPropagation && i.stopPropagation())
                        }
                    };
                _ ? y.on(T, _, z) : S ? y.on(T, S, z) : y.on(T, z)
            }, o.prototype.destroy = function () {
                var i = "." + n + "." + this.id;
                this.$.off(i), t(e).off(i), this.$.data(n, null)
            }, o.prototype.reset = function () {
                this.destroy(), this.init()
            }, t.fn.droppable = function (e) {
                return this.each(function () {
                    var i = t(this), r = i.data(n), s = "object" == c()(e) && e;
                    r || i.data(n, r = new o(this, s)), "string" == typeof e && r[e]()
                })
            }, t.fn.droppable.Constructor = o
        }(t, document, Math), function (t, e) {
            var i = "zui.modal", n = function (n, r) {
                var s = this;
                s.options = r, s.$body = t(document.body), s.$element = t(n), s.$backdrop = s.isShown = null, s.scrollbarWidth = 0, r.moveable === e && (s.options.moveable = s.$element.hasClass("modal-moveable")), r.remote && s.$element.find(".modal-content").load(r.remote, function () {
                    s.$element.trigger("loaded." + i)
                })
            };
            n.VERSION = "3.2.0", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0,
                position: "fit"
            };
            var r = function (e, i) {
                var n = t(window);
                i.left = Math.max(0, Math.min(i.left, n.width() - e.outerWidth())), i.top = Math.max(0, Math.min(i.top, n.height() - e.outerHeight())), e.css(i)
            };

            function s(e, r, s) {
                return this.each(function () {
                    var o = t(this), a = o.data(i), l = t.extend({}, n.DEFAULTS, o.data(), "object" == c()(e) && e);
                    a || o.data(i, a = new n(this, l)), "string" == typeof e ? a[e](r, s) : l.show && a.show(r, s)
                })
            }

            n.prototype.toggle = function (t, e) {
                return this.isShown ? this.hide() : this.show(t, e)
            }, n.prototype.ajustPosition = function (n) {
                var s = this.options;
                if (n === e && (n = s.position), n !== e && null !== n) {
                    t.isFunction(n) && (n = n(this));
                    var o = this.$element.find(".modal-dialog"), a = t(window).height(),
                        l = {maxHeight: "initial", overflow: "visible"}, c = o.find(".modal-body").css(l);
                    if (s.scrollInside) {
                        var u = s.headerHeight;
                        "number" != typeof u ? u = o.find(".modal-header").height() : t.isFunction(u) && (u = u($header)), l.maxHeight = a - u, c.outerHeight() > l.maxHeight && (l.overflow = "auto")
                    }
                    c.css(l);
                    var h = Math.max(0, (a - o.outerHeight()) / 2);
                    if ("fit" === n ? n = {top: h > 50 ? Math.floor(2 * h / 3) : h} : "center" === n ? n = {top: h} : t.isPlainObject(n) || (n = {top: n}), o.hasClass("modal-moveable")) {
                        var d = null, f = s.rememberPos;
                        f && (!0 === f ? d = this.$element.data("modal-pos") : t.zui.store && (d = t.zui.store.pageGet(i + ".rememberPos." + f))), n = t.extend(n, {left: Math.max(0, (t(window).width() - o.outerWidth()) / 2)}, d), "inside" === s.moveable ? r(o, n) : o.css(n)
                    } else o.css(n)
                }
            }, n.prototype.setMoveale = function () {
                t.fn.draggable || console.error("Moveable modal requires draggable.js.");
                var e = this, n = e.options, s = e.$element.find(".modal-dialog").removeClass("modal-dragged");
                s.toggleClass("modal-moveable", !!n.moveable), e.$element.data("modal-moveable-setup") || s.draggable({
                    container: e.$element,
                    handle: ".modal-header",
                    before: function () {
                        var t = s.css("margin-top");
                        t && "0px" !== t && s.css("top", t).css("margin-top", "").addClass("modal-dragged")
                    },
                    finish: function (r) {
                        var s = n.rememberPos;
                        s && (e.$element.data("modal-pos", r.pos), t.zui.store && !0 !== s && t.zui.store.pageSet(i + ".rememberPos." + s, r.pos))
                    },
                    move: "inside" !== n.moveable || function (t) {
                        r(s, t)
                    }
                })
            }, n.prototype.show = function (e, r) {
                var s = this, o = t.Event("show." + i, {relatedTarget: e});
                s.$element.trigger(o), s.$element.toggleClass("modal-scroll-inside", !!s.options.scrollInside), s.isShown || o.isDefaultPrevented() || (s.isShown = !0, s.options.moveable && s.setMoveale(), s.checkScrollbar(), !1 !== s.options.backdrop && (s.$body.addClass("modal-open"), s.setScrollbar()), s.escape(), s.$element.on("click.dismiss." + i, '[data-dismiss="modal"]', function (t) {
                    s.hide(), t.stopPropagation()
                }), s.backdrop(function () {
                    var o = t.support.transition && s.$element.hasClass("fade");
                    s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), o && s.$element[0].offsetWidth, s.$element.addClass("in").attr("aria-hidden", !1), s.ajustPosition(r), s.enforceFocus();
                    var a = t.Event("shown." + i, {relatedTarget: e});
                    o ? s.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                        s.$element.trigger("focus").trigger(a)
                    }).emulateTransitionEnd(n.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(a)
                }))
            }, n.prototype.hide = function (e) {
                e && e.preventDefault && e.preventDefault();
                e = t.Event("hide." + i), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, !1 !== this.options.backdrop && (this.$body.removeClass("modal-open"), this.resetScrollbar()), this.escape(), t(document).off("focusin." + i), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss." + i), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
            }, n.prototype.enforceFocus = function () {
                t(document).off("focusin." + i).on("focusin." + i, t.proxy(function (t) {
                    this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                }, this))
            }, n.prototype.escape = function () {
                this.isShown && this.options.keyboard ? t(document).on("keydown.dismiss." + i, t.proxy(function (n) {
                    if (27 == n.which) {
                        var r = t.Event("escaping." + i), s = this.$element.triggerHandler(r, "esc");
                        if (s != e && !s) return;
                        this.hide()
                    }
                }, this)) : this.isShown || t(document).off("keydown.dismiss." + i)
            }, n.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(), this.backdrop(function () {
                    t.$element.trigger("hidden." + i)
                })
            }, n.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            }, n.prototype.backdrop = function (e) {
                var r = this, s = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = t.support.transition && s;
                    if (this.$backdrop = t('<div class="modal-backdrop ' + s + '" />').appendTo(this.$body), this.$element.on("mousedown.dismiss." + i, t.proxy(function (t) {
                        t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                    o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var a = function () {
                        r.removeBackdrop(), e && e()
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
                } else e && e()
            }, n.prototype.checkScrollbar = function () {
                document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
            }, n.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
            }, n.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", "")
            }, n.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e
            };
            var o = t.fn.modal;
            t.fn.modal = s, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
                return t.fn.modal = o, this
            }, t(document).on("click." + i + ".data-api", '[data-toggle="modal"]', function (e) {
                var n = t(this), r = n.attr("href"), o = null;
                try {
                    o = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""))
                } catch (t) {
                    return
                }
                if (o.length) {
                    var a = o.data(i) ? "toggle" : t.extend({remote: !/#/.test(r) && r}, o.data(), n.data());
                    n.is("a") && e.preventDefault(), o.one("show." + i, function (t) {
                        t.isDefaultPrevented() || o.one("hidden." + i, function () {
                            n.is(":visible") && n.trigger("focus")
                        })
                    }), s.call(o, a, this, n.data("position"))
                }
            })
        }(t, void 0), function (t, e, i) {
            if (!t.fn.modal) throw new Error("Modal trigger requires modal.js");
            var n = "zui.modaltrigger", r = function e(i, n) {
                i = t.extend({}, e.DEFAULTS, t.ModalTriggerDefaults, n ? n.data() : null, i), this.isShown, this.$trigger = n, this.options = i, this.id = t.zui.uuid()
            };
            r.DEFAULTS = {
                type: "custom",
                height: "auto",
                name: "triggerModal",
                fade: !0,
                position: "fit",
                showHeader: !0,
                delay: 0,
                backdrop: !0,
                keyboard: !0,
                waittime: 0,
                loadingIcon: "icon-spinner-indicator",
                scrollInside: !1
            }, r.prototype.init = function (i) {
                var r = this;
                if (i.url && (!i.type || "ajax" != i.type && "iframe" != i.type) && (i.type = "ajax"), i.remote) i.type = "ajax", "string" === c()(i.remote) && (i.url = i.remote); else if (i.iframe) i.type = "iframe", "string" === c()(i.iframe) && (i.url = i.iframe); else if (i.custom && (i.type = "custom", "string" === c()(i.custom))) {
                    var s;
                    try {
                        s = t(i.custom)
                    } catch (t) {
                    }
                    s && s.length ? i.custom = s : t.isFunction(e[i.custom]) && (i.custom = e[i.custom])
                }
                var o = t("#" + i.name);
                o.length && (r.isShown || o.off(".zui.modal"), o.remove()), o = t('<div id="' + i.name + '" class="modal modal-trigger ' + (i.className || "") + '">' + ("string" == typeof i.loadingIcon && 0 === i.loadingIcon.indexOf("icon-") ? '<div class="icon icon-spin loader ' + i.loadingIcon + '"></div>' : i.loadingIcon) + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button class="close" data-dismiss="modal">×</button><h4 class="modal-title"><i class="modal-icon"></i> <span class="modal-title-name"></span></h4></div><div class="modal-body"></div></div></div></div>').appendTo("body").data(n, r);
                var a = function (e, n) {
                    var r = i[e];
                    t.isFunction(r) && o.on(n + ".zui.modal", r)
                };
                a("onShow", "show"), a("shown", "shown"), a("onHide", "hide"), a("hidden", "hidden"), a("loaded", "loaded"), o.on("shown.zui.modal", function () {
                    r.isShown = !0
                }).on("hidden.zui.modal", function () {
                    r.isShown = !1
                }), this.$modal = o, this.$dialog = o.find(".modal-dialog"), i.mergeOptions && (this.options = i)
            }, r.prototype.show = function (i) {
                var r = t.extend({}, this.options, {url: this.$trigger ? this.$trigger.attr("href") || this.$trigger.attr("data-url") || this.$trigger.data("url") : this.options.url}, i);
                this.init(r);
                var s = this, o = this.$modal, a = this.$dialog, l = r.custom,
                    u = a.find(".modal-body").css("padding", ""), h = a.find(".modal-header"),
                    d = a.find(".modal-content");
                o.toggleClass("fade", r.fade).addClass(r.className).toggleClass("modal-loading", !this.isShown).toggleClass("modal-scroll-inside", !!r.scrollInside), a.toggleClass("modal-md", "md" === r.size).toggleClass("modal-sm", "sm" === r.size).toggleClass("modal-lg", "lg" === r.size).toggleClass("modal-fullscreen", "fullscreen" === r.size), h.toggle(r.showHeader), h.find(".modal-icon").attr("class", "modal-icon icon-" + r.icon), h.find(".modal-title-name").text(r.title || ""), r.size && "fullscreen" === r.size && (r.width = "", r.height = "");
                var f = function () {
                    clearTimeout(this.resizeTask), this.resizeTask = setTimeout(function () {
                        s.ajustPosition(r.position)
                    }, 100)
                }, p = function (t, e) {
                    return void 0 === t && (t = r.delay), setTimeout(function () {
                        a = o.find(".modal-dialog"), r.width && "auto" != r.width && a.css("width", r.width), r.height && "auto" != r.height && (a.css("height", r.height), "iframe" === r.type && u.css("height", a.height() - h.outerHeight())), s.ajustPosition(r.position), o.removeClass("modal-loading"), "iframe" != r.type && a.off("resize." + n).on("resize." + n, f), e && e()
                    }, t)
                };
                if ("custom" === r.type && l) if (t.isFunction(l)) {
                    var v = l({modal: o, options: r, modalTrigger: s, ready: p});
                    "string" === c()(v) && (u.html(v), p())
                } else l instanceof t ? (u.html(t("<div>").append(l.clone()).html()), p()) : (u.html(l), p()); else if (r.url) {
                    var g = function () {
                        var t = o.callComEvent(s, "broken");
                        t && (u.html(t), p())
                    };
                    if (o.attr("ref", r.url), "iframe" === r.type) {
                        o.addClass("modal-iframe"), this.firstLoad = !0;
                        var m = "iframe-" + r.name;
                        h.detach(), u.detach(), d.empty().append(h).append(u), u.css("padding", 0).html('<iframe id="' + m + '" name="' + m + '" src="' + r.url + '" frameborder="no"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"  allowtransparency="true" scrolling="auto" style="width: 100%; height: 100%; left: 0px;"></iframe>'), r.waittime > 0 && (s.waitTimeout = p(r.waittime, g));
                        var y = document.getElementById(m);
                        y.onload = y.onreadystatechange = function () {
                            var i = !!r.scrollInside;
                            if (s.firstLoad && o.addClass("modal-loading"), !this.readyState || "complete" == this.readyState) {
                                s.firstLoad = !1, r.waittime > 0 && clearTimeout(s.waitTimeout);
                                try {
                                    o.attr("ref", y.contentWindow.location.href);
                                    var a = e.frames[m].$;
                                    if (a && "auto" === r.height && "fullscreen" != r.size) {
                                        var l = a("body").addClass("body-modal").toggleClass("body-modal-scroll-inside", i);
                                        r.iframeBodyClass && l.addClass(r.iframeBodyClass);
                                        var c = [], d = function (n) {
                                            o.removeClass("fade");
                                            var s = l.outerHeight();
                                            if (!0 === n && r.onlyIncreaseHeight && (s = Math.max(s, u.data("minModalHeight") || 0), u.data("minModalHeight", s)), i) {
                                                var a = r.headerHeight;
                                                "number" != typeof a ? a = h.height() : t.isFunction(a) && (a = a(h));
                                                var d = t(e).height();
                                                s = Math.min(s, d - a)
                                            }
                                            for (c.length > 1 && s === c[0] && (s = Math.max(s, c[1])), c.push(s); c.length > 2;) c.shift();
                                            u.css("height", s), r.fade && o.addClass("fade"), p()
                                        };
                                        o.callComEvent(s, "loaded", {
                                            modalType: "iframe",
                                            jQuery: a
                                        }), setTimeout(d, 100), l.off("resize." + n).on("resize." + n, d), i && t(e).off("resize." + n).on("resize." + n, d)
                                    } else p()
                                } catch (t) {
                                    p()
                                }
                            }
                        }
                    } else t.ajax(t.extend({
                        url: r.url, success: function (i) {
                            try {
                                var n = t(i);
                                n.filter(".modal-dialog").length ? a.replaceWith(n) : n.filter(".modal-content").length ? a.find(".modal-content").replaceWith(n) : u.wrapInner(n)
                            } catch (t) {
                                e.console && e.console.warn && console.warn("ZUI: Cannot recogernize remote content.", {
                                    error: t,
                                    data: i
                                }), o.html(i)
                            }
                            o.callComEvent(s, "loaded", {modalType: "ajax"}), p()
                        }, error: g
                    }, r.ajaxOptions))
                }
                o.modal({
                    show: "show",
                    backdrop: r.backdrop,
                    moveable: r.moveable,
                    rememberPos: r.rememberPos,
                    keyboard: r.keyboard,
                    scrollInside: r.scrollInside
                })
            }, r.prototype.close = function (i, n) {
                var r = this;
                (i || n) && r.$modal.on("hidden.zui.modal", function () {
                    t.isFunction(i) && i(), "string" === c()(n) && n.length && !r.$modal.data("cancel-reload") && ("this" === n ? e.location.reload() : e.location = n)
                }), r.$modal.modal("hide")
            }, r.prototype.toggle = function (t) {
                this.isShown ? this.close() : this.show(t)
            }, r.prototype.ajustPosition = function (e) {
                e = e === i ? this.options.position : e, t.isFunction(e) && (e = e(this)), this.$modal.modal("ajustPosition", e)
            }, t.zui({ModalTrigger: r, modalTrigger: new r}), t.fn.modalTrigger = function (e, i) {
                return t(this).each(function () {
                    var s = t(this), o = s.data(n), a = t.extend({
                        title: s.attr("title") || s.text(),
                        url: s.attr("href"),
                        type: s.hasClass("iframe") ? "iframe" : ""
                    }, s.data(), t.isPlainObject(e) && e);
                    o || s.data(n, o = new r(a, s)), "string" == c()(e) ? o[e](i) : a.show && o.show(i), s.on((a.trigger || "click") + ".toggle." + n, function (e) {
                        a = t.extend(a, {url: s.attr("href") || s.attr("data-url") || s.data("url") || a.url}), o.toggle(a), s.is("a") && e.preventDefault()
                    })
                })
            };
            var s = t.fn.modal;
            t.fn.modal = function (e, i) {
                return t(this).each(function () {
                    var n = t(this);
                    n.hasClass("modal") ? s.call(n, e, i) : n.modalTrigger(e, i)
                })
            }, t.fn.modal.bs = s;
            var o = function (e) {
                return (e = t(e || ".modal.modal-trigger")) && e instanceof t ? e : null
            };
            t.zui({
                closeModal: function (i, r, s) {
                    var a = i;
                    if (t.isFunction(i)) {
                        var l = s;
                        s = r, r = i, i = l
                    }
                    (i = o(i)) && i.length ? i.each(function () {
                        t(this).data(n).close(r, s)
                    }) : t("body").hasClass("modal-open") || t(".modal.in").length || t("body").hasClass("body-modal") && e.parent.$.zui.closeModal(a, r, s)
                }, ajustModalPosition: function (t, e) {
                    (e = o(e)) && e.length && e.modal("ajustPosition", t)
                }
            }), t(document).on("click." + n + ".data-api", '[data-toggle="modal"]', function (e) {
                var i = t(this), r = i.attr("href"), s = null;
                try {
                    s = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""))
                } catch (t) {
                }
                s && s.length || (i.data(n) ? i.trigger(".toggle." + n) : i.modalTrigger({show: !0})), i.is("a") && e.preventDefault()
            }).on("click." + n + ".data-api", '[data-dismiss="modal"]', function () {
                t.zui.closeModal()
            })
        }(e, window, void 0), function (t) {
            var e = function (t, e) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
            };
            e.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1
            }, e.prototype.init = function (e, i, n) {
                this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n);
                for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
                    var o = r[s];
                    if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != o) {
                        var a = "hover" == o ? "mouseenter" : "focus", l = "hover" == o ? "mouseleave" : "blur";
                        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = t.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }, e.prototype.getDefaults = function () {
                return e.DEFAULTS
            }, e.prototype.getOptions = function (e) {
                return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), e
            }, e.prototype.getDelegateOptions = function () {
                var e = {}, i = this.getDefaults();
                return this._options && t.each(this._options, function (t, n) {
                    i[t] != n && (e[t] = n)
                }), e
            }, e.prototype.enter = function (e) {
                var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type);
                if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
                i.timeout = setTimeout(function () {
                    "in" == i.hoverState && i.show()
                }, i.options.delay.show)
            }, e.prototype.leave = function (e) {
                var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type);
                if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
                i.timeout = setTimeout(function () {
                    "out" == i.hoverState && i.hide()
                }, i.options.delay.hide)
            }, e.prototype.show = function (e) {
                var i = t.Event("show.zui." + this.type);
                if ((e || this.hasContent()) && this.enabled) {
                    var n = this;
                    if (n.$element.trigger(i), i.isDefaultPrevented()) return;
                    var r = n.tip();
                    n.setContent(e), n.options.animation && r.addClass("fade");
                    var s = "function" == typeof n.options.placement ? n.options.placement.call(n, r[0], n.$element[0]) : n.options.placement,
                        o = /\s?auto?\s?/i, a = o.test(s);
                    a && (s = s.replace(o, "") || "top"), r.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(s), n.options.container ? r.appendTo(n.options.container) : r.insertAfter(n.$element);
                    var l = n.getPosition(), c = r[0].offsetWidth, u = r[0].offsetHeight;
                    if (a) {
                        var h = n.$element.parent(), d = s,
                            f = document.documentElement.scrollTop || document.body.scrollTop,
                            p = "body" == n.options.container ? window.innerWidth : h.outerWidth(),
                            v = "body" == n.options.container ? window.innerHeight : h.outerHeight(),
                            g = "body" == n.options.container ? 0 : h.offset().left;
                        s = "bottom" == s && l.top + l.height + u - f > v ? "top" : "top" == s && l.top - f - u < 0 ? "bottom" : "right" == s && l.right + c > p ? "left" : "left" == s && l.left - c < g ? "right" : s, r.removeClass(d).addClass(s)
                    }
                    var m = n.getCalculatedOffset(s, l, c, u);
                    n.applyPlacement(m, s);
                    var y = function () {
                        var t = n.hoverState;
                        n.$element.trigger("shown.zui." + n.type), n.hoverState = null, "out" == t && n.leave(n)
                    };
                    t.support.transition && n.$tip.hasClass("fade") ? r.one("bsTransitionEnd", y).emulateTransitionEnd(150) : y()
                }
            }, e.prototype.applyPlacement = function (t, e) {
                var i, n = this.tip(), r = n[0].offsetWidth, s = n[0].offsetHeight,
                    o = parseInt(n.css("margin-top"), 10), a = parseInt(n.css("margin-left"), 10);
                isNaN(o) && (o = 0), isNaN(a) && (a = 0), t.top = t.top + o, t.left = t.left + a, n.offset(t).addClass("in");
                var l = n[0].offsetWidth, c = n[0].offsetHeight;
                if ("top" == e && c != s && (i = !0, t.top = t.top + s - c), /bottom|top/.test(e)) {
                    var u = 0;
                    t.left < 0 && (u = -2 * t.left, t.left = 0, n.offset(t), l = n[0].offsetWidth, c = n[0].offsetHeight), this.replaceArrow(u - r + l, l, "left")
                } else this.replaceArrow(c - s, c, "top");
                i && n.offset(t)
            }, e.prototype.replaceArrow = function (t, e, i) {
                this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
            }, e.prototype.setContent = function (t) {
                var e = this.tip(), i = t || this.getTitle();
                this.options.tipId && e.attr("id", this.options.tipId), this.options.tipClass && e.addClass(this.options.tipClass), e.find(".tooltip-inner")[this.options.html ? "html" : "text"](i), e.removeClass("fade in top bottom left right")
            }, e.prototype.hide = function () {
                var e = this, i = this.tip(), n = t.Event("hide.zui." + this.type);

                function r() {
                    "in" != e.hoverState && i.detach()
                }

                if (this.$element.trigger(n), !n.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, r).emulateTransitionEnd(150) : r(), this.$element.trigger("hidden.zui." + this.type), this
            }, e.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            }, e.prototype.hasContent = function () {
                return this.getTitle()
            }, e.prototype.getPosition = function () {
                var e = this.$element[0];
                return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }, this.$element.offset())
            }, e.prototype.getCalculatedOffset = function (t, e, i, n) {
                return "bottom" == t ? {
                    top: e.top + e.height,
                    left: e.left + e.width / 2 - i / 2
                } : "top" == t ? {
                    top: e.top - n,
                    left: e.left + e.width / 2 - i / 2
                } : "left" == t ? {
                    top: e.top + e.height / 2 - n / 2,
                    left: e.left - i
                } : {top: e.top + e.height / 2 - n / 2, left: e.left + e.width}
            }, e.prototype.getTitle = function () {
                var t = this.$element, e = this.options;
                return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
            }, e.prototype.tip = function () {
                return this.$tip = this.$tip || t(this.options.template)
            }, e.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }, e.prototype.validate = function () {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            }, e.prototype.enable = function () {
                this.enabled = !0
            }, e.prototype.disable = function () {
                this.enabled = !1
            }, e.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled
            }, e.prototype.toggle = function (e) {
                var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type) : this;
                i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
            }, e.prototype.destroy = function () {
                this.hide().$element.off("." + this.type).removeData("zui." + this.type)
            };
            var i = t.fn.tooltip;
            t.fn.tooltip = function (i, n) {
                return this.each(function () {
                    var r = t(this), s = r.data("zui.tooltip"), o = "object" == c()(i) && i;
                    s || r.data("zui.tooltip", s = new e(this, o)), "string" == typeof i && s[i](n)
                })
            }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
                return t.fn.tooltip = i, this
            }
        }(e), function (t) {
            var e = function (t, e) {
                this.init("popover", t, e)
            };
            if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
            e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function () {
                return e.DEFAULTS
            }, e.prototype.setContent = function () {
                var t = this.tip(), e = this.getTarget();
                if (e) return e.find(".arrow").length < 1 && t.addClass("no-arrow"), void t.html(e.html());
                var i = this.getTitle(), n = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](i), t.find(".popover-content")[this.options.html ? "html" : "text"](n), t.removeClass("fade top bottom left right in"), this.options.tipId && t.attr("id", this.options.tipId), this.options.tipClass && t.addClass(this.options.tipClass), t.find(".popover-title").html() || t.find(".popover-title").hide()
            }, e.prototype.hasContent = function () {
                return this.getTarget() || this.getTitle() || this.getContent()
            }, e.prototype.getContent = function () {
                var t = this.$element, e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
            }, e.prototype.getTarget = function () {
                var e = this.$element, i = this.options,
                    n = e.attr("data-target") || ("function" == typeof i.target ? i.target.call(e[0]) : i.target);
                return !!n && ("$next" == n ? e.next(".popover") : t(n))
            }, e.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            }, e.prototype.tip = function () {
                return this.$tip || (this.$tip = t(this.options.template)), this.$tip
            };
            var i = t.fn.popover;
            t.fn.popover = function (i) {
                return this.each(function () {
                    var n = t(this), r = n.data("zui.popover"), s = "object" == c()(i) && i;
                    r || n.data("zui.popover", r = new e(this, s)), "string" == typeof i && r[i]()
                })
            }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
                return t.fn.popover = i, this
            }
        }(e), function (t) {
            var e = "zui.dropdown", i = ".dropdown-backdrop", n = "[data-toggle=dropdown]", r = function (i) {
                t(i).on("click." + e, this.toggle)
            };

            function s() {
                t(i).remove(), t(n).each(function (i) {
                    var n = o(t(this));
                    n.hasClass("open") && (n.trigger(i = t.Event("hide." + e)), i.isDefaultPrevented() || n.removeClass("open").trigger("hidden." + e))
                })
            }

            function o(e) {
                var i, n = e.attr("data-target");
                n || (n = (n = e.attr("href")) && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                try {
                    i = n && t(n)
                } catch (t) {
                }
                return i && i.length ? i : e.parent()
            }

            r.prototype.toggle = function (r) {
                var a = t(this), l = r.type;
                if (!a.is(".disabled, :disabled")) {
                    var c = o(a), u = c.hasClass("open");
                    if ("click" === l ? (u = c.hasClass("open"), s()) : (u = "mouseenter" !== l, t(i).remove(), t(n).each(function (i) {
                        var n = o(t(this));
                        n.hasClass("mouseopen") && (n.trigger(i = t.Event("hide." + e)), i.isDefaultPrevented() || n.removeClass("mouseopen").trigger("hidden." + e))
                    })), !u) {
                        if ("ontouchstart" in document.documentElement && !c.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", s), c.trigger(r = t.Event("show." + e)), r.isDefaultPrevented()) return;
                        "click" === l ? c.toggleClass("open").trigger("shown." + e) : c.toggleClass("mouseopen").trigger("shown." + e), a.focus()
                    }
                    return !1
                }
            }, r.prototype.keydown = function (e) {
                if (/(38|40|27)/.test(e.keyCode)) {
                    var i = t(this);
                    if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                        var r = o(i), s = r.hasClass("open");
                        if (!s || s && 27 == e.keyCode) return 27 == e.which && r.find(n).focus(), i.click();
                        var a = t("[role=menu] li:not(.divider):visible a", r);
                        if (a.length) {
                            var l = a.index(a.filter(":focus"));
                            38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).focus()
                        }
                    }
                }
            };
            var a = t.fn.dropdown;
            t.fn.dropdown = function (e) {
                return this.each(function () {
                    var i = t(this), n = i.data("dropdown");
                    n || i.data("dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
                })
            }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
                return t.fn.dropdown = a, this
            };
            var l = e + ".data-api";
            t(document).on("click." + l, s).on("click." + l, ".dropdown form", function (t) {
                t.stopPropagation()
            }).on("click." + l, n, r.prototype.toggle).on("keydown." + l, n + ", [role=menu]", r.prototype.keydown).on("mouseenter", ".dropdown", r.prototype.toggle).on("mouseleave", ".dropdown", r.prototype.toggle)
        }(e), function (t, e) {
            var i = "zui.contextmenu", n = {duration: 200}, r = !1, s = {}, o = "zui-contextmenu-" + t.zui.uuid(),
                a = 0, l = 0, u = function (e, i) {
                    if ("string" == typeof e && (e = "seperator" === e || "divider" === e || "-" === e || "|" === e ? {type: "seperator"} : {
                        label: e,
                        id: i
                    }), "seperator" === e.type || "divider" === e.type) return t('<li class="divider"></li>');
                    var n = t("<a/>").attr({href: e.url || "###", class: e.className, style: e.style}).data("item", e);
                    return e.html ? n.html(!0 === e.html ? e.label || e.text : e.html) : n.text(e.label || e.text), e.onClick && n.on("click", e.onClick), t("<li />").toggleClass("disabled", !0 === e.disabled).append(n)
                }, h = null, d = function (e, i) {
                    "function" == typeof e && (i = e, e = null), h && (clearTimeout(h), h = null);
                    var n = t("#" + o);
                    if (n.length) {
                        var r = n.data("options");
                        if (!e || r.id === e) {
                            var a = function () {
                                n.hide(), r.onHidden && r.onHidden(), i && i()
                            };
                            r.onHide && r.onHide();
                            var l = r.animation;
                            n.removeClass("in"), l ? h = setTimeout(a, r.duration) : a()
                        }
                    }
                    return s
                };
            t(document).on("click", function (e) {
                r || t(e.target).closest(".contextmenu").length || d()
            }), t.extend(s, {
                NAME: i, DEFAULTS: n, show: function (f, p, v) {
                    t.isPlainObject(f) && (v = p, f = (p = f).items), r = !0;
                    var g = (p = t.extend({}, n, p)).x, m = p.y;
                    g === e && (g = (p.event || p).clientX), g === e && (g = a), m === e && (m = (p.event || p).clientY), m === e && (m = l);
                    var y = t("#" + o);
                    y.length || (y = t('<div style="display: none; position: fixed; z-index: 2000;" class="contextmenu" id="' + o + '"><ul class="dropdown-menu contextmenu-menu"></ul></div>').appendTo("body"));
                    var b = y.find(".contextmenu-menu").off("click." + i).on("click." + i, "a", function (e) {
                        var i = t(this);
                        !1 !== (p.onClickItem && p.onClickItem(i.data("item"), i, e)) && d()
                    }).empty();
                    y.hide().attr("class", "contextmenu");
                    var w = p.itemCreator || u, x = c()(f);
                    "string" === x ? f = f.split(",") : "function" === x && (f = f(p)), t.each(f, function (t, e) {
                        b.append(w(e, t, p))
                    });
                    var T = p.animation, C = p.duration;
                    !0 === T && (p.animation = T = "fade"), h && (clearTimeout(h), h = null);
                    var E = function () {
                        y.addClass("in"), p.onShown && p.onShown(), v && v()
                    };
                    p.onShow && p.onShow(), y.data("options", {
                        animation: T,
                        onHide: p.onHide,
                        onHidden: p.onHidden,
                        id: p.id,
                        duration: C
                    });
                    var S = t(window);
                    return g = Math.max(0, Math.min(g, S.width() - b.outerWidth())), m = Math.max(0, Math.min(m, S.height() - b.outerHeight())), y.css({
                        left: g,
                        top: m
                    }), T ? (y.addClass("open").addClass(T).show(), h = setTimeout(function () {
                        E(), r = !1
                    }, p.duration)) : (y.addClass("open").show(), E(), h = setTimeout(function () {
                        r = !1
                    }, 200)), s
                }, hide: d, listenMouse: function () {
                    return t(document).off("mousemove." + i).on("mousemove." + i, function (t) {
                        a = t.clientX, l = t.clientY
                    }), s
                }
            }), t.zui({ContextMenu: s});
            var f = function (e, n) {
                var r = this;
                r.name = i, r.$ = t(e);
                var o = (n = r.options = t.extend({trigger: "contextmenu"}, s.DEFAULTS, this.$.data(), n)).trigger;
                r.id = t.zui.uuid();
                var a = function (t) {
                    if ("mousedown" !== t.type || 2 === t.button) {
                        var e = {x: t.clientX, y: t.clientY, event: t};
                        return n.itemsCreator && (e.items = n.itemsCreator.call(this, t)), r.show(e), t.preventDefault(), t.returnValue = !1, !1
                    }
                }, l = o + "." + i;
                n.selector ? r.$.on(l, n.selector, a) : r.$.on(l, a)
            };
            f.prototype.destory = function () {
                that.$.off("." + i)
            }, f.prototype.hide = function (t) {
                s.hide(this.id, t)
            }, f.prototype.show = function (e, i) {
                e = t.extend({}, this.options, e), s.show(e, i)
            }, t.fn.contextmenu = function (e) {
                return this.each(function () {
                    var n = t(this), r = n.data(i), s = "object" == c()(e) && e;
                    r || n.data(i, r = new f(this, s)), "string" == typeof e && r[e]()
                })
            }, t.fn.contextmenu.Constructor = f
        }(t, void 0), function (t) {
            var e = function (e, i) {
                this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
            };
            e.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0, touchable: !0}, e.prototype.touchable = function () {
                if (this.options.touchable) {
                    var e, i;
                    this.$element.on("touchstart touchmove touchend", function (r) {
                        (r = r || window.event).originalEvent && (r = r.originalEvent);
                        t(this);
                        switch (r.type) {
                            case"touchstart":
                                e = r.touches[0].pageX, i = r.touches[0].pageY;
                                break;
                            case"touchend":
                                var s = r.changedTouches[0].pageX - e, o = r.changedTouches[0].pageY - i;
                                if (Math.abs(s) > Math.abs(o)) (l = s) > 10 ? n.prev() : l < -10 && n.next(), Math.abs(s) > 10 && r.preventDefault(); else {
                                    var a = t(window);
                                    t("body,html").animate({scrollTop: a.scrollTop() - o}, 400)
                                }
                        }
                        var l
                    });
                    var n = this
                }
            }, e.prototype.cycle = function (e) {
                return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
            }, e.prototype.getActiveIndex = function () {
                return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
            }, e.prototype.to = function (e) {
                var i = this, n = this.getActiveIndex();
                if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid", function () {
                    i.to(e)
                }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e]))
            }, e.prototype.pause = function (e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
            }, e.prototype.next = function () {
                if (!this.sliding) return this.slide("next")
            }, e.prototype.prev = function () {
                if (!this.sliding) return this.slide("prev")
            }, e.prototype.slide = function (e, i) {
                var n = this.$element.find(".item.active"), r = i || n[e](), s = this.interval,
                    o = "next" == e ? "left" : "right", a = "next" == e ? "first" : "last", l = this;
                if (!r.length) {
                    if (!this.options.wrap) return;
                    r = this.$element.find(".item")[a]()
                }
                this.sliding = !0, s && this.pause();
                var c = t.Event("slide.zui.carousel", {relatedTarget: r[0], direction: o});
                if (!r.hasClass("active")) {
                    if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                        var e = t(l.$indicators.children()[l.getActiveIndex()]);
                        e && e.addClass("active")
                    })), t.support.transition && this.$element.hasClass("slide")) {
                        if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                        r.addClass(e), r[0].offsetWidth, n.addClass(o), r.addClass(o), n.one(t.support.transition.end, function () {
                            r.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function () {
                                l.$element.trigger("slid")
                            }, 0)
                        }).emulateTransitionEnd(600)
                    } else {
                        if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                        n.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return s && this.cycle(), this
                }
            };
            var i = t.fn.carousel;
            t.fn.carousel = function (i) {
                return this.each(function () {
                    var n = t(this), r = n.data("zui.carousel"),
                        s = t.extend({}, e.DEFAULTS, n.data(), "object" == c()(i) && i),
                        o = "string" == typeof i ? i : s.slide;
                    r || n.data("zui.carousel", r = new e(this, s)), "number" == typeof i ? r.to(i) : o ? r[o]() : s.interval && r.pause().cycle(), s.touchable && r.touchable()
                })
            }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
                return t.fn.carousel = i, this
            }, t(document).on("click.zui.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
                var i, n = t(this),
                    r = t(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
                    s = t.extend({}, r.data(), n.data()), o = n.attr("data-slide-to");
                o && (s.interval = !1), r.carousel(s), (o = n.attr("data-slide-to")) && r.data("zui.carousel").to(o), e.preventDefault()
            }), t(window).on("load", function () {
                t('[data-ride="carousel"]').each(function () {
                    var e = t(this);
                    e.carousel(e.data())
                })
            })
        }(e), t.zui.imgReady = (r = [], s = null, o = function () {
            for (var t = 0; t < r.length; t++) r[t].end ? r.splice(t--, 1) : r[t]();
            !r.length && a()
        }, a = function () {
            clearInterval(s), s = null
        }, function (t, e, i, n) {
            var a, l, c, u, h, d = new Image;
            if (d.src = t, d.complete) return e.call(d), void (i && i.call(d));
            l = d.width, c = d.height, d.onerror = function () {
                n && n.call(d), a.end = !0, d = d.onload = d.onerror = null
            }, (a = function () {
                u = d.width, h = d.height, (u !== l || h !== c || u * h > 1024) && (e.call(d), a.end = !0)
            })(), d.onload = function () {
                !a.end && a(), i && i.call(d), d = d.onload = d.onerror = null
            }, a.end || (r.push(a), null === s && (s = setInterval(o, 40)))
        }), function (t, e, i) {
            if (!t.fn.modalTrigger) throw new Error("modal & modalTrigger requires for lightbox");
            if (!t.zui.imgReady) throw new Error("imgReady requires for lightbox");
            var n = function (e, i) {
                this.$ = t(e), this.options = this.getOptions(i), this.init()
            };
            n.DEFAULTS = {modalTeamplate: '<div class="icon-spinner icon-spin loader"></div><div class="modal-dialog"><button class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button><button class="controller prev"><i class="icon icon-chevron-left"></i></button><button class="controller next"><i class="icon icon-chevron-right"></i></button><img class="lightbox-img" src="{image}" alt="" data-dismiss="modal" /><div class="caption"><div class="content">{caption}<div></div></div>'}, n.prototype.getOptions = function (e) {
                return (e = t.extend({}, n.DEFAULTS, this.$.data(), e)).image || (e.image = this.$.attr("src") || this.$.attr("href") || this.$.find("img").attr("src"), this.$.data("image", e.image)), e
            }, n.prototype.init = function () {
                this.bindEvents()
            }, n.prototype.initGroups = function () {
                var e = this.$.data("groups");
                e || (e = t('[data-toggle="lightbox"][data-group="' + this.options.group + '"], [data-lightbox-group="' + this.options.group + '"]'), this.$.data("groups", e), e.each(function (e) {
                    t(this).attr("data-group-index", e)
                })), this.groups = e, this.groupIndex = parseInt(this.$.data("group-index"))
            }, n.prototype.setImage = function (t, e) {
                void 0 !== t && (this.options.image = t), void 0 !== e && (this.options.caption = e)
            }, n.prototype.show = function (t, e) {
                this.setImage(t, e), this.$.triggerHandler("click")
            }, n.prototype.bindEvents = function () {
                var n = this.$, r = this, s = this.options;
                if (!s.image) return !1;
                n.modalTrigger({
                    type: "custom", name: "lightboxModal", position: "center", custom: function (n) {
                        r.initGroups();
                        var o = n.modal, a = r.groups, l = r.groupIndex;
                        o.addClass("modal-lightbox").html(s.modalTeamplate.format(s)).toggleClass("lightbox-with-caption", "string" == typeof s.caption).removeClass("lightbox-full").data("group-index", l);
                        var c = o.find(".modal-dialog"), u = t(e).width();
                        t.zui.imgReady(s.image, function () {
                            c.css({width: i.min(u, this.width)}), u < this.width + 30 && o.addClass("lightbox-full"), n.ready(200)
                        }), o.find(".prev").toggleClass("show", a.filter('[data-group-index="' + (l - 1) + '"]').length > 0), o.find(".next").toggleClass("show", a.filter('[data-group-index="' + (l + 1) + '"]').length > 0), o.find(".controller").click(function () {
                            var r = t(this), s = o.data("group-index") + (r.hasClass("prev") ? -1 : 1),
                                l = a.filter('[data-group-index="' + s + '"]');
                            if (l.length) {
                                var h = l.data("image"), d = l.data("caption");
                                o.addClass("modal-loading").data("group-index", s).toggleClass("lightbox-with-caption", "string" == typeof d).removeClass("lightbox-full"), o.find(".lightbox-img").attr("src", h), o.find(".caption > .content").text(d), u = t(e).width(), t.zui.imgReady(h, function () {
                                    c.css({width: i.min(u, this.width)}), u < this.width + 30 && o.addClass("lightbox-full"), n.ready()
                                })
                            }
                            return o.find(".prev").toggleClass("show", a.filter('[data-group-index="' + (s - 1) + '"]').length > 0), o.find(".next").toggleClass("show", a.filter('[data-group-index="' + (s + 1) + '"]').length > 0), !1
                        })
                    }
                })
            }, t.fn.lightbox = function (e) {
                var i = "group" + (new Date).getTime();
                return this.each(function () {
                    var r = t(this), s = "object" == c()(e) && e;
                    "object" == c()(s) && s.group ? r.attr("data-lightbox-group", s.group) : r.data("group") ? r.attr("data-lightbox-group", r.data("group")) : r.attr("data-lightbox-group", i), r.data("group", r.data("lightbox-group"));
                    var o = r.data("zui.lightbox");
                    o || r.data("zui.lightbox", o = new n(this, s)), "string" == typeof e && o[e]()
                })
            }, t.fn.lightbox.Constructor = n, t(function () {
                t('[data-toggle="lightbox"]').lightbox()
            })
        }(t, window, Math), function (t, e, i) {
            var n = 0, r = {
                type: "default",
                placement: "top",
                time: 4e3,
                parent: "body",
                icon: null,
                close: !0,
                fade: !0,
                scale: !0
            }, s = {}, o = function (e, o) {
                t.isPlainObject(e) && (e = (o = e).message);
                var a = this;
                o = a.options = t.extend({}, r, o), a.id = o.id || n++;
                var l = s[a.id];
                l && l.destroy(), s[a.id] = a, a.message = (o.icon ? '<i class="icon-' + o.icon + ' icon"></i> ' : "") + e, a.$ = t('<div class="messager messager-{type} {placement}" style="display: none"><div class="messager-content"></div><div class="messager-actions"></div></div>'.format(o)).toggleClass("fade", o.fade).toggleClass("scale", o.scale).attr("id", "messager-" + a.id), o.cssClass && a.$.addClass(o.cssClass);
                var c = !1, u = a.$.find(".messager-actions"), h = function (e) {
                    var n = t('<button type="button" class="action action-' + e.name + '"/>');
                    "close" === e.name && n.addClass("close"), e.html !== i && n.html(e.html), e.icon !== i && n.append('<i class="action-icon icon-' + e.icon + '"/>'), e.text !== i && n.append('<span class="action-text">' + e.text + "</span>"), e.tooltip !== i && n.attr("title", e.tooltip).tooltip(), n.data("action", e), u.append(n)
                };
                o.actions && t.each(o.actions, function (t, e) {
                    e.name === i && (e.name = t), "close" == e.name && (c = !0), h(e)
                }), !c && o.close && h({name: "close", html: "&times;"}), a.$.on("click", ".action", function (e) {
                    var i = t(this).data("action");
                    o.onAction && !1 === o.onAction.call(this, i.name, i, a) || t.isFunction(i.action) && !1 === i.action.call(this, a) || (a.hide(), e.stopPropagation())
                }), a.$.on("click", function (t) {
                    o.onAction && (!0 === o.onAction.call(this, "content", null, a) && a.hide())
                });
                var d = a.$.find(".messager-content").html(a.message);
                o.contentClass && d.addClass(o.contentClass), a.$.data("zui.messager", a), o.show && a.message !== i && a.show()
            };
            o.prototype.update = function (e, i) {
                var n = this.options;
                this.$.removeClass("messager-" + n.type), i && (n = t.extend(n, i)), this.$.addClass("messager-" + n.type), e && (this.message = (n.icon ? '<i class="icon-' + n.icon + ' icon"></i> ' : "") + e, this.$.find(".messager-content").html(this.message))
            }, o.prototype.show = function (n, r) {
                var s = this, o = this.options;
                if (t.isFunction(n)) {
                    var a = r;
                    r = n, a !== i && (n = a)
                }
                if (!s.isShow) {
                    s.hiding && (clearTimeout(s.hiding), s.hiding = null), s.update(n);
                    var l = o.placement, c = t(o.parent), u = c.children(".messagers-holder." + l);
                    if (u.length || (u = t("<div/>").attr("class", "messagers-holder " + l).appendTo(c)), u.append(s.$), "center" === l) {
                        var h = t(e).height() - u.height();
                        u.css("top", Math.max(-h, h / 2))
                    }
                    return s.$.show().addClass("in"), o.time && (s.hiding = setTimeout(function () {
                        s.hide()
                    }, o.time)), s.isShow = !0, r && r(), s
                }
                s.hide(function () {
                    s.show(n, r)
                })
            }, o.prototype.hide = function (t, e) {
                !0 === t && (e = !0, t = null);
                var i = this;
                if (i.$.hasClass("in")) {
                    i.$.removeClass("in");
                    var n = function () {
                        var e = i.$.parent();
                        i.$.detach(), e.children().length || e.remove(), t && t(!0)
                    };
                    e ? n() : setTimeout(n, 200)
                } else t && t(!1);
                i.isShow = !1
            }, o.prototype.destroy = function () {
                var t = this;
                t.hide(function () {
                    t.$.remove(), t.$ = null
                }, !0), delete s[t.id]
            }, o.all = s, o.DEFAULTS = r;
            var a = function () {
                t(".messager").each(function () {
                    var e = t(this).data("zui.messager");
                    e && e.hide && e.hide(!0)
                })
            }, l = function (e, n) {
                "string" == typeof n && (n = {type: n}), (n = t.extend({}, n)).id === i && a();
                var r = s[n.id] || new o(e, n);
                return r.show(), r
            }, c = {show: l, hide: a};
            t.each({
                primary: 0,
                success: "ok-sign",
                info: "info-sign",
                warning: "warning-sign",
                danger: "exclamation-sign",
                important: 0,
                special: 0
            }, function (e, i) {
                c[e] = function (n, r) {
                    return l(n, t.extend({type: e, icon: i || null}, function (t) {
                        return "string" == typeof t ? {placement: t} : t
                    }(r)))
                }
            }), t.zui({Messager: o, showMessager: l, messager: c})
        }(t, window, void 0), function (t, e, i, n) {
            var r = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/, s = 255, o = 360, a = "string", l = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            }, u = function (t) {
                return t === n
            }, h = function (t) {
                return !u(t)
            }, d = function (t) {
                return parseInt(t)
            }, f = function (t) {
                return d(m(y(t), s))
            }, p = function (t, e, i, n) {
                if (this.r = this.g = this.b = 0, this.a = 1, h(n) && (this.a = m(y(n), 1)), h(t) && h(e) && h(i)) this.r = f(t), this.g = f(e), this.b = f(i); else if (h(t)) {
                    var r = c()(t);
                    if (r == a) if ("transparent" === (t = t.toLowerCase())) this.a = 0; else if (l[t]) this.rgb(v(l[t])); else if (0 === t.indexOf("rgb")) {
                        var s = t.substring(t.indexOf("(") + 1, t.lastIndexOf(")")).split(",", 4);
                        this.rgb({r: s[0], g: s[1], b: s[2], a: s[3]})
                    } else this.rgb(v(t)); else if ("number" == r && u(e)) this.r = this.g = this.b = f(t); else if ("object" == r && h(t.r)) this.r = f(t.r), h(t.g) && (this.g = f(t.g)), h(t.b) && (this.b = f(t.b)), h(t.a) && (this.a = m(y(t.a), 1)); else if ("object" == r && h(t.h)) {
                        var d = {h: m(y(t.h), o), s: 1, l: 1, a: 1};
                        h(t.s) && (d.s = m(y(t.s), 1)), h(t.l) && (d.l = m(y(t.l), 1)), h(t.a) && (d.a = m(y(t.a), 1)), this.rgb(g(d))
                    }
                }
            };

            function v(t) {
                if ((t = t.toLowerCase()) && r.test(t)) {
                    var e;
                    if (4 === t.length) {
                        var i = "#";
                        for (e = 1; e < 4; e += 1) i += t.slice(e, e + 1).concat(t.slice(e, e + 1));
                        t = i
                    }
                    var n = [];
                    for (e = 1; e < 7; e += 2) n.push(d("0x" + t.slice(e, e + 2)));
                    return {r: n[0], g: n[1], b: n[2], a: 1}
                }
                throw new Error("Wrong hex string! (hex: " + t + ")")
            }

            function g(t) {
                var e = t.h, i = t.s, n = t.l, r = t.a;
                e = y(e) % o / o, i = m(y(i)), n = m(y(n)), r = m(y(r));
                var a = n <= .5 ? n * (i + 1) : n + i - n * i, l = 2 * n - a;
                return {r: c(e + 1 / 3) * s, g: c(e) * s, b: c(e - 1 / 3) * s, a: r};

                function c(t) {
                    return 6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? l + (a - l) * t * 6 : 2 * t < 1 ? a : 3 * t < 2 ? l + (a - l) * (2 / 3 - t) * 6 : l
                }
            }

            function m(t, i) {
                return n = t, r = i, u(o) && (o = 0), u(r) && (r = s), e.min(e.max(n, o), r);
                var n, r, o
            }

            function y(t) {
                return "number" == typeof t ? t : parseFloat(t)
            }

            p.prototype.rgb = function (t) {
                if (h(t)) {
                    if ("object" == c()(t)) h(t.r) && (this.r = f(t.r)), h(t.g) && (this.g = f(t.g)), h(t.b) && (this.b = f(t.b)), h(t.a) && (this.a = m(y(t.a), 1)); else {
                        var e = d(y(t));
                        this.r = e, this.g = e, this.b = e
                    }
                    return this
                }
                return {r: this.r, g: this.g, b: this.b, a: this.a}
            }, p.prototype.hue = function (t) {
                var e = this.toHsl();
                return u(t) ? e.h : (e.h = m(y(t), o), this.rgb(g(e)), this)
            }, p.prototype.darken = function (t) {
                var e = this.toHsl();
                return e.l -= t / 100, e.l = m(e.l, 1), this.rgb(g(e)), this
            }, p.prototype.clone = function () {
                return new p(this.r, this.g, this.b, this.a)
            }, p.prototype.lighten = function (t) {
                return this.darken(-t)
            }, p.prototype.fade = function (t) {
                return this.a = m(t / 100, 1), this
            }, p.prototype.spin = function (t) {
                var e = this.toHsl(), i = (e.h + t) % o;
                return e.h = i < 0 ? o + i : i, this.rgb(g(e))
            }, p.prototype.toHsl = function () {
                var t, i, n = this.r / s, r = this.g / s, a = this.b / s, l = this.a, c = e.max(n, r, a),
                    u = e.min(n, r, a), h = (c + u) / 2, d = c - u;
                if (c === u) t = i = 0; else {
                    switch (i = h > .5 ? d / (2 - c - u) : d / (c + u), c) {
                        case n:
                            t = (r - a) / d + (r < a ? 6 : 0);
                            break;
                        case r:
                            t = (a - n) / d + 2;
                            break;
                        case a:
                            t = (n - r) / d + 4
                    }
                    t /= 6
                }
                return {h: t * o, s: i, l: h, a: l}
            }, p.prototype.luma = function () {
                var t = this.r / s, i = this.g / s, n = this.b / s;
                return .2126 * (t = t <= .03928 ? t / 12.92 : e.pow((t + .055) / 1.055, 2.4)) + .7152 * (i = i <= .03928 ? i / 12.92 : e.pow((i + .055) / 1.055, 2.4)) + .0722 * (n = n <= .03928 ? n / 12.92 : e.pow((n + .055) / 1.055, 2.4))
            }, p.prototype.saturate = function (t) {
                var e = this.toHsl();
                return e.s += t / 100, e.s = m(e.s), this.rgb(g(e))
            }, p.prototype.desaturate = function (t) {
                return this.saturate(-t)
            }, p.prototype.contrast = function (t, e, i) {
                if (e = u(e) ? new p(s, s, s, 1) : new p(e), (t = u(t) ? new p(0, 0, 0, 1) : new p(t)).luma() > e.luma()) {
                    var n = e;
                    e = t, t = n
                }
                return this.a < .5 ? t : (i = u(i) ? .43 : y(i), this.luma() < i ? e : t)
            }, p.prototype.hexStr = function () {
                var t = this.r.toString(16), e = this.g.toString(16), i = this.b.toString(16);
                return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == i.length && (i = "0" + i), "#" + t + e + i
            }, p.prototype.toCssStr = function () {
                return this.a > 0 ? this.a < 1 ? "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")" : this.hexStr() : "transparent"
            }, p.isColor = function (e) {
                return c()(e) === a && ("transparent" === e.toLowerCase() || l[e.toLowerCase()] || r.test(t.trim(e.toLowerCase())))
            }, p.names = l, p.get = function (t) {
                return new p(t)
            }, t.zui({Color: p})
        }(t, Math, window, void 0), function (t) {
            var e = "zui.tree", i = 0, n = function (i, n) {
                this.name = e, this.$ = t(i), this.getOptions(n), this._init()
            }, r = {
                sort: {template: '<a class="sort-handler" href="javascript:;"><i class="icon icon-move"></i></a>'},
                add: {template: '<a href="javascript:;"><i class="icon icon-plus"></i></a>'},
                edit: {template: '<a href="javascript:;"><i class="icon icon-pencil"></i></a>'},
                delete: {template: '<a href="javascript:;"><i class="icon icon-trash"></i></a>'}
            };

            function s(e, i) {
                return !1 === e ? e : e ? (!0 === e ? e = {
                    add: !0,
                    delete: !0,
                    edit: !0,
                    sort: !0
                } : "string" == typeof e && (e = e.split(",")), t.isArray(e) && (n = {}, t.each(e, function (e, i) {
                    t.isPlainObject(i) ? n[i.action] = i : n[i] = !0
                }), e = n), t.isPlainObject(e) && (n = {}, t.each(e, function (e, i) {
                    n[e] = !!i && t.extend({type: e}, r[e], t.isPlainObject(i) ? i : null)
                }), e = n), i ? t.extend(!0, {}, i, e) : e) : i;
                var n
            }

            function o(e, i, n) {
                return i = i || e.type, t(n || e.template).addClass("tree-action").attr(t.extend({
                    "data-type": i,
                    title: e.title || ""
                }, e.attr)).data("action", e)
            }

            n.DEFAULTS = {
                animate: null,
                initialState: "normal",
                toggleTemplate: '<i class="list-toggle icon"></i>'
            }, n.prototype.add = function (e, i, n, r, s) {
                var o, a = t(e), l = this.options;
                if (a.is("li") ? (o = a.children("ul")).length || (o = t("<ul/>"), a.append(o), this._initList(o, a)) : o = a, o) {
                    var c = this;
                    t.isArray(i) || (i = [i]), t.each(i, function (e, i) {
                        var n = t("<li/>").data(i).appendTo(o);
                        void 0 !== i.id && n.attr("data-id", i.id);
                        var r = l.itemWrapper ? t(!0 === l.itemWrapper ? '<div class="tree-item-wrapper"/>' : l.itemWrapper).appendTo(n) : n;
                        if (i.html) r.html(i.html); else if (t.isFunction(c.options.itemCreator)) {
                            var s = c.options.itemCreator(n, i);
                            !0 !== s && !1 !== s && r.html(s)
                        } else i.url ? r.append(t("<a/>", {href: i.url}).text(i.title || i.name)) : r.append(t("<span/>").text(i.title || i.name));
                        c._initItem(n, i.idx || e, o, i), i.children && i.children.length && c.add(n, i.children)
                    }), this._initList(o), n && !o.hasClass("tree") && c.expand(o.parent("li"), r, s)
                }
            }, n.prototype.reload = function (e) {
                var i = this;
                e && (i.$.empty(), i.add(i.$, e)), i.isPreserve && i.store.time && i.$.find("li:not(.tree-action-item)").each(function () {
                    var e = t(this);
                    i[i.store[e.data("id")] ? "expand" : "collapse"](e, !0, !0)
                })
            }, n.prototype._initList = function (e, i, n, r) {
                var a = this;
                e.hasClass("tree") ? (n = 0, i = null) : ((i = (i || e.closest("li")).addClass("has-list")).find(".list-toggle").length || i.prepend(this.options.toggleTemplate), n = n || i.data("idx")), e.removeClass("has-active-item");
                var l = e.attr("data-idx", n || 0).children("li:not(.tree-action-item)").each(function (i) {
                    a._initItem(t(this), i + 1, e)
                });
                1 !== l.length || l.find("ul").length || l.addClass("tree-single-item");
                var c = s((r = r || (i ? i.data() : null)) ? r.actions : null, this.actions);
                if (c) {
                    if (c.add && !1 !== c.add.templateInList) {
                        var u = e.children("li.tree-action-item");
                        u.length ? u.detach().appendTo(e) : t('<li class="tree-action-item"/>').append(o(c.add, "add", c.add.templateInList)).appendTo(e)
                    }
                    c.sort && e.sortable(t.extend({
                        dragCssClass: "tree-drag-holder",
                        trigger: ".sort-handler",
                        selector: "li:not(.tree-action-item)",
                        finish: function (t) {
                            a.callEvent("action", {action: c.sort, $list: e, target: t.target, item: r})
                        }
                    }, c.sort.options, t.isPlainObject(this.options.sortable) ? this.options.sortable : null))
                }
                i && (i.hasClass("open") || r && r.open) && i.addClass("open in")
            }, n.prototype._initItem = function (e, i, n, r) {
                if (void 0 === i) {
                    var a = e.prev("li");
                    i = a.length ? a.data("idx") + 1 : 1
                }
                if (n = n || e.closest("ul"), e.attr("data-idx", i).removeClass("tree-single-item"), !e.data("id")) {
                    var l = i;
                    n.hasClass("tree") || (l = n.parent("li").data("id") + "-" + l), e.attr("data-id", l)
                }
                e.hasClass("active") && n.parent("li").addClass("has-active-item");
                var c = s((r = r || e.data()).actions, this.actions);
                if (c) {
                    var u = e.find(".tree-actions");
                    u.length || (u = t('<div class="tree-actions"/>').appendTo(this.options.itemWrapper ? e.find(".tree-item-wrapper") : e), t.each(c, function (t, e) {
                        e && u.append(o(e, t))
                    }))
                }
                var h = e.children("ul");
                h.length && this._initList(h, e, i, r)
            }, n.prototype._init = function () {
                var n = this.options, r = this;
                this.actions = s(n.actions), this.$.addClass("tree"), n.animate && this.$.addClass("tree-animate"), this._initList(this.$);
                var o = n.initialState, a = t.zui && t.zui.store && t.zui.store.enable;
                a && (this.selector = e + "::" + (n.name || "") + "#" + (this.$.attr("id") || i++), this.store = t.zui.store[n.name ? "get" : "pageGet"](this.selector, {})), "preserve" === o && (a ? this.isPreserve = !0 : this.options.initialState = o = "normal"), this.reload(n.data), a && (this.isPreserve = !0), "expand" === o ? this.expand() : "collapse" === o && this.collapse(), this.$.on("click", '.list-toggle,a[href="#"],.tree-toggle', function (e) {
                    var i = t(this), n = i.parent("li");
                    r.callEvent("hit", {target: n, item: n.data()}), r.toggle(n), i.is("a") && e.preventDefault()
                }).on("click", ".tree-action", function () {
                    var e = t(this), i = e.data();
                    if (i.action && (i = i.action), "sort" !== i.type) {
                        var n = e.closest("li:not(.tree-action-item)");
                        r.callEvent("action", {action: i, target: this, $item: n, item: n.data()})
                    }
                })
            }, n.prototype.preserve = function (e, i, n) {
                if (this.isPreserve) if (e) i = i || e.data("id"), (n = void 0 === n && e.hasClass("open")) ? this.store[i] = n : delete this.store[i], this.store.time = (new Date).getTime(), t.zui.store[this.options.name ? "set" : "pageSet"](this.selector, this.store); else {
                    var r = this;
                    this.store = {}, this.$.find("li").each(function () {
                        r.preserve(t(this))
                    })
                }
            }, n.prototype.expand = function (t, e, i) {
                t ? (t.addClass("open"), !e && this.options.animate ? setTimeout(function () {
                    t.addClass("in")
                }, 10) : t.addClass("in")) : t = this.$.find("li.has-list").addClass("open in"), i || this.preserve(t), this.callEvent("expand", t, this)
            }, n.prototype.show = function (e, i, n) {
                var r = this;
                e.each(function () {
                    var e = t(this);
                    if (r.expand(e, i, n), e) for (var s = e.parent("ul"); s && s.length && !s.hasClass("tree");) {
                        var o = s.parent("li");
                        o.length ? (r.expand(o, i, n), s = o.parent("ul")) : s = !1
                    }
                })
            }, n.prototype.collapse = function (t, e, i) {
                t ? !e && this.options.animate ? (t.removeClass("in"), setTimeout(function () {
                    t.removeClass("open")
                }, 300)) : t.removeClass("open in") : t = this.$.find("li.has-list").removeClass("open in"), i || this.preserve(t), this.callEvent("collapse", t, this)
            }, n.prototype.toggle = function (t) {
                this[t && t.hasClass("open") || !1 === t || void 0 === t && this.$.find("li.has-list.open").length ? "collapse" : "expand"](t)
            }, n.prototype.getOptions = function (e) {
                this.options = t.extend({}, n.DEFAULTS, this.$.data(), e), null === this.options.animate && this.$.hasClass("tree-animate") && (this.options.animate = !0)
            }, n.prototype.toData = function (e, i) {
                t.isFunction(e) && (i = e, e = null), e = e || this.$;
                var n = this;
                return e.children("li:not(.tree-action-item)").map(function () {
                    var e = t(this), r = e.data();
                    delete r["zui.droppable"];
                    var s = e.children("ul");
                    return s.length && (r.children = n.toData(s)), t.isFunction(i) ? i(r, e) : r
                }).get()
            }, n.prototype.callEvent = function (e, i) {
                var n;
                return t.isFunction(this.options[e]) && (n = this.options[e](i, this)), this.$.trigger(t.Event(e + "." + this.name, i)), n
            }, t.fn.tree = function (i, r) {
                return this.each(function () {
                    var s = t(this), o = s.data(e), a = "object" == c()(i) && i;
                    o || s.data(e, o = new n(this, a)), "string" == typeof i && o[i](r)
                })
            }, t.fn.tree.Constructor = n, t(function () {
                t('[data-ride="tree"]').tree()
            })
        }(t)
    }).call(this, i(48), i(48))
}, function (t, e, i) {
    (function (t) {
        /*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.1.0
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
*/
        (function () {
            var e, i, n, r, s = {}.hasOwnProperty, o = {
                zh_cn: {no_results_text: "没有找到"},
                zh_tw: {no_results_text: "沒有找到"},
                en: {no_results_text: "No results match"}
            };
            (r = function () {
                function t() {
                    this.options_index = 0, this.parsed = []
                }

                return t.prototype.add_node = function (t) {
                    return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
                }, t.prototype.add_group = function (t) {
                    var i, n, r, s, o, a;
                    for (i = this.parsed.length, this.parsed.push({
                        array_index: i,
                        group: !0,
                        label: this.escapeExpression(t.label),
                        children: 0,
                        disabled: t.disabled,
                        title: t.title,
                        search_keys: e.trim(t.getAttribute("data-keys") || "").replace(/,/g, " ")
                    }), a = [], r = 0, s = (o = t.childNodes).length; r < s; r++) n = o[r], a.push(this.add_option(n, i, t.disabled));
                    return a
                }, t.prototype.add_option = function (t, i, n) {
                    if ("OPTION" === t.nodeName.toUpperCase()) return "" !== t.text ? (null != i && (this.parsed[i].children += 1), this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: t.value,
                        text: t.text,
                        title: t.title,
                        html: t.innerHTML,
                        selected: t.selected,
                        disabled: !0 === n ? n : t.disabled,
                        group_array_index: i,
                        classes: t.className,
                        style: t.style.cssText,
                        data: t.getAttribute("data-data"),
                        search_keys: (e.trim(t.getAttribute("data-keys") || "") + t.value).replace(/,/, " ")
                    })) : this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: !0
                    }), this.options_index += 1
                }, t.prototype.escapeExpression = function (t) {
                    var e, i;
                    return null == t || !1 === t ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(i, function (t) {
                        return e[t] || "&amp;"
                    })) : t
                }, t
            }()).select_to_array = function (t) {
                var e, i, n, s, o;
                for (i = new r, n = 0, s = (o = t.childNodes).length; n < s; n++) e = o[n], i.add_node(e);
                return i.parsed
            }, i = function () {
                function t(i, n) {
                    this.form_field = i, this.options = null != n ? n : {}, t.browser_is_supported() && (this.lang = o[this.options.lang || (e.zui.clientLang ? e.zui.clientLang() : "zh_cn")], this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
                }

                return t.prototype.set_default_values = function () {
                    var t = this;
                    this.click_test_action = function (e) {
                        return t.test_active_click(e)
                    }, this.activate_action = function (e) {
                        return t.activate_field(e)
                    }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.drop_direction = this.options.drop_direction || "auto", this.middle_highlight = this.options.middle_highlight, this.compact_search = this.options.compact_search || !1, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options;
                    var e = this.options.max_drop_width;
                    return "string" == typeof e && e.indexOf("px") === e.length - 2 && (e = parseInt(e.substring(0, e.length - 2))), this.max_drop_width = e, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options
                }, t.prototype.set_default_text = function () {
                    return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || this.lang.no_results_text || t.default_no_result_text
                }, t.prototype.mouse_enter = function () {
                    return this.mouse_on_container = !0
                }, t.prototype.mouse_leave = function () {
                    return this.mouse_on_container = !1
                }, t.prototype.input_focus = function (t) {
                    var e = this;
                    if (this.is_multiple) {
                        if (!this.active_field) return setTimeout(function () {
                            return e.container_mousedown()
                        }, 50)
                    } else if (!this.active_field) return this.activate_field()
                }, t.prototype.input_blur = function (t) {
                    var e = this;
                    if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function () {
                        return e.blur_test()
                    }, 100)
                }, t.prototype.results_option_build = function (t) {
                    var e, i, n, r, s;
                    for (e = "", n = 0, r = (s = this.results_data).length; n < r; n++) e += (i = s[n]).group ? this.result_add_group(i) : this.result_add_option(i), (null != t ? t.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(i.text));
                    return e
                }, t.prototype.result_add_option = function (t) {
                    var e, i;
                    return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), (i = document.createElement("li")).className = e.join(" "), i.style.cssText = t.style, i.title = t.title, i.setAttribute("data-option-array-index", t.array_index), i.setAttribute("data-data", t.data), i.innerHTML = t.search_text, this.outerHTML(i)) : ""
                }, t.prototype.result_add_group = function (t) {
                    var e;
                    return (t.search_match || t.group_match) && t.active_options > 0 ? ((e = document.createElement("li")).className = "group-result", e.title = t.title, e.innerHTML = t.search_text, this.outerHTML(e)) : ""
                }, t.prototype.results_update_field = function () {
                    if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
                }, t.prototype.reset_single_select_options = function () {
                    var t, e, i, n, r;
                    for (r = [], e = 0, i = (n = this.results_data).length; e < i; e++) (t = n[e]).selected ? r.push(t.selected = !1) : r.push(void 0);
                    return r
                }, t.prototype.results_toggle = function () {
                    return this.results_showing ? this.results_hide() : this.results_show()
                }, t.prototype.results_search = function (t) {
                    return this.results_showing ? this.winnow_results(1) : this.results_show()
                }, t.prototype.winnow_results = function (t) {
                    var e, i, n, r, s, o, a, l, c, u, h, d, f;
                    for (this.no_results_clear(), s = 0, e = (a = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), r = this.search_contains ? "" : "^", n = new RegExp(r + e, "i"), u = new RegExp(e, "i"), h = 0, d = (f = this.results_data).length; h < d; h++) (i = f[h]).search_match = !1, o = null, this.include_option_in_results(i) && (i.group && (i.group_match = !1, i.active_options = 0), null != i.group_array_index && this.results_data[i.group_array_index] && (0 === (o = this.results_data[i.group_array_index]).active_options && o.search_match && (s += 1), o.active_options += 1), i.group && !this.group_search || (i.search_text = i.group ? i.label : i.html, i.search_keys_match = this.search_string_match(i.search_keys, n), i.search_text_match = this.search_string_match(i.search_text, n), i.search_match = i.search_text_match || i.search_keys_match, i.search_match && !i.group && (s += 1), i.search_match ? (i.search_text_match && i.search_text.length ? (l = i.search_text.search(u), c = i.search_text.substr(0, l + a.length) + "</em>" + i.search_text.substr(l + a.length), i.search_text = c.substr(0, l) + "<em>" + c.substr(l)) : i.search_keys_match && i.search_keys.length && (l = i.search_keys.search(u), c = i.search_keys.substr(0, l + a.length) + "</em>" + i.search_keys.substr(l + a.length), i.search_text += '&nbsp; <small style="opacity: 0.7">' + c.substr(0, l) + "<em>" + c.substr(l) + "</small>"), null != o && (o.group_match = !0)) : null != i.group_array_index && this.results_data[i.group_array_index].search_match && (i.search_match = !0)));
                    return this.result_clear_highlight(), s < 1 && a.length ? (this.update_results_content(""), this.no_results(a)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight(t))
                }, t.prototype.search_string_match = function (t, e) {
                    var i, n, r, s;
                    if (e.test(t)) return !0;
                    if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (n = t.replace(/\[|\]/g, "").split(" ")).length) for (r = 0, s = n.length; r < s; r++) if (i = n[r], e.test(i)) return !0
                }, t.prototype.choices_count = function () {
                    var t, e, i, n;
                    if (null != this.selected_option_count) return this.selected_option_count;
                    for (this.selected_option_count = 0, e = 0, i = (n = this.form_field.options).length; e < i; e++) (t = n[e]).selected && "" != t.value && (this.selected_option_count += 1);
                    return this.selected_option_count
                }, t.prototype.choices_click = function (t) {
                    if (t.preventDefault(), !this.results_showing && !this.is_disabled) return this.results_show()
                }, t.prototype.keyup_checker = function (t) {
                    var e, i;
                    switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), e) {
                        case 8:
                            if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                            if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                            break;
                        case 13:
                            if (t.preventDefault(), this.results_showing) return this.result_select(t);
                            break;
                        case 27:
                            return this.results_showing && this.results_hide(), !0;
                        case 9:
                        case 38:
                        case 40:
                        case 16:
                        case 91:
                        case 17:
                            break;
                        default:
                            return this.results_search()
                    }
                }, t.prototype.clipboard_event_checker = function (t) {
                    var e = this;
                    return setTimeout(function () {
                        return e.results_search()
                    }, 50)
                }, t.prototype.container_width = function () {
                    return null != this.options.width ? this.options.width : this.form_field && this.form_field.classList && this.form_field.classList.contains("form-control") ? "100%" : this.form_field.offsetWidth + "px"
                }, t.prototype.include_option_in_results = function (t) {
                    return !(this.is_multiple && !this.display_selected_options && t.selected || !this.display_disabled_options && t.disabled || t.empty)
                }, t.prototype.search_results_touchstart = function (t) {
                    return this.touch_started = !0, this.search_results_mouseover(t)
                }, t.prototype.search_results_touchmove = function (t) {
                    return this.touch_started = !1, this.search_results_mouseout(t)
                }, t.prototype.search_results_touchend = function (t) {
                    if (this.touch_started) return this.search_results_mouseup(t)
                }, t.prototype.outerHTML = function (t) {
                    var e;
                    return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t), e.innerHTML)
                }, t.browser_is_supported = function () {
                    return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent))
                }, t.default_multiple_text = "", t.default_single_text = "", t.default_no_result_text = "No results match", t
            }(), (e = t).fn.extend({
                chosen: function (t) {
                    return i.browser_is_supported() ? this.each(function (i) {
                        var r, s;
                        s = (r = e(this)).data("chosen"), "destroy" === t && s ? s.destroy() : s || r.data("chosen", new n(this, t))
                    }) : this
                }
            }), n = function (t) {
                function i() {
                    return i.__super__.constructor.apply(this, arguments)
                }

                return function (t, e) {
                    function i() {
                        this.constructor = t
                    }

                    for (var n in e) s.call(e, n) && (t[n] = e[n]);
                    i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype
                }(i, t), i.prototype.setup = function () {
                    return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
                }, i.prototype.set_up_html = function () {
                    var t, i;
                    (t = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl");
                    var n = this.form_field.getAttribute("data-css-class");
                    return n && t.push(n), i = {
                        class: t.join(" "),
                        style: "width: " + this.container_width() + ";",
                        title: this.form_field.title
                    }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = e("<div />", i), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : (this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div><div class="chosen-search"><input type="text" autocomplete="off" /></div></a><div class="chosen-drop"><ul class="chosen-results"></ul></div>'), this.compact_search ? this.container.addClass("chosen-compact").find(".chosen-search").appendTo(this.container.find(".chosen-single")) : this.container.find(".chosen-search").prependTo(this.container.find(".chosen-drop")), !1 !== this.options.highlight_selected && this.container.addClass("chosen-highlight-selected")), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.options.drop_width && this.dropdown.css("width", this.options.drop_width).addClass("chosen-drop-size-limited"), this.max_drop_width && this.dropdown.addClass("chosen-auto-max-width"), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {chosen: this})
                }, i.prototype.register_observers = function () {
                    var t = this;
                    return this.container.bind("mousedown.chosen", function (e) {
                        t.container_mousedown(e)
                    }), this.container.bind("mouseup.chosen", function (e) {
                        t.container_mouseup(e)
                    }), this.container.bind("mouseenter.chosen", function (e) {
                        t.mouse_enter(e)
                    }), this.container.bind("mouseleave.chosen", function (e) {
                        t.mouse_leave(e)
                    }), this.search_results.bind("mouseup.chosen", function (e) {
                        t.search_results_mouseup(e)
                    }), this.search_results.bind("mouseover.chosen", function (e) {
                        t.search_results_mouseover(e)
                    }), this.search_results.bind("mouseout.chosen", function (e) {
                        t.search_results_mouseout(e)
                    }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (e) {
                        t.search_results_mousewheel(e)
                    }), this.search_results.bind("touchstart.chosen", function (e) {
                        t.search_results_touchstart(e)
                    }), this.search_results.bind("touchmove.chosen", function (e) {
                        t.search_results_touchmove(e)
                    }), this.search_results.bind("touchend.chosen", function (e) {
                        t.search_results_touchend(e)
                    }), this.form_field_jq.bind("chosen:updated.chosen", function (e) {
                        t.results_update_field(e)
                    }), this.form_field_jq.bind("chosen:activate.chosen", function (e) {
                        t.activate_field(e)
                    }), this.form_field_jq.bind("chosen:open.chosen", function (e) {
                        t.container_mousedown(e)
                    }), this.form_field_jq.bind("chosen:close.chosen", function (e) {
                        t.input_blur(e)
                    }), this.search_field.bind("blur.chosen", function (e) {
                        t.input_blur(e)
                    }), this.search_field.bind("keyup.chosen", function (e) {
                        t.keyup_checker(e)
                    }), this.search_field.bind("input.chosen", function (e) {
                        t.keyup_checker(e)
                    }), this.search_field.bind("keydown.chosen", function (e) {
                        t.keydown_checker(e)
                    }), this.search_field.bind("focus.chosen", function (e) {
                        t.input_focus(e)
                    }), this.search_field.bind("cut.chosen", function (e) {
                        t.clipboard_event_checker(e)
                    }), this.search_field.bind("paste.chosen", function (e) {
                        t.clipboard_event_checker(e)
                    }), this.is_multiple ? this.search_choices.bind("click.chosen", function (e) {
                        t.choices_click(e)
                    }) : this.container.bind("click.chosen", function (t) {
                        t.preventDefault()
                    })
                }, i.prototype.destroy = function () {
                    return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
                }, i.prototype.search_field_disabled = function () {
                    return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
                }, i.prototype.container_mousedown = function (t) {
                    if (!this.is_disabled && (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null == t || !e(t.target).hasClass("search-choice-close"))) return this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field()
                }, i.prototype.container_mouseup = function (t) {
                    if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t)
                }, i.prototype.search_results_mousewheel = function (t) {
                    var e;
                    if (t.originalEvent && (e = -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop())
                }, i.prototype.blur_test = function (t) {
                    if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
                }, i.prototype.close_field = function () {
                    return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
                }, i.prototype.activate_field = function () {
                    return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
                }, i.prototype.test_active_click = function (t) {
                    var i;
                    return (i = e(t.target).closest(".chosen-container")).length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
                }, i.prototype.results_build = function () {
                    return this.parsing = !0, this.selected_option_count = null, this.results_data = r.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch"), this.container.removeClass("chosen-with-search")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"), this.container.addClass("chosen-with-search"))), this.update_results_content(this.results_option_build({first: !0})), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
                }, i.prototype.result_do_highlight = function (t, e) {
                    var i, n, r, s, o, a, l = -1;
                    t.length && (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), r = parseInt(this.search_results.css("maxHeight"), 10), a = this.result_highlight.outerHeight(), s = r + (o = this.search_results.scrollTop()), i = (n = this.result_highlight.position().top + this.search_results.scrollTop()) + a, this.middle_highlight && (e || "always" === this.middle_highlight) ? l = Math.min(n - a, Math.max(0, n - (r - a) / 2)) : i >= s ? l = i - r > 0 ? i - r : 0 : n < o && (l = n), l > -1 ? this.search_results.scrollTop(l) : this.result_highlight.scrollIntoView && this.result_highlight.scrollIntoView())
                }, i.prototype.result_clear_highlight = function () {
                    return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
                }, i.prototype.results_show = function () {
                    var t = this;
                    if (t.is_multiple && t.max_selected_options <= t.choices_count()) return t.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1;
                    t.results_showing = !0, t.search_field.focus(), t.search_field.val(t.search_field.val());
                    var i = t.drop_direction;
                    if (e.isFunction(i) && (i = i.call(this)), "auto" === i) if (t.drop_directionFixed) i = t.drop_directionFixed; else {
                        var n = t.container.find(".chosen-drop");
                        t.container.offset().top + n.outerHeight() + 30 > e(window).height() + e(window).scrollTop() && (i = "up"), t.drop_directionFixed = i
                    }
                    t.container.toggleClass("chosen-up", "up" === i).addClass("chosen-with-drop"), t.winnow_results(1);
                    var r = t.max_drop_width;
                    if (r) {
                        n = t.container.find(".chosen-drop").removeClass("in");
                        var s = 0;
                        n.find(".chosen-results>li").each(function () {
                            s = Math.max(s, e(this).outerWidth())
                        }), n.css("width", Math.min(s + 2, r)), t.fixDropWidthTimer = setTimeout(function () {
                            t.fixDropWidthTimer = null, n.addClass("in")
                        }, 50)
                    }
                    return t.form_field_jq.trigger("chosen:showing_dropdown", {chosen: t})
                }, i.prototype.update_results_content = function (t) {
                    return this.search_results.html(t)
                }, i.prototype.results_hide = function () {
                    var t = this;
                    return t.fixDropWidthTimer && (clearTimeout(t.fixDropWidthTimer), t.fixDropWidthTimer = null), t.results_showing && (t.result_clear_highlight(), t.container.removeClass("chosen-with-drop"), t.form_field_jq.trigger("chosen:hiding_dropdown", {chosen: t}), t.drop_directionFixed = 0), t.results_showing = !1
                }, i.prototype.set_tab_index = function (t) {
                    var e;
                    if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e
                }, i.prototype.set_label_behavior = function () {
                    var t = this;
                    if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.bind("click.chosen", function (e) {
                        return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
                    })
                }, i.prototype.show_search_field_default = function () {
                    return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
                }, i.prototype.search_results_mouseup = function (t) {
                    var i;
                    if ((i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first()).length) return this.result_highlight = i, this.result_select(t), this.search_field.focus()
                }, i.prototype.search_results_mouseover = function (t) {
                    var i;
                    if (i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first()) return this.result_do_highlight(i)
                }, i.prototype.search_results_mouseout = function (t) {
                    if (e(t.target).hasClass("active-result")) return this.result_clear_highlight()
                }, i.prototype.choice_build = function (t) {
                    var i, n, r = this;
                    return i = e("<li />", {class: "search-choice"}).html("<span title='" + t.html + "'>" + t.html + "</span>"), t.disabled ? i.addClass("search-choice-disabled") : ((n = e("<a />", {
                        class: "search-choice-close",
                        "data-option-array-index": t.array_index
                    })).bind("click.chosen", function (t) {
                        return r.choice_destroy_link_click(t)
                    }), i.append(n)), this.search_container.before(i)
                }, i.prototype.choice_destroy_link_click = function (t) {
                    if (t.preventDefault(), t.stopPropagation(), !this.is_disabled) return this.choice_destroy(e(t.target))
                }, i.prototype.choice_destroy = function (t) {
                    if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()
                }, i.prototype.results_reset = function () {
                    if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field) return this.results_hide()
                }, i.prototype.results_reset_cleanup = function () {
                    return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
                }, i.prototype.result_select = function (t) {
                    var e, i;
                    if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), (i = this.results_data[e[0].getAttribute("data-option-array-index")]).selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(i.text), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {selected: this.form_field.options[i.options_index].value}), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())
                }, i.prototype.single_set_selected_text = function (t) {
                    return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.compact_search && this.search_field.attr("placeholder", t), this.selected_item.find("span").attr("title", t).text(t)
                }, i.prototype.result_deselect = function (t) {
                    var e;
                    return e = this.results_data[t], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {deselected: this.form_field.options[e.options_index].value}), this.search_field_scale(), !0)
                }, i.prototype.single_deselect_control_build = function () {
                    if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
                }, i.prototype.get_search_text = function () {
                    return this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html()
                }, i.prototype.winnow_results_set_highlight = function (t) {
                    var e, i;
                    if (null != (e = (i = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result")).length ? i.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(e, t)
                }, i.prototype.no_results = function (t) {
                    var i;
                    return (i = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>')).find("span").first().html(t), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", {chosen: this})
                }, i.prototype.no_results_clear = function () {
                    return this.search_results.find(".no-results").remove()
                }, i.prototype.keydown_arrow = function () {
                    var t;
                    return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
                }, i.prototype.keyup_arrow = function () {
                    var t;
                    return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
                }, i.prototype.keydown_backstroke = function () {
                    var t;
                    return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
                }, i.prototype.clear_backstroke = function () {
                    return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
                }, i.prototype.keydown_checker = function (t) {
                    var e, i;
                    switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                        case 8:
                            this.backstroke_length = this.search_field.val().length;
                            break;
                        case 9:
                            this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                            break;
                        case 13:
                            t.preventDefault();
                            break;
                        case 38:
                            t.preventDefault(), this.keyup_arrow();
                            break;
                        case 40:
                            t.preventDefault(), this.keydown_arrow()
                    }
                }, i.prototype.search_field_scale = function () {
                    var t, i, n, r, s, o, a, l;
                    if (this.is_multiple) {
                        for (0, o = 0, r = "position:absolute; left: -1000px; top: -1000px; display:none;", a = 0, l = (s = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"]).length; a < l; a++) r += (n = s[a]) + ":" + this.search_field.css(n) + ";";
                        return (t = e("<div />", {style: r})).text(this.search_field.val()), e("body").append(t), o = t.width() + 25, t.remove(), o > (i = this.container.outerWidth()) - 10 && (o = i - 10), this.search_field.css({width: o + "px"})
                    }
                }, i
            }(i)
        }).call(this)
    }).call(this, i(48))
}, function (t, e, i) {
    "use strict";
    (function (t, e) {
        var n, r = i(132);
        i.n(r).a.attach(document.body), n = "../static/assets/img/qq/", t.each({
			JSON: {
				list: [{
					t: "JSON QQ客服",
					n: "2340592",
					k: "8772598e1ad8724e6efb717379167f2df808709da43f9a20e750f6ac66bbcd6f",
					d: "",
					s: "normal",
					y: "java"
				}, {
					t: "JSON QQ学习交流群",
					n: "661275469",
					k: "yZ3cRochOj0bjZQWqB4FkUO2NVRoLc8c",
					d: "",
					s: "new",
					y: "java"
				}], name: "JSON.cn"
			}
            // java: {
            //     list: [{
            //         t: "Java菜鸟社区",
            //         n: "294557894",
            //         k: "2c6fc24b07e86aa1956970f301f36e311f25d4bccf60f5891ff4a00f369f6a1e",
            //         d: "",
            //         s: "hot",
            //         y: "java"
            //     }, {
            //         t: "Java学习交流群",
            //         n: "2399645",
            //         k: "8772598e1ad8724e6efb717379167f2df808709da43f9a20e750f6ac66bbcd6f",
            //         d: "",
            //         s: "normal",
            //         y: "java"
            //     }, {
            //         t: "被Java蹂躏的岁月(新群)",
            //         n: "7637807",
            //         k: "b9d8290dd4a352935c423565e450e138d6a4936aa0c085edc4daf8258f033634",
            //         d: "",
            //         s: "new",
            //         y: "java"
            //     }], name: "JAVA"
            // },
            // php: {
            //     list: [{
            //         t: "PHP学习交流群",
            //         n: "308021683",
            //         k: "318e0a980c261ac5a5fb31e6a42bf7fe26e02436e826b6996663403d5db27841",
            //         d: "",
            //         s: "normal",
            //         y: "php"
            //     }], name: "PHP"
            // },
            // csharp: {
            //     list: [{
            //         t: "C#学习交流群",
            //         n: "256718021",
            //         k: "cd98873bad2022a070c705cada3b87dd34589aec3e8960fdf5f7cc8780c1848d",
            //         d: "",
            //         s: "normal",
            //         y: "C#"
            //     }], name: "C#"
            // },
            // bejson: {
            //     list: [{
            //         t: "BeJSON一群",
            //         n: "238329389",
            //         k: "5da9cd7020d2a5d5ea81f4840b2b2a633d9c68a6e15676e265104918cf432394",
            //         d: "",
            //         s: "hot",
            //         y: "BeJSON"
            //     }, {
            //         t: "BeJSON二群",
            //         n: "274298671",
            //         k: "39d693352eb6972a427c246d6e9298bf6530c747cf9a42cd11893138a97d2408",
            //         d: "",
            //         s: "new",
            //         y: "BeJSON"
            //     }], name: "BeJSON"
            // }
        }, function (e, i) {
            var r, s, o = [];
            t(i.list).each(function (t, r) {
                var s = "", a = "", l = "";
                "hot" === r.s && (s = "hot", a = "满", l = "disabled"), "new" === r.s && (s = "new", a = "新");
                var c = '<div class="group-info"> <div class="title-bg">' + i.name + '</div><div class="is-full ' + s + '" data-full="' + r.s + '">' + a + '</div><div class="group-detail"> <div>' + r.t + '</div> <p>群号：<span class="qq-num">' + r.n + '</span>  <span class="copy-qqnumber">复制群号</span></p></div><div class="group-apply" ><img src="' + n + e + '-q.png" alt="bjson-q.png"><a href="https://qm.qq.com/cgi-bin/qm/qr?k=yZ3cRochOj0bjZQWqB4FkUO2NVRoLc8c&jump_from=webapi" target="_blank" class="group-btn-apply btn btn-primary ' + l + '" data-state="' + r.k + '" >申请入群</a></div><div class="group-shadow"></div></div>';
                o.push(c)
            }), r = o.join(""), s = '<div class="modal-nav-qq" id="modal--qq"><h3 class="group-title">' + i.name + "</h3> " + r + "</div>", t("#modalQQ").append(s)
        }), new e(".copy-qqnumber", {
            text: function (e) {
                var i = t(e).prev().text();
                return !!i && (msgSuccess("复制成功"), i)
            }
        }), "night" === localStorage.getItem("theme") && (t("#switchTheme").attr("data-theme", "night"), t("#switchTheme").find("i").eq(0).removeClass("custom-icon-moon-bf").addClass("custom-icon-sun-wf")), t("body").on("click", "#switchTheme", function () {
            "day" === t(this).attr("data-theme") ? (t(this).attr("data-theme", "night"), t(this).find("i").eq(0).removeClass("custom-icon-moon-bf").addClass("custom-icon-sun-wf"), t("html").addClass("dark-theme"), localStorage.setItem("theme", "night")) : (t(this).attr("data-theme", "day"), t(this).find("i").eq(0).removeClass("custom-icon-sun-wf").addClass("custom-icon-moon-bf"), t("html").removeClass("dark-theme"), localStorage.setItem("theme", "day"))
        }), t("select.chosen-select") && (t("select.chosen-select").chosen({
            no_results_text: "没有找到",
            search_contains: !0,
            disable_search_threshold: 10
        }), t("select.chosen-select").on("change", function (t, e) {
            window.location.href = e.selected
        })),
        //     function () {
        //     var e = "#goTop";
        //     if (document.getElementById("goTop")) {
        //         var i = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //         i > 100 ? t(e).show() : t(e).hide();
        //         var n = t("#write").outerHeight(), r = t(window).outerHeight() - 300;
        //         i > 178 && n > r ? n + 178 - t("body").scrollTop() > r ? (t(".md-toc").addClass("md-toc-fixed"), t(".md-toc").css("top", "")) : (t(".md-toc").removeClass("md-toc-fixed"), n > r && t(".md-toc").css("top", n - r - 33 > 0 ? n - r - 33 + "px" : "")) : t(".md-toc").removeClass("md-toc-fixed"), window.onscroll = function () {
        //             var i = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //             i > 100 ? t(e).fadeIn(200) : t(e).fadeOut(200), i > 178 && n > r ? n + 178 - i > r ? (t(".md-toc").addClass("md-toc-fixed"), t(".md-toc").css("top", "")) : (t(".md-toc").removeClass("md-toc-fixed"), n > r && t(".md-toc").css("top", n - r - 33 > 0 ? n - r - 33 + "px" : "")) : t(".md-toc").removeClass("md-toc-fixed")
        //         }, t(e).click(function () {
        //             return t("body,html").animate({scrollTop: 0}, 500), !1
        //         })
        //     }
        // }(),
        //     t(".xf-collection").click(function () {
        //     !function () {
        //         var t = window.location, e = document.title, i = navigator.userAgent.toLowerCase();
        //         if (i.indexOf("360se") > -1) alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！"); else if (i.indexOf("msie 8") > -1) window.external.AddToFavoritesBar(t, e); else if (document.all) try {
        //             window.external.addFavorite(t, e)
        //         } catch (t) {
        //             alert("您的浏览器不支持,请按 Ctrl+D 手动收藏!")
        //         } else if (window.sidebar) try {
        //             window.sidebar.addPanel(e, t, "")
        //         } catch (t) {
        //             alert("由于浏览器不支持，请按 Ctrl+D 手动收藏！")
        //         } else alert("您的浏览器不支持,请按 Ctrl+D 手动收藏!")
        //     }()
        // }),
            t("body").on("click", "#homeNav li", function () {
            var e = t(this).attr("data-type");
            "all" === e ? t("#toolsCon .tool-item").show() : (t("#toolsCon .tool-item").hide(), t("#toolsCon .tool-item").each(function (i, n) {
                t(n).attr("data-type") === e && t(n).show()
            }))
        }), t("body").on("click", "#leftNav", function () {
            t("html").addClass("left-nav-html"), t("#leftNavCon").addClass("left-nav-show"), t("#leftNavConMask").show()
        }), t("body").on("click", "#leftNavConMask", function () {
            t("html").removeClass("left-nav-html"), t("#leftNavCon").removeClass("left-nav-show"), t("#leftNavConMask").hide()
        }), t("body").on("click", "#leftNavList li", function () {
            var e = t(this).attr("data-type"),
                i = t(this).find("dl dd").length * t(this).find("dl dd").eq(0).outerHeight() + "px";
            "dropdown" === e ? (t(this).find("dl").eq(0).css("height", i), t(this).attr("data-type", "dropup"), t(this).find(".custom-icon-12").removeClass("custom-icon-toparrow-bf").addClass("custom-icon-bottomarrow-bf")) : "dropup" === e && (t(this).find("dl").eq(0).css("height", ""), t(this).attr("data-type", "dropdown"), t(this).find(".custom-icon-12").removeClass("custom-icon-bottomarrow-bf").addClass("custom-icon-toparrow-bf"))
        }), t("body").on("click", "#rightNavList li", function () {
            var e = t(this).attr("data-type"),
                i = t(this).find("dl dd").length * t(this).find("dl dd").eq(0).outerHeight() + "px";
            "dropdown" === e ? (t(this).find("dl").eq(0).css("height", i), t(this).attr("data-type", "dropup"), t(this).find(".custom-icon-12").removeClass("custom-icon-toparrow-bf").addClass("custom-icon-bottomarrow-bf")) : "dropup" === e && (t(this).find("dl").eq(0).css("height", ""), t(this).attr("data-type", "dropdown"), t(this).find(".custom-icon-12").removeClass("custom-icon-bottomarrow-bf").addClass("custom-icon-toparrow-bf"))
        })
    }).call(this, i(48), i(143))
}, function (t, e, i) {
    /*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
    var n;
    n = function () {
        return function (t) {
            var e = {};

            function i(n) {
                if (e[n]) return e[n].exports;
                var r = e[n] = {i: n, l: !1, exports: {}};
                return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
            }

            return i.m = t, i.c = e, i.d = function (t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
            }, i.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
            }, i.t = function (t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
                    return t[e]
                }.bind(null, r));
                return n
            }, i.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return i.d(e, "a", e), e
            }, i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, i.p = "", i(i.s = 6)
        }([function (t, e) {
            t.exports = function (t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value; else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var i = t.hasAttribute("readonly");
                    i || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), i || t.removeAttribute("readonly"), e = t.value
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var n = window.getSelection(), r = document.createRange();
                    r.selectNodeContents(t), n.removeAllRanges(), n.addRange(r), e = n.toString()
                }
                return e
            }
        }, function (t, e) {
            function i() {
            }

            i.prototype = {
                on: function (t, e, i) {
                    var n = this.e || (this.e = {});
                    return (n[t] || (n[t] = [])).push({fn: e, ctx: i}), this
                }, once: function (t, e, i) {
                    var n = this;

                    function r() {
                        n.off(t, r), e.apply(i, arguments)
                    }

                    return r._ = e, this.on(t, r, i)
                }, emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, e);
                    return this
                }, off: function (t, e) {
                    var i = this.e || (this.e = {}), n = i[t], r = [];
                    if (n && e) for (var s = 0, o = n.length; s < o; s++) n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
                    return r.length ? i[t] = r : delete i[t], this
                }
            }, t.exports = i, t.exports.TinyEmitter = i
        }, function (t, e, i) {
            var n = i(3), r = i(4);
            t.exports = function (t, e, i) {
                if (!t && !e && !i) throw new Error("Missing required arguments");
                if (!n.string(e)) throw new TypeError("Second argument must be a String");
                if (!n.fn(i)) throw new TypeError("Third argument must be a Function");
                if (n.node(t)) return function (t, e, i) {
                    return t.addEventListener(e, i), {
                        destroy: function () {
                            t.removeEventListener(e, i)
                        }
                    }
                }(t, e, i);
                if (n.nodeList(t)) return function (t, e, i) {
                    return Array.prototype.forEach.call(t, function (t) {
                        t.addEventListener(e, i)
                    }), {
                        destroy: function () {
                            Array.prototype.forEach.call(t, function (t) {
                                t.removeEventListener(e, i)
                            })
                        }
                    }
                }(t, e, i);
                if (n.string(t)) return function (t, e, i) {
                    return r(document.body, t, e, i)
                }(t, e, i);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, function (t, e) {
            e.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, e.nodeList = function (t) {
                var i = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === i || "[object HTMLCollection]" === i) && "length" in t && (0 === t.length || e.node(t[0]))
            }, e.string = function (t) {
                return "string" == typeof t || t instanceof String
            }, e.fn = function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, function (t, e, i) {
            var n = i(5);

            function r(t, e, i, r, s) {
                var o = function (t, e, i, r) {
                    return function (i) {
                        i.delegateTarget = n(i.target, e), i.delegateTarget && r.call(t, i)
                    }
                }.apply(this, arguments);
                return t.addEventListener(i, o, s), {
                    destroy: function () {
                        t.removeEventListener(i, o, s)
                    }
                }
            }

            t.exports = function (t, e, i, n, s) {
                return "function" == typeof t.addEventListener ? r.apply(null, arguments) : "function" == typeof i ? r.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
                    return r(t, e, i, n, s)
                }))
            }
        }, function (t, e) {
            var i = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var n = Element.prototype;
                n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
            }
            t.exports = function (t, e) {
                for (; t && t.nodeType !== i;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        }, function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i(0), r = i.n(n),
                s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }();
            var a = function () {
                    function t(e) {
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.resolveOptions(e), this.initSelection()
                    }

                    return o(t, [{
                        key: "resolveOptions", value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection", value: function () {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake", value: function () {
                            var t = this, e = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function () {
                                return t.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                            var i = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = i + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = r()(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake", value: function () {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget", value: function () {
                            this.selectedText = r()(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText", value: function () {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult", value: function (t) {
                            this.emitter.emit(t ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection", value: function () {
                            this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.removeFake()
                        }
                    }, {
                        key: "action", set: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function () {
                            return this._action
                        }
                    }, {
                        key: "target", set: function (t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== (void 0 === t ? "undefined" : s(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = t
                            }
                        }, get: function () {
                            return this._target
                        }
                    }]), t
                }(), l = i(1), c = i.n(l), u = i(2), h = i.n(u),
                d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, f = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }();
            var p = function (t) {
                function e(t, i) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return n.resolveOptions(i), n.listenClick(t), n
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, c.a), f(e, [{
                    key: "resolveOptions", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick", value: function (t) {
                        var e = this;
                        this.listener = h()(t, "click", function (t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick", value: function (t) {
                        var e = t.delegateTarget || t.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a({
                            action: this.action(e),
                            target: this.target(e),
                            text: this.text(e),
                            container: this.container,
                            trigger: e,
                            emitter: this
                        })
                    }
                }, {
                    key: "defaultAction", value: function (t) {
                        return v("action", t)
                    }
                }, {
                    key: "defaultTarget", value: function (t) {
                        var e = v("target", t);
                        if (e) return document.querySelector(e)
                    }
                }, {
                    key: "defaultText", value: function (t) {
                        return v("text", t)
                    }
                }, {
                    key: "destroy", value: function () {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            e = "string" == typeof t ? [t] : t, i = !!document.queryCommandSupported;
                        return e.forEach(function (t) {
                            i = i && !!document.queryCommandSupported(t)
                        }), i
                    }
                }]), e
            }();

            function v(t, e) {
                var i = "data-clipboard-" + t;
                if (e.hasAttribute(i)) return e.getAttribute(i)
            }

            e.default = p
        }]).default
    }, t.exports = n()
}, function (t, e, i) {
    "use strict";
    (function (t) {
        if (i(145), i(341), i(342), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
        t._babelPolyfill = !0;
        var e = "defineProperty";

        function n(t, i, n) {
            t[i] || Object[e](t, i, {writable: !0, configurable: !0, value: n})
        }

        n(String.prototype, "padLeft", "".padStart), n(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (t) {
            [][t] && n(Array, t, Function.call.bind([][t]))
        })
    }).call(this, i(95))
}, function (t, e, i) {
    i(146), i(148), i(149), i(150), i(151), i(152), i(153), i(154), i(155), i(156), i(157), i(158), i(159), i(160), i(161), i(162), i(163), i(164), i(165), i(166), i(167), i(168), i(169), i(170), i(171), i(172), i(173), i(174), i(175), i(176), i(177), i(178), i(179), i(180), i(181), i(182), i(183), i(184), i(185), i(186), i(187), i(188), i(189), i(190), i(191), i(192), i(193), i(194), i(195), i(196), i(197), i(198), i(199), i(200), i(201), i(202), i(203), i(204), i(205), i(206), i(207), i(208), i(209), i(210), i(211), i(212), i(213), i(214), i(215), i(216), i(217), i(218), i(219), i(220), i(221), i(222), i(223), i(225), i(226), i(228), i(229), i(230), i(231), i(232), i(233), i(234), i(236), i(237), i(238), i(239), i(240), i(241), i(242), i(243), i(244), i(245), i(246), i(247), i(248), i(88), i(249),i(115),i(250),i(116),i(251),i(252),i(253),i(254),i(255),i(119),i(121),i(122),i(256),i(257),i(258),i(259),i(260),i(261),i(262),i(263),i(264),i(265),i(266),i(267),i(268),i(269),i(270),i(271),i(272),i(273),i(274),i(275),i(276),i(277),i(278),i(279),i(280),i(281),i(282),i(283),i(284),i(285),i(286),i(287),i(288),i(289),i(290),i(291),i(292),i(293),i(294),i(295),i(296),i(297),i(298),i(299),i(300),i(301),i(302),i(303),i(304),i(305),i(306),i(307),i(308),i(309),i(310),i(311),i(312),i(313),i(314),i(315),i(316),i(317),i(318),i(319),i(320),i(321),i(322),i(323),i(324),i(325),i(326),i(327),i(328),i(329),i(330),i(331),i(332),i(333),i(334),i(335),i(336),i(337),i(338),i(339),i(340),t.exports = i(19)
}, function (t, e, i) {
    "use strict";
    var n = i(3), r = i(15), s = i(8), o = i(0), a = i(13), l = i(30).KEY, c = i(4), u = i(53), h = i(43), d = i(34),
        f = i(6), p = i(97), v = i(69), g = i(147), m = i(56), y = i(1), b = i(5), w = i(16), x = i(24), T = i(33),
        C = i(37), E = i(100), S = i(17), _ = i(9), k = i(35), M = S.f, P = _.f, L = E.f, D = n.Symbol, A = n.JSON,
        I = A && A.stringify, $ = f("_hidden"), O = f("toPrimitive"), z = {}.propertyIsEnumerable,
        N = u("symbol-registry"), j = u("symbols"), F = u("op-symbols"), H = Object.prototype,
        R = "function" == typeof D, B = n.QObject, q = !B || !B.prototype || !B.prototype.findChild,
        W = s && c(function () {
            return 7 != C(P({}, "a", {
                get: function () {
                    return P(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (t, e, i) {
            var n = M(H, e);
            n && delete H[e], P(t, e, i), n && t !== H && P(H, e, n)
        } : P, G = function (t) {
            var e = j[t] = C(D.prototype);
            return e._k = t, e
        }, Y = R && "symbol" == typeof D.iterator ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return t instanceof D
        }, V = function (t, e, i) {
            return t === H && V(F, e, i), y(t), e = x(e, !0), y(i), r(j, e) ? (i.enumerable ? (r(t, $) && t[$][e] && (t[$][e] = !1), i = C(i, {enumerable: T(0, !1)})) : (r(t, $) || P(t, $, T(1, {})), t[$][e] = !0), W(t, e, i)) : P(t, e, i)
        }, X = function (t, e) {
            y(t);
            for (var i, n = g(e = w(e)), r = 0, s = n.length; s > r;) V(t, i = n[r++], e[i]);
            return t
        }, U = function (t) {
            var e = z.call(this, t = x(t, !0));
            return !(this === H && r(j, t) && !r(F, t)) && (!(e || !r(this, t) || !r(j, t) || r(this, $) && this[$][t]) || e)
        }, K = function (t, e) {
            if (t = w(t), e = x(e, !0), t !== H || !r(j, e) || r(F, e)) {
                var i = M(t, e);
                return !i || !r(j, e) || r(t, $) && t[$][e] || (i.enumerable = !0), i
            }
        }, Q = function (t) {
            for (var e, i = L(w(t)), n = [], s = 0; i.length > s;) r(j, e = i[s++]) || e == $ || e == l || n.push(e);
            return n
        }, J = function (t) {
            for (var e, i = t === H, n = L(i ? F : w(t)), s = [], o = 0; n.length > o;) !r(j, e = n[o++]) || i && !r(H, e) || s.push(j[e]);
            return s
        };
    R || (a((D = function () {
        if (this instanceof D) throw TypeError("Symbol is not a constructor!");
        var t = d(arguments.length > 0 ? arguments[0] : void 0), e = function (i) {
            this === H && e.call(F, i), r(this, $) && r(this[$], t) && (this[$][t] = !1), W(this, t, T(1, i))
        };
        return s && q && W(H, t, {configurable: !0, set: e}), G(t)
    }).prototype, "toString", function () {
        return this._k
    }), S.f = K, _.f = V, i(38).f = E.f = Q, i(50).f = U, i(55).f = J, s && !i(31) && a(H, "propertyIsEnumerable", U, !0), p.f = function (t) {
        return G(f(t))
    }), o(o.G + o.W + o.F * !R, {Symbol: D});
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) f(Z[tt++]);
    for (var et = k(f.store), it = 0; et.length > it;) v(et[it++]);
    o(o.S + o.F * !R, "Symbol", {
        for: function (t) {
            return r(N, t += "") ? N[t] : N[t] = D(t)
        }, keyFor: function (t) {
            if (!Y(t)) throw TypeError(t + " is not a symbol!");
            for (var e in N) if (N[e] === t) return e
        }, useSetter: function () {
            q = !0
        }, useSimple: function () {
            q = !1
        }
    }), o(o.S + o.F * !R, "Object", {
        create: function (t, e) {
            return void 0 === e ? C(t) : X(C(t), e)
        },
        defineProperty: V,
        defineProperties: X,
        getOwnPropertyDescriptor: K,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: J
    }), A && o(o.S + o.F * (!R || c(function () {
        var t = D();
        return "[null]" != I([t]) || "{}" != I({a: t}) || "{}" != I(Object(t))
    })), "JSON", {
        stringify: function (t) {
            for (var e, i, n = [t], r = 1; arguments.length > r;) n.push(arguments[r++]);
            if (i = e = n[1], (b(e) || void 0 !== t) && !Y(t)) return m(e) || (e = function (t, e) {
                if ("function" == typeof i && (e = i.call(this, t, e)), !Y(e)) return e
            }), n[1] = e, I.apply(A, n)
        }
    }), D.prototype[O] || i(12)(D.prototype, O, D.prototype.valueOf), h(D, "Symbol"), h(Math, "Math", !0), h(n.JSON, "JSON", !0)
}, function (t, e, i) {
    var n = i(35), r = i(55), s = i(50);
    t.exports = function (t) {
        var e = n(t), i = r.f;
        if (i) for (var o, a = i(t), l = s.f, c = 0; a.length > c;) l.call(t, o = a[c++]) && e.push(o);
        return e
    }
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Object", {create: i(37)})
}, function (t, e, i) {
    var n = i(0);
    n(n.S + n.F * !i(8), "Object", {defineProperty: i(9).f})
}, function (t, e, i) {
    var n = i(0);
    n(n.S + n.F * !i(8), "Object", {defineProperties: i(99)})
}, function (t, e, i) {
    var n = i(16), r = i(17).f;
    i(26)("getOwnPropertyDescriptor", function () {
        return function (t, e) {
            return r(n(t), e)
        }
    })
}, function (t, e, i) {
    var n = i(10), r = i(18);
    i(26)("getPrototypeOf", function () {
        return function (t) {
            return r(n(t))
        }
    })
}, function (t, e, i) {
    var n = i(10), r = i(35);
    i(26)("keys", function () {
        return function (t) {
            return r(n(t))
        }
    })
}, function (t, e, i) {
    i(26)("getOwnPropertyNames", function () {
        return i(100).f
    })
}, function (t, e, i) {
    var n = i(5), r = i(30).onFreeze;
    i(26)("freeze", function (t) {
        return function (e) {
            return t && n(e) ? t(r(e)) : e
        }
    })
}, function (t, e, i) {
    var n = i(5), r = i(30).onFreeze;
    i(26)("seal", function (t) {
        return function (e) {
            return t && n(e) ? t(r(e)) : e
        }
    })
}, function (t, e, i) {
    var n = i(5), r = i(30).onFreeze;
    i(26)("preventExtensions", function (t) {
        return function (e) {
            return t && n(e) ? t(r(e)) : e
        }
    })
}, function (t, e, i) {
    var n = i(5);
    i(26)("isFrozen", function (t) {
        return function (e) {
            return !n(e) || !!t && t(e)
        }
    })
}, function (t, e, i) {
    var n = i(5);
    i(26)("isSealed", function (t) {
        return function (e) {
            return !n(e) || !!t && t(e)
        }
    })
}, function (t, e, i) {
    var n = i(5);
    i(26)("isExtensible", function (t) {
        return function (e) {
            return !!n(e) && (!t || t(e))
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S + n.F, "Object", {assign: i(101)})
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Object", {is: i(102)})
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Object", {setPrototypeOf: i(73).set})
}, function (t, e, i) {
    "use strict";
    var n = i(44), r = {};
    r[i(6)("toStringTag")] = "z", r + "" != "[object z]" && i(13)(Object.prototype, "toString", function () {
        return "[object " + n(this) + "]"
    }, !0)
}, function (t, e, i) {
    var n = i(0);
    n(n.P, "Function", {bind: i(103)})
}, function (t, e, i) {
    var n = i(9).f, r = Function.prototype, s = /^\s*function ([^ (]*)/;
    "name" in r || i(8) && n(r, "name", {
        configurable: !0, get: function () {
            try {
                return ("" + this).match(s)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(5), r = i(18), s = i(6)("hasInstance"), o = Function.prototype;
    s in o || i(9).f(o, s, {
        value: function (t) {
            if ("function" != typeof this || !n(t)) return !1;
            if (!n(this.prototype)) return t instanceof this;
            for (; t = r(t);) if (this.prototype === t) return !0;
            return !1
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(105);
    n(n.G + n.F * (parseInt != r), {parseInt: r})
}, function (t, e, i) {
    var n = i(0), r = i(106);
    n(n.G + n.F * (parseFloat != r), {parseFloat: r})
}, function (t, e, i) {
    "use strict";
    var n = i(3), r = i(15), s = i(21), o = i(75), a = i(24), l = i(4), c = i(38).f, u = i(17).f, h = i(9).f,
        d = i(45).trim, f = n.Number, p = f, v = f.prototype, g = "Number" == s(i(37)(v)),
        m = "trim" in String.prototype, y = function (t) {
            var e = a(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var i, n, r, s = (e = m ? e.trim() : d(e, 3)).charCodeAt(0);
                if (43 === s || 45 === s) {
                    if (88 === (i = e.charCodeAt(2)) || 120 === i) return NaN
                } else if (48 === s) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            n = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            n = 8, r = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var o, l = e.slice(2), c = 0, u = l.length; c < u; c++) if ((o = l.charCodeAt(c)) < 48 || o > r) return NaN;
                    return parseInt(l, n)
                }
            }
            return +e
        };
    if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
        f = function (t) {
            var e = arguments.length < 1 ? 0 : t, i = this;
            return i instanceof f && (g ? l(function () {
                v.valueOf.call(i)
            }) : "Number" != s(i)) ? o(new p(y(e)), i, f) : y(e)
        };
        for (var b, w = i(8) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; w.length > x; x++) r(p, b = w[x]) && !r(f, b) && h(f, b, u(p, b));
        f.prototype = v, v.constructor = f, i(13)(n, "Number", f)
    }
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(22), s = i(107), o = i(76), a = 1..toFixed, l = Math.floor, c = [0, 0, 0, 0, 0, 0],
        u = "Number.toFixed: incorrect invocation!", h = function (t, e) {
            for (var i = -1, n = e; ++i < 6;) n += t * c[i], c[i] = n % 1e7, n = l(n / 1e7)
        }, d = function (t) {
            for (var e = 6, i = 0; --e >= 0;) i += c[e], c[e] = l(i / t), i = i % t * 1e7
        }, f = function () {
            for (var t = 6, e = ""; --t >= 0;) if ("" !== e || 0 === t || 0 !== c[t]) {
                var i = String(c[t]);
                e = "" === e ? i : e + o.call("0", 7 - i.length) + i
            }
            return e
        }, p = function (t, e, i) {
            return 0 === e ? i : e % 2 == 1 ? p(t, e - 1, i * t) : p(t * t, e / 2, i)
        };
    n(n.P + n.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !i(4)(function () {
        a.call({})
    })), "Number", {
        toFixed: function (t) {
            var e, i, n, a, l = s(this, u), c = r(t), v = "", g = "0";
            if (c < 0 || c > 20) throw RangeError(u);
            if (l != l) return "NaN";
            if (l <= -1e21 || l >= 1e21) return String(l);
            if (l < 0 && (v = "-", l = -l), l > 1e-21) if (i = (e = function (t) {
                for (var e = 0, i = t; i >= 4096;) e += 12, i /= 4096;
                for (; i >= 2;) e += 1, i /= 2;
                return e
            }(l * p(2, 69, 1)) - 69) < 0 ? l * p(2, -e, 1) : l / p(2, e, 1), i *= 4503599627370496, (e = 52 - e) > 0) {
                for (h(0, i), n = c; n >= 7;) h(1e7, 0), n -= 7;
                for (h(p(10, n, 1), 0), n = e - 1; n >= 23;) d(1 << 23), n -= 23;
                d(1 << n), h(1, 1), d(2), g = f()
            } else h(0, i), h(1 << -e, 0), g = f() + o.call("0", c);
            return g = c > 0 ? v + ((a = g.length) <= c ? "0." + o.call("0", c - a) + g : g.slice(0, a - c) + "." + g.slice(a - c)) : v + g
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(4), s = i(107), o = 1..toPrecision;
    n(n.P + n.F * (r(function () {
        return "1" !== o.call(1, void 0)
    }) || !r(function () {
        o.call({})
    })), "Number", {
        toPrecision: function (t) {
            var e = s(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? o.call(e) : o.call(e, t)
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Number", {EPSILON: Math.pow(2, -52)})
}, function (t, e, i) {
    var n = i(0), r = i(3).isFinite;
    n(n.S, "Number", {
        isFinite: function (t) {
            return "number" == typeof t && r(t)
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Number", {isInteger: i(108)})
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Number", {
        isNaN: function (t) {
            return t != t
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(108), s = Math.abs;
    n(n.S, "Number", {
        isSafeInteger: function (t) {
            return r(t) && s(t) <= 9007199254740991
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
}, function (t, e, i) {
    var n = i(0), r = i(106);
    n(n.S + n.F * (Number.parseFloat != r), "Number", {parseFloat: r})
}, function (t, e, i) {
    var n = i(0), r = i(105);
    n(n.S + n.F * (Number.parseInt != r), "Number", {parseInt: r})
}, function (t, e, i) {
    var n = i(0), r = i(109), s = Math.sqrt, o = Math.acosh;
    n(n.S + n.F * !(o && 710 == Math.floor(o(Number.MAX_VALUE)) && o(1 / 0) == 1 / 0), "Math", {
        acosh: function (t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + s(t - 1) * s(t + 1))
        }
    })
}, function (t, e, i) {
    var n = i(0), r = Math.asinh;
    n(n.S + n.F * !(r && 1 / r(0) > 0), "Math", {
        asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
        }
    })
}, function (t, e, i) {
    var n = i(0), r = Math.atanh;
    n(n.S + n.F * !(r && 1 / r(-0) < 0), "Math", {
        atanh: function (t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(77);
    n(n.S, "Math", {
        cbrt: function (t) {
            return r(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        clz32: function (t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    })
}, function (t, e, i) {
    var n = i(0), r = Math.exp;
    n(n.S, "Math", {
        cosh: function (t) {
            return (r(t = +t) + r(-t)) / 2
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(78);
    n(n.S + n.F * (r != Math.expm1), "Math", {expm1: r})
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {fround: i(110)})
}, function (t, e, i) {
    var n = i(0), r = Math.abs;
    n(n.S, "Math", {
        hypot: function (t, e) {
            for (var i, n, s = 0, o = 0, a = arguments.length, l = 0; o < a;) l < (i = r(arguments[o++])) ? (s = s * (n = l / i) * n + 1, l = i) : s += i > 0 ? (n = i / l) * n : i;
            return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(s)
        }
    })
}, function (t, e, i) {
    var n = i(0), r = Math.imul;
    n(n.S + n.F * i(4)(function () {
        return -5 != r(4294967295, 5) || 2 != r.length
    }), "Math", {
        imul: function (t, e) {
            var i = +t, n = +e, r = 65535 & i, s = 65535 & n;
            return 0 | r * s + ((65535 & i >>> 16) * s + r * (65535 & n >>> 16) << 16 >>> 0)
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        log10: function (t) {
            return Math.log(t) * Math.LOG10E
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {log1p: i(109)})
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        log2: function (t) {
            return Math.log(t) / Math.LN2
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {sign: i(77)})
}, function (t, e, i) {
    var n = i(0), r = i(78), s = Math.exp;
    n(n.S + n.F * i(4)(function () {
        return -2e-17 != !Math.sinh(-2e-17)
    }), "Math", {
        sinh: function (t) {
            return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (s(t - 1) - s(-t - 1)) * (Math.E / 2)
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(78), s = Math.exp;
    n(n.S, "Math", {
        tanh: function (t) {
            var e = r(t = +t), i = r(-t);
            return e == 1 / 0 ? 1 : i == 1 / 0 ? -1 : (e - i) / (s(t) + s(-t))
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        trunc: function (t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(36), s = String.fromCharCode, o = String.fromCodePoint;
    n(n.S + n.F * (!!o && 1 != o.length), "String", {
        fromCodePoint: function (t) {
            for (var e, i = [], n = arguments.length, o = 0; n > o;) {
                if (e = +arguments[o++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                i.push(e < 65536 ? s(e) : s(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return i.join("")
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(16), s = i(7);
    n(n.S, "String", {
        raw: function (t) {
            for (var e = r(t.raw), i = s(e.length), n = arguments.length, o = [], a = 0; i > a;) o.push(String(e[a++])), a < n && o.push(String(arguments[a]));
            return o.join("")
        }
    })
}, function (t, e, i) {
    "use strict";
    i(45)("trim", function (t) {
        return function () {
            return t(this, 3)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(57)(!0);
    i(79)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, i = this._i;
        return i >= e.length ? {value: void 0, done: !0} : (t = n(e, i), this._i += t.length, {value: t, done: !1})
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(57)(!1);
    n(n.P, "String", {
        codePointAt: function (t) {
            return r(this, t)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(7), s = i(81), o = "".endsWith;
    n(n.P + n.F * i(82)("endsWith"), "String", {
        endsWith: function (t) {
            var e = s(this, t, "endsWith"), i = arguments.length > 1 ? arguments[1] : void 0, n = r(e.length),
                a = void 0 === i ? n : Math.min(r(i), n), l = String(t);
            return o ? o.call(e, l, a) : e.slice(a - l.length, a) === l
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(81);
    n(n.P + n.F * i(82)("includes"), "String", {
        includes: function (t) {
            return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.P, "String", {repeat: i(76)})
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(7), s = i(81), o = "".startsWith;
    n(n.P + n.F * i(82)("startsWith"), "String", {
        startsWith: function (t) {
            var e = s(this, t, "startsWith"), i = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                n = String(t);
            return o ? o.call(e, n, i) : e.slice(i, i + n.length) === n
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("anchor", function (t) {
        return function (e) {
            return t(this, "a", "name", e)
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("big", function (t) {
        return function () {
            return t(this, "big", "", "")
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("blink", function (t) {
        return function () {
            return t(this, "blink", "", "")
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("bold", function (t) {
        return function () {
            return t(this, "b", "", "")
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("fixed", function (t) {
        return function () {
            return t(this, "tt", "", "")
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("fontcolor", function (t) {
        return function (e) {
            return t(this, "font", "color", e)
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("fontsize", function (t) {
        return function (e) {
            return t(this, "font", "size", e)
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("italics", function (t) {
        return function () {
            return t(this, "i", "", "")
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("link", function (t) {
        return function (e) {
            return t(this, "a", "href", e)
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("small", function (t) {
        return function () {
            return t(this, "small", "", "")
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("strike", function (t) {
        return function () {
            return t(this, "strike", "", "")
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("sub", function (t) {
        return function () {
            return t(this, "sub", "", "")
        }
    })
}, function (t, e, i) {
    "use strict";
    i(14)("sup", function (t) {
        return function () {
            return t(this, "sup", "", "")
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Date", {
        now: function () {
            return (new Date).getTime()
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(10), s = i(24);
    n(n.P + n.F * i(4)(function () {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function () {
                return 1
            }
        })
    }), "Date", {
        toJSON: function (t) {
            var e = r(this), i = s(e);
            return "number" != typeof i || isFinite(i) ? e.toISOString() : null
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(224);
    n(n.P + n.F * (Date.prototype.toISOString !== r), "Date", {toISOString: r})
}, function (t, e, i) {
    "use strict";
    var n = i(4), r = Date.prototype.getTime, s = Date.prototype.toISOString, o = function (t) {
        return t > 9 ? t : "0" + t
    };
    t.exports = n(function () {
        return "0385-07-25T07:06:39.999Z" != s.call(new Date(-5e13 - 1))
    }) || !n(function () {
        s.call(new Date(NaN))
    }) ? function () {
        if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
        var t = this, e = t.getUTCFullYear(), i = t.getUTCMilliseconds(), n = e < 0 ? "-" : e > 9999 ? "+" : "";
        return n + ("00000" + Math.abs(e)).slice(n ? -6 : -4) + "-" + o(t.getUTCMonth() + 1) + "-" + o(t.getUTCDate()) + "T" + o(t.getUTCHours()) + ":" + o(t.getUTCMinutes()) + ":" + o(t.getUTCSeconds()) + "." + (i > 99 ? i : "0" + o(i)) + "Z"
    } : s
}, function (t, e, i) {
    var n = Date.prototype, r = n.toString, s = n.getTime;
    new Date(NaN) + "" != "Invalid Date" && i(13)(n, "toString", function () {
        var t = s.call(this);
        return t == t ? r.call(this) : "Invalid Date"
    })
}, function (t, e, i) {
    var n = i(6)("toPrimitive"), r = Date.prototype;
    n in r || i(12)(r, n, i(227))
}, function (t, e, i) {
    "use strict";
    var n = i(1), r = i(24);
    t.exports = function (t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return r(n(this), "number" != t)
    }
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Array", {isArray: i(56)})
}, function (t, e, i) {
    "use strict";
    var n = i(20), r = i(0), s = i(10), o = i(111), a = i(83), l = i(7), c = i(84), u = i(85);
    r(r.S + r.F * !i(59)(function (t) {
        Array.from(t)
    }), "Array", {
        from: function (t) {
            var e, i, r, h, d = s(t), f = "function" == typeof this ? this : Array, p = arguments.length,
                v = p > 1 ? arguments[1] : void 0, g = void 0 !== v, m = 0, y = u(d);
            if (g && (v = n(v, p > 2 ? arguments[2] : void 0, 2)), null == y || f == Array && a(y)) for (i = new f(e = l(d.length)); e > m; m++) c(i, m, g ? v(d[m], m) : d[m]); else for (h = y.call(d), i = new f; !(r = h.next()).done; m++) c(i, m, g ? o(h, v, [r.value, m], !0) : r.value);
            return i.length = m, i
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(84);
    n(n.S + n.F * i(4)(function () {
        function t() {
        }

        return !(Array.of.call(t) instanceof t)
    }), "Array", {
        of: function () {
            for (var t = 0, e = arguments.length, i = new ("function" == typeof this ? this : Array)(e); e > t;) r(i, t, arguments[t++]);
            return i.length = e, i
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(16), s = [].join;
    n(n.P + n.F * (i(49) != Object || !i(23)(s)), "Array", {
        join: function (t) {
            return s.call(r(this), void 0 === t ? "," : t)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(72), s = i(21), o = i(36), a = i(7), l = [].slice;
    n(n.P + n.F * i(4)(function () {
        r && l.call(r)
    }), "Array", {
        slice: function (t, e) {
            var i = a(this.length), n = s(this);
            if (e = void 0 === e ? i : e, "Array" == n) return l.call(this, t, e);
            for (var r = o(t, i), c = o(e, i), u = a(c - r), h = new Array(u), d = 0; d < u; d++) h[d] = "String" == n ? this.charAt(r + d) : this[r + d];
            return h
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(11), s = i(10), o = i(4), a = [].sort, l = [1, 2, 3];
    n(n.P + n.F * (o(function () {
        l.sort(void 0)
    }) || !o(function () {
        l.sort(null)
    }) || !i(23)(a)), "Array", {
        sort: function (t) {
            return void 0 === t ? a.call(s(this)) : a.call(s(this), r(t))
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(27)(0), s = i(23)([].forEach, !0);
    n(n.P + n.F * !s, "Array", {
        forEach: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, i) {
    var n = i(5), r = i(56), s = i(6)("species");
    t.exports = function (t) {
        var e;
        return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), n(e) && null === (e = e[s]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(27)(1);
    n(n.P + n.F * !i(23)([].map, !0), "Array", {
        map: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(27)(2);
    n(n.P + n.F * !i(23)([].filter, !0), "Array", {
        filter: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(27)(3);
    n(n.P + n.F * !i(23)([].some, !0), "Array", {
        some: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(27)(4);
    n(n.P + n.F * !i(23)([].every, !0), "Array", {
        every: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(112);
    n(n.P + n.F * !i(23)([].reduce, !0), "Array", {
        reduce: function (t) {
            return r(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(112);
    n(n.P + n.F * !i(23)([].reduceRight, !0), "Array", {
        reduceRight: function (t) {
            return r(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(54)(!1), s = [].indexOf, o = !!s && 1 / [1].indexOf(1, -0) < 0;
    n(n.P + n.F * (o || !i(23)(s)), "Array", {
        indexOf: function (t) {
            return o ? s.apply(this, arguments) || 0 : r(this, t, arguments[1])
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(16), s = i(22), o = i(7), a = [].lastIndexOf, l = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    n(n.P + n.F * (l || !i(23)(a)), "Array", {
        lastIndexOf: function (t) {
            if (l) return a.apply(this, arguments) || 0;
            var e = r(this), i = o(e.length), n = i - 1;
            for (arguments.length > 1 && (n = Math.min(n, s(arguments[1]))), n < 0 && (n = i + n); n >= 0; n--) if (n in e && e[n] === t) return n || 0;
            return -1
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.P, "Array", {copyWithin: i(113)}), i(32)("copyWithin")
}, function (t, e, i) {
    var n = i(0);
    n(n.P, "Array", {fill: i(87)}), i(32)("fill")
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(27)(5), s = !0;
    "find" in [] && Array(1).find(function () {
        s = !1
    }), n(n.P + n.F * s, "Array", {
        find: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), i(32)("find")
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(27)(6), s = "findIndex", o = !0;
    s in [] && Array(1)[s](function () {
        o = !1
    }), n(n.P + n.F * o, "Array", {
        findIndex: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), i(32)(s)
}, function (t, e, i) {
    i(39)("Array")
}, function (t, e, i) {
    var n = i(3), r = i(75), s = i(9).f, o = i(38).f, a = i(58), l = i(51), c = n.RegExp, u = c, h = c.prototype,
        d = /a/g, f = /a/g, p = new c(d) !== d;
    if (i(8) && (!p || i(4)(function () {
        return f[i(6)("match")] = !1, c(d) != d || c(f) == f || "/a/i" != c(d, "i")
    }))) {
        c = function (t, e) {
            var i = this instanceof c, n = a(t), s = void 0 === e;
            return !i && n && t.constructor === c && s ? t : r(p ? new u(n && !s ? t.source : t, e) : u((n = t instanceof c) ? t.source : t, n && s ? l.call(t) : e), i ? this : h, c)
        };
        for (var v = function (t) {
            t in c || s(c, t, {
                configurable: !0, get: function () {
                    return u[t]
                }, set: function (e) {
                    u[t] = e
                }
            })
        }, g = o(u), m = 0; g.length > m;) v(g[m++]);
        h.constructor = c, c.prototype = h, i(13)(n, "RegExp", c)
    }
    i(39)("RegExp")
}, function (t, e, i) {
    "use strict";
    i(116);
    var n = i(1), r = i(51), s = i(8), o = /./.toString, a = function (t) {
        i(13)(RegExp.prototype, "toString", t, !0)
    };
    i(4)(function () {
        return "/a/b" != o.call({source: "a", flags: "b"})
    }) ? a(function () {
        var t = n(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !s && t instanceof RegExp ? r.call(t) : void 0)
    }) : "toString" != o.name && a(function () {
        return o.call(this)
    })
}, function (t, e, i) {
    "use strict";
    var n = i(1), r = i(7), s = i(90), o = i(60);
    i(61)("match", 1, function (t, e, i, a) {
        return [function (i) {
            var n = t(this), r = null == i ? void 0 : i[e];
            return void 0 !== r ? r.call(i, n) : new RegExp(i)[e](String(n))
        }, function (t) {
            var e = a(i, t, this);
            if (e.done) return e.value;
            var l = n(t), c = String(this);
            if (!l.global) return o(l, c);
            var u = l.unicode;
            l.lastIndex = 0;
            for (var h, d = [], f = 0; null !== (h = o(l, c));) {
                var p = String(h[0]);
                d[f] = p, "" === p && (l.lastIndex = s(c, r(l.lastIndex), u)), f++
            }
            return 0 === f ? null : d
        }]
    })
}, function (t, e, i) {
    "use strict";
    var n = i(1), r = i(10), s = i(7), o = i(22), a = i(90), l = i(60), c = Math.max, u = Math.min, h = Math.floor,
        d = /\$([$&`']|\d\d?|<[^>]*>)/g, f = /\$([$&`']|\d\d?)/g;
    i(61)("replace", 2, function (t, e, i, p) {
        return [function (n, r) {
            var s = t(this), o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, s, r) : i.call(String(s), n, r)
        }, function (t, e) {
            var r = p(i, t, this, e);
            if (r.done) return r.value;
            var h = n(t), d = String(this), f = "function" == typeof e;
            f || (e = String(e));
            var g = h.global;
            if (g) {
                var m = h.unicode;
                h.lastIndex = 0
            }
            for (var y = []; ;) {
                var b = l(h, d);
                if (null === b) break;
                if (y.push(b), !g) break;
                "" === String(b[0]) && (h.lastIndex = a(d, s(h.lastIndex), m))
            }
            for (var w, x = "", T = 0, C = 0; C < y.length; C++) {
                b = y[C];
                for (var E = String(b[0]), S = c(u(o(b.index), d.length), 0), _ = [], k = 1; k < b.length; k++) _.push(void 0 === (w = b[k]) ? w : String(w));
                var M = b.groups;
                if (f) {
                    var P = [E].concat(_, S, d);
                    void 0 !== M && P.push(M);
                    var L = String(e.apply(void 0, P))
                } else L = v(E, d, S, _, M, e);
                S >= T && (x += d.slice(T, S) + L, T = S + E.length)
            }
            return x + d.slice(T)
        }];

        function v(t, e, n, s, o, a) {
            var l = n + t.length, c = s.length, u = f;
            return void 0 !== o && (o = r(o), u = d), i.call(a, u, function (i, r) {
                var a;
                switch (r.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return t;
                    case"`":
                        return e.slice(0, n);
                    case"'":
                        return e.slice(l);
                    case"<":
                        a = o[r.slice(1, -1)];
                        break;
                    default:
                        var u = +r;
                        if (0 === u) return r;
                        if (u > c) {
                            var d = h(u / 10);
                            return 0 === d ? r : d <= c ? void 0 === s[d - 1] ? r.charAt(1) : s[d - 1] + r.charAt(1) : r
                        }
                        a = s[u - 1]
                }
                return void 0 === a ? "" : a
            })
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(1), r = i(102), s = i(60);
    i(61)("search", 1, function (t, e, i, o) {
        return [function (i) {
            var n = t(this), r = null == i ? void 0 : i[e];
            return void 0 !== r ? r.call(i, n) : new RegExp(i)[e](String(n))
        }, function (t) {
            var e = o(i, t, this);
            if (e.done) return e.value;
            var a = n(t), l = String(this), c = a.lastIndex;
            r(c, 0) || (a.lastIndex = 0);
            var u = s(a, l);
            return r(a.lastIndex, c) || (a.lastIndex = c), null === u ? -1 : u.index
        }]
    })
}, function (t, e, i) {
    "use strict";
    var n = i(58), r = i(1), s = i(52), o = i(90), a = i(7), l = i(60), c = i(89), u = Math.min, h = [].push,
        d = !!function () {
            try {
                return new RegExp("x", "y")
            } catch (t) {
            }
        }();
    i(61)("split", 2, function (t, e, i, f) {
        var p = i;
        return "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? p = function (t, e) {
            var r = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!n(t)) return i.call(r, t, e);
            for (var s, o, a, l = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), d = 0, f = void 0 === e ? 4294967295 : e >>> 0, p = new RegExp(t.source, u + "g"); (s = c.call(p, r)) && !((o = p.lastIndex) > d && (l.push(r.slice(d, s.index)), s.length > 1 && s.index < r.length && h.apply(l, s.slice(1)), a = s[0].length, d = o, l.length >= f));) p.lastIndex === s.index && p.lastIndex++;
            return d === r.length ? !a && p.test("") || l.push("") : l.push(r.slice(d)), l.length > f ? l.slice(0, f) : l
        } : "0".split(void 0, 0).length && (p = function (t, e) {
            return void 0 === t && 0 === e ? [] : i.call(this, t, e)
        }), [function (i, n) {
            var r = t(this), s = null == i ? void 0 : i[e];
            return void 0 !== s ? s.call(i, r, n) : p.call(String(r), i, n)
        }, function (t, e) {
            var n = f(p, t, this, e, p !== i);
            if (n.done) return n.value;
            var c = r(t), h = String(this), v = s(c, RegExp), g = c.unicode,
                m = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (d ? "y" : "g"),
                y = new v(d ? c : "^(?:" + c.source + ")", m), b = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === b) return [];
            if (0 === h.length) return null === l(y, h) ? [h] : [];
            for (var w = 0, x = 0, T = []; x < h.length;) {
                y.lastIndex = d ? x : 0;
                var C, E = l(y, d ? h : h.slice(x));
                if (null === E || (C = u(a(y.lastIndex + (d ? 0 : x)), h.length)) === w) x = o(h, x, g); else {
                    if (T.push(h.slice(w, x)), T.length === b) return T;
                    for (var S = 1; S <= E.length - 1; S++) if (T.push(E[S]), T.length === b) return T;
                    x = w = C
                }
            }
            return T.push(h.slice(w)), T
        }]
    })
}, function (t, e, i) {
    "use strict";
    var n, r, s, o, a = i(31), l = i(3), c = i(20), u = i(44), h = i(0), d = i(5), f = i(11), p = i(40), v = i(41),
        g = i(52), m = i(91).set, y = i(92)(), b = i(93), w = i(117), x = i(62), T = i(118), C = l.TypeError,
        E = l.process, S = E && E.versions, _ = S && S.v8 || "", k = l.Promise, M = "process" == u(E), P = function () {
        }, L = r = b.f, D = !!function () {
            try {
                var t = k.resolve(1), e = (t.constructor = {})[i(6)("species")] = function (t) {
                    t(P, P)
                };
                return (M || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof e && 0 !== _.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
            } catch (t) {
            }
        }(), A = function (t) {
            var e;
            return !(!d(t) || "function" != typeof (e = t.then)) && e
        }, I = function (t, e) {
            if (!t._n) {
                t._n = !0;
                var i = t._c;
                y(function () {
                    for (var n = t._v, r = 1 == t._s, s = 0, o = function (e) {
                        var i, s, o, a = r ? e.ok : e.fail, l = e.resolve, c = e.reject, u = e.domain;
                        try {
                            a ? (r || (2 == t._h && z(t), t._h = 1), !0 === a ? i = n : (u && u.enter(), i = a(n), u && (u.exit(), o = !0)), i === e.promise ? c(C("Promise-chain cycle")) : (s = A(i)) ? s.call(i, l, c) : l(i)) : c(n)
                        } catch (t) {
                            u && !o && u.exit(), c(t)
                        }
                    }; i.length > s;) o(i[s++]);
                    t._c = [], t._n = !1, e && !t._h && $(t)
                })
            }
        }, $ = function (t) {
            m.call(l, function () {
                var e, i, n, r = t._v, s = O(t);
                if (s && (e = w(function () {
                    M ? E.emit("unhandledRejection", r, t) : (i = l.onunhandledrejection) ? i({
                        promise: t,
                        reason: r
                    }) : (n = l.console) && n.error && n.error("Unhandled promise rejection", r)
                }), t._h = M || O(t) ? 2 : 1), t._a = void 0, s && e.e) throw e.v
            })
        }, O = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        }, z = function (t) {
            m.call(l, function () {
                var e;
                M ? E.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({promise: t, reason: t._v})
            })
        }, N = function (t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
        }, j = function (t) {
            var e, i = this;
            if (!i._d) {
                i._d = !0, i = i._w || i;
                try {
                    if (i === t) throw C("Promise can't be resolved itself");
                    (e = A(t)) ? y(function () {
                        var n = {_w: i, _d: !1};
                        try {
                            e.call(t, c(j, n, 1), c(N, n, 1))
                        } catch (t) {
                            N.call(n, t)
                        }
                    }) : (i._v = t, i._s = 1, I(i, !1))
                } catch (t) {
                    N.call({_w: i, _d: !1}, t)
                }
            }
        };
    D || (k = function (t) {
        p(this, k, "Promise", "_h"), f(t), n.call(this);
        try {
            t(c(j, this, 1), c(N, this, 1))
        } catch (t) {
            N.call(this, t)
        }
    }, (n = function (t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = i(42)(k.prototype, {
        then: function (t, e) {
            var i = L(g(this, k));
            return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = M ? E.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && I(this, !1), i.promise
        }, catch: function (t) {
            return this.then(void 0, t)
        }
    }), s = function () {
        var t = new n;
        this.promise = t, this.resolve = c(j, t, 1), this.reject = c(N, t, 1)
    }, b.f = L = function (t) {
        return t === k || t === o ? new s(t) : r(t)
    }), h(h.G + h.W + h.F * !D, {Promise: k}), i(43)(k, "Promise"), i(39)("Promise"), o = i(19).Promise, h(h.S + h.F * !D, "Promise", {
        reject: function (t) {
            var e = L(this);
            return (0, e.reject)(t), e.promise
        }
    }), h(h.S + h.F * (a || !D), "Promise", {
        resolve: function (t) {
            return T(a && this === o ? k : this, t)
        }
    }), h(h.S + h.F * !(D && i(59)(function (t) {
        k.all(t).catch(P)
    })), "Promise", {
        all: function (t) {
            var e = this, i = L(e), n = i.resolve, r = i.reject, s = w(function () {
                var i = [], s = 0, o = 1;
                v(t, !1, function (t) {
                    var a = s++, l = !1;
                    i.push(void 0), o++, e.resolve(t).then(function (t) {
                        l || (l = !0, i[a] = t, --o || n(i))
                    }, r)
                }), --o || n(i)
            });
            return s.e && r(s.v), i.promise
        }, race: function (t) {
            var e = this, i = L(e), n = i.reject, r = w(function () {
                v(t, !1, function (t) {
                    e.resolve(t).then(i.resolve, n)
                })
            });
            return r.e && n(r.v), i.promise
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(123), r = i(47);
    i(63)("WeakSet", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (t) {
            return n.def(r(this, "WeakSet"), t, !0)
        }
    }, n, !1, !0)
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(64), s = i(94), o = i(1), a = i(36), l = i(7), c = i(5), u = i(3).ArrayBuffer, h = i(52),
        d = s.ArrayBuffer, f = s.DataView, p = r.ABV && u.isView, v = d.prototype.slice, g = r.VIEW;
    n(n.G + n.W + n.F * (u !== d), {ArrayBuffer: d}), n(n.S + n.F * !r.CONSTR, "ArrayBuffer", {
        isView: function (t) {
            return p && p(t) || c(t) && g in t
        }
    }), n(n.P + n.U + n.F * i(4)(function () {
        return !new d(2).slice(1, void 0).byteLength
    }), "ArrayBuffer", {
        slice: function (t, e) {
            if (void 0 !== v && void 0 === e) return v.call(o(this), t);
            for (var i = o(this).byteLength, n = a(t, i), r = a(void 0 === e ? i : e, i), s = new (h(this, d))(l(r - n)), c = new f(this), u = new f(s), p = 0; n < r;) u.setUint8(p++, c.getUint8(n++));
            return s
        }
    }), i(39)("ArrayBuffer")
}, function (t, e, i) {
    var n = i(0);
    n(n.G + n.W + n.F * !i(64).ABV, {DataView: i(94).DataView})
}, function (t, e, i) {
    i(28)("Int8", 1, function (t) {
        return function (e, i, n) {
            return t(this, e, i, n)
        }
    })
}, function (t, e, i) {
    i(28)("Uint8", 1, function (t) {
        return function (e, i, n) {
            return t(this, e, i, n)
        }
    })
}, function (t, e, i) {
    i(28)("Uint8", 1, function (t) {
        return function (e, i, n) {
            return t(this, e, i, n)
        }
    }, !0)
}, function (t, e, i) {
    i(28)("Int16", 2, function (t) {
        return function (e, i, n) {
            return t(this, e, i, n)
        }
    })
}, function (t, e, i) {
    i(28)("Uint16", 2, function (t) {
        return function (e, i, n) {
            return t(this, e, i, n)
        }
    })
}, function (t, e, i) {
    i(28)("Int32", 4, function (t) {
        return function (e, i, n) {
            return t(this, e, i, n)
        }
    })
}, function (t, e, i) {
    i(28)("Uint32", 4, function (t) {
        return function (e, i, n) {
            return t(this, e, i, n)
        }
    })
}, function (t, e, i) {
    i(28)("Float32", 4, function (t) {
        return function (e, i, n) {
            return t(this, e, i, n)
        }
    })
}, function (t, e, i) {
    i(28)("Float64", 8, function (t) {
        return function (e, i, n) {
            return t(this, e, i, n)
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(11), s = i(1), o = (i(3).Reflect || {}).apply, a = Function.apply;
    n(n.S + n.F * !i(4)(function () {
        o(function () {
        })
    }), "Reflect", {
        apply: function (t, e, i) {
            var n = r(t), l = s(i);
            return o ? o(n, e, l) : a.call(n, e, l)
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(37), s = i(11), o = i(1), a = i(5), l = i(4), c = i(103), u = (i(3).Reflect || {}).construct,
        h = l(function () {
            function t() {
            }

            return !(u(function () {
            }, [], t) instanceof t)
        }), d = !l(function () {
            u(function () {
            })
        });
    n(n.S + n.F * (h || d), "Reflect", {
        construct: function (t, e) {
            s(t), o(e);
            var i = arguments.length < 3 ? t : s(arguments[2]);
            if (d && !h) return u(t, e, i);
            if (t == i) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var n = [null];
                return n.push.apply(n, e), new (c.apply(t, n))
            }
            var l = i.prototype, f = r(a(l) ? l : Object.prototype), p = Function.apply.call(t, f, e);
            return a(p) ? p : f
        }
    })
}, function (t, e, i) {
    var n = i(9), r = i(0), s = i(1), o = i(24);
    r(r.S + r.F * i(4)(function () {
        Reflect.defineProperty(n.f({}, 1, {value: 1}), 1, {value: 2})
    }), "Reflect", {
        defineProperty: function (t, e, i) {
            s(t), e = o(e, !0), s(i);
            try {
                return n.f(t, e, i), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(17).f, s = i(1);
    n(n.S, "Reflect", {
        deleteProperty: function (t, e) {
            var i = r(s(t), e);
            return !(i && !i.configurable) && delete t[e]
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(1), s = function (t) {
        this._t = r(t), this._i = 0;
        var e, i = this._k = [];
        for (e in t) i.push(e)
    };
    i(80)(s, "Object", function () {
        var t, e = this._k;
        do {
            if (this._i >= e.length) return {value: void 0, done: !0}
        } while (!((t = e[this._i++]) in this._t));
        return {value: t, done: !1}
    }), n(n.S, "Reflect", {
        enumerate: function (t) {
            return new s(t)
        }
    })
}, function (t, e, i) {
    var n = i(17), r = i(18), s = i(15), o = i(0), a = i(5), l = i(1);
    o(o.S, "Reflect", {
        get: function t(e, i) {
            var o, c, u = arguments.length < 3 ? e : arguments[2];
            return l(e) === u ? e[i] : (o = n.f(e, i)) ? s(o, "value") ? o.value : void 0 !== o.get ? o.get.call(u) : void 0 : a(c = r(e)) ? t(c, i, u) : void 0
        }
    })
}, function (t, e, i) {
    var n = i(17), r = i(0), s = i(1);
    r(r.S, "Reflect", {
        getOwnPropertyDescriptor: function (t, e) {
            return n.f(s(t), e)
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(18), s = i(1);
    n(n.S, "Reflect", {
        getPrototypeOf: function (t) {
            return r(s(t))
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Reflect", {
        has: function (t, e) {
            return e in t
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(1), s = Object.isExtensible;
    n(n.S, "Reflect", {
        isExtensible: function (t) {
            return r(t), !s || s(t)
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Reflect", {ownKeys: i(125)})
}, function (t, e, i) {
    var n = i(0), r = i(1), s = Object.preventExtensions;
    n(n.S, "Reflect", {
        preventExtensions: function (t) {
            r(t);
            try {
                return s && s(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (t, e, i) {
    var n = i(9), r = i(17), s = i(18), o = i(15), a = i(0), l = i(33), c = i(1), u = i(5);
    a(a.S, "Reflect", {
        set: function t(e, i, a) {
            var h, d, f = arguments.length < 4 ? e : arguments[3], p = r.f(c(e), i);
            if (!p) {
                if (u(d = s(e))) return t(d, i, a, f);
                p = l(0)
            }
            if (o(p, "value")) {
                if (!1 === p.writable || !u(f)) return !1;
                if (h = r.f(f, i)) {
                    if (h.get || h.set || !1 === h.writable) return !1;
                    h.value = a, n.f(f, i, h)
                } else n.f(f, i, l(0, a));
                return !0
            }
            return void 0 !== p.set && (p.set.call(f, a), !0)
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(73);
    r && n(n.S, "Reflect", {
        setPrototypeOf: function (t, e) {
            r.check(t, e);
            try {
                return r.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(54)(!0);
    n(n.P, "Array", {
        includes: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), i(32)("includes")
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(126), s = i(10), o = i(7), a = i(11), l = i(86);
    n(n.P, "Array", {
        flatMap: function (t) {
            var e, i, n = s(this);
            return a(t), e = o(n.length), i = l(n, 0), r(i, n, n, e, 0, 1, t, arguments[1]), i
        }
    }), i(32)("flatMap")
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(126), s = i(10), o = i(7), a = i(22), l = i(86);
    n(n.P, "Array", {
        flatten: function () {
            var t = arguments[0], e = s(this), i = o(e.length), n = l(e, 0);
            return r(n, e, e, i, 0, void 0 === t ? 1 : a(t)), n
        }
    }), i(32)("flatten")
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(57)(!0);
    n(n.P, "String", {
        at: function (t) {
            return r(this, t)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(127), s = i(62);
    n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(s), "String", {
        padStart: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(127), s = i(62);
    n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(s), "String", {
        padEnd: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function (t, e, i) {
    "use strict";
    i(45)("trimLeft", function (t) {
        return function () {
            return t(this, 1)
        }
    }, "trimStart")
}, function (t, e, i) {
    "use strict";
    i(45)("trimRight", function (t) {
        return function () {
            return t(this, 2)
        }
    }, "trimEnd")
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(25), s = i(7), o = i(58), a = i(51), l = RegExp.prototype, c = function (t, e) {
        this._r = t, this._s = e
    };
    i(80)(c, "RegExp String", function () {
        var t = this._r.exec(this._s);
        return {value: t, done: null === t}
    }), n(n.P, "String", {
        matchAll: function (t) {
            if (r(this), !o(t)) throw TypeError(t + " is not a regexp!");
            var e = String(this), i = "flags" in l ? String(t.flags) : a.call(t),
                n = new RegExp(t.source, ~i.indexOf("g") ? i : "g" + i);
            return n.lastIndex = s(t.lastIndex), new c(n, e)
        }
    })
}, function (t, e, i) {
    i(69)("asyncIterator")
}, function (t, e, i) {
    i(69)("observable")
}, function (t, e, i) {
    var n = i(0), r = i(125), s = i(16), o = i(17), a = i(84);
    n(n.S, "Object", {
        getOwnPropertyDescriptors: function (t) {
            for (var e, i, n = s(t), l = o.f, c = r(n), u = {}, h = 0; c.length > h;) void 0 !== (i = l(n, e = c[h++])) && a(u, e, i);
            return u
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(128)(!1);
    n(n.S, "Object", {
        values: function (t) {
            return r(t)
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(128)(!0);
    n(n.S, "Object", {
        entries: function (t) {
            return r(t)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(10), s = i(11), o = i(9);
    i(8) && n(n.P + i(65), "Object", {
        __defineGetter__: function (t, e) {
            o.f(r(this), t, {get: s(e), enumerable: !0, configurable: !0})
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(10), s = i(11), o = i(9);
    i(8) && n(n.P + i(65), "Object", {
        __defineSetter__: function (t, e) {
            o.f(r(this), t, {set: s(e), enumerable: !0, configurable: !0})
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(10), s = i(24), o = i(18), a = i(17).f;
    i(8) && n(n.P + i(65), "Object", {
        __lookupGetter__: function (t) {
            var e, i = r(this), n = s(t, !0);
            do {
                if (e = a(i, n)) return e.get
            } while (i = o(i))
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(10), s = i(24), o = i(18), a = i(17).f;
    i(8) && n(n.P + i(65), "Object", {
        __lookupSetter__: function (t) {
            var e, i = r(this), n = s(t, !0);
            do {
                if (e = a(i, n)) return e.set
            } while (i = o(i))
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.P + n.R, "Map", {toJSON: i(129)("Map")})
}, function (t, e, i) {
    var n = i(0);
    n(n.P + n.R, "Set", {toJSON: i(129)("Set")})
}, function (t, e, i) {
    i(66)("Map")
}, function (t, e, i) {
    i(66)("Set")
}, function (t, e, i) {
    i(66)("WeakMap")
}, function (t, e, i) {
    i(66)("WeakSet")
}, function (t, e, i) {
    i(67)("Map")
}, function (t, e, i) {
    i(67)("Set")
}, function (t, e, i) {
    i(67)("WeakMap")
}, function (t, e, i) {
    i(67)("WeakSet")
}, function (t, e, i) {
    var n = i(0);
    n(n.G, {global: i(3)})
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "System", {global: i(3)})
}, function (t, e, i) {
    var n = i(0), r = i(21);
    n(n.S, "Error", {
        isError: function (t) {
            return "Error" === r(t)
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        clamp: function (t, e, i) {
            return Math.min(i, Math.max(e, t))
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {DEG_PER_RAD: Math.PI / 180})
}, function (t, e, i) {
    var n = i(0), r = 180 / Math.PI;
    n(n.S, "Math", {
        degrees: function (t) {
            return t * r
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(131), s = i(110);
    n(n.S, "Math", {
        fscale: function (t, e, i, n, o) {
            return s(r(t, e, i, n, o))
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        iaddh: function (t, e, i, n) {
            var r = t >>> 0, s = i >>> 0;
            return (e >>> 0) + (n >>> 0) + ((r & s | (r | s) & ~(r + s >>> 0)) >>> 31) | 0
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        isubh: function (t, e, i, n) {
            var r = t >>> 0, s = i >>> 0;
            return (e >>> 0) - (n >>> 0) - ((~r & s | ~(r ^ s) & r - s >>> 0) >>> 31) | 0
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        imulh: function (t, e) {
            var i = +t, n = +e, r = 65535 & i, s = 65535 & n, o = i >> 16, a = n >> 16,
                l = (o * s >>> 0) + (r * s >>> 16);
            return o * a + (l >> 16) + ((r * a >>> 0) + (65535 & l) >> 16)
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {RAD_PER_DEG: 180 / Math.PI})
}, function (t, e, i) {
    var n = i(0), r = Math.PI / 180;
    n(n.S, "Math", {
        radians: function (t) {
            return t * r
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {scale: i(131)})
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        umulh: function (t, e) {
            var i = +t, n = +e, r = 65535 & i, s = 65535 & n, o = i >>> 16, a = n >>> 16,
                l = (o * s >>> 0) + (r * s >>> 16);
            return o * a + (l >>> 16) + ((r * a >>> 0) + (65535 & l) >>> 16)
        }
    })
}, function (t, e, i) {
    var n = i(0);
    n(n.S, "Math", {
        signbit: function (t) {
            return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(19), s = i(3), o = i(52), a = i(118);
    n(n.P + n.R, "Promise", {
        finally: function (t) {
            var e = o(this, r.Promise || s.Promise), i = "function" == typeof t;
            return this.then(i ? function (i) {
                return a(e, t()).then(function () {
                    return i
                })
            } : t, i ? function (i) {
                return a(e, t()).then(function () {
                    throw i
                })
            } : t)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(93), s = i(117);
    n(n.S, "Promise", {
        try: function (t) {
            var e = r.f(this), i = s(t);
            return (i.e ? e.reject : e.resolve)(i.v), e.promise
        }
    })
}, function (t, e, i) {
    var n = i(29), r = i(1), s = n.key, o = n.set;
    n.exp({
        defineMetadata: function (t, e, i, n) {
            o(t, e, r(i), s(n))
        }
    })
}, function (t, e, i) {
    var n = i(29), r = i(1), s = n.key, o = n.map, a = n.store;
    n.exp({
        deleteMetadata: function (t, e) {
            var i = arguments.length < 3 ? void 0 : s(arguments[2]), n = o(r(e), i, !1);
            if (void 0 === n || !n.delete(t)) return !1;
            if (n.size) return !0;
            var l = a.get(e);
            return l.delete(i), !!l.size || a.delete(e)
        }
    })
}, function (t, e, i) {
    var n = i(29), r = i(1), s = i(18), o = n.has, a = n.get, l = n.key, c = function (t, e, i) {
        if (o(t, e, i)) return a(t, e, i);
        var n = s(e);
        return null !== n ? c(t, n, i) : void 0
    };
    n.exp({
        getMetadata: function (t, e) {
            return c(t, r(e), arguments.length < 3 ? void 0 : l(arguments[2]))
        }
    })
}, function (t, e, i) {
    var n = i(121), r = i(130), s = i(29), o = i(1), a = i(18), l = s.keys, c = s.key, u = function (t, e) {
        var i = l(t, e), s = a(t);
        if (null === s) return i;
        var o = u(s, e);
        return o.length ? i.length ? r(new n(i.concat(o))) : o : i
    };
    s.exp({
        getMetadataKeys: function (t) {
            return u(o(t), arguments.length < 2 ? void 0 : c(arguments[1]))
        }
    })
}, function (t, e, i) {
    var n = i(29), r = i(1), s = n.get, o = n.key;
    n.exp({
        getOwnMetadata: function (t, e) {
            return s(t, r(e), arguments.length < 3 ? void 0 : o(arguments[2]))
        }
    })
}, function (t, e, i) {
    var n = i(29), r = i(1), s = n.keys, o = n.key;
    n.exp({
        getOwnMetadataKeys: function (t) {
            return s(r(t), arguments.length < 2 ? void 0 : o(arguments[1]))
        }
    })
}, function (t, e, i) {
    var n = i(29), r = i(1), s = i(18), o = n.has, a = n.key, l = function (t, e, i) {
        if (o(t, e, i)) return !0;
        var n = s(e);
        return null !== n && l(t, n, i)
    };
    n.exp({
        hasMetadata: function (t, e) {
            return l(t, r(e), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}, function (t, e, i) {
    var n = i(29), r = i(1), s = n.has, o = n.key;
    n.exp({
        hasOwnMetadata: function (t, e) {
            return s(t, r(e), arguments.length < 3 ? void 0 : o(arguments[2]))
        }
    })
}, function (t, e, i) {
    var n = i(29), r = i(1), s = i(11), o = n.key, a = n.set;
    n.exp({
        metadata: function (t, e) {
            return function (i, n) {
                a(t, e, (void 0 !== n ? r : s)(i), o(n))
            }
        }
    })
}, function (t, e, i) {
    var n = i(0), r = i(92)(), s = i(3).process, o = "process" == i(21)(s);
    n(n.G, {
        asap: function (t) {
            var e = o && s.domain;
            r(e ? e.bind(t) : t)
        }
    })
}, function (t, e, i) {
    "use strict";
    var n = i(0), r = i(3), s = i(19), o = i(92)(), a = i(6)("observable"), l = i(11), c = i(1), u = i(40), h = i(42),
        d = i(12), f = i(41), p = f.RETURN, v = function (t) {
            return null == t ? void 0 : l(t)
        }, g = function (t) {
            var e = t._c;
            e && (t._c = void 0, e())
        }, m = function (t) {
            return void 0 === t._o
        }, y = function (t) {
            m(t) || (t._o = void 0, g(t))
        }, b = function (t, e) {
            c(t), this._c = void 0, this._o = t, t = new w(this);
            try {
                var i = e(t), n = i;
                null != i && ("function" == typeof i.unsubscribe ? i = function () {
                    n.unsubscribe()
                } : l(i), this._c = i)
            } catch (e) {
                return void t.error(e)
            }
            m(this) && g(this)
        };
    b.prototype = h({}, {
        unsubscribe: function () {
            y(this)
        }
    });
    var w = function (t) {
        this._s = t
    };
    w.prototype = h({}, {
        next: function (t) {
            var e = this._s;
            if (!m(e)) {
                var i = e._o;
                try {
                    var n = v(i.next);
                    if (n) return n.call(i, t)
                } catch (t) {
                    try {
                        y(e)
                    } finally {
                        throw t
                    }
                }
            }
        }, error: function (t) {
            var e = this._s;
            if (m(e)) throw t;
            var i = e._o;
            e._o = void 0;
            try {
                var n = v(i.error);
                if (!n) throw t;
                t = n.call(i, t)
            } catch (t) {
                try {
                    g(e)
                } finally {
                    throw t
                }
            }
            return g(e), t
        }, complete: function (t) {
            var e = this._s;
            if (!m(e)) {
                var i = e._o;
                e._o = void 0;
                try {
                    var n = v(i.complete);
                    t = n ? n.call(i, t) : void 0
                } catch (t) {
                    try {
                        g(e)
                    } finally {
                        throw t
                    }
                }
                return g(e), t
            }
        }
    });
    var x = function (t) {
        u(this, x, "Observable", "_f")._f = l(t)
    };
    h(x.prototype, {
        subscribe: function (t) {
            return new b(t, this._f)
        }, forEach: function (t) {
            var e = this;
            return new (s.Promise || r.Promise)(function (i, n) {
                l(t);
                var r = e.subscribe({
                    next: function (e) {
                        try {
                            return t(e)
                        } catch (t) {
                            n(t), r.unsubscribe()
                        }
                    }, error: n, complete: i
                })
            })
        }
    }), h(x, {
        from: function (t) {
            var e = "function" == typeof this ? this : x, i = v(c(t)[a]);
            if (i) {
                var n = c(i.call(t));
                return n.constructor === e ? n : new e(function (t) {
                    return n.subscribe(t)
                })
            }
            return new e(function (e) {
                var i = !1;
                return o(function () {
                    if (!i) {
                        try {
                            if (f(t, !1, function (t) {
                                if (e.next(t), i) return p
                            }) === p) return
                        } catch (t) {
                            if (i) throw t;
                            return void e.error(t)
                        }
                        e.complete()
                    }
                }), function () {
                    i = !0
                }
            })
        }, of: function () {
            for (var t = 0, e = arguments.length, i = new Array(e); t < e;) i[t] = arguments[t++];
            return new ("function" == typeof this ? this : x)(function (t) {
                var e = !1;
                return o(function () {
                    if (!e) {
                        for (var n = 0; n < i.length; ++n) if (t.next(i[n]), e) return;
                        t.complete()
                    }
                }), function () {
                    e = !0
                }
            })
        }
    }), d(x.prototype, a, function () {
        return this
    }), n(n.G, {Observable: x}), i(39)("Observable")
}, function (t, e, i) {
    var n = i(3), r = i(0), s = i(62), o = [].slice, a = /MSIE .\./.test(s), l = function (t) {
        return function (e, i) {
            var n = arguments.length > 2, r = !!n && o.call(arguments, 2);
            return t(n ? function () {
                ("function" == typeof e ? e : Function(e)).apply(this, r)
            } : e, i)
        }
    };
    r(r.G + r.B + r.F * a, {setTimeout: l(n.setTimeout), setInterval: l(n.setInterval)})
}, function (t, e, i) {
    var n = i(0), r = i(91);
    n(n.G + n.B, {setImmediate: r.set, clearImmediate: r.clear})
}, function (t, e, i) {
    for (var n = i(88), r = i(35), s = i(13), o = i(3), a = i(12), l = i(46), c = i(6), u = c("iterator"), h = c("toStringTag"), d = l.Array, f = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, p = r(f), v = 0; v < p.length; v++) {
        var g, m = p[v], y = f[m], b = o[m], w = b && b.prototype;
        if (w && (w[u] || a(w, u, d), w[h] || a(w, h, m), l[m] = d, y)) for (g in n) w[g] || s(w, g, n[g], !0)
    }
}, function (t, e, i) {
    (function (e) {
        !function (e) {
            "use strict";
            var i, n = Object.prototype, r = n.hasOwnProperty, s = "function" == typeof Symbol ? Symbol : {},
                o = s.iterator || "@@iterator", a = s.asyncIterator || "@@asyncIterator",
                l = s.toStringTag || "@@toStringTag", c = "object" == typeof t, u = e.regeneratorRuntime;
            if (u) c && (t.exports = u); else {
                (u = e.regeneratorRuntime = c ? t.exports : {}).wrap = w;
                var h = "suspendedStart", d = "suspendedYield", f = "executing", p = "completed", v = {}, g = {};
                g[o] = function () {
                    return this
                };
                var m = Object.getPrototypeOf, y = m && m(m(D([])));
                y && y !== n && r.call(y, o) && (g = y);
                var b = E.prototype = T.prototype = Object.create(g);
                C.prototype = b.constructor = E, E.constructor = C, E[l] = C.displayName = "GeneratorFunction", u.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === C || "GeneratorFunction" === (e.displayName || e.name))
                }, u.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E, l in t || (t[l] = "GeneratorFunction")), t.prototype = Object.create(b), t
                }, u.awrap = function (t) {
                    return {__await: t}
                }, S(_.prototype), _.prototype[a] = function () {
                    return this
                }, u.AsyncIterator = _, u.async = function (t, e, i, n) {
                    var r = new _(w(t, e, i, n));
                    return u.isGeneratorFunction(e) ? r : r.next().then(function (t) {
                        return t.done ? t.value : r.next()
                    })
                }, S(b), b[l] = "Generator", b[o] = function () {
                    return this
                }, b.toString = function () {
                    return "[object Generator]"
                }, u.keys = function (t) {
                    var e = [];
                    for (var i in t) e.push(i);
                    return e.reverse(), function i() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in t) return i.value = n, i.done = !1, i
                        }
                        return i.done = !0, i
                    }
                }, u.values = D, L.prototype = {
                    constructor: L, reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(P), !t) for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = i)
                    }, stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    }, dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = i), !!r
                        }

                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var o = this.tryEntries[s], a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var l = r.call(o, "catchLoc"), c = r.call(o, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (l) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (t, e) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var n = this.tryEntries[i];
                            if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var s = n;
                                break
                            }
                        }
                        s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                        var o = s ? s.completion : {};
                        return o.type = t, o.arg = e, s ? (this.method = "next", this.next = s.finallyLoc, v) : this.complete(o)
                    }, complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    }, finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), P(i), v
                        }
                    }, catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e];
                            if (i.tryLoc === t) {
                                var n = i.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    P(i)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (t, e, n) {
                        return this.delegate = {
                            iterator: D(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = i), v
                    }
                }
            }

            function w(t, e, i, n) {
                var r = e && e.prototype instanceof T ? e : T, s = Object.create(r.prototype), o = new L(n || []);
                return s._invoke = function (t, e, i) {
                    var n = h;
                    return function (r, s) {
                        if (n === f) throw new Error("Generator is already running");
                        if (n === p) {
                            if ("throw" === r) throw s;
                            return A()
                        }
                        for (i.method = r, i.arg = s; ;) {
                            var o = i.delegate;
                            if (o) {
                                var a = k(o, i);
                                if (a) {
                                    if (a === v) continue;
                                    return a
                                }
                            }
                            if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                                if (n === h) throw n = p, i.arg;
                                i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            n = f;
                            var l = x(t, e, i);
                            if ("normal" === l.type) {
                                if (n = i.done ? p : d, l.arg === v) continue;
                                return {value: l.arg, done: i.done}
                            }
                            "throw" === l.type && (n = p, i.method = "throw", i.arg = l.arg)
                        }
                    }
                }(t, i, o), s
            }

            function x(t, e, i) {
                try {
                    return {type: "normal", arg: t.call(e, i)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            function T() {
            }

            function C() {
            }

            function E() {
            }

            function S(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function _(t) {
                function i(e, n, s, o) {
                    var a = x(t[e], t, n);
                    if ("throw" !== a.type) {
                        var l = a.arg, c = l.value;
                        return c && "object" == typeof c && r.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
                            i("next", t, s, o)
                        }, function (t) {
                            i("throw", t, s, o)
                        }) : Promise.resolve(c).then(function (t) {
                            l.value = t, s(l)
                        }, o)
                    }
                    o(a.arg)
                }

                var n;
                "object" == typeof e.process && e.process.domain && (i = e.process.domain.bind(i)), this._invoke = function (t, e) {
                    function r() {
                        return new Promise(function (n, r) {
                            i(t, e, n, r)
                        })
                    }

                    return n = n ? n.then(r, r) : r()
                }
            }

            function k(t, e) {
                var n = t.iterator[e.method];
                if (n === i) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = i, k(t, e), "throw" === e.method)) return v;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return v
                }
                var r = x(n, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, v;
                var s = r.arg;
                return s ? s.done ? (e[t.resultName] = s.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = i), e.delegate = null, v) : s : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v)
            }

            function M(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function P(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function L(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(M, this), this.reset(!0)
            }

            function D(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1, s = function e() {
                            for (; ++n < t.length;) if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = i, e.done = !0, e
                        };
                        return s.next = s
                    }
                }
                return {next: A}
            }

            function A() {
                return {value: i, done: !0}
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(this, i(95))
}, function (t, e, i) {
    i(343), t.exports = i(19).RegExp.escape
}, function (t, e, i) {
    var n = i(0), r = i(344)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    n(n.S, "RegExp", {
        escape: function (t) {
            return r(t)
        }
    })
}, function (t, e) {
    t.exports = function (t, e) {
        var i = e === Object(e) ? function (t) {
            return e[t]
        } : e;
        return function (e) {
            return String(e).replace(t, i)
        }
    }
}, function (t, e, i) {
}, function (t, e, i) {
    "use strict";
    (function (t) {
        var e, n, r = i(2), s = i.n(r);
        e = void 0, n = function () {
            var t = "undefined" == typeof document ? {
                body: {}, addEventListener: function () {
                }, removeEventListener: function () {
                }, activeElement: {
                    blur: function () {
                    }, nodeName: ""
                }, querySelector: function () {
                    return null
                }, querySelectorAll: function () {
                    return []
                }, getElementById: function () {
                    return null
                }, createEvent: function () {
                    return {
                        initEvent: function () {
                        }
                    }
                }, createElement: function () {
                    return {
                        children: [], childNodes: [], style: {}, setAttribute: function () {
                        }, getElementsByTagName: function () {
                            return []
                        }
                    }
                }, location: {hash: ""}
            } : document, e = "undefined" == typeof window ? {
                document: t,
                navigator: {userAgent: ""},
                location: {},
                history: {},
                CustomEvent: function () {
                    return this
                },
                addEventListener: function () {
                },
                removeEventListener: function () {
                },
                getComputedStyle: function () {
                    return {
                        getPropertyValue: function () {
                            return ""
                        }
                    }
                },
                Image: function () {
                },
                Date: function () {
                },
                screen: {},
                setTimeout: function () {
                },
                clearTimeout: function () {
                }
            } : window, i = function (t) {
                for (var e = 0; e < t.length; e += 1) this[e] = t[e];
                return this.length = t.length, this
            };

            function n(n, r) {
                var s = [], o = 0;
                if (n && !r && n instanceof i) return n;
                if (n) if ("string" == typeof n) {
                    var a, l, c = n.trim();
                    if (c.indexOf("<") >= 0 && c.indexOf(">") >= 0) {
                        var u = "div";
                        for (0 === c.indexOf("<li") && (u = "ul"), 0 === c.indexOf("<tr") && (u = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (u = "tr"), 0 === c.indexOf("<tbody") && (u = "table"), 0 === c.indexOf("<option") && (u = "select"), (l = t.createElement(u)).innerHTML = c, o = 0; o < l.childNodes.length; o += 1) s.push(l.childNodes[o])
                    } else for (a = r || "#" !== n[0] || n.match(/[ .<>:~]/) ? (r || t).querySelectorAll(n.trim()) : [t.getElementById(n.trim().split("#")[1])], o = 0; o < a.length; o += 1) a[o] && s.push(a[o])
                } else if (n.nodeType || n === e || n === t) s.push(n); else if (n.length > 0 && n[0].nodeType) for (o = 0; o < n.length; o += 1) s.push(n[o]);
                return new i(s)
            }

            function r(t) {
                for (var e = [], i = 0; i < t.length; i += 1) -1 === e.indexOf(t[i]) && e.push(t[i]);
                return e
            }

            n.fn = i.prototype, n.Class = i, n.Dom7 = i;
            var o = {
                addClass: function (t) {
                    if (void 0 === t) return this;
                    for (var e = t.split(" "), i = 0; i < e.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(e[i]);
                    return this
                }, removeClass: function (t) {
                    for (var e = t.split(" "), i = 0; i < e.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(e[i]);
                    return this
                }, hasClass: function (t) {
                    return !!this[0] && this[0].classList.contains(t)
                }, toggleClass: function (t) {
                    for (var e = t.split(" "), i = 0; i < e.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(e[i]);
                    return this
                }, attr: function (t, e) {
                    var i = arguments;
                    if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                    for (var n = 0; n < this.length; n += 1) if (2 === i.length) this[n].setAttribute(t, e); else for (var r in t) this[n][r] = t[r], this[n].setAttribute(r, t[r]);
                    return this
                }, removeAttr: function (t) {
                    for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
                    return this
                }, data: function (t, e) {
                    var i;
                    if (void 0 !== e) {
                        for (var n = 0; n < this.length; n += 1) (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[t] = e;
                        return this
                    }
                    if (i = this[0]) return i.dom7ElementDataStorage && t in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[t] : i.getAttribute("data-" + t) || void 0
                }, transform: function (t) {
                    for (var e = 0; e < this.length; e += 1) {
                        var i = this[e].style;
                        i.webkitTransform = t, i.transform = t
                    }
                    return this
                }, transition: function (t) {
                    "string" != typeof t && (t += "ms");
                    for (var e = 0; e < this.length; e += 1) {
                        var i = this[e].style;
                        i.webkitTransitionDuration = t, i.transitionDuration = t
                    }
                    return this
                }, on: function () {
                    for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                    var r = e[0], s = e[1], o = e[2], a = e[3];

                    function l(t) {
                        var e = t.target;
                        if (e) {
                            var i = t.target.dom7EventData || [];
                            if (i.indexOf(t) < 0 && i.unshift(t), n(e).is(s)) o.apply(e, i); else for (var r = n(e).parents(), a = 0; a < r.length; a += 1) n(r[a]).is(s) && o.apply(r[a], i)
                        }
                    }

                    function c(t) {
                        var e = t && t.target && t.target.dom7EventData || [];
                        e.indexOf(t) < 0 && e.unshift(t), o.apply(this, e)
                    }

                    "function" == typeof e[1] && (r = (t = e)[0], o = t[1], a = t[2], s = void 0), a || (a = !1);
                    for (var u, h = r.split(" "), d = 0; d < this.length; d += 1) {
                        var f = this[d];
                        if (s) for (u = 0; u < h.length; u += 1) {
                            var p = h[u];
                            f.dom7LiveListeners || (f.dom7LiveListeners = {}), f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []), f.dom7LiveListeners[p].push({
                                listener: o,
                                proxyListener: l
                            }), f.addEventListener(p, l, a)
                        } else for (u = 0; u < h.length; u += 1) {
                            var v = h[u];
                            f.dom7Listeners || (f.dom7Listeners = {}), f.dom7Listeners[v] || (f.dom7Listeners[v] = []), f.dom7Listeners[v].push({
                                listener: o,
                                proxyListener: c
                            }), f.addEventListener(v, c, a)
                        }
                    }
                    return this
                }, off: function () {
                    for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                    var n = e[0], r = e[1], s = e[2], o = e[3];
                    "function" == typeof e[1] && (n = (t = e)[0], s = t[1], o = t[2], r = void 0), o || (o = !1);
                    for (var a = n.split(" "), l = 0; l < a.length; l += 1) for (var c = a[l], u = 0; u < this.length; u += 1) {
                        var h = this[u], d = void 0;
                        if (!r && h.dom7Listeners ? d = h.dom7Listeners[c] : r && h.dom7LiveListeners && (d = h.dom7LiveListeners[c]), d && d.length) for (var f = d.length - 1; f >= 0; f -= 1) {
                            var p = d[f];
                            s && p.listener === s ? (h.removeEventListener(c, p.proxyListener, o), d.splice(f, 1)) : s && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === s ? (h.removeEventListener(c, p.proxyListener, o), d.splice(f, 1)) : s || (h.removeEventListener(c, p.proxyListener, o), d.splice(f, 1))
                        }
                    }
                    return this
                }, trigger: function () {
                    for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
                    for (var r = i[0].split(" "), s = i[1], o = 0; o < r.length; o += 1) for (var a = r[o], l = 0; l < this.length; l += 1) {
                        var c = this[l], u = void 0;
                        try {
                            u = new e.CustomEvent(a, {detail: s, bubbles: !0, cancelable: !0})
                        } catch (e) {
                            (u = t.createEvent("Event")).initEvent(a, !0, !0), u.detail = s
                        }
                        c.dom7EventData = i.filter(function (t, e) {
                            return e > 0
                        }), c.dispatchEvent(u), c.dom7EventData = [], delete c.dom7EventData
                    }
                    return this
                }, transitionEnd: function (t) {
                    var e, i = ["webkitTransitionEnd", "transitionend"], n = this;

                    function r(s) {
                        if (s.target === this) for (t.call(this, s), e = 0; e < i.length; e += 1) n.off(i[e], r)
                    }

                    if (t) for (e = 0; e < i.length; e += 1) n.on(i[e], r);
                    return this
                }, outerWidth: function (t) {
                    if (this.length > 0) {
                        if (t) {
                            var e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                }, outerHeight: function (t) {
                    if (this.length > 0) {
                        if (t) {
                            var e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                }, offset: function () {
                    if (this.length > 0) {
                        var i = this[0], n = i.getBoundingClientRect(), r = t.body, s = i.clientTop || r.clientTop || 0,
                            o = i.clientLeft || r.clientLeft || 0, a = i === e ? e.scrollY : i.scrollTop,
                            l = i === e ? e.scrollX : i.scrollLeft;
                        return {top: n.top + a - s, left: n.left + l - o}
                    }
                    return null
                }, css: function (t, i) {
                    var n;
                    if (1 === arguments.length) {
                        if ("string" != typeof t) {
                            for (n = 0; n < this.length; n += 1) for (var r in t) this[n].style[r] = t[r];
                            return this
                        }
                        if (this[0]) return e.getComputedStyle(this[0], null).getPropertyValue(t)
                    }
                    if (2 === arguments.length && "string" == typeof t) {
                        for (n = 0; n < this.length; n += 1) this[n].style[t] = i;
                        return this
                    }
                    return this
                }, each: function (t) {
                    if (!t) return this;
                    for (var e = 0; e < this.length; e += 1) if (!1 === t.call(this[e], e, this[e])) return this;
                    return this
                }, html: function (t) {
                    if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
                    for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
                    return this
                }, text: function (t) {
                    if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
                    for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
                    return this
                }, is: function (r) {
                    var s, o, a = this[0];
                    if (!a || void 0 === r) return !1;
                    if ("string" == typeof r) {
                        if (a.matches) return a.matches(r);
                        if (a.webkitMatchesSelector) return a.webkitMatchesSelector(r);
                        if (a.msMatchesSelector) return a.msMatchesSelector(r);
                        for (s = n(r), o = 0; o < s.length; o += 1) if (s[o] === a) return !0;
                        return !1
                    }
                    if (r === t) return a === t;
                    if (r === e) return a === e;
                    if (r.nodeType || r instanceof i) {
                        for (s = r.nodeType ? [r] : r, o = 0; o < s.length; o += 1) if (s[o] === a) return !0;
                        return !1
                    }
                    return !1
                }, index: function () {
                    var t, e = this[0];
                    if (e) {
                        for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                        return t
                    }
                }, eq: function (t) {
                    if (void 0 === t) return this;
                    var e, n = this.length;
                    return new i(t > n - 1 ? [] : t < 0 ? (e = n + t) < 0 ? [] : [this[e]] : [this[t]])
                }, append: function () {
                    for (var e, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                    for (var s = 0; s < n.length; s += 1) {
                        e = n[s];
                        for (var o = 0; o < this.length; o += 1) if ("string" == typeof e) {
                            var a = t.createElement("div");
                            for (a.innerHTML = e; a.firstChild;) this[o].appendChild(a.firstChild)
                        } else if (e instanceof i) for (var l = 0; l < e.length; l += 1) this[o].appendChild(e[l]); else this[o].appendChild(e)
                    }
                    return this
                }, prepend: function (e) {
                    var n, r;
                    for (n = 0; n < this.length; n += 1) if ("string" == typeof e) {
                        var s = t.createElement("div");
                        for (s.innerHTML = e, r = s.childNodes.length - 1; r >= 0; r -= 1) this[n].insertBefore(s.childNodes[r], this[n].childNodes[0])
                    } else if (e instanceof i) for (r = 0; r < e.length; r += 1) this[n].insertBefore(e[r], this[n].childNodes[0]); else this[n].insertBefore(e, this[n].childNodes[0]);
                    return this
                }, next: function (t) {
                    return this.length > 0 ? t ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(t) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
                }, nextAll: function (t) {
                    var e = [], r = this[0];
                    if (!r) return new i([]);
                    for (; r.nextElementSibling;) {
                        var s = r.nextElementSibling;
                        t ? n(s).is(t) && e.push(s) : e.push(s), r = s
                    }
                    return new i(e)
                }, prev: function (t) {
                    if (this.length > 0) {
                        var e = this[0];
                        return t ? e.previousElementSibling && n(e.previousElementSibling).is(t) ? new i([e.previousElementSibling]) : new i([]) : e.previousElementSibling ? new i([e.previousElementSibling]) : new i([])
                    }
                    return new i([])
                }, prevAll: function (t) {
                    var e = [], r = this[0];
                    if (!r) return new i([]);
                    for (; r.previousElementSibling;) {
                        var s = r.previousElementSibling;
                        t ? n(s).is(t) && e.push(s) : e.push(s), r = s
                    }
                    return new i(e)
                }, parent: function (t) {
                    for (var e = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (t ? n(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode));
                    return n(r(e))
                }, parents: function (t) {
                    for (var e = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s;) t ? n(s).is(t) && e.push(s) : e.push(s), s = s.parentNode;
                    return n(r(e))
                }, closest: function (t) {
                    var e = this;
                    return void 0 === t ? new i([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
                }, find: function (t) {
                    for (var e = [], n = 0; n < this.length; n += 1) for (var r = this[n].querySelectorAll(t), s = 0; s < r.length; s += 1) e.push(r[s]);
                    return new i(e)
                }, children: function (t) {
                    for (var e = [], s = 0; s < this.length; s += 1) for (var o = this[s].childNodes, a = 0; a < o.length; a += 1) t ? 1 === o[a].nodeType && n(o[a]).is(t) && e.push(o[a]) : 1 === o[a].nodeType && e.push(o[a]);
                    return new i(r(e))
                }, filter: function (t) {
                    for (var e = [], n = 0; n < this.length; n += 1) t.call(this[n], n, this[n]) && e.push(this[n]);
                    return new i(e)
                }, remove: function () {
                    for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                    return this
                }, add: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var i, r;
                    for (i = 0; i < t.length; i += 1) {
                        var s = n(t[i]);
                        for (r = 0; r < s.length; r += 1) this[this.length] = s[r], this.length += 1
                    }
                    return this
                }, styles: function () {
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                }
            };
            Object.keys(o).forEach(function (t) {
                n.fn[t] = n.fn[t] || o[t]
            });
            var a = {
                deleteProps: function (t) {
                    var e = t;
                    Object.keys(e).forEach(function (t) {
                        try {
                            e[t] = null
                        } catch (t) {
                        }
                        try {
                            delete e[t]
                        } catch (t) {
                        }
                    })
                }, nextTick: function (t, e) {
                    return void 0 === e && (e = 0), setTimeout(t, e)
                }, now: function () {
                    return Date.now()
                }, getTranslate: function (t, i) {
                    var n, r, s;
                    void 0 === i && (i = "x");
                    var o = e.getComputedStyle(t, null);
                    return e.WebKitCSSMatrix ? ((r = o.transform || o.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(function (t) {
                        return t.replace(",", ".")
                    }).join(", ")), s = new e.WebKitCSSMatrix("none" === r ? "" : r)) : n = (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (r = e.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === i && (r = e.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0
                }, parseUrlQuery: function (t) {
                    var i, n, r, s, o = {}, a = t || e.location.href;
                    if ("string" == typeof a && a.length) for (s = (n = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "").split("&").filter(function (t) {
                        return "" !== t
                    })).length, i = 0; i < s; i += 1) r = n[i].replace(/#\S+/g, "").split("="), o[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
                    return o
                }, isObject: function (t) {
                    return "object" == s()(t) && null !== t && t.constructor && t.constructor === Object
                }, extend: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    for (var i = Object(t[0]), n = 1; n < t.length; n += 1) {
                        var r = t[n];
                        if (null != r) for (var s = Object.keys(Object(r)), o = 0, l = s.length; o < l; o += 1) {
                            var c = s[o], u = Object.getOwnPropertyDescriptor(r, c);
                            void 0 !== u && u.enumerable && (a.isObject(i[c]) && a.isObject(r[c]) ? a.extend(i[c], r[c]) : !a.isObject(i[c]) && a.isObject(r[c]) ? (i[c] = {}, a.extend(i[c], r[c])) : i[c] = r[c])
                        }
                    }
                    return i
                }
            }, l = {
                touch: e.Modernizr && !0 === e.Modernizr.touch || !!(e.navigator.maxTouchPoints > 0 || "ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints > 0,
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: function () {
                    var t = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (t) {
                    }
                    return t
                }(),
                gestures: "ongesturestart" in e
            }, c = function (t) {
                void 0 === t && (t = {});
                var e = this;
                e.params = t, e.eventsListeners = {}, e.params && e.params.on && Object.keys(e.params.on).forEach(function (t) {
                    e.on(t, e.params.on[t])
                })
            }, u = {components: {configurable: !0}};
            c.prototype.on = function (t, e, i) {
                var n = this;
                if ("function" != typeof e) return n;
                var r = i ? "unshift" : "push";
                return t.split(" ").forEach(function (t) {
                    n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][r](e)
                }), n
            }, c.prototype.once = function (t, e, i) {
                var n = this;
                if ("function" != typeof e) return n;

                function r() {
                    for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
                    e.apply(n, i), n.off(t, r), r.f7proxy && delete r.f7proxy
                }

                return r.f7proxy = e, n.on(t, r, i)
            }, c.prototype.off = function (t, e) {
                var i = this;
                return i.eventsListeners ? (t.split(" ").forEach(function (t) {
                    void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].length && i.eventsListeners[t].forEach(function (n, r) {
                        (n === e || n.f7proxy && n.f7proxy === e) && i.eventsListeners[t].splice(r, 1)
                    })
                }), i) : i
            }, c.prototype.emit = function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var i, n, r, s = this;
                return s.eventsListeners ? ("string" == typeof t[0] || Array.isArray(t[0]) ? (i = t[0], n = t.slice(1, t.length), r = s) : (i = t[0].events, n = t[0].data, r = t[0].context || s), (Array.isArray(i) ? i : i.split(" ")).forEach(function (t) {
                    if (s.eventsListeners && s.eventsListeners[t]) {
                        var e = [];
                        s.eventsListeners[t].forEach(function (t) {
                            e.push(t)
                        }), e.forEach(function (t) {
                            t.apply(r, n)
                        })
                    }
                }), s) : s
            }, c.prototype.useModulesParams = function (t) {
                var e = this;
                e.modules && Object.keys(e.modules).forEach(function (i) {
                    var n = e.modules[i];
                    n.params && a.extend(t, n.params)
                })
            }, c.prototype.useModules = function (t) {
                void 0 === t && (t = {});
                var e = this;
                e.modules && Object.keys(e.modules).forEach(function (i) {
                    var n = e.modules[i], r = t[i] || {};
                    n.instance && Object.keys(n.instance).forEach(function (t) {
                        var i = n.instance[t];
                        e[t] = "function" == typeof i ? i.bind(e) : i
                    }), n.on && e.on && Object.keys(n.on).forEach(function (t) {
                        e.on(t, n.on[t])
                    }), n.create && n.create.bind(e)(r)
                })
            }, u.components.set = function (t) {
                this.use && this.use(t)
            }, c.installModule = function (t) {
                for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
                var n = this;
                n.prototype.modules || (n.prototype.modules = {});
                var r = t.name || Object.keys(n.prototype.modules).length + "_" + a.now();
                return n.prototype.modules[r] = t, t.proto && Object.keys(t.proto).forEach(function (e) {
                    n.prototype[e] = t.proto[e]
                }), t.static && Object.keys(t.static).forEach(function (e) {
                    n[e] = t.static[e]
                }), t.install && t.install.apply(n, e), n
            }, c.use = function (t) {
                for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
                var n = this;
                return Array.isArray(t) ? (t.forEach(function (t) {
                    return n.installModule(t)
                }), n) : n.installModule.apply(n, [t].concat(e))
            }, Object.defineProperties(c, u);
            var h, d, f, p, v, g, m, y, b, w, x, T, C, E, S, _ = {
                updateSize: function () {
                    var t, e, i = this.$el;
                    t = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, e = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === t && this.isHorizontal() || 0 === e && this.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), e = e - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), a.extend(this, {
                        width: t,
                        height: e,
                        size: this.isHorizontal() ? t : e
                    }))
                }, updateSlides: function () {
                    var t = this.params, i = this.$wrapperEl, n = this.size, r = this.rtlTranslate, s = this.wrongRTL,
                        o = this.virtual && t.virtual.enabled, l = o ? this.virtual.slides.length : this.slides.length,
                        c = i.children("." + this.params.slideClass), u = o ? this.virtual.slides.length : c.length,
                        h = [], d = [], f = [];

                    function p(e) {
                        return !t.cssMode || e !== c.length - 1
                    }

                    var v = t.slidesOffsetBefore;
                    "function" == typeof v && (v = t.slidesOffsetBefore.call(this));
                    var g = t.slidesOffsetAfter;
                    "function" == typeof g && (g = t.slidesOffsetAfter.call(this));
                    var m = this.snapGrid.length, y = this.snapGrid.length, b = t.spaceBetween, w = -v, x = 0, T = 0;
                    if (void 0 !== n) {
                        var C, E;
                        "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * n), this.virtualSize = -b, r ? c.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : c.css({
                            marginRight: "",
                            marginBottom: ""
                        }), t.slidesPerColumn > 1 && (C = Math.floor(u / t.slidesPerColumn) === u / this.params.slidesPerColumn ? u : Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (C = Math.max(C, t.slidesPerView * t.slidesPerColumn)));
                        for (var S, _ = t.slidesPerColumn, k = C / _, M = Math.floor(u / t.slidesPerColumn), P = 0; P < u; P += 1) {
                            E = 0;
                            var L = c.eq(P);
                            if (t.slidesPerColumn > 1) {
                                var D = void 0, A = void 0, I = void 0;
                                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                    var $ = Math.floor(P / (t.slidesPerGroup * t.slidesPerColumn)),
                                        O = P - t.slidesPerColumn * t.slidesPerGroup * $,
                                        z = 0 === $ ? t.slidesPerGroup : Math.min(Math.ceil((u - $ * _ * t.slidesPerGroup) / _), t.slidesPerGroup);
                                    D = (A = O - (I = Math.floor(O / z)) * z + $ * t.slidesPerGroup) + I * C / _, L.css({
                                        "-webkit-box-ordinal-group": D,
                                        "-moz-box-ordinal-group": D,
                                        "-ms-flex-order": D,
                                        "-webkit-order": D,
                                        order: D
                                    })
                                } else "column" === t.slidesPerColumnFill ? (I = P - (A = Math.floor(P / _)) * _, (A > M || A === M && I === _ - 1) && (I += 1) >= _ && (I = 0, A += 1)) : A = P - (I = Math.floor(P / k)) * k;
                                L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px")
                            }
                            if ("none" !== L.css("display")) {
                                if ("auto" === t.slidesPerView) {
                                    var N = e.getComputedStyle(L[0], null), j = L[0].style.transform,
                                        F = L[0].style.webkitTransform;
                                    if (j && (L[0].style.transform = "none"), F && (L[0].style.webkitTransform = "none"), t.roundLengths) E = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0); else if (this.isHorizontal()) {
                                        var H = parseFloat(N.getPropertyValue("width")),
                                            R = parseFloat(N.getPropertyValue("padding-left")),
                                            B = parseFloat(N.getPropertyValue("padding-right")),
                                            q = parseFloat(N.getPropertyValue("margin-left")),
                                            W = parseFloat(N.getPropertyValue("margin-right")),
                                            G = N.getPropertyValue("box-sizing");
                                        E = G && "border-box" === G ? H + q + W : H + R + B + q + W
                                    } else {
                                        var Y = parseFloat(N.getPropertyValue("height")),
                                            V = parseFloat(N.getPropertyValue("padding-top")),
                                            X = parseFloat(N.getPropertyValue("padding-bottom")),
                                            U = parseFloat(N.getPropertyValue("margin-top")),
                                            K = parseFloat(N.getPropertyValue("margin-bottom")),
                                            Q = N.getPropertyValue("box-sizing");
                                        E = Q && "border-box" === Q ? Y + U + K : Y + V + X + U + K
                                    }
                                    j && (L[0].style.transform = j), F && (L[0].style.webkitTransform = F), t.roundLengths && (E = Math.floor(E))
                                } else E = (n - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), c[P] && (this.isHorizontal() ? c[P].style.width = E + "px" : c[P].style.height = E + "px");
                                c[P] && (c[P].swiperSlideSize = E), f.push(E), t.centeredSlides ? (w = w + E / 2 + x / 2 + b, 0 === x && 0 !== P && (w = w - n / 2 - b), 0 === P && (w = w - n / 2 - b), Math.abs(w) < .001 && (w = 0), t.roundLengths && (w = Math.floor(w)), T % t.slidesPerGroup == 0 && h.push(w), d.push(w)) : (t.roundLengths && (w = Math.floor(w)), T % t.slidesPerGroup == 0 && h.push(w), d.push(w), w = w + E + b), this.virtualSize += E + b, x = E, T += 1
                            }
                        }
                        if (this.virtualSize = Math.max(this.virtualSize, n) + g, r && s && ("slide" === t.effect || "coverflow" === t.effect) && i.css({width: this.virtualSize + t.spaceBetween + "px"}), t.setWrapperSize && (this.isHorizontal() ? i.css({width: this.virtualSize + t.spaceBetween + "px"}) : i.css({height: this.virtualSize + t.spaceBetween + "px"})), t.slidesPerColumn > 1 && (this.virtualSize = (E + t.spaceBetween) * C, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({width: this.virtualSize + t.spaceBetween + "px"}) : i.css({height: this.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                            S = [];
                            for (var J = 0; J < h.length; J += 1) {
                                var Z = h[J];
                                t.roundLengths && (Z = Math.floor(Z)), h[J] < this.virtualSize + h[0] && S.push(Z)
                            }
                            h = S
                        }
                        if (!t.centeredSlides) {
                            S = [];
                            for (var tt = 0; tt < h.length; tt += 1) {
                                var et = h[tt];
                                t.roundLengths && (et = Math.floor(et)), h[tt] <= this.virtualSize - n && S.push(et)
                            }
                            h = S, Math.floor(this.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(this.virtualSize - n)
                        }
                        if (0 === h.length && (h = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? r ? c.filter(p).css({marginLeft: b + "px"}) : c.filter(p).css({marginRight: b + "px"}) : c.filter(p).css({marginBottom: b + "px"})), t.centeredSlides && t.centeredSlidesBounds) {
                            var it = 0;
                            f.forEach(function (e) {
                                it += e + (t.spaceBetween ? t.spaceBetween : 0)
                            });
                            var nt = (it -= t.spaceBetween) - n;
                            h = h.map(function (t) {
                                return t < 0 ? -v : t > nt ? nt + g : t
                            })
                        }
                        if (t.centerInsufficientSlides) {
                            var rt = 0;
                            if (f.forEach(function (e) {
                                rt += e + (t.spaceBetween ? t.spaceBetween : 0)
                            }), (rt -= t.spaceBetween) < n) {
                                var st = (n - rt) / 2;
                                h.forEach(function (t, e) {
                                    h[e] = t - st
                                }), d.forEach(function (t, e) {
                                    d[e] = t + st
                                })
                            }
                        }
                        a.extend(this, {
                            slides: c,
                            snapGrid: h,
                            slidesGrid: d,
                            slidesSizesGrid: f
                        }), u !== l && this.emit("slidesLengthChange"), h.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), d.length !== y && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
                    }
                }, updateAutoHeight: function (t) {
                    var e, i = [], n = 0;
                    if ("number" == typeof t ? this.setTransition(t) : !0 === t && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                        var r = this.activeIndex + e;
                        if (r > this.slides.length) break;
                        i.push(this.slides.eq(r)[0])
                    } else i.push(this.slides.eq(this.activeIndex)[0]);
                    for (e = 0; e < i.length; e += 1) if (void 0 !== i[e]) {
                        var s = i[e].offsetHeight;
                        n = s > n ? s : n
                    }
                    n && this.$wrapperEl.css("height", n + "px")
                }, updateSlidesOffset: function () {
                    for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
                }, updateSlidesProgress: function (t) {
                    void 0 === t && (t = this && this.translate || 0);
                    var e = this.params, i = this.slides, r = this.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                        var s = -t;
                        r && (s = t), i.removeClass(e.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                        for (var o = 0; o < i.length; o += 1) {
                            var a = i[o],
                                l = (s + (e.centeredSlides ? this.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + e.spaceBetween);
                            if (e.watchSlidesVisibility) {
                                var c = -(s - a.swiperSlideOffset), u = c + this.slidesSizesGrid[o];
                                (c >= 0 && c < this.size - 1 || u > 1 && u <= this.size || c <= 0 && u >= this.size) && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(o), i.eq(o).addClass(e.slideVisibleClass))
                            }
                            a.progress = r ? -l : l
                        }
                        this.visibleSlides = n(this.visibleSlides)
                    }
                }, updateProgress: function (t) {
                    if (void 0 === t) {
                        var e = this.rtlTranslate ? -1 : 1;
                        t = this && this.translate && this.translate * e || 0
                    }
                    var i = this.params, n = this.maxTranslate() - this.minTranslate(), r = this.progress,
                        s = this.isBeginning, o = this.isEnd, l = s, c = o;
                    0 === n ? (r = 0, s = !0, o = !0) : (s = (r = (t - this.minTranslate()) / n) <= 0, o = r >= 1), a.extend(this, {
                        progress: r,
                        isBeginning: s,
                        isEnd: o
                    }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(t), s && !l && this.emit("reachBeginning toEdge"), o && !c && this.emit("reachEnd toEdge"), (l && !s || c && !o) && this.emit("fromEdge"), this.emit("progress", r)
                }, updateSlidesClasses: function () {
                    var t, e = this.slides, i = this.params, n = this.$wrapperEl, r = this.activeIndex,
                        s = this.realIndex, o = this.virtual && i.virtual.enabled;
                    e.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (t = o ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : e.eq(r)).addClass(i.slideActiveClass), i.loop && (t.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass));
                    var a = t.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === a.length && (a = e.eq(0)).addClass(i.slideNextClass);
                    var l = t.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === l.length && (l = e.eq(-1)).addClass(i.slidePrevClass), i.loop && (a.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
                }, updateActiveIndex: function (t) {
                    var e, i = this.rtlTranslate ? this.translate : -this.translate, n = this.slidesGrid,
                        r = this.snapGrid, s = this.params, o = this.activeIndex, l = this.realIndex,
                        c = this.snapIndex, u = t;
                    if (void 0 === u) {
                        for (var h = 0; h < n.length; h += 1) void 0 !== n[h + 1] ? i >= n[h] && i < n[h + 1] - (n[h + 1] - n[h]) / 2 ? u = h : i >= n[h] && i < n[h + 1] && (u = h + 1) : i >= n[h] && (u = h);
                        s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                    }
                    if ((e = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(u / s.slidesPerGroup)) >= r.length && (e = r.length - 1), u !== o) {
                        var d = parseInt(this.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                        a.extend(this, {
                            snapIndex: e,
                            realIndex: d,
                            previousIndex: o,
                            activeIndex: u
                        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== d && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                    } else e !== c && (this.snapIndex = e, this.emit("snapIndexChange"))
                }, updateClickedSlide: function (t) {
                    var e = this.params, i = n(t.target).closest("." + e.slideClass)[0], r = !1;
                    if (i) for (var s = 0; s < this.slides.length; s += 1) this.slides[s] === i && (r = !0);
                    if (!i || !r) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
                    this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = n(i).index(), e.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            }, k = {
                getTranslate: function (t) {
                    void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                    var e = this.params, i = this.rtlTranslate, n = this.translate, r = this.$wrapperEl;
                    if (e.virtualTranslate) return i ? -n : n;
                    if (e.cssMode) return n;
                    var s = a.getTranslate(r[0], t);
                    return i && (s = -s), s || 0
                }, setTranslate: function (t, e) {
                    var i = this.rtlTranslate, n = this.params, r = this.$wrapperEl, s = this.wrapperEl,
                        o = this.progress, a = 0, l = 0;
                    this.isHorizontal() ? a = i ? -t : t : l = t, n.roundLengths && (a = Math.floor(a), l = Math.floor(l)), n.cssMode ? s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -a : -l : n.virtualTranslate || r.transform("translate3d(" + a + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? a : l;
                    var c = this.maxTranslate() - this.minTranslate();
                    (0 === c ? 0 : (t - this.minTranslate()) / c) !== o && this.updateProgress(t), this.emit("setTranslate", this.translate, e)
                }, minTranslate: function () {
                    return -this.snapGrid[0]
                }, maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }, translateTo: function (t, e, i, n, r) {
                    var s;
                    void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                    var o = this, a = o.params, l = o.wrapperEl;
                    if (o.animating && a.preventInteractionOnTransition) return !1;
                    var c, u = o.minTranslate(), h = o.maxTranslate();
                    if (c = n && t > u ? u : n && t < h ? h : t, o.updateProgress(c), a.cssMode) {
                        var d = o.isHorizontal();
                        return 0 === e ? l[d ? "scrollLeft" : "scrollTop"] = -c : l.scrollTo ? l.scrollTo(((s = {})[d ? "left" : "top"] = -c, s.behavior = "smooth", s)) : l[d ? "scrollLeft" : "scrollTop"] = -c, !0
                    }
                    return 0 === e ? (o.setTransition(0), o.setTranslate(c), i && (o.emit("beforeTransitionStart", e, r), o.emit("transitionEnd"))) : (o.setTransition(e), o.setTranslate(c), i && (o.emit("beforeTransitionStart", e, r), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function (t) {
                        o && !o.destroyed && t.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, i && o.emit("transitionEnd"))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd))), !0
                }
            }, M = {
                slideTo: function (t, e, i, n) {
                    var r;
                    void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                    var s = this, o = t;
                    o < 0 && (o = 0);
                    var a = s.params, l = s.snapGrid, c = s.slidesGrid, u = s.previousIndex, h = s.activeIndex,
                        d = s.rtlTranslate, f = s.wrapperEl;
                    if (s.animating && a.preventInteractionOnTransition) return !1;
                    var p = Math.floor(o / a.slidesPerGroup);
                    p >= l.length && (p = l.length - 1), (h || a.initialSlide || 0) === (u || 0) && i && s.emit("beforeSlideChangeStart");
                    var v, g = -l[p];
                    if (s.updateProgress(g), a.normalizeSlideIndex) for (var m = 0; m < c.length; m += 1) -Math.floor(100 * g) >= Math.floor(100 * c[m]) && (o = m);
                    if (s.initialized && o !== h) {
                        if (!s.allowSlideNext && g < s.translate && g < s.minTranslate()) return !1;
                        if (!s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (h || 0) !== o) return !1
                    }
                    if (v = o > h ? "next" : o < h ? "prev" : "reset", d && -g === s.translate || !d && g === s.translate) return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(g), "reset" !== v && (s.transitionStart(i, v), s.transitionEnd(i, v)), !1;
                    if (a.cssMode) {
                        var y = s.isHorizontal();
                        return 0 === e ? f[y ? "scrollLeft" : "scrollTop"] = -g : f.scrollTo ? f.scrollTo(((r = {})[y ? "left" : "top"] = -g, r.behavior = "smooth", r)) : f[y ? "scrollLeft" : "scrollTop"] = -g, !0
                    }
                    return 0 === e ? (s.setTransition(0), s.setTranslate(g), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, v), s.transitionEnd(i, v)) : (s.setTransition(e), s.setTranslate(g), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, v), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (t) {
                        s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, v))
                    }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))), !0
                }, slideToLoop: function (t, e, i, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                    var r = t;
                    return this.params.loop && (r += this.loopedSlides), this.slideTo(r, e, i, n)
                }, slideNext: function (t, e, i) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                    var n = this.params, r = this.animating;
                    return n.loop ? !r && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + n.slidesPerGroup, t, e, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, t, e, i)
                }, slidePrev: function (t, e, i) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                    var n = this.params, r = this.animating, s = this.snapGrid, o = this.slidesGrid,
                        a = this.rtlTranslate;
                    if (n.loop) {
                        if (r) return !1;
                        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }

                    function l(t) {
                        return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
                    }

                    var c, u = l(a ? this.translate : -this.translate), h = s.map(function (t) {
                        return l(t)
                    }), d = (o.map(function (t) {
                        return l(t)
                    }), s[h.indexOf(u)], s[h.indexOf(u) - 1]);
                    return void 0 === d && n.cssMode && s.forEach(function (t) {
                        !d && u >= t && (d = t)
                    }), void 0 !== d && (c = o.indexOf(d)) < 0 && (c = this.activeIndex - 1), this.slideTo(c, t, e, i)
                }, slideReset: function (t, e, i) {
                    return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i)
                }, slideToClosest: function (t, e, i, n) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === n && (n = .5);
                    var r = this.activeIndex, s = Math.floor(r / this.params.slidesPerGroup),
                        o = this.rtlTranslate ? this.translate : -this.translate;
                    if (o >= this.snapGrid[s]) {
                        var a = this.snapGrid[s];
                        o - a > (this.snapGrid[s + 1] - a) * n && (r += this.params.slidesPerGroup)
                    } else {
                        var l = this.snapGrid[s - 1];
                        o - l <= (this.snapGrid[s] - l) * n && (r -= this.params.slidesPerGroup)
                    }
                    return r = Math.max(r, 0), r = Math.min(r, this.snapGrid.length - 1), this.slideTo(r, t, e, i)
                }, slideToClickedSlide: function () {
                    var t, e = this, i = e.params, r = e.$wrapperEl,
                        s = "auto" === i.slidesPerView ? e.slidesPerViewDynamic() : i.slidesPerView, o = e.clickedIndex;
                    if (i.loop) {
                        if (e.animating) return;
                        t = parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < e.loopedSlides - s / 2 || o > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), o = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), a.nextTick(function () {
                            e.slideTo(o)
                        })) : e.slideTo(o) : o > e.slides.length - s ? (e.loopFix(), o = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), a.nextTick(function () {
                            e.slideTo(o)
                        })) : e.slideTo(o)
                    } else e.slideTo(o)
                }
            }, P = {
                loopCreate: function () {
                    var e = this, i = e.params, r = e.$wrapperEl;
                    r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                    var s = r.children("." + i.slideClass);
                    if (i.loopFillGroupWithBlank) {
                        var o = i.slidesPerGroup - s.length % i.slidesPerGroup;
                        if (o !== i.slidesPerGroup) {
                            for (var a = 0; a < o; a += 1) {
                                var l = n(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                r.append(l)
                            }
                            s = r.children("." + i.slideClass)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
                    var c = [], u = [];
                    s.each(function (t, i) {
                        var r = n(i);
                        t < e.loopedSlides && u.push(i), t < s.length && t >= s.length - e.loopedSlides && c.push(i), r.attr("data-swiper-slide-index", t)
                    });
                    for (var h = 0; h < u.length; h += 1) r.append(n(u[h].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var d = c.length - 1; d >= 0; d -= 1) r.prepend(n(c[d].cloneNode(!0)).addClass(i.slideDuplicateClass))
                }, loopFix: function () {
                    var t, e = this.activeIndex, i = this.slides, n = this.loopedSlides, r = this.allowSlidePrev,
                        s = this.allowSlideNext, o = this.snapGrid, a = this.rtlTranslate;
                    this.allowSlidePrev = !0, this.allowSlideNext = !0;
                    var l = -o[e] - this.getTranslate();
                    e < n ? (t = i.length - 3 * n + e, t += n, this.slideTo(t, 0, !1, !0) && 0 !== l && this.setTranslate((a ? -this.translate : this.translate) - l)) : e >= i.length - n && (t = -i.length + e + n, t += n, this.slideTo(t, 0, !1, !0) && 0 !== l && this.setTranslate((a ? -this.translate : this.translate) - l)), this.allowSlidePrev = r, this.allowSlideNext = s
                }, loopDestroy: function () {
                    var t = this.$wrapperEl, e = this.params, i = this.slides;
                    t.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            }, L = {
                setGrabCursor: function (t) {
                    if (!(l.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                        var e = this.el;
                        e.style.cursor = "move", e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", e.style.cursor = t ? "-moz-grabbin" : "-moz-grab", e.style.cursor = t ? "grabbing" : "grab"
                    }
                }, unsetGrabCursor: function () {
                    l.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
                }
            }, D = {
                appendSlide: function (t) {
                    var e = this.$wrapperEl, i = this.params;
                    if (i.loop && this.loopDestroy(), "object" == s()(t) && "length" in t) for (var n = 0; n < t.length; n += 1) t[n] && e.append(t[n]); else e.append(t);
                    i.loop && this.loopCreate(), i.observer && l.observer || this.update()
                }, prependSlide: function (t) {
                    var e = this.params, i = this.$wrapperEl, n = this.activeIndex;
                    e.loop && this.loopDestroy();
                    var r = n + 1;
                    if ("object" == s()(t) && "length" in t) {
                        for (var o = 0; o < t.length; o += 1) t[o] && i.prepend(t[o]);
                        r = n + t.length
                    } else i.prepend(t);
                    e.loop && this.loopCreate(), e.observer && l.observer || this.update(), this.slideTo(r, 0, !1)
                }, addSlide: function (t, e) {
                    var i = this.$wrapperEl, n = this.params, r = this.activeIndex;
                    n.loop && (r -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + n.slideClass));
                    var o = this.slides.length;
                    if (t <= 0) this.prependSlide(e); else if (t >= o) this.appendSlide(e); else {
                        for (var a = r > t ? r + 1 : r, c = [], u = o - 1; u >= t; u -= 1) {
                            var h = this.slides.eq(u);
                            h.remove(), c.unshift(h)
                        }
                        if ("object" == s()(e) && "length" in e) {
                            for (var d = 0; d < e.length; d += 1) e[d] && i.append(e[d]);
                            a = r > t ? r + e.length : r
                        } else i.append(e);
                        for (var f = 0; f < c.length; f += 1) i.append(c[f]);
                        n.loop && this.loopCreate(), n.observer && l.observer || this.update(), n.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
                    }
                }, removeSlide: function (t) {
                    var e = this.params, i = this.$wrapperEl, n = this.activeIndex;
                    e.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + e.slideClass));
                    var r, o = n;
                    if ("object" == s()(t) && "length" in t) {
                        for (var a = 0; a < t.length; a += 1) r = t[a], this.slides[r] && this.slides.eq(r).remove(), r < o && (o -= 1);
                        o = Math.max(o, 0)
                    } else r = t, this.slides[r] && this.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);
                    e.loop && this.loopCreate(), e.observer && l.observer || this.update(), e.loop ? this.slideTo(o + this.loopedSlides, 0, !1) : this.slideTo(o, 0, !1)
                }, removeAllSlides: function () {
                    for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
                    this.removeSlide(t)
                }
            }, A = (h = e.navigator.platform, d = e.navigator.userAgent, f = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                edge: !1,
                ie: !1,
                firefox: !1,
                macos: !1,
                windows: !1,
                cordova: !(!e.cordova && !e.phonegap),
                phonegap: !(!e.cordova && !e.phonegap),
                electron: !1
            }, p = e.screen.width, v = e.screen.height, g = d.match(/(Android);?[\s\/]+([\d.]+)?/), m = d.match(/(iPad).*OS\s([\d_]+)/), y = d.match(/(iPod)(.*OS\s([\d_]+))?/), b = !m && d.match(/(iPhone\sOS|iOS)\s([\d_]+)/), w = d.indexOf("MSIE ") >= 0 || d.indexOf("Trident/") >= 0, x = d.indexOf("Edge/") >= 0, T = d.indexOf("Gecko/") >= 0 && d.indexOf("Firefox/") >= 0, C = "Win32" === h, E = d.toLowerCase().indexOf("electron") >= 0, S = "MacIntel" === h, !m && S && l.touch && (1024 === p && 1366 === v || 834 === p && 1194 === v || 834 === p && 1112 === v || 768 === p && 1024 === v) && (m = d.match(/(Version)\/([\d.]+)/), S = !1), f.ie = w, f.edge = x, f.firefox = T, g && !C && (f.os = "android", f.osVersion = g[2], f.android = !0, f.androidChrome = d.toLowerCase().indexOf("chrome") >= 0), (m || b || y) && (f.os = "ios", f.ios = !0), b && !y && (f.osVersion = b[2].replace(/_/g, "."), f.iphone = !0), m && (f.osVersion = m[2].replace(/_/g, "."), f.ipad = !0), y && (f.osVersion = y[3] ? y[3].replace(/_/g, ".") : null, f.ipod = !0), f.ios && f.osVersion && d.indexOf("Version/") >= 0 && "10" === f.osVersion.split(".")[0] && (f.osVersion = d.toLowerCase().split("version/")[1].split(" ")[0]), f.webView = !(!(b || m || y) || !d.match(/.*AppleWebKit(?!.*Safari)/i) && !e.navigator.standalone) || e.matchMedia && e.matchMedia("(display-mode: standalone)").matches, f.webview = f.webView, f.standalone = f.webView, f.desktop = !(f.ios || f.android) || E, f.desktop && (f.electron = E, f.macos = S, f.windows = C, f.macos && (f.os = "macos"), f.windows && (f.os = "windows")), f.pixelRatio = e.devicePixelRatio || 1, f);

            function I(i) {
                var r = this.touchEventsData, s = this.params, o = this.touches;
                if (!this.animating || !s.preventInteractionOnTransition) {
                    var l = i;
                    l.originalEvent && (l = l.originalEvent);
                    var c = n(l.target);
                    if (("wrapper" !== s.touchEventsTarget || c.closest(this.wrapperEl).length) && (r.isTouchEvent = "touchstart" === l.type, (r.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!r.isTouchEvent && "button" in l && l.button > 0 || r.isTouched && r.isMoved))) if (s.noSwiping && c.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) this.allowClick = !0; else if (!s.swipeHandler || c.closest(s.swipeHandler)[0]) {
                        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                        var u = o.currentX, h = o.currentY, d = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                            f = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                        if (!d || !(u <= f || u >= e.screen.width - f)) {
                            if (a.extend(r, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), o.startX = u, o.startY = h, r.touchStartTime = a.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, s.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== l.type) {
                                var p = !0;
                                c.is(r.formElements) && (p = !1), t.activeElement && n(t.activeElement).is(r.formElements) && t.activeElement !== c[0] && t.activeElement.blur();
                                var v = p && this.allowTouchMove && s.touchStartPreventDefault;
                                (s.touchStartForcePreventDefault || v) && l.preventDefault()
                            }
                            this.emit("touchStart", l)
                        }
                    }
                }
            }

            function $(e) {
                var i = this.touchEventsData, r = this.params, s = this.touches, o = this.rtlTranslate, l = e;
                if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
                    if (!i.isTouchEvent || "mousemove" !== l.type) {
                        var c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                            u = "touchmove" === l.type ? c.pageX : l.pageX,
                            h = "touchmove" === l.type ? c.pageY : l.pageY;
                        if (l.preventedByNestedSwiper) return s.startX = u, void (s.startY = h);
                        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (a.extend(s, {
                            startX: u,
                            startY: h,
                            currentX: u,
                            currentY: h
                        }), i.touchStartTime = a.now()));
                        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (this.isVertical()) {
                            if (h < s.startY && this.translate <= this.maxTranslate() || h > s.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                        } else if (u < s.startX && this.translate <= this.maxTranslate() || u > s.startX && this.translate >= this.minTranslate()) return;
                        if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && n(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
                        if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                            s.currentX = u, s.currentY = h;
                            var d, f = s.currentX - s.startX, p = s.currentY - s.startY;
                            if (!(this.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(p, 2)) < this.params.threshold)) if (void 0 === i.isScrolling && (this.isHorizontal() && s.currentY === s.startY || this.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : f * f + p * p >= 25 && (d = 180 * Math.atan2(Math.abs(p), Math.abs(f)) / Math.PI, i.isScrolling = this.isHorizontal() ? d > r.touchAngle : 90 - d > r.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                                this.allowClick = !1, r.cssMode || l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation(), i.isMoved || (r.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                                var v = this.isHorizontal() ? f : p;
                                s.diff = v, v *= r.touchRatio, o && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                                var g = !0, m = r.resistanceRatio;
                                if (r.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (g = !1, r.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (g = !1, r.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), g && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.threshold > 0) {
                                    if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, void (s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                r.followFinger && !r.cssMode && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), r.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: s[this.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }), i.velocities.push({
                                    position: s[this.isHorizontal() ? "currentX" : "currentY"],
                                    time: a.now()
                                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                            }
                        }
                    }
                } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
            }

            function O(t) {
                var e = this, i = e.touchEventsData, n = e.params, r = e.touches, s = e.rtlTranslate, o = e.$wrapperEl,
                    l = e.slidesGrid, c = e.snapGrid, u = t;
                if (u.originalEvent && (u = u.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", u), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
                var h, d = a.now(), f = d - i.touchStartTime;
                if (e.allowClick && (e.updateClickedSlide(u), e.emit("tap click", u), f < 300 && d - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", u)), i.lastClickTime = a.now(), a.nextTick(function () {
                    e.destroyed || (e.allowClick = !0)
                }), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = n.followFinger ? s ? e.translate : -e.translate : -i.currentTranslate, !n.cssMode) if (n.freeMode) {
                    if (h < -e.minTranslate()) return void e.slideTo(e.activeIndex);
                    if (h > -e.maxTranslate()) return void (e.slides.length < c.length ? e.slideTo(c.length - 1) : e.slideTo(e.slides.length - 1));
                    if (n.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var p = i.velocities.pop(), v = i.velocities.pop(), g = p.position - v.position,
                                m = p.time - v.time;
                            e.velocity = g / m, e.velocity /= 2, Math.abs(e.velocity) < n.freeModeMinimumVelocity && (e.velocity = 0), (m > 150 || a.now() - p.time > 300) && (e.velocity = 0)
                        } else e.velocity = 0;
                        e.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var y = 1e3 * n.freeModeMomentumRatio, b = e.velocity * y, w = e.translate + b;
                        s && (w = -w);
                        var x, T, C = !1, E = 20 * Math.abs(e.velocity) * n.freeModeMomentumBounceRatio;
                        if (w < e.maxTranslate()) n.freeModeMomentumBounce ? (w + e.maxTranslate() < -E && (w = e.maxTranslate() - E), x = e.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : w = e.maxTranslate(), n.loop && n.centeredSlides && (T = !0); else if (w > e.minTranslate()) n.freeModeMomentumBounce ? (w - e.minTranslate() > E && (w = e.minTranslate() + E), x = e.minTranslate(), C = !0, i.allowMomentumBounce = !0) : w = e.minTranslate(), n.loop && n.centeredSlides && (T = !0); else if (n.freeModeSticky) {
                            for (var S, _ = 0; _ < c.length; _ += 1) if (c[_] > -w) {
                                S = _;
                                break
                            }
                            w = -(w = Math.abs(c[S] - w) < Math.abs(c[S - 1] - w) || "next" === e.swipeDirection ? c[S] : c[S - 1])
                        }
                        if (T && e.once("transitionEnd", function () {
                            e.loopFix()
                        }), 0 !== e.velocity) {
                            if (y = s ? Math.abs((-w - e.translate) / e.velocity) : Math.abs((w - e.translate) / e.velocity), n.freeModeSticky) {
                                var k = Math.abs((s ? -w : w) - e.translate), M = e.slidesSizesGrid[e.activeIndex];
                                y = k < M ? n.speed : k < 2 * M ? 1.5 * n.speed : 2.5 * n.speed
                            }
                        } else if (n.freeModeSticky) return void e.slideToClosest();
                        n.freeModeMomentumBounce && C ? (e.updateProgress(x), e.setTransition(y), e.setTranslate(w), e.transitionStart(!0, e.swipeDirection), e.animating = !0, o.transitionEnd(function () {
                            e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(n.speed), e.setTranslate(x), o.transitionEnd(function () {
                                e && !e.destroyed && e.transitionEnd()
                            }))
                        })) : e.velocity ? (e.updateProgress(w), e.setTransition(y), e.setTranslate(w), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, o.transitionEnd(function () {
                            e && !e.destroyed && e.transitionEnd()
                        }))) : e.updateProgress(w), e.updateActiveIndex(), e.updateSlidesClasses()
                    } else if (n.freeModeSticky) return void e.slideToClosest();
                    (!n.freeModeMomentum || f >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                } else {
                    for (var P = 0, L = e.slidesSizesGrid[0], D = 0; D < l.length; D += n.slidesPerGroup) void 0 !== l[D + n.slidesPerGroup] ? h >= l[D] && h < l[D + n.slidesPerGroup] && (P = D, L = l[D + n.slidesPerGroup] - l[D]) : h >= l[D] && (P = D, L = l[l.length - 1] - l[l.length - 2]);
                    var A = (h - l[P]) / L;
                    if (f > n.longSwipesMs) {
                        if (!n.longSwipes) return void e.slideTo(e.activeIndex);
                        "next" === e.swipeDirection && (A >= n.longSwipesRatio ? e.slideTo(P + n.slidesPerGroup) : e.slideTo(P)), "prev" === e.swipeDirection && (A > 1 - n.longSwipesRatio ? e.slideTo(P + n.slidesPerGroup) : e.slideTo(P))
                    } else {
                        if (!n.shortSwipes) return void e.slideTo(e.activeIndex);
                        !e.navigation || u.target !== e.navigation.nextEl && u.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(P + n.slidesPerGroup), "prev" === e.swipeDirection && e.slideTo(P)) : u.target === e.navigation.nextEl ? e.slideTo(P + n.slidesPerGroup) : e.slideTo(P)
                    }
                }
            }

            function z() {
                var t = this.params, e = this.el;
                if (!e || 0 !== e.offsetWidth) {
                    t.breakpoints && this.setBreakpoint();
                    var i = this.allowSlideNext, n = this.allowSlidePrev, r = this.snapGrid;
                    this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = n, this.allowSlideNext = i, this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow()
                }
            }

            var N = !1;

            function j() {
            }

            var F = {
                    init: !0,
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    cssMode: !1,
                    preventInteractionOnTransition: !1,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    centeredSlidesBounds: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !1,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 0,
                    touchMoveStopPropagation: !1,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: .85,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    loopFillGroupWithBlank: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideBlankClass: "swiper-slide-invisible-blank",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    runCallbacksOnInit: !0
                }, H = {
                    update: _, translate: k, transition: {
                        setTransition: function (t, e) {
                            this.params.cssMode || this.$wrapperEl.transition(t), this.emit("setTransition", t, e)
                        }, transitionStart: function (t, e) {
                            void 0 === t && (t = !0);
                            var i = this.activeIndex, n = this.params, r = this.previousIndex;
                            if (!n.cssMode) {
                                n.autoHeight && this.updateAutoHeight();
                                var s = e;
                                if (s || (s = i > r ? "next" : i < r ? "prev" : "reset"), this.emit("transitionStart"), t && i !== r) {
                                    if ("reset" === s) return void this.emit("slideResetTransitionStart");
                                    this.emit("slideChangeTransitionStart"), "next" === s ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                                }
                            }
                        }, transitionEnd: function (t, e) {
                            void 0 === t && (t = !0);
                            var i = this.activeIndex, n = this.previousIndex, r = this.params;
                            if (this.animating = !1, !r.cssMode) {
                                this.setTransition(0);
                                var s = e;
                                if (s || (s = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), t && i !== n) {
                                    if ("reset" === s) return void this.emit("slideResetTransitionEnd");
                                    this.emit("slideChangeTransitionEnd"), "next" === s ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                                }
                            }
                        }
                    }, slide: M, loop: P, grabCursor: L, manipulation: D, events: {
                        attachEvents: function () {
                            var e = this.params, i = this.touchEvents, n = this.el, r = this.wrapperEl;
                            this.onTouchStart = I.bind(this), this.onTouchMove = $.bind(this), this.onTouchEnd = O.bind(this), e.cssMode && (this.onScroll = function () {
                                var t = this.wrapperEl;
                                this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -t.scrollLeft : -t.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                                var e = this.maxTranslate() - this.minTranslate();
                                (0 === e ? 0 : (this.translate - this.minTranslate()) / e) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
                            }.bind(this)), this.onClick = function (t) {
                                this.allowClick || (this.params.preventClicks && t.preventDefault(), this.params.preventClicksPropagation && this.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                            }.bind(this);
                            var s = !!e.nested;
                            if (!l.touch && l.pointerEvents) n.addEventListener(i.start, this.onTouchStart, !1), t.addEventListener(i.move, this.onTouchMove, s), t.addEventListener(i.end, this.onTouchEnd, !1); else {
                                if (l.touch) {
                                    var o = !("touchstart" !== i.start || !l.passiveListener || !e.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    n.addEventListener(i.start, this.onTouchStart, o), n.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
                                        passive: !1,
                                        capture: s
                                    } : s), n.addEventListener(i.end, this.onTouchEnd, o), i.cancel && n.addEventListener(i.cancel, this.onTouchEnd, o), N || (t.addEventListener("touchstart", j), N = !0)
                                }
                                (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !l.touch && A.ios) && (n.addEventListener("mousedown", this.onTouchStart, !1), t.addEventListener("mousemove", this.onTouchMove, s), t.addEventListener("mouseup", this.onTouchEnd, !1))
                            }
                            (e.preventClicks || e.preventClicksPropagation) && n.addEventListener("click", this.onClick, !0), e.cssMode && r.addEventListener("scroll", this.onScroll), this.on(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0)
                        }, detachEvents: function () {
                            var e = this.params, i = this.touchEvents, n = this.el, r = this.wrapperEl, s = !!e.nested;
                            if (!l.touch && l.pointerEvents) n.removeEventListener(i.start, this.onTouchStart, !1), t.removeEventListener(i.move, this.onTouchMove, s), t.removeEventListener(i.end, this.onTouchEnd, !1); else {
                                if (l.touch) {
                                    var o = !("onTouchStart" !== i.start || !l.passiveListener || !e.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    n.removeEventListener(i.start, this.onTouchStart, o), n.removeEventListener(i.move, this.onTouchMove, s), n.removeEventListener(i.end, this.onTouchEnd, o), i.cancel && n.removeEventListener(i.cancel, this.onTouchEnd, o)
                                }
                                (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !l.touch && A.ios) && (n.removeEventListener("mousedown", this.onTouchStart, !1), t.removeEventListener("mousemove", this.onTouchMove, s), t.removeEventListener("mouseup", this.onTouchEnd, !1))
                            }
                            (e.preventClicks || e.preventClicksPropagation) && n.removeEventListener("click", this.onClick, !0), e.cssMode && r.removeEventListener("scroll", this.onScroll), this.off(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z)
                        }
                    }, breakpoints: {
                        setBreakpoint: function () {
                            var t = this.activeIndex, e = this.initialized, i = this.loopedSlides;
                            void 0 === i && (i = 0);
                            var n = this.params, r = this.$el, s = n.breakpoints;
                            if (s && (!s || 0 !== Object.keys(s).length)) {
                                var o = this.getBreakpoint(s);
                                if (o && this.currentBreakpoint !== o) {
                                    var l = o in s ? s[o] : void 0;
                                    l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn"].forEach(function (t) {
                                        var e = l[t];
                                        void 0 !== e && (l[t] = "slidesPerView" !== t || "AUTO" !== e && "auto" !== e ? "slidesPerView" === t ? parseFloat(e) : parseInt(e, 10) : "auto")
                                    });
                                    var c = l || this.originalParams, u = n.slidesPerColumn > 1, h = c.slidesPerColumn > 1;
                                    u && !h ? r.removeClass(n.containerModifierClass + "multirow " + n.containerModifierClass + "multirow-column") : !u && h && (r.addClass(n.containerModifierClass + "multirow"), "column" === c.slidesPerColumnFill && r.addClass(n.containerModifierClass + "multirow-column"));
                                    var d = c.direction && c.direction !== n.direction,
                                        f = n.loop && (c.slidesPerView !== n.slidesPerView || d);
                                    d && e && this.changeDirection(), a.extend(this.params, c), a.extend(this, {
                                        allowTouchMove: this.params.allowTouchMove,
                                        allowSlideNext: this.params.allowSlideNext,
                                        allowSlidePrev: this.params.allowSlidePrev
                                    }), this.currentBreakpoint = o, f && e && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(t - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", c)
                                }
                            }
                        }, getBreakpoint: function (t) {
                            if (t) {
                                var i = !1, n = [];
                                Object.keys(t).forEach(function (t) {
                                    n.push(t)
                                }), n.sort(function (t, e) {
                                    return parseInt(t, 10) - parseInt(e, 10)
                                });
                                for (var r = 0; r < n.length; r += 1) {
                                    var s = n[r];
                                    s <= e.innerWidth && (i = s)
                                }
                                return i || "max"
                            }
                        }
                    }, checkOverflow: {
                        checkOverflow: function () {
                            var t = this.params, e = this.isLocked,
                                i = this.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                            t.slidesOffsetBefore && t.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                        }
                    }, classes: {
                        addClasses: function () {
                            var t = this.classNames, e = this.params, i = this.rtl, n = this.$el, r = [];
                            r.push("initialized"), r.push(e.direction), e.freeMode && r.push("free-mode"), e.autoHeight && r.push("autoheight"), i && r.push("rtl"), e.slidesPerColumn > 1 && (r.push("multirow"), "column" === e.slidesPerColumnFill && r.push("multirow-column")), A.android && r.push("android"), A.ios && r.push("ios"), e.cssMode && r.push("css-mode"), r.forEach(function (i) {
                                t.push(e.containerModifierClass + i)
                            }), n.addClass(t.join(" "))
                        }, removeClasses: function () {
                            var t = this.$el, e = this.classNames;
                            t.removeClass(e.join(" "))
                        }
                    }, images: {
                        loadImage: function (t, i, n, r, s, o) {
                            var a;

                            function l() {
                                o && o()
                            }

                            t.complete && s ? l() : i ? ((a = new e.Image).onload = l, a.onerror = l, r && (a.sizes = r), n && (a.srcset = n), i && (a.src = i)) : l()
                        }, preloadImages: function () {
                            var t = this;

                            function e() {
                                null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                            }

                            t.imagesToLoad = t.$el.find("img");
                            for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                                var n = t.imagesToLoad[i];
                                t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
                            }
                        }
                    }
                }, R = {}, B = function (t) {
                    function e() {
                        for (var i, r, o, c = [], u = arguments.length; u--;) c[u] = arguments[u];
                        1 === c.length && c[0].constructor && c[0].constructor === Object ? o = c[0] : (r = (i = c)[0], o = i[1]), o || (o = {}), o = a.extend({}, o), r && !o.el && (o.el = r), t.call(this, o), Object.keys(H).forEach(function (t) {
                            Object.keys(H[t]).forEach(function (i) {
                                e.prototype[i] || (e.prototype[i] = H[t][i])
                            })
                        });
                        var h = this;
                        void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach(function (t) {
                            var e = h.modules[t];
                            if (e.params) {
                                var i = Object.keys(e.params)[0], n = e.params[i];
                                if ("object" != s()(n) || null === n) return;
                                if (!(i in o && "enabled" in n)) return;
                                !0 === o[i] && (o[i] = {enabled: !0}), "object" != s()(o[i]) || "enabled" in o[i] || (o[i].enabled = !0), o[i] || (o[i] = {enabled: !1})
                            }
                        });
                        var d = a.extend({}, F);
                        h.useModulesParams(d), h.params = a.extend({}, d, R, o), h.originalParams = a.extend({}, h.params), h.passedParams = a.extend({}, o), h.$ = n;
                        var f = n(h.params.el);
                        if (r = f[0]) {
                            if (f.length > 1) {
                                var p = [];
                                return f.each(function (t, i) {
                                    var n = a.extend({}, o, {el: i});
                                    p.push(new e(n))
                                }), p
                            }
                            var v, g, m;
                            return r.swiper = h, f.data("swiper", h), r && r.shadowRoot && r.shadowRoot.querySelector ? (v = n(r.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function (t) {
                                return f.children(t)
                            } : v = f.children("." + h.params.wrapperClass), a.extend(h, {
                                $el: f,
                                el: r,
                                $wrapperEl: v,
                                wrapperEl: v[0],
                                classNames: [],
                                slides: n(),
                                slidesGrid: [],
                                snapGrid: [],
                                slidesSizesGrid: [],
                                isHorizontal: function () {
                                    return "horizontal" === h.params.direction
                                },
                                isVertical: function () {
                                    return "vertical" === h.params.direction
                                },
                                rtl: "rtl" === r.dir.toLowerCase() || "rtl" === f.css("direction"),
                                rtlTranslate: "horizontal" === h.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === f.css("direction")),
                                wrongRTL: "-webkit-box" === v.css("display"),
                                activeIndex: 0,
                                realIndex: 0,
                                isBeginning: !0,
                                isEnd: !1,
                                translate: 0,
                                previousTranslate: 0,
                                progress: 0,
                                velocity: 0,
                                animating: !1,
                                allowSlideNext: h.params.allowSlideNext,
                                allowSlidePrev: h.params.allowSlidePrev,
                                touchEvents: (g = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], l.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
                                    start: g[0],
                                    move: g[1],
                                    end: g[2],
                                    cancel: g[3]
                                }, h.touchEventsDesktop = {
                                    start: m[0],
                                    move: m[1],
                                    end: m[2]
                                }, l.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                                touchEventsData: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    allowTouchCallbacks: void 0,
                                    touchStartTime: void 0,
                                    isScrolling: void 0,
                                    currentTranslate: void 0,
                                    startTranslate: void 0,
                                    allowThresholdMove: void 0,
                                    formElements: "input, select, option, textarea, button, video",
                                    lastClickTime: a.now(),
                                    clickTimeout: void 0,
                                    velocities: [],
                                    allowMomentumBounce: void 0,
                                    isTouchEvent: void 0,
                                    startMoving: void 0
                                },
                                allowClick: !0,
                                allowTouchMove: h.params.allowTouchMove,
                                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                                imagesToLoad: [],
                                imagesLoaded: 0
                            }), h.useModules(), h.params.init && h.init(), h
                        }
                    }

                    t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                    var i = {
                        extendedDefaults: {configurable: !0},
                        defaults: {configurable: !0},
                        Class: {configurable: !0},
                        $: {configurable: !0}
                    };
                    return e.prototype.slidesPerViewDynamic = function () {
                        var t = this.params, e = this.slides, i = this.slidesGrid, n = this.size, r = this.activeIndex,
                            s = 1;
                        if (t.centeredSlides) {
                            for (var o, a = e[r].swiperSlideSize, l = r + 1; l < e.length; l += 1) e[l] && !o && (s += 1, (a += e[l].swiperSlideSize) > n && (o = !0));
                            for (var c = r - 1; c >= 0; c -= 1) e[c] && !o && (s += 1, (a += e[c].swiperSlideSize) > n && (o = !0))
                        } else for (var u = r + 1; u < e.length; u += 1) i[u] - i[r] < n && (s += 1);
                        return s
                    }, e.prototype.update = function () {
                        var t = this;
                        if (t && !t.destroyed) {
                            var e = t.snapGrid, i = t.params;
                            i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (n(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
                        }

                        function n() {
                            var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                                i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                            t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                        }
                    }, e.prototype.changeDirection = function (t, e) {
                        void 0 === e && (e = !0);
                        var i = this.params.direction;
                        return t || (t = "horizontal" === i ? "vertical" : "horizontal"), t === i || "horizontal" !== t && "vertical" !== t ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + t), this.params.direction = t, this.slides.each(function (e, i) {
                            "vertical" === t ? i.style.width = "" : i.style.height = ""
                        }), this.emit("changeDirection"), e && this.update(), this)
                    }, e.prototype.init = function () {
                        this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                    }, e.prototype.destroy = function (t, e) {
                        void 0 === t && (t = !0), void 0 === e && (e = !0);
                        var i = this, n = i.params, r = i.$el, s = i.$wrapperEl, o = i.slides;
                        return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), e && (i.removeClasses(), r.removeAttr("style"), s.removeAttr("style"), o && o.length && o.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (t) {
                            i.off(t)
                        }), !1 !== t && (i.$el[0].swiper = null, i.$el.data("swiper", null), a.deleteProps(i)), i.destroyed = !0, null)
                    }, e.extendDefaults = function (t) {
                        a.extend(R, t)
                    }, i.extendedDefaults.get = function () {
                        return R
                    }, i.defaults.get = function () {
                        return F
                    }, i.Class.get = function () {
                        return t
                    }, i.$.get = function () {
                        return n
                    }, Object.defineProperties(e, i), e
                }(c), q = {name: "device", proto: {device: A}, static: {device: A}},
                W = {name: "support", proto: {support: l}, static: {support: l}}, G = {
                    isEdge: !!e.navigator.userAgent.match(/Edge/g), isSafari: function () {
                        var t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                }, Y = {name: "browser", proto: {browser: G}, static: {browser: G}}, V = {
                    name: "resize", create: function () {
                        var t = this;
                        a.extend(t, {
                            resize: {
                                resizeHandler: function () {
                                    t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
                                }, orientationChangeHandler: function () {
                                    t && !t.destroyed && t.initialized && t.emit("orientationchange")
                                }
                            }
                        })
                    }, on: {
                        init: function () {
                            e.addEventListener("resize", this.resize.resizeHandler), e.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                        }, destroy: function () {
                            e.removeEventListener("resize", this.resize.resizeHandler), e.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                        }
                    }
                }, X = {
                    func: e.MutationObserver || e.WebkitMutationObserver, attach: function (t, i) {
                        void 0 === i && (i = {});
                        var n = this, r = new (0, X.func)(function (t) {
                            if (1 !== t.length) {
                                var i = function () {
                                    n.emit("observerUpdate", t[0])
                                };
                                e.requestAnimationFrame ? e.requestAnimationFrame(i) : e.setTimeout(i, 0)
                            } else n.emit("observerUpdate", t[0])
                        });
                        r.observe(t, {
                            attributes: void 0 === i.attributes || i.attributes,
                            childList: void 0 === i.childList || i.childList,
                            characterData: void 0 === i.characterData || i.characterData
                        }), n.observer.observers.push(r)
                    }, init: function () {
                        if (l.observer && this.params.observer) {
                            if (this.params.observeParents) for (var t = this.$el.parents(), e = 0; e < t.length; e += 1) this.observer.attach(t[e]);
                            this.observer.attach(this.$el[0], {childList: this.params.observeSlideChildren}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
                        }
                    }, destroy: function () {
                        this.observer.observers.forEach(function (t) {
                            t.disconnect()
                        }), this.observer.observers = []
                    }
                }, U = {
                    name: "observer",
                    params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
                    create: function () {
                        a.extend(this, {
                            observer: {
                                init: X.init.bind(this),
                                attach: X.attach.bind(this),
                                destroy: X.destroy.bind(this),
                                observers: []
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.observer.init()
                        }, destroy: function () {
                            this.observer.destroy()
                        }
                    }
                }, K = {
                    update: function (t) {
                        var e = this, i = e.params, n = i.slidesPerView, r = i.slidesPerGroup, s = i.centeredSlides,
                            o = e.params.virtual, l = o.addSlidesBefore, c = o.addSlidesAfter, u = e.virtual, h = u.from,
                            d = u.to, f = u.slides, p = u.slidesGrid, v = u.renderSlide, g = u.offset;
                        e.updateActiveIndex();
                        var m, y, b, w = e.activeIndex || 0;
                        m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", s ? (y = Math.floor(n / 2) + r + l, b = Math.floor(n / 2) + r + c) : (y = n + (r - 1) + l, b = r + c);
                        var x = Math.max((w || 0) - b, 0), T = Math.min((w || 0) + y, f.length - 1),
                            C = (e.slidesGrid[x] || 0) - (e.slidesGrid[0] || 0);

                        function E() {
                            e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load()
                        }

                        if (a.extend(e.virtual, {
                            from: x,
                            to: T,
                            offset: C,
                            slidesGrid: e.slidesGrid
                        }), h === x && d === T && !t) return e.slidesGrid !== p && C !== g && e.slides.css(m, C + "px"), void e.updateProgress();
                        if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
                            offset: C,
                            from: x,
                            to: T,
                            slides: function () {
                                for (var t = [], e = x; e <= T; e += 1) t.push(f[e]);
                                return t
                            }()
                        }), void E();
                        var S = [], _ = [];
                        if (t) e.$wrapperEl.find("." + e.params.slideClass).remove(); else for (var k = h; k <= d; k += 1) (k < x || k > T) && e.$wrapperEl.find("." + e.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                        for (var M = 0; M < f.length; M += 1) M >= x && M <= T && (void 0 === d || t ? _.push(M) : (M > d && _.push(M), M < h && S.push(M)));
                        _.forEach(function (t) {
                            e.$wrapperEl.append(v(f[t], t))
                        }), S.sort(function (t, e) {
                            return e - t
                        }).forEach(function (t) {
                            e.$wrapperEl.prepend(v(f[t], t))
                        }), e.$wrapperEl.children(".swiper-slide").css(m, C + "px"), E()
                    }, renderSlide: function (t, e) {
                        var i = this.params.virtual;
                        if (i.cache && this.virtual.cache[e]) return this.virtual.cache[e];
                        var r = i.renderSlide ? n(i.renderSlide.call(this, t, e)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + e + '">' + t + "</div>");
                        return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", e), i.cache && (this.virtual.cache[e] = r), r
                    }, appendSlide: function (t) {
                        if ("object" == s()(t) && "length" in t) for (var e = 0; e < t.length; e += 1) t[e] && this.virtual.slides.push(t[e]); else this.virtual.slides.push(t);
                        this.virtual.update(!0)
                    }, prependSlide: function (t) {
                        var e = this.activeIndex, i = e + 1, n = 1;
                        if (Array.isArray(t)) {
                            for (var r = 0; r < t.length; r += 1) t[r] && this.virtual.slides.unshift(t[r]);
                            i = e + t.length, n = t.length
                        } else this.virtual.slides.unshift(t);
                        if (this.params.virtual.cache) {
                            var s = this.virtual.cache, o = {};
                            Object.keys(s).forEach(function (t) {
                                var e = s[t], i = e.attr("data-swiper-slide-index");
                                i && e.attr("data-swiper-slide-index", parseInt(i, 10) + 1), o[parseInt(t, 10) + n] = e
                            }), this.virtual.cache = o
                        }
                        this.virtual.update(!0), this.slideTo(i, 0)
                    }, removeSlide: function (t) {
                        if (null != t) {
                            var e = this.activeIndex;
                            if (Array.isArray(t)) for (var i = t.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(t[i], 1), this.params.virtual.cache && delete this.virtual.cache[t[i]], t[i] < e && (e -= 1), e = Math.max(e, 0); else this.virtual.slides.splice(t, 1), this.params.virtual.cache && delete this.virtual.cache[t], t < e && (e -= 1), e = Math.max(e, 0);
                            this.virtual.update(!0), this.slideTo(e, 0)
                        }
                    }, removeAllSlides: function () {
                        this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
                    }
                }, Q = {
                    name: "virtual",
                    params: {
                        virtual: {
                            enabled: !1,
                            slides: [],
                            cache: !0,
                            renderSlide: null,
                            renderExternal: null,
                            addSlidesBefore: 0,
                            addSlidesAfter: 0
                        }
                    },
                    create: function () {
                        a.extend(this, {
                            virtual: {
                                update: K.update.bind(this),
                                appendSlide: K.appendSlide.bind(this),
                                prependSlide: K.prependSlide.bind(this),
                                removeSlide: K.removeSlide.bind(this),
                                removeAllSlides: K.removeAllSlides.bind(this),
                                renderSlide: K.renderSlide.bind(this),
                                slides: this.params.virtual.slides,
                                cache: {}
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            if (this.params.virtual.enabled) {
                                this.classNames.push(this.params.containerModifierClass + "virtual");
                                var t = {watchSlidesProgress: !0};
                                a.extend(this.params, t), a.extend(this.originalParams, t), this.params.initialSlide || this.virtual.update()
                            }
                        }, setTranslate: function () {
                            this.params.virtual.enabled && this.virtual.update()
                        }
                    }
                }, J = {
                    handle: function (i) {
                        var n = this.rtlTranslate, r = i;
                        r.originalEvent && (r = r.originalEvent);
                        var s = r.keyCode || r.charCode;
                        if (!this.allowSlideNext && (this.isHorizontal() && 39 === s || this.isVertical() && 40 === s || 34 === s)) return !1;
                        if (!this.allowSlidePrev && (this.isHorizontal() && 37 === s || this.isVertical() && 38 === s || 33 === s)) return !1;
                        if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || t.activeElement && t.activeElement.nodeName && ("input" === t.activeElement.nodeName.toLowerCase() || "textarea" === t.activeElement.nodeName.toLowerCase()))) {
                            if (this.params.keyboard.onlyInViewport && (33 === s || 34 === s || 37 === s || 39 === s || 38 === s || 40 === s)) {
                                var o = !1;
                                if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                                var a = e.innerWidth, l = e.innerHeight, c = this.$el.offset();
                                n && (c.left -= this.$el[0].scrollLeft);
                                for (var u = [[c.left, c.top], [c.left + this.width, c.top], [c.left, c.top + this.height], [c.left + this.width, c.top + this.height]], h = 0; h < u.length; h += 1) {
                                    var d = u[h];
                                    d[0] >= 0 && d[0] <= a && d[1] >= 0 && d[1] <= l && (o = !0)
                                }
                                if (!o) return
                            }
                            this.isHorizontal() ? (33 !== s && 34 !== s && 37 !== s && 39 !== s || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (34 !== s && 39 !== s || n) && (33 !== s && 37 !== s || !n) || this.slideNext(), (33 !== s && 37 !== s || n) && (34 !== s && 39 !== s || !n) || this.slidePrev()) : (33 !== s && 34 !== s && 38 !== s && 40 !== s || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), 34 !== s && 40 !== s || this.slideNext(), 33 !== s && 38 !== s || this.slidePrev()), this.emit("keyPress", s)
                        }
                    }, enable: function () {
                        this.keyboard.enabled || (n(t).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                    }, disable: function () {
                        this.keyboard.enabled && (n(t).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                    }
                }, Z = {
                    name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                        a.extend(this, {
                            keyboard: {
                                enabled: !1,
                                enable: J.enable.bind(this),
                                disable: J.disable.bind(this),
                                handle: J.handle.bind(this)
                            }
                        })
                    }, on: {
                        init: function () {
                            this.params.keyboard.enabled && this.keyboard.enable()
                        }, destroy: function () {
                            this.keyboard.enabled && this.keyboard.disable()
                        }
                    }
                }, tt = {
                    lastScrollTime: a.now(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function () {
                        return e.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                            var e = "onwheel" in t;
                            if (!e) {
                                var i = t.createElement("div");
                                i.setAttribute("onwheel", "return;"), e = "function" == typeof i.onwheel
                            }
                            return !e && t.implementation && t.implementation.hasFeature && !0 !== t.implementation.hasFeature("", "") && (e = t.implementation.hasFeature("Events.wheel", "3.0")), e
                        }() ? "wheel" : "mousewheel"
                    }, normalize: function (t) {
                        var e = 0, i = 0, n = 0, r = 0;
                        return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, r = 10 * i, "deltaY" in t && (r = t.deltaY), "deltaX" in t && (n = t.deltaX), t.shiftKey && !n && (n = r, r = 0), (n || r) && t.deltaMode && (1 === t.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !e && (e = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                            spinX: e,
                            spinY: i,
                            pixelX: n,
                            pixelY: r
                        }
                    }, handleMouseEnter: function () {
                        this.mouseEntered = !0
                    }, handleMouseLeave: function () {
                        this.mouseEntered = !1
                    }, handle: function (t) {
                        var i = t, n = this, r = n.params.mousewheel;
                        if (n.params.cssMode && i.preventDefault(), !n.mouseEntered && !r.releaseOnEdges) return !0;
                        i.originalEvent && (i = i.originalEvent);
                        var s = 0, o = n.rtlTranslate ? -1 : 1, l = tt.normalize(i);
                        if (r.forceToAxis) if (n.isHorizontal()) {
                            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                            s = l.pixelX * o
                        } else {
                            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                            s = l.pixelY
                        } else s = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
                        if (0 === s) return !0;
                        if (r.invert && (s = -s), n.params.freeMode) {
                            var c = {time: a.now(), delta: Math.abs(s), direction: Math.sign(s)},
                                u = n.mousewheel.lastEventBeforeSnap,
                                h = u && c.time < u.time + 500 && c.delta <= u.delta && c.direction === u.direction;
                            if (!h) {
                                n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
                                var d = n.getTranslate() + s * r.sensitivity, f = n.isBeginning, p = n.isEnd;
                                if (d >= n.minTranslate() && (d = n.minTranslate()), d <= n.maxTranslate() && (d = n.maxTranslate()), n.setTransition(0), n.setTranslate(d), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!f && n.isBeginning || !p && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky) {
                                    clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0;
                                    var v = n.mousewheel.recentWheelEvents;
                                    v.length >= 15 && v.shift();
                                    var g = v.length ? v[v.length - 1] : void 0, m = v[0];
                                    if (v.push(c), g && (c.delta > g.delta || c.direction !== g.direction)) v.splice(0); else if (v.length >= 15 && c.time - m.time < 500 && m.delta - c.delta >= 1 && c.delta <= 6) {
                                        var y = s > 0 ? .8 : .2;
                                        n.mousewheel.lastEventBeforeSnap = c, v.splice(0), n.mousewheel.timeout = a.nextTick(function () {
                                            n.slideToClosest(n.params.speed, !0, void 0, y)
                                        }, 0)
                                    }
                                    n.mousewheel.timeout || (n.mousewheel.timeout = a.nextTick(function () {
                                        n.mousewheel.lastEventBeforeSnap = c, v.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5)
                                    }, 500))
                                }
                                if (h || n.emit("scroll", i), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), d === n.minTranslate() || d === n.maxTranslate()) return !0
                            }
                        } else {
                            if (a.now() - n.mousewheel.lastScrollTime > 60) if (s < 0) if (n.isEnd && !n.params.loop || n.animating) {
                                if (r.releaseOnEdges) return !0
                            } else n.slideNext(), n.emit("scroll", i); else if (n.isBeginning && !n.params.loop || n.animating) {
                                if (r.releaseOnEdges) return !0
                            } else n.slidePrev(), n.emit("scroll", i);
                            n.mousewheel.lastScrollTime = (new e.Date).getTime()
                        }
                        return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
                    }, enable: function () {
                        var t = tt.event();
                        if (this.params.cssMode) return this.wrapperEl.removeEventListener(t, this.mousewheel.handle), !0;
                        if (!t) return !1;
                        if (this.mousewheel.enabled) return !1;
                        var e = this.$el;
                        return "container" !== this.params.mousewheel.eventsTarged && (e = n(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(t, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
                    }, disable: function () {
                        var t = tt.event();
                        if (this.params.cssMode) return this.wrapperEl.addEventListener(t, this.mousewheel.handle), !0;
                        if (!t) return !1;
                        if (!this.mousewheel.enabled) return !1;
                        var e = this.$el;
                        return "container" !== this.params.mousewheel.eventsTarged && (e = n(this.params.mousewheel.eventsTarged)), e.off(t, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
                    }
                }, et = {
                    update: function () {
                        var t = this.params.navigation;
                        if (!this.params.loop) {
                            var e = this.navigation, i = e.$nextEl, n = e.$prevEl;
                            n && n.length > 0 && (this.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass))
                        }
                    }, onPrevClick: function (t) {
                        t.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
                    }, onNextClick: function (t) {
                        t.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
                    }, init: function () {
                        var t, e, i = this.params.navigation;
                        (i.nextEl || i.prevEl) && (i.nextEl && (t = n(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && t.length > 1 && 1 === this.$el.find(i.nextEl).length && (t = this.$el.find(i.nextEl))), i.prevEl && (e = n(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && e.length > 1 && 1 === this.$el.find(i.prevEl).length && (e = this.$el.find(i.prevEl))), t && t.length > 0 && t.on("click", this.navigation.onNextClick), e && e.length > 0 && e.on("click", this.navigation.onPrevClick), a.extend(this.navigation, {
                            $nextEl: t,
                            nextEl: t && t[0],
                            $prevEl: e,
                            prevEl: e && e[0]
                        }))
                    }, destroy: function () {
                        var t = this.navigation, e = t.$nextEl, i = t.$prevEl;
                        e && e.length && (e.off("click", this.navigation.onNextClick), e.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
                    }
                }, it = {
                    update: function () {
                        var t = this.rtl, e = this.params.pagination;
                        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                            var i,
                                r = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                                s = this.pagination.$el,
                                o = this.params.loop ? Math.ceil((r - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                            if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > r - 1 - 2 * this.loopedSlides && (i -= r - 2 * this.loopedSlides), i > o - 1 && (i -= o), i < 0 && "bullets" !== this.params.paginationType && (i = o + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === e.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                                var a, l, c, u = this.pagination.bullets;
                                if (e.dynamicBullets && (this.pagination.bulletSize = u.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (e.dynamicMainBullets + 4) + "px"), e.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > e.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = e.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), a = i - this.pagination.dynamicBulletIndex, c = ((l = a + (Math.min(u.length, e.dynamicMainBullets) - 1)) + a) / 2), u.removeClass(e.bulletActiveClass + " " + e.bulletActiveClass + "-next " + e.bulletActiveClass + "-next-next " + e.bulletActiveClass + "-prev " + e.bulletActiveClass + "-prev-prev " + e.bulletActiveClass + "-main"), s.length > 1) u.each(function (t, r) {
                                    var s = n(r), o = s.index();
                                    o === i && s.addClass(e.bulletActiveClass), e.dynamicBullets && (o >= a && o <= l && s.addClass(e.bulletActiveClass + "-main"), o === a && s.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"), o === l && s.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next"))
                                }); else {
                                    var h = u.eq(i), d = h.index();
                                    if (h.addClass(e.bulletActiveClass), e.dynamicBullets) {
                                        for (var f = u.eq(a), p = u.eq(l), v = a; v <= l; v += 1) u.eq(v).addClass(e.bulletActiveClass + "-main");
                                        if (this.params.loop) if (d >= u.length - e.dynamicMainBullets) {
                                            for (var g = e.dynamicMainBullets; g >= 0; g -= 1) u.eq(u.length - g).addClass(e.bulletActiveClass + "-main");
                                            u.eq(u.length - e.dynamicMainBullets - 1).addClass(e.bulletActiveClass + "-prev")
                                        } else f.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"), p.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next"); else f.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"), p.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next")
                                    }
                                }
                                if (e.dynamicBullets) {
                                    var m = Math.min(u.length, e.dynamicMainBullets + 4),
                                        y = (this.pagination.bulletSize * m - this.pagination.bulletSize) / 2 - c * this.pagination.bulletSize,
                                        b = t ? "right" : "left";
                                    u.css(this.isHorizontal() ? b : "top", y + "px")
                                }
                            }
                            if ("fraction" === e.type && (s.find("." + e.currentClass).text(e.formatFractionCurrent(i + 1)), s.find("." + e.totalClass).text(e.formatFractionTotal(o))), "progressbar" === e.type) {
                                var w;
                                w = e.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                                var x = (i + 1) / o, T = 1, C = 1;
                                "horizontal" === w ? T = x : C = x, s.find("." + e.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")").transition(this.params.speed)
                            }
                            "custom" === e.type && e.renderCustom ? (s.html(e.renderCustom(this, i + 1, o)), this.emit("paginationRender", this, s[0])) : this.emit("paginationUpdate", this, s[0]), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)
                        }
                    }, render: function () {
                        var t = this.params.pagination;
                        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                            var e = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                                i = this.pagination.$el, n = "";
                            if ("bullets" === t.type) {
                                for (var r = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, s = 0; s < r; s += 1) t.renderBullet ? n += t.renderBullet.call(this, s, t.bulletClass) : n += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                                i.html(n), this.pagination.bullets = i.find("." + t.bulletClass)
                            }
                            "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(this, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(this, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(n)), "custom" !== t.type && this.emit("paginationRender", this.pagination.$el[0])
                        }
                    }, init: function () {
                        var t = this, e = t.params.pagination;
                        if (e.el) {
                            var i = n(e.el);
                            0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && 1 === t.$el.find(e.el).length && (i = t.$el.find(e.el)), "bullets" === e.type && e.clickable && i.addClass(e.clickableClass), i.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (i.addClass("" + e.modifierClass + e.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass), e.clickable && i.on("click", "." + e.bulletClass, function (e) {
                                e.preventDefault();
                                var i = n(this).index() * t.params.slidesPerGroup;
                                t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                            }), a.extend(t.pagination, {$el: i, el: i[0]}))
                        }
                    }, destroy: function () {
                        var t = this.params.pagination;
                        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                            var e = this.pagination.$el;
                            e.removeClass(t.hiddenClass), e.removeClass(t.modifierClass + t.type), this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && e.off("click", "." + t.bulletClass)
                        }
                    }
                }, nt = {
                    setTranslate: function () {
                        if (this.params.scrollbar.el && this.scrollbar.el) {
                            var t = this.scrollbar, e = this.rtlTranslate, i = this.progress, n = t.dragSize,
                                r = t.trackSize, s = t.$dragEl, o = t.$el, a = this.params.scrollbar, l = n,
                                c = (r - n) * i;
                            e ? (c = -c) > 0 ? (l = n - c, c = 0) : -c + n > r && (l = r + c) : c < 0 ? (l = n + c, c = 0) : c + n > r && (l = r - c), this.isHorizontal() ? (s.transform("translate3d(" + c + "px, 0, 0)"), s[0].style.width = l + "px") : (s.transform("translate3d(0px, " + c + "px, 0)"), s[0].style.height = l + "px"), a.hide && (clearTimeout(this.scrollbar.timeout), o[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                                o[0].style.opacity = 0, o.transition(400)
                            }, 1e3))
                        }
                    }, setTransition: function (t) {
                        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t)
                    }, updateSize: function () {
                        if (this.params.scrollbar.el && this.scrollbar.el) {
                            var t = this.scrollbar, e = t.$dragEl, i = t.$el;
                            e[0].style.width = "", e[0].style.height = "";
                            var n, r = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                                s = this.size / this.virtualSize, o = s * (r / this.size);
                            n = "auto" === this.params.scrollbar.dragSize ? r * s : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? e[0].style.width = n + "px" : e[0].style.height = n + "px", i[0].style.display = s >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), a.extend(t, {
                                trackSize: r,
                                divider: s,
                                moveDivider: o,
                                dragSize: n
                            }), t.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                        }
                    }, getPointerPosition: function (t) {
                        return this.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
                    }, setDragPosition: function (t) {
                        var e, i = this.scrollbar, n = this.rtlTranslate, r = i.$el, s = i.dragSize, o = i.trackSize,
                            a = i.dragStartPos;
                        e = (i.getPointerPosition(t) - r.offset()[this.isHorizontal() ? "left" : "top"] - (null !== a ? a : s / 2)) / (o - s), e = Math.max(Math.min(e, 1), 0), n && (e = 1 - e);
                        var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * e;
                        this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
                    }, onDragStart: function (t) {
                        var e = this.params.scrollbar, i = this.scrollbar, n = this.$wrapperEl, r = i.$el, s = i.$dragEl;
                        this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = t.target === s[0] || t.target === s ? i.getPointerPosition(t) - t.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), n.transition(100), s.transition(100), i.setDragPosition(t), clearTimeout(this.scrollbar.dragTimeout), r.transition(0), e.hide && r.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", t)
                    }, onDragMove: function (t) {
                        var e = this.scrollbar, i = this.$wrapperEl, n = e.$el, r = e.$dragEl;
                        this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", t))
                    }, onDragEnd: function (t) {
                        var e = this.params.scrollbar, i = this.scrollbar, n = this.$wrapperEl, r = i.$el;
                        this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), n.transition("")), e.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = a.nextTick(function () {
                            r.css("opacity", 0), r.transition(400)
                        }, 1e3)), this.emit("scrollbarDragEnd", t), e.snapOnRelease && this.slideToClosest())
                    }, enableDraggable: function () {
                        if (this.params.scrollbar.el) {
                            var e = this.scrollbar, i = this.touchEventsTouch, n = this.touchEventsDesktop, r = this.params,
                                s = e.$el[0],
                                o = !(!l.passiveListener || !r.passiveListeners) && {passive: !1, capture: !1},
                                a = !(!l.passiveListener || !r.passiveListeners) && {passive: !0, capture: !1};
                            l.touch ? (s.addEventListener(i.start, this.scrollbar.onDragStart, o), s.addEventListener(i.move, this.scrollbar.onDragMove, o), s.addEventListener(i.end, this.scrollbar.onDragEnd, a)) : (s.addEventListener(n.start, this.scrollbar.onDragStart, o), t.addEventListener(n.move, this.scrollbar.onDragMove, o), t.addEventListener(n.end, this.scrollbar.onDragEnd, a))
                        }
                    }, disableDraggable: function () {
                        if (this.params.scrollbar.el) {
                            var e = this.scrollbar, i = this.touchEventsTouch, n = this.touchEventsDesktop, r = this.params,
                                s = e.$el[0],
                                o = !(!l.passiveListener || !r.passiveListeners) && {passive: !1, capture: !1},
                                a = !(!l.passiveListener || !r.passiveListeners) && {passive: !0, capture: !1};
                            l.touch ? (s.removeEventListener(i.start, this.scrollbar.onDragStart, o), s.removeEventListener(i.move, this.scrollbar.onDragMove, o), s.removeEventListener(i.end, this.scrollbar.onDragEnd, a)) : (s.removeEventListener(n.start, this.scrollbar.onDragStart, o), t.removeEventListener(n.move, this.scrollbar.onDragMove, o), t.removeEventListener(n.end, this.scrollbar.onDragEnd, a))
                        }
                    }, init: function () {
                        if (this.params.scrollbar.el) {
                            var t = this.scrollbar, e = this.$el, i = this.params.scrollbar, r = n(i.el);
                            this.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === e.find(i.el).length && (r = e.find(i.el));
                            var s = r.find("." + this.params.scrollbar.dragClass);
                            0 === s.length && (s = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'), r.append(s)), a.extend(t, {
                                $el: r,
                                el: r[0],
                                $dragEl: s,
                                dragEl: s[0]
                            }), i.draggable && t.enableDraggable()
                        }
                    }, destroy: function () {
                        this.scrollbar.disableDraggable()
                    }
                }, rt = {
                    setTransform: function (t, e) {
                        var i = this.rtl, r = n(t), s = i ? -1 : 1, o = r.attr("data-swiper-parallax") || "0",
                            a = r.attr("data-swiper-parallax-x"), l = r.attr("data-swiper-parallax-y"),
                            c = r.attr("data-swiper-parallax-scale"), u = r.attr("data-swiper-parallax-opacity");
                        if (a || l ? (a = a || "0", l = l || "0") : this.isHorizontal() ? (a = o, l = "0") : (l = o, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * e * s + "%" : a * e * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * e + "%" : l * e + "px", null != u) {
                            var h = u - (u - 1) * (1 - Math.abs(e));
                            r[0].style.opacity = h
                        }
                        if (null == c) r.transform("translate3d(" + a + ", " + l + ", 0px)"); else {
                            var d = c - (c - 1) * (1 - Math.abs(e));
                            r.transform("translate3d(" + a + ", " + l + ", 0px) scale(" + d + ")")
                        }
                    }, setTranslate: function () {
                        var t = this, e = t.$el, i = t.slides, r = t.progress, s = t.snapGrid;
                        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, i) {
                            t.parallax.setTransform(i, r)
                        }), i.each(function (e, i) {
                            var o = i.progress;
                            t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(e / 2) - r * (s.length - 1)), o = Math.min(Math.max(o, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, i) {
                                t.parallax.setTransform(i, o)
                            })
                        })
                    }, setTransition: function (t) {
                        void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, i) {
                            var r = n(i), s = parseInt(r.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (s = 0), r.transition(s)
                        })
                    }
                }, st = {
                    getDistanceBetweenTouches: function (t) {
                        if (t.targetTouches.length < 2) return 1;
                        var e = t.targetTouches[0].pageX, i = t.targetTouches[0].pageY, n = t.targetTouches[1].pageX,
                            r = t.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - i, 2))
                    }, onGestureStart: function (t) {
                        var e = this.params.zoom, i = this.zoom, r = i.gesture;
                        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !l.gestures) {
                            if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                            i.fakeGestureTouched = !0, r.scaleStart = st.getDistanceBetweenTouches(t)
                        }
                        r.$slideEl && r.$slideEl.length || (r.$slideEl = n(t.target).closest(".swiper-slide"), 0 === r.$slideEl.length && (r.$slideEl = this.slides.eq(this.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + e.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), this.zoom.isScaling = !0) : r.$imageEl = void 0
                    }, onGestureChange: function (t) {
                        var e = this.params.zoom, i = this.zoom, n = i.gesture;
                        if (!l.gestures) {
                            if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                            i.fakeGestureMoved = !0, n.scaleMove = st.getDistanceBetweenTouches(t)
                        }
                        n.$imageEl && 0 !== n.$imageEl.length && (l.gestures ? i.scale = t.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < e.minRatio && (i.scale = e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                    }, onGestureEnd: function (t) {
                        var e = this.params.zoom, i = this.zoom, n = i.gesture;
                        if (!l.gestures) {
                            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                            if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !A.android) return;
                            i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                        }
                        n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), e.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
                    }, onTouchStart: function (t) {
                        var e = this.zoom, i = e.gesture, n = e.image;
                        i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (A.android && t.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, n.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                    }, onTouchMove: function (t) {
                        var e = this.zoom, i = e.gesture, n = e.image, r = e.velocity;
                        if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
                            n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = a.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = a.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX, n.startY = -n.startY));
                            var s = n.width * e.scale, o = n.height * e.scale;
                            if (!(s < i.slideWidth && o < i.slideHeight)) {
                                if (n.minX = Math.min(i.slideWidth / 2 - s / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - o / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, n.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !n.isMoved && !e.isScaling) {
                                    if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void (n.isTouched = !1);
                                    if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void (n.isTouched = !1)
                                }
                                t.preventDefault(), t.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = n.touchesCurrent.x, r.prevPositionY = n.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                            }
                        }
                    }, onTouchEnd: function () {
                        var t = this.zoom, e = t.gesture, i = t.image, n = t.velocity;
                        if (e.$imageEl && 0 !== e.$imageEl.length) {
                            if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                            i.isTouched = !1, i.isMoved = !1;
                            var r = 300, s = 300, o = n.x * r, a = i.currentX + o, l = n.y * s, c = i.currentY + l;
                            0 !== n.x && (r = Math.abs((a - i.currentX) / n.x)), 0 !== n.y && (s = Math.abs((c - i.currentY) / n.y));
                            var u = Math.max(r, s);
                            i.currentX = a, i.currentY = c;
                            var h = i.width * t.scale, d = i.height * t.scale;
                            i.minX = Math.min(e.slideWidth / 2 - h / 2, 0), i.maxX = -i.minX, i.minY = Math.min(e.slideHeight / 2 - d / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), e.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                        }
                    }, onTransitionEnd: function () {
                        var t = this.zoom, e = t.gesture;
                        e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl.transform("translate3d(0,0,0) scale(1)"), e.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, e.$slideEl = void 0, e.$imageEl = void 0, e.$imageWrapEl = void 0)
                    }, toggle: function (t) {
                        var e = this.zoom;
                        e.scale && 1 !== e.scale ? e.out() : e.in(t)
                    }, in: function (t) {
                        var e, i, r, s, o, a, l, c, u, h, d, f, p, v, g, m, y = this.zoom, b = this.params.zoom,
                            w = y.gesture, x = y.image;
                        w.$slideEl || (w.$slideEl = this.clickedSlide ? n(this.clickedSlide) : this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === x.touchesStart.x && t ? (e = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (e = x.touchesStart.x, i = x.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, t ? (g = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, r = w.$slideEl.offset().left + g / 2 - e, s = w.$slideEl.offset().top + m / 2 - i, l = w.$imageEl[0].offsetWidth, c = w.$imageEl[0].offsetHeight, u = l * y.scale, h = c * y.scale, p = -(d = Math.min(g / 2 - u / 2, 0)), v = -(f = Math.min(m / 2 - h / 2, 0)), (o = r * y.scale) < d && (o = d), o > p && (o = p), (a = s * y.scale) < f && (a = f), a > v && (a = v)) : (o = 0, a = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + o + "px, " + a + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
                    }, out: function () {
                        var t = this.zoom, e = this.params.zoom, i = t.gesture;
                        i.$slideEl || (i.$slideEl = this.clickedSlide ? n(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + e.zoomedSlideClass), i.$slideEl = void 0)
                    }, enable: function () {
                        var t = this.zoom;
                        if (!t.enabled) {
                            t.enabled = !0;
                            var e = !("touchstart" !== this.touchEvents.start || !l.passiveListener || !this.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            }, i = !l.passiveListener || {passive: !1, capture: !0};
                            l.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, e), this.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", t.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", t.onGestureEnd, e), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", t.onGestureEnd, e)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, i)
                        }
                    }, disable: function () {
                        var t = this.zoom;
                        if (t.enabled) {
                            this.zoom.enabled = !1;
                            var e = !("touchstart" !== this.touchEvents.start || !l.passiveListener || !this.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            }, i = !l.passiveListener || {passive: !1, capture: !0};
                            l.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, e), this.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", t.onGestureStart, e), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", t.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", t.onGestureEnd, e), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", t.onGestureEnd, e)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, i)
                        }
                    }
                }, ot = {
                    loadInSlide: function (t, e) {
                        void 0 === e && (e = !0);
                        var i = this, r = i.params.lazy;
                        if (void 0 !== t && 0 !== i.slides.length) {
                            var s = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                                o = s.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                            !s.hasClass(r.elementClass) || s.hasClass(r.loadedClass) || s.hasClass(r.loadingClass) || (o = o.add(s[0])), 0 !== o.length && o.each(function (t, o) {
                                var a = n(o);
                                a.addClass(r.loadingClass);
                                var l = a.attr("data-background"), c = a.attr("data-src"), u = a.attr("data-srcset"),
                                    h = a.attr("data-sizes");
                                i.loadImage(a[0], c || l, u, h, !1, function () {
                                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                                        if (l ? (a.css("background-image", 'url("' + l + '")'), a.removeAttr("data-background")) : (u && (a.attr("srcset", u), a.removeAttr("data-srcset")), h && (a.attr("sizes", h), a.removeAttr("data-sizes")), c && (a.attr("src", c), a.removeAttr("data-src"))), a.addClass(r.loadedClass).removeClass(r.loadingClass), s.find("." + r.preloaderClass).remove(), i.params.loop && e) {
                                            var t = s.attr("data-swiper-slide-index");
                                            if (s.hasClass(i.params.slideDuplicateClass)) {
                                                var n = i.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                                i.lazy.loadInSlide(n.index(), !1)
                                            } else {
                                                var o = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                                i.lazy.loadInSlide(o.index(), !1)
                                            }
                                        }
                                        i.emit("lazyImageReady", s[0], a[0])
                                    }
                                }), i.emit("lazyImageLoad", s[0], a[0])
                            })
                        }
                    }, load: function () {
                        var t = this, e = t.$wrapperEl, i = t.params, r = t.slides, s = t.activeIndex,
                            o = t.virtual && i.virtual.enabled, a = i.lazy, l = i.slidesPerView;

                        function c(t) {
                            if (o) {
                                if (e.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return !0
                            } else if (r[t]) return !0;
                            return !1
                        }

                        function u(t) {
                            return o ? n(t).attr("data-swiper-slide-index") : n(t).index()
                        }

                        if ("auto" === l && (l = 0), t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0), t.params.watchSlidesVisibility) e.children("." + i.slideVisibleClass).each(function (e, i) {
                            var r = o ? n(i).attr("data-swiper-slide-index") : n(i).index();
                            t.lazy.loadInSlide(r)
                        }); else if (l > 1) for (var h = s; h < s + l; h += 1) c(h) && t.lazy.loadInSlide(h); else t.lazy.loadInSlide(s);
                        if (a.loadPrevNext) if (l > 1 || a.loadPrevNextAmount && a.loadPrevNextAmount > 1) {
                            for (var d = a.loadPrevNextAmount, f = l, p = Math.min(s + f + Math.max(d, f), r.length), v = Math.max(s - Math.max(f, d), 0), g = s + l; g < p; g += 1) c(g) && t.lazy.loadInSlide(g);
                            for (var m = v; m < s; m += 1) c(m) && t.lazy.loadInSlide(m)
                        } else {
                            var y = e.children("." + i.slideNextClass);
                            y.length > 0 && t.lazy.loadInSlide(u(y));
                            var b = e.children("." + i.slidePrevClass);
                            b.length > 0 && t.lazy.loadInSlide(u(b))
                        }
                    }
                }, at = {
                    LinearSpline: function (t, e) {
                        var i, n, r, s, o;
                        return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function (t) {
                            return t ? (o = function (t, e) {
                                for (n = -1, i = t.length; i - n > 1;) t[r = i + n >> 1] <= e ? n = r : i = r;
                                return i
                            }(this.x, t), s = o - 1, (t - this.x[s]) * (this.y[o] - this.y[s]) / (this.x[o] - this.x[s]) + this.y[s]) : 0
                        }, this
                    }, getInterpolateFunction: function (t) {
                        this.controller.spline || (this.controller.spline = this.params.loop ? new at.LinearSpline(this.slidesGrid, t.slidesGrid) : new at.LinearSpline(this.snapGrid, t.snapGrid))
                    }, setTranslate: function (t, e) {
                        var i, n, r = this, s = r.controller.control;

                        function o(t) {
                            var e = r.rtlTranslate ? -r.translate : r.translate;
                            "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(t), n = -r.controller.spline.interpolate(-e)), n && "container" !== r.params.controller.by || (i = (t.maxTranslate() - t.minTranslate()) / (r.maxTranslate() - r.minTranslate()), n = (e - r.minTranslate()) * i + t.minTranslate()), r.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(n, r), t.updateActiveIndex(), t.updateSlidesClasses()
                        }

                        if (Array.isArray(s)) for (var a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof B && o(s[a]); else s instanceof B && e !== s && o(s)
                    }, setTransition: function (t, e) {
                        var i, n = this, r = n.controller.control;

                        function s(e) {
                            e.setTransition(t, n), 0 !== t && (e.transitionStart(), e.params.autoHeight && a.nextTick(function () {
                                e.updateAutoHeight()
                            }), e.$wrapperEl.transitionEnd(function () {
                                r && (e.params.loop && "slide" === n.params.controller.by && e.loopFix(), e.transitionEnd())
                            }))
                        }

                        if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== e && r[i] instanceof B && s(r[i]); else r instanceof B && e !== r && s(r)
                    }
                }, lt = {
                    makeElFocusable: function (t) {
                        return t.attr("tabIndex", "0"), t
                    }, addElRole: function (t, e) {
                        return t.attr("role", e), t
                    }, addElLabel: function (t, e) {
                        return t.attr("aria-label", e), t
                    }, disableEl: function (t) {
                        return t.attr("aria-disabled", !0), t
                    }, enableEl: function (t) {
                        return t.attr("aria-disabled", !1), t
                    }, onEnterKey: function (t) {
                        var e = this.params.a11y;
                        if (13 === t.keyCode) {
                            var i = n(t.target);
                            this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(e.lastSlideMessage) : this.a11y.notify(e.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(e.firstSlideMessage) : this.a11y.notify(e.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                        }
                    }, notify: function (t) {
                        var e = this.a11y.liveRegion;
                        0 !== e.length && (e.html(""), e.html(t))
                    }, updateNavigation: function () {
                        if (!this.params.loop) {
                            var t = this.navigation, e = t.$nextEl, i = t.$prevEl;
                            i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), e && e.length > 0 && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e))
                        }
                    }, updatePagination: function () {
                        var t = this, e = t.params.a11y;
                        t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (i, r) {
                            var s = n(r);
                            t.a11y.makeElFocusable(s), t.a11y.addElRole(s, "button"), t.a11y.addElLabel(s, e.paginationBulletMessage.replace(/{{index}}/, s.index() + 1))
                        })
                    }, init: function () {
                        this.$el.append(this.a11y.liveRegion);
                        var t, e, i = this.params.a11y;
                        this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", this.a11y.onEnterKey)), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.prevSlideMessage), e.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                    }, destroy: function () {
                        var t, e;
                        this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && t.off("keydown", this.a11y.onEnterKey), e && e.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                    }
                }, ct = {
                    init: function () {
                        if (this.params.history) {
                            if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                            var t = this.history;
                            t.initialized = !0, t.paths = ct.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState))
                        }
                    }, destroy: function () {
                        this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
                    }, setHistoryPopState: function () {
                        this.history.paths = ct.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                    }, getPathValues: function () {
                        var t = e.location.pathname.slice(1).split("/").filter(function (t) {
                            return "" !== t
                        }), i = t.length;
                        return {key: t[i - 2], value: t[i - 1]}
                    }, setHistory: function (t, i) {
                        if (this.history.initialized && this.params.history.enabled) {
                            var n = this.slides.eq(i), r = ct.slugify(n.attr("data-history"));
                            e.location.pathname.includes(t) || (r = t + "/" + r);
                            var s = e.history.state;
                            s && s.value === r || (this.params.history.replaceState ? e.history.replaceState({value: r}, null, r) : e.history.pushState({value: r}, null, r))
                        }
                    }, slugify: function (t) {
                        return t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    }, scrollToSlide: function (t, e, i) {
                        if (e) for (var n = 0, r = this.slides.length; n < r; n += 1) {
                            var s = this.slides.eq(n);
                            if (ct.slugify(s.attr("data-history")) === e && !s.hasClass(this.params.slideDuplicateClass)) {
                                var o = s.index();
                                this.slideTo(o, t, i)
                            }
                        } else this.slideTo(0, t, i)
                    }
                }, ut = {
                    onHashCange: function () {
                        var e = t.location.hash.replace("#", "");
                        if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                            var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                            if (void 0 === i) return;
                            this.slideTo(i)
                        }
                    }, setHash: function () {
                        if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || !1); else {
                            var i = this.slides.eq(this.activeIndex), n = i.attr("data-hash") || i.attr("data-history");
                            t.location.hash = n || ""
                        }
                    }, init: function () {
                        if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                            this.hashNavigation.initialized = !0;
                            var i = t.location.hash.replace("#", "");
                            if (i) for (var r = 0, s = this.slides.length; r < s; r += 1) {
                                var o = this.slides.eq(r);
                                if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(this.params.slideDuplicateClass)) {
                                    var a = o.index();
                                    this.slideTo(a, 0, this.params.runCallbacksOnInit, !0)
                                }
                            }
                            this.params.hashNavigation.watchState && n(e).on("hashchange", this.hashNavigation.onHashCange)
                        }
                    }, destroy: function () {
                        this.params.hashNavigation.watchState && n(e).off("hashchange", this.hashNavigation.onHashCange)
                    }
                }, ht = {
                    run: function () {
                        var t = this, e = t.slides.eq(t.activeIndex), i = t.params.autoplay.delay;
                        e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), clearTimeout(t.autoplay.timeout), t.autoplay.timeout = a.nextTick(function () {
                            t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")), t.params.cssMode && t.autoplay.running && t.autoplay.run()
                        }, i)
                    }, start: function () {
                        return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
                    }, stop: function () {
                        return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
                    }, pause: function (t) {
                        this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== t && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
                    }
                }, dt = {
                    setTranslate: function () {
                        for (var t = this.slides, e = 0; e < t.length; e += 1) {
                            var i = this.slides.eq(e), n = -i[0].swiperSlideOffset;
                            this.params.virtualTranslate || (n -= this.translate);
                            var r = 0;
                            this.isHorizontal() || (r = n, n = 0);
                            var s = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                            i.css({opacity: s}).transform("translate3d(" + n + "px, " + r + "px, 0px)")
                        }
                    }, setTransition: function (t) {
                        var e = this, i = e.slides, n = e.$wrapperEl;
                        if (i.transition(t), e.params.virtualTranslate && 0 !== t) {
                            var r = !1;
                            i.transitionEnd(function () {
                                if (!r && e && !e.destroyed) {
                                    r = !0, e.animating = !1;
                                    for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) n.trigger(t[i])
                                }
                            })
                        }
                    }
                }, ft = {
                    setTranslate: function () {
                        var t, e = this.$el, i = this.$wrapperEl, r = this.slides, s = this.width, o = this.height,
                            a = this.rtlTranslate, l = this.size, c = this.params.cubeEffect, u = this.isHorizontal(),
                            h = this.virtual && this.params.virtual.enabled, d = 0;
                        c.shadow && (u ? (0 === (t = i.find(".swiper-cube-shadow")).length && (t = n('<div class="swiper-cube-shadow"></div>'), i.append(t)), t.css({height: s + "px"})) : 0 === (t = e.find(".swiper-cube-shadow")).length && (t = n('<div class="swiper-cube-shadow"></div>'), e.append(t)));
                        for (var f = 0; f < r.length; f += 1) {
                            var p = r.eq(f), v = f;
                            h && (v = parseInt(p.attr("data-swiper-slide-index"), 10));
                            var g = 90 * v, m = Math.floor(g / 360);
                            a && (g = -g, m = Math.floor(-g / 360));
                            var y = Math.max(Math.min(p[0].progress, 1), -1), b = 0, w = 0, x = 0;
                            v % 4 == 0 ? (b = 4 * -m * l, x = 0) : (v - 1) % 4 == 0 ? (b = 0, x = 4 * -m * l) : (v - 2) % 4 == 0 ? (b = l + 4 * m * l, x = l) : (v - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * m), a && (b = -b), u || (w = b, b = 0);
                            var T = "rotateX(" + (u ? 0 : -g) + "deg) rotateY(" + (u ? g : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                            if (y <= 1 && y > -1 && (d = 90 * v + 90 * y, a && (d = 90 * -v - 90 * y)), p.transform(T), c.slideShadows) {
                                var C = u ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                                    E = u ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                                0 === C.length && (C = n('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), p.append(C)), 0 === E.length && (E = n('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), p.append(E)), C.length && (C[0].style.opacity = Math.max(-y, 0)), E.length && (E[0].style.opacity = Math.max(y, 0))
                            }
                        }
                        if (i.css({
                            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                            "transform-origin": "50% 50% -" + l / 2 + "px"
                        }), c.shadow) if (u) t.transform("translate3d(0px, " + (s / 2 + c.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")"); else {
                            var S = Math.abs(d) - 90 * Math.floor(Math.abs(d) / 90),
                                _ = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                                k = c.shadowScale, M = c.shadowScale / _, P = c.shadowOffset;
                            t.transform("scale3d(" + k + ", 1, " + M + ") translate3d(0px, " + (o / 2 + P) + "px, " + -o / 2 / M + "px) rotateX(-90deg)")
                        }
                        var L = G.isSafari || G.isUiWebView ? -l / 2 : 0;
                        i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : d) + "deg) rotateY(" + (this.isHorizontal() ? -d : 0) + "deg)")
                    }, setTransition: function (t) {
                        var e = this.$el;
                        this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t)
                    }
                }, pt = {
                    setTranslate: function () {
                        for (var t = this.slides, e = this.rtlTranslate, i = 0; i < t.length; i += 1) {
                            var r = t.eq(i), s = r[0].progress;
                            this.params.flipEffect.limitRotation && (s = Math.max(Math.min(r[0].progress, 1), -1));
                            var o = -180 * s, a = 0, l = -r[0].swiperSlideOffset, c = 0;
                            if (this.isHorizontal() ? e && (o = -o) : (c = l, l = 0, a = -o, o = 0), r[0].style.zIndex = -Math.abs(Math.round(s)) + t.length, this.params.flipEffect.slideShadows) {
                                var u = this.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                    h = this.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), r.append(u)), 0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(h)), u.length && (u[0].style.opacity = Math.max(-s, 0)), h.length && (h[0].style.opacity = Math.max(s, 0))
                            }
                            r.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + a + "deg) rotateY(" + o + "deg)")
                        }
                    }, setTransition: function (t) {
                        var e = this, i = e.slides, n = e.activeIndex, r = e.$wrapperEl;
                        if (i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.virtualTranslate && 0 !== t) {
                            var s = !1;
                            i.eq(n).transitionEnd(function () {
                                if (!s && e && !e.destroyed) {
                                    s = !0, e.animating = !1;
                                    for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) r.trigger(t[i])
                                }
                            })
                        }
                    }
                }, vt = {
                    setTranslate: function () {
                        for (var t = this.width, e = this.height, i = this.slides, r = this.$wrapperEl, s = this.slidesSizesGrid, o = this.params.coverflowEffect, a = this.isHorizontal(), c = this.translate, u = a ? t / 2 - c : e / 2 - c, h = a ? o.rotate : -o.rotate, d = o.depth, f = 0, p = i.length; f < p; f += 1) {
                            var v = i.eq(f), g = s[f], m = (u - v[0].swiperSlideOffset - g / 2) / g * o.modifier,
                                y = a ? h * m : 0, b = a ? 0 : h * m, w = -d * Math.abs(m), x = a ? 0 : o.stretch * m,
                                T = a ? o.stretch * m : 0;
                            Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
                            var C = "translate3d(" + T + "px," + x + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
                            if (v.transform(C), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), o.slideShadows) {
                                var E = a ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                                    S = a ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                                0 === E.length && (E = n('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = m > 0 ? m : 0), S.length && (S[0].style.opacity = -m > 0 ? -m : 0)
                            }
                        }
                        (l.pointerEvents || l.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = u + "px 50%")
                    }, setTransition: function (t) {
                        this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                    }
                }, gt = {
                    init: function () {
                        var t = this.params.thumbs, e = this.constructor;
                        t.swiper instanceof e ? (this.thumbs.swiper = t.swiper, a.extend(this.thumbs.swiper.originalParams, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), a.extend(this.thumbs.swiper.params, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        })) : a.isObject(t.swiper) && (this.thumbs.swiper = new e(a.extend({}, t.swiper, {
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
                    }, onThumbClick: function () {
                        var t = this.thumbs.swiper;
                        if (t) {
                            var e = t.clickedIndex, i = t.clickedSlide;
                            if (!(i && n(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == e)) {
                                var r;
                                if (r = t.params.loop ? parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10) : e, this.params.loop) {
                                    var s = this.activeIndex;
                                    this.slides.eq(s).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, s = this.activeIndex);
                                    var o = this.slides.eq(s).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(),
                                        a = this.slides.eq(s).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                                    r = void 0 === o ? a : void 0 === a ? o : a - s < s - o ? a : o
                                }
                                this.slideTo(r)
                            }
                        }
                    }, update: function (t) {
                        var e = this.thumbs.swiper;
                        if (e) {
                            var i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : e.params.slidesPerView;
                            if (this.realIndex !== e.realIndex) {
                                var n, r = e.activeIndex;
                                if (e.params.loop) {
                                    e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
                                    var s = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                        o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                                    n = void 0 === s ? o : void 0 === o ? s : o - r == r - s ? r : o - r < r - s ? o : s
                                } else n = this.realIndex;
                                e.visibleSlidesIndexes && e.visibleSlidesIndexes.indexOf(n) < 0 && (e.params.centeredSlides ? n = n > r ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > r && (n = n - i + 1), e.slideTo(n, t ? 0 : void 0))
                            }
                            var a = 1, l = this.params.thumbs.slideThumbActiveClass;
                            if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (a = this.params.slidesPerView), e.slides.removeClass(l), e.params.loop || e.params.virtual && e.params.virtual.enabled) for (var c = 0; c < a; c += 1) e.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(l); else for (var u = 0; u < a; u += 1) e.slides.eq(this.realIndex + u).addClass(l)
                        }
                    }
                }, mt = [q, W, Y, V, U, Q, Z, {
                    name: "mousewheel",
                    params: {
                        mousewheel: {
                            enabled: !1,
                            releaseOnEdges: !1,
                            invert: !1,
                            forceToAxis: !1,
                            sensitivity: 1,
                            eventsTarged: "container"
                        }
                    },
                    create: function () {
                        a.extend(this, {
                            mousewheel: {
                                enabled: !1,
                                enable: tt.enable.bind(this),
                                disable: tt.disable.bind(this),
                                handle: tt.handle.bind(this),
                                handleMouseEnter: tt.handleMouseEnter.bind(this),
                                handleMouseLeave: tt.handleMouseLeave.bind(this),
                                lastScrollTime: a.now(),
                                lastEventBeforeSnap: void 0,
                                recentWheelEvents: []
                            }
                        })
                    },
                    on: {
                        init: function () {
                            !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                        }, destroy: function () {
                            this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                        }
                    }
                }, {
                    name: "navigation",
                    params: {
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: "swiper-button-disabled",
                            hiddenClass: "swiper-button-hidden",
                            lockClass: "swiper-button-lock"
                        }
                    },
                    create: function () {
                        a.extend(this, {
                            navigation: {
                                init: et.init.bind(this),
                                update: et.update.bind(this),
                                destroy: et.destroy.bind(this),
                                onNextClick: et.onNextClick.bind(this),
                                onPrevClick: et.onPrevClick.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.navigation.init(), this.navigation.update()
                        }, toEdge: function () {
                            this.navigation.update()
                        }, fromEdge: function () {
                            this.navigation.update()
                        }, destroy: function () {
                            this.navigation.destroy()
                        }, click: function (t) {
                            var e, i = this.navigation, r = i.$nextEl, s = i.$prevEl;
                            !this.params.navigation.hideOnClick || n(t.target).is(s) || n(t.target).is(r) || (r ? e = r.hasClass(this.params.navigation.hiddenClass) : s && (e = s.hasClass(this.params.navigation.hiddenClass)), !0 === e ? this.emit("navigationShow", this) : this.emit("navigationHide", this), r && r.toggleClass(this.params.navigation.hiddenClass), s && s.toggleClass(this.params.navigation.hiddenClass))
                        }
                    }
                }, {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: function (t) {
                                return t
                            },
                            formatFractionTotal: function (t) {
                                return t
                            },
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock"
                        }
                    },
                    create: function () {
                        a.extend(this, {
                            pagination: {
                                init: it.init.bind(this),
                                render: it.render.bind(this),
                                update: it.update.bind(this),
                                destroy: it.destroy.bind(this),
                                dynamicBulletIndex: 0
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.pagination.init(), this.pagination.render(), this.pagination.update()
                        }, activeIndexChange: function () {
                            this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                        }, snapIndexChange: function () {
                            this.params.loop || this.pagination.update()
                        }, slidesLengthChange: function () {
                            this.params.loop && (this.pagination.render(), this.pagination.update())
                        }, snapGridLengthChange: function () {
                            this.params.loop || (this.pagination.render(), this.pagination.update())
                        }, destroy: function () {
                            this.pagination.destroy()
                        }, click: function (t) {
                            this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !n(t.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                        }
                    }
                }, {
                    name: "scrollbar",
                    params: {
                        scrollbar: {
                            el: null,
                            dragSize: "auto",
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: "swiper-scrollbar-lock",
                            dragClass: "swiper-scrollbar-drag"
                        }
                    },
                    create: function () {
                        a.extend(this, {
                            scrollbar: {
                                init: nt.init.bind(this),
                                destroy: nt.destroy.bind(this),
                                updateSize: nt.updateSize.bind(this),
                                setTranslate: nt.setTranslate.bind(this),
                                setTransition: nt.setTransition.bind(this),
                                enableDraggable: nt.enableDraggable.bind(this),
                                disableDraggable: nt.disableDraggable.bind(this),
                                setDragPosition: nt.setDragPosition.bind(this),
                                getPointerPosition: nt.getPointerPosition.bind(this),
                                onDragStart: nt.onDragStart.bind(this),
                                onDragMove: nt.onDragMove.bind(this),
                                onDragEnd: nt.onDragEnd.bind(this),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                        }, update: function () {
                            this.scrollbar.updateSize()
                        }, resize: function () {
                            this.scrollbar.updateSize()
                        }, observerUpdate: function () {
                            this.scrollbar.updateSize()
                        }, setTranslate: function () {
                            this.scrollbar.setTranslate()
                        }, setTransition: function (t) {
                            this.scrollbar.setTransition(t)
                        }, destroy: function () {
                            this.scrollbar.destroy()
                        }
                    }
                }, {
                    name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
                        a.extend(this, {
                            parallax: {
                                setTransform: rt.setTransform.bind(this),
                                setTranslate: rt.setTranslate.bind(this),
                                setTransition: rt.setTransition.bind(this)
                            }
                        })
                    }, on: {
                        beforeInit: function () {
                            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                        }, init: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        }, setTranslate: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        }, setTransition: function (t) {
                            this.params.parallax.enabled && this.parallax.setTransition(t)
                        }
                    }
                }, {
                    name: "zoom",
                    params: {
                        zoom: {
                            enabled: !1,
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: !0,
                            containerClass: "swiper-zoom-container",
                            zoomedSlideClass: "swiper-slide-zoomed"
                        }
                    },
                    create: function () {
                        var t = this, e = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
                        };
                        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
                            e[i] = st[i].bind(t)
                        }), a.extend(t, {zoom: e});
                        var i = 1;
                        Object.defineProperty(t.zoom, "scale", {
                            get: function () {
                                return i
                            }, set: function (e) {
                                if (i !== e) {
                                    var n = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
                                        r = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
                                    t.emit("zoomChange", e, n, r)
                                }
                                i = e
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.zoom.enabled && this.zoom.enable()
                        }, destroy: function () {
                            this.zoom.disable()
                        }, touchStart: function (t) {
                            this.zoom.enabled && this.zoom.onTouchStart(t)
                        }, touchEnd: function (t) {
                            this.zoom.enabled && this.zoom.onTouchEnd(t)
                        }, doubleTap: function (t) {
                            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t)
                        }, transitionEnd: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                        }, slideChange: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                        }
                    }
                }, {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader"
                        }
                    },
                    create: function () {
                        a.extend(this, {
                            lazy: {
                                initialImageLoaded: !1,
                                load: ot.load.bind(this),
                                loadInSlide: ot.loadInSlide.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                        }, init: function () {
                            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                        }, scroll: function () {
                            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                        }, resize: function () {
                            this.params.lazy.enabled && this.lazy.load()
                        }, scrollbarDragMove: function () {
                            this.params.lazy.enabled && this.lazy.load()
                        }, transitionStart: function () {
                            this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                        }, transitionEnd: function () {
                            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                        }, slideChange: function () {
                            this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                        }
                    }
                }, {
                    name: "controller",
                    params: {controller: {control: void 0, inverse: !1, by: "slide"}},
                    create: function () {
                        a.extend(this, {
                            controller: {
                                control: this.params.controller.control,
                                getInterpolateFunction: at.getInterpolateFunction.bind(this),
                                setTranslate: at.setTranslate.bind(this),
                                setTransition: at.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        update: function () {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                        }, resize: function () {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                        }, observerUpdate: function () {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                        }, setTranslate: function (t, e) {
                            this.controller.control && this.controller.setTranslate(t, e)
                        }, setTransition: function (t, e) {
                            this.controller.control && this.controller.setTransition(t, e)
                        }
                    }
                }, {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}"
                        }
                    },
                    create: function () {
                        var t = this;
                        a.extend(t, {a11y: {liveRegion: n('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(lt).forEach(function (e) {
                            t.a11y[e] = lt[e].bind(t)
                        })
                    },
                    on: {
                        init: function () {
                            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                        }, toEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        }, fromEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        }, paginationUpdate: function () {
                            this.params.a11y.enabled && this.a11y.updatePagination()
                        }, destroy: function () {
                            this.params.a11y.enabled && this.a11y.destroy()
                        }
                    }
                }, {
                    name: "history",
                    params: {history: {enabled: !1, replaceState: !1, key: "slides"}},
                    create: function () {
                        a.extend(this, {
                            history: {
                                init: ct.init.bind(this),
                                setHistory: ct.setHistory.bind(this),
                                setHistoryPopState: ct.setHistoryPopState.bind(this),
                                scrollToSlide: ct.scrollToSlide.bind(this),
                                destroy: ct.destroy.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.history.enabled && this.history.init()
                        }, destroy: function () {
                            this.params.history.enabled && this.history.destroy()
                        }, transitionEnd: function () {
                            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                        }, slideChange: function () {
                            this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                        }
                    }
                }, {
                    name: "hash-navigation",
                    params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
                    create: function () {
                        a.extend(this, {
                            hashNavigation: {
                                initialized: !1,
                                init: ut.init.bind(this),
                                destroy: ut.destroy.bind(this),
                                setHash: ut.setHash.bind(this),
                                onHashCange: ut.onHashCange.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.init()
                        }, destroy: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                        }, transitionEnd: function () {
                            this.hashNavigation.initialized && this.hashNavigation.setHash()
                        }, slideChange: function () {
                            this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                        }
                    }
                }, {
                    name: "autoplay",
                    params: {
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1
                        }
                    },
                    create: function () {
                        var t = this;
                        a.extend(t, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: ht.run.bind(t),
                                start: ht.start.bind(t),
                                stop: ht.stop.bind(t),
                                pause: ht.pause.bind(t),
                                onVisibilityChange: function () {
                                    "hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause(), "visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), t.autoplay.paused = !1)
                                },
                                onTransitionEnd: function (e) {
                                    t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                                }
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                        }, beforeTransitionStart: function (t, e) {
                            this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop())
                        }, sliderFirstMove: function () {
                            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                        }, touchEnd: function () {
                            this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                        }, destroy: function () {
                            this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                        }
                    }
                }, {
                    name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
                        a.extend(this, {
                            fadeEffect: {
                                setTranslate: dt.setTranslate.bind(this),
                                setTransition: dt.setTransition.bind(this)
                            }
                        })
                    }, on: {
                        beforeInit: function () {
                            if ("fade" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "fade");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                a.extend(this.params, t), a.extend(this.originalParams, t)
                            }
                        }, setTranslate: function () {
                            "fade" === this.params.effect && this.fadeEffect.setTranslate()
                        }, setTransition: function (t) {
                            "fade" === this.params.effect && this.fadeEffect.setTransition(t)
                        }
                    }
                }, {
                    name: "effect-cube",
                    params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
                    create: function () {
                        a.extend(this, {
                            cubeEffect: {
                                setTranslate: ft.setTranslate.bind(this),
                                setTransition: ft.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            if ("cube" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    resistanceRatio: 0,
                                    spaceBetween: 0,
                                    centeredSlides: !1,
                                    virtualTranslate: !0
                                };
                                a.extend(this.params, t), a.extend(this.originalParams, t)
                            }
                        }, setTranslate: function () {
                            "cube" === this.params.effect && this.cubeEffect.setTranslate()
                        }, setTransition: function (t) {
                            "cube" === this.params.effect && this.cubeEffect.setTransition(t)
                        }
                    }
                }, {
                    name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
                        a.extend(this, {
                            flipEffect: {
                                setTranslate: pt.setTranslate.bind(this),
                                setTransition: pt.setTransition.bind(this)
                            }
                        })
                    }, on: {
                        beforeInit: function () {
                            if ("flip" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                a.extend(this.params, t), a.extend(this.originalParams, t)
                            }
                        }, setTranslate: function () {
                            "flip" === this.params.effect && this.flipEffect.setTranslate()
                        }, setTransition: function (t) {
                            "flip" === this.params.effect && this.flipEffect.setTransition(t)
                        }
                    }
                }, {
                    name: "effect-coverflow",
                    params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
                    create: function () {
                        a.extend(this, {
                            coverflowEffect: {
                                setTranslate: vt.setTranslate.bind(this),
                                setTransition: vt.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                        }, setTranslate: function () {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                        }, setTransition: function (t) {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t)
                        }
                    }
                }, {
                    name: "thumbs",
                    params: {
                        thumbs: {
                            swiper: null,
                            slideThumbActiveClass: "swiper-slide-thumb-active",
                            thumbsContainerClass: "swiper-container-thumbs"
                        }
                    },
                    create: function () {
                        a.extend(this, {
                            thumbs: {
                                swiper: null,
                                init: gt.init.bind(this),
                                update: gt.update.bind(this),
                                onThumbClick: gt.onThumbClick.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            var t = this.params.thumbs;
                            t && t.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                        }, slideChange: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        }, update: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        }, resize: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        }, observerUpdate: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        }, setTransition: function (t) {
                            var e = this.thumbs.swiper;
                            e && e.setTransition(t)
                        }, beforeDestroy: function () {
                            var t = this.thumbs.swiper;
                            t && this.thumbs.swiperCreated && t && t.destroy()
                        }
                    }
                }];
            return void 0 === B.use && (B.use = B.Class.use, B.installModule = B.Class.installModule), B.use(mt), B
        }, "object" == ("undefined" == typeof exports ? "undefined" : s()(exports)) && void 0 !== t ? t.exports = n() : "function" == typeof define && i(134) ? define(n) : (e = e || self).Swiper = n()
    }).call(this, i(133)(t))
}, function (t, e, i) {
    "use strict";
    (function (t, e) {
        var n, r = i(2), s = i.n(r);
        !function (t) {
            function i(e, i, n, r) {
                var s = t(n, i);
                s.addData(e), s.make(), r = r || 0;
                var o = s.getModuleCount(), a = s.getModuleCount() + 2 * r;
                this.text = e, this.level = i, this.version = n, this.moduleCount = a, this.isDark = function (t, e) {
                    return e -= r, !(0 > (t -= r) || t >= o || 0 > e || e >= o) && s.isDark(t, e)
                }, this.addBlank = function (t, e, i, n) {
                    var r = this.isDark, s = 1 / a;
                    this.isDark = function (o, a) {
                        var l = a * s, c = o * s, u = l + s, h = c + s;
                        return r(o, a) && (t > u || l > i || e > h || c > n)
                    }
                }
            }

            function n(t, e, n, r, s) {
                n = Math.max(1, n || 1), r = Math.min(40, r || 40);
                for (var o = n; r >= o; o += 1) try {
                    return new i(t, e, o, s)
                } catch (t) {
                }
            }

            function r(t, e, i) {
                h(i.background).is("img") ? e.drawImage(i.background, 0, 0, i.size, i.size) : i.background && (e.fillStyle = i.background, e.fillRect(i.left, i.top, i.size, i.size));
                var n = i.mode;
                1 === n || 2 === n ? function (t, e, i) {
                    var n = i.size, r = "bold " + i.mSize * n + "px " + i.fontname,
                        s = h("<canvas/>")[0].getContext("2d");
                    s.font = r;
                    var o = s.measureText(i.label).width, a = i.mSize, l = o / n, c = (1 - l) * i.mPosX,
                        u = (1 - a) * i.mPosY, d = c + l, f = u + a, p = .01;
                    1 === i.mode ? t.addBlank(0, u - p, n, f + p) : t.addBlank(c - p, u - p, d + p, f + p), e.fillStyle = i.fontcolor, e.font = r, e.fillText(i.label, c * n, u * n + .75 * i.mSize * n)
                }(t, e, i) : (3 === n || 4 === n) && function (t, e, i) {
                    var n = i.size, r = i.image.naturalWidth || 1, s = i.image.naturalHeight || 1, o = i.mSize,
                        a = o * r / s, l = (1 - a) * i.mPosX, c = (1 - o) * i.mPosY, u = l + a, h = c + o, d = .01;
                    3 === i.mode ? t.addBlank(0, c - d, n, h + d) : t.addBlank(l - d, c - d, u + d, h + d), e.drawImage(i.image, l * n, c * n, a * n, o * n)
                }(t, e, i)
            }

            function s(t, e, i, n, r, s, o, a) {
                t.isDark(o, a) && e.rect(n, r, s, s)
            }

            function o(t, e, i, n, r, s, o, a) {
                var l = t.isDark, c = n + s, u = r + s, h = i.radius * s, d = o - 1, f = o + 1, p = a - 1, v = a + 1,
                    g = l(o, a), m = l(d, p), y = l(d, a), b = l(d, v), w = l(o, v), x = l(f, v), T = l(f, a),
                    C = l(f, p), E = l(o, p);
                g ? function (t, e, i, n, r, s, o, a, l, c) {
                    o ? t.moveTo(e + s, i) : t.moveTo(e, i), a ? (t.lineTo(n - s, i), t.arcTo(n, i, n, r, s)) : t.lineTo(n, i), l ? (t.lineTo(n, r - s), t.arcTo(n, r, e, r, s)) : t.lineTo(n, r), c ? (t.lineTo(e + s, r), t.arcTo(e, r, e, i, s)) : t.lineTo(e, r), o ? (t.lineTo(e, i + s), t.arcTo(e, i, n, i, s)) : t.lineTo(e, i)
                }(e, n, r, c, u, h, !y && !E, !y && !w, !T && !w, !T && !E) : function (t, e, i, n, r, s, o, a, l, c) {
                    o && (t.moveTo(e + s, i), t.lineTo(e, i), t.lineTo(e, i + s), t.arcTo(e, i, e + s, i, s)), a && (t.moveTo(n - s, i), t.lineTo(n, i), t.lineTo(n, i + s), t.arcTo(n, i, n - s, i, s)), l && (t.moveTo(n - s, r), t.lineTo(n, r), t.lineTo(n, r - s), t.arcTo(n, r, n - s, r, s)), c && (t.moveTo(e + s, r), t.lineTo(e, r), t.lineTo(e, r - s), t.arcTo(e, r, e + s, r, s))
                }(e, n, r, c, u, h, y && E && m, y && w && b, T && w && x, T && E && C)
            }

            function a(t, e, i) {
                var n, r, a = t.moduleCount, l = i.size / a, c = s;
                for (f && i.radius > 0 && i.radius <= .5 && (c = o), e.beginPath(), n = 0; a > n; n += 1) for (r = 0; a > r; r += 1) {
                    c(t, e, i, i.left + r * l, i.top + n * l, l, n, r)
                }
                if (h(i.fill).is("img")) {
                    e.strokeStyle = "rgba(0,0,0,0.5)", e.lineWidth = 2, e.stroke();
                    var u = e.globalCompositeOperation;
                    e.globalCompositeOperation = "destination-out", e.fill(), e.globalCompositeOperation = u, e.clip(), e.drawImage(i.fill, 0, 0, i.size, i.size), e.restore()
                } else e.fillStyle = i.fill, e.fill()
            }

            function l(t, e) {
                var i = n(e.text, e.ecLevel, e.minVersion, e.maxVersion, e.quiet);
                if (!i) return null;
                var s = h(t).data("qrcode", i), o = s[0].getContext("2d");
                return r(i, o, e), a(i, o, e), s
            }

            function c(t) {
                return l(h("<canvas/>").attr("width", t.size).attr("height", t.size), t)
            }

            function u(t) {
                return d && "canvas" === t.render ? c(t) : d && "image" === t.render ? function (t) {
                    return h("<img/>").attr("src", c(t)[0].toDataURL("image/png"))
                }(t) : function (t) {
                    var e = n(t.text, t.ecLevel, t.minVersion, t.maxVersion, t.quiet);
                    if (!e) return null;
                    var i, r, s = t.size, o = t.background, a = Math.floor, l = e.moduleCount, c = a(s / l),
                        u = a(.5 * (s - c * l)),
                        d = {position: "relative", left: 0, top: 0, padding: 0, margin: 0, width: s, height: s}, f = {
                            position: "absolute",
                            padding: 0,
                            margin: 0,
                            width: c,
                            height: c,
                            "background-color": t.fill
                        }, p = h("<div/>").data("qrcode", e).css(d);
                    for (o && p.css("background-color", o), i = 0; l > i; i += 1) for (r = 0; l > r; r += 1) e.isDark(i, r) && h("<div/>").css(f).css({
                        left: u + r * c,
                        top: u + i * c
                    }).appendTo(p);
                    return p
                }(t)
            }

            var h = e, d = function () {
                var t = document.createElement("canvas");
                return Boolean(t.getContext && t.getContext("2d"))
            }(), f = "[object Opera]" !== Object.prototype.toString.call(window.opera), p = {
                render: "canvas",
                minVersion: 1,
                maxVersion: 40,
                ecLevel: "L",
                left: 0,
                top: 0,
                size: 200,
                fill: "#000",
                background: null,
                text: "no text",
                radius: 0,
                quiet: 0,
                mode: 0,
                mSize: .1,
                mPosX: .5,
                mPosY: .5,
                label: "no label",
                fontname: "sans",
                fontcolor: "#000",
                image: null
            };
            h.fn.qrcode = function (t) {
                var e = h.extend({}, p, t);
                return this.each(function () {
                    "canvas" === this.nodeName.toLowerCase() ? l(this, e) : h(this).append(u(e))
                })
            }
        }((n = function () {
            function t(e, i) {
                if (void 0 === e.length) throw new Error(e.length + "/" + i);
                var n = function () {
                    for (var t = 0; t < e.length && 0 == e[t];) t += 1;
                    for (var n = new Array(e.length - t + i), r = 0; r < e.length - t; r += 1) n[r] = e[r + t];
                    return n
                }(), r = {
                    getAt: function (t) {
                        return n[t]
                    }, getLength: function () {
                        return n.length
                    }, multiply: function (e) {
                        for (var i = new Array(r.getLength() + e.getLength() - 1), n = 0; n < r.getLength(); n += 1) for (var s = 0; s < e.getLength(); s += 1) i[n + s] ^= g.gexp(g.glog(r.getAt(n)) + g.glog(e.getAt(s)));
                        return t(i, 0)
                    }, mod: function (e) {
                        if (r.getLength() - e.getLength() < 0) return r;
                        for (var i = g.glog(r.getAt(0)) - g.glog(e.getAt(0)), n = new Array(r.getLength()), s = 0; s < r.getLength(); s += 1) n[s] = r.getAt(s);
                        for (s = 0; s < e.getLength(); s += 1) n[s] ^= g.gexp(g.glog(e.getAt(s)) + i);
                        return t(n, 0).mod(e)
                    }
                };
                return r
            }

            var e = function (e, i) {
                var n = e, r = o[i], s = null, a = 0, l = null, c = new Array, u = {}, h = function (t, e) {
                    s = function (t) {
                        for (var e = new Array(t), i = 0; t > i; i += 1) {
                            e[i] = new Array(t);
                            for (var n = 0; t > n; n += 1) e[i][n] = null
                        }
                        return e
                    }(a = 4 * n + 17), d(0, 0), d(a - 7, 0), d(0, a - 7), p(), f(), w(t, e), n >= 7 && g(t), null == l && (l = E(n, r, c)), x(l, e)
                }, d = function (t, e) {
                    for (var i = -1; 7 >= i; i += 1) if (!(-1 >= t + i || t + i >= a)) for (var n = -1; 7 >= n; n += 1) -1 >= e + n || e + n >= a || (s[t + i][e + n] = i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 2 && 4 >= i && n >= 2 && 4 >= n)
                }, f = function () {
                    for (var t = 8; a - 8 > t; t += 1) null == s[t][6] && (s[t][6] = t % 2 == 0);
                    for (var e = 8; a - 8 > e; e += 1) null == s[6][e] && (s[6][e] = e % 2 == 0)
                }, p = function () {
                    for (var t = v.getPatternPosition(n), e = 0; e < t.length; e += 1) for (var i = 0; i < t.length; i += 1) {
                        var r = t[e], o = t[i];
                        if (null == s[r][o]) for (var a = -2; 2 >= a; a += 1) for (var l = -2; 2 >= l; l += 1) s[r + a][o + l] = -2 == a || 2 == a || -2 == l || 2 == l || 0 == a && 0 == l
                    }
                }, g = function (t) {
                    for (var e = v.getBCHTypeNumber(n), i = 0; 18 > i; i += 1) {
                        var r = !t && 1 == (e >> i & 1);
                        s[Math.floor(i / 3)][i % 3 + a - 8 - 3] = r
                    }
                    for (i = 0; 18 > i; i += 1) {
                        r = !t && 1 == (e >> i & 1);
                        s[i % 3 + a - 8 - 3][Math.floor(i / 3)] = r
                    }
                }, w = function (t, e) {
                    for (var i = r << 3 | e, n = v.getBCHTypeInfo(i), o = 0; 15 > o; o += 1) {
                        var l = !t && 1 == (n >> o & 1);
                        6 > o ? s[o][8] = l : 8 > o ? s[o + 1][8] = l : s[a - 15 + o][8] = l
                    }
                    for (o = 0; 15 > o; o += 1) {
                        l = !t && 1 == (n >> o & 1);
                        8 > o ? s[8][a - o - 1] = l : 9 > o ? s[8][15 - o - 1 + 1] = l : s[8][15 - o - 1] = l
                    }
                    s[a - 8][8] = !t
                }, x = function (t, e) {
                    for (var i = -1, n = a - 1, r = 7, o = 0, l = v.getMaskFunction(e), c = a - 1; c > 0; c -= 2) for (6 == c && (c -= 1); ;) {
                        for (var u = 0; 2 > u; u += 1) if (null == s[n][c - u]) {
                            var h = !1;
                            o < t.length && (h = 1 == (t[o] >>> r & 1)), l(n, c - u) && (h = !h), s[n][c - u] = h, -1 == (r -= 1) && (o += 1, r = 7)
                        }
                        if (0 > (n += i) || n >= a) {
                            n -= i, i = -i;
                            break
                        }
                    }
                }, T = function (e, i) {
                    for (var n = 0, r = 0, s = 0, o = new Array(i.length), a = new Array(i.length), l = 0; l < i.length; l += 1) {
                        var c = i[l].dataCount, u = i[l].totalCount - c;
                        r = Math.max(r, c), s = Math.max(s, u), o[l] = new Array(c);
                        for (var h = 0; h < o[l].length; h += 1) o[l][h] = 255 & e.getBuffer()[h + n];
                        n += c;
                        var d = v.getErrorCorrectPolynomial(u), f = t(o[l], d.getLength() - 1).mod(d);
                        a[l] = new Array(d.getLength() - 1);
                        for (h = 0; h < a[l].length; h += 1) {
                            var p = h + f.getLength() - a[l].length;
                            a[l][h] = p >= 0 ? f.getAt(p) : 0
                        }
                    }
                    var g = 0;
                    for (h = 0; h < i.length; h += 1) g += i[h].totalCount;
                    var m = new Array(g), y = 0;
                    for (h = 0; r > h; h += 1) for (l = 0; l < i.length; l += 1) h < o[l].length && (m[y] = o[l][h], y += 1);
                    for (h = 0; s > h; h += 1) for (l = 0; l < i.length; l += 1) h < a[l].length && (m[y] = a[l][h], y += 1);
                    return m
                }, E = function (t, e, i) {
                    for (var n = m.getRSBlocks(t, e), r = y(), s = 0; s < i.length; s += 1) {
                        var o = i[s];
                        r.put(o.getMode(), 4), r.put(o.getLength(), v.getLengthInBits(o.getMode(), t)), o.write(r)
                    }
                    var a = 0;
                    for (s = 0; s < n.length; s += 1) a += n[s].dataCount;
                    if (r.getLengthInBits() > 8 * a) throw new Error("code length overflow. (" + r.getLengthInBits() + ">" + 8 * a + ")");
                    for (r.getLengthInBits() + 4 <= 8 * a && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(!1);
                    for (; !(r.getLengthInBits() >= 8 * a || (r.put(236, 8), r.getLengthInBits() >= 8 * a));) r.put(17, 8);
                    return T(r, n)
                };
                return u.addData = function (t) {
                    var e = b(t);
                    c.push(e), l = null
                }, u.isDark = function (t, e) {
                    if (0 > t || t >= a || 0 > e || e >= a) throw new Error(t + "," + e);
                    return s[t][e]
                }, u.getModuleCount = function () {
                    return a
                }, u.make = function () {
                    h(!1, function () {
                        for (var t = 0, e = 0, i = 0; 8 > i; i += 1) {
                            h(!0, i);
                            var n = v.getLostPoint(u);
                            (0 == i || t > n) && (t = n, e = i)
                        }
                        return e
                    }())
                }, u.createTableTag = function (t, e) {
                    t = t || 2;
                    var i = "";
                    i += '<table style="', i += " border-width: 0px; border-style: none;", i += " border-collapse: collapse;", i += " padding: 0px; margin: " + (e = void 0 === e ? 4 * t : e) + "px;", i += '">', i += "<tbody>";
                    for (var n = 0; n < u.getModuleCount(); n += 1) {
                        i += "<tr>";
                        for (var r = 0; r < u.getModuleCount(); r += 1) i += '<td style="', i += " border-width: 0px; border-style: none;", i += " border-collapse: collapse;", i += " padding: 0px; margin: 0px;", i += " width: " + t + "px;", i += " height: " + t + "px;", i += " background-color: ", i += u.isDark(n, r) ? "#000000" : "#ffffff", i += ";", i += '"/>';
                        i += "</tr>"
                    }
                    return (i += "</tbody>") + "</table>"
                }, u.createImgTag = function (t, e) {
                    t = t || 2, e = void 0 === e ? 4 * t : e;
                    var i = u.getModuleCount() * t + 2 * e, n = e, r = i - e;
                    return C(i, i, function (e, i) {
                        if (e >= n && r > e && i >= n && r > i) {
                            var s = Math.floor((e - n) / t), o = Math.floor((i - n) / t);
                            return u.isDark(o, s) ? 0 : 1
                        }
                        return 1
                    })
                }, u
            };
            e.stringToBytes = function (t) {
                for (var e = new Array, i = 0; i < t.length; i += 1) {
                    var n = t.charCodeAt(i);
                    e.push(255 & n)
                }
                return e
            }, e.createStringToBytes = function (t, e) {
                var i = function () {
                    for (var i = x(t), n = function () {
                        var t = i.read();
                        if (-1 == t) throw new Error;
                        return t
                    }, r = 0, s = {}; ;) {
                        var o = i.read();
                        if (-1 == o) break;
                        var a = n(), l = n() << 8 | n();
                        s[String.fromCharCode(o << 8 | a)] = l, r += 1
                    }
                    if (r != e) throw new Error(r + " != " + e);
                    return s
                }(), n = "?".charCodeAt(0);
                return function (t) {
                    for (var e = new Array, r = 0; r < t.length; r += 1) {
                        var s = t.charCodeAt(r);
                        if (128 > s) e.push(s); else {
                            var o = i[t.charAt(r)];
                            "number" == typeof o ? (255 & o) == o ? e.push(o) : (e.push(o >>> 8), e.push(255 & o)) : e.push(n)
                        }
                    }
                    return e
                }
            };
            var i = 1, n = 2, r = 4, s = 8, o = {L: 1, M: 0, Q: 3, H: 2}, a = 0, l = 1, c = 2, u = 3, h = 4, d = 5,
                f = 6, p = 7, v = function () {
                    var e = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                        o = 1335, v = 7973, m = {}, y = function (t) {
                            for (var e = 0; 0 != t;) e += 1, t >>>= 1;
                            return e
                        };
                    return m.getBCHTypeInfo = function (t) {
                        for (var e = t << 10; y(e) - y(o) >= 0;) e ^= o << y(e) - y(o);
                        return 21522 ^ (t << 10 | e)
                    }, m.getBCHTypeNumber = function (t) {
                        for (var e = t << 12; y(e) - y(v) >= 0;) e ^= v << y(e) - y(v);
                        return t << 12 | e
                    }, m.getPatternPosition = function (t) {
                        return e[t - 1]
                    }, m.getMaskFunction = function (t) {
                        switch (t) {
                            case a:
                                return function (t, e) {
                                    return (t + e) % 2 == 0
                                };
                            case l:
                                return function (t, e) {
                                    return t % 2 == 0
                                };
                            case c:
                                return function (t, e) {
                                    return e % 3 == 0
                                };
                            case u:
                                return function (t, e) {
                                    return (t + e) % 3 == 0
                                };
                            case h:
                                return function (t, e) {
                                    return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0
                                };
                            case d:
                                return function (t, e) {
                                    return t * e % 2 + t * e % 3 == 0
                                };
                            case f:
                                return function (t, e) {
                                    return (t * e % 2 + t * e % 3) % 2 == 0
                                };
                            case p:
                                return function (t, e) {
                                    return (t * e % 3 + (t + e) % 2) % 2 == 0
                                };
                            default:
                                throw new Error("bad maskPattern:" + t)
                        }
                    }, m.getErrorCorrectPolynomial = function (e) {
                        for (var i = t([1], 0), n = 0; e > n; n += 1) i = i.multiply(t([1, g.gexp(n)], 0));
                        return i
                    }, m.getLengthInBits = function (t, e) {
                        if (e >= 1 && 10 > e) switch (t) {
                            case i:
                                return 10;
                            case n:
                                return 9;
                            case r:
                            case s:
                                return 8;
                            default:
                                throw new Error("mode:" + t)
                        } else if (27 > e) switch (t) {
                            case i:
                                return 12;
                            case n:
                                return 11;
                            case r:
                                return 16;
                            case s:
                                return 10;
                            default:
                                throw new Error("mode:" + t)
                        } else {
                            if (!(41 > e)) throw new Error("type:" + e);
                            switch (t) {
                                case i:
                                    return 14;
                                case n:
                                    return 13;
                                case r:
                                    return 16;
                                case s:
                                    return 12;
                                default:
                                    throw new Error("mode:" + t)
                            }
                        }
                    }, m.getLostPoint = function (t) {
                        for (var e = t.getModuleCount(), i = 0, n = 0; e > n; n += 1) for (var r = 0; e > r; r += 1) {
                            for (var s = 0, o = t.isDark(n, r), a = -1; 1 >= a; a += 1) if (!(0 > n + a || n + a >= e)) for (var l = -1; 1 >= l; l += 1) 0 > r + l || r + l >= e || (0 != a || 0 != l) && o == t.isDark(n + a, r + l) && (s += 1);
                            s > 5 && (i += 3 + s - 5)
                        }
                        for (n = 0; e - 1 > n; n += 1) for (r = 0; e - 1 > r; r += 1) {
                            var c = 0;
                            t.isDark(n, r) && (c += 1), t.isDark(n + 1, r) && (c += 1), t.isDark(n, r + 1) && (c += 1), t.isDark(n + 1, r + 1) && (c += 1), (0 == c || 4 == c) && (i += 3)
                        }
                        for (n = 0; e > n; n += 1) for (r = 0; e - 6 > r; r += 1) t.isDark(n, r) && !t.isDark(n, r + 1) && t.isDark(n, r + 2) && t.isDark(n, r + 3) && t.isDark(n, r + 4) && !t.isDark(n, r + 5) && t.isDark(n, r + 6) && (i += 40);
                        for (r = 0; e > r; r += 1) for (n = 0; e - 6 > n; n += 1) t.isDark(n, r) && !t.isDark(n + 1, r) && t.isDark(n + 2, r) && t.isDark(n + 3, r) && t.isDark(n + 4, r) && !t.isDark(n + 5, r) && t.isDark(n + 6, r) && (i += 40);
                        var u = 0;
                        for (r = 0; e > r; r += 1) for (n = 0; e > n; n += 1) t.isDark(n, r) && (u += 1);
                        return i + 10 * (Math.abs(100 * u / e / e - 50) / 5)
                    }, m
                }(), g = function () {
                    for (var t = new Array(256), e = new Array(256), i = 0; 8 > i; i += 1) t[i] = 1 << i;
                    for (i = 8; 256 > i; i += 1) t[i] = t[i - 4] ^ t[i - 5] ^ t[i - 6] ^ t[i - 8];
                    for (i = 0; 255 > i; i += 1) e[t[i]] = i;
                    var n = {
                        glog: function (t) {
                            if (1 > t) throw new Error("glog(" + t + ")");
                            return e[t]
                        }, gexp: function (e) {
                            for (; 0 > e;) e += 255;
                            for (; e >= 256;) e -= 255;
                            return t[e]
                        }
                    };
                    return n
                }(), m = function () {
                    var t = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                        e = function (t, e) {
                            var i = {};
                            return i.totalCount = t, i.dataCount = e, i
                        }, i = {}, n = function (e, i) {
                            switch (i) {
                                case o.L:
                                    return t[4 * (e - 1) + 0];
                                case o.M:
                                    return t[4 * (e - 1) + 1];
                                case o.Q:
                                    return t[4 * (e - 1) + 2];
                                case o.H:
                                    return t[4 * (e - 1) + 3];
                                default:
                                    return
                            }
                        };
                    return i.getRSBlocks = function (t, i) {
                        var r = n(t, i);
                        if (void 0 === r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + i);
                        for (var s = r.length / 3, o = new Array, a = 0; s > a; a += 1) for (var l = r[3 * a + 0], c = r[3 * a + 1], u = r[3 * a + 2], h = 0; l > h; h += 1) o.push(e(c, u));
                        return o
                    }, i
                }(), y = function () {
                    var t = new Array, e = 0, i = {
                        getBuffer: function () {
                            return t
                        }, getAt: function (e) {
                            var i = Math.floor(e / 8);
                            return 1 == (t[i] >>> 7 - e % 8 & 1)
                        }, put: function (t, e) {
                            for (var n = 0; e > n; n += 1) i.putBit(1 == (t >>> e - n - 1 & 1))
                        }, getLengthInBits: function () {
                            return e
                        }, putBit: function (i) {
                            var n = Math.floor(e / 8);
                            t.length <= n && t.push(0), i && (t[n] |= 128 >>> e % 8), e += 1
                        }
                    };
                    return i
                }, b = function (t) {
                    var i = r, n = e.stringToBytes(t), s = {
                        getMode: function () {
                            return i
                        }, getLength: function (t) {
                            return n.length
                        }, write: function (t) {
                            for (var e = 0; e < n.length; e += 1) t.put(n[e], 8)
                        }
                    };
                    return s
                }, w = function () {
                    var t = new Array, e = {
                        writeByte: function (e) {
                            t.push(255 & e)
                        }, writeShort: function (t) {
                            e.writeByte(t), e.writeByte(t >>> 8)
                        }, writeBytes: function (t, i, n) {
                            i = i || 0, n = n || t.length;
                            for (var r = 0; n > r; r += 1) e.writeByte(t[r + i])
                        }, writeString: function (t) {
                            for (var i = 0; i < t.length; i += 1) e.writeByte(t.charCodeAt(i))
                        }, toByteArray: function () {
                            return t
                        }, toString: function () {
                            var e = "";
                            e += "[";
                            for (var i = 0; i < t.length; i += 1) i > 0 && (e += ","), e += t[i];
                            return e + "]"
                        }
                    };
                    return e
                }, x = function (t) {
                    var e = t, i = 0, n = 0, r = 0, s = {
                        read: function () {
                            for (; 8 > r;) {
                                if (i >= e.length) {
                                    if (0 == r) return -1;
                                    throw new Error("unexpected end of file./" + r)
                                }
                                var t = e.charAt(i);
                                if (i += 1, "=" == t) return r = 0, -1;
                                t.match(/^\s$/) || (n = n << 6 | o(t.charCodeAt(0)), r += 6)
                            }
                            var s = n >>> r - 8 & 255;
                            return r -= 8, s
                        }
                    }, o = function (t) {
                        if (t >= 65 && 90 >= t) return t - 65;
                        if (t >= 97 && 122 >= t) return t - 97 + 26;
                        if (t >= 48 && 57 >= t) return t - 48 + 52;
                        if (43 == t) return 62;
                        if (47 == t) return 63;
                        throw new Error("c:" + t)
                    };
                    return s
                }, T = function (t, e) {
                    var i = t, n = e, r = new Array(t * e), s = {
                        setPixel: function (t, e, n) {
                            r[e * i + t] = n
                        }, write: function (t) {
                            t.writeString("GIF87a"), t.writeShort(i), t.writeShort(n), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(i), t.writeShort(n), t.writeByte(0);
                            var e = o(2);
                            t.writeByte(2);
                            for (var r = 0; e.length - r > 255;) t.writeByte(255), t.writeBytes(e, r, 255), r += 255;
                            t.writeByte(e.length - r), t.writeBytes(e, r, e.length - r), t.writeByte(0), t.writeString(";")
                        }
                    }, o = function (t) {
                        for (var e = 1 << t, i = 1 + (1 << t), n = t + 1, s = a(), o = 0; e > o; o += 1) s.add(String.fromCharCode(o));
                        s.add(String.fromCharCode(e)), s.add(String.fromCharCode(i));
                        var l = w(), c = function (t) {
                            var e = t, i = 0, n = 0, r = {
                                write: function (t, r) {
                                    if (t >>> r != 0) throw new Error("length over");
                                    for (; i + r >= 8;) e.writeByte(255 & (t << i | n)), r -= 8 - i, t >>>= 8 - i, n = 0, i = 0;
                                    n |= t << i, i += r
                                }, flush: function () {
                                    i > 0 && e.writeByte(n)
                                }
                            };
                            return r
                        }(l);
                        c.write(e, n);
                        var u = 0, h = String.fromCharCode(r[u]);
                        for (u += 1; u < r.length;) {
                            var d = String.fromCharCode(r[u]);
                            u += 1, s.contains(h + d) ? h += d : (c.write(s.indexOf(h), n), s.size() < 4095 && (s.size() == 1 << n && (n += 1), s.add(h + d)), h = d)
                        }
                        return c.write(s.indexOf(h), n), c.write(i, n), c.flush(), l.toByteArray()
                    }, a = function () {
                        var t = {}, e = 0, i = {
                            add: function (n) {
                                if (i.contains(n)) throw new Error("dup key:" + n);
                                t[n] = e, e += 1
                            }, size: function () {
                                return e
                            }, indexOf: function (e) {
                                return t[e]
                            }, contains: function (e) {
                                return void 0 !== t[e]
                            }
                        };
                        return i
                    };
                    return s
                }, C = function (t, e, i, n) {
                    for (var r = T(t, e), s = 0; e > s; s += 1) for (var o = 0; t > o; o += 1) r.setPixel(o, s, i(o, s));
                    var a = w();
                    r.write(a);
                    for (var l = function () {
                        var t = 0, e = 0, i = 0, n = "", r = {}, s = function (t) {
                            n += String.fromCharCode(o(63 & t))
                        }, o = function (t) {
                            if (0 > t) ; else {
                                if (26 > t) return 65 + t;
                                if (52 > t) return t - 26 + 97;
                                if (62 > t) return t - 52 + 48;
                                if (62 == t) return 43;
                                if (63 == t) return 47
                            }
                            throw new Error("n:" + t)
                        };
                        return r.writeByte = function (n) {
                            for (t = t << 8 | 255 & n, e += 8, i += 1; e >= 6;) s(t >>> e - 6), e -= 6
                        }, r.flush = function () {
                            if (e > 0 && (s(t << 6 - e), t = 0, e = 0), i % 3 != 0) for (var r = 3 - i % 3, o = 0; r > o; o += 1) n += "="
                        }, r.toString = function () {
                            return n
                        }, r
                    }(), c = a.toByteArray(), u = 0; u < c.length; u += 1) l.writeByte(c[u]);
                    l.flush();
                    var h = "";
                    return h += "<img", h += ' src="', h += "data:image/gif;base64,", h += l, h += '"', h += ' width="', h += t, h += '"', h += ' height="', h += e, h += '"', n && (h += ' alt="', h += n, h += '"'), h + "/>"
                };
            return e
        }(), function (e) {
            "function" == typeof define && i(134) ? define([], e) : "object" == ("undefined" == typeof exports ? "undefined" : s()(exports)) && (t.exports = e())
        }(function () {
            return n
        }), function (t) {
            t.stringToBytes = function (t) {
                return function (t) {
                    for (var e = [], i = 0; i < t.length; i++) {
                        var n = t.charCodeAt(i);
                        128 > n ? e.push(n) : 2048 > n ? e.push(192 | n >> 6, 128 | 63 & n) : 55296 > n || n >= 57344 ? e.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (i++, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(i)), e.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                    }
                    return e
                }(t)
            }
        }(n), n)), function (t) {
            t.fn.share = function (e) {
                function i(e, i) {
                    var n = function (e) {
                        0 === e.mobileSites.length && e.sites.length && (e.mobileSites = e.sites);
                        var i = (t(window).width() <= 768 ? e.mobileSites : e.sites.length ? e.sites : []).slice(0),
                            n = e.disabled;
                        return "string" == typeof i && (i = i.split(/\s*,\s*/)), "string" == typeof n && (n = n.split(/\s*,\s*/)), /MicroMessenger/i.test(navigator.userAgent) && n.push("wechat"), n.length && t.each(n, function (e, n) {
                            var r = t.inArray(n, i);
                            -1 !== r && i.splice(r, 1)
                        }), i
                    }(i);
                    "prepend" == i.mode && n.reverse(), n.length && t.each(n, function (n, r) {
                        var s = function (t, e) {
                                var i = o[t];
                                for (var n in e.summary = e.description, e) if (e.hasOwnProperty(n)) {
                                    var r = t + n.replace(/^[a-z]/, function (t) {
                                        return t.toUpperCase()
                                    }), s = encodeURIComponent(void 0 === e[r] ? e[n] : e[r]);
                                    i = i.replace(new RegExp("{{" + n.toUpperCase() + "}}", "g"), s)
                                }
                                return i
                            }(r, i),
                            l = i.initialized ? e.find(".icon-" + r) : t('<a class="social-share-icon icon-' + r + '"></a>');
                        return !l.length || (l.prop("aria-label", "分享到 " + a[r]), l.prop("href", s), "wechat" === r ? l.prop("tabindex", -1) : l.prop("target", "_blank"), void (i.initialized || ("prepend" == i.mode ? e.prepend(l) : e.append(l))))
                    })
                }

                var n = t(document.head), r = {
                    url: location.href,
                    site_url: location.origin,
                    source: n.find("[name=site], [name=Site]").attr("content") || document.title,
                    title: n.find("[name=title], [name=Title]").attr("content") || document.title,
                    description: n.find("[name=description], [name=Description]").attr("content") || "",
                    image: t("img:first").prop("src") || "",
                    imageSelector: void 0,
                    weiboKey: "",
                    wechatQrcodeTitle: "微信扫一扫：分享",
                    wechatQrcodeHelper: "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",
                    wechatQrcodeSize: 100,
                    mobileSites: [],
                    sites: ["weibo", "qq", "wechat", "tencent", "douban", "qzone", "linkedin", "diandian", "facebook", "twitter", "google"],
                    disabled: [],
                    initialized: !1
                }, s = t.extend({}, r, e), o = {
                    qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",
                    qq: "http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}",
                    tencent: "http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}",
                    weibo: "http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",
                    wechat: "javascript:;",
                    douban: "http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",
                    diandian: "http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link",
                    linkedin: "http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",
                    facebook: "https://www.facebook.com/sharer/sharer.php?u={{URL}}&title={{TITLE}}&description={{DESCRIPTION}}&caption={{SUBHEAD}}&link={{URL}}&picture={{IMAGE}}",
                    twitter: "https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{SITE_URL}}",
                    google: "https://plus.google.com/share?url={{URL}}"
                }, a = {
                    qzone: "QQ空间",
                    qq: "QQ",
                    tencent: "腾讯微博",
                    weibo: "微博",
                    wechat: "微信",
                    douban: "豆瓣",
                    diandian: "点点",
                    linkedin: "LinkedIn",
                    facebook: "Facebook",
                    twitter: "Twitter",
                    google: "Google"
                };
                this.each(function () {
                    if (t(this).data("initialized")) return !0;
                    var e = t.extend({}, s, t(this).data());
                    e.imageSelector && (e.image = t(e.imageSelector).map(function () {
                        return t(this).prop("src")
                    }).get().join("||"));
                    var n = t(this).addClass("share-component social-share");
                    i(n, e), function (t, e) {
                        var i = t.find("a.icon-wechat");
                        i.length && (i.append('<div class="wechat-qrcode"><h4>' + e.wechatQrcodeTitle + '</h4><div class="qrcode"></div><div class="help">' + e.wechatQrcodeHelper + "</div></div>"), i.find(".qrcode").qrcode({
                            render: "image",
                            size: e.wechatQrcodeSize,
                            text: e.url
                        }), i.offset().top < 100 && i.find(".wechat-qrcode").addClass("bottom"))
                    }(n, e), t(this).data("initialized", !0)
                })
            }, t(function () {
                t(".share-component,.social-share").share()
            })
        }(e)
    }).call(this, i(133)(t), i(48))
}, , , , , , , , , , function (t, e, i) {
    i(358), t.exports = i(144)
}, function (t, e, i) {
    "use strict";
    i.r(e), function (t) {
        i(135), i(136), i(137), i(138), i(345), i(139), i(140), i(141), i(142), i(346), i(347);
        t(function () {
            new Swiper(".swiper-container", {
                loop: !0,
                pagination: {el: ".swiper-pagination"},
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
            });
            t("#share").share({
                source: "",
                title: "kjson",
                description: "kjson",
                image: "",
                sites: ["qzone", "qq", "weibo", "wechat", "douban"],
                disabled: ["google", "facebook", "twitter"],
                wechatQrcodeTitle: "微信扫一扫：分享",
                wechatQrcodeHelper: "手机微信扫码分享"
            })
        })
    }.call(this, i(48))
}]);