var app=app||{};
(function($){
	app.todoView=Backbone.View.extend({
		tagName:"li",
		// el:''
		template:_.template($('#item-template').html()),
		events:{
			'click .toggle':'toggleCompleted',//单击切换选择
			'click .destroy':'clear',
			'dblclick label':'editing',
			'blur .edit':'accomplish',
			'keydown .edit':'cancel', //Esc取消
			'keypress .edit':'update',//Enter确定
		},

		initialize:function(){


			// this.render();
			this.listenTo(this.model,'change',this.render); //只要数据模型有改变就触发 render渲染事件
			this.listenTo(this.model,'destroy',this.gxr);
			// this.listenTo(this.model,'destroy',this.render)
			this.listenTo(this.model,'visible',this.toggleCompleted)
			
			
		},
		render:function(){
			this.$el.html(this.template(this.model.toJSON()))
			this.$el.toggleClass('completed',this.model.get('completed'));
			
			this.$input=this.$el.find('.edit');

			return this;
		},
		toggleCompleted:function(){			
			this.model.toggle();
		},
		clear:function(){
			this.model.destroy();//会发送请求
		},
		gxr:function(){			
			this.$el.remove()
		},
		editing:function(){

			this.$el.addClass('editing');
			console.log(this.$input)
			this.$input.focus();
		},
		accomplish:function(){
			console.log(this.model.toJSON());
			var val=$.trim(this.$input.val());
			if(!this.$el.hasClass('editing')){
				return ;
			}
			if(val!=''){
				this.model.set('title',val);
				this.model.save();
			}
			this.$input.val(this.model.get('title'));
			this.$el.removeClass('editing');
		},
		cancel:function(e){
			if(e.which==27){
				this.$input.val(this.model.get('title'));
				this.$el.removeClass('editing');
			}
		},
		update:function(e){
			if(e.which==13){
				this.accomplish();
			}

		}

	})

	// app.todos.add(new app.todo({title:'测试'}));

	// var todoView=new app.todoView({model:app.todos.models[0]});


 
})(jQuery);