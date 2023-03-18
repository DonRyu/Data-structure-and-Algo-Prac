class Node {
  constructor(element, next, prev) {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.size++;
  }

  pop() {
    if (this.size == 1) {
      this.head = undefined;
      this.tail = undefined;
      return;
    }
    let nodeToRemove = this.tail;
    this.tail = nodeToRemove.prev;
    this.tail.next = null;
    nodeToRemove.prev = undefined;
    this.size--;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = undefined;
    this.size--;
  }

  get(index) {
    let mid = Math.round(this.size / 2);
    let curr;
    if (index > this.size) return console.log("index>=this.size");
    if (index <= mid) {
      curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
    } else {
      curr = this.tail;
      for (let i = this.size; i >= index; i--) {
        curr = curr.prev;
      }
    }
    console.log(curr.element);
  }

  printList() {
    let curr = this.head;
    let result = "";
    while (curr) {
      result += `${curr.element} `;
      curr = curr.next;
    }
    console.log(result);
  }
}

let DLL = new DoublyLinkedList();
DLL.push(1);
DLL.push(2);
DLL.push('sibar');
DLL.push(4);
DLL.push(5);
DLL.push(6);

DLL.get(2);
// DLL.printList();
