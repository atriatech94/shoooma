var getdata = 0;

angular.module('shoooma')
.controller('IndexController', function($scope,$rootScope,Rent,Sale,Special) {
    
	 if(getdata == 1)
	{
		 document.getElementById("loading").style.display = "none";
	}
	
    var online = check_net();
    if(getdata==0 && online==1)
    {
        $rootScope.rent =  get_data_rent(Rent,$rootScope);
        $rootScope.sale =  get_data_sale(Sale,$rootScope);
        $rootScope.special =  get_data_special(Special,$rootScope); 
        getdata ++;
          
        
    }else if(getdata==0 && online==0){
        $rootScope.rent =  get_data_rent(Rent,$rootScope);
        $rootScope.sale =  get_data_sale(Sale,$rootScope);
        $rootScope.special =  get_data_special(Special,$rootScope)  ; 
		getdata ++;
    }
   

})
.directive('checkNet',['Rent' ,'Sale' ,'Special', function($rootScope,Rent,Sale,Special){
    
    return {
			link: function($rootScope) {
               /*====================== click interneti link ===================================*/
               
                $('.links_home a').click(function(event){
                    console.log($rootScope.rent);
                    event.preventDefault;
                    num = $(this).index();
				
                    if(num != 5 )
                    {
                        //rent
                        if($rootScope.sale == "none" )
                        {
                            $.fancybox.open("<p>برای مشاهده این قسمت اینترنت گوشی خود را فعال کنید </p><button class='refresh'>تلاش مجدد</button>");
                            return false; 
                        }
                          
                    }

                });
              
               /*======================end  click interneti link ===================================*/
                $('body ').delegate(".refresh","click",function(){
                   online =  check_net();
                        
                    if(online == 1)
                    {   $.fancybox.close();
                        window.location.href ="./";
                    }else{
                       $('.refresh').fadeOut(100,function(){ $('.refresh').fadeIn(100)});
                    }
                    
                });
               /*======================chech dobare net===================================*/
                
                
               /*======================chech dobare net===================================*/
                
            }// function link 
    }//end return 
    
    
}]);


function get_data_rent(Rent,$rootScope){
    Rent.all()
    .success(function(data){
       $rootScope.rent = data;
	   console.log(data);
        return $rootScope.rent;
        
    })
    .error(function(){
       $rootScope.rent = "none";
        return $rootScope.rent;
    });
}

function get_data_sale(Sale,$rootScope){
   Sale.all()
   .success(function(data){
       $rootScope.sale = data;
	   console.log($rootScope.sale);
	   document.getElementById("loading").style.display = "none";
       return $rootScope.sale;
   })
   .error(function(){
      $rootScope.sale = "none";
	   document.getElementById("loading").style.display = "none";
	   $.fancybox.open("<p>برای مشاهده این قسمت اینترنت گوشی خود را فعال کنید </p><button class='refresh'>تلاش مجدد</button>");
       return $rootScope.sale;
   });    
}

function get_data_special(Special,$rootScope){
    Special.all()
    .success(function(data){
        $rootScope.special = data;
        return $rootScope.special;
    })
    .error(function(){
        $rootScope.special = "none";
        return $rootScope.special;
    });

}


function check_net(){
    var online = 0;
    if (navigator.onLine){
        online = 1;
    }else{ 
        online = 0; 
    }
    return online;
}
