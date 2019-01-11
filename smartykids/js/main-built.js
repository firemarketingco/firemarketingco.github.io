$(document).ready(function() {
    function a(a) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)
    }

    function b(a, b) {
        a.parent(".input").addClass("st-error"), a.parent(".input").next(".input__errortext").text(b).slideDown(300)
    }

    function c(a) {
        a.parent(".input").removeClass("st-error"), a.parent(".input").next(".input__errortext").slideUp(300, function() {
            $(this).text("")
        })
    }

    function d() {
        $("body").addClass("st-scroll"), $("html").addClass("st-margin").css({
            "margin-right": $.scrollbarWidth()
        })
    }

    function e() {
        $("body").removeClass("st-scroll"), $("html").removeClass("st-margin").removeAttr("style")
    }

    function f() {
        var a = 0;
        $(".connect-rama--frame .connect-box").css({
            height: "auto"
        }), $(".connect-rama--frame .connect-box").each(function() {
            var b = $(this).outerHeight();
            b > a && (a = b)
        }), $(".connect-rama--frame .connect-box").height(a - 50 - 65), s.resize({
            width: "100%",
            height: a
        }, 200)
    }

    function g() {
        var a = $(".review-rama").find(".fotorama__active .review-box_item").outerHeight();
        u.resize({
            height: a
        }, 200)
    }

    function h() {
        var a = $(".team-rama").find(".fotorama__active .team-list_item").outerHeight();
        w.resize({
            height: a
        }, 200)
    }
    if ($.scrollbarWidth = function() {
            var a, b, c;
            return void 0 === c && (a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), c = b.innerWidth() - b.height(99).innerWidth(), a.remove()), c
        }, $(".promo-rama").length > 0) {
        var i = $(".promo-rama").fotorama(),
            j = i.data("fotorama");
        j.resize({
            width: "100%"
        }), $(window).on("load resize", function() {
            $(this).width() + $.scrollbarWidth() > 650 ? j.resize({
                ratio: 2.05
            }) : j.resize({
                ratio: 41 / 30
            })
        }), j.setOptions({
            nav: !1,
            arrows: !0,
            loop: !0,
            click: !1,
            swipe: !0,
            trackpad: !0,
            allowfullscreen: !0,
            fit: "cover",
            transition: "slide",
            autoplay: 6e3,
            stopautoplayontouch: !0
        })
    }
    if ($(".js-scroll").on("click", function(a) {
            a.preventDefault();
            var b = $(this).attr("href"),
                c = $("." + b).position().top;
            $("html, body").animate({
                scrollTop: c
            })
        }), $("#gmap").length > 0) {
        var k = new google.maps.LatLng(54.854093, 83.112198),
            l = {
                center: k,
                zoom: 17,
                disableDefaultUI: !0,
                scrollwheel: !1,
                draggable: !0
            },
            m = new google.maps.Map(document.getElementById("gmap"), l),
            n = $(".contacts-box-map--data").html(),
            o = new google.maps.InfoWindow({
                content: n
            }),
            p = new google.maps.Marker({
                position: k,
                map: m,
                title: "Uluru (Ayers Rock)"
            });
        p.addListener("click", function() {
            o.open(m, p)
        });
        var q = [{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }];
        m.setOptions({
            styles: q
        })
    }


    if ($(".review-rama").length > 0) {
        $(".review-rama").on("fotorama:ready fotorama:show", function() {
            var a = $(this).data("fotorama");
            $(".review-rama-control_item").removeClass("st-active"), $(".review-rama-control_item").eq(a.activeIndex).addClass("st-active")
        }).fotorama();
        var t = $(".review-rama").fotorama(),
            u = t.data("fotorama");
        u.resize({
            width: "100%",
            height: 400
        }), u.setOptions({
            nav: !1,
            arrows: !1,
            loop: !1,
            click: !1,
            swipe: !0,
            trackpad: !0,
            allowfullscreen: !1,
            fit: "contain",
            transition: "slide",
            autoplay: !1,
            stopautoplayontouch: !0
        }), $(".review-rama").on("fotorama:showend", function(a, b) {
            g()
        }), $(window).on("load resize", function() {
            g()
        }), $(".review-rama-control_item").click(function() {
            var a = $(this).index();
            u.show(a)
        })
    }
    if ($(".team-rama").length > 0) {
        $(".team-rama").on("fotorama:ready fotorama:show", function() {
            var a = $(this).data("fotorama");
            $(".team-rama-control_item").removeClass("st-active"), $(".team-rama-control_item").eq(a.activeIndex).addClass("st-active")
        }).fotorama();
        var v = $(".team-rama").fotorama(),
            w = v.data("fotorama");
        w.resize({
            width: "100%",
            height: 400
        }), w.setOptions({
            nav: !1,
            arrows: !1,
            loop: !1,
            click: !1,
            swipe: !0,
            trackpad: !0,
            allowfullscreen: !1,
            fit: "contain",
            transition: "slide",
            autoplay: !1,
            stopautoplayontouch: !0
        }), $(".team-rama").on("fotorama:showend", function(a, b) {
            h()
        }), $(window).on("load resize", function() {
            h()
        }), $(".team-rama-control_item").click(function() {
            var a = $(this).index();
            w.show(a)
        })
    }
    $(".partners-tumbler-main").on("click", function() {
        $(this).hasClass("st-active") || ($(".partners-tumbler-main").removeClass("st-active"), $(".partners-tumbler-info").slideUp(200)), $(this).toggleClass("st-active"), $(this).next(".partners-tumbler-info").slideToggle(200)
    }), $(".js-parallax").each(function() {
        var a = $(this),
            b = a.find(".js-parallax-obj");
        $(window).on("load resize scroll", function() {
            if ($(this).width() + $.scrollbarWidth() > 650) {
                $(this).height();
                b.each(function() {
                    var b = $(this).data("threshold"),
                        c = $(this).data("step"),
                        d = -(($(window).scrollTop() - a.offset().top + a.outerHeight() * b) / c);
                    if ($(this).hasClass("px-totop")) $(this).css({
                        top: d + "px"
                    });
                    else {
                        var d = d / 2;
                        $(this).css({
                            bottom: d + "px"
                        })
                    }
                })
            } else $(".js-parallax-obj").removeAttr("style")
        })
    })
});