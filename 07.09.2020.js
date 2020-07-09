// given a queens position (r_q, c_q) on a variable length chessboard (n)
// with an array of obstacles (obstacles) return an integer reflecting
// the quens total possible moves. 


function queensAttack(n, k, r_q, c_q, obstacles) {
    let attackCount = 0;
    const obbs = new Set();
    obstacles.forEach(v => obbs.add(v[0] + ':' + v[1]));
    
    const attacks = (rowDirection, colDirection) => {
        let row = r_q + rowDirection;
        let col = c_q + colDirection;
        while (row <= n && row > 0 && col <= n && col > 0){
            if (obbs.has(row + ':' + col)) return;
            attackCount++
            row += rowDirection;
            col += colDirection;
        }
    }
    attacks(-1, 0);
    attacks(-1, 1);
    attacks(-1, -1);
    attacks(1, -1);
    attacks(1, 0);
    attacks(1, 1);
    attacks(0, -1);
    attacks(0, 1);
    return attackCount
}