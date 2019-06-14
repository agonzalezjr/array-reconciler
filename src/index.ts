import { Reconciler } from './Reconciler';
import chalk from 'chalk';
import now from 'performance-now';

const l1 = [5, 3, 4];
const l2 = [6, 4, 3, 10];

var start = now();
console.log(Reconciler.reconcile(l1, l2));
var end = now();
console.log(`${chalk.blue('That took: ')} ${(end - start).toFixed(3)} ms.`);
