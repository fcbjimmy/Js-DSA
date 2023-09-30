class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      poppedNode.previous = null;
      this.tail.next = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.previous = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let midPoint = Math.floor(this.length / 2);
    let counter;
    let current;

    //from the head
    if (index <= midPoint) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      //from the tail
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.previous;
        counter--;
      }
    }
    return current;
  }
  set(index, value) {
    let node = this.get(index);
    if (node !== null) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    //1 <-> 2 <-> 3 <-> 5
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let afterNode = prevNode.next;
    prevNode.next = newNode;
    newNode.previous = prevNode;
    newNode.next = afterNode;
    afterNode.previous = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    let nextNode = removedNode.next;
    let prevNode = removedNode.previous;
    prevNode.next = nextNode;
    nextNode.previous = prevNode;
    removedNode.next = null;
    removedNode.previous = null;
    this.length--;
    return removedNode;
  }
}

//  1 <-> 2 <-> 3 <-> 5 <-> 4
//  <-    <-
