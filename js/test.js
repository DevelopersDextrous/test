/**
 * @license
 * Lo-Dash 1.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash underscore exports="amd,commonjs,global,node" -o ./dist/lodash.underscore.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.4.4 <http://underscorejs.org/>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * Available under MIT license <http://lodash.com/license>
 */

/*
 postal
 Author: Jim Cowart (http://freshbrewedcode.com/jimcowart)
 License: Dual licensed MIT (http://www.opensource.org/licenses/mit-license) & GPL (http://www.opensource.org/licenses/gpl-license)
 Version 0.8.2
 */

/**
 * @license RequireJS text 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

/**
 * @license RequireJS i18n 2.0.2 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
 */

/** @license
 * RequireJS Image Plugin
 * Author: Miller Medeiros
 * Version: 0.2.2 (2013/02/08)
 * Released under the MIT license
 */

/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (e) {
    function et(e) {
        return e instanceof et ? e : new ut(e)
    }
    function nt(e) {
        return e.charCodeAt(0)
    }
    function rt(e, t) {
        var n = e.index, r = t.index;
        e = e.criteria, t = t.criteria;
        if (e !== t) {
            if (e > t || typeof e == "undefined")
                return 1;
            if (e < t || typeof t == "undefined")
                return-1
        }
        return n < r ? -1 : 1
    }
    function it(e, t, n, r) {
        function a() {
            var r = arguments, f = s ? this : t;
            i || (e = t[o]), n.length && (r = r.length ? (r = G.call(r), u ? r.concat(n) : n.concat(r)) : n);
            if (this instanceof a) {
                at.prototype = e.prototype, f = new at, at.prototype = null;
                var l = e.apply(f, r);
                return Mt(l) ? l : f
            }
            return e.apply(f, r)
        }
        var i = Ot(e), s = !n, o = t;
        if (s) {
            var u = r;
            n = t
        } else if (!i) {
            if (!r)
                throw new TypeError;
            t = e
        }
        return a
    }
    function st(e) {
        return"\\" + O[e]
    }
    function ot(e) {
        return dt[e]
    }
    function ut(e) {
        this.__wrapped__ = e
    }
    function at() {
    }
    function ft(e) {
        return vt[e]
    }
    function lt(e) {
        return U.call(e) == w
    }
    function mt(e) {
        if (!e)
            return e;
        for (var t = 1, n = arguments.length; t < n; t++) {
            var r = arguments[t];
            if (r)
                for (var i in r)
                    e[i] = r[i]
        }
        return e
    }
    function gt(e) {
        return Mt(e) ? ct(e) ? G.call(e) : mt({}, e) : e
    }
    function yt(e) {
        if (!e)
            return e;
        for (var t = 1, n = arguments.length; t < n; t++) {
            var r = arguments[t];
            if (r)
                for (var i in r)
                    e[i] == null && (e[i] = r[i])
        }
        return e
    }
    function Et(e) {
        var t = [];
        return bt(e, function (e, n) {
            Ot(e) && t.push(n)
        }), t.sort()
    }
    function St(e, t) {
        return e ? I.call(e, t) : !1
    }
    function xt(e) {
        var t = -1, n = pt(e), r = n.length, i = {};
        while (++t < r) {
            var s = n[t];
            i[e[s]] = s
        }
        return i
    }
    function Tt(e) {
        return e === !0 || e === !1 || U.call(e) == S
    }
    function Nt(e) {
        return e ? typeof e == "object" && U.call(e) == x : !1
    }
    function Ct(e) {
        return e ? e.nodeType === 1 : !1
    }
    function kt(e) {
        if (!e)
            return!0;
        if (ct(e) || Bt(e))
            return!e.length;
        for (var t in e)
            if (I.call(e, t))
                return!1;
        return!0
    }
    function Lt(e, t, n, r) {
        if (e === t)
            return e !== 0 || 1 / e == 1 / t;
        var i = typeof e, s = typeof t;
        if (e === e && (!e || i != "function" && i != "object") && (!t || s != "function" && s != "object"))
            return!1;
        if (e == null || t == null)
            return e === t;
        var u = U.call(e), a = U.call(t);
        if (u != a)
            return!1;
        switch (u) {
            case S:
            case x:
                return+e == +t;
            case N:
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case k:
            case L:
                return e == String(t)
        }
        var f = u == E;
        if (!f) {
            if (e instanceof et || t instanceof et)
                return Lt(e.__wrapped__ || e, t.__wrapped__ || t, n, r);
            if (u != C)
                return!1;
            var l = e.constructor, c = t.constructor;
            if (l != c && !(Ot(l) && l instanceof l && Ot(c) && c instanceof c))
                return!1
        }
        n || (n = []), r || (r = []);
        var h = n.length;
        while (h--)
            if (n[h] == e)
                return r[h] == t;
        var p = !0, d = 0;
        n.push(e), r.push(t);
        if (f) {
            d = t.length, p = d == e.length;
            if (p)
                while (d--)
                    if (!(p = Lt(e[d], t[d], n, r)))
                        break;
            return p
        }
        return bt(t, function (t, i, s) {
            if (I.call(s, i))
                return d++, !(p = I.call(e, i) && Lt(e[i], t, n, r)) && o
        }), p && bt(e, function (e, t, n) {
            if (I.call(n, t))
                return!(p = --d > -1) && o
        }), p
    }
    function At(e) {
        return X(e) && !V(parseFloat(e))
    }
    function Ot(e) {
        return typeof e == "function"
    }
    function Mt(e) {
        return e ? A[typeof e] : !1
    }
    function _t(e) {
        return Pt(e) && e != +e
    }
    function Dt(e) {
        return e === null
    }
    function Pt(e) {
        return typeof e == "number" || U.call(e) == N
    }
    function Ht(e) {
        return e ? A[typeof e] && U.call(e) == k : !1
    }
    function Bt(e) {
        return typeof e == "string" || U.call(e) == L
    }
    function jt(e) {
        return typeof e == "undefined"
    }
    function Ft(e) {
        var t = j.apply(M, G.call(arguments, 1)), n = {};
        return bt(e, function (e, r) {
            vn(t, r) < 0 && (n[r] = e)
        }), n
    }
    function It(e) {
        var t = -1, n = pt(e), r = n.length, i = Array(r);
        while (++t < r) {
            var s = n[t];
            i[t] = [s, e[s]]
        }
        return i
    }
    function qt(e) {
        var t = -1, n = j.apply(M, G.call(arguments, 1)), r = n.length, i = {};
        while (++t < r) {
            var s = n[t];
            s in e && (i[s] = e[s])
        }
        return i
    }
    function Rt(e) {
        var t = -1, n = pt(e), r = n.length, i = Array(r);
        while (++t < r)
            i[t] = e[n[t]];
        return i
    }
    function Ut(e, t) {
        var n = e ? e.length : 0, r = !1;
        return typeof n == "number" ? r = vn(e, t) > -1 : wt(e, function (e) {
            return(r = e === t) && o
        }), r
    }
    function zt(e, t, n) {
        var r = {};
        return t = _n(t, n), Jt(e, function (e, n, i) {
            n = String(t(e, n, i)), I.call(r, n) ? r[n]++ : r[n] = 1
        }), r
    }
    function Wt(e, t, n) {
        var r = !0;
        t = _n(t, n);
        var i = -1, s = e ? e.length : 0;
        if (typeof s == "number") {
            while (++i < s)
                if (!(r = !!t(e[i], i, e)))
                    break
        } else
            wt(e, function (e, n, i) {
                return!(r = !!t(e, n, i)) && o
            });
        return r
    }
    function Xt(e, t, n) {
        var r = [];
        t = _n(t, n);
        var i = -1, s = e ? e.length : 0;
        if (typeof s == "number")
            while (++i < s) {
                var o = e[i];
                t(o, i, e) && r.push(o)
            }
        else
            wt(e, function (e, n, i) {
                t(e, n, i) && r.push(e)
            });
        return r
    }
    function Vt(e, t, n) {
        t = _n(t, n);
        var r = -1, i = e ? e.length : 0;
        if (typeof i != "number") {
            var u;
            return wt(e, function (e, n, r) {
                if (t(e, n, r))
                    return u = e, o
            }), u
        }
        while (++r < i) {
            var s = e[r];
            if (t(s, r, e))
                return s
        }
    }
    function $t(e, t) {
        return ln(e, t, !0)
    }
    function Jt(e, t, n) {
        var r = -1, i = e ? e.length : 0;
        t = t && typeof n == "undefined" ? t : _n(t, n);
        if (typeof i == "number") {
            while (++r < i)
                if (t(e[r], r, e) === o)
                    break
        } else
            wt(e, t)
    }
    function Kt(e, t, n) {
        var r = {};
        return t = _n(t, n), Jt(e, function (e, n, i) {
            n = String(t(e, n, i)), (I.call(r, n) ? r[n] : r[n] = []).push(e)
        }), r
    }
    function Qt(e, t) {
        var n = G.call(arguments, 2), r = -1, i = typeof t == "function", s = e ? e.length : 0, o = Array(typeof s == "number" ? s : 0);
        return Jt(e, function (e) {
            o[++r] = (i ? t : e[t]).apply(e, n)
        }), o
    }
    function Gt(e, t, n) {
        var r = -1, i = e ? e.length : 0;
        t = _n(t, n);
        if (typeof i == "number") {
            var s = Array(i);
            while (++r < i)
                s[r] = t(e[r], r, e)
        } else
            s = [], wt(e, function (e, n, i) {
                s[++r] = t(e, n, i)
            });
        return s
    }
    function Yt(e, t, n) {
        var r = -Infinity, i = r, s = -1, o = e ? e.length : 0;
        if (!t && typeof o == "number")
            while (++s < o) {
                var u = e[s];
                u > i && (i = u)
            }
        else
            t = _n(t, n), Jt(e, function (e, n, s) {
                var o = t(e, n, s);
                o > r && (r = o, i = e)
            });
        return i
    }
    function Zt(e, t, n) {
        var r = Infinity, i = r, s = -1, o = e ? e.length : 0;
        if (!t && typeof o == "number")
            while (++s < o) {
                var u = e[s];
                u < i && (i = u)
            }
        else
            t = _n(t, n), Jt(e, function (e, n, s) {
                var o = t(e, n, s);
                o < r && (r = o, i = e)
            });
        return i
    }
    function en(e, t) {
        var n = -1, r = e ? e.length : 0;
        if (typeof r == "number") {
            var i = Array(r);
            while (++n < r)
                i[n] = e[n][t]
        }
        return i || Gt(e, t)
    }
    function tn(e, t, n, r) {
        if (!e)
            return n;
        var i = arguments.length < 3;
        t = _n(t, r, 4);
        var s = -1, o = e.length;
        if (typeof o == "number") {
            i && (n = e[++s]);
            while (++s < o)
                n = t(n, e[s], s, e)
        } else
            wt(e, function (e, r, s) {
                n = i ? (i = !1, e) : t(n, e, r, s)
            });
        return n
    }
    function nn(e, t, n, r) {
        var i = e, s = e ? e.length : 0, o = arguments.length < 3;
        if (typeof s != "number") {
            var u = pt(e);
            s = u.length
        }
        return t = _n(t, r, 4), Jt(e, function (e, r, a) {
            r = u ? u[--s] : --s, n = o ? (o = !1, i[r]) : t(n, i[r], r, a)
        }), n
    }
    function rn(e, t, n) {
        return t = _n(t, n), Xt(e, function (e, n, r) {
            return!t(e, n, r)
        })
    }
    function sn(e) {
        var t = -1, n = e ? e.length : 0, r = Array(typeof n == "number" ? n : 0);
        return Jt(e, function (e) {
            var n = F(Q() * (++t + 1));
            r[t] = r[n], r[n] = e
        }), r
    }
    function on(e) {
        var t = e ? e.length : 0;
        return typeof t == "number" ? t : pt(e).length
    }
    function un(e, t, n) {
        var r;
        t = _n(t, n);
        var i = -1, s = e ? e.length : 0;
        if (typeof s == "number") {
            while (++i < s)
                if (r = t(e[i], i, e))
                    break
        } else
            wt(e, function (e, n, i) {
                return(r = t(e, n, i)) && o
            });
        return!!r
    }
    function an(e, t, n) {
        var r = -1, i = e ? e.length : 0, s = Array(typeof i == "number" ? i : 0);
        t = _n(t, n), Jt(e, function (e, n, i) {
            s[++r] = {criteria: t(e, n, i), index: r, value: e}
        }), i = s.length, s.sort(rt);
        while (i--)
            s[i] = s[i].value;
        return s
    }
    function fn(e) {
        return ct(e) ? G.call(e) : e && typeof e.length == "number" ? Gt(e) : Rt(e)
    }
    function ln(e, t, n) {
        return n && kt(t) ? null : (n ? Vt : Xt)(e, t)
    }
    function cn(e) {
        var t = -1, n = e ? e.length : 0, r = [];
        while (++t < n) {
            var i = e[t];
            i && r.push(i)
        }
        return r
    }
    function hn(e) {
        var t = -1, n = e.length, r = j.apply(M, G.call(arguments, 1)), i = [];
        while (++t < n) {
            var s = e[t];
            vn(r, s) < 0 && i.push(s)
        }
        return i
    }
    function pn(e, t, n) {
        if (e) {
            var r = 0, i = e.length;
            if (typeof t != "number" && t != null) {
                var s = -1;
                t = _n(t, n);
                while (++s < i && t(e[s], s, e))
                    r++
            } else {
                r = t;
                if (r == null || n)
                    return e[0]
            }
            return G.call(e, 0, K(J(0, r), i))
        }
    }
    function dn(e, t) {
        var n = -1, r = e ? e.length : 0, i = [];
        while (++n < r) {
            var s = e[n];
            ct(s) ? q.apply(i, t ? s : dn(s)) : i.push(s)
        }
        return i
    }
    function vn(e, t, n) {
        var r = -1, i = e ? e.length : 0;
        if (typeof n == "number")
            r = (n < 0 ? J(0, i + n) : n || 0) - 1;
        else if (n)
            return r = Sn(e, t), e[r] === t ? r : -1;
        while (++r < i)
            if (e[r] === t)
                return r;
        return-1
    }
    function mn(e, t, n) {
        if (!e)
            return[];
        var r = 0, i = e.length;
        if (typeof t != "number" && t != null) {
            var s = i;
            t = _n(t, n);
            while (s-- && t(e[s], s, e))
                r++
        } else
            r = t == null || n ? 1 : t || r;
        return G.call(e, 0, K(J(0, i - r), i))
    }
    function gn(e) {
        var t = arguments, n = t.length, r = -1, i = e ? e.length : 0, s = [];
        e:while (++r < i) {
            var o = e[r];
            if (vn(s, o) < 0) {
                var u = n;
                while (--u)
                    if (vn(t[u], o) < 0)
                        continue e;
                s.push(o)
            }
        }
        return s
    }
    function yn(e, t, n) {
        if (e) {
            var r = 0, i = e.length;
            if (typeof t != "number" && t != null) {
                var s = i;
                t = _n(t, n);
                while (s-- && t(e[s], s, e))
                    r++
            } else {
                r = t;
                if (r == null || n)
                    return e[i - 1]
            }
            return G.call(e, J(0, i - r))
        }
    }
    function bn(e, t, n) {
        var r = e ? e.length : 0;
        typeof n == "number" && (r = (n < 0 ? J(0, r + n) : K(n, r - 1)) + 1);
        while (r--)
            if (e[r] === t)
                return r;
        return-1
    }
    function wn(e, t, n) {
        e = +e || 0, n = +n || 1, t == null && (t = e, e = 0);
        var r = -1, i = J(0, H((t - e) / n)), s = Array(i);
        while (++r < i)
            s[r] = e, e += n;
        return s
    }
    function En(e, t, n) {
        if (typeof t != "number" && t != null) {
            var r = 0, i = -1, s = e ? e.length : 0;
            t = _n(t, n);
            while (++i < s && t(e[i], i, e))
                r++
        } else
            r = t == null || n ? 1 : J(0, t);
        return G.call(e, r)
    }
    function Sn(e, t, n, r) {
        var i = 0, s = e ? e.length : i;
        n = n ? _n(n, r, 1) : Un, t = n(t);
        while (i < s) {
            var o = i + s >>> 1;
            n(e[o]) < t ? i = o + 1 : s = o
        }
        return i
    }
    function xn(e) {
        return ct(e) || (arguments[0] = e ? G.call(e) : M), Tn(j.apply(M, arguments))
    }
    function Tn(e, t, n, r) {
        var i = -1, s = e ? e.length : 0, o = [], u = o;
        typeof t != "boolean" && t != null && (r = n, n = t, t = !1), n != null && (u = [], n = _n(n, r));
        while (++i < s) {
            var a = e[i], f = n ? n(a, i, e) : a;
            if (t ? !i || u[u.length - 1] !== f : vn(u, f) < 0)
                n && u.push(f), o.push(a)
        }
        return o
    }
    function Nn(e) {
        return hn(e, G.call(arguments, 1))
    }
    function Cn(e) {
        var t = -1, n = e ? Yt(en(arguments, "length")) : 0, r = Array(n);
        while (++t < n)
            r[t] = en(arguments, t);
        return r
    }
    function kn(e, t) {
        var n = -1, r = e ? e.length : 0, i = {};
        while (++n < r) {
            var s = e[n];
            t ? i[s] = t[n] : i[s[0]] = s[1]
        }
        return i
    }
    function Ln(e, t) {
        return e < 1 ? t() : function () {
            if (--e < 1)
                return t.apply(this, arguments)
        }
    }
    function An(e, t) {
        return tt.fastBind || z && arguments.length > 2 ? z.call.apply(z, arguments) : it(e, t, G.call(arguments, 2))
    }
    function On(e) {
        var t = arguments.length > 1 ? j.apply(M, G.call(arguments, 1)) : Et(e), n = -1, r = t.length;
        while (++n < r) {
            var i = t[n];
            e[i] = An(e[i], e)
        }
        return e
    }
    function Mn() {
        var e = arguments;
        return function () {
            var t = arguments, n = e.length;
            while (n--)
                t = [e[n].apply(this, t)];
            return t[0]
        }
    }
    function _n(e, t, n) {
        if (e == null)
            return Un;
        var r = typeof e;
        if (r != "function") {
            if (r != "object")
                return function (t) {
                    return t[e]
                };
            var i = pt(e);
            return function (t) {
                var n = i.length, r = !1;
                while (n--)
                    if (!(r = t[i[n]] === e[i[n]]))
                        break;
                return r
            }
        }
        return typeof t != "undefined" ? n === 1 ? function (n) {
            return e.call(t, n)
        } : n === 2 ? function (n, r) {
            return e.call(t, n, r)
        } : n === 4 ? function (n, r, i, s) {
            return e.call(t, n, r, i, s)
        } : function (n, r, i) {
            return e.call(t, n, r, i)
        } : e
    }
    function Dn(e, t, n) {
        function u() {
            o = null, n || (i = e.apply(s, r))
        }
        var r, i, s, o;
        return function () {
            var a = n && !o;
            return r = arguments, s = this, B(o), o = R(u, t), a && (i = e.apply(s, r)), i
        }
    }
    function Pn(e) {
        var n = G.call(arguments, 1);
        return R(function () {
            e.apply(t, n)
        }, 1)
    }
    function Hn(e, n) {
        var r = G.call(arguments, 2);
        return R(function () {
            e.apply(t, r)
        }, n)
    }
    function Bn(e, t) {
        var n = {};
        return function () {
            var r = u + (t ? t.apply(this, arguments) : arguments[0]);
            return I.call(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }
    function jn(e) {
        var t, n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }
    function Fn(e) {
        return it(e, G.call(arguments, 1))
    }
    function In(e, t) {
        function u() {
            o = new Date, s = null, r = e.apply(i, n)
        }
        var n, r, i, s, o = 0;
        return function () {
            var a = new Date, f = t - (a - o);
            return n = arguments, i = this, f <= 0 ? (B(s), s = null, o = a, r = e.apply(i, n)) : s || (s = R(u, f)), r
        }
    }
    function qn(e, t) {
        return function () {
            var n = [e];
            return q.apply(n, arguments), t.apply(this, n)
        }
    }
    function Rn(e) {
        return e == null ? "" : String(e).replace(g, ot)
    }
    function Un(e) {
        return e
    }
    function zn(e) {
        Jt(Et(e), function (t) {
            var n = et[t] = e[t];
            et.prototype[t] = function () {
                var e = [this.__wrapped__];
                q.apply(e, arguments);
                var t = n.apply(et, e);
                return this.__chain__ && (t = new ut(t), t.__chain__ = !0), t
            }
        })
    }
    function Wn() {
        return e._ = D, this
    }
    function Xn(e, t) {
        return e == null && t == null && (t = 1), e = +e || 0, t == null && (t = e, e = 0), e + F(Q() * ((+t || 0) - e + 1))
    }
    function Vn(e, t) {
        var n = e ? e[t] : null;
        return Ot(n) ? e[t]() : n
    }
    function $n(e, t, n) {
        e || (e = ""), n = yt({}, n, et.templateSettings);
        var r = 0, i = "__p += '", s = n.variable, o = RegExp((n.escape || m).source + "|" + (n.interpolate || m).source + "|" + (n.evaluate || m).source + "|$", "g");
        e.replace(o, function (t, n, s, o, u) {
            return i += e.slice(r, u).replace(y, st), n && (i += "' +\n_.escape(" + n + ") +\n'"), o && (i += "';\n" + o + ";\n__p += '"), s && (i += "' +\n((__t = (" + s + ")) == null ? '' : __t) +\n'"), r = u + t.length, t
        }), i += "';\n", s || (s = "obj", i = "with (" + s + " || {}) {\n" + i + "\n}\n"), i = "function(" + s + ") {\n" + "var __t, __p = '', __j = Array.prototype.join;\n" + "function print() { __p += __j.call(arguments, '') }\n" + i + "return __p\n}";
        try {
            var u = Function("_", "return " + i)(et)
        } catch (a) {
            throw a.source = i, a
        }
        return t ? u(t) : (u.source = i, u)
    }
    function Jn(e, t, n) {
        var r = -1, i = Array(e > -1 ? e : 0);
        while (++r < e)
            i[r] = t.call(n, r);
        return i
    }
    function Kn(e) {
        return e == null ? "" : String(e).replace(h, ft)
    }
    function Qn(e) {
        var t = ++s + "";
        return e ? e + t : t
    }
    function Gn(e) {
        return e = new ut(e), e.__chain__ = !0, e
    }
    function Yn(e, t) {
        return t(e), e
    }
    function Zn() {
        return this.__chain__ = !0, this
    }
    function er() {
        return String(this.__wrapped__)
    }
    function tr() {
        return this.__wrapped__
    }
    var t, n = typeof exports == "object" && exports, r = typeof module == "object" && module && module.exports == n && module, i = typeof global == "object" && global;
    if (i.global === i || i.window === i)
        e = i;
    var s = 0, o = {}, u = +(new Date) + "", a = 200, f = /\b__p \+= '';/g, l = /\b(__p \+=) '' \+/g, c = /(__e\(.*?\)|\b__t\)) \+\n'';/g, h = /&(?:amp|lt|gt|quot|#39);/g, p = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, d = /\w*$/, v = /<%=([\s\S]+?)%>/g, m = /($^)/, g = /[&<>"']/g, y = /['\n\r\t\u2028\u2029\\]/g, b = 0, w = "[object Arguments]", E = "[object Array]", S = "[object Boolean]", x = "[object Date]", T = "[object Function]", N = "[object Number]", C = "[object Object]", k = "[object RegExp]", L = "[object String]", A = {"boolean": !1, "function": !0, object: !0, number: !1, string: !1, "undefined": !1}, O = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "	": "t", "\u2028": "u2028", "\u2029": "u2029"}, M = Array(), _ = Object(), D = e._, P = RegExp("^" + String(_.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"), H = Math.ceil, B = e.clearTimeout, j = M.concat, F = Math.floor, I = _.hasOwnProperty, q = M.push, R = e.setTimeout, U = _.toString, z = P.test(z = U.bind) && z, W = P.test(W = Array.isArray) && W, X = e.isFinite, V = e.isNaN, $ = P.test($ = Object.keys) && $, J = Math.max, K = Math.min, Q = Math.random, G = M.slice, Y = P.test(e.attachEvent), Z = z && !/\n|true/.test(z + Y), tt = {};
    (function () {
        var e = {0: 1, length: 1};
        tt.fastBind = z && !Z, tt.spliceObjects = (M.splice.call(e, 0, 1), !e[0])
    })(1), et.templateSettings = {escape: /<%-([\s\S]+?)%>/g, evaluate: /<%([\s\S]+?)%>/g, interpolate: v, variable: ""}, ut.prototype = et.prototype, lt(arguments) || (lt = function (e) {
        return e ? I.call(e, "callee") : !1
    });
    var ct = W || function (e) {
        return e ? typeof e == "object" && U.call(e) == E : !1
    }, ht = function (e) {
        var t, n = e, r = [];
        if (!n)
            return r;
        if (!A[typeof e])
            return r;
        for (t in n)
            I.call(n, t) && r.push(t);
        return r
    }, pt = $ ? function (e) {
        return Mt(e) ? $(e) : []
    } : ht, dt = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}, vt = xt(dt), bt = function (e, t) {
        var n, r = e, i = r;
        if (!r)
            return i;
        if (!A[typeof r])
            return i;
        for (n in r)
            if (t(r[n], n, e) === o)
                return i;
        return i
    }, wt = function (e, t) {
        var n, r = e, i = r;
        if (!r)
            return i;
        if (!A[typeof r])
            return i;
        for (n in r)
            if (I.call(r, n) && t(r[n], n, e) === o)
                return i;
        return i
    };
    Ot(/x/) && (Ot = function (e) {
        return typeof e == "function" && U.call(e) == T
    }), et.after = Ln, et.bind = An, et.bindAll = On, et.compact = cn, et.compose = Mn, et.countBy = zt, et.debounce = Dn, et.defaults = yt, et.defer = Pn, et.delay = Hn, et.difference = hn, et.filter = Xt, et.flatten = dn, et.forEach = Jt, et.functions = Et, et.groupBy = Kt, et.initial = mn, et.intersection = gn, et.invert = xt, et.invoke = Qt, et.keys = pt, et.map = Gt, et.max = Yt, et.memoize = Bn, et.min = Zt, et.omit = Ft, et.once = jn, et.pairs = It, et.partial = Fn, et.pick = qt, et.pluck = en, et.range = wn, et.reject = rn, et.rest = En, et.shuffle = sn, et.sortBy = an, et.tap = Yn, et.throttle = In, et.times = Jn, et.toArray = fn, et.union = xn, et.uniq = Tn, et.values = Rt, et.where = ln, et.without = Nn, et.wrap = qn, et.zip = Cn, et.collect = Gt, et.drop = En, et.each = Jt, et.extend = mt, et.methods = Et, et.object = kn, et.select = Xt, et.tail = En, et.unique = Tn, et.clone = gt, et.contains = Ut, et.escape = Rn, et.every = Wt, et.find = Vt, et.findWhere = $t, et.has = St, et.identity = Un, et.indexOf = vn, et.isArguments = lt, et.isArray = ct, et.isBoolean = Tt, et.isDate = Nt, et.isElement = Ct, et.isEmpty = kt, et.isEqual = Lt, et.isFinite = At, et.isFunction = Ot, et.isNaN = _t, et.isNull = Dt, et.isNumber = Pt, et.isObject = Mt, et.isRegExp = Ht, et.isString = Bt, et.isUndefined = jt, et.lastIndexOf = bn, et.mixin = zn, et.noConflict = Wn, et.random = Xn, et.reduce = tn, et.reduceRight = nn, et.result = Vn, et.size = on, et.some = un, et.sortedIndex = Sn, et.template = $n, et.unescape = Kn, et.uniqueId = Qn, et.all = Wt, et.any = un, et.detect = Vt, et.foldl = tn, et.foldr = nn, et.include = Ut, et.inject = tn, et.first = pn, et.last = yn, et.take = pn, et.head = pn, et.chain = Gn, et.VERSION = "1.2.1", zn(et), et.prototype.chain = Zn, et.prototype.value = tr, Jt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = M[e];
        et.prototype[e] = function () {
            var e = this.__wrapped__;
            return t.apply(e, arguments), !tt.spliceObjects && e.length === 0 && delete e[0], this
        }
    }), Jt(["concat", "join", "slice"], function (e) {
        var t = M[e];
        et.prototype[e] = function () {
            var e = this.__wrapped__, n = t.apply(e, arguments);
            return this.__chain__ && (n = new ut(n), n.__chain__ = !0), n
        }
    }), typeof define == "function" && typeof define.amd == "object" && define.amd ? (e._ = et, define("vendor/lodash.underscore", [], function () {
        return et
    })) : n && !n.nodeType ? r ? (r.exports = et)._ = et : n._ = et : e._ = et
})(this), define("common/Utils", ["underscore"], function (e) {
    function r(e) {
        return e = e || event, e.preventDefault || (e.preventDefault = function () {
            this.returnValue = !1
        }), e.stopPropagation || (e.stopPropagation = function () {
            this.cancelBubble = !0
        }), e
    }
    function o(e, t, r) {
        var i = n[t];
        return i ? function (t) {
            var n = t.type === i;
            return s && !n ? s = !1 : (s = n, e.call(this, t))
        } : e
    }
    function a(e) {
        return document.getElementById(e)
    }
    function f(e) {
        var t = 0, n = 0;
        if (e.offsetParent)
            do
                t += e.offsetLeft, n += e.offsetTop;
            while (e = e.offsetParent);
        return{x: t, y: n}
    }
    function l(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }
    function c(e, t) {
        h(e, t) || (e.className = l(e.className + " " + t))
    }
    function h(e, t) {
        return(" " + e.className + " ").indexOf(" " + t + " ") !== -1
    }
    function p(e, t) {
        e.className = l((" " + e.className + " ").replace(" " + t + " ", " "))
    }
    function d(e) {
        if (typeof e != "number")
            return"--:--";
        e = ~~(e / 1e3);
        var t = e % 60, n = ~~(e / 60), r = ~~(n / 60);
        return n %= 60, (r ? (r > 9 ? r : "0" + r) + ":" : "") + (n > 9 ? n : "0" + n % 60) + ":" + (t > 9 ? t : "0" + t)
    }
    var t, n = {click: "touchstart", mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"}, i = function () {
        return document.addEventListener ? function (t, r, i) {
            if (!t)
                return;
            t = typeof t == "string" ? a(t) : t, i = o(i, r, t), n[r] && t.addEventListener(n[r], i, !0), t.addEventListener(r, i, !0)
        } : function (t, n, i) {
            if (!t)
                return;
            t = typeof t == "string" ? a(t) : t, t.attachEvent("on" + n, function (e) {
                return e = r(e), i.call(e.target || e.srcElement, e)
            })
        }
    }(), s, u = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
            window.setTimeout(e, t || 1e3 / 60)
        }
    }();
    return{$: a, on: i, position: f, addClass: c, removeClass: p, requestAnimationFrame: _.bind(u, window), format: d}
}), function (e, t) {
    "object" == typeof module && module.exports ? module.exports = function (e) {
        return e = e || require("underscore"), t(e)
    } : "function" == typeof define && define.amd ? define("vendor/postal.min", ["underscore"], function (r) {
        return t(r, e)
    }) : e.postal = t(e._, e)
}(this, function (e) {
    var t = "/", n = "postal", r = function () {
        var t;
        return function (n) {
            var r = !1;
            return e.isString(n) ? (r = n === t, t = n) : (r = e.isEqual(n, t), t = e.clone(n)), !r
        }
    }, i = function () {
        var t = [];
        return function (n) {
            var r = !e.any(t, function (t) {
                return e.isObject(n) || e.isArray(n) ? e.isEqual(n, t) : n === t
            });
            return r && t.push(n), r
        }
    }, s = function (e) {
        this.channel = e || t
    };
    s.prototype.subscribe = function () {
        return 1 === arguments.length ? new o(this.channel, arguments[0].topic, arguments[0].callback) : new o(this.channel, arguments[0], arguments[1])
    }, s.prototype.publish = function () {
        var e = 1 === arguments.length ? "[object String]" === Object.prototype.toString.call(arguments[0]) ? {topic: arguments[0]} : arguments[0] : {topic: arguments[0], data: arguments[1]};
        return e.channel = this.channel, l.configuration.bus.publish(e)
    };
    var o = function (e, t, r) {
        this.channel = e, this.topic = t, this.callback = r, this.constraints = [], this.context = null, l.configuration.bus.publish({channel: n, topic: "subscription.created", data: {event: "subscription.created", channel: e, topic: t}}), l.configuration.bus.subscribe(this)
    };
    o.prototype = {unsubscribe: function () {
            l.configuration.bus.unsubscribe(this), l.configuration.bus.publish({channel: n, topic: "subscription.removed", data: {event: "subscription.removed", channel: this.channel, topic: this.topic}})
        }, defer: function () {
            var e = this.callback;
            return this.callback = function (t) {
                setTimeout(e, 0, t)
            }, this
        }, disposeAfter: function (t) {
            if (e.isNaN(t) || 0 >= t)
                throw"The value provided to disposeAfter (maxCalls) must be a number greater than zero.";
            var n = this.callback, r = e.after(t, e.bind(function () {
                this.unsubscribe()
            }, this));
            return this.callback = function () {
                n.apply(this.context, arguments), r()
            }, this
        }, distinctUntilChanged: function () {
            return this.withConstraint(new r), this
        }, distinct: function () {
            return this.withConstraint(new i), this
        }, once: function () {
            this.disposeAfter(1)
        }, withConstraint: function (t) {
            if (!e.isFunction(t))
                throw"Predicate constraint must be a function";
            return this.constraints.push(t), this
        }, withConstraints: function (t) {
            var n = this;
            return e.isArray(t) && e.each(t, function (e) {
                n.withConstraint(e)
            }), n
        }, withContext: function (e) {
            return this.context = e, this
        }, withDebounce: function (t) {
            if (e.isNaN(t))
                throw"Milliseconds must be a number";
            var n = this.callback;
            return this.callback = e.debounce(n, t), this
        }, withDelay: function (t) {
            if (e.isNaN(t))
                throw"Milliseconds must be a number";
            var n = this.callback;
            return this.callback = function (e) {
                setTimeout(function () {
                    n(e)
                }, t)
            }, this
        }, withThrottle: function (t) {
            if (e.isNaN(t))
                throw"Milliseconds must be a number";
            var n = this.callback;
            return this.callback = e.throttle(n, t), this
        }, subscribe: function (e) {
            return this.callback = e, this
        }};
    var u = {cache: {}, regex: {}, compare: function (t, n) {
            var r, i, s, o = this.cache[n] && this.cache[n][t];
            return o !== undefined ? o : ((i = this.regex[t]) || (r = "^" + e.map(t.split("."), function (e) {
                var t = s && "#" !== s ? "\\.\\b" : "\\b";
                return t += "#" === e ? "[A-Z,a-z,0-9,\\.]*" : "*" === e ? "[A-Z,a-z,0-9]+" : e, s = e, t
            }).join("") + "$", i = this.regex[t] = RegExp(r)), this.cache[n] = this.cache[n] || {}, this.cache[n][t] = o = i.test(n), o)
        }, reset: function () {
            this.cache = {}, this.regex = {}
        }}, a = function (t, n) {
        l.configuration.resolver.compare(t.topic, n.topic) && e.all(t.constraints, function (e) {
            return e.call(t.context, n.data, n)
        }) && "function" == typeof t.callback && t.callback.call(t.context, n.data, n)
    }, f = {addWireTap: function (e) {
            var t = this;
            return t.wireTaps.push(e), function () {
                var n = t.wireTaps.indexOf(e);
                -1 !== n && t.wireTaps.splice(n, 1)
            }
        }, publish: function (t) {
            return t.timeStamp = new Date, e.each(this.wireTaps, function (e) {
                e(t.data, t)
            }), this.subscriptions[t.channel] && e.each(this.subscriptions[t.channel], function (e) {
                for (var n, r = 0, i = e.length; i > r; )
                    (n = e[r++]) && a(n, t)
            }), t
        }, reset: function () {
            this.subscriptions && (e.each(this.subscriptions, function (t) {
                e.each(t, function (e) {
                    for (; e.length; )
                        e.pop().unsubscribe()
                })
            }), this.subscriptions = {})
        }, subscribe: function (e) {
            var t, n = this.subscriptions[e.channel];
            return n || (n = this.subscriptions[e.channel] = {}), t = this.subscriptions[e.channel][e.topic], t || (t = this.subscriptions[e.channel][e.topic] = []), t.push(e), e
        }, subscriptions: {}, wireTaps: [], unsubscribe: function (e) {
            if (this.subscriptions[e.channel][e.topic])
                for (var t = this.subscriptions[e.channel][e.topic].length, n = 0; t > n; n++)
                    if (this.subscriptions[e.channel][e.topic][n] === e) {
                        this.subscriptions[e.channel][e.topic].splice(n, 1);
                        break
                    }
        }};
    f.subscriptions[n] = {};
    var l = {configuration: {bus: f, resolver: u, DEFAULT_CHANNEL: t, SYSTEM_CHANNEL: n}, ChannelDefinition: s, SubscriptionDefinition: o, channel: function (e) {
            return new s(e)
        }, subscribe: function (e) {
            return new o(e.channel || t, e.topic, e.callback)
        }, publish: function (e) {
            return e.channel = e.channel || t, l.configuration.bus.publish(e)
        }, addWireTap: function (e) {
            return this.configuration.bus.addWireTap(e)
        }, linkChannels: function (n, r) {
            var i = [];
            return n = e.isArray(n) ? n : [n], r = e.isArray(r) ? r : [r], e.each(n, function (n) {
                n.topic || "#", e.each(r, function (r) {
                    var s = r.channel || t;
                    i.push(l.subscribe({channel: n.channel || t, topic: n.topic || "#", callback: function (t, n) {
                            var i = e.clone(n);
                            i.topic = e.isFunction(r.topic) ? r.topic(n.topic) : r.topic || n.topic, i.channel = s, i.data = t, l.publish(i)
                        }}))
                })
            }), i
        }, utils: {getSubscribersFor: function () {
                var e = arguments[0], t = arguments[1];
                return 1 === arguments.length && (e = arguments[0].channel || l.configuration.DEFAULT_CHANNEL, t = arguments[0].topic), l.configuration.bus.subscriptions[e] && l.configuration.bus.subscriptions[e].hasOwnProperty(t) ? l.configuration.bus.subscriptions[e][t] : []
            }, reset: function () {
                l.configuration.bus.reset(), l.configuration.resolver.reset()
            }}};
    return l
}), define("common/EventBus", ["postal", "underscore"], function (e, t) {
    var n = e.channel();
    return n.on = t.bind(n.subscribe, n), n.emit = t.bind(n.publish, n), n
}), define("common/Storage", ["./EventBus"], function (e) {
    function i(e) {
        try {
            return JSON.parse(localStorage.getItem(t + e))
        } catch (n) {
            return null
        }
    }
    function s(e, r) {
        if (!n)
            return;
        localStorage.setItem(t + e, JSON.stringify(r))
    }
    function o(e) {
        var t = parseInt(i(e), 10) || 0;
        s(e, t + 1)
    }
    var t = "::html5-solitaire::", n;
    try {
        localStorage.getItem("test"), n = !0
    } catch (r) {
        n = !1
    }
    return{save: s, get: i, increment: o}
}), define("UI/Sound", [], function () {
    function r(n, r, i) {
        if (!e)
            return;
        var s;
        this.__path = n, this.currentAudio = 0, this.TOTAL = r || 1, this.enabled = !0, this.audio = [], this._loaded = [];
        var o = this, u;
        this.onload = function (e) {
            clearTimeout(u), o._loaded.push(this), this.oncanplaythrough = null, this.removeEventListener("canplaythrough", o._loaded), o._loaded.length > r * .3 && i && (i(), i = null)
        }, t && (u = setTimeout(function () {
            i(), i = null
        }));
        for (s = 0; s < r; s++)
            this.audio[s] = new Audio;
        t || this.load(n)
    }
    var e = !1, t = /iphone|ipod|ipad/i.test(navigator.userAgent);
    try {
        e = !!(new Audio).canPlayType
    } catch (n) {
    }
    return r.prototype.load = function (t) {
        t = t || this.__path;
        if (!e)
            return;
        var n = this.audio[0].canPlayType("audio/mp3") ? ".mp3" : ".ogg", r;
        for (r = 0; r < this.TOTAL; r++)
            this.audio[r].addEventListener("canplaythrough", this.onload, !0), this.audio[r].src = require.toUrl("assets/" + t + n)
    }, r.prototype.setEnabled = function () {
        this.enabled = !this.enabled
    }, r.prototype.play = function () {
        if (!e || !this.enabled || !this._loaded.length)
            return;
        this._loaded[this.currentAudio - 1] && (this._loaded[this.currentAudio - 1].currentTime = 0), this._loaded[this.currentAudio].play(), this.currentAudio = (this.currentAudio + 1) % this._loaded.length
    }, r.prototype.stop = function () {
        this._loaded[this.currentAudio].pause(), this._loaded[this.currentAudio].currentTime = 0
    }, r
}), define("UI/Score", ["common/Utils"], function (e) {
    var t = 0;
    return{initialize: function (t) {
            return t = t || {}, this.opts = t, this.every = typeof t.every == "number" ? t.every * 1e3 : null, this.points = 0, this.e_clock = e.$(t.timer), this.e_point = e.$(t.score), this.e_point && (this.layout = this.e_point.innerHTML || "%d points"), this.updatePoints(), this
        }, now: function () {
            return(new Date).getTime()
        }, reset: function () {
            this.stop(), this.start = this.stopTime = this.last = this.now(), this.points = _.isNumber(this.opts.startPoint) ? this.opts.startPoint : 0, this.updatePoints(), this.updateTime(), this._start = !1
        }, restart: function () {
            if (this._start)
                return;
            this.reset(), this.startTimer(), this._start = !0
        }, updatePoints: function () {
            this.e_point && (this.e_point.innerHTML = this.layout.replace("%d", this.points))
        }, updateTime: function () {
            this.e_clock && (this.e_clock.innerHTML = this.time())
        }, startTimer: function () {
            var e = this;
            this.uuid = t, function n() {
                if (e.uuid !== t)
                    return;
                var r = e.stopTime = e.now();
                e.updateTime(), r - e.last > (e.every || 1e4) && (e.last = r, e.down(-(e.opts.deduct || 2))), setTimeout(n, 1e3)
            }()
        }, stop: function () {
            ++t
        }, up: function (e) {
            _.isNumber(e) && e > 0 && (this.points += e, this.updatePoints())
        }, down: function (e) {
            _.isNumber(e) && e < 0 && (this.points += e, this.updatePoints())
        }, getTime: function () {
            return this.stopTime - this.start
        }, getScore: function () {
            return this.points
        }, time: function () {
            return e.format(this.stopTime - this.start)
        }}
}), define("vendor/require-plugins/text", ["module"], function (e) {
    var t = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], n = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, r = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, i = typeof location != "undefined" && location.href, s = i && location.protocol && location.protocol.replace(/\:/, ""), o = i && location.hostname, u = i && (location.port || undefined), a = [], f = e.config && e.config() || {}, l, c;
    return l = {version: "2.0.1", strip: function (e) {
            if (e) {
                e = e.replace(n, "");
                var t = e.match(r);
                t && (e = t[1])
            } else
                e = "";
            return e
        }, jsEscape: function (e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        }, createXhr: f.createXhr || function () {
            var e, n, r;
            if (typeof XMLHttpRequest != "undefined")
                return new XMLHttpRequest;
            if (typeof ActiveXObject != "undefined")
                for (n = 0; n < 3; n += 1) {
                    r = t[n];
                    try {
                        e = new ActiveXObject(r)
                    } catch (i) {
                    }
                    if (e) {
                        t = [r];
                        break
                    }
                }
            return e
        }, parseName: function (e) {
            var t = !1, n = e.indexOf("."), r = e.substring(0, n), i = e.substring(n + 1, e.length);
            return n = i.indexOf("!"), n !== -1 && (t = i.substring(n + 1, i.length), t = t === "strip", i = i.substring(0, n)), {moduleName: r, ext: i, strip: t}
        }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function (e, t, n, r) {
            var i = l.xdRegExp.exec(e), s, o, u;
            return i ? (s = i[2], o = i[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === t) && (!o || o.toLowerCase() === n.toLowerCase()) && (!u && !o || u === r)) : !0
        }, finishLoad: function (e, t, n, r) {
            n = t ? l.strip(n) : n, f.isBuild && (a[e] = n), r(n)
        }, load: function (e, t, n, r) {
            if (r.isBuild && !r.inlineText) {
                n();
                return
            }
            f.isBuild = r.isBuild;
            var a = l.parseName(e), c = a.moduleName + "." + a.ext, h = t.toUrl(c), p = f.useXhr || l.useXhr;
            !i || p(h, s, o, u) ? l.get(h, function (t) {
                l.finishLoad(e, a.strip, t, n)
            }, function (e) {
                n.error && n.error(e)
            }) : t([c], function (e) {
                l.finishLoad(a.moduleName + "." + a.ext, a.strip, e, n)
            })
        }, write: function (e, t, n, r) {
            if (a.hasOwnProperty(t)) {
                var i = l.jsEscape(a[t]);
                n.asModule(e + "!" + t, "define(function () { return '" + i + "';});\n")
            }
        }, writeFile: function (e, t, n, r, i) {
            var s = l.parseName(t), o = s.moduleName + "." + s.ext, u = n.toUrl(s.moduleName + "." + s.ext) + ".js";
            l.load(o, n, function (t) {
                var n = function (e) {
                    return r(u, e)
                };
                n.asModule = function (e, t) {
                    return r.asModule(e, u, t)
                }, l.write(e, o, n, i)
            }, i)
        }}, typeof process != "undefined" && process.versions && !!process.versions.node ? (c = require.nodeRequire("fs"), l.get = function (e, t) {
        var n = c.readFileSync(e, "utf8");
        n.indexOf("﻿") === 0 && (n = n.substring(1)), t(n)
    }) : l.createXhr() ? l.get = function (e, t, n) {
        var r = l.createXhr();
        r.open("GET", e, !0), f.onXhr && f.onXhr(r, e), r.onreadystatechange = function (i) {
            var s, o;
            r.readyState === 4 && (s = r.status, s > 399 && s < 600 ? (o = new Error(e + " HTTP status: " + s), o.xhr = r, n(o)) : t(r.responseText))
        }, r.send(null)
    } : typeof Packages != "undefined" && (l.get = function (e, t) {
        var n = "utf-8", r = new java.io.File(e), i = java.lang.System.getProperty("line.separator"), s = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r), n)), o, u, a = "";
        try {
            o = new java.lang.StringBuffer, u = s.readLine(), u && u.length() && u.charAt(0) === 65279 && (u = u.substring(1)), o.append(u);
            while ((u = s.readLine()) !== null)
                o.append(i), o.append(u);
            a = String(o.toString())
        } finally {
            s.close()
        }
        t(a)
    }), l
}), define("vendor/require-plugins/text!UI/template.html", [], function () {
    return'<ul id="html5-solitaire-sidebar">\n    <li><button data-sol-action="restart"><i class="icon-refresh"></i> <%= _e("newGame") %></button></li>\n    <li><button data-sol-action="switch-sound"><i id="solitaire-sound-icon" class="icon-volume-up"></i> <%= _e("sound") %></button></li>\n    <li><button data-sol-action="draw3"><i id="solitaire-draw3-icon" class="icon-check-empty"></i> <%= _e("draw3") %></button></li>\n    <li><button data-sol-action="show-stats"><i class="icon-bar-chart"></i> <%= _e("stats") %></button></li>\n  </ul>\n  <div id="html5-solitaire-board">\n  <ul id="html5-solitaire-topbar">\n    <li id="html5-solitaire-options"><button><i class="icon-reorder"></i></button>\n    <span id="html5-solitaire-timer">00:00</span>\n    </li>\n    <li id="html5-solitaire-undo"><button><i class="icon-undo"></i> <span><%= _e("undo") %></span></button></li>\n    <li id="html5-solitaire-score"><%= _e("pointsTemplate") %></li>\n  </ul>\n  <canvas id="html5-solitaire-canvas"></canvas>\n  <div id="html5-solitaire-board-overlay"></div>\n</div>\n<div id="html5-solitaire-overlay"></div>\n\n  <div id="html5-solitaire-dialog">\n    <div id="html5-solitaire-dialog-message"></div>\n  </div>'
}), function () {
    function t(e, t, n, r, i, s) {
        t[e] && (n.push(e), (t[e] === !0 || t[e] === 1) && r.push(i + e + "/" + s))
    }
    function n(e, t, n, r, i) {
        var s = r + t + "/" + i;
        require._fileExists(e.toUrl(s + ".js")) && n.push(s)
    }
    function r(e, t, n) {
        var i;
        for (i in t)
            t.hasOwnProperty(i) && (!e.hasOwnProperty(i) || n) ? e[i] = t[i] : typeof t[i] == "object" && r(e[i], t[i], n)
    }
    var e = /(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;
    define("vendor/require-plugins/i18n", ["module"], function (i) {
        var s = i.config ? i.config() : {};
        return{version: "2.0.1+", load: function (i, o, u, a) {
                a = a || {}, a.locale && (s.locale = a.locale);
                var f, l = e.exec(i), c = l[1], h = l[4], p = l[5], d = h.split("-"), v = [], m = {}, g, y, b = "";
                l[5] ? (c = l[1], f = c + p) : (f = i, p = l[4], h = s.locale, h || (h = s.locale = typeof navigator == "undefined" ? "root" : (navigator.language || navigator.userLanguage || "root").toLowerCase()), d = h.split("-"));
                if (a.isBuild) {
                    v.push(f), n(o, "root", v, c, p);
                    for (g = 0; g < d.length; g++)
                        y = d[g], b += (b ? "-" : "") + y, n(o, b, v, c, p);
                    o(v, function () {
                        u()
                    })
                } else
                    o([f], function (e) {
                        var n = [], i;
                        t("root", e, n, v, c, p);
                        for (g = 0; g < d.length; g++)
                            i = d[g], b += (b ? "-" : "") + i, t(b, e, n, v, c, p);
                        o(v, function () {
                            var t, i, s;
                            for (t = n.length - 1; t > -1 && n[t]; t--) {
                                s = n[t], i = e[s];
                                if (i === !0 || i === 1)
                                    i = o(c + s + "/" + p);
                                r(m, i)
                            }
                            u(m)
                        })
                    })
            }}
    })
}(), define("vendor/require-plugins/image", [], function () {
    function r() {
    }
    function i(n) {
        return n = n.replace(t, ""), n += n.indexOf("?") < 0 ? "?" : "&", n + e + "=" + Math.round(2147483647 * Math.random())
    }
    var e = "bust", t = "!bust", n = "!rel";
    return{load: function (e, t, i, s) {
            var o;
            s.isBuild ? i(null) : (o = new Image, o.onerror = function (e) {
                i.error(e)
            }, o.onload = function (e) {
                i(o);
                try {
                    delete o.onload
                } catch (t) {
                    o.onload = r
                }
            }, e.indexOf(n) !== -1 ? o.src = t.toUrl(e.replace(n, "")) : o.src = e)
        }, normalize: function (e, n) {
            return e.indexOf(t) === -1 ? e : i(e)
        }}
}), define("view/pile", ["image!assets/images/sprite.png!rel"], function (e) {
    function l(e) {
        return e.getContext ? e.getContext("2d") : null
    }
    function c(r, s, o, u, a, l) {
        var c = 0, h = i;
        if (!s)
            return;
        s.faceup && (h = (f[s.suit] + s.rank) * t), r.drawImage(e, h, c, t, n, o, u, a || t, l || n)
    }
    var t = e.width / 53, n = e.height, r = 4, i = t * 52, s = n * .07 | 0, o = n * .3 | 0, u = document.createElement("canvas"), a = l(u), f = {"♥": 0, "♣": 13, "♦": 26, "♠": 39};
    return{cardWidth: t, cardHeight: n, initialize: function (t) {
            var n;
            for (n in t)
                t.hasOwnProperty(n) && (this[n] = t[n]);
            return this.originalX = this.x, this.originalY = this.y, this
        }, hitTest: function (t) {
            var n = 0;
            return this.type == "tableau" && (n = this.countCardsUpsidedown() * s), t.x >= this.x && t.x <= this.x + this.getWidth() && t.y >= this.y + n && t.y <= this.y + this.getHeight()
        }, getWidth: function () {
            return t
        }, getShadowBlur: function () {
            return r
        }, getHeight: function () {
            return this.type !== "tableau" ? n : this.getOffsetTop() + n
        }, getOffsetTop: function () {
            var e = this.countCardsUpsidedown(), t = e * s, n = (this.size() - e - 1) * o;
            return t + n
        }, getNextCardPosition: function () {
            return{x: this.x, y: this.type !== "tableau" ? this.y : this.y + this.getOffsetTop() + o}
        }, getCards: function (t) {
            if (!this.hitTest(t) || !this.size())
                return-1;
            if (this.type !== "tableau")
                return 1;
            var n = this.countCardsUpsidedown(), r = this.size() - n, i = n * s, u = t.y - this.y - i, a = ~~(u / o);
            return a > r - 1 && (a = r - 1), r - a
        }, getSelection: function (t) {
            var n = Object.create(this), r;
            return n.cards = this.cards.splice(-t), r = this.getNextCardPosition(), n.lastX = n.x = r.x, n.lastY = n.y = r.y, n.original = this, n
        }, draw: function (t, n) {
            if (!this.size())
                return this.drawPlaceholder(t);
            var r, i, u = this.cards, a = this.type == "tableau" ? s : 0, f = this.draw3 && !this.original ? 70 : 0, l = this.y;
            this.lastX = this.x, this.lastY = this.y, t.shadowColor = "#555", this.type === "tableau" && !n ? t.shadowOffsetY = -1 : this.type === "waste" && !n && (t.shadowOffsetX = -1, t.shadowOffsetY = -1);
            for (r = 0, i = this.size(); r < i; r++)
                c(t, u[r], this.x - (r >= i - 3 && this.draw3 ? f * ((2 - (r - (i - 3))) % 3) : 0), l), this.type == "tableau" && (l += u[r].faceup ? o : s)
        }, drawPlaceholder: function (r) {
            r.fillStyle = "rgba(0, 0, 0, .3)", r.shadowColor = "rgba(0,0,0,0)", r.fillRect(this.originalX, this.originalY, t, n)
        }, clear: function (t) {
            t.fillRect(this.lastX, this.lastY, this.getWidth(), this.getHeight())
        }, turn: function (r, i, o) {
            if (!this.size())
                return;
            var u = this.y + (this.type !== "tableau" ? 0 : (this.size() - 1) * s), a = this.x, f = t * (1 - i * 2), l = {}, h = this.type === "stock" ? this.cards[this.cards.length - 2] : {};
            i > .5 && (f = t * (i - .5) * 2, f = Math.min(f, t), l = this.cards[this.size() - 1], l.faceup = !0), f = ~~f || 1, r.fillRect(a, u, t, n + 10), h ? this.size() > 1 && c(r, h, a, u - (this.type !== "tableau" ? 0 : s)) : this.drawPlaceholder(r), o === "left" ? a -= i > .5 ? f : 0 : o === "right" ? a += i > .5 ? t : t - f : a += (t - f) / 2, c(r, l, ~~a, ~~u, ~~f)
        }, restorePosition: function () {
            this.x = this.originalX, this.y = this.originalY
        }, countCardsUpsidedown: function () {
            return _.filter(this.cards, function (e) {
                return!e.faceup
            }).length
        }, pop: function () {
            return this.cards.pop()
        }, push: function () {
            return this.cards.push.apply(this.cards, arguments)
        }, last: function () {
            return this.cards[this.cards.length - 1]
        }, empty: function () {
            this.cards.length = 0
        }, size: function () {
            return this.cards.length
        }, valueOf: function h() {
            return this.rank + 1 + this.suit
        }}
});
var EventEmitter = function () {
};
EventEmitter.prototype.setMaxListeners = function (e) {
    this._events || (this._events = {}), this._events.maxListeners = e
}, Array.isArray = Array.isArray || function (e) {
    return e.sort && e.length && e.slice
}, EventEmitter.prototype.emit = function (e) {
    if (e === "error")
        if (!this._events || !this._events.error || Array.isArray(this._events.error) && !this._events.error.length)
            throw arguments[1]instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
    if (!this._events)
        return!1;
    var t = this._events[e];
    if (!t)
        return!1;
    if (typeof t == "function") {
        switch (arguments.length) {
            case 1:
                t.call(this);
                break;
            case 2:
                t.call(this, arguments[1]);
                break;
            case 3:
                t.call(this, arguments[1], arguments[2]);
                break;
            default:
                var n = Array.prototype.slice.call(arguments, 1);
                t.apply(this, n)
        }
        return!0
    }
    if (Array.isArray(t)) {
        var n = Array.prototype.slice.call(arguments, 1), r = t.slice();
        for (var i = 0, s = r.length; i < s; i++)
            r[i].apply(this, n);
        return!0
    }
    return!1
}, EventEmitter.prototype.publish = EventEmitter.prototype.emit, EventEmitter.prototype.addListener = function (e, t) {
    if ("function" != typeof t)
        throw new Error("addListener only takes instances of Function");
    this._events || (this._events = {}), this.emit("newListener", e, t);
    if (!this._events[e])
        this._events[e] = t;
    else if (Array.isArray(this._events[e])) {
        this._events[e].push(t);
        if (!this._events[e].warned) {
            var n;
            this._events.maxListeners !== undefined ? n = this._events.maxListeners : n = 10, n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), console.trace())
        }
    } else
        this._events[e] = [this._events[e], t];
    return this
}, EventEmitter.prototype.on = EventEmitter.prototype.subscribe = EventEmitter.prototype.addListener, EventEmitter.prototype.once = function (e, t) {
    function n() {
        r.removeListener(e, n), t.apply(this, arguments)
    }
    if ("function" != typeof t)
        throw new Error(".once only takes instances of Function");
    var r = this;
    return n.listener = t, r.on(e, n), this
}, EventEmitter.prototype.removeListener = function (e, t) {
    if ("function" != typeof t)
        throw new Error("removeListener only takes instances of Function");
    if (!this._events || !this._events[e])
        return this;
    var n = this._events[e];
    if (Array.isArray(n)) {
        var r = -1;
        for (var i = 0, s = n.length; i < s; i++)
            if (n[i] === t || n[i].listener && n[i].listener === t) {
                r = i;
                break
            }
        if (r < 0)
            return this;
        n.splice(r, 1), n.length == 0 && delete this._events[e]
    } else
        (n === t || n.listener && n.listener === t) && delete this._events[e];
    return this
}, EventEmitter.prototype.unsubscribe = EventEmitter.prototype.removeListener, EventEmitter.prototype.removeAllListeners = function (e) {
    return arguments.length === 0 ? (this._events = {}, this) : (e && this._events && this._events[e] && (this._events[e] = null), this)
}, EventEmitter.prototype.listeners = function (e) {
    return this._events || (this._events = {}), this._events[e] || (this._events[e] = []), Array.isArray(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
}, EventEmitter.mixin = function (e) {
    for (var t in EventEmitter.prototype)
        e.prototype[t] || (e.prototype[t] = EventEmitter.prototype[t])
}, define("vendor/EventEmitter.min", function () {
}), define("common/Selector", ["./Utils", "EventEmitter"], function (e) {
    function r(n) {
        this.element = n, this._loop = _.bind(h, this), e.on(n, "mousedown", _.bind(u, this)), e.on(n, "mousemove", _.bind(_.throttle(l, 1e3 / (t ? 10 : 50)), this)), e.on(n, "mouseup", _.bind(a, this)), e.on(n, "mouseout", _.bind(a, this)), e.on(n, "dblclick", _.bind(o, this))
    }
    function s(e) {
        return e.touches && e.touches.length ? e.touches[0] : e
    }
    function o(e) {
        d(e), e = s(e), this.emit("tap", this.points_)
    }
    function u(t) {
        d(t), t = s(t), this.isMousedown = !0, this.pos = e.position(this.element);
        var n = this.getPosition(t);
        return this.points_ = {start: n, last: n, current: n}, this.emit("down", this.points_), this.start = n, !1
    }
    function a(e) {
        var t = e.type === "touchend";
        f++, d(e), this.isMousedown = !1;
        if (!this.mousemove || p(this.points_.start, this.points_.current) < n)
            return t && this.emit("tap", this.points_);
        this.mousemove = !1, e = s(e), this.emit("stop", this.points_)
    }
    function l(e) {
        d(e);
        if (!this.isMousedown) {
            this.__ticked === f && f++;
            return
        }
        e = s(e), this.points_.last = this.points_.current, this.points_.current = this.getPosition(e);
        if (this.mousemove || p(this.points_.start, this.points_.current) > n)
            this.mousemove || this.emit("start", this.points_), this.mousemove = !0, this.__ticked !== f && (this.__ticked = f, this._loop())
    }
    function h() {
        this.__ticked === f && (c(this._loop, 1e3 / (t ? 20 : 60)), this.emit("move", this.points_), this.points_.last = this.points_.current)
    }
    function p(e, t) {
        var n = e.x - t.x, r = e.y - t.y;
        return n * n + r * r
    }
    function d(e) {
        e.stopPropagation(), e.preventDefault()
    }
    var t = /mobil|android|ios/ig.test(navigator.userAgent), n = 10;
    EventEmitter.mixin(r);
    var i = r.prototype;
    i.getPosition = function (e) {
        var t = {};
        return t.x = e.pageX - this.pos.x || e.offsetX || 0, t.y = e.pageY - this.pos.y || e.offsetY || 0, t
    };
    var f = 0, c = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
            window.setTimeout(e, t || 1e3 / 60)
        }
    }();
    return r
}), define("view/board", ["underscore", "./pile", "common/Utils", "common/Selector", "common/EventBus"], function (e, t, n, r, i) {
    function c(e) {
        return e.getContext ? e.getContext("2d") : null
    }
    function h(e, n, r) {
        return Object.create(t).initialize({cards: n, type: e, pos: r, x: (t.cardWidth + 10) * r, y: (t.cardHeight + 10) * (e === "tableau" ? 1 : 0)})
    }
    var s = [], o = /iphone|ipod|ipad/i.test(navigator.userAgent), u = (t.cardHeight + 10) * 5, a = (t.cardWidth + 10) * 7, f = document.createElement("canvas"), l = c(f), p = e.once(function () {
        var t = this, s = new r(this.canvas), o = {}, u = !1, a = !1;
        i.on("animation.start", function () {
            u = t.inAnimation = !0
        }), i.on("animation.end", function () {
            u = t.inAnimation = !1
        }), i.on("__move.start", function () {
            a = !0
        }), i.on("__move.end", function () {
            a = !1
        }), s.on("tap", function (e) {
            if (u || !o.pile || a)
                return;
            i.emit("pile.tap", o)
        }), s.on("down", e.bind(function (e) {
            i.emit("pointer.down", o);
            if (u)
                return;
            o.start = this.transformPoint(e.start), o.pile = this.getPileUnderPoint(o.start);
            if (!o.pile)
                return;
            f.width = f.width;
            var t = o.pile.type === "stock" ? "stock.clicked" : "pile.selected";
            i.emit(t, o)
        }, this)), s.on("start", e.bind(function () {
            !u && o.pile && i.emit("pile.drag.start", o)
        }, this)), s.on("move", e.bind(function (e) {
            if (u || !o.pile)
                return;
            o.current = this.transformPoint(e.current), o.last = this.transformPoint(e.last), i.emit("pile.drag.move", o)
        }, this)), s.on("stop", e.bind(function (e) {
            o.pile = this.getPileUnderPoint(this.transformPoint(e.current)), i.emit("pile.drag.end", o)
        }, this)), n.on(window, "resize", e.bind(this.resize, this))
    });
    return{initialize: function (n, r) {
            this.canvas = n, this.ctx = n.getContext("2d");
            var i = e.bind(h, null, "tableau"), o = e.bind(h, null, "foundation"), u = e.map([[], [], [], [], [], [], []], i), a = e.map(r.foundations, o), f = h("waste", r.waste, 5), l = h("stock", r.stock, 6);
            return l.push.apply(l, [].concat.apply([], r.tableaus).reverse()), s = this.piles = [].concat(u, a, f, l), this.resize(), p.call(this), this
        }, resize: function () {
            var n = this.canvas.parentNode.getBoundingClientRect();
            this.canvas.width = n.width, this.canvas.height = n.height, n.width > n.height ? this.scale = n.height / u : this.scale = n.width / (a + t.cardWidth), o && (this.scale *= 1.1), this.marginLeft = parseInt((n.width - a * this.scale) / 2), this.marginTop = 50, this.drawAll()
        }, drawAll: function (t) {
            var n = this.ctx, r = this.piles.length, i;
            n.fillStyle = "#7F0000", n.fillRect(0, 0, n.canvas.width, n.canvas.height), n.save(), n.translate(this.marginLeft, this.marginTop), n.scale(this.scale, this.scale);
            for (i = 0; i < r; i += 1)
                this.piles[i].draw(n);
            n.restore()
        }, constrain: function (t, n, r) {
            return t = Math.max(t, 0), t + n > r ? r - n : t
        }, initializeDirtyRectangle: function (t) {
            this.draw(t, !0)
        }, clearDirty: function () {
            f.width = f.width, f.height = f.height
        }, draw: function (t, n) {
            var r = this.canvas.width, i = this.canvas.height, s = 2, o = (t.lastX * this.scale + this.marginLeft | 0) - s, u = (t.lastY * this.scale + this.marginTop | 0) - s, a = (t.x * this.scale + this.marginLeft | 0) - s, c = (t.y * this.scale + this.marginTop | 0) - s, h = Math.ceil(t.getWidth() * this.scale) + s * 2, p = Math.ceil(t.getHeight() * this.scale) + s * 2, d = this.ctx;
            a = this.constrain(a, h, r), c = this.constrain(c, p, i), o = this.constrain(o, h, r), u = this.constrain(u, p, i), d.fillStyle = "#7F0000", t.lastX = t.x, t.lastY = t.y, n ? this.drawAll(!0) : d.fillRect(o, u, h, p), d.drawImage(f, o, u), f.width = h, f.height = p, l.drawImage(this.canvas, a, c, h, p, 0, 0, h, p), d.save(), d.translate(this.marginLeft, this.marginTop), d.scale(this.scale, this.scale), t.draw(d, !0), d.restore()
        }, transformPoint: function (t) {
            return{x: (t.x - this.marginLeft) / this.scale | 0, y: (t.y - this.marginTop) / this.scale | 0}
        }, getPileUnderPoint: function (n) {
            return e.find(s, function (e) {
                return e.hitTest(n)
            })
        }}
}), function (e) {
    if (typeof bootstrap == "function")
        bootstrap("promise", e);
    else if (typeof exports == "object")
        module.exports = e();
    else if (typeof define == "function" && define.amd)
        define("vendor/q", e);
    else if (typeof ses != "undefined") {
        if (!ses.ok())
            return;
        ses.makeQ = e
    } else
        Q = e()
}(function () {
    function u(e) {
        return function () {
            return o.apply(e, arguments)
        }
    }
    function m(e) {
        return e === Object(e)
    }
    function g(e) {
        return v(e) === "[object StopIteration]" || e instanceof y
    }
    function E(t, n) {
        if (e && n.stack && typeof t == "object" && t !== null && t.stack && t.stack.indexOf(w) === -1) {
            var r = [];
            for (var i = n; !!i; i = i.source)
                i.stack && r.unshift(i.stack);
            r.unshift(t.stack);
            var s = r.join("\n" + w + "\n");
            t.stack = S(s)
        }
    }
    function S(e) {
        var t = e.split("\n"), n = [];
        for (var r = 0; r < t.length; ++r) {
            var i = t[r];
            !N(i) && !x(i) && i && n.push(i)
        }
        return n.join("\n")
    }
    function x(e) {
        return e.indexOf("(module.js:") !== -1 || e.indexOf("(node.js:") !== -1
    }
    function T(e) {
        var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
        if (t)
            return[t[1], Number(t[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
        if (n)
            return[n[1], Number(n[2])];
        var r = /.*@(.+):(\d+)$/.exec(e);
        if (r)
            return[r[1], Number(r[2])]
    }
    function N(e) {
        var t = T(e);
        if (!t)
            return!1;
        var i = t[0], s = t[1];
        return i === r && s >= n && s <= lt
    }
    function C() {
        if (!e)
            return;
        try {
            throw new Error
        } catch (t) {
            var n = t.stack.split("\n"), i = n[0].indexOf("@") > 0 ? n[1] : n[2], s = T(i);
            if (!s)
                return;
            return r = s[0], s[1]
        }
    }
    function k(e, t, n) {
        return function () {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn(t + " is deprecated, use " + n + " instead.", (new Error("")).stack), e.apply(e, arguments)
        }
    }
    function L(e) {
        return H(e) ? e : B(e) ? G(e) : Q(e)
    }
    function A() {
        function l(e) {
            r = e, o.source = e, f(t, function (t, n) {
                s(function () {
                    e.promiseDispatch.apply(e, n)
                })
            }, void 0), t = void 0, n = void 0
        }
        var t = [], n = [], r, i = h(A.prototype), o = h(_.prototype);
        o.promiseDispatch = function (e, i, o) {
            var u = a(arguments);
            t ? (t.push(u), i === "when" && o[1] && n.push(o[1])) : s(function () {
                r.promiseDispatch.apply(r, u)
            })
        }, o.valueOf = function () {
            if (t)
                return o;
            var e = P(r);
            return H(e) && (r = e), e
        }, o.inspect = function () {
            return r ? r.inspect() : {state: "pending"}
        };
        if (L.longStackSupport && e)
            try {
                throw new Error
            } catch (u) {
                o.stack = u.stack.substring(u.stack.indexOf("\n") + 1)
            }
        return i.promise = o, i.resolve = function (e) {
            if (r)
                return;
            l(L(e))
        }, i.fulfill = function (e) {
            if (r)
                return;
            l(Q(e))
        }, i.reject = function (e) {
            if (r)
                return;
            l(K(e))
        }, i.notify = function (e) {
            if (r)
                return;
            f(n, function (t, n) {
                s(function () {
                    n(e)
                })
            }, void 0)
        }, i
    }
    function O(e) {
        if (typeof e != "function")
            throw new TypeError("resolver must be a function.");
        var t = A();
        try {
            e(t.resolve, t.reject, t.notify)
        } catch (n) {
            t.reject(n)
        }
        return t.promise
    }
    function M(e) {
        return O(function (t, n) {
            for (var r = 0, i = e.length; r < i; r++)
                L(e[r]).then(t, n)
        })
    }
    function _(e, t, n) {
        t === void 0 && (t = function (e) {
            return K(new Error("Promise does not support operation: " + e))
        }), n === void 0 && (n = function () {
            return{state: "unknown"}
        });
        var r = h(_.prototype);
        r.promiseDispatch = function (n, i, s) {
            var o;
            try {
                e[i] ? o = e[i].apply(r, s) : o = t.call(r, i, s)
            } catch (u) {
                o = K(u)
            }
            n && n(o)
        }, r.inspect = n;
        if (n) {
            var i = n();
            i.state === "rejected" && (r.exception = i.reason), r.valueOf = function () {
                var e = n();
                return e.state === "pending" || e.state === "rejected" ? r : e.value
            }
        }
        return r
    }
    function D(e, t, n, r) {
        return L(e).then(t, n, r)
    }
    function P(e) {
        if (H(e)) {
            var t = e.inspect();
            if (t.state === "fulfilled")
                return t.value
        }
        return e
    }
    function H(e) {
        return m(e) && typeof e.promiseDispatch == "function" && typeof e.inspect == "function"
    }
    function B(e) {
        return m(e) && typeof e.then == "function"
    }
    function j(e) {
        return H(e) && e.inspect().state === "pending"
    }
    function F(e) {
        return!H(e) || e.inspect().state === "fulfilled"
    }
    function I(e) {
        return H(e) && e.inspect().state === "rejected"
    }
    function W() {
        !U && typeof window != "undefined" && window.console && console.warn("[Q] Unhandled rejection reasons (should be empty):", q), U = !0
    }
    function X() {
        for (var e = 0; e < q.length; e++) {
            var t = q[e];
            console.warn("Unhandled rejection reason:", t)
        }
    }
    function V() {
        q.length = 0, R.length = 0, U = !1, z || (z = !0, typeof process != "undefined" && process.on && process.on("exit", X))
    }
    function $(e, t) {
        if (!z)
            return;
        R.push(e), t && typeof t.stack != "undefined" ? q.push(t.stack) : q.push("(no stack) " + t), W()
    }
    function J(e) {
        if (!z)
            return;
        var t = l(R, e);
        t !== -1 && (R.splice(t, 1), q.splice(t, 1))
    }
    function K(e) {
        var t = _({when: function (t) {
                return t && J(this), t ? t(e) : this
            }}, function () {
            return this
        }, function () {
            return{state: "rejected", reason: e}
        });
        return $(t, e), t
    }
    function Q(e) {
        return _({when: function () {
                return e
            }, get: function (t) {
                return e[t]
            }, set: function (t, n) {
                e[t] = n
            }, "delete": function (t) {
                delete e[t]
            }, post: function (t, n) {
                return t === null || t === void 0 ? e.apply(void 0, n) : e[t].apply(e, n)
            }, apply: function (t, n) {
                return e.apply(t, n)
            }, keys: function () {
                return d(e)
            }}, void 0, function () {
            return{state: "fulfilled", value: e}
        })
    }
    function G(e) {
        var t = A();
        return s(function () {
            try {
                e.then(t.resolve, t.reject, t.notify)
            } catch (n) {
                t.reject(n)
            }
        }), t.promise
    }
    function Y(e) {
        return _({isDef: function () {
            }}, function (n, r) {
            return it(e, n, r)
        }, function () {
            return L(e).inspect()
        })
    }
    function Z(e, t, n) {
        return L(e).spread(t, n)
    }
    function et(e) {
        return function () {
            function t(e, t) {
                var s;
                if (b) {
                    try {
                        s = n[e](t)
                    } catch (o) {
                        return K(o)
                    }
                    return s.done ? s.value : D(s.value, r, i)
                }
                try {
                    s = n[e](t)
                } catch (o) {
                    return g(o) ? o.value : K(o)
                }
                return D(s, r, i)
            }
            var n = e.apply(this, arguments), r = t.bind(t, "next"), i = t.bind(t, "throw");
            return r()
        }
    }
    function tt(e) {
        L.done(L.async(e)())
    }
    function nt(e) {
        throw new y(e)
    }
    function rt(e) {
        return function () {
            return Z([this, st(arguments)], function (t, n) {
                return e.apply(t, n)
            })
        }
    }
    function it(e, t, n) {
        return L(e).dispatch(t, n)
    }
    function st(e) {
        return D(e, function (e) {
            var t = 0, n = A();
            return f(e, function (r, i, s) {
                var o;
                H(i) && (o = i.inspect()).state === "fulfilled" ? e[s] = o.value : (++t, D(i, function (r) {
                    e[s] = r, --t === 0 && n.resolve(e)
                }, n.reject, function (e) {
                    n.notify({index: s, value: e})
                }))
            }, void 0), t === 0 && n.resolve(e), n.promise
        })
    }
    function ot(e) {
        return D(e, function (e) {
            return e = c(e, L), D(st(c(e, function (e) {
                return D(e, i, i)
            })), function () {
                return e
            })
        })
    }
    function ut(e) {
        return L(e).allSettled()
    }
    function at(e, t) {
        return L(e).then(void 0, void 0, t)
    }
    function ft(e, t) {
        return L(e).nodeify(t)
    }
    var e = !1;
    try {
        throw new Error
    } catch (t) {
        e = !!t.stack
    }
    var n = C(), r, i = function () {
    }, s = function () {
        function o() {
            while (e.next) {
                e = e.next;
                var t = e.task;
                e.task = void 0;
                var r = e.domain;
                r && (e.domain = void 0, r.enter());
                try {
                    t()
                } catch (s) {
                    if (i)
                        throw r && r.exit(), setTimeout(o, 0), r && r.enter(), s;
                    setTimeout(function () {
                        throw s
                    }, 0)
                }
                r && r.exit()
            }
            n = !1
        }
        var e = {task: void 0, next: null}, t = e, n = !1, r = void 0, i = !1;
        s = function (e) {
            t = t.next = {task: e, domain: i && process.domain, next: null}, n || (n = !0, r())
        };
        if (typeof process != "undefined" && process.nextTick)
            i = !0, r = function () {
                process.nextTick(o)
            };
        else if (typeof setImmediate == "function")
            typeof window != "undefined" ? r = setImmediate.bind(window, o) : r = function () {
                setImmediate(o)
            };
        else if (typeof MessageChannel != "undefined") {
            var u = new MessageChannel;
            u.port1.onmessage = function () {
                r = a, u.port1.onmessage = o, o()
            };
            var a = function () {
                u.port2.postMessage(0)
            };
            r = function () {
                setTimeout(o, 0), a()
            }
        } else
            r = function () {
                setTimeout(o, 0)
            };
        return s
    }(), o = Function.call, a = u(Array.prototype.slice), f = u(Array.prototype.reduce || function (e, t) {
        var n = 0, r = this.length;
        if (arguments.length === 1)
            do {
                if (n in this) {
                    t = this[n++];
                    break
                }
                if (++n >= r)
                    throw new TypeError
            } while (1);
        for (; n < r; n++)
            n in this && (t = e(t, this[n], n));
        return t
    }), l = u(Array.prototype.indexOf || function (e) {
        for (var t = 0; t < this.length; t++)
            if (this[t] === e)
                return t;
        return-1
    }), c = u(Array.prototype.map || function (e, t) {
        var n = this, r = [];
        return f(n, function (i, s, o) {
            r.push(e.call(t, s, o, n))
        }, void 0), r
    }), h = Object.create || function (e) {
        function t() {
        }
        return t.prototype = e, new t
    }, p = u(Object.prototype.hasOwnProperty), d = Object.keys || function (e) {
        var t = [];
        for (var n in e)
            p(e, n) && t.push(n);
        return t
    }, v = u(Object.prototype.toString), y;
    typeof ReturnValue != "undefined" ? y = ReturnValue : y = function (e) {
        this.value = e
    };
    var b;
    try {
        new Function("(function* (){ yield 1; })"), b = !0
    } catch (t) {
        b = !1
    }
    var w = "From previous event:";
    L.resolve = L, L.nextTick = s, L.longStackSupport = !1, L.defer = A, A.prototype.makeNodeResolver = function () {
        var e = this;
        return function (t, n) {
            t ? e.reject(t) : arguments.length > 2 ? e.resolve(a(arguments, 1)) : e.resolve(n)
        }
    }, L.promise = O, L.passByCopy = function (e) {
        return e
    }, _.prototype.passByCopy = function () {
        return this
    }, L.join = function (e, t) {
        return L(e).join(t)
    }, _.prototype.join = function (e) {
        return L([this, e]).spread(function (e, t) {
            if (e === t)
                return e;
            throw new Error("Can't join: not the same: " + e + " " + t)
        })
    }, L.race = M, _.prototype.race = function () {
        return this.then(L.race)
    }, L.makePromise = _, _.prototype.toString = function () {
        return"[object Promise]"
    }, _.prototype.then = function (e, t, n) {
        function u(t) {
            try {
                return typeof e == "function" ? e(t) : t
            } catch (n) {
                return K(n)
            }
        }
        function a(e) {
            if (typeof t == "function") {
                E(e, r);
                try {
                    return t(e)
                } catch (n) {
                    return K(n)
                }
            }
            return K(e)
        }
        function f(e) {
            return typeof n == "function" ? n(e) : e
        }
        var r = this, i = A(), o = !1;
        return s(function () {
            r.promiseDispatch(function (e) {
                if (o)
                    return;
                o = !0, i.resolve(u(e))
            }, "when", [function (e) {
                    if (o)
                        return;
                    o = !0, i.resolve(a(e))
                }])
        }), r.promiseDispatch(void 0, "when", [void 0, function (e) {
                var t, n = !1;
                try {
                    t = f(e)
                } catch (r) {
                    n = !0;
                    if (!L.onerror)
                        throw r;
                    L.onerror(r)
                }
                n || i.notify(t)
            }]), i.promise
    }, L.when = D, _.prototype.thenResolve = function (e) {
        return this.then(function () {
            return e
        })
    }, L.thenResolve = function (e, t) {
        return L(e).thenResolve(t)
    }, _.prototype.thenReject = function (e) {
        return this.then(function () {
            throw e
        })
    }, L.thenReject = function (e, t) {
        return L(e).thenReject(t)
    }, L.nearer = P, L.isPromise = H, L.isPromiseAlike = B, L.isPending = j, _.prototype.isPending = function () {
        return this.inspect().state === "pending"
    }, L.isFulfilled = F, _.prototype.isFulfilled = function () {
        return this.inspect().state === "fulfilled"
    }, L.isRejected = I, _.prototype.isRejected = function () {
        return this.inspect().state === "rejected"
    };
    var q = [], R = [], U = !1, z = !0;
    L.resetUnhandledRejections = V, L.getUnhandledReasons = function () {
        return q.slice()
    }, L.stopUnhandledRejectionTracking = function () {
        V(), typeof process != "undefined" && process.on && process.removeListener("exit", X), z = !1
    }, V(), L.reject = K, L.fulfill = Q, L.master = Y, L.spread = Z, _.prototype.spread = function (e, t) {
        return this.all().then(function (t) {
            return e.apply(void 0, t)
        }, t)
    }, L.async = et, L.spawn = tt, L["return"] = nt, L.promised = rt, L.dispatch = it, _.prototype.dispatch = function (e, t) {
        var n = this, r = A();
        return s(function () {
            n.promiseDispatch(r.resolve, e, t)
        }), r.promise
    }, L.get = function (e, t) {
        return L(e).dispatch("get", [t])
    }, _.prototype.get = function (e) {
        return this.dispatch("get", [e])
    }, L.set = function (e, t, n) {
        return L(e).dispatch("set", [t, n])
    }, _.prototype.set = function (e, t) {
        return this.dispatch("set", [e, t])
    }, L.del = L["delete"] = function (e, t) {
        return L(e).dispatch("delete", [t])
    }, _.prototype.del = _.prototype["delete"] = function (e) {
        return this.dispatch("delete", [e])
    }, L.mapply = L.post = function (e, t, n) {
        return L(e).dispatch("post", [t, n])
    }, _.prototype.mapply = _.prototype.post = function (e, t) {
        return this.dispatch("post", [e, t])
    }, L.send = L.mcall = L.invoke = function (e, t) {
        return L(e).dispatch("post", [t, a(arguments, 2)])
    }, _.prototype.send = _.prototype.mcall = _.prototype.invoke = function (e) {
        return this.dispatch("post", [e, a(arguments, 1)])
    }, L.fapply = function (e, t) {
        return L(e).dispatch("apply", [void 0, t])
    }, _.prototype.fapply = function (e) {
        return this.dispatch("apply", [void 0, e])
    }, L["try"] = L.fcall = function (e) {
        return L(e).dispatch("apply", [void 0, a(arguments, 1)])
    }, _.prototype.fcall = function () {
        return this.dispatch("apply", [void 0, a(arguments)])
    }, L.fbind = function (e) {
        var t = L(e), n = a(arguments, 1);
        return function () {
            return t.dispatch("apply", [this, n.concat(a(arguments))])
        }
    }, _.prototype.fbind = function () {
        var e = this, t = a(arguments);
        return function () {
            return e.dispatch("apply", [this, t.concat(a(arguments))])
        }
    }, L.keys = function (e) {
        return L(e).dispatch("keys", [])
    }, _.prototype.keys = function () {
        return this.dispatch("keys", [])
    }, L.all = st, _.prototype.all = function () {
        return st(this)
    }, L.allResolved = k(ot, "allResolved", "allSettled"), _.prototype.allResolved = function () {
        return ot(this)
    }, L.allSettled = ut, _.prototype.allSettled = function () {
        return this.then(function (e) {
            return st(c(e, function (e) {
                function t() {
                    return e.inspect()
                }
                return e = L(e), e.then(t, t)
            }))
        })
    }, L.fail = L["catch"] = function (e, t) {
        return L(e).then(void 0, t)
    }, _.prototype.fail = _.prototype["catch"] = function (e) {
        return this.then(void 0, e)
    }, L.progress = at, _.prototype.progress = function (e) {
        return this.then(void 0, void 0, e)
    }, L.fin = L["finally"] = function (e, t) {
        return L(e)["finally"](t)
    }, _.prototype.fin = _.prototype["finally"] = function (e) {
        return e = L(e), this.then(function (t) {
            return e.fcall().then(function () {
                return t
            })
        }, function (t) {
            return e.fcall().then(function () {
                throw t
            })
        })
    }, L.done = function (e, t, n, r) {
        return L(e).done(t, n, r)
    }, _.prototype.done = function (e, t, n) {
        var r = function (e) {
            s(function () {
                E(e, i);
                if (!L.onerror)
                    throw e;
                L.onerror(e)
            })
        }, i = e || t || n ? this.then(e, t, n) : this;
        typeof process == "object" && process && process.domain && (r = process.domain.bind(r)), i.then(void 0, r)
    }, L.timeout = function (e, t, n) {
        return L(e).timeout(t, n)
    }, _.prototype.timeout = function (e, t) {
        var n = A(), r = setTimeout(function () {
            n.reject(new Error(t || "Timed out after " + e + " ms"))
        }, e);
        return this.then(function (e) {
            clearTimeout(r), n.resolve(e)
        }, function (e) {
            clearTimeout(r), n.reject(e)
        }, n.notify), n.promise
    }, L.delay = function (e, t) {
        return t === void 0 && (t = e, e = void 0), L(e).delay(t)
    }, _.prototype.delay = function (e) {
        return this.then(function (t) {
            var n = A();
            return setTimeout(function () {
                n.resolve(t)
            }, e), n.promise
        })
    }, L.nfapply = function (e, t) {
        return L(e).nfapply(t)
    }, _.prototype.nfapply = function (e) {
        var t = A(), n = a(e);
        return n.push(t.makeNodeResolver()), this.fapply(n).fail(t.reject), t.promise
    }, L.nfcall = function (e) {
        var t = a(arguments, 1);
        return L(e).nfapply(t)
    }, _.prototype.nfcall = function () {
        var e = a(arguments), t = A();
        return e.push(t.makeNodeResolver()), this.fapply(e).fail(t.reject), t.promise
    }, L.nfbind = L.denodeify = function (e) {
        var t = a(arguments, 1);
        return function () {
            var n = t.concat(a(arguments)), r = A();
            return n.push(r.makeNodeResolver()), L(e).fapply(n).fail(r.reject), r.promise
        }
    }, _.prototype.nfbind = _.prototype.denodeify = function () {
        var e = a(arguments);
        return e.unshift(this), L.denodeify.apply(void 0, e)
    }, L.nbind = function (e, t) {
        var n = a(arguments, 2);
        return function () {
            function s() {
                return e.apply(t, arguments)
            }
            var r = n.concat(a(arguments)), i = A();
            return r.push(i.makeNodeResolver()), L(s).fapply(r).fail(i.reject), i.promise
        }
    }, _.prototype.nbind = function () {
        var e = a(arguments, 0);
        return e.unshift(this), L.nbind.apply(void 0, e)
    }, L.nmapply = L.npost = function (e, t, n) {
        return L(e).npost(t, n)
    }, _.prototype.nmapply = _.prototype.npost = function (e, t) {
        var n = a(t || []), r = A();
        return n.push(r.makeNodeResolver()), this.dispatch("post", [e, n]).fail(r.reject), r.promise
    }, L.nsend = L.nmcall = L.ninvoke = function (e, t) {
        var n = a(arguments, 2), r = A();
        return n.push(r.makeNodeResolver()), L(e).dispatch("post", [t, n]).fail(r.reject), r.promise
    }, _.prototype.nsend = _.prototype.nmcall = _.prototype.ninvoke = function (e) {
        var t = a(arguments, 1), n = A();
        return t.push(n.makeNodeResolver()), this.dispatch("post", [e, t]).fail(n.reject), n.promise
    }, L.nodeify = ft, _.prototype.nodeify = function (e) {
        if (!e)
            return this;
        this.then(function (t) {
            s(function () {
                e(null, t)
            })
        }, function (t) {
            s(function () {
                e(t)
            })
        })
    };
    var lt = C();
    return L
}), define("view/animations", ["Q", "underscore", "common/EventBus", "./board", "common/Utils"], function (e, t, n, r, i) {
    function o(t, n) {
        var r = e.defer(), i = n || 150, o = (new Date).getTime(), u, a;
        return s(function f() {
            u = Date.now() - o, a = Math.min(Math.max(0, u / i), 1), a !== 1 && s(f, 1e3 / 60), t(a), a === 1 && r.resolve()
        }), r.promise
    }
    function u(e, t) {
        return function (n) {
            r.ctx.save(), r.ctx.translate(r.marginLeft, r.marginTop), r.ctx.scale(r.scale, r.scale), e.turn(r.ctx, n, t), r.ctx.restore()
        }
    }
    function a() {
    }
    function f(i) {
        function p(e, t) {
            var i = e.getSelection(1);
            return r.clearDirty(), r.initializeDirtyRectangle(i), o(h(i, u.getNextCardPosition()), l).then(function () {
                n.emit("pile.deal.start"), c(u, i), u.push.apply(u, i.cards), r.draw(i)
            }).then(function () {
                n.emit("pile.deal.end")
            })
        }
        var s = i.from, u = i.to, f = i.total, l = 100, c = i.forEachCard || a;
        return t.reduce(t.range(f), function (e, n) {
            return e.then(t.bind(p, null, s, n))
        }, e())
    }
    function l() {
        function s(e, t) {
            t.cards[0].faceup = !1
        }
        var n = t.select(r.piles, {type: "foundation"}), i = t.select(r.piles, {type: "stock"}).pop();
        return t.reduce(n, function (e, n) {
            return e.then(t.bind(f, null, {from: n, to: i, total: 13, time: 60, forEachCard: s}))
        }, e())
    }
    function c() {
        var i = t.select(r.piles, {type: "stock"}).pop(), s = t.select(r.piles, {type: "tableau"}), o = 0;
        return n.emit("animation.start"), t.reduce(s, function (e, n) {
            return e.then(t.bind(f, null, {from: i, to: n, time: 60, total: ++o}))
        }, e()).then(function () {
            r.drawAll(), n.emit("animation.end")
        })
    }
    function h(e, t) {
        var n = e.x - t.x, i = e.y - t.y, s = e.x, o = e.y;
        return function (u) {
            e.x !== t.x && (e.x = s - n * u), e.y !== t.y && (e.y = o - i * u), r.draw(e)
        }
    }
    function p(e) {
        var t = e.from, n = e.to, i = n.getNextCardPosition();
        return r.clearDirty(), r.initializeDirtyRectangle(t), d.move(t, i).then(function () {
            if (e.turn)
                return d.turn(t.original, null, 0)
        }).then(function () {
            n.push.apply(n, t.cards), r.drawAll()
        })
    }
    var s = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
            window.setTimeout(e, t || 1e3 / 60)
        }
    }();
    n.on("game.finish", l);
    var d = {move: function (e, t, r) {
            return n.emit("animation.start"), o(h(e, t), r).then(function (e) {
                n.emit("animation.end")
            })
        }, turn: function (e, t, r) {
            return n.emit("animation.start"), n.emit("card.flip"), o(u(e, t), r).then(function (e) {
                n.emit("animation.end")
            })
        }, deal: c, turnAndMoveCards: p};
    return d
}), define("Solitaire/utils", ["underscore"], function () {
    function s(e) {
        var t, n, r = e.length;
        if (r)
            while (--r)
                n = ~~(Math.random() * (r + 1)), t = e[n], e[n] = e[r], e[r] = t;
        return e
    }
    function o() {
        var t = [], r, i, s;
        for (r = 0; i = e[r]; r++)
            for (s = 0; s < n; s++)
                t.push({suit: i, rank: s});
        return t
    }
    function u() {
        var e = o(), t = {};
        return s(e), t.foundations = [[], [], [], []], t.tableaus = a(e), t.stock = e, t.waste = [], t
    }
    function a(e) {
        var t = [], n, i;
        for (i = 0; i < r; i++)
            n = e.splice(0, i + 1), n[n.length - 1].faceup = !0, t.push(n);
        return t
    }
    function f(e) {
        var t, n, r;
        if (Array.isArray(e)) {
            t = [];
            for (n = 0, r = e.length; n < r; n++)
                typeof e[n] == "object" ? t[n] = f(e[n]) : t[n] = e[n]
        } else {
            t = {};
            for (n in e) {
                if (!e.hasOwnProperty(n))
                    continue;
                typeof e[n] == "object" ? t[n] = f(e[n]) : t[n] = e[n]
            }
        }
        return t
    }
    var e = "♥♣♦♠".split(""), t = {"♥": "red", "♣": "black", "♦": "red", "♠": "black"}, n = 13, r = 7, i = 4;
    return{createBoard: u, getColor: function (n) {
            return t[n.suit]
        }, last: function (t, n) {
            return t[t.length - (n || 1)]
        }, clone: f, every: _.every, all: _.all, delay: _.delay, isArray: function (e) {
            return{}.toString.call(e) === "[object Array]"
        }}
}), define("view/undoredo", ["common/EventBus", "view/board", "underscore", "UI/Score", "Solitaire/utils", "common/Utils"], function (e, t, n, r, i, s) {
    function o(e) {
        this.undoStack = [], this.redoStack = [], this.maxUndo = e || 20
    }
    function u(e) {
        this.lastCard = e.from.original.last(), this.to = e.from.original, this.from = e.to, this.actions = e, this.cardsToMove = e.from.size(), this.lastCard && this.to.type !== "waste" && (this.isLastCardDown = !this.lastCard.faceup)
    }
    function a(e) {
        this.stock = e.getPile("stock"), this.waste = e.getPile("waste")
    }
    o.prototype = {reset: function () {
            this.undoStack.length = 0, this.redoStack.length = 0
        }, exec: function (e) {
            this.undoStack.length >= this.maxUndo && this.undoStack.shift(), this.undoStack.push(e), this.redoStack.splice(0, this.redoStack.length)
        }, undo: function () {
            if (!this.undoStack.length || t.inAnimation)
                return;
            var e = this.undoStack.pop();
            return e.undo(), this.redoStack.unshift(e)
        }, redo: function () {
        }}, u.prototype = {undo: function () {
            this.isLastCardDown && (this.lastCard.faceup = !1, e.emit("__undo.score"));
            var t = this.from.getSelection(this.cardsToMove);
            e.emit("__undo.score"), e.emit("__undo.move", {to: this.to, from: t, turnLastCard: this.isLastCardDown})
        }}, a.prototype = {undo: function () {
            var r = n.select(t.piles, {type: "stock"}).pop(), s = n.select(t.piles, {type: "waste"}).pop();
            !this.stock.length && this.waste.length && e.emit("__restore.draw"), r.cards = i.clone(this.stock), s.cards = i.clone(this.waste), e.emit("__undo.stock", {stock: this.stock, waste: this.waste}), t.drawAll()
        }}, s.on(document, "keydown", function (e) {
        e.keyCode === 90 && e.ctrlKey && f.undo()
    });
    var f = new o(Infinity);
    return e.on("restart", function () {
        f.reset()
    }), e.on("__do.undo", function () {
        f.undo()
    }), e.on("__game.finish", function () {
        f.reset()
    }), {manager: f, command: u, stockAction: a}
}), define("Solitaire/main", ["Q", "./utils", "common/EventBus", "view/undoredo"], function (e, t, n, r) {
    function s(e) {
        var n = i[e.type] || i[e.type + "s"];
        return t.isArray(n[e.pos]) ? n[e.pos] : n
    }
    function o(e) {
        return e.length === 13
    }
    function u(e) {
        return!!e && !!e.faceup
    }
    function a(e) {
        return e.type === "tableau"
    }
    e.stopUnhandledRejectionTracking();
    var i = null;
    return n.on("__undo.move", function (e) {
        var n = s(e.from), r = s(e.to), i = t.last(r);
        e.turnLastCard && (i.faceup = !1), r.push.apply(r, n.splice(-e.from.size()))
    }), n.on("__undo.stock", function (e) {
        i.stock = e.stock, i.waste = e.waste
    }), {initialize: function () {
            return i = t.createBoard(), t.clone(i)
        }, canGet: function (n) {
            if (!arguments.length)
                return!1;
            if (!a(n.from) && n.cards > 1)
                return!1;
            var r, i;
            return r = s(n.from), i = t.last(r, n.cards), i && i.faceup
        }, canMove: function (n) {
            var r = n, i = this.canGet(r), o = r.to && r.to.type === "foundation", u = r.to && r.to.type === "tableau", a = u || o;
            if (!i || !a || o && r.cards > 1)
                return!1;
            var f = t.last(s(r.from), r.cards), l = t.last(s(r.to));
            return o ? this.testFoundation(f, l) : this.testTableau(f, l)
        }, testTableau: function (n, r) {
            return!r && n.rank == 12 ? !0 : u(r) && t.getColor(n) !== t.getColor(r) && n.rank - r.rank == -1
        }, testFoundation: function (t, n) {
            return!n && t.rank === 0 ? !0 : u(n) && t.suit === n.suit && t.rank - n.rank == 1
        }, move: function f(a) {
            var f = a;
            if (!arguments.length || !this.canMove(f))
                return e.reject(f);
            n.emit(f.from.type + ".to." + f.to.type);
            var l = {from: f.from, to: f.to}, c = s(f.from), h = s(f.to), p = t.last(c, f.cards + 1);
            return h.push.apply(h, c.splice(-f.cards)), p && !u(p) && (n.emit("card.turn"), p.faceup = !0, l.turn = !0), t.every(i.foundations, o) && t.delay(n.emit, 400, "__game.finish"), r.manager.exec(new r.command(l)), new e(l)
        }, canGetCardFromStock: function () {
            return!!i.stock.length
        }, getCardFromStock: function () {
            if (!this.canGetCardFromStock())
                return;
            n.emit("draw.card");
            var r = i.stock.pop();
            return r.faceup = !0, i.waste.push(r), t.clone(r)
        }, fillStock: function () {
            if (this.canGetCardFromStock())
                return;
            n.emit("draw.card");
            var t = i.waste, r = i.stock, s, o;
            for (s = 0, o = t.length; s < o; s++)
                t[s].faceup = !1;
            r.push.apply(r, t.splice(0).reverse())
        }, areAllUpside: function () {
            return t.all(i.tableaus, function (e) {
                return t.every(e, function (e) {
                    return e.faceup
                })
            })
        }, getPile: function (n) {
            return t.clone(i[n])
        }}
}), define("Solitaire", ["Solitaire/main"], function (e) {
    return e
}), define("view/main", ["./board", "./animations", "Solitaire", "underscore", "common/EventBus", "./undoredo", "Q"], function (e, t, n, r, i, s, o) {
    function d() {
        i.on("pointer.down", N), i.on("stock.clicked", E), i.on("stock.clicked", w), i.on("pile.drag.start", w), i.on("pile.drag.start", C), i.on("pile.drag.move", k), i.on("pile.drag.end", A), i.on("__undo.move", b), i.on("pile.tap", function (e) {
            if (e.pile.type === "foundation")
                return;
            var t = e.pile.getCards(e.start), r;
            n.canGet({from: e.pile, cards: t}) && (r = y(t, e.pile, m(e.pile))), r && r.then(v)
        })
    }
    function v() {
        if (!n.areAllUpside() || u.inAnimation)
            return;
        var e = r.select(u.piles, {type: "tableau"}), t = e.concat([f]), i = 0;
        r.reduce(t, function (e, t) {
            return e.then(function () {
                return g(t).then(function () {
                    i++
                }).fail(function () {
                    return o()
                })
            })
        }, o()).fin(function () {
            i ? v() : E().then(v)
        })
    }
    function m(e) {
        var t = r.select(u.piles, {type: "tableau"}), n = r.select(u.piles, {type: "foundation"});
        return r.without(n.concat(t), e)
    }
    function g(e) {
        var t = m(e), r, i = 0, s;
        while (n.canGet({from: e, cards: ++i})) {
            s = y(i, e, t);
            if (s)
                return s
        }
        return o.reject()
    }
    function y(e, r, i) {
        var s, o, u, a = r.getSelection(e), f;
        for (s = 0, length = i.length; s < length; s++) {
            u = r.last(), o = i[s].last(), f = u && o && u.rank === o.rank;
            if (!u && !o && i[s].type === "tableau" && r.type === "tableau")
                continue;
            if (f && u.faceup && r.type === i[s].type)
                continue;
            if (!n.canMove({from: a, to: i[s], cards: e}))
                continue;
            return n.move({from: a, to: i[s], cards: a.size()}).then(t.turnAndMoveCards)
        }
        r.push.apply(r, a.cards)
    }
    function b(e) {
        t.turnAndMoveCards(e)
    }
    function w() {
        h || (h = !0, i.emit("game.first.move"))
    }
    function E() {
        if (n.canGetCardFromStock())
            return s.manager.exec(new s.stockAction(n)), S(f.draw3 ? 3 : 1);
        if (p > 1 && f.size())
            return--p, s.manager.exec(new s.stockAction(n)), f.last().faceup = !1, u.drawAll(), u.initializeDirtyRectangle(f), t.move(f, a).then(T);
        o.reject()
    }
    function S(e) {
        if (!e)
            return;
        return r.reduce(r.range(e), function (e) {
            return e.then(function () {
                return t.turn(a, "left", 150).then(function () {
                    x()
                })
            })
        }, o())
    }
    function x() {
        if (!a.size())
            return;
        a.pop(), f.push(n.getCardFromStock()), u.drawAll()
    }
    function T() {
        f.restorePosition(), f.empty(), n.fillStock(), a.push.apply(a, n.getPile("stock")), u.drawAll()
    }
    function N() {
        l = null
    }
    function C(e) {
        var t = e.pile, r = n.canGet({from: {type: t.type, pos: t.pos}, cards: t.getCards(e.start)});
        r && (i.emit("__move.start"), l = t.getSelection(t.getCards(e.start)), u.initializeDirtyRectangle(l))
    }
    function k(e) {
        if (!l)
            return;
        l.x += e.current.x - e.last.x, l.y += e.current.y - e.last.y, u.draw(l)
    }
    function L(e) {
        var t = e, i = {x: e.x + e.cardWidth, y: e.y}, s = {x: e.x, y: e.y + e.cardHeight}, o = {x: e.x + e.cardWidth, y: e.y + e.cardHeight}, a = [u.getPileUnderPoint(t), u.getPileUnderPoint(i), u.getPileUnderPoint(s), u.getPileUnderPoint(o)], f = e.size();
        return r.find(a, function (t) {
            return n.canMove({from: e, to: t, cards: f})
        })
    }
    function A() {
        if (!l)
            return;
        var e = l, r = L(e);
        n.move({from: e, to: r, cards: e.size()}).then(t.turnAndMoveCards).then(function () {
            n.areAllUpside() && v()
        }).fail(function (e) {
            var n = e.from, r = e.from.original;
            return t.move(n, r.getNextCardPosition()).then(function () {
                r.push.apply(r, n.cards), u.drawAll()
            })
        }).fin(function () {
            i.emit("__move.end")
        })
    }
    var u, a, f, l, c, h = !1, p = 0;
    return i.on("__restore.draw", function () {
        p++
    }), {initialize: function (o, l) {
            if (e.inAnimation)
                return;
            i.emit("game.start"), u = e.initialize(o, n.initialize()), a = r.select(u.piles, {type: "stock"}).pop(), f = r.select(u.piles, {type: "waste"}).pop(), h = !1, r.delay(t.deal, 300), f.draw3 = l.draw3, p = l.allowedDraws || 3, c || (i.emit("game.initialized"), d(), c = !0, i.on("restart", r.bind(this.initialize, this, o, l)), i.on("draw3", r.bind(function () {
                l.draw3 = f.draw3 = !l.draw3
            }, this)))
        }}
}), define("view", ["view/main"], function (e) {
    return e
}), define("UI/main", ["common/Utils", "common/EventBus", "common/Storage", "./Sound", "./Score", "text!./template.html", "underscore", "i18n!nls/solitaire", "view"], function (e, t, n, r, i, s, o, u, a) {
    function m(i, s) {
        var u = /android (\d\.\d)/i.exec(navigator.userAgent), a = !!u, f = u ? parseFloat(u[1]) : 0;
        if (a && f <= 2.3)
            return;
        var l = new r("sound/click", 10, s);
        l.play = o.bind(l.play, l), l.setEnabled = o.bind(l.setEnabled, l), t.on("pile.deal.start", l.play), t.on("card.flip", l.play), t.on("switch-sound", l.setEnabled), t.on("switch-sound", function () {
            n.save("sound", l.enabled)
        }), l.enabled = !d, d && t.on("switch-sound", function () {
            l.load()
        }).once(), n.get("sound") !== null && !d && (l.enabled = n.get("sound")), l.enabled || (e.$("solitaire-sound-icon").className = "icon-volume-off")
    }
    function g(r) {
        var i = r.draw3;
        n.get("draw3") !== null && (i = r.draw3 = n.get("draw3")), t.on("draw3", function () {
            i = !i, n.save("draw3", i)
        }), i && (e.$("solitaire-draw3-icon").className = "icon-check-sign")
    }
    function y(e) {
        function u(e, t) {
            s.push(t), r[e](t)
        }
        var n = e.score || {}, r = i.initialize({timer: "html5-solitaire-timer", score: "html5-solitaire-score", every: e.every, deduct: e.deduct});
        o.bindAll(r), t.on("game.start", r.reset), t.on("game.first.move", r.restart), t.on("__game.finish", function () {
            r.stop(), t.emit("game.finish", {time: r.getTime(), score: r.getScore(), pretyTime: r.time()})
        });
        var s = [];
        t.on("__undo.score", function () {
            var e = -s.pop();
            e > 0 ? r.up(e) : r.down(e)
        }), t.on("foundation.to.foundation", o.bind(u, null, "up", 0)), t.on("waste.to.foundation", function () {
            u("up", n.move_to_foundation || p)
        }), t.on("tableau.to.foundation", function () {
            u("up", n.move_to_foundation || p)
        }), t.on("waste.to.tableau", function () {
            u("up", n.waste_to_tableau || c)
        }), t.on("foundation.to.tableau", function () {
            u("down", -Math.abs(n.foundation_to_tableau) || h)
        }), t.on("card.turn", function () {
            u("up", n.turn_card || v)
        })
    }
    function b() {
        var n = !1;
        e.on("html5-solitaire-sidebar", "click", w), e.on("html5-solitaire-options", "click", function () {
            e.addClass(document.body, "html5-solitaire-show-sidebar"), n = !0
        }), e.on("html5-solitaire-board-overlay", "click", function () {
            e.removeClass(document.body, "html5-solitaire-show-sidebar"), n = !1
        }), e.on("html5-solitaire-undo", "click", function () {
            t.emit("__do.undo")
        })
    }
    function w(e) {
        var n = e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode, r = n.getAttribute("data-sol-action"), i = n.children[0], s = i.className;
        r && (t.emit(r), i.className = f[s] || s)
    }
    function E(e) {
        return e.indexOf("%") !== -1 ? e : e.replace("px", "") + "px"
    }
    var f = {"icon-volume-up": "icon-volume-off", "icon-volume-off": "icon-volume-up", "icon-check-empty": "icon-check-sign", "icon-check-sign": "icon-check-empty"}, l = ["<h2>Ups! This game only works in modern browsers</h2>", "<p>Please update your browser quickly</p>", "<ul>", '    <li><a href="http://www.google.com/chrome" title="Google Chrome">Google Chrome</a></li>', '    <li><a href="http://www.mozilla.org/" title="Mozilla Firefox">Firefox</a></li>', '    <li><a href="http://www.opera.com/download" title="Opera">Opera</a></li>', "</ul>"], c = 5, h = -15, p = 10, d = /iphone|ipod|ipad/i.test(navigator.userAgent), v = 5;
    return document.createElement("solitaire"), {initialize: function (e) {
            function h() {
                a.initialize(document.getElementById("html5-solitaire-canvas"), e)
            }
            var t;
            "string" == typeof e.container ? t = document.getElementById(e.container) : t = document.getElementsByTagName("solitaire")[0];
            try {
                document.createElement("canvas").getContext("2d")
            } catch (n) {
                var r = document.createElement("div");
                throw r.innerHTML = l.join(""), t.parentNode.replaceChild(r, t), n
            }
            e = e || {};
            if (!t)
                throw new Error("No Element was provided");
            t.hasAttribute("draw3") && (e.draw3 = !0);
            var i = parseInt(t.getAttribute("allowedDraws"), 10);
            i > 0 && (e.allowedDraws = i);
            var f = t.getAttribute("width") || "100%", c = t.getAttribute("height") || "100%";
            this.solitaire = t, t.style.width = E(f), t.style.height = E(c), t.innerHTML = o.template(s)({_e: function (e) {
                    return u[e] || e
                }}), m(e, h), g(e), y(e), b(e)
        }}
}), define("UI", ["UI/main"], function (e) {
    return e
}), define("vendor/require-plugins/text!UI/modal-template.html", [], function () {
    return'<h1><%= _e("stats") %></h1>\n\n    <button id="html5-solitaire-reset-stats" data-reset-stats><%= _e("resetStats") %></button>\n    <table>\n    <% _.each(\'total wins winPercentage bestTime worstTime bestScore worstScore\'.split(" "), function(key) { %>\n      <tr>\n        <th><%= _e(key) %></th>\n        <td><%= _e(stats[key]) %></td>\n      </tr>\n    <% }); %>\n    </table>\n    <button id="html5-solitaire-dialog-close" data-close-button><%= _e("modalCloseButton") %></button>'
}), define("UI/Modal", ["common/Utils", "common/EventBus", "underscore", "i18n!nls/solitaire", "text!./modal-template.html"], function (e, t, n, r, i) {
    function c(t, u) {
        l();
        var a = s.style, c = e.$("html5-solitaire-template-" + t), h = f[t] || n.template(i) || n.template(c.innerHTML);
        u._e = function (e) {
            return r[e] || e
        }, f[t] = h, o.innerHTML = h(u), e.addClass(document.body, "html5-solitaire-show-modal")
    }
    function h(t) {
        e.removeClass(document.body, "html5-solitaire-show-modal")
    }
    var s, o, u, a, f = {}, l = n.once(function () {
        s = e.$("html5-solitaire-dialog"), o = e.$("html5-solitaire-dialog-message"), u = e.$("html5-solitaire-dialog-close"), a = e.$("html5-solitaire-overlay"), e.on(s, "click", function (e) {
            return e.preventDefault(), e.target.hasAttribute("data-close-button") ? h() : e.target.hasAttribute("data-reset-stats") && t.emit("reset-stats"), !1
        })
    });
    return{open: c, close: h}
}), define("stats/main", ["common/Storage", "common/EventBus", "view/board", "UI/Modal", "common/Utils", "underscore"], function (e, t, n, r, i, s) {
    function l() {
        var e = s.clone(u);
        e.winPercentage = (Math.round(u.wins / u.total * 100) || 0) + "%", e.bestTime = i.format(u.bestTime), e.worstTime = i.format(u.worstTime), r.open("stats", {stats: e})
    }
    function c() {
        s.each(o, function (t, n) {
            e.save(n, null), u[n] = o[n]
        }), l()
    }
    function h() {
        s.each(o, function (t, n) {
            var r = e.get(n);
            u[n] = r !== null ? r : o[n]
        })
    }
    function p(t) {
        e.increment(t), u[t] = u[t] + 1
    }
    function d(t) {
        var n = e.get("bestTime") || Infinity, r = e.get("worstTime") || -Infinity, i = e.get("bestScore") || -Infinity, s = e.get("worstScore") || Infinity;
        t.time < n && (e.save("bestTime", t.time), u.bestTime = t.time), t.time > r && (e.save("worstTime", t.time), u.worstTime = t.time), t.score > i && (e.save("bestScore", t.score), u.bestScore = t.score), t.score < s && (e.save("worstScore", t.score), u.worstScore = t.score)
    }
    var o = {total: 0, wins: 0, bestTime: "N/A", worstTime: "N/A", bestScore: "N/A", worstScore: "N/A"}, u = {}, a = s.bind(p, null, "total"), f = s.bind(p, null, "wins");
    t.on("game.initialized", h), t.on("game.finish", f), t.on("game.finish", d), t.on("game.first.move", a), t.on("reset-stats", c), t.on("show-stats", l)
}), define("stats", ["stats/main"], function (e) {
    return e
}), requirejs.config({packages: ["view", "Solitaire", "UI", "stats"], urlArgs: "bust=" + (new Date).getTime(), waitSeconds: 0, map: {"*": {Q: "vendor/q", EventEmitter: "vendor/EventEmitter.min", postal: "vendor/postal.min", underscore: "vendor/lodash.underscore", i18n: "vendor/require-plugins/i18n", image: "vendor/require-plugins/image", text: "vendor/require-plugins/text", images: "images"}}, skipDirOptimize: !0, dir: "../build", name: "main", exclude: ["nls/solitaire.js", "nls/es/solitaire.js", "nls/template/solitaire.js"]}), function () {
    define("main", ["UI", "view", "stats"], function (e, t) {
        return function (n) {
            e.initialize(n)
        }
    })
}();