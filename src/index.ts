import { Cell } from "./models/Cell";
import { Line } from "./models/Line";

function automate() {
  console.log("game of life\n");
}

function doGrid(width: number, height: number): Line[] {
    // 2D array of arrays
    let grid: Line[] = [];
    
    for (let i = 0; i < height; i++) {
      let line: Line = doLine(width, i);
      grid.push(line);
      console.log(line.toString());
    }

    // console.log(grid.toString());
    console.log(grid.length);
    return grid;
}

automate();
doGrid(15, 10);

/**
 * Creates new line.
 * @param w width of the line to be generated
 * @returns a new line
 */
function doLine(w: number, lineIndex: number): Line {
  let line: Line = new Line(lineIndex);  // lol cell-array sounds like "celery"
  for (let i = 0; i < w; i++) {
    //line.push("0 ");
    line.addCell(new Cell(i, lineIndex));
  }
  return line;
}

function updateCell(cell: number) {
    // find neighbors
    // if cell is alive and has < 2 neighbors, die
    // if cell is alive and has > 3 neighbors, die
    // if cell is alive and has 2 or 3 neighbors, persist
    // if cell is dead and has three neighbors, birth
}