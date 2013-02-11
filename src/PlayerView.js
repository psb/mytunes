var PlayerView = MasterView.extend({
  
  initialize: function(){
    // set up an event listener on the songs collection
    this.collection.on("change:queuedAt", this.handleQueueChange.bind(this));
     
  },

  id: "player",

  events: {
    "click #close" : "songOver"
  },

  // templates are a nicer way to put js data into html strings>
  templateString: "<audio src='<%= url %>' controls ></audio>",

  render: function(){
    this.$el.html("");
    if(this.model){
      this.$el.html(this.template());
      this.$el.find("audio").on("ended", this.songOver.bind(this));
      console.log("RenderPlayer Works!")
    }

    return this.$el;
  },

  // event listener
  handleQueueChange: function(){
    if(!this.collection.queued()[0])
    {
      delete this.model;
    }
    if(!this.model){
      this.model = this.collection.queued()[0];
      this.render();
    }



  },
  songOver: function (){
    this.model.dequeue();
    delete this.model;
    this.handleQueueChange();
  }

});

