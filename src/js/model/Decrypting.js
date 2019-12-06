const fs = require('browserify-fs');



export const decryptText = (text, keyObj) => {

    console.log(text);
    console.log(keyObj);
    let decryptedString = '';
    var temp = '';
    let check = false;
    const keys = Object.keys(keyObj);
    const values = Object.values(keyObj);

    // console.log(text);

    // console.log(keys);
    // console.log(values);

    text.split('').forEach(element => {
        if (values.indexOf(element) != -1 && temp == '') {
            decryptedString = decryptedString + keys[values.indexOf(element)];
        }
        else{
            temp = temp + element;
            if (values.indexOf(temp) != -1) {
                decryptedString = decryptedString + keys[values.indexOf(temp)];
                temp = '';
            }
        }        
    });

    return decryptedString;
};


