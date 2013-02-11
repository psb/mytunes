var PlaylistView = Backbone.View.extend({
  
  queuedSongs: [],
  
  tagName: "div",

  attributes: {
    id: "playListView",
  },
  events: {
    
  },
  initialize: function(){
    this.collection.on("change:queuedAt", this.render, this);
  },
  render: function(){
  	this.loadmodels();
 	  this.$el.html("");
  	if(this.queuedSongs.length === 0){
      this.$el.html("Click On A Song");
  	} else {
	  var that = this;
	  _.each(this.subviews, function(subview){
	    that.$el.append(subview.render());
	  });
    }
  	return this.$el;
  },
  loadmodels: function(){
    this.queuedSongs = this.collection.queued();
    this.subviews = this.queuedSongs.map( function(song){
      return new PlaylistEntryView({model: song})
    });
  }


});

