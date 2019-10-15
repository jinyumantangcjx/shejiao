(function (z) {
    var DL = function (a) {
        if (a.kq) {
            var b = (0, window.$)(a.kq);
            b.stop().text("草稿已经保存").fadeTo(600, .5).delay(3E3).fadeOut(600, function () {
                b.text("")
            })
        }
    };
    var EL = function (a) {
        a.ready(function () {
            var a = this.Ma;
            this.Hd ? z.ws(a, a.value.length) : a.Ha.lastChild ? z.Qu(a.Ha.lastChild) : a.Wf();
            this.ql && (this.ql.scrollTop = this.ql.scrollHeight)
        })
    };
    var FL = function (a) {
        return a.Hd ? a.Ma : a.Ma.m()
    };
    var GL = function (a, b) {
        a.params = b
    };
    var HL = function (a) {
        a.gz = !0;
        a.pE = z.fo(a.m()).height;
        z.$F += a.pE;
        z.y(z.cv, function (a) {
            a && !a.gz && a.xl && a.Bp()
        })
    };
    var IL = function (a) {
        var b = {};
        z.y(a.data.ld(), function (a) {
            b[a] = this.data.get(a)
        }, a);
        return b
    };
    var JL = function () {
        this.BB = "";
        this.aM = KL
    };
    var LL = function () {
        this.qk = "";
        this.PL = ML
    };
    var NL = function (a) {
        return a instanceof JL && a.constructor === JL && a.aM === KL ? a.BB : "type_error:Const"
    };
    var OL = function () {
        this.XI = "";
        this.dM = PL
    };
    var QL = function (a) {
        function b(a) {
            if (z.na(a)) z.y(a, b); else {
                if (!(a instanceof z.Ed)) {
                    var g = null;
                    a.Jy && (g = a.Bl());
                    a = z.Hd(z.Na(a.Nj ? a.Sg() : String(a)), g)
                }
                d += z.Gd(a);
                a = a.Bl();
                0 == c ? c = a : 0 != a && c != a && (c = null)
            }
        }

        var c = 0, d = "";
        z.y(arguments, b);
        return z.Hd(d, c)
    };
    var RL = function (a, b) {
        b.all = !0;
        return z.Mr(a, b)
    };
    var SL = function () {
        z.lt.call(this, null, null, "搜索话题");
        this.Fe = "";
        this.data = [z.nh[0]]
    };
    var TL = function (a, b) {
        return window.$.post("/question/askpeople", {qid: a, uid: b, op: "remove"})
    };
    var UL = function (a, b) {
        return z.na(a) ? ['\x3ca data-tip\x3d"p$t$', a[1], '" href\x3d"/people/', a[1], '"', b ? ' class\x3d"' + b + '"' : "", ' title\x3d"', a[0], '"\x3e', a[0], "\x3c/a\x3e"].join("") : "匿名用户"
    };
    var VL = function (a) {
        if (0 === a || 1 === a) return "匿名用户";
        var b = z.O("a", {href: "/people/" + a[1], title: a[0]}, a[0]);
        b.setAttribute("data-tip", "p$t$" + a[1]);
        return b
    };
    var WL = function (a) {
        if (0 === a || 1 === a) return z.O("span");
        if (z.na(a)) {
            var b = z.O("a", {
                href: "/people/" + a[1],
                title: a[0],
                "class": "zm-item-link-avatar"
            }, z.O("img", {src: a[2], "class": "zm-list-avatar"}));
            b.setAttribute("data-tip", "p$t$" + a[1]);
            return b
        }
    };
    var XL = function (a) {
        return 1 === a ? !0 : z.na(a) ? a[3] === z.T[3] : !1
    };
    var YL = function (a) {
        if (!ZL.test("input")) throw Error("Invalid tag name \x3cinput\x3e.");
        if ("INPUT" in $L) throw Error("Tag name \x3cinput\x3e is not allowed for SafeHtml.");
        var b = null, c = "\x3cinput";
        if (a) for (var d in a) {
            if (!ZL.test(d)) throw Error('Invalid attribute name "' + d + '".');
            var f = a[d];
            if (null != f) {
                var g;
                g = d;
                if (f instanceof JL) f = NL(f); else if ("style" == g.toLowerCase()) {
                    if (!z.ta(f)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                    if (!(f instanceof z.Bd)) {
                        var h = "", k = void 0;
                        for (k in f) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(k)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + k);
                            var m = f[k];
                            if (null != m) {
                                if (m instanceof JL) m = NL(m); else if (aM.test(m)) {
                                    for (var n = !0, r = !0, w = 0; w < m.length; w++) {
                                        var H = m.charAt(w);
                                        "'" == H && r ? n = !n : '"' == H && n && (r = !r)
                                    }
                                    n && r || (m = "zClosurez")
                                } else m = "zClosurez";
                                h += k + ":" + m + ";"
                            }
                        }
                        f = h ? (new z.Bd).wo(h) : z.Pl
                    }
                    f = f instanceof z.Bd && f.constructor === z.Bd && f.NL === z.Cd ? f.CA : "type_error:SafeStyle"
                } else {
                    if (/^on/i.test(g)) throw Error('Attribute "' +
                        g + '" requires goog.string.Const value, "' + f + '" given.');
                    if (g.toLowerCase() in bM) if (f instanceof OL) f = f instanceof OL && f.constructor === OL && f.dM === PL ? f.XI : "type_error:TrustedResourceUrl"; else if (f instanceof LL) f = f instanceof LL && f.constructor === LL && f.PL === ML ? f.qk : "type_error:SafeUrl"; else if (z.pa(f)) f instanceof LL || (f = f.Nj ? f.Sg() : String(f), cM.test(f) || (f = "about:invalid#zClosurez"), h = new LL, h.qk = f, f = h), f = f.Sg(); else throw Error('Attribute "' + g + '" on tag "input" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                        f + '" given.');
                }
                f.Nj && (f = f.Sg());
                g = g + '\x3d"' + z.Na(String(f)) + '"';
                c += " " + g
            }
        }
        d = void 0;
        null != d ? z.na(d) || (d = [d]) : d = [];
        !0 === dM.input ? c += "\x3e" : (b = QL(d), c += "\x3e" + z.Gd(b) + "\x3c/input\x3e", b = b.Bl());
        (a = a && a.dir) && (b = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
        return z.Hd(c, b)
    };
    var eM = function (a, b) {
        var c = z.rb(a, b, void 0);
        return 0 <= c ? (Array.prototype.splice.call(a, c, 1), !0) : !1
    };
    var fM = function (a) {
        20 < a.length && (a = a.substring(0, 17) + "...");
        return a
    };
    var gM = function () {
        z.R.call(this);
        this.uf = "zm-pm-item"
    };
    var hM = function (a) {
        if (a.gb().length) {
            var b = new z.Cl;
            b.use("locationSource", {
                param: function (a) {
                    return {start: a[a.length - 1].getAttribute("data-token")}
                }
            });
            b.w(a.nt)
        }
    };
    var iM = function (a, b) {
        z.X.confirm("删除私信", "你确定要删除这封私信吗？", function (a) {
            a && jM(this, b)
        }, a)
    };
    var jM = function (a, b) {
        var c = new z.Z(!0);
        a.v().ya(c, "success", function () {
            var a = z.Rn(c);
            a.r ? z.X.message(a.msg) : window.location.reload()
        });
        c.ajax("/inbox/delete", "type\x3dsingle\x26token\x3d" + b)
    };
    var kM = function () {
        z.R.call(this);
        this.uf = "zm-pm-item"
    };
    var lM = function (a) {
        var b = new z.Z(!0);
        b.on("success", function () {
            var a = z.Rn(b);
            a.r ? z.X.message(a.msg) : window.location.reload()
        });
        b.ajax("/inbox/delete", "type\x3dthread\x26token\x3d" + a)
    };
    var mM = function (a, b, c, d, f) {
        z.pD.call(this, a, b, f);
        this.Ix = c || "people";
        this.IO = d || ["zg-follow", "zg-unfollow"]
    };
    var nM = function (a, b, c, d) {
        z.G.call(this);
        this.h = a;
        this.Ix = b || "people";
        this.HO = c || ["zg-btn-follow", "zg-btn-unfollow"];
        this.text = d || ["关注", "取消关注"]
    };
    var oM = function (a) {
        z.G.call(this);
        this.url = a || "/topic"
    };
    var pM = function (a, b, c) {
        var d = c[0], f = "";
        "topic" !== d[0] && d[3] && (f = 'data-parent\x3d"' + d[3] + '"');
        b.html('\x3ca href\x3d"' + ("topic" === d[0] ? "/topic/" + d[2] + "/organize/entire" : "javascript:;") + '" data-token\x3d"' + d[2] + '" ' + f + ' name\x3d"' + d[0] + '"\x3e' + d[1] + "\x3c/a\x3e\x3cul class\x3d'zm-topic-organize-list'\x3e\x3c/ul\x3e");
        "topic" !== c[0][0] && b.addClass("zm-topic-organize-loadmore");
        b = (0, window.$)("ul", (0, window.$)(b));
        if (1 < c.length) for (c = c[1], d = 0; d < c.length; d++) {
            var f = c[d], g = (0, window.$)("\x3cli\x3e").addClass("zm-topic-organize-item");
            b.append(g);
            pM(a, g, f)
        }
    };
    var qM = function (a, b, c) {
        z.Dv.call(this, a, b, c)
    };
    var rM = function () {
        z.R.call(this);
        var a = z.nh;
        this.Gf = a[0][3];
        this.Li = a[0];
        this.jw = a[4];
        this.iz = a[5];
        this.lh = "topic"
    };
    var sM = function () {
        (0, window.$)(".zm-topic-list-container").on("click", ".js-questionUnhelpful", function (a) {
            a = (0, window.$)(a.currentTarget);
            var b = a.data("qid"), c = a.data("isRevert");
            if (b) return c ? (a.text("没有帮助").data("isRevert", !1), window.$.post("/question/revert-unhelpful", {qid: b})) : (a.text("撤销没有帮助").data("isRevert", !0), window.$.post("/question/unhelpful", {qid: b})), !1
        })
    };
    var tM = function () {
        var a = z.L("zh-topic-log-list");
        a && ((new mM(a, null, null, null, !0)).init(), (0, window.$)(a).on("click", 'a[name\x3d"revert"]', z.hp(function (a) {
            !1 !== a && z.DD(this)
        }, z.HD({lq: !0}))))
    };
    var uM = function (a) {
        if (z.L("zh-topic-admin-page-wrap")) {
            var b = z.L("zh-topic-del-btn");
            b && a.v().g(b, "click", a.OS)
        }
    };
    var vM = function (a, b) {
        var c = z.Le(window.document, "li", null, a.Wv);
        z.y(c, function (a) {
            a.getAttribute("data-token") === b[1] && z.Q(a, !1)
        })
    };
    var wM = function (a) {
        var b = z.L("zh-topic-followers-list-wrap");
        b && (a = new mM(b, ["/topic", (0, window.encodeURI)(a.Li[1]), "followers"].join("/"), null, ["zg-btn-follow", "zg-btn-unfollow"], !0), a.Ii("zm-person-item"), a.init())
    };
    var xM = function (a) {
        var b = z.L("zh-topic-side-head");
        if (b) {
            var c = z.N("zu-entry-focus-button", b);
            c && a.v().g(c, "click", function () {
                (0, z.dG)(c, "topic", "", ["zg-btn-green", "zg-btn-white"])
            });
            a.kg = z.L("zh-topic-operation-menu");
            a.kg && a.v().g(a.kg, "click", a.kB)
        }
        if (b = z.L("zh-current-topic-bio")) {
            var d = new z.Dv(!0, "/topic/bio/update", "bio");
            GL(d, ["tid\x3d" + a.Gf]);
            d.Vb = '\x3ca href\x3d"javascript:;" name\x3d"edit"\x3e你在 ' + a.Li[0] + " 话题中的经验\x3c/a\x3e";
            d.DE = !0;
            d.w(b)
        }
    };
    var yM = function (a) {
        z.Ze(a, z.We('\x3ca href\x3d"/question/23261456" class\x3d"zg-link-gray-normal"\x3e\x3ci class\x3d"icon-info" style\x3d"vertical-align: -3px; margin-right: 6px"\x3e\x3c/i\x3e如何参与知乎话题的公共编辑？\x3c/a\x3e'))
    };
    var zM = function (a) {
        if (z.L("zh-topic-organize-page-wrap")) {
            var b = z.L("zh-topic-organize-parent-editor");
            if (b) if (z.T.Ds) {
                var c = new z.tt(null, a.Gf, !0);
                c.Et = !0;
                c.w(b);
                c.addEventListener("remove_tag", function (a) {
                    (a = a.data && a.data.id) && (0, window.$)("#wedge-" + a).remove()
                })
            } else yM(b);
            if (b = z.L("zh-topic-organize-child-editor")) z.T.Ds ? (c = new z.tt(null, a.Gf, !1), c.Et = !0, c.w(b), (0, window.$)("a.entire-link").insertAfter(c.Kn).show()) : yM(b);
            (0, window.$)("#zm-topic-manage-relation").on("change", '[type\x3d"checkbox"]',
                function () {
                    var a = (0, window.$)(this).closest("li").attr("id").split("-")[1];
                    window.$.post("/topic/update", {
                        action: "set_topic_edge",
                        parent_topic_id: a,
                        topic_id: z.nh[0][3],
                        edge: this.checked ^ 0
                    }).done(function (a) {
                        if (!a) return z.X.message("网络异常");
                        if (a.r) return z.X.message(a.msg)
                    })
                });
            a.Vv = z.L("zh-topic-alias-input");
            new z.vk(a.Vv, "输入话题别名");
            a.Wv = z.L("zh-topic-alias-list");
            a.v().g(z.L("zh-topic-alias-container"), "click", a.BT);
            if (b = z.L("zh-topic-merge")) a.Oa = new SL, a.Oa.w(b);
            (b = z.L("zh-topic-merge-btn")) && a.v().g(b,
                "click", a.aT)
        }
    };
    var AM = function () {
        var a = z.L("zh-topic-organize-page-children");
        a && (new oM("/topic/" + (0, window.encodeURIComponent)(z.nh[0][1]) + "/organize/entire")).w(a)
    };
    var BM = function (a) {
        var b = z.L("zh-topic-side-related-topics");
        b && (a.HU = b, a.KA = new z.Z(!1), a.v().g(a.KA, "complete", a.lT), a.KA.ajax("/topic/related?tid\x3d" + a.Gf))
    };
    var CM = function (a) {
        if (z.T.gY) (0, window.$)("div.topic-avatar").addClass("disabled"); else {
            var b = z.N("zm-entry-head-avatar-edit-button");
            if (b) {
                var c = new z.Uy(2, z.nh[0][3]);
                c.w(b);
                var d = z.N("zm-avatar-editor-preview");
                z.F(c, "beforepost", function () {
                    (0, window.$)("\x3cdiv class\x3d'avatar-edit-preview-loading topic'\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e").appendTo(d.parentNode)
                });
                z.F(c, "success", function () {
                    window.$.post("/topic/" + z.nh[0][1] + "/avatar", {avatar_path: c.getData().url}).then(function (a) {
                        if (!a) return z.X.message("网络异常");
                        if (a.r) return z.X.message(a.msg);
                        d && (d.src = c.getData().url)
                    }).always(function () {
                        (0, window.$)(".avatar-edit-preview-loading").remove()
                    })
                });
                a.v().g(c, "beforeopen", z.hp(z.HD({lq: !0}), z.Jq(z.p, !0)))
            }
        }
    };
    var DM = function (a) {
        EM(a);
        FM(a);
        a.RH && a.v().g(a.RH, "afterload", function (b) {
            z.Y.tb({type: "ga_click_topic_more", data: b.data, target: a.RH.Md})
        })
    };
    var EM = function (a) {
        var b = z.L("zh-topic-feed-list");
        if (b) {
            var c = new z.Cl;
            a.L(c);
            c.use("locationSource", {
                kt: 0, offset: function (a) {
                    return z.kb(a).getAttribute("data-score")
                }
            });
            c.use("childConstructor", {factory: z.nD}).use("expandLimit");
            c.w(b);
            a.v().g(c, "click!", function (a) {
                "comment" === a.namespace && a.yc.fill("category", this.lh).fill("label", "topic_activity")
            })
        }
    };
    var FM = function (a) {
        var b = z.L("zh-topic-top-page-list");
        if (b) {
            var c = new z.Cl({Ef: !1});
            a.L(c);
            c.use("childConstructor", {factory: z.nD}).use("expandLimit");
            c.w(b);
            a.v().g(c, "click!", function (a) {
                "comment" === a.namespace && a.yc.fill("category", this.lh).fill("label", "topic_activity")
            })
        }
    };
    var GM = function () {
        function a(a) {
            if (!a) return z.X.message("网络异常");
            if (a.r) return z.X.message(a.msg)
        }

        (0, window.$)("#zh-topic-manage-relation-form").on("change", 'input[type\x3d"radio"]', function () {
            window.$.post("/topic/update", {
                action: "set_topic_weaknode",
                topic_id: z.nh[0][3],
                weak: (0, window.$)(this).val()
            }).done(a)
        });
        (0, window.$)("#zh-topic-manage-lock-form").on("change", '[type\x3d"checkbox"]', function () {
            window.$.post("/topic/lock", {
                url_token: z.nh[0][1], lock_type: this.name, lock_value: (0, window.$)(this).is(":checked") ?
                    1 : 0
            }).done(a)
        })
    };
    var HM = function (a) {
        var b = (0, window.$)(".topic-info a[name\x3dshare]"), c = b.get(0), d = window.location.href, f = {
            index: [/\/topic\/\d+$/],
            hot: [/\/topic\/\d+\/newest/],
            top_answers: [/\/topic\/\d+\/top-answers/],
            unanswered: [/\/topic\/\d+\/unanswered/, /\/topic\/\d+\/questions/]
        }, g = Object.keys(f).find(function (a) {
            return f[a].some(function (a) {
                return a.test(window.location.pathname)
            })
        }) || "";
        c && (z.LC(c, "topic", a.Li[1], d).Db(a), b.click(function () {
            z.U("share", "click_share_topic_page", g)
        }))
    };
    var IM = function (a) {
        var b = (0, window.$)(".TopicIndex-toc");
        b.length && (JM(a, b), KM(a, b))
    };
    var KM = function (a, b) {
        var c = z.hp(function (a) {
            b.toggleClass("TopicIndex-toc--sticky", a)
        }, function () {
            return 150 < z.Pe(window.document).y
        });
        c();
        a.v().g(window, "scroll", c)
    };
    var JM = function (a, b) {
        function c() {
            var a = z.Pe(window.document).y, b = 0;
            h.some(function (c, d) {
                a > c && (b = d + 1)
            });
            return Math.min(b, h.length - 1)
        }

        var d = window.location.hash, f = b.find("a"), g = 0;
        Array.from(f).some(function (a, b) {
            if ((0, window.$)(a).attr("href") === d) return g = b, !0
        });
        f.eq(g).addClass("TopicIndex-tocLink--active");
        var h = Array.from((0, window.$)(".TopicIndex-section"), function (a) {
            return (0, window.$)(a).offset().top
        });
        a.v().g(window, "scroll", function () {
            var a = c();
            a !== g && (f.eq(g).removeClass("TopicIndex-tocLink--active"),
                g = a, f.eq(g).addClass("TopicIndex-tocLink--active"))
        })
    };
    var LM = function (a) {
        z.R.call(this, a)
    };
    var MM = function (a, b, c) {
        var d, f, g = [];
        for (d in c) f = c[d], z.oa(f) ? z.y(f, (0, z.q)(function (a) {
            g.push(YL({type: "hidden", name: d, value: String(a)}))
        }, a)) : g.push(YL({type: "hidden", name: d, value: String(f)}));
        z.Fe(b, QL(g))
    };
    var NM = function (a) {
        return window.$.get("/node/ExploreAnswerListV2", {params: JSON.stringify({offset: a, type: "day"})})
    };
    var OM = function (a) {
        return window.$.get("/node/ExploreHotFavlistsInnerV2", {params: JSON.stringify({offset: a})})
    };
    var PM = function (a) {
        return window.$.get("/node/ExploreAnswerListV2", {params: JSON.stringify({offset: a, type: "month"})})
    };
    var QM = function () {
        z.G.call(this)
    };
    var RM = function () {
        z.R.call(this);
        var a = z.kh || [0, 0];
        this.it = a[0];
        this.visible = !!a[1];
        this.lh = "collection"
    };
    var SM = function (a) {
        var b = z.L("zh-list-answer-wrap");
        if (b) {
            (0, window.$)(b).on("click", "a[name\x3dunfavo]", window.$.proxy(a.uQ, a));
            var c = new z.Cl({Ef: !1});
            a.L(c);
            c.use("childConstructor", {$h: z.cD}).use("expandLimit");
            c.w(b);
            a.v().g(c, "click!", function (a) {
                "comment" === a.namespace && a.yc.fill("category", this.lh).fill("label", "collection_answer")
            })
        }
    };
    var TM = function () {
        var a = z.L("zh-favlist-following-wrap");
        a && ((new mM(a, null, "favlist", null, !0)).init(), (0, window.$)(a).on("click", "a.zg-unfollow", function (a) {
            "/collections" === window.location.pathname && (a = (0, window.$)(a.target).attr("href"), /\/collection\/\d+\/followers/.test(a) ? z.xi({
                category: "collection",
                action: "visit_collection_followers",
                label: "collections_my_followed_collections_collection_followers_count"
            }) : z.xi({
                category: "collection",
                action: "click_unfollow_collection",
                label: "collections_my_followed_collections_unfollow_collection"
            }))
        }).on("click",
            ".zm-item-title \x3e a", function () {
                var a = window.location.pathname;
                "/collections" === a ? z.xi({
                    category: "collection",
                    action: "visit_collection",
                    label: "collections_my_followed_collections_collection"
                }) : "/collections/mine" === a && z.xi({
                    category: "collection",
                    action: "visit_collection",
                    label: "collections_my_collection"
                })
            }))
    };
    var UM = function (a) {
        var b = z.L("zh-list-side-head");
        if (b) {
            var c = z.N("zu-entry-focus-button", b);
            c && a.v().g(c, "click", function () {
                (0, z.dG)(c, "favlist", "", ["zg-btn-green", "zg-btn-white"])
            });
            a.kg = z.L("zh-list-operation-menu");
            a.kg && a.v().g(a.kg, "click", a.kB)
        }
        (b = z.L("zh-single-answer-author-info")) && (new nM(b)).init();
        (b = z.L("zh-list-create-new-list")) && a.v().g(b, "click", a.NV);
        (b = z.L("zh-fav-list-side-bar-creator")) && (new nM(b)).init();
        (0, window.$)("#zh-fav-list-side-bar-report").on("click", function () {
            (new z.pB({
                type: "favlist",
                id: a.it
            })).render()
        })
    };
    var VM = function (a) {
        z.X.confirm("删除收藏夹", "你确定要删除这个收藏夹吗？", function (a) {
            a && (a = new z.Fr, a.add("favlist_id", this.it), a.add("_xsrf", (new z.Xi(window.document)).get("_xsrf")), (new LM).post(IL(a), "/collection/delete"))
        }, a)
    };
    var WM = function (a) {
        a.Ga || (a.Ga = new z.JB(a.it, "favlist"), a.L(a.Ga), a.v().g(a.Ga, "click!", function (a) {
            "comment" === a.namespace && (a.yc.fill("category", this.lh).fill("label", "collection"), a.yc.action = a.yc.action.replace("favlist", "collection"))
        }), z.NB(a.Ga, a.xt, (0, window.$)(".toggle-comment", a.xt)[0]))
    };
    var XM = function (a) {
        a.GK = new z.Z(!0);
        a.v().g(a.GK, "complete", function () {
            window.location.reload()
        });
        a.GK.ajax("/collection/update", "favlist_id\x3d" + a.it + "\x26is_public\x3d1")
    };
    var YM = function (a, b) {
        z.G.call(this);
        this.pa = a;
        this.yb = b;
        this.data = z.S
    };
    var ZM = function (a) {
        a.Qt && a.Qt.ia(a.data.qb ? "撤消匿名身份" : "使用匿名身份")
    };
    var $M = function (a, b) {
        return a ? b ? new z.eA(a) : new z.lz(a) : new z.pz
    };
    var aN = function (a) {
        a.sk.innerHTML = "";
        z.Q(a.sk, !1);
        a.Jo = !1;
        a.hm.Jp("问题重定向");
        z.sp("/question/unredirect", null, "POST", "qid\x3d" + a.pa + "\x26rqid\x3d" + a.tu)
    };
    var bN = function (a, b) {
        z.R.call(this);
        this.kx = this.Zp = null;
        this.FI = b;
        this.content = a;
        this.type = b.type;
        this.je = b.je;
        this.title = this.type === cN ? "一句话介绍" : "在 " + b.Li + " 话题下的话题经验"
    };
    var dN = function (a) {
        a.Wi.focus();
        z.ws(a.Wi.get()[0], a.Wi.val().length)
    };
    var eN = function (a, b) {
        a.Zp = b;
        (0, window.$)(a.h).attr("class", "zm-bio-item " + a.Zp)
    };
    var fN = function (a, b) {
        z.G.call(this);
        this.aR = b;
        this.xE = a;
        this.items = [];
        this.oH = !1;
        this.vV = z.jm.selected_bio
    };
    var gN = function () {
        hN || (hN = new fN(z.lm, !1));
        return hN
    };
    var iN = function (a) {
        var b = z.S.bb;
        a.oH = !0;
        a.kJ = b
    };
    var jN = function (a) {
        window.$.get("/question/" + a.kJ + "/bios").then(function (b) {
            a.jS = !0;
            a.xE = b.msg;
            kN(a)
        })
    };
    var kN = function (a) {
        if (!a.jS && a.oH) jN(a); else {
            if (!a.sa) {
                a.sa = new z.V;
                a.sa.Na("编辑话题经验");
                z.Lj(a.sa, null);
                a.sa.Op(!0);
                var b = a.sa.S();
                z.W.add(a.sa.m(), "bio-editor-modal");
                b.innerHTML = '\x3cdiv class\x3d"bio-editor-modal-title"\x3e可以填写你从事的职业、取得的资格或过往的经历，让你在这个问题下的回答更具说服力。\x3c/div\x3e';
                a.render(b)
            }
            a.sa.G(!0)
        }
    };
    var lN = function (a, b, c) {
        b = new bN(b, c);
        b.render(a.dR);
        c.je === a.vV && b.Kc(!0);
        b.Db(a);
        a.items.push(b)
    };
    var mN = function (a) {
        var b = a.getSelection();
        b && window.$.post("/question/" + a.kJ + "/bio", {bio: b.getToken()}).then(function () {
            a.na({
                action: "edit_topic_experience_success",
                attributes: {topic_experience_topic_id: b.getToken(), topic_experience_topic_content: b.Ua()}
            })
        })
    };
    var nN = function (a, b) {
        z.R.call(this);
        this.hb = a;
        this.as = FL(this.hb);
        this.isContentEditable = this.hb.isContentEditable();
        this.nW = 30;
        this.Qd = new z.td(1E3 * this.nW);
        this.pa = z.S ? z.S.pa : 0;
        this.OG = b || !1
    };
    var oN = function (a) {
        pN(a, "保存中…");
        a.nx();
        a.eR()
    };
    var qN = function (a) {
        a.Qd.stop()
    };
    var rN = function (a) {
        a.JB && ((0, window.clearInterval)(a.JB), a.JB = null)
    };
    var sN = function (a, b) {
        var c = z.vi(b || (0, z.I)());
        /^\d/.test(c) && (c = " " + c);
        pN(a, "已存于" + c)
    };
    var pN = function (a, b, c) {
        var d = (0, window.$)(a.CG);
        c ? d.addClass("warning") : d.removeClass("warning");
        z.Q(a.Ms, !0);
        z.mf(a.CG, b)
    };
    var tN = function (a) {
        uN(a);
        var b = {qid: a.pa, timestamp: (0, z.I)()};
        (0, window.setTimeout)(function () {
            window.$.post("/draft/delete", b)
        }, 500)
    };
    var uN = function (a) {
        a.mH && (a.mH.abort(), a.Kr());
        rN(a);
        z.Q(a.Ms, !1);
        a.dispatchEvent("clearContent")
    };
    var vN = function (a, b) {
        z.R.call(this);
        this.sV = (0, window.$)(a).children();
        this.contents = [];
        this.Hg = 0;
        this.Pr = [];
        this.className = b || "";
        this.oD = !1;
        this.delay = 0;
        this.dr = null;
        z.y(this.sV, function (a) {
            a = (0, window.$)(a).addClass("carousel-inner-content");
            this.contents.push(a);
            this.Pr.push((0, window.$)("\x3cdiv\x3e\x3c/div\x3e").addClass("carousel-dot"))
        }, this)
    };
    var wN = function (a, b) {
        if (0 > b || b >= a.contents.length) return !1;
        a.dr && ((0, window.clearTimeout)(a.dr), a.dr = null);
        a.Pr[a.Hg].removeClass("carousel-dot-selected");
        a.contents[a.Hg].hide();
        a.Pr[b].addClass("carousel-dot-selected");
        a.contents[b].show();
        a.Hg = b;
        xN(a);
        return !0
    };
    var xN = function (a) {
        var b = a.Hg;
        a.oD && (a.dr = (0, window.setTimeout)(function () {
            b === a.Hg && (b === a.contents.length - 1 ? wN(a, 0) : a.next())
        }, a.delay))
    };
    var yN = function () {
        function a() {
            function a() {
                return new window.Promise(function (a) {
                    w.onAnimationEnd(function () {
                        a()
                    }, 400)
                })
            }

            function b(a) {
                return z.ob(a, function (a, b) {
                    return a.then(b)
                }, window.Promise.resolve())
            }

            if (!d) {
                d = !0;
                var c = (0, window.$)("#copyright-demo-region1"), f = (0, window.$)("#copyright-demo-region2"),
                    n = (0, window.$)("#copyright-demo-region3"), r = (0, window.$)("#copyright-demo-region4"),
                    w = (0, window.$)("#copyright-demo-indicator");
                (0, window.$)(".frame2-region").removeClass("copyright-demo-region-selected");
                b([function () {
                    w.show().addClass("indicator-move1");
                    c.addClass("copyright-demo-region1-select-animation");
                    return a()
                }, function () {
                    c.removeClass("copyright-demo-region1-select-animation").addClass("copyright-demo-region-selected");
                    w.removeClass("indicator-move1").addClass("indicator-move2");
                    return a()
                }, function () {
                    f.addClass("copyright-demo-region-selected");
                    w.removeClass("indicator-move2").addClass("indicator-move3");
                    return a()
                }, function () {
                    n.addClass("copyright-demo-region-selected");
                    w.removeClass("indicator-move3").addClass("indicator-move4");
                    return a()
                }]).then(function () {
                    r.addClass("copyright-demo-region-selected");
                    w.removeClass("indicator-move4");
                    d = !1
                })
            }
        }

        function b() {
            var a = (0, window.$)(".copyright-demo-pointer"), b = (0, window.$)(".copyright-demo-noty");
            a.css("opacity", "0");
            b.css("opacity", "0");
            a.addClass("copyright-demo-pointer-show-animation");
            b.addClass("copyright-demo-noty-show-animation");
            (0, window.setTimeout)(function () {
                a.removeClass("copyright-demo-pointer-show-animation");
                b.removeClass("copyright-demo-noty-show-animation");
                a.css("opacity",
                    "1");
                b.css("opacity", "1")
            }, 1100)
        }

        var c = z.GC(z.T[2]).addClass("copyright-demo-noty"), d = !1,
            f = (0, window.$)((0, window.$)("#copyright-demo-template").html());
        (0, window.$)("#copyright-demo-frame3", f).append(c);
        c = new vN(f, "copyright-demo");
        c.g("rightShow", function (c) {
            1 === c.offset ? a() : 2 === c.offset && b()
        });
        f = new z.V;
        c.render(f.S());
        f.Na("禁止转载演示");
        z.Tj(f, 462);
        return {dialog: f, GD: c}
    };
    var zN = function () {
        var a = (0, window.$)('\x3cdiv id\x3d"copyright-demo-helper" style\x3d"display: none; position: absolute;"\x3e\x3cp class\x3d"copyright-demo-helper-intro"\x3e 勾选后，我们将限制其他用户的复制操作，并给予提醒 \x3c/p\x3e\x3cp class\x3d"copyright-demo-helper-btn"\x3e 查看演示 \x3c/p\x3e\x3c/div\x3e'),
            b = new z.xx({I: "data-copyright-demo"});
        b.Sp = 250;
        b.no = 750;
        b.sh(a[0]);
        b.g("trigger", function (a) {
            b.setPosition(new z.ex(a.anchor, 4))
        });
        var c = null;
        (0, window.$)(".copyright-demo-helper-btn").click(function () {
            c || (c = yN());
            b.G(!1);
            wN(c.GD, 0);
            var a = c.GD;
            a.oD = !0;
            a.delay = 3E3;
            xN(a);
            c.dialog.G(!0)
        })
    };
    var AN = function (a, b) {
        z.Hv.call(this, !1);
        this.qb = !!a;
        this.hE = !0;
        this.PK = b;
        this.Vb = "\x26nbsp";
        this.jw = z.jm || z.T[4];
        this.cv = this.mx = this.pF = this.enabled = !0;
        if (z.T.qe || !z.T.Fb()) this.Dz = '\x3cspan style\x3d"font-style: normal;color: #999;"\x3e写回答…\x3c/span\x3e'
    };
    var BN = function (a, b) {
        b ? CN(a, b, "添加话题经验，提升回答可信度") : CN(a, "", "填写话题经验，提升回答可信度")
    };
    var DN = function (a, b) {
        b ? CN(a, b, "修改话题经验") : CN(a, "", "填写话题经验，提升回答可信度")
    };
    var CN = function (a, b, c) {
        b = void 0 === b ? "" : b;
        c = void 0 === c ? "修改" : c;
        a.Ts && (b && (b = z.Na("，" + fM(b.trim()))), a.xD.innerHTML = b + '\x3ca name\x3d"edit_bio" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e' + c + "\x3c/a\x3e")
    };
    var EN = function (a) {
        if (z.S.Jd && !window.localStorage.getItem("no_more_org_question_rule")) (0, window.$)(a.m()).one("focus", ".zm-editable-editor-field-element", function () {
            z.X({
                title: "机构提问规则",
                content: '\n          \x3cdiv class\x3d"zh-question-answer-form-orgRule"\x3e\n            \x3cp\x3e这是一个「机构提问」，请在回答前了解以下规则：\x3c/p\x3e\n            \x3col\x3e\n              \x3cli\x3e提问机构如需使用你的回答，由提问机构联系你，共同商定确认使用条件。\x3c/li\x3e\n              \x3cli\x3e「机构提问」下的回答，站内传播与社区公共提问下的回答有所区别。\x3c/li\x3e\n              \x3cli\x3e提问机构可能「隐藏」回答，被「隐藏」回答不在社区内流通。\x3c/li\x3e\n            \x3c/ol\x3e\n            \x3ca class\x3d"knowMore" href\x3d"/org-intro#org-question" target\x3d"_blank"\x3e了解更多\x3c/a\x3e\n          \x3c/div\x3e',
                modal: !0,
                ha: !0,
                buttons: {yes: "知道了", cancel: "不再显示"}
            }, function (a) {
                a || window.localStorage.setItem("no_more_org_question_rule", !0)
            })
        })
    };
    var FN = function (a, b, c) {
        b = (0, window.$)(b);
        (0, window.$)(a.qc).hide();
        c = (0, window.$)(c);
        (0, window.$)(a.pj).append(b).after(c);
        (z.Uj || a.Hd) && b.addClass("activate-mask-tip-answer-simple");
        a = z.Jq(z.p, !0, "#draft");
        b.on("click", a);
        c.on("click", a)
    };
    var GN = function (a) {
        a.Ik ? a.Ik.show() : (a.Ik = (0, window.$)('\x3cdiv class\x3d"question-tip-box-bottom"\x3e确定想要回答你自己提出的问题吗？\x3cbr\x3e如果需要对问题做出更多的解释和说明，请编辑问题描述。 如果需要对其他回答做出回应，请在相应回答下通过评论发布。\x3cbr\x3e\x3cdiv class\x3d"zg-clear"\x3e\x3ca href\x3d"javascript:" class\x3d"zg-right zg-btn zg-btn-blue" name\x3d"confirm"\x3e确定\x3c/a\x3e\x3ca href\x3d"javascript:" class\x3d"zg-right zg-link-gray " name\x3d"cancel"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'), a.Ik.on("click", '[name\x3d"cancel"]', function () {
            a.Ik.hide()
        }).on("click",
            '[name\x3d"confirm"]', function () {
                a.Ik.hide();
                (0, window.$)(a.$b).hide();
                a.Wa(!0);
                a.rg()
            }), (0, window.$)(a.$b).after(a.Ik))
    };
    var HN = function (a) {
        var b = (0, window.$)("input[name\x3danno-checkbox]", a.qc)[0], c = (0, window.$)("label", a.qc)[0];
        a.an = b;
        z.S.qb && (a.an.checked = !0);
        z.zo(c, !0)
    };
    var IN = function (a) {
        var b = gN();
        a.kw || (iN(b), a.v().g(b, "change", a.Xz).g(b, "trackRequested", function (a) {
            a.label = "add_answer_box_edit_topic_experience";
            z.xi(a)
        }));
        a.kw = !0;
        kN(b)
    };
    var JN = function (a, b) {
        z.R.call(this);
        this.yU = a;
        this.hD = b
    };
    var KN = function (a, b, c, d, f) {
        z.Hv.call(this, d, b, c);
        this.pa = a;
        this.VG = this.Dp = !1;
        this.TT = f
    };
    var LN = function (a, b) {
        a.VG = b
    };
    var MN = function () {
        var a = z.O("select", {style: "1px solid #999 "}), b = z.O("option", {value: "none"}, "请选择一个修改理由...");
        a.appendChild(b);
        z.y(NN, function (b, d) {
            var f = z.O("option", {value: b.value}, d + 1 + ". " + b.label);
            a.appendChild(f)
        });
        return a
    };
    var ON = function (a, b, c) {
        a.KH.innerHTML = b;
        z.W.set(a.KH, c || "zg-error-text")
    };
    var PN = function () {
        z.R.call(this)
    };
    var QN = function () {
        z.V.call(this);
        this.Bf(!0);
        this.G(!0)
    };
    var RN = function (a, b) {
        a.Na("提问无人问津？");
        a.ia(b);
        a.ha();
        (0, window.$)(".js-gonext", a.h).on("click", function () {
            var b = (0, window.$)(this).parents('[class^\x3d"view"]').attr("class");
            "view-starting" === b ? (a.Na("第一条"), SN(a, "firsttip")) : "view-firsttip" === b ? (a.Na("第二条"), SN(a, "secondtip")) : "view-secondtip" === b ? (a.Na("第三条"), SN(a, "thirdtip")) : "view-thirdtip" === b && a.G(!1)
        })
    };
    var TN = function (a, b) {
        a.Na("邀请回答小窍门");
        a.ia(b);
        a.ha();
        (0, window.$)(".js-close", a.h).on("click", function () {
            a.G(!1)
        })
    };
    var SN = function (a, b) {
        (0, window.$)('[class^\x3d"view"]', a.h).hide();
        (0, window.$)(".view-" + b, a.h).show()
    };
    var UN = function (a, b) {
        z.R.call(this);
        this.xU = a;
        this.sp = b;
        this.aa = null;
        this.ob = !1;
        this.Vl = null;
        this.Uj = [];
        this.uc = !1;
        this.WR = "loading";
        this.LG = "zg-btn-white"
    };
    var VN = function (a) {
        var b = a.WR;
        a.W.addClass(b).html(WN);
        window.$.get("/node/QuestionInvitePanelV2", {params: {question_id: a.xU}}).done(function (c) {
            a.uc = !0;
            a.W.removeClass(b);
            c = (0, window.$)(c);
            a.W.replaceWith(c);
            a.h = c[0];
            c.toggle(a.Yc());
            a.W = c;
            XN(a)
        })
    };
    var XN = function (a) {
        var b = a.m();
        a.v().g(z.Cp, "anon_change", a.AS);
        (0, window.$)(".cancel-anon", b).click(window.$.proxy(a.kP, a));
        if (!(0, window.$)(".error-message", b).length) {
            var c = z.N("search-input", b), d = z.N("invite-title", b);
            a.My(c, d);
            a.Bv = (0, window.$)(".suggest-persons", b);
            a.Bv.on("click", "button", window.$.proxy(a.WF, a));
            (0, window.$)(".js-more", b).one("click", function () {
                (0, window.$)(".person", this.Bv).show();
                (0, window.$)(this).remove()
            });
            a.Gq = (0, window.$)(".invite-status", b);
            a.Gq.on("click", "button",
                window.$.proxy(a.lP, a)).on("mouseenter mouseleave", ".invited-shortlist", function (a) {
                (0, window.$)(".invited-hovercard", this).toggleClass("in", "mouseenter" === a.type)
            });
            YN(a)
        }
    };
    var ZN = function (a, b) {
        var c = z.S;
        a.dispatchEvent(new z.jB("click!invitation", {
            category: "invitation",
            action: "ask_to_answer",
            label: b,
            value: c.SG ? null : c.te
        }))
    };
    var $N = function (a, b) {
        return !!z.qb(a.Uj, function (a) {
            return a.id === b
        })
    };
    var aO = function (a, b, c) {
        var d = (0, window.$)(".invite-button", a.Bv).filter(function () {
            return this.getAttribute("data-uid") === b
        }).get(0);
        d && bO(a, d, c)
    };
    var bO = function (a, b, c) {
        a = a.LG;
        c ? (z.W.add(b, a), z.mf(b, "收回邀请")) : (z.W.remove(b, a), z.mf(b, "邀请回答"))
    };
    var YN = function (a) {
        a.Uj = window.$.map((0, window.$)(".invited-fulllist", a.Gq).children(), a.RI)
    };
    var cO = function (a, b) {
        a.Uj && eM(a.Uj, function (a) {
            return a.id === b
        }) && dO(a)
    };
    var dO = function (a) {
        var b = a.Uj, c = {
            each: z.y, fullList: function () {
                return (0, z.Rv)(eO, {persons: b, helper: c})
            }
        };
        b.length ? a.Gq.html((0, z.Rv)(fO, {persons: b, helper: c, maxInvites: 15})) : a.Gq.html("你可以通过邀请其他用户来更快获得回答")
    };
    var gO = function (a) {
        z.R.call(this);
        this.data = a;
        this.Ga = null
    };
    var hO = function (a) {
        var b = z.N("panel-container", a.h);
        b && (a.bm = new PN, a.L(a.bm), a.bm.w(b), a.Ga = new z.JB(a.data.pa, "question"), a.bm.L(a.Ga), z.NB(a.Ga, a.bm.m(), (0, window.$)(".toggle-comment", a.h)[0]), a.vo(), a.Sj(), iO(a))
    };
    var iO = function (a) {
        if ("normal" === z.S.status) {
            var b = new UN(a.data.pa, a.data.bb);
            b.render(a.bm.m());
            var c = (0, window.$)('a[name\x3d"invite"]', a.m());
            a.v().g(b, ["expand", "collapse"], function (a) {
                c.text("expand" === a.type ? "收起邀请" : "邀请回答")
            });
            a.bm.L(b);
            z.S.QV && (b.Lc(!0), a.dispatchEvent(new z.jB("show!invitation", {
                category: "invitation",
                action: "ask_to_answer_card",
                label: ""
            })));
            a.dz = b
        }
    };
    var jO = function (a, b) {
        var c = a.sM;
        c || (c = new z.Gz, c.w(z.L("zh-question-admin-menu")), z.bh(c, function (a) {
            a.Ea(a.m().getAttribute("data-action"))
        }), a.v().g(c, "action", function (a) {
            a = this.RC = a.target;
            (new z.mB).open(a.m(), {id: this.data.pa, type: "question"}, (0, z.q)(this.KN, this))
        }), a.sM = c);
        c.V() ? c.G(!1) : z.Hz(c, new z.cz(b, 1, !0), 0, new z.pg(5, 0, 5, 0))
    };
    var kO = function (a) {
        z.X.confirm("删除问题", "你确定要删除这个问题吗？相关的评论也将被删除。", function (a) {
            if (a) {
                var c = new z.Z(!0);
                z.F(c, "complete", function () {
                    var a = z.Rn(c);
                    a && !a.r ? window.location.href = "/" : z.X.message(a.msg)
                });
                c.ajax("/question/delete/" + this.data.pa)
            }
        }, a)
    };
    var lO = function (a) {
        z.X.confirm("锁定问题", "锁定后该问题将无法添加新的回答，你确认要锁定吗？", function (b) {
            b && window.$.post("/question/" + a.data.bb + "/org_lock").then(function (a) {
                a.r ? z.X.message(a.msg) : (z.X.message("操作成功！"), window.location.reload())
            })
        })
    };
    var mO = function (a) {
        z.X.confirm("解除锁定问题", "你确认要解除锁定吗？", function (b) {
            b && window.$.post("/question/" + a.data.bb + "/org_unlock").then(function (a) {
                a.r ? z.X.message(a.msg) : (z.X.message("操作成功！"), window.location.reload())
            })
        })
    };
    var nO = function (a, b, c) {
        z.Hv.call(this, a, b, c)
    };
    var oO = function (a) {
        z.cD.call(this);
        z.Mb(this.options = {}, pO, a || {});
        this.pa = this.options.pa;
        this.Xa = this.options.Xa;
        this.Uw = this.options.Uw;
        this.ob = !0
    };
    var qO = function (a) {
        var b = z.N("zm-item-answer", a.h) || a.h;
        a.Xa = b.getAttribute("data-aid");
        a.kh = "1" === b.getAttribute("data-isowner");
        a.bb = b.getAttribute("data-atoken");
        a.Do = "1" === b.getAttribute("data-deleted");
        a.Nw = Number(b.getAttribute("data-created"));
        b.getAttribute("data-helpful");
        a.vR = "1" === b.getAttribute("data-good");
        a.hE = "1" === b.getAttribute("data-copyable");
        a.pi = "1" === b.getAttribute("data-collapsed");
        a.qb = null
    };
    var rO = function (a) {
        if (!a.se && a.kh && z.S && a.Xa) {
            a.se = new nO(!1, "/answer/content", "content");
            z.Ac(a, a.se);
            a.se.cv = !0;
            a.se.mx = !0;
            a.se.FF = AN.prototype.FF;
            var b = z.N("zm-item-rich-text", a.h);
            GL(a.se, ["id\x3d" + a.pa]);
            a.se.w(b);
            a.v().g(a.se, "shouldUpdateContent", function (a) {
                if (z.na(a.data)) return !1
            });
            a.v().g(a.h, "click", function (a) {
                "suggest_edit" === a.target.name && (this.se.rg(), (0, window.$)(".zh-question-censor-tip", this.h).hide());
                return !0
            })
        }
    };
    var sO = function (a) {
        window.$.post("/answer/unremove", {aid: a.Xa}).then(function () {
            a.Do = !1;
            z.Q(a.h, !0);
            a.Jv = "cancel_delete";
            a.dispatchEvent("change");
            rO(a)
        })
    };
    var tO = function () {
        z.R.call(this);
        this.data = z.S || {};
        this.pa = this.data.pa;
        this.Jo = !1;
        this.Nh = {};
        this.cw = [];
        this.Wq = [];
        this.wi = 0;
        this.fk = z.km && z.km.url_token ? z.km : null;
        this.kx = (0, window.$)("#zh-question-title").data("editable")
    };
    var uO = function (a) {
        z.T.mh && window.$.post("/question/popup", {action: "no_answer", question_token: a.data.bb}, function (a) {
            a && RN(new QN, a)
        })
    };
    var vO = function (a) {
        (0, window.$)(".js-ignore-invite").click(function () {
            (0, window.$)(".question-invited-by").hide();
            window.$.post("/question/askpeople", {qid: a.data.bb, uid: z.T.fg, op: "pass"})
        });
        (0, window.$)(".js-invite-others").click(window.$.proxy(function () {
            var a = (0, window.$)('#zh-question-meta-wrap a[name\x3d"invite"]')[0];
            a && (z.Nr(a, {
                hC: function () {
                    return !1
                }, aw: !0
            }), this.fu.dz.Lc(!0))
        }, a))
    };
    var wO = function (a) {
        "close" === z.S.status || z.S.Eo || (a.Oa = new z.lt(a.data.Lm, a.data.pa), a.Oa.ut = 5, a.Oa.yt = 1, a.Oa.UC = !0, a.Oa.Et = !0, a.Oa.w(z.N("zm-tag-editor", a.h)), a.v().g(a.Oa, ["remove_tag", "add_tag"], function () {
            z.Y.tb("ga_edit_question_topic_changed")
        }), a.v().g(a.Oa, "start_editing", function () {
            z.Y.tb("ga_question_topic_edit_finish_changed")
        }), a.Oa.addEventListener("beforeedit", z.HD({up: !0})))
    };
    var xO = function (a) {
        var b = z.L("zh-question-title");
        z.S.Eo ? b.children[0].appendChild(z.We('\x3ca class\x3d"Button Button--text QuestionPage-titleButton" href\x3d"/question/24501563" target\x3d"_blank" data-tip\x3d"s$t$该问题已被锁定公共编辑"\x3e\x3cspan class\x3d"sprite-global-icon-lock"\x3e\x3c/span\x3e\x3c/a\x3e')) : (a.cd = new KN(a.data.pa, "/question/title", "content", !1, !0), a.cd.DE = !0, a.cd.Hd = !0, a.cd.Dp = !0, LN(a.cd, XL(a.data.mh)), a.cd.w(b), a.v().g(a.cd, "change", function () {
            z.Cp.dispatchEvent("question_title_change");
            window.document.title = this.cd.Ua() + " - 知乎"
        }), a.v().g(a.cd, "click_edit", function () {
            z.Y.tb("ga_question_title_edit_start")
        }), a.v().g(a.cd, "cancel_edit", function () {
            z.Y.tb("ga_question_title_edit_cancel")
        }), a.v().g(a.cd, "save_changed", function () {
            z.Y.tb("ga_question_title_edit_save_changed")
        }), a.v().g(a.cd, "save_unchanged", function () {
            z.Y.tb("ga_question_title_edit_save_unchanged")
        }), a.cd.addEventListener("beforeedit", z.HD({up: !0})))
    };
    var yO = function (a, b) {
        var c = z.L("zh-question-detail");
        if (c) {
            var d = new z.PC({bE: "zm-editable-content"});
            a.v().g(d, "expand", b).g(d, "invalid", b);
            d.w(c)
        }
    };
    var zO = function (a) {
        a.WD && (a.data.sr = +a.WD.innerHTML, z.T.Fb() || (a.data.sr = 0), z.Q(a.Wh, 0 < a.data.sr), a.Xq && z.mf(a.Xq, a.data.te ? a.data.te + " 个回答" : "还没有回答"), a.Gm && z.Q(a.Gm, 1 < a.data.te), z.Q(a.Wh, 0 < a.data.sr))
    };
    var AO = function (a) {
        var b = z.L("zh-question-answer-wrap");
        if (b) {
            var c = !Boolean((0, window.$)(".question-page-pager").length), d = void 0,
                d = c ? new z.Cl({use: ["nodeSource"], Ef: a.data.te > a.data.$T}) : new z.Cl({use: [], Ef: !1});
            a.L(d);
            a.v().g(d, "itemcreated", function (a) {
                d.L(BO(this, a.item))
            });
            d.w(b);
            c && (b = d.ti(), d.use("expandLimit"), "#draft" === window.location.hash && b.done(function () {
                CO(a, a.hb.m());
                a.hb.gg.focus();
                var b = window.getSelection(), c = window.document.createRange();
                c.selectNodeContents(a.hb.gg);
                c.collapse(!1);
                b.removeAllRanges();
                b.addRange(c)
            }))
        }
    };
    var BO = function (a, b, c) {
        var d = new oO({pa: a.pa});
        d.Db(a);
        d.w(b);
        a.Nh[d.Xa] = d;
        a.Wq.push(d.Xa);
        a.v().g(d, "change", a.Wz);
        d.kh && (a.wi = d.Xa, d.WM = z.T, a.v().g(d.se, "change", a.aQ), a.Mh = d);
        d.pi ? d.kh && a.un.appendChild(d.m()) : a.cw.push({added_time: d.Nw, vote: c, aid: d.Xa});
        d.Do && z.Q(d.m(), !1);
        return d
    };
    var DO = function (a) {
        var b = null, c = null, d, f = {suggest: "建议修改", evaluate: "建议修改", close: "关闭"};
        z.gm.Wd || "normal" === z.S.status || (c = "被" + f[z.S.status] + '的问题不允许添加新的回答。\x3ca data-tip\x3d"s$b$为什么部分问题会被「关闭」「建议修改」？" href\x3d"//www.zhihu.com/question/21290061"\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark"\x3e\x3c/i\x3e\x3c/a\x3e');
        a.wi ? (d = a.Nh[a.wi], b = "#answer-" + d.Xa, d = d.Do) : a.fk && (b = "/question/" + z.S.bb + "/answer/" + a.fk.url_token, d = a.fk.is_delete);
        b && (c = d ? '你已经删除了对该问题的回答，如果需要修改，请先 \x3ca href\x3d"javascript:;" name\x3d"cancel_delete"\x3e撤消删除\x3c/a\x3e' :
            '一个问题你只能回答一次，但你可以对 \x3ca href\x3d"' + b + '"\x3e现有的回答\x3c/a\x3e 进行修改');
        !z.T.mh || a.wi || a.fk || (c = '添加回答：\x3ca href\x3d"javascript:;" name\x3d"answer_my_question"\x3e回答自己的提问\x3c/a\x3e');
        a.data.iz && (c = '该问题目前已经被锁定，无法添加新答案。\x3ca href\x3d"/question/19604313" target\x3d"_blank"\x3e问题为什么会被锁定？\x3c/a\x3e');
        c && a.hb.Wa(!1, c)
    };
    var EO = function (a) {
        a.Xq = z.L("zh-question-answer-num");
        a.Yq = z.L("zh-question-answer-wrap");
        a.Wh = z.L("zh-question-collapsed-link");
        a.un = z.L("zh-question-collapsed-wrap");
        a.WD = z.L("zh-question-collapsed-num");
        a.fD = z.L("zh-question-answer-form-wrap");
        a.Ck = z.L("zh-question-notification-summary");
        a.Gm = z.L("zh-answers-filter");
        a.gu = z.L("zh-add-question-sug");
        a.Xq && (a.data.te = +a.Xq.getAttribute("data-num"));
        a.Yq && (a.data.$T = +a.Yq.getAttribute("data-pagesize"));
        a.Wh && a.v().g(a.Wh, "click", a.bW);
        a.gu && a.v().g(a.gu,
            "click", a.TF);
        a.Gm && z.Um && a.v().g(a.Gm, "click", function (a) {
            a.stopPropagation();
            z.W.add(this.Gm, "activated");
            this.v().ya(window.document, "click", function () {
                z.W.remove(this.Gm, "activated")
            })
        })
    };
    var FO = function (a, b) {
        var c = z.L("zh-question-collapsed-switcher");
        b ? (c.name = "collap", a.VD = !0, z.Q(a.un, !0), z.W.add(a.Wh, "zu-question-collap-title-active")) : (a.VD = !1, c.name = "expand", z.Q(a.un, !1), z.W.remove(a.Wh, "zu-question-collap-title-active"))
    };
    var GO = function (a) {
        a.FN = !0;
        var b = a.un, c = window.$.get("/node/QuestionCollapsedAnswerListV2", {params: {question_id: a.data.pa}});
        c.done(function (c) {
            c = z.We(c);
            FO(a, !0);
            z.W.remove(b, "zm-question-collapsed-list-loading");
            b.appendChild(c);
            z.y(z.ef(b), function (b) {
                b !== d && BO(a, b, 99999)
            })
        });
        var d = z.ef(b)[0];
        d && (z.Q(d, !1), c.done(function () {
            z.Q(d, !0)
        }));
        z.Q(b, !0);
        z.W.add(b, "zm-question-collapsed-list-loading")
    };
    var HO = function (a) {
        if (a.fD) {
            a.hb = new AN(a.data.qb, z.T);
            a.L(a.hb);
            a.hb.w(a.fD);
            z.gm.Wd && z.gm.Wd.length ? a.hb.ia(z.gm.Wd[0]) : !z.rm.Ab && z.B && a.hb.ia("\x3cp\x3e\x3c/p\x3e");
            if (!(a.data.iz || a.wi || a.fk && a.fk.url_token)) if (a.data.cn && a.data.cn.length && a.data.cn[3] !== z.T.fg) a.hb.Wa(!1, "只有 " + UL(a.data.cn) + " 能回答此问题"); else if ("normal" === z.S.status || z.gm.Wd) z.T.mh || a.hb.rg();
            a.v().g(a.hb, "change", a.zS);
            a.v().g(a.hb, IO, a.IS);
            a.hb.ready(function () {
                var a = this.Ux();
                a && "writing" === window.location.hash.slice(1) && a.execCommand("toggleFullScreen")
            })
        }
    };
    var JO = function (a, b) {
        if (b = b || window.location.hash.slice(1)) {
            var c = b.split("-"), d = c[1];
            "answer" === c[0] && ((c = a.vF(d)) && (c.pi && !a.VD ? CO(a, a.Wh) : CO(a, c.m())), a.fJ = d)
        }
    };
    var CO = function (a, b) {
        if (b) {
            var c = z.Pg(window.document.body).top, d = a.EQ ? z.Hg(a.Ck).height : 0, c = {paddingTop: c + d};
            "number" === window.$.type(c) && (c = {offsetTop: c});
            c.hC = RL;
            z.Nr(b, c);
            z.xr(b);
            a.yj && a.yj.sq()
        }
    };
    var KO = function () {
        tO.call(this);
        this.data = z.S;
        this.pa = this.data.pa
    };
    var LO = function (a) {
        var b = (0, window.$)(".awesome-answer-list").get(0);
        if (b) {
            var c = new z.Cl({use: ["expandLimit"], Ef: !1});
            a.L(c);
            a.v().g(c, "itemcreated", function (a) {
                var b = new z.cD;
                b.w(a.item);
                c.L(b)
            });
            c.w(b)
        }
    };
    var MO = function (a) {
        var b = z.N("zm-item-answer", z.L("zh-question-answer-wrap"));
        if (b) {
            a.yb = new oO({pa: a.pa, FE: !0});
            a.L(a.yb);
            a.yb.w(b);
            b = a.v();
            b.g(a.yb, "change", a.Wz);
            if (a.yb.kh) {
                b.g(z.Cp, "anon_change", function (a) {
                    NO(this, a.qb)
                });
                var c = a.yb.se;
                c && b.g(c, "change", function () {
                    var a = (0, z.ab)(c.Ua()[0]), a = z.We(a);
                    z.Po(a, this.yb.h);
                    this.yb.H();
                    MO(this)
                })
            }
            OO(a);
            a.yb.Vu();
            a.yb.Ga.qD = !1;
            a.yb.sj = !1;
            a.yb.st()
        }
    };
    var NO = function (a, b) {
        var c = (0, window.$)("#js-sidebar-author-info");
        if (!(0, window.$)("a[name\x3dfocus]", c).length) {
            var d = {0: "fullname", 1: "url_token", 2: "avatar_path", 3: "hash", 4: "headline"},
                f = z.ob(z.T, function (a, b, c) {
                    a[d[c]] = b;
                    return a
                }, {}), f = (0, z.Rv)(a.XM, {author: !b && f});
            c.html(f)
        }
    };
    var PO = function () {
        var a = (0, window.$)("#zh-question-answer-collestions");
        a.length && (0, window.$)("a[name\x3dfocus]", a).click(function () {
            (0, z.dG)(this, "favlist")
        })
    };
    var OO = function (a) {
        a.yb ? a.yb.Do ? (a.Lr.innerHTML = a.yb.kh ? '你已经删除了对该问题的回答，如果需要修改，请先 \x3ca href\x3d"javascript:;" name\x3d"cancel_delete"\x3e撤消删除\x3c/a\x3e' : "此答案已经被作者删除", z.Q(a.yb.m(), !1)) : z.Q(a.yb.m(), !0) : a.Lr.innerHTML = "此答案已经被作者删除"
    };
    var QO = function (a, b) {
        this.Ro = this.af = 1;
        this.jm = b || 4;
        this.items = a || [];
        this.MD = [];
        this.Ro = Math.ceil(this.items.length / this.jm)
    };
    var RO = function (a, b, c) {
        b = (b - 1) * a.jm;
        return a.items.slice(b, b + c)
    };
    var SO = function (a) {
        return RO(a, a.af, a.jm)
    };
    var TO = function (a, b) {
        var c = RO(a, a.af + 1, 1)[0];
        if (a.lo() && c) {
            var d = a.remove(b);
            a.remove(c);
            a.items.splice(d, 0, c);
            return c
        }
    };
    var UO = function (a) {
        z.R.apply(this, arguments)
    };
    var VO = function (a) {
        var b = window.$.makeArray((0, window.$)("\x3cdiv\x3e").html(a.pL.html()).children().add(a.$a.children()));
        a.oA = new QO(b, WO);
        a.Hq.on("click", function () {
            XO(a, a.$a.find("." + a.Kx).length)
        })
    };
    var YO = function (a) {
        a.$a.on("click", "[data-follow]", function (b) {
            var c = (0, window.$)(b.target),
                d = {id: c.data("id"), name: c.closest(".topic-item").find("h3 a").text(), ZY: c.data("token")};
            c.hasClass(a.Kx) ? (b = (0, window.$)(b.target).closest(".topic-item"), a.oA.remove(b[0]), 1 === a.$a.find("." + a.Kx).length && (a.Hq.hasClass("disabled") ? a.nb.fadeOut() : (0, window.setTimeout)(function () {
                XO(a, 0)
            })), a.dispatchEvent({type: ZO, data: d})) : c.hasClass(a.FW) && a.dispatchEvent({type: $O, data: d})
        })
    };
    var XO = function (a, b) {
        a.Hq.hasClass("disabled") || (a.oA.random(b) || (a.Hq.addClass("disabled"), a.nb.find(".hidden-topics-plaza").show()), a.$a.html(SO(a.oA)))
    };
    var aP = function (a) {
        z.R.apply(this, arguments)
    };
    var bP = function (a) {
        a.v().g(window, "hashchange", a.hG);
        a.hG({data: !0});
        a.nb.on("click", ".zm-topic-cat-more a", function () {
            var b = a.Gh.find(cP).length;
            window.$.get("/followed_topics", {offset: b, limit: dP - b}, function (b) {
                b.payload.length && (b = b.payload.map(function (b) {
                    return eP(a, b)
                }).join(""), a.Gh.append(b));
                a.Gh.find(".zm-topic-cat-more").remove();
                +(0, window.$)(".topic-feed-title .follow-topics-count").text() > dP && a.Gh.append('\x3cli class\x3d"zm-topic-cat-more js-topic-all"\x3e\x3ca target\x3d"_blank" class\x3d"zg-link-gray" href\x3d"' +
                    (0, window.$)(".topic-feed-title a").attr("href") + '"\x3e查看全部\x3c/a\x3e\x3c/li\x3e')
            })
        })
    };
    var fP = function (a) {
        a.Eq.on("click", "a", function (b) {
            (0, window.$)(b.currentTarget).hasClass("current") || (a.Eq.find("a").removeClass(gP), (0, window.$)(b.currentTarget).addClass(gP), hP(a))
        })
    };
    var iP = function (a, b) {
        var c = a.nb.find(".no-topics"), d = a.nb.find(".topic-feed-title a"), f = d.find("span"), g = +f.text();
        (g += b) ? (d.show(), c.hide()) : (d.hide(), c.show());
        f.html(g);
        a.sR && jP(a, g)
    };
    var jP = function (a, b) {
        a.xv || (a.xv = (0, window.$)('\x3ca href\x3d"#" class\x3d"new-follow-topics"\x3e新关注 \x3cspan\x3e' + b + "\x3c/span\x3e 个话题，点击查看\x3c/a\x3e"), a.xv.insertBefore(".topic-recommend").click(function (a) {
            a.preventDefault();
            window.location.reload()
        }));
        a.xv[b ? "show" : "hide"]().find("span").html(b)
    };
    var kP = function (a, b) {
        return a.filter(function (a, d) {
            return (0, window.$)(d).text() === b
        })
    };
    var lP = function (a) {
        a.eg && (a.removeChild(a.eg), a.eg.H(), a.eg = null);
        var b = a.$a, c = new z.Cl({use: ["autoload"]});
        a.L(c);
        c.use("nodeSource", {
            offset: function () {
                return Number(b.find(".feed-item").last().data("score")) || 0
            }
        });
        c.use("childConstructor", {factory: z.nD}).use("expandLimit");
        c.w(b.get(0));
        a.v().g(c, "next", a.YC);
        a.eg = c
    };
    var hP = function (a, b) {
        var c = a.Eq.find(".current").data("feedType"), c = {params: {topic_id: b, feed_type: c}},
            d = a.$a.data("init");
        window.$.extend(!0, d, c);
        a.$a.attr("data-init", JSON.stringify(d));
        a.$a.empty();
        a.eg.Ho() && lP(a);
        a.eg.Zh();
        a.Az = a.eg.ti()
    };
    var mP = function (a, b, c) {
        a.Bz && "pending" === a.Bz.state() && a.Bz.abort();
        a.Bz = window.$.get("/node/TopicAvatarV2", {params: {topic_id: b, avatar_type: "topic"}}, function (b) {
            if (b && b.r) z.X.message("错误"); else {
                var f = c.data("href");
                a.Tm.find(".js-topic-title-avatar").html(b).attr("href", f);
                a.Tm.find(".js-topic-title-name").text(c.text()).attr("href", f);
                a.Tm.show()
            }
        })
    };
    var eP = function (a, b) {
        a.rK || (a.rK = (0, z.Rv)(nP));
        return a.rK(b)
    };
    var oP = function () {
        z.R.call(this)
    };
    var pP = function () {
        z.R.call(this);
        this.qV = z.sm.searchKeyword
    };
    var qP = function () {
        var a = (0, window.$)("#js-search-question-form");
        a.length && a.submit(function (b) {
            b.preventDefault();
            b = z.Lv.ba();
            b.show();
            z.Mv(b, (0, window.$)(".title-input", a).val())
        })
    };
    var rP = function (a) {
        var b = (0, window.encodeURIComponent)(a.qV);
        (0, window.$)("ul.list[data-paging]").on("click", ".item a[href!\x3d#]", function (a) {
            a = a.currentTarget;
            a.host && (a = (0, window.$)(a).closest(".item").index() + 1, z.aj.set("s-q", b), z.aj.set("s-i", a), z.aj.set("sid", (0, z.yF)()))
        })
    };
    var sP = function (a) {
        function b(a, b) {
            var h = (0, window.$)(a);
            window.$.each(b(), function (a, b) {
                h.on("click", a, function (a) {
                    d.apply(null, c(b, a))
                })
            })
        }

        function c(a, b) {
            return z.nb(a, function (a) {
                return z.sa(a) ? a(b) : a
            })
        }

        var d = z.Ba(z.U, "search");
        b(".related-topics", function () {
            return {
                "a.avatar-link": ["visit_topic", "search_result_card_topic_avatar"],
                "a.name-link": ["visit_topic", "search_result_card_topic"],
                "a[href$\x3dquestions]": ["visit_topic_questions", "search_result_card_topic"],
                "a[href$\x3dtop-answers]": ["visit_topic_topanswers",
                    "search_result_card_topic"],
                "a[href$\x3dfollowers]": ["visit_topic_followers", "search_result_card_topic"],
                "button.zg-btn-follow": ["click_follow_topic", "search_result_card_topic"],
                "button.zg-btn-unfollow": ["click_unfollow_topic", "search_result_card_topic"],
                'a[href^\x3d"/search?"]': ["click_search_result_more", "search_result_card_topic"]
            }
        });
        b(".related-users", function () {
            return {
                "a.avatar-link": ["visit_people_profile", "search_result_card_people_avatar"],
                "a.name-link": ["visit_people_profile", "search_result_card_people"],
                "a[href$\x3danswers]": ["visit_people_answers", "search_result_card_people"],
                "a[href$\x3dfollowers]": ["visit_people_followers", "search_result_card_people"],
                "a[href$\x3dposts]": ["visit_people_posts", "search_result_card_people"],
                "button.zg-btn-follow": ["click_follow_people", "search_result_card_people"],
                "button.zg-btn-unfollow": ["click_unfollow_people", "search_result_card_people"],
                'a[href^\x3d"/search?"]': ["click_search_result_more", "search_result_card_people"]
            }
        });
        b(window.document.body, function () {
            var a =
                z.Ba(z.Ka, "search_result_%s_more_button");
            return {
                "ul.list.contents + .zu-button-more": ["click_search_result_more", a("all")],
                "ul.list.users + .zu-button-more": ["click_search_result_more", a("user")],
                "ul.list.topics + .zu-button-more": ["click_search_result_more", a("topic")]
            }
        });
        b(".search-tabs", function () {
            var a = z.Ba(z.Ka, "search_result_tab_%s");
            return {
                'a[href^\x3d"/search?type\x3dquestion"]': ["click_search_result_tab", a("all")],
                'a[href^\x3d"/search?type\x3dpeople"]': ["click_search_result_tab", a("user")],
                'a[href^\x3d"/search?type\x3dtopic"]': ["click_search_result_tab", a("topic")]
            }
        });
        b(".secondary-tabs", function () {
            return {
                'a:not([href*\x3d"sort\x3dupvote"])': ["click_search_result_relatrank"],
                'a[href*\x3d"sort\x3dupvote"]': ["click_search_result_agreerank"]
            }
        });
        b(".range-selector", function () {
            var a = z.Ba(z.Ka, "search_result_range_%s");
            return {
                'a[href*\x3d"range\x3d1d"]': ["click_search_result_range", a("1d")],
                'a[href*\x3d"range\x3d1w"]': ["click_search_result_range", a("1w")],
                'a[href*\x3d"range\x3d3m"]': ["click_search_result_range",
                    a("3m")]
            }
        });
        b("ul.list.contents", function () {
            function a() {
                return function (a) {
                    return "search_result_all_list_" + ((0, window.$)(a.target).closest(".item").index() + 1) + ""
                }
            }

            return {
                ".js-title-link": ["visit_question", a()],
                ".js-expand, .summary": ["click_expand", a()],
                ".js-collapse": ["click_collapse_answer", a()],
                "a.zg-follow": ["click_follow_question", a()],
                "a.zg-unfollow": ["click_unfollow_question", a()]
            }
        });
        b("ul.list.users", function () {
            function a(b) {
                return function (a) {
                    return "search_result_user_list_" + ((0, window.$)(a.target).closest(".item").index() +
                        1) + (b || "")
                }
            }

            return {
                "a.avatar-link": ["visit_people_profile", a("_avatar")],
                "a.name-link": ["visit_people_profile", a()],
                "a[href$\x3danswers]": ["visit_people_answers", a()],
                "a[href$\x3dfollowers]": ["visit_people_followers", a()],
                "a[href$\x3dposts]": ["visit_people_posts", a()],
                "button.zg-btn-follow": ["click_follow_people", a()],
                "button.zg-btn-unfollow": ["click_unfollow_people", a()]
            }
        });
        b("ul.list.topics", function () {
            function a(b) {
                return function (a) {
                    return "search_result_topic_list_" + ((0, window.$)(a.target).closest(".item").index() +
                        1) + (b || "")
                }
            }

            return {
                "a.avatar-link": ["visit_topic", a("_avatar")],
                "a.name-link": ["visit_topic", a()],
                "a[href$\x3dquestions]": ["visit_topic_questions", a()],
                "a[href$\x3dfollowers]": ["visit_topic_followers", a()],
                "button.zg-btn-follow": ["click_follow_topic", a()],
                "button.zg-btn-unfollow": ["click_unfollow_topic", a()]
            }
        });
        a.v().g(a, "click!", function (a) {
            "comment" === a.namespace && a.yc.fill("category", "search").fill("label", "search_result_answer")
        })
    };
    var tP = function (a) {
        z.R.apply(this, arguments)
    };
    var uP = function (a) {
        var b = {};
        (0, window.$)("meta", a).each(function () {
            var a = (0, window.$)(this);
            b[a.attr("name")] = a.attr("content")
        });
        return b
    };
    var vP = function (a) {
        tP.apply(this, arguments)
    };
    var wP = function (a) {
        a = (0, window.$)(a.m());
        var b = (0, window.$)(".js-list", a);
        (0, window.$)(".js-hidden-list", a);
        var c = (0, window.$)(".pager", a),
            d = window.$.makeArray((0, window.$)("\x3cdiv\x3e").html((0, window.$)(".js-hidden-list").html()).children().add(b.children())),
            f = new QO(d, 4);
        f.Hc(function (a) {
            c.find(".next").toggleClass("disabled", !a.lo);
            c.find(".prev").toggleClass("disabled", !a.Cs)
        });
        (0, window.$)(".pager", a).on("click", ".next:not(.disabled)", function () {
            f.next();
            b.html(SO(f))
        }).on("click", ".prev:not(.disabled)",
            function () {
                f.prev();
                b.html(SO(f))
            });
        a.on("click", "[data-follow]", function (a) {
            var b = (0, window.$)(a.target).closest(".item"), c = TO(f, b[0]);
            c && b.fadeOut(function () {
                b.replaceWith(c)
            })
        })
    };
    var xP = function (a) {
        (0, window.$)(".js-validate", a.h).click(function () {
            (new z.qq).G(!0)
        })
    };
    var yP = function (a) {
        var b = (0, window.$)(".js-headline-input", a.h), c = (0, window.$)(".js-instruction", a.h);
        b.on("focus", function () {
            return c.slideDown(200)
        });
        b.on("blur", function () {
            return c.slideUp(200)
        });
        b.is(":focus") && b.trigger("focus");
        (0, window.$)(".js-form", a.h).on("submit", function (c) {
            c.preventDefault();
            var f = b.val();
            f && z.uk((0, window.$)(".js-submit-button", a.h), function () {
                return window.$.post("/people/edit", {data: JSON.stringify({headline: f})}, function (b) {
                    if (b && !b.r) z.T.pG = f, (0, window.$)(".avatar-reminder .js-headline").text(f),
                        a.xi(); else {
                        var c = b && b.msg;
                        z.X.message(c ? Array.isArray(c) ? c[0][1] : b.msg : "更新失败")
                    }
                })
            })()
        })
    };
    var zP = function (a) {
        var b = (0, window.$)(".js-choose-image", a.h)[0], c = (0, window.$)(".segment-avatar-wrapper .avatar", a.h),
            d = new z.Uy(z.Vy), f = void 0;
        d.w(b);
        d.g("beforepost", function () {
            f = (0, window.$)('\x3cspan class\x3d"spinner"\x3e\x3c/span\x3e').appendTo(c.parent())
        });
        d.g("success", function () {
            window.$.post("/node/ProfileHeaderV2", {
                method: "save",
                params: {data: {avatar_path: d.getData().url}}
            }, function (b) {
                f.remove();
                b && b.r ? z.X.message("更新失败") : (z.T.rD = d.be("s"), (0, window.$)(".zu-top .avatar").attr({
                    src: d.be("s"),
                    srcset: d.be("xs") + " 2x"
                }), (0, window.$)(".headline-reminder .js-avatar-wrapper .avatar").attr({
                    src: d.be("xs"),
                    srcset: d.be("l") + " 2x"
                }), a.xi())
            })
        })
    };
    var AP = function () {
        z.xC.call(this, "promotion")
    };
    var BP = function (a) {
        for (var b = a.m(), c = [{value: "close", label: "不感兴趣", pf: a.Fc.bind(a)}, {
            value: "agreement",
            label: "知乎广告介绍",
            pf: a.MT
        }], d = new z.qz, c = z.ia(c), f = c.next(); !f.done; f = c.next()) f = f.value, f = new z.lz(f.label, f), d.Fa(f);
        b = (0, window.$)(".AdFeed-menuBtn", b)[0];
        c = new z.xz("ad", d);
        c.bk.Ze = 7;
        c.Ob = z.Fl;
        c.w(b);
        z.Ac(c, a);
        a.v().g(d, "action", function (a) {
            a.target.X().pf()
        })
    };
    var CP = function (a) {
        var b = (0, window.$)(".js-share", a.m()).get(0), c = a.Ng["promotion-url"];
        b && c && z.LC(b, a.entryType, a.tj, c).Db(a)
    };
    var DP = function () {
        z.xC.call(this, "column")
    };
    var EP = function () {
        z.xC.call(this, "roundtable")
    };
    var FP = function (a) {
        z.R.call(this);
        this.HC = a
    };
    var GP = function (a, b) {
        if (a.HC) {
            var c = a.xe = new a.HC, d = z.N("feed-content", b) || z.N("feed-main", b);
            a.L(c);
            a.sj && (c.sj = !0);
            d && c.w(d);
            c.Df && c.Fc && z.wl(c.Df.register("i g", function () {
                return c.Fc()
            }), {group: "操作", name: "不感兴趣"});
            a.v().g(c, "Ignore", function () {
                (0, window.$)(b).slideUp(function () {
                    a.H();
                    (0, window.$)(b).remove()
                })
            })
        }
    };
    var HP = function (a) {
        a = a.getAttribute("data-type");
        return new FP({ac: vP, ad: AP, p: z.jD, a: z.cD, q: z.mD, r: EP, c: DP}[a] || z.R)
    };
    var IP = function (a) {
        JP || (this.On = a, this.Fh = (0, window.$)(this.On.m()), (0, window.setTimeout)((0, z.q)(this.hc, this)))
    };
    var KP = function (a) {
        (0, window.setTimeout)(function () {
            window.$.ajax({
                type: "POST",
                url: "/zreactor/deliver",
                data: JSON.stringify(a),
                contentType: "application/json",
                processData: !1
            })
        }, 50)
    };
    var LP = function (a) {
        var b = MP[a.Fh.data("type")];
        z.Gn(a.Fh[0], function () {
            NP(a, "display")
        }, a.On);
        a.On.v().g(a.On, "expand", function (c) {
            c.target instanceof z.xC && NP(a, "expand_" + b)
        }).g(a.On, "collapse", function (c) {
            c.target instanceof z.xC && NP(a, "collapse_" + b)
        });
        a.Fh.on("click", ".js-noHelp", function () {
            var b = !!(0, window.$)(this).data("revert");
            NP(a, b ? "unhelpful" : "revert_unhelpful");
            (0, window.$)(this).data("revert", !b)
        });
        window.$.each({
            ".actioncard-body .more": "view_all",
            ".actioncard-body .next:not(.disabled)": "next_page",
            ".actioncard-body .prev:not(.disabled)": "prev_page",
            ".actioncard-body .items a": "open_topic",
            ".js-validate, .js-headline-input, .js-choose-image": "open_form",
            '.zg-follow[data-follow^\x3d"t:"], .zg-btn-follow[data-follow^\x3d"t:"]': "follow_topic",
            '.zg-unfollow[data-follow^\x3d"t:"], .zg-btn-unfollow[data-follow^\x3d"t:"]': "unfollow_topic",
            'a.zg-follow:not([data-follow^\x3d"t:"]):not([data-follow^\x3d"m:"])': "follow_" + OP[b],
            'a.zg-unfollow:not([data-follow^\x3d"t:"]):not([data-follow^\x3d"m:"])': "unfollow_" +
                OP[b],
            "a.js-toggleCommentBox": "expand_comments",
            'a[name\x3d"addnew"]': "comment",
            ".feed-content h2 a": "open_" + PP[b],
            "a.ignore:not(.close)": "uninterest",
            "a.revert": "revert_uninterest",
            "a.ignore.close": "confirm_uninterest",
            "button.up.pressed": "vote_up_" + b,
            "button.down.pressed": "vote_down_" + b,
            "button.up:not(.pressed)": "revert_vote_up_" + b,
            "button.down:not(.pressed)": "revert_vote_down_" + b,
            ".js-collect": "collect_answer",
            ".js-thank": "thanks",
            ".js-share": "share",
            ".js-report": "report",
            ".js-write-answer": "open_write_answer",
            "a.answer-date-link": "open_answer"
        }, function (b, d) {
            a.Fh.on("click", b, function () {
                NP(a, d)
            })
        })
    };
    var NP = function (a, b) {
        var c = window.$.extend({}, QP(a), {action_type: b, time: (0, z.I)()});
        c.object_id && ("display" === b ? a.lU(c) : KP(c))
    };
    var QP = function (a) {
        var b = a.yC, c = window.$.extend({}, b.data("meta"), {
            create: a.Fh.find(".source .time").data("timestamp"),
            offset: (0, window.$)(".feed-item").index(a.Fh) + 1
        });
        return {
            mid: z.sm.ga_vars.user_hash,
            object_type: MP[a.Fh.data("type")],
            object_id: b.data("id"),
            object_meta: c,
            context: RP,
            others: ""
        }
    };
    var SP = function (a, b, c) {
        z.pD.call(this, a, b, c);
        this.wH = !0
    };
    var TP = function () {
        z.R.call(this);
        this.Ie = [];
        this.ih = 0;
        this.bH = !!(0, window.$)("#is-topstory").length;
        this.gF = "feed-item-hook"
    };
    var UP = function (a) {
        var b = a.m(), c = a.YN = "/node/" + a.Ad.data("init").nodename, d = a.Xo = new SP(b, c, !0);
        z.xo(b, {module: a.bH ? "TopStoryFeedList" : "HomeFeedList"}, function () {
            return {list: {list_size: d.gb().length, new_item_size: a.ih || 0}}
        });
        a.v().g(d, "itemcreated", function (a) {
            this.Ie.push(a.data.FR)
        }).g(d, "ignore", function (a) {
            VP(this, a.key, a.value)
        });
        d.Ii(a.gF);
        d.Db(a);
        d.init();
        if (a.Ad.data("delayed")) z.Cp.on("guider2:topicselected", a.CT.bind(a))
    };
    var WP = function (a) {
        a.Ad.on("click", ".js-more-similar", function () {
            (0, window.$)(this).parent().slideUp("fast").nextUntil(":not(.hidden)").slideDown("fast")
        })
    };
    var VP = function (a, b, c) {
        a.Ie.forEach(function (a) {
            a.Ng[b] === c && (0, window.$)(a.h).fadeOut(150)
        })
    };
    var XP = function (a) {
        a.Ad.on("click contextmenu", "a", function (a) {
            var c = a.currentTarget.href, d = c.includes("topic/"), c = c.includes("people/");
            if (d || c) if ("click" !== a.type || a.ctrlKey || a.metaKey) c = "", c = "contextmenu" === a.type ? "contextmenu" : a.ctrlKey ? "ctrl_click" : "meta_click", z.xi({
                category: "open_link_in_new_tab",
                action: c,
                label: d ? "topic" : "people"
            })
        })
    };
    var YP = function () {
        z.G.call(this);
        this.Cy = [];
        this.yE = []
    };
    var ZP = function (a) {
        for (var b = [], c = 0; 3 > c; c++) {
            var d = a.yE.shift();
            d && b.push(d)
        }
        3 === b.length ? (a.ot.innerHTML = b.join(""), $P(a)) : aQ(a)
    };
    var $P = function (a) {
        var b = z.Qo("suggest-item", a.ot);
        z.y(b, function (a) {
            this.Cy.push(a.id.split("-")[1])
        }, a)
    };
    var aQ = function (a) {
        a.ot.innerHTML = '\x3cimg class\x3d"bubble-loading" src\x3d"' + z.rm.wB + '/img/noti-loading.gif"\x3e';
        window.$.post("/lookup/suggest_member", {ids: a.Cy.join(",")}).done((0, z.q)(a.MS, a))
    };
    var bQ = function () {
        this.interval = 3E4
    };
    var cQ = function (a) {
        a.Qd || (a.Qd = (0, window.setInterval)((0, z.q)(function () {
            dQ()
        }, a), a.interval))
    };
    var dQ = function () {
        (0, window.$)(".feed-item-hook .time").each(function () {
            (0, window.$)(this).text(z.vi((0, window.$)(this).data("timestamp")))
        })
    };
    var eQ = function () {
        z.R.call(this)
    };
    var fQ = function () {
        var a = (0, window.$)("#js-global-notify");
        if (a.length) {
            var b = new z.bv;
            b.w(a[0]);
            HL(b);
            (0, window.$)(".zu-global-notify-close", a).click(function () {
                var c = (0, window.$)(this).data("id");
                window.$.post("/notice/read", {nid: c});
                b.H();
                a.remove()
            })
        }
    };
    var gQ = function () {
        z.R.call(this)
    };
    var hQ = function () {
        z.R.call(this);
        this.lh = "explore";
        this.CO = "explore_feed"
    };
    var iQ = function (a) {
        var b = (0, window.$)("#js-explore-tab");
        if (b.length) {
            var c = (0, window.$)(".tab-panel", b), d = (0, window.$)(".tab-nav", b), b = function () {
                var b = {"daily-hot": 0, "monthly-hot": 1}[window.location.hash.slice(1)] || 0;
                d.removeClass("active").eq(b).addClass("active");
                b = c.hide().eq(b).show().children("[data-type]");
                if (!b.data("inited")) {
                    b.data("inited", !0);
                    var g = {daily: NM, monthly: PM}[b.data("type")], g = new jQ(g);
                    g.use("expandLimit");
                    a.L(g);
                    g.w(b[0])
                }
            };
            a.v().g(window, "hashchange", b);
            b()
        }
    };
    var kQ = function (a) {
        var b = (0, window.$)("#zh-recommend-list-full\x3e.zh-general-list")[0];
        if (b) {
            var c = new z.Cl;
            c.use("nodeSource");
            c.use("childConstructor", {factory: z.nD});
            a.L(c);
            c.w(b)
        }
    };
    var lQ = function () {
        function a(a, b, c, d, m) {
            c = (0, window.$)(c.target).closest(d, c.delegateTarget).index();
            z.Ai(a, b, m, c + 1)
        }

        var b = z.Ba(a, "view_answer", "visit_answer"), c = z.Ba(a, "view_topic", "visit_topic"),
            d = z.Ba(a, "view_roundtable", "visit_roundtable");
        (0, window.$)("#zh-recommend").on("click", "a.question_link", function (a) {
            b(a, ".feed-item", "editor_recommendations_question_title")
        });
        (0, window.$)('div[data-type\x3d"daily"]').on("click", "a.question_link", function (a) {
            b(a, ".feed-item", "daily_trending_question_title")
        });
        (0, window.$)('div[data-type\x3d"monthly"]').on("click", "a.question_link", function (a) {
            b(a, ".feed-item", "monthly_trending_question_title")
        });
        (0, window.$)("ul.hot-topics").on("click", 'a[href*\x3d"topic"]', function (a) {
            c(a, "li", "explore_sidebar_trending_topics_name")
        });
        (0, window.$)("ul.hot-roundtables").on("click", 'a[href*\x3d"roundtable"]', function (a) {
            d(a, "li", "explore_sidebar_trending_roundtable")
        });
        (0, window.$)("ul.hot-topics").on("click", "img.avatar", function (a) {
            c(a, "li", "explore_sidebar_trending_topics_avatar")
        })
    };
    var jQ = function (a) {
        z.al.call(this, {source: mQ(a), use: ["autoload"]})
    };
    var mQ = function (a) {
        return function () {
            return a((0, window.$)(this.gb()).last().data("offset")).then(function (a) {
                return {results: a}
            })
        }
    };
    var KL = {};
    z.kF.prototype.$A = z.Fn(43, function (a) {
        this.tn = a
    });
    z.jD.prototype.oy = z.Fn(42, function (a) {
        a = (0, window.$)(a.currentTarget);
        var b = a.data();
        z.X.confirm(a.attr("title"), z.dl("确定%s吗？", a.text()), function (a) {
            a && (window.$.post(z.dl("/%s/uninterest", b.type), {id: b.id}), this.dispatchEvent("Ignore"))
        }, this)
    });
    z.jD.prototype.xy = z.Fn(41, function () {
        window.$.post("/post/undo_uninterest", {id: this.jb})
    });
    z.cD.prototype.Fc = z.Fn(40, function () {
        window.$.post("/question/uninterest", {qid: this.Ng["question-id"]});
        this.dispatchEvent("Ignore")
    });
    z.jD.prototype.Fc = z.Fn(39, function (a) {
        window.$.post("/post/uninterest", {id: this.jb});
        a || this.dispatchEvent("Ignore")
    });
    z.mD.prototype.Fc = z.Fn(38, function () {
        window.$.post("/question/uninterest", {qid: this.Ng["question-id"]});
        this.dispatchEvent("Ignore")
    });
    z.Dv.prototype.Ux = z.Fn(36, function () {
        return this.Ma
    });
    z.Ed.prototype.Bl = z.Fn(3, function () {
        return this.EE
    });
    JL.prototype.Nj = !0;
    JL.prototype.Sg = function () {
        return this.BB
    };
    JL.prototype.toString = function () {
        return "Const{" + this.BB + "}"
    };
    var ML = {}, PL = {};
    LL.prototype.Nj = !0;
    LL.prototype.Sg = function () {
        return this.qk
    };
    LL.prototype.Jy = !0;
    LL.prototype.Bl = function () {
        return 1
    };
    var aM = /^[-,."'%_!# a-zA-Z0-9]+$/;
    OL.prototype.Nj = !0;
    OL.prototype.Sg = function () {
        return this.XI
    };
    OL.prototype.Jy = !0;
    OL.prototype.Bl = function () {
        return 1
    };
    var cM = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        bM = {action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0}, dM = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }, ZL = /^[a-zA-Z0-9-]+$/, $L = {EMBED: !0, IFRAME: !0, LINK: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, TEMPLATE: !0};
    z.x(SL, z.lt);
    z.e = SL.prototype;
    z.e.w = function (a) {
        this.h = a;
        this.sg = z.N("zm-tag-editor-labels", this.h);
        this.Ke(!0);
        this.ve();
        this.cc()
    };
    z.e.Mn = function () {
        this.Tc || (this.Tc = z.O("div", "zm-tag-editor-editor", [this.Kn = z.O("div", "zg-section zg-clear"), this.ef = z.O("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.rb = z.L("zh-topic-merge-input"), z.O("a", {
            "class": "zg-mr15 zg-btn-blue",
            href: "#",
            name: "add",
            style: "display:none;"
        }, "添加"), this.jF = z.L("zh-topic-merge-btn")])]), z.bf(this.Tc, this.sg), this.Xg(this.ef))
    };
    z.e.Xg = function (a) {
        this.ca = new z.kt("/topic/autocomplete", this.rb, null, null, a, !0);
        this.ca.vh(!0);
        this.ca.am = this.Le;
        this.ca.Pp(this.tm());
        this.ca.vx = [this.Fe];
        this.v().g(this.ca, "select", this.ap);
        this.v().g(this.ca, "suggestionsupdate", this.Sv)
    };
    z.e.tm = function () {
        return (0, z.q)(function (a) {
            return z.mb(a, function (a) {
                return z.$n(this.data, function (c) {
                    return c[1] !== a[1] && 3 < a.length
                })
            }, this)
        }, this)
    };
    z.e.ap = function () {
        var a = this.ca.Ej().slice(1);
        a && 3 < a.length && (this.tE = a, this.Ue(a[3], a[0]))
    };
    z.e.Ue = function (a, b) {
        var c = this;
        (0, window.setTimeout)(function () {
            c.rb.value = b
        })
    };
    z.e.Ne = function () {
    };
    z.l(gM, z.R);
    gM.prototype.init = function () {
        this.nt = z.L("zh-pm-detail-item-wrap");
        this.v().g(this.nt, "click", this.Qa);
        var a = z.L("zh-pm-editor-form");
        if (a) {
            var b = this.gb()[0], c = void 0,
                c = b ? (0, window.$)(b).data() : z.lh ? {member: z.lh.id, name: z.lh.tF} : {},
                b = this.yu = new z.Ex({lu: !0, Vk: "to_admin" === c.type ? [!0, {Gt: !1}] : !0});
            b.vq = !1;
            b.sh(a);
            b.show();
            z.Gx(b, c.member, c.name);
            c.token && (a = c.type, b.fq = c.token, b.HB = a);
            b.focus()
        }
        hM(this);
        this.vo()
    };
    gM.prototype.vo = function () {
        (0, window.$)("#zh-pm-detail-item-wrap").on("click", "a[name\x3dreport]", function (a) {
            (new z.pB({
                type: "message",
                id: (0, window.$)(a.currentTarget).closest(".zm-pm-item").data("token")
            })).render()
        })
    };
    gM.prototype.gb = function () {
        return z.ef(this.nt)
    };
    gM.prototype.Qa = function (a) {
        var b = z.Er(this.nt, a.target);
        if (b && (a = z.Ho(b, this.uf))) {
            a = (0, window.$)(a).data();
            var c = a.token;
            switch (b.name) {
                case "reply":
                    this.yu.show();
                    var b = this.yu, d = a.type;
                    b.fq = c;
                    b.HB = d;
                    z.Gx(this.yu, a.member, a.name, !1);
                    this.yu.focus();
                    break;
                case "delete":
                    iM(this, c)
            }
        }
    };
    z.l(kM, z.R);
    kM.prototype.init = function () {
        var a = z.L("zh-create-pm");
        a && this.v().g(a, "click", this.LS);
        var a = z.L("zh-pm-item-wrap"), b = new z.Cl;
        b.use("locationSource", {
            param: function (a) {
                return {start: a[a.length - 1].getAttribute("data-token")}
            }
        });
        b.w(a);
        this.v().g(a, "click", this.Qa);
        (0, window.$)(function () {
            (0, window.$)("#zh-change-pm-admin").change(function () {
                var a = (0, window.$)(this).find("option:selected").attr("data-token");
                window.location.href = "self" === a ? "/admin_feedback" : "/admin_feedback/" + a
            })
        });
        (0, window.$)("#zh-pm-item-wrap").on("click", "a[name\x3dreport]",
            function (a) {
                (new z.pB({
                    type: "message",
                    id: (0, window.$)(a.currentTarget).closest(".zm-pm-item").data("token")
                })).render()
            })
    };
    kM.prototype.LS = function () {
        var a = new z.Ex({lu: !0});
        a.show();
        z.Gx(a, -1);
        z.Va(window.location.pathname, "admin_inbox") ? a.Eu("admin") : a.Eu((0, window.$)("#zh-change-pm-admin option:selected").attr("data-token"))
    };
    kM.prototype.Qa = function (a) {
        var b = z.Er(this.NY, a.target);
        if (b) {
            a = b.name;
            b = z.Ho(b, this.uf);
            if (!b || !a) return !0;
            var c = (0, window.$)(b).data(), d = c.member, f = c.name;
            switch (a) {
                case "reply":
                    a = !0;
                    "to_admin" === c.type && (a = [!0, {Gt: !1}]);
                    z.Jq((0, z.q)(function () {
                        var a = new z.Ex({lu: !0, Vk: !1});
                        a.show();
                        var b = c.type;
                        a.fq = c.token;
                        a.HB = b;
                        z.Gx(a, d, f, !1);
                        a.pd.focus()
                    }, this), a)();
                    break;
                case "delete":
                    var g = b.getAttribute("data-token");
                    z.X.confirm("删除私信会话", "你确定要删除与 " + f + "的所有会话吗？", function (a) {
                        a && lM(g)
                    }, this);
                    break;
                case "edit":
                    z.vr(this.$c,
                        this.Eh), this.Km = -1
            }
        }
    };
    z.x(mM, z.pD);
    mM.prototype.init = function (a) {
        mM.o.init.call(this, a);
        this.cc(this.h)
    };
    mM.prototype.dC = function (a) {
        this.dC = a
    };
    mM.prototype.cc = function (a) {
        if (this.dC) {
            var b = new z.kF, c = this.IO;
            b.Mx = this.Ix;
            b.Lx = c || b.Lx;
            this.tn && b.$A(this.tn);
            b.w(a)
        }
    };
    mM.prototype.$A = function (a) {
        this.tn = a
    };
    z.x(nM, z.Xj);
    nM.prototype.init = function () {
        this.v().g(this.h, "click", this.cp)
    };
    nM.prototype.cp = function (a) {
        a = z.Er(this.h, a.target);
        "focus" === (a && a.name) && (0, z.dG)(a, this.Ix, null, this.HO, {
            follow_text: this.text[0],
            unfollow_text: this.text[1]
        })
    };
    z.x(oM, z.Xj);
    z.e = oM.prototype;
    z.e.w = function (a) {
        this.element = a;
        var b = (0, window.$)("\x3cul\x3e");
        this.vK = (0, window.$)("\x3cli\x3e");
        b.append(this.vK);
        (0, window.$)(a).append(b);
        this.wK || (this.wK = !0, this.SB = new z.Z(!0), this.v().ya(this.SB, "success", this.SS), this.SB.ajax(this.url, null, "POST"))
    };
    z.e.SS = function () {
        var a = z.Rn(this.SB);
        a && (a && a.r ? z.X.message(a.msg) : (pM(this, this.vK, a.msg), this.wK = !1, this.C()))
    };
    z.e.C = function () {
        this.v().g(this.element, "click", this.cp)
    };
    z.e.cp = function (a) {
        var b = (a = a.target) ? a.name : "";
        if (b) switch (b) {
            case "load":
            case "loadmore":
                this.zz(a);
                break;
            case "topic":
                window.location.href = a.href
        }
    };
    z.e.zz = function (a) {
        if (!this.Qo) {
            var b = a.getAttribute("data-token"), c = a.getAttribute("data-parent");
            this.Qo = !0;
            this.ak = new z.Z(!0);
            this.v().ya(this.ak, "success", this.Sq);
            this.WA = a.parentNode;
            this.WA.innerHTML = '\x3cspan class\x3d"zg-gray"\x3e加载中...\x3c/a\x3e';
            this.ak.ajax(this.url + "?child\x3d" + b + "\x26parent\x3d" + c, null, "POST")
        }
    };
    z.e.Sq = function () {
        var a = z.Rn(this.ak);
        if (a) if (a && a.r) z.X.message(a.msg); else if (a = a.msg, a[1]) {
            (0, window.$)(this.WA).hide();
            for (var b = (0, window.$)(this.WA.parentNode), c = 0; c < a[1].length; c++) {
                var d = a[1][c], f = (0, window.$)("\x3cli\x3e").addClass("zm-topic-organize-item");
                "topic" !== d[0][0] && f.addClass("zm-topic-organize-loadmore");
                b.append(f);
                pM(this, f, d)
            }
            this.Qo = !1
        }
    };
    z.x(qM, z.Dv);
    qM.prototype.jh = function (a) {
        z.nh[0][0] === a ? this.Ki() : qM.o.jh.apply(this, arguments)
    };
    qM.prototype.ZC = function (a) {
        if (a = z.Rn(a.target)) a.r ? z.X.message(a.msg) : a.msg && (window.location.href = a.msg)
    };
    z.x(rM, z.R);
    z.e = rM.prototype;
    z.e.init = function () {
        z.gG.L(this);
        this.w(window.document.body)
    };
    z.e.C = function () {
        rM.o.C.call(this);
        xM(this);
        var a = z.L("zh-topic-top-answerer");
        a && (new nM(a, "people", ["zg-follow", "zg-unfollow"])).init();
        if (a = z.L("zh-topic-direct-question-list")) a = new mM(a, null, "question", null, !0), a.Ii("question-item"), a.init();
        if (!z.T.Jd) {
            if (a = z.L("zh-topic-title")) this.cd = new qM(!1, "/topic/update", "title"), GL(this.cd, ["tid\x3d" + this.Gf]), this.cd.addEventListener("beforeedit", z.HD({lq: !0})), this.cd.w(a), (0, window.$)(a).on("click", ".js-pin", function () {
                var a = (0, window.$)(this), c =
                    a.attr("data-action");
                window.$.post(c, {tid: z.nh[0][3]}).done(function (c) {
                    if (!c) return z.X.message("网络异常");
                    if (c.r) return z.X.message(c.msg);
                    c = a.hasClass("pin") ? '\x3ca href\x3d"javascript:;" data-action\x3d"/pin-topic/remove" class\x3d"js-pin zg-gray unpin topic-hover-content"\x3e\x3ci class\x3d"z-icon-unpin"\x3e\x3c/i\x3e取消常去话题\x3c/a\x3e' : '\x3ca href\x3d"javascript:;" data-action\x3d"/pin-topic/add" class\x3d"js-pin zg-gray pin topic-hover-content"\x3e\x3ci class\x3d"z-icon-pin"\x3e\x3c/i\x3e设为常去话题\x3c/a\x3e';
                    a.replaceWith(c)
                })
            });
            if (a = z.L("zh-topic-desc")) (0, window.$)(a).find(".zm-editable-content").data("editable-maxlength"), this.ml = new z.Hv(!0, "/topic/update", "description"), this.ml.Vb = '\x3ca href\x3d"javascript:;" name\x3d"edit"\x3e添加话题描述\x3c/a\x3e\x3c/div\x3e', GL(this.ml, ["tid\x3d" + this.Gf]), this.ml.ww = !1, this.ml.LK = !1, this.ml.addEventListener("beforeedit", z.HD({lq: !0})), this.ml.w(a);
            if (a = z.L("zh-topic-faq")) this.Dx = new z.Hv(!0, "/topic/" + (0, window.encodeURIComponent)(z.nh[0][1]) + "/faq", "content"), this.Dx.Vb =
                '\x3cdiv class\x3d"zm-topic-faq-container"\x3e\x3cdiv class\x3d"zg-gray-normal"\x3e常见问题是该话题下经常会提到的问题的整理，以便后来者查阅（\x3ca href\x3d"/question/20388061" class\x3d"zg-link-litblue"\x3e如何创建？\x3c/a\x3e）\x3c/div\x3e\x3ca href\x3d"javascript:;" name\x3d"edit" class\x3d"zg-link-litblue"\x3e\x3cspan class\x3d"zg-blue-edit"\x3e\x3c/span\x3e为「' + z.nh[0][0] + "」添加常见问题\x3c/a\x3e\x3c/div\x3e", this.Dx.ww = !1, this.Dx.w(a);
            CM(this)
        }
        DM(this);
        wM(this);
        zM(this);
        AM();
        BM(this);
        uM(this);
        tM();
        (a = z.N("zm-topic-feed-container")) &&
        (new nM(a, "question", ["zg-follow", "zg-unfollow"])).init();
        (a = z.L("zh-topic-side-children-list")) && (new nM(a, "topic", ["zg-follow", "zg-unfollow"])).init();
        GM();
        (0, window.$)(".js-may-disable").click(z.Jq(z.p, !0));
        sM();
        HM(this);
        IM(this)
    };
    z.e.aT = function () {
        this.Dr = this.Oa.tE;
        if (!this.JH && this.Dr) {
            this.JH = !0;
            this.Kz = new z.Z(!0);
            this.v().ya(this.Kz, "success", this.yM);
            this.Kz.ajax("/topic/" + (0, window.encodeURIComponent)(z.nh[0][1]) + "/demand", "action\x3dmerge\x26target_topic_id\x3d" + this.Dr[3]);
            var a = z.L("zh-topic-merged-msg");
            z.Q(z.L("zh-topic-merge"), !1);
            z.Q(a, !0);
            a = z.Le(window.document, "a", null, a)[0];
            a.href = "/topic/" + this.Dr[1];
            a.innerHTML = this.Dr[0];
            this.Oa && (this.Oa.rb.value = "")
        }
    };
    z.e.yM = function () {
        var a = z.Rn(this.Kz);
        if (!a) return z.X.message("网络异常");
        if (a.r) return z.X.message(a.msg);
        this.JH = !1
    };
    z.e.OS = function () {
        this.AE || (this.AE = !0, this.ax = new z.Z(!0), this.v().ya(this.ax, "success", this.wM), this.ax.ajax("/topic/" + (0, window.encodeURIComponent)(z.nh[0][1]) + "/demand", "action\x3dremove"))
    };
    z.e.wM = function () {
        var a = z.Rn(this.ax);
        if (!a) return z.X.message("网络异常");
        if (a.r) return z.X.message(a.msg);
        a = z.L("zh-topic-del-msg");
        z.Q(z.L("zh-topic-del-btn"), !1);
        z.Q(a, !0);
        this.Oa && (this.Oa.rb.value = "");
        this.AE = !1
    };
    z.e.BT = function (a) {
        if ((a = a.target) && a.name) if ("add" === a.name) {
            if (a = this.Vv.value) this.Xv = new z.Z(!0), this.v().ya(this.Xv, "complete", this.vM), this.Xv.ajax(window.location.href, "action\x3dadd_alias\x26alias\x3d" + (0, window.encodeURIComponent)(a))
        } else "remove" === a.name ? (this.LA = new z.Z(!0), a = a.parentNode.getAttribute("data-token"), this.v().ya(this.LA, "complete", this.AM), this.LA.ajax(window.location.href, "action\x3dremove_alias\x26alias_token\x3d" + a)) : "remove-merged" === a.name && (this.MA = new z.Z(!0), a = a.parentNode.getAttribute("data-token"),
            this.v().ya(this.MA, "complete", this.BM), this.MA.ajax("/topic/" + (0, window.encodeURIComponent)(z.nh[0][1] + "/demand"), "action\x3dremove\x26target_topic_id\x3d" + a))
    };
    z.e.BM = function () {
        var a = z.Rn(this.MA);
        if (!a) return z.X.message("网络异常");
        if (a.r) return z.X.message(a.msg);
        vM(this, a.msg)
    };
    z.e.AM = function () {
        var a = z.Rn(this.LA);
        if (!a) return z.X.message("网络异常");
        if (a.r) return z.X.message(a.msg);
        vM(this, a.msg)
    };
    z.e.vM = function () {
        var a = z.Rn(this.Xv);
        if (!a) return z.X.message("网络异常");
        if (a.r) return z.X.message(a.msg);
        var a = a.msg, b = z.O("li");
        b.setAttribute("data-token", a[1]);
        b.innerHTML = a[0] + ' \x3ca name\x3d"remove" href\x3d"javascript:;" class\x3d"zg-link-gray"\x3e移除\x3c/a\x3e';
        this.Wv.appendChild(b);
        this.Vv.value = "";
        z.Q(this.Wv.parentNode, !0)
    };
    z.e.kB = function (a) {
        this.iA ? this.lb.V() ? this.lb.G(!1) : (this.lb.G(!0), a.stopPropagation(), a.preventDefault(), this.Zk()) : (a.stopPropagation(), a.preventDefault(), this.Rj(), this.Zk());
        this.iA = !0
    };
    z.e.Zk = function () {
        this.v().ya(window.document, "click", function () {
            this.lb.G(!1)
        })
    };
    z.e.Rj = function () {
        var a = z.L("zh-topic-side-head"), b = this.kg.getAttribute("data-auth");
        this.lb = new z.qz;
        this.yy = !0;
        "f-topic-manage" === b && this.lb.Fa(this.IT = new z.lz("管理话题"));
        this.lb.Fa(this.JT = new z.lz("组织话题"));
        this.lb.Fa(this.HT = new z.lz("话题日志"));
        this.yy && (this.lb.render(a), this.v().g(this.lb, "action", this.Ij))
    };
    z.e.Ij = function (a) {
        var b = "";
        a.target === this.IT ? b = "admin" : a.target === this.JT ? b = "organize" : a.target === this.HT && (b = "log");
        window.location.href = ["/topic", this.Li[1], b].join("/")
    };
    z.e.lT = function () {
        var a = z.Rn(this.KA);
        if (a && !a.r) {
            var b = [];
            z.y(a, function (a) {
                b.push(z.rr(a, null, !0))
            });
            this.HU.innerHTML = b.join("") + '\x3cdiv class\x3d"zg-clear"\x3e\x3c/div\x3e';
            a.length && z.Q(z.L("zh-topic-side-related-topics-wrap"), !0)
        }
    };
    z.x(LM, z.R);
    LM.prototype.B = function () {
        this.h = this.K().B("FORM", {method: "POST", style: "display:none"})
    };
    LM.prototype.post = function (a, b, c) {
        var d = this.m();
        d || (this.render(), d = this.m());
        d.action = b || "";
        d.target = c || "";
        MM(this, d, a);
        d.submit()
    };
    z.x(QM, z.Xj);
    QM.prototype.init = function () {
        var a = z.Mn(new z.ph(window.location.href), "group_id");
        a && (this.gk = new z.Z(!1), this.v().ya(this.gk, "success", this.qA), a && this.gk.ajax("/noti7/read", "group_id\x3d" + a, "POST"))
    };
    QM.prototype.qA = function () {
        var a = z.Rn(this.gk);
        if (a && !a.r && a.msg) {
            var b = a.msg;
            if (!0 === b || "true" === b || "True" === b) return;
            this.rS = a.msg;
            this.dispatchEvent("change")
        }
        (a = z.fG) && z.ax(a)
    };
    z.x(RM, z.R);
    z.e = RM.prototype;
    z.e.init = function () {
        z.gG.L(this);
        this.w(window.document.body)
    };
    z.e.C = function () {
        RM.o.C.call(this);
        UM(this);
        if (this.xt = z.L("zh-list-meta-wrap")) this.v().g(this.xt, "click", this.cA), z.Mn(new z.ph(window.location.href), "fc") && WM(this);
        var a = z.L("zh-favlists-wrap");
        a && (new mM(a, null, "favlist", null, !0)).init();
        SM(this);
        (a = z.L("zh-favlist-log-list-wrap")) && (new mM(a, null, "favlist", null, !0)).init();
        TM();
        if (a = z.L("zh-favlist-followers-wrap")) a = new mM(a, null, "people", ["zg-btn-follow", "zg-btn-unfollow"], !0), a.Ii("zm-profile-section-item"), a.dC(!0), a.init();
        this.v().g(window,
            "hashchange", this.OY);
        this.Qy();
        this.Zo = new QM;
        this.Zo.init()
    };
    z.e.uQ = function (a) {
        a = a.target;
        var b = a.id.split("-"), c = b[1], b = b[2];
        (new z.Z(!0)).ajax("/collection/remove", "answer_id\x3d" + c + "\x26favlist_id\x3d" + b);
        if (b = z.tf(a, "div", "zm-item")) a = z.Qo("zm-item-answer", b), 1 === a.length ? z.P(b) : (a = z.qb(a, function (a) {
            return a.getAttribute("data-aid") === c
        })) && z.P(a.parentNode)
    };
    z.e.NV = z.Jq(function () {
        z.Rz.ba().show(!0);
        z.zi("collect", "click_add_collection_start", "collections_sidebar_create_collection")
    }, !0);
    z.e.kB = function (a) {
        this.iA ? this.lb.V() ? this.lb.G(!1) : (this.lb.G(!0), a.stopPropagation(), a.preventDefault(), this.Zk()) : (a.stopPropagation(), a.preventDefault(), this.Rj(), this.Zk());
        this.iA = !0
    };
    z.e.Zk = function () {
        this.v().ya(window.document, "click", function () {
            this.lb.G(!1)
        })
    };
    z.e.Rj = function () {
        var a = z.L("zh-list-side-head");
        this.lb = new z.qz;
        this.yy = !0;
        this.visible || this.lb.Fa(this.LT = new z.lz("设置为公开"));
        this.lb.Fa(this.GT = new z.lz("删除此收藏夹"));
        this.yy && (this.lb.render(a), this.v().g(this.lb, "action", this.Ij))
    };
    z.e.cA = function (a) {
        a = a.target;
        switch (a && a.name) {
            case "edit":
                z.Vz(z.Rz.ba());
                break;
            case "addcomment":
                z.xi({
                    category: "collect",
                    action: "click_add_collection_comment_start",
                    label: "collection_collection_name_add_collection_comment_start"
                });
                WM(this);
                this.Ga.Ch();
                this.Ga.Yc() && this.Ga.Mi("view_comments", (0, window.parseInt)(z.of(a), 10) || 0);
                break;
            case "remove":
                VM(this)
        }
    };
    z.e.Ij = function (a) {
        a.target === this.LT ? z.X.confirm("确定设置收藏夹为公开？", "收藏夹设置为公开后，将不能再设置为私密。", function (a) {
            a && XM(this)
        }, this) : a.target === this.GT && VM(this)
    };
    z.e.Qy = function () {
        var a = 1, b = (0, window.$)("ul.hot-favlists"), c = null;
        (0, window.$)("#js-hot-fav-switch").click(function () {
            c && "pending" === c.state() || (a = 5 <= a ? 1 : a + 1, c = OM(a).done(function (a) {
                b.html(a)
            }))
        })
    };
    z.x(YM, z.Xj);
    YM.prototype.init = function () {
        if (this.sk = z.L("zh-question-redirect-info")) this.sk.innerHTML && (this.Jo = !0), this.v().g(this.sk, "click", function (a) {
            "cancel" === a.target.name && aN(this)
        });
        var a = z.L("zh-question-side-header-wrap");
        if (z.rm.Ab && !z.rm.dH && a) {
            var b = z.L("zh-question-filter-wrap");
            b ? z.af(a, b) : a.style[z.C ? "styleFloat" : "cssFloat"] = "none"
        }
        (this.kg = z.L("zh-question-operation-menu")) && this.Rj();
        this.v().g(z.Cp, "anon_change", function (a) {
            var b = z.L("zh-question-side-invitation-anon");
            b && z.Q(b, a.qb);
            (b =
                z.L("zh-question-side-invitation-notanon")) && z.Q(b, !a.qb);
            this.hm && this.hm.Wa(XL(this.data.mh) || !a.qb)
        })
    };
    YM.prototype.Rj = function () {
        this.lb = new z.qz;
        var a = this.data.cn, b = this.kg.getAttribute("data-auth"), b = b ? b.split(",") : [];
        if (null == a || 0 === a) this.lb.Fa(this.Qt = $M("使用匿名身份", !1)), ZM(this), z.S.Jd || z.qm("question_op_redirect") || "close" === z.S.status || z.S.Eo || (this.lb.Fa(this.hm = $M(this.Jo ? "撤消重定向" : "问题重定向")), this.hm.Wa(XL(this.data.mh) || !this.data.qb)), z.A(b, "auth-f-manage") && this.lb.Fa(this.KT = $M("更新话题页显示", !1)), this.v().g(this.lb, "action", this.Ij), this.Qt && this.v().g(z.Cp, "anon_change", function () {
            ZM(this)
        }),
        this.yb && z.A(b, "auth-pu-mark") && (this.lb.Fa(this.hA = $M("优质回答", !0)), this.hA.Kc(this.yb.vR)), a = new z.xz("Settings", this.lb), a.uk = !0, z.zz(a), a.w(this.kg)
    };
    YM.prototype.Ij = function (a) {
        if (a.target === this.Qt) z.Ap(this.data.qb ? 0 : 1); else if (a.target === this.hm) {
            if (!1 === z.HD({up: !0})()) return !1;
            this.vp || (this.vp = new z.AD(this.pa), this.v().g(this.vp, "change", this.$R));
            this.lb.G(!1);
            this.Jo ? aN(this) : this.vp.show()
        } else a.target === this.FT ? (a = this.FT.qf() ? "/unlock_summary" : "/lock_summary", z.sp("/question/" + this.data.bb + a, function () {
            window.top !== window ? window.top.location.href = "/question/" + z.S.bb : window.location.reload()
        }, "POST")) : a.target === this.KT ? window.$.post("/refresh_topic_feeds",
            {q: z.S.bb}).done(function (a) {
            a.r || z.X.message("操作成功！")
        }) : a.target === this.hA && (a = this.hA.qf() ? "/good_mark" : "/good_unmark", window.$.post("/answer/" + this.yb.bb + a).done(function (a) {
            a.r || z.X.message("操作成功！")
        }))
    };
    YM.prototype.$R = function () {
        this.sk.innerHTML = '\x3cdiv class\x3d"zg-wrap"\x3e\x3cdiv class\x3d"zu-global-nitify-inner"\x3e\x3cspan class\x3d"zu-global-notify-icon"\x3e\x3c/span\x3e此问题将跳转至 \x3ca href\x3d"/question/' + this.vp.tu + '"\x3e' + this.vp.aJ + '\x3c/a\x3e（\x3ca href\x3d"javascript:;" name\x3d"cancel"\x3e撤消重定向\x3c/a\x3e）\x3c/div\x3e\x3c/div\x3e';
        z.Q(this.sk, !0);
        this.Jo = !0;
        this.hm.Jp("撤消重定向")
    };
    z.x(bN, z.R);
    var cN = "headline", nQ = {experience: "/topic/bio/update", headline: "/people/edit"},
        oQ = "例：游戏开发者，科幻游戏爱好者;例：交互设计师，专注 iOS 平台产品设计;例：从医五年，口腔医学领域;例：金融硕士，三年从业经验;例：SNS 深度用户，社交产品设计师;例：十年互联网人，做过产品，写过代码;例：摄影爱好者，专注人像摄影;例：旅行爱好者，脚步遍及 32 个国家;例：读中外历史，研究各国文化;例：三次创业，两次失败，一次成功;例：坚持健身四年，专注有氧抗阻训练;例：做过动画，画过漫画".split(";");
    z.e = bN.prototype;
    z.e.B = function () {
        this.K();
        var a, b;
        "experience" === this.type ? (b = "添加我在 " + this.FI.Li + " 话题下的话题经验", a = "在 " + this.FI.Li + " 话题下的话题经验") : (b = "添加一句话介绍", a = "一句话介绍");
        a = '\n    \x3cdiv class\x3d"zm-bio-item ' + (this.content.length ? "normal" : "empty") + '"\x3e\n      \x3cp class\x3d"zm-bio-item-title"\x3e' + z.Na(a) + '\x3c/p\x3e\n      \x3cinput class\x3d"zm-bio-item-checkbox" type\x3d"checkbox"/\x3e\n      \x3cimg class\x3d"avatar" src\x3d"' + z.Na(z.T.be()) + '"\x3e\n      \x3cdiv class\x3d"zm-bio-item-empty-tip"\x3e\n        \x3cspan class\x3d"sprite-topic-exprience-icon-add"\x3e\x3c/span\x3e\n        \x3ca href\x3d"javascript:;" name\x3d"edit"\x3e' +
            z.Na(b) + '\x3c/a\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"zm-bio-item-content"\x3e\n        \x3cspan class\x3d"username"\x3e' + z.Na(z.T[0]) + '\x3c/span\x3e\n        \x3cspan class\x3d"content"\x3e\n          ' + ("，" + z.Na(this.content)) + '\n        \x3c/span\x3e\n        \x3ca href\x3d"javascript:;" name\x3d"edit" class\x3d"zu-edit-button"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  ';
        a = (0, window.$)(a);
        this.h = a.get(0);
        this.$e();
        this.nC =
            a.find(".zm-bio-item-checkbox");
        this.Aq = a.find(".content");
        this.Y(this.h)
    };
    z.e.$e = function () {
        var a = this.K(),
            b = (0, window.$)('\n    \x3cdiv class\x3d"zm-command"\x3e\n      \x3cspan class\x3d"limitTip"\x3e' + (40 - this.content.length) + ' / 40\x3c/span\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"cancel"\x3e取消\x3c/a\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"save" class\x3d"zg-r3px zg-btn-blue"\x3e保存\x3c/a\x3e\n    \x3c/div\x3e\n  ').get(0),
            c = a.B("textarea", {className: "zm-bio-item-editor-input", value: this.content});
        this.rO = a.B("div", "zm-bio-item-editor", [a.B("div", "zg-form-text-input",
            c), b]);
        new z.Sr(c);
        a.appendChild(this.h, this.rO);
        this.Wi = (0, window.$)(c);
        this.qH = a.Yf("limitTip", b);
        this.type !== cN && this.Wi.prop("placeholder", oQ[Math.floor(Math.random() * oQ.length)])
    };
    z.e.Y = function (a) {
        bN.o.Y.call(this, a);
        this.Zp = this.content.length ? "normal" : "empty"
    };
    z.e.C = function () {
        var a = this;
        bN.o.C.call(this);
        this.v().g(this.h, "click", function () {
            "normal" === this.Zp ? this.Kc(!0) : "empty" === this.Zp && (eN(this, "editing"), dN(this))
        });
        (0, window.$)(this.h).find("a").click(function (b) {
            switch ((0, window.$)(b.target).prop("name")) {
                case "edit":
                    eN(a, "editing");
                    dN(a);
                    break;
                case "cancel":
                    a.eo();
                    break;
                case "save":
                    a.ys()
            }
            b.stopPropagation()
        });
        this.Wi.on("keyup", function (b) {
            b = 40 - (0, window.$)(b.target).val().length;
            z.uo(a.qH, "exceed", 0 > b);
            z.mf(a.qH, b + " / 40")
        })
    };
    z.e.ys = function () {
        var a = this.Wi.val();
        if (40 > a.length) {
            var b = this, c = nQ[this.type];
            ("experience" === this.type ? window.$.post(c, {
                bio: a,
                tid: this.je
            }) : window.$.post(c, {data: JSON.stringify({headline: a})})).then(function () {
                a.length ? (b.Aq.text("，" + a), b.Kc(!0), eN(b, "normal")) : (b.Aq.text(""), b.Kc(!1), eN(b, "empty"));
                b.ia(a)
            })
        }
    };
    z.e.eo = function () {
        this.content.length ? eN(this, "normal") : eN(this, "empty")
    };
    z.e.ia = function (a) {
        this.content = a;
        this.content.length ? this.Aq.text("，" + a) : this.Aq.text("")
    };
    z.e.Kc = function (a) {
        this.nC.prop("checked", a);
        a && this.dispatchEvent("bio_item_checked")
    };
    z.e.Ua = function () {
        return this.content
    };
    z.e.getToken = function () {
        return this.je
    };
    z.e.qf = function () {
        return this.nC.prop("checked")
    };
    z.x(fN, z.Xj);
    var hN = null;
    z.e = fN.prototype;
    z.e.render = function (a) {
        var b = this;
        this.h = z.O("div", "zu-bio-editor-wrap", [this.dR = z.O("div", "zu-bio-editor-inner-wrap"), this.qc = z.O("div", "zm-command", [this.yn = z.O("a", {
            name: "save",
            href: "#",
            className: "zg-r3px zg-btn-blue"
        }, "完成")])]);
        var c = z.T[4];
        c.length && lN(this, c, {type: cN, je: "headline"});
        z.y(this.xE, function (a) {
            lN(this, a[1], {type: "experience", Li: a[0][0], je: a[0][3]})
        }, this);
        this.aR && z.Q(this.qc, !1);
        a.appendChild(this.h);
        this.v().g(this.qc, "click", this.Qa);
        this.g("bio_item_checked", function (a) {
            z.y(this.items,
                function (b) {
                    b !== a.target && b.Kc(!1)
                })
        });
        (0, window.$)(z.Fj(this.sa)).click(function () {
            b.na({action: "click_edit_topic_experience_close"})
        })
    };
    z.e.getSelection = function () {
        return this.items.find(function (a) {
            return a.qf()
        })
    };
    z.e.Px = function () {
        var a = this.getSelection();
        return a && a.Ua()
    };
    z.e.Qa = function (a) {
        (a = this.Pg(a.target)) && "save" === a.name && (this.sa && (mN(this), this.sa.G(!1)), this.dispatchEvent("change"), this.na({action: "click_edit_topic_experience_submit"}))
    };
    z.e.na = function (a) {
        this.dispatchEvent(Object.assign({type: "trackRequested", category: "edit_profile"}, a))
    };
    z.x(nN, z.R);
    z.e = nN.prototype;
    z.e.D = function () {
        rN(this);
        this.Qd.H();
        nN.o.D.call(this)
    };
    z.e.w = function (a) {
        this.h = a;
        this.Ms = z.N("draft-saved-info", a);
        z.Q(this.Ms, !1);
        this.CG = z.N("draft-saved-time", a);
        this.BN = z.N("draft-clear-button", a);
        a = this.v().g(this.Qd, "tick", this.uu).g(this.BN, "click", this.CN).g(this.as, "keydown", this.GR);
        "oninput" in this.as && !z.C ? a.g(this.as, "input", this.fR) : a.g(this.as, "keydown", this.gR);
        var b = z.gm.Wd && 1E3 * z.gm.Wd[1];
        b && (sN(this, b), this.JB = (0, window.setInterval)((0, z.q)(function () {
            sN(this, b)
        }, this), 22E3))
    };
    z.e.GR = function (a) {
        (a.metaKey || a.ctrlKey) && "s" === z.ql[a.keyCode] && (this.YR(), this.isContentEditable || a.preventDefault())
    };
    z.e.nx = function () {
        (0, window.$)(window).on("beforeunload.DraftSaver", (0, z.q)(function () {
            return "你的修改还未成功保存，确认离开该页面吗？"
        }, this))
    };
    z.e.Kr = function () {
        (0, window.$)(window).off("beforeunload.DraftSaver")
    };
    z.e.fR = function () {
        qN(this);
        oN(this)
    };
    z.e.gR = function (a) {
        z.eo(a.keyCode) && (qN(this), oN(this))
    };
    z.e.ia = function (a) {
        this.hb.ia(a);
        this.hb.Mp()
    };
    z.e.Ua = function () {
        return this.hb.Zf()
    };
    z.e.zJ = function () {
        if (!this.Fd) {
            var a = this.Ua();
            if (a) {
                pN(this, "保存中…");
                var a = (new z.vh).add("qid", this.pa).add("content", a).add("timestamp", (0, z.I)()), b = new z.Z;
                b.ajax("/answer/draft/save", a.toString(), "POST");
                this.v().g(b, "success", (0, z.q)(this.jh, this));
                this.mH = b
            }
        }
    };
    z.e.YW = 150;
    z.e.uu = z.Qr(nN.prototype.YW, nN.prototype.zJ);
    z.e.ZR = 350;
    z.e.YR = z.Qr(nN.prototype.ZR, nN.prototype.zJ);
    z.e.iR = 3E3;
    z.e.eR = z.Qr(nN.prototype.iR, function () {
        this.Fd || (this.Ua() ? this.uu() : tN(this))
    });
    z.e.jh = function (a) {
        a = z.Rn(a.target);
        var b = "", c = !1;
        0 === a.r ? b = "已保存" : (b = a.msg || "保存失败！请稍后再试。", c = !0);
        rN(this);
        z.Q(this.Ms, !0);
        pN(this, b, c);
        this.Kr();
        "保存成功" === a.msg && this.dispatchEvent("saveContent");
        this.Qd.start()
    };
    z.e.CN = function (a) {
        a.preventDefault();
        z.X.confirm("清除草稿", this.OG ? "你确定要清除保存的草稿并取消编辑吗？" : "你确定要清除保存的草稿吗？", function (a) {
            a && (this.OG ? (tN(this), this.hb.dispatchEvent("cancel_edit"), this.hb.Ki()) : (this.ia(""), tN(this), EL(this.hb)))
        }, this)
    };
    z.x(vN, z.R);
    vN.prototype.B = function () {
        vN.o.B.call(this);
        var a = (0, window.$)('\x3cdiv class\x3d"carousel"\x3e\x3cdiv class\x3d"carousel-navigation-btn"\x3e\x3cdiv class\x3d"carousel-left-btn copyright-ico-prev"\x3e \x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"carousel-content"\x3e\x3c/div\x3e\x3cdiv class\x3d"carousel-navigation-btn"\x3e\x3cdiv class\x3d"carousel-right-btn copyright-ico-next"\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        this.MR = (0, window.$)(".carousel-left-btn", a);
        this.dV = (0, window.$)(".carousel-right-btn", a);
        this.HD = (0, window.$)(".carousel-content", a);
        this.ID = (0, window.$)("\x3cdiv\x3e\x3c/div\x3e").addClass("carousel-navigation-dot-group");
        z.y(this.contents, function (a, c) {
            this.HD.append(a);
            this.ID.append(this.Pr[c])
        }, this);
        this.HD.append(this.ID);
        wN(this, 0);
        this.Y(a[0]);
        this.W = (0, window.$)(this.h).addClass(this.className)
    };
    vN.prototype.C = function () {
        vN.o.C.call(this);
        this.MR.click(window.$.proxy(this.prev, this));
        this.dV.click(window.$.proxy(this.next, this))
    };
    vN.prototype.next = function () {
        wN(this, this.Hg + 1) && this.dispatchEvent({type: "rightShow", offset: this.Hg})
    };
    vN.prototype.prev = function () {
        wN(this, this.Hg - 1) && this.dispatchEvent({type: "leftShow", offset: this.Hg})
    };
    z.l(AN, z.Hv);
    z.e = AN.prototype;
    z.e.FF = function () {
        var a = (0, window.$)("#zh-question-title h2.zm-editable-content")[0];
        return {
            title: a && (/answer\/\d+$/.test(window.location.pathname) ? z.of(a) : a.firstChild.nodeValue) || "",
            Ek: this.pj
        }
    };
    z.e.Px = function () {
        return this.jw
    };
    z.e.Au = function (a) {
        this.qb = a
    };
    z.e.Wa = function (a, b) {
        this.enabled = a;
        this.Ts ? (this.Ki(), this.Vb = b, this.$b.innerHTML = this.Vb) : b && (this.Vb = b)
    };
    z.e.Y = function (a) {
        z.Hv.prototype.Y.call(this, a);
        this.Ts = !0;
        z.W.add(this.$b, "zu-answer-form-disabled-wrap")
    };
    z.e.D = function () {
        this.Os && (z.P(this.Os), this.QK = this.Os = null);
        z.Hv.prototype.D.call(this)
    };
    z.e.Gj = function (a) {
        this.Au(a.qb);
        this.an && (this.an.checked = a.qb)
    };
    z.e.C = function () {
        z.Hv.prototype.C.call(this);
        this.v().g(z.Cp, "anon_change", this.Gj);
        EN(this)
    };
    z.e.$e = function () {
        z.Hv.prototype.$e.call(this);
        var a = this.K(), b = z.T.Fb();
        this.Os = a.B("div", "zh-answer-form clearfix", [b ? WL(this.PK) : "", this.QK = a.B("div", null, [a.B("div", "zu-answer-form-title", [b ? VL(this.PK) : "我来回答这个问题", this.xD = a.B("span")])])]);
        b && !z.T.Jd && (b = z.jm.value, "TOPIC" === z.jm.type ? DN(this, b) : BN(this, b), (0, window.$)(this.xD).on("click", "a.zu-edit-button", function (a) {
            z.xi({
                category: "edit_profile",
                action: "click_edit_topic_experience_start",
                label: "add_answer_box_edit_topic_experience",
                attributes: {text: (0, window.$)(a.target).text()}
            })
        }));
        a.Us(this.Os, this.pj);
        this.v().g(this.QK, "click", this.Qa);
        z.T.Fb() ? z.T.qe || FN(this, '\x3cdiv class\x3d"activate-mask-tip-answer"\x3e' + (z.T.Ln ? "为了正常使用知乎的提问、回答、评论和编辑功能，请验证你的邮箱。" : "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机或邮箱。") + "\x3c/div\x3e", '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:"\x3e我要激活\x3c/a\x3e\x3c/div\x3e') : FN(this, '\x3cdiv class\x3d"signin-mask-tip-answer"\x3e\x3c/div\x3e', '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:"\x3e我要回答\x3c/a\x3e\x3c/div\x3e')
    };
    z.e.qs = function (a) {
        switch (a) {
            case "edit_bio":
                IN(this);
                break;
            case "cancel_delete":
                this.dispatchEvent(IO);
                break;
            case "answer_my_question":
                GN(this)
        }
        return !0
    };
    z.e.ve = function () {
        "editing" === this.status ? this.Kb && z.Q(this.Kb, !0) : this.Kb && z.Q(this.Kb, !1);
        z.Q(this.hd, !1);
        this.$b && z.Q(this.$b, !this.enabled)
    };
    z.e.hl = function () {
        var a = (0, z.Rv)(pQ);
        this.qc = z.We(a({
            questionStatus: z.S.status,
            statusText: {suggest: "建议修改", evaluate: "建议修改", close: "关闭"}[z.S.status]
        }));
        this.yn = (0, window.$)(".submit-button", this.qc)[0];
        HN(this);
        this.iE = (0, window.$)("input[name\x3dcopyright-checkbox]", this.qc)[0];
        this.iE.checked = !this.hE;
        this.Kb.appendChild(this.qc);
        this.ready(function () {
            if (this.Ma && this.Ma.on) this.Ma.on("load", this.Py, !1, this)
        });
        z.rm.Ab || zN()
    };
    z.e.Py = function () {
        var a = new nN(this);
        z.Ac(this, a);
        this.v().g(a, "saveContent", function () {
            var a = !this.Hd && this.Ma.Rb.FullScreenPlugin;
            a && DL(a)
        }, !1, this);
        var b = FL(this);
        this.v().g(b, "focus", function () {
            a.Qd.start()
        }).g(b, "blur", function () {
            qN(a);
            a.uu()
        }).g(this, "saveSuccess", function () {
            qN(a);
            tN(a)
        });
        a.w(this.qc);
        this.OE = a
    };
    z.e.Xz = function () {
        var a = gN(), b = a.Px(), a = (a = a.getSelection()) && a.type;
        a === cN ? BN(this, b) : "experience" === a ? DN(this, b) : CN(this, "", "填写话题经验，提升回答可信度")
    };
    var IO = "cancel_delete_answer",
        pQ = '\x3cdiv class\x3d"zm-command clearfix"\x3e' + (z.T.Jd ? "" : '\x3clabel class\x3d"zg-left anno-box"\x3e\x3cinput name\x3d"anno-checkbox" type\x3d"checkbox"\x3e 匿名 \x3cspan\x3e\x26nbsp\x3c/span\x3e\x3c/label\x3e ') + '\x3clabel class\x3d"zg-left copyright-box"\x3e\x3cinput name\x3d"copyright-checkbox" type\x3d"checkbox"\x3e未经许可，禁止转载' + (z.rm.Ab ? "" : '\x3ca href\x3d"/terms#sec-licence-6" target\x3d"_blank"\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark" style\x3d"margin-left: 5px;" id\x3d"copyright_question_mark" data-copyright-demo\x3d"true"\x3e\x3c/i\x3e\x3c/a\x3e') +
            '\x3c/label\x3e \x3c% if (questionStatus !\x3d\x3d "normal") { %\x3e\x3cspan class\x3d"zg-gray-normal" style\x3d"margin-right:5px;"\x3e被\x3c%\x3d statusText %\x3e的问题不允许添加新的回答\x3c/span\x3e\x3ca class\x3d"zg-right" data-tip\x3d"s$b$为什么部分问题会被「关闭」「建议修改」？" href\x3d"/question/21290061 "\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark"\x3e\x3c/i\x3e\x3c/a\x3e\x3c% } %\x3e\x3cspan class\x3d"\x3c%\x3d (questionStatus !\x3d\x3d "normal" ? "hidden" : "") %\x3e zg-right"\x3e\x3ca class\x3d"submit-button zg-btn-blue" name\x3d"save" href\x3d"javascript:"\x3e发布回答\x3c/a\x3e\x3c/span\x3e\x3cdiv class\x3d"draft-controls zg-right ' +
            (z.rm.Ab ? "draft-controls-mobile" : "") + '"\x3e\x3cspan class\x3d"draft-saved-info"\x3e\x3ca class\x3d"draft-clear-button goog-inline-block" href\x3d"#" data-tip\x3d"s$b$删除草稿"\x3e\x3ci class\x3d"zg-icon zg-icon-bin"\x3e\x3c/i\x3e\x3cspan class\x3d"hide-text"\x3e清除草稿\x3c/span\x3e\x3c/a\x3e\x3cspan class\x3d"draft-saved-time"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
    z.x(JN, z.R);
    JN.prototype.B = function () {
        JN.o.B.call(this);
        this.h = z.We(qQ)
    };
    JN.prototype.C = function () {
        JN.o.C.call(this);
        this.Ad = (0, window.$)(this.m());
        this.zm = z.ft("answer", this.hD);
        var a = z.sw(window.location.protocol + "//" + window.location.hostname + "/question/" + this.yU + "/answer/" + this.hD);
        (0, window.$)(".js-qrcode-image", this.Ad).attr("src", a);
        this.hc()
    };
    JN.prototype.hc = function () {
        var a = this;
        (0, window.$)("button.weibo", this.Ad).click(function () {
            a.zm.done(function (a) {
                a.r || (z.KC(a.msg.sina), z.zi("share", "click_share_answer_to_weibo_start", "answer_box_after_submit_answer"))
            })
        })
    };
    var qQ = '\x3cdiv class\x3d"answer-share-tip"\x3e分享我的回答到\x3cbutton class\x3d"wechat hidden-phone"\x3e\x3cdiv class\x3d"qr-code"\x3e扫描二维码\x3cimg class\x3d"js-qrcode-image" alt\x3d"微信分享二维码"\x3e\x3c/div\x3e\x3cspan class\x3d"ico z-ico-wechat"\x3e\x3c/span\x3e微信\x3c/button\x3e\x3cbutton class\x3d"weibo"\x3e\x3cspan class\x3d"ico z-ico-weibo"\x3e\x3c/span\x3e微博\x3c/button\x3e\x3c/div\x3e';
    z.x(KN, z.Hv);
    var NN = [{value: "精简文字描述", label: "精简文字描述"}, {value: "补充必要的信息", label: "补充必要的信息"}, {
        value: "改进标点或格式",
        label: "改进标点或格式"
    }, {value: "other", label: "其他"}];
    z.e = KN.prototype;
    z.e.w = function (a) {
        KN.o.w.call(this, a);
        this.v().g(z.Cp, "anon_change", this.Gj)
    };
    z.e.Gj = function (a) {
        this.VG || z.W.enable(this.h, "zm-editable-disabled", a.qb)
    };
    z.e.hl = function () {
        KN.o.hl.call(this);
        this.HA = z.O("div", {
            "class": "zm-editable-require-reason-wrap",
            style: "padding:10px 0 0 0"
        }, [z.O("a", {
            "class": "zg-right zg-link-litblue",
            href: "/question/19550238/answer/12202028",
            target: "_blank"
        }, z.S.Jd ? "" : "为什么问题可以被公共编辑？"), MN(), this.KH = z.O("span"), this.AU = z.O("div", {
            "class": "zg-form-text-input",
            style: "height:22px;margin:10px 0 0 0;display:none"
        }, this.zU = z.O("textarea", {style: "width:100%;height:22px !important;min-height:22px !important;"}))]);
        z.af(this.HA, this.qc);
        this.Dp && ON(this, " * 必选", "zg-gray-normal");
        var a = z.Le(window.document, "select", null, this.HA)[0];
        this.v().g(a, "change", function () {
            z.Q(this.AU, "other" === a.value);
            ON(this, " * 必选", "zg-gray-normal")
        })
    };
    z.e.jh = function (a) {
        var b = z.Le(window.document, "select", null, this.HA)[0], c = b.value;
        if (this.Dp) {
            if ("none" === c) {
                ON(this, "请选择一个修改理由");
                return
            }
            if ("other" === b.value && (c = z.sr(this.zU.value), !c)) {
                ON(this, "请填写修改理由");
                return
            }
        }
        "title" === this.Fr && -1 === a.indexOf("?") && -1 === a.indexOf("？") ? ON(this, "还没有输入问号") : ("none" === c && (c = ""), this.params = ["id\x3d" + this.pa + "\x26reason\x3d" + (0, window.encodeURIComponent)(c) + "\x26question_id\x3d" + this.pa], this.dispatchEvent("change"), KN.o.jh.call(this, a), ON(this, "* 必选", "zg-gray-normal"),
            this.Dp = !0)
    };
    z.e.Zf = function () {
        return this.Hd && this.TT ? (0, z.Lr)(z.np(this.Ma.value)) : KN.o.Zf.call(this)
    };
    z.e.Mg = function () {
        (0, window.$)(window).on("beforeunload.EditorWithReason", (0, z.q)(function () {
            return "你对问题的修改还未保存，确认离开该页面吗？"
        }, this))
    };
    z.e.bi = function () {
        (0, window.$)(window).off("beforeunload.EditorWithReason")
    };
    z.e.Ki = function () {
        KN.o.Ki.call(this);
        this.bi()
    };
    z.e.rg = function () {
        KN.o.rg.call(this);
        this.Mg()
    };
    z.x(PN, z.R);
    PN.prototype.L = function (a, b) {
        PN.o.L.call(this, a, b);
        this.v().g(a, "beforeexpand", this.rQ)
    };
    PN.prototype.rQ = function (a) {
        var b = a.target;
        z.bh(this, function (a) {
            b !== a && a.Yc() && a.Lc(!1)
        })
    };
    PN.prototype.H = function () {
        this.v().H();
        PN.o.H.call(this)
    };
    z.x(QN, z.V);
    QN.prototype.C = function () {
        QN.o.C.call(this);
        z.Tj(this, 490);
        (0, window.$)(this.m()).addClass("user-guiding-dialog")
    };
    z.x(UN, z.R);
    z.e = UN.prototype;
    z.e.B = function () {
        UN.o.B.call(this);
        this.h = z.O("div", {className: "question-invite-panel"})
    };
    z.e.C = function () {
        UN.o.C.call(this);
        this.W = (0, window.$)(this.m())
    };
    z.e.D = function () {
        UN.o.D.call(this);
        this.aa && this.aa.H();
        delete this.aa;
        delete this.Vl;
        delete this.Uj
    };
    z.e.Yc = function () {
        return this.ob
    };
    z.e.Ch = function () {
        this.Lc(!this.ob)
    };
    z.e.Lc = function (a) {
        a !== this.Yc() && (this.dispatchEvent(a ? "beforeexpand" : "beforecollapse"), a && !this.uc && VN(this), this.ob = a, this.W.toggle(a), this.dispatchEvent(a ? "expand" : "collapse"))
    };
    z.e.My = function (a) {
        var b = this, c = (0, z.Rv)(rQ), d = new z.Vs(a, {
            Le: 20,
            source: "/question/ac/invite-people?question_token\x3d" + this.sp,
            vk: this.m(),
            placeholder: "搜索你想邀请的人",
            td: function (a, b, d) {
                d.innerHTML = c(a.data)
            },
            filter: function (a) {
                return z.mb(a, function (a) {
                    return !$N(b, a.member_hash)
                })
            },
            select: function () {
                return ""
            },
            format: function (a) {
                return a
            }
        });
        d.Fi = function () {
            return !1
        };
        var f = d.M;
        f.className = "suggest-persons search";
        f.ph = "person";
        f.vh(!1);
        var g = (0, window.$)(".suggest-persons-wrapper", this.h), h = z.Qj(function () {
            (0, window.$)(f.m()).on("click",
                "button", window.$.proxy(b.WF, b))
        }), k = (0, window.$)(".invite-title .spinner-gray");
        (0, window.$)(".search-input", this.h).on("input", function () {
            k.css("display", "inline-block")
        });
        d.addEventListener("show", function () {
            k.hide();
            var a = f.m();
            g.hide();
            (0, window.$)(".no-result-tips", b.h).remove();
            var c = (0, window.$)(".person", a);
            5 < c.length && (c.hide().slice(0, 5).show(), (0, window.$)('\x3ca class\x3d"js-more" href\x3d"#"\x3e更多搜索结果\x3c/a\x3e').appendTo(a).one("click", function () {
                c.show();
                (0, window.$)(this).remove();
                return !1
            }));
            h()
        });
        d.addEventListener("hide", function () {
            k.hide();
            a.value.length ? (0, window.$)(".no-result-tips", b.h).length || (g.hide(), (0, window.$)('\x3cspan class\x3d"no-result-tips"\x3e没有找到你想邀请的人\x3c/span\x3e').appendTo(b.h)) : (g.show(), (0, window.$)(".no-result-tips", b.h).remove())
        });
        d.addEventListener("dismiss", function () {
            (0, window.$)(".no-result-tips", b.h).remove();
            g.show()
        });
        this.aa = d
    };
    z.e.AS = function () {
        this.Yc() ? (this.aa && this.aa.H(), VN(this)) : this.uc = !1
    };
    z.e.kP = function () {
        z.Ap(0)
    };
    z.e.WF = z.Jq(function (a) {
        var b = a.target, c = this.RI((0, window.$)(b).parents(".person"));
        this.Vl && "pending" === this.Vl.state() && this.Vl.abort();
        a = b.getAttribute("data-type");
        var d = z.W.has(b, this.LG), f = (0, z.q)(function (a) {
            a ? (bO(this, b, !0), this.Uj.unshift(c), dO(this), aO(this, c.id, !0), this.uN()) : (bO(this, b, !1), cO(this, c.id), aO(this, c.id, !1))
        }, this);
        d ? (this.Vl = TL(this.sp, c.id), f(!1)) : (this.Vl = window.$.post("/question/askpeople", {
            qid: this.sp,
            uid: c.id,
            _source_type: a,
            op: "add"
        }).done(function (a) {
            a.r && (z.X.message(a.msg),
                f(!1))
        }), f(!0), ZN(this, a))
    }, !0);
    z.e.lP = function (a) {
        a = a.target.getAttribute("data-uid");
        TL(this.sp, a);
        aO(this, a, !1);
        cO(this, a)
    };
    z.e.uN = z.Qj(function () {
        z.T.mh && window.$.post("/question/popup", {action: "invite", question_token: this.sp}, function (a) {
            a && TN(new QN, a)
        })
    });
    z.e.RI = function (a) {
        var b = (0, window.$)(".zm-item-link-avatar", a), c = (0, window.$)(".zg-link", a);
        return {
            id: String((0, window.$)("button", a).data("uid")),
            avatar: (0, window.$)("img", b).attr("src"),
            fullname: c.text(),
            url_token: b.attr("href").split("/").slice(-1)[0]
        }
    };
    var WN = '\x3ci class\x3d"icon icon-spike"\x3e\x3c/i\x3e\x3cdiv class\x3d"spinner"\x3e正在加载，请稍等 \x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e',
        fO = '你已邀请 \x3cspan class\x3d"invited-shortlist"\x3e\x3c% helper.each(persons.slice(0, 2), function(person, i, sliced) { %\x3e\x3ca href\x3d"/people/\x3c%\x3dperson.url_token%\x3e" class\x3d"zg-link-gray" target\x3d"_blank"\x3e\x3c%\x3dperson.fullname%\x3e\x3c/a\x3e\x3c%\x3d i !\x3d\x3d sliced.length - 1 ? "、" : ""%\x3e\x3c% }); %\x3e\x3c%\x3dhelper.fullList()%\x3e\x3c/span\x3e\x3c% if (persons.length \x3e 2) { %\x3e 等 \x3c%\x3dpersons.length%\x3e 人 \x3c% } %\x3e\x3c% if (persons.length \x3c maxInvites) { %\x3e ，还可以邀请 \x3c%\x3dmaxInvites - persons.length%\x3e 人\x3c% } %\x3e',
        eO = '\x3cdiv class\x3d"invited-hovercard"\x3e\x3ci class\x3d"icon icon-spike"\x3e\x3c/i\x3e\x3cul class\x3d"invited-fulllist"\x3e\x3c% helper.each(persons, function(person, i) { %\x3e\x3cli\x3e\x3ca title\x3d"\x3c%-person.fullname%\x3e" class\x3d"zm-item-link-avatar" href\x3d"/people/\x3c%\x3dperson.url_token%\x3e" target\x3d"_blank"\x3e\x3cimg src\x3d"\x3c%\x3dperson.avatar%\x3e" class\x3d"zm-item-img-avatar"\x3e\x3c/a\x3e\x3ca href\x3d"/people/\x3c%\x3dperson.url_token%\x3e" class\x3d"zg-link-gray" title\x3d"\x3c%-person.fullname%\x3e" target\x3d"_blank"\x3e\x3c%\x3dperson.fullname%\x3e\x3c/a\x3e\x3cbutton class\x3d"cancel-button zg-link-btn zg-link-gray" data-uid\x3d"\x3c%\x3dperson.id%\x3e"\x3e收回邀请\x3c/button\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3c/div\x3e',
        rQ = '\x3ca data-tip\x3d"p$t$\x3c%\x3durl_token%\x3e" class\x3d"zm-item-link-avatar" href\x3d"/people/\x3c%\x3durl_token%\x3e" title\x3d"\x3c%\x3dfullname%\x3e" target\x3d"_blank"\x3e\x3cimg src\x3d"\x3c%\x3davatar_path%\x3e" class\x3d"zm-item-img-avatar"\x3e\x3c/a\x3e\x3cdiv class\x3d"content"\x3e\x3cbutton class\x3d"invite-button zg-btn zg-btn-green" data-uid\x3d"\x3c%\x3dmember_hash%\x3e" data-type\x3d"search"\x3e邀请回答\x3c/button\x3e\x3cdiv class\x3d"describe"\x3e\x3ca data-tip\x3d"p$t$\x3c%\x3durl_token%\x3e" href\x3d"/people/\x3c%\x3durl_token%\x3e" class\x3d"zg-link" target\x3d"_blank"\x3e\x3c%\x3dhighlighted_fullname%\x3e\x3c/a\x3e\x3c% if(headline) { %\x3e ，\x3cspan class\x3d"bio" title\x3d"\x3c%-headline%\x3e"\x3e\x3c%\x3dhighlighted_headline%\x3e\x3c/span\x3e \x3c% } %\x3e\x3c/div\x3e\x3cdiv class\x3d"reason"\x3e\x3c% if (detailed_info) {%\x3e \x3c%\x3ddetailed_info%\x3e\x3c% } %\x3e\x3c% if (topic["answer_num"]) {%\x3e在 \x3ca href\x3d"/people/\x3c%\x3durl_token%\x3e/topic/\x3c%\x3dtopic["url_token"]%\x3e/answers" data-tip\x3d"t$b$\x3c%\x3dtopic["url_token"]%\x3e" data-token\x3d"\x3c%\x3dtopic["url_token"]%\x3e" data-topicid\x3d"\x3c%\x3dtopic["id"]%\x3e" target\x3d"_blank"\x3e \x3c%\x3dtopic["name"]%\x3e \x3c/a\x3e 话题下有 \x3c%\x3dtopic["answer_num"]%\x3e 个回答 \x3c% } %\x3e\x3c/div\x3e\x3c/div\x3e';
    z.x(gO, z.R);
    z.e = gO.prototype;
    z.e.C = function () {
        gO.o.C.call(this);
        this.v().g(this.h, "click", this.cA);
        hO(this);
        this.v().g(this, "click!", function (a) {
            "comment" === a.namespace && a.yc.fill("label", "question")
        });
        this.g("trackRequested", function (a) {
            a.label = "question_box";
            z.xi(a)
        })
    };
    z.e.vo = function () {
        var a = this.h.querySelector("a[name\x3dreport-question]");
        if (a) {
            var b = this;
            a.addEventListener("click", function () {
                (new z.pB({type: "question", id: b.data.pa})).render()
            })
        }
    };
    z.e.Sj = function () {
        var a = (0, window.$)('a[name\x3d"share"]', this.m()).get(0);
        a && z.LC(a, "question", this.data.bb, window.location.protocol + "//" + window.location.host + "/question/" + this.data.bb).Db(this)
    };
    z.e.cA = function (a) {
        var b = (a = z.Er(this.h, a.target)) && a.name;
        if (b) switch (b) {
            case "addcomment":
                "添加评论" === window.$.trim((0, window.$)(a).text()) ? z.Jq(this.MF).call(this, a) : this.MF(a);
                break;
            case "remove":
                kO(this);
                break;
            case "orgLock":
                lO(this);
                break;
            case "orgUnlock":
                mO(this);
                break;
            case "admin":
                jO(this, a);
                break;
            case "invite":
                this.dz.Ch(), this.dispatchEvent(new z.jB("click!invitation", {
                    category: "invitation",
                    action: (this.dz.Yc() ? "show" : "hide") + "_ask_to_answer_card",
                    label: "?",
                    value: this.data.te
                }))
        }
    };
    z.e.MF = function (a) {
        this.Ga.Ch();
        this.Ga.Yc() && this.Ga.Mi("view_comments", (0, window.parseInt)(z.of(a), 10) || 0)
    };
    z.e.KN = function (a) {
        this.RC.X(a.msg.action);
        this.RC.Jp(a.msg.caption)
    };
    z.x(nO, z.Hv);
    z.e = nO.prototype;
    z.e.C = function () {
        nO.o.C.call(this);
        this.ready(function () {
            if (this.Ma && this.Ma.on) this.Ma.on("load", this.Py, !1, this)
        })
    };
    z.e.Py = function () {
        var a = new nN(this, !0);
        z.Ac(this, a);
        this.v().g(a, "saveContent", function () {
            var a = !this.Hd && this.Ma.Rb.FullScreenPlugin;
            a && DL(a);
            (0, window.$)(this.or).text("保存草稿并离开");
            (0, window.$)(this.h).find(".zu-edit-button span").text("修改（有未发布的编辑草稿）")
        }).g(a, "clearContent", function () {
            (0, window.$)(this.or).text("取消");
            (0, window.$)(this.h).find(".zu-edit-button span").text("修改")
        });
        var b = FL(this);
        this.v().g(b, "focus", function () {
            a.Qd.start()
        }).g(b, "blur", function () {
            qN(a);
            this.NN !== this.Zf() && a.uu()
        }).g(this,
            "saveSuccess", function () {
                delete z.gm.Wd;
                qN(a);
                tN(a)
            }).g(this, "save_unchanged", function () {
            delete z.gm.Wd;
            qN(a);
            tN(a)
        });
        a.w(this.qc);
        z.gm.Wd && z.gm.Wd[0] && (0, window.$)(this.or).text("保存草稿并离开")
    };
    z.e.hl = function () {
        this.qc = z.O("div", "zm-command", [(0, window.$)('\x3cdiv class\x3d"draft-controls zg-left"\x3e\x3cspan class\x3d"draft-saved-info"\x3e\x3ca class\x3d"draft-clear-button goog-inline-block" href\x3d"#" data-tip\x3d"s$b$取消编辑并删除草稿"\x3e\x3ci class\x3d"zg-icon zg-icon-bin"\x3e\x3c/i\x3e\x3cspan class\x3d"hide-text"\x3e清除草稿\x3c/span\x3e\x3c/a\x3e\x3cspan class\x3d"draft-saved-time"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e')[0], this.or = z.O("a", {
                "class": "zm-command-cancel",
                name: "cancel",
                href: "#"
            },
            "取消"), this.yn = z.O("a", {"class": "zg-r3px zg-btn-blue", name: "save", href: "#"}, "发布")]);
        this.Kb.appendChild(this.qc)
    };
    z.e.Ex = function () {
        var a = this;
        window.$.get("/draft/get", {qid: this.Fp}, function (b) {
            b.r || (a.Cu(b.msg), a.NN = b.msg)
        })
    };
    z.e.DF = function () {
        var a = [];
        if (!this.disabled) {
            var b = "修改";
            z.gm.Wd && z.gm.Wd[0] && (b = "修改（有未发布的编辑草稿）");
            a.push('\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e\x3cspan\x3e' + b + "\x3c/span\x3e\x3c/a\x3e")
        }
        return a.join("")
    };
    z.x(oO, z.cD);
    var pO = {pa: null, Xa: null, FE: !1, Uw: z.S};
    z.e = oO.prototype;
    z.e.oi = function () {
        oO.o.oi.call(this, {dE: ".zm-editable-content"})
    };
    z.e.RJ = function () {
        if (z.vm || this.options.FE) return !1;
        var a = (0, window.$)(".js-collapse-body", this.h)[0];
        return !!a && 1 < a.offsetHeight / z.$m.size.height
    };
    z.e.Zu = function () {
        z.zi("view_answer", "click_expand_answer", "answer_box_expand_answer")
    };
    z.e.Yu = function () {
        z.zi("view_answer", "click_collapse_answer", "answer_box_collapse_answer")
    };
    z.e.CH = function () {
        this.st()
    };
    z.e.C = function () {
        var a = this;
        oO.o.C.call(this);
        qO(this);
        this.Ve = z.N("zm-item-answer-author-info", this.h);
        this.kh && this.Ve && (this.HI = (this.qb = z.Va(this.Ve.innerHTML, "匿名用户")) ? null : this.Ve.innerHTML.replace(/src=".+?"/g, 'src\x3d"' + z.T[2] + '"'), this.Au(this.Uw.qb), this.v().g(this.Ve, "click", function (a) {
            "cancel-anon" === a.target.name && z.Ap(!1)
        }));
        this.cc();
        this.g("trackRequested", function (b) {
            b.label = "answer_box";
            b.value = (0, window.$)(a.h).index(".zm-item-answer") + 1;
            z.xi(b)
        })
    };
    z.e.cc = function () {
        this.Ve && this.v().g(this.Ve, "click", this.Qa);
        this.kh && (this.WM = z.T);
        this.v().g(z.Cp, "anon_change", function (a) {
            this.kh ? this.Au(a.qb) : this.Ri && this.XK && this.Ri.getState() === z.VC.zg && z.$C(this.XK)
        });
        rO(this);
        (0, window.$)(this.h).on("focusin focusout", function (a) {
            (0, window.$)(this).toggleClass("focusin", "focusin" === a.type)
        })
    };
    z.e.Pg = function (a) {
        return z.Er(this.h, a)
    };
    z.e.Qa = function (a) {
        var b = this.Pg(a.target);
        if (b = b && b.name) "edit" === b ? (b = gN(), this.kw || (iN(b), this.v().g(b, "change", this.Xz).g(b, "trackRequested", function (a) {
            a.label = "answer_box_edit_topic_experience";
            z.xi(a)
        })), this.kw = !0, kN(b), z.xi({
            category: "edit_profile",
            action: "click_edit_topic_experience_start",
            label: "answer_box_edit_topic_experience",
            attributes: {text: (0, window.$)(a.target).text()}
        })) : "complex" === b && (a = z.N("zm-item-answer-summary", this.h), b = z.N("zm-item-rich-text", this.h), z.Q(a, !1), z.Q(b, !0))
    };
    z.e.Xz = function () {
        var a = gN().Px() || "", b = z.N("bio", this.Ve);
        if (!b) {
            var c = z.N("author-link", this.Ve), b = z.O("span", "bio");
            z.bf(b, c)
        }
        a && (a = "，" + fM(a), a = z.Na(a));
        b.title = a;
        b.innerHTML = a
    };
    z.e.Au = function (a) {
        if (a) this.Ve.innerHTML = '匿名用户\x3ca class\x3d"zg-link-gray cancel-anon" href\x3d"#" name\x3d"cancel-anon"\x3e取消匿名\x3c/a\x3e'; else if (a = z.T.Jd ? "" : '\x3ca name\x3d"edit" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改话题经验\x3c/a\x3e', this.HI) this.Ve.innerHTML = this.HI + a; else {
            a = [];
            var b = z.T;
            a.push(1 === b || 0 === b ? "匿名用户" : ['\x3ca data-tip\x3d"p$t$', b[1], '" href\x3d"/people/', b[1], '" title\x3d"' + b[0] + '" class\x3d"', 'zm-item-link-avatar"\x3e', '\x3cimg class\x3d"zm-item-img-avatar" src\x3d"' +
            b[2] + '" /\x3e', "\x3c/a\x3e"].join(""));
            a.push(UL(z.T, "zm-item-answer-creator"));
            this.Ve.innerHTML = a.join("")
        }
    };
    z.e.Jj = function () {
        var a = this, b = (0, window.$)(this.m());
        b.slideUp(function () {
            a.kh ? (a.Do = !0, a.Jv = "set_delete", a.dispatchEvent("change")) : (a.H(), b.remove())
        })
    };
    z.e.na = function (a) {
        this.dispatchEvent(Object.assign({type: "trackRequested"}, a))
    };
    z.x(tO, z.R);
    z.e = tO.prototype;
    z.e.init = function () {
        z.gG.L(this);
        this.w(window.document.body)
    };
    z.e.C = function () {
        tO.o.C.call(this);
        vO(this);
        this.Zo = new QM;
        this.v().g(this.Zo, "change", this.qA);
        this.Zo.init();
        this.OJ();
        var a = z.L("zh-question-meta-wrap");
        a && (this.fu = new gO(this.data), this.L(this.fu), this.fu.w(a), this.fu.Db(this));
        uO(this);
        (a = z.sm.topic_errors_info) && z.Jn(a);
        this.Wy()
    };
    z.e.OJ = function () {
        this.data.bb = z.S.bb;
        this.oi();
        this.kx && (wO(this), xO(this));
        EO(this);
        (this.Fw = z.L("zg-question-suggested-topics")) && this.v().g(this.Fw, "click", this.yS);
        this.xo();
        this.v().g(window, "hashchange", function (a) {
            a = a.gc;
            a.oldURL && "writing" === a.oldURL.split("#")[1] || JO(this)
        });
        AO(this);
        HO(this);
        DO(this);
        JO(this, null);
        zO(this);
        z.hm && (0, window.setTimeout)(function () {
            window.location.href = z.hm
        }, 5E3)
    };
    z.e.Wy = function () {
        this.fJ ? (0, z.hG)("answer", this.Nh[this.fJ].bb, "read") : (0, z.hG)("question", this.data.bb, "read");
        this.v().g(this, ["click!", "show!"], function (a) {
            "comment" === a.namespace && a.yc.fill("category", "question_answer").fill("label", "question_answer");
            "invitation" === a.namespace && a.yc.fill("label", "question_page")
        })
    };
    z.e.qA = function () {
        this.EQ = !0;
        this.Ck = (0, window.$)(this.Zo.rS)[0];
        z.bf(this.Ck, z.N("zu-top"));
        z.Q(this.Ck, !0);
        z.rm.Ab || (this.yj = new z.bv, this.yj.w(this.Ck), HL(this.yj));
        this.v().g(this.Ck, "click", this.TF);
        JO(this)
    };
    z.e.oi = function () {
        this.kx ? yO(this, this.WQ) : yO(this, z.p)
    };
    z.e.WQ = function (a) {
        "close" === z.S.status || z.S.Eo || (a = a.target.m(), this.Pb = new KN(this.data.pa, "/question/detail", "content", !0, null, 600), LN(this.Pb, XL(this.data.mh)), z.N("zm-editable-content", a).innerHTML && (this.Pb.Dp = !0), this.Pb.w(a), this.v().g(this.Pb, "click_edit", function () {
            z.Y.tb("ga_question_supplement_edit_start")
        }), this.v().g(this.Pb, "cancel_edit", function () {
            z.Y.tb("ga_question_supplement_edit_cancel")
        }), this.v().g(this.Pb, "save_changed", function () {
            z.Y.tb("ga_question_supplement_edit_save_changed")
        }),
            this.v().g(this.Pb, "save_unchanged", function () {
                z.Y.tb("ga_question_supplement_edit_save_unchanged")
            }), this.Pb.addEventListener("beforeedit", z.HD({up: !0})))
    };
    z.e.TF = function (a) {
        if ("close" === a.target.name) {
            if (this.yj && (z.ev(this.yj), z.dv(this.yj, !1), window.history.replaceState)) {
                a = new z.ph(window.location.href);
                var b = a.ze();
                b.remove("q");
                b.remove("psq");
                window.history.replaceState({}, "", a.Me + "?" + b.toString())
            }
            z.Q(this.Ck, !1);
            z.Q(this.gu, !1)
        } else if ("A" === a.target.tagName && "zh-question-suggest-reask" === a.target.id && (z.Q(this.gu, !1), z.Lv.ba().show()), b = "a" === (0, window.$)(a.target).prop("tagName").toLowerCase() ? a.target : this.Pg(a.target, "A")) a.preventDefault(),
            a.stopPropagation(), a = b.getAttribute("data-source") || b.href, b = a.indexOf("#"), a = 0 > b ? null : a.substr(b + 1), JO(this, a ? (0, window.decodeURIComponent)(a) : a)
    };
    z.e.aQ = function () {
        var a = this.Mh, b = a.m(), c = a.se.Ua()[0];
        z.Q(b, !1);
        c = z.We((0, z.ab)(c));
        z.af(c, b);
        this.Nh[a.Xa] = null;
        this.Wq = z.mb(this.Wq, function (b) {
            return b !== a.Xa
        }, this);
        var d = 999;
        this.cw = z.mb(this.cw, function (b) {
            b.aid === a.Xa && (d = b.vote);
            return b.aid !== a.Xa
        }, this);
        z.P(b);
        a.H();
        BO(this, c, d)
    };
    z.e.Wz = function (a) {
        a = a.target;
        if (a instanceof oO) {
            var b = a.m();
            switch (a.Jv) {
                case "collap":
                    this.un.appendChild(b);
                    z.W.add(b, "zm-item-collapsed");
                    this.data.te--;
                    zO(this);
                    break;
                case "cancel_collap":
                    this.Yq.appendChild(b);
                    z.W.remove(b, "zm-item-collapsed");
                    CO(this, b);
                    this.data.te++;
                    zO(this);
                    break;
                case "set_delete":
                    DO(this);
                    this.data.te--;
                    zO(this);
                    break;
                case "cancel_delete":
                    CO(this, this.Nh[this.wi].m()), DO(this), this.data.te++, zO(this)
            }
        }
    };
    z.e.vF = function (a) {
        return this.Nh[a]
    };
    z.e.bW = function (a) {
        (a = z.Er(this.Wh, a.target)) && a.name && ("expand" === a.name ? (this.FN || GO(this), FO(this, !0)) : FO(this, !1))
    };
    z.e.IS = function () {
        var a = this.Nh[this.wi], b;
        a ? (sO(a), CO(this, a.m())) : (b = this.fk, a = new z.Z(!0), this.v().ya(a, "success", function () {
            window.location.href = "/question/" + z.S.bb + "/answer/" + b.url_token
        }), a.ajax("/answer/unremove", "aid\x3d" + b.id))
    };
    z.e.zS = function () {
        var a = this.hb, b = a.an && a.an.checked, c = Number(!a.iE.checked),
            a = {modal: !0, title: "确认放弃匿名身份？", content: "你在该问题下的赞同和关注行为将以实名显示。"}, d = (0, z.q)(function () {
                if (!this.xhr || !this.xhr.tc()) {
                    var a = this.hb.Zf();
                    if (a) {
                        var d = new z.Z(!0), h = new z.vh, k = b ? 1 : 0;
                        h.add("id", this.pa).add("content", a).add("anon", k).add("copyable", c);
                        d.on("success", function () {
                            z.S.qb !== k && (z.S.qb = k, z.Cp.dispatchEvent(new z.Bp(k)));
                            var a = z.Rn(this.xhr);
                            a ? a.r ? z.X.alert(a.msg) : (a = z.We((0, z.ab)(a.msg[0])), this.Yq.appendChild(a), BO(this,
                                a, this.Wq.length), z.xr(a), DO(this), qN(this.hb.OE), tN(this.hb.OE), this.hb.H(), z.S.qb || (new JN(this.data.bb, this.Nh[this.wi].bb)).render((0, window.$)(".zu-main-content-inner").get(0)), this.data.te++, zO(this)) : z.X.message("网络异常")
                        }, !1, this);
                        d.ajax("/answer/add", h.toString());
                        this.xhr = d
                    }
                }
            }, this);
        z.S.qb && !b ? z.X.confirm(a, function (a) {
            a && d()
        }) : d()
    };
    z.e.Pg = function () {
    };
    z.e.yS = function (a) {
        if ((a = this.Pg(a.target)) && a.name) {
            var b = a.name;
            "close" === b ? z.Q(this.Fw, !1) : "addtag" === b && (this.Oa.Ue(a.id.split("-")[1], a.innerHTML), z.Q(a, !1))
        }
    };
    z.e.xo = function () {
        this.nB = new YM(this.pa);
        this.nB.init()
    };
    z.x(KO, tO);
    z.e = KO.prototype;
    z.e.OJ = function () {
        (this.Lr = z.L("zh-single-answer-disable-wrap")) && this.v().g(this.Lr, "click", this.bV);
        MO(this);
        this.xo();
        PO();
        this.oi();
        var a = (0, window.$)("#zh-question-answer-collections \x3e .zh-general-list").get(0);
        if (a) {
            var b = new z.Cl({use: ["autoload", "nodeSource"]});
            this.L(b);
            b.w(a)
        }
        LO(this)
    };
    z.e.Wy = function () {
        this.v().g(this, ["click!", "show!"], function (a) {
            "invitation" === a.namespace && a.yc.fill("label", "answer_page")
        });
        KO.o.Wy.call(this)
    };
    z.e.bV = function (a) {
        a.target && a.target.name && sO(this.yb)
    };
    z.e.vF = function (a) {
        if (this.yb.Xa === a) return this.yb
    };
    z.e.XM = '\x3ch3\x3e关于作者\x3c/h3\x3e\x3c% if (author) { %\x3e\x3ca class\x3d"zm-list-avatar-link" href\x3d"/people/\x3c%\x3d author.url_token %\x3e" tabindex\x3d"-1"\x3e\x3cimg class\x3d"zm-list-avatar-medium" src\x3d"\x3c%\x3d author.avatar_path.replace("_s.","_m.") %\x3e"/\x3e\x3c/a\x3e\x3cdiv class\x3d"zm-list-content-medium"\x3e\x3ch2 class\x3d"zm-list-content-title"\x3e\x3ca href\x3d"/people/\x3c%\x3d author.url_token %\x3e"\x3e\x3c%\x3d author.fullname %\x3e\x3c/a\x3e\x3c/h2\x3e\x3cdiv class\x3d"zg-gray-normal"\x3e\x3c%\x3d author.headline || "" %\x3e\x3c/div\x3e\x3c/div\x3e\x3c% } else { %\x3e\x3ca class\x3d"zm-list-avatar-link" href\x3d"javascript:;"\x3e\x3cimg class\x3d"zm-list-avatar-medium" src\x3d"http://img.zhihu.dev:4080/66/6b/666b0abfc_m.jpg"/\x3e\x3c/a\x3e\x3cdiv class\x3d"zm-list-content-medium"\x3e\x3ch2 class\x3d"zm-list-content-title"\x3e匿名用户\x3c/h2\x3e\x3c/div\x3e\x3c% } %\x3e';
    z.e.xo = function () {
        this.nB = new YM(this.pa, this.yb);
        this.nB.init();
        var a = z.L("js-sidebar-author-info");
        a && (new nM(a)).init()
    };
    z.e.Wz = function (a) {
        a = a.target;
        if (a instanceof oO) switch (a.Jv) {
            case "collap":
                z.W.add(a.m(), "zm-item-collapsed");
                break;
            case "cancel_collap":
                z.W.remove(a.m(), "zm-item-collapsed");
                break;
            case "set_delete":
            case "cancel_delete":
                OO(this), window.location.reload()
        }
    };
    QO.prototype = {
        Hc: function (a) {
            if (a) this.MD.push(a); else {
                var b = {current: this.af, lo: this.lo(), Cs: this.Cs()};
                z.y(this.MD, function (a) {
                    (0, window.setTimeout)(function () {
                        a.call(null, b)
                    })
                })
            }
        }, remove: function (a) {
            a = this.items.indexOf(a);
            -1 !== a && (this.items.splice(a, 1), this.Ro = Math.ceil(this.items.length / this.jm), this.Hc());
            return a
        }, lo: function () {
            return this.af < this.Ro
        }, Cs: function () {
            return 1 !== this.af
        }, next: function () {
            this.lo() && (this.af += 1, this.Hc())
        }, prev: function () {
            this.Cs() && (--this.af, this.Hc())
        }, random: function (a) {
            if (2 <=
                this.Ro) {
                for (var b = [], c = 1; c < this.Ro + 1; c++) b.push(c);
                0 !== a && z.tb(b, this.af);
                this.af = b[Math.floor(Math.random() * b.length)]
            } else a === this.jm && this.items.reverse(), this.af = 1;
            this.Hc();
            return this.items.length > this.jm
        }
    };
    z.l(UO, z.R);
    UO.prototype.C = function () {
        z.R.prototype.C.call(this);
        this.nb = (0, window.$)(this.m());
        this.Hq = this.nb.find(".js-pager");
        this.$a = this.nb.find(".js-list");
        this.pL = this.nb.find(".js-hidden-list");
        this.Kx = (this.UJ = !!this.nb.closest(".zu-main-sidebar").length) ? "zg-follow" : "zg-btn-follow";
        this.FW = this.UJ ? "zg-unfollow" : "zg-btn-unfollow";
        VO(this);
        YO(this)
    };
    var ZO = "follow_topic", $O = "unfollow_topic", WO = 6;
    z.l(aP, z.R);
    z.e = aP.prototype;
    z.e.init = function () {
        this.w((0, window.$)(".js-topic-feed-page")[0])
    };
    z.e.C = function () {
        z.R.prototype.C.call(this);
        this.nb = (0, window.$)(this.m());
        this.sR = !this.nb.find(cP).length;
        this.Gh = this.nb.find(".js-topic-cat-main");
        this.Tm = this.nb.find(".js-topic-title");
        this.Eq = this.nb.find(".js-feed-switcher");
        var a = (0, window.$)(".topic-recommend");
        if (a.length) {
            var b = new UO;
            b.w(a[0]);
            this.v().g(b, ZO, this.KP).g(b, $O, this.vQ)
        }
        this.$a = this.nb.find(".zh-general-list");
        this.$a.length && lP(this);
        bP(this);
        fP(this);
        this.Xy()
    };
    z.e.hG = function (a) {
        var b = (0, window.decodeURIComponent)(window.location.hash.slice(1)), c = this.Gh.find(cP), b = kP(c, b);
        !b.length && a.data ? (b = c.eq(0), this.nb.find(cP + "." + sQ).removeClass(sQ), b.addClass(sQ), this.Tm.show(), this.YC(), window.location.hash = "") : b.length && (a = b.data("id"), this.$a.hide(), this.Tm.hide(), c = b, this.nb.find(cP + "." + sQ).removeClass(sQ), c.addClass(sQ), c = this.Eq.find("a"), c.removeClass(gP), c.eq(0).addClass(gP), hP(this, a), mP(this, a, b))
    };
    z.e.KP = function (a) {
        iP(this, 1);
        a = a.data;
        this.Gh.find(".zm-topic-cat-more").length || this.Gh.append(eP(this, a))
    };
    z.e.vQ = function (a) {
        iP(this, -1);
        this.Gh.find('li[data-id\x3d"' + a.data.id + '"]').remove()
    };
    z.e.YC = function () {
        if (!this.$a.show().children().length) return this.$a.html('\x3cp class\x3d"zg-gray-normal" style\x3d"text-align:center;line-height:4;"\x3e该话题暂无动态\x3c/p\x3e')
    };
    z.e.Xy = function () {
        function a(a, c) {
            var d = {action: a, category: "topic"};
            c && (d.attributes = c);
            z.xi(d)
        }

        this.nb.on("click", ".js-topic-cat-main .zm-topic-cat-item", function (b) {
            a("click_topic", {topic_id: (0, window.$)(b.currentTarget).data("id")})
        }).on("click", ".topic-recommend .zg-follow", function () {
            a("click_follow_topic")
        }).on("click", ".topic-recommend .js-pager", function () {
            a("click_change_topics")
        }).on("click", ".js-topic-more a", function () {
            a("click_expand")
        }).on("click", ".js-topic-all a", function () {
            a("click_read_more")
        })
    };
    var sQ = "current", gP = "current", cP = ".zm-topic-cat-item", dP = 100,
        nP = '\x3cli class\x3d"zm-topic-cat-item" data-id\x3d"\x3c%\x3d id %\x3e" data-href\x3d"/topic/\x3c%\x3d url_token %\x3e"\x3e\x3ca href\x3d"#\x3c%\x3d name %\x3e"\x3e\x3c%\x3d name %\x3e\x3c/a\x3e\x3c/li\x3e';
    z.x(oP, z.R);
    oP.prototype.init = function () {
        z.gG.L(this);
        this.w(window.document.body)
    };
    oP.prototype.C = function () {
        oP.o.C.call(this);
        this.Sy("zh-question-followers-list-wrap")
    };
    oP.prototype.Sy = function (a) {
        if (a = z.L(a)) {
            var b = new z.Cl;
            this.L(b);
            b.use("locationSource");
            b.w(a)
        }
    };
    z.x(pP, z.R);
    pP.prototype.init = function () {
        z.gG.L(this);
        this.w(window.document.body);
        this.Qs();
        rP(this);
        sP(this);
        qP()
    };
    pP.prototype.Qs = function () {
        function a(a) {
            if ((0, window.$)(a).hasClass("article-item")) return new z.jD;
            var b = new z.R;
            (0, window.$)(".answer-item", a).each(function () {
                var a = new z.cD;
                b.L(a);
                a.w(this)
            });
            return b
        }

        var b = this;
        (0, window.$)("[data-paging]").each(function () {
            var c = new z.Cl({use: ["dataPagingSource"]});
            c.use("childConstructor", {factory: a});
            var d = (0, window.$)(this).data("navigable");
            d && c.use("shortcut", d);
            b.L(c);
            c.w(this)
        })
    };
    z.l(tP, z.R);
    tP.prototype.Y = function (a) {
        z.R.prototype.Y.call(this, a);
        this.MH = uP(a);
        this.Df = z.bn.dL(this.h)
    };
    tP.prototype.Fc = function () {
        this.hp()
    };
    tP.prototype.hp = function () {
        this.dispatchEvent("Ignore")
    };
    z.l(vP, tP);
    vP.prototype.C = function () {
        tP.prototype.C.call(this);
        this.SC = this.MH.actionCardType;
        switch (this.SC) {
            case "popular_topics":
                wP(this);
                break;
            case "validation_reminder":
                xP(this);
                break;
            case "headline_reminder":
                yP(this);
                break;
            case "avatar_reminder":
                zP(this);
                break;
            case "suggested_question":
                this.entryType = "question", this.jb = this.MH.questionId, (0, window.$)(".js-toggleCommentBox", this.m()).on("click", this.fG.bind(this))
        }
    };
    vP.prototype.hp = function () {
        tP.prototype.hp.call(this);
        window.$.post("/actioncard/uninterest", {type: this.SC})
    };
    vP.prototype.xi = function () {
        var a = (0, window.$)(".profile-reminder-template", this.h).html(), a = (0, window.$)(a), b = z.T.pG;
        b && a.find(".js-headline").text(b);
        a.find(".js-avatar-wrapper .avatar").attr({src: z.T.be("xs"), srcset: z.T.be("l") + " 2x"});
        (0, window.$)(this.h).closest(".js-inner").replaceWith(a)
    };
    vP.prototype.Rx = function () {
        return (0, window.$)(".js-contentActions", this.m())[0]
    };
    z.Ca(vP.prototype, z.sG);
    z.l(AP, z.xC);
    z.e = AP.prototype;
    z.e.Y = function (a) {
        z.xC.prototype.Y.call(this, a);
        BP(this)
    };
    z.e.C = function () {
        z.xC.prototype.C.call(this);
        this.Yy();
        CP(this);
        var a = this.m();
        (0, window.$)(".js-adView", a).each(function () {
            var a = (0, window.$)(this);
            z.Gn(a[0], function () {
                z.nw(a.data("view-track"))
            })
        });
        (0, window.$)("a.js-adLink", a).one("click", function () {
            var a = (0, window.$)(this), c = a.attr("href");
            a.attr("href", z.So(c, "click", 1))
        })
    };
    z.e.Fc = function () {
        z.nw(this.Ng["close-track"]);
        this.dispatchEvent("Ignore")
    };
    z.e.expand = function () {
        this.ob || (this.ob = !0, z.W.add(this.h, this.Yr), this.dispatchEvent("expand"), this.Zu())
    };
    z.e.collapse = function () {
        this.ob && (this.ob = !1, z.W.remove(this.h, this.Yr), this.dispatchEvent("collapse"), this.Yu())
    };
    z.e.Zu = function () {
        var a = (0, window.$)(this.m()).index() + 1;
        z.zi("view_ad", "click_expand_answer", "feed_ad_vote_up_expand_ad", a)
    };
    z.e.Yu = function () {
        var a = (0, window.$)(this.m()).index() + 1;
        z.zi("view_ad", "click_collapse_answer", "feed_ad_collapse_ad", a)
    };
    z.e.MT = function () {
        window.open(tQ, "_blank")
    };
    var tQ = "/promotion-intro";
    z.Ca(AP.prototype, z.tG);
    z.l(DP, z.xC);
    DP.prototype.Fc = function () {
        window.$.post("/column/uninterest", {id: this.jb});
        this.dispatchEvent("Ignore")
    };
    z.l(EP, z.xC);
    EP.prototype.Fc = function () {
        window.$.post("/roundtable/" + this.tj, {action: "mute"});
        this.dispatchEvent("Ignore")
    };
    z.x(FP, z.R);
    z.e = FP.prototype;
    z.e.C = function () {
        FP.o.C.call(this);
        this.jn();
        z.xo(this, {module: "FeedItem", index: ""})
    };
    z.e.Y = function (a) {
        FP.o.Y.call(this, a);
        GP(this, a)
    };
    z.e.sj = function () {
        this.sj = !0
    };
    z.e.jn = function (a) {
        var b = {
            ".js-ignoreContentItem": this.NP,
            ".js-unIgnoreContentItem": this.wQ,
            ".js-ignoreRelatedContentItem": this.OP,
            ".js-close": this.Jj,
            'a[name\x3d"dislike"]': this.rP,
            ".column[data-entry-url]": this.OF
        };
        z.Mb(b, a || {});
        z.Db(b, function (a, b) {
            if (z.sa(a)) (0, window.$)(this.h).on("click", b, window.$.proxy(a, this))
        }, this)
    };
    z.e.Jj = function () {
        var a = this, b = (0, window.$)(this.m());
        b.slideUp(function () {
            a.H();
            b.remove()
        })
    };
    z.e.NP = function () {
        if (this.xe && this.xe.Fc) {
            var a = (0, window.$)(".feed-hide-options", this.h), b = !!a.length;
            this.xe.Fc(b);
            b && a.show().siblings().hide()
        }
    };
    z.e.wQ = function () {
        if (this.xe && this.xe.xy) {
            var a = (0, window.$)(".feed-hide-options", this.h), b = !!a.length;
            this.xe.xy();
            b && a.hide().siblings().show()
        }
    };
    z.e.OP = function (a) {
        this.xe && this.xe.oy && this.xe.oy(a)
    };
    z.e.rP = function () {
        var a = this, b = (0, window.$)(this.h), c = (0, window.$)(".undo-dislike-options", b);
        if (!c.length && this.xe && this.xe.Fc) this.xe.Fc(); else {
            var d = (0, window.$)(".feed-item-inner", b), f = c.data();
            c.off().one("click", ".revert", function () {
                d.slideDown();
                c.slideUp();
                window.$.post("/topstory/item/uninterest/revert", f)
            }).one("click", ".close", function () {
                a.Jj()
            });
            window.$.post("/topstory/item/uninterest", f).done(function () {
                d.slideUp();
                c.slideDown()
            })
        }
    };
    var RP = (0, window.$)("#is-topstory").length ? "topstory2" : "homefeed", JP = z.C && !z.E(9),
        MP = {ac: "actioncard", q: "question", a: "answer", p: "article", c: "column", r: "roundtable"},
        OP = {question: "question", answer: "question", article: "column", column: "column", roundtable: "roundtable"},
        PP = {question: "question", answer: "question", article: "article", column: "column", roundtable: "roundtable"};
    IP.prototype.hc = function () {
        this.yC = (0, window.$)('meta[itemprop\x3d"ZReactor"]', this.Fh);
        this.yC.length && (LP(this), this.XQ())
    };
    IP.prototype.lU = function () {
        var a = [], b = z.Qr(550, function () {
            a.length && (KP(a), a = [])
        });
        return function (c) {
            a.push(c);
            b()
        }
    }();
    IP.prototype.XQ = z.Qj(function () {
        z.F(z.Y, "click_feed_fresh", function (a) {
            KP({
                mid: z.sm.ga_vars.user_hash,
                object_type: "btn",
                object_id: 2,
                object_meta: {load_items: a.data.count},
                action_type: "click",
                context: RP,
                others: "",
                time: (0, z.I)()
            })
        });
        z.F(z.Y, "topstory_feed_more", function () {
            KP({
                mid: z.sm.ga_vars.user_hash,
                object_type: "btn",
                object_id: 1,
                object_meta: {next: (0, window.$)("#js-home-feed-list .feed-item").length + 1},
                action_type: "click",
                context: RP,
                others: "",
                time: (0, z.I)()
            })
        })
    });
    z.x(SP, z.pD);
    SP.prototype.ik = function (a) {
        a && !a.r && (a = a.msg, a.length ? (z.Q(this.Md, 0 < a.length), this.offset += a.length, this.$q(a), z.qD(this, !1), z.sD(this)) : this.Nk.hide())
    };
    var uQ = {
        ROUNDTABLE_ADD_RELATED: "roundtable",
        ARTICLE_VOTE_UP: "post_vote",
        ARTICLE_CREATE: "post_create",
        RECOMMENDED: "feed_recommended",
        QUESTION_FOLLOW: "feed_question_follow",
        QUESTION_CREATE: "feed_question",
        ANSWER_VOTE_UP: "feed_answer_vote",
        ANSWER_CREATE: "feed_answer_answer"
    };
    SP.prototype.tQ = function (a) {
        var b = a.currentTarget.h.getAttribute("data-feedtype"), b = uQ[b];
        "comment" === a.namespace && b && a.yc.fill("category", "feed").fill("label", b)
    };
    SP.prototype.Kt = function (a) {
        var b = HP(a);
        b.sj();
        this.L(b);
        this.v().g(b, "click!", this.tQ);
        b.w(a);
        new IP(b);
        z.Gn(a, function () {
            (0, z.Gm)(a, {element: "ListItem"})
        });
        return b
    };
    SP.prototype.BA = function (a) {
        return {params: a, method: "next"}
    };
    z.l(TP, z.R);
    TP.prototype.C = function () {
        z.R.prototype.C.call(this);
        this.Ad = (0, window.$)(this.m());
        UP(this);
        this.Vi = (0, window.$)("#zh-main-feed-fresh-button");
        this.Vi.length && (this.Vi.click(window.$.proxy(this.FU, this)), this.bH ? this.v().g(z.Y, "topstory2", this.WH) : this.v().g(z.Y, "homefeed", this.WH));
        WP(this);
        XP(this)
    };
    TP.prototype.CT = function () {
        this.Xo.ti();
        window.$.get("/node/HomeTopics", function (a) {
            a && (0, window.$)(a).insertBefore("#zh-home-list-title")
        })
    };
    TP.prototype.WH = function (a) {
        !this.Vi.hasClass("disabled") && (a = (0, window.parseInt)(a.xf, 10)) && (this.ih += a, this.Vi.text((99 < this.ih ? "99+" : this.ih) + " 条新动态").show())
    };
    TP.prototype.FU = function () {
        var a = this;
        this.Vi.text("加载中…").addClass("disabled");
        var b = this.ih;
        z.Y.tb({type: "click_feed_fresh", data: {count: b}});
        window.$.post(this.YN, this.Xo.BA({
            action: "live",
            limit: b,
            start: this.Xo.sA(this.Xo.gb()[0])
        })).done(function (c) {
            a.Vi.removeClass("disabled");
            a.ih -= b;
            0 >= a.ih && a.Vi.hide();
            if (c && c.msg.length) {
                a.rv || (a.rv = (0, window.$)('\x3cdiv class\x3d"feed-item-hook feed-divider"\x3e\x3cspan\x3e上次你看到这里\x3c/span\x3e\x3c/div\x3e'));
                var d = (0, window.$)("." + a.gF, a.Ad).eq(0);
                d.length &&
                3 <= b ? a.rv.insertBefore(d) : a.rv.remove();
                a.Xo.$q(c.msg, "prepend")
            }
        });
        (0, z.Gi)(this, {action: "LoadNewFeed", element: "Button"})
    };
    z.x(YP, z.Xj);
    YP.prototype.init = function () {
        var a = z.L("home-suggest-block");
        a && (this.h = a, a = z.L("home-suggest-close-button"), this.v().ya(a, "click", function () {
            (new z.Z(!0)).ajax("/option", "key\x3dno_show_lookup\x26value\x3d1");
            z.Q(this.h, !1)
        }), a = z.L("home-suggest-refresh-button"), this.v().g(a, "click", this.kT), this.ot = z.L("home-suggest-list"), aQ(this))
    };
    YP.prototype.kT = function () {
        ZP(this);
        return !0
    };
    YP.prototype.MS = function (a) {
        a.r || ((a = a.msg) && z.na(a) && a.length ? (this.Cy = [], this.yE = a, ZP(this)) : this.ot.innerHTML = "")
    };
    z.la(bQ);
    z.x(eQ, z.R);
    eQ.prototype.init = function () {
        z.gG.L(this);
        this.w(window.document.body)
    };
    eQ.prototype.C = function () {
        eQ.o.C.call(this);
        z.Jq(z.p, {Gt: !0})();
        var a = z.L("js-home-feed-list");
        if (a) {
            var b = new TP;
            this.L(b);
            b.w(a)
        }
        z.L("home-settings-page-wrap") && (a = z.L("zh-topic-block-editor")) && (new z.wt(z.mm)).w(a);
        (new YP).init();
        fQ();
        a = bQ.ba();
        cQ(a)
    };
    z.x(gQ, z.R);
    gQ.prototype.init = function () {
        z.gG.L(this);
        this.w(window.document.body)
    };
    gQ.prototype.C = function () {
        gQ.o.C.call(this);
        var a = (0, window.$)("#zh-following-question-item-list").children(".zh-general-list");
        if (a.length) {
            var b = new z.Cl;
            this.L(b);
            b.use("nodeSource");
            b.w(a.get(0))
        }
    };
    z.x(hQ, z.R);
    hQ.prototype.init = function () {
        z.gG.L(this);
        this.w(window.document.body)
    };
    hQ.prototype.C = function () {
        hQ.o.C.call(this);
        iQ(this);
        this.Qy();
        kQ(this);
        lQ();
        this.v().g(this, "click!", function (a) {
            "comment" === a.namespace && a.yc.fill("category", this.lh).fill("label", this.CO)
        })
    };
    hQ.prototype.Qy = function () {
        var a = 1, b = (0, window.$)("ul.hot-favlists"), c = null;
        (0, window.$)("#js-hot-fav-switch").click(function () {
            c && "pending" === c.state() || (a = 5 <= a ? 1 : a + 1, c = OM(a).done(function (a) {
                b.html(a)
            }))
        });
        b.on("click", ".content \x3e a", function () {
            var a = (0, window.$)(this).closest("li").index() + 1;
            z.xi({
                category: "collection",
                action: "visit_collection",
                label: "explore_sidebar_trending_collections_collection_name",
                value: a
            })
        })
    };
    z.x(jQ, z.Cl);
    jQ.prototype.C = function () {
        jQ.o.C.call(this);
        this.use("childConstructor", {$h: z.cD})
    };
    z.v("ZH.entryQuestionFollowersPage", function () {
        (new oP).init()
    });
    z.v("ZH.entrySQ", function () {
        (new tO).init()
    });
    z.v("ZH.entrySA", function () {
        (new KO).init()
    });
    z.v("ZH.entryL", function () {
        (new RM).init()
    });
    z.v("ZH.entryT", function () {
        (new rM).init()
    });
    z.v("ZH.entrySearch", function () {
        (new pP).init()
    });
    z.v("ZH.entryPM", function () {
        (new kM).init()
    });
    z.v("ZH.entryPMDetail", function () {
        (new gM).init()
    });
    z.v("ZH.entryTopicFeed", function () {
        (new aP).init()
    });
    z.v("ZH.entryHome", function () {
        (new eQ).init()
    });
    z.v("ZH.entryQuestionFollowing", function () {
        (new gQ).init()
    });
    z.v("ZH.entryExplore", function () {
        (new hQ).init()
    });
    z.jg("page-main");
}).call(this, __z_z__);
//# sourceURL=/static/revved/-/js/closure/page-main.5d4c554d.js