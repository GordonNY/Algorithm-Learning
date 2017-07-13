class LinkedList {
  constructor(head=null) {
    this._list = [head]
    this.head = head
    this.tail = head
    this._length = head ? 1 : 0
  }

  addNode(node) {
    if (this.tail) {
      this.tail.next = node
      node.previous = this.tail
      this._list.push(node)
      this.tail = node
    } else {
      this.head, this.tail = node
    }

    this._length ++
    return this
  }
}

class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.previous = null
  }
}
