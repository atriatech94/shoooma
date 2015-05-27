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
				$('.main100').css("height",window.innerHeight);
					$( window ).resize(function() {
						console.log(window.innerHeight);
						$('.main100').css("height",window.innerHeight);
				   });
				var shahr = [];
				shahr['آذربایجان شرقی'] ='آذرشهر ,اسکو ,اهر ,بستان‌آباد ,بناب ,تبریز ,جلفا ,چاراویماق ,سراب ,شبستر ,عجب‌شیر ,کلیبر ,مراغه ,مرند ,ملکان ,میانه ,ورزقان ,هریس ,هشترود';
				shahr['آذربایجان غربی'] ="ارومیه ,اشنویه ,بوکان ,پیرانشهر ,تکاب ,چالدران ,خوی ,سردشت ,سلماس ,شاهین‌دژ ,ماکو ,مهاباد ,میاندوآب ,نقده";
				shahr['اردبیل'] ="اردبیل ,بیله‌سوار ,پارس‌آباد ,خلخال ,کوثر ,گِرمی ,مِشگین‌شهر ,نَمین ,نیر";
				shahr['اصفهان'] ="آران و بیدگل ,اردستان ,اصفهان ,برخوار و میمه ,تیران و کرون ,چادگان ,خمینی‌شهر ,خوانسار ,سمیرم ,شهرضا ,سمیرم سفلی ,فریدن ,فریدون‌شهر ,فلاورجان ,کاشان ,گلپایگان ,لنجان ,مبارکه ,نائین ,نجف‌آباد ,نطنز" ;
				shahr['البرز'] = "نظرآباد,طالقان,اشتهارد,فردیس,کرج,ساوجبلاغ";
				shahr['ایلام'] = "آبدانان ,ایلام ,ایوان ,دره‌شهر ,دهلران ,شیروان و چرداول ,مهران";
				shahr['بوشهر'] = "بوشهر ,تنگستان ,جم ,دشتستان ,دشتی,دیر ,دیلم ,کنگان ,گناوه";
				shahr['تهران'] = "اسلام‌شهر ,پاکدشت ,تهران ,دماوند ,رباط‌کریم ,ری,شمیرانات ,شهریار ,فیروزکوه,ورامین";
				shahr['چهار محال و بختیاری'] = "اردل ,بروجن ,شهرکرد ,فارسان ,کوهرنگ ,لردگان";
				shahr['خراسان جنوبی'] = "بیرجند ,درمیان ,سرایان ,سربیشه ,فردوس ,قائنات,نهبندان";
				shahr['خراسان رضوی'] = "بردسکن ,تایباد ,تربت جام ,تربت حیدریه ,چناران ,خلیل‌آباد ,خواف ,درگز ,رشتخوار ,سبزوار ,سرخس ,فریمان ,قوچان ,کاشمر ,کلات ,گناباد ,مشهد ,مه ولات ,نیشابور";
				shahr['خراسان شمالی'] = "اسفراین ,بجنورد ,جاجرم ,شیروان ,فاروج ,مانه و سملقان";
				shahr['خوزستان'] = "آبادان ,امیدیه ,اندیمشک ,اهواز ,ایذه ,باغ‌ملک ,بندر ماهشهر ,بهبهان ,خرمشهر ,دزفول ,دشت آزادگان ,رامشیر ,رامهرمز ,شادگان ,شوش ,شوشتر ,گتوند ,لالی ,مسجد سلیمان,هندیجان ";
				shahr['زنجان'] = "ابهر ,ایجرود ,خدابنده ,خرمدره ,زنجان ,طارم ,ماه‌نشان";
				shahr['سمنان'] = "دامغان ,سمنان ,شاهرود ,گرمسار ,مهدی‌شهر";
				shahr['سیستان و بلوچستان'] = "ایرانشهر ,چابهار ,خاش ,دلگان ,زابل ,زاهدان ,زهک ,سراوان ,سرباز ,کنارک ,نیک‌شهر";
				shahr['فارس'] = " شیراز , آباده ,ارسنجان ,استهبان ,اقلید ,بوانات ,پاسارگاد ,جهرم ,خرم‌بید ,خنج ,داراب ,زرین‌دشت ,سپیدان ,فراشبند ,فسا ,فیروزآباد ,قیر و کارزین ,کازرون ,لارستان ,لامِرد ,مرودشت ,ممسنی ,مهر ,نی‌ریز";
				shahr['قزوین'] = "آبیک ,البرز ,بوئین‌زهرا ,تاکستان ,قزوین";
				shahr['قم'] = "قم";
				shahr['کردستان'] = "بانه ,بیجار ,دیواندره ,سروآباد ,سقز ,سنندج ,قروه ,کامیاران ,مریوان";
				shahr['کرمان'] = "بافت ,بردسیر ,بم ,جیرفت ,راور ,رفسنجان ,رودبار جنوب ,زرند ,سیرجان ,شهر بابک ,عنبرآباد ,قلعه گنج ,کرمان ,کوهبنان ,کهنوج ,منوجان";
				shahr['کرمانشاه'] = "اسلام‌آباد غرب ,پاوه ,ثلاث باباجانی ,جوانرود ,دالاهو ,روانسر ,سرپل ذهاب ,سنقر ,صحنه ,قصر شیرین ,کرمانشاه ,کنگاور ,گیلان غرب ,هرسین";
				shahr['کهگیلویه و بویراحمد'] = "بویراحمد ,بهمئی ,دنا ,کهگیلویه ,گچساران";
				shahr['گلستان'] = "آزادشهر ,آق‌قلا ,بندر گز ,ترکمن ,رامیان ,علی‌آباد ,کردکوی ,کلاله ,گرگان ,گنبد کاووس ,مراوه‌تپه ,مینودشت";
				shahr['گیلان'] = "آستارا ,آستانه اشرفیه ,اَملَش ,بندر انزلی ,رشت ,رضوانشهر ,رودبار ,رودسر ,سیاهکل ,شَفت ,صومعه‌سرا ,طوالش ,فومَن ,لاهیجان ,لنگرود ,ماسال";
				shahr['لرستان'] = "ازنا ,الیگودرز ,بروجرد ,پل‌دختر ,خرم‌آباد ,دورود ,دلفان ,سلسله ,کوهدشت";
				shahr['مازندران'] = "آمل ,بابل ,بابلسر ,بهشهر ,تنکابن ,جویبار ,چالوس ,رامسر ,ساری ,سوادکوه ,قائم‌شهر ,گلوگاه ,محمودآباد ,نکا ,نور ,نوشهر";
				shahr['مرکزی'] = "آشتیان ,اراک ,تفرش ,خمین ,دلیجان ,زرندیه ,ساوه ,شازند ,کمیجان ,محلات";
				shahr['هرمزگان'] = "ابوموسی ,بستک ,بندر عباس ,بندر لنگه ,جاسک ,حاجی‌آباد ,شهرستان خمیر ,رودانقشم ,گاوبندی ,میناب";
				shahr['همدان'] = "اسدآباد ,بهار ,تویسرکان ,رزن ,کبودرآهنگ ,ملایر ,نهاوند ,همدان";
				shahr['یزد'] = "ابرکوه ,اردکان ,بافق ,تفت ,خاتم ,صدوق ,طبس ,مهریز ,مِیبُد ,یزد";
				
			 $("#drop").change(function () {
					
					$('#drop2').empty();
					city = shahr[$scope.filter.state].split(",");
						
						for(i=0;i<city.length;i++)
						{
						$('#drop2').append($('<option>', {
							value: city[i].trim(),
							text: city[i].trim()
					   }));
						}
    
						
					
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

