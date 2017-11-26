(function($) {
    $.fn.extend({
        cat: function() {
            var _that = this;
            var elems = {},
                init;
            init = function() {
                elems.ul = _that.children(".list-left");
                elems.li = elems.ul.children("li");
                elems.cons = _that.children(".list-right");
                elems.ul_a = elems.cons.children('.list-right-inner');
                console.log(elems.ul_a);
                elems.li_height = elems.ul_a.height() / 6;
                console.log(elems.li_height);
                elems.index = 0;
                elems.li.removeClass("active");
                elems.li.first().addClass("active");
                console.log(elems.li);
                start();
            }
            start = function() {
                elems.li.hover(function() {
                    // console.log($(this));
                    elems.index = elems.li.index($(this));
                    // console.log(elems.index);
                    elems.li.removeClass("active");
                    elems.li.eq(elems.index).addClass("active");
                    elems.ul_a.css("top", -(elems.index * elems.li_height));
                });
            };
            init();
        }
    });
})(jQuery);