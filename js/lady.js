(function($) {
    $.fn.extend({
        cate: function() {
            var _that = this;
            var elems = {},
                init;
            init = function() {
                elems.dl = _that.children("dl");
                elems.dd = elems.dl.children("dd");
                elems.dl_cons = _that.children(".dl-cons");
                elems.dl_a = elems.dl_cons.children(".dl_a");
                elems.dl_height = elems.dl_a.children("a").height() * 2;
                elems.index = 0;
                elems.dd.removeClass("current");
                elems.dd.first().addClass("current");
                start();
            }
            start = function() {
                elems.dd.mouseover(function() {
                    elems.index = elems.dd.index($(this));
                    elems.dd.removeClass("current");
                    elems.dd.eq(elems.index).addClass("current");
                    elems.dl_a.animate({
                        top: -elems.index * elems.dl_height
                    }, 1000);
                });

            };
            init();
        }
    });
})(jQuery);