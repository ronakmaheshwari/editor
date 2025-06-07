// Utility functions and constants for the editor

export const key = import.meta.env.VITE_API_KEY;
export const URL = import.meta.env.VITE_API_URL;

export const Language = {
  C: { id: 50, version: "GCC 11.2.0" },
  CPP: { id: 54, version: "GCC 11.2.0" },
  Python3: { id: 71, version: "Python 3.10.4" },
  Java: { id: 62, version: "OpenJDK 17" },
  JavaScript: { id: 63, version: "Node.js 16.13.0" },
  TypeScript: { id: 74, version: "TypeScript 4.5.4" },
  Ruby: { id: 72, version: "Ruby 3.0.2" },
  Go: { id: 60, version: "Go 1.17" },
  PHP: { id: 68, version: "PHP 8.0.13" },
  Swift: { id: 83, version: "Swift 5.4" },
  Kotlin: { id: 78, version: "Kotlin 1.5.31" },
};

export const Code_Snippet: Record<string, string> = {
  c: `#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}
`,
  cpp: `#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
`,
  python3: `print("Hello, World!")`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`,
  javascript: `console.log("Hello, World!");`,
  typescript: `console.log("Hello, World!");`,
  ruby: `puts "Hello, World!"`,
  go: `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
`,
  php: `<?php
echo "Hello, World!";
?>
`,
  swift: `print("Hello, World!")`,
  kotlin: `fun main() {
    println("Hello, World!")
}
`,
};



export default Code_Snippet