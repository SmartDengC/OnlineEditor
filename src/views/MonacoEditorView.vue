<template>
  <div class="editor-view">
    <div class="header">
      <h2>在线代码编辑器</h2>
      <div class="language-selector">
        <label>选择编程语言：</label>
        <select v-model="choiceLanguage" class="select-style">
          <option
            v-for="option in language"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
    <monaco-editor :language="choiceLanguage" ref="editor"></monaco-editor>
  </div>
</template>

<script>
import MonacoEditor from "@/components/MonacoEditor";
export default {
  name: "Father",
  data() {
    return {
      choiceLanguage: "python", // 默认选中Python
      language: [
        { label: "Python", value: "python" },
        { label: "Java", value: "java" },
      ],
    };
  },
  components: {
    MonacoEditor,
  },
};
</script>

<style scoped>
.editor-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  margin: 0;
  color: #2c3e50;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-selector label {
  font-weight: 500;
  color: #2c3e50;
}

.select-style {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  min-width: 120px;
}

.select-style:hover {
  border-color: #409eff;
}

.select-style:focus {
  outline: none;
  border-color: #409eff;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}
</style>
