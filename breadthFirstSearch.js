const graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

const personIsSeller = (name) => name === 'peggy';

class Deque {
  constructor(queue = []) {
    this._queue = queue;
  }

  get queue() {
    return this._queue;
  }

  popLeft() {
    return this._queue.shift();
  }

  push(value) {
    if (typeof value === 'object') {
      this._queue = [...this._queue, ...value];
    } else {
      this._queue.push(value);
    }
  }
}

const breadthFirstSearch = (graph) => {
  const deque = new Deque(graph.you);
  let searched = [];

  while (deque.queue.length) {
    const person = deque.popLeft();

    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        return `${person} is mango seller!`;
      } else {
        deque.push(graph[person]);
        searched.push(person);
      }
    }
  }

  return false;
};

console.log(
  breadthFirstSearch(graph)
);
