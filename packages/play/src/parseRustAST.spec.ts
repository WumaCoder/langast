import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { parserRustAst } from './parseRustAST';

describe("parseRustAST.ts", () => {
  it("test parseRustAST", async () => {
    const code = readFileSync("./example/rust/a.rs", "utf-8");
    const tree = parserRustAst(code);
    expect(tree).toBeDefined();
    console.log(tree.toStringTree());
  });
});
