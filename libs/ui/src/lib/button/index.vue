<template functional>
  <button type="button" class="haus-button haus-button--primary">
    <slot />
  </button>
</template>

<script>
import './index.css';

export default {
  name: 'haus-button',

  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: Object
    },
  },
};
</script>
