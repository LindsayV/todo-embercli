import Ember from 'ember';

export default Ember.ArrayController.extend({
 hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  notCompleted: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),
    actions: {
      clearCompleted: function() {
        var completed = this.get('model').filterBy('isCompleted', true);
        completed.invoke('deleteRecord');
        completed.invoke('save');
      },
      createTodo: function() {
        // Get the todo title set by the "New Todo" text field
        var title = this.get('newTitle');
        if (!title || !title.trim()) { return false; }

        // Create the new Todo model
        var todo = this.store.createRecord('todo', {
          title: title,
          isCompleted: false
        });

        // Clear the "New Todo" text field
        this.set('newTitle', '');

        // Save the new model
        todo.save();
      }
    }
});
