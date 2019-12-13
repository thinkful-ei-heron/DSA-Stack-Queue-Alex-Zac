class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class _NodeDouble {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class QueueDouble {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if(this.first === null) {
      this.first = node;
    }

    if(this.last) {
      node.previous = this.last;
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;
    this.first.previous = null;

    if(node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if(this.first === null) {
      this.first = node;
    }

    if(this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if(node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

class _NodeQueueStack {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class _NodeStack {
  constructor(data, next) {
    this.data = next;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }
  
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

class StackQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.eqStack = new Stack();
    this.dqStack = new Stack();
  }

  //dqStack keeps track of what's first
  //eqStack keeps track of what's last

  enqueue(data) {
    this.eqStack.push(data);
    if(this.first === null) {
      this.first = this.eqStack.top;
    }
    
  }

  dequeue() {
    this.dqStack.pop();
  }
}

function peek(queue) {
  return queue.first;
}

function isEmpty(queue) {
  if(queue.first === null) {
    return true;
  } else return false;
}

function display(queue) {
  let currNode = queue.first;
  while(currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function main() {
  let starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  console.log(peek(starTrekQ));
  console.log(isEmpty(starTrekQ));
  display(starTrekQ);
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  display(starTrekQ);
}

function doubleMain() {
  let starTrekDQ = new QueueDouble();

  starTrekDQ.enqueue('Kirk');
  starTrekDQ.enqueue('Spock');
  starTrekDQ.enqueue('Uhura');
  starTrekDQ.enqueue('Sulu');
  starTrekDQ.enqueue('Checkov');

  console.log(peek(starTrekDQ));
  display(starTrekDQ);
  starTrekDQ.dequeue();
  starTrekDQ.dequeue();
  display(starTrekDQ);
}
main();

doubleMain();