(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                main = null, //主函数，入口
                start = null, //开始动画
                stop = null, //停止动画
                stop2 = null,
                init = null, //初始化 
                dot = null,
                next = null, //播放下一张
                prev = null, //播放上一张
                timeout = null, //定时器
                imgwidth = null,
                countt = null,
                elems = {}, //元素集合
                defaults = {
                    imgw: 1920,
                    imgl: 200,
                    speed: 600,
                    delay: 3000,
                    countt: 2,
                    hhwl: 0
                }
            options = $.extend(defaults, options);

            init = function() {
                elems._index = 1; //当前播放的图片编号
                elems._line = 1;
                elems.sliderDiv = _that.children('div');
                elems.btn = _that.children('span');
                elems.dot = _that.children('ul').children('li');

                elems.hhword = _that.children('.hhword').children('dd');
                elems.sliderDiv.append(elems.sliderDiv.children('img').first().clone());

                _that.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() { start(1); }, options.delay + options.speed);
                });

                elems.btn.on('click', function() {
                    if (elems.btn.index($(this))) {
                        next();
                    } else {
                        prev();
                    }
                });

                elems.dot.hover(function() {
                        var newdot = elems.dot.index($(this)) * options.imgw;
                        elems._index = elems.dot.index($(this)) + 1;
                        elems.sliderDiv.css('left', '-' + newdot + 'px');
                        $(this).attr('class', 'on');
                        $(this).siblings().removeClass('on');
                        stop2();
                    },
                    function() {
                        clearInterval(timeout);
                        timeout = setInterval(function() { start(1); }, options.delay + options.speed);

                    }

                )

                elems.hhword.hover(function() {
                        var newdot = ($(this).index()) * options.imgw;
                        var nhhw = elems.hhword.index($(this)) * options.hhwl;
                        elems._index = elems.dot.index($(this)) + 1;
                        elems.sliderDiv.css('left', '-' + newdot + 'px');
                        $('.slider .hhword-line').css('left', nhhw + 'px');
                        stop();

                    },
                    function() {
                        clearInterval(timeout);
                        timeout = setInterval(function() { start(1); }, options.delay + options.speed);

                    }

                )



            }

            start = function(direction) {
                var left = "-=" + options.imgw,
                    slonow = _that.children('ul').children('li');


                //原点
                $(slonow[elems._index]).addClass('on');
                $(slonow[elems._index]).siblings().removeClass('on');

                if (elems._index == options.countt + 1) {
                    $(slonow[0]).addClass('on');
                    $(slonow[0]).siblings().removeClass('on');

                }

                if (!direction) {
                    left = "+=" + options.imgw;
                    if (elems._index <= 1) {
                        var imglift = elems.sliderDiv.children('img').last().offset().left,
                            divleft = _that.offset().left;

                        elems._index = options.countt;
                        elems.sliderDiv.css('left', '-' + (imglift - divleft + options.imgl) + 'px');

                    }
                }




                if (elems._line >= 2) {
                    elems._line = 0;
                } else if (elems._line <= 1) {
                    elems._line = 1;
                }

                $('.slider .hhword-line').animate({
                    left: elems._line * options.hhwl
                }, options.speed);

                elems.sliderDiv.animate({
                    left: left
                }, options.speed, function() {
                    if (direction) {
                        elems._index++;
                        elems._line++;
                    } else {
                        elems._index--;
                        elems._line--;
                    }

                    if (elems._index == (options.countt + 1)) {
                        elems.sliderDiv.css('left', 0);
                        elems._index = 1;
                    }

                    console.log(elems._index);
                }).delay(options.delay);


            }

            next = function() {
                stop();
                start(1);
            }

            prev = function() {
                stop();
                start(0);
            }

            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timeout);
            }
            stop2 = function() {
                elems.sliderDiv.stop(true, false);
                clearInterval(timeout);
            }


            main = function() {
                init();
                timeout = setInterval(function() { start(1); }, options.delay + options.speed);
            }

            main();

        }
    });
})(jQuery)