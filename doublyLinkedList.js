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
    this.size = 0;
  }

  push(element) {
    let node = new Node(element);
    let prev, curr;
    if (this.head === null) {
      this.head = node;
    }

    curr = this.head;

    while (curr) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = node;
    // node.prev = prev;
    this.size += 1;
  }

  print() {
    let str;
    while (curr.next) {
      str = `${next.element} `;
      curr = curr.next;
    }
    console.log(str);
  }
}

let DLL = new DoublyLinkedList();
DLL.push(1);
DLL.push(2);
DLL.print();
