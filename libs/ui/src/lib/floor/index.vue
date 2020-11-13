<template functional>
  <div class="haus-floor haus-floor--primary">
    <h3 class="haus-floor-number">Piso <br> <b>16</b></h3>
    <slot />
  </div>
</template>

<script>
import './index.css';

export default {
  name: 'haus-floor',
  props: {
    content: {
      type: String,
    },
    classes: {
      type: Object,
      default: () => {
        return {
          'haus-floor': true,
          'haus-floor--primary': true,
          'haus-floor--medium': true,
        }
      }
    }
  },
};
</script>
