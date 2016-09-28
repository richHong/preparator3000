'use strict'

const Graph = function() {
  this.nodes={}
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {
    value: node,
    edges: []
  };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var temp = this.nodes[node];
  delete this.nodes[node];
  return temp.value;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let result = false;
  this.nodes[fromNode].edges.forEach(edge => {
    if (edge === toNode){
      result = true;
    }
  })
  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.forEach((node, index, list) => {
    if(node === toNode){
      list.splice(index, 1);
    }
  })
  this.nodes[toNode].edges.forEach((node, index, list) => {
    if(node === fromNode){
      list.splice(index, 1);
    }
  })
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

module.exports = { Graph: Graph };