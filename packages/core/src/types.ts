export type LanguageAST = {
  type: string; // 节点类型，例如表达式、声明、语句等
  value?: any; // 节点的值，例如常量、标识符等
  children?: LanguageAST[]; // 节点的子节点，例如表达式中的运算符和操作数
  // 其他字段……
};

export type CAST = LanguageAST & {
  pointerType?: string; // C 语言特有的字段，表示指针的类型
  returnType?: string; // C 语言特有的字段，表示函数的返回类型
  parameters?: LanguageAST[]; // C 语言特有的字段，表示函数的参数列表
  body?: LanguageAST[]; // C 语言特有的字段，表示函数体
  left?: LanguageAST; // C 语言特有的字段，表示赋值语句的左值
  right?: LanguageAST; // C 语言特有的字段，表示赋值语句的右值
  then?: LanguageAST; // C 语言特有的字段，表示 if 语句的 then 语句块
  else?: LanguageAST; // C 语言特有的字段，表示 if 语句的 else 语句块
  condition?: LanguageAST; // C 语言特有的字段，表示 if 语句的条件
  type?: string; // C 语言特有的字段，表示声明语句的类型
};

export type JavaAST = LanguageAST & {
  className?: string; // Java 语言特有的字段，表示类的名称
};
