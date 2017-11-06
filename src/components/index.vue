<template>
<div class="wrapper">
  这是{{page}}页面
</div>
</template>
<style media="screen">
.wrapper {
  background: #666;
  color: white;
}
</style>
<script>
export default {
  data: function() {
    return {
      page: 'index'
    }
  }
}
</script>
