import { proxyServer } from "./controller/proxy.js";
import { app } from "./controller/api.js"
import { apiport, wsport } from "./util/constants.js";
import { startWorkspace } from "./service/workspace.js";

startWorkspace();
proxyServer.listen(wsport);
app.listen(apiport, () => {
    console.log(`Api listening on port ${apiport}`)
})