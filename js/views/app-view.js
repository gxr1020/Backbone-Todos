var app = app || {};

(function ($) {

    var appViwe = Backbone.View.extend({
        el: $('#mainWarp'),
        footerTemplate: _.template($('#stats-template').html()),
        events: {
            'keypress .new-todo': 'createOne',//Enter确定
            'click .toggle-all': 'toggleAll',
            'click .clear-completed':'clearCompleted'
        },
        initialize: function () {


            this.$list = this.$el.find('#main');
            this.render();

            this.listenTo(app.todos, 'change:completed', this.filterOne);
            this.listenTo(app.todos, 'destroy', this.footerIsHide);

            this.listenTo(app.todos,'filter',this.filterAll)


        },
        render: function () {
            this.addAll();
            this.checkedAll = this.$el.find('.toggle-all')[0];
            this.footer = this.$('#footer');
            this.renderFooter();
            var completed = app.todos.completed().length;
            var sumLen = app.todos.length;
            this.footerIsHide(sumLen)
            if (completed == sumLen && sumLen != 0) {
                this.checkedAll.checked = true;
            }

        },

        renderFooter: function () {
            var completed = app.todos.completed().length;
            var active = app.todos.active().length;
            this.footer.html(this.footerTemplate({
                completed: completed,
                active: active
            }));
        },
        footerIsHide: function () {
            var sumLen = app.todos.length;

            if (!sumLen) {
                this.footer.hide();
            } else {
                this.footer.show();
            }
        },
        addOne: function (todo) {

            var todoView = new app.todoView({model: todo});

            this.$list.append(todoView.render().el);
        },
        addAll: function () {

            app.todos.forEach(this.addOne, this);
        },
        createOne: function (e) {
            if (e.which == 13) {
                var titlStr = $.trim($(e.target).val())
                if (titlStr != '') {
                    var newTodo = new app.todo({'title': titlStr});
                    this.addOne(newTodo);
                    app.todos.create(newTodo);
                    $(e.target).val('');

                    this.footerIsHide();
                    this.renderFooter();
                }
            }
        },
        toggleAll: function () {

            var completed = app.todos.completed();
            var active = app.todos.active();

            if (this.checkedAll.checked) {
                active.forEach(this.toggleOne)
            } else {
                completed.forEach(this.toggleOne);
            }

            // console.log(e.traget.checked);
        },
        toggleOne: function (todo) {
            todo.trigger('visible');
        },
        filterOne: function () {

            var completed = app.todos.completed().length;
            var sumLen = app.todos.length;
            if (completed == sumLen) {
                this.checkedAll.checked = true;
            } else {
                this.checkedAll.checked = false;
            }
            this.renderFooter();
        },
        filterAll:function(){
            app.todos.each(this.filterONE2,this)
        },
        filterONE2:function(todo){
            todo.trigger('visible2')
        },
        clearCompleted:function(){
            //app.todos.completed()//选中的列表
            //invoke  方法然后某个列表的各个元素都执行某个方法
            _.invoke(app.todos.completed(),'destroy')
            return false;
        }

    });


    app.appViwe = new appViwe();

})(jQuery);	