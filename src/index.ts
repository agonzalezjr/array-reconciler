import { Adder } from './Adder';
import chalk from 'chalk';

console.log(`${chalk.blue('Hello world!')} I am debuggable in VSCode`);

console.log(`I can add 5 + 3 = ${Adder.add(5, 3)}!`);
