<template>
  <div>
    <h1>MonacoEditor</h1>
    <select v-model="choiceLanguage">
      <option
        v-for="option in language"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <monaco-editor :language="choiceLanguage"></monaco-editor>
  </div>
</template>

<script>
import MonacoEditor from "@/components/MonacoEditorComponents";
export default {
  name: "Father",
  data() {
    return {
      choiceLanguage: "python", // 下拉框选中的语言， 默认选中的数据
      language: [
        { label: "java", value: "java" },
        { label: "python", value: "python" },
        { label: "javascript", value: "javascript" },
        { label: "go", value: "go" },
      ],
    };
  },
  components: {
    MonacoEditor,
  },
};
</script>
