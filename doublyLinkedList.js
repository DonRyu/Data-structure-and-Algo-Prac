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
    let curr;
    if (this.head === null) {
      this.head = node;
      return
    }
    curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node
    // node.prev = prev;
    this.size += 1;
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
 DLL.printList();
