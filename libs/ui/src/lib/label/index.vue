<template functional>
  <span :class="props.classes">
    <h4 class="haus-label-title">{{props.title}} </h4> · <p class="haus-label-content"> {{props.content}}</p>
  </span>
</template>

<script>
import './index.css';

export default {
  name: 'haus-label',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    classes: {
      type: Object,
      default: () => {
        return {
          'haus-label': true,
          'haus-label--primary': true,
          'haus-label--medium': true,
        }
      }
    }
  },
};
</script>
