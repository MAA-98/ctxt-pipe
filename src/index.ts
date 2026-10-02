#!/usr/bin/env node

import { Command } from 'commander';
import { z } from 'zod';
import { create } from 'xmlbuilder2';

const program = new Command();

const optionsSchema = z.object({
  verbose: z.boolean().default(false),
});

program
  .name('contextd')
  .description(
    'Compose files, commands, and instructions into structured context for LLMs',
  )
  .version('0.1.0')
  .option('-v, --verbose', 'enable verbose output');

program.parse();

const options = optionsSchema.parse(program.opts());

if (options.verbose) {
  console.error('Verbose mode enabled');
}
