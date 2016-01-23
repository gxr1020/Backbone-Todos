var app=app||{};
(function(){
    'use strict';
    var groupView2=Backbone.View.extend({
        el:$('.m-ft'),
        initialize:function(){
            this.showView=new app.showView();
            this.editView=new app.editView();
           //this.render();
        },
        render:function(){

            this.$el.append(this.showView.render().el);
            this.$el.append(this.editView.render().el);
            //return this;
        },
        show:function(Itemid){
            this.showView.$el.removeClass('f-dn');
            this.editView.$el.addClass('f-dn');
            this.showView.showChange(Itemid);
            this.render();
        },
        edit:function(Itemid){
            this.showView.$el.addClass('f-dn');
            this.editView.$el.removeClass('f-dn');

            this.editView.editChange(Itemid);
            this.render();
        }
    });
    app.groupView2=groupView2;
})();