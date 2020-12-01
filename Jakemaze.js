    var view = {
        addJake: function(location) {
            location.setAttribute("class", "jake");
        },

        minusJake: function(location) {
            location.removeAttribute("class", "jake")
        }
    }

    var mazeWidth = 10;
    var mazeHeight = 10;

    function createBlankMaze() {

        var rowIndex, colIndex;
       

        var table = document.createElement("table");
        var tbody = document.createElement("tbody");



        for (rowIndex = 1; rowIndex <= mazeHeight; rowIndex++) {
            var row = document.createElement("tr");
        

            for (colIndex = 1; colIndex <= mazeWidth; colIndex++) {
                
                var col = document.createElement("td");
                if (rowIndex == 1 && colIndex == 1){

                    col.style.backgroundColor = "rgb(244,0,0)";
                    col.setAttribute("type", "start");
                } else if (rowIndex == mazeHeight && colIndex == mazeWidth) {

                    col.style.backgroundColor = "rgb(0,244,0)";
                    col.setAttribute("type", "finish");

                } else {
                    col.style.backgroundColor = "rgb(255,255,255)";

                }

                col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);

                row.appendChild(col);

            }
    
            tbody.appendChild(row);
    
        }
        
        table.appendChild(tbody);
    
        document.getElementById("maze_container").appendChild(table);
    
    }

    createBlankMaze();
            




 

    function arrowKeyDetect(e) {
                        
            e = e || window.event;

        if (e.keyCode == '38') {
            alert("up!")
        }

        else if (e.keyCode == '40') {
            alert("down!")

        }
        else if (e.keyCode == '37') {
            alert("Left")

        }
        else if (e.keyCode == '39') {
            alert("right!")

        }
                    }

        // 1 = wall, 0 = free space, -1 = goal

     document.onkeydown = arrowKeyDetect;

     


        

     

      
                    

                    

