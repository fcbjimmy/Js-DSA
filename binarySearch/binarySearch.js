class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }
  //insert
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    //Loop
    while (true) {
      if (val === current.val) return undefined;
      //<---------------------------->
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = this.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
      //<---------------------------->
    }
  }
  find(val) {
    if (!this.root) {
      return undefined;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return current;
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        }
        return undefined;
      } else {
        if (current.right) {
          current = current.right;
        }
        return undefined;
      }
    }
  }
}

//            10
//      5           13
//  2     7     11      16

const tree = new binarySearchTree();
