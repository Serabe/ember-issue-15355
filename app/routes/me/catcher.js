import Ember from 'ember';
import RSVP from 'rsvp';

const { Promise } = RSVP;

export default Ember.Route.extend({
  model({ anything }) {
    return new Promise(function() { });
    //return anything;
  }
});
