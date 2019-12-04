const { expect } = require('chai')
const { ListNode, LinkedList } = require('../ds/LinkedList')

const traverseList = headNode => {
    let currentNode = headNode
    const nodeVals = []
    while (currentNode !== null) {
        nodeVals.push(currentNode.value)
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
        expect(traverseList(list.head)).to.eql([23, 9, 5, 1, 6, 3, 7, 9, 2, 4, 2, 10])
        expect(list.head.value).to.equal(23)
        expect(list.tail.value).to.equal(10)
    })
    it('Test2', () => {
        nodes.forEach(node => {
            list.setTail(node)
        })
        expect(traverseList(list.head)).to.eql([10, 2, 4, 2, 9, 7, 3, 6, 1, 5, 9, 23])
        expect(list.head.value).to.equal(10)
        expect(list.tail.value).to.equal(23)
    })
    it('Test3', () => {
        nodes.forEach(node => {
            list.setHead(node)
        })
        list.removeNodesWithValue(10)
        list.removeNodesWithValue(9)
        list.removeNodesWithValue(2)
        list.insertBefore(list.head, new ListNode(101))
        list.setTail(new ListNode(21))

        expect(list.containsNodeWithValue(10)).to.be.false
        expect(list.containsNodeWithValue(9)).to.be.false
        expect(list.containsNodeWithValue(2)).to.be.false
        expect(list.containsNodeWithValue(101)).to.be.true
        expect(list.containsNodeWithValue(21)).to.be.true
        expect(traverseList(list.head)).to.eql([101, 23, 5, 1, 6, 3, 7, 4, 21])
        expect(list.head.value).to.equal(101)
        expect(list.tail.value).to.equal(21)
    })
})