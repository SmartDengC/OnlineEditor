<template>
  <div class="docs">
    <div class="docs-sidebar">
      <div class="sidebar-header">
        <h2>文档目录</h2>
      </div>
      <nav class="sidebar-nav">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="'#' + section.id"
          :class="{ active: currentSection === section.id }"
          @click="scrollToSection(section.id)"
        >
          {{ section.title }}
        </a>
      </nav>
    </div>

    <div class="docs-content">
      <section id="getting-started" class="doc-section">
        <h2>快速开始</h2>
        <p>
          欢迎使用在线代码编辑器！本文档将帮助您快速上手并充分利用编辑器的所有功能。
        </p>

        <h3>基本操作</h3>
        <ul>
          <li>选择编程语言：在编辑器顶部选择您想要使用的编程语言</li>
          <li>编写代码：在主编辑区域编写您的代码</li>
          <li>运行代码：点击"运行"按钮执行您的程序</li>
          <li>查看输出：在底部面板查看程序运行结果</li>
        </ul>
      </section>

      <section id="features" class="doc-section">
        <h2>功能特性</h2>

        <h3>代码编辑</h3>
        <ul>
          <li>语法高亮：自动识别并高亮显示代码语法</li>
          <li>智能提示：提供实时的代码补全建议</li>
          <li>自动缩进：保持代码格式整洁</li>
          <li>括号匹配：自动匹配括号对</li>
        </ul>

        <h3>编辑器功能</h3>
        <ul>
          <li>多语言支持：支持Python和Java等多种编程语言</li>
          <li>实时执行：快速运行并查看结果</li>
          <li>代码格式化：一键美化代码格式</li>
          <li>主题切换：支持明暗两种主题</li>
        </ul>
      </section>

      <section id="shortcuts" class="doc-section">
        <h2>快捷键</h2>
        <div class="shortcuts-grid">
          <div class="shortcut-group">
            <h3>编辑操作</h3>
            <div class="shortcut-item">
              <span class="key-combo">Ctrl + S</span>
              <span class="key-desc">保存代码</span>
            </div>
            <div class="shortcut-item">
              <span class="key-combo">Ctrl + Z</span>
              <span class="key-desc">撤销</span>
            </div>
            <div class="shortcut-item">
              <span class="key-combo">Ctrl + Y</span>
              <span class="key-desc">重做</span>
            </div>
          </div>

          <div class="shortcut-group">
            <h3>代码操作</h3>
            <div class="shortcut-item">
              <span class="key-combo">Ctrl + /</span>
              <span class="key-desc">注释/取消注释</span>
            </div>
            <div class="shortcut-item">
              <span class="key-combo">Shift + Alt + F</span>
              <span class="key-desc">格式化代码</span>
            </div>
            <div class="shortcut-item">
              <span class="key-combo">F5</span>
              <span class="key-desc">运行代码</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="doc-section">
        <h2>常见问题</h2>

        <div class="faq-item">
          <h3>如何保存我的代码？</h3>
          <p>您可以使用Ctrl + S快捷键或点击工具栏的保存按钮来保存当前代码。</p>
        </div>

        <div class="faq-item">
          <h3>支持哪些编程语言？</h3>
          <p>目前支持Python和Java，我们计划在未来添加更多语言支持。</p>
        </div>

        <div class="faq-item">
          <h3>如何分享我的代码？</h3>
          <p>点击工具栏的分享按钮，您可以获得一个可分享的链接。</p>
        </div>

        <div class="faq-item">
          <h3>代码运行环境是什么？</h3>
          <p>
            我们使用安全的沙箱环境运行代码，确保执行安全性的同时提供完整的语言特性支持。
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocsView",
  data() {
    return {
      currentSection: "getting-started",
      sections: [
        { id: "getting-started", title: "快速开始" },
        { id: "features", title: "功能特性" },
        { id: "shortcuts", title: "快捷键" },
        { id: "faq", title: "常见问题" },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      this.currentSection = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    // 监听滚动事件来更新当前章节
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.currentSection = entry.target.id;
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".doc-section").forEach((section) => {
      observer.observe(section);
    });
  },
};
</script>

<style scoped>
.docs {
  display: flex;
  min-height: calc(100vh - 64px);
}

.docs-sidebar {
  width: 250px;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  position: sticky;
  top: 64px;
  height: calc(100vh - 64px);
  overflow-y: auto;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.sidebar-header h2 {
  margin: 0;
  font-size: 1.25rem;
  color: #2d3748;
}

.sidebar-nav {
  padding: 1rem 0;
}

.sidebar-nav a {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #4a5568;
  text-decoration: none;
  transition: all 0.2s ease;
}

.sidebar-nav a:hover {
  background: #edf2f7;
  color: #2c5282;
}

.sidebar-nav a.active {
  background: #ebf8ff;
  color: #2b6cb0;
  border-right: 3px solid #2b6cb0;
}

.docs-content {
  flex: 1;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.doc-section {
  margin-bottom: 3rem;
}

.doc-section h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.doc-section h3 {
  color: #4a5568;
  margin: 1.5rem 0 1rem;
}

.doc-section p {
  color: #4a5568;
  line-height: 1.6;
}

.doc-section ul {
  padding-left: 1.5rem;
  color: #4a5568;
}

.doc-section li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.shortcuts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.shortcut-group {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.shortcut-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.key-combo {
  background: #edf2f7;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.875rem;
  color: #4a5568;
}

.key-desc {
  color: #4a5568;
}

.faq-item {
  margin-bottom: 2rem;
}

.faq-item h3 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.faq-item p {
  margin: 0;
  color: #4a5568;
}

@media (max-width: 768px) {
  .docs {
    flex-direction: column;
  }

  .docs-sidebar {
    width: 100%;
    height: auto;
    position: static;
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }

  .docs-content {
    padding: 1rem;
  }

  .shortcuts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
