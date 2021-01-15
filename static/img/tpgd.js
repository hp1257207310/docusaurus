function tpgd(cs){
	
var szqm=0,//当前left

	szqd=0,//当前序列号
	
	a=cs.a||1,//滚动个数默认1
	
	b=cs.b,//滚动元素父级  必填
	
	c=cs.c||false,//c.a 分页器小点父级  c.b 左切换 c.c 右切换
	
	t=cs.t||5000,//自动切换  默认3000
	
	xg=cs.xg||1,//切换效果1滚动
	
	kzq=true,//控制器
	
	d=cs.d||'banner',//选择切换插件，默认banner
	
	ds=cs.ds||0,//一行显示几个
	
	blilength=b.find('li').length;//li个数
	
	b.children('ul').append(b.children('ul').html());
	
	//创建分页按钮
	if(c.a){
		if(!ds){
			for(var i=0;i<Math.ceil(blilength/a);i++){
			c.a.append('<span></span>');
			}
		}else{
			for(var i=0;i<blilength-(ds-1);i++){
				c.a.append('<span></span>');
			}
		}
		c.a.find('span').eq(szqd).addClass('on')
	}

szq();

b.hover(function(){clearInterval( b.t1 )},function(){szq()})

//分页器切换
if(c.a)c.a.find('span').click(function(){
	if(kzq){
		kzq=false;
		szqd=$(this).index();
		szqm=szqd*b.find('li').outerWidth(true);
		b.find('ul').stop(true,true).animate({left:-szqm},function(){
			kzq=true;
			});
		b.find('ul').find('li').removeClass('on').eq(szqd).addClass('on');
		c.a.find('span').removeClass('on').eq(szqd).addClass('on')
	}
})

function szq(){
	b.t1=setInterval(function(){
		tabqh(true);
		},t);
}


if(c.b&&c.c){
	c.b.click(function(){tabqh(false);})
	c.c.click(function(){tabqh(true);})
	}
	
//左右切换
function tabqh(tabqha){
	if(tabqha){
		qhy();
	}else{
		qhz();
	}

function qhy(){
	if(d=='banner'){
		if(kzq){
		kzq=false;
		if(szqd==Math.ceil(blilength/a)){
			szqd=0;
			szqm=szqd*b.width();
			b.find('ul').css('left',-szqm);
		}
		szqd++;
		//szqd%=Math.ceil(blilength/a);
		szqm=szqd*b.width();
		b.find('ul').find('li').removeClass('on').eq(szqd).addClass('on');
		if(c.a)if(szqd<c.a.find('span').size()){c.a.find('span').removeClass('on').eq(szqd).addClass('on')}else{c.a.find('span').removeClass('on').eq(0).addClass('on')};
		b.find('ul').animate({left:-szqm},function(){
			kzq=true;
			});
		}
		}else if(d=='单个'){
			if(kzq){
			kzq=false;
			if(szqd==blilength){
					szqd=0;
					b.find('ul').css('left',-szqd);
					szqd++;
				}else{
					szqd++;
				};
			szqm=szqd*b.find('li').outerWidth(true);
			b.find('ul').animate({left:-szqm},function(){
				kzq=true;
				});
			}
		}
	}
function qhz(){
	if(d=='banner'){
		if(kzq){
			kzq=false;
			if(szqd==0){
				szqd=Math.ceil(blilength/a);
				szqm=szqd*b.width();
				b.find('ul').css('left',-szqm);
			}
			szqd>0?szqd--:szqd=Math.ceil(blilength/a)-1;
			szqm=szqd*b.width();
			b.find('ul').find('li').removeClass('on').eq(szqd).addClass('on');
			if(c.a)c.a.find('span').removeClass('on').eq(szqd).addClass('on');
			b.find('ul').animate({left:-szqm},function(){
				kzq=true;
				});
			}
	}else if(d=='单个'){
		if(kzq){
		kzq=false;
		if(szqd==0){
				szqd=blilength;
				szqm=szqd*b.find('li').outerWidth(true);
				b.find('ul').css('left',-szqm);
				szqd--;
			}else{
				szqd--;
			}
		szqm=szqd*b.find('li').outerWidth(true);
		b.find('ul').animate({left:-szqm},function(){
			kzq=true;
			});
		}
	}
}
}

var cmwz,cmwz2,cmwz3;
b.find('ul')[0].addEventListener('touchstart', function(event) {  /*手指触摸了*/
    if (event.targetTouches.length == 1) {
　　　　 //event.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
		cmwz=touch.pageX;
		cmwz3=cmwz;
		clearInterval( b.t1 );

        }
}, false);  
b.find('ul')[0].addEventListener('touchmove', function(event) {  /*手指移动了*/
	
     // 如果这个元素的位置内只有一个手指的话
    if (event.targetTouches.length == 1) {
　　　　 //event.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
		cmwz2=touch.pageX;
		cmwz4=cmwz2-cmwz3;
		cmwz3=cmwz2;
		b.find('ul').css('left',parseFloat(b.find('ul').css('left'))+cmwz4)
        }
}, false);  
b.find('ul')[0].addEventListener('touchend', function(event) {  /*手指离开了*/
　　　　 //event.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
		if(cmwz-cmwz2>=80){tabqh(true);}else if(cmwz-cmwz2<-80){tabqh(false);}else{b.find('ul').animate({left:-szqm})};
		szq();
}, false);
  
/*鼠标事件*/  
var lastX,lastX2,lastX3,lastX4,djydpd=false;
		b.find('ul').mousedown(function(e){
　　　　 	e.preventDefault();// 阻止浏览器默认事件，重要 
         lastX = e.pageX;
		 lastX3=lastX;
		 djydpd = true;
		 bulLeft=b.find('ul').css('left');
		 
        $(this).mousemove(function(e) {
			if(djydpd){
				lastX2=e.pageX;
				lastX4=lastX2-lastX3;
				lastX3=lastX2;
			b.find('ul').css('left',parseFloat(b.find('ul').css('left'))+lastX4)
			}
        });
		$(this).mouseup(function(e){
		 djydpd = false;
		 if(lastX2){if(lastX2<lastX&&lastX-lastX2>80){tabqh(true);}else if(lastX2>lastX&&lastX2-lastX>80){tabqh(false);}else{b.find('ul').css('left',bulLeft)}}
			lastX=0;lastX2=0;
        });
		
		})
}

function xydh(){
if($(window).width()<1200){
	$('script').remove();
	var $dh=$('.sj_dh');
	$dh.find('ul.navMenu').removeClass('navMenu');
	$dh.find('ul.sub-menu').addClass('dh_xl').removeClass('sub-menu');
	$dh.append('<i class="dhgb"></i>').parent().append('<div class="dhan"><div class="dhan_1"></div><div class="dhan_2"></div><div class="dhan_3"></div></div>');
	$dh.attr('class','').addClass('sjdh').remove();
	$('body').append('<div class="bodyw"><div class="body_st"></div><div class="body_bg"></div></div>');
	$('body').append($dh);
	$('.bodyw').append($('.bodyw').siblings());
	$('.body_st').append($('.body_st').siblings());
	$dh.find('a').each(function() {
        if($(this).siblings('.dh_xl').size()){
			$(this).addClass('xl_tb');
			$(this).attr('href','javascript:;');
			}
    });
	$('.dh_xl').prepend('<i class="dh_fl_fh">返回</i>')
	$dh.find('li a').click(function(){
		$(this).siblings('.dh_xl').toggleClass('on');
		});
	$dh.find('.dh_fl_fh').click(function(){
		$(this).parent().removeClass('on');
		});
	$('.dhgb').click(function(){
		$dh.toggleClass('dhov');
		$('.dhan').toggleClass('hover');
		$('.body_st').toggleClass('on');
		$('.body_bg').stop().fadeToggle(500);
		$('html').toggleClass('on');
		$('.dh_xl').removeClass('on');
		});
	$dh.find('li').click(function(){
		$dh.toggleClass('dhov');
		$('.dhan').toggleClass('hover');
		$('.body_st').toggleClass('on');
		$('.body_bg').stop().fadeToggle(500);
		$('html').toggleClass('on');
		$('.dh_xl').removeClass('on');
		
		  var li_i=$(this).index();
		  (function(){
			  $('.dw_i').each(function(i){ 
			  if(i==li_i){     
			  $('html,body').animate({scrollTop:$(this).offset().top},500);
				  }
			});})(li_i)
		});
	$('.dhan').click(function(){
		$dh.toggleClass('dhov');
		$('.dhan').toggleClass('hover');
		$('.body_st').toggleClass('on');
		$('.body_bg').stop().fadeToggle(500);
		$('html').toggleClass('on');
		$('.dh_xl').removeClass('on');
		});
	$('.body_bg').click(function(e){
		$('.dhan').toggleClass('hover');
		$('.body_st').toggleClass('on');
		$('.body_bg').stop().fadeToggle(500);
		$('html').toggleClass('on');
		$dh.toggleClass('dhov');
		$('.dh_xl').removeClass('on');
		});
	
}
};

/*图片手机端自动1200等比例缩放*/function img1200(imgzd){xyimg();$(window).resize(function(){xyimg();});function xyimg(){if($(window).width()<1200){imgzd.css({'position':'relative','left':'50%','width':1920/1200*$(window).width(),'margin-left':-1920/1200*$(window).width()/2});}}}
/*浏览器宽度改变刷新页面*/function win_w(){var $win_w=$(window).width();$(window).resize(function(){if($(window).width()>1199&&$win_w<1200){window.location.reload();}else if($(window).width()<1200&&$win_w>1199){window.location.reload();}})};



$.fn.imgscroll = function(o){
var defaults = {
speed: 30,
amount: 0,
width: 1,
dir: "left"
};
o = $.extend(defaults, o);

return this.each(function(){
var _li = $("li", this);
_li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
_li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
_li.css({position: "relative", overflow: "hidden"}); //li
if(o.dir == "left") _li.css({float: "left"});

//初始大小
var _li_size = 0;
for(var i=0; i<_li.size(); i++)
_li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);

//循环所需要的元素
if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
_li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
_li = $("li", this);

//滚动
var _li_scroll = 0;
function goto(){
_li_scroll += o.width;
if(_li_scroll > _li_size)
{
_li_scroll = 0;
_li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
_li_scroll += o.width;
}
_li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
}

//开始
var move = setInterval(function(){ goto(); }, o.speed);
_li.parent().hover(function(){
clearInterval(move);
},function(){
clearInterval(move);
move = setInterval(function(){ goto(); }, o.speed);
});
});
};/*无缝滚动图片*/
