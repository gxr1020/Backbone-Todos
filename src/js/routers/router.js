var app = app || {};
(function ($) {
    'use strict';
    var router = Backbone.Router.extend({
        routes: {
            '':'show',
            'person/:id':'show',
            'person/:id/edit':'edit'
        },
        show:function(id){

            if(id!=undefined){
                app.appView.show(id);
            }else if(app.personCollection.first()!=undefined) {
                console.log();
                app.appView.show(app.personCollection.first().cid)
            }else{

                app.appView.show('')

            }
        },
        edit:function(id){
             app.appView.edit(id);
        }
    });

    app.router = new router();
    Backbone.history.start();//启动
})(jQuery)