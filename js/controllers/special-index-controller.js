angular.module('shoooma')
.controller('SpecialIndexController', function($scope,$rootScope) {

    $scope.rent = $rootScope.special;
    console.log($rootScope.special);

})
.directive('swFancy2', function (){
		return {
			link: function($scope) {
             
                    $( ".contain" ).delegate( ".special_one", "click", function() {
                        var amin = $scope.special;
                        console.log(amin);
                        melk_id =  $(this).attr('melk_id');
                        var groups = $.grep(amin, function(e){ return e.id == melk_id });
                        var content = '<div class="melks_detail">';
                        content += '<h2>'+groups[0].title+'</h2><br>' ;
                        content += '<img width="90" src="http://www.shoooma.com/admin/include/upload/special/'+groups[0].picname+'">' ;
                        content += '<br><div class="m_detail">'+groups[0].description+'</div>' ;
                        content += '<div>' ;
                        
                        $.fancybox.open( content,{
                            padding : 20
                        });
                    });
                    
                     
			},//end link
        }
});


