$(document)
    .ready(function () {

var headerHeight = 54;
var screenHeight = $(window).height();
var bodyHeight = screenHeight - headerHeight;
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
		setTimeout( "$('.power-widget .power-widget-header .controls').find('i.fa-spinner').hide();",1000 );
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
			
			})

	
	});
	
	$(document).on("click","#left-panel ul li a",function(event){
		event.preventDefault();
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
	
	