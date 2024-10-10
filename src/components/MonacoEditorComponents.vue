<template>
  <div ref="editor" class="editor"></div>
</template>

<script>
import * as monaco from "monaco-editor";
export default {
  name: "MonacoEditor",
  props: ["language"],
  data() {
    return {
      code: "hello world",
      editor: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 初始化编辑器
      this.editor = monaco.editor.create(this.$refs.editor, {
        value: this.code,
        language: this.language,
        tabSize: 2,
        // scrollBeyondLastLine: false,
        // automaticLayout: true, // 自动布局
        // readOnly: false,
      });
      console.log("初始化完毕！");
      console.log(this.language);
      console.log(this.editor);

      // 监听内容变化
      this.editor.onDidChangeModelContent(() => {});

      // 监听失去焦点事件
      this.editor.onDidBlurEditorText((e) => {
        console.log(e);
      });
    },
    // 获取编辑框内容
    getCodeContext() {
      return this.editor.getValue();
    },
    // 自动格式化代码
    format() {
      this.editor.trigger("anything", "editor.action.formatDocument");
      // 或者
      // this.editor.getAction(['editor.action.formatDocument']).run()
      //或者
      //自定义格式化 后赋值
    },
    changeEditor() {
      if (this.editor === null) {
        this.init();
      }

      const oldModel = this.editor.getModel();
      const newModel = monaco.editor.createModel(this.code, "sql");

      if (oldModel) {
        oldModel.dispose();
      }
      this.editor.setModel(newModel);
    },
  },
};
</script>

<style scoped>
.editor {
  /* width: 100%; */
  /* min-height: 100%; */
  width: 1280px;
  height: 920px;
  border: 3px solid black;
}
</style>
