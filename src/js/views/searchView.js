var app=app||{};
(function($){
    'use strict';
    var searchView=Backbone.View.extend({
        el:$('.m-hd'),
        events:{
            'keyup input':'search'
        },
        initialize:function(){
            this.on('abc')
        },
        search:function(){
            var key=this.$('input').val();
            app.personCollection.each(function(model){
                model.view.toggleItem(model.search(key));
            },this);
            this.trigger('abc');
        }
    })
    app.searchView=searchView;
})(jQuery);