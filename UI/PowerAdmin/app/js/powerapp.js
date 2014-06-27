var fixedHeader=localStorage.getItem('fixedHeader');
var fixedNav=localStorage.getItem('fixedNav');
var insideContainer=localStorage.getItem('insideContainer');
var wallpaper=localStorage.getItem('wallpaper');
var skin=localStorage.getItem('skin');




$(document).ready(function () {

var headerHeight = 54;
var screenHeight = $(window).height();
var bodyHeight = (screenHeight - headerHeight)*2;
$('#left-panel').css('min-height',bodyHeight+'px');

	 $this = $('#activity > .badge');

            if (parseInt($this.text()) > 0) {
                $this.addClass("bg-color-red bounceIn animated")
            }
			
			
			$('.navbar-brand').addClass('powerup');
			
			$('button[data-loading-text]')
            .on('click', function () {
                var btn = $(this)
                btn.button('loading')
                setTimeout(function () {
                    btn.button('reset')
                }, 3000)
            });
			
		/*$('#activity').click(function(event){
		event.preventDefault();
		$('#notification_dropdown').show();	
		});*/
		
		
		$('.notify_messages,.lbl_notify_messages').click(function(){
			
			if($(this).parent().hasClass('btn-group')){
				$(this).parent().next().html('');
				$(this).parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				}else{
				$(this).parent().parent().parent().next().html('');
				$(this).parent().parent().parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				}
			var elemId = $(this);
			setTimeout(function(){
		ajaxNotification(elemId);		
			},1000);

		
		});
		
		
		$('.notify_alerts,.lbl_notify_alerts').click(function(){
			if($(this).parent().hasClass('btn-group')){
				$(this).parent().next().html('');
				$(this).parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				}else{
				$(this).parent().parent().parent().next().html('');
				$(this).parent().parent().parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				}
			var elemId = $(this);
			setTimeout(function(){
				ajaxSystemMessages(elemId);
			},1000);


		
		});
		

		$('.notify_tasks,.lbl_notify_tasks').click(function(){
			if($(this).parent().hasClass('btn-group')){
				$(this).parent().next().html('');
				$(this).parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				}else{
				$(this).parent().parent().parent().next().html('');
				$(this).parent().parent().parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				}
			var elemId = $(this);
			setTimeout(function(){
				ajaxGetTasks(elemId);
			},1000);


		
		});
		
		$('.power-widget .power-widget-header .controls>:last-child').click(function(){
		if($(this).parent().hasClass('close')){
			$(this).parent().find('>:first-child').before('<i class="fa fa-spinner fa-spin"></i>');
			$(this).removeClass('fa-plus-square').addClass('fa-minus-square');
			$(this).parent().parent().next().slideDown();
		}else{
			$(this).parent().find('>:first-child').before('<i class="fa fa-spinner fa-spin"></i>');			
			$(this).removeClass('fa-minus-square').addClass('fa-plus-square');
		$(this).parent().parent().next().slideUp();
		}
		setTimeout( "$('.power-widget .power-widget-header .controls').find('i.fa-spinner').remove();",1000 );
		$(this).parent().toggleClass('close');
		});
		
		
		
		$('.action-dropdown').click(function(event){
			event.stopPropagation();
			});	
			
			var url = 'http://feeds.bbc.co.uk/iplayer/highlights/tv/list';
			rssFeeder(url);
			
			$('#rss_sub').click(function(){
			var tempUrl = $('#rss_url').val();
			if(tempUrl!=''){
			url=tempUrl;
			rssFeeder(url);
			}else{
			alert('Please input proper RSS URL to get feed');
			}
			
			});

			$('#rss_sub-navcoll').click(function(){
			var tempUrl = $('#rss_url-navcoll').val();
			if(tempUrl!=''){
			url=tempUrl;
			rssFeeder(url);
			}else{
			alert('Please input proper RSS URL to get feed');
			}
			
			});

			
			$('#hide-menu').click(function(event){
			$('body').toggleClass('hidden-menu');
			
			});





	$('.power-widget .fc-header .fc-header-center').hide();
			$('.power-widget .fc-header .fc-header-right').hide();

$('#calendar-buttons #btn-prev').click(function () {
	    $('.fc-button-prev').click();
	    return false;
	});
	
	// calendar next
	$('#calendar-buttons #btn-next').click(function () {
	    $('.fc-button-next').click();
	    return false;
	});

	
	 $('.bar').sparkline([6, 12,21,28,16,17,9, 20,17,21,23,19,21,22,23 ], { type: 'bar', height:'28px',barWidth:'6px',tooltipClassname:'jqtooltip_custom'});
   $('#traffic').sparkline([89,87,90,100,78,88,101,80, 90,89,88,92,67 ], { type: 'bar',barColor:'#88A2BB', barWidth:'6px', height:'28px',tooltipClassname:'jqtooltip_custom'});
   $('#orders').sparkline([13, 18, 23,22,26,27,18,19, 24,21,23,12,21 ], { type: 'bar' ,barColor:'#46D646',height:'28px',barWidth:'6px',tooltipClassname:'jqtooltip_custom'});

   
   $('.power-widget').parent().each(function(i,value){
   $(value).addClass('widget-column');
   });
   
   
 $( ".widget-column" ).sortable({
      connectWith: ".widget-column",
      handle: ".power-widget-header",
      cancel: ".icon-minus",
      placeholder: "portlet-placeholder"
    });

 if ($.fn.mask) {
		$('[data-mask]').each(function() {

			var $this = $(this);
			var mask = $this.attr('data-mask') || 'error...', mask_placeholder = $this.attr('data-mask-placeholder') || 'X';

			$this.mask(mask, {
				placeholder : mask_placeholder
			});
		})
	}

	createSettings();

	$('#power-setting-control')
    .click(function () {
        //console.log('setting');
        $('.power-setting')
            .toggleClass('activate');
    })


    /*
 * FIXED HEADER
 */
$('input[type="checkbox"]#fixed-header')
    .click(function () {
        if ($(this)
            .is(':checked')) {
            //checked
            $('body').addClass("fixed-header");
            localStorage.setItem('fixedHeader',true);
        } else {
            //unchecked
            $('input[type="checkbox"]#fixed-navigation').prop('checked', false);
            $('input[type="checkbox"]#fixed-container').prop('checked', false);

                 $('body').removeClass("fixed-header");
                 $('body').removeClass("fixed-navigation");

           localStorage.removeItem('fixedHeader');

        }
    });

    /*
 * FIXED NAV
 */
$('input[type="checkbox"]#fixed-navigation')
    .click(function () {
        if ($(this)
            .is(':checked')) {

            //checked
            $('input[type="checkbox"]#fixed-header').prop('checked', true);            

            //apply
           $('body').addClass("fixed-header");
            $('body').addClass("fixed-navigation");

            $('input[type="checkbox"]#fixed-container').prop('checked', false);
            $('body').removeClass("container");
            localStorage.setItem('fixedHeader',true);
            localStorage.setItem('fixedNav',true);

        } else {
            //unchecked
            $('body').removeClass("fixed-navigation");
             localStorage.removeItem('fixedHeader');
            localStorage.removeItem('fixedNav');

        }
    });

var smartbgimage =
    "<h6 class='margin-top-10 semi-bold'>Background</h6>"+
    "<img src='img/wallpapers/mountain-mist-h-20-mini.jpg' data-htmlbg-url='img/wallpapers/mountain-mist-h-20.jpg' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/wallpapers/hazy-winter-h-20-mini.jpg' data-htmlbg-url='img/wallpapers/hazy-winter-h-20.jpg' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/wallpapers/seascape-afternoon-h-20-mini.jpg' data-htmlbg-url='img/wallpapers/seascape-afternoon-h-20.jpg' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/wallpapers/trees-and-snow-h-20-mini.jpg' data-htmlbg-url='img/wallpapers/trees-and-snow-h-20.jpg' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/wallpapers/water-drops-h-20-mini.jpg' data-htmlbg-url='img/wallpapers/water-drops-h-20.jpg' width='22' height='22' class='margin-right-5 bordered cursor-pointer'>";
    $("#smart-bgimages")
    .fadeOut();


/*
 * INSIDE CONTAINER
 */
$('input[type="checkbox"]#fixed-container')
    .click(function () {
        if ($(this)
            .is(':checked')) {
            //checked
            $('body').addClass("power-container");
            $('input[type="checkbox"]#fixed-navigation').prop('checked', false);
            $('body').removeClass("fixed-navigation");
            if (smartbgimage) {
                $("#smart-bgimages")
                    .append(smartbgimage)
                    .fadeIn(1000);
                $("#smart-bgimages img")
                    .bind("click", function () {
                        var $this = $(this);
                        var $html = $('html')
                        bgurl = ($this.data("htmlbg-url"));
                        $html.css("background-image", "url(" +
                            bgurl + ")");
                         localStorage.setItem('wallpaper',bgurl);
                    })

                smartbgimage = null;
            } else {
                $("#smart-bgimages")
                    .fadeIn(1000);
            }

            localStorage.setItem('insideContainer',true);

            


        } else {
            //unchecked
            $('body').removeClass("power-container");
            $("#smart-bgimages")
                .fadeOut();
            // console.log("container off");

            localStorage.removeItem('insideContainer');
            localStorage.removeItem('wallpaper');
        }
    });


if(fixedHeader){
	$('input[type="checkbox"]#fixed-header').click();
}

if(fixedNav){
	$('input[type="checkbox"]#fixed-navigation').click();
}

if(insideContainer){
	$('input[type="checkbox"]#fixed-container').click();
	if(wallpaper!=null){
		 var $html = $('html')
                        
                        $html.css("background-image", "url(" +wallpaper+ ")");
	}
}
if(skin!=null && skin!='' && skin !='default'){

	$('head').append('<link id="skin_css" rel="stylesheet/less" type="text/css" href="css/'+skin+'-skin.less" />');
			$('head').append('<script id="less_link" src="js/less-1.7.3.min.js"></script>');

			$('[id^="smart-style"]').find('i.fa-check').remove();
			if(skin=='apple'){
			$('#smart-style-1').prepend('<i class="fa fa-check fa-fw pull-left" id="skin-checked"></i>');	
			}else if(skin=='light'){
			$('#smart-style-2').prepend('<i class="fa fa-check fa-fw pull-left" id="skin-checked"></i>');	
			} else if(skin=='metalic'){
			$('#smart-style-3').prepend('<i class="fa fa-check fa-fw pull-left" id="skin-checked"></i>');	
			}
			
			

}


$('.page-content').after('<div class="page-footer"><div class="footer-inner"><div class="footer-content"><span class="bigger-120"><span class="blue bolder">Power Admin</span> ' 
+'Application © 2014-2020</span>&nbsp; &nbsp;<span class="action-buttons"><a href="#"><i class="fa fa-twitter-square light-blue bigger-150"></i></a>'
+'<a href="#"><i class="ace-icon fa fa-facebook-square text-primary bigger-150"></i></a><a href="#"><i class=" fa fa-rss-square orange bigger-150"></i></a>'
+'</span></div></div></div>');


$('i.fa-sign-out').parent().parent().attr('href','login.html');

//End Document ready
	});

	

	$(document).on("click",".power-widget .power-widget-header .controls .fa-expand",function(event){
		$(this).parent().parent().parent().toggleClass('fullscreen-mode');

	});


	$(document).on("click","#left-panel ul li a",function(event){
		//event.preventDefault();
		if($(this).find(".collapse-sign em").hasClass("fa-caret-down")){
		$(this).find(".collapse-sign em").removeClass("fa-caret-down");
		$(this).find(".collapse-sign em").addClass("fa-caret-up");
		$(this).parent().find("ul").first().slideDown();
		$(this).parent().parent().children().each(function(){
		if($(this).find('a').hasClass('open')){
			$(this).find('a').click();
			$(this).find('a').removeClass('open');

		}
		})
		$(this).addClass('open');

		}else{

		$(this).removeClass('open');	
		$(this).find(".collapse-sign em").removeClass("fa-caret-up");
		$(this).find(".collapse-sign em").addClass("fa-caret-down");
		$(this).parent().find("ul").first().slideUp();

		}


	})

	
	function rssFeeder(url){
	
	$('#rss_feed_content').rssfeed(url,{
		snippet: false
	}, function(e) {
		$(e).find('div.rssBody').vTicker();
	});

	$('#rss_feed_content-navcoll').rssfeed(url,{
		snippet: false
	}, function(e) {
		$(e).find('div.rssBody').vTicker();
	});
	
	}
	
	
	function ajaxNotification(elem){	
		var contents = '<ul class="notification-body">'+
					'<li>'+
						'<span class="unread">'+
							'<a href="javascript:void(0);" class="msg">'+
								'<img src="img/tumbnails/user1.jpg" alt="" class="air air-top-left margin-top-5" width="40" height="40">'+
								'<span class="from">Aston M <i class="icon-paperclip"></i></span>'+
								'<time>12 minutes ago</time>'+
								'<span class="subject">Need invoice updated</span>'+
								'<span class="msg-body">Hi,Send me updated report of quarter invoices. </span>'+
							'</a>'+
						'</span>'+
					'</li>'+
					'<li>'+
						'<span>'+
							'<a href="javascript:void(0);" class="msg">'+
								'<img src="img/tumbnails/user2.jpg" alt="" class="air air-top-left margin-top-5" width="40" height="40">'+
								'<span class="from">Susan Erick</span>'+
								'<time>Thursday, September 19th</time>'+
								'<span class="subject">Status Updates</span>'+
								'<span class="msg-body">Need status updates on these below items.</span>'+
							'</a>'+
						'</span>'+
					'</li>'+
					'<li>'+
						'<span>'+
							'<a href="javascript:void(0);" class="msg">'+
								'<img src="img/tumbnails/user3.jpg" alt="" class="air air-top-left margin-top-5" width="40" height="40">'+
								'<span class="from">Cindy Andrews</span>'+
								'<time>Sunday, September 15th</time>'+
								'<span class="subject">Welcome to Dinners Club 50</span>'+
								'<span class="msg-body"> Hey , congratulations. You have been selected by our lottery system.</span>'+
							'</a>'+
						'</span>'+
					'</li>'+
					'<li>'+
						'<span>'+
							'<a href="javascript:void(0);" class="msg">'+
								'<img src="img/tumbnails/user4.jpg" alt="" class="air air-top-left margin-top-5" width="40" height="40">'+
								'<span class="from">Lam Tampora</span>'+
								'<time>Saturday, September 14th</time>'+
								'<span class="subject">Deadline due date</span>'+
								'<span class="msg-body">imus qui blanditiis praesentium voluptatum deleniti atque corrup</span>'+
							'</a>'+
						'</span>'+
					'</li>'+
					'<li>'+
						'<span class="unread">'+
							'<a href="javascript:void(0);" class="msg">'+
								'<img src="img/tumbnails/user5.jpg" alt="" class="air air-top-left margin-top-5" width="40" height="40">'+
								'<span class="from">Project approved! <i class="icon-paperclip"></i></span>'+
								'<time>September 14th</time>'+
								'<span class="subject">Et harum quidem rerum facilis est et expedita distinctio</span>'+
								'<span class="msg-body">...</span>'+
							'</a>'+
						'</span>'+
					'</li>'+
					'<li>'+
						'<span>'+
							'<a href="javascript:void(0);" class="msg">'+
								'<img src="img/tumbnails/user6.jpg" alt="" class="air air-top-left margin-top-5" width="40" height="40">'+
								'<span class="from">JEFF, me</span>'+
								'<time>Friday, September 13th</time>'+
								'<span class="subject">Bugs fixed! </span>'+
								'<span class="msg-body">Nam libero tempore, cum soluta nobis est eligendi optio cumque</span>'+
							'</a>'+
						'</span>'+
					'</li>'+
				'</ul>';
				
				if($(elem).parent().hasClass('btn-group')){
				
				$(elem).parent().next().html('');
				$(elem).parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				$(elem).parent().next().html(contents);
				
				
				}else{
				
				$(elem).parent().parent().parent().next().html('');
				$(elem).parent().parent().parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				$(elem).parent().parent().parent().next().html(contents);
				
				}
				
	}
	
	
	function ajaxSystemMessages(elem){
	
	var smContent = '<ul class="notification-body">'+
						'<li>'+
							'<span class="padding-10 unread">'+
								'<em class="badge padding-5 no-border-radius bg-color-blueLight pull-left margin-right-5">'+
									'<i class="fa fa-user fa-fw fa-2x"></i>'+
								'</em>'+								
								'<span>'+
									 '12 new users just signed up! <span class="text-primary">Susan</span> and <span class="text-primary">Mady Soulin</span>'+
									 '<br>'+
									 '<span class="pull-right font-xs text-muted"><i>1 min ago...</i></span>'+
								'</span>'+								
							'</span>'+
						'</li>'+
						'<li>'+
							'<span class="padding-10 unread">'+
								'<em class="badge padding-5 no-border-radius bg-color-purple txt-color-white pull-left margin-right-5">'+
									'<i class="fa fa-calendar fa-fw fa-2x"></i>'+
								'</em>'+								
								'<span>'+
									 '<a href="javascript:void(0);" class="display-normal"><strong>Calendar</strong></a>: Andy Wolf invites you to event! '+
									 '<br>'+
									 '<strong>When: 1/3/2014 (1pm - 2pm)</strong><br>'+
									 '<span class="pull-right font-xs text-muted"><i>3 hrs ago...</i></span>'+
								'</span>'+								
							'</span>'+
						'</li>'+	
						'<li>'+
							'<span class="padding-10">'+
								'<em class="badge padding-5 no-border-radius bg-color-blueLight txt-color-white pull-left margin-right-5">'+
									'<i class="fa fa-user fa-fw fa-2x"></i>'+
								'</em>'+								
								'<span>'+
									 '<a href="javascript:void(0);" class="display-normal">Mauriece</a> as contact? &nbsp;'+
									 '<button class="btn btn-xs btn-primary margin-top-5">accept</button>'+
									 '<button class="btn btn-xs btn-danger margin-top-5">reject</button>'+
									 '<span class="pull-right font-xs text-muted"><i>3 hrs ago...</i></span>'+
								'</span>'+								
							'</span>'+
						'</li><li><span class="padding-10">'+
								'<em class="badge padding-5 no-border-radius bg-color-blue pull-left margin-right-5">'+
									'<i class="fa fa-facebook fa-fw fa-2x"></i>'+
								'</em>'+								
								'<span>'+
									 'Facebook recived +133 unique likes'+
									 '<br>'+
									 '<span class="pull-right font-xs text-muted"><i>4 hrs ago...</i></span>'+
								'</span>'+								
							'</span>'+
						'</li>'+
						'<li>'+
							'<span class="padding-10">'+
								'<em class="badge padding-5 no-border-radius bg-color-green pull-left margin-right-5">'+
									'<i class="fa fa-check fa-fw fa-2x"></i>'+
								'</em>'+								
								'<span>'+
									 '2 projects were completed on time! Submitted for your approval - <a href="javascript:void(0);" class="display-normal">Click here</a>'+
									 '<br>'+
									 '<span class="pull-right font-xs text-muted"><i>1 day ago...</i></span>'+
								'</span>'+								
							'</span>'+
						'</li>'+
						'<li>'+
							'<span class="padding-10">'+
								'<em class="badge padding-5 no-border-radius bg-color-greenLight pull-left margin-right-5">'+
									'<i class="fa fa-lock fa-fw fa-2x"></i>'+
								'</em><span>'+
									 'Your password was recently updated. Please complete your security questions from your profile page.'+
									 '<br>'+
									 '<span class="pull-right font-xs text-muted"><i>2 weeks ago...</i></span>'+
								'</span>'+								
							'</span>'+
						'</li>'+
					'</ul>'
					
					
					if($(elem).parent().hasClass('btn-group')){
				
				$(elem).parent().next().html('');
				$(elem).parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				$(elem).parent().next().html(smContent);
				
				
				}else{
				
				
		$(elem).parent().parent().parent().next().html('');
				$(elem).parent().parent().parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				$(elem).parent().parent().parent().next().html(smContent);
				
	}

}


	function ajaxGetTasks(elem){
		var content = '<ul class="notification-body">'+
	'<li>'+
		'<span>'+
			'<div class="bar-holder no-padding">'+
				'<p class="margin-bottom-5"><i class="fa fa-warning text-warning"></i> <strong>PRIMARY:</strong> <i>Upgrade Infestructure</i> <span class="pull-right semi-bold text-muted">85%</span></p>'+
				'<div class="progress progress-md progress-striped">'+
					'<div class="progress-bar bg-color-teal" style="width: 85%;"></div>'+
				'</div>'+
				'<em class="note no-margin">last updated on 12/12/2013</em>'+
			'</div>'+
		'</span>'+
	'</li>'+
	'<li>'+
	'<span>'+
			'<div class="bar-holder no-padding">'+
				'<p class="margin-bottom-5"><strong>URGENT:</strong> <i>Project Plan</i> <span class="pull-right semi-bold text-muted">25%</span></p>'+
				'<div class="progress progress-xs">'+
					'<div class="progress-bar bg-color-teal" style="width: 25%;"></div>'+
				'</div>'+
				'<em class="note no-margin">last updated on 12/12/2013</em>'+
			'</div>'+
		'</span>'+
	'</li>'+
	'<li>'+
		'<span>'+
			'<div class="bar-holder no-padding">'+
				'<p class="margin-bottom-5"><strong>CRITICAL:</strong> <i> Wireframes</i> <span class="pull-right semi-bold text-danger">5%</span></p>'+
				'<div class="progress progress-xs">'+
					'<div class="progress-bar progress-bar-danger" style="width: 5%;"></div>'+
				'</div>'+
				'<em class="note no-margin">last updated on 12/12/2013</em>'+
			'</div>'+
		'</span>'+
	'</li>'+
	'<li>'+
		'<span>'+
			'<div class="bar-holder no-padding">'+
				'<p class="margin-bottom-5"><strong>NORMAL:</strong> <i>Compile hotfix</i> <span class="pull-right semi-bold text-muted">99%</span></p>'+
				'<div class="progress progress-xs">'+
					'<div class="progress-bar progress-bar-success" style="width: 99%;"></div>'+
				'</div>'+
				'<em class="note no-margin">last updated on 12/12/2013</em>'+
			'</div>'+
		'</span>'+
	'</li>'+
	'<li>'+
		'<span>'+
			'<div class="bar-holder no-padding">'+
				'<p class="margin-bottom-5"><strong>MINOR:</strong> <i>Bug fix #213</i><span class="pull-right semi-bold text-muted"><i class="fa fa-check text-success"></i> Complete</span></p>'+
				'<div class="progress progress-micro">'+
					'<div class="progress-bar progress-bar-success" style="width: 100%;"></div>'+
				'</div>'+
				'<em class="note no-margin">last updated on 12/12/2013</em>'+
			'</div>'+
		'</span>'+
	'</li>'+
	'<li>'+
		'<span>'+
			'<div class="bar-holder no-padding">'+
				'<p class="margin-bottom-5"><strong>MINOR:</strong> <i>Bug fix #134</i><span class="pull-right semi-bold text-muted"><i class="fa fa-check text-success"></i> Complete</span></p>'+
				'<div class="progress progress-micro">'+
					'<div class="progress-bar progress-bar-success" style="width: 100%;"></div>'+
				'</div>'+
				'<em class="note no-margin display-inline"><a href="javascript:void(0);">see notes</a></em>'+
			'</div>'+
		'</span>'+
	'</li>'+
'</ul>';

if($(elem).parent().hasClass('btn-group')){
				
				$(elem).parent().next().html('');
				$(elem).parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				$(elem).parent().next().html(content);
				
				
				}else{
				
				
		$(elem).parent().parent().parent().next().html('');
				$(elem).parent().parent().parent().next().html('<i class="fa fa-spinner fa-spin fa-5x"></i>');
				$(elem).parent().parent().parent().next().html(content);

	}
}
	
	
	
	function getRandomInt(c,d){return Math.floor(Math.random()*(d-c+1))+c}

	function createSettings(){

		var htmlContent = '<div class="power-setting">'+
'<span id="power-setting-control"><i class="fa fa-cog txt-color-blueDark"></i></span> '+
'<form>'+
'<legend class="no-padding margin-bottom-10">Layout Options</legend>'+
'<section>'+
'<label><input name="subscription" id="fixed-header" type="checkbox" class="checkbox style-0"><span>Fixed header</span></label>'+
'<label><input type="checkbox" name="terms" id="fixed-navigation" class="checkbox style-0"><span>Fixed Navigation</span></label>'+
'<label><input type="checkbox" name="terms" id="fixed-container" class="checkbox style-0"><span>Inside <b>.container</b> <div class="font-xs text-right">(non-responsive)</div></span></label>'+
'<span id="smart-bgimages" style="display: none;"></span></section>'+
'<h6 class="margin-top-10 semi-bold margin-bottom-5">Skins</h6>'+
'<section id="smart-styles">'+
'<a href="javascript:void(0);" id="smart-style-0"  class="btn btn-block btn-xs txt-color-white margin-right-5" style="background-color:#3A6094;"><i class="fa fa-check fa-fw pull-left" id="skin-checked"></i>Power Default</a>'+
'<a href="javascript:void(0);" id="smart-style-1"  class="btn btn-block btn-xs txt-color-white" style="background:#EC8E70;">Apple Flavour</a>'+
'<a href="javascript:void(0);" id="smart-style-2"  class="btn btn-xs btn-block txt-color-darken margin-top-5" style="background:#fff;">Ultra Light</a>'+
'<a href="javascript:void(0);" id="smart-style-3"  class="btn btn-xs btn-block txt-color-white margin-top-5" style="background:#727677;">Metalic Skin</a></section>'+
'</form> '+
'</div>';

	$('body').append(htmlContent);

	}




