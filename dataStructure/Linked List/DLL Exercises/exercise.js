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
  //get
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let midPoint = this.length / 2;
    let counter;
    let current;

    if (index <= midPoint) {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        current = this.tail.prev;
        counter--;
      }
    }
    return current;
  }
  //set
  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let foundNode = this.get(index);
    let prevNode = foundNode.prev;
    let nextNode = foundNode.next;
    prevNode.next = foundNode;
    nextNode.prev = foundNode;
    foundNode.prev = null;
    foundNode.next = null;
    this.length--;
    return foundNode;
  }
}

const doublyLinkedList = new DoublyLinkedList();

console.log(doublyLinkedList.push("hi"));
