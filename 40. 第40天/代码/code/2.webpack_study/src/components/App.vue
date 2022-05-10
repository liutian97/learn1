<!-- Vue 单文件组件 -->

<!-- 定义 Vue 组件的模板区域  -->
<template>
  <div>
    <h1>这是 App 根组件</h1>
  </div>
</template>

<!-- 定义 Vue 组件业务逻辑区域 -->
<script>
export default {
  data() {
    return {}
  },  // 私有数据
  methods: {} // 处理函数
}
</script>


<!-- 定义 Vue 组件样式区域 (scoped 防止组件之间样式的冲突)-->
<style scoped>
h1 {
  color: #bcf
}
</style>
