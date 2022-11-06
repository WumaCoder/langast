import antlr4 from "antlr4";
import CLexer from "./grammars-v4/c/CLexer.js";
import CParser from "./grammars-v4/c/CParser.js";
import CListener from "./grammars-v4/c/CListener.js";

export function relationQuery(source, nodeTypes = []) {
  const chars = new antlr4.InputStream(source);
  const lexer = new CLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.compilationUnit();

  const result = new Set();
  const stack = [];

  class HelperListener extends CListener {
    enterEveryRule(ctx) {
      stack.push(ctx);
    }

    exitEveryRule(ctx) {
      // console.log(
      //   "stack:",
      //   JSON.stringify(stack.map((item) => item.constructor.name)),
      //   "ctx:",
      //   ctx.getText()
      // );
      const nodeMap = new Map(
        nodeTypes.map((Type) => {
          const type = new Type();
          return [type.nodeType, type];
        })
      );

      const relation = lineRelationQuery(nodeMap, stack, ctx);

      if (relation.length > 1) {
        relationSplit(relation).forEach((item) => {
          result.add(item, relation);
        });
      }
      stack.pop();
    }

    // enterPrimaryExpression(ctx) {
    //   console.log("Enter primary expression", ctx.getText());
    // }
  }

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(new HelperListener(), tree);

  // console.log(tree.toStringTree(parser.ruleNames));
  // console.log(tree.getText());
  // console.log(JSON.stringify(Array.from(result), null, 2));
  return Array.from(result);
}

function lineRelationQuery(nodeMap, stack, ctx) {
  const relation = [];
  let current = null;
  for (let i = 0; i < stack.length; i++) {
    const ctx = stack[i];
    const nodeType = ctx.constructor.name;
    if (nodeMap.has(nodeType)) {
      current = nodeMap.get(nodeType);
    }
    if (current && current.check(nodeType, ctx)) {
      relation.push(current.label || current.constructor.name);
      current = new current.constructor();
      nodeMap.set(current.nodeType, current);
    }
  }
  return relation;
}

function relationSplit(relation = []) {
  const result = new Set();
  if (relation.length) {
    result.add(relation.join(">"));
  }
  for (let i = 0; i < relation.length; i++) {
    const cur = relation[i];
    const next = relation[i + 1];
    if (relation.length > 1 && next) {
      result.add(cur + ">" + next);
    }
    for (let j = i + 2; j < relation.length; j++) {
      const next = relation[j];
      result.add(cur + " " + next);
    }
  }
  return Array.from(result);
}
