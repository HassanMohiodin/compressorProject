import Tree from './Tree.js';
import PriorityQueue from './PriorityQueue.js';
import Stack from './Stack.js';


// Finding the Frequency of characters


export const findFreq = (text) => {
    var freq = {};

    text.split('').forEach((chr) => {
        if(!(chr in freq)){ freq[chr] = 0; }

        freq[chr]++;
    });

    return freq;
};


// Assigning Code

export const assignCodes = (treeRoot) => {
    if (treeRoot[0].left != null && treeRoot[0].left != null) {
        treeRoot[0].left.value = `0`;
        treeRoot[0].right.value = `1`;
        assignCodeToEdges(treeRoot[0].left);
        assignCodeToEdges(treeRoot[0].right);
    }
};


export const assignCodeToEdges = (treeRoot) => {
    if (treeRoot[0].left != null && treeRoot[0].left != null) {
        treeRoot[0].left.value = (`${treeRoot.value}0`);
        treeRoot[0].right.value = (`${treeRoot.value}1`);
        assignCodeToEdges(treeRoot[0].left);
        assignCodeToEdges(treeRoot[0].right);
    }
};


// Finding Codes for Letters


// export const binaryCodes = (tree) => {
//     let temp;
//     let dataArray = [];
//     let stack = new Stack();

//     stack.push(tree[0]);

//     while (!stack.isEmpty()) {
//         temp = stack.pop();

//         if (typeof(temp[0]) != 'object') {
//             console.log(`i came to was not object`);
//             dataArray.push([temp[0], temp.value]);
//         }else{
//             if (temp[0] != null) {
//                 stack.push(temp[0].left);
//             }
//             else if (temp[0] != null) {
//                 stack.push(temp[0].right);
//             }
//         }
        
//     }
//     return dataArray;
// };

// const dataArray = [];
var dataObj = {};

export const binaryCodes = (tree) => {
    if (tree[0].left != null && tree[0].right != null) {
        binaryCodes(tree[0].left);
        binaryCodes(tree[0].right);

        if (typeof(tree[0].left[0]) == 'string') {
            dataObj[tree[0].left[0]] = tree[0].left.value;
            // dataArray.push(tree[0].left);
        }if (typeof(tree[0].right[0]) == 'string') {
            dataObj[tree[0].right[0]] = tree[0].right.value;
            // dataArray.push(tree[0].right);
        }
        // console.log(tree[0].left);
        // console.log(tree[0].right);
    }
    
};

export const getBinaryCodes = (dstree) => {
    dataObj = {};
    binaryCodes(dstree);
    return dataObj;
};



export const encrypt = (text, keyObj) => {
    let strTemp = '';
    text.split('').forEach((ch) => {
        strTemp = strTemp + keyObj[ch];
    });

    return strTemp;
};


 // Testing




// export default {findFreq, createQueue};
// export default findFreq;