// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// console.log(getBoxIndex(0, 0))
// console.log(board[1][0])
// "." means to ignore


// Rows are already present
// create rows
// create squares
// containsDupe to check if more that one of a number exists

// function: contiansDupe
// function: getBoxID

// for each row
    // check containsDupe(row)
    // for each number
        // add to columns array
        // add to boxes array (get box id)
        // () get box
// for each column
    // check contains dupe

const LEN_ROW = LEN_COLUMN = 9

function containsDupe(row) {
    newArr=[]
    let dupe=false
    row.forEach(num => {
        if (num !== '.' && newArr.find(newNum => newNum===num)) {
            dupe=true
            return
        }
        else if (num !== '.') newArr.push(num)
    })
    return dupe
}

function getBoxIndex(i, j) {
    const add_i = (Math.floor(i/3)+1)*3-2
    const add_j = Math.floor(j/3)
    return add_i + add_j
}

function create2dArray(n) {
    newArr=[]
    for(let i=0; i<n; i++) {
        newArr.push([])
    }
    return newArr
}

function isValidSudoku(board) {
    const board_columns=JSON.parse(JSON.stringify(board))
    const board_boxes=create2dArray(9)
    isValid = true
    for(let i=0; i<LEN_ROW; i++) {
        if (containsDupe(board[i])) {
            isValid = false
        }
        for(let j=0; j<LEN_COLUMN; j++) {
            num=board[i][j]
            board_columns[j][i] = num
            board_boxes[getBoxIndex(i, j)-1].push(num)
        }
    }
    board_columns.forEach(col => {
        if (containsDupe(col)) {
            isValid=false
        }
    })
    board_boxes.forEach(box => {
        if (containsDupe(box)) {
            isValid=false
        }
    })
    return isValid
}


    

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))