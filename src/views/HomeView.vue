<template>
  <div class="home">
    <div class="hero">
      <img alt="编辑器Logo" src="../assets/logo.png" class="logo" />
      <h1>在线代码编辑器</h1>
      <p class="subtitle">简单易用的Python和Java在线编程环境</p>
    </div>

    <div class="content">
      <section class="features">
        <h2>主要特性</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>即时编码</h3>
            <p>无需配置环境，随时开始编程</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>智能编辑器</h3>
            <p>支持代码高亮、自动完成</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>快速运行</h3>
            <p>一键执行代码，实时查看结果</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>多语言支持</h3>
            <p>支持Python和Java编程语言</p>
          </div>
        </div>
      </section>

      <section class="manual">
        <h2>使用指南</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>选择编程语言</h3>
              <p>在编辑器页面顶部的下拉菜单中选择您想要使用的编程语言：</p>
              <div class="language-options">
                <div class="language-option">
                  <div class="language-icon python">Py</div>
                  <div class="language-name">Python</div>
                </div>
                <div class="language-option">
                  <div class="language-icon java">Ja</div>
                  <div class="language-name">Java</div>
                </div>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>编写代码</h3>
              <p>
                在编辑器中编写您的代码。编辑器支持语法高亮、代码自动完成和智能提示功能。
              </p>
              <div class="code-example">
                <div class="code-header">
                  <span class="language-tag python">Python 示例</span>
                </div>
                <pre><code>def greet(name):
    """向用户打招呼"""
    return f"Hello, {name}!"

# 调用函数
print(greet("World"))</code></pre>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>运行程序</h3>
              <p>
                点击"运行代码"按钮执行您的程序，运行结果将实时显示在下方的输出面板中。
              </p>
              <div class="run-example">
                <div class="run-button">
                  <span class="run-icon">▶</span> 运行代码
                </div>
                <div class="output-panel">
                  <div class="output-header">输出结果</div>
                  <div class="output-content">Hello, World!</div>
                </div>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>保存与分享</h3>
              <p>
                您可以保存您的代码，以便稍后继续编辑。还可以通过分享链接与他人协作。
              </p>
              <div class="action-buttons">
                <div class="action-button save">
                  <span class="action-icon">💾</span> 保存代码
                </div>
                <div class="action-button share">
                  <span class="action-icon">🔗</span> 分享代码
                </div>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>高级功能</h3>
              <p>探索更多高级功能，提升您的编程体验：</p>
              <ul class="advanced-features">
                <li>
                  <span class="feature-bullet">✓</span> 代码格式化 -
                  一键美化代码结构
                </li>
                <li>
                  <span class="feature-bullet">✓</span> 语法检查 -
                  实时发现潜在错误
                </li>
                <li>
                  <span class="feature-bullet">✓</span> 代码片段 -
                  快速插入常用代码模板
                </li>
                <li>
                  <span class="feature-bullet">✓</span> 快捷键支持 -
                  提高编码效率
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="get-started">
        <h2>开始使用</h2>
        <p>准备好开始编程了吗？点击下方按钮进入编辑器！</p>
        <router-link to="/editor" class="start-button">进入编辑器</router-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 40px 0;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  border-radius: 8px;
  margin-bottom: 40px;
}

.logo {
  width: 120px;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2em;
  color: #6c757d;
  margin: 0;
}

.content section {
  margin-bottom: 60px;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5em;
  margin-bottom: 15px;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.feature-card p {
  color: #6c757d;
  margin: 0;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step-number {
  width: 40px;
  height: 40px;
  background: #409eff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  color: #2c3e50;
  margin: 0 0 10px 0;
}

.step-content p {
  color: #6c757d;
  margin: 0 0 15px 0;
}

.language-options {
  display: flex;
  gap: 20px;
  margin-top: 15px;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.language-icon.python {
  background-color: #3776ab;
}

.language-icon.java {
  background-color: #f89820;
}

.language-name {
  font-weight: 500;
}

.code-example {
  background: #f8f9fa;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 15px;
  border: 1px solid #e9ecef;
}

.code-header {
  background: #e9ecef;
  padding: 8px 15px;
  border-bottom: 1px solid #dee2e6;
}

.language-tag {
  font-size: 0.85em;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 4px;
  color: white;
}

.language-tag.python {
  background-color: #3776ab;
}

.code-example pre {
  margin: 0;
  padding: 15px;
  overflow-x: auto;
}

.code-example code {
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 0.9em;
  line-height: 1.5;
}

.run-example {
  margin-top: 15px;
}

.run-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #28a745;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 10px;
  cursor: pointer;
}

.run-icon {
  font-size: 0.8em;
}

.output-panel {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  overflow: hidden;
}

.output-header {
  background: #e9ecef;
  padding: 8px 15px;
  font-weight: 500;
  color: #495057;
  font-size: 0.9em;
}

.output-content {
  padding: 15px;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  color: #212529;
}

.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.action-button.save {
  background: #17a2b8;
  color: white;
}

.action-button.share {
  background: #6f42c1;
  color: white;
}

.advanced-features {
  list-style-type: none;
  padding: 0;
  margin: 15px 0 0 0;
}

.advanced-features li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-bullet {
  color: #28a745;
  font-weight: bold;
}

.get-started {
  text-align: center;
  padding: 40px;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  border-radius: 8px;
}

.start-button {
  display: inline-block;
  background: #409eff;
  color: white;
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.2s;
}

.start-button:hover {
  background: #66b1ff;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero h1 {
    font-size: 2em;
  }

  .subtitle {
    font-size: 1em;
  }
}
</style>
