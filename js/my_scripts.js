$(function () {
	//script for popups
	$('a.registration').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
		
//fancyBox
$("a.gallery2").fancybox(
			{						
          "padding" : 0,
          "imageScale" : false, 
			"zoomOpacity" : false,
			"zoomSpeedIn" : 1000,	
			"zoomSpeedOut" : 1000,	
			"zoomSpeedChange" : 1000, 
			"frameWidth" : 2700,	 
			"frameHeight" : 2040, 
			"overlayShow" : true, 
			"overlayOpacity" : 0.8,	
			"hideOnContentClick" :false,
			"centerOnScroll" : false
				
			});

	//Валидация	
$(document).ready(function(){

    $("#loginform").validate({

       rules:{

            login:{
                required: true,
                minlength: 6,
                maxlength: 32,
            },

            password:{
                required: true,
                minlength: 6,
                
            },
       },

       messages:{

            login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Емейл должен быть минимум 4 символа",
               
            },

            password:{
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Пароль должен быть максимум 16 символов",
            },

       }

    });
	    $("#loginform1").validate({

       rules:{

            login:{
                required: true,
                minlength: 6,
                
            },

            password:{
                required: true,
                minlength: 6,
                maxlength: 16,
            },
       },

       messages:{

            login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Емейл должен содержать минимум 4 символа",
                
            },

            password:{
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен содержать минимум 6 символа",
                maxlength: "Пароль должен содержать максимум 16 символов",
            },

       }

    });
	

});
$(document).ready(function() {  
 $("#validate").keyup(function(){
    
    var email = $("#validate").val();
  
    if(email != 0)
    {
    if(isValidEmailAddress(email))
    {
    $("#validEmail").css({
  "background-image": "url('images/validYes.png')"
    });
    } else {
    $("#validEmail").css({
  "background-image": "url('images/validNo.png')"
    });
    }
    } else {
    $("#validEmail").css({
  "background-image": "none"
    }); 
    }
  
    });
  
    });
  
    function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
    }
	
	
	
	$(document).ready(function() {  
 $("#validate1").keyup(function(){
    
    var email = $("#validate1").val();
  
    if(email != 0)
    {
    if(isValidEmailAddress(email))
    {
    $("#validEmail1").css({
  "background-image": "url('images/validYes.png')"
    });
    } else {
    $("#validEmail1").css({
  "background-image": "url('images/validNo.png')"
    });
    }
    } else {
    $("#validEmail1").css({
  "background-image": "none"
    }); 
    }
  
    });
  
    });
  
    function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
    }
	// number
$('.int').waypoint( function(dir) {
	if ( dir === 'down' ){
	     var number_step = $.animateNumber.numberStepFactories.separator('')
$('.int').animateNumber(
  {
    number: 25000,
    numberStep: number_step
  },
  1500
);
$('.int2').animateNumber(
  {
    number: 180000,
    numberStep: number_step
  },
  1500
);
$('.number').animateNumber(
  {
    number: 7,
    numberStep: number_step
  },
  1500
);
	}
	else{}
}, {
	offset: '100%'
});
//menu accardion
   function initMenu() {
            var selector = '.list_menu > li > a';
            $('.list_menu ul').hide();
            $(selector).on('click', function() {

                $(selector).find('active').toggleClass('active');
                $(this).toggleClass('active').next().slideToggle('normal').removeAttr();
                return false;
            });
        }
        $(document).ready(function() {
            initMenu();
        });
     
   
});	



 
