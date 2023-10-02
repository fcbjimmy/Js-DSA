class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //sort of like unshift
  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirstNode = this.first;
      this.first = newNode;
      newNode.next = oldFirstNode;
    }

    return ++this.length;
  }
  //sort if like shift
  pop() {
    if (this.size === 0) return null;
    let temp = this.first;
    // if (this.size === 1) {
    //   this.first = null;
    //   this.last = null;
    // } else {
    //   this.first = temp.next;
    // }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp.val;
  }
}
