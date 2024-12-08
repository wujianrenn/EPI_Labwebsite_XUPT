<template>
  <el-container class="layout">
    <el-header>
      <nav-header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <nav-footer />
    </el-footer>
  </el-container>
</template>

<script setup>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
</script>

<style lang="scss">
.layout {
  min-height: 100vh;
}
</style>
