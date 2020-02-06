var ReviewsCollection = Backbone.Collection.extend({
  url: '',
  model: ReviewModel,

  addReview:function(name, text){
    this.create({
      name: name,
      text: text,
    },{
      wait: true
    });

  },
  updateBeerId: function (id) {
     this.url = `https://beer-review-api.herokuapp.com/beers/${id}/reviews`
      //update the url with the id I passed in
    }
});
