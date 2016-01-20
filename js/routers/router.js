var app = app || {};
(function () {
    'use strict';
    var TodoRouter=Backbone.Router.extend({
        routes:{
            '*path':'setFilter'
        },
        setFilter:function(param){
            console.log(param);
        }

    });

    app.TodoRouter=new TodoRouter();
    Backbone.history.start();//开启history！！
})();