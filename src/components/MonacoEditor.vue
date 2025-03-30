<template>
  <div class="editor-container">
    <div class="toolbar">
      <button @click="format" class="toolbar-btn">格式化代码</button>
      <button @click="run" class="toolbar-btn">运行代码</button>
      <select v-model="currentTheme" @change="changeTheme" class="theme-select">
        <option value="vs">浅色主题</option>
        <option value="vs-dark">深色主题</option>
        <option value="hc-black">高对比度</option>
      </select>
    </div>
    <div ref="editor" class="editor"></div>
    <div v-if="output" class="output-panel">
      <div class="output-header">
        <span>输出结果</span>
        <button @click="clearOutput" class="clear-btn">清除</button>
      </div>
      <pre class="output-content">{{ output }}</pre>
    </div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
import { runCode, getCodeTemplate } from "@/api/codeRunner";

// 代码提示配置
const vCompletion = [
  {
    label: "console.log",
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: "console.log($1)",
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "输出日志到控制台",
  },
  {
    label: "function",
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: ["function ${1:name}(${2:params}) {", "\t$0", "}"].join("\n"),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "创建一个函数",
  },
];

// 导入语言支持
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution";
import "monaco-editor/esm/vs/basic-languages/html/html.contribution";
import "monaco-editor/esm/vs/basic-languages/python/python.contribution";
// 注：在Monaco Editor 0.30.1版本中，格式化功能已内置，无需额外导入

export default {
  name: "MonacoEditor",
  props: ["language"],
  data() {
    return {
      code: "",
      editor: null,
      output: "",
      currentTheme: "vs-dark",
      isRunning: false,
    };
  },
  mounted() {
    this.init();
    // 设置初始代码模板
    setTimeout(() => {
      if (this.editor) {
        this.editor.setValue(getCodeTemplate(this.language));
      }
    }, 100);
  },

  watch: {
    language(newLang, oldLang) {
      if (newLang !== oldLang) {
        this.code = getCodeTemplate(newLang);
        this.changeEditor();
      }
    },
  },
  methods: {
    async run() {
      if (this.isRunning) {
        return;
      }

      this.isRunning = true;
      this.output = "运行中...";

      try {
        // 获取当前编辑器内容
        const code = this.editor ? this.editor.getValue() : this.code;

        if (!code || code.trim() === "") {
          this.output = "错误: 请先输入代码";
          this.isRunning = false;
          return;
        }

        // 确保语言设置正确
        const currentLanguage =
          this.editor?.getModel()?.getLanguageId() || this.language;
        console.log(
          `运行代码，语言: ${currentLanguage}，代码长度: ${code.length}字符`
        );

        const result = await runCode(code, currentLanguage);

        if (result.success) {
          this.output = result.output || "程序执行完成";
        } else {
          this.output = `执行失败: ${result.output}`;
        }
      } catch (error) {
        console.error("代码执行错误:", error);
        this.output = `错误: ${error.message || "未知错误"}`;
      } finally {
        this.isRunning = false;
      }
    },

    clearOutput() {
      this.output = "";
    },

    changeTheme(event) {
      monaco.editor.setTheme(this.currentTheme);
    },

    async format() {
      if (!this.editor) return;

      try {
        // 直接触发格式化命令
        await this.editor.trigger("source", "editor.action.formatDocument");
        this.output = "格式化完成";
      } catch (error) {
        this.output = `格式化失败: ${error.message}`;
        console.error("格式化错误:", error);
      }
    },

    changeEditor() {
      if (this.editor) {
        // 更新编辑器的语言和内容
        monaco.editor.setModelLanguage(this.editor.getModel(), this.language);
        this.editor.setValue(getCodeTemplate(this.language));
      }
    },

    init() {
      // 配置编辑器实例
      this.editor = monaco.editor.create(this.$refs.editor, {
        value: this.code,
        language: this.language,
        theme: this.currentTheme, // 使用当前主题
        formatOnPaste: true, // 粘贴时自动格式化
        formatOnType: true, // 输入时自动格式化
        acceptSuggestionOnCommitCharacter: true, // 接受关于提交字符的建议
        acceptSuggestionOnEnter: "on", // 接受输入建议 "on" | "off" | "smart"
        accessibilityPageSize: 10, // 辅助功能页面大小 Number 说明：控制编辑器中可由屏幕阅读器读出的行数。警告：这对大于默认值的数字具有性能含义。
        accessibilitySupport: "on", // 辅助功能支持 控制编辑器是否应在为屏幕阅读器优化的模式下运行。
        autoClosingBrackets: "always", // 是否自动添加结束括号(包括中括号) "always" | "languageDefined" | "beforeWhitespace" | "never"
        autoClosingDelete: "always", // 是否自动删除结束括号(包括中括号) "always" | "never" | "auto"
        autoClosingOvertype: "always", // 是否关闭改写 即使用insert模式时是覆盖后面的文字还是不覆盖后面的文字 "always" | "never" | "auto"
        autoClosingQuotes: "always", // 是否自动添加结束的单引号 双引号 "always" | "languageDefined" | "beforeWhitespace" | "never"
        autoIndent: "None", // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
        automaticLayout: true, // 自动布局
        codeLens: false, // 是否显示codeLens 通过 CodeLens，你可以在专注于工作的同时了解代码所发生的情况 – 而无需离开编辑器。 可以查找代码引用、代码更改、关联的 Bug、工作项、代码评审和单元测试。
        codeLensFontFamily: "", // codeLens的字体样式
        codeLensFontSize: 14, // codeLens的字体大小
        colorDecorators: false, // 呈现内联色彩装饰器和颜色选择器
        comments: {
          ignoreEmptyLines: true, // 插入行注释时忽略空行。默认为真。
          insertSpace: true, // 在行注释标记之后和块注释标记内插入一个空格。默认为真。
        }, // 注释配置
        contextmenu: true, // 启用上下文菜单
        columnSelection: false, // 启用列编辑 按下shift键位然后按↑↓键位可以实现列选择 然后实现列编辑
        autoSurround: "never", // 是否应自动环绕选择
        copyWithSyntaxHighlighting: true, // 是否应将语法突出显示复制到剪贴板中 即 当你复制到word中是否保持文字高亮颜色
        cursorBlinking: "Solid", // 光标动画样式
        cursorSmoothCaretAnimation: true, // 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
        cursorStyle: "UnderlineThin", // "Block"|"BlockOutline"|"Line"|"LineThin"|"Underline"|"UnderlineThin" 光标样式
        cursorSurroundingLines: 0, // 光标环绕行数 当文字输入超过屏幕时 可以看见右侧滚动条中光标所处位置是在滚动条中间还是顶部还是底部 即光标环绕行数 环绕行数越大 光标在滚动条中位置越居中
        cursorSurroundingLinesStyle: "all", // "default" | "all" 光标环绕样式
        cursorWidth: 2, // <=25 光标宽度
        minimap: {
          enabled: false, // 是否启用预览图
        }, // 预览图设置
        folding: true, // 是否启用代码折叠
        links: true, // 是否点击链接
        overviewRulerBorder: false, // 是否应围绕概览标尺绘制边框
        renderLineHighlight: "gutter", // 当前行突出显示方式
        roundedSelection: false, // 选区是否有圆角
        scrollBeyondLastLine: false, // 设置编辑器是否可以滚动到最后一行之后
        readOnly: false, // 是否为只读模式
      });

      // 监听内容变化
      this.editor.onDidChangeModelContent(() => {
        this.code = this.editor.getValue();
      });

      // 监听失去焦点事件
      this.editor.onDidBlurEditorText((e) => {});

      monaco.languages.registerCompletionItemProvider("javascript", {
        provideCompletionItems: () => {
          return { suggestions: vCompletion };
        },
      });
    },
  },
};
</script>

<style scoped>
.editor-container {
  width: 90%;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.toolbar {
  padding: 8px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
  display: flex;
  gap: 10px;
}

.toolbar-btn,
.clear-btn {
  padding: 4px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 14px;
}

.toolbar-btn:hover,
.clear-btn:hover {
  background: #e6e6e6;
}

.theme-select {
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-left: auto;
}

.editor {
  height: 400px;
  text-align: left;
}

.output-panel {
  border-top: 1px solid #ddd;
  background: #f8f8f8;
}

.output-header {
  padding: 8px;
  background: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.output-content {
  margin: 0;
  padding: 12px;
  max-height: 200px;
  overflow-y: auto;
  font-family: monospace;
  white-space: pre-wrap;
  font-size: 14px;
}
</style>
