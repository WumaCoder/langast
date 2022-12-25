import {CommonTokenStream, Parser} from "antlr4ts";

export default abstract class RustParserBase extends Parser {
    constructor(input: CommonTokenStream) {
        super(input);
    }

    next(expect: string) {
        return this._input.LA(1) === expect;
    }
}
