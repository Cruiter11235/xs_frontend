<template>
  <div class="app-container center">
    <!-- <el-empty description="Editor 权限可见" /> -->
    <el-row>
      <el-col :span="24"><div class="grid-content" /></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content" /></el-col>
      <el-col :span="12"><div class="grid-content" /></el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
// .center {
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: red;
}
</style>
