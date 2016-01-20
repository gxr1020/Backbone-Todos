var app=app||{};
(function(){
	'use strict';
	var Todos=Backbone.Collection.extend({
		model : app.todo,

		// localStorage:new Backbone.localStorage('gxrToDoList'),
		localStorage : new Backbone.LocalStorage('todos-List'),
		

		completed:function(){
			return this.where({completed:true});
		},
		active:function(){
			return this.where({completed:false});
		},
		//如果集合中存在 一个以上的 模型 则 返回 最后一个模型的order属性，如果没有模型则返回1
		//order用于标记模型序号
		nextOrder:function(){
			return this.length?this.last().get('order')+1:1;
		},
		//????
		comparator:'order'
	});

	app.todos=new Todos();
	app.todos.fetch({success:function(data){
		console.log('从服务器拉数据');
		console.log('data:',data);
		//返回的集合对象
	}})



})();