import { describe, it, expect } from "vitest";
import { parseCAST } from "./parseCAST";
import { readFileSync } from "fs";

describe("index.ts", () => {
  it("测试C语言AST生成", async () => {
    const code = readFileSync("./example/c/a.c", "utf-8");
    const tree = parseCAST(code);
    expect(tree).toBeDefined();
    console.log(tree.toStringTree());
  });
});
