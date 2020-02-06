ReviewView = Backbone.View.extend({
  //... is a list tag.
  className: 'review',

  events:{
    'click .remove': 'removeReview',
  },

  removeReview:function(){
    this.remove()
  },

  // Cache the template function for a single item.
  template: Handlebars.compile($('#review-template').html()),

  render: function () {

  	this.$el.html(this.template(this.model.toJSON()))
  	return this;
  }
});
