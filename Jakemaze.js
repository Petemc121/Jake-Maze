view = {
    addJake: function(location) {
        location.setAttribute("class", "jake");
    },

    minusJake: function(location) {
        location.removeAttribute("class", "jake")
    }
}

 

    function arrowKeyDetect(e) {
                        
            e = e || window.event;

        if (e.keyCode == '38') {
            
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

     var maze = [
                 [ 0, 0, 0, 0, 0 ], 
                 [ 1, 1, 0, 1, 1 ],
                 [ 1, 1, 0, 0, 1 ], 
                 [ 0, 0, 1, 0, 1 ], 
                 [-1, 0, 0, 0, 1 ]
                                  ]


        function draw() {
                               
        var canvas =  document.getElementById("grid")
        var width = canvas.offsetWidth
        var boxSize = width/maze.length

        for (y = 0; y < maze.length; y++) {

            if (y === 0) {
                
            }
        }
        

        }

        draw()


        

     

      
                    

                    

