var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      beers: new BeersCollection(),

      current_beer: null,

      url:'',

      // either true or false
      show_reviews: false
    };
  },

  showReviews: function (id) {
    // make sure our id is a number

    var allBeers = this.get('beers');

    var currentBeer = allBeers.findWhere({ id: id });
    this.set('current_beer', currentBeer);
    this.set('show_reviews', true);
    this.get('current_beer', currentBeer).get('reviews').updateBeerId(id);
  },

  showBeers: function() {
    this.set('show_reviews', false)
  }
});
