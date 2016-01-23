var app=app||{};
(function($){
    'use strict';
    var editView=Backbone.View.extend({
        className:'editView',
        template:_.template($('#tpl-edit').html()),
        events:{
            'click .deleItem':'deleItem',
            'click .saveItem':'saveItem'
        },
        render:function(){
            if(this.item){
                this.$el.html(this.template(this.item.toJSON()))
            }

            return this;
        },
        editChange:function(id){
            var selectItem=app.personCollection.get(id);

            if(selectItem){
                this.item=selectItem;
            }else{
                this.item=new app.personModel();
                app.personCollection.add(this.item)
            }
            console.log('====',this.item);

        },
        deleItem:function(){
            //app.personCollection
            //app.personCollection.remove(this.item);
            this.item.destroy();
            this.item=null;
            app.router.navigate('',{
                trigger:true
            })
        },
        saveItem:function(){
            //var newItem=new app.personModel(this.getData());
            //app.personCollection.save(this.getData())
            if(this.item){
                this.item.set(this.getData())
                this.item.save()
            }
            app.router.navigate('person/'+this.item.cid,{
                trigger:true
            });
            this.item.view.render()

        },
        getData:function(){
            return {
                name:this.$('#name').val(),
                sex:this.$('#sex').val(),
                email:this.$('#email').val()
            }
        }

    });

    app.editView=editView;

})(jQuery);