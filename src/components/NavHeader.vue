<template>
  <div class="nav-header">
    <div class="logo">Lab Website</div>
    <el-menu mode="horizontal" router>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/research">Research</el-menu-item>
      <el-menu-item index="/recruitment">Join Us</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  
  .logo {
    font-size: 1.5em;
    font-weight: bold;
    margin-right: 40px;
  }

  .el-menu {
    flex: 1;
    border-bottom: none;
  }
}
</style>
