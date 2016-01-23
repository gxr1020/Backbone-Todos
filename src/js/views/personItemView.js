var app=app||{};
(function($){
    'use strict';
    var personItemView=Backbone.View.extend({
        tagName:'li',
        events:{
            'click':'select'
        },
        tempalte: _.template($('#tpl-item').html()),
        initialize:function (){
            this.model.view=this;
        },
        render:function(){
            this.$el.html(this.tempalte(this.model.toJSON()));
            return this;
        },
        toggleItem:function(pd){
            this.$el.toggle(pd);
        },
        select:function(){
            app.router.navigate('person/'+this.model.cid,{
                trigger:true
            })
        },
        sele:function(){
            this.$el.addClass('selectLi');
        },
        dsele:function(){
            this.$el.removeClass('selectLi');
        }

    })
    app.personItemView=personItemView;
})(jQuery);
