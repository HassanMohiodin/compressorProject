import {findFreq, getBinaryCodes, assignCodes, encrypt} from './model/encrypting.js';
import PriorityQueue from './model/PriorityQueue.js';
import Tree from './model/Tree.js';
import { writeToFile } from './model/WriteReadFile.js';
import { decryptText } from './model/Decrypting.js';

var str ;

var tr = document.querySelector('#text');

const enqueAndTree = val => {
    let queue = new PriorityQueue();
    queue.enqueueObj(findFreq(val));
    let tree = new Tree();
    let root = tree.constructTree(queue);
    assignCodes(root);
    let codes = getBinaryCodes(root);
    let encString = encrypt(val, codes);
    writeToFile(encString, true);
    writeToFile(JSON.stringify(codes), false);
};

document.querySelector('#encrypt-btn').addEventListener('click', () => {
    str = tr.value;
    enqueAndTree(tr.value);
    tr.value = '';
});

let input = document.querySelector('#compress');
input.addEventListener('change', (e) => {
    const reader = new FileReader();

    reader.onload = () => {
        str = reader.result;
        // console.log(str);
        enqueAndTree(str);
    };

   reader.readAsText(input.files[0]);

});

let output = document.querySelector('#decompress');

output.addEventListener('change', (w) => {
    var keyRead = '';
    var txt = '';
    if (output.files.length < 2) {
        alert('You must Enter Two files, key file and text file in order to decompress it.');
    }else{
        if(output.files[1].name.includes("Key")){
            const reader = new FileReader();

            reader.onload = () => {
                txt = reader.result;

                const reader2 = new FileReader();

                reader2.onload = () => {
                    keyRead = reader2.result;
                    writeToFile(decryptText(txt, JSON.parse(keyRead)), true);
                };
        
                reader2.readAsText(output.files[1]);
            };
        
            reader.readAsText(output.files[0]);
        }
        else if (output.files[0].name.includes("Key")) {
            const reader = new FileReader();

            reader.onload = () => {
                txt = reader.result;
                const reader2 = new FileReader();

                reader2.onload = () => {
                    keyRead = reader2.result;
                    writeToFile(decryptText(txt, JSON.parse(keyRead)), true);
                };
        
                reader2.readAsText(output.files[0]);
            };
        
            reader.readAsText(output.files[1]);
        }
        else{
            alert('The files are invalid :/ Please add files again.')
        }
    }
});





