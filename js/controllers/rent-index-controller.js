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

      var price = [];

		$scope.$watch('[price, price1]', function() {

              if($scope.price == 0 &&  $scope.price1 == 0 || $scope.price === undefined &&  $scope.price1 === undefined  )
			  {
				   $scope.price = 0 ;
				   $scope.price1 = 0;
                   $scope.rent1 = $scope.rent;
				   return;
			  }
			  
			  else
			  {
				  j=0;
				  price = [];
				  if($scope.price == 0 && $scope.price1 == 1)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].rent < 400000 )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  if($scope.price == 0 && $scope.price1 == 2)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].rent >= 400000 && $scope.rent[i].rent <= 700000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				   if($scope.price == 0 && $scope.price1 == 3)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].rent >= 700000 && $scope.rent[i].rent <= 1000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				   if($scope.price == 0 && $scope.price1 == 4)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].rent >= 1000000 && $scope.rent[i].rent <= 2000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				   if($scope.price == 0 && $scope.price1 == 5)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].rent >= 2000000 && $scope.rent[i].rent <= 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				   if($scope.price == 0 && $scope.price1 == 6)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].rent > 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  
				  /*------------------------------- 1 ----------------------------------------*/
				     if($scope.price == 1 && $scope.price1 == 0)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage < 10000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 1 && $scope.price1 == 1)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage < 10000000 && $scope.rent[i].rent < 400000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 1 && $scope.price1 == 2 )
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage < 10000000 && $scope.rent[i].rent >= 400000 && $scope.rent[i].rent <= 700000   )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 1 && $scope.price1 == 3)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage < 10000000 && $scope.rent[i].rent >= 700000 && $scope.rent[i].rent <= 1000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 1 && $scope.price1 == 4)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage < 10000000 && $scope.rent[i].rent >= 1000000 && $scope.rent[i].rent <= 2000000 )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 1 && $scope.price1 == 5)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage < 10000000 && $scope.rent[i].rent >= 2000000 && $scope.rent[i].rent <= 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 1 && $scope.price1 == 6)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage < 10000000 && $scope.rent[i].rent > 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  
				  
				  /*-----------------------------------------------------------------------*/
				  
				   /*------------------------------- 2 ----------------------------------------*/
				     if($scope.price == 2 && $scope.price1 == 0)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 10000000 && $scope.rent[i].mortgage <= 20000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 2 && $scope.price1 == 1)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 10000000 && $scope.rent[i].mortgage <= 20000000 && $scope.rent[i].rent < 400000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 2 && $scope.price1 == 2 )
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 10000000 && $scope.rent[i].mortgage <= 20000000 && $scope.rent[i].rent >= 400000 && $scope.rent[i].rent <= 700000   )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 2 && $scope.price1 == 3)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 10000000 && $scope.rent[i].mortgage <= 20000000 && $scope.rent[i].rent >= 700000 && $scope.rent[i].rent <= 1000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 2 && $scope.price1 == 4)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 10000000 && $scope.rent[i].mortgage <= 20000000 && $scope.rent[i].rent >= 1000000 && $scope.rent[i].rent <= 2000000 )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 2 && $scope.price1 == 5)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 10000000 && $scope.rent[i].mortgage <= 20000000 && $scope.rent[i].rent >= 2000000 && $scope.rent[i].rent <= 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 2 && $scope.price1 == 6)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 10000000 && $scope.rent[i].mortgage <= 20000000 && $scope.rent[i].rent > 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  
				  
				  /*-----------------------------------------------------------------------*/
				  
				    /*------------------------------- 3 ----------------------------------------*/
				     if($scope.price == 3 && $scope.price1 == 0)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 20000000 && $scope.rent[i].mortgage <= 35000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 3 && $scope.price1 == 1)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 20000000 && $scope.rent[i].mortgage <= 35000000 && $scope.rent[i].rent < 400000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 3 && $scope.price1 == 2 )
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 20000000 && $scope.rent[i].mortgage <= 35000000 && $scope.rent[i].rent >= 400000 && $scope.rent[i].rent <= 700000   )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 3 && $scope.price1 == 3)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 20000000 && $scope.rent[i].mortgage <= 35000000 && $scope.rent[i].rent >= 700000 && $scope.rent[i].rent <= 1000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 3 && $scope.price1 == 4)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 20000000 && $scope.rent[i].mortgage <= 35000000 && $scope.rent[i].rent >= 1000000 && $scope.rent[i].rent <= 2000000 )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 3 && $scope.price1 == 5)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 20000000 && $scope.rent[i].mortgage <= 35000000 && $scope.rent[i].rent >= 2000000 && $scope.rent[i].rent <= 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 3 && $scope.price1 == 6)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 20000000 && $scope.rent[i].mortgage <= 35000000 && $scope.rent[i].rent > 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  
				  
				  /*-----------------------------------------------------------------------*/
				  
				  /*------------------------------- 4 ----------------------------------------*/
				     if($scope.price == 4 && $scope.price1 == 0)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 35000000 && $scope.rent[i].mortgage <= 50000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 4 && $scope.price1 == 1)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 35000000 && $scope.rent[i].mortgage <= 50000000 && $scope.rent[i].rent < 400000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 4 && $scope.price1 == 2 )
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 35000000 && $scope.rent[i].mortgage <= 50000000 && $scope.rent[i].rent >= 400000 && $scope.rent[i].rent <= 700000   )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 4 && $scope.price1 == 3)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 35000000 && $scope.rent[i].mortgage <= 50000000 && $scope.rent[i].rent >= 700000 && $scope.rent[i].rent <= 1000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 4 && $scope.price1 == 4)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 35000000 && $scope.rent[i].mortgage <= 50000000 && $scope.rent[i].rent >= 1000000 && $scope.rent[i].rent <= 2000000 )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 4 && $scope.price1 == 5)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 35000000 && $scope.rent[i].mortgage <= 50000000 && $scope.rent[i].rent >= 2000000 && $scope.rent[i].rent <= 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 4 && $scope.price1 == 6)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 35000000 && $scope.rent[i].mortgage <= 50000000 && $scope.rent[i].rent > 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  
				  
				  /*-----------------------------------------------------------------------*/
				  
				  /*------------------------------- 5 ----------------------------------------*/
				     if($scope.price == 5 && $scope.price1 == 0)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 50000000 && $scope.rent[i].mortgage <= 70000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 5 && $scope.price1 == 1)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 50000000 && $scope.rent[i].mortgage <= 70000000 && $scope.rent[i].rent < 400000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 5 && $scope.price1 == 2 )
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 50000000 && $scope.rent[i].mortgage <= 70000000 && $scope.rent[i].rent >= 400000 && $scope.rent[i].rent <= 700000   )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 5 && $scope.price1 == 3)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 50000000 && $scope.rent[i].mortgage <= 70000000 && $scope.rent[i].rent >= 700000 && $scope.rent[i].rent <= 1000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 5 && $scope.price1 == 4)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 50000000 && $scope.rent[i].mortgage <= 70000000 && $scope.rent[i].rent >= 1000000 && $scope.rent[i].rent <= 2000000 )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 5 && $scope.price1 == 5)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 50000000 && $scope.rent[i].mortgage <= 70000000 && $scope.rent[i].rent >= 2000000 && $scope.rent[i].rent <= 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 5 && $scope.price1 == 6)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 50000000 && $scope.rent[i].mortgage <= 70000000 && $scope.rent[i].rent > 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  
				  
				  /*-----------------------------------------------------------------------*/
				  
				   /*------------------------------- 6 ----------------------------------------*/
				     if($scope.price == 6 && $scope.price1 == 0)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 70000000 && $scope.rent[i].mortgage <= 100000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 6 && $scope.price1 == 1)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 70000000 && $scope.rent[i].mortgage <= 100000000 && $scope.rent[i].rent < 400000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 6 && $scope.price1 == 2 )
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 70000000 && $scope.rent[i].mortgage <= 100000000 && $scope.rent[i].rent >= 400000 && $scope.rent[i].rent <= 700000   )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 6 && $scope.price1 == 3)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 70000000 && $scope.rent[i].mortgage <= 100000000 && $scope.rent[i].rent >= 700000 && $scope.rent[i].rent <= 1000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 6 && $scope.price1 == 4)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 70000000 && $scope.rent[i].mortgage <= 100000000 && $scope.rent[i].rent >= 1000000 && $scope.rent[i].rent <= 2000000 )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 6 && $scope.price1 == 5)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 70000000 && $scope.rent[i].mortgage <= 100000000 && $scope.rent[i].rent >= 2000000 && $scope.rent[i].rent <= 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 6 && $scope.price1 == 6)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 70000000 && $scope.rent[i].mortgage <= 100000000 && $scope.rent[i].rent > 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  
				  
				  /*-----------------------------------------------------------------------*/
				  
				  
				   /*------------------------------- 7 ----------------------------------------*/
				     if($scope.price == 7 && $scope.price1 == 0)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 100000000)
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 7 && $scope.price1 == 1)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 100000000 && $scope.rent[i].rent < 400000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 7 && $scope.price1 == 2 )
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 100000000 && $scope.rent[i].rent >= 400000 && $scope.rent[i].rent <= 700000   )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 7 && $scope.price1 == 3)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 100000000 && $scope.rent[i].rent >= 700000 && $scope.rent[i].rent <= 1000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 7 && $scope.price1 == 4)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 100000000 && $scope.rent[i].rent >= 1000000 && $scope.rent[i].rent <= 2000000 )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 7 && $scope.price1 == 5)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 100000000 && $scope.rent[i].rent >= 2000000 && $scope.rent[i].rent <= 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				     if($scope.price == 7 && $scope.price1 == 6)
				  {
					  
					  for(i=0;i<$scope.rent.length;i++)
				       {
						  if($scope.rent[i].mortgage >= 100000000 && $scope.rent[i].rent > 3000000  )
						  {
					        price[j]=$scope.rent[i];
							j++;
						  }
				       }
					  
				  }
				  
				  
				  /*-----------------------------------------------------------------------*/
				  
				  
				  
				 $scope.rent1 = price; 
				
			  }
            });
      

})
.directive('swSwipe2', function (){
		return {
			link: function($scope) {
                    swiper2 = new Swiper('.swiper2',{
					 pagination: '.swiper-pagination',
       				 slidesPerView: 'auto',
                      followFinger : false,
				});
                 
			},//end link
			templateUrl : "pages/rent/sw-swipe2.html"
		}
})
.directive('swFancy', function (){
		return {
			link: function($scope) {
				
			var flags= 0;
                    $('body').delegate(".menu_icon ","click",function(){
                        if(flags==0){swiper2.slideNext();flags ++; }else{swiper2.slidePrev();flags-- ;}
                    });
                var fancyopen = 0 ;
                    $( ".main" ).delegate( ".post_one", "click", function() {
                        $("*.post_one").removeClass('active');
                        $(this).addClass('active');
                        var amin = $scope.rent;
                        console.log(amin);
                        melk_id =  $(this).attr('melk_id');
                        
                        var groups = $.grep(amin, function(e){ return e.id == melk_id });
                        var content = '<div class="melks_detail">';
                        content += '<h2>'+groups[0].kind+'/کد '+groups[0].id+'</h2>' ;
                        content += '<p class="m_detail">'+groups[0].description+'</p>' ;
                        if(groups[0].type == 1)
                            content += '<span class="custs">رهن '+groups[0].mortgage+' تومان , اجاره : '+groups[0].rent+' تومان</span>' ;
                        else
                            content += '<span class="custs">قیمت '+groups[0].mortgage+' تومان</span>' ;    
                        content += '<span class="m_date">'+groups[0].dates+'</span>' ;
                        content += '<span class="m_name">'+groups[0].name+'</span>' ;
                        content += '<span class="m_mobile">'+groups[0].mobile+'</span>' ;
                        if(groups[0].status==1){ content += '<span class="m_status">فسخ شده</span>' ;}
                        content += '<div>' ;
                        $('.main100').css({' -webkit-overflow-scrolling':'none','overflow-y':'hidden'});
                        $.fancybox.open( content,{
                            padding : 20 ,
                            afterClose: function() {
                              $('.main100').css({' -webkit-overflow-scrolling':'touch','overflow-y':'auto'});
                            }
                        });
                        
                        
                    });
                    $('body').delegate('.fancybox-overlay',"click",function(){
                        alert(123);
                    });
                
                /*==================================================================*/
                
                /*==================================================================*/
              
                $('body').delegate(".app_header2 .menu_icon","click",function(){return false;});
                var amin = $('.app_header').html();
                $('sw-swipe2').prepend('<div class="app_header2">'+amin+'</div>');
                $('.app_header').hide(0);
                     
			},//end link
        }
});
