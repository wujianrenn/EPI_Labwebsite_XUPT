<template>
  <div class="research">
    <h1>Our Research</h1>
    
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="research-area">
          <template #header>
            <h2>人工智能研究</h2>
          </template>
          <p>我们的实验室专注于人工智能领域的前沿研究，包括但不限于：</p>
          <ul>
            <li>深度学习与神经网络</li>
            <li>自然语言处理</li>
            <li>计算机视觉</li>
            <li>强化学习</li>
          </ul>
        </el-card>
      </el-col>

      <el-col :span="24">
        <el-card class="research-area">
          <template #header>
            <h2>机器人技术</h2>
          </template>
          <p>在机器人技术领域，我们主要研究：</p>
          <ul>
            <li>机器人控制系统</li>
            <li>机器人视觉</li>
            <li>人机交互</li>
            <li>智能导航</li>
          </ul>
        </el-card>
      </el-col>

      <el-col :span="24">
        <el-card class="research-area">
          <template #header>
            <h2>数据科学</h2>
          </template>
          <p>数据科学研究方向包括：</p>
          <ul>
            <li>大数据分析</li>
            <li>数据挖掘</li>
            <li>预测分析</li>
            <li>可视化技术</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>

    <el-divider>发表论文</el-divider>

    <el-timeline>
      <el-timeline-item
        v-for="(paper, index) in papers"
        :key="index"
        :timestamp="paper.date"
        placement="top"
      >
        <el-card>
          <h3>{{ paper.title }}</h3>
          <p>{{ paper.authors }}</p>
          <p>发表于：{{ paper.journal }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const papers = ref([
  {
    date: '2024',
    title: '基于深度学习的智能机器人视觉系统研究',
    authors: '张三, 李四, 王五',
    journal: 'International Journal of Robotics Research'
  },
  {
    date: '2023',
    title: '自然语言处理在人机交互中的应用',
    authors: '李四, 王五, 赵六',
    journal: 'IEEE Transactions on Neural Networks'
  },
  {
    date: '2023',
    title: '大数据分析在智能制造中的应用研究',
    authors: '王五, 赵六, 张三',
    journal: 'Big Data Research'
  }
])
</script>

<style lang="scss" scoped>
.research {
  padding: 20px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .research-area {
    margin-bottom: 20px;

    h2 {
      margin: 0;
      color: #409EFF;
    }

    ul {
      padding-left: 20px;
      
      li {
        margin: 10px 0;
      }
    }
  }

  .el-divider {
    margin: 40px 0;
  }

  .el-timeline {
    margin-top: 30px;
    
    h3 {
      margin: 0;
      color: #409EFF;
    }

    p {
      margin: 5px 0;
      color: #666;
    }
  }
}
</style>
