import { RustLexer } from "grammars-v4/rust/RustLexer";
import { RustParser, CrateContext } from "grammars-v4/rust/RustParser";
import { CListener } from "grammars-v4/c/CListener";
import { CommonTokenStream, CharStreams, ParserRuleContext } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

export function parserRustAst(input: string): CrateContext {
  const inputStream = CharStreams.fromString(input);
  const lexer = new RustLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new RustParser(tokenStream);
  const tree = parser.crate();
  const stack: any[] = [];

  class HelperListener implements CListener {
    enterEveryRule(ctx: ParserRuleContext) {
      stack.push(ctx);
    }

    exitEveryRule(ctx: ParserRuleContext) {
      console.log(
        "stack:",
        JSON.stringify(stack.map((item) => item.constructor.name)),
        "ctx:",
        ctx.text
      );

      stack.pop();
    }
  }
  const listener = new HelperListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return tree;
}
