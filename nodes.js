export class IterationStatementNode {
  flag = 0;

  nodeType = "IterationStatementContext";

  label = "IterationStatementContext";

  check(nodeType, ctx) {
    if (nodeType === "IterationStatementContext") {
      this.flag = 1;
      this.label = ctx.For() ? "For" : ctx.While() ? "While" : "DoWhile";
    }
    if (this.flag === 1 && nodeType === "BlockItemListContext") {
      this.flag = 2;
    }

    return this.flag === 2;
  }
}

export class SelectionStatementNode {
  flag = 0;

  nodeType = "SelectionStatementContext";

  label = "SelectionStatementContext";

  check(nodeType, ctx) {
    if (nodeType === "SelectionStatementContext") {
      this.flag = 1;
      this.label = ctx.If() ? "If" : "Else";
    }
    if (this.flag === 1 && nodeType === "BlockItemListContext") {
      this.flag = 2;
    }

    return this.flag === 2;
  }
}
