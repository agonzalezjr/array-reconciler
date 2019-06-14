/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { expect } from 'chai';
import { Reconciler, Algorithm } from '../src/Reconciler';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// creates an array of 100,000 unique numbers in random order
function randomUniqueArray(size: number): number[] {
  let a: number[] = [];
  for (let n = 0; n < size; n++) {
    a.push(n);
  }
  shuffleArray(a);
  return a;
}

const n = 100000;
const a = randomUniqueArray(n);
a.push(-1);
const b = randomUniqueArray(n + 1);

describe('Reconciler', () => {
  it('Can reconcile empties', () => {
    expect(Reconciler.reconcile([], [])).to.deep.eq([[], []]);
  });

  it('Can reconcile', () => {
    expect(Reconciler.reconcile([5, 3, 4], [6, 4, 3, 10])).to.deep.eq([[5], [6, 10]]);
  });

  it('Can reconcile long ones - BruteForce', () => {
    expect(Reconciler.reconcile(a, b)).to.deep.eq([[-1], [n]]);
  });

  it('Can reconcile long ones - Sets', () => {
    expect(Reconciler.reconcile(a, b, Algorithm.Sets)).to.deep.eq([[-1], [n]]);
  });
});
