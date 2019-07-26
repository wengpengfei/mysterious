<template>
  <el-container id="app">
    <el-aside width="256px" style="background: #060c1f;">
      <el-menu default-active="1-4-1"
               text-color="#ffffff"
               active-text-color="#1081d4"
               background-color="#060c1f"
               class="el-menu-vertical-demo">
        <div v-for="(menu, $index) in MenuList" :key="$index">
          <el-submenu :index="`${$index}`" v-if="menu.children&&menu.children.length">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{menu.name}}</span>
            </template>
            <el-menu-item :index="`children${$index}`" v-for="(children, $index) in menu.children"
                          :key="`children${$index}`">
              {{children.name}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else>
            {{menu.name}}
          </el-menu-item>
        </div>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height: 100px;padding: 0;">
        <div class="top">
          <div class="brand" style="line-height: 60px;padding: 0 20px;">
            <span style="cursor: pointer">
              <i class="el-icon-s-fold" style="font-size: 30px"></i>
            </span>
            <span style="font-weight: bold">时刻监督和客刻监口缝合伤口缝合是客户</span>
          </div>
          <div class="toolbox">

          </div>
        </div>
        <div style="border-bottom: 1px solid #dddddd;border-top: 1px solid #dddddd;padding: 5px;font-size: 12px">
          <el-tag effect="dark" type="" size="medium" closable>中等标签</el-tag>
          <el-tag effect="dark" type="" size="medium" closable>中等标签</el-tag>
          <el-tag effect="dark" type="" size="medium" closable>中等标签</el-tag>
        </div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer style="text-align: center;">
        十大科技孵化刷卡积分和伤口恢复看h
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss">
  @import "styles/index.scss";
</style>

<script>
  import MenuList from '@/datas/menu.json'

  console.log(MenuList)
  export default {
    data () {
      return {
        MenuList
      }
    }
  }
</script>