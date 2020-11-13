<template functional>
  <div class="haus-building haus-building--primary">
    <span class="haus-building-logo">
      <img v-if="props.logo" :src="props.logo" alt="">
      <slot v-if="!props.logo"></slot>
    </span>
    <span class="haus-building-info">
      <h2 class="haus-building-name">Terrazino cumbres · Envigado</h2>
      <address class="haus-building-address">Carrera 43A No. 498B Sur - 82</address>
    </span>
  </div>
</template>

<script>
import './index.css';

export default {
  name: 'haus-building',
  props: {
    logo: {
      type: String,
    },
    content: {
      type: String,
    },
    classes: {
      type: Object,
      default: () => {
        return {
          'haus-building': true,
          'haus-building--primary': true,
          'haus-building--medium': true,
        }
      }
    }
  },
};
</script>
