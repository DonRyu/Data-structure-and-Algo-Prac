class Node {
  // 노드는 값을 담고 있는 엘리먼트가 있고, 다음 값을 가르키는 포인터가 있다.
  constructor(next, element) {
    this.next = next;
    this.element = element;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //헤드가 없는 경우=> 해당 노드에 벨류를 넣고 해드는 그게 된다
  //헤드가 있는 경우=> 해당 노드에 벨류를 넣고 그게 현재 해드를 가르키게 하고 해드를 옮긴다
  add(value) {
    let node = new Node();
    if (this.head === null) {
      node.element = value;
      this.head = node;
    } else {
      node.element = value;
      node.next = this.head;
      this.head = node;
    }
    this.size += 1;
  }

  insert(index) {}

  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

const LL = new LinkedList();

LL.add(1);
LL.add(2);
LL.add(3);
LL.add(4);
LL.add(5);

LL.printList();
