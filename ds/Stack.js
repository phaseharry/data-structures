class Node {
  constructor(val) {
    this.val = val
    this.prev = null
  }
}

class Stack {
  constructor() {
    this.size = 0
    this.last = null
  }

  peek() {
    return this.last
  }

  push(val) {
    const newNode = new Node(val)
    newNode.prev = this.last
    this.last = newNode
    this.size++
  }

  pop() {
    if (this.isEmpty()) throw new Error('There are no elements to pop in this stack')
    const temp = this.last.prev
    this.last.prev = null
    this.last = temp
    this.size--
  }

  isEmpty() {
    return this.size === 0 && this.last === null
  }

  search(val) {
    let currentNode = this.last
    let positionIdx = size - 1
    while (currentNode !== null) {
      if (currentNode.val === val) return positionIdx
      currentNode = currentNode.prev
    }
    return -1
  }
}

module.exports = {
  Node,
  Stack
}