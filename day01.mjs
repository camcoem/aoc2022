import { readFileSync } from "node:fs";

const elves = readFileSync("input1.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map(Number); // Parse each line into a number

function part1() {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  console.log(Math.max(...calories));
}

function part2() {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  calories.sort((a, b) => b - a);
  // sort in descending order, so it is possible to get the first three elves with more snacks

  console.log(
    calories.slice(0, 3).reduce((previous, current) => previous + current, 0)
  );
  // slice from index 0, 3 positions and then again the sum, already created in the first part1
}

part1(68442);
part2(204837);
