import { readFileSync } from "fs";
import { matchStructure } from "./matchStructure.js";
import { IterationStatementNode, SelectionStatementNode } from "./nodes.js";

const source = readFileSync("./grammars-v4/c/examples/add.c", "utf8");

const target = readFileSync("./grammars-v4/c/examples/test.c", "utf8");

const result = matchStructure(source, target, [
  IterationStatementNode,
  SelectionStatementNode,
]);
console.log("match:", JSON.stringify(result, null, 2));
