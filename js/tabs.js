//封装格式：一个即时函数
// (function($){

// })($)
(function($) {
    $.fn.extend({
        tabs: function(options) {
            var _that = this, //保存当前上下文环境（this指针）
                init = null, //初始化
                defaults = { //默认值
                    event: 'click',
                    activ: 'activ',
                    show: 'show'
                };
            options = $.extend(defaults, options); //合并对象

            init = function() {
                var tabsBtn = _that.children('.circle').children('span'),
                    tabsImg = _that.children('.imag').children('li');
                tabsBtn.on(options.event, function() {
                    var _index = tabsBtn.index($(this));
                    $(this).addClass('active').siblings().removeClass('active');
                    tabsImg.eq(_index).css('display', 'block').siblings().css('display', 'none');
                });
            }
            init();
        }
    });
})(jQuery);