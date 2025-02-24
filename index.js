#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import ora from "ora";
import inquirer from "inquirer";
import { execSync } from "child_process";
import { existsSync } from "fs";

const program = new Command();

program
  .version("1.0.0")
  .argument("<file-path>", "File Path")
  .action(async (fileName) => {
    const filePath = path.join(process.cwd(), fileName);

    if(!fs.existsSync(filePath)) {
      console.error(
        chalk.red(`Error: File ${fileName} not found in current working directory!!`)
      );

      process.exit(1);
    }

    

  });
