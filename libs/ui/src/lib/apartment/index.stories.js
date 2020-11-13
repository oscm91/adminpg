import HausApartment from './index';

export default {
  title: 'Example/Apartment',
  component: HausApartment,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HausApartment },
  template: '<haus-apartment v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Label',
  content: '4',
  classes: {
    'haus-apartment': true,
    'haus-apartment--primary': true,
    'haus-apartment--medium': true,
  }
};
