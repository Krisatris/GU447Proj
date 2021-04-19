/*
    graph class for 447 network project
    based on an adjacency list graph representation
*/

class Node {
    constructor(destination, weight) {
        this.destination = destination;
        this.weight = weight;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(destination, weight) {
        let temp = new Node(destination, weight);
        temp.next = this.head;
        this.head = temp;
        return this;
    }
};

class Graph {

    constructor(vertexNum) {
        this.vertexNum = vertexNum;
        this.edgeNum = 0;
        this.adjacencyList = [];
        for(let i = 0; i < vertexNum; ++i) {
            let temp = new LinkedList();
            this.adjacencyList.push(temp);
        }
    }

    addEdge(source, destination, weight) {
        if(source < this.vertexNum && destination < this.vertexNum) {
            this.adjacencyList[source].insertAtHead(destination, weight);
            ++this.edgeNum;
        }
    }

    getEdge(source, destination) {
        let temp = this.adjacencyList[source].head;
        while(temp != null) {
            if(temp.destination == destination) {
                return temp.weight;
            }
            temp = temp.next;
        }
        return -1;
    }

    updateEdge(source, destination, weight) {
        let temp = this.adjacencyList[source].head;
        while(temp != null) {
            if(temp.destination == destination) {
                temp.weight = weight;
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    removeEdge(source, destination) {
        let temp = this.adjacencyList[source].head;
        let prev = temp;
        while(temp != null) {
            if(temp.destination == destination) {
                if(temp == head) {
                    head = temp.next;
                    --this.edgeNum;
                    return true;
                } else {
                    prev.next = temp.next;
                    --this.edgeNum;
                    return true;
                }
            }
            prev = temp;
            temp = temp.next;
        }
        return false;
    }

    dijkstra(source) {

    }
};

let g = new Graph(3);
g.addEdge(0, 1, 1);
g.addEdge(0, 2, 2);
g.addEdge(2, 1, 0);
console.log(g.updateEdge(2, 1, 3));
console.log(g.getEdge(2, 1));
console.log(g.adjacencyList[2].head);
console.log(g.updateEdge(1, 2, 0));
console.log(g.getEdge(0, 1));
console.log(g.adjacencyList[1].head);
console.log(g.removeEdge(0, 1));