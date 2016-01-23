var app=app||{};
(function($){
    'use strict';
    var personListView=Backbone.View.extend({
        el:$('.m-mn'),
        events:{
            'click .newItem':'newModel'
        },
        initialize:function(){
            app.personCollection.fetch();

            this.renderAll();

            this.listenTo(app.personCollection,'remove',this.renderAll);
        },
        renderOne:function(model){
            var temp=new app.personItemView({model:model});
            console.log(temp);
            this.$('.m-list').append(temp.render().el);
        },
        renderAll:function(){
            console.log('renderAll');
            this.$('.m-list').html('');
            app.personCollection.each(this.renderOne,this);

        },
        newModel:function(){
            var temp=new app.personModel();
            this.renderOne(temp);
            app.personCollection.add(temp);
            app.router.navigate('person/'+temp.cid+'/edit',{
                trigger:true
            });
        },
        selectItem:function(selectid){
            if(this.seleItem) this.seleItem.view.dsele();
            this.seleItem=app.personCollection.get(selectid);
            if(this.seleItem) this.seleItem.view.sele();
        }
    });

    app.personListView=personListView;

})(jQuery);
