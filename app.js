'use strict';

const numberbox = document.getElementById("numberbox");
const slider = document.getElementById("slider");
const progressBar = document.getElementById("progress-bar");
const playButton = document.getElementById("play-button");

const queen = '<i class="fas fa-chess-queen" style="color:#000"></i>';

let n, speed, tempSpeed, q, Board = 0;

// Predefined number of arrangements for each n (1-indexed)
let array = [0, 2, 1, 1, 3, 11, 5, 41, 93];

// Board positions state
let pos = {};

// Set slider speed
speed = (100 - slider.value) * 10;
tempSpeed = speed;

slider.oninput = function () {
    progressBar.style.width = this.value + "%";
    speed = (100 - this.value) * 10;
};

class Queen {
    constructor() {
        this.position = Object.assign({}, pos);
        this.uuid = [];
    }

    nQueen = async () => {
        Board = 0;
        this.position[`${Board}`] = {};
        numberbox.disabled = true;
        await q.solveQueen(Board, 0, n);
        await q.clearColor(Board);
        numberbox.disabled = false;
    }

    isValid = async (board, r, col, n) => {
        const table = document.getElementById(`table-${this.uuid[board]}`);
        const currentRow = table.firstChild.childNodes[r];
        const currentColumn = currentRow.getElementsByTagName("td")[col];

        currentColumn.innerHTML = queen;
        await q.delay();

        // Check vertical column
        for (let i = r - 1; i >= 0; --i) {
            const cell = table.firstChild.childNodes[i].getElementsByTagName("td")[col];
            if (cell.innerHTML === queen) {
                currentColumn.innerHTML = "-";
                return false;
            }
            await q.delay();
        }

        // Check upper-left diagonal
        for (let i = r - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            const cell = table.firstChild.childNodes[i].getElementsByTagName("td")[j];
            if (cell.innerHTML === queen) {
                currentColumn.innerHTML = "-";
                return false;
            }
            await q.delay();
        }

        // Check upper-right diagonal
        for (let i = r - 1, j = col + 1; i >= 0 && j < n; --i, ++j) {
            const cell = table.firstChild.childNodes[i].getElementsByTagName("td")[j];
            if (cell.innerHTML === queen) {
                currentColumn.innerHTML = "-";
                return false;
            }
            await q.delay();
        }

        return true;
    }

    clearColor = async (board) => {
        const table = document.getElementById(`table-${this.uuid[board]}`);
        for (let i = 0; i < n; ++i) {
            const row = table.firstChild.childNodes[i];
            for (let j = 0; j < n; ++j) {
                const cell = row.getElementsByTagName("td")[j];
                cell.className = (i + j) % 2 === 0 ? "white-cell" : "black-cell";
            }
        }
    }

    delay = async () => {
        return new Promise(resolve => setTimeout(resolve, speed));
    }

    solveQueen = async (board, r, n) => {
        if (r === n) {
            ++Board;
            const table = document.getElementById(`table-${this.uuid[Board]}`);
            for (let i = 0; i < n; ++i) {
                const row = table.firstChild.childNodes[i];
                row.getElementsByTagName("td")[this.position[board][i]].innerHTML = queen;
            }
            this.position[Board] = { ...this.position[board] };
            return;
        }

        for (let i = 0; i < n; ++i) {
            await q.delay();
            await q.clearColor(board);
            if (await q.isValid(board, r, i, n)) {
                await q.delay();
                await q.clearColor(board);
                const table = document.getElementById(`table-${this.uuid[board]}`);
                const row = table.firstChild.childNodes[r];
                row.getElementsByTagName("td")[i].innerHTML = queen;

                this.position[board][r] = i;

                if (await q.solveQueen(board, r + 1, n)) {
                    await q.clearColor(board);
                }

                await q.delay();
                board = Board;
                const tableReset = document.getElementById(`table-${this.uuid[board]}`);
                const rowReset = tableReset.firstChild.childNodes[r];
                rowReset.getElementsByTagName("td")[i].innerHTML = "-";
                delete this.position[`${board}`][`${r}`];
            }
        }
    }
}

playButton.onclick = async function visualise() {
    const chessBoard = document.getElementById("n-queen-board");
    const arrangement = document.getElementById("queen-arrangement");

    n = parseInt(numberbox.value);
    q = new Queen();

    if (n > 8) {
        numberbox.value = "";
        alert("Queen value is too large");
        return;
    } else if (n < 1) {
        numberbox.value = "";
        alert("Queen value is too small");
        return;
    }

    chessBoard.innerHTML = '';
    arrangement.innerHTML = '';

    const para = document.createElement("p");
    para.className = "queen-info";
    para.innerHTML = `For ${n}x${n} board, ${array[n] - 1} arrangements are possible.`;
    arrangement.appendChild(para);

    for (let i = 0; i < array[n]; ++i) {
        q.uuid.push(Math.random());
        const div = document.createElement('div');
        const table = document.createElement('table');
        const header = document.createElement('h4');
        header.innerHTML = `Board ${i + 1}`;
        table.setAttribute("id", `table-${q.uuid[i]}`);
        div.appendChild(header);
        div.appendChild(table);
        chessBoard.appendChild(div);
    }

    for (let k = 0; k < array[n]; ++k) {
        const table = document.getElementById(`table-${q.uuid[k]}`);
        for (let i = 0; i < n; ++i) {
            const row = table.insertRow(i);
            for (let j = 0; j < n; ++j) {
                const col = row.insertCell(j);
                col.className = (i + j) % 2 === 0 ? "white-cell" : "black-cell";
                col.innerHTML = "-";
                col.style.border = "1px solid #373f51";
            }
        }
        await q.clearColor(k);
    }

    await q.nQueen();
};
