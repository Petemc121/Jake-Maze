var boardDOM = document.getElementById('board');

const box = {

    height: 1,
    width: 1,
    color: "white"

}

const board = {

    height: 40,
    width: 40,
}

 for (let i = 0; i < board.width; i++) {

    row = document.createElement('div');
    row.setAttribute('class', 'row' );
    boxX = document.createElement('div');
    boxX.setAttribute("id", "box" + i);
    boxX.setAttribute("class", "box");

    boardDOM.appendChild(row)
    row.appendChild(boxX);

   for (let j = 0; j < board.height; j++ ) {

    boxY = document.createElement('div');
    boxY.setAttribute('id', 'box' + i + j );
    boxY.setAttribute("class", "box");

    row.appendChild(boxY);


   }
 }