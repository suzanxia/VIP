(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this;
            var elems = {},
                init, start;
            init = function() {
                console.log(_that);
                elems.banner_all = _that.children(".banner-all-imgs");
                elems.img = elems.banner_all.children("img");
                elems.cir = _that.children(".banner-circle").children();
                elems.left = -elems.img.first().width();
                elems.index = 0;
                start();
            };
            start = function() {
                timeout = setInterval(function() {
                    if (elems.index == 2) {
                        elems.banner_all.css("left", 0);
                        elems.index = 0;
                    }
                    elems.banner_all.animate({
                        left: elems.index * elems.left
                    }, 1000).delay(1000);
                    elems.cir.removeClass("active");
                    $(elems.cir).eq(elems.index - 1).addClass("active");
                    elems.index++;
                }, 3000);
            };
            init();

        },
        category: function() {
            var _that = this;
            var elems = {},
                init, start;
            init = function() {
                var
            }
        }
    })
})(jQuery);