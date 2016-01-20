var app=app||{};
(function(){
	'use strict';
	app.todo=Backbone.Model.extend({
		//调试
		localStorage : new Backbone.LocalStorage('todos-List'),

		defaults:{
			title:'',
			completed:false
		},
		toggle:function(){
			this.save({
				completed:!this.get('completed')
			});
		}
	});
})();