angular.module('shoooma')
.controller('AboutIndexController', function($scope,$rootScope) {


})
.directive('contactAs', function (){
		return {
			link: function($scope) {
                    
                /*==========================================================================*/
                    
                        
                $('#contact_us').submit(function(event){
                    //event.preventDefault;
                    /*Form validation*/
                    name =  $("input[name='name']").val();
                    tell = $("input[name='tell']").val();
                    email = $("input[name='email']").val();
                    text =  $("textarea[name='text']").val();
      
                    if( name== "" || tell == "" || email == "" || text == "")
                    {
                        text =  "یک یا چند فیلد خالی است" ;
                         $.fancybox.open( '<p class="alert">'+text+'</p>',{});
                        return false;
                    }

                    if(name.length < 3)
                    {
                        text =  "نام باید بیشتر از 3 کارکتر باشد";
                        $.fancybox.open( '<p class="alert">'+text+'</p>',{});
                        return false;
                    }
        
                    atpos = email.indexOf("@");
                    dotpos = email.lastIndexOf(".");
                    if (atpos < 1 || ( dotpos - atpos < 2 )) 
                    {
                        text =   "فرمت ایمیل وارد شده صحیح نیست" ;
                          $.fancybox.open( '<p class="alert">'+text+'</p>',{});
                        return false;
                    }
                    if(text.length < 5 )
                    {
                        text =   "متن پیام کوتاه است" ;
                         $.fancybox.open( '<p class="alert">'+text+'</p>',{});
                       
                        return false;
                    }
        
        
                    /*end Form validation*/
                    var form = $('form') ; 
                    var  url = $('form').attr("action");
                    var  form_data = form.serialize();
                    $.ajax({
                        url: url ,
                        type: 'GET',
                        data: form_data ,
                        success: function (response) {
                            if(response=="send"){
                                text = "پیام شما با موفقیت ارسال شد";
                                $.fancybox.open( '<p class="alert">'+text+'</p>',{});

                               form.trigger('reset');
                            }//end if
                        },
                        error: function () {
                                text =  "مشکل در ارسال اطلاعات لطفا مجدد تلاش کنید";
                                    $.fancybox.open( '<p class="alert">'+text+'</p>',{});
                         
                        }
                    }); 
                    return false;
                });// end contact_us
                
                
               
                /*==========================================================================*/
                  
            },//end link
            
        }
});


