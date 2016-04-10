import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Marc Altmann', 'Bill Gates', 'Linus Torvalds', 'Another guy'];
  }
});
