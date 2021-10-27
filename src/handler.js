'use strict';
const Responses = require('./response_api')
const deromanize= require('./Components/Deromanize/deromanize')
const add_romanize= require('./Components/Romanize/add_romanize')


module.exports.addition = async (event) => {
    console.log('event', event)
    let str1 = event.pathParameters.str1;
    let number1 = deromanize(str1);
    let str2 = event.pathParameters.str2;
    let number2 = deromanize(str2);

    //Checking for valid data and sending the fetched values for final result
    if ((number1 > 0) && (number2 > 0) && (number1 < 200) && (number2 < 200)) {
        let answer = add_romanize(number1, number2)
        return Responses._200({message: answer})
    }

    //possible errors following validity of input and range

    else if ((number1 == -1) || (number2 == -1)) {
        if ((number1 == -1) && (number2 > 0 && number2 < 200)) {
            return Responses._400({message: "First number is in wrong format"})
        } else if ((number2 == -1) && (number1 > 0 && number1 < 200)) {
            return Responses._400({message: "Second number is in wrong format"})
        } else if ((number1 == -1) && (number2 == -1)) {
            return Responses._400({message: "Both numbers in wrong format"})
        }
        else
        {
            return Responses._400({message: "Wrong format and out of range"})
        }


    } else {
        return Responses._400({message: "Inputs are out of range."})
    }
};








