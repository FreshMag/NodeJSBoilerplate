/*
--------------------------------------------------------------------
    IMPORTS
--------------------------------------------------------------------
*/
import express from "express"
import path from 'path'
import Db from "./src/models/db.mjs";
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";
import {router} from "./src/routes/indexRoutes.js"
import {printServerStart} from "./src/util/consoleUtil.js";
const app = express();

// ----------------------------------------------------------------------------
const PORT = 3000;
// ----------------------------------------------------------------------------
/*
--------------------------------------------------------------------
    MIDDLEWARES
--------------------------------------------------------------------
*/
app.set("views", "./views");
app.set('view engine', "pug")
/*
--------------------------------------------------------------------
    MODELS
--------------------------------------------------------------------
*/
export const db = new Db()
db.init().then()

/*
--------------------------------------------------------------------
    STATICS
--------------------------------------------------------------------
 */
app.use('/css', express.static(path.join(dirname(fileURLToPath(import.meta.url)), 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(dirname(fileURLToPath(import.meta.url)), 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(dirname(fileURLToPath(import.meta.url)), 'node_modules/jquery/dist')))
app.use(express.static(path.join(dirname(fileURLToPath(import.meta.url)), 'public')))

/*
--------------------------------------------------------------------
    ROUTERS
--------------------------------------------------------------------
*/
app.use(router);

/*
--------------------------------------------------------------------
    START THE SERVER
--------------------------------------------------------------------
*/
app.listen(PORT, () => printServerStart(PORT));
