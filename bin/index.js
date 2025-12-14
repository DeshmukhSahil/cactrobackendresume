#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const h1 = (t) => chalk.bold.cyan(t);
const label = (t) => chalk.yellow.bold(t);

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

console.log(
  boxen(header, {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
  })
);
