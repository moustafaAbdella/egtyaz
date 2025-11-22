<template functional>
  <div class="menu-item">

<i v-if="props.icon"  :class="[`el-icon-${props.icon}`]" style="margin-right: 8px;"></i>
    <span>{{ props.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: String,
    title: String,
  },
};
</script>
