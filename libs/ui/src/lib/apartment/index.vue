<template functional>
  <div class="haus-apartment haus-apartment--primary">
    <span class="haus-apartment-label">DISPONIBLE</span>
    <h3 class="haus-apartment-number">1601</h3>
    <p class="haus-apartment-size">200 m<sup>2</sup></p>
    <span class="haus-apartment-type">TIPO A</span>
  </div>
</template>

<script>
import './index.css';

export default {
  name: 'haus-apartment',
  props: {
    content: {
      type: String,
    },
    classes: {
      type: Object,
      default: () => {
        return {
          'haus-apartment': true,
          'haus-apartment--primary': true,
          'haus-apartment--medium': true,
        }
      }
    }
  },
};
</script>
