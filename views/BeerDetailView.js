var BeerDetailView = Backbone.View.extend({
  className: 'reviews-container-inner',

  template: Handlebars.compile($('#beer-detail-template').html()),

  events: {
    'click .submit-review': 'createReview',

  },

  initialize:function(){

  //  console.log('this is the model', this.model.reviews.get('model'))
  this.listenTo(this.model.get('reviews'), 'add', this.renderReview);
  },



  createReview:function(){
    console.log('buttone was clicked')
    this.model.get('reviews').addReview(
      this.$('#review-name-input').val(),
      this.$('#review-notes-input').val(),
    );
  },

  renderReviews: function() {
    this.model.get('reviews').each(function(m) {
      this.renderReview(m);
    }, this);
  },
  renderReview: function(review) {
    var reviewView = new ReviewView({
      model: review
    });

    this.$('.reviews-list').append(reviewView.render().el);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    this.renderReviews();

    return this;
  }
});
