(function($) {
    $.fn.extend({
        header: function() {
            var _that = this;
            var li = _that.children(".header-cons").children("ul").children(".c");
            var span = li.children("a").children(".skew-r");
            $(li).mouseenter(function() {
                $(this).prev(".c").children("a").children(".skew-r").hide();
            });
        },
        close: function() {
            var _that = this;
            var dd_first = _that.children("dl").children("dd").first();
            var clo_fath = _that.children("dl").children("dd").children(".pp-left");
            var clo = _that.children("dl").children("dd").children(".pp-left").children(".close");
            console.log(clo_fath);
            $("dd").hover(function() {
                clo_fath.animate({
                    "display": "block",
                    "right": "100%"
                }, 100);
                console.log(1);
            }, function() {
                clo_fath.animate({
                    "display": "none",
                    "right": "-100%"
                }, 100);
            });
            $("dd").hover(function() {
                $(".pp").animate({
                    "right": "100%"
                }, 50);
                console.log(1);
            }, function() {
                $(".pp").animate({
                    "right": "-100%"
                }, 50);
            });
            clo.click(function() {
                clo_fath.css("display", "none");
            });
        }
    });

})(jQuery);