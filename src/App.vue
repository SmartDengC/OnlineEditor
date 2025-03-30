<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-left">
        <router-link to="/" class="nav-logo">
          <img alt="编辑器Logo" src="./assets/code-editor-icon.svg" />
          <span>在线编辑器</span>
        </router-link>
      </div>

      <div class="nav-center">
        <router-link to="/" class="nav-link" exact>
          <span class="nav-icon"><i class="fas fa-home"></i></span>
          首页
        </router-link>
        <router-link to="/editor" class="nav-link">
          <span class="nav-icon"><i class="fas fa-code"></i></span>
          编辑器
        </router-link>
        <router-link to="/examples" class="nav-link">
          <span class="nav-icon"><i class="fas fa-book-open"></i></span>
          示例代码
        </router-link>
        <router-link to="/docs" class="nav-link">
          <span class="nav-icon"><i class="fas fa-file-alt"></i></span>
          文档
        </router-link>
      </div>

      <div class="nav-right">
        <a href="https://github.com" target="_blank" class="nav-button github">
          <span class="nav-icon">📦</span>
          GitHub
        </a>
        <div class="theme-switch">
          <span class="nav-icon">🌓</span>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Inter", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-left,
.nav-center,
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.2rem;
}

.nav-logo img {
  height: 32px;
  width: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: #f7fafc;
  color: #2c3e50;
}

.nav-link.router-link-exact-active {
  background: #ebf4ff;
  color: #3182ce;
}

.nav-icon {
  font-size: 1.1em;
  line-height: 1;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-button.github {
  background: #24292e;
  color: white;
}

.nav-button.github:hover {
  background: #1a1e21;
}

.theme-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-switch:hover {
  background: #f7fafc;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem 1rem;
  }

  .nav-center {
    display: none;
  }

  .nav-right {
    gap: 0.5rem;
  }

  .nav-button span:last-child {
    display: none;
  }

  .nav-logo span {
    display: none;
  }
}

/* 添加响应式菜单按钮 */
@media (max-width: 768px) {
  .navbar {
    position: relative;
  }

  .nav-right {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 6px 6px;
    display: none;
  }

  .nav-right.show {
    display: flex;
    flex-direction: column;
  }
}
</style>

<script>
export default {
  name: "App",
};
</script>
