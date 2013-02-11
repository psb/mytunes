var LibraryEntryView = MasterView.extend({

  tagName: "tr",

  events: {
    "click .title": "addToQueue",
    "click .artist": "addToQueue",
    "click .star": "starTheTrack"
  },

  // templates are a nicer way to put js data into html strings
  templateString: "<td class='star'></star> <td class='title'><%= title %></td><td class='artist'><%= artist %></td> ",

  render: function(){
    this.$el.html(this.template());
    if(this.model.get('starred'))
    {
      this.$el.find('.star').addClass('starred')
    }
    return this.$el;
  },

  // event listener
  addToQueue: function(){
    this.model.enqueue();
  },

  starTheTrack: function(){
    
    if(this.model.get('starred'))
    {
      this.model.unset('starred');
    } else{
      this.model.set('starred', true);
    }
    this.render();
  }

});

