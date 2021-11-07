import { Cell } from "./Cell";

export class Line extends Array {
  private cells: Cell[] = [];
  private index: number;
  public toString = (): string => {
    let ret: string = "";
    for (let i = 0; i < this.cells.length; i++) {
      ret += this.cells[i].getSprite() + " ";
    }
    return ret;
  }
  constructor(i: number) {
    super();
    if (i !== undefined) {
      this.index = i;
    } else {
      this.index = -1;
    }
  }

  public addCell(cell: Cell): void {
    if (!this.cells && cell) {
      this.cells = [cell];
    } else if (this.cells && cell) {
      this.cells.push(cell);
    }
  }
}
