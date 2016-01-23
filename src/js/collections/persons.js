var app=app||{};
(function(){
    'use strict';
    var persons=Backbone.Collection.extend({
        model:app.personModel,
        localStorage:new Backbone.LocalStorage('person-data')
    });
    //app.personCollection=persons;
    var data=[{
        name:'gxr1',
        sex:'男',
        email:'160542259@qq.com'
    },{
        name:'gxr2',
        sex:'女',
        email:'161542259@qq.com'
    },{
        name:'gxr3',
        sex:'男',
        email:'162542259@qq.com'
    }];
    //app.personCollection=new persons(data);
    app.personCollection=new persons();

})();