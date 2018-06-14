var katzDeliLine = [];
var pos
function takeANumber (){
 
  pos += 1; 
  return `Welcome, you are number ${pos}.`;
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  console.log(line);
  var st ="The line is currently: "
  if(line.length > 0){
    for(var i = 0; i<line.length; i++){
      if(i === line.length-1){
        st +=`${i+1}. ${line[i]}`;
      }
      else{
        st +=`${i+1}. ${line[i]}, `;
      }
    }
    return st;
  }
  else{
    return ("The line is currently empty.")
    }
}
