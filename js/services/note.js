angular.module('shoooma')
.factory('Rent', function($resource){
            return  $resource('http://:url/:action',
                {url: 'app.shoooma.com',  callback1:'rtyyttg46687hd'},
                {get:{method:'JSON'}});
})
.factory('Sale', function($resource){
            return  $resource('http://:url/:action',
                {url: 'app.shoooma.com',  callback2:'sdfsdfds432343'},
                {get:{method:'JSON'}});
})

.factory('Special', function($resource){
            return  $resource('http://:url/:action',
                {url: 'app.shoooma.com',  callback3:'sdrtee6QWfg343'},
                {get:{method:'JSON'}});
});


  