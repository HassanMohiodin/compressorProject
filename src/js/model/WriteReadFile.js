import { saveAs } from 'file-saver';

export const writeToFile = (val, bl) => {
    var b = new Blob([val], {type: "object"});

    if (bl === true) {
        saveAs(b, "Encrypted File.txt");
    }else{
        saveAs(b, "Key.txt");
    }
    
};
