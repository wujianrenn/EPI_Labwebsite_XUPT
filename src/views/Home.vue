<template>
  <div class="home">
    <h1>Welcome to Our Research Lab</h1>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card>
          <h2>Latest News</h2>
          <ul>
            <li>New research paper published in top conference</li>
            <li>Lab received major grant funding</li>
            <li>Upcoming workshop announcement</li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <h2>Quick Links</h2>
          <el-button-group>
            <el-button type="primary" @click="$router.push('/recruitment')">Join Us</el-button>
            <el-button type="info" @click="$router.push('/research')">Our Research</el-button>
          </el-button-group>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding: 20px;
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .el-card {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 10px;
      padding-left: 20px;
      position: relative;
      
      &:before {
        content: "•";
        position: absolute;
        left: 0;
      }
    }
  }
}
</style>
