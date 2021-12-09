function  multiply(num1 , num2){
    if(num2 !=undefined){
        return console.log(num1*num2)
    }
    
    return function doMultiply(num2){
        return num1*num2
    }
}
multiply(4,5);
multiply(3,3);

const double = multiply(2)
double(5)
double(11)

