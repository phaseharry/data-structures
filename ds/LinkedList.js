class ListNode {
    constructor(value) {
        this.val = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.insertBefore(this.head, node)
        }
    }

    setTail(node) {
        if (this.tail === null) {
            this.setHead(node)
        } else {
            this.insertAfter(this.tail, node)
        }
    }

    insertBefore(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return
        this.remove(nodeToInsert)
        nodeToInsert.prev = node.prev
        nodeToInsert.next = node

        if (node.prev === null) {
            this.head = nodeToInsert
        } else {
            node.prev.next = nodeToInsert
        }
        node.prev = nodeToInsert
    }

    insertAfter(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return
        this.remove(nodeToInsert)
        nodeToInsert.prev = node
        nodeToInsert.next = node.next
        if (node.next === null) {
            this.tail = nodeToInsert
        } else {
            node.next.prev = nodeToInsert
        }
        node.next = nodeToInsert
    }

    insertAtPosition(position, nodeToInsert) {
        if (position === 1) {
            this.setHead(nodeToInsert)
            return
        }

        let currentNode = this.head
        let currentPosition = 1
        while (currentNode !== null && currentPosition++ !== position) {
            currentNode = currentNode.next
        }
        if (currentNode) {
            this.insertBefore(currentNode, nodeToInsert)
        } else {
            this.setTail(nodeToInsert)
        }
    }

    removeNodesWithValue(value) {
        const queue = [this.head]
        while (queue.length) {
            const currentNode = queue.shift()
            if (currentNode.next) queue.push(currentNode.next)
            if (currentNode.value === value) {
                this.remove(currentNode)
            }
        }
    }

    remove(node) {
        if (node === this.head) this.head = node.next
        if (node === this.tail) this.tail = node.prev
        this.removeNodeBindings(node)
    }
    removeNodeBindings(node) {
        if (node.prev) node.prev.next = node.next
        if (node.next) node.next.prev = node.prev
        node.prev = null
        node.next = null
    }

    containsNodeWithValue(value) {
        let currentNode = this.head
        while (currentNode !== null && currentNode.value !== value) {
            currentNode = currentNode.next
        }
        return currentNode !== null
    }
}

module.exports = {
    ListNode,
    LinkedList
}