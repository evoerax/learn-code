/**
 * Token counts for zh/en appendix: multi-lang-token-compare.mdx
 * Encoding: cl100k_base (gpt-tokenizer default). Keep strings in sync with MDX code fences.
 */
import { countTokens } from 'gpt-tokenizer'

const snippets = {
    Ruby: `def sum_even_squares(nums)
  nums.select(&:even?).sum { |x| x * x }
end

puts sum_even_squares([1, 2, 3, 4, 5, 6])
`,
    Kotlin: `fun sumEvenSquares(nums: List<Int>) =
    nums.filter { it % 2 == 0 }.sumOf { it * it }

fun main() = println(sumEvenSquares(listOf(1, 2, 3, 4, 5, 6)))
`,
    Python: `def sum_even_squares(nums: list[int]) -> int:
    return sum(x * x for x in nums if x % 2 == 0)

if __name__ == "__main__":
    print(sum_even_squares([1, 2, 3, 4, 5, 6]))  # 56
`,
    JavaScript: `function sumEvenSquares(nums) {
  return nums.filter((x) => x % 2 === 0).reduce((s, x) => s + x * x, 0);
}
console.log(sumEvenSquares([1, 2, 3, 4, 5, 6])); // 56
`,
    TypeScript: `function sumEvenSquares(nums: number[]): number {
  return nums.filter((x) => x % 2 === 0).reduce((s, x) => s + x * x, 0);
}
console.log(sumEvenSquares([1, 2, 3, 4, 5, 6])); // 56
`,
    Rust: `fn sum_even_squares(nums: &[i32]) -> i32 {
    nums.iter().filter(|&&x| x % 2 == 0).map(|x| x * x).sum()
}

fn main() {
    println!("{}", sum_even_squares(&[1, 2, 3, 4, 5, 6]));
}
`,
    'C#': `using System;
using System.Linq;

class P {
    static int SumEvenSquares(int[] nums) =>
        nums.Where(x => x % 2 == 0).Sum(x => x * x);
    static void Main() =>
        Console.WriteLine(SumEvenSquares(new[] { 1, 2, 3, 4, 5, 6 }));
}
`,
    Cplusplus: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums{1, 2, 3, 4, 5, 6};
    int s = 0;
    for (int x : nums) {
        if (x % 2 == 0)
            s += x * x;
    }
    std::cout << s << '\\n';
}
`,
    Go: `package main

import "fmt"

func sumEvenSquares(nums []int) int {
    s := 0
    for _, x := range nums {
        if x%2 == 0 {
            s += x * x
        }
    }
    return s
}

func main() {
    fmt.Println(sumEvenSquares([]int{1, 2, 3, 4, 5, 6}))
}
`,
    Java: `import java.util.List;

public class Main {
    static int sumEvenSquares(List<Integer> nums) {
        return nums.stream().filter(x -> x % 2 == 0).mapToInt(x -> x * x).sum();
    }
    public static void main(String[] args) {
        System.out.println(sumEvenSquares(List.of(1, 2, 3, 4, 5, 6)));
    }
}
`,
}

for (const [lang, code] of Object.entries(snippets)) {
    const n = countTokens(code)
    console.log(lang, n)
}
