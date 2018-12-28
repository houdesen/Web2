/*
* @Author: hp
* @Date:   2018-12-19 18:46:19
* @Last Modified by:   hp
* @Last Modified time: 2018-12-28 14:03:13
*/

/*图片更换*/
var p0=document.getElementById('p0');
var p2=document.getElementById('p2');
var pp1=document.getElementById('pp1');
var p1=document.getElementById('p1');
var p3=document.getElementById('p3');
var pp2=document.getElementById('pp2');
var pp0=document.getElementById('pp0');
var pp3=document.getElementById('pp3');
pp1.onclick=function(){
	pp1.style.border=" 1px solid #ff9003";
	p0.style.zIndex="0";
	p1.style.zIndex="-1";
	p2.style.zIndex="1";
	p3.style.zIndex="0";
	pp1.onmouseout=function(){
		pp1.style.border=" 0px solid #ff9003";
	}
}

pp2.onclick=function(){
	pp2.style.border=" 1px solid #ff9003";
	p0.style.zIndex="-1";
	p1.style.zIndex="0";
	p2.style.zIndex="0";
	p3.style.zIndex="1";
	pp2.onmouseout=function(){
		pp2.style.border=" 0px solid #ff9003";
	}
}
pp0.onclick=function(){
	if (p0.style.zIndex=="-1") {
		p0.style.zIndex="0";
		p1.style.zIndex="-1";
		p2.style.zIndex="1";
		p3.style.zIndex="0";
	} else {
		p0.style.zIndex="-1";
		p1.style.zIndex="0";
		p2.style.zIndex="0";
		p3.style.zIndex="1";
	}
	
}
pp3.onclick=function(){
	if (p0.style.zIndex=="-1") {
		p0.style.zIndex="0";
		p1.style.zIndex="-1";
		p2.style.zIndex="1";
		p3.style.zIndex="0";
	} else {
		p0.style.zIndex="-1";
		p1.style.zIndex="0";
		p2.style.zIndex="0";
		p3.style.zIndex="1";
	}
	
}/*净含量*/
var con1=document.getElementById('con1');
var con2=document.getElementById('con2');
var con3=document.getElementById('con3');
function add1(){
	con1.style.background="url('img/duigou.png') no-repeat 50px 17px";
	con1.style.border="1px solid #fe0952";
	con2.style.background="url()";
	con2.style.border="0px solid #fe0952";
	con3.innerHTML='"'+"150ml"+'"';
}
function add2(){
	con2.style.background="url('img/duigou.png') no-repeat 50px 17px";
	con2.style.border="1px solid #fe0952";
	con1.style.background="url()";
	con1.style.border="0px solid #fe0952";
	con3.innerHTML='"'+"200ml"+'"';
}
/*数量*/
var but1=document.getElementById('but1');

var but3=document.getElementById('but3');
but1.onmouseover=function(){
	var but2=document.getElementById('but2');
	if (but2.value<=1) {
		but1.style.cursor="not-allowed";
	} else {
		but1.style.cursor="pointer";
		but1.onclick=function(){
			if (but2.value<=1) {
				but1.style.cursor="not-allowed";
			} else {
				but1.style.cursor="pointer";
				but2.value-=1;
			}
		}
	}
}
but3.onmouseover=function(){
	var but2=document.getElementById('but2');
	if (but2.value>=5) {
		but3.style.cursor="not-allowed";
	} else {
		but3.style.cursor="pointer";
		but3.onclick=function(){
			if (but2.value>=5) {
				but3.style.cursor="not-allowed";
			} else {
				but3.style.cursor="pointer";
				but2.value++;
			}
		}
	}
}
/*加入购物车*/
var bigimg=document.getElementById('bigimg');
var bigimg1=document.getElementById('bigimg1');
var bigp0=document.getElementById('bigp0');
var butt0=document.getElementById('butt0');
var butt1=document.getElementById('butt1');
var conbutt2=document.getElementById("conbutt2");
conbutt2.onclick=function(){
	bigimg.style.zIndex="3";
	bigimg1.style.zIndex="3";
	bigp0.style.zIndex="3";
}
butt0.onclick=function(){
	bigimg.style.zIndex="-1";
	bigimg1.style.zIndex="-1";
	bigp0.style.zIndex="-1";
}
butt1.onclick=function(){
	bigimg.style.zIndex="-1";
	bigimg1.style.zIndex="-1";
	bigp0.style.zIndex="-1";
}
/*放大镜*/
var pictop=document.getElementById('pictop');
var pic=document.getElementById('pic');
var p0=document.getElementById('p0');
var p1=document.getElementById('p1');
var slider=document.getElementById('slider');
var picright=document.getElementById('picright');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
pictop.onmouseover=function(){
	slider.style.display="block";
	picright.style.display="block";
}
pictop.onmouseout=function(){
	slider.style.display="none";
	picright.style.display="none";
}
pictop.onmousemove=function(ev){
	var ev=ev||window.event;
	var offset=document.documentElement.scrollTop;
	if (p0.style.zIndex=="0") {
		var left = ev.clientX-pic.offsetLeft-203-slider.offsetWidth/2;
		var top = ev.clientY-pic.offsetTop-190-slider.offsetHeight/2+offset;
		var maxLeft=p0.offsetWidth-slider.offsetWidth;
		var maxTop=p0.offsetHeight-slider.offsetHeight;
		left=left>maxLeft?maxLeft:left<0?0:left;
		top=top>maxTop?maxTop:top<0?0:top;
		//设置放大镜的位置
		slider.style.left=left+"px";
		slider.style.top=top+"px";
		//根据左侧放大镜的位置，计算右侧大图移动比例
		var w=left/maxLeft;
		var h=top/maxTop;
		//计算大图的最大移动范围
		var p2Left=picright.offsetWidth-p2.offsetWidth;
		var p2Top=picright.offsetHeight-p2.offsetHeight;

		//计算大图的移动的距离，设置位置
		p2.style.left=w*p2Left+"px";
		p2.style.top=h*p2Top+"px";
	} else {
		var left = ev.clientX-pic.offsetLeft-203-slider.offsetWidth/2;
		var top = ev.clientY-pic.offsetTop-190-slider.offsetHeight/2+offset;
		var maxLeft=p1.offsetWidth-slider.offsetWidth;
		var maxTop=p1.offsetHeight-slider.offsetHeight;
		left=left>maxLeft?maxLeft:left<0?0:left;
		top=top>maxTop?maxTop:top<0?0:top;
		//设置放大镜的位置
		slider.style.left=left+"px";
		slider.style.top=top+"px";
		//根据左侧放大镜的位置，计算右侧大图移动比例
		var w=left/maxLeft;
		var h=top/maxTop;
		//计算大图的最大移动范围
		var p3Left=picright.offsetWidth-p3.offsetWidth;
		var p3Top=picright.offsetHeight-p3.offsetHeight;

		//计算大图的移动的距离，设置位置
		p3.style.left=w*p3Left+"px";
		p3.style.top=h*p3Top+"px";
	}
	
}