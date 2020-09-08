class TrieNode {
    constructor() {
        this.next = new Map()
        this.isEnd = 0
    }

    insert(word) {
        let node = this
        for (let i = 0; i < word.length; i++) {
            if (!node.next.has(word[i])) {
                node.next.set(word[i], new TrieNode())
            }
            node = node.next.get(word[i])
        }
        node.isEnd++
    }

    most() {
        let max = 0
        let maxWord = null
        let dfs = (node, word) => {
            if (node.isEnd && node.isEnd > max) {
                max = node.isEnd
                maxWord = word
            }

            for (let [char, next] of node.next.entries()) {
                dfs(next, word + char)
            }
        }
        dfs(this, '')

        return [maxWord, max]
    }
}

function randomWord(length) {
    let s = ''
    for (let i = 0; i < length; i++) {
        s += String.fromCharCode(Math.random() * 26 + 97)
    }

    return s
}

let trie = new TrieNode()
for (let i = 0; i < 10000; i++) {
    trie.insert(randomWord(3))
}
console.log(trie)
console.log(trie.most())