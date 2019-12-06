import Node from './Node.js';

export default class Tree {
    constructor() {
        this.root = null;
    }

    constructTree (queue) {
        while(queue.getLength() > 1) {
            this.root = new Node();

            this.root.left = queue.dequeue();
            this.root.right = queue.dequeue();
            this.root.data = this.root.left[1] + this.root.right[1];

            queue.enqueue(this.root, this.root.data);
        }
        return queue.dequeue();
    }
}