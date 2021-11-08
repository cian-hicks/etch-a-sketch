const container = document.querySelector("#grid");
console.log(container)
   
   let lengthGrid = 50;
   for (let i = 0; i < lengthGrid; i++) {
       const row = document.createElement('div');
       row.classList.add('row');
       for (let t = 0; t < lengthGrid; t++) {
            const gridSquares = document.createElement('div');
            gridSquares.classList.add('gridSquare');
            row.appendChild(gridSquares);           
       }
       container.appendChild(row);
   }

      container.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "red"
   })

    //dynamically set width of main-container
   document.getElementById("main-container").style.width = (lengthGrid * 18 + 'px')


 // TO DO: 
 // Add option for user to select the grid size. (drop down menu or slider)
 // adjust the size of the individual cells based on the size of the grid 
 // add rainbow effect for cells
 // style the sheet
 // make a reset button 

