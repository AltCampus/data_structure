const L = require('./index');
const PriorityQueue = L.PriorityQueue;
const Node = L.Node;

test('PriorityQueue is a class', () => {
  expect(typeof PriorityQueue.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test('has properties "data" and "priority"', () => {
    const node = new Node('abc', 3);
    expect(node.data).toEqual('abc');
    expect(node.priority).toEqual(3);
  });
});

test('can add elements to a PriorityQueue', () => {
  const q = new PriorityQueue();
  expect(() => {
    q.enqueue('abc', 2);
  }).not.toThrow();
});

test('can remove elements according to priority from a queue', () => {
  const q = new PriorityQueue();
  expect(() => {
    q.enqueue('abc', 2);
    q.dequeue();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const q = new PriorityQueue();
  q.enqueue('abc', 2);
  q.enqueue('xyz', 5);
  q.enqueue('pqr', 3);
  expect(q.dequeue()).toEqual('xyz');
  expect(q.dequeue()).toEqual('pqr');
  expect(q.dequeue()).toEqual('abc');
  expect(q.dequeue()).toEqual(undefined);
});