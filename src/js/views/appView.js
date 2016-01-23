var app=app||{};
(function(){
    'use strict';
    var appView=Backbone.View.extend({
        el:$('.g-warp'),
        initialize:function(){

            this.personList=new app.personListView;
            this.searchView=new app.searchView;
            this.groupView2=new app.groupView2;

            this.listenTo(this.searchView,'abc',this.search)
        },

        //render:function(){
        //    //$('.m-ft').append(this.groupView2.render().el);
        //},
        show:function(Itemid){
            this.groupView2.show(Itemid);
            this.personList.selectItem(Itemid);
        },
        edit:function(Itemid){
            this.groupView2.edit(Itemid);
            this.personList.selectItem(Itemid);
        },
        search:function(){
            this.groupView2.showView.$el.addClass('f-dn')
            this.groupView2.editView.$el.addClass('f-dn')

        }

    });

    app.appView=new appView();

})();