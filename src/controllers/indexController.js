import {dirname} from "node:path";
import {fileURLToPath} from "node:url";
import {join} from "node:path";
import {db} from "../../index.js";

export async function showData(req, res) {
    db.getData().then(data => res.json(data))
}


export async function showMainPage(req, res) {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), 'public/index.html'))
}