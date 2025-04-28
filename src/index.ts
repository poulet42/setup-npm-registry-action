import { getInput, debug, setFailed } from "@actions/core";
import { appendFileSync } from "fs";

const registryUrl = getInput("url");
const registryAuth = getInput("auth");

if (!registryUrl) {
  setFailed("Registry URL is required");
}
if (!registryAuth) {
  setFailed("Registry Auth is required");
}

const authString =
  registryUrl.replace(/(^\w+:|^)/, "") + `:_auth=${registryAuth}`;

const userNpmrcPath = `${process.env.HOME}/.npmrc`;

debug(`using registry URL: ${registryUrl}`);
debug(`using npmrc path: ${userNpmrcPath}`);

appendFileSync(userNpmrcPath, `\n${authString}`);
appendFileSync(userNpmrcPath, `\nregistry=${registryUrl}`);
