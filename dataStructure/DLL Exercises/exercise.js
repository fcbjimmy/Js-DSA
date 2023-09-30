class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Ex 26
  //push
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let prevNode = this.tail;
      prevNode.next = newNode;
      newNode.prev = prevNode;
    }
    this.length++;
    return this;
  }
  //pop
  pop() {
    if (this.tail === null) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prevNode = poppedNode.prev;
      prevNode.next = null;
      this.tail = prevNode;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  //unshift
  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      ``;
    }
    this.length++;
    return this;
  }
  //shift
  shift() {
    if (this.head === null) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
}

const doublyLinkedList = new DoublyLinkedList();

console.log(doublyLinkedList.push("hi"));
