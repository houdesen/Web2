/*
* @Author: hp
* @Date:   2018-12-14 12:20:14
* @Last Modified by:   hp
* @Last Modified time: 2018-12-23 11:44:22
*/
/*头悬框*/
window.onload=function(){
	var cover=document.getElementById('cover2');
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>80){
			cover.style.position='fixed';
		}else{
			cover.style.position='static';
		}
	}
}
/*打开新窗口*/
var newWindow;
//打开新窗口
function openNewWindow(){
	newWindow = window.open("demo1.html");
}
/*轮播图*/
var box = document.getElementById('all-mid');
var oNavlist = document.getElementById('all-mid-nav').children;
var slider = document.getElementById('all-mid-slider');
var left = document.getElementById('all-mid-left');
var right = document.getElementById('all-mid-right');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 2000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-800*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4000px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "all-mid-active";
	}else if(index<=0){
		oNavlist[5].className = "all-mid-active";
	}else {
		oNavlist[index-1].className = "all-mid-active";
	}
}
timer = setInterval(next, 2000);

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
/*公告*/
var speed = 30;
var allrighttop2 = document.getElementById("all-right-top-2");
var allrighttop22 = document.getElementById("all-right-top-22");
var allrighttop21 = document.getElementById("all-right-top-21");
allrighttop22.innerHTML=allrighttop21.innerHTML

function Marquee(){
    if(allrighttop22.offsetTop - allrighttop2.scrollTop <= 0)
      allrighttop2.scrollTop -= allrighttop21.offsetHeight
    else{
      allrighttop2.scrollTop ++
    }
}
var MyMar = setInterval(Marquee,speed)
allrighttop2.onmouseover = function() {
    clearInterval(MyMar)
}
allrighttop2.onmouseout = function() {
    MyMar=setInterval(Marquee,speed)
}
/*充值话费*/
var allrightbot1=document.getElementById('all-right-bot1');
var allrightbot2=document.getElementById('all-right-bot2');
var chongzhi=document.getElementById("chongzhi");
allrightbot1.onchange = function (){
	allrightbot2.innerHTML="¥"+allrightbot1.value;
}
chongzhi.onclick=function(){
	allrightbot1.value="30";
	allrightbot2.innerHTML="¥"+allrightbot1.value;
}
/*右边框*/
var right1=document.getElementById('right1');
var right2=document.getElementById('right2');
var right3=document.getElementById('right3');
var right4=document.getElementById('right4');
var rrr=document.getElementById('rrr');
function getStyle(obj,style){  
	if(obj.currentStyle) 
	{  
	    return obj.currentStyle[style];  
	} 
	else 
	{  
	    return getComputedStyle(obj)[style];  
	}  
}
function animate1(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag=true;
		console.log('1');
		for(var attr in json){
			var now = parseInt(getStyle(obj,attr));
			var speed = (json[attr]-now)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);	
			var current=now+speed;
			obj.style[attr]=current+"px";
			if (json[attr]!==current) {
				flag=false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(callback){
				callback();
			}
		}
	},10)
}
right1.onmouseover=function(){
	animate1(right1,{right:-30},function(){
				console.log("执行结束")
			});
}
right1.onmouseout=function(){
	animate1(right1,{right:-100},function(){
				console.log("执行结束")
			});
}
right2.onmouseover=function(){
	animate1(right2,{right:-30},function(){
				console.log("执行结束")
			});
}
right2.onmouseout=function(){
	animate1(right2,{right:-100},function(){
				console.log("执行结束")
			});
}
right3.onmouseover=function(){
	animate1(right3,{right:-20},function(){
				console.log("执行结束")
			});
	rrr.style.display="none";
}
right3.onmouseout=function(){
	animate1(right3,{right:-100},function(){
				console.log("执行结束")
			});
	rrr.style.display="inline-block";
}
right4.onmouseover=function(){
	animate1(right4,{right:-30},function(){
				console.log("执行结束")
			});
}
right4.onmouseout=function(){
	animate1(right4,{right:-100},function(){
				console.log("执行结束")
			});
}