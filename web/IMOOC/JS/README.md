## 星级评分原理和实现（上）
#### [效果演示](https://1023byte.github.io/Learning-Web/IMOOC/JS/Star%20rating)

## 京东无延迟菜单效果
#### [效果演示](https://1023byte.github.io/Learning-Web/IMOOC/JS/京东商城无延迟菜单)
### 3-1
开发一个普通的二级菜单
通过事件代理方式进行绑定  
mouseenter和mouserover的区别：  
使用mouseover/mouserout时，如果鼠标移动到子元素上，即便没有离开父元素，也会触发父元素的mouseout事件  
使用mouseenter/mouseleave时，如果鼠标没有离开父元素，在其子元素上任意移动，也不会出发mouseleave事件  
### 4-1
加入延迟来优化，切换子菜单时候，用setTimeout设置延迟
```
if(delay){
  timer = setTimeout(function(){
    if(mouseInSub){
       return
     }
    activeRow.removeClass('active');
    activeMenu.addClass('none');
    activeRow=$(e.target).addClass('active');
    activeMenu=$('#'+activeRow.data('id'));
    activeMenu.removeClass('none');		
    timer=null;	
   },100);
}else{
	  var prevActiveRow = activeRow;
		var prevActiveMenu = activeMenu;
		activeRow = $(e.target);
		activeMenu = $('#'+activeRow.data('id'));
		prevActiveRow.removeClass('active');
		prevActiveMenu.addClass('none');
		activeRow.addClass('active');
		activeMenu.removeClass('none');
}
```
debounce去抖技术，在事件被频繁出发时，只执行一次处理
```
if(timer){
  clearTimeout(timer);
}
```
### 4-2
基于用户行为预测的切换技术  
跟踪鼠标的移动,用鼠标当前位置，和鼠标上一次位置与子菜单上下边缘形成的三角形区域进行比较  
比较位置将用到一些数学知识  
向量：Vab=Pb-Pa  
二维向量叉乘公式：a(x1,y1)*b(x2,y2)=x1*y2-x2*y1  
用叉乘法判断点在三角形内  
