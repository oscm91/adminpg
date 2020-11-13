import HausFloor from './index';
import HausApartment from '../apartment/index';

export default {
  title: 'Example/Floor',
  component: HausFloor,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HausFloor, HausApartment },
  template: '<haus-floor v-bind="$props"><div v-for="item in [1,2,3,4,5,6,7,8,9,0]"><haus-apartment></haus-apartment></div></haus-floor>',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Label',
  content: '4',
  classes: {
    'haus-floor': true,
    'haus-floor--primary': true,
    'haus-floor--medium': true,
  }
};
