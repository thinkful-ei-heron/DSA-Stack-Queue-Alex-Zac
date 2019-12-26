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

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      node.previous = this.last;
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;
    this.first.previous = null;

    if (node === this.last) {
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

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
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
    if (this.top === null) {
      this.top = new _NodeStack(data, null);
      return this.top;
    }
    const node = new _NodeStack(data, this.top);
    this.top = node;
  }

  pop() {
    if (this.top === null) {
      return;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(queue) {
  return queue.first;
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
  }

  dequeue() {
    this._reverseElement();
    return this.stackTwo.pop();
  }
  peek() {
    this._reverseElement();
    return this.stackTwo.first;
  };

  _reverseElement() {
    if (isEmpty(this.stackTwo)) {
      while (!isEmpty(this.stackOne)) {
        this.stackTwo.push(this.stackOne.pop());
      }
    }
  }
}

function isEmpty(queue) {
  if (queue.first === null) {
    return true;
  } else return false;
}

function display(queue) {
  let currNode = queue.first;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function stacksDisplay(queue) {
  console.log(queue.stackOne.top.data);
  let currNode = queue.stackOne.top.data;
  while (currNode !== null) {
    console.log(currNode);
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
  // console.log(starTrekStacks.stackOne.top.data);
  stacksDisplay(starTrekStacks);
}

function squareDance(queue) {
  const men = new Queue();
  const women = new Queue();

  const pairs = new Queue();

  let personA, personB;
  while (personA = queue.dequeue()) {
    if (personA.gender === 'male') {
      if (personB = women.dequeue()) {
        pairs.enqueue([personA, personB]);
      }
      else {
        men.enqueue(personA);
      }
    }

    else if (personA.gender === 'female') {
      if (personB = men.dequeue()) {
        pairs.enqueue([personA, personB]);
      }
      else {
        women.enqueue(personA);
      }
    }
  }
  return pairs;
}

const dance = new Queue();
dance.enqueue({
  name: 'Jane',
  gender: 'female'
});
dance.enqueue({
  name: 'Frank',
  gender: 'male'
});
dance.enqueue({
  name: 'John',
  gender: 'male'
});
dance.enqueue({
  name: 'Sherlock',
  gender: 'male'
});
dance.enqueue({
  name: 'Madonna',
  gender: 'female'
});
dance.enqueue({
  name: 'David',
  gender: 'male'
});
dance.enqueue({
  name: 'Christopher',
  gender: 'male'
});
dance.enqueue({
  name: 'Beyonce',
  gender: 'female'
});

function bank() {
  const queue = new Queue();

  for (let i = 0; i < 20; i++) {
    console.log('Person joins line');
    queue.enqueue({
      person: null
    });

    const person = queue.dequeue();
    if (Math.random() < 0.25) {
      console.log(`Person sent to the back`);
      queue.enqueue(person);
    }
    else {
      console.log(`Person processed`);
    }
  }
}

// main();

// doubleMain();

// stacksMain();

// display(squareDance(dance));

bank();