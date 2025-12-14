#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const h1 = (t) => chalk.bold.cyan(t);
const label = (t) => chalk.yellow.bold(t);
const h2 = (t) => chalk.bold.yellow(t);

const header = [
  h1("SAHIL DESHMUKH"),
  "Full Stack Developer | MERN + MEAN | Java + Spring Boot | DevOps",
  "",
  `${label("Phone:")} 7020676394`,
  `${label("Email:")} sahildeshmukh2898@gmail.com`,
  `${label("Location:")} Khamgaon, Maharashtra`,
  `${label("LinkedIn:")} https://linkedin.com/in/deshmukhsahil`,
  `${label("GitHub:")} https://github.com/DeshmukhSahil`,
].join("\n");

const summary = [
  "",
  h2("Summary"),
  "",
  "Full-stack developer with 2+ years of experience building real-world products.",
  "Strong background in MERN stack, real-time systems, cloud infrastructure,",
  "and modern React-based user experiences.",
].join("\n");

const output = [header, summary].join("\n");

console.log(
  boxen(output, {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
  })
);
