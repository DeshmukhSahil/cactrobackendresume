#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const text = chalk.cyan.bold("Sahil Deshmukh — Terminal Resume");

console.log(
  boxen(text, {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
  })
);
