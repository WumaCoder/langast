import { IterationStatementNode, SelectionStatementNode } from "./nodes.js";
import { relationQuery } from "./relationQuery.js";

export function matchStructure(
  source,
  target,
  nodeTypes = [IterationStatementNode, SelectionStatementNode]
) {
  const sourceRelation = relationQuery(source, nodeTypes); // 答案源码结构
  // console.log("sourceRelation:", JSON.stringify(sourceRelation));

  const targetRelation = relationQuery(target, nodeTypes); // 被检测目标源码结构
  // console.log("targetRelation:", JSON.stringify(targetRelation));

  const result = {
    pass: false,
    sourceRelation,
    targetRelation,
    mismatchRelation: [],
    matchRelation: [],
  };

  for (let i = 0; i < sourceRelation.length; i++) {
    const sourceItem = sourceRelation[i];
    const targetItem = targetRelation.includes(sourceItem);
    if (targetItem) {
      result.matchRelation.push(sourceItem);
    } else {
      result.mismatchRelation.push(sourceItem);
    }
  }

  result.pass = result.mismatchRelation.length === 0;

  return result;
}
