const { expect } = require('chai')
const { ListNode, LinkedList } = require('../ds/LinkedList')

const traverseList = headNode => {
    let currentNode = headNode
    const nodeVals = []
    while (currentNode !== null) {
        nodeVals.push(currentNode.val)
        currentNode = currentNode.next
    }
    return nodeVals
}

describe('Linked List', () => {
    const values = [10, 2, 4, 2, 9, 7, 3, 6, 1, 5, 9, 23]
    let list, nodes
    beforeEach(() => {
        list = new LinkedList()
        nodes = values.map(val => new ListNode(val))
    })
    it('Test1', () => {
        nodes.forEach(node => {
            list.setHead(node)
        })
        expect(traverseList(list.head)).eql([23, 9, 5, 1, 6, 3, 7, 9, 2, 4, 2, 10])
    })
    it('Test2', () => {
        nodes.forEach(node => {
            list.setTail(node)
        })
        expect(traverseList(list.head)).eql([10, 2, 4, 2, 9, 7, 3, 6, 1, 5, 9, 23])
    })
    it('Test3', () => {
    })
})