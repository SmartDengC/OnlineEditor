<template>
  <div class="examples">
    <h1>示例代码</h1>
    <div class="examples-grid">
      <div class="example-card" v-for="example in examples" :key="example.id">
        <div class="example-header">
          <span class="language-tag" :class="example.language">{{
            example.language
          }}</span>
          <h3>{{ example.title }}</h3>
        </div>
        <p class="example-description">{{ example.description }}</p>
        <div class="example-preview">
          <pre><code>{{ example.code }}</code></pre>
        </div>
        <div class="example-actions">
          <button class="try-button" @click="tryExample(example)">
            在编辑器中打开
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExamplesView",
  data() {
    return {
      examples: [
        {
          id: 1,
          title: "Hello World",
          description: "最基础的Python程序示例",
          language: "Python",
          code: 'print("Hello, World!")',
        },
        {
          id: 2,
          title: "数字求和",
          description: "计算用户输入的两个数字之和",
          language: "Python",
          code: `# 获取用户输入
num1 = float(input("输入第一个数字: "))
num2 = float(input("输入第二个数字: "))

# 计算总和
sum = num1 + num2

# 显示结果
print(f"{num1} + {num2} = {sum}")`,
        },
        {
          id: 3,
          title: "Java Hello World",
          description: "基础的Java程序示例",
          language: "Java",
          code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        },
        {
          id: 4,
          title: "简单计算器",
          description: "Java实现的基础计算器",
          language: "Java",
          code: `import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("输入第一个数字: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("输入运算符 (+, -, *, /): ");
        char operator = scanner.next().charAt(0);
        
        System.out.print("输入第二个数字: ");
        double num2 = scanner.nextDouble();
        
        double result;
        
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                System.out.println("无效的运算符");
                return;
        }
        
        System.out.println("结果: " + result);
    }
}`,
        },
      ],
    };
  },
  methods: {
    tryExample(example) {
      // 跳转到编辑器页面并传递示例代码
      this.$router.push({
        path: "/editor",
        query: {
          code: example.code,
          language: example.language,
        },
      });
    },
  },
};
</script>

<style scoped>
.examples {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.examples h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.example-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.example-card:hover {
  transform: translateY(-2px);
}

.example-header {
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.example-header h3 {
  margin: 0.5rem 0 0 0;
  color: #2d3748;
}

.language-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
}

.language-tag.Python {
  background-color: #3776ab;
}

.language-tag.Java {
  background-color: #f89820;
}

.example-description {
  padding: 1rem;
  color: #4a5568;
  margin: 0;
}

.example-preview {
  padding: 1rem;
  background: #f7fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.example-preview pre {
  margin: 0;
  white-space: pre-wrap;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

.example-actions {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}

.try-button {
  background: #4299e1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.try-button:hover {
  background: #3182ce;
}

@media (max-width: 768px) {
  .examples {
    padding: 1rem;
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }
}
</style>
