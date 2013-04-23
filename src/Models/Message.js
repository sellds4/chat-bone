var Message = Backbone.Model.extend({

  initialize: function(params) {
    this.set({created: new Date()});
  }

});