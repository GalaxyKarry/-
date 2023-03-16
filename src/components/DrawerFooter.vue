<template>
  <div class="demo-drawer__footer">
    <el-button @click="cancelForm">取 消</el-button>
    <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? "提交中 ..." : "确 定"
    }}</el-button>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "DrawerFooter",
}
</script>

<style scoped>

</style>