<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3>用户登陆</h3>
      </div>
      <!-- username -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text"></el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password"></el-input>
        <span class="show-pwd">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
      </el-form-item>
      <!-- login btn -->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px"
        >登陆</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons'
</script>

<style lang="scss" scoped></style>
