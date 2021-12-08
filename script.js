
const container = document.querySelector("#grid");
    // hardcoded grid size
   let numberOfCells = 100;
   // with cell size need to account for the border size of the cells
   let cellSizeWidth = ((900 / numberOfCells) - (3));
   let cellSizeHeight = ((900 / numberOfCells));


   for (let i = 0; i < numberOfCells; i++) {
       const row = document.createElement('div');
       row.classList.add('row');
       row.style.height = (cellSizeHeight) + "px";
       row.style.width = (cellSizeWidth) + "px";
       for (let t = 0; t < numberOfCells; t++) {
            const gridSquares = document.createElement('div');
            gridSquares.classList.add('gridSquare');
            gridSquares.style.height = cellSizeHeight + "px";
            gridSquares.style.width = cellSizeWidth + "px";
            row.appendChild(gridSquares);              
       }
       container.appendChild(row);
   }
   
   //for rainbow set this event listener to the rainbow function.
      container.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "blue"
})

    function gridSize(){
        let gs = prompt("Enter the grid size (1-100)")
        if(gs < 0 || gs > 100){
            alert("ERROR: Enter a number between 1 - 100")
        }else{
            numberOfCells = gs
            console.log("num cells: " + numberOfCells)
            return numberOfCells
        }
        
        let cellSize = 960 / gs;
        console.log(cellSize)
    }
    
    function rainbow(){

    }

 // TO DO: 
 // Add option for user to select the grid size. (drop down menu or slider)
 // adjust the size of the individual cells based on the size of the grid 
 // add rainbow effect for cells
 // style the sheet
 // make a reset button 

