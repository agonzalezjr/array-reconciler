import { Reconciler } from './Reconciler';
import chalk from 'chalk';
import now from 'performance-now';

const l1 = [5, 3, 4];
const l2 = [6, 4, 3, 10];

var start = now();
console.log(`Reconciling ${chalk.yellow(`[${l1}]`)} with ${chalk.yellow(`[${l2}]`)}:`);
let [r1, r2] = Reconciler.reconcile(l1, l2);
console.log(`In the first but not the second: ${r1}`);
console.log(`In the second but not the first: ${r2}`);
var end = now();
console.log(`${chalk.blue('That took: ')} ${(end - start).toFixed(3)} ms.`);
