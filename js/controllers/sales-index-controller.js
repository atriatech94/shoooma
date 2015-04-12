angular.module('shoooma')
.controller('SalesIndexController', function() {
	

			
})
.directive('swSwpie', function (){
    return {
        link: function($scope) {swiper1 = new Swiper('.swiper1');},
        templateUrl : "pages/sales/sw-swipe.html"
    }
});
