<template functional>
  <div class="haus-layout haus-layout--primary">
    <nav class="haus-layout-nav">
      <slot name="nav"></slot>
    </nav>
    <main class="haus-layout-main">
      <header class="haus-layout-header">
        <slot name="header"></slot>
      </header>
      <div class="haus-layout-container">
        <div class="haus-layout-search">
          <slot name="search"></slot>
        </div>
        <div class="haus-layout-filter">
          <slot name="filter"></slot>
        </div>
        <div class="haus-layout-content">
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import './index.css';

export default {
  name: 'haus-layout',
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
          'haus-layout': true,
          'haus-layout--primary': true,
          'haus-layout--medium': true,
        }
      }
    }
  },
};
</script>
