var katzDeliLine = [];
var pos=0;
function takeANumber (line){
  
  pos += 1; 
  line.push(pos)
  return `Welcome, you are number ${pos}.`;
}

console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(currentLine(katzDeliLine))


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
