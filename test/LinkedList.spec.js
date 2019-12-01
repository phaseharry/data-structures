const { expect } = require('chai')
const { ListNode, LinkedList } = require('../ds/LinkedList')

describe('Linked List', () => {
    const values = [10, 2, 4, 2, 9, 7, 3, 6, 1, 5, 9, 23]
    let list, nodes
    beforeEach(() => {
        list = new LinkedList()
        nodes = values.map(val => new ListNode(val))
    })
})