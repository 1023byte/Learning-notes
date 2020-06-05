//点亮整颗星
var rating = (function(){

        //点亮
    var lightOn = function($item,num){
        $item.each(function(index){
            if(index < num){
                $(this).css('background-position','0 -40px');
            }else{
                $(this).css('background-position','0 0');
            }
        });
    };

    var init = function(el,num){
        var $rating = $(el),
        $item =$rating.find('.item');


        //初始化
        lightOn($item,num);

        //事件绑定
        $rating.on('mouseover','.item',function(){
            lightOn($item,$(this).index() + 1);
        }).on('click','.item',function(){
            num = $(this).index() + 1;
        }).on('mouseout',function(){
            lightOn($item,num);
        });
    };

    //jQuery插件
    $.fn.extend({
        rating:function(num){
            return this.each(function(){
                init(this,num);
            });
        }
    });

    return {
        init:init
    };
})();

rating.init('#rating',0);
//rating.init('#rating2',3);
$('#rating2').rating(4);
