export class Cell {
  private isAlive: boolean = false;
  private index: number;
  private sprite = ((): string => {
    return this.isAlive ? "1" : "0";
  })();
  private neighbors = (): Cell[] => {
    return getNeighbors();
  };
  public toString = (): string => {
    return `${this.sprite}`;
  }
  public getSprite() {
    return this.sprite;
  }
  constructor(i: number) {
    if (i !== undefined) {
      this.index = i;
    } else {
      this.index = -1;
    }
  }
}

function getNeighbors(): Cell[] {
        // Determine neighbors:
    //  identify neighbors in this line (same array; left, right)
    //  identify neighbors in next line (next array; left, right, under)
    //  identify neighbors in previous line (prev array; left, right, over)
    //  left: [i - 1]; right: [i + 1]
    //  no over neighbor expected if line index is `0`
    //  no under neighbor expected if line index is array.length
    //  no right neighbor if current cell index is array.length
    //  no left neighbor if current cell index is 0
  return [new Cell(0)];
}

