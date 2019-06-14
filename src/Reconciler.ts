enum Algorithm {
  BruteForce,
}

export class Reconciler {
  public static reconcile(
    l1: number[],
    l2: number[],
    algorithm: Algorithm = Algorithm.BruteForce,
  ): [number[], number[]] {
    switch (algorithm) {
      case Algorithm.BruteForce:
        return Reconciler.bruteForce(l1, l2);
    }
  }

  private static bruteForce(l1: number[], l2: number[]): [number[], number[]] {
    return [Reconciler.difference(l1, l2), Reconciler.difference(l2, l1)];
  }

  private static difference(l1: number[], l2: number[]): number[] {
    return l1.filter((n: number): boolean => !l2.includes(n));
  }
}
