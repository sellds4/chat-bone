var MessageView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function(){
      this.render();
    }, this);
  },

  render: function(){
    this.$el.children().detach();
    return this.$el.html('Messages').append(
      this.collection.map(function(message){
        return new MessageEntryView({model: message}).render();
      })
    );
  }

});