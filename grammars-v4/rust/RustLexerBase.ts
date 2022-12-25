import { CharStream, VocabularyImpl } from "antlr4ts";
import { Lexer } from "antlr4ts/Lexer";
import { Token } from "antlr4ts/Token";
import { RustLexer } from "./RustLexer";

export default abstract class RustLexerBase extends Lexer {
    lt1: Token | null = null;
    lt2: Token | null = null;

    constructor(input: CharStream) {
        super(input);
    }

    nextToken() {
        const next = super.nextToken();

        if (next.channel === Token.DEFAULT_CHANNEL) {
            this.lt2 = this.lt1;
            this.lt1 = next;
        }

        return next;
    }

    SOF() {
        return this._input.LA(-1) <= 0;
    }

    next(expect: number) {
        return this._input.LA(1) === expect;
    }

    floatDotPossible(): boolean {
        const next = String.fromCharCode(this._input.LA(1));
        // only block . _ identifier after float
        if (next == "." || next == "_") {
            return false;
        }

        if (next == "f") {
            // 1.f32
            if (
                String.fromCharCode(this._input.LA(2)) == "3" &&
                String.fromCharCode(this._input.LA(3)) == "2"
            )
                return true;
            //1.f64
            if (
                String.fromCharCode(this._input.LA(2)) == "6" &&
                String.fromCharCode(this._input.LA(3)) == "4"
            )
                return true;
            return false;
        }
        if (next >= "a" && next <= "z") return false;
        if (next >= "A" && next <= "Z") return false;
        return true;
    }

    floatLiteralPossible() {
        if (this.lt1 == null || this.lt2 == null) return true;
        if (this.lt1.type !== RustLexer.DOT) return true;
        switch (this.lt2.type) {
            case RustLexer.CHAR_LITERAL:
            case RustLexer.STRING_LITERAL:
            case RustLexer.RAW_STRING_LITERAL:
            case RustLexer.BYTE_LITERAL:
            case RustLexer.BYTE_STRING_LITERAL:
            case RustLexer.RAW_BYTE_STRING_LITERAL:
            case RustLexer.INTEGER_LITERAL:
            case RustLexer.DEC_LITERAL:
            case RustLexer.HEX_LITERAL:
            case RustLexer.OCT_LITERAL:
            case RustLexer.BIN_LITERAL:
            case RustLexer.KW_SUPER:
            case RustLexer.KW_SELFVALUE:
            case RustLexer.KW_SELFTYPE:
            case RustLexer.KW_CRATE:
            case RustLexer.KW_DOLLARCRATE:
            case RustLexer.GT:
            case RustLexer.RCURLYBRACE:
            case RustLexer.RSQUAREBRACKET:
            case RustLexer.RPAREN:
            case RustLexer.KW_AWAIT:
            case RustLexer.NON_KEYWORD_IDENTIFIER:
            case RustLexer.RAW_IDENTIFIER:
            case RustLexer.KW_MACRORULES:
                return false;
            default:
                return true;
        }
    }
}
