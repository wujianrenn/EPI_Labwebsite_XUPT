<template>
  <div class="about">
    <h1>关于我们</h1>
    
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="intro-card">
          <template #header>
            <h2>实验室简介</h2>
          </template>
          <p>
            我们的实验室成立于2020年，致力于人工智能、机器人技术和数据科学领域的前沿研究。
            实验室汇集了来自世界各地的优秀研究人员，形成了一个充满活力的研究团队。
          </p>
        </el-card>
      </el-col>

      <el-col :span="24">
        <el-card class="team-card">
          <template #header>
            <h2>研究团队</h2>
          </template>
          <el-row :gutter="20">
            <el-col :span="8" v-for="member in teamMembers" :key="member.name">
              <el-card shadow="hover" class="member-card">
                <img :src="member.avatar" class="member-avatar">
                <h3>{{ member.name }}</h3>
                <p class="title">{{ member.title }}</p>
                <p class="research">研究方向：{{ member.research }}</p>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="24">
        <el-card class="contact-card">
          <template #header>
            <h2>联系我们</h2>
          </template>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="地址">
              某某市某某区某某路123号
            </el-descriptions-item>
            <el-descriptions-item label="邮箱">
              contact@lab.example.com
            </el-descriptions-item>
            <el-descriptions-item label="电话">
              +86 123-4567-8900
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const teamMembers = ref([
  {
    name: '张教授',
    title: '实验室主任',
    research: '人工智能',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    name: '李博士',
    title: '副研究员',
    research: '机器人技术',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    name: '王博士',
    title: '助理研究员',
    research: '数据科学',
    avatar: 'https://via.placeholder.com/150'
  }
])
</script>

<style lang="scss" scoped>
.about {
  padding: 20px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .el-card {
    margin-bottom: 20px;

    h2 {
      margin: 0;
      color: #409EFF;
    }
  }

  .member-card {
    text-align: center;
    margin-bottom: 20px;

    .member-avatar {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      margin: 10px 0;
    }

    h3 {
      margin: 10px 0;
    }

    .title {
      color: #666;
      margin: 5px 0;
    }

    .research {
      color: #999;
      font-size: 0.9em;
    }
  }

  .contact-card {
    .el-descriptions {
      margin-top: 20px;
    }
  }
}
</style>
