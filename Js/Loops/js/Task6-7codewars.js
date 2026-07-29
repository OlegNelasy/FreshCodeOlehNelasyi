function getRectangleString(width, height) {
  let result = ""; 
  
  for(let h = 0; h < height; h++) {
    let line = ""; 
    
    for(let w = 0; w < width; w++) {
      if(h === 0 || h === height - 1) {
        line += "*";
      } else {
        if(w === 0 || w === width - 1) {
          line += "*";
        } else {
          line += " ";
        }
      }
    }

    result += line + "\n";
  }

  return result; 
}


function drawACross(n) {
  if (n < 3) {
    return "Not possible to draw cross for grids less than 3x3!";
  }
  if (n % 2 === 0) {
    return "Centered cross not possible!";
  }

  let rows = [];
  for (let h = 0; h < n; h++) {
    let line = "";
    for (let w = 0; w < n; w++) {
      if (h === w || h + w === n - 1) {
        line += "x";
      } else {
        line += " ";
      }
    }
    rows.push(line);
  }
  return rows.join("\n");
}