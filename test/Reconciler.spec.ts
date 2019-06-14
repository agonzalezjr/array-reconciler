/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { expect } from 'chai';
import { Reconciler } from '../src/Reconciler';

describe('Reconciler', () => {
  it('Can reconcile empties', () => {
    expect(Reconciler.reconcile([], [])).to.deep.eq([[], []]);
  });

  it('Can reconcile', () => {
    expect(Reconciler.reconcile([5, 3, 4], [6, 4, 3, 10])).to.deep.eq([[5], [6, 10]]);
  });
});
