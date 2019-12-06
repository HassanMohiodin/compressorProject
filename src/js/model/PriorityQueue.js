export default class PriorityQueue {
    constructor () {
        this.priorityQueue = [];
    }

    inSequence () {
        this.priorityQueue.sort(function(a, b) {
            return a[1] - b[1];
        });
    }

    enqueueObj (obj) {
        for (let element in obj) {
            this.priorityQueue.push([element, obj[element]]);
        }
        
        this.inSequence();

        return this.priorityQueue;
    }

    enqueue (data,key) {
        this.priorityQueue.push([data, key]);

        this.inSequence();

        return this.priorityQueue;
    }

    printQueue () {
        if (this.priorityQueue.length <= 0) {
            console.log(`the priority queue is empty.`);
        }else {
            this.priorityQueue.forEach((val) => {
                console.log(val);
            });
        }
    }

    dequeue () {
        if (this.priorityQueue.length <= 0) {
            console.log(`priority queue is empty`);
        }else{
            return this.priorityQueue.shift();
        }

    }

    getQueue() {
        return this.priorityQueue;
    }

    getLength () {
        return this.priorityQueue.length;
    }

    isEmpty() {
        return this.priorityQueue.length < 1;
    }
}

