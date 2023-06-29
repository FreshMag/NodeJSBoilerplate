import {db} from "../../index.js";
import pug from "pug";

export async function showData(req, res) {
    db.getData().then(data => res.json(data))
}


export async function showMainPage(req, res) {
    const compiledFunction = pug.compileFile('views/content.pug');
    res.render('index', {title: "Nodejs Boilerplate", content: compiledFunction({data: "This is example data"})});
}