<template>
  <div class="recruitment">
    <h1>Join Our Lab</h1>
    
    <el-steps :active="currentStep" finish-status="success">
      <el-step title="Basic Info" />
      <el-step title="Academic Background" />
      <el-step title="Research Interest" />
    </el-steps>

    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="120px"
      class="application-form"
    >
      <!-- Step 1: Basic Info -->
      <div v-if="currentStep === 0">
        <el-form-item label="Name" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="form.email" type="email" />
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input v-model="form.phone" />
        </el-form-item>
      </div>

      <!-- Step 2: Academic Background -->
      <div v-if="currentStep === 1">
        <el-form-item label="University" prop="university">
          <el-input v-model="form.university" />
        </el-form-item>
        <el-form-item label="Major" prop="major">
          <el-input v-model="form.major" />
        </el-form-item>
        <el-form-item label="GPA" prop="gpa">
          <el-input-number v-model="form.gpa" :precision="2" :step="0.01" :max="4" />
        </el-form-item>
      </div>

      <!-- Step 3: Research Interest -->
      <div v-if="currentStep === 2">
        <el-form-item label="Research Area" prop="researchArea">
          <el-select v-model="form.researchArea" placeholder="Select area">
            <el-option
              v-for="area in researchAreas"
              :key="area.value"
              :label="area.label"
              :value="area.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Statement" prop="statement">
          <el-input
            v-model="form.statement"
            type="textarea"
            :rows="4"
            placeholder="Please describe your research interests and experience"
          />
        </el-form-item>
        <el-form-item label="CV" prop="cv">
          <el-upload
            class="cv-uploader"
            action="/api/upload"
            :on-success="handleCVUpload"
            :before-upload="beforeCVUpload"
          >
            <el-button type="primary">Upload CV</el-button>
          </el-upload>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button v-if="currentStep > 0" @click="prevStep">Previous</el-button>
        <el-button
          v-if="currentStep < 2"
          type="primary"
          @click="nextStep"
        >
          Next
        </el-button>
        <el-button
          v-else
          type="primary"
          @click="submitForm"
        >
          Submit
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const formRef = ref(null)
const currentStep = ref(0)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  university: '',
  major: '',
  gpa: 0,
  researchArea: '',
  statement: '',
  cv: null
})

const researchAreas = [
  { value: 'ai', label: 'Artificial Intelligence' },
  { value: 'robotics', label: 'Robotics' },
  { value: 'data', label: 'Data Science' }
]

const rules = {
  name: [{ required: true, message: 'Please input your name', trigger: 'blur' }],
  email: [
    { required: true, message: 'Please input your email', trigger: 'blur' },
    { type: 'email', message: 'Please input valid email', trigger: 'blur' }
  ],
  phone: [{ required: true, message: 'Please input your phone', trigger: 'blur' }],
  university: [{ required: true, message: 'Please input your university', trigger: 'blur' }],
  major: [{ required: true, message: 'Please input your major', trigger: 'blur' }],
  gpa: [{ required: true, message: 'Please input your GPA', trigger: 'blur' }],
  researchArea: [{ required: true, message: 'Please select research area', trigger: 'change' }],
  statement: [{ required: true, message: 'Please input your statement', trigger: 'blur' }]
}

const nextStep = async () => {
  if (!formRef.value) return
  
  try {
    await formRef.value.validate()
    currentStep.value++
  } catch (error) {
    ElMessage.error('Please complete all required fields')
  }
}

const prevStep = () => {
  currentStep.value--
}

const handleCVUpload = (response) => {
  form.cv = response.url
  ElMessage.success('CV uploaded successfully')
}

const beforeCVUpload = (file) => {
  const isPDF = file.type === 'application/pdf'
  if (!isPDF) {
    ElMessage.error('CV must be a PDF file!')
  }
  return isPDF
}

const submitForm = async () => {
  if (!formRef.value) return
  
  try {
    await formRef.value.validate()
    // TODO: Implement API call to submit form
    ElMessage.success('Application submitted successfully')
  } catch (error) {
    ElMessage.error('Please complete all required fields')
  }
}
</script>

<style lang="scss" scoped>
.recruitment {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .el-steps {
    margin-bottom: 40px;
  }

  .application-form {
    margin-top: 20px;
  }

  .cv-uploader {
    width: 100%;
  }
}
</style>
