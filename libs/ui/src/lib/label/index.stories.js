import HausLabel from './index';

export default {
  title: 'Example/Label',
  component: HausLabel,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HausLabel },
  template: '<haus-label v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Label',
  content: '4',
  classes: {
    'haus-label': true,
    'haus-label--primary': true,
    'haus-label--medium': true,
  }
};
