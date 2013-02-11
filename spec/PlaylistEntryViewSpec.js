describe("PlaylistEntryView", function() {
  var view, collection, song;

  beforeEach(function() {
    collection = new Songs();
    collection.reset([
      {fake: "data", url: "is apparently necessary", title: "Awesome", artist: "Go"}
    ]);

    // spyOn(PlaylistEntryView.prototype, 'render').andCallThrough();

    view = new PlaylistEntryView({model: collection.models[0]});
    view.render();

  });

  it("Should Display A Song", function(){
    expect(view.$el.find('.playlistEntryView') ).toBeTruthy();
  });

  it("Should Remove itself if clicked on", function(){
    var node = view.$el.find('.playlistEntryView');
    node.click();
    expect(view.model.queuedAt).toEqual(undefined);

  });

  // describe("when song.queuedAt is changed", function(){
  // });
});