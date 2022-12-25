import { CLexer } from "grammars-v4/c/CLexer";
import { CParser, CompilationUnitContext } from "grammars-v4/c/CParser";
import { CListener } from "grammars-v4/c/CListener";
import { CommonTokenStream, CharStreams } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

export function parseCAST(input: string): CompilationUnitContext {
  const inputStream = CharStreams.fromString(input);
  const lexer = new CLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new CParser(tokenStream);
  const tree = parser.compilationUnit();
  const stack: any[] = [];

  class HelperListener implements CListener {
    enterEveryRule(ctx: any) {
      stack.push(ctx);
    }

    exitEveryRule(ctx: any) {
      // console.log(
      //   "stack:",
      //   JSON.stringify(stack.map((item) => item.constructor.name)),
      //   "ctx:"
      // );

      stack.pop();
    }
  }
  const listener = new HelperListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return tree;
}
