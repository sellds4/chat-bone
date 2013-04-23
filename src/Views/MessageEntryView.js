var MessageEntryView = Backbone.View.extend({

  template: _.template('\
    <container>\
    <div class="postedmessage"><%= message %></div>\
    <div class="posteduser"><%= user %></div>\
    <div class="postedtime"><%= created %></div>\
    </container>\
    '),

  initialize: function() {
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});