angular.module('shoooma')
.controller('SalesIndexController', function($scope,$rootScope,$filter) {
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
    $scope.rent = $rootScope.sale;
    $scope.rent.forEach(function(rent) {
                    
                    var d = new Date(rent.date);
                    
                    if( days3 < (d.valueOf()) )
                    {
                       
                        rent.dates =    moment(d.valueOf()).startOf('day').fromNow();
                    }
                    else{
                        
                         rent.dates =    moment(d.valueOf()).format(' jD  jMMMM ');
                    }
                  
				    rent.dates1 = moment(d.valueOf()).format('YYYY-MM-DD');    
                  
                });
            
    $scope.rent1 =  $scope.rent;
	

		var price = [];

		$scope.$watch('category', function() {
              if($scope.category === undefined || $scope.category == 0)
			  {
                   $scope.rent1 = $scope.rent;
				   return;
			  }
			  else
			  {
				  j=0;
				  price = [];
				  if($scope.category == 1)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage > 0 && $scope.rent[i].mortgage <= 200000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  if($scope.category == 2)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage > 200000000 && $scope.rent[i].mortgage <= 300000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					 
				  }
				  
				  if($scope.category == 3)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage > 300000000 && $scope.rent[i].mortgage <= 400000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					 
				  }
				  
				   if($scope.category == 4)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage > 400000000 && $scope.rent[i].mortgage <= 500000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					   
				  }
				  
				  if($scope.category == 5)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage > 500000000 && $scope.rent[i].mortgage <= 700000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  
				  if($scope.category == 6)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage > 700000000 && $scope.rent[i].mortgage <= 1000000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					
					  
				  }
				  
				  if($scope.category == 7)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage > 1000000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					   
				  }
				 $scope.rent1 = price; 
				
			  }
            });
		   
			
		

})
.directive('swSwipe', function (){
		return {
			link: function($scope) {
                    swiper2 = new Swiper('.swiper1',{
					 pagination: '.swiper-pagination',
       				 slidesPerView: 'auto',
                      followFinger : false,
				});
               var flags1= 0;
                 $('body').delegate(".menu_icon ","click",function(){
                   if(flags1==0){swiper2.slideNext();flags1 ++; }else{swiper2.slidePrev();flags1-- ;}
                });
                
                $('body').delegate(".app_header2 .menu_icon","click",function(){return false;});
                
                var amin = $('.app_header').html();
                $('sw-swipe').prepend('<div class="app_header2">'+amin+'</div>');
                $('.app_header').hide(0);
			},//end link
			templateUrl : "pages/sales/sw-swipe.html"
		}
});

