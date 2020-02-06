BeerView = Backbone.View.extend({
  //... is a list tag.
  className: 'beer',

  // Cache the template function for a single item.
  template: Handlebars.compile($('#beer-template').html()),

  events:{
    'click .edit': 'editBeer',
    'click .remove': 'removeBeer',
    'keypress .beer-name': 'createOnEnterEdit',
  },

  initialize:function(){

  },

  removeBeer:function(){
    this.remove()
  },

  editBeer:function(){
    this.$('.beer-name').toggleClass('edit-mode')
  },

  createOnEnterEdit: function (e) {
    if (e.which === 13 && this.$('input').val()) {
      this.model.set('name', this.$('input').val());
      this.$('input').val('');
      this.render()
    }},

  render: function () {
  	this.$el.html(this.template(this.model.toJSON()))
  	return this;
  }
});
