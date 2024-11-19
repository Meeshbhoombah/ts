export class BinarySearchTree {

    value: number | null;
    count: number;
    left: BinarySearchTree | null;
    right: BinarySearchTree | null;

    constructor() {
        this.value = null;
        this.count = 0;
        this.left = null;
        this.right = null;
    }

    insert(x: number) {
        if (x == this.value) {
            this.count++; 
            return;
        }

        if (this.value == null) {
            this.value = x; 
            this.count++;
        }

        if (x < this.value) {
            if (this.left == null) {
                this.left = new BinarySearchTree(); 
                this.left.insert(x);
            } else {
                this.left.insert(x);
            }
        }

        if (x > this.value) {
            if (this.right == null) {
                this.right = new BinarySearchTree(); 
                this.right.insert(x);
            } else {
                this.right.insert(x);
            }            
        }
    }

    search(x: number): boolean {
        if (x == this.value) {
            return true;
        }

        if (x < this.value!) {
            if (this.left == null) {
                return false; 
            }

            return this.left.search(x);
        }

        if (x > this.value!) {
            if (this.right == null) {
                return false; 
            }

            return this.right.search(x);
        }

        return false;
    }

    fasterSearch(x: number): boolean {
        let current: BinarySearchTree | null = this;

        while (current != null) {
            if (x == current.value) {
                return true;
            }

            if (x < current.value!) {
                current = current.left; 
            } else {
                current = current.right; 
            }
        }

        return false;
    }

    inorderTraversal() {
        let current: BinarySearchTree | null = this;

        if (current != null) {
            inorderTraversal(this.left);
        }
    }

}


