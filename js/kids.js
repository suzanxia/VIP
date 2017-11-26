(function($) {
    $.fn.extend({
        header: function() {
            var _that = this;
            var li = _that.children(".header-cons").children("ul").children(".c");
            var span = li.children("a").children(".skew-r");
            // console.log(li.length);
            li.hover(function() {
                // console.log(li);
                $(this).prev(".c").children("a").children("span").hide();
            }, function() {

            });
        },
        slider: function(options) {
            var _that = this,
                main, init, start, stop, prev, next
            elems = {},
                defaults = {
                    speed: 3000,
                    delay: 1000
                },
                options = $.extend(defaults, options);
            init = function() {
                elems.span_btn = $(_that).children("span");
                elems.ul_img = _that.children("ul").first();
                elems.li = elems.ul_img.children("li");
                elems.li_img = elems.li.children("img");
                elems.li_words = $(_that).children("ul").last().children("li");
                // console.log(elems.li_words);
                elems.ul_words_width = _that.children("ul").last().width() / 3;
                elems.li_line = _that.children("ul").children().last();
                elems.len = elems.li.length;
                elems.index = 0;
                elems.left = -(elems.li.width()) / 4;
                _that.hover(function() {
                    stop();
                    elems.li_words.mouseover(function() {
                        var li_index = $(elems.li_words).index($(this));
                        elems.li_line.animate({
                            left: li_index * elems.ul_words_width
                        }, 500);
                        elems.li.animate({
                            left: li_index * (elems.left)
                        }, 500);
                    })
                }, function() {
                    start();
                });
                elems.span_btn.first().on("click", function() {
                    prev();
                });
                elems.span_btn.last().on("click", function() {
                    next();
                });
            }
            start = function() {
                timeout = setInterval(function() {
                    if (elems.index == 4) {
                        elems.li_line.css("left", 0);
                        elems.li.css("left", 0);
                        elems.index = 0;
                    }
                    if (elems.index == 1) {
                        elems.li_line.css("left", 0);
                    }
                    elems.li.animate({
                        left: elems.left * elems.index
                    }, 500).delay(options.delay);
                    elems.li_line.animate({
                        left: elems.index * (elems.ul_words_width)
                    }, 500);
                    elems.index++;
                }, options.speed);
            };
            stop = function() {
                elems.li.stop(true, true);
                clearInterval(timeout);
            };
            prev = function() {
                if (elems.index == 0) {
                    elems.li.css("left", elems.left * 3);
                    elems.index = 3;
                }
                elems.index--;
                // console.log(elems.index);
                elems.li.animate({
                    left: elems.left * elems.index
                }, 500);

            };
            next = function() {
                if (elems.index == 3) {
                    elems.li.css("left", 0);
                    elems.index = 0;
                }
                elems.index++;
                elems.li.animate({
                    left: elems.left * elems.index
                }, 500);
            };
            main = function() {
                init();
                start();
            }
            main();

        },
        kid: function() {
            var _that = this;
            var elems = {},
                init;
            init = function() {
                elems.dl = _that.children(".special-cons-left").children("dl");
                elems.dd = elems.dl.children("dd");
                elems.dl_cons = _that.children(".special-cons-right");
                elems.dl_a = elems.dl_cons.children("dl");
                elems.dl_height = elems.dl_a.children("dd").height() * 2;
                elems.index = 0;
                console.log(elems.dl_height);
                elems.dd.removeClass("active");
                elems.dd.first().addClass("active");
                start();
            }
            start = function() {
                elems.dd.mouseenter(function() {
                    elems.index = $(this).index();
                    elems.dd.removeClass("active");
                    elems.dd.eq(elems.index).addClass("active");
                    elems.dl_a.animate({
                        top: -elems.index * elems.dl_height
                    }, 1000);
                });

            };
            init();
        }
    });
})(jQuery);