import { Line } from "./Line";
import { Cell } from "./Cell";

export class Grid {
    private cells: Cell[] = [];
    private lines: Line[] = [];

    private setCellNeighbors(c: Cell) {
        c.neighbors.push(lines[c.lineIndex][c.index + 1]);
    }

    function getNeighbors(): Cell[] {
        let neighbors: Cell[] = []
        neighbors.push(grid[lineIndex][this.index - 1]);
        neighbors.push(thisLine[this.index + 1]);
          // Determine neighbors:
          //  identify neighbors in this line (same array; left, right)
          //  identify neighbors in next line (next array; left, right, under)
          //  identify neighbors in previous line (prev array; left, right, over)
          //  left: [i - 1]; right: [i + 1]
          //  no over neighbor expected if line index is `0`
          //  no under neighbor expected if line index is array.length
          //  no right neighbor if current cell index is array.length
          //  no left neighbor if current cell index is 0
        return [];
      }
}