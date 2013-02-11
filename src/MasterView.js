var MasterView = Backbone.View.extend({

  template: function(){
    return _.template(this.templateString)(this.model.attributes);

  }  


});