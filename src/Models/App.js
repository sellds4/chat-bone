var App = Backbone.Model.extend({

  initialize: function() {
    this.set('allMessages', new AllMessages());
    var that = this;
    setInterval(function() { that.getMessage(); }, 2000);
    $.ajaxPrefilter(function (settings, _, jqXHR) {
      jqXHR.setRequestHeader("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r");
      jqXHR.setRequestHeader("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf");
    });
  },

  postMessage: function(message, user) {
    this.get('allMessages').add(new Message({
      message: message,
      user: user
    }));
  },

  getMessage: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/messages',
      type: 'get',
      // data: 'data'
    }).done(function(data) { console.log(data.results[0].text, data.results[0].text.slice(0,data.results[0].text.indexOf(':')), data.results[0].text.slice(data.results[0].text.indexOf(':') + 2), data.results[0].createdAt);});
  }

});