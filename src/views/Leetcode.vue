<template>
  <div class="container0">
    <div class="left">
      <h1>3164. 优质数对的总数 II</h1>
    </div>
    <div class="right container1">
      <div class="up item">
        <p>右侧编辑器</p>
        <select v-model="choiceLanguage" class="selectStyle">
          <option
            v-for="option in language"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <button @click="showMessage">运行</button>
        <monaco-editor
          :language="choiceLanguage"
          ref="childRef"
        ></monaco-editor>
      </div>
      <div class="down item">
        <p>下方展示区</p>
        <p>{{ resultLanguage }}</p>
        <p>{{ resultCode }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// 导入的要放到export default 外面
import MonacoEditor from "@/components/MonacoEditor";
export default {
  data() {
    return {
      choiceLanguage: "python", // 下拉框选中的语言， 默认选中的数据
      language: [
        { label: "java", value: "java" },
        { label: "python", value: "python" },
        { label: "javascript", value: "javascript" },
        { label: "go", value: "go" },
      ],
      // 代码执行的结果
      resultCode: "",
      resultLanguage: "",
    };
  },
  components: {
    MonacoEditor,
  },
  methods: {
    showMessage() {
      console.log("点击运行");
      this.resultLanguage = this.$refs.childRef.language;
      this.resultCode = this.$refs.childRef.code;
    },
  },
};
</script>

<style scoped>
.container0 {
  display: flex;
}
.container1 {
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
}
.left {
  border: 1px solid black;
  background: #ccc;
  width: 400px;
  height: 800px;
}
.right {
  background: #ccc;
}
.up {
  border: 1px solid black;
}
.down {
  border: 1px solid orange;
}
.item {
  height: 400px;
}
</style>
