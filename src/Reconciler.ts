export enum Algorithm {
  BruteForce,
  Sets,
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
      case Algorithm.Sets:
        return Reconciler.sets(l1, l2);
    }
  }

  private static bruteForce(l1: number[], l2: number[]): [number[], number[]] {
    let difference = function(l1: number[], l2: number[]): number[] {
      return l1.filter((n: number): boolean => !l2.includes(n));
    };
    return [difference(l1, l2), difference(l2, l1)];
  }

  private static sets(l1: number[], l2: number[]): [number[], number[]] {
    let s1 = new Set(l1);
    let s2 = new Set(l2);
    s1.forEach(
      (n): void => {
        if (s2.has(n)) {
          s2.delete(n);
          s1.delete(n);
        }
      },
    );
    return [Array.from(s1), Array.from(s2)];
  }
}
