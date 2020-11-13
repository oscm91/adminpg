import HausSelect from './index';

export default {
  title: 'Example/Select',
  component: HausSelect,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HausSelect },
  template: '<haus-select v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select',
  placeholder: 'Selecciona torre',
  value: '4',
  items: [
    { value:'1', label:'Opción 1' },
    { value:'2', label:'Opción 2' },
    { value:'3', label:'Opción 3' },
    { value:'4', label:'Opción 4' }
  ],
  classes: {
    'haus-select': true,
    'haus-select--primary': true,
    'haus-select--medium': true,
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Select',
};

export const Large = Template.bind({});
Large.args = {
  classes: {
    'haus-select': true,
    'haus-select--primary': true,
    'haus-select--large': true,
  },
  label: 'Select',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Select',
};
