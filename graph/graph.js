// create a node class with properties data and adjacents.
// add methods on node for adding adjacents, removing adjacents, getting adjacents and  
// checking for adjacent nodes
class Node {
  constructor(val) {
    this.value = val;
    this.adjacents = [];
  }

  addAdjacent(node) {

  }

  removeAdjacents(node) {
    
  }

  getAdjacents() {

  }

  isAdjacent(node) {

  }
}

// Add Graph class with nodes as properties.
// create methos for adding vertex
// create method for adding edges
// create method for removing edges and removing vertex
// add bfs and dfs traversal method 

class Graph {
  constructor(edgeDirection = Graph.UNDIRECTED) {
    this.nodes = {};
    this.edgeDirection = edgeDirection;
  }

  addVertex(val) {
    
  }

  addEdge(source, dest) {
    
  }

  removeVertex(val) {
    
  }

  removeEdge(source, dest) {
   
  }

  bfs(first) {
    
  }

  dfs(first) {
    
  }

  
}

Graph.UNDIRECTED = Symbol('directed graph');
Graph.DIRECTED = Symbol('undirected graph');


const graph = new Graph();
// g1.addVertex(1);
// g1.addVertex(2);
// console.log(g1);
// g1.addEdge(1, 2)
// g1.removeVertex(2);
// g1.addVertex(3);
// g1.addEdge(1, 2);
// g1.addEdge(1, 3);
// g1.removeEdge(1, 3);
// g1.removeEdge(1, 2);
var [first, second]  = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 6);
graph.addEdge(3, 7);
graph.addEdge(4, 8);
graph.addEdge(5, 9);
graph.addEdge(6, 10);
// graph.bfs();
// console.log(graph);
// console.log(first, "after graph")
// console.log(first);
console.log(graph.bfs(first));
console.log(graph.dfs(first));



