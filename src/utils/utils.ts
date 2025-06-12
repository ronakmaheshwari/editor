import ts from "typescript";

export const key = import.meta.env.VITE_API_KEY;
export const URL = import.meta.env.VITE_API_URL;
export const Piston = import.meta.env.VITE_PISTON_API;

export interface LanguageInfo {
  id: number;
  version: string;
}

export const Language: Record<string, LanguageInfo> = {
  C: { id: 50, version: "11.2.0" },
  Cpp: { id: 32, version: "10.2.0" },
  Rust: { id: 73, version: "1.71.1" },
  Python: { id: 71, version: "3.11.4" },
  Java: { id: 62, version: "17.0.8" },
  Javascript: { id: 63, version: "20.0.0" },
  Typescript: { id: 74, version: "5.0.2" },
  Ruby: { id: 72, version: "3.2.2" },
  Go: { id: 60, version: "1.20.3" },
  Php: { id: 68, version: "8.2.10" },
  Swift: { id: 83, version: "5.9.0" },
  Kotlin: { id: 78, version: "1.9.0" },
};

export const Code_Snippet: Record<string, string> = {
  c: `#include <stdio.h>

void greet(const char* name) {
    printf("Hello, %s!\\n", name);
}

int sum(int n) {
    int total = 0;
    for (int i = 1; i <= n; ++i) {
        total += i;
    }
    return total;
}

int main() {
    greet("Ronak Maheshwari");
    int total = sum(10);
    printf("Sum of first 10 numbers: %d\\n", total);
    return 0;
}
`,

  cpp: `#include <iostream>
using namespace std;

void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int sum(int n) {
    int total = 0;
    for (int i = 1; i <= n; ++i) total += i;
    return total;
}

int main() {
    greet("Ronak Maheshwari");
    cout << "Sum of 1 to 10 is " << sum(10) << endl;
    return 0;
}
`,

  rust: `fn greet(name: &str) {
    println!("Hello, {}!", name);
}

fn sum(n: u32) -> u32 {
    (1..=n).sum()
}

fn main() {
    let name = "Ronak Maheshwari";
    greet(name);
    println!("Sum of numbers from 1 to 10: {}", sum(10));
}
`,

  python: `def greet(name):
    print(f"Hello, {name}!")

def sum_n(n):
    return sum(range(1, n+1))

if __name__ == "__main__":
    greet("Ronak Maheshwari")
    print("Sum of 1 to 10 is", sum_n(10))
`,

  java: `public class Main {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static int sum(int n) {
        int total = 0;
        for (int i = 1; i <= n; i++) total += i;
        return total;
    }

    public static void main(String[] args) {
        greet("Ronak Maheshwari");
        System.out.println("Sum of 1 to 10 is " + sum(10));
    }
}
`,

  javascript: `function greet(name) {
    console.log(\`Hello, \${name}!\`);
}

function sum(n) {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
}

greet("Ronak Maheshwari");
console.log("Sum of 1 to 10 is", sum(10));
`,

  typescript: `function greet(name:string):void{
  console.log("Hello, " + name + "!");
}

function sum(n:number):number{
  return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
}

greet("Ronak Maheshwari");
console.log("Sum of 1 to 10 is", sum(10));
`,

  ruby: `def greet(name)
  puts "Hello, #{name}!"
end

def sum(n)
  (1..n).sum
end

greet("Ronak Maheshwari")
puts "Sum of 1 to 10 is #{sum(10)}"
`,

  go: `package main
import "fmt"

func greet(name string) {
    fmt.Printf("Hello, %s!\\n", name)
}

func sum(n int) int {
    total := 0
    for i := 1; i <= n; i++ {
        total += i
    }
    return total
}

func main() {
    greet("Ronak Maheshwari")
    fmt.Println("Sum of 1 to 10 is", sum(10))
}
`,

  php: `<?php
function greet($name) {
    echo "Hello, $name!\\n";
}

function sum($n) {
    return array_sum(range(1, $n));
}

greet("Ronak Maheshwari");
echo "Sum of 1 to 10 is " . sum(10);
?>
`,

  swift: `func greet(_ name: String) {
    print("Hello, \\(name)!")
}

func sum(_ n: Int) -> Int {
    return (1...n).reduce(0, +)
}

greet("Ronak Maheshwari")
print("Sum of 1 to 10 is \\(sum(10))")
`,

  kotlin: `fun greet(name: String) {
    println("Hello, \$name!")
}

fun sum(n: Int): Int {
    return (1..n).sum()
}

fun main() {
    greet("Ronak Maheshwari")
    println("Sum of 1 to 10 is \${sum(10)}")
}
`,
};

export function transpileTsToJs(tsCode: string): string {
  return ts.transpile(tsCode, { module: ts.ModuleKind.CommonJS });
}

export default Code_Snippet;
