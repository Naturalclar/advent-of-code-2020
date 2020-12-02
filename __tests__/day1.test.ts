import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import * as Day1 from "../src/day1.ts";
import { readInput } from "../src/readInput.ts";

Deno.test("Part 2 Simple Case", () => {
  const result = Day1.part1(["1", "2019"]);
  assertEquals(result, 2019);
});

Deno.test("Part 1 Sample Input", async () => {
  const input = await readInput("./inputs/day1_input1.txt");
  const result = Day1.part1(input);
  assertEquals(result, 514579);
});

Deno.test("Part 1 Test Input", async () => {
  const input = await readInput("./inputs/day1_input2.txt");
  const result = Day1.part1(input);
  assertEquals(result, 712075);
});

Deno.test("Part 2 Simple Case", () => {
  const result = Day1.part2(["1", "2", "2017"]);
  assertEquals(result, 4034);
});

Deno.test("Part 2 Sample Input", async () => {
  const input = await readInput("./inputs/day1_input1.txt");
  const result = Day1.part2(input);
  assertEquals(result, 241861950);
});

Deno.test("Part 2 Test Input", async () => {
  const input = await readInput("./inputs/day1_input2.txt");
  const result = Day1.part2(input);
  assertEquals(result, 145245270);
});
