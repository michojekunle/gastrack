#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import ora from "ora";
import inquirer from "inquirer";
import { execSync } from "child_process";

const program = new Command();

program
  .version("1.0.0")
  .argument("<project-name>", "GasTrack")
  .action(async (projectName) => {});
