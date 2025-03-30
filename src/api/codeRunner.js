/**
 * 代码运行API服务
 *
 * 这个模块提供了与后端代码执行服务交互的功能
 * 在实际项目中，这里应该连接到真实的后端API
 * 目前使用模拟响应进行演示
 */

// 模拟代码执行延迟
const simulateExecution = (code, language) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 规范化语言标识符
      const normalizedLanguage = language.toLowerCase();

      // 根据不同语言返回模拟输出
      if (
        normalizedLanguage === "python" ||
        normalizedLanguage.includes("python")
      ) {
        if (code.includes("print")) {
          try {
            // 改进的Python print语句解析
            const printMatches = code.match(/print\s*\((.*?)(?:\)|$)/g) || [];
            const output = printMatches
              .map((match) => {
                try {
                  // 提取print括号中的内容，处理可能的多行情况
                  const startIndex = match.indexOf("(") + 1;
                  const endIndex = match.lastIndexOf(")");
                  const content =
                    endIndex > startIndex
                      ? match.substring(startIndex, endIndex)
                      : "";

                  // 处理字符串
                  if (
                    (content.startsWith("'") && content.endsWith("'")) ||
                    (content.startsWith('"') && content.endsWith('"'))
                  ) {
                    return content.substring(1, content.length - 1);
                  }
                  // 处理f-string
                  if (content.startsWith('f"') || content.startsWith("f'")) {
                    // 简单替换变量占位符
                    return content
                      .substring(2, content.length - 1)
                      .replace(/\{([^}]+)\}/g, (m, v) => `[变量: ${v}]`);
                  }
                  // 处理简单变量或表达式
                  return `[表达式结果: ${content}]`;
                } catch (e) {
                  return "[无法解析的输出]";
                }
              })
              .join("\n");

            resolve({
              success: true,
              output: output || "程序执行完成，无输出",
              language: normalizedLanguage,
            });
          } catch (e) {
            resolve({
              success: true,
              output: `程序执行完成，但解析输出时出错: ${e.message}`,
              language: normalizedLanguage,
            });
          }
        } else {
          resolve({
            success: true,
            output: "程序执行完成，无输出",
            language: normalizedLanguage,
          });
        }
      } else if (language === "java") {
        if (code.includes("System.out.println")) {
          // 简单解析Java代码中的println语句
          const printMatches =
            code.match(/System\.out\.println\((.*?)\);/g) || [];
          const output = printMatches
            .map((match) => {
              try {
                // 提取println括号中的内容
                const content = match.substring(19, match.length - 2);
                // 处理字符串
                if (content.startsWith('"') || content.startsWith("'")) {
                  return content.substring(1, content.length - 1);
                }
                // 处理简单变量或表达式
                return `[变量值: ${content}]`;
              } catch (e) {
                return "[无法解析的输出]";
              }
            })
            .join("\n");

          resolve({
            success: true,
            output: output || "程序执行完成，无输出",
            language,
          });
        } else {
          resolve({
            success: true,
            output: "程序执行完成，无输出",
            language,
          });
        }
      } else {
        resolve({
          success: false,
          output: `暂不支持${language}语言的执行`,
          language,
        });
      }
    }, 1000); // 模拟1秒延迟
  });
};

/**
 * 运行代码并返回结果
 * @param {string} code - 要执行的代码
 * @param {string} language - 代码语言
 * @returns {Promise} - 返回执行结果的Promise
 */
export const runCode = async (code, language) => {
  try {
    // 在实际项目中，这里应该是真实的API调用
    // const response = await fetch('/api/execute', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ code, language })
    // });
    // return await response.json();

    // 使用模拟执行
    return await simulateExecution(code, language);
  } catch (error) {
    console.error("代码执行错误:", error);
    return {
      success: false,
      output: `执行错误: ${error.message}`,
      language,
    };
  }
};

/**
 * 获取语言默认代码模板
 * @param {string} language - 代码语言
 * @returns {string} - 返回对应语言的代码模板
 */
export const getCodeTemplate = (language) => {
  const templates = {
    python: `# Python示例代码
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`,
    java: `// Java示例代码
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  };

  return templates[language] || "// 开始编写代码";
};
