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
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _NodeStack(data, null);
      return this.top;
    }
    const node = new _NodeStack(data, this.top);
    this.top = node;
  }
  
  pop() {
    if(this.top === null) {
      return;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

class StackQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(data) {
    this.stackOne.push(data);
    // if(this.stackOne.top !== null) {
    //   while(this.stackOne.top !== null) {
    //     this.stackTwo.push(this.stackOne.pop());
    //   }
    //   this.stackOne.push(data);

    //   this.last = this.stackOne.top;
      
    //   while(this.stackTwo.top !== null) {
    //     this.stackOne.push(this.stackTwo.pop());
    //   }
      
    //   this.stackOne.push(data);
    //   if(this.first === null) {
    //     this.first = this.stackOne.top;
    //   }
    // } else {
    //   this.stackOne.push(data);
    //   this.first = this.stackOne.top;
    //   this.last = this.stackOne.top;
    // }
  }

  dequeue() {
    // this.stackOne.pop();
    // this.first = this.stackOne.top;

    let poping = this.stackOne;
    let pushing = this.stackTwo;

    if(poping.top) {
      let deq = poping.pop();
      console.log('dequeing '+ deq + ' from stack');
      return deq;
    }

    while(pushing.top) {
      poping.push(pushing.pop());
    }
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

function stacksDisplay(queue) {
  let currNode = queue.first;
  while(currNode !== null) {
    console.log(currNode.data);
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

function stacksMain() {
  let starTrekStacks = new StackQueue();

  starTrekStacks.enqueue('Kirk');
  starTrekStacks.enqueue('Spock');
  starTrekStacks.enqueue('Uhura');
  starTrekStacks.enqueue('Sulu');
  starTrekStacks.enqueue('Checkov');
  // console.log(starTrekStacks.top.data);
  stacksDisplay(starTrekStacks);
}

// main();

// doubleMain();

stacksMain();