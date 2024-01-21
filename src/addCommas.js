function addCommas(num) {
    if (isNaN(num))  {
        return "Must be a Number!"
    }
    let number = num.toString();
    let string = "";
    let negative = "";
    for (let i = 0; i < number.length; i++) {
        if (number.includes("-")) {
              negative += number[i];
            number = number.substring(1); 
            
          
            }
        if (i > 0 && i % 3 === 0) {
            string = "," + string;
        }
        string = number[number.length - 1 - i] + string;
    }
    return negative + string;
}
//     const numberArray = Array.from(number);
//    }


module.exports = addCommas;