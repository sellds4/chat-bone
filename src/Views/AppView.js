var AppView = Backbone.View.extend({

  template: _.template('\
    <form class="messenger">\
    User<input type="text" name="user"><br>\
    Whaaa...?<input type="textarea" name="message"><br>\
    <input type="submit" value="Say It!"></form>\
    '), 

  events: {
    'submit form'  : 'createMessage'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el.html([
      this.template(),
      new MessageView({collection: this.model.get('allMessages')}).render()
      ]);
  },

  createMessage: function(e) {
    e.preventDefault();
    var message = this.$el.find('[name="message"]').val();
    var user = this.$el.find('[name="user"]').val();
    this.model.postMessage(message, user);
    this.$el.find('input[name="message"]').val('');
    this.$el.find('input[name="user"]').val('');
  }
});