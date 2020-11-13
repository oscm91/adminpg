import HausLayout from './index';
import logoIcon from '../logo.svg';
import HausBuilding from '../building-info/index';
import HausFloor from '../floor/index';
import HausApartment from '../apartment/index';
import HausSelect from '../select/index';
import HausButton from '../button/index';
import HausLabel from '../label/index';

export default {
  title: 'Example/Layout',
  component: HausLayout,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HausLayout, HausBuilding, HausFloor, HausApartment, HausSelect, HausButton, HausLabel },
  template: `
    <haus-layout v-bind="$props">
      <template v-slot:nav></template>
      <template v-slot:header>
        <i class="haus-icon-back"></i>
        <haus-building v-bind="$props"/>
      </template>
      <template v-slot:search>
        <haus-select placeholder="Selecciona torre" v-bind:items="[{label:'Torre 1', value:'1'}, {label:'Torre 2', value:'2'}, {label:'Torre 3', value:'3'}, {label:'Torre 4', value:'4'}]"></haus-select>
        <haus-label title="Fase" content="Preventa"/>
        <haus-label title="Etapa" content="1"/>
        <haus-label title="Aptos" content="45"/>
      </template>
      <template v-slot:filter>
        <haus-button>Estado</haus-button>
        <haus-button>Precio</haus-button>
        <haus-button>Metros</haus-button>
        <haus-button>Habitaciones</haus-button>
        <haus-button>Piso</haus-button>
        <haus-button>Vista</haus-button>
        <haus-button>Tipo de apto</haus-button>
      </template>
      <div v-for="item in [1,2,3,4,5,6,7,8,9,0]">
        <haus-floor v-bind="$props">
          <div v-for="item in [1,2,3,4,5,6,7,8,9,0]">
            <haus-apartment></haus-apartment>
          </div>
        </haus-floor>
      </div>
    </haus-layout>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  logo: logoIcon,
  title: 'Label',
  content: '4',
  classes: {
    'haus-layout': true,
    'haus-layout--primary': true,
    'haus-layout--medium': true,
  }
};
