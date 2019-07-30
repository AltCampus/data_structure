A graph is a data structure where a *node* can have zero or more adjacent elements.

The connection between two nodes is called *edge*. Nodes can also be called *vertices*.

If the edges are bi-directional, then we have an undirected graph. But, if the edges have a direction, then we have a directed graph or di-graph for short.

A graph can have cycles which means that if you traverse through the node, you could get the same node more than once. 

When edges have values/cost assigned to them, we say we have a weighted graph.

Examples are: 
1. Airline Traffic
2. GPS Navigation

There are two primary ways of representing graph:

1. Adjacency list

Adjacency List is one of the most common ways to represent graphs. Each node has a list of all the nodes connected to it.

Graphs can be represented as an adjacency list using an Array (or HashMap) containing the nodes. Each of these node entries includes a list (array, linked list, set, etc.) that list its adjacent nodes.

For instance, in the graph above we have that a has a connection to b and also a self-loop to itself. In turn, b has a connection to c and so on:

a -> { a b }
b -> { c }
c -> { d }
d -> { b c }

2. Adjacency Matrix
  The adjacency matrix is one way of representing a graph using a two-dimensional array (NxN matrix). In the intersection of nodes, we add 1 (or other weight) if they are connected and 0 or - if they are not connected.

  Adjacent Matrix

    a b c d e
  a 1 1 - - -
  b - - 1 - -
  c - - - 1 -
  d - 1 1 - -




Additional resources
https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/