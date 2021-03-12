var boardDOM = document.getElementById('board');
var panel = document.getElementById('panel');

const box = {

    height: 1,
    width: 1,
    color: "white"

}

const board = {

    height: 40,
    width: 40,
}




function buildGrid() {
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
}

buildGrid();

boxes = document.getElementsByClassName('box');

function mouseDown(element) {


    document.addEventListener("mousedown", function() {


        element.addEventListener("mouseover", function() {

            element.style.backgroundColor = panel.value;
            
        })

        isTrue = true;

        
    

});


}



for(i=0; i<boxes.length; i++) {
   setTimeout( mouseDown(boxes[i]), 1000);

 
}

document.addEventListener("mouseup", function() {clearTimeout(mouseDown(), false);
});
