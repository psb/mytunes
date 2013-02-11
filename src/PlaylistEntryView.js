var PlaylistEntryView = MasterView.extend({
  
  tagName: "div",

  templateString: "<p class='playListEntry'><%= title %> <span class='close'>x</span></p> ",

  events: {
  	"click .playListEntry" : "removeSong"
  },

  render: function(){

  	return this.$el.html(this.template());
  },

  removeSong: function(){
    this.model.dequeue();
  }


});

