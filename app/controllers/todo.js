import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    removeTodo: function() {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  }
});
