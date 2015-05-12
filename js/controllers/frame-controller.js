angular.module('shoooma')
.directive('frameController', function (){
		return {
			link: function($scope) {
                    
                /*==========================================================================*/
                var amin = $('.app_header').html();
                $('frame-controller').prepend('<div class="app_header2">'+amin+'</div>');
                $('.app_header').hide(0);
                /*==========================================================================*/
                  
            },//end link
            
        }
});


