import Ember from 'ember';
import layout from '../templates/components/ui-tab';

const { computed, debug } = Ember;

const tab = Ember.Component.extend({
  layout,
  tagName: '',

  _title: computed('title', function() {
    const { title } = this.getProperties('title');

    return title.split(':')[0];
  }),

  value: computed('title', function() {
    const { title } = this.getProperties('title');
    const value = title.split(':')[1] || title.split(':')[0];
    return String(value).toLowerCase().replace(/[ .,]/, '-');
  }),

  actions: {
    onClick() {
      const { onClick, value } = this.getProperties('onClick', 'value');
      if(onClick) {
        onClick(value);
      } else {
        debug(`ui-tab of value "${value}" did have an onClick handler available`);
      }
    }
  }


});

tab.reopenClass({
  positionalParams: ['title']
});

tab[Ember.NAME_KEY] = 'tab';

export default tab;
