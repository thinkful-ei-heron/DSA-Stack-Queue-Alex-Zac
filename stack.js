class _Node {
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

function peek(stack) {
  if (stack.top === null) return null;
  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  else return false;
}

function display(stack) {
  let currNode = stack.top;
  while (currNode !== null) {
    console.log(currNode.data)
    currNode = currNode.next;
  }
}

function palindrome(s) {
  let palStack = new Stack();
  let revStack = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  for (let i = 0; i < s.length; i++) {
    revStack.push(s[s.length - (i + 1)]);
    palStack.push(s[i]);
    if (palStack.pop() !== revStack.pop()) {
      return false;
    }
  }
  return true;
}

function matchingParen(input) {
  let stack = new Stack();
  let expected = new Stack();
  let parenSpot = 0;
  let expectedEndQuote = null;
  const quoteChar = [`'`, `"`];
  const opening = ['(', '[', '{'];
  const closing = [')', ']', '}'];
  for (let i = 0; i < input.length; i++) {
    if (quoteChar.includes(input[i]) || expectedEndQuote !== null) {
      if (expectedEndQuote === null) {
        expectedEndQuote = input[i];
      } else if (input[i] === expectedEndQuote) {
        expectedEndQuote = null;
      }
    } else {
      if (closing.includes(input[i]) && stack.top === null) {
        console.log(`You are missing a ( at ${i}`);
        return;
      }
      if (opening.includes(input[i])) {
        parenSpot = i;
        stack.push(input[i]);
        expected.push(closing[opening.indexOf(input[i])]);
      }
      if (expected.top && closing.includes(input[i]) && input[i] !== expected.top.data) {
        console.log(`Incorrect closing bracket at ${i}`);
        console.log(`expecting: ${expected.top.data}`);
        console.log(`found: ${input[i]}`);
        return;
      } else if (closing.includes(input[i])) {
        stack.pop();
        expected.pop();
      }
    }

  }
  if (expectedEndQuote) {
    console.log(`You did not close a ${expectedEndQuote}`);
  } else {
    if (stack.top) {
      console.log(`You are missing a ) for the opening parentheses at ${parenSpot}`);
    } else console.log('Everything is closed correctly');
  }

}



//1 2 3 4 5
function sortStack(stack) {
  let sortedStack = new Stack();
  while(!isEmpty(stack)) {
    let temp = stack.pop();
    while (!isEmpty(sortedStack) && (peek(sortedStack) > temp)) {
      stack.push(sortedStack.pop());
    }
    sortedStack.push(temp);
  }
  while (!isEmpty(sortedStack)) {
    stack.push(sortedStack.pop());
  }

  // display(sortedStack);
  return sortedStack;
}

function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(peek(starTrek));
  console.log(isEmpty(starTrek));
  display(starTrek); //first item in stack is Kirk
  starTrek.pop();
  starTrek.pop();
  display(starTrek);
}

// main();
// console.log(palindrome('dad'));
// console.log(palindrome('A man, a plan, a canal: Panama'));
// console.log(palindrome('1001'));
// console.log(palindrome('Tauhida'));

// matchingParen('(2 + 2)');
// matchingParen(')( ))');
// matchingParen('((())');
// matchingParen('{()]');

// matchingParen(`'()'`);
// matchingParen(`'(`);
// matchingParen(`"''())((()()()))"'`);

function mainSort() {
  let stack = new Stack();
  stack.push(5);
  stack.push(3);
  stack.push(2);
  stack.push(4);
  stack.push(1);
  sortStack(stack);
  display(stack);
}

function secondSort() {
  let stack = new Stack();
  stack.push(1);
  stack.push(3);
  stack.push(5);
  stack.push(4);
  stack.push(2);
  sortStack(stack);
  display(stack);
}

// mainSort();
// secondSort();