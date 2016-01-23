var app = app || {};
(function () {
    'use strict';
    var person = Backbone.Model.extend({
        defaults: {
            name: "",
            sex: "",
            email: ""
        },
        search: function (key) {
            console.log(this.get(name));
            var nameIndex = this.get('name').indexOf(key),
                sexIndex = this.get('sex').indexOf(key),
                emailIndex = this.get('email').indexOf(key);
            return nameIndex!=-1||sexIndex!=-1||emailIndex!=-1;
        }
    });
    app.personModel=person;
})()