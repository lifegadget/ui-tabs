import Ember from 'ember';
import layout from '../templates/components/ui-tabs';

const { typeOf, debug, computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',
  skin: 'default',
  direction: 'horizontal',
  fill: true,

  didInsertElement() {
    this._super(...arguments);
    const { selected, defaultValue, onChange } = this.getProperties('selected', 'defaultValue', 'onChange');
    if (!selected && defaultValue) {
      if (onChange) {
        onChange(defaultValue);
      } else {
        debug(`ui-tabs: can not set defaultValue because container is not listening to onChange`);
      }
    }
  },  

  _tabs: computed('tabs', function() {
    const {tabs} = this.getProperties('tabs');
    return typeOf(tabs) === 'string' ? tabs.split(',') : tabs.slice(0);
  }),

  actions: {
    onClick(value) {
      const { selected, onChange } = this.getProperties('selected', 'onChange');
      if (value !== selected) {
        if (onChange) {
          onChange(value);
        } else {
          debug(`ui-tabs: a tab click was received but the container is not listening to "onChange" event handler`);
        }
      } else {
        debug(`ui-tabs: click event made no change ( ${selected} => ${value} )`);
      }
    }
  }
});

