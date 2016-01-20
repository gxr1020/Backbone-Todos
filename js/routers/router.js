var app = app || {};
(function () {
    'use strict';
    var TodoRouter=Backbone.Router.extend({
        routes:{
            '*path':'setFilter'
        },
        setFilter:function(param){
            app.TodoFilter=param ||'';
            //console.log('router',app.TodoFilter)
            app.todos.trigger('filter');
            $('.filters li a')
                .removeClass('selected')
                .filter('[href="#/'+(app.TodoFilter || '')+'"]')
                .addClass('selected')
        }

    });

    app.TodoRouter=new TodoRouter();
    Backbone.history.start();//开启history！！
})();