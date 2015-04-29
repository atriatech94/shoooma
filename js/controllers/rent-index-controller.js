angular.module('shoooma')
.controller('RentIndexController', function($scope,$rootScope,$filter) {
   
    var times = [] ;
    
	for(i=0;i<28;i++)
	{
            if(i==0)
            {
                times.push( {
                    "l" : "امروز",
                    "d" : moment().subtract(i, 'days' ).format('YYYY-MM-DD'),
                    });
                }else if(i==1){
                    times.push( {
                         "l" : "دیروز",
                        "d" :  moment().subtract(i, 'days' ).format('YYYY-MM-DD'),
                    });

                }else{

                   times.push( {
                         "l" :  moment().subtract(i, 'days' ).format(' jD  jMMMM'),
                        "d" :  moment().subtract(i, 'days' ).format('YYYY-MM-DD'),
                    });
                }
}
    
    $scope.times = times;

    var days3 = moment().subtract(3, 'days').valueOf() ;   
	 
    $scope.rent = $rootScope.rent;
    $scope.rent.forEach(function(rent) {
                    
                    var d = new Date(rent.date);
                    
                    if( days3 < (d.valueOf()) )
                    {
                       
                        rent.dates =    moment(d.valueOf()).startOf('day').fromNow();
                    }
                    else{
                        
                         rent.dates =    moment(d.valueOf()).format(' jD  jMMMM ');
						 
                    }
                     rent.dates1 =    moment(d.valueOf()).format('YYYY-MM-DD'); 
                  
                });
            
    $scope.rent1 =  $scope.rent;

       $scope.prformSearch = function(searchText) {
		   

			
          if(searchText == 1)
          {
			  
              $scope.rent1 =  $scope.rent;
              $scope.tab =1;
			  
               return   $scope.rent1;
              
              
          }
          $scope.rent1 = $filter('filter')($scope.rent, {dates1:searchText});
           $scope.tab = searchText;
		       
                    return   $scope.rent1;
               
        }  

      

})
.directive('swSwipe2', function (){
		return {
			link: function($scope) {
                    swiper2 = new Swiper('.swiper2',{
					 pagination: '.swiper-pagination',
       				 slidesPerView: 'auto',
                      followFinger : false,
				});
                flags= 0;
                    $('body').delegate(".menu_icon ","click",function(){
                        if(flags==0){swiper2.slideNext();flags ++; }else{swiper2.slidePrev();flags-- ;}
                    }); 
			},//end link
			templateUrl : "pages/rent/sw-swipe2.html"
		}
})
.directive('swFancy', function (){
		return {
			link: function($scope) {
                    $( ".main" ).delegate( ".post_one", "click", function() {
                        var amin = $scope.rent;
                        melk_id =  $(this).attr('melk_id');
                        var groups = $.grep(amin, function(e){ return e.id == melk_id });
                        var content = '<div class="melks_detail">';
                        content += '<h2>'+groups[0].kind+'/کد '+groups[0].id+'</h2>' ;
                        content += '<p class="m_detail">'+groups[0].description+'</p>' ;
                        content += '<span class="m_date">'+groups[0].dates+'</span>' ;
                        content += '<span class="m_name">'+groups[0].name+'</span>' ;
                        content += '<span class="m_mobile">'+groups[0].mobile+'</span>' ;
                        if(groups[0].status==1){ content += '<span class="m_status">فسخ شده</span>' ;}
                        content += '<div>' ;
                        
                        $.fancybox.open( content,{
                            padding : 20
                        });
                    });
                    
                     
			},//end link
        }
});
