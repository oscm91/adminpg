<template functional>
  <select
    v-bind:value="props.value"
    :class="props.classes"
    @input="listeners.input && listeners.input($event.target.selectedOptions[0].value)">
    <option disabled value>{{props.placeholder || '-'}}</option>
    <option v-for="item in props.items" :key="item.value" :value="item.value">{{item.label}}</option>
  </select>
</template>

<script>
import './index.css';

export default {
  name: 'haus-select',
  props: {
    label: {
      type: String,
      required: true,
    },
    classes: {
      type: Object,
      default: () => {
        return {
          'haus-select': true,
          'haus-select--primary': true,
          'haus-select--medium': true,
        }
      }
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
    items: {
      type: Array,
    },
  },
};
</script>
