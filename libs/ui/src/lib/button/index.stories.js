import HausButton from './index';

export default {
  title: 'Example/Button',
  component: HausButton,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HausButton },
  template: '<haus-button v-bind="$props">Button</haus-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  classes: {
    'haus-button': true,
    'haus-button--primary': true,
    'haus-button--medium': true,
  }
};
