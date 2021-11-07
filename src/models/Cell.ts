import { Line } from "./Line";

export class Cell {
  private isAlive: boolean = false;
  private index: number;
  private lineIndex: number;
  private neighbors: Cell[] = [];
  private sprite: string = ((): string => {
    return this.isAlive ? "1" : "0";
  })();
  // private neighbors = (): Cell[] => {
  //   return getNeighbors();
  // };
  public toString = (): string => {
    return `${this.sprite}`;
  }
  public getSprite() {
    return this.sprite;
  }
  constructor(i: number, li: number) {
    if (i !== undefined) {
      this.index = i;
    } else {
      this.index = -1;
    }
    if (li !== undefined) {
      this.lineIndex = li;
    } else {
      this.lineIndex = -1;
    }
  }
}



