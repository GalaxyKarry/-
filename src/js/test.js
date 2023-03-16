<template>
  <BigFrame>
    <div id="">
      <h2>Element-UI 测试</h2>
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
      </el-row>

      <el-row class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>

      <el-row class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>

    </div>
<div id="app">
 <h2>Element-UI 测试</h2>
 <br>
  <!-- 在组件中使用 -->
  <el-row>
    <el-button circle icon = "Search"></el-button>
    <el-button type="primary" circle icon = "Edit"></el-button>
    <el-button type="success" circle icon = "Check"></el-button>
    <el-button type="info" circle icon = "Message"></el-button>
    <el-button type="warning" circle icon = "Star"></el-button>
    <el-button type="danger" circle icon = "Delete"></el-button>
  </el-row>

  <el-button type="danger" circle icon = "Delete"></el-button>
  <br>
  <!-- 结合 el-icon 使用 -->
  <el-row>
    <el-icon><Search/></el-icon>
    <el-icon><Edit/></el-icon>
    <el-icon><Check/></el-icon>
    <el-icon><Message/></el-icon>
    <el-icon><Star/></el-icon>
    <el-icon><Delete/></el-icon>
  </el-row>
</div>
  </BigFrame>
  <router-view />
</template>

<script>
import BigFrame from "../components/BigFrame";

export default {
  name: "ModifyHomeView",
  components: {
    BigFrame,
  },
};
</script>

<style scoped>
</style>