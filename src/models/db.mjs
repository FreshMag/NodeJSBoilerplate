// Remember to set type: module in package.json or use .mjs extension
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
export default class Db {

    constructor() {
    }
    async init() {
        // db.json file path
        const __dirname = dirname(fileURLToPath(import.meta.url))
        const file = join(__dirname, '/json/db.json')

        // Configure lowdb to write data to JSON file
        const adapter = new JSONFile(file)
        const defaultData = { posts: [] }
        this.db = new Low(adapter, defaultData)

        await this.db.read()

        // If you don't want to type db.data everytime, you can use destructuring assignment
        //const { posts } = this.db.data
        //posts.push('hello world')

        // Finally write db.data content to file
        //await this.db.write()
    }

    async getData() {
        try {
            return this.db.data;
        } catch (e) {
            console.log(e)
        }
    }
}
