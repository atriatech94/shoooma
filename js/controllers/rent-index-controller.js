angular.module('shoooma')
.controller('RentIndexController', function($scope) {
	$scope.times = [];

    $scope.times[0] = "امروز";
    $scope.times[1] = "دیروز";
	for(i=2;i<28;i++)
	{
		$scope.times[i] = moment().subtract(i, 'days' ).format(' jD  jMMMM  ');
	}
	console.log($scope.times);
	//$scope.time = moment().subtract(20, 'days' ).calendar();
	
	//alert($scope.time);
	//console.log(toJalaali(2015, 04, 12));
})
.directive('swSwipe2', function (){
		return {
			link: function($scope) {swiper2 = new Swiper('.swiper2',{
					 pagination: '.swiper-pagination',
       				 slidesPerView: 'auto',
                      followFinger : false,
				});
			},
			templateUrl : "pages/rent/sw-swipe2.html"
		}
});
