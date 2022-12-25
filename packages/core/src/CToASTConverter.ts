import { CAST, LanguageAST } from "./types";

export class CToASTConverter {
  // 将 C 语言的 AST 转换为通用的 AST
  convert(cAst: CAST): LanguageAST {
    // 根据 C 语言的 AST 的类型，调用相应的处理方法
    switch (cAst.type) {
      case "declaration":
        return this.handleDeclaration(cAst);
      case "function":
        return this.handleFunction(cAst);
      case "assignment":
        return this.handleAssignment(cAst);
      case "if":
        return this.handleIfStatement(cAst);
      // ……
    }

    throw new Error("Unsupported C AST type: " + cAst.type);
  }
  handleIfStatement(cAst: CAST): LanguageAST {
    // 创建通用的 AST
    const ast: LanguageAST = {
      type: "if",
      value: cAst.value,
      children: [],
    };

    // 处理 if 语句的条件
    if (cAst.condition) {
      ast.children?.push(this.convert(cAst.condition));
    }

    // 处理 if 语句的 then 分支
    if (cAst.then) {
      ast.children?.push(this.convert(cAst.then));
    }

    // 处理 if 语句的 else 分支
    if (cAst.else) {
      ast.children?.push(this.convert(cAst.else));
    }

    // 返回通用的 AST
    return ast;
  }

  handleAssignment(cAst: CAST): LanguageAST {
    // 创建通用的 AST
    const ast: LanguageAST = {
      type: "assignment",
      value: cAst.value,
      children: [],
    };

    // 处理赋值的左值
    if (cAst.left) {
      ast.children?.push(this.convert(cAst.left));
    }

    // 处理赋值的右值
    if (cAst.right) {
      ast.children?.push(this.convert(cAst.right));
    }

    // 返回通用的 AST
    return ast;
  }

  // 处理 C 语言中的声明语句
  handleDeclaration(cAst: CAST): LanguageAST {
    // 创建通用的 AST
    const ast: LanguageAST = {
      type: "declaration",
      value: cAst.value,
      children: [],
    };

    // 处理声明的类型
    if (cAst.type) {
      ast.children?.push({
        type: "type",
        value: cAst.type,
        children: [],
      });
    }

    // 处理指针的类型
    if (cAst.pointerType) {
      ast.children?.push({
        type: "type",
        value: cAst.pointerType,
        children: [],
      });
    }

    // 返回通用的 AST
    return ast;
  }

  handleFunction(cAst: CAST): LanguageAST {
    // 创建通用的 AST
    const ast: LanguageAST = {
      type: "function",
      value: cAst.value,
      children: [],
    };

    // 处理函数的返回类型
    if (cAst?.returnType) {
      ast.children?.push({
        type: "type",
        value: cAst.returnType,
        children: [],
      });
    }

    // 处理函数的参数列表
    if (cAst?.parameters) {
      ast.children?.push(this.handleParameters(cAst?.parameters));
    }

    // 处理函数体
    if (cAst?.body) {
      ast.children?.push(this.handleBody(cAst?.body));
    }

    // 返回通用的 AST
    return ast;
  }

  handleBody(body: LanguageAST[]): LanguageAST {
    // 创建通用的 AST
    const ast: LanguageAST = {
      type: "body",
      value: "",
      children: [],
    };

    // 处理函数体
    for (const statement of body) {
      ast.children?.push(this.convert(statement));
    }

    // 返回通用的 AST
    return ast;
  }

  handleParameters(parameters: LanguageAST[]): LanguageAST {
    // 创建通用的 AST
    const ast: LanguageAST = {
      type: "parameters",
      value: "",
      children: [],
    };

    // 处理参数列表
    for (const parameter of parameters) {
      ast.children?.push(this.convert(parameter));
    }

    // 返回通用的 AST
    return ast;
  }
}
