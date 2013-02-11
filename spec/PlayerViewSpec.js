describe("PlayerView", function() {
  var view, collection, tempView;

  beforeEach(function() {
    

    collectionOf2 = new Songs();
    collectionOf2.reset([
      {fake: "data", url: "is apparently necessary", artist:"john", title:"Go!"},
      {fake: "data", url: "is apparently necessary", artist:"john2", title:"Go!2"}
    ]);

    //view = new PlayerView({collection: collection});
    //listView = new PlaylistView( {collection :collectionOf2} );
    view = new PlayerView({collection: collectionOf2});
  });

  it("should change when the first song is queued", function(){
    expect(view.model).toBeUndefined();
    var song = collectionOf2.models[0];
    song.enqueue();
    expect(view.model).toEqual(song);
  });

  describe("what happens when the song ends", function(){
    it("should remove the old song from the playlist", function(){
       var song = collectionOf2.models[0];
       //when song is finished it is removed from the queue, simulate here.
       song.dequeue();
       expect(view.model).toBeUndefined();
    });
    it("should get the next song in the playlist", function(){
      var song1 = collectionOf2.models[0];
      song1.enqueue();
      var song2 = collectionOf2.models[1];
      song2.enqueue();
      //song1.unset("queuedAt");
      view.songOver();
      expect(view.model.get("artist")).toEqual(song2.get("artist"));
    });
  });
});