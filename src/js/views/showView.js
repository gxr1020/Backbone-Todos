var app=app||{};
(function($){
    'use strict';
    var showView=Backbone.View.extend({
        className:'showView',
        template:_.template($('#tpl-details').html()),
        events:{
            'click .editItem':'editItem'
        },
        render:function(){
            //console.log(this.showChange())
            //console.log()
            //console.log(this.item)
            if(this.item){
                this.$el.html(this.template(this.item.toJSON()));
                console.log('showRender')
            }else{
                //this.$el.html(this.template((new app.personModel()).toJSON()))
                this.$el.addClass('f-dn');
            }
            return this;
        },
        showChange:function(itemId){
            console.log('itemId',itemId)
            this.item=app.personCollection.get(itemId);
            //if(this.item==undefined){
            //    this.item=new app.personModel()
            //}
            //this.render();
        },
        editItem:function(){
            if(this.item){
                        app.router.navigate('person/'+this.item.cid+'/edit',{
                    trigger:true
                });
            }
        }


    });

    app.showView=showView;

})(jQuery);