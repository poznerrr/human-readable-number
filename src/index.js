module.exports = function toReadable (number) {
  let newnum;
  if (number==0) {
      return 'zero';
  }else if(number < 20){
    return less20(number);
  } else if (number < 100) {
    return (less100(number)).trim();
  } else {
    return ((less20(Math.trunc(number/100)) + ' hundred ' + less100(number%100))).trim();
    }
}

function less100(number){
    if (number<20){
        return less20(number);
    } else {
        let newnum;
        newnum = tens(Math.trunc(number/10)) +' '+less20(number%10);
        return newnum;
    }

}
function less20(number){
    let newnum;
    switch (number)
    {
        case 1:
            newnum="one";
            break;
        case 2:
            newnum="two";
            break;
        case 3:
            newnum="three";
            break;
        case 4:
            newnum="four";
            break;

        case 5:
            newnum="five";
            break;
        case 6:
            newnum="six";
            break;
        case 7:
            newnum="seven";
            break;
        case 8:
            newnum="eight";
            break;
            
        case 9:
            newnum="nine";
            break;
        case 10:
            newnum="ten";
            break;
        case 11:
            newnum="eleven";
            break;
        case 12:
            newnum="twelve";
            break;
        case 13:
            newnum="thirteen";
            break;
        case 14:
            newnum="fourteen";
            break;
        case 15:
            newnum="fifteen";
            break;
        case 16:
            newnum="sixteen";
            break;
        case 17:
            newnum="seventeen";
            break;
        case 18:
            newnum="eighteen";
            break;
        case 19:
            newnum="nineteen";
            break;
        case 0:
            newnum='';
            break;
    }
    return newnum;

}
function tens(number){
    let newnum;
    switch(number)
    {
        case 2: 
            newnum='twenty';
            break;
        
        case 3: 
            newnum='thirty';
            break;
        
        case 4: 
            newnum='forty';
            break;
        
        case 5: 
            newnum='fifty';
            break;
        
        case 6: 
            newnum='sixty';
            break;
        
        case 7: 
            newnum='seventy';
            break;
        
        case 8: 
            newnum='eighty';
            break;
        
        case 9: 
            newnum='ninety';
            break;
        
       
    }
    return newnum;
}