$(document).on("click","#smart-style-1",function(event){
			localStorage.setItem('skin','apple');

			$('[id^="smart-style"]').find('i.fa-check').remove();
			$('#smart-style-1').prepend('<i class="fa fa-check fa-fw pull-left" id="skin-checked"></i>');
			//$('head').append('<link href="css/apple-skin.css" rel="stylesheet">');
			$('#skin_css').remove();
			$('#less_link').remove();
			$('[id^="less:"]').remove();
			$('head').append('<link rel="stylesheet/less" type="text/css" id="skin_css" href="css/apple-skin.less" />');
			$('head').append('<script src="js/less-1.7.3.min.js" id="less_link"></script>');
		

	});


$(document).on("click","#smart-style-0",function(event){
			localStorage.setItem('skin','default');
			$('#skin_css').remove();
			$('#less_link').remove();
			$('[id^="less:"]').remove();
			$('[id^="smart-style"]').find('i.fa-check').remove();
			$('#smart-style-0').prepend('<i class="fa fa-check fa-fw pull-left" id="skin-checked"></i>');
			$('head').append('<link href="css/default-skin.css" rel="stylesheet" id="skin_css"/>');
			$('head').append('<script src="js/less-1.7.3.min.js" id="less_link" ></script>');
			
		

	});


$(document).on("click","#smart-style-2",function(event){
			localStorage.setItem('skin','light');
			$('#skin_css').remove();
			$('#less_link').remove();
			$('[id^="less:"]').remove();
			$('[id^="smart-style"]').find('i.fa-check').remove();
			$('#smart-style-2').prepend('<i class="fa fa-check fa-fw pull-left" id="skin-checked"></i>');
			$('head').append('<link rel="stylesheet/less" type="text/css" id="skin_css" href="css/light-skin.less" />');
			$('head').append('<script src="js/less-1.7.3.min.js" id="less_link" ></script>');
			
		

	});

$(document).on("click","#smart-style-3",function(event){
			localStorage.setItem('skin','metalic');
			$('#skin_css').remove();
			$('#less_link').remove();
			$('[id^="less:"]').remove();
			$('[id^="smart-style"]').find('i.fa-check').remove();
			$('#smart-style-3').prepend('<i class="fa fa-check fa-fw pull-left" id="skin-checked"></i>');
			$('head').append('<link rel="stylesheet/less" type="text/css" id="skin_css" href="css/metalic-skin.less" />');
			$('head').append('<script src="js/less-1.7.3.min.js" id="less_link" ></script>');
			
		

	});