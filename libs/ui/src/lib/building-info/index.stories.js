import HausBuilding from './index';
import logoIcon from '../logo.svg';

export default {
  title: 'Example/Building',
  component: HausBuilding,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HausBuilding },
  template: '<haus-building v-bind="$props"></haus-building>',
});

export const Primary = Template.bind({});
Primary.args = {
  logo: logoIcon,
  title: 'Label',
  content: '4',
  classes: {
    'haus-building': true,
    'haus-building--primary': true,
    'haus-building--medium': true,
  }
};
