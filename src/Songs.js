var Song = Backbone.Model.extend({
  enqueue: function(){
    this.set("queuedAt", new Date());
  },
  dequeue: function(){
    this.unset("queuedAt");
  }
});

var Songs = Backbone.Collection.extend({
  model: Song,
  // return queued songs
  queued: function(){
    // chain, filter, sortBy, and value are from underscore
    return this.chain().filter(function(song){
      return !!song.attributes.queuedAt;
    }).sortBy(function(song){
      return song.attributes.queuedAt;
    }).value();
  }
});
