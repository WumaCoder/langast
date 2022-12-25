// Generated from ./grammars-v4/rust/RustParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RustParserListener } from "./RustParserListener";
import { RustParserVisitor } from "./RustParserVisitor";
import  RustParserBase from './RustParserBase'


export class RustParser extends RustParserBase {
	public static readonly KW_AS = 1;
	public static readonly KW_BREAK = 2;
	public static readonly KW_CONST = 3;
	public static readonly KW_CONTINUE = 4;
	public static readonly KW_CRATE = 5;
	public static readonly KW_ELSE = 6;
	public static readonly KW_ENUM = 7;
	public static readonly KW_EXTERN = 8;
	public static readonly KW_FALSE = 9;
	public static readonly KW_FN = 10;
	public static readonly KW_FOR = 11;
	public static readonly KW_IF = 12;
	public static readonly KW_IMPL = 13;
	public static readonly KW_IN = 14;
	public static readonly KW_LET = 15;
	public static readonly KW_LOOP = 16;
	public static readonly KW_MATCH = 17;
	public static readonly KW_MOD = 18;
	public static readonly KW_MOVE = 19;
	public static readonly KW_MUT = 20;
	public static readonly KW_PUB = 21;
	public static readonly KW_REF = 22;
	public static readonly KW_RETURN = 23;
	public static readonly KW_SELFVALUE = 24;
	public static readonly KW_SELFTYPE = 25;
	public static readonly KW_STATIC = 26;
	public static readonly KW_STRUCT = 27;
	public static readonly KW_SUPER = 28;
	public static readonly KW_TRAIT = 29;
	public static readonly KW_TRUE = 30;
	public static readonly KW_TYPE = 31;
	public static readonly KW_UNSAFE = 32;
	public static readonly KW_USE = 33;
	public static readonly KW_WHERE = 34;
	public static readonly KW_WHILE = 35;
	public static readonly KW_ASYNC = 36;
	public static readonly KW_AWAIT = 37;
	public static readonly KW_DYN = 38;
	public static readonly KW_ABSTRACT = 39;
	public static readonly KW_BECOME = 40;
	public static readonly KW_BOX = 41;
	public static readonly KW_DO = 42;
	public static readonly KW_FINAL = 43;
	public static readonly KW_MACRO = 44;
	public static readonly KW_OVERRIDE = 45;
	public static readonly KW_PRIV = 46;
	public static readonly KW_TYPEOF = 47;
	public static readonly KW_UNSIZED = 48;
	public static readonly KW_VIRTUAL = 49;
	public static readonly KW_YIELD = 50;
	public static readonly KW_TRY = 51;
	public static readonly KW_UNION = 52;
	public static readonly KW_STATICLIFETIME = 53;
	public static readonly KW_MACRORULES = 54;
	public static readonly KW_UNDERLINELIFETIME = 55;
	public static readonly KW_DOLLARCRATE = 56;
	public static readonly NON_KEYWORD_IDENTIFIER = 57;
	public static readonly RAW_IDENTIFIER = 58;
	public static readonly LINE_COMMENT = 59;
	public static readonly BLOCK_COMMENT = 60;
	public static readonly INNER_LINE_DOC = 61;
	public static readonly INNER_BLOCK_DOC = 62;
	public static readonly OUTER_LINE_DOC = 63;
	public static readonly OUTER_BLOCK_DOC = 64;
	public static readonly BLOCK_COMMENT_OR_DOC = 65;
	public static readonly SHEBANG = 66;
	public static readonly WHITESPACE = 67;
	public static readonly NEWLINE = 68;
	public static readonly CHAR_LITERAL = 69;
	public static readonly STRING_LITERAL = 70;
	public static readonly RAW_STRING_LITERAL = 71;
	public static readonly BYTE_LITERAL = 72;
	public static readonly BYTE_STRING_LITERAL = 73;
	public static readonly RAW_BYTE_STRING_LITERAL = 74;
	public static readonly INTEGER_LITERAL = 75;
	public static readonly DEC_LITERAL = 76;
	public static readonly HEX_LITERAL = 77;
	public static readonly OCT_LITERAL = 78;
	public static readonly BIN_LITERAL = 79;
	public static readonly FLOAT_LITERAL = 80;
	public static readonly LIFETIME_OR_LABEL = 81;
	public static readonly PLUS = 82;
	public static readonly MINUS = 83;
	public static readonly STAR = 84;
	public static readonly SLASH = 85;
	public static readonly PERCENT = 86;
	public static readonly CARET = 87;
	public static readonly NOT = 88;
	public static readonly AND = 89;
	public static readonly OR = 90;
	public static readonly ANDAND = 91;
	public static readonly OROR = 92;
	public static readonly PLUSEQ = 93;
	public static readonly MINUSEQ = 94;
	public static readonly STAREQ = 95;
	public static readonly SLASHEQ = 96;
	public static readonly PERCENTEQ = 97;
	public static readonly CARETEQ = 98;
	public static readonly ANDEQ = 99;
	public static readonly OREQ = 100;
	public static readonly SHLEQ = 101;
	public static readonly SHREQ = 102;
	public static readonly EQ = 103;
	public static readonly EQEQ = 104;
	public static readonly NE = 105;
	public static readonly GT = 106;
	public static readonly LT = 107;
	public static readonly GE = 108;
	public static readonly LE = 109;
	public static readonly AT = 110;
	public static readonly UNDERSCORE = 111;
	public static readonly DOT = 112;
	public static readonly DOTDOT = 113;
	public static readonly DOTDOTDOT = 114;
	public static readonly DOTDOTEQ = 115;
	public static readonly COMMA = 116;
	public static readonly SEMI = 117;
	public static readonly COLON = 118;
	public static readonly PATHSEP = 119;
	public static readonly RARROW = 120;
	public static readonly FATARROW = 121;
	public static readonly POUND = 122;
	public static readonly DOLLAR = 123;
	public static readonly QUESTION = 124;
	public static readonly LCURLYBRACE = 125;
	public static readonly RCURLYBRACE = 126;
	public static readonly LSQUAREBRACKET = 127;
	public static readonly RSQUAREBRACKET = 128;
	public static readonly LPAREN = 129;
	public static readonly RPAREN = 130;
	public static readonly RULE_crate = 0;
	public static readonly RULE_macroInvocation = 1;
	public static readonly RULE_delimTokenTree = 2;
	public static readonly RULE_tokenTree = 3;
	public static readonly RULE_tokenTreeToken = 4;
	public static readonly RULE_macroInvocationSemi = 5;
	public static readonly RULE_macroRulesDefinition = 6;
	public static readonly RULE_macroRulesDef = 7;
	public static readonly RULE_macroRules = 8;
	public static readonly RULE_macroRule = 9;
	public static readonly RULE_macroMatcher = 10;
	public static readonly RULE_macroMatch = 11;
	public static readonly RULE_macroMatchToken = 12;
	public static readonly RULE_macroFragSpec = 13;
	public static readonly RULE_macroRepSep = 14;
	public static readonly RULE_macroRepOp = 15;
	public static readonly RULE_macroTranscriber = 16;
	public static readonly RULE_item = 17;
	public static readonly RULE_visItem = 18;
	public static readonly RULE_macroItem = 19;
	public static readonly RULE_module = 20;
	public static readonly RULE_externCrate = 21;
	public static readonly RULE_crateRef = 22;
	public static readonly RULE_asClause = 23;
	public static readonly RULE_useDeclaration = 24;
	public static readonly RULE_useTree = 25;
	public static readonly RULE_function_ = 26;
	public static readonly RULE_functionQualifiers = 27;
	public static readonly RULE_abi = 28;
	public static readonly RULE_functionParameters = 29;
	public static readonly RULE_selfParam = 30;
	public static readonly RULE_shorthandSelf = 31;
	public static readonly RULE_typedSelf = 32;
	public static readonly RULE_functionParam = 33;
	public static readonly RULE_functionParamPattern = 34;
	public static readonly RULE_functionReturnType = 35;
	public static readonly RULE_typeAlias = 36;
	public static readonly RULE_struct_ = 37;
	public static readonly RULE_structStruct = 38;
	public static readonly RULE_tupleStruct = 39;
	public static readonly RULE_structFields = 40;
	public static readonly RULE_structField = 41;
	public static readonly RULE_tupleFields = 42;
	public static readonly RULE_tupleField = 43;
	public static readonly RULE_enumeration = 44;
	public static readonly RULE_enumItems = 45;
	public static readonly RULE_enumItem = 46;
	public static readonly RULE_enumItemTuple = 47;
	public static readonly RULE_enumItemStruct = 48;
	public static readonly RULE_enumItemDiscriminant = 49;
	public static readonly RULE_union_ = 50;
	public static readonly RULE_constantItem = 51;
	public static readonly RULE_staticItem = 52;
	public static readonly RULE_trait_ = 53;
	public static readonly RULE_implementation = 54;
	public static readonly RULE_inherentImpl = 55;
	public static readonly RULE_traitImpl = 56;
	public static readonly RULE_externBlock = 57;
	public static readonly RULE_externalItem = 58;
	public static readonly RULE_genericParams = 59;
	public static readonly RULE_genericParam = 60;
	public static readonly RULE_lifetimeParam = 61;
	public static readonly RULE_typeParam = 62;
	public static readonly RULE_constParam = 63;
	public static readonly RULE_whereClause = 64;
	public static readonly RULE_whereClauseItem = 65;
	public static readonly RULE_lifetimeWhereClauseItem = 66;
	public static readonly RULE_typeBoundWhereClauseItem = 67;
	public static readonly RULE_forLifetimes = 68;
	public static readonly RULE_associatedItem = 69;
	public static readonly RULE_innerAttribute = 70;
	public static readonly RULE_outerAttribute = 71;
	public static readonly RULE_attr = 72;
	public static readonly RULE_attrInput = 73;
	public static readonly RULE_statement = 74;
	public static readonly RULE_letStatement = 75;
	public static readonly RULE_expressionStatement = 76;
	public static readonly RULE_expression = 77;
	public static readonly RULE_comparisonOperator = 78;
	public static readonly RULE_compoundAssignOperator = 79;
	public static readonly RULE_expressionWithBlock = 80;
	public static readonly RULE_literalExpression = 81;
	public static readonly RULE_pathExpression = 82;
	public static readonly RULE_blockExpression = 83;
	public static readonly RULE_statements = 84;
	public static readonly RULE_asyncBlockExpression = 85;
	public static readonly RULE_unsafeBlockExpression = 86;
	public static readonly RULE_arrayElements = 87;
	public static readonly RULE_tupleElements = 88;
	public static readonly RULE_tupleIndex = 89;
	public static readonly RULE_structExpression = 90;
	public static readonly RULE_structExprStruct = 91;
	public static readonly RULE_structExprFields = 92;
	public static readonly RULE_structExprField = 93;
	public static readonly RULE_structBase = 94;
	public static readonly RULE_structExprTuple = 95;
	public static readonly RULE_structExprUnit = 96;
	public static readonly RULE_enumerationVariantExpression = 97;
	public static readonly RULE_enumExprStruct = 98;
	public static readonly RULE_enumExprFields = 99;
	public static readonly RULE_enumExprField = 100;
	public static readonly RULE_enumExprTuple = 101;
	public static readonly RULE_enumExprFieldless = 102;
	public static readonly RULE_callParams = 103;
	public static readonly RULE_closureExpression = 104;
	public static readonly RULE_closureParameters = 105;
	public static readonly RULE_closureParam = 106;
	public static readonly RULE_loopExpression = 107;
	public static readonly RULE_infiniteLoopExpression = 108;
	public static readonly RULE_predicateLoopExpression = 109;
	public static readonly RULE_predicatePatternLoopExpression = 110;
	public static readonly RULE_iteratorLoopExpression = 111;
	public static readonly RULE_loopLabel = 112;
	public static readonly RULE_ifExpression = 113;
	public static readonly RULE_ifLetExpression = 114;
	public static readonly RULE_matchExpression = 115;
	public static readonly RULE_matchArms = 116;
	public static readonly RULE_matchArmExpression = 117;
	public static readonly RULE_matchArm = 118;
	public static readonly RULE_matchArmGuard = 119;
	public static readonly RULE_pattern = 120;
	public static readonly RULE_patternNoTopAlt = 121;
	public static readonly RULE_patternWithoutRange = 122;
	public static readonly RULE_literalPattern = 123;
	public static readonly RULE_identifierPattern = 124;
	public static readonly RULE_wildcardPattern = 125;
	public static readonly RULE_restPattern = 126;
	public static readonly RULE_rangePattern = 127;
	public static readonly RULE_rangePatternBound = 128;
	public static readonly RULE_referencePattern = 129;
	public static readonly RULE_structPattern = 130;
	public static readonly RULE_structPatternElements = 131;
	public static readonly RULE_structPatternFields = 132;
	public static readonly RULE_structPatternField = 133;
	public static readonly RULE_structPatternEtCetera = 134;
	public static readonly RULE_tupleStructPattern = 135;
	public static readonly RULE_tupleStructItems = 136;
	public static readonly RULE_tuplePattern = 137;
	public static readonly RULE_tuplePatternItems = 138;
	public static readonly RULE_groupedPattern = 139;
	public static readonly RULE_slicePattern = 140;
	public static readonly RULE_slicePatternItems = 141;
	public static readonly RULE_pathPattern = 142;
	public static readonly RULE_type_ = 143;
	public static readonly RULE_typeNoBounds = 144;
	public static readonly RULE_parenthesizedType = 145;
	public static readonly RULE_neverType = 146;
	public static readonly RULE_tupleType = 147;
	public static readonly RULE_arrayType = 148;
	public static readonly RULE_sliceType = 149;
	public static readonly RULE_referenceType = 150;
	public static readonly RULE_rawPointerType = 151;
	public static readonly RULE_bareFunctionType = 152;
	public static readonly RULE_functionTypeQualifiers = 153;
	public static readonly RULE_bareFunctionReturnType = 154;
	public static readonly RULE_functionParametersMaybeNamedVariadic = 155;
	public static readonly RULE_maybeNamedFunctionParameters = 156;
	public static readonly RULE_maybeNamedParam = 157;
	public static readonly RULE_maybeNamedFunctionParametersVariadic = 158;
	public static readonly RULE_traitObjectType = 159;
	public static readonly RULE_traitObjectTypeOneBound = 160;
	public static readonly RULE_implTraitType = 161;
	public static readonly RULE_implTraitTypeOneBound = 162;
	public static readonly RULE_inferredType = 163;
	public static readonly RULE_typeParamBounds = 164;
	public static readonly RULE_typeParamBound = 165;
	public static readonly RULE_traitBound = 166;
	public static readonly RULE_lifetimeBounds = 167;
	public static readonly RULE_lifetime = 168;
	public static readonly RULE_simplePath = 169;
	public static readonly RULE_simplePathSegment = 170;
	public static readonly RULE_pathInExpression = 171;
	public static readonly RULE_pathExprSegment = 172;
	public static readonly RULE_pathIdentSegment = 173;
	public static readonly RULE_genericArgs = 174;
	public static readonly RULE_genericArg = 175;
	public static readonly RULE_genericArgsConst = 176;
	public static readonly RULE_genericArgsLifetimes = 177;
	public static readonly RULE_genericArgsTypes = 178;
	public static readonly RULE_genericArgsBindings = 179;
	public static readonly RULE_genericArgsBinding = 180;
	public static readonly RULE_qualifiedPathInExpression = 181;
	public static readonly RULE_qualifiedPathType = 182;
	public static readonly RULE_qualifiedPathInType = 183;
	public static readonly RULE_typePath = 184;
	public static readonly RULE_typePathSegment = 185;
	public static readonly RULE_typePathFn = 186;
	public static readonly RULE_typePathInputs = 187;
	public static readonly RULE_visibility = 188;
	public static readonly RULE_identifier = 189;
	public static readonly RULE_keyword = 190;
	public static readonly RULE_macroIdentifierLikeToken = 191;
	public static readonly RULE_macroLiteralToken = 192;
	public static readonly RULE_macroPunctuationToken = 193;
	public static readonly RULE_shl = 194;
	public static readonly RULE_shr = 195;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"crate", "macroInvocation", "delimTokenTree", "tokenTree", "tokenTreeToken", 
		"macroInvocationSemi", "macroRulesDefinition", "macroRulesDef", "macroRules", 
		"macroRule", "macroMatcher", "macroMatch", "macroMatchToken", "macroFragSpec", 
		"macroRepSep", "macroRepOp", "macroTranscriber", "item", "visItem", "macroItem", 
		"module", "externCrate", "crateRef", "asClause", "useDeclaration", "useTree", 
		"function_", "functionQualifiers", "abi", "functionParameters", "selfParam", 
		"shorthandSelf", "typedSelf", "functionParam", "functionParamPattern", 
		"functionReturnType", "typeAlias", "struct_", "structStruct", "tupleStruct", 
		"structFields", "structField", "tupleFields", "tupleField", "enumeration", 
		"enumItems", "enumItem", "enumItemTuple", "enumItemStruct", "enumItemDiscriminant", 
		"union_", "constantItem", "staticItem", "trait_", "implementation", "inherentImpl", 
		"traitImpl", "externBlock", "externalItem", "genericParams", "genericParam", 
		"lifetimeParam", "typeParam", "constParam", "whereClause", "whereClauseItem", 
		"lifetimeWhereClauseItem", "typeBoundWhereClauseItem", "forLifetimes", 
		"associatedItem", "innerAttribute", "outerAttribute", "attr", "attrInput", 
		"statement", "letStatement", "expressionStatement", "expression", "comparisonOperator", 
		"compoundAssignOperator", "expressionWithBlock", "literalExpression", 
		"pathExpression", "blockExpression", "statements", "asyncBlockExpression", 
		"unsafeBlockExpression", "arrayElements", "tupleElements", "tupleIndex", 
		"structExpression", "structExprStruct", "structExprFields", "structExprField", 
		"structBase", "structExprTuple", "structExprUnit", "enumerationVariantExpression", 
		"enumExprStruct", "enumExprFields", "enumExprField", "enumExprTuple", 
		"enumExprFieldless", "callParams", "closureExpression", "closureParameters", 
		"closureParam", "loopExpression", "infiniteLoopExpression", "predicateLoopExpression", 
		"predicatePatternLoopExpression", "iteratorLoopExpression", "loopLabel", 
		"ifExpression", "ifLetExpression", "matchExpression", "matchArms", "matchArmExpression", 
		"matchArm", "matchArmGuard", "pattern", "patternNoTopAlt", "patternWithoutRange", 
		"literalPattern", "identifierPattern", "wildcardPattern", "restPattern", 
		"rangePattern", "rangePatternBound", "referencePattern", "structPattern", 
		"structPatternElements", "structPatternFields", "structPatternField", 
		"structPatternEtCetera", "tupleStructPattern", "tupleStructItems", "tuplePattern", 
		"tuplePatternItems", "groupedPattern", "slicePattern", "slicePatternItems", 
		"pathPattern", "type_", "typeNoBounds", "parenthesizedType", "neverType", 
		"tupleType", "arrayType", "sliceType", "referenceType", "rawPointerType", 
		"bareFunctionType", "functionTypeQualifiers", "bareFunctionReturnType", 
		"functionParametersMaybeNamedVariadic", "maybeNamedFunctionParameters", 
		"maybeNamedParam", "maybeNamedFunctionParametersVariadic", "traitObjectType", 
		"traitObjectTypeOneBound", "implTraitType", "implTraitTypeOneBound", "inferredType", 
		"typeParamBounds", "typeParamBound", "traitBound", "lifetimeBounds", "lifetime", 
		"simplePath", "simplePathSegment", "pathInExpression", "pathExprSegment", 
		"pathIdentSegment", "genericArgs", "genericArg", "genericArgsConst", "genericArgsLifetimes", 
		"genericArgsTypes", "genericArgsBindings", "genericArgsBinding", "qualifiedPathInExpression", 
		"qualifiedPathType", "qualifiedPathInType", "typePath", "typePathSegment", 
		"typePathFn", "typePathInputs", "visibility", "identifier", "keyword", 
		"macroIdentifierLikeToken", "macroLiteralToken", "macroPunctuationToken", 
		"shl", "shr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'as'", "'break'", "'const'", "'continue'", "'crate'", "'else'", 
		"'enum'", "'extern'", "'false'", "'fn'", "'for'", "'if'", "'impl'", "'in'", 
		"'let'", "'loop'", "'match'", "'mod'", "'move'", "'mut'", "'pub'", "'ref'", 
		"'return'", "'self'", "'Self'", "'static'", "'struct'", "'super'", "'trait'", 
		"'true'", "'type'", "'unsafe'", "'use'", "'where'", "'while'", "'async'", 
		"'await'", "'dyn'", "'abstract'", "'become'", "'box'", "'do'", "'final'", 
		"'macro'", "'override'", "'priv'", "'typeof'", "'unsized'", "'virtual'", 
		"'yield'", "'try'", "'union'", "''tatic'", "'macro_rules'", "'''", "'$crate'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'^'", "'!'", "'&'", "'|'", "'&&'", "'||'", "'+='", "'-='", "'*='", 
		"'/='", "'%='", "'^='", "'&='", "'|='", "'<<='", "'>>='", "'='", "'=='", 
		"'!='", "'>'", "'<'", "'>='", "'<='", "'@'", "'_'", "'.'", "'..'", "'...'", 
		"'..='", "','", "';'", "':'", "'::'", "'->'", "'=>'", "'#'", "'$'", "'?'", 
		"'{'", "'}'", "'['", "']'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "KW_AS", "KW_BREAK", "KW_CONST", "KW_CONTINUE", "KW_CRATE", 
		"KW_ELSE", "KW_ENUM", "KW_EXTERN", "KW_FALSE", "KW_FN", "KW_FOR", "KW_IF", 
		"KW_IMPL", "KW_IN", "KW_LET", "KW_LOOP", "KW_MATCH", "KW_MOD", "KW_MOVE", 
		"KW_MUT", "KW_PUB", "KW_REF", "KW_RETURN", "KW_SELFVALUE", "KW_SELFTYPE", 
		"KW_STATIC", "KW_STRUCT", "KW_SUPER", "KW_TRAIT", "KW_TRUE", "KW_TYPE", 
		"KW_UNSAFE", "KW_USE", "KW_WHERE", "KW_WHILE", "KW_ASYNC", "KW_AWAIT", 
		"KW_DYN", "KW_ABSTRACT", "KW_BECOME", "KW_BOX", "KW_DO", "KW_FINAL", "KW_MACRO", 
		"KW_OVERRIDE", "KW_PRIV", "KW_TYPEOF", "KW_UNSIZED", "KW_VIRTUAL", "KW_YIELD", 
		"KW_TRY", "KW_UNION", "KW_STATICLIFETIME", "KW_MACRORULES", "KW_UNDERLINELIFETIME", 
		"KW_DOLLARCRATE", "NON_KEYWORD_IDENTIFIER", "RAW_IDENTIFIER", "LINE_COMMENT", 
		"BLOCK_COMMENT", "INNER_LINE_DOC", "INNER_BLOCK_DOC", "OUTER_LINE_DOC", 
		"OUTER_BLOCK_DOC", "BLOCK_COMMENT_OR_DOC", "SHEBANG", "WHITESPACE", "NEWLINE", 
		"CHAR_LITERAL", "STRING_LITERAL", "RAW_STRING_LITERAL", "BYTE_LITERAL", 
		"BYTE_STRING_LITERAL", "RAW_BYTE_STRING_LITERAL", "INTEGER_LITERAL", "DEC_LITERAL", 
		"HEX_LITERAL", "OCT_LITERAL", "BIN_LITERAL", "FLOAT_LITERAL", "LIFETIME_OR_LABEL", 
		"PLUS", "MINUS", "STAR", "SLASH", "PERCENT", "CARET", "NOT", "AND", "OR", 
		"ANDAND", "OROR", "PLUSEQ", "MINUSEQ", "STAREQ", "SLASHEQ", "PERCENTEQ", 
		"CARETEQ", "ANDEQ", "OREQ", "SHLEQ", "SHREQ", "EQ", "EQEQ", "NE", "GT", 
		"LT", "GE", "LE", "AT", "UNDERSCORE", "DOT", "DOTDOT", "DOTDOTDOT", "DOTDOTEQ", 
		"COMMA", "SEMI", "COLON", "PATHSEP", "RARROW", "FATARROW", "POUND", "DOLLAR", 
		"QUESTION", "LCURLYBRACE", "RCURLYBRACE", "LSQUAREBRACKET", "RSQUAREBRACKET", 
		"LPAREN", "RPAREN",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RustParser._LITERAL_NAMES, RustParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RustParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RustParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return RustParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RustParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RustParser._ATN, this);
	}
	// @RuleVersion(0)
	public crate(): CrateContext {
		let _localctx: CrateContext = new CrateContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RustParser.RULE_crate);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 392;
					this.innerAttribute();
					}
					}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CONST) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || _la === RustParser.PATHSEP || _la === RustParser.POUND) {
				{
				{
				this.state = 398;
				this.item();
				}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 404;
			this.match(RustParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroInvocation(): MacroInvocationContext {
		let _localctx: MacroInvocationContext = new MacroInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RustParser.RULE_macroInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.simplePath();
			this.state = 407;
			this.match(RustParser.NOT);
			this.state = 408;
			this.delimTokenTree();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delimTokenTree(): DelimTokenTreeContext {
		let _localctx: DelimTokenTreeContext = new DelimTokenTreeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RustParser.RULE_delimTokenTree);
		let _la: number;
		try {
			this.state = 434;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 410;
				this.match(RustParser.LPAREN);
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0)) {
					{
					{
					this.state = 411;
					this.tokenTree();
					}
					}
					this.state = 416;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 417;
				this.match(RustParser.RPAREN);
				}
				break;
			case RustParser.LSQUAREBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 418;
				this.match(RustParser.LSQUAREBRACKET);
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0)) {
					{
					{
					this.state = 419;
					this.tokenTree();
					}
					}
					this.state = 424;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 425;
				this.match(RustParser.RSQUAREBRACKET);
				}
				break;
			case RustParser.LCURLYBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 426;
				this.match(RustParser.LCURLYBRACE);
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0)) {
					{
					{
					this.state = 427;
					this.tokenTree();
					}
					}
					this.state = 432;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 433;
				this.match(RustParser.RCURLYBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokenTree(): TokenTreeContext {
		let _localctx: TokenTreeContext = new TokenTreeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RustParser.RULE_tokenTree);
		try {
			let _alt: number;
			this.state = 442;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_AS:
			case RustParser.KW_BREAK:
			case RustParser.KW_CONST:
			case RustParser.KW_CONTINUE:
			case RustParser.KW_CRATE:
			case RustParser.KW_ELSE:
			case RustParser.KW_ENUM:
			case RustParser.KW_EXTERN:
			case RustParser.KW_FALSE:
			case RustParser.KW_FN:
			case RustParser.KW_FOR:
			case RustParser.KW_IF:
			case RustParser.KW_IMPL:
			case RustParser.KW_IN:
			case RustParser.KW_LET:
			case RustParser.KW_LOOP:
			case RustParser.KW_MATCH:
			case RustParser.KW_MOD:
			case RustParser.KW_MOVE:
			case RustParser.KW_MUT:
			case RustParser.KW_PUB:
			case RustParser.KW_REF:
			case RustParser.KW_RETURN:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SELFTYPE:
			case RustParser.KW_STATIC:
			case RustParser.KW_STRUCT:
			case RustParser.KW_SUPER:
			case RustParser.KW_TRAIT:
			case RustParser.KW_TRUE:
			case RustParser.KW_TYPE:
			case RustParser.KW_UNSAFE:
			case RustParser.KW_USE:
			case RustParser.KW_WHERE:
			case RustParser.KW_WHILE:
			case RustParser.KW_ASYNC:
			case RustParser.KW_AWAIT:
			case RustParser.KW_DYN:
			case RustParser.KW_ABSTRACT:
			case RustParser.KW_BECOME:
			case RustParser.KW_BOX:
			case RustParser.KW_DO:
			case RustParser.KW_FINAL:
			case RustParser.KW_MACRO:
			case RustParser.KW_OVERRIDE:
			case RustParser.KW_PRIV:
			case RustParser.KW_TYPEOF:
			case RustParser.KW_UNSIZED:
			case RustParser.KW_VIRTUAL:
			case RustParser.KW_YIELD:
			case RustParser.KW_TRY:
			case RustParser.KW_UNION:
			case RustParser.KW_STATICLIFETIME:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_UNDERLINELIFETIME:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.CHAR_LITERAL:
			case RustParser.STRING_LITERAL:
			case RustParser.RAW_STRING_LITERAL:
			case RustParser.BYTE_LITERAL:
			case RustParser.BYTE_STRING_LITERAL:
			case RustParser.RAW_BYTE_STRING_LITERAL:
			case RustParser.INTEGER_LITERAL:
			case RustParser.FLOAT_LITERAL:
			case RustParser.LIFETIME_OR_LABEL:
			case RustParser.PLUS:
			case RustParser.MINUS:
			case RustParser.STAR:
			case RustParser.SLASH:
			case RustParser.PERCENT:
			case RustParser.CARET:
			case RustParser.NOT:
			case RustParser.AND:
			case RustParser.OR:
			case RustParser.ANDAND:
			case RustParser.OROR:
			case RustParser.PLUSEQ:
			case RustParser.MINUSEQ:
			case RustParser.STAREQ:
			case RustParser.SLASHEQ:
			case RustParser.PERCENTEQ:
			case RustParser.CARETEQ:
			case RustParser.ANDEQ:
			case RustParser.OREQ:
			case RustParser.SHLEQ:
			case RustParser.SHREQ:
			case RustParser.EQ:
			case RustParser.EQEQ:
			case RustParser.NE:
			case RustParser.GT:
			case RustParser.LT:
			case RustParser.GE:
			case RustParser.LE:
			case RustParser.AT:
			case RustParser.UNDERSCORE:
			case RustParser.DOT:
			case RustParser.DOTDOT:
			case RustParser.DOTDOTDOT:
			case RustParser.DOTDOTEQ:
			case RustParser.COMMA:
			case RustParser.SEMI:
			case RustParser.COLON:
			case RustParser.PATHSEP:
			case RustParser.RARROW:
			case RustParser.FATARROW:
			case RustParser.POUND:
			case RustParser.DOLLAR:
			case RustParser.QUESTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 437;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 436;
						this.tokenTreeToken();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 439;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case RustParser.LCURLYBRACE:
			case RustParser.LSQUAREBRACKET:
			case RustParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 441;
				this.delimTokenTree();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokenTreeToken(): TokenTreeTokenContext {
		let _localctx: TokenTreeTokenContext = new TokenTreeTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RustParser.RULE_tokenTreeToken);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 444;
				this.macroIdentifierLikeToken();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 445;
				this.macroLiteralToken();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 446;
				this.macroPunctuationToken();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 447;
				this.macroRepOp();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 448;
				this.match(RustParser.DOLLAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroInvocationSemi(): MacroInvocationSemiContext {
		let _localctx: MacroInvocationSemiContext = new MacroInvocationSemiContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RustParser.RULE_macroInvocationSemi);
		let _la: number;
		try {
			this.state = 486;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 451;
				this.simplePath();
				this.state = 452;
				this.match(RustParser.NOT);
				this.state = 453;
				this.match(RustParser.LPAREN);
				this.state = 457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0)) {
					{
					{
					this.state = 454;
					this.tokenTree();
					}
					}
					this.state = 459;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 460;
				this.match(RustParser.RPAREN);
				this.state = 461;
				this.match(RustParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 463;
				this.simplePath();
				this.state = 464;
				this.match(RustParser.NOT);
				this.state = 465;
				this.match(RustParser.LSQUAREBRACKET);
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0)) {
					{
					{
					this.state = 466;
					this.tokenTree();
					}
					}
					this.state = 471;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 472;
				this.match(RustParser.RSQUAREBRACKET);
				this.state = 473;
				this.match(RustParser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 475;
				this.simplePath();
				this.state = 476;
				this.match(RustParser.NOT);
				this.state = 477;
				this.match(RustParser.LCURLYBRACE);
				this.state = 481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0)) {
					{
					{
					this.state = 478;
					this.tokenTree();
					}
					}
					this.state = 483;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 484;
				this.match(RustParser.RCURLYBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroRulesDefinition(): MacroRulesDefinitionContext {
		let _localctx: MacroRulesDefinitionContext = new MacroRulesDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RustParser.RULE_macroRulesDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.match(RustParser.KW_MACRORULES);
			this.state = 489;
			this.match(RustParser.NOT);
			this.state = 490;
			this.identifier();
			this.state = 491;
			this.macroRulesDef();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroRulesDef(): MacroRulesDefContext {
		let _localctx: MacroRulesDefContext = new MacroRulesDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RustParser.RULE_macroRulesDef);
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 493;
				this.match(RustParser.LPAREN);
				this.state = 494;
				this.macroRules();
				this.state = 495;
				this.match(RustParser.RPAREN);
				this.state = 496;
				this.match(RustParser.SEMI);
				}
				break;
			case RustParser.LSQUAREBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.match(RustParser.LSQUAREBRACKET);
				this.state = 499;
				this.macroRules();
				this.state = 500;
				this.match(RustParser.RSQUAREBRACKET);
				this.state = 501;
				this.match(RustParser.SEMI);
				}
				break;
			case RustParser.LCURLYBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 503;
				this.match(RustParser.LCURLYBRACE);
				this.state = 504;
				this.macroRules();
				this.state = 505;
				this.match(RustParser.RCURLYBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroRules(): MacroRulesContext {
		let _localctx: MacroRulesContext = new MacroRulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RustParser.RULE_macroRules);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.macroRule();
			this.state = 514;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 510;
					this.match(RustParser.SEMI);
					this.state = 511;
					this.macroRule();
					}
					}
				}
				this.state = 516;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.SEMI) {
				{
				this.state = 517;
				this.match(RustParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroRule(): MacroRuleContext {
		let _localctx: MacroRuleContext = new MacroRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RustParser.RULE_macroRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this.macroMatcher();
			this.state = 521;
			this.match(RustParser.FATARROW);
			this.state = 522;
			this.macroTranscriber();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroMatcher(): MacroMatcherContext {
		let _localctx: MacroMatcherContext = new MacroMatcherContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RustParser.RULE_macroMatcher);
		let _la: number;
		try {
			this.state = 548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 524;
				this.match(RustParser.LPAREN);
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0)) {
					{
					{
					this.state = 525;
					this.macroMatch();
					}
					}
					this.state = 530;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 531;
				this.match(RustParser.RPAREN);
				}
				break;
			case RustParser.LSQUAREBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 532;
				this.match(RustParser.LSQUAREBRACKET);
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0)) {
					{
					{
					this.state = 533;
					this.macroMatch();
					}
					}
					this.state = 538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 539;
				this.match(RustParser.RSQUAREBRACKET);
				}
				break;
			case RustParser.LCURLYBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 540;
				this.match(RustParser.LCURLYBRACE);
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0)) {
					{
					{
					this.state = 541;
					this.macroMatch();
					}
					}
					this.state = 546;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 547;
				this.match(RustParser.RCURLYBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroMatch(): MacroMatchContext {
		let _localctx: MacroMatchContext = new MacroMatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RustParser.RULE_macroMatch);
		let _la: number;
		try {
			let _alt: number;
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 551;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 550;
						this.macroMatchToken();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 553;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 555;
				this.macroMatcher();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 556;
				this.match(RustParser.DOLLAR);
				this.state = 559;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RustParser.KW_MACRORULES:
				case RustParser.NON_KEYWORD_IDENTIFIER:
				case RustParser.RAW_IDENTIFIER:
					{
					this.state = 557;
					this.identifier();
					}
					break;
				case RustParser.KW_SELFVALUE:
					{
					this.state = 558;
					this.match(RustParser.KW_SELFVALUE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 561;
				this.match(RustParser.COLON);
				this.state = 562;
				this.macroFragSpec();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 563;
				this.match(RustParser.DOLLAR);
				this.state = 564;
				this.match(RustParser.LPAREN);
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 565;
					this.macroMatch();
					}
					}
					this.state = 568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.PLUS - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)) | (1 << (RustParser.QUESTION - 101)) | (1 << (RustParser.LCURLYBRACE - 101)) | (1 << (RustParser.LSQUAREBRACKET - 101)) | (1 << (RustParser.LPAREN - 101)))) !== 0));
				this.state = 570;
				this.match(RustParser.RPAREN);
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.SLASH - 69)) | (1 << (RustParser.PERCENT - 69)) | (1 << (RustParser.CARET - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)) | (1 << (RustParser.PLUSEQ - 69)) | (1 << (RustParser.MINUSEQ - 69)) | (1 << (RustParser.STAREQ - 69)) | (1 << (RustParser.SLASHEQ - 69)) | (1 << (RustParser.PERCENTEQ - 69)) | (1 << (RustParser.CARETEQ - 69)) | (1 << (RustParser.ANDEQ - 69)) | (1 << (RustParser.OREQ - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (RustParser.SHLEQ - 101)) | (1 << (RustParser.SHREQ - 101)) | (1 << (RustParser.EQ - 101)) | (1 << (RustParser.EQEQ - 101)) | (1 << (RustParser.NE - 101)) | (1 << (RustParser.GT - 101)) | (1 << (RustParser.LT - 101)) | (1 << (RustParser.GE - 101)) | (1 << (RustParser.LE - 101)) | (1 << (RustParser.AT - 101)) | (1 << (RustParser.UNDERSCORE - 101)) | (1 << (RustParser.DOT - 101)) | (1 << (RustParser.DOTDOT - 101)) | (1 << (RustParser.DOTDOTDOT - 101)) | (1 << (RustParser.DOTDOTEQ - 101)) | (1 << (RustParser.COMMA - 101)) | (1 << (RustParser.SEMI - 101)) | (1 << (RustParser.COLON - 101)) | (1 << (RustParser.PATHSEP - 101)) | (1 << (RustParser.RARROW - 101)) | (1 << (RustParser.FATARROW - 101)) | (1 << (RustParser.POUND - 101)) | (1 << (RustParser.DOLLAR - 101)))) !== 0)) {
					{
					this.state = 571;
					this.macroRepSep();
					}
				}

				this.state = 574;
				this.macroRepOp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroMatchToken(): MacroMatchTokenContext {
		let _localctx: MacroMatchTokenContext = new MacroMatchTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RustParser.RULE_macroMatchToken);
		try {
			this.state = 582;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 578;
				this.macroIdentifierLikeToken();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 579;
				this.macroLiteralToken();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 580;
				this.macroPunctuationToken();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 581;
				this.macroRepOp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroFragSpec(): MacroFragSpecContext {
		let _localctx: MacroFragSpecContext = new MacroFragSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RustParser.RULE_macroFragSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroRepSep(): MacroRepSepContext {
		let _localctx: MacroRepSepContext = new MacroRepSepContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RustParser.RULE_macroRepSep);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 586;
				this.macroIdentifierLikeToken();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 587;
				this.macroLiteralToken();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 588;
				this.macroPunctuationToken();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 589;
				this.match(RustParser.DOLLAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroRepOp(): MacroRepOpContext {
		let _localctx: MacroRepOpContext = new MacroRepOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RustParser.RULE_macroRepOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			_la = this._input.LA(1);
			if (!(_la === RustParser.PLUS || _la === RustParser.STAR || _la === RustParser.QUESTION)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroTranscriber(): MacroTranscriberContext {
		let _localctx: MacroTranscriberContext = new MacroTranscriberContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RustParser.RULE_macroTranscriber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.delimTokenTree();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public item(): ItemContext {
		let _localctx: ItemContext = new ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RustParser.RULE_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 596;
				this.outerAttribute();
				}
				}
				this.state = 601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 604;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_CONST:
			case RustParser.KW_ENUM:
			case RustParser.KW_EXTERN:
			case RustParser.KW_FN:
			case RustParser.KW_IMPL:
			case RustParser.KW_MOD:
			case RustParser.KW_PUB:
			case RustParser.KW_STATIC:
			case RustParser.KW_STRUCT:
			case RustParser.KW_TRAIT:
			case RustParser.KW_TYPE:
			case RustParser.KW_UNSAFE:
			case RustParser.KW_USE:
			case RustParser.KW_ASYNC:
			case RustParser.KW_UNION:
				{
				this.state = 602;
				this.visItem();
				}
				break;
			case RustParser.KW_CRATE:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SUPER:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.PATHSEP:
				{
				this.state = 603;
				this.macroItem();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public visItem(): VisItemContext {
		let _localctx: VisItemContext = new VisItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RustParser.RULE_visItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_PUB) {
				{
				this.state = 606;
				this.visibility();
				}
			}

			this.state = 622;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 609;
				this.module();
				}
				break;

			case 2:
				{
				this.state = 610;
				this.externCrate();
				}
				break;

			case 3:
				{
				this.state = 611;
				this.useDeclaration();
				}
				break;

			case 4:
				{
				this.state = 612;
				this.function_();
				}
				break;

			case 5:
				{
				this.state = 613;
				this.typeAlias();
				}
				break;

			case 6:
				{
				this.state = 614;
				this.struct_();
				}
				break;

			case 7:
				{
				this.state = 615;
				this.enumeration();
				}
				break;

			case 8:
				{
				this.state = 616;
				this.union_();
				}
				break;

			case 9:
				{
				this.state = 617;
				this.constantItem();
				}
				break;

			case 10:
				{
				this.state = 618;
				this.staticItem();
				}
				break;

			case 11:
				{
				this.state = 619;
				this.trait_();
				}
				break;

			case 12:
				{
				this.state = 620;
				this.implementation();
				}
				break;

			case 13:
				{
				this.state = 621;
				this.externBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroItem(): MacroItemContext {
		let _localctx: MacroItemContext = new MacroItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RustParser.RULE_macroItem);
		try {
			this.state = 626;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 624;
				this.macroInvocationSemi();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 625;
				this.macroRulesDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RustParser.RULE_module);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_UNSAFE) {
				{
				this.state = 628;
				this.match(RustParser.KW_UNSAFE);
				}
			}

			this.state = 631;
			this.match(RustParser.KW_MOD);
			this.state = 632;
			this.identifier();
			this.state = 648;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.SEMI:
				{
				this.state = 633;
				this.match(RustParser.SEMI);
				}
				break;
			case RustParser.LCURLYBRACE:
				{
				this.state = 634;
				this.match(RustParser.LCURLYBRACE);
				this.state = 638;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 635;
						this.innerAttribute();
						}
						}
					}
					this.state = 640;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CONST) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || _la === RustParser.PATHSEP || _la === RustParser.POUND) {
					{
					{
					this.state = 641;
					this.item();
					}
					}
					this.state = 646;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 647;
				this.match(RustParser.RCURLYBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externCrate(): ExternCrateContext {
		let _localctx: ExternCrateContext = new ExternCrateContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RustParser.RULE_externCrate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.match(RustParser.KW_EXTERN);
			this.state = 651;
			this.match(RustParser.KW_CRATE);
			this.state = 652;
			this.crateRef();
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_AS) {
				{
				this.state = 653;
				this.asClause();
				}
			}

			this.state = 656;
			this.match(RustParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public crateRef(): CrateRefContext {
		let _localctx: CrateRefContext = new CrateRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RustParser.RULE_crateRef);
		try {
			this.state = 660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_MACRORULES:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 658;
				this.identifier();
				}
				break;
			case RustParser.KW_SELFVALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 659;
				this.match(RustParser.KW_SELFVALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asClause(): AsClauseContext {
		let _localctx: AsClauseContext = new AsClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RustParser.RULE_asClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.match(RustParser.KW_AS);
			this.state = 665;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_MACRORULES:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
				{
				this.state = 663;
				this.identifier();
				}
				break;
			case RustParser.UNDERSCORE:
				{
				this.state = 664;
				this.match(RustParser.UNDERSCORE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useDeclaration(): UseDeclarationContext {
		let _localctx: UseDeclarationContext = new UseDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RustParser.RULE_useDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this.match(RustParser.KW_USE);
			this.state = 668;
			this.useTree();
			this.state = 669;
			this.match(RustParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useTree(): UseTreeContext {
		let _localctx: UseTreeContext = new UseTreeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RustParser.RULE_useTree);
		let _la: number;
		try {
			let _alt: number;
			this.state = 703;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.KW_DOLLARCRATE - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)))) !== 0) || _la === RustParser.PATHSEP) {
					{
					this.state = 672;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
					case 1:
						{
						this.state = 671;
						this.simplePath();
						}
						break;
					}
					this.state = 674;
					this.match(RustParser.PATHSEP);
					}
				}

				this.state = 693;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RustParser.STAR:
					{
					this.state = 677;
					this.match(RustParser.STAR);
					}
					break;
				case RustParser.LCURLYBRACE:
					{
					this.state = 678;
					this.match(RustParser.LCURLYBRACE);
					this.state = 690;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.KW_DOLLARCRATE - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)) | (1 << (RustParser.STAR - 54)))) !== 0) || _la === RustParser.PATHSEP || _la === RustParser.LCURLYBRACE) {
						{
						this.state = 679;
						this.useTree();
						this.state = 684;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 680;
								this.match(RustParser.COMMA);
								this.state = 681;
								this.useTree();
								}
								}
							}
							this.state = 686;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
						}
						this.state = 688;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === RustParser.COMMA) {
							{
							this.state = 687;
							this.match(RustParser.COMMA);
							}
						}

						}
					}

					this.state = 692;
					this.match(RustParser.RCURLYBRACE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 695;
				this.simplePath();
				this.state = 701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.KW_AS) {
					{
					this.state = 696;
					this.match(RustParser.KW_AS);
					this.state = 699;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RustParser.KW_MACRORULES:
					case RustParser.NON_KEYWORD_IDENTIFIER:
					case RustParser.RAW_IDENTIFIER:
						{
						this.state = 697;
						this.identifier();
						}
						break;
					case RustParser.UNDERSCORE:
						{
						this.state = 698;
						this.match(RustParser.UNDERSCORE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_(): Function_Context {
		let _localctx: Function_Context = new Function_Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, RustParser.RULE_function_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 705;
			this.functionQualifiers();
			this.state = 706;
			this.match(RustParser.KW_FN);
			this.state = 707;
			this.identifier();
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.LT) {
				{
				this.state = 708;
				this.genericParams();
				}
			}

			this.state = 711;
			this.match(RustParser.LPAREN);
			this.state = 713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.UNDERSCORE - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTDOT - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.QUESTION - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
				{
				this.state = 712;
				this.functionParameters();
				}
			}

			this.state = 715;
			this.match(RustParser.RPAREN);
			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.RARROW) {
				{
				this.state = 716;
				this.functionReturnType();
				}
			}

			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_WHERE) {
				{
				this.state = 719;
				this.whereClause();
				}
			}

			this.state = 724;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.LCURLYBRACE:
				{
				this.state = 722;
				this.blockExpression();
				}
				break;
			case RustParser.SEMI:
				{
				this.state = 723;
				this.match(RustParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionQualifiers(): FunctionQualifiersContext {
		let _localctx: FunctionQualifiersContext = new FunctionQualifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, RustParser.RULE_functionQualifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_CONST) {
				{
				this.state = 726;
				this.match(RustParser.KW_CONST);
				}
			}

			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_ASYNC) {
				{
				this.state = 729;
				this.match(RustParser.KW_ASYNC);
				}
			}

			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_UNSAFE) {
				{
				this.state = 732;
				this.match(RustParser.KW_UNSAFE);
				}
			}

			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_EXTERN) {
				{
				this.state = 735;
				this.match(RustParser.KW_EXTERN);
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.STRING_LITERAL || _la === RustParser.RAW_STRING_LITERAL) {
					{
					this.state = 736;
					this.abi();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abi(): AbiContext {
		let _localctx: AbiContext = new AbiContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RustParser.RULE_abi);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			_la = this._input.LA(1);
			if (!(_la === RustParser.STRING_LITERAL || _la === RustParser.RAW_STRING_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParameters(): FunctionParametersContext {
		let _localctx: FunctionParametersContext = new FunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RustParser.RULE_functionParameters);
		let _la: number;
		try {
			let _alt: number;
			this.state = 763;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 743;
				this.selfParam();
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 744;
					this.match(RustParser.COMMA);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 750;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 747;
					this.selfParam();
					this.state = 748;
					this.match(RustParser.COMMA);
					}
					break;
				}
				this.state = 752;
				this.functionParam();
				this.state = 757;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 753;
						this.match(RustParser.COMMA);
						this.state = 754;
						this.functionParam();
						}
						}
					}
					this.state = 759;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				}
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 760;
					this.match(RustParser.COMMA);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selfParam(): SelfParamContext {
		let _localctx: SelfParamContext = new SelfParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, RustParser.RULE_selfParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 765;
				this.outerAttribute();
				}
				}
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 773;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 771;
				this.shorthandSelf();
				}
				break;

			case 2:
				{
				this.state = 772;
				this.typedSelf();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shorthandSelf(): ShorthandSelfContext {
		let _localctx: ShorthandSelfContext = new ShorthandSelfContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RustParser.RULE_shorthandSelf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.AND) {
				{
				this.state = 775;
				this.match(RustParser.AND);
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (RustParser.KW_STATICLIFETIME - 53)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 53)) | (1 << (RustParser.LIFETIME_OR_LABEL - 53)))) !== 0)) {
					{
					this.state = 776;
					this.lifetime();
					}
				}

				}
			}

			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_MUT) {
				{
				this.state = 781;
				this.match(RustParser.KW_MUT);
				}
			}

			this.state = 784;
			this.match(RustParser.KW_SELFVALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedSelf(): TypedSelfContext {
		let _localctx: TypedSelfContext = new TypedSelfContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, RustParser.RULE_typedSelf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_MUT) {
				{
				this.state = 786;
				this.match(RustParser.KW_MUT);
				}
			}

			this.state = 789;
			this.match(RustParser.KW_SELFVALUE);
			this.state = 790;
			this.match(RustParser.COLON);
			this.state = 791;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParam(): FunctionParamContext {
		let _localctx: FunctionParamContext = new FunctionParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RustParser.RULE_functionParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 793;
				this.outerAttribute();
				}
				}
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 802;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 799;
				this.functionParamPattern();
				}
				break;

			case 2:
				{
				this.state = 800;
				this.match(RustParser.DOTDOTDOT);
				}
				break;

			case 3:
				{
				this.state = 801;
				this.type_();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParamPattern(): FunctionParamPatternContext {
		let _localctx: FunctionParamPatternContext = new FunctionParamPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, RustParser.RULE_functionParamPattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.pattern();
			this.state = 805;
			this.match(RustParser.COLON);
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_CRATE:
			case RustParser.KW_EXTERN:
			case RustParser.KW_FN:
			case RustParser.KW_FOR:
			case RustParser.KW_IMPL:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SELFTYPE:
			case RustParser.KW_SUPER:
			case RustParser.KW_UNSAFE:
			case RustParser.KW_DYN:
			case RustParser.KW_STATICLIFETIME:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_UNDERLINELIFETIME:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.LIFETIME_OR_LABEL:
			case RustParser.STAR:
			case RustParser.NOT:
			case RustParser.AND:
			case RustParser.LT:
			case RustParser.UNDERSCORE:
			case RustParser.PATHSEP:
			case RustParser.QUESTION:
			case RustParser.LSQUAREBRACKET:
			case RustParser.LPAREN:
				{
				this.state = 806;
				this.type_();
				}
				break;
			case RustParser.DOTDOTDOT:
				{
				this.state = 807;
				this.match(RustParser.DOTDOTDOT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionReturnType(): FunctionReturnTypeContext {
		let _localctx: FunctionReturnTypeContext = new FunctionReturnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, RustParser.RULE_functionReturnType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(RustParser.RARROW);
			this.state = 811;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAlias(): TypeAliasContext {
		let _localctx: TypeAliasContext = new TypeAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, RustParser.RULE_typeAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this.match(RustParser.KW_TYPE);
			this.state = 814;
			this.identifier();
			this.state = 816;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.LT) {
				{
				this.state = 815;
				this.genericParams();
				}
			}

			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_WHERE) {
				{
				this.state = 818;
				this.whereClause();
				}
			}

			this.state = 823;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.EQ) {
				{
				this.state = 821;
				this.match(RustParser.EQ);
				this.state = 822;
				this.type_();
				}
			}

			this.state = 825;
			this.match(RustParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_(): Struct_Context {
		let _localctx: Struct_Context = new Struct_Context(this._ctx, this.state);
		this.enterRule(_localctx, 74, RustParser.RULE_struct_);
		try {
			this.state = 829;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 827;
				this.structStruct();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 828;
				this.tupleStruct();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structStruct(): StructStructContext {
		let _localctx: StructStructContext = new StructStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, RustParser.RULE_structStruct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 831;
			this.match(RustParser.KW_STRUCT);
			this.state = 832;
			this.identifier();
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.LT) {
				{
				this.state = 833;
				this.genericParams();
				}
			}

			this.state = 837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_WHERE) {
				{
				this.state = 836;
				this.whereClause();
				}
			}

			this.state = 845;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.LCURLYBRACE:
				{
				this.state = 839;
				this.match(RustParser.LCURLYBRACE);
				this.state = 841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.KW_PUB || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)))) !== 0) || _la === RustParser.POUND) {
					{
					this.state = 840;
					this.structFields();
					}
				}

				this.state = 843;
				this.match(RustParser.RCURLYBRACE);
				}
				break;
			case RustParser.SEMI:
				{
				this.state = 844;
				this.match(RustParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleStruct(): TupleStructContext {
		let _localctx: TupleStructContext = new TupleStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, RustParser.RULE_tupleStruct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this.match(RustParser.KW_STRUCT);
			this.state = 848;
			this.identifier();
			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.LT) {
				{
				this.state = 849;
				this.genericParams();
				}
			}

			this.state = 852;
			this.match(RustParser.LPAREN);
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (RustParser.LIFETIME_OR_LABEL - 81)) | (1 << (RustParser.STAR - 81)) | (1 << (RustParser.NOT - 81)) | (1 << (RustParser.AND - 81)) | (1 << (RustParser.LT - 81)) | (1 << (RustParser.UNDERSCORE - 81)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.POUND - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LSQUAREBRACKET - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
				{
				this.state = 853;
				this.tupleFields();
				}
			}

			this.state = 856;
			this.match(RustParser.RPAREN);
			this.state = 858;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_WHERE) {
				{
				this.state = 857;
				this.whereClause();
				}
			}

			this.state = 860;
			this.match(RustParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structFields(): StructFieldsContext {
		let _localctx: StructFieldsContext = new StructFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, RustParser.RULE_structFields);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 862;
			this.structField();
			this.state = 867;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 863;
					this.match(RustParser.COMMA);
					this.state = 864;
					this.structField();
					}
					}
				}
				this.state = 869;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			}
			this.state = 871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 870;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structField(): StructFieldContext {
		let _localctx: StructFieldContext = new StructFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, RustParser.RULE_structField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 873;
				this.outerAttribute();
				}
				}
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 880;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_PUB) {
				{
				this.state = 879;
				this.visibility();
				}
			}

			this.state = 882;
			this.identifier();
			this.state = 883;
			this.match(RustParser.COLON);
			this.state = 884;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleFields(): TupleFieldsContext {
		let _localctx: TupleFieldsContext = new TupleFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, RustParser.RULE_tupleFields);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 886;
			this.tupleField();
			this.state = 891;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 887;
					this.match(RustParser.COMMA);
					this.state = 888;
					this.tupleField();
					}
					}
				}
				this.state = 893;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			}
			this.state = 895;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 894;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleField(): TupleFieldContext {
		let _localctx: TupleFieldContext = new TupleFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, RustParser.RULE_tupleField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 900;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 897;
				this.outerAttribute();
				}
				}
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_PUB) {
				{
				this.state = 903;
				this.visibility();
				}
			}

			this.state = 906;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeration(): EnumerationContext {
		let _localctx: EnumerationContext = new EnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, RustParser.RULE_enumeration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 908;
			this.match(RustParser.KW_ENUM);
			this.state = 909;
			this.identifier();
			this.state = 911;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.LT) {
				{
				this.state = 910;
				this.genericParams();
				}
			}

			this.state = 914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_WHERE) {
				{
				this.state = 913;
				this.whereClause();
				}
			}

			this.state = 916;
			this.match(RustParser.LCURLYBRACE);
			this.state = 918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_PUB || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)))) !== 0) || _la === RustParser.POUND) {
				{
				this.state = 917;
				this.enumItems();
				}
			}

			this.state = 920;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumItems(): EnumItemsContext {
		let _localctx: EnumItemsContext = new EnumItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, RustParser.RULE_enumItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			this.enumItem();
			this.state = 927;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 923;
					this.match(RustParser.COMMA);
					this.state = 924;
					this.enumItem();
					}
					}
				}
				this.state = 929;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 930;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumItem(): EnumItemContext {
		let _localctx: EnumItemContext = new EnumItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, RustParser.RULE_enumItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 933;
				this.outerAttribute();
				}
				}
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 940;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_PUB) {
				{
				this.state = 939;
				this.visibility();
				}
			}

			this.state = 942;
			this.identifier();
			this.state = 946;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.LPAREN:
				{
				this.state = 943;
				this.enumItemTuple();
				}
				break;
			case RustParser.LCURLYBRACE:
				{
				this.state = 944;
				this.enumItemStruct();
				}
				break;
			case RustParser.EQ:
				{
				this.state = 945;
				this.enumItemDiscriminant();
				}
				break;
			case RustParser.COMMA:
			case RustParser.RCURLYBRACE:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumItemTuple(): EnumItemTupleContext {
		let _localctx: EnumItemTupleContext = new EnumItemTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, RustParser.RULE_enumItemTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 948;
			this.match(RustParser.LPAREN);
			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (RustParser.LIFETIME_OR_LABEL - 81)) | (1 << (RustParser.STAR - 81)) | (1 << (RustParser.NOT - 81)) | (1 << (RustParser.AND - 81)) | (1 << (RustParser.LT - 81)) | (1 << (RustParser.UNDERSCORE - 81)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.POUND - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LSQUAREBRACKET - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
				{
				this.state = 949;
				this.tupleFields();
				}
			}

			this.state = 952;
			this.match(RustParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumItemStruct(): EnumItemStructContext {
		let _localctx: EnumItemStructContext = new EnumItemStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, RustParser.RULE_enumItemStruct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(RustParser.LCURLYBRACE);
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_PUB || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)))) !== 0) || _la === RustParser.POUND) {
				{
				this.state = 955;
				this.structFields();
				}
			}

			this.state = 958;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumItemDiscriminant(): EnumItemDiscriminantContext {
		let _localctx: EnumItemDiscriminantContext = new EnumItemDiscriminantContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, RustParser.RULE_enumItemDiscriminant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
			this.match(RustParser.EQ);
			this.state = 961;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public union_(): Union_Context {
		let _localctx: Union_Context = new Union_Context(this._ctx, this.state);
		this.enterRule(_localctx, 100, RustParser.RULE_union_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 963;
			this.match(RustParser.KW_UNION);
			this.state = 964;
			this.identifier();
			this.state = 966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.LT) {
				{
				this.state = 965;
				this.genericParams();
				}
			}

			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_WHERE) {
				{
				this.state = 968;
				this.whereClause();
				}
			}

			this.state = 971;
			this.match(RustParser.LCURLYBRACE);
			this.state = 972;
			this.structFields();
			this.state = 973;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantItem(): ConstantItemContext {
		let _localctx: ConstantItemContext = new ConstantItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, RustParser.RULE_constantItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 975;
			this.match(RustParser.KW_CONST);
			this.state = 978;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_MACRORULES:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
				{
				this.state = 976;
				this.identifier();
				}
				break;
			case RustParser.UNDERSCORE:
				{
				this.state = 977;
				this.match(RustParser.UNDERSCORE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 980;
			this.match(RustParser.COLON);
			this.state = 981;
			this.type_();
			this.state = 984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.EQ) {
				{
				this.state = 982;
				this.match(RustParser.EQ);
				this.state = 983;
				this.expression(0);
				}
			}

			this.state = 986;
			this.match(RustParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticItem(): StaticItemContext {
		let _localctx: StaticItemContext = new StaticItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, RustParser.RULE_staticItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this.match(RustParser.KW_STATIC);
			this.state = 990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_MUT) {
				{
				this.state = 989;
				this.match(RustParser.KW_MUT);
				}
			}

			this.state = 992;
			this.identifier();
			this.state = 993;
			this.match(RustParser.COLON);
			this.state = 994;
			this.type_();
			this.state = 997;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.EQ) {
				{
				this.state = 995;
				this.match(RustParser.EQ);
				this.state = 996;
				this.expression(0);
				}
			}

			this.state = 999;
			this.match(RustParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trait_(): Trait_Context {
		let _localctx: Trait_Context = new Trait_Context(this._ctx, this.state);
		this.enterRule(_localctx, 106, RustParser.RULE_trait_);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_UNSAFE) {
				{
				this.state = 1001;
				this.match(RustParser.KW_UNSAFE);
				}
			}

			this.state = 1004;
			this.match(RustParser.KW_TRAIT);
			this.state = 1005;
			this.identifier();
			this.state = 1007;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.LT) {
				{
				this.state = 1006;
				this.genericParams();
				}
			}

			this.state = 1013;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COLON) {
				{
				this.state = 1009;
				this.match(RustParser.COLON);
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (RustParser.KW_STATICLIFETIME - 53)) | (1 << (RustParser.KW_MACRORULES - 53)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 53)) | (1 << (RustParser.KW_DOLLARCRATE - 53)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 53)) | (1 << (RustParser.RAW_IDENTIFIER - 53)) | (1 << (RustParser.LIFETIME_OR_LABEL - 53)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
					{
					this.state = 1010;
					this.typeParamBounds();
					}
				}

				}
			}

			this.state = 1016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_WHERE) {
				{
				this.state = 1015;
				this.whereClause();
				}
			}

			this.state = 1018;
			this.match(RustParser.LCURLYBRACE);
			this.state = 1022;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1019;
					this.innerAttribute();
					}
					}
				}
				this.state = 1024;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			}
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CONST) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || _la === RustParser.PATHSEP || _la === RustParser.POUND) {
				{
				{
				this.state = 1025;
				this.associatedItem();
				}
				}
				this.state = 1030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1031;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementation(): ImplementationContext {
		let _localctx: ImplementationContext = new ImplementationContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, RustParser.RULE_implementation);
		try {
			this.state = 1035;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1033;
				this.inherentImpl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1034;
				this.traitImpl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inherentImpl(): InherentImplContext {
		let _localctx: InherentImplContext = new InherentImplContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, RustParser.RULE_inherentImpl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1037;
			this.match(RustParser.KW_IMPL);
			this.state = 1039;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 1038;
				this.genericParams();
				}
				break;
			}
			this.state = 1041;
			this.type_();
			this.state = 1043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_WHERE) {
				{
				this.state = 1042;
				this.whereClause();
				}
			}

			this.state = 1045;
			this.match(RustParser.LCURLYBRACE);
			this.state = 1049;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1046;
					this.innerAttribute();
					}
					}
				}
				this.state = 1051;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			}
			this.state = 1055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CONST) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || _la === RustParser.PATHSEP || _la === RustParser.POUND) {
				{
				{
				this.state = 1052;
				this.associatedItem();
				}
				}
				this.state = 1057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1058;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public traitImpl(): TraitImplContext {
		let _localctx: TraitImplContext = new TraitImplContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, RustParser.RULE_traitImpl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_UNSAFE) {
				{
				this.state = 1060;
				this.match(RustParser.KW_UNSAFE);
				}
			}

			this.state = 1063;
			this.match(RustParser.KW_IMPL);
			this.state = 1065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.LT) {
				{
				this.state = 1064;
				this.genericParams();
				}
			}

			this.state = 1068;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.NOT) {
				{
				this.state = 1067;
				this.match(RustParser.NOT);
				}
			}

			this.state = 1070;
			this.typePath();
			this.state = 1071;
			this.match(RustParser.KW_FOR);
			this.state = 1072;
			this.type_();
			this.state = 1074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_WHERE) {
				{
				this.state = 1073;
				this.whereClause();
				}
			}

			this.state = 1076;
			this.match(RustParser.LCURLYBRACE);
			this.state = 1080;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1077;
					this.innerAttribute();
					}
					}
				}
				this.state = 1082;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			}
			this.state = 1086;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CONST) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || _la === RustParser.PATHSEP || _la === RustParser.POUND) {
				{
				{
				this.state = 1083;
				this.associatedItem();
				}
				}
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1089;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externBlock(): ExternBlockContext {
		let _localctx: ExternBlockContext = new ExternBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, RustParser.RULE_externBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1092;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_UNSAFE) {
				{
				this.state = 1091;
				this.match(RustParser.KW_UNSAFE);
				}
			}

			this.state = 1094;
			this.match(RustParser.KW_EXTERN);
			this.state = 1096;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.STRING_LITERAL || _la === RustParser.RAW_STRING_LITERAL) {
				{
				this.state = 1095;
				this.abi();
				}
			}

			this.state = 1098;
			this.match(RustParser.LCURLYBRACE);
			this.state = 1102;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1099;
					this.innerAttribute();
					}
					}
				}
				this.state = 1104;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			}
			this.state = 1108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CONST) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || _la === RustParser.PATHSEP || _la === RustParser.POUND) {
				{
				{
				this.state = 1105;
				this.externalItem();
				}
				}
				this.state = 1110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1111;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externalItem(): ExternalItemContext {
		let _localctx: ExternalItemContext = new ExternalItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, RustParser.RULE_externalItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 1113;
				this.outerAttribute();
				}
				}
				this.state = 1118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_CRATE:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SUPER:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.PATHSEP:
				{
				this.state = 1119;
				this.macroInvocationSemi();
				}
				break;
			case RustParser.KW_CONST:
			case RustParser.KW_EXTERN:
			case RustParser.KW_FN:
			case RustParser.KW_PUB:
			case RustParser.KW_STATIC:
			case RustParser.KW_UNSAFE:
			case RustParser.KW_ASYNC:
				{
				this.state = 1121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.KW_PUB) {
					{
					this.state = 1120;
					this.visibility();
					}
				}

				this.state = 1125;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RustParser.KW_STATIC:
					{
					this.state = 1123;
					this.staticItem();
					}
					break;
				case RustParser.KW_CONST:
				case RustParser.KW_EXTERN:
				case RustParser.KW_FN:
				case RustParser.KW_UNSAFE:
				case RustParser.KW_ASYNC:
					{
					this.state = 1124;
					this.function_();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericParams(): GenericParamsContext {
		let _localctx: GenericParamsContext = new GenericParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, RustParser.RULE_genericParams);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1129;
			this.match(RustParser.LT);
			this.state = 1142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_CONST || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)) | (1 << (RustParser.LIFETIME_OR_LABEL - 54)))) !== 0) || _la === RustParser.POUND) {
				{
				this.state = 1135;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1130;
						this.genericParam();
						this.state = 1131;
						this.match(RustParser.COMMA);
						}
						}
					}
					this.state = 1137;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
				}
				this.state = 1138;
				this.genericParam();
				this.state = 1140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 1139;
					this.match(RustParser.COMMA);
					}
				}

				}
			}

			this.state = 1144;
			this.match(RustParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericParam(): GenericParamContext {
		let _localctx: GenericParamContext = new GenericParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, RustParser.RULE_genericParam);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1146;
					this.outerAttribute();
					}
					}
				}
				this.state = 1151;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
			}
			this.state = 1155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1152;
				this.lifetimeParam();
				}
				break;

			case 2:
				{
				this.state = 1153;
				this.typeParam();
				}
				break;

			case 3:
				{
				this.state = 1154;
				this.constParam();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lifetimeParam(): LifetimeParamContext {
		let _localctx: LifetimeParamContext = new LifetimeParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, RustParser.RULE_lifetimeParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.POUND) {
				{
				this.state = 1157;
				this.outerAttribute();
				}
			}

			this.state = 1160;
			this.match(RustParser.LIFETIME_OR_LABEL);
			this.state = 1163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COLON) {
				{
				this.state = 1161;
				this.match(RustParser.COLON);
				this.state = 1162;
				this.lifetimeBounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParam(): TypeParamContext {
		let _localctx: TypeParamContext = new TypeParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, RustParser.RULE_typeParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.POUND) {
				{
				this.state = 1165;
				this.outerAttribute();
				}
			}

			this.state = 1168;
			this.identifier();
			this.state = 1173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COLON) {
				{
				this.state = 1169;
				this.match(RustParser.COLON);
				this.state = 1171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (RustParser.KW_STATICLIFETIME - 53)) | (1 << (RustParser.KW_MACRORULES - 53)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 53)) | (1 << (RustParser.KW_DOLLARCRATE - 53)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 53)) | (1 << (RustParser.RAW_IDENTIFIER - 53)) | (1 << (RustParser.LIFETIME_OR_LABEL - 53)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
					{
					this.state = 1170;
					this.typeParamBounds();
					}
				}

				}
			}

			this.state = 1177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.EQ) {
				{
				this.state = 1175;
				this.match(RustParser.EQ);
				this.state = 1176;
				this.type_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constParam(): ConstParamContext {
		let _localctx: ConstParamContext = new ConstParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, RustParser.RULE_constParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1179;
			this.match(RustParser.KW_CONST);
			this.state = 1180;
			this.identifier();
			this.state = 1181;
			this.match(RustParser.COLON);
			this.state = 1182;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, RustParser.RULE_whereClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1184;
			this.match(RustParser.KW_WHERE);
			this.state = 1190;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1185;
					this.whereClauseItem();
					this.state = 1186;
					this.match(RustParser.COMMA);
					}
					}
				}
				this.state = 1192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			}
			this.state = 1194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (RustParser.LIFETIME_OR_LABEL - 81)) | (1 << (RustParser.STAR - 81)) | (1 << (RustParser.NOT - 81)) | (1 << (RustParser.AND - 81)) | (1 << (RustParser.LT - 81)) | (1 << (RustParser.UNDERSCORE - 81)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LSQUAREBRACKET - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
				{
				this.state = 1193;
				this.whereClauseItem();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereClauseItem(): WhereClauseItemContext {
		let _localctx: WhereClauseItemContext = new WhereClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, RustParser.RULE_whereClauseItem);
		try {
			this.state = 1198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1196;
				this.lifetimeWhereClauseItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1197;
				this.typeBoundWhereClauseItem();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lifetimeWhereClauseItem(): LifetimeWhereClauseItemContext {
		let _localctx: LifetimeWhereClauseItemContext = new LifetimeWhereClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, RustParser.RULE_lifetimeWhereClauseItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1200;
			this.lifetime();
			this.state = 1201;
			this.match(RustParser.COLON);
			this.state = 1202;
			this.lifetimeBounds();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBoundWhereClauseItem(): TypeBoundWhereClauseItemContext {
		let _localctx: TypeBoundWhereClauseItemContext = new TypeBoundWhereClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, RustParser.RULE_typeBoundWhereClauseItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1205;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1204;
				this.forLifetimes();
				}
				break;
			}
			this.state = 1207;
			this.type_();
			this.state = 1208;
			this.match(RustParser.COLON);
			this.state = 1210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (RustParser.KW_STATICLIFETIME - 53)) | (1 << (RustParser.KW_MACRORULES - 53)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 53)) | (1 << (RustParser.KW_DOLLARCRATE - 53)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 53)) | (1 << (RustParser.RAW_IDENTIFIER - 53)) | (1 << (RustParser.LIFETIME_OR_LABEL - 53)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
				{
				this.state = 1209;
				this.typeParamBounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forLifetimes(): ForLifetimesContext {
		let _localctx: ForLifetimesContext = new ForLifetimesContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, RustParser.RULE_forLifetimes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1212;
			this.match(RustParser.KW_FOR);
			this.state = 1213;
			this.genericParams();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public associatedItem(): AssociatedItemContext {
		let _localctx: AssociatedItemContext = new AssociatedItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, RustParser.RULE_associatedItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 1215;
				this.outerAttribute();
				}
				}
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_CRATE:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SUPER:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.PATHSEP:
				{
				this.state = 1221;
				this.macroInvocationSemi();
				}
				break;
			case RustParser.KW_CONST:
			case RustParser.KW_EXTERN:
			case RustParser.KW_FN:
			case RustParser.KW_PUB:
			case RustParser.KW_TYPE:
			case RustParser.KW_UNSAFE:
			case RustParser.KW_ASYNC:
				{
				this.state = 1223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.KW_PUB) {
					{
					this.state = 1222;
					this.visibility();
					}
				}

				this.state = 1228;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
				case 1:
					{
					this.state = 1225;
					this.typeAlias();
					}
					break;

				case 2:
					{
					this.state = 1226;
					this.constantItem();
					}
					break;

				case 3:
					{
					this.state = 1227;
					this.function_();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerAttribute(): InnerAttributeContext {
		let _localctx: InnerAttributeContext = new InnerAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, RustParser.RULE_innerAttribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this.match(RustParser.POUND);
			this.state = 1233;
			this.match(RustParser.NOT);
			this.state = 1234;
			this.match(RustParser.LSQUAREBRACKET);
			this.state = 1235;
			this.attr();
			this.state = 1236;
			this.match(RustParser.RSQUAREBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outerAttribute(): OuterAttributeContext {
		let _localctx: OuterAttributeContext = new OuterAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, RustParser.RULE_outerAttribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1238;
			this.match(RustParser.POUND);
			this.state = 1239;
			this.match(RustParser.LSQUAREBRACKET);
			this.state = 1240;
			this.attr();
			this.state = 1241;
			this.match(RustParser.RSQUAREBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr(): AttrContext {
		let _localctx: AttrContext = new AttrContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, RustParser.RULE_attr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			this.simplePath();
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (RustParser.EQ - 103)) | (1 << (RustParser.LCURLYBRACE - 103)) | (1 << (RustParser.LSQUAREBRACKET - 103)) | (1 << (RustParser.LPAREN - 103)))) !== 0)) {
				{
				this.state = 1244;
				this.attrInput();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrInput(): AttrInputContext {
		let _localctx: AttrInputContext = new AttrInputContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, RustParser.RULE_attrInput);
		try {
			this.state = 1250;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.LCURLYBRACE:
			case RustParser.LSQUAREBRACKET:
			case RustParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1247;
				this.delimTokenTree();
				}
				break;
			case RustParser.EQ:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1248;
				this.match(RustParser.EQ);
				this.state = 1249;
				this.literalExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, RustParser.RULE_statement);
		try {
			this.state = 1257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1252;
				this.match(RustParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1253;
				this.item();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1254;
				this.letStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1255;
				this.expressionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1256;
				this.macroInvocationSemi();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letStatement(): LetStatementContext {
		let _localctx: LetStatementContext = new LetStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, RustParser.RULE_letStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 1259;
				this.outerAttribute();
				}
				}
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1265;
			this.match(RustParser.KW_LET);
			this.state = 1266;
			this.patternNoTopAlt();
			this.state = 1269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COLON) {
				{
				this.state = 1267;
				this.match(RustParser.COLON);
				this.state = 1268;
				this.type_();
				}
			}

			this.state = 1273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.EQ) {
				{
				this.state = 1271;
				this.match(RustParser.EQ);
				this.state = 1272;
				this.expression(0);
				}
			}

			this.state = 1275;
			this.match(RustParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, RustParser.RULE_expressionStatement);
		try {
			this.state = 1284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1277;
				this.expression(0);
				this.state = 1278;
				this.match(RustParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1280;
				this.expressionWithBlock();
				this.state = 1282;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
				case 1:
					{
					this.state = 1281;
					this.match(RustParser.SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 154;
		this.enterRecursionRule(_localctx, 154, RustParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				{
				_localctx = new AttributedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1288;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1287;
						this.outerAttribute();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1290;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1292;
				this.expression(40);
				}
				break;

			case 2:
				{
				_localctx = new LiteralExpression_Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1294;
				this.literalExpression();
				}
				break;

			case 3:
				{
				_localctx = new PathExpression_Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1295;
				this.pathExpression();
				}
				break;

			case 4:
				{
				_localctx = new BorrowExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1296;
				_la = this._input.LA(1);
				if (!(_la === RustParser.AND || _la === RustParser.ANDAND)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.KW_MUT) {
					{
					this.state = 1297;
					this.match(RustParser.KW_MUT);
					}
				}

				this.state = 1300;
				this.expression(30);
				}
				break;

			case 5:
				{
				_localctx = new DereferenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1301;
				this.match(RustParser.STAR);
				this.state = 1302;
				this.expression(29);
				}
				break;

			case 6:
				{
				_localctx = new NegationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1303;
				_la = this._input.LA(1);
				if (!(_la === RustParser.MINUS || _la === RustParser.NOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1304;
				this.expression(28);
				}
				break;

			case 7:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1305;
				this.match(RustParser.DOTDOT);
				this.state = 1307;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
				case 1:
					{
					this.state = 1306;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 8:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1309;
				this.match(RustParser.DOTDOTEQ);
				this.state = 1310;
				this.expression(15);
				}
				break;

			case 9:
				{
				_localctx = new ContinueExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1311;
				this.match(RustParser.KW_CONTINUE);
				this.state = 1313;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
				case 1:
					{
					this.state = 1312;
					this.match(RustParser.LIFETIME_OR_LABEL);
					}
					break;
				}
				this.state = 1316;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
				case 1:
					{
					this.state = 1315;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 10:
				{
				_localctx = new BreakExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1318;
				this.match(RustParser.KW_BREAK);
				this.state = 1320;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1319;
					this.match(RustParser.LIFETIME_OR_LABEL);
					}
					break;
				}
				this.state = 1323;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
				case 1:
					{
					this.state = 1322;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 11:
				{
				_localctx = new ReturnExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1325;
				this.match(RustParser.KW_RETURN);
				this.state = 1327;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
				case 1:
					{
					this.state = 1326;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 12:
				{
				_localctx = new GroupedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1329;
				this.match(RustParser.LPAREN);
				this.state = 1333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1330;
						this.innerAttribute();
						}
						}
					}
					this.state = 1335;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
				}
				this.state = 1336;
				this.expression(0);
				this.state = 1337;
				this.match(RustParser.RPAREN);
				}
				break;

			case 13:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1339;
				this.match(RustParser.LSQUAREBRACKET);
				this.state = 1343;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1340;
						this.innerAttribute();
						}
						}
					}
					this.state = 1345;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				}
				this.state = 1347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTEQ - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.LCURLYBRACE - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
					{
					this.state = 1346;
					this.arrayElements();
					}
				}

				this.state = 1349;
				this.match(RustParser.RSQUAREBRACKET);
				}
				break;

			case 14:
				{
				_localctx = new TupleExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1350;
				this.match(RustParser.LPAREN);
				this.state = 1354;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1351;
						this.innerAttribute();
						}
						}
					}
					this.state = 1356;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
				}
				this.state = 1358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTEQ - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.LCURLYBRACE - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
					{
					this.state = 1357;
					this.tupleElements();
					}
				}

				this.state = 1360;
				this.match(RustParser.RPAREN);
				}
				break;

			case 15:
				{
				_localctx = new StructExpression_Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1361;
				this.structExpression();
				}
				break;

			case 16:
				{
				_localctx = new EnumerationVariantExpression_Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1362;
				this.enumerationVariantExpression();
				}
				break;

			case 17:
				{
				_localctx = new ClosureExpression_Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1363;
				this.closureExpression();
				}
				break;

			case 18:
				{
				_localctx = new ExpressionWithBlock_Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1364;
				this.expressionWithBlock();
				}
				break;

			case 19:
				{
				_localctx = new MacroInvocationAsExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1365;
				this.macroInvocation();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1451;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1449;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1368;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 1369;
						_la = this._input.LA(1);
						if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (RustParser.STAR - 84)) | (1 << (RustParser.SLASH - 84)) | (1 << (RustParser.PERCENT - 84)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1370;
						this.expression(27);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1371;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1372;
						_la = this._input.LA(1);
						if (!(_la === RustParser.PLUS || _la === RustParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1373;
						this.expression(26);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1374;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1377;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case RustParser.LT:
							{
							this.state = 1375;
							this.shl();
							}
							break;
						case RustParser.GT:
							{
							this.state = 1376;
							this.shr();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 1379;
						this.expression(25);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1381;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 1382;
						this.match(RustParser.AND);
						this.state = 1383;
						this.expression(24);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1384;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 1385;
						this.match(RustParser.CARET);
						this.state = 1386;
						this.expression(23);
						}
						break;

					case 6:
						{
						_localctx = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1387;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1388;
						this.match(RustParser.OR);
						this.state = 1389;
						this.expression(22);
						}
						break;

					case 7:
						{
						_localctx = new ComparisonExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1390;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1391;
						this.comparisonOperator();
						this.state = 1392;
						this.expression(21);
						}
						break;

					case 8:
						{
						_localctx = new LazyBooleanExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1394;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 1395;
						this.match(RustParser.ANDAND);
						this.state = 1396;
						this.expression(20);
						}
						break;

					case 9:
						{
						_localctx = new LazyBooleanExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1397;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1398;
						this.match(RustParser.OROR);
						this.state = 1399;
						this.expression(19);
						}
						break;

					case 10:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1400;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1401;
						this.match(RustParser.DOTDOTEQ);
						this.state = 1402;
						this.expression(15);
						}
						break;

					case 11:
						{
						_localctx = new AssignmentExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1403;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1404;
						this.match(RustParser.EQ);
						this.state = 1405;
						this.expression(14);
						}
						break;

					case 12:
						{
						_localctx = new CompoundAssignmentExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1406;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1407;
						this.compoundAssignOperator();
						this.state = 1408;
						this.expression(13);
						}
						break;

					case 13:
						{
						_localctx = new MethodCallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1410;
						if (!(this.precpred(this._ctx, 37))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 37)");
						}
						this.state = 1411;
						this.match(RustParser.DOT);
						this.state = 1412;
						this.pathExprSegment();
						this.state = 1413;
						this.match(RustParser.LPAREN);
						this.state = 1415;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTEQ - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.LCURLYBRACE - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
							{
							this.state = 1414;
							this.callParams();
							}
						}

						this.state = 1417;
						this.match(RustParser.RPAREN);
						}
						break;

					case 14:
						{
						_localctx = new FieldExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1419;
						if (!(this.precpred(this._ctx, 36))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 36)");
						}
						this.state = 1420;
						this.match(RustParser.DOT);
						this.state = 1421;
						this.identifier();
						}
						break;

					case 15:
						{
						_localctx = new TupleIndexingExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1422;
						if (!(this.precpred(this._ctx, 35))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
						}
						this.state = 1423;
						this.match(RustParser.DOT);
						this.state = 1424;
						this.tupleIndex();
						}
						break;

					case 16:
						{
						_localctx = new AwaitExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1425;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 1426;
						this.match(RustParser.DOT);
						this.state = 1427;
						this.match(RustParser.KW_AWAIT);
						}
						break;

					case 17:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1428;
						if (!(this.precpred(this._ctx, 33))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 33)");
						}
						this.state = 1429;
						this.match(RustParser.LPAREN);
						this.state = 1431;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTEQ - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.LCURLYBRACE - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
							{
							this.state = 1430;
							this.callParams();
							}
						}

						this.state = 1433;
						this.match(RustParser.RPAREN);
						}
						break;

					case 18:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1434;
						if (!(this.precpred(this._ctx, 32))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
						}
						this.state = 1435;
						this.match(RustParser.LSQUAREBRACKET);
						this.state = 1436;
						this.expression(0);
						this.state = 1437;
						this.match(RustParser.RSQUAREBRACKET);
						}
						break;

					case 19:
						{
						_localctx = new ErrorPropagationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1439;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 1440;
						this.match(RustParser.QUESTION);
						}
						break;

					case 20:
						{
						_localctx = new TypeCastExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1441;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 1442;
						this.match(RustParser.KW_AS);
						this.state = 1443;
						this.typeNoBounds();
						}
						break;

					case 21:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, RustParser.RULE_expression);
						this.state = 1444;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1445;
						this.match(RustParser.DOTDOT);
						this.state = 1447;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
						case 1:
							{
							this.state = 1446;
							this.expression(0);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1453;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, RustParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1454;
			_la = this._input.LA(1);
			if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (RustParser.EQEQ - 104)) | (1 << (RustParser.NE - 104)) | (1 << (RustParser.GT - 104)) | (1 << (RustParser.LT - 104)) | (1 << (RustParser.GE - 104)) | (1 << (RustParser.LE - 104)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundAssignOperator(): CompoundAssignOperatorContext {
		let _localctx: CompoundAssignOperatorContext = new CompoundAssignOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, RustParser.RULE_compoundAssignOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1456;
			_la = this._input.LA(1);
			if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (RustParser.PLUSEQ - 93)) | (1 << (RustParser.MINUSEQ - 93)) | (1 << (RustParser.STAREQ - 93)) | (1 << (RustParser.SLASHEQ - 93)) | (1 << (RustParser.PERCENTEQ - 93)) | (1 << (RustParser.CARETEQ - 93)) | (1 << (RustParser.ANDEQ - 93)) | (1 << (RustParser.OREQ - 93)) | (1 << (RustParser.SHLEQ - 93)) | (1 << (RustParser.SHREQ - 93)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionWithBlock(): ExpressionWithBlockContext {
		let _localctx: ExpressionWithBlockContext = new ExpressionWithBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, RustParser.RULE_expressionWithBlock);
		try {
			let _alt: number;
			this.state = 1472;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1459;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1458;
						this.outerAttribute();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1461;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1463;
				this.expressionWithBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1465;
				this.blockExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1466;
				this.asyncBlockExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1467;
				this.unsafeBlockExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1468;
				this.loopExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1469;
				this.ifExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1470;
				this.ifLetExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1471;
				this.matchExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalExpression(): LiteralExpressionContext {
		let _localctx: LiteralExpressionContext = new LiteralExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, RustParser.RULE_literalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1474;
			_la = this._input.LA(1);
			if (!(_la === RustParser.KW_FALSE || _la === RustParser.KW_TRUE || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathExpression(): PathExpressionContext {
		let _localctx: PathExpressionContext = new PathExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, RustParser.RULE_pathExpression);
		try {
			this.state = 1478;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_CRATE:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SELFTYPE:
			case RustParser.KW_SUPER:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.PATHSEP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1476;
				this.pathInExpression();
				}
				break;
			case RustParser.LT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1477;
				this.qualifiedPathInExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockExpression(): BlockExpressionContext {
		let _localctx: BlockExpressionContext = new BlockExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, RustParser.RULE_blockExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1480;
			this.match(RustParser.LCURLYBRACE);
			this.state = 1484;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1481;
					this.innerAttribute();
					}
					}
				}
				this.state = 1486;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
			}
			this.state = 1488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTEQ - 107)) | (1 << (RustParser.SEMI - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.LCURLYBRACE - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
				{
				this.state = 1487;
				this.statements();
				}
			}

			this.state = 1490;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, RustParser.RULE_statements);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1493;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1492;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1495;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTEQ - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.LCURLYBRACE - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
					{
					this.state = 1497;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1500;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asyncBlockExpression(): AsyncBlockExpressionContext {
		let _localctx: AsyncBlockExpressionContext = new AsyncBlockExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, RustParser.RULE_asyncBlockExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1503;
			this.match(RustParser.KW_ASYNC);
			this.state = 1505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_MOVE) {
				{
				this.state = 1504;
				this.match(RustParser.KW_MOVE);
				}
			}

			this.state = 1507;
			this.blockExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsafeBlockExpression(): UnsafeBlockExpressionContext {
		let _localctx: UnsafeBlockExpressionContext = new UnsafeBlockExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, RustParser.RULE_unsafeBlockExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1509;
			this.match(RustParser.KW_UNSAFE);
			this.state = 1510;
			this.blockExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayElements(): ArrayElementsContext {
		let _localctx: ArrayElementsContext = new ArrayElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, RustParser.RULE_arrayElements);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1512;
				this.expression(0);
				this.state = 1517;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1513;
						this.match(RustParser.COMMA);
						this.state = 1514;
						this.expression(0);
						}
						}
					}
					this.state = 1519;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
				}
				this.state = 1521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 1520;
					this.match(RustParser.COMMA);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1523;
				this.expression(0);
				this.state = 1524;
				this.match(RustParser.SEMI);
				this.state = 1525;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleElements(): TupleElementsContext {
		let _localctx: TupleElementsContext = new TupleElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, RustParser.RULE_tupleElements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1532;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1529;
					this.expression(0);
					this.state = 1530;
					this.match(RustParser.COMMA);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1534;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTEQ - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.LCURLYBRACE - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
				{
				this.state = 1536;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleIndex(): TupleIndexContext {
		let _localctx: TupleIndexContext = new TupleIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, RustParser.RULE_tupleIndex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1539;
			this.match(RustParser.INTEGER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structExpression(): StructExpressionContext {
		let _localctx: StructExpressionContext = new StructExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, RustParser.RULE_structExpression);
		try {
			this.state = 1544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1541;
				this.structExprStruct();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1542;
				this.structExprTuple();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1543;
				this.structExprUnit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structExprStruct(): StructExprStructContext {
		let _localctx: StructExprStructContext = new StructExprStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, RustParser.RULE_structExprStruct);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1546;
			this.pathInExpression();
			this.state = 1547;
			this.match(RustParser.LCURLYBRACE);
			this.state = 1551;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1548;
					this.innerAttribute();
					}
					}
				}
				this.state = 1553;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
			}
			this.state = 1556;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_MACRORULES:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.INTEGER_LITERAL:
			case RustParser.POUND:
				{
				this.state = 1554;
				this.structExprFields();
				}
				break;
			case RustParser.DOTDOT:
				{
				this.state = 1555;
				this.structBase();
				}
				break;
			case RustParser.RCURLYBRACE:
				break;
			default:
				break;
			}
			this.state = 1558;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structExprFields(): StructExprFieldsContext {
		let _localctx: StructExprFieldsContext = new StructExprFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, RustParser.RULE_structExprFields);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1560;
			this.structExprField();
			this.state = 1565;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1561;
					this.match(RustParser.COMMA);
					this.state = 1562;
					this.structExprField();
					}
					}
				}
				this.state = 1567;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			}
			this.state = 1573;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
			case 1:
				{
				this.state = 1568;
				this.match(RustParser.COMMA);
				this.state = 1569;
				this.structBase();
				}
				break;

			case 2:
				{
				this.state = 1571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 1570;
					this.match(RustParser.COMMA);
					}
				}

				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structExprField(): StructExprFieldContext {
		let _localctx: StructExprFieldContext = new StructExprFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, RustParser.RULE_structExprField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 1575;
				this.outerAttribute();
				}
				}
				this.state = 1580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1589;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				this.state = 1581;
				this.identifier();
				}
				break;

			case 2:
				{
				this.state = 1584;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RustParser.KW_MACRORULES:
				case RustParser.NON_KEYWORD_IDENTIFIER:
				case RustParser.RAW_IDENTIFIER:
					{
					this.state = 1582;
					this.identifier();
					}
					break;
				case RustParser.INTEGER_LITERAL:
					{
					this.state = 1583;
					this.tupleIndex();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1586;
				this.match(RustParser.COLON);
				this.state = 1587;
				this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structBase(): StructBaseContext {
		let _localctx: StructBaseContext = new StructBaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, RustParser.RULE_structBase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			this.match(RustParser.DOTDOT);
			this.state = 1592;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structExprTuple(): StructExprTupleContext {
		let _localctx: StructExprTupleContext = new StructExprTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, RustParser.RULE_structExprTuple);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1594;
			this.pathInExpression();
			this.state = 1595;
			this.match(RustParser.LPAREN);
			this.state = 1599;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1596;
					this.innerAttribute();
					}
					}
				}
				this.state = 1601;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
			}
			this.state = 1613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTEQ - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.LCURLYBRACE - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
				{
				this.state = 1602;
				this.expression(0);
				this.state = 1607;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1603;
						this.match(RustParser.COMMA);
						this.state = 1604;
						this.expression(0);
						}
						}
					}
					this.state = 1609;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
				}
				this.state = 1611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 1610;
					this.match(RustParser.COMMA);
					}
				}

				}
			}

			this.state = 1615;
			this.match(RustParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structExprUnit(): StructExprUnitContext {
		let _localctx: StructExprUnitContext = new StructExprUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, RustParser.RULE_structExprUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1617;
			this.pathInExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerationVariantExpression(): EnumerationVariantExpressionContext {
		let _localctx: EnumerationVariantExpressionContext = new EnumerationVariantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, RustParser.RULE_enumerationVariantExpression);
		try {
			this.state = 1622;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1619;
				this.enumExprStruct();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1620;
				this.enumExprTuple();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1621;
				this.enumExprFieldless();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumExprStruct(): EnumExprStructContext {
		let _localctx: EnumExprStructContext = new EnumExprStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, RustParser.RULE_enumExprStruct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1624;
			this.pathInExpression();
			this.state = 1625;
			this.match(RustParser.LCURLYBRACE);
			this.state = 1627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)) | (1 << (RustParser.INTEGER_LITERAL - 54)))) !== 0)) {
				{
				this.state = 1626;
				this.enumExprFields();
				}
			}

			this.state = 1629;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumExprFields(): EnumExprFieldsContext {
		let _localctx: EnumExprFieldsContext = new EnumExprFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, RustParser.RULE_enumExprFields);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1631;
			this.enumExprField();
			this.state = 1636;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1632;
					this.match(RustParser.COMMA);
					this.state = 1633;
					this.enumExprField();
					}
					}
				}
				this.state = 1638;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			}
			this.state = 1640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 1639;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumExprField(): EnumExprFieldContext {
		let _localctx: EnumExprFieldContext = new EnumExprFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, RustParser.RULE_enumExprField);
		try {
			this.state = 1650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1642;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1645;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RustParser.KW_MACRORULES:
				case RustParser.NON_KEYWORD_IDENTIFIER:
				case RustParser.RAW_IDENTIFIER:
					{
					this.state = 1643;
					this.identifier();
					}
					break;
				case RustParser.INTEGER_LITERAL:
					{
					this.state = 1644;
					this.tupleIndex();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1647;
				this.match(RustParser.COLON);
				this.state = 1648;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumExprTuple(): EnumExprTupleContext {
		let _localctx: EnumExprTupleContext = new EnumExprTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, RustParser.RULE_enumExprTuple);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1652;
			this.pathInExpression();
			this.state = 1653;
			this.match(RustParser.LPAREN);
			this.state = 1665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RustParser.CHAR_LITERAL - 69)) | (1 << (RustParser.STRING_LITERAL - 69)) | (1 << (RustParser.RAW_STRING_LITERAL - 69)) | (1 << (RustParser.BYTE_LITERAL - 69)) | (1 << (RustParser.BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 69)) | (1 << (RustParser.INTEGER_LITERAL - 69)) | (1 << (RustParser.FLOAT_LITERAL - 69)) | (1 << (RustParser.LIFETIME_OR_LABEL - 69)) | (1 << (RustParser.MINUS - 69)) | (1 << (RustParser.STAR - 69)) | (1 << (RustParser.NOT - 69)) | (1 << (RustParser.AND - 69)) | (1 << (RustParser.OR - 69)) | (1 << (RustParser.ANDAND - 69)) | (1 << (RustParser.OROR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (RustParser.LT - 107)) | (1 << (RustParser.DOTDOT - 107)) | (1 << (RustParser.DOTDOTEQ - 107)) | (1 << (RustParser.PATHSEP - 107)) | (1 << (RustParser.POUND - 107)) | (1 << (RustParser.LCURLYBRACE - 107)) | (1 << (RustParser.LSQUAREBRACKET - 107)) | (1 << (RustParser.LPAREN - 107)))) !== 0)) {
				{
				this.state = 1654;
				this.expression(0);
				this.state = 1659;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1655;
						this.match(RustParser.COMMA);
						this.state = 1656;
						this.expression(0);
						}
						}
					}
					this.state = 1661;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
				}
				this.state = 1663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 1662;
					this.match(RustParser.COMMA);
					}
				}

				}
			}

			this.state = 1667;
			this.match(RustParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumExprFieldless(): EnumExprFieldlessContext {
		let _localctx: EnumExprFieldlessContext = new EnumExprFieldlessContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, RustParser.RULE_enumExprFieldless);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1669;
			this.pathInExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callParams(): CallParamsContext {
		let _localctx: CallParamsContext = new CallParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, RustParser.RULE_callParams);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1671;
			this.expression(0);
			this.state = 1676;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1672;
					this.match(RustParser.COMMA);
					this.state = 1673;
					this.expression(0);
					}
					}
				}
				this.state = 1678;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			}
			this.state = 1680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 1679;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closureExpression(): ClosureExpressionContext {
		let _localctx: ClosureExpressionContext = new ClosureExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, RustParser.RULE_closureExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_MOVE) {
				{
				this.state = 1682;
				this.match(RustParser.KW_MOVE);
				}
			}

			this.state = 1691;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.OROR:
				{
				this.state = 1685;
				this.match(RustParser.OROR);
				}
				break;
			case RustParser.OR:
				{
				this.state = 1686;
				this.match(RustParser.OR);
				this.state = 1688;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1687;
					this.closureParameters();
					}
					break;
				}
				this.state = 1690;
				this.match(RustParser.OR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1698;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_BREAK:
			case RustParser.KW_CONTINUE:
			case RustParser.KW_CRATE:
			case RustParser.KW_FALSE:
			case RustParser.KW_FOR:
			case RustParser.KW_IF:
			case RustParser.KW_LOOP:
			case RustParser.KW_MATCH:
			case RustParser.KW_MOVE:
			case RustParser.KW_RETURN:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SELFTYPE:
			case RustParser.KW_SUPER:
			case RustParser.KW_TRUE:
			case RustParser.KW_UNSAFE:
			case RustParser.KW_WHILE:
			case RustParser.KW_ASYNC:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.CHAR_LITERAL:
			case RustParser.STRING_LITERAL:
			case RustParser.RAW_STRING_LITERAL:
			case RustParser.BYTE_LITERAL:
			case RustParser.BYTE_STRING_LITERAL:
			case RustParser.RAW_BYTE_STRING_LITERAL:
			case RustParser.INTEGER_LITERAL:
			case RustParser.FLOAT_LITERAL:
			case RustParser.LIFETIME_OR_LABEL:
			case RustParser.MINUS:
			case RustParser.STAR:
			case RustParser.NOT:
			case RustParser.AND:
			case RustParser.OR:
			case RustParser.ANDAND:
			case RustParser.OROR:
			case RustParser.LT:
			case RustParser.DOTDOT:
			case RustParser.DOTDOTEQ:
			case RustParser.PATHSEP:
			case RustParser.POUND:
			case RustParser.LCURLYBRACE:
			case RustParser.LSQUAREBRACKET:
			case RustParser.LPAREN:
				{
				this.state = 1693;
				this.expression(0);
				}
				break;
			case RustParser.RARROW:
				{
				this.state = 1694;
				this.match(RustParser.RARROW);
				this.state = 1695;
				this.typeNoBounds();
				this.state = 1696;
				this.blockExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closureParameters(): ClosureParametersContext {
		let _localctx: ClosureParametersContext = new ClosureParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, RustParser.RULE_closureParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1700;
			this.closureParam();
			this.state = 1705;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1701;
					this.match(RustParser.COMMA);
					this.state = 1702;
					this.closureParam();
					}
					}
				}
				this.state = 1707;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			}
			this.state = 1709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 1708;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closureParam(): ClosureParamContext {
		let _localctx: ClosureParamContext = new ClosureParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, RustParser.RULE_closureParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 1711;
				this.outerAttribute();
				}
				}
				this.state = 1716;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1717;
			this.pattern();
			this.state = 1720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COLON) {
				{
				this.state = 1718;
				this.match(RustParser.COLON);
				this.state = 1719;
				this.type_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopExpression(): LoopExpressionContext {
		let _localctx: LoopExpressionContext = new LoopExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, RustParser.RULE_loopExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.LIFETIME_OR_LABEL) {
				{
				this.state = 1722;
				this.loopLabel();
				}
			}

			this.state = 1729;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				{
				this.state = 1725;
				this.infiniteLoopExpression();
				}
				break;

			case 2:
				{
				this.state = 1726;
				this.predicateLoopExpression();
				}
				break;

			case 3:
				{
				this.state = 1727;
				this.predicatePatternLoopExpression();
				}
				break;

			case 4:
				{
				this.state = 1728;
				this.iteratorLoopExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public infiniteLoopExpression(): InfiniteLoopExpressionContext {
		let _localctx: InfiniteLoopExpressionContext = new InfiniteLoopExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, RustParser.RULE_infiniteLoopExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1731;
			this.match(RustParser.KW_LOOP);
			this.state = 1732;
			this.blockExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateLoopExpression(): PredicateLoopExpressionContext {
		let _localctx: PredicateLoopExpressionContext = new PredicateLoopExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, RustParser.RULE_predicateLoopExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1734;
			this.match(RustParser.KW_WHILE);
			this.state = 1735;
			this.expression(0);
			this.state = 1736;
			this.blockExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicatePatternLoopExpression(): PredicatePatternLoopExpressionContext {
		let _localctx: PredicatePatternLoopExpressionContext = new PredicatePatternLoopExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, RustParser.RULE_predicatePatternLoopExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1738;
			this.match(RustParser.KW_WHILE);
			this.state = 1739;
			this.match(RustParser.KW_LET);
			this.state = 1740;
			this.pattern();
			this.state = 1741;
			this.match(RustParser.EQ);
			this.state = 1742;
			this.expression(0);
			this.state = 1743;
			this.blockExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iteratorLoopExpression(): IteratorLoopExpressionContext {
		let _localctx: IteratorLoopExpressionContext = new IteratorLoopExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, RustParser.RULE_iteratorLoopExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1745;
			this.match(RustParser.KW_FOR);
			this.state = 1746;
			this.pattern();
			this.state = 1747;
			this.match(RustParser.KW_IN);
			this.state = 1748;
			this.expression(0);
			this.state = 1749;
			this.blockExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopLabel(): LoopLabelContext {
		let _localctx: LoopLabelContext = new LoopLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, RustParser.RULE_loopLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1751;
			this.match(RustParser.LIFETIME_OR_LABEL);
			this.state = 1752;
			this.match(RustParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExpression(): IfExpressionContext {
		let _localctx: IfExpressionContext = new IfExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, RustParser.RULE_ifExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1754;
			this.match(RustParser.KW_IF);
			this.state = 1755;
			this.expression(0);
			this.state = 1756;
			this.blockExpression();
			this.state = 1763;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 1757;
				this.match(RustParser.KW_ELSE);
				this.state = 1761;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
				case 1:
					{
					this.state = 1758;
					this.blockExpression();
					}
					break;

				case 2:
					{
					this.state = 1759;
					this.ifExpression();
					}
					break;

				case 3:
					{
					this.state = 1760;
					this.ifLetExpression();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifLetExpression(): IfLetExpressionContext {
		let _localctx: IfLetExpressionContext = new IfLetExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, RustParser.RULE_ifLetExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1765;
			this.match(RustParser.KW_IF);
			this.state = 1766;
			this.match(RustParser.KW_LET);
			this.state = 1767;
			this.pattern();
			this.state = 1768;
			this.match(RustParser.EQ);
			this.state = 1769;
			this.expression(0);
			this.state = 1770;
			this.blockExpression();
			this.state = 1777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				{
				this.state = 1771;
				this.match(RustParser.KW_ELSE);
				this.state = 1775;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 1772;
					this.blockExpression();
					}
					break;

				case 2:
					{
					this.state = 1773;
					this.ifExpression();
					}
					break;

				case 3:
					{
					this.state = 1774;
					this.ifLetExpression();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchExpression(): MatchExpressionContext {
		let _localctx: MatchExpressionContext = new MatchExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, RustParser.RULE_matchExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1779;
			this.match(RustParser.KW_MATCH);
			this.state = 1780;
			this.expression(0);
			this.state = 1781;
			this.match(RustParser.LCURLYBRACE);
			this.state = 1785;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1782;
					this.innerAttribute();
					}
					}
				}
				this.state = 1787;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
			}
			this.state = 1789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.KW_DOLLARCRATE - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)) | (1 << (RustParser.CHAR_LITERAL - 54)) | (1 << (RustParser.STRING_LITERAL - 54)) | (1 << (RustParser.RAW_STRING_LITERAL - 54)) | (1 << (RustParser.BYTE_LITERAL - 54)) | (1 << (RustParser.BYTE_STRING_LITERAL - 54)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 54)) | (1 << (RustParser.INTEGER_LITERAL - 54)) | (1 << (RustParser.FLOAT_LITERAL - 54)) | (1 << (RustParser.MINUS - 54)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (RustParser.AND - 89)) | (1 << (RustParser.OR - 89)) | (1 << (RustParser.ANDAND - 89)) | (1 << (RustParser.LT - 89)) | (1 << (RustParser.UNDERSCORE - 89)) | (1 << (RustParser.DOTDOT - 89)) | (1 << (RustParser.PATHSEP - 89)))) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (RustParser.POUND - 122)) | (1 << (RustParser.LSQUAREBRACKET - 122)) | (1 << (RustParser.LPAREN - 122)))) !== 0)) {
				{
				this.state = 1788;
				this.matchArms();
				}
			}

			this.state = 1791;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchArms(): MatchArmsContext {
		let _localctx: MatchArmsContext = new MatchArmsContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, RustParser.RULE_matchArms);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1799;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1793;
					this.matchArm();
					this.state = 1794;
					this.match(RustParser.FATARROW);
					this.state = 1795;
					this.matchArmExpression();
					}
					}
				}
				this.state = 1801;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
			}
			this.state = 1802;
			this.matchArm();
			this.state = 1803;
			this.match(RustParser.FATARROW);
			this.state = 1804;
			this.expression(0);
			this.state = 1806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 1805;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchArmExpression(): MatchArmExpressionContext {
		let _localctx: MatchArmExpressionContext = new MatchArmExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, RustParser.RULE_matchArmExpression);
		let _la: number;
		try {
			this.state = 1815;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1808;
				this.expression(0);
				this.state = 1809;
				this.match(RustParser.COMMA);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1811;
				this.expressionWithBlock();
				this.state = 1813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 1812;
					this.match(RustParser.COMMA);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchArm(): MatchArmContext {
		let _localctx: MatchArmContext = new MatchArmContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, RustParser.RULE_matchArm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 1817;
				this.outerAttribute();
				}
				}
				this.state = 1822;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1823;
			this.pattern();
			this.state = 1825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_IF) {
				{
				this.state = 1824;
				this.matchArmGuard();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchArmGuard(): MatchArmGuardContext {
		let _localctx: MatchArmGuardContext = new MatchArmGuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, RustParser.RULE_matchArmGuard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1827;
			this.match(RustParser.KW_IF);
			this.state = 1828;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, RustParser.RULE_pattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.OR) {
				{
				this.state = 1830;
				this.match(RustParser.OR);
				}
			}

			this.state = 1833;
			this.patternNoTopAlt();
			this.state = 1838;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1834;
					this.match(RustParser.OR);
					this.state = 1835;
					this.patternNoTopAlt();
					}
					}
				}
				this.state = 1840;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternNoTopAlt(): PatternNoTopAltContext {
		let _localctx: PatternNoTopAltContext = new PatternNoTopAltContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, RustParser.RULE_patternNoTopAlt);
		try {
			this.state = 1843;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 243, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1841;
				this.patternWithoutRange();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1842;
				this.rangePattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternWithoutRange(): PatternWithoutRangeContext {
		let _localctx: PatternWithoutRangeContext = new PatternWithoutRangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, RustParser.RULE_patternWithoutRange);
		try {
			this.state = 1857;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1845;
				this.literalPattern();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1846;
				this.identifierPattern();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1847;
				this.wildcardPattern();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1848;
				this.restPattern();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1849;
				this.referencePattern();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1850;
				this.structPattern();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1851;
				this.tupleStructPattern();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1852;
				this.tuplePattern();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1853;
				this.groupedPattern();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1854;
				this.slicePattern();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1855;
				this.pathPattern();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1856;
				this.macroInvocation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalPattern(): LiteralPatternContext {
		let _localctx: LiteralPatternContext = new LiteralPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, RustParser.RULE_literalPattern);
		let _la: number;
		try {
			this.state = 1875;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1859;
				this.match(RustParser.KW_TRUE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1860;
				this.match(RustParser.KW_FALSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1861;
				this.match(RustParser.CHAR_LITERAL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1862;
				this.match(RustParser.BYTE_LITERAL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1863;
				this.match(RustParser.STRING_LITERAL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1864;
				this.match(RustParser.RAW_STRING_LITERAL);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1865;
				this.match(RustParser.BYTE_STRING_LITERAL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1866;
				this.match(RustParser.RAW_BYTE_STRING_LITERAL);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.MINUS) {
					{
					this.state = 1867;
					this.match(RustParser.MINUS);
					}
				}

				this.state = 1870;
				this.match(RustParser.INTEGER_LITERAL);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.MINUS) {
					{
					this.state = 1871;
					this.match(RustParser.MINUS);
					}
				}

				this.state = 1874;
				this.match(RustParser.FLOAT_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierPattern(): IdentifierPatternContext {
		let _localctx: IdentifierPatternContext = new IdentifierPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, RustParser.RULE_identifierPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_REF) {
				{
				this.state = 1877;
				this.match(RustParser.KW_REF);
				}
			}

			this.state = 1881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_MUT) {
				{
				this.state = 1880;
				this.match(RustParser.KW_MUT);
				}
			}

			this.state = 1883;
			this.identifier();
			this.state = 1886;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.AT) {
				{
				this.state = 1884;
				this.match(RustParser.AT);
				this.state = 1885;
				this.pattern();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wildcardPattern(): WildcardPatternContext {
		let _localctx: WildcardPatternContext = new WildcardPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, RustParser.RULE_wildcardPattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1888;
			this.match(RustParser.UNDERSCORE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public restPattern(): RestPatternContext {
		let _localctx: RestPatternContext = new RestPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, RustParser.RULE_restPattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1890;
			this.match(RustParser.DOTDOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangePattern(): RangePatternContext {
		let _localctx: RangePatternContext = new RangePatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, RustParser.RULE_rangePattern);
		try {
			this.state = 1903;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				_localctx = new InclusiveRangePatternContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1892;
				this.rangePatternBound();
				this.state = 1893;
				this.match(RustParser.DOTDOTEQ);
				this.state = 1894;
				this.rangePatternBound();
				}
				break;

			case 2:
				_localctx = new HalfOpenRangePatternContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1896;
				this.rangePatternBound();
				this.state = 1897;
				this.match(RustParser.DOTDOT);
				}
				break;

			case 3:
				_localctx = new ObsoleteRangePatternContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1899;
				this.rangePatternBound();
				this.state = 1900;
				this.match(RustParser.DOTDOTDOT);
				this.state = 1901;
				this.rangePatternBound();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangePatternBound(): RangePatternBoundContext {
		let _localctx: RangePatternBoundContext = new RangePatternBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, RustParser.RULE_rangePatternBound);
		let _la: number;
		try {
			this.state = 1916;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1905;
				this.match(RustParser.CHAR_LITERAL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1906;
				this.match(RustParser.BYTE_LITERAL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1908;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.MINUS) {
					{
					this.state = 1907;
					this.match(RustParser.MINUS);
					}
				}

				this.state = 1910;
				this.match(RustParser.INTEGER_LITERAL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1912;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.MINUS) {
					{
					this.state = 1911;
					this.match(RustParser.MINUS);
					}
				}

				this.state = 1914;
				this.match(RustParser.FLOAT_LITERAL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1915;
				this.pathPattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referencePattern(): ReferencePatternContext {
		let _localctx: ReferencePatternContext = new ReferencePatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, RustParser.RULE_referencePattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1918;
			_la = this._input.LA(1);
			if (!(_la === RustParser.AND || _la === RustParser.ANDAND)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1920;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 255, this._ctx) ) {
			case 1:
				{
				this.state = 1919;
				this.match(RustParser.KW_MUT);
				}
				break;
			}
			this.state = 1922;
			this.patternWithoutRange();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structPattern(): StructPatternContext {
		let _localctx: StructPatternContext = new StructPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, RustParser.RULE_structPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1924;
			this.pathInExpression();
			this.state = 1925;
			this.match(RustParser.LCURLYBRACE);
			this.state = 1927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_MUT || _la === RustParser.KW_REF || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)) | (1 << (RustParser.INTEGER_LITERAL - 54)))) !== 0) || _la === RustParser.DOTDOT || _la === RustParser.POUND) {
				{
				this.state = 1926;
				this.structPatternElements();
				}
			}

			this.state = 1929;
			this.match(RustParser.RCURLYBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structPatternElements(): StructPatternElementsContext {
		let _localctx: StructPatternElementsContext = new StructPatternElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, RustParser.RULE_structPatternElements);
		let _la: number;
		try {
			this.state = 1939;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1931;
				this.structPatternFields();
				this.state = 1936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 1932;
					this.match(RustParser.COMMA);
					this.state = 1934;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RustParser.DOTDOT || _la === RustParser.POUND) {
						{
						this.state = 1933;
						this.structPatternEtCetera();
						}
					}

					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1938;
				this.structPatternEtCetera();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structPatternFields(): StructPatternFieldsContext {
		let _localctx: StructPatternFieldsContext = new StructPatternFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, RustParser.RULE_structPatternFields);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1941;
			this.structPatternField();
			this.state = 1946;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1942;
					this.match(RustParser.COMMA);
					this.state = 1943;
					this.structPatternField();
					}
					}
				}
				this.state = 1948;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structPatternField(): StructPatternFieldContext {
		let _localctx: StructPatternFieldContext = new StructPatternFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, RustParser.RULE_structPatternField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 1949;
				this.outerAttribute();
				}
				}
				this.state = 1954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1970;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				{
				this.state = 1955;
				this.tupleIndex();
				this.state = 1956;
				this.match(RustParser.COLON);
				this.state = 1957;
				this.pattern();
				}
				break;

			case 2:
				{
				this.state = 1959;
				this.identifier();
				this.state = 1960;
				this.match(RustParser.COLON);
				this.state = 1961;
				this.pattern();
				}
				break;

			case 3:
				{
				this.state = 1964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.KW_REF) {
					{
					this.state = 1963;
					this.match(RustParser.KW_REF);
					}
				}

				this.state = 1967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.KW_MUT) {
					{
					this.state = 1966;
					this.match(RustParser.KW_MUT);
					}
				}

				this.state = 1969;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structPatternEtCetera(): StructPatternEtCeteraContext {
		let _localctx: StructPatternEtCeteraContext = new StructPatternEtCeteraContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, RustParser.RULE_structPatternEtCetera);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 1972;
				this.outerAttribute();
				}
				}
				this.state = 1977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1978;
			this.match(RustParser.DOTDOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleStructPattern(): TupleStructPatternContext {
		let _localctx: TupleStructPatternContext = new TupleStructPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, RustParser.RULE_tupleStructPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1980;
			this.pathInExpression();
			this.state = 1981;
			this.match(RustParser.LPAREN);
			this.state = 1983;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.KW_DOLLARCRATE - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)) | (1 << (RustParser.CHAR_LITERAL - 54)) | (1 << (RustParser.STRING_LITERAL - 54)) | (1 << (RustParser.RAW_STRING_LITERAL - 54)) | (1 << (RustParser.BYTE_LITERAL - 54)) | (1 << (RustParser.BYTE_STRING_LITERAL - 54)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 54)) | (1 << (RustParser.INTEGER_LITERAL - 54)) | (1 << (RustParser.FLOAT_LITERAL - 54)) | (1 << (RustParser.MINUS - 54)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (RustParser.AND - 89)) | (1 << (RustParser.OR - 89)) | (1 << (RustParser.ANDAND - 89)) | (1 << (RustParser.LT - 89)) | (1 << (RustParser.UNDERSCORE - 89)) | (1 << (RustParser.DOTDOT - 89)) | (1 << (RustParser.PATHSEP - 89)))) !== 0) || _la === RustParser.LSQUAREBRACKET || _la === RustParser.LPAREN) {
				{
				this.state = 1982;
				this.tupleStructItems();
				}
			}

			this.state = 1985;
			this.match(RustParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleStructItems(): TupleStructItemsContext {
		let _localctx: TupleStructItemsContext = new TupleStructItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, RustParser.RULE_tupleStructItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1987;
			this.pattern();
			this.state = 1992;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1988;
					this.match(RustParser.COMMA);
					this.state = 1989;
					this.pattern();
					}
					}
				}
				this.state = 1994;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
			}
			this.state = 1996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 1995;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuplePattern(): TuplePatternContext {
		let _localctx: TuplePatternContext = new TuplePatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, RustParser.RULE_tuplePattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1998;
			this.match(RustParser.LPAREN);
			this.state = 2000;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.KW_DOLLARCRATE - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)) | (1 << (RustParser.CHAR_LITERAL - 54)) | (1 << (RustParser.STRING_LITERAL - 54)) | (1 << (RustParser.RAW_STRING_LITERAL - 54)) | (1 << (RustParser.BYTE_LITERAL - 54)) | (1 << (RustParser.BYTE_STRING_LITERAL - 54)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 54)) | (1 << (RustParser.INTEGER_LITERAL - 54)) | (1 << (RustParser.FLOAT_LITERAL - 54)) | (1 << (RustParser.MINUS - 54)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (RustParser.AND - 89)) | (1 << (RustParser.OR - 89)) | (1 << (RustParser.ANDAND - 89)) | (1 << (RustParser.LT - 89)) | (1 << (RustParser.UNDERSCORE - 89)) | (1 << (RustParser.DOTDOT - 89)) | (1 << (RustParser.PATHSEP - 89)))) !== 0) || _la === RustParser.LSQUAREBRACKET || _la === RustParser.LPAREN) {
				{
				this.state = 1999;
				this.tuplePatternItems();
				}
			}

			this.state = 2002;
			this.match(RustParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuplePatternItems(): TuplePatternItemsContext {
		let _localctx: TuplePatternItemsContext = new TuplePatternItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, RustParser.RULE_tuplePatternItems);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2004;
				this.pattern();
				this.state = 2005;
				this.match(RustParser.COMMA);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2007;
				this.restPattern();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2008;
				this.pattern();
				this.state = 2011;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 2009;
						this.match(RustParser.COMMA);
						this.state = 2010;
						this.pattern();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2013;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 2016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 2015;
					this.match(RustParser.COMMA);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupedPattern(): GroupedPatternContext {
		let _localctx: GroupedPatternContext = new GroupedPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, RustParser.RULE_groupedPattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2020;
			this.match(RustParser.LPAREN);
			this.state = 2021;
			this.pattern();
			this.state = 2022;
			this.match(RustParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public slicePattern(): SlicePatternContext {
		let _localctx: SlicePatternContext = new SlicePatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, RustParser.RULE_slicePattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2024;
			this.match(RustParser.LSQUAREBRACKET);
			this.state = 2026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRUE))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.KW_DOLLARCRATE - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)) | (1 << (RustParser.CHAR_LITERAL - 54)) | (1 << (RustParser.STRING_LITERAL - 54)) | (1 << (RustParser.RAW_STRING_LITERAL - 54)) | (1 << (RustParser.BYTE_LITERAL - 54)) | (1 << (RustParser.BYTE_STRING_LITERAL - 54)) | (1 << (RustParser.RAW_BYTE_STRING_LITERAL - 54)) | (1 << (RustParser.INTEGER_LITERAL - 54)) | (1 << (RustParser.FLOAT_LITERAL - 54)) | (1 << (RustParser.MINUS - 54)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (RustParser.AND - 89)) | (1 << (RustParser.OR - 89)) | (1 << (RustParser.ANDAND - 89)) | (1 << (RustParser.LT - 89)) | (1 << (RustParser.UNDERSCORE - 89)) | (1 << (RustParser.DOTDOT - 89)) | (1 << (RustParser.PATHSEP - 89)))) !== 0) || _la === RustParser.LSQUAREBRACKET || _la === RustParser.LPAREN) {
				{
				this.state = 2025;
				this.slicePatternItems();
				}
			}

			this.state = 2028;
			this.match(RustParser.RSQUAREBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public slicePatternItems(): SlicePatternItemsContext {
		let _localctx: SlicePatternItemsContext = new SlicePatternItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, RustParser.RULE_slicePatternItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2030;
			this.pattern();
			this.state = 2035;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2031;
					this.match(RustParser.COMMA);
					this.state = 2032;
					this.pattern();
					}
					}
				}
				this.state = 2037;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
			}
			this.state = 2039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 2038;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathPattern(): PathPatternContext {
		let _localctx: PathPatternContext = new PathPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, RustParser.RULE_pathPattern);
		try {
			this.state = 2043;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_CRATE:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SELFTYPE:
			case RustParser.KW_SUPER:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.PATHSEP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2041;
				this.pathInExpression();
				}
				break;
			case RustParser.LT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2042;
				this.qualifiedPathInExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 286, RustParser.RULE_type_);
		try {
			this.state = 2048;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2045;
				this.typeNoBounds();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2046;
				this.implTraitType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2047;
				this.traitObjectType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNoBounds(): TypeNoBoundsContext {
		let _localctx: TypeNoBoundsContext = new TypeNoBoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, RustParser.RULE_typeNoBounds);
		try {
			this.state = 2064;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2050;
				this.parenthesizedType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2051;
				this.implTraitTypeOneBound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2052;
				this.traitObjectTypeOneBound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2053;
				this.typePath();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2054;
				this.tupleType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2055;
				this.neverType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2056;
				this.rawPointerType();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2057;
				this.referenceType();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2058;
				this.arrayType();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2059;
				this.sliceType();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2060;
				this.inferredType();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2061;
				this.qualifiedPathInType();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2062;
				this.bareFunctionType();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2063;
				this.macroInvocation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthesizedType(): ParenthesizedTypeContext {
		let _localctx: ParenthesizedTypeContext = new ParenthesizedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, RustParser.RULE_parenthesizedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2066;
			this.match(RustParser.LPAREN);
			this.state = 2067;
			this.type_();
			this.state = 2068;
			this.match(RustParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public neverType(): NeverTypeContext {
		let _localctx: NeverTypeContext = new NeverTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, RustParser.RULE_neverType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2070;
			this.match(RustParser.NOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleType(): TupleTypeContext {
		let _localctx: TupleTypeContext = new TupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, RustParser.RULE_tupleType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2072;
			this.match(RustParser.LPAREN);
			this.state = 2083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (RustParser.LIFETIME_OR_LABEL - 81)) | (1 << (RustParser.STAR - 81)) | (1 << (RustParser.NOT - 81)) | (1 << (RustParser.AND - 81)) | (1 << (RustParser.LT - 81)) | (1 << (RustParser.UNDERSCORE - 81)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LSQUAREBRACKET - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
				{
				this.state = 2076;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 2073;
						this.type_();
						this.state = 2074;
						this.match(RustParser.COMMA);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2078;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 2081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (RustParser.LIFETIME_OR_LABEL - 81)) | (1 << (RustParser.STAR - 81)) | (1 << (RustParser.NOT - 81)) | (1 << (RustParser.AND - 81)) | (1 << (RustParser.LT - 81)) | (1 << (RustParser.UNDERSCORE - 81)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LSQUAREBRACKET - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
					{
					this.state = 2080;
					this.type_();
					}
				}

				}
			}

			this.state = 2085;
			this.match(RustParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, RustParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2087;
			this.match(RustParser.LSQUAREBRACKET);
			this.state = 2088;
			this.type_();
			this.state = 2089;
			this.match(RustParser.SEMI);
			this.state = 2090;
			this.expression(0);
			this.state = 2091;
			this.match(RustParser.RSQUAREBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceType(): SliceTypeContext {
		let _localctx: SliceTypeContext = new SliceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, RustParser.RULE_sliceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2093;
			this.match(RustParser.LSQUAREBRACKET);
			this.state = 2094;
			this.type_();
			this.state = 2095;
			this.match(RustParser.RSQUAREBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceType(): ReferenceTypeContext {
		let _localctx: ReferenceTypeContext = new ReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, RustParser.RULE_referenceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2097;
			this.match(RustParser.AND);
			this.state = 2099;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (RustParser.KW_STATICLIFETIME - 53)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 53)) | (1 << (RustParser.LIFETIME_OR_LABEL - 53)))) !== 0)) {
				{
				this.state = 2098;
				this.lifetime();
				}
			}

			this.state = 2102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_MUT) {
				{
				this.state = 2101;
				this.match(RustParser.KW_MUT);
				}
			}

			this.state = 2104;
			this.typeNoBounds();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rawPointerType(): RawPointerTypeContext {
		let _localctx: RawPointerTypeContext = new RawPointerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, RustParser.RULE_rawPointerType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2106;
			this.match(RustParser.STAR);
			this.state = 2107;
			_la = this._input.LA(1);
			if (!(_la === RustParser.KW_CONST || _la === RustParser.KW_MUT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 2108;
			this.typeNoBounds();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bareFunctionType(): BareFunctionTypeContext {
		let _localctx: BareFunctionTypeContext = new BareFunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, RustParser.RULE_bareFunctionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_FOR) {
				{
				this.state = 2110;
				this.forLifetimes();
				}
			}

			this.state = 2113;
			this.functionTypeQualifiers();
			this.state = 2114;
			this.match(RustParser.KW_FN);
			this.state = 2115;
			this.match(RustParser.LPAREN);
			this.state = 2117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (RustParser.LIFETIME_OR_LABEL - 81)) | (1 << (RustParser.STAR - 81)) | (1 << (RustParser.NOT - 81)) | (1 << (RustParser.AND - 81)) | (1 << (RustParser.LT - 81)) | (1 << (RustParser.UNDERSCORE - 81)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.POUND - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LSQUAREBRACKET - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
				{
				this.state = 2116;
				this.functionParametersMaybeNamedVariadic();
				}
			}

			this.state = 2119;
			this.match(RustParser.RPAREN);
			this.state = 2121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				{
				this.state = 2120;
				this.bareFunctionReturnType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeQualifiers(): FunctionTypeQualifiersContext {
		let _localctx: FunctionTypeQualifiersContext = new FunctionTypeQualifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, RustParser.RULE_functionTypeQualifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_UNSAFE) {
				{
				this.state = 2123;
				this.match(RustParser.KW_UNSAFE);
				}
			}

			this.state = 2130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_EXTERN) {
				{
				this.state = 2126;
				this.match(RustParser.KW_EXTERN);
				this.state = 2128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.STRING_LITERAL || _la === RustParser.RAW_STRING_LITERAL) {
					{
					this.state = 2127;
					this.abi();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bareFunctionReturnType(): BareFunctionReturnTypeContext {
		let _localctx: BareFunctionReturnTypeContext = new BareFunctionReturnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, RustParser.RULE_bareFunctionReturnType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2132;
			this.match(RustParser.RARROW);
			this.state = 2133;
			this.typeNoBounds();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParametersMaybeNamedVariadic(): FunctionParametersMaybeNamedVariadicContext {
		let _localctx: FunctionParametersMaybeNamedVariadicContext = new FunctionParametersMaybeNamedVariadicContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, RustParser.RULE_functionParametersMaybeNamedVariadic);
		try {
			this.state = 2137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2135;
				this.maybeNamedFunctionParameters();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2136;
				this.maybeNamedFunctionParametersVariadic();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maybeNamedFunctionParameters(): MaybeNamedFunctionParametersContext {
		let _localctx: MaybeNamedFunctionParametersContext = new MaybeNamedFunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, RustParser.RULE_maybeNamedFunctionParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2139;
			this.maybeNamedParam();
			this.state = 2144;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2140;
					this.match(RustParser.COMMA);
					this.state = 2141;
					this.maybeNamedParam();
					}
					}
				}
				this.state = 2146;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
			}
			this.state = 2148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 2147;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maybeNamedParam(): MaybeNamedParamContext {
		let _localctx: MaybeNamedParamContext = new MaybeNamedParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, RustParser.RULE_maybeNamedParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 2150;
				this.outerAttribute();
				}
				}
				this.state = 2155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				{
				this.state = 2158;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RustParser.KW_MACRORULES:
				case RustParser.NON_KEYWORD_IDENTIFIER:
				case RustParser.RAW_IDENTIFIER:
					{
					this.state = 2156;
					this.identifier();
					}
					break;
				case RustParser.UNDERSCORE:
					{
					this.state = 2157;
					this.match(RustParser.UNDERSCORE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2160;
				this.match(RustParser.COLON);
				}
				break;
			}
			this.state = 2163;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maybeNamedFunctionParametersVariadic(): MaybeNamedFunctionParametersVariadicContext {
		let _localctx: MaybeNamedFunctionParametersVariadicContext = new MaybeNamedFunctionParametersVariadicContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, RustParser.RULE_maybeNamedFunctionParametersVariadic);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 296, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2165;
					this.maybeNamedParam();
					this.state = 2166;
					this.match(RustParser.COMMA);
					}
					}
				}
				this.state = 2172;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 296, this._ctx);
			}
			this.state = 2173;
			this.maybeNamedParam();
			this.state = 2174;
			this.match(RustParser.COMMA);
			this.state = 2178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RustParser.POUND) {
				{
				{
				this.state = 2175;
				this.outerAttribute();
				}
				}
				this.state = 2180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2181;
			this.match(RustParser.DOTDOTDOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public traitObjectType(): TraitObjectTypeContext {
		let _localctx: TraitObjectTypeContext = new TraitObjectTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, RustParser.RULE_traitObjectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_DYN) {
				{
				this.state = 2183;
				this.match(RustParser.KW_DYN);
				}
			}

			this.state = 2186;
			this.typeParamBounds();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public traitObjectTypeOneBound(): TraitObjectTypeOneBoundContext {
		let _localctx: TraitObjectTypeOneBoundContext = new TraitObjectTypeOneBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, RustParser.RULE_traitObjectTypeOneBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_DYN) {
				{
				this.state = 2188;
				this.match(RustParser.KW_DYN);
				}
			}

			this.state = 2191;
			this.traitBound();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implTraitType(): ImplTraitTypeContext {
		let _localctx: ImplTraitTypeContext = new ImplTraitTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, RustParser.RULE_implTraitType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2193;
			this.match(RustParser.KW_IMPL);
			this.state = 2194;
			this.typeParamBounds();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implTraitTypeOneBound(): ImplTraitTypeOneBoundContext {
		let _localctx: ImplTraitTypeOneBoundContext = new ImplTraitTypeOneBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, RustParser.RULE_implTraitTypeOneBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2196;
			this.match(RustParser.KW_IMPL);
			this.state = 2197;
			this.traitBound();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inferredType(): InferredTypeContext {
		let _localctx: InferredTypeContext = new InferredTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, RustParser.RULE_inferredType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2199;
			this.match(RustParser.UNDERSCORE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParamBounds(): TypeParamBoundsContext {
		let _localctx: TypeParamBoundsContext = new TypeParamBoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, RustParser.RULE_typeParamBounds);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2201;
			this.typeParamBound();
			this.state = 2206;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2202;
					this.match(RustParser.PLUS);
					this.state = 2203;
					this.typeParamBound();
					}
					}
				}
				this.state = 2208;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			}
			this.state = 2210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 301, this._ctx) ) {
			case 1:
				{
				this.state = 2209;
				this.match(RustParser.PLUS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParamBound(): TypeParamBoundContext {
		let _localctx: TypeParamBoundContext = new TypeParamBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, RustParser.RULE_typeParamBound);
		try {
			this.state = 2214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_STATICLIFETIME:
			case RustParser.KW_UNDERLINELIFETIME:
			case RustParser.LIFETIME_OR_LABEL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2212;
				this.lifetime();
				}
				break;
			case RustParser.KW_CRATE:
			case RustParser.KW_FOR:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SELFTYPE:
			case RustParser.KW_SUPER:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.PATHSEP:
			case RustParser.QUESTION:
			case RustParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2213;
				this.traitBound();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public traitBound(): TraitBoundContext {
		let _localctx: TraitBoundContext = new TraitBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, RustParser.RULE_traitBound);
		let _la: number;
		try {
			this.state = 2233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_CRATE:
			case RustParser.KW_FOR:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SELFTYPE:
			case RustParser.KW_SUPER:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
			case RustParser.PATHSEP:
			case RustParser.QUESTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.QUESTION) {
					{
					this.state = 2216;
					this.match(RustParser.QUESTION);
					}
				}

				this.state = 2220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.KW_FOR) {
					{
					this.state = 2219;
					this.forLifetimes();
					}
				}

				this.state = 2222;
				this.typePath();
				}
				break;
			case RustParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2223;
				this.match(RustParser.LPAREN);
				this.state = 2225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.QUESTION) {
					{
					this.state = 2224;
					this.match(RustParser.QUESTION);
					}
				}

				this.state = 2228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.KW_FOR) {
					{
					this.state = 2227;
					this.forLifetimes();
					}
				}

				this.state = 2230;
				this.typePath();
				this.state = 2231;
				this.match(RustParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lifetimeBounds(): LifetimeBoundsContext {
		let _localctx: LifetimeBoundsContext = new LifetimeBoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, RustParser.RULE_lifetimeBounds);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2240;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2235;
					this.lifetime();
					this.state = 2236;
					this.match(RustParser.PLUS);
					}
					}
				}
				this.state = 2242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
			}
			this.state = 2244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (RustParser.KW_STATICLIFETIME - 53)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 53)) | (1 << (RustParser.LIFETIME_OR_LABEL - 53)))) !== 0)) {
				{
				this.state = 2243;
				this.lifetime();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lifetime(): LifetimeContext {
		let _localctx: LifetimeContext = new LifetimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, RustParser.RULE_lifetime);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2246;
			_la = this._input.LA(1);
			if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (RustParser.KW_STATICLIFETIME - 53)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 53)) | (1 << (RustParser.LIFETIME_OR_LABEL - 53)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simplePath(): SimplePathContext {
		let _localctx: SimplePathContext = new SimplePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, RustParser.RULE_simplePath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.PATHSEP) {
				{
				this.state = 2248;
				this.match(RustParser.PATHSEP);
				}
			}

			this.state = 2251;
			this.simplePathSegment();
			this.state = 2256;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2252;
					this.match(RustParser.PATHSEP);
					this.state = 2253;
					this.simplePathSegment();
					}
					}
				}
				this.state = 2258;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simplePathSegment(): SimplePathSegmentContext {
		let _localctx: SimplePathSegmentContext = new SimplePathSegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, RustParser.RULE_simplePathSegment);
		try {
			this.state = 2264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_MACRORULES:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2259;
				this.identifier();
				}
				break;
			case RustParser.KW_SUPER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2260;
				this.match(RustParser.KW_SUPER);
				}
				break;
			case RustParser.KW_SELFVALUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2261;
				this.match(RustParser.KW_SELFVALUE);
				}
				break;
			case RustParser.KW_CRATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2262;
				this.match(RustParser.KW_CRATE);
				}
				break;
			case RustParser.KW_DOLLARCRATE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2263;
				this.match(RustParser.KW_DOLLARCRATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathInExpression(): PathInExpressionContext {
		let _localctx: PathInExpressionContext = new PathInExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, RustParser.RULE_pathInExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.PATHSEP) {
				{
				this.state = 2266;
				this.match(RustParser.PATHSEP);
				}
			}

			this.state = 2269;
			this.pathExprSegment();
			this.state = 2274;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 314, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2270;
					this.match(RustParser.PATHSEP);
					this.state = 2271;
					this.pathExprSegment();
					}
					}
				}
				this.state = 2276;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 314, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathExprSegment(): PathExprSegmentContext {
		let _localctx: PathExprSegmentContext = new PathExprSegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, RustParser.RULE_pathExprSegment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2277;
			this.pathIdentSegment();
			this.state = 2280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
			case 1:
				{
				this.state = 2278;
				this.match(RustParser.PATHSEP);
				this.state = 2279;
				this.genericArgs();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathIdentSegment(): PathIdentSegmentContext {
		let _localctx: PathIdentSegmentContext = new PathIdentSegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, RustParser.RULE_pathIdentSegment);
		try {
			this.state = 2288;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.KW_MACRORULES:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2282;
				this.identifier();
				}
				break;
			case RustParser.KW_SUPER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2283;
				this.match(RustParser.KW_SUPER);
				}
				break;
			case RustParser.KW_SELFVALUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2284;
				this.match(RustParser.KW_SELFVALUE);
				}
				break;
			case RustParser.KW_SELFTYPE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2285;
				this.match(RustParser.KW_SELFTYPE);
				}
				break;
			case RustParser.KW_CRATE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2286;
				this.match(RustParser.KW_CRATE);
				}
				break;
			case RustParser.KW_DOLLARCRATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2287;
				this.match(RustParser.KW_DOLLARCRATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericArgs(): GenericArgsContext {
		let _localctx: GenericArgsContext = new GenericArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, RustParser.RULE_genericArgs);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 324, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2290;
				this.match(RustParser.LT);
				this.state = 2291;
				this.match(RustParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2292;
				this.match(RustParser.LT);
				this.state = 2293;
				this.genericArgsLifetimes();
				this.state = 2296;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 317, this._ctx) ) {
				case 1:
					{
					this.state = 2294;
					this.match(RustParser.COMMA);
					this.state = 2295;
					this.genericArgsTypes();
					}
					break;
				}
				this.state = 2300;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 318, this._ctx) ) {
				case 1:
					{
					this.state = 2298;
					this.match(RustParser.COMMA);
					this.state = 2299;
					this.genericArgsBindings();
					}
					break;
				}
				this.state = 2303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 2302;
					this.match(RustParser.COMMA);
					}
				}

				this.state = 2305;
				this.match(RustParser.GT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2307;
				this.match(RustParser.LT);
				this.state = 2308;
				this.genericArgsTypes();
				this.state = 2311;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 320, this._ctx) ) {
				case 1:
					{
					this.state = 2309;
					this.match(RustParser.COMMA);
					this.state = 2310;
					this.genericArgsBindings();
					}
					break;
				}
				this.state = 2314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 2313;
					this.match(RustParser.COMMA);
					}
				}

				this.state = 2316;
				this.match(RustParser.GT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2318;
				this.match(RustParser.LT);
				this.state = 2324;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 322, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2319;
						this.genericArg();
						this.state = 2320;
						this.match(RustParser.COMMA);
						}
						}
					}
					this.state = 2326;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 322, this._ctx);
				}
				this.state = 2327;
				this.genericArg();
				this.state = 2329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.COMMA) {
					{
					this.state = 2328;
					this.match(RustParser.COMMA);
					}
				}

				this.state = 2331;
				this.match(RustParser.GT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericArg(): GenericArgContext {
		let _localctx: GenericArgContext = new GenericArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, RustParser.RULE_genericArg);
		try {
			this.state = 2339;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 325, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2335;
				this.lifetime();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2336;
				this.type_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2337;
				this.genericArgsConst();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2338;
				this.genericArgsBinding();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericArgsConst(): GenericArgsConstContext {
		let _localctx: GenericArgsConstContext = new GenericArgsConstContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, RustParser.RULE_genericArgsConst);
		let _la: number;
		try {
			this.state = 2347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RustParser.LCURLYBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2341;
				this.blockExpression();
				}
				break;
			case RustParser.KW_FALSE:
			case RustParser.KW_TRUE:
			case RustParser.CHAR_LITERAL:
			case RustParser.STRING_LITERAL:
			case RustParser.RAW_STRING_LITERAL:
			case RustParser.BYTE_LITERAL:
			case RustParser.BYTE_STRING_LITERAL:
			case RustParser.RAW_BYTE_STRING_LITERAL:
			case RustParser.INTEGER_LITERAL:
			case RustParser.FLOAT_LITERAL:
			case RustParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RustParser.MINUS) {
					{
					this.state = 2342;
					this.match(RustParser.MINUS);
					}
				}

				this.state = 2345;
				this.literalExpression();
				}
				break;
			case RustParser.KW_CRATE:
			case RustParser.KW_SELFVALUE:
			case RustParser.KW_SUPER:
			case RustParser.KW_MACRORULES:
			case RustParser.KW_DOLLARCRATE:
			case RustParser.NON_KEYWORD_IDENTIFIER:
			case RustParser.RAW_IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2346;
				this.simplePathSegment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericArgsLifetimes(): GenericArgsLifetimesContext {
		let _localctx: GenericArgsLifetimesContext = new GenericArgsLifetimesContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, RustParser.RULE_genericArgsLifetimes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2349;
			this.lifetime();
			this.state = 2354;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2350;
					this.match(RustParser.COMMA);
					this.state = 2351;
					this.lifetime();
					}
					}
				}
				this.state = 2356;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericArgsTypes(): GenericArgsTypesContext {
		let _localctx: GenericArgsTypesContext = new GenericArgsTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, RustParser.RULE_genericArgsTypes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2357;
			this.type_();
			this.state = 2362;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 329, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2358;
					this.match(RustParser.COMMA);
					this.state = 2359;
					this.type_();
					}
					}
				}
				this.state = 2364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 329, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericArgsBindings(): GenericArgsBindingsContext {
		let _localctx: GenericArgsBindingsContext = new GenericArgsBindingsContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, RustParser.RULE_genericArgsBindings);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2365;
			this.genericArgsBinding();
			this.state = 2370;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 330, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2366;
					this.match(RustParser.COMMA);
					this.state = 2367;
					this.genericArgsBinding();
					}
					}
				}
				this.state = 2372;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 330, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericArgsBinding(): GenericArgsBindingContext {
		let _localctx: GenericArgsBindingContext = new GenericArgsBindingContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, RustParser.RULE_genericArgsBinding);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2373;
			this.identifier();
			this.state = 2374;
			this.match(RustParser.EQ);
			this.state = 2375;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedPathInExpression(): QualifiedPathInExpressionContext {
		let _localctx: QualifiedPathInExpressionContext = new QualifiedPathInExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, RustParser.RULE_qualifiedPathInExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2377;
			this.qualifiedPathType();
			this.state = 2380;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2378;
					this.match(RustParser.PATHSEP);
					this.state = 2379;
					this.pathExprSegment();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2382;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 331, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedPathType(): QualifiedPathTypeContext {
		let _localctx: QualifiedPathTypeContext = new QualifiedPathTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, RustParser.RULE_qualifiedPathType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2384;
			this.match(RustParser.LT);
			this.state = 2385;
			this.type_();
			this.state = 2388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.KW_AS) {
				{
				this.state = 2386;
				this.match(RustParser.KW_AS);
				this.state = 2387;
				this.typePath();
				}
			}

			this.state = 2390;
			this.match(RustParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedPathInType(): QualifiedPathInTypeContext {
		let _localctx: QualifiedPathInTypeContext = new QualifiedPathInTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, RustParser.RULE_qualifiedPathInType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2392;
			this.qualifiedPathType();
			this.state = 2395;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2393;
					this.match(RustParser.PATHSEP);
					this.state = 2394;
					this.typePathSegment();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 333, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePath(): TypePathContext {
		let _localctx: TypePathContext = new TypePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, RustParser.RULE_typePath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.PATHSEP) {
				{
				this.state = 2399;
				this.match(RustParser.PATHSEP);
				}
			}

			this.state = 2402;
			this.typePathSegment();
			this.state = 2407;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 335, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2403;
					this.match(RustParser.PATHSEP);
					this.state = 2404;
					this.typePathSegment();
					}
					}
				}
				this.state = 2409;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 335, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePathSegment(): TypePathSegmentContext {
		let _localctx: TypePathSegmentContext = new TypePathSegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, RustParser.RULE_typePathSegment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2410;
			this.pathIdentSegment();
			this.state = 2412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 336, this._ctx) ) {
			case 1:
				{
				this.state = 2411;
				this.match(RustParser.PATHSEP);
				}
				break;
			}
			this.state = 2416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 337, this._ctx) ) {
			case 1:
				{
				this.state = 2414;
				this.genericArgs();
				}
				break;

			case 2:
				{
				this.state = 2415;
				this.typePathFn();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePathFn(): TypePathFnContext {
		let _localctx: TypePathFnContext = new TypePathFnContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, RustParser.RULE_typePathFn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2418;
			this.match(RustParser.LPAREN);
			this.state = 2420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_CRATE) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_SUPER))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)) | (1 << (RustParser.KW_MACRORULES - 32)) | (1 << (RustParser.KW_UNDERLINELIFETIME - 32)) | (1 << (RustParser.KW_DOLLARCRATE - 32)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 32)) | (1 << (RustParser.RAW_IDENTIFIER - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (RustParser.LIFETIME_OR_LABEL - 81)) | (1 << (RustParser.STAR - 81)) | (1 << (RustParser.NOT - 81)) | (1 << (RustParser.AND - 81)) | (1 << (RustParser.LT - 81)) | (1 << (RustParser.UNDERSCORE - 81)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (RustParser.PATHSEP - 119)) | (1 << (RustParser.QUESTION - 119)) | (1 << (RustParser.LSQUAREBRACKET - 119)) | (1 << (RustParser.LPAREN - 119)))) !== 0)) {
				{
				this.state = 2419;
				this.typePathInputs();
				}
			}

			this.state = 2422;
			this.match(RustParser.RPAREN);
			this.state = 2425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 339, this._ctx) ) {
			case 1:
				{
				this.state = 2423;
				this.match(RustParser.RARROW);
				this.state = 2424;
				this.type_();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePathInputs(): TypePathInputsContext {
		let _localctx: TypePathInputsContext = new TypePathInputsContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, RustParser.RULE_typePathInputs);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2427;
			this.type_();
			this.state = 2432;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2428;
					this.match(RustParser.COMMA);
					this.state = 2429;
					this.type_();
					}
					}
				}
				this.state = 2434;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
			}
			this.state = 2436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RustParser.COMMA) {
				{
				this.state = 2435;
				this.match(RustParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public visibility(): VisibilityContext {
		let _localctx: VisibilityContext = new VisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, RustParser.RULE_visibility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2438;
			this.match(RustParser.KW_PUB);
			this.state = 2448;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 343, this._ctx) ) {
			case 1:
				{
				this.state = 2439;
				this.match(RustParser.LPAREN);
				this.state = 2445;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RustParser.KW_CRATE:
					{
					this.state = 2440;
					this.match(RustParser.KW_CRATE);
					}
					break;
				case RustParser.KW_SELFVALUE:
					{
					this.state = 2441;
					this.match(RustParser.KW_SELFVALUE);
					}
					break;
				case RustParser.KW_SUPER:
					{
					this.state = 2442;
					this.match(RustParser.KW_SUPER);
					}
					break;
				case RustParser.KW_IN:
					{
					this.state = 2443;
					this.match(RustParser.KW_IN);
					this.state = 2444;
					this.simplePath();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2447;
				this.match(RustParser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, RustParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2450;
			_la = this._input.LA(1);
			if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (RustParser.KW_MACRORULES - 54)) | (1 << (RustParser.NON_KEYWORD_IDENTIFIER - 54)) | (1 << (RustParser.RAW_IDENTIFIER - 54)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, RustParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2452;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RustParser.KW_AS) | (1 << RustParser.KW_BREAK) | (1 << RustParser.KW_CONST) | (1 << RustParser.KW_CONTINUE) | (1 << RustParser.KW_CRATE) | (1 << RustParser.KW_ELSE) | (1 << RustParser.KW_ENUM) | (1 << RustParser.KW_EXTERN) | (1 << RustParser.KW_FALSE) | (1 << RustParser.KW_FN) | (1 << RustParser.KW_FOR) | (1 << RustParser.KW_IF) | (1 << RustParser.KW_IMPL) | (1 << RustParser.KW_IN) | (1 << RustParser.KW_LET) | (1 << RustParser.KW_LOOP) | (1 << RustParser.KW_MATCH) | (1 << RustParser.KW_MOD) | (1 << RustParser.KW_MOVE) | (1 << RustParser.KW_MUT) | (1 << RustParser.KW_PUB) | (1 << RustParser.KW_REF) | (1 << RustParser.KW_RETURN) | (1 << RustParser.KW_SELFVALUE) | (1 << RustParser.KW_SELFTYPE) | (1 << RustParser.KW_STATIC) | (1 << RustParser.KW_STRUCT) | (1 << RustParser.KW_SUPER) | (1 << RustParser.KW_TRAIT) | (1 << RustParser.KW_TRUE) | (1 << RustParser.KW_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RustParser.KW_UNSAFE - 32)) | (1 << (RustParser.KW_USE - 32)) | (1 << (RustParser.KW_WHERE - 32)) | (1 << (RustParser.KW_WHILE - 32)) | (1 << (RustParser.KW_ASYNC - 32)) | (1 << (RustParser.KW_AWAIT - 32)) | (1 << (RustParser.KW_DYN - 32)) | (1 << (RustParser.KW_ABSTRACT - 32)) | (1 << (RustParser.KW_BECOME - 32)) | (1 << (RustParser.KW_BOX - 32)) | (1 << (RustParser.KW_DO - 32)) | (1 << (RustParser.KW_FINAL - 32)) | (1 << (RustParser.KW_MACRO - 32)) | (1 << (RustParser.KW_OVERRIDE - 32)) | (1 << (RustParser.KW_PRIV - 32)) | (1 << (RustParser.KW_TYPEOF - 32)) | (1 << (RustParser.KW_UNSIZED - 32)) | (1 << (RustParser.KW_VIRTUAL - 32)) | (1 << (RustParser.KW_YIELD - 32)) | (1 << (RustParser.KW_TRY - 32)) | (1 << (RustParser.KW_UNION - 32)) | (1 << (RustParser.KW_STATICLIFETIME - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext {
		let _localctx: MacroIdentifierLikeTokenContext = new MacroIdentifierLikeTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, RustParser.RULE_macroIdentifierLikeToken);
		try {
			this.state = 2460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 344, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2454;
				this.keyword();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2455;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2456;
				this.match(RustParser.KW_MACRORULES);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2457;
				this.match(RustParser.KW_UNDERLINELIFETIME);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2458;
				this.match(RustParser.KW_DOLLARCRATE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2459;
				this.match(RustParser.LIFETIME_OR_LABEL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroLiteralToken(): MacroLiteralTokenContext {
		let _localctx: MacroLiteralTokenContext = new MacroLiteralTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, RustParser.RULE_macroLiteralToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2462;
			this.literalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroPunctuationToken(): MacroPunctuationTokenContext {
		let _localctx: MacroPunctuationTokenContext = new MacroPunctuationTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, RustParser.RULE_macroPunctuationToken);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2464;
			_la = this._input.LA(1);
			if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (RustParser.MINUS - 83)) | (1 << (RustParser.SLASH - 83)) | (1 << (RustParser.PERCENT - 83)) | (1 << (RustParser.CARET - 83)) | (1 << (RustParser.NOT - 83)) | (1 << (RustParser.AND - 83)) | (1 << (RustParser.OR - 83)) | (1 << (RustParser.ANDAND - 83)) | (1 << (RustParser.OROR - 83)) | (1 << (RustParser.PLUSEQ - 83)) | (1 << (RustParser.MINUSEQ - 83)) | (1 << (RustParser.STAREQ - 83)) | (1 << (RustParser.SLASHEQ - 83)) | (1 << (RustParser.PERCENTEQ - 83)) | (1 << (RustParser.CARETEQ - 83)) | (1 << (RustParser.ANDEQ - 83)) | (1 << (RustParser.OREQ - 83)) | (1 << (RustParser.SHLEQ - 83)) | (1 << (RustParser.SHREQ - 83)) | (1 << (RustParser.EQ - 83)) | (1 << (RustParser.EQEQ - 83)) | (1 << (RustParser.NE - 83)) | (1 << (RustParser.GT - 83)) | (1 << (RustParser.LT - 83)) | (1 << (RustParser.GE - 83)) | (1 << (RustParser.LE - 83)) | (1 << (RustParser.AT - 83)) | (1 << (RustParser.UNDERSCORE - 83)) | (1 << (RustParser.DOT - 83)) | (1 << (RustParser.DOTDOT - 83)) | (1 << (RustParser.DOTDOTDOT - 83)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (RustParser.DOTDOTEQ - 115)) | (1 << (RustParser.COMMA - 115)) | (1 << (RustParser.SEMI - 115)) | (1 << (RustParser.COLON - 115)) | (1 << (RustParser.PATHSEP - 115)) | (1 << (RustParser.RARROW - 115)) | (1 << (RustParser.FATARROW - 115)) | (1 << (RustParser.POUND - 115)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shl(): ShlContext {
		let _localctx: ShlContext = new ShlContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, RustParser.RULE_shl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2466;
			this.match(RustParser.LT);
			this.state = 2467;
			if (!(this.next('<'))) {
				throw this.createFailedPredicateException("this.next('<')");
			}
			this.state = 2468;
			this.match(RustParser.LT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shr(): ShrContext {
		let _localctx: ShrContext = new ShrContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, RustParser.RULE_shr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2470;
			this.match(RustParser.GT);
			this.state = 2471;
			if (!(this.next('>'))) {
				throw this.createFailedPredicateException("this.next('>')");
			}
			this.state = 2472;
			this.match(RustParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 77:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 194:
			return this.shl_sempred(_localctx as ShlContext, predIndex);

		case 195:
			return this.shr_sempred(_localctx as ShrContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 26);

		case 1:
			return this.precpred(this._ctx, 25);

		case 2:
			return this.precpred(this._ctx, 24);

		case 3:
			return this.precpred(this._ctx, 23);

		case 4:
			return this.precpred(this._ctx, 22);

		case 5:
			return this.precpred(this._ctx, 21);

		case 6:
			return this.precpred(this._ctx, 20);

		case 7:
			return this.precpred(this._ctx, 19);

		case 8:
			return this.precpred(this._ctx, 18);

		case 9:
			return this.precpred(this._ctx, 14);

		case 10:
			return this.precpred(this._ctx, 13);

		case 11:
			return this.precpred(this._ctx, 12);

		case 12:
			return this.precpred(this._ctx, 37);

		case 13:
			return this.precpred(this._ctx, 36);

		case 14:
			return this.precpred(this._ctx, 35);

		case 15:
			return this.precpred(this._ctx, 34);

		case 16:
			return this.precpred(this._ctx, 33);

		case 17:
			return this.precpred(this._ctx, 32);

		case 18:
			return this.precpred(this._ctx, 31);

		case 19:
			return this.precpred(this._ctx, 27);

		case 20:
			return this.precpred(this._ctx, 17);
		}
		return true;
	}
	private shl_sempred(_localctx: ShlContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.next('<');
		}
		return true;
	}
	private shr_sempred(_localctx: ShrContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.next('>');
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x84\u09AD\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x03\x02\x07\x02\u018C\n\x02" +
		"\f\x02\x0E\x02\u018F\v\x02\x03\x02\x07\x02\u0192\n\x02\f\x02\x0E\x02\u0195" +
		"\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x07\x04\u019F\n\x04\f\x04\x0E\x04\u01A2\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x04\u01A7\n\x04\f\x04\x0E\x04\u01AA\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x04\u01AF\n\x04\f\x04\x0E\x04\u01B2\v\x04\x03\x04\x05\x04\u01B5\n" +
		"\x04\x03\x05\x06\x05\u01B8\n\x05\r\x05\x0E\x05\u01B9\x03\x05\x05\x05\u01BD" +
		"\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u01C4\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x07\x07\u01CA\n\x07\f\x07\x0E\x07\u01CD\v" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u01D6" +
		"\n\x07\f\x07\x0E\x07\u01D9\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x07\x07\u01E2\n\x07\f\x07\x0E\x07\u01E5\v\x07\x03\x07" +
		"\x03\x07\x05\x07\u01E9\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\u01FE\n\t\x03\n\x03\n\x03\n\x07\n\u0203\n\n\f\n\x0E\n\u0206\v" +
		"\n\x03\n\x05\n\u0209\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x07\f\u0211" +
		"\n\f\f\f\x0E\f\u0214\v\f\x03\f\x03\f\x03\f\x07\f\u0219\n\f\f\f\x0E\f\u021C" +
		"\v\f\x03\f\x03\f\x03\f\x07\f\u0221\n\f\f\f\x0E\f\u0224\v\f\x03\f\x05\f" +
		"\u0227\n\f\x03\r\x06\r\u022A\n\r\r\r\x0E\r\u022B\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u0232\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\u0239\n\r\r\r\x0E" +
		"\r\u023A\x03\r\x03\r\x05\r\u023F\n\r\x03\r\x03\r\x05\r\u0243\n\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0249\n\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\u0251\n\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x13\x07\x13\u0258\n\x13\f\x13\x0E\x13\u025B\v\x13\x03\x13\x03\x13" +
		"\x05\x13\u025F\n\x13\x03\x14\x05\x14\u0262\n\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u0271\n\x14\x03\x15\x03\x15\x05\x15\u0275\n\x15\x03\x16" +
		"\x05\x16\u0278\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u027F" +
		"\n\x16\f\x16\x0E\x16\u0282\v\x16\x03\x16\x07\x16\u0285\n\x16\f\x16\x0E" +
		"\x16\u0288\v\x16\x03\x16\x05\x16\u028B\n\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x05\x17\u0291\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0297" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u029C\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x05\x1B\u02A3\n\x1B\x03\x1B\x05\x1B\u02A6\n\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u02AD\n\x1B\f\x1B\x0E\x1B" +
		"\u02B0\v\x1B\x03\x1B\x05\x1B\u02B3\n\x1B\x05\x1B\u02B5\n\x1B\x03\x1B\x05" +
		"\x1B\u02B8\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02BE\n\x1B\x05" +
		"\x1B\u02C0\n\x1B\x05\x1B\u02C2\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u02C8\n\x1C\x03\x1C\x03\x1C\x05\x1C\u02CC\n\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u02D0\n\x1C\x03\x1C\x05\x1C\u02D3\n\x1C\x03\x1C\x03\x1C\x05\x1C\u02D7" +
		"\n\x1C\x03\x1D\x05\x1D\u02DA\n\x1D\x03\x1D\x05\x1D\u02DD\n\x1D\x03\x1D" +
		"\x05\x1D\u02E0\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02E4\n\x1D\x05\x1D\u02E6" +
		"\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u02EC\n\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02F1\n\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u02F6" +
		"\n\x1F\f\x1F\x0E\x1F\u02F9\v\x1F\x03\x1F\x05\x1F\u02FC\n\x1F\x05\x1F\u02FE" +
		"\n\x1F\x03 \x07 \u0301\n \f \x0E \u0304\v \x03 \x03 \x05 \u0308\n \x03" +
		"!\x03!\x05!\u030C\n!\x05!\u030E\n!\x03!\x05!\u0311\n!\x03!\x03!\x03\"" +
		"\x05\"\u0316\n\"\x03\"\x03\"\x03\"\x03\"\x03#\x07#\u031D\n#\f#\x0E#\u0320" +
		"\v#\x03#\x03#\x03#\x05#\u0325\n#\x03$\x03$\x03$\x03$\x05$\u032B\n$\x03" +
		"%\x03%\x03%\x03&\x03&\x03&\x05&\u0333\n&\x03&\x05&\u0336\n&\x03&\x03&" +
		"\x05&\u033A\n&\x03&\x03&\x03\'\x03\'\x05\'\u0340\n\'\x03(\x03(\x03(\x05" +
		"(\u0345\n(\x03(\x05(\u0348\n(\x03(\x03(\x05(\u034C\n(\x03(\x03(\x05(\u0350" +
		"\n(\x03)\x03)\x03)\x05)\u0355\n)\x03)\x03)\x05)\u0359\n)\x03)\x03)\x05" +
		")\u035D\n)\x03)\x03)\x03*\x03*\x03*\x07*\u0364\n*\f*\x0E*\u0367\v*\x03" +
		"*\x05*\u036A\n*\x03+\x07+\u036D\n+\f+\x0E+\u0370\v+\x03+\x05+\u0373\n" +
		"+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x07,\u037C\n,\f,\x0E,\u037F\v,\x03" +
		",\x05,\u0382\n,\x03-\x07-\u0385\n-\f-\x0E-\u0388\v-\x03-\x05-\u038B\n" +
		"-\x03-\x03-\x03.\x03.\x03.\x05.\u0392\n.\x03.\x05.\u0395\n.\x03.\x03." +
		"\x05.\u0399\n.\x03.\x03.\x03/\x03/\x03/\x07/\u03A0\n/\f/\x0E/\u03A3\v" +
		"/\x03/\x05/\u03A6\n/\x030\x070\u03A9\n0\f0\x0E0\u03AC\v0\x030\x050\u03AF" +
		"\n0\x030\x030\x030\x030\x050\u03B5\n0\x031\x031\x051\u03B9\n1\x031\x03" +
		"1\x032\x032\x052\u03BF\n2\x032\x032\x033\x033\x033\x034\x034\x034\x05" +
		"4\u03C9\n4\x034\x054\u03CC\n4\x034\x034\x034\x034\x035\x035\x035\x055" +
		"\u03D5\n5\x035\x035\x035\x035\x055\u03DB\n5\x035\x035\x036\x036\x056\u03E1" +
		"\n6\x036\x036\x036\x036\x036\x056\u03E8\n6\x036\x036\x037\x057\u03ED\n" +
		"7\x037\x037\x037\x057\u03F2\n7\x037\x037\x057\u03F6\n7\x057\u03F8\n7\x03" +
		"7\x057\u03FB\n7\x037\x037\x077\u03FF\n7\f7\x0E7\u0402\v7\x037\x077\u0405" +
		"\n7\f7\x0E7\u0408\v7\x037\x037\x038\x038\x058\u040E\n8\x039\x039\x059" +
		"\u0412\n9\x039\x039\x059\u0416\n9\x039\x039\x079\u041A\n9\f9\x0E9\u041D" +
		"\v9\x039\x079\u0420\n9\f9\x0E9\u0423\v9\x039\x039\x03:\x05:\u0428\n:\x03" +
		":\x03:\x05:\u042C\n:\x03:\x05:\u042F\n:\x03:\x03:\x03:\x03:\x05:\u0435" +
		"\n:\x03:\x03:\x07:\u0439\n:\f:\x0E:\u043C\v:\x03:\x07:\u043F\n:\f:\x0E" +
		":\u0442\v:\x03:\x03:\x03;\x05;\u0447\n;\x03;\x03;\x05;\u044B\n;\x03;\x03" +
		";\x07;\u044F\n;\f;\x0E;\u0452\v;\x03;\x07;\u0455\n;\f;\x0E;\u0458\v;\x03" +
		";\x03;\x03<\x07<\u045D\n<\f<\x0E<\u0460\v<\x03<\x03<\x05<\u0464\n<\x03" +
		"<\x03<\x05<\u0468\n<\x05<\u046A\n<\x03=\x03=\x03=\x03=\x07=\u0470\n=\f" +
		"=\x0E=\u0473\v=\x03=\x03=\x05=\u0477\n=\x05=\u0479\n=\x03=\x03=\x03>\x07" +
		">\u047E\n>\f>\x0E>\u0481\v>\x03>\x03>\x03>\x05>\u0486\n>\x03?\x05?\u0489" +
		"\n?\x03?\x03?\x03?\x05?\u048E\n?\x03@\x05@\u0491\n@\x03@\x03@\x03@\x05" +
		"@\u0496\n@\x05@\u0498\n@\x03@\x03@\x05@\u049C\n@\x03A\x03A\x03A\x03A\x03" +
		"A\x03B\x03B\x03B\x03B\x07B\u04A7\nB\fB\x0EB\u04AA\vB\x03B\x05B\u04AD\n" +
		"B\x03C\x03C\x05C\u04B1\nC\x03D\x03D\x03D\x03D\x03E\x05E\u04B8\nE\x03E" +
		"\x03E\x03E\x05E\u04BD\nE\x03F\x03F\x03F\x03G\x07G\u04C3\nG\fG\x0EG\u04C6" +
		"\vG\x03G\x03G\x05G\u04CA\nG\x03G\x03G\x03G\x05G\u04CF\nG\x05G\u04D1\n" +
		"G\x03H\x03H\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03J\x03J\x05" +
		"J\u04E0\nJ\x03K\x03K\x03K\x05K\u04E5\nK\x03L\x03L\x03L\x03L\x03L\x05L" +
		"\u04EC\nL\x03M\x07M\u04EF\nM\fM\x0EM\u04F2\vM\x03M\x03M\x03M\x03M\x05" +
		"M\u04F8\nM\x03M\x03M\x05M\u04FC\nM\x03M\x03M\x03N\x03N\x03N\x03N\x03N" +
		"\x05N\u0505\nN\x05N\u0507\nN\x03O\x03O\x06O\u050B\nO\rO\x0EO\u050C\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x05O\u0515\nO\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x05O\u051E\nO\x03O\x03O\x03O\x03O\x05O\u0524\nO\x03O\x05O\u0527" +
		"\nO\x03O\x03O\x05O\u052B\nO\x03O\x05O\u052E\nO\x03O\x03O\x05O\u0532\n" +
		"O\x03O\x03O\x07O\u0536\nO\fO\x0EO\u0539\vO\x03O\x03O\x03O\x03O\x03O\x07" +
		"O\u0540\nO\fO\x0EO\u0543\vO\x03O\x05O\u0546\nO\x03O\x03O\x03O\x07O\u054B" +
		"\nO\fO\x0EO\u054E\vO\x03O\x05O\u0551\nO\x03O\x03O\x03O\x03O\x03O\x03O" +
		"\x05O\u0559\nO\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u0564" +
		"\nO\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u058A\nO\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u059A\n" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x05O\u05AA\nO\x07O\u05AC\nO\fO\x0EO\u05AF\vO\x03P\x03P\x03Q\x03Q\x03" +
		"R\x06R\u05B6\nR\rR\x0ER\u05B7\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R" +
		"\x03R\x05R\u05C3\nR\x03S\x03S\x03T\x03T\x05T\u05C9\nT\x03U\x03U\x07U\u05CD" +
		"\nU\fU\x0EU\u05D0\vU\x03U\x05U\u05D3\nU\x03U\x03U\x03V\x06V\u05D8\nV\r" +
		"V\x0EV\u05D9\x03V\x05V\u05DD\nV\x03V\x05V\u05E0\nV\x03W\x03W\x05W\u05E4" +
		"\nW\x03W\x03W\x03X\x03X\x03X\x03Y\x03Y\x03Y\x07Y\u05EE\nY\fY\x0EY\u05F1" +
		"\vY\x03Y\x05Y\u05F4\nY\x03Y\x03Y\x03Y\x03Y\x05Y\u05FA\nY\x03Z\x03Z\x03" +
		"Z\x06Z\u05FF\nZ\rZ\x0EZ\u0600\x03Z\x05Z\u0604\nZ\x03[\x03[\x03\\\x03\\" +
		"\x03\\\x05\\\u060B\n\\\x03]\x03]\x03]\x07]\u0610\n]\f]\x0E]\u0613\v]\x03" +
		"]\x03]\x05]\u0617\n]\x03]\x03]\x03^\x03^\x03^\x07^\u061E\n^\f^\x0E^\u0621" +
		"\v^\x03^\x03^\x03^\x05^\u0626\n^\x05^\u0628\n^\x03_\x07_\u062B\n_\f_\x0E" +
		"_\u062E\v_\x03_\x03_\x03_\x05_\u0633\n_\x03_\x03_\x03_\x05_\u0638\n_\x03" +
		"`\x03`\x03`\x03a\x03a\x03a\x07a\u0640\na\fa\x0Ea\u0643\va\x03a\x03a\x03" +
		"a\x07a\u0648\na\fa\x0Ea\u064B\va\x03a\x05a\u064E\na\x05a\u0650\na\x03" +
		"a\x03a\x03b\x03b\x03c\x03c\x03c\x05c\u0659\nc\x03d\x03d\x03d\x05d\u065E" +
		"\nd\x03d\x03d\x03e\x03e\x03e\x07e\u0665\ne\fe\x0Ee\u0668\ve\x03e\x05e" +
		"\u066B\ne\x03f\x03f\x03f\x05f\u0670\nf\x03f\x03f\x03f\x05f\u0675\nf\x03" +
		"g\x03g\x03g\x03g\x03g\x07g\u067C\ng\fg\x0Eg\u067F\vg\x03g\x05g\u0682\n" +
		"g\x05g\u0684\ng\x03g\x03g\x03h\x03h\x03i\x03i\x03i\x07i\u068D\ni\fi\x0E" +
		"i\u0690\vi\x03i\x05i\u0693\ni\x03j\x05j\u0696\nj\x03j\x03j\x03j\x05j\u069B" +
		"\nj\x03j\x05j\u069E\nj\x03j\x03j\x03j\x03j\x03j\x05j\u06A5\nj\x03k\x03" +
		"k\x03k\x07k\u06AA\nk\fk\x0Ek\u06AD\vk\x03k\x05k\u06B0\nk\x03l\x07l\u06B3" +
		"\nl\fl\x0El\u06B6\vl\x03l\x03l\x03l\x05l\u06BB\nl\x03m\x05m\u06BE\nm\x03" +
		"m\x03m\x03m\x03m\x05m\u06C4\nm\x03n\x03n\x03n\x03o\x03o\x03o\x03o\x03" +
		"p\x03p\x03p\x03p\x03p\x03p\x03p\x03q\x03q\x03q\x03q\x03q\x03q\x03r\x03" +
		"r\x03r\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x05s\u06E4\ns\x05s\u06E6\ns" +
		"\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x05t\u06F2\nt\x05t" +
		"\u06F4\nt\x03u\x03u\x03u\x03u\x07u\u06FA\nu\fu\x0Eu\u06FD\vu\x03u\x05" +
		"u\u0700\nu\x03u\x03u\x03v\x03v\x03v\x03v\x07v\u0708\nv\fv\x0Ev\u070B\v" +
		"v\x03v\x03v\x03v\x03v\x05v\u0711\nv\x03w\x03w\x03w\x03w\x03w\x05w\u0718" +
		"\nw\x05w\u071A\nw\x03x\x07x\u071D\nx\fx\x0Ex\u0720\vx\x03x\x03x\x05x\u0724" +
		"\nx\x03y\x03y\x03y\x03z\x05z\u072A\nz\x03z\x03z\x03z\x07z\u072F\nz\fz" +
		"\x0Ez\u0732\vz\x03{\x03{\x05{\u0736\n{\x03|\x03|\x03|\x03|\x03|\x03|\x03" +
		"|\x03|\x03|\x03|\x03|\x03|\x05|\u0744\n|\x03}\x03}\x03}\x03}\x03}\x03" +
		"}\x03}\x03}\x03}\x05}\u074F\n}\x03}\x03}\x05}\u0753\n}\x03}\x05}\u0756" +
		"\n}\x03~\x05~\u0759\n~\x03~\x05~\u075C\n~\x03~\x03~\x03~\x05~\u0761\n" +
		"~\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0772\n\x81" +
		"\x03\x82\x03\x82\x03\x82\x05\x82\u0777\n\x82\x03\x82\x03\x82\x05\x82\u077B" +
		"\n\x82\x03\x82\x03\x82\x05\x82\u077F\n\x82\x03\x83\x03\x83\x05\x83\u0783" +
		"\n\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x05\x84\u078A\n\x84\x03" +
		"\x84\x03\x84\x03\x85\x03\x85\x03\x85\x05\x85\u0791\n\x85\x05\x85\u0793" +
		"\n\x85\x03\x85\x05\x85\u0796\n\x85\x03\x86\x03\x86\x03\x86\x07\x86\u079B" +
		"\n\x86\f\x86\x0E\x86\u079E\v\x86\x03\x87\x07\x87\u07A1\n\x87\f\x87\x0E" +
		"\x87\u07A4\v\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87" +
		"\x03\x87\x03\x87\x05\x87\u07AF\n\x87\x03\x87\x05\x87\u07B2\n\x87\x03\x87" +
		"\x05\x87\u07B5\n\x87\x03\x88\x07\x88\u07B8\n\x88\f\x88\x0E\x88\u07BB\v" +
		"\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x05\x89\u07C2\n\x89\x03\x89" +
		"\x03\x89\x03\x8A\x03\x8A\x03\x8A\x07\x8A\u07C9\n\x8A\f\x8A\x0E\x8A\u07CC" +
		"\v\x8A\x03\x8A\x05\x8A\u07CF\n\x8A\x03\x8B\x03\x8B\x05\x8B\u07D3\n\x8B" +
		"\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
		"\x06\x8C\u07DE\n\x8C\r\x8C\x0E\x8C\u07DF\x03\x8C\x05\x8C\u07E3\n\x8C\x05" +
		"\x8C\u07E5\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E" +
		"\u07ED\n\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x07\x8F\u07F4\n\x8F" +
		"\f\x8F\x0E\x8F\u07F7\v\x8F\x03\x8F\x05\x8F\u07FA\n\x8F\x03\x90\x03\x90" +
		"\x05\x90\u07FE\n\x90\x03\x91\x03\x91\x03\x91\x05\x91\u0803\n\x91\x03\x92" +
		"\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92" +
		"\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u0813\n\x92\x03\x93\x03\x93\x03" +
		"\x93\x03\x93\x03\x94\x03\x94\x03\x95\x03\x95\x03\x95\x03\x95\x06\x95\u081F" +
		"\n\x95\r\x95\x0E\x95\u0820\x03\x95\x05\x95\u0824\n\x95\x05\x95\u0826\n" +
		"\x95\x03\x95\x03\x95\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03" +
		"\x97\x03\x97\x03\x97\x03\x97\x03\x98\x03\x98\x05\x98\u0836\n\x98\x03\x98" +
		"\x05\x98\u0839\n\x98\x03\x98\x03\x98\x03\x99\x03\x99\x03\x99\x03\x99\x03" +
		"\x9A\x05\x9A\u0842\n\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u0848" +
		"\n\x9A\x03\x9A\x03\x9A\x05\x9A\u084C\n\x9A\x03\x9B\x05\x9B\u084F\n\x9B" +
		"\x03\x9B\x03\x9B\x05\x9B\u0853\n\x9B\x05\x9B\u0855\n\x9B\x03\x9C\x03\x9C" +
		"\x03\x9C\x03\x9D\x03\x9D\x05\x9D\u085C\n\x9D\x03\x9E\x03\x9E\x03\x9E\x07" +
		"\x9E\u0861\n\x9E\f\x9E\x0E\x9E\u0864\v\x9E\x03\x9E\x05\x9E\u0867\n\x9E" +
		"\x03\x9F\x07\x9F\u086A\n\x9F\f\x9F\x0E\x9F\u086D\v\x9F\x03\x9F\x03\x9F" +
		"\x05\x9F\u0871\n\x9F\x03\x9F\x05\x9F\u0874\n\x9F\x03\x9F\x03\x9F\x03\xA0" +
		"\x03\xA0\x03\xA0\x07\xA0\u087B\n\xA0\f\xA0\x0E\xA0\u087E\v\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x07\xA0\u0883\n\xA0\f\xA0\x0E\xA0\u0886\v\xA0\x03\xA0" +
		"\x03\xA0\x03\xA1\x05\xA1\u088B\n\xA1\x03\xA1\x03\xA1\x03\xA2\x05\xA2\u0890" +
		"\n\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA4" +
		"\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA6\x07\xA6\u089F\n\xA6\f\xA6\x0E" +
		"\xA6\u08A2\v\xA6\x03\xA6\x05\xA6\u08A5\n\xA6\x03\xA7\x03\xA7\x05\xA7\u08A9" +
		"\n\xA7\x03\xA8\x05\xA8\u08AC\n\xA8\x03\xA8\x05\xA8\u08AF\n\xA8\x03\xA8" +
		"\x03\xA8\x03\xA8\x05\xA8\u08B4\n\xA8\x03\xA8\x05\xA8\u08B7\n\xA8\x03\xA8" +
		"\x03\xA8\x03\xA8\x05\xA8\u08BC\n\xA8\x03\xA9\x03\xA9\x03\xA9\x07\xA9\u08C1" +
		"\n\xA9\f\xA9\x0E\xA9\u08C4\v\xA9\x03\xA9\x05\xA9\u08C7\n\xA9\x03\xAA\x03" +
		"\xAA\x03\xAB\x05\xAB\u08CC\n\xAB\x03\xAB\x03\xAB\x03\xAB\x07\xAB\u08D1" +
		"\n\xAB\f\xAB\x0E\xAB\u08D4\v\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC" +
		"\x05\xAC\u08DB\n\xAC\x03\xAD\x05\xAD\u08DE\n\xAD\x03\xAD\x03\xAD\x03\xAD" +
		"\x07\xAD\u08E3\n\xAD\f\xAD\x0E\xAD\u08E6\v\xAD\x03\xAE\x03\xAE\x03\xAE" +
		"\x05\xAE\u08EB\n\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x05" +
		"\xAF\u08F3\n\xAF\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03";
	private static readonly _serializedATNSegment1: string =
		"\xB0\x05\xB0\u08FB\n\xB0\x03\xB0\x03\xB0\x05\xB0\u08FF\n\xB0\x03\xB0\x05" +
		"\xB0\u0902\n\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x05\xB0" +
		"\u090A\n\xB0\x03\xB0\x05\xB0\u090D\n\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0" +
		"\x03\xB0\x03\xB0\x07\xB0\u0915\n\xB0\f\xB0\x0E\xB0\u0918\v\xB0\x03\xB0" +
		"\x03\xB0\x05\xB0\u091C\n\xB0\x03\xB0\x03\xB0\x05\xB0\u0920\n\xB0\x03\xB1" +
		"\x03\xB1\x03\xB1\x03\xB1\x05\xB1\u0926\n\xB1\x03\xB2\x03\xB2\x05\xB2\u092A" +
		"\n\xB2\x03\xB2\x03\xB2\x05\xB2\u092E\n\xB2\x03\xB3\x03\xB3\x03\xB3\x07" +
		"\xB3\u0933\n\xB3\f\xB3\x0E\xB3\u0936\v\xB3\x03\xB4\x03\xB4\x03\xB4\x07" +
		"\xB4\u093B\n\xB4\f\xB4\x0E\xB4\u093E\v\xB4\x03\xB5\x03\xB5\x03\xB5\x07" +
		"\xB5\u0943\n\xB5\f\xB5\x0E\xB5\u0946\v\xB5\x03\xB6\x03\xB6\x03\xB6\x03" +
		"\xB6\x03\xB7\x03\xB7\x03\xB7\x06\xB7\u094F\n\xB7\r\xB7\x0E\xB7\u0950\x03" +
		"\xB8\x03\xB8\x03\xB8\x03\xB8\x05\xB8\u0957\n\xB8\x03\xB8\x03\xB8\x03\xB9" +
		"\x03\xB9\x03\xB9\x06\xB9\u095E\n\xB9\r\xB9\x0E\xB9\u095F\x03\xBA\x05\xBA" +
		"\u0963\n\xBA\x03\xBA\x03\xBA\x03\xBA\x07\xBA\u0968\n\xBA\f\xBA\x0E\xBA" +
		"\u096B\v\xBA\x03\xBB\x03\xBB\x05\xBB\u096F\n\xBB\x03\xBB\x03\xBB\x05\xBB" +
		"\u0973\n\xBB\x03\xBC\x03\xBC\x05\xBC\u0977\n\xBC\x03\xBC\x03\xBC\x03\xBC" +
		"\x05\xBC\u097C\n\xBC\x03\xBD\x03\xBD\x03\xBD\x07\xBD\u0981\n\xBD\f\xBD" +
		"\x0E\xBD\u0984\v\xBD\x03\xBD\x05\xBD\u0987\n\xBD\x03\xBE\x03\xBE\x03\xBE" +
		"\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u0990\n\xBE\x03\xBE\x05\xBE\u0993" +
		"\n\xBE\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC1\x03\xC1" +
		"\x03\xC1\x03\xC1\x05\xC1\u099F\n\xC1\x03\xC2\x03\xC2\x03\xC3\x03\xC3\x03" +
		"\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x02" +
		"\x02\x03\x9C\xC6\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
		"\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
		"\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4" +
		"\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6" +
		"\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8" +
		"\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116" +
		"\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124" +
		"\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132" +
		"\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140" +
		"\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E" +
		"\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C" +
		"\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A" +
		"\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178" +
		"\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186" +
		"\x02\u0188\x02\x02\x10\x05\x02TTVV~~\x03\x02HI\x04\x02[[]]\x04\x02UUZ" +
		"Z\x03\x02VX\x03\x02TU\x03\x02jo\x03\x02_h\x06\x02\v\v  GMRR\x04\x02\x05" +
		"\x05\x16\x16\x05\x027799SS\x04\x0288;<\x03\x02\x037\x04\x02UUW|\x02\u0ACA" +
		"\x02\u018D\x03\x02\x02\x02\x04\u0198\x03\x02\x02\x02\x06\u01B4\x03\x02" +
		"\x02\x02\b\u01BC\x03\x02\x02\x02\n\u01C3\x03\x02\x02\x02\f\u01E8\x03\x02" +
		"\x02\x02\x0E\u01EA\x03\x02\x02\x02\x10\u01FD\x03\x02\x02\x02\x12\u01FF" +
		"\x03\x02\x02\x02\x14\u020A\x03\x02\x02\x02\x16\u0226\x03\x02\x02\x02\x18" +
		"\u0242\x03\x02\x02\x02\x1A\u0248\x03\x02\x02\x02\x1C\u024A\x03\x02\x02" +
		"\x02\x1E\u0250\x03\x02\x02\x02 \u0252\x03\x02\x02\x02\"\u0254\x03\x02" +
		"\x02\x02$\u0259\x03\x02\x02\x02&\u0261\x03\x02\x02\x02(\u0274\x03\x02" +
		"\x02\x02*\u0277\x03\x02\x02\x02,\u028C\x03\x02\x02\x02.\u0296\x03\x02" +
		"\x02\x020\u0298\x03\x02\x02\x022\u029D\x03\x02\x02\x024\u02C1\x03\x02" +
		"\x02\x026\u02C3\x03\x02\x02\x028\u02D9\x03\x02\x02\x02:\u02E7\x03\x02" +
		"\x02\x02<\u02FD\x03\x02\x02\x02>\u0302\x03\x02\x02\x02@\u030D\x03\x02" +
		"\x02\x02B\u0315\x03\x02\x02\x02D\u031E\x03\x02\x02\x02F\u0326\x03\x02" +
		"\x02\x02H\u032C\x03\x02\x02\x02J\u032F\x03\x02\x02\x02L\u033F\x03\x02" +
		"\x02\x02N\u0341\x03\x02\x02\x02P\u0351\x03\x02\x02\x02R\u0360\x03\x02" +
		"\x02\x02T\u036E\x03\x02\x02\x02V\u0378\x03\x02\x02\x02X\u0386\x03\x02" +
		"\x02\x02Z\u038E\x03\x02\x02\x02\\\u039C\x03\x02\x02\x02^\u03AA\x03\x02" +
		"\x02\x02`\u03B6\x03\x02\x02\x02b\u03BC\x03\x02\x02\x02d\u03C2\x03\x02" +
		"\x02\x02f\u03C5\x03\x02\x02\x02h\u03D1\x03\x02\x02\x02j\u03DE\x03\x02" +
		"\x02\x02l\u03EC\x03\x02\x02\x02n\u040D\x03\x02\x02\x02p\u040F\x03\x02" +
		"\x02\x02r\u0427\x03\x02\x02\x02t\u0446\x03\x02\x02\x02v\u045E\x03\x02" +
		"\x02\x02x\u046B\x03\x02\x02\x02z\u047F\x03\x02\x02\x02|\u0488\x03\x02" +
		"\x02\x02~\u0490\x03\x02\x02\x02\x80\u049D\x03\x02\x02\x02\x82\u04A2\x03" +
		"\x02\x02\x02\x84\u04B0\x03\x02\x02\x02\x86\u04B2\x03\x02\x02\x02\x88\u04B7" +
		"\x03\x02\x02\x02\x8A\u04BE\x03\x02\x02\x02\x8C\u04C4\x03\x02\x02\x02\x8E" +
		"\u04D2\x03\x02\x02\x02\x90\u04D8\x03\x02\x02\x02\x92\u04DD\x03\x02\x02" +
		"\x02\x94\u04E4\x03\x02\x02\x02\x96\u04EB\x03\x02\x02\x02\x98\u04F0\x03" +
		"\x02\x02\x02\x9A\u0506\x03\x02\x02\x02\x9C\u0558\x03\x02\x02\x02\x9E\u05B0" +
		"\x03\x02\x02\x02\xA0\u05B2\x03\x02\x02\x02\xA2\u05C2\x03\x02\x02\x02\xA4" +
		"\u05C4\x03\x02\x02\x02\xA6\u05C8\x03\x02\x02\x02\xA8\u05CA\x03\x02\x02" +
		"\x02\xAA\u05DF\x03\x02\x02\x02\xAC\u05E1\x03\x02\x02\x02\xAE\u05E7\x03" +
		"\x02\x02\x02\xB0\u05F9\x03\x02\x02\x02\xB2\u05FE\x03\x02\x02\x02\xB4\u0605" +
		"\x03\x02\x02\x02\xB6\u060A\x03\x02\x02\x02\xB8\u060C\x03\x02\x02\x02\xBA" +
		"\u061A\x03\x02\x02\x02\xBC\u062C\x03\x02\x02\x02\xBE\u0639\x03\x02\x02" +
		"\x02\xC0\u063C\x03\x02\x02\x02\xC2\u0653\x03\x02\x02\x02\xC4\u0658\x03" +
		"\x02\x02\x02\xC6\u065A\x03\x02\x02\x02\xC8\u0661\x03\x02\x02\x02\xCA\u0674" +
		"\x03\x02\x02\x02\xCC\u0676\x03\x02\x02\x02\xCE\u0687\x03\x02\x02\x02\xD0" +
		"\u0689\x03\x02\x02\x02\xD2\u0695\x03\x02\x02\x02\xD4\u06A6\x03\x02\x02" +
		"\x02\xD6\u06B4\x03\x02\x02\x02\xD8\u06BD\x03\x02\x02\x02\xDA\u06C5\x03" +
		"\x02\x02\x02\xDC\u06C8\x03\x02\x02\x02\xDE\u06CC\x03\x02\x02\x02\xE0\u06D3" +
		"\x03\x02\x02\x02\xE2\u06D9\x03\x02\x02\x02\xE4\u06DC\x03\x02\x02\x02\xE6" +
		"\u06E7\x03\x02\x02\x02\xE8\u06F5\x03\x02\x02\x02\xEA\u0709\x03\x02\x02" +
		"\x02\xEC\u0719\x03\x02\x02\x02\xEE\u071E\x03\x02\x02\x02\xF0\u0725\x03" +
		"\x02\x02\x02\xF2\u0729\x03\x02\x02\x02\xF4\u0735\x03\x02\x02\x02\xF6\u0743" +
		"\x03\x02\x02\x02\xF8\u0755\x03\x02\x02\x02\xFA\u0758\x03\x02\x02\x02\xFC" +
		"\u0762\x03\x02\x02\x02\xFE\u0764\x03\x02\x02\x02\u0100\u0771\x03\x02\x02" +
		"\x02\u0102\u077E\x03\x02\x02\x02\u0104\u0780\x03\x02\x02\x02\u0106\u0786" +
		"\x03\x02\x02\x02\u0108\u0795\x03\x02\x02\x02\u010A\u0797\x03\x02\x02\x02" +
		"\u010C\u07A2\x03\x02\x02\x02\u010E\u07B9\x03\x02\x02\x02\u0110\u07BE\x03" +
		"\x02\x02\x02\u0112\u07C5\x03\x02\x02\x02\u0114\u07D0\x03\x02\x02\x02\u0116" +
		"\u07E4\x03\x02\x02\x02\u0118\u07E6\x03\x02\x02\x02\u011A\u07EA\x03\x02" +
		"\x02\x02\u011C\u07F0\x03\x02\x02\x02\u011E\u07FD\x03\x02\x02\x02\u0120" +
		"\u0802\x03\x02\x02\x02\u0122\u0812\x03\x02\x02\x02\u0124\u0814\x03\x02" +
		"\x02\x02\u0126\u0818\x03\x02\x02\x02\u0128\u081A\x03\x02\x02\x02\u012A" +
		"\u0829\x03\x02\x02\x02\u012C\u082F\x03\x02\x02\x02\u012E\u0833\x03\x02" +
		"\x02\x02\u0130\u083C\x03\x02\x02\x02\u0132\u0841\x03\x02\x02\x02\u0134" +
		"\u084E\x03\x02\x02\x02\u0136\u0856\x03\x02\x02\x02\u0138\u085B\x03\x02" +
		"\x02\x02\u013A\u085D\x03\x02\x02\x02\u013C\u086B\x03\x02\x02\x02\u013E" +
		"\u087C\x03\x02\x02\x02\u0140\u088A\x03\x02\x02\x02\u0142\u088F\x03\x02" +
		"\x02\x02\u0144\u0893\x03\x02\x02\x02\u0146\u0896\x03\x02\x02\x02\u0148" +
		"\u0899\x03\x02\x02\x02\u014A\u089B\x03\x02\x02\x02\u014C\u08A8\x03\x02" +
		"\x02\x02\u014E\u08BB\x03\x02\x02\x02\u0150\u08C2\x03\x02\x02\x02\u0152" +
		"\u08C8\x03\x02\x02\x02\u0154\u08CB\x03\x02\x02\x02\u0156\u08DA\x03\x02" +
		"\x02\x02\u0158\u08DD\x03\x02\x02\x02\u015A\u08E7\x03\x02\x02\x02\u015C" +
		"\u08F2\x03\x02\x02\x02\u015E\u091F\x03\x02\x02\x02\u0160\u0925\x03\x02" +
		"\x02\x02\u0162\u092D\x03\x02\x02\x02\u0164\u092F\x03\x02\x02\x02\u0166" +
		"\u0937\x03\x02\x02\x02\u0168\u093F\x03\x02\x02\x02\u016A\u0947\x03\x02" +
		"\x02\x02\u016C\u094B\x03\x02\x02\x02\u016E\u0952\x03\x02\x02\x02\u0170" +
		"\u095A\x03\x02\x02\x02\u0172\u0962\x03\x02\x02\x02\u0174\u096C\x03\x02" +
		"\x02\x02\u0176\u0974\x03\x02\x02\x02\u0178\u097D\x03\x02\x02\x02\u017A" +
		"\u0988\x03\x02\x02\x02\u017C\u0994\x03\x02\x02\x02\u017E\u0996\x03\x02" +
		"\x02\x02\u0180\u099E\x03\x02\x02\x02\u0182\u09A0\x03\x02\x02\x02\u0184" +
		"\u09A2\x03\x02\x02\x02\u0186\u09A4\x03\x02\x02\x02\u0188\u09A8\x03\x02" +
		"\x02\x02\u018A\u018C\x05\x8EH\x02\u018B\u018A\x03\x02\x02\x02\u018C\u018F" +
		"\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02" +
		"\u018E\u0193\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0192\x05" +
		"$\x13\x02\u0191\u0190\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193" +
		"\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0196\x03\x02" +
		"\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0197\x07\x02\x02\x03\u0197" +
		"\x03\x03\x02\x02\x02\u0198\u0199\x05\u0154\xAB\x02\u0199\u019A\x07Z\x02" +
		"\x02\u019A\u019B\x05\x06\x04\x02\u019B\x05\x03\x02\x02\x02\u019C\u01A0" +
		"\x07\x83\x02\x02\u019D\u019F\x05\b\x05\x02\u019E\u019D\x03\x02\x02\x02" +
		"\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03" +
		"\x02\x02\x02\u01A1\u01A3\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3" +
		"\u01B5\x07\x84\x02\x02\u01A4\u01A8\x07\x81\x02\x02\u01A5\u01A7\x05\b\x05" +
		"\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6" +
		"\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02" +
		"\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01B5\x07\x82\x02\x02\u01AC\u01B0\x07" +
		"\x7F\x02\x02\u01AD\u01AF\x05\b\x05\x02\u01AE\u01AD\x03\x02\x02\x02\u01AF" +
		"\u01B2\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02" +
		"\x02\x02\u01B1\u01B3\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3" +
		"\u01B5\x07\x80\x02\x02\u01B4\u019C\x03\x02\x02\x02\u01B4\u01A4\x03\x02" +
		"\x02\x02\u01B4\u01AC\x03\x02\x02\x02\u01B5\x07\x03\x02\x02\x02\u01B6\u01B8" +
		"\x05\n\x06\x02\u01B7\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02" +
		"\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BD\x03" +
		"\x02\x02\x02\u01BB\u01BD\x05\x06\x04\x02\u01BC\u01B7\x03\x02\x02\x02\u01BC" +
		"\u01BB\x03\x02\x02\x02\u01BD\t\x03\x02\x02\x02\u01BE\u01C4\x05\u0180\xC1" +
		"\x02\u01BF\u01C4\x05\u0182\xC2\x02\u01C0\u01C4\x05\u0184\xC3\x02\u01C1" +
		"\u01C4\x05 \x11\x02\u01C2\u01C4\x07}\x02\x02\u01C3\u01BE\x03\x02\x02\x02" +
		"\u01C3\u01BF\x03\x02\x02\x02\u01C3\u01C0\x03\x02\x02\x02\u01C3\u01C1\x03" +
		"\x02\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4\v\x03\x02\x02\x02\u01C5" +
		"\u01C6\x05\u0154\xAB\x02\u01C6\u01C7\x07Z\x02\x02\u01C7\u01CB\x07\x83" +
		"\x02\x02\u01C8\u01CA\x05\b\x05\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CD" +
		"\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02" +
		"\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01CF\x07" +
		"\x84\x02\x02\u01CF\u01D0\x07w\x02\x02\u01D0\u01E9\x03\x02\x02\x02\u01D1" +
		"\u01D2\x05\u0154\xAB\x02\u01D2\u01D3\x07Z\x02\x02\u01D3\u01D7\x07\x81" +
		"\x02\x02\u01D4\u01D6\x05\b\x05\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01D9" +
		"\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02" +
		"\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DB\x07" +
		"\x82\x02\x02\u01DB\u01DC\x07w\x02\x02\u01DC\u01E9\x03\x02\x02\x02\u01DD" +
		"\u01DE\x05\u0154\xAB\x02\u01DE\u01DF\x07Z\x02\x02\u01DF\u01E3\x07\x7F" +
		"\x02\x02\u01E0\u01E2\x05\b\x05\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2\u01E5" +
		"\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02" +
		"\u01E4\u01E6\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E7\x07" +
		"\x80\x02\x02\u01E7\u01E9\x03\x02\x02\x02\u01E8\u01C5\x03\x02\x02\x02\u01E8" +
		"\u01D1\x03\x02\x02\x02\u01E8\u01DD\x03\x02\x02\x02\u01E9\r\x03\x02\x02" +
		"\x02\u01EA\u01EB\x078\x02\x02\u01EB\u01EC\x07Z\x02\x02\u01EC\u01ED\x05" +
		"\u017C\xBF\x02\u01ED\u01EE\x05\x10\t\x02\u01EE\x0F\x03\x02\x02\x02\u01EF" +
		"\u01F0\x07\x83\x02\x02\u01F0\u01F1\x05\x12\n\x02\u01F1\u01F2\x07\x84\x02" +
		"\x02\u01F2\u01F3\x07w\x02\x02\u01F3\u01FE\x03\x02\x02\x02\u01F4\u01F5" +
		"\x07\x81\x02\x02\u01F5\u01F6\x05\x12\n\x02\u01F6\u01F7\x07\x82\x02\x02" +
		"\u01F7\u01F8\x07w\x02\x02\u01F8\u01FE\x03\x02\x02\x02\u01F9\u01FA\x07" +
		"\x7F\x02\x02\u01FA\u01FB\x05\x12\n\x02\u01FB\u01FC\x07\x80\x02\x02\u01FC" +
		"\u01FE\x03\x02\x02\x02\u01FD\u01EF\x03\x02\x02\x02\u01FD\u01F4\x03\x02" +
		"\x02\x02\u01FD\u01F9\x03\x02\x02\x02\u01FE\x11\x03\x02\x02\x02\u01FF\u0204" +
		"\x05\x14\v\x02\u0200\u0201\x07w\x02\x02\u0201\u0203\x05\x14\v\x02\u0202" +
		"\u0200\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02" +
		"\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0208\x03\x02\x02\x02\u0206" +
		"\u0204\x03\x02\x02\x02\u0207\u0209\x07w\x02\x02\u0208\u0207\x03\x02\x02" +
		"\x02\u0208\u0209\x03\x02\x02\x02\u0209\x13\x03\x02\x02\x02\u020A\u020B" +
		"\x05\x16\f\x02\u020B\u020C\x07{\x02\x02\u020C\u020D\x05\"\x12\x02\u020D" +
		"\x15\x03\x02\x02\x02\u020E\u0212\x07\x83\x02\x02\u020F\u0211\x05\x18\r" +
		"\x02\u0210\u020F\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212\u0210" +
		"\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0215\x03\x02\x02\x02" +
		"\u0214\u0212\x03\x02\x02\x02\u0215\u0227\x07\x84\x02\x02\u0216\u021A\x07" +
		"\x81\x02\x02\u0217\u0219\x05\x18\r\x02\u0218\u0217\x03\x02\x02\x02\u0219" +
		"\u021C\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02" +
		"\x02\x02\u021B\u021D\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D" +
		"\u0227\x07\x82\x02\x02\u021E\u0222\x07\x7F\x02\x02\u021F\u0221\x05\x18" +
		"\r\x02\u0220\u021F\x03\x02\x02\x02\u0221\u0224\x03\x02\x02\x02\u0222\u0220" +
		"\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0225\x03\x02\x02\x02" +
		"\u0224\u0222\x03\x02\x02\x02\u0225\u0227\x07\x80\x02\x02\u0226\u020E\x03" +
		"\x02\x02\x02\u0226\u0216\x03\x02\x02\x02\u0226\u021E\x03\x02\x02\x02\u0227" +
		"\x17\x03\x02\x02\x02\u0228\u022A\x05\x1A\x0E\x02\u0229\u0228\x03\x02\x02" +
		"\x02\u022A\u022B\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022B\u022C" +
		"\x03\x02\x02\x02\u022C\u0243\x03\x02\x02\x02\u022D\u0243\x05\x16\f\x02" +
		"\u022E\u0231\x07}\x02\x02\u022F\u0232\x05\u017C\xBF\x02\u0230\u0232\x07" +
		"\x1A\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0230\x03\x02\x02\x02\u0232" +
		"\u0233\x03\x02\x02\x02\u0233\u0234\x07x\x02\x02\u0234\u0243\x05\x1C\x0F" +
		"\x02\u0235\u0236\x07}\x02\x02\u0236\u0238\x07\x83\x02\x02\u0237\u0239" +
		"\x05\x18\r\x02\u0238\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02" +
		"\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03" +
		"\x02\x02\x02\u023C\u023E\x07\x84\x02\x02\u023D\u023F\x05\x1E\x10\x02\u023E" +
		"\u023D\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x03\x02" +
		"\x02\x02\u0240\u0241\x05 \x11\x02\u0241\u0243\x03\x02\x02\x02\u0242\u0229" +
		"\x03\x02\x02\x02\u0242\u022D\x03\x02\x02\x02\u0242\u022E\x03\x02\x02\x02" +
		"\u0242\u0235\x03\x02\x02\x02\u0243\x19\x03\x02\x02\x02\u0244\u0249\x05" +
		"\u0180\xC1\x02\u0245\u0249\x05\u0182\xC2\x02\u0246\u0249\x05\u0184\xC3" +
		"\x02\u0247\u0249\x05 \x11\x02\u0248\u0244\x03\x02\x02\x02\u0248\u0245" +
		"\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248\u0247\x03\x02\x02\x02" +
		"\u0249\x1B\x03\x02\x02\x02\u024A\u024B\x05\u017C\xBF\x02\u024B\x1D\x03" +
		"\x02\x02\x02\u024C\u0251\x05\u0180\xC1\x02\u024D\u0251\x05\u0182\xC2\x02" +
		"\u024E\u0251\x05\u0184\xC3\x02\u024F\u0251\x07}\x02\x02\u0250\u024C\x03" +
		"\x02\x02\x02\u0250\u024D\x03\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0250" +
		"\u024F\x03\x02\x02\x02\u0251\x1F\x03\x02\x02\x02\u0252\u0253\t\x02\x02" +
		"\x02\u0253!\x03\x02\x02\x02\u0254\u0255\x05\x06\x04\x02\u0255#\x03\x02" +
		"\x02\x02\u0256\u0258\x05\x90I\x02\u0257\u0256\x03\x02\x02\x02\u0258\u025B" +
		"\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02" +
		"\u025A\u025E\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025F\x05" +
		"&\x14\x02\u025D\u025F\x05(\x15\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025D" +
		"\x03\x02\x02\x02\u025F%\x03\x02\x02\x02\u0260\u0262\x05\u017A\xBE\x02" +
		"\u0261\u0260\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0270\x03" +
		"\x02\x02\x02\u0263\u0271\x05*\x16\x02\u0264\u0271\x05,\x17\x02\u0265\u0271" +
		"\x052\x1A\x02\u0266\u0271\x056\x1C\x02\u0267\u0271\x05J&\x02\u0268\u0271" +
		"\x05L\'\x02\u0269\u0271\x05Z.\x02\u026A\u0271\x05f4\x02\u026B\u0271\x05" +
		"h5\x02\u026C\u0271\x05j6\x02\u026D\u0271\x05l7\x02\u026E\u0271\x05n8\x02" +
		"\u026F\u0271\x05t;\x02\u0270\u0263\x03\x02\x02\x02\u0270\u0264\x03\x02" +
		"\x02\x02\u0270\u0265\x03\x02\x02\x02\u0270\u0266\x03\x02\x02\x02\u0270" +
		"\u0267\x03\x02\x02\x02\u0270\u0268\x03\x02\x02\x02\u0270\u0269\x03\x02" +
		"\x02\x02\u0270\u026A\x03\x02\x02\x02\u0270\u026B\x03\x02\x02\x02\u0270" +
		"\u026C\x03\x02\x02\x02\u0270\u026D\x03\x02\x02\x02\u0270\u026E\x03\x02" +
		"\x02\x02\u0270\u026F\x03\x02\x02\x02\u0271\'\x03\x02\x02\x02\u0272\u0275" +
		"\x05\f\x07\x02\u0273\u0275\x05\x0E\b\x02\u0274\u0272\x03\x02\x02\x02\u0274" +
		"\u0273\x03\x02\x02\x02\u0275)\x03\x02\x02\x02\u0276\u0278\x07\"\x02\x02" +
		"\u0277\u0276\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u0279\x03" +
		"\x02\x02\x02\u0279\u027A\x07\x14\x02\x02\u027A\u028A\x05\u017C\xBF\x02" +
		"\u027B\u028B\x07w\x02\x02\u027C\u0280\x07\x7F\x02\x02\u027D\u027F\x05" +
		"\x8EH\x02\u027E\u027D\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280" +
		"\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0286\x03\x02" +
		"\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283\u0285\x05$\x13\x02\u0284\u0283" +
		"\x03\x02\x02\x02\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02" +
		"\u0286\u0287\x03\x02\x02\x02\u0287\u0289\x03\x02\x02\x02\u0288\u0286\x03" +
		"\x02\x02\x02\u0289\u028B\x07\x80\x02\x02\u028A\u027B\x03\x02\x02\x02\u028A" +
		"\u027C\x03\x02\x02\x02\u028B+\x03\x02\x02\x02\u028C\u028D\x07\n\x02\x02" +
		"\u028D\u028E\x07\x07\x02\x02\u028E\u0290\x05.\x18\x02\u028F\u0291\x05" +
		"0\x19\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291" +
		"\u0292\x03\x02\x02\x02\u0292\u0293\x07w\x02\x02\u0293-\x03\x02\x02\x02" +
		"\u0294\u0297\x05\u017C\xBF\x02\u0295\u0297\x07\x1A\x02\x02\u0296\u0294" +
		"\x03\x02\x02\x02\u0296\u0295\x03\x02\x02\x02\u0297/\x03\x02\x02\x02\u0298" +
		"\u029B\x07\x03\x02\x02\u0299\u029C\x05\u017C\xBF\x02\u029A\u029C\x07q" +
		"\x02\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029A\x03\x02\x02\x02\u029C" +
		"1\x03\x02\x02\x02\u029D\u029E\x07#\x02\x02\u029E\u029F\x054\x1B\x02\u029F" +
		"\u02A0\x07w\x02\x02\u02A03\x03\x02\x02\x02\u02A1\u02A3\x05\u0154\xAB\x02" +
		"\u02A2\u02A1\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x03" +
		"\x02\x02\x02\u02A4\u02A6\x07y\x02\x02\u02A5\u02A2\x03\x02\x02\x02\u02A5" +
		"\u02A6\x03\x02\x02\x02\u02A6\u02B7\x03\x02\x02\x02\u02A7\u02B8\x07V\x02" +
		"\x02\u02A8\u02B4\x07\x7F\x02\x02\u02A9\u02AE\x054\x1B\x02\u02AA\u02AB" +
		"\x07v\x02\x02\u02AB\u02AD\x054\x1B\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD" +
		"\u02B0\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03\x02" +
		"\x02\x02\u02AF\u02B2\x03\x02\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B1" +
		"\u02B3\x07v\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02" +
		"\x02\u02B3\u02B5\x03\x02\x02\x02\u02B4\u02A9\x03\x02\x02\x02\u02B4\u02B5" +
		"\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8\x07\x80\x02\x02" +
		"\u02B7\u02A7\x03\x02\x02\x02\u02B7\u02A8\x03\x02\x02\x02\u02B8\u02C2\x03" +
		"\x02\x02\x02\u02B9\u02BF\x05\u0154\xAB\x02\u02BA\u02BD\x07\x03\x02\x02" +
		"\u02BB\u02BE\x05\u017C\xBF\x02\u02BC\u02BE\x07q\x02\x02\u02BD\u02BB\x03" +
		"\x02\x02\x02\u02BD\u02BC\x03\x02\x02\x02\u02BE\u02C0\x03\x02\x02\x02\u02BF" +
		"\u02BA\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2\x03\x02" +
		"\x02\x02\u02C1\u02A5\x03\x02\x02\x02\u02C1\u02B9\x03\x02\x02\x02\u02C2" +
		"5\x03\x02\x02\x02\u02C3\u02C4\x058\x1D\x02\u02C4\u02C5\x07\f\x02\x02\u02C5" +
		"\u02C7\x05\u017C\xBF\x02\u02C6\u02C8\x05x=\x02\u02C7\u02C6\x03\x02\x02" +
		"\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CB" +
		"\x07\x83\x02\x02\u02CA\u02CC\x05<\x1F\x02\u02CB\u02CA\x03\x02\x02\x02" +
		"\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CF\x07" +
		"\x84\x02\x02\u02CE\u02D0\x05H%\x02\u02CF\u02CE\x03\x02\x02\x02\u02CF\u02D0" +
		"\x03\x02\x02\x02\u02D0\u02D2\x03\x02\x02\x02\u02D1\u02D3\x05\x82B\x02" +
		"\u02D2\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D6\x03" +
		"\x02\x02\x02\u02D4\u02D7\x05\xA8U\x02\u02D5\u02D7\x07w\x02\x02\u02D6\u02D4" +
		"\x03\x02\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D77\x03\x02\x02\x02\u02D8" +
		"\u02DA\x07\x05\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02" +
		"\x02\x02\u02DA\u02DC\x03\x02\x02\x02\u02DB\u02DD\x07&\x02\x02\u02DC\u02DB" +
		"\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02DF\x03\x02\x02\x02" +
		"\u02DE\u02E0\x07\"\x02\x02\u02DF\u02DE\x03\x02\x02\x02\u02DF\u02E0\x03" +
		"\x02\x02\x02\u02E0\u02E5\x03\x02\x02\x02\u02E1\u02E3\x07\n\x02\x02\u02E2" +
		"\u02E4\x05:\x1E\x02\u02E3\u02E2\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02" +
		"\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E1\x03\x02\x02\x02\u02E5\u02E6" +
		"\x03\x02\x02\x02\u02E69\x03\x02\x02\x02\u02E7\u02E8\t\x03\x02\x02\u02E8" +
		";\x03\x02\x02\x02\u02E9\u02EB\x05> \x02\u02EA\u02EC\x07v\x02\x02\u02EB" +
		"\u02EA\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02FE\x03\x02" +
		"\x02\x02\u02ED\u02EE\x05> \x02\u02EE\u02EF\x07v\x02\x02\u02EF\u02F1\x03" +
		"\x02\x02\x02\u02F0\u02ED\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1" +
		"\u02F2\x03\x02\x02\x02\u02F2\u02F7\x05D#\x02\u02F3\u02F4\x07v\x02\x02" +
		"\u02F4\u02F6\x05D#\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6\u02F9\x03\x02" +
		"\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8" +
		"\u02FB\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02FA\u02FC\x07v\x02" +
		"\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FE" +
		"\x03\x02\x02\x02\u02FD\u02E9\x03\x02\x02\x02\u02FD\u02F0\x03\x02\x02\x02" +
		"\u02FE=\x03\x02\x02\x02\u02FF\u0301\x05\x90I\x02\u0300\u02FF\x03\x02\x02" +
		"\x02\u0301\u0304\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303" +
		"\x03\x02\x02\x02\u0303\u0307\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02" +
		"\u0305\u0308\x05@!\x02\u0306\u0308\x05B\"\x02\u0307\u0305\x03\x02\x02" +
		"\x02\u0307\u0306\x03\x02\x02\x02\u0308?\x03\x02\x02\x02\u0309\u030B\x07" +
		"[\x02\x02\u030A\u030C\x05\u0152\xAA\x02\u030B\u030A\x03\x02\x02\x02\u030B" +
		"\u030C\x03\x02\x02\x02\u030C\u030E\x03\x02\x02\x02\u030D\u0309\x03\x02" +
		"\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u0310\x03\x02\x02\x02\u030F" +
		"\u0311\x07\x16\x02\x02\u0310\u030F\x03\x02\x02\x02\u0310\u0311\x03\x02" +
		"\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0313\x07\x1A\x02\x02\u0313" +
		"A\x03\x02\x02\x02\u0314\u0316\x07\x16\x02\x02\u0315\u0314\x03\x02\x02" +
		"\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0318" +
		"\x07\x1A\x02\x02\u0318\u0319";
	private static readonly _serializedATNSegment2: string =
		"\x07x\x02\x02\u0319\u031A\x05\u0120\x91\x02\u031AC\x03\x02\x02\x02\u031B" +
		"\u031D\x05\x90I\x02\u031C\u031B\x03\x02\x02\x02\u031D\u0320\x03\x02\x02" +
		"\x02\u031E\u031C\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0324" +
		"\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321\u0325\x05F$\x02\u0322" +
		"\u0325\x07t\x02\x02\u0323\u0325\x05\u0120\x91\x02\u0324\u0321\x03\x02" +
		"\x02\x02\u0324\u0322\x03\x02\x02\x02\u0324\u0323\x03\x02\x02\x02\u0325" +
		"E\x03\x02\x02\x02\u0326\u0327\x05\xF2z\x02\u0327\u032A\x07x\x02\x02\u0328" +
		"\u032B\x05\u0120\x91\x02\u0329\u032B\x07t\x02\x02\u032A\u0328\x03\x02" +
		"\x02\x02\u032A\u0329\x03\x02\x02\x02\u032BG\x03\x02\x02\x02\u032C\u032D" +
		"\x07z\x02\x02\u032D\u032E\x05\u0120\x91\x02\u032EI\x03\x02\x02\x02\u032F" +
		"\u0330\x07!\x02\x02\u0330\u0332\x05\u017C\xBF\x02\u0331\u0333\x05x=\x02" +
		"\u0332\u0331\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0335\x03" +
		"\x02\x02\x02\u0334\u0336\x05\x82B\x02\u0335\u0334\x03\x02\x02\x02\u0335" +
		"\u0336\x03\x02\x02\x02\u0336\u0339\x03\x02\x02\x02\u0337\u0338\x07i\x02" +
		"\x02\u0338\u033A\x05\u0120\x91\x02\u0339\u0337\x03\x02\x02\x02\u0339\u033A" +
		"\x03\x02\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\u033C\x07w\x02\x02" +
		"\u033CK\x03\x02\x02\x02\u033D\u0340\x05N(\x02\u033E\u0340\x05P)\x02\u033F" +
		"\u033D\x03\x02\x02\x02\u033F\u033E\x03\x02\x02\x02\u0340M\x03\x02\x02" +
		"\x02\u0341\u0342\x07\x1D\x02\x02\u0342\u0344\x05\u017C\xBF\x02\u0343\u0345" +
		"\x05x=\x02\u0344\u0343\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345" +
		"\u0347\x03\x02\x02\x02\u0346\u0348\x05\x82B\x02\u0347\u0346\x03\x02\x02" +
		"\x02\u0347\u0348\x03\x02\x02\x02\u0348\u034F\x03\x02\x02\x02\u0349\u034B" +
		"\x07\x7F\x02\x02\u034A\u034C\x05R*\x02\u034B\u034A\x03\x02\x02\x02\u034B" +
		"\u034C\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u0350\x07\x80" +
		"\x02\x02\u034E\u0350\x07w\x02\x02\u034F\u0349\x03\x02\x02\x02\u034F\u034E" +
		"\x03\x02\x02\x02\u0350O\x03\x02\x02\x02\u0351\u0352\x07\x1D\x02\x02\u0352" +
		"\u0354\x05\u017C\xBF\x02\u0353\u0355\x05x=\x02\u0354\u0353\x03\x02\x02" +
		"\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0358" +
		"\x07\x83\x02\x02\u0357\u0359\x05V,\x02\u0358\u0357\x03\x02\x02\x02\u0358" +
		"\u0359\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035C\x07\x84" +
		"\x02\x02\u035B\u035D\x05\x82B\x02\u035C\u035B\x03\x02\x02\x02\u035C\u035D" +
		"\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u035F\x07w\x02\x02" +
		"\u035FQ\x03\x02\x02\x02\u0360\u0365\x05T+\x02\u0361\u0362\x07v\x02\x02" +
		"\u0362\u0364\x05T+\x02\u0363\u0361\x03\x02\x02\x02\u0364\u0367\x03\x02" +
		"\x02\x02\u0365\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366" +
		"\u0369\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368\u036A\x07v\x02" +
		"\x02\u0369\u0368\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036AS\x03" +
		"\x02\x02\x02\u036B\u036D\x05\x90I\x02\u036C\u036B\x03\x02\x02\x02\u036D" +
		"\u0370\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036E\u036F\x03\x02" +
		"\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0371" +
		"\u0373\x05\u017A\xBE\x02\u0372\u0371\x03\x02\x02\x02\u0372\u0373\x03\x02" +
		"\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0375\x05\u017C\xBF\x02\u0375" +
		"\u0376\x07x\x02\x02\u0376\u0377\x05\u0120\x91\x02\u0377U\x03\x02\x02\x02" +
		"\u0378\u037D\x05X-\x02\u0379\u037A\x07v\x02\x02\u037A\u037C\x05X-\x02" +
		"\u037B\u0379\x03\x02\x02\x02\u037C\u037F\x03\x02\x02\x02\u037D\u037B\x03" +
		"\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u0381\x03\x02\x02\x02\u037F" +
		"\u037D\x03\x02\x02\x02\u0380\u0382\x07v\x02\x02\u0381\u0380\x03\x02\x02" +
		"\x02\u0381\u0382\x03\x02\x02\x02\u0382W\x03\x02\x02\x02\u0383\u0385\x05" +
		"\x90I\x02\u0384\u0383\x03\x02\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386" +
		"\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u038A\x03\x02" +
		"\x02\x02\u0388\u0386\x03\x02\x02\x02\u0389\u038B\x05\u017A\xBE\x02\u038A" +
		"\u0389\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02" +
		"\x02\x02\u038C\u038D\x05\u0120\x91\x02\u038DY\x03\x02\x02\x02\u038E\u038F" +
		"\x07\t\x02\x02\u038F\u0391\x05\u017C\xBF\x02\u0390\u0392\x05x=\x02\u0391" +
		"\u0390\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0394\x03\x02" +
		"\x02\x02\u0393\u0395\x05\x82B\x02\u0394\u0393\x03\x02\x02\x02\u0394\u0395" +
		"\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u0398\x07\x7F\x02\x02" +
		"\u0397\u0399\x05\\/\x02\u0398\u0397\x03\x02\x02\x02\u0398\u0399\x03\x02" +
		"\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u039B\x07\x80\x02\x02\u039B" +
		"[\x03\x02\x02\x02\u039C\u03A1\x05^0\x02\u039D\u039E\x07v\x02\x02\u039E" +
		"\u03A0\x05^0\x02\u039F\u039D\x03\x02\x02\x02\u03A0\u03A3\x03\x02\x02\x02" +
		"\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A5\x03" +
		"\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4\u03A6\x07v\x02\x02\u03A5" +
		"\u03A4\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6]\x03\x02\x02" +
		"\x02\u03A7\u03A9\x05\x90I\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9\u03AC" +
		"\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02" +
		"\u03AB\u03AE\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AD\u03AF\x05" +
		"\u017A\xBE\x02\u03AE\u03AD\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02" +
		"\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B4\x05\u017C\xBF\x02\u03B1\u03B5" +
		"\x05`1\x02\u03B2\u03B5\x05b2\x02\u03B3\u03B5\x05d3\x02\u03B4\u03B1\x03" +
		"\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4" +
		"\u03B5\x03\x02\x02\x02\u03B5_\x03\x02\x02\x02\u03B6\u03B8\x07\x83\x02" +
		"\x02\u03B7\u03B9\x05V,\x02\u03B8\u03B7\x03\x02\x02\x02\u03B8\u03B9\x03" +
		"\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BB\x07\x84\x02\x02\u03BB" +
		"a\x03\x02\x02\x02\u03BC\u03BE\x07\x7F\x02\x02\u03BD\u03BF\x05R*\x02\u03BE" +
		"\u03BD\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\u03C0\x03\x02" +
		"\x02\x02\u03C0\u03C1\x07\x80\x02\x02\u03C1c\x03\x02\x02\x02\u03C2\u03C3" +
		"\x07i\x02\x02\u03C3\u03C4\x05\x9CO\x02\u03C4e\x03\x02\x02\x02\u03C5\u03C6" +
		"\x076\x02\x02\u03C6\u03C8\x05\u017C\xBF\x02\u03C7\u03C9\x05x=\x02\u03C8" +
		"\u03C7\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CB\x03\x02" +
		"\x02\x02\u03CA\u03CC\x05\x82B\x02\u03CB\u03CA\x03\x02\x02\x02\u03CB\u03CC" +
		"\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD\u03CE\x07\x7F\x02\x02" +
		"\u03CE\u03CF\x05R*\x02\u03CF\u03D0\x07\x80\x02\x02\u03D0g\x03\x02\x02" +
		"\x02\u03D1\u03D4\x07\x05\x02\x02\u03D2\u03D5\x05\u017C\xBF\x02\u03D3\u03D5" +
		"\x07q\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D3\x03\x02\x02\x02" +
		"\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03D7\x07x\x02\x02\u03D7\u03DA\x05" +
		"\u0120\x91\x02\u03D8\u03D9\x07i\x02\x02\u03D9\u03DB\x05\x9CO\x02\u03DA" +
		"\u03D8\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DC\x03\x02" +
		"\x02\x02\u03DC\u03DD\x07w\x02\x02\u03DDi\x03\x02\x02\x02\u03DE\u03E0\x07" +
		"\x1C\x02\x02\u03DF\u03E1\x07\x16\x02\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0" +
		"\u03E1\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x05\u017C" +
		"\xBF\x02\u03E3\u03E4\x07x\x02\x02\u03E4\u03E7\x05\u0120\x91\x02\u03E5" +
		"\u03E6\x07i\x02\x02\u03E6\u03E8\x05\x9CO\x02\u03E7\u03E5\x03\x02\x02\x02" +
		"\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9\u03EA\x07" +
		"w\x02\x02\u03EAk\x03\x02\x02\x02\u03EB\u03ED\x07\"\x02\x02\u03EC\u03EB" +
		"\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02" +
		"\u03EE\u03EF\x07\x1F\x02\x02\u03EF\u03F1\x05\u017C\xBF\x02\u03F0\u03F2" +
		"\x05x=\x02\u03F1\u03F0\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2" +
		"\u03F7\x03\x02\x02\x02\u03F3\u03F5\x07x\x02\x02\u03F4\u03F6\x05\u014A" +
		"\xA6\x02\u03F5\u03F4\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6" +
		"\u03F8\x03\x02\x02\x02\u03F7\u03F3\x03\x02\x02\x02\u03F7\u03F8\x03\x02" +
		"\x02\x02\u03F8\u03FA\x03\x02\x02\x02\u03F9\u03FB\x05\x82B\x02\u03FA\u03F9" +
		"\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02" +
		"\u03FC\u0400\x07\x7F\x02\x02\u03FD\u03FF\x05\x8EH\x02\u03FE\u03FD\x03" +
		"\x02\x02\x02\u03FF\u0402\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0400" +
		"\u0401\x03\x02\x02\x02\u0401\u0406\x03\x02\x02\x02\u0402\u0400\x03\x02" +
		"\x02\x02\u0403\u0405\x05\x8CG\x02\u0404\u0403\x03\x02\x02\x02\u0405\u0408" +
		"\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02" +
		"\u0407\u0409\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0409\u040A\x07" +
		"\x80\x02\x02\u040Am\x03\x02\x02\x02\u040B\u040E\x05p9\x02\u040C\u040E" +
		"\x05r:\x02\u040D\u040B\x03\x02\x02\x02\u040D\u040C\x03\x02\x02\x02\u040E" +
		"o\x03\x02\x02\x02\u040F\u0411\x07\x0F\x02\x02\u0410\u0412\x05x=\x02\u0411" +
		"\u0410\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412\u0413\x03\x02" +
		"\x02\x02\u0413\u0415\x05\u0120\x91\x02\u0414\u0416\x05\x82B\x02\u0415" +
		"\u0414\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0417\x03\x02" +
		"\x02\x02\u0417\u041B\x07\x7F\x02\x02\u0418\u041A\x05\x8EH\x02\u0419\u0418" +
		"\x03\x02\x02\x02\u041A\u041D\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02" +
		"\u041B\u041C\x03\x02\x02\x02\u041C\u0421\x03\x02\x02\x02\u041D\u041B\x03" +
		"\x02\x02\x02\u041E\u0420\x05\x8CG\x02\u041F\u041E\x03\x02\x02\x02\u0420" +
		"\u0423\x03\x02\x02\x02\u0421\u041F\x03\x02\x02\x02\u0421\u0422\x03\x02" +
		"\x02\x02\u0422\u0424\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02\u0424" +
		"\u0425\x07\x80\x02\x02\u0425q\x03\x02\x02\x02\u0426\u0428\x07\"\x02\x02" +
		"\u0427\u0426\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428\u0429\x03" +
		"\x02\x02\x02\u0429\u042B\x07\x0F\x02\x02\u042A\u042C\x05x=\x02\u042B\u042A" +
		"\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042E\x03\x02\x02\x02" +
		"\u042D\u042F\x07Z\x02\x02\u042E\u042D\x03\x02\x02\x02\u042E\u042F\x03" +
		"\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0431\x05\u0172\xBA\x02" +
		"\u0431\u0432\x07\r\x02\x02\u0432\u0434\x05\u0120\x91\x02\u0433\u0435\x05" +
		"\x82B\x02\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435" +
		"\u0436\x03\x02\x02\x02\u0436\u043A\x07\x7F\x02\x02\u0437\u0439\x05\x8E" +
		"H\x02\u0438\u0437\x03\x02\x02\x02\u0439\u043C\x03\x02\x02\x02\u043A\u0438" +
		"\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u0440\x03\x02\x02\x02" +
		"\u043C\u043A\x03\x02\x02\x02\u043D\u043F\x05\x8CG\x02\u043E\u043D\x03" +
		"\x02\x02\x02\u043F\u0442\x03\x02\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440" +
		"\u0441\x03\x02\x02\x02\u0441\u0443\x03\x02\x02\x02\u0442\u0440\x03\x02" +
		"\x02\x02\u0443\u0444\x07\x80\x02\x02\u0444s\x03\x02\x02\x02\u0445\u0447" +
		"\x07\"\x02\x02\u0446\u0445\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02" +
		"\u0447\u0448\x03\x02\x02\x02\u0448\u044A\x07\n\x02\x02\u0449\u044B\x05" +
		":\x1E\x02\u044A\u0449\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B" +
		"\u044C\x03\x02\x02\x02\u044C\u0450\x07\x7F\x02\x02\u044D\u044F\x05\x8E" +
		"H\x02\u044E\u044D\x03\x02\x02\x02\u044F\u0452\x03\x02\x02\x02\u0450\u044E" +
		"\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0456\x03\x02\x02\x02" +
		"\u0452\u0450\x03\x02\x02\x02\u0453\u0455\x05v<\x02\u0454\u0453\x03\x02" +
		"\x02\x02\u0455\u0458\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456" +
		"\u0457\x03\x02\x02\x02\u0457\u0459\x03\x02\x02\x02\u0458\u0456\x03\x02" +
		"\x02\x02\u0459\u045A\x07\x80\x02\x02\u045Au\x03\x02\x02\x02\u045B\u045D" +
		"\x05\x90I\x02\u045C\u045B\x03\x02\x02\x02\u045D\u0460\x03\x02\x02\x02" +
		"\u045E\u045C\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u0469\x03" +
		"\x02\x02\x02\u0460\u045E\x03\x02\x02\x02\u0461\u046A\x05\f\x07\x02\u0462" +
		"\u0464\x05\u017A\xBE\x02\u0463\u0462\x03\x02\x02\x02\u0463\u0464\x03\x02" +
		"\x02\x02\u0464\u0467\x03\x02\x02\x02\u0465\u0468\x05j6\x02\u0466\u0468" +
		"\x056\x1C\x02\u0467\u0465\x03\x02\x02\x02\u0467\u0466\x03\x02\x02\x02" +
		"\u0468\u046A\x03\x02\x02\x02\u0469\u0461\x03\x02\x02\x02\u0469\u0463\x03" +
		"\x02\x02\x02\u046Aw\x03\x02\x02\x02\u046B\u0478\x07m\x02\x02\u046C\u046D" +
		"\x05z>\x02\u046D\u046E\x07v\x02\x02\u046E\u0470\x03\x02\x02\x02\u046F" +
		"\u046C\x03\x02\x02\x02\u0470\u0473\x03\x02\x02\x02\u0471\u046F\x03\x02" +
		"\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0474\x03\x02\x02\x02\u0473" +
		"\u0471\x03\x02\x02\x02\u0474\u0476\x05z>\x02\u0475\u0477\x07v\x02\x02" +
		"\u0476\u0475\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0479\x03" +
		"\x02\x02\x02\u0478\u0471\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479" +
		"\u047A\x03\x02\x02\x02\u047A\u047B\x07l\x02\x02\u047By\x03\x02\x02\x02" +
		"\u047C\u047E\x05\x90I\x02\u047D\u047C\x03\x02\x02\x02\u047E\u0481\x03" +
		"\x02\x02\x02\u047F\u047D\x03\x02\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480" +
		"\u0485\x03\x02\x02\x02\u0481\u047F\x03\x02\x02\x02\u0482\u0486\x05|?\x02" +
		"\u0483\u0486\x05~@\x02\u0484\u0486\x05\x80A\x02\u0485\u0482\x03\x02\x02" +
		"\x02\u0485\u0483\x03\x02\x02\x02\u0485\u0484\x03\x02\x02\x02\u0486{\x03" +
		"\x02\x02\x02\u0487\u0489\x05\x90I\x02\u0488\u0487\x03\x02\x02\x02\u0488" +
		"\u0489\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u048D\x07S\x02" +
		"\x02\u048B\u048C\x07x\x02\x02\u048C\u048E\x05\u0150\xA9\x02\u048D\u048B" +
		"\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E}\x03\x02\x02\x02\u048F" +
		"\u0491\x05\x90I\x02\u0490\u048F\x03\x02\x02\x02\u0490\u0491\x03\x02\x02" +
		"\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0497\x05\u017C\xBF\x02\u0493\u0495" +
		"\x07x\x02\x02\u0494\u0496\x05\u014A\xA6\x02\u0495\u0494\x03\x02\x02\x02" +
		"\u0495\u0496\x03\x02\x02\x02\u0496\u0498\x03\x02\x02\x02\u0497\u0493\x03" +
		"\x02\x02\x02\u0497\u0498\x03\x02\x02\x02\u0498\u049B\x03\x02\x02\x02\u0499" +
		"\u049A\x07i\x02\x02\u049A\u049C\x05\u0120\x91\x02\u049B\u0499\x03\x02" +
		"\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\x7F\x03\x02\x02\x02\u049D\u049E" +
		"\x07\x05\x02\x02\u049E\u049F\x05\u017C\xBF\x02\u049F\u04A0\x07x\x02\x02" +
		"\u04A0\u04A1\x05\u0120\x91\x02\u04A1\x81\x03\x02\x02\x02\u04A2\u04A8\x07" +
		"$\x02\x02\u04A3\u04A4\x05\x84C\x02\u04A4\u04A5\x07v\x02\x02\u04A5\u04A7" +
		"\x03\x02\x02\x02\u04A6\u04A3\x03\x02\x02\x02\u04A7\u04AA\x03\x02\x02\x02" +
		"\u04A8\u04A6\x03\x02\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AC\x03" +
		"\x02\x02\x02\u04AA\u04A8\x03\x02\x02\x02\u04AB\u04AD\x05\x84C\x02\u04AC" +
		"\u04AB\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD\x83\x03\x02\x02" +
		"\x02\u04AE\u04B1\x05\x86D\x02\u04AF\u04B1\x05\x88E\x02\u04B0\u04AE\x03" +
		"\x02\x02\x02\u04B0\u04AF\x03\x02\x02\x02\u04B1\x85\x03\x02\x02\x02\u04B2" +
		"\u04B3\x05\u0152\xAA\x02\u04B3\u04B4\x07x\x02\x02\u04B4\u04B5\x05\u0150" +
		"\xA9\x02\u04B5\x87\x03\x02\x02\x02\u04B6\u04B8\x05\x8AF\x02\u04B7\u04B6" +
		"\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02" +
		"\u04B9\u04BA\x05\u0120\x91\x02\u04BA\u04BC\x07x\x02\x02\u04BB\u04BD\x05" +
		"\u014A\xA6\x02\u04BC\u04BB\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02" +
		"\u04BD\x89\x03\x02\x02\x02\u04BE\u04BF\x07\r\x02\x02\u04BF\u04C0\x05x" +
		"=\x02\u04C0\x8B\x03\x02\x02\x02\u04C1\u04C3\x05\x90I\x02\u04C2\u04C1\x03" +
		"\x02\x02\x02\u04C3\u04C6\x03\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C4" +
		"\u04C5\x03\x02\x02\x02\u04C5\u04D0\x03\x02\x02\x02\u04C6\u04C4\x03\x02" +
		"\x02\x02\u04C7\u04D1\x05\f\x07\x02\u04C8\u04CA\x05\u017A\xBE\x02\u04C9" +
		"\u04C8\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CE\x03\x02" +
		"\x02\x02\u04CB\u04CF\x05J&\x02\u04CC\u04CF\x05h5\x02\u04CD\u04CF\x056" +
		"\x1C\x02\u04CE\u04CB\x03\x02\x02\x02\u04CE\u04CC\x03\x02\x02\x02\u04CE" +
		"\u04CD\x03\x02\x02\x02\u04CF\u04D1\x03\x02\x02\x02\u04D0\u04C7\x03\x02" +
		"\x02\x02\u04D0\u04C9\x03\x02\x02\x02\u04D1\x8D\x03\x02\x02\x02\u04D2\u04D3" +
		"\x07|\x02\x02\u04D3\u04D4\x07Z\x02\x02\u04D4\u04D5\x07\x81\x02\x02\u04D5" +
		"\u04D6\x05\x92J\x02\u04D6\u04D7\x07\x82\x02\x02\u04D7\x8F\x03\x02\x02" +
		"\x02\u04D8\u04D9\x07|\x02\x02\u04D9\u04DA\x07\x81\x02\x02\u04DA\u04DB" +
		"\x05\x92J\x02\u04DB\u04DC\x07\x82\x02\x02\u04DC\x91\x03\x02\x02\x02\u04DD" +
		"\u04DF\x05\u0154\xAB\x02\u04DE\u04E0\x05\x94K\x02\u04DF\u04DE\x03\x02" +
		"\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\x93\x03\x02\x02\x02\u04E1\u04E5" +
		"\x05\x06\x04\x02\u04E2\u04E3\x07i\x02\x02\u04E3\u04E5\x05\xA4S\x02\u04E4" +
		"\u04E1\x03\x02\x02\x02\u04E4\u04E2\x03\x02\x02\x02\u04E5\x95\x03\x02\x02" +
		"\x02\u04E6\u04EC\x07w\x02\x02\u04E7\u04EC\x05$\x13\x02\u04E8\u04EC\x05" +
		"\x98M\x02\u04E9\u04EC\x05\x9AN\x02\u04EA\u04EC\x05\f\x07\x02\u04EB\u04E6" +
		"\x03\x02\x02\x02\u04EB\u04E7\x03\x02\x02\x02\u04EB\u04E8\x03\x02\x02\x02" +
		"\u04EB\u04E9\x03\x02\x02\x02\u04EB\u04EA\x03\x02\x02\x02\u04EC\x97\x03" +
		"\x02\x02\x02\u04ED\u04EF\x05\x90I\x02\u04EE\u04ED\x03\x02\x02\x02\u04EF" +
		"\u04F2\x03\x02\x02\x02\u04F0\u04EE\x03\x02\x02\x02\u04F0\u04F1\x03\x02" +
		"\x02\x02\u04F1\u04F3\x03\x02\x02\x02\u04F2\u04F0\x03\x02\x02\x02\u04F3" +
		"\u04F4\x07\x11\x02\x02\u04F4\u04F7\x05\xF4{\x02\u04F5\u04F6\x07x\x02\x02" +
		"\u04F6\u04F8\x05\u0120\x91\x02\u04F7\u04F5\x03\x02\x02\x02\u04F7\u04F8" +
		"\x03\x02\x02\x02\u04F8\u04FB\x03\x02\x02\x02\u04F9\u04FA\x07i\x02\x02" +
		"\u04FA\u04FC\x05\x9CO\x02\u04FB\u04F9\x03\x02\x02\x02\u04FB\u04FC\x03" +
		"\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\u04FE\x07w\x02\x02\u04FE" +
		"\x99\x03\x02\x02\x02\u04FF\u0500\x05\x9CO\x02\u0500\u0501\x07w\x02\x02" +
		"\u0501\u0507\x03\x02\x02\x02\u0502\u0504\x05\xA2R\x02\u0503\u0505\x07" +
		"w\x02\x02\u0504\u0503\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505" +
		"\u0507\x03\x02\x02\x02\u0506\u04FF\x03\x02\x02\x02\u0506\u0502\x03\x02" +
		"\x02\x02\u0507\x9B\x03\x02\x02\x02\u0508\u050A\bO\x01\x02\u0509\u050B" +
		"\x05\x90I\x02\u050A\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02" +
		"\u050C\u050A\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050E\x03" +
		"\x02\x02\x02\u050E\u050F\x05\x9CO*\u050F\u0559\x03\x02\x02\x02\u0510\u0559" +
		"\x05\xA4S\x02\u0511\u0559\x05\xA6T\x02\u0512\u0514\t\x04\x02\x02\u0513" +
		"\u0515\x07\x16\x02\x02\u0514\u0513\x03\x02\x02\x02\u0514\u0515\x03\x02" +
		"\x02\x02\u0515\u0516\x03\x02\x02\x02\u0516\u0559\x05\x9CO \u0517\u0518" +
		"\x07V\x02\x02\u0518\u0559\x05\x9CO\x1F\u0519\u051A\t\x05\x02\x02\u051A" +
		"\u0559\x05\x9CO\x1E\u051B\u051D\x07s\x02\x02\u051C\u051E\x05\x9CO\x02" +
		"\u051D\u051C\x03\x02\x02\x02\u051D\u051E\x03\x02\x02\x02\u051E\u0559\x03" +
		"\x02\x02\x02\u051F\u0520\x07u\x02\x02\u0520\u0559\x05\x9CO\x11\u0521\u0523" +
		"\x07\x06\x02\x02\u0522\u0524\x07S\x02\x02\u0523\u0522\x03\x02\x02\x02" +
		"\u0523\u0524\x03\x02\x02\x02\u0524\u0526\x03\x02\x02\x02\u0525\u0527\x05" +
		"\x9CO\x02\u0526\u0525\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527" +
		"\u0559\x03\x02\x02\x02\u0528\u052A\x07\x04\x02\x02\u0529\u052B\x07S\x02" +
		"\x02\u052A\u0529\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B\u052D" +
		"\x03\x02\x02\x02\u052C\u052E\x05\x9CO\x02\u052D\u052C\x03\x02\x02\x02" +
		"\u052D\u052E\x03\x02\x02\x02\u052E\u0559\x03\x02\x02\x02\u052F\u0531\x07" +
		"\x19\x02\x02\u0530\u0532\x05\x9CO\x02\u0531\u0530\x03\x02\x02\x02\u0531" +
		"\u0532\x03\x02\x02\x02\u0532\u0559\x03\x02\x02\x02\u0533\u0537\x07\x83" +
		"\x02\x02\u0534\u0536\x05\x8EH\x02\u0535\u0534\x03\x02\x02\x02\u0536\u0539" +
		"\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02" +
		"\u0538\u053A\x03\x02\x02\x02\u0539\u0537\x03\x02\x02\x02\u053A\u053B\x05" +
		"\x9CO\x02\u053B\u053C\x07\x84\x02\x02\u053C\u0559\x03\x02\x02\x02\u053D" +
		"\u0541\x07\x81\x02\x02\u053E\u0540\x05\x8EH\x02\u053F\u053E\x03\x02\x02" +
		"\x02\u0540\u0543\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541\u0542" +
		"\x03\x02\x02\x02\u0542\u0545\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02" +
		"\u0544\u0546\x05\xB0Y\x02\u0545\u0544\x03\x02\x02\x02\u0545\u0546\x03" +
		"\x02\x02\x02\u0546\u0547\x03\x02\x02\x02\u0547\u0559\x07\x82\x02\x02\u0548" +
		"\u054C\x07\x83\x02\x02\u0549\u054B\x05\x8EH\x02\u054A\u0549\x03\x02\x02" +
		"\x02\u054B\u054E\x03\x02\x02\x02\u054C\u054A\x03\x02\x02\x02\u054C\u054D" +
		"\x03\x02\x02\x02\u054D\u0550\x03\x02\x02\x02\u054E\u054C\x03\x02\x02\x02" +
		"\u054F\u0551\x05\xB2Z\x02\u0550\u054F\x03\x02\x02\x02\u0550\u0551\x03" +
		"\x02\x02\x02\u0551\u0552\x03\x02\x02\x02\u0552\u0559\x07\x84\x02\x02\u0553" +
		"\u0559\x05\xB6\\\x02\u0554\u0559\x05\xC4c\x02\u0555\u0559\x05\xD2j\x02" +
		"\u0556\u0559\x05\xA2R\x02\u0557\u0559\x05\x04\x03\x02\u0558\u0508\x03" +
		"\x02\x02\x02\u0558\u0510\x03\x02\x02\x02\u0558\u0511\x03\x02\x02\x02\u0558" +
		"\u0512\x03\x02\x02\x02\u0558\u0517\x03\x02\x02\x02\u0558\u0519\x03\x02" +
		"\x02\x02\u0558\u051B\x03\x02\x02\x02\u0558\u051F\x03\x02\x02\x02\u0558" +
		"\u0521\x03\x02\x02\x02\u0558\u0528\x03\x02\x02\x02\u0558\u052F\x03\x02" +
		"\x02\x02\u0558\u0533\x03\x02\x02\x02\u0558\u053D\x03\x02\x02\x02\u0558" +
		"\u0548\x03\x02\x02\x02\u0558\u0553\x03\x02\x02\x02\u0558\u0554\x03\x02" +
		"\x02\x02\u0558\u0555\x03\x02\x02\x02\u0558\u0556\x03\x02\x02\x02\u0558" +
		"\u0557\x03\x02\x02\x02\u0559\u05AD\x03\x02\x02\x02\u055A\u055B\f\x1C\x02" +
		"\x02\u055B\u055C\t\x06\x02\x02\u055C\u05AC\x05\x9CO\x1D\u055D\u055E\f" +
		"\x1B\x02\x02\u055E\u055F\t\x07\x02\x02\u055F\u05AC\x05\x9CO\x1C\u0560" +
		"\u0563\f\x1A\x02\x02\u0561\u0564\x05\u0186\xC4\x02\u0562\u0564\x05\u0188" +
		"\xC5\x02\u0563\u0561\x03\x02\x02\x02\u0563\u0562\x03\x02\x02\x02\u0564" +
		"\u0565\x03\x02\x02\x02\u0565\u0566\x05\x9CO\x1B\u0566\u05AC\x03\x02\x02" +
		"\x02\u0567\u0568\f\x19\x02\x02\u0568\u0569\x07[\x02\x02\u0569\u05AC\x05" +
		"\x9CO\x1A\u056A\u056B\f\x18\x02\x02\u056B\u056C\x07Y\x02\x02\u056C\u05AC" +
		"\x05\x9CO\x19\u056D\u056E\f\x17\x02\x02\u056E\u056F\x07\\\x02\x02\u056F" +
		"\u05AC\x05\x9CO\x18\u0570\u0571\f\x16\x02\x02\u0571\u0572\x05\x9EP\x02" +
		"\u0572\u0573\x05\x9CO\x17\u0573\u05AC\x03\x02\x02\x02\u0574\u0575\f\x15" +
		"\x02\x02\u0575\u0576\x07]\x02\x02\u0576\u05AC\x05\x9CO\x16\u0577\u0578" +
		"\f\x14\x02\x02\u0578\u0579\x07^\x02\x02\u0579\u05AC\x05\x9CO\x15\u057A" +
		"\u057B\f\x10\x02\x02\u057B\u057C\x07u\x02\x02\u057C\u05AC\x05\x9CO\x11" +
		"\u057D\u057E\f\x0F\x02\x02\u057E\u057F\x07i\x02\x02\u057F\u05AC\x05\x9C" +
		"O\x10\u0580\u0581\f\x0E\x02\x02\u0581\u0582\x05\xA0Q\x02\u0582\u0583\x05" +
		"\x9CO\x0F\u0583\u05AC\x03\x02\x02\x02\u0584\u0585\f\'\x02\x02\u0585\u0586" +
		"\x07r\x02\x02\u0586\u0587\x05\u015A\xAE\x02\u0587\u0589\x07\x83\x02\x02" +
		"\u0588\u058A\x05\xD0i\x02\u0589\u0588\x03\x02\x02\x02\u0589\u058A\x03" +
		"\x02\x02\x02\u058A\u058B\x03\x02\x02\x02\u058B\u058C\x07\x84\x02\x02\u058C" +
		"\u05AC\x03\x02\x02\x02\u058D\u058E\f&\x02\x02\u058E\u058F\x07r\x02\x02" +
		"\u058F\u05AC\x05\u017C\xBF\x02\u0590\u0591\f%\x02\x02\u0591\u0592\x07" +
		"r\x02\x02\u0592\u05AC\x05\xB4[\x02\u0593\u0594\f$\x02\x02\u0594\u0595" +
		"\x07r\x02\x02\u0595\u05AC\x07\'\x02\x02\u0596\u0597\f#\x02\x02\u0597\u0599" +
		"\x07\x83\x02\x02\u0598\u059A\x05\xD0i\x02\u0599\u0598\x03\x02\x02\x02" +
		"\u0599\u059A\x03\x02\x02\x02\u059A\u059B\x03\x02\x02\x02\u059B\u05AC\x07" +
		"\x84\x02\x02\u059C\u059D\f\"\x02\x02\u059D\u059E\x07\x81\x02\x02\u059E" +
		"\u059F\x05\x9CO\x02\u059F\u05A0\x07\x82\x02\x02\u05A0\u05AC\x03\x02\x02" +
		"\x02\u05A1\u05A2\f!\x02\x02\u05A2\u05AC\x07~\x02\x02\u05A3\u05A4\f\x1D" +
		"\x02\x02\u05A4\u05A5\x07\x03\x02\x02\u05A5\u05AC\x05\u0122\x92\x02\u05A6" +
		"\u05A7\f\x13\x02\x02\u05A7\u05A9\x07s\x02\x02\u05A8\u05AA\x05\x9CO\x02" +
		"\u05A9\u05A8\x03\x02\x02\x02\u05A9\u05AA\x03\x02\x02\x02\u05AA\u05AC\x03" +
		"\x02\x02\x02\u05AB\u055A\x03\x02\x02\x02\u05AB\u055D\x03\x02\x02\x02\u05AB" +
		"\u0560\x03\x02\x02\x02\u05AB\u0567\x03\x02\x02\x02\u05AB\u056A\x03\x02" +
		"\x02\x02\u05AB\u056D\x03\x02\x02\x02\u05AB\u0570\x03\x02\x02\x02\u05AB" +
		"\u0574\x03\x02\x02\x02\u05AB\u0577\x03\x02\x02\x02\u05AB\u057A\x03\x02" +
		"\x02\x02\u05AB\u057D\x03\x02\x02\x02\u05AB\u0580\x03\x02\x02\x02\u05AB" +
		"\u0584\x03\x02\x02\x02\u05AB\u058D\x03\x02\x02\x02\u05AB\u0590\x03\x02" +
		"\x02\x02\u05AB\u0593\x03\x02\x02\x02\u05AB\u0596\x03\x02\x02\x02\u05AB" +
		"\u059C\x03\x02\x02\x02\u05AB\u05A1\x03\x02\x02\x02\u05AB\u05A3\x03\x02" +
		"\x02\x02\u05AB\u05A6\x03\x02\x02\x02\u05AC\u05AF\x03\x02\x02\x02\u05AD" +
		"\u05AB\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE\x9D\x03\x02\x02" +
		"\x02\u05AF\u05AD\x03\x02\x02\x02\u05B0\u05B1\t\b\x02\x02\u05B1\x9F\x03" +
		"\x02\x02\x02\u05B2\u05B3\t\t\x02\x02\u05B3\xA1\x03\x02\x02\x02\u05B4\u05B6" +
		"\x05\x90I\x02\u05B5\u05B4\x03\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02" +
		"\u05B7\u05B5\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\u05B9\x03" +
		"\x02\x02\x02\u05B9\u05BA\x05\xA2R\x02\u05BA\u05C3\x03\x02\x02\x02\u05BB" +
		"\u05C3\x05\xA8U\x02\u05BC\u05C3\x05\xAC";
	private static readonly _serializedATNSegment3: string =
		"W\x02\u05BD\u05C3\x05\xAEX\x02\u05BE\u05C3\x05\xD8m\x02\u05BF\u05C3\x05" +
		"\xE4s\x02\u05C0\u05C3\x05\xE6t\x02\u05C1\u05C3\x05\xE8u\x02\u05C2\u05B5" +
		"\x03\x02\x02\x02\u05C2\u05BB\x03\x02\x02\x02\u05C2\u05BC\x03\x02\x02\x02" +
		"\u05C2\u05BD\x03\x02\x02\x02\u05C2\u05BE\x03\x02\x02\x02\u05C2\u05BF\x03" +
		"\x02\x02\x02\u05C2\u05C0\x03\x02\x02\x02\u05C2\u05C1\x03\x02\x02\x02\u05C3" +
		"\xA3\x03\x02\x02\x02\u05C4\u05C5\t\n\x02\x02\u05C5\xA5\x03\x02\x02\x02" +
		"\u05C6\u05C9\x05\u0158\xAD\x02\u05C7\u05C9\x05\u016C\xB7\x02\u05C8\u05C6" +
		"\x03\x02\x02\x02\u05C8\u05C7\x03\x02\x02\x02\u05C9\xA7\x03\x02\x02\x02" +
		"\u05CA\u05CE\x07\x7F\x02\x02\u05CB\u05CD\x05\x8EH\x02\u05CC\u05CB\x03" +
		"\x02\x02\x02\u05CD\u05D0\x03\x02\x02\x02\u05CE\u05CC\x03\x02\x02\x02\u05CE" +
		"\u05CF\x03\x02\x02\x02\u05CF\u05D2\x03\x02\x02\x02\u05D0\u05CE\x03\x02" +
		"\x02\x02\u05D1\u05D3\x05\xAAV\x02\u05D2\u05D1\x03\x02\x02\x02\u05D2\u05D3" +
		"\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4\u05D5\x07\x80\x02\x02" +
		"\u05D5\xA9\x03\x02\x02\x02\u05D6\u05D8\x05\x96L\x02\u05D7\u05D6\x03\x02" +
		"\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05D7\x03\x02\x02\x02\u05D9" +
		"\u05DA\x03\x02\x02\x02\u05DA\u05DC\x03\x02\x02\x02\u05DB\u05DD\x05\x9C" +
		"O\x02\u05DC\u05DB\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD\u05E0" +
		"\x03\x02\x02\x02\u05DE\u05E0\x05\x9CO\x02\u05DF\u05D7\x03\x02\x02\x02" +
		"\u05DF\u05DE\x03\x02\x02\x02\u05E0\xAB\x03\x02\x02\x02\u05E1\u05E3\x07" +
		"&\x02\x02\u05E2\u05E4\x07\x15\x02\x02\u05E3\u05E2\x03\x02\x02\x02\u05E3" +
		"\u05E4\x03\x02\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E6\x05\xA8" +
		"U\x02\u05E6\xAD\x03\x02\x02\x02\u05E7\u05E8\x07\"\x02\x02\u05E8\u05E9" +
		"\x05\xA8U\x02\u05E9\xAF\x03\x02\x02\x02\u05EA\u05EF\x05\x9CO\x02\u05EB" +
		"\u05EC\x07v\x02\x02\u05EC\u05EE\x05\x9CO\x02\u05ED\u05EB\x03\x02\x02\x02" +
		"\u05EE\u05F1\x03\x02\x02\x02\u05EF\u05ED\x03\x02\x02\x02\u05EF\u05F0\x03" +
		"\x02\x02\x02\u05F0\u05F3\x03\x02\x02\x02\u05F1\u05EF\x03\x02\x02\x02\u05F2" +
		"\u05F4\x07v\x02\x02\u05F3\u05F2\x03\x02\x02\x02\u05F3\u05F4\x03\x02\x02" +
		"\x02\u05F4\u05FA\x03\x02\x02\x02\u05F5\u05F6\x05\x9CO\x02\u05F6\u05F7" +
		"\x07w\x02\x02\u05F7\u05F8\x05\x9CO\x02\u05F8\u05FA\x03\x02\x02\x02\u05F9" +
		"\u05EA\x03\x02\x02\x02\u05F9\u05F5\x03\x02\x02\x02\u05FA\xB1\x03\x02\x02" +
		"\x02\u05FB\u05FC\x05\x9CO\x02\u05FC\u05FD\x07v\x02\x02\u05FD\u05FF\x03" +
		"\x02\x02\x02\u05FE\u05FB\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600" +
		"\u05FE\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601\u0603\x03\x02" +
		"\x02\x02\u0602\u0604\x05\x9CO\x02\u0603\u0602\x03\x02\x02\x02\u0603\u0604" +
		"\x03\x02\x02\x02\u0604\xB3\x03\x02\x02\x02\u0605\u0606\x07M\x02\x02\u0606" +
		"\xB5\x03\x02\x02\x02\u0607\u060B\x05\xB8]\x02\u0608\u060B\x05\xC0a\x02" +
		"\u0609\u060B\x05\xC2b\x02\u060A\u0607\x03\x02\x02\x02\u060A\u0608\x03" +
		"\x02\x02\x02\u060A\u0609\x03\x02\x02\x02\u060B\xB7\x03\x02\x02\x02\u060C" +
		"\u060D\x05\u0158\xAD\x02\u060D\u0611\x07\x7F\x02\x02\u060E\u0610\x05\x8E" +
		"H\x02\u060F\u060E\x03\x02\x02\x02\u0610\u0613\x03\x02\x02\x02\u0611\u060F" +
		"\x03\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612\u0616\x03\x02\x02\x02" +
		"\u0613\u0611\x03\x02\x02\x02\u0614\u0617\x05\xBA^\x02\u0615\u0617\x05" +
		"\xBE`\x02\u0616\u0614\x03\x02\x02\x02\u0616\u0615\x03\x02\x02\x02\u0616" +
		"\u0617\x03\x02\x02\x02\u0617\u0618\x03\x02\x02\x02\u0618\u0619\x07\x80" +
		"\x02\x02\u0619\xB9\x03\x02\x02\x02\u061A\u061F\x05\xBC_\x02\u061B\u061C" +
		"\x07v\x02\x02\u061C\u061E\x05\xBC_\x02\u061D\u061B\x03\x02\x02\x02\u061E" +
		"\u0621\x03\x02\x02\x02\u061F\u061D\x03\x02\x02\x02\u061F\u0620\x03\x02" +
		"\x02\x02\u0620\u0627\x03\x02\x02\x02\u0621\u061F\x03\x02\x02\x02\u0622" +
		"\u0623\x07v\x02\x02\u0623\u0628\x05\xBE`\x02\u0624\u0626\x07v\x02\x02" +
		"\u0625\u0624\x03\x02\x02\x02\u0625\u0626\x03\x02\x02\x02\u0626\u0628\x03" +
		"\x02\x02\x02\u0627\u0622\x03\x02\x02\x02\u0627\u0625\x03\x02\x02\x02\u0628" +
		"\xBB\x03\x02\x02\x02\u0629\u062B\x05\x90I\x02\u062A\u0629\x03\x02\x02" +
		"\x02\u062B\u062E\x03\x02\x02\x02\u062C\u062A\x03\x02\x02\x02\u062C\u062D" +
		"\x03\x02\x02\x02\u062D\u0637\x03\x02\x02\x02\u062E\u062C\x03\x02\x02\x02" +
		"\u062F\u0638\x05\u017C\xBF\x02\u0630\u0633\x05\u017C\xBF\x02\u0631\u0633" +
		"\x05\xB4[\x02\u0632\u0630\x03\x02\x02\x02\u0632\u0631\x03\x02\x02\x02" +
		"\u0633\u0634\x03\x02\x02\x02\u0634\u0635\x07x\x02\x02\u0635\u0636\x05" +
		"\x9CO\x02\u0636\u0638\x03\x02\x02\x02\u0637\u062F\x03\x02\x02\x02\u0637" +
		"\u0632\x03\x02\x02\x02\u0638\xBD\x03\x02\x02\x02\u0639\u063A\x07s\x02" +
		"\x02\u063A\u063B\x05\x9CO\x02\u063B\xBF\x03\x02\x02\x02\u063C\u063D\x05" +
		"\u0158\xAD\x02\u063D\u0641\x07\x83\x02\x02\u063E\u0640\x05\x8EH\x02\u063F" +
		"\u063E\x03\x02\x02\x02\u0640\u0643\x03\x02\x02\x02\u0641\u063F\x03\x02" +
		"\x02\x02\u0641\u0642\x03\x02\x02\x02\u0642\u064F\x03\x02\x02\x02\u0643" +
		"\u0641\x03\x02\x02\x02\u0644\u0649\x05\x9CO\x02\u0645\u0646\x07v\x02\x02" +
		"\u0646\u0648\x05\x9CO\x02\u0647\u0645\x03\x02\x02\x02\u0648\u064B\x03" +
		"\x02\x02\x02\u0649\u0647\x03\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A" +
		"\u064D\x03\x02\x02\x02\u064B\u0649\x03\x02\x02\x02\u064C\u064E\x07v\x02" +
		"\x02\u064D\u064C\x03\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E\u0650" +
		"\x03\x02\x02\x02\u064F\u0644\x03\x02\x02\x02\u064F\u0650\x03\x02\x02\x02" +
		"\u0650\u0651\x03\x02\x02\x02\u0651\u0652\x07\x84\x02\x02\u0652\xC1\x03" +
		"\x02\x02\x02\u0653\u0654\x05\u0158\xAD\x02\u0654\xC3\x03\x02\x02\x02\u0655" +
		"\u0659\x05\xC6d\x02\u0656\u0659\x05\xCCg\x02\u0657\u0659\x05\xCEh\x02" +
		"\u0658\u0655\x03\x02\x02\x02\u0658\u0656\x03\x02\x02\x02\u0658\u0657\x03" +
		"\x02\x02\x02\u0659\xC5\x03\x02\x02\x02\u065A\u065B\x05\u0158\xAD\x02\u065B" +
		"\u065D\x07\x7F\x02\x02\u065C\u065E\x05\xC8e\x02\u065D\u065C\x03\x02\x02" +
		"\x02\u065D\u065E\x03\x02\x02\x02\u065E\u065F\x03\x02\x02\x02\u065F\u0660" +
		"\x07\x80\x02\x02\u0660\xC7\x03\x02\x02\x02\u0661\u0666\x05\xCAf\x02\u0662" +
		"\u0663\x07v\x02\x02\u0663\u0665\x05\xCAf\x02\u0664\u0662\x03\x02\x02\x02" +
		"\u0665\u0668\x03\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0666\u0667\x03" +
		"\x02\x02\x02\u0667\u066A\x03\x02\x02\x02\u0668\u0666\x03\x02\x02\x02\u0669" +
		"\u066B\x07v\x02\x02\u066A\u0669\x03\x02\x02\x02\u066A\u066B\x03\x02\x02" +
		"\x02\u066B\xC9\x03\x02\x02\x02\u066C\u0675\x05\u017C\xBF\x02\u066D\u0670" +
		"\x05\u017C\xBF\x02\u066E\u0670\x05\xB4[\x02\u066F\u066D\x03\x02\x02\x02" +
		"\u066F\u066E\x03\x02\x02\x02\u0670\u0671\x03\x02\x02\x02\u0671\u0672\x07" +
		"x\x02\x02\u0672\u0673\x05\x9CO\x02\u0673\u0675\x03\x02\x02\x02\u0674\u066C" +
		"\x03\x02\x02\x02\u0674\u066F\x03\x02\x02\x02\u0675\xCB\x03\x02\x02\x02" +
		"\u0676\u0677\x05\u0158\xAD\x02\u0677\u0683\x07\x83\x02\x02\u0678\u067D" +
		"\x05\x9CO\x02\u0679\u067A\x07v\x02\x02\u067A\u067C\x05\x9CO\x02\u067B" +
		"\u0679\x03\x02\x02\x02\u067C\u067F\x03\x02\x02\x02\u067D\u067B\x03\x02" +
		"\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E\u0681\x03\x02\x02\x02\u067F" +
		"\u067D\x03\x02\x02\x02\u0680\u0682\x07v\x02\x02\u0681\u0680\x03\x02\x02" +
		"\x02\u0681\u0682\x03\x02\x02\x02\u0682\u0684\x03\x02\x02\x02\u0683\u0678" +
		"\x03\x02\x02\x02\u0683\u0684\x03\x02\x02\x02\u0684\u0685\x03\x02\x02\x02" +
		"\u0685\u0686\x07\x84\x02\x02\u0686\xCD\x03\x02\x02\x02\u0687\u0688\x05" +
		"\u0158\xAD\x02\u0688\xCF\x03\x02\x02\x02\u0689\u068E\x05\x9CO\x02\u068A" +
		"\u068B\x07v\x02\x02\u068B\u068D\x05\x9CO\x02\u068C\u068A\x03\x02\x02\x02" +
		"\u068D\u0690\x03\x02\x02\x02\u068E\u068C\x03\x02\x02\x02\u068E\u068F\x03" +
		"\x02\x02\x02\u068F\u0692\x03\x02\x02\x02\u0690\u068E\x03\x02\x02\x02\u0691" +
		"\u0693\x07v\x02\x02\u0692\u0691\x03\x02\x02\x02\u0692\u0693\x03\x02\x02" +
		"\x02\u0693\xD1\x03\x02\x02\x02\u0694\u0696\x07\x15\x02\x02\u0695\u0694" +
		"\x03\x02\x02\x02\u0695\u0696\x03\x02\x02\x02\u0696\u069D\x03\x02\x02\x02" +
		"\u0697\u069E\x07^\x02\x02\u0698\u069A\x07\\\x02\x02\u0699\u069B\x05\xD4" +
		"k\x02\u069A\u0699\x03\x02\x02\x02\u069A\u069B\x03\x02\x02\x02\u069B\u069C" +
		"\x03\x02\x02\x02\u069C\u069E\x07\\\x02\x02\u069D\u0697\x03\x02\x02\x02" +
		"\u069D\u0698\x03\x02\x02\x02\u069E\u06A4\x03\x02\x02\x02\u069F\u06A5\x05" +
		"\x9CO\x02\u06A0\u06A1\x07z\x02\x02\u06A1\u06A2\x05\u0122\x92\x02\u06A2" +
		"\u06A3\x05\xA8U\x02\u06A3\u06A5\x03\x02\x02\x02\u06A4\u069F\x03\x02\x02" +
		"\x02\u06A4\u06A0\x03\x02\x02\x02\u06A5\xD3\x03\x02\x02\x02\u06A6\u06AB" +
		"\x05\xD6l\x02\u06A7\u06A8\x07v\x02\x02\u06A8\u06AA\x05\xD6l\x02\u06A9" +
		"\u06A7\x03\x02\x02\x02\u06AA\u06AD\x03\x02\x02\x02\u06AB\u06A9\x03\x02" +
		"\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06AF\x03\x02\x02\x02\u06AD" +
		"\u06AB\x03\x02\x02\x02\u06AE\u06B0\x07v\x02\x02\u06AF\u06AE\x03\x02\x02" +
		"\x02\u06AF\u06B0\x03\x02\x02\x02\u06B0\xD5\x03\x02\x02\x02\u06B1\u06B3" +
		"\x05\x90I\x02\u06B2\u06B1\x03\x02\x02\x02\u06B3\u06B6\x03\x02\x02\x02" +
		"\u06B4\u06B2\x03\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02\u06B5\u06B7\x03" +
		"\x02\x02\x02\u06B6\u06B4\x03\x02\x02\x02\u06B7\u06BA\x05\xF2z\x02\u06B8" +
		"\u06B9\x07x\x02\x02\u06B9\u06BB\x05\u0120\x91\x02\u06BA\u06B8\x03\x02" +
		"\x02\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB\xD7\x03\x02\x02\x02\u06BC\u06BE" +
		"\x05\xE2r\x02\u06BD\u06BC\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02\x02" +
		"\u06BE\u06C3\x03\x02\x02\x02\u06BF\u06C4\x05\xDAn\x02\u06C0\u06C4\x05" +
		"\xDCo\x02\u06C1\u06C4\x05\xDEp\x02\u06C2\u06C4\x05\xE0q\x02\u06C3\u06BF" +
		"\x03\x02\x02\x02\u06C3\u06C0\x03\x02\x02\x02\u06C3\u06C1\x03\x02\x02\x02" +
		"\u06C3\u06C2\x03\x02\x02\x02\u06C4\xD9\x03\x02\x02\x02\u06C5\u06C6\x07" +
		"\x12\x02\x02\u06C6\u06C7\x05\xA8U\x02\u06C7\xDB\x03\x02\x02\x02\u06C8" +
		"\u06C9\x07%\x02\x02\u06C9\u06CA\x05\x9CO\x02\u06CA\u06CB\x05\xA8U\x02" +
		"\u06CB\xDD\x03\x02\x02\x02\u06CC\u06CD\x07%\x02\x02\u06CD\u06CE\x07\x11" +
		"\x02\x02\u06CE\u06CF\x05\xF2z\x02\u06CF\u06D0\x07i\x02\x02\u06D0\u06D1" +
		"\x05\x9CO\x02\u06D1\u06D2\x05\xA8U\x02\u06D2\xDF\x03\x02\x02\x02\u06D3" +
		"\u06D4\x07\r\x02\x02\u06D4\u06D5\x05\xF2z\x02\u06D5\u06D6\x07\x10\x02" +
		"\x02\u06D6\u06D7\x05\x9CO\x02\u06D7\u06D8\x05\xA8U\x02\u06D8\xE1\x03\x02" +
		"\x02\x02\u06D9\u06DA\x07S\x02\x02\u06DA\u06DB\x07x\x02\x02\u06DB\xE3\x03" +
		"\x02\x02\x02\u06DC\u06DD\x07\x0E\x02\x02\u06DD\u06DE\x05\x9CO\x02\u06DE" +
		"\u06E5\x05\xA8U\x02\u06DF\u06E3\x07\b\x02\x02\u06E0\u06E4\x05\xA8U\x02" +
		"\u06E1\u06E4\x05\xE4s\x02\u06E2\u06E4\x05\xE6t\x02\u06E3\u06E0\x03\x02" +
		"\x02\x02\u06E3\u06E1\x03\x02\x02\x02\u06E3\u06E2\x03\x02\x02\x02\u06E4" +
		"\u06E6\x03\x02\x02\x02\u06E5\u06DF\x03\x02\x02\x02\u06E5\u06E6\x03\x02" +
		"\x02\x02\u06E6\xE5\x03\x02\x02\x02\u06E7\u06E8\x07\x0E\x02\x02\u06E8\u06E9" +
		"\x07\x11\x02\x02\u06E9\u06EA\x05\xF2z\x02\u06EA\u06EB\x07i\x02\x02\u06EB" +
		"\u06EC\x05\x9CO\x02\u06EC\u06F3\x05\xA8U\x02\u06ED\u06F1\x07\b\x02\x02" +
		"\u06EE\u06F2\x05\xA8U\x02\u06EF\u06F2\x05\xE4s\x02\u06F0\u06F2\x05\xE6" +
		"t\x02\u06F1\u06EE\x03\x02\x02\x02\u06F1\u06EF\x03\x02\x02\x02\u06F1\u06F0" +
		"\x03\x02\x02\x02\u06F2\u06F4\x03\x02\x02\x02\u06F3\u06ED\x03\x02\x02\x02" +
		"\u06F3\u06F4\x03\x02\x02\x02\u06F4\xE7\x03\x02\x02\x02\u06F5\u06F6\x07" +
		"\x13\x02\x02\u06F6\u06F7\x05\x9CO\x02\u06F7\u06FB\x07\x7F\x02\x02\u06F8" +
		"\u06FA\x05\x8EH\x02\u06F9\u06F8\x03\x02\x02\x02\u06FA\u06FD\x03\x02\x02" +
		"\x02\u06FB\u06F9\x03\x02\x02\x02\u06FB\u06FC\x03\x02\x02\x02\u06FC\u06FF" +
		"\x03\x02\x02\x02\u06FD\u06FB\x03\x02\x02\x02\u06FE\u0700\x05\xEAv\x02" +
		"\u06FF\u06FE\x03\x02\x02\x02\u06FF\u0700\x03\x02\x02\x02\u0700\u0701\x03" +
		"\x02\x02\x02\u0701\u0702\x07\x80\x02\x02\u0702\xE9\x03\x02\x02\x02\u0703" +
		"\u0704\x05\xEEx\x02\u0704\u0705\x07{\x02\x02\u0705\u0706\x05\xECw\x02" +
		"\u0706\u0708\x03\x02\x02\x02\u0707\u0703\x03\x02\x02\x02\u0708\u070B\x03" +
		"\x02\x02\x02\u0709\u0707\x03\x02\x02\x02\u0709\u070A\x03\x02\x02\x02\u070A" +
		"\u070C\x03\x02\x02\x02\u070B\u0709\x03\x02\x02\x02\u070C\u070D\x05\xEE" +
		"x\x02\u070D\u070E\x07{\x02\x02\u070E\u0710\x05\x9CO\x02\u070F\u0711\x07" +
		"v\x02\x02\u0710\u070F\x03\x02\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711" +
		"\xEB\x03\x02\x02\x02\u0712\u0713\x05\x9CO\x02\u0713\u0714\x07v\x02\x02" +
		"\u0714\u071A\x03\x02\x02\x02\u0715\u0717\x05\xA2R\x02\u0716\u0718\x07" +
		"v\x02\x02\u0717\u0716\x03\x02\x02\x02\u0717\u0718\x03\x02\x02\x02\u0718" +
		"\u071A\x03\x02\x02\x02\u0719\u0712\x03\x02\x02\x02\u0719\u0715\x03\x02" +
		"\x02\x02\u071A\xED\x03\x02\x02\x02\u071B\u071D\x05\x90I\x02\u071C\u071B" +
		"\x03\x02\x02\x02\u071D\u0720\x03\x02\x02\x02\u071E\u071C\x03\x02\x02\x02" +
		"\u071E\u071F\x03\x02\x02\x02\u071F\u0721\x03\x02\x02\x02\u0720\u071E\x03" +
		"\x02\x02\x02\u0721\u0723\x05\xF2z\x02\u0722\u0724\x05\xF0y\x02\u0723\u0722" +
		"\x03\x02\x02\x02\u0723\u0724\x03\x02\x02\x02\u0724\xEF\x03\x02\x02\x02" +
		"\u0725\u0726\x07\x0E\x02\x02\u0726\u0727\x05\x9CO\x02\u0727\xF1\x03\x02" +
		"\x02\x02\u0728\u072A\x07\\\x02\x02\u0729\u0728\x03\x02\x02\x02\u0729\u072A" +
		"\x03\x02\x02\x02\u072A\u072B\x03\x02\x02\x02\u072B\u0730\x05\xF4{\x02" +
		"\u072C\u072D\x07\\\x02\x02\u072D\u072F\x05\xF4{\x02\u072E\u072C\x03\x02" +
		"\x02\x02\u072F\u0732\x03\x02\x02\x02\u0730\u072E\x03\x02\x02\x02\u0730" +
		"\u0731\x03\x02\x02\x02\u0731\xF3\x03\x02\x02\x02\u0732\u0730\x03\x02\x02" +
		"\x02\u0733\u0736\x05\xF6|\x02\u0734\u0736\x05\u0100\x81\x02\u0735\u0733" +
		"\x03\x02\x02\x02\u0735\u0734\x03\x02\x02\x02\u0736\xF5\x03\x02\x02\x02" +
		"\u0737\u0744\x05\xF8}\x02\u0738\u0744\x05\xFA~\x02\u0739\u0744\x05\xFC" +
		"\x7F\x02\u073A\u0744\x05\xFE\x80\x02\u073B\u0744\x05\u0104\x83\x02\u073C" +
		"\u0744\x05\u0106\x84\x02\u073D\u0744\x05\u0110\x89\x02\u073E\u0744\x05" +
		"\u0114\x8B\x02\u073F\u0744\x05\u0118\x8D\x02\u0740\u0744\x05\u011A\x8E" +
		"\x02\u0741\u0744\x05\u011E\x90\x02\u0742\u0744\x05\x04\x03\x02\u0743\u0737" +
		"\x03\x02\x02\x02\u0743\u0738\x03\x02\x02\x02\u0743\u0739\x03\x02\x02\x02" +
		"\u0743\u073A\x03\x02\x02\x02\u0743\u073B\x03\x02\x02\x02\u0743\u073C\x03" +
		"\x02\x02\x02\u0743\u073D\x03\x02\x02\x02\u0743\u073E\x03\x02\x02\x02\u0743" +
		"\u073F\x03\x02\x02\x02\u0743\u0740\x03\x02\x02\x02\u0743\u0741\x03\x02" +
		"\x02\x02\u0743\u0742\x03\x02\x02\x02\u0744\xF7\x03\x02\x02\x02\u0745\u0756" +
		"\x07 \x02\x02\u0746\u0756\x07\v\x02\x02\u0747\u0756\x07G\x02\x02\u0748" +
		"\u0756\x07J\x02\x02\u0749\u0756\x07H\x02\x02\u074A\u0756\x07I\x02\x02" +
		"\u074B\u0756\x07K\x02\x02\u074C\u0756\x07L\x02\x02\u074D\u074F\x07U\x02" +
		"\x02\u074E\u074D\x03\x02\x02\x02\u074E\u074F\x03\x02\x02\x02\u074F\u0750" +
		"\x03\x02\x02\x02\u0750\u0756\x07M\x02\x02\u0751\u0753\x07U\x02\x02\u0752" +
		"\u0751\x03\x02\x02\x02\u0752\u0753\x03\x02\x02\x02\u0753\u0754\x03\x02" +
		"\x02\x02\u0754\u0756\x07R\x02\x02\u0755\u0745\x03\x02\x02\x02\u0755\u0746" +
		"\x03\x02\x02\x02\u0755\u0747\x03\x02\x02\x02\u0755\u0748\x03\x02\x02\x02" +
		"\u0755\u0749\x03\x02\x02\x02\u0755\u074A\x03\x02\x02\x02\u0755\u074B\x03" +
		"\x02\x02\x02\u0755\u074C\x03\x02\x02\x02\u0755\u074E\x03\x02\x02\x02\u0755" +
		"\u0752\x03\x02\x02\x02\u0756\xF9\x03\x02\x02\x02\u0757\u0759\x07\x18\x02" +
		"\x02\u0758\u0757\x03\x02\x02\x02\u0758\u0759\x03\x02\x02\x02\u0759\u075B" +
		"\x03\x02\x02\x02\u075A\u075C\x07\x16\x02\x02\u075B\u075A\x03\x02\x02\x02" +
		"\u075B\u075C\x03\x02\x02\x02\u075C\u075D\x03\x02\x02\x02\u075D\u0760\x05" +
		"\u017C\xBF\x02\u075E\u075F\x07p\x02\x02\u075F\u0761\x05\xF2z\x02\u0760" +
		"\u075E\x03\x02\x02\x02\u0760\u0761\x03\x02\x02\x02\u0761\xFB\x03\x02\x02" +
		"\x02\u0762\u0763\x07q\x02\x02\u0763\xFD\x03\x02\x02\x02\u0764\u0765\x07" +
		"s\x02\x02\u0765\xFF\x03\x02\x02\x02\u0766\u0767\x05\u0102\x82\x02\u0767" +
		"\u0768\x07u\x02\x02\u0768\u0769\x05\u0102\x82\x02\u0769\u0772\x03\x02" +
		"\x02\x02\u076A\u076B\x05\u0102\x82\x02\u076B\u076C\x07s\x02\x02\u076C" +
		"\u0772\x03\x02\x02\x02\u076D\u076E\x05\u0102\x82\x02\u076E\u076F\x07t" +
		"\x02\x02\u076F\u0770\x05\u0102\x82\x02\u0770\u0772\x03\x02\x02\x02\u0771" +
		"\u0766\x03\x02\x02\x02\u0771\u076A\x03\x02\x02\x02\u0771\u076D\x03\x02" +
		"\x02\x02\u0772\u0101\x03\x02\x02\x02\u0773\u077F\x07G\x02\x02\u0774\u077F" +
		"\x07J\x02\x02\u0775\u0777\x07U\x02\x02\u0776\u0775\x03\x02\x02\x02\u0776" +
		"\u0777\x03\x02\x02\x02\u0777\u0778\x03\x02\x02\x02\u0778\u077F\x07M\x02" +
		"\x02\u0779\u077B\x07U\x02\x02\u077A\u0779\x03\x02\x02\x02\u077A\u077B" +
		"\x03\x02\x02\x02\u077B\u077C\x03\x02\x02\x02\u077C\u077F\x07R\x02\x02" +
		"\u077D\u077F\x05\u011E\x90\x02\u077E\u0773\x03\x02\x02\x02\u077E\u0774" +
		"\x03\x02\x02\x02\u077E\u0776\x03\x02\x02\x02\u077E\u077A\x03\x02\x02\x02" +
		"\u077E\u077D\x03\x02\x02\x02\u077F\u0103\x03\x02\x02\x02\u0780\u0782\t" +
		"\x04\x02\x02\u0781\u0783\x07\x16\x02\x02\u0782\u0781\x03\x02\x02\x02\u0782" +
		"\u0783\x03\x02\x02\x02\u0783\u0784\x03\x02\x02\x02\u0784\u0785\x05\xF6" +
		"|\x02\u0785\u0105\x03\x02\x02\x02\u0786\u0787\x05\u0158\xAD\x02\u0787" +
		"\u0789\x07\x7F\x02\x02\u0788\u078A\x05\u0108\x85\x02\u0789\u0788\x03\x02" +
		"\x02\x02\u0789\u078A\x03\x02\x02\x02\u078A\u078B\x03\x02\x02\x02\u078B" +
		"\u078C\x07\x80\x02\x02\u078C\u0107\x03\x02\x02\x02\u078D\u0792\x05\u010A" +
		"\x86\x02\u078E\u0790\x07v\x02\x02\u078F\u0791\x05\u010E\x88\x02\u0790" +
		"\u078F\x03\x02\x02\x02\u0790\u0791\x03\x02\x02\x02\u0791\u0793\x03\x02" +
		"\x02\x02\u0792\u078E\x03\x02\x02\x02\u0792\u0793\x03\x02\x02\x02\u0793" +
		"\u0796\x03\x02\x02\x02\u0794\u0796\x05\u010E\x88\x02\u0795\u078D\x03\x02" +
		"\x02\x02\u0795\u0794\x03\x02\x02\x02\u0796\u0109\x03\x02\x02\x02\u0797" +
		"\u079C\x05\u010C\x87\x02\u0798\u0799\x07v\x02\x02\u0799\u079B\x05\u010C" +
		"\x87\x02\u079A\u0798\x03\x02\x02\x02\u079B\u079E\x03\x02\x02\x02\u079C" +
		"\u079A\x03\x02\x02\x02\u079C\u079D\x03\x02\x02\x02\u079D\u010B\x03\x02" +
		"\x02\x02\u079E\u079C\x03\x02\x02\x02\u079F\u07A1\x05\x90I\x02\u07A0\u079F" +
		"\x03\x02\x02\x02\u07A1\u07A4\x03\x02\x02\x02\u07A2\u07A0\x03\x02\x02\x02" +
		"\u07A2\u07A3\x03\x02\x02\x02\u07A3\u07B4\x03\x02\x02\x02\u07A4\u07A2\x03" +
		"\x02\x02\x02\u07A5\u07A6\x05\xB4[\x02\u07A6\u07A7\x07x\x02\x02\u07A7\u07A8" +
		"\x05\xF2z\x02\u07A8\u07B5\x03\x02\x02\x02\u07A9\u07AA\x05\u017C\xBF\x02" +
		"\u07AA\u07AB\x07x\x02\x02\u07AB\u07AC\x05\xF2z\x02\u07AC\u07B5\x03\x02" +
		"\x02\x02\u07AD\u07AF\x07\x18\x02\x02\u07AE\u07AD\x03\x02\x02\x02\u07AE" +
		"\u07AF\x03\x02\x02\x02\u07AF\u07B1\x03\x02\x02\x02\u07B0\u07B2\x07\x16" +
		"\x02\x02\u07B1\u07B0\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02\u07B2" +
		"\u07B3\x03\x02\x02\x02\u07B3\u07B5\x05\u017C\xBF\x02\u07B4\u07A5\x03\x02" +
		"\x02\x02\u07B4\u07A9\x03\x02\x02\x02\u07B4\u07AE\x03\x02\x02\x02\u07B5" +
		"\u010D\x03\x02\x02\x02\u07B6\u07B8\x05\x90I\x02\u07B7\u07B6\x03\x02\x02" +
		"\x02\u07B8\u07BB\x03\x02\x02\x02\u07B9\u07B7\x03\x02\x02\x02\u07B9\u07BA" +
		"\x03\x02\x02\x02\u07BA\u07BC\x03\x02\x02\x02\u07BB\u07B9\x03\x02\x02\x02" +
		"\u07BC\u07BD\x07s\x02\x02\u07BD\u010F\x03\x02\x02\x02\u07BE\u07BF\x05" +
		"\u0158\xAD\x02\u07BF\u07C1\x07\x83\x02\x02\u07C0\u07C2\x05\u0112\x8A\x02" +
		"\u07C1\u07C0\x03\x02\x02\x02\u07C1\u07C2\x03\x02\x02\x02\u07C2\u07C3\x03" +
		"\x02\x02\x02\u07C3\u07C4\x07\x84\x02\x02\u07C4\u0111\x03\x02\x02\x02\u07C5" +
		"\u07CA\x05\xF2z\x02\u07C6\u07C7\x07v\x02\x02\u07C7\u07C9\x05\xF2z\x02" +
		"\u07C8\u07C6\x03\x02\x02\x02\u07C9\u07CC\x03\x02\x02\x02\u07CA\u07C8\x03" +
		"\x02\x02\x02\u07CA\u07CB\x03\x02\x02\x02\u07CB\u07CE\x03\x02\x02\x02\u07CC" +
		"\u07CA\x03\x02\x02\x02\u07CD\u07CF\x07v\x02\x02\u07CE\u07CD\x03\x02\x02" +
		"\x02\u07CE\u07CF\x03\x02\x02\x02\u07CF\u0113\x03\x02\x02\x02\u07D0\u07D2" +
		"\x07\x83\x02\x02\u07D1\u07D3\x05\u0116\x8C\x02\u07D2\u07D1\x03\x02\x02" +
		"\x02\u07D2\u07D3\x03\x02\x02\x02\u07D3\u07D4\x03\x02\x02\x02\u07D4\u07D5" +
		"\x07\x84\x02\x02\u07D5\u0115\x03\x02\x02\x02\u07D6\u07D7\x05\xF2z\x02" +
		"\u07D7\u07D8\x07v\x02\x02\u07D8\u07E5\x03\x02\x02\x02\u07D9\u07E5\x05" +
		"\xFE\x80\x02\u07DA\u07DD\x05\xF2z\x02\u07DB\u07DC\x07v\x02\x02\u07DC\u07DE" +
		"\x05\xF2z\x02\u07DD\u07DB\x03\x02\x02\x02\u07DE\u07DF\x03\x02\x02\x02" +
		"\u07DF\u07DD\x03\x02\x02\x02\u07DF\u07E0\x03\x02\x02\x02\u07E0\u07E2\x03" +
		"\x02\x02\x02\u07E1\u07E3\x07v\x02\x02\u07E2\u07E1\x03\x02\x02\x02\u07E2" +
		"\u07E3\x03\x02\x02\x02\u07E3\u07E5\x03\x02\x02\x02\u07E4\u07D6\x03\x02" +
		"\x02\x02\u07E4\u07D9\x03\x02\x02\x02\u07E4\u07DA\x03\x02\x02\x02\u07E5" +
		"\u0117\x03\x02\x02\x02\u07E6\u07E7\x07\x83\x02\x02\u07E7\u07E8\x05\xF2" +
		"z\x02\u07E8\u07E9\x07\x84\x02\x02\u07E9\u0119\x03\x02\x02\x02\u07EA\u07EC" +
		"\x07\x81\x02\x02\u07EB\u07ED\x05\u011C\x8F\x02\u07EC\u07EB\x03\x02\x02" +
		"\x02\u07EC\u07ED\x03\x02\x02\x02\u07ED\u07EE\x03\x02\x02\x02\u07EE\u07EF" +
		"\x07\x82\x02\x02\u07EF\u011B\x03\x02\x02\x02\u07F0\u07F5\x05\xF2z\x02" +
		"\u07F1\u07F2\x07v\x02\x02\u07F2\u07F4\x05\xF2z\x02\u07F3\u07F1\x03\x02" +
		"\x02\x02\u07F4\u07F7\x03\x02\x02\x02\u07F5\u07F3\x03\x02\x02\x02\u07F5" +
		"\u07F6\x03\x02\x02\x02\u07F6\u07F9\x03\x02\x02\x02\u07F7\u07F5\x03\x02" +
		"\x02\x02\u07F8\u07FA\x07v\x02\x02\u07F9\u07F8\x03\x02\x02\x02\u07F9\u07FA" +
		"\x03\x02\x02\x02\u07FA\u011D\x03\x02\x02\x02\u07FB\u07FE\x05\u0158\xAD" +
		"\x02\u07FC\u07FE\x05\u016C\xB7\x02\u07FD\u07FB\x03\x02\x02\x02\u07FD\u07FC" +
		"\x03\x02\x02\x02\u07FE\u011F\x03\x02\x02\x02\u07FF\u0803\x05\u0122\x92" +
		"\x02\u0800\u0803\x05\u0144\xA3\x02\u0801\u0803\x05\u0140\xA1\x02\u0802" +
		"\u07FF\x03\x02\x02\x02\u0802\u0800\x03\x02\x02\x02\u0802\u0801\x03\x02" +
		"\x02\x02\u0803\u0121\x03\x02\x02\x02\u0804\u0813\x05\u0124\x93\x02\u0805" +
		"\u0813\x05\u0146\xA4\x02\u0806\u0813\x05\u0142\xA2\x02\u0807\u0813\x05" +
		"\u0172\xBA\x02\u0808\u0813\x05\u0128\x95\x02\u0809\u0813\x05\u0126\x94" +
		"\x02\u080A\u0813\x05\u0130\x99\x02\u080B\u0813\x05\u012E\x98\x02\u080C" +
		"\u0813\x05\u012A\x96\x02\u080D\u0813\x05\u012C\x97\x02\u080E\u0813\x05" +
		"\u0148\xA5\x02\u080F\u0813\x05\u0170\xB9\x02\u0810\u0813\x05\u0132\x9A" +
		"\x02\u0811\u0813\x05\x04\x03\x02\u0812\u0804\x03\x02\x02\x02\u0812\u0805" +
		"\x03\x02\x02\x02\u0812\u0806\x03\x02\x02\x02\u0812\u0807\x03\x02\x02\x02" +
		"\u0812\u0808\x03\x02\x02\x02\u0812\u0809\x03\x02\x02\x02\u0812\u080A\x03" +
		"\x02\x02\x02\u0812\u080B\x03\x02\x02\x02\u0812\u080C\x03\x02\x02\x02\u0812" +
		"\u080D\x03\x02\x02\x02\u0812\u080E\x03\x02\x02\x02\u0812\u080F\x03\x02" +
		"\x02\x02\u0812\u0810\x03\x02\x02\x02\u0812\u0811\x03\x02\x02\x02\u0813" +
		"\u0123\x03\x02\x02\x02\u0814\u0815\x07\x83\x02\x02\u0815\u0816\x05\u0120" +
		"\x91\x02\u0816\u0817\x07\x84\x02\x02\u0817\u0125\x03\x02\x02\x02\u0818" +
		"\u0819\x07Z\x02\x02\u0819\u0127\x03\x02\x02\x02\u081A\u0825\x07\x83\x02" +
		"\x02\u081B\u081C\x05\u0120\x91\x02\u081C\u081D\x07v\x02\x02\u081D\u081F" +
		"\x03\x02\x02\x02\u081E\u081B\x03\x02\x02\x02\u081F\u0820\x03\x02\x02\x02" +
		"\u0820\u081E\x03\x02\x02\x02\u0820\u0821\x03\x02\x02\x02\u0821\u0823\x03" +
		"\x02\x02\x02\u0822\u0824\x05\u0120\x91\x02\u0823\u0822\x03\x02\x02\x02" +
		"\u0823\u0824\x03\x02\x02\x02\u0824\u0826\x03\x02\x02\x02\u0825\u081E\x03" +
		"\x02\x02\x02\u0825\u0826\x03\x02\x02\x02\u0826\u0827\x03\x02\x02\x02\u0827" +
		"\u0828\x07\x84\x02\x02\u0828\u0129\x03\x02\x02\x02\u0829\u082A\x07\x81" +
		"\x02\x02\u082A\u082B\x05\u0120\x91\x02\u082B\u082C\x07w\x02\x02\u082C" +
		"\u082D\x05\x9CO\x02\u082D\u082E\x07\x82\x02\x02\u082E\u012B\x03\x02\x02" +
		"\x02\u082F\u0830\x07\x81\x02\x02\u0830\u0831\x05\u0120\x91\x02\u0831\u0832" +
		"\x07\x82\x02\x02\u0832\u012D\x03\x02\x02\x02\u0833\u0835\x07[\x02\x02" +
		"\u0834\u0836\x05\u0152\xAA\x02\u0835\u0834\x03\x02\x02\x02\u0835\u0836" +
		"\x03\x02\x02\x02\u0836\u0838\x03\x02\x02\x02\u0837\u0839\x07\x16\x02\x02" +
		"\u0838\u0837\x03\x02\x02\x02\u0838\u0839\x03\x02\x02\x02\u0839\u083A\x03" +
		"\x02\x02\x02\u083A\u083B\x05\u0122\x92\x02\u083B\u012F\x03\x02\x02\x02" +
		"\u083C\u083D\x07V\x02\x02\u083D\u083E\t\v\x02\x02\u083E\u083F\x05\u0122" +
		"\x92\x02\u083F\u0131\x03\x02\x02\x02\u0840\u0842\x05\x8AF\x02\u0841\u0840" +
		"\x03\x02\x02\x02\u0841\u0842\x03\x02\x02\x02\u0842\u0843\x03\x02\x02\x02" +
		"\u0843\u0844\x05\u0134\x9B\x02\u0844\u0845\x07\f\x02\x02\u0845\u0847\x07" +
		"\x83\x02\x02\u0846\u0848\x05\u0138\x9D\x02\u0847\u0846\x03\x02\x02\x02" +
		"\u0847\u0848\x03\x02\x02\x02\u0848\u0849\x03\x02\x02\x02\u0849\u084B\x07" +
		"\x84\x02\x02\u084A\u084C\x05\u0136\x9C\x02\u084B\u084A\x03\x02\x02\x02" +
		"\u084B\u084C\x03\x02\x02\x02\u084C\u0133\x03\x02\x02\x02\u084D\u084F\x07" +
		"\"\x02\x02\u084E\u084D\x03\x02\x02\x02\u084E\u084F\x03\x02\x02\x02\u084F" +
		"\u0854\x03\x02\x02\x02\u0850\u0852\x07\n\x02\x02\u0851\u0853\x05:\x1E" +
		"\x02\u0852\u0851\x03\x02\x02\x02\u0852\u0853\x03\x02\x02\x02\u0853\u0855" +
		"\x03\x02\x02\x02\u0854\u0850\x03\x02\x02\x02\u0854\u0855\x03\x02\x02\x02" +
		"\u0855\u0135\x03\x02\x02\x02\u0856\u0857\x07z\x02\x02\u0857\u0858\x05" +
		"\u0122\x92\x02\u0858\u0137\x03\x02\x02\x02\u0859\u085C\x05\u013A\x9E\x02" +
		"\u085A\u085C\x05\u013E\xA0\x02\u085B\u0859\x03\x02\x02\x02\u085B\u085A" +
		"\x03\x02\x02\x02\u085C\u0139\x03\x02\x02\x02\u085D\u0862\x05\u013C\x9F" +
		"\x02\u085E\u085F\x07v\x02\x02";
	private static readonly _serializedATNSegment4: string =
		"\u085F\u0861\x05\u013C\x9F\x02\u0860\u085E\x03\x02\x02\x02\u0861\u0864" +
		"\x03\x02\x02\x02\u0862\u0860\x03\x02\x02\x02\u0862\u0863\x03\x02\x02\x02" +
		"\u0863\u0866\x03\x02\x02\x02\u0864\u0862\x03\x02\x02\x02\u0865\u0867\x07" +
		"v\x02\x02\u0866\u0865\x03\x02\x02\x02\u0866\u0867\x03\x02\x02\x02\u0867" +
		"\u013B\x03\x02\x02\x02\u0868\u086A\x05\x90I\x02\u0869\u0868\x03\x02\x02" +
		"\x02\u086A\u086D\x03\x02\x02\x02\u086B\u0869\x03\x02\x02\x02\u086B\u086C" +
		"\x03\x02\x02\x02\u086C\u0873\x03\x02\x02\x02\u086D\u086B\x03\x02\x02\x02" +
		"\u086E\u0871\x05\u017C\xBF\x02\u086F\u0871\x07q\x02\x02\u0870\u086E\x03" +
		"\x02\x02\x02\u0870\u086F\x03\x02\x02\x02\u0871\u0872\x03\x02\x02\x02\u0872" +
		"\u0874\x07x\x02\x02\u0873\u0870\x03\x02\x02\x02\u0873\u0874\x03\x02\x02" +
		"\x02\u0874\u0875\x03\x02\x02\x02\u0875\u0876\x05\u0120\x91\x02\u0876\u013D" +
		"\x03\x02\x02\x02\u0877\u0878\x05\u013C\x9F\x02\u0878\u0879\x07v\x02\x02" +
		"\u0879\u087B\x03\x02\x02\x02\u087A\u0877\x03\x02\x02\x02\u087B\u087E\x03" +
		"\x02\x02\x02\u087C\u087A\x03\x02\x02\x02\u087C\u087D\x03\x02\x02\x02\u087D" +
		"\u087F\x03\x02\x02\x02\u087E\u087C\x03\x02\x02\x02\u087F\u0880\x05\u013C" +
		"\x9F\x02\u0880\u0884\x07v\x02\x02\u0881\u0883\x05\x90I\x02\u0882\u0881" +
		"\x03\x02\x02\x02\u0883\u0886\x03\x02\x02\x02\u0884\u0882\x03\x02\x02\x02" +
		"\u0884\u0885\x03\x02\x02\x02\u0885\u0887\x03\x02\x02\x02\u0886\u0884\x03" +
		"\x02\x02\x02\u0887\u0888\x07t\x02\x02\u0888\u013F\x03\x02\x02\x02\u0889" +
		"\u088B\x07(\x02\x02\u088A\u0889\x03\x02\x02\x02\u088A\u088B\x03\x02\x02" +
		"\x02\u088B\u088C\x03\x02\x02\x02\u088C\u088D\x05\u014A\xA6\x02\u088D\u0141" +
		"\x03\x02\x02\x02\u088E\u0890\x07(\x02\x02\u088F\u088E\x03\x02\x02\x02" +
		"\u088F\u0890\x03\x02\x02\x02\u0890\u0891\x03\x02\x02\x02\u0891\u0892\x05" +
		"\u014E\xA8\x02\u0892\u0143\x03\x02\x02\x02\u0893\u0894\x07\x0F\x02\x02" +
		"\u0894\u0895\x05\u014A\xA6\x02\u0895\u0145\x03\x02\x02\x02\u0896\u0897" +
		"\x07\x0F\x02\x02\u0897\u0898\x05\u014E\xA8\x02\u0898\u0147\x03\x02\x02" +
		"\x02\u0899\u089A\x07q\x02\x02\u089A\u0149\x03\x02\x02\x02\u089B\u08A0" +
		"\x05\u014C\xA7\x02\u089C\u089D\x07T\x02\x02\u089D\u089F\x05\u014C\xA7" +
		"\x02\u089E\u089C\x03\x02\x02\x02\u089F\u08A2\x03\x02\x02\x02\u08A0\u089E" +
		"\x03\x02\x02\x02\u08A0\u08A1\x03\x02\x02\x02\u08A1\u08A4\x03\x02\x02\x02" +
		"\u08A2\u08A0\x03\x02\x02\x02\u08A3\u08A5\x07T\x02\x02\u08A4\u08A3\x03" +
		"\x02\x02\x02\u08A4\u08A5\x03\x02\x02\x02\u08A5\u014B\x03\x02\x02\x02\u08A6" +
		"\u08A9\x05\u0152\xAA\x02\u08A7\u08A9\x05\u014E\xA8\x02\u08A8\u08A6\x03" +
		"\x02\x02\x02\u08A8\u08A7\x03\x02\x02\x02\u08A9\u014D\x03\x02\x02\x02\u08AA" +
		"\u08AC\x07~\x02\x02\u08AB\u08AA\x03\x02\x02\x02\u08AB\u08AC\x03\x02\x02" +
		"\x02\u08AC\u08AE\x03\x02\x02\x02\u08AD\u08AF\x05\x8AF\x02\u08AE\u08AD" +
		"\x03\x02\x02\x02\u08AE\u08AF\x03\x02\x02\x02\u08AF\u08B0\x03\x02\x02\x02" +
		"\u08B0\u08BC\x05\u0172\xBA\x02\u08B1\u08B3\x07\x83\x02\x02\u08B2\u08B4" +
		"\x07~\x02\x02\u08B3\u08B2\x03\x02\x02\x02\u08B3\u08B4\x03\x02\x02\x02" +
		"\u08B4\u08B6\x03\x02\x02\x02\u08B5\u08B7\x05\x8AF\x02\u08B6\u08B5\x03" +
		"\x02\x02\x02\u08B6\u08B7\x03\x02\x02\x02\u08B7\u08B8\x03\x02\x02\x02\u08B8" +
		"\u08B9\x05\u0172\xBA\x02\u08B9\u08BA\x07\x84\x02\x02\u08BA\u08BC\x03\x02" +
		"\x02\x02\u08BB\u08AB\x03\x02\x02\x02\u08BB\u08B1\x03\x02\x02\x02\u08BC" +
		"\u014F\x03\x02\x02\x02\u08BD\u08BE\x05\u0152\xAA\x02\u08BE\u08BF\x07T" +
		"\x02\x02\u08BF\u08C1\x03\x02\x02\x02\u08C0\u08BD\x03\x02\x02\x02\u08C1" +
		"\u08C4\x03\x02\x02\x02\u08C2\u08C0\x03\x02\x02\x02\u08C2\u08C3\x03\x02" +
		"\x02\x02\u08C3\u08C6\x03\x02\x02\x02\u08C4\u08C2\x03\x02\x02\x02\u08C5" +
		"\u08C7\x05\u0152\xAA\x02\u08C6\u08C5\x03\x02\x02\x02\u08C6\u08C7\x03\x02" +
		"\x02\x02\u08C7\u0151\x03\x02\x02\x02\u08C8\u08C9\t\f\x02\x02\u08C9\u0153" +
		"\x03\x02\x02\x02\u08CA\u08CC\x07y\x02\x02\u08CB\u08CA\x03\x02\x02\x02" +
		"\u08CB\u08CC\x03\x02\x02\x02\u08CC\u08CD\x03\x02\x02\x02\u08CD\u08D2\x05" +
		"\u0156\xAC\x02\u08CE\u08CF\x07y\x02\x02\u08CF\u08D1\x05\u0156\xAC\x02" +
		"\u08D0\u08CE\x03\x02\x02\x02\u08D1\u08D4\x03\x02\x02\x02\u08D2\u08D0\x03" +
		"\x02\x02\x02\u08D2\u08D3\x03\x02\x02\x02\u08D3\u0155\x03\x02\x02\x02\u08D4" +
		"\u08D2\x03\x02\x02\x02\u08D5\u08DB\x05\u017C\xBF\x02\u08D6\u08DB\x07\x1E" +
		"\x02\x02\u08D7\u08DB\x07\x1A\x02\x02\u08D8\u08DB\x07\x07\x02\x02\u08D9" +
		"\u08DB\x07:\x02\x02\u08DA\u08D5\x03\x02\x02\x02\u08DA\u08D6\x03\x02\x02" +
		"\x02\u08DA\u08D7\x03\x02\x02\x02\u08DA\u08D8\x03\x02\x02\x02\u08DA\u08D9" +
		"\x03\x02\x02\x02\u08DB\u0157\x03\x02\x02\x02\u08DC\u08DE\x07y\x02\x02" +
		"\u08DD\u08DC\x03\x02\x02\x02\u08DD\u08DE\x03\x02\x02\x02\u08DE\u08DF\x03" +
		"\x02\x02\x02\u08DF\u08E4\x05\u015A\xAE\x02\u08E0\u08E1\x07y\x02\x02\u08E1" +
		"\u08E3\x05\u015A\xAE\x02\u08E2\u08E0\x03\x02\x02\x02\u08E3\u08E6\x03\x02" +
		"\x02\x02\u08E4\u08E2\x03\x02\x02\x02\u08E4\u08E5\x03\x02\x02\x02\u08E5" +
		"\u0159\x03\x02\x02\x02\u08E6\u08E4\x03\x02\x02\x02\u08E7\u08EA\x05\u015C" +
		"\xAF\x02\u08E8\u08E9\x07y\x02\x02\u08E9\u08EB\x05\u015E\xB0\x02\u08EA" +
		"\u08E8\x03\x02\x02\x02\u08EA\u08EB\x03\x02\x02\x02\u08EB\u015B\x03\x02" +
		"\x02\x02\u08EC\u08F3\x05\u017C\xBF\x02\u08ED\u08F3\x07\x1E\x02\x02\u08EE" +
		"\u08F3\x07\x1A\x02\x02\u08EF\u08F3\x07\x1B\x02\x02\u08F0\u08F3\x07\x07" +
		"\x02\x02\u08F1\u08F3\x07:\x02\x02\u08F2\u08EC\x03\x02\x02\x02\u08F2\u08ED" +
		"\x03\x02\x02\x02\u08F2\u08EE\x03\x02\x02\x02\u08F2\u08EF\x03\x02\x02\x02" +
		"\u08F2\u08F0\x03\x02\x02\x02\u08F2\u08F1\x03\x02\x02\x02\u08F3\u015D\x03" +
		"\x02\x02\x02\u08F4\u08F5\x07m\x02\x02\u08F5\u0920\x07l\x02\x02\u08F6\u08F7" +
		"\x07m\x02\x02\u08F7\u08FA\x05\u0164\xB3\x02\u08F8\u08F9\x07v\x02\x02\u08F9" +
		"\u08FB\x05\u0166\xB4\x02\u08FA\u08F8\x03\x02\x02\x02\u08FA\u08FB\x03\x02" +
		"\x02\x02\u08FB\u08FE\x03\x02\x02\x02\u08FC\u08FD\x07v\x02\x02\u08FD\u08FF" +
		"\x05\u0168\xB5\x02\u08FE\u08FC\x03\x02\x02\x02\u08FE\u08FF\x03\x02\x02" +
		"\x02\u08FF\u0901\x03\x02\x02\x02\u0900\u0902\x07v\x02\x02\u0901\u0900" +
		"\x03\x02\x02\x02\u0901\u0902\x03\x02\x02\x02\u0902\u0903\x03\x02\x02\x02" +
		"\u0903\u0904\x07l\x02\x02\u0904\u0920\x03\x02\x02\x02\u0905\u0906\x07" +
		"m\x02\x02\u0906\u0909\x05\u0166\xB4\x02\u0907\u0908\x07v\x02\x02\u0908" +
		"\u090A\x05\u0168\xB5\x02\u0909\u0907\x03\x02\x02\x02\u0909\u090A\x03\x02" +
		"\x02\x02\u090A\u090C\x03\x02\x02\x02\u090B\u090D\x07v\x02\x02\u090C\u090B" +
		"\x03\x02\x02\x02\u090C\u090D\x03\x02\x02\x02\u090D\u090E\x03\x02\x02\x02" +
		"\u090E\u090F\x07l\x02\x02\u090F\u0920\x03\x02\x02\x02\u0910\u0916\x07" +
		"m\x02\x02\u0911\u0912\x05\u0160\xB1\x02\u0912\u0913\x07v\x02\x02\u0913" +
		"\u0915\x03\x02\x02\x02\u0914\u0911\x03\x02\x02\x02\u0915\u0918\x03\x02" +
		"\x02\x02\u0916\u0914\x03\x02\x02\x02\u0916\u0917\x03\x02\x02\x02\u0917" +
		"\u0919\x03\x02\x02\x02\u0918\u0916\x03\x02\x02\x02\u0919\u091B\x05\u0160" +
		"\xB1\x02\u091A\u091C\x07v\x02\x02\u091B\u091A\x03\x02\x02\x02\u091B\u091C" +
		"\x03\x02\x02\x02\u091C\u091D\x03\x02\x02\x02\u091D\u091E\x07l\x02\x02" +
		"\u091E\u0920\x03\x02\x02\x02\u091F\u08F4\x03\x02\x02\x02\u091F\u08F6\x03" +
		"\x02\x02\x02\u091F\u0905\x03\x02\x02\x02\u091F\u0910\x03\x02\x02\x02\u0920" +
		"\u015F\x03\x02\x02\x02\u0921\u0926\x05\u0152\xAA\x02\u0922\u0926\x05\u0120" +
		"\x91\x02\u0923\u0926\x05\u0162\xB2\x02\u0924\u0926\x05\u016A\xB6\x02\u0925" +
		"\u0921\x03\x02\x02\x02\u0925\u0922\x03\x02\x02\x02\u0925\u0923\x03\x02" +
		"\x02\x02\u0925\u0924\x03\x02\x02\x02\u0926\u0161\x03\x02\x02\x02\u0927" +
		"\u092E\x05\xA8U\x02\u0928\u092A\x07U\x02\x02\u0929\u0928\x03\x02\x02\x02" +
		"\u0929\u092A\x03\x02\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u092E\x05" +
		"\xA4S\x02\u092C\u092E\x05\u0156\xAC\x02\u092D\u0927\x03\x02\x02\x02\u092D" +
		"\u0929\x03\x02\x02\x02\u092D\u092C\x03\x02\x02\x02\u092E\u0163\x03\x02" +
		"\x02\x02\u092F\u0934\x05\u0152\xAA\x02\u0930\u0931\x07v\x02\x02\u0931" +
		"\u0933\x05\u0152\xAA\x02\u0932\u0930\x03\x02\x02\x02\u0933\u0936\x03\x02" +
		"\x02\x02\u0934\u0932\x03\x02\x02\x02\u0934\u0935\x03\x02\x02\x02\u0935" +
		"\u0165\x03\x02\x02\x02\u0936\u0934\x03\x02\x02\x02\u0937\u093C\x05\u0120" +
		"\x91\x02\u0938\u0939\x07v\x02\x02\u0939\u093B\x05\u0120\x91\x02\u093A" +
		"\u0938\x03\x02\x02\x02\u093B\u093E\x03\x02\x02\x02\u093C\u093A\x03\x02" +
		"\x02\x02\u093C\u093D\x03\x02\x02\x02\u093D\u0167\x03\x02\x02\x02\u093E" +
		"\u093C\x03\x02\x02\x02\u093F\u0944\x05\u016A\xB6\x02\u0940\u0941\x07v" +
		"\x02\x02\u0941\u0943\x05\u016A\xB6\x02\u0942\u0940\x03\x02\x02\x02\u0943" +
		"\u0946\x03\x02\x02\x02\u0944\u0942\x03\x02\x02\x02\u0944\u0945\x03\x02" +
		"\x02\x02\u0945\u0169\x03\x02\x02\x02\u0946\u0944\x03\x02\x02\x02\u0947" +
		"\u0948\x05\u017C\xBF\x02\u0948\u0949\x07i\x02\x02\u0949\u094A\x05\u0120" +
		"\x91\x02\u094A\u016B\x03\x02\x02\x02\u094B\u094E\x05\u016E\xB8\x02\u094C" +
		"\u094D\x07y\x02\x02\u094D\u094F\x05\u015A\xAE\x02\u094E\u094C\x03\x02" +
		"\x02\x02\u094F\u0950\x03\x02\x02\x02\u0950\u094E\x03\x02\x02\x02\u0950" +
		"\u0951\x03\x02\x02\x02\u0951\u016D\x03\x02\x02\x02\u0952\u0953\x07m\x02" +
		"\x02\u0953\u0956\x05\u0120\x91\x02\u0954\u0955\x07\x03\x02\x02\u0955\u0957" +
		"\x05\u0172\xBA\x02\u0956\u0954\x03\x02\x02\x02\u0956\u0957\x03\x02\x02" +
		"\x02\u0957\u0958\x03\x02\x02\x02\u0958\u0959\x07l\x02\x02\u0959\u016F" +
		"\x03\x02\x02\x02\u095A\u095D\x05\u016E\xB8\x02\u095B\u095C\x07y\x02\x02" +
		"\u095C\u095E\x05\u0174\xBB\x02\u095D\u095B\x03\x02\x02\x02\u095E\u095F" +
		"\x03\x02\x02\x02\u095F\u095D\x03\x02\x02\x02\u095F\u0960\x03\x02\x02\x02" +
		"\u0960\u0171\x03\x02\x02\x02\u0961\u0963\x07y\x02\x02\u0962\u0961\x03" +
		"\x02\x02\x02\u0962\u0963\x03\x02\x02\x02\u0963\u0964\x03\x02\x02\x02\u0964" +
		"\u0969\x05\u0174\xBB\x02\u0965\u0966\x07y\x02\x02\u0966\u0968\x05\u0174" +
		"\xBB\x02\u0967\u0965\x03\x02\x02\x02\u0968\u096B\x03\x02\x02\x02\u0969" +
		"\u0967\x03\x02\x02\x02\u0969\u096A\x03\x02\x02\x02\u096A\u0173\x03\x02" +
		"\x02\x02\u096B\u0969\x03\x02\x02\x02\u096C\u096E\x05\u015C\xAF\x02\u096D" +
		"\u096F\x07y\x02\x02\u096E\u096D\x03\x02\x02\x02\u096E\u096F\x03\x02\x02" +
		"\x02\u096F\u0972\x03\x02\x02\x02\u0970\u0973\x05\u015E\xB0\x02\u0971\u0973" +
		"\x05\u0176\xBC\x02\u0972\u0970\x03\x02\x02\x02\u0972\u0971\x03\x02\x02" +
		"\x02\u0972\u0973\x03\x02\x02\x02\u0973\u0175\x03\x02\x02\x02\u0974\u0976" +
		"\x07\x83\x02\x02\u0975\u0977\x05\u0178\xBD\x02\u0976\u0975\x03\x02\x02" +
		"\x02\u0976\u0977\x03\x02\x02\x02\u0977\u0978\x03\x02\x02\x02\u0978\u097B" +
		"\x07\x84\x02\x02\u0979\u097A\x07z\x02\x02\u097A\u097C\x05\u0120\x91\x02" +
		"\u097B\u0979\x03\x02\x02\x02\u097B\u097C\x03\x02\x02\x02\u097C\u0177\x03" +
		"\x02\x02\x02\u097D\u0982\x05\u0120\x91\x02\u097E\u097F\x07v\x02\x02\u097F" +
		"\u0981\x05\u0120\x91\x02\u0980\u097E\x03\x02\x02\x02\u0981\u0984\x03\x02" +
		"\x02\x02\u0982\u0980\x03\x02\x02\x02\u0982\u0983\x03\x02\x02\x02\u0983" +
		"\u0986\x03\x02\x02\x02\u0984\u0982\x03\x02\x02\x02\u0985\u0987\x07v\x02" +
		"\x02\u0986\u0985\x03\x02\x02\x02\u0986\u0987\x03\x02\x02\x02\u0987\u0179" +
		"\x03\x02\x02\x02\u0988\u0992\x07\x17\x02\x02\u0989\u098F\x07\x83\x02\x02" +
		"\u098A\u0990\x07\x07\x02\x02\u098B\u0990\x07\x1A\x02\x02\u098C\u0990\x07" +
		"\x1E\x02\x02\u098D\u098E\x07\x10\x02\x02\u098E\u0990\x05\u0154\xAB\x02" +
		"\u098F\u098A\x03\x02\x02\x02\u098F\u098B\x03\x02\x02\x02\u098F\u098C\x03" +
		"\x02\x02\x02\u098F\u098D\x03\x02\x02\x02\u0990\u0991\x03\x02\x02\x02\u0991" +
		"\u0993\x07\x84\x02\x02\u0992\u0989\x03\x02\x02\x02\u0992\u0993\x03\x02" +
		"\x02\x02\u0993\u017B\x03\x02\x02\x02\u0994\u0995\t\r\x02\x02\u0995\u017D" +
		"\x03\x02\x02\x02\u0996\u0997\t\x0E\x02\x02\u0997\u017F\x03\x02\x02\x02" +
		"\u0998\u099F\x05\u017E\xC0\x02\u0999\u099F\x05\u017C\xBF\x02\u099A\u099F" +
		"\x078\x02\x02\u099B\u099F\x079\x02\x02\u099C\u099F\x07:\x02\x02\u099D" +
		"\u099F\x07S\x02\x02\u099E\u0998\x03\x02\x02\x02\u099E\u0999\x03\x02\x02" +
		"\x02\u099E\u099A\x03\x02\x02\x02\u099E\u099B\x03\x02\x02\x02\u099E\u099C" +
		"\x03\x02\x02\x02\u099E\u099D\x03\x02\x02\x02\u099F\u0181\x03\x02\x02\x02" +
		"\u09A0\u09A1\x05\xA4S\x02\u09A1\u0183\x03\x02\x02\x02\u09A2\u09A3\t\x0F" +
		"\x02\x02\u09A3\u0185\x03\x02\x02\x02\u09A4\u09A5\x07m\x02\x02\u09A5\u09A6" +
		"\x06\xC4\x17\x02\u09A6\u09A7\x07m\x02\x02\u09A7\u0187\x03\x02\x02\x02" +
		"\u09A8\u09A9\x07l\x02\x02\u09A9\u09AA\x06\xC5\x18\x02\u09AA\u09AB\x07" +
		"l\x02\x02\u09AB\u0189\x03\x02\x02\x02\u015B\u018D\u0193\u01A0\u01A8\u01B0" +
		"\u01B4\u01B9\u01BC\u01C3\u01CB\u01D7\u01E3\u01E8\u01FD\u0204\u0208\u0212" +
		"\u021A\u0222\u0226\u022B\u0231\u023A\u023E\u0242\u0248\u0250\u0259\u025E" +
		"\u0261\u0270\u0274\u0277\u0280\u0286\u028A\u0290\u0296\u029B\u02A2\u02A5" +
		"\u02AE\u02B2\u02B4\u02B7\u02BD\u02BF\u02C1\u02C7\u02CB\u02CF\u02D2\u02D6" +
		"\u02D9\u02DC\u02DF\u02E3\u02E5\u02EB\u02F0\u02F7\u02FB\u02FD\u0302\u0307" +
		"\u030B\u030D\u0310\u0315\u031E\u0324\u032A\u0332\u0335\u0339\u033F\u0344" +
		"\u0347\u034B\u034F\u0354\u0358\u035C\u0365\u0369\u036E\u0372\u037D\u0381" +
		"\u0386\u038A\u0391\u0394\u0398\u03A1\u03A5\u03AA\u03AE\u03B4\u03B8\u03BE" +
		"\u03C8\u03CB\u03D4\u03DA\u03E0\u03E7\u03EC\u03F1\u03F5\u03F7\u03FA\u0400" +
		"\u0406\u040D\u0411\u0415\u041B\u0421\u0427\u042B\u042E\u0434\u043A\u0440" +
		"\u0446\u044A\u0450\u0456\u045E\u0463\u0467\u0469\u0471\u0476\u0478\u047F" +
		"\u0485\u0488\u048D\u0490\u0495\u0497\u049B\u04A8\u04AC\u04B0\u04B7\u04BC" +
		"\u04C4\u04C9\u04CE\u04D0\u04DF\u04E4\u04EB\u04F0\u04F7\u04FB\u0504\u0506" +
		"\u050C\u0514\u051D\u0523\u0526\u052A\u052D\u0531\u0537\u0541\u0545\u054C" +
		"\u0550\u0558\u0563\u0589\u0599\u05A9\u05AB\u05AD\u05B7\u05C2\u05C8\u05CE" +
		"\u05D2\u05D9\u05DC\u05DF\u05E3\u05EF\u05F3\u05F9\u0600\u0603\u060A\u0611" +
		"\u0616\u061F\u0625\u0627\u062C\u0632\u0637\u0641\u0649\u064D\u064F\u0658" +
		"\u065D\u0666\u066A\u066F\u0674\u067D\u0681\u0683\u068E\u0692\u0695\u069A" +
		"\u069D\u06A4\u06AB\u06AF\u06B4\u06BA\u06BD\u06C3\u06E3\u06E5\u06F1\u06F3" +
		"\u06FB\u06FF\u0709\u0710\u0717\u0719\u071E\u0723\u0729\u0730\u0735\u0743" +
		"\u074E\u0752\u0755\u0758\u075B\u0760\u0771\u0776\u077A\u077E\u0782\u0789" +
		"\u0790\u0792\u0795\u079C\u07A2\u07AE\u07B1\u07B4\u07B9\u07C1\u07CA\u07CE" +
		"\u07D2\u07DF\u07E2\u07E4\u07EC\u07F5\u07F9\u07FD\u0802\u0812\u0820\u0823" +
		"\u0825\u0835\u0838\u0841\u0847\u084B\u084E\u0852\u0854\u085B\u0862\u0866" +
		"\u086B\u0870\u0873\u087C\u0884\u088A\u088F\u08A0\u08A4\u08A8\u08AB\u08AE" +
		"\u08B3\u08B6\u08BB\u08C2\u08C6\u08CB\u08D2\u08DA\u08DD\u08E4\u08EA\u08F2" +
		"\u08FA\u08FE\u0901\u0909\u090C\u0916\u091B\u091F\u0925\u0929\u092D\u0934" +
		"\u093C\u0944\u0950\u0956\u095F\u0962\u0969\u096E\u0972\u0976\u097B\u0982" +
		"\u0986\u098F\u0992\u099E";
	public static readonly _serializedATN: string = Utils.join(
		[
			RustParser._serializedATNSegment0,
			RustParser._serializedATNSegment1,
			RustParser._serializedATNSegment2,
			RustParser._serializedATNSegment3,
			RustParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RustParser.__ATN) {
			RustParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RustParser._serializedATN));
		}

		return RustParser.__ATN;
	}

}

export class CrateContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RustParser.EOF, 0); }
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_crate; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterCrate) {
			listener.enterCrate(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitCrate) {
			listener.exitCrate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitCrate) {
			return visitor.visitCrate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroInvocationContext extends ParserRuleContext {
	public simplePath(): SimplePathContext {
		return this.getRuleContext(0, SimplePathContext);
	}
	public NOT(): TerminalNode { return this.getToken(RustParser.NOT, 0); }
	public delimTokenTree(): DelimTokenTreeContext {
		return this.getRuleContext(0, DelimTokenTreeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroInvocation; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroInvocation) {
			listener.enterMacroInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroInvocation) {
			listener.exitMacroInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroInvocation) {
			return visitor.visitMacroInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelimTokenTreeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.RPAREN, 0); }
	public tokenTree(): TokenTreeContext[];
	public tokenTree(i: number): TokenTreeContext;
	public tokenTree(i?: number): TokenTreeContext | TokenTreeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenTreeContext);
		} else {
			return this.getRuleContext(i, TokenTreeContext);
		}
	}
	public LSQUAREBRACKET(): TerminalNode | undefined { return this.tryGetToken(RustParser.LSQUAREBRACKET, 0); }
	public RSQUAREBRACKET(): TerminalNode | undefined { return this.tryGetToken(RustParser.RSQUAREBRACKET, 0); }
	public LCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.RCURLYBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_delimTokenTree; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterDelimTokenTree) {
			listener.enterDelimTokenTree(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitDelimTokenTree) {
			listener.exitDelimTokenTree(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitDelimTokenTree) {
			return visitor.visitDelimTokenTree(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokenTreeContext extends ParserRuleContext {
	public tokenTreeToken(): TokenTreeTokenContext[];
	public tokenTreeToken(i: number): TokenTreeTokenContext;
	public tokenTreeToken(i?: number): TokenTreeTokenContext | TokenTreeTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenTreeTokenContext);
		} else {
			return this.getRuleContext(i, TokenTreeTokenContext);
		}
	}
	public delimTokenTree(): DelimTokenTreeContext | undefined {
		return this.tryGetRuleContext(0, DelimTokenTreeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tokenTree; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTokenTree) {
			listener.enterTokenTree(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTokenTree) {
			listener.exitTokenTree(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTokenTree) {
			return visitor.visitTokenTree(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokenTreeTokenContext extends ParserRuleContext {
	public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext | undefined {
		return this.tryGetRuleContext(0, MacroIdentifierLikeTokenContext);
	}
	public macroLiteralToken(): MacroLiteralTokenContext | undefined {
		return this.tryGetRuleContext(0, MacroLiteralTokenContext);
	}
	public macroPunctuationToken(): MacroPunctuationTokenContext | undefined {
		return this.tryGetRuleContext(0, MacroPunctuationTokenContext);
	}
	public macroRepOp(): MacroRepOpContext | undefined {
		return this.tryGetRuleContext(0, MacroRepOpContext);
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOLLAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tokenTreeToken; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTokenTreeToken) {
			listener.enterTokenTreeToken(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTokenTreeToken) {
			listener.exitTokenTreeToken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTokenTreeToken) {
			return visitor.visitTokenTreeToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroInvocationSemiContext extends ParserRuleContext {
	public simplePath(): SimplePathContext {
		return this.getRuleContext(0, SimplePathContext);
	}
	public NOT(): TerminalNode { return this.getToken(RustParser.NOT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RustParser.SEMI, 0); }
	public tokenTree(): TokenTreeContext[];
	public tokenTree(i: number): TokenTreeContext;
	public tokenTree(i?: number): TokenTreeContext | TokenTreeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenTreeContext);
		} else {
			return this.getRuleContext(i, TokenTreeContext);
		}
	}
	public LSQUAREBRACKET(): TerminalNode | undefined { return this.tryGetToken(RustParser.LSQUAREBRACKET, 0); }
	public RSQUAREBRACKET(): TerminalNode | undefined { return this.tryGetToken(RustParser.RSQUAREBRACKET, 0); }
	public LCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.RCURLYBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroInvocationSemi; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroInvocationSemi) {
			listener.enterMacroInvocationSemi(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroInvocationSemi) {
			listener.exitMacroInvocationSemi(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroInvocationSemi) {
			return visitor.visitMacroInvocationSemi(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroRulesDefinitionContext extends ParserRuleContext {
	public KW_MACRORULES(): TerminalNode { return this.getToken(RustParser.KW_MACRORULES, 0); }
	public NOT(): TerminalNode { return this.getToken(RustParser.NOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public macroRulesDef(): MacroRulesDefContext {
		return this.getRuleContext(0, MacroRulesDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroRulesDefinition; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroRulesDefinition) {
			listener.enterMacroRulesDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroRulesDefinition) {
			listener.exitMacroRulesDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroRulesDefinition) {
			return visitor.visitMacroRulesDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroRulesDefContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.LPAREN, 0); }
	public macroRules(): MacroRulesContext {
		return this.getRuleContext(0, MacroRulesContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RustParser.SEMI, 0); }
	public LSQUAREBRACKET(): TerminalNode | undefined { return this.tryGetToken(RustParser.LSQUAREBRACKET, 0); }
	public RSQUAREBRACKET(): TerminalNode | undefined { return this.tryGetToken(RustParser.RSQUAREBRACKET, 0); }
	public LCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.RCURLYBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroRulesDef; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroRulesDef) {
			listener.enterMacroRulesDef(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroRulesDef) {
			listener.exitMacroRulesDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroRulesDef) {
			return visitor.visitMacroRulesDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroRulesContext extends ParserRuleContext {
	public macroRule(): MacroRuleContext[];
	public macroRule(i: number): MacroRuleContext;
	public macroRule(i?: number): MacroRuleContext | MacroRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MacroRuleContext);
		} else {
			return this.getRuleContext(i, MacroRuleContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.SEMI);
		} else {
			return this.getToken(RustParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroRules; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroRules) {
			listener.enterMacroRules(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroRules) {
			listener.exitMacroRules(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroRules) {
			return visitor.visitMacroRules(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroRuleContext extends ParserRuleContext {
	public macroMatcher(): MacroMatcherContext {
		return this.getRuleContext(0, MacroMatcherContext);
	}
	public FATARROW(): TerminalNode { return this.getToken(RustParser.FATARROW, 0); }
	public macroTranscriber(): MacroTranscriberContext {
		return this.getRuleContext(0, MacroTranscriberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroRule; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroRule) {
			listener.enterMacroRule(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroRule) {
			listener.exitMacroRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroRule) {
			return visitor.visitMacroRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroMatcherContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.RPAREN, 0); }
	public macroMatch(): MacroMatchContext[];
	public macroMatch(i: number): MacroMatchContext;
	public macroMatch(i?: number): MacroMatchContext | MacroMatchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MacroMatchContext);
		} else {
			return this.getRuleContext(i, MacroMatchContext);
		}
	}
	public LSQUAREBRACKET(): TerminalNode | undefined { return this.tryGetToken(RustParser.LSQUAREBRACKET, 0); }
	public RSQUAREBRACKET(): TerminalNode | undefined { return this.tryGetToken(RustParser.RSQUAREBRACKET, 0); }
	public LCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.RCURLYBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroMatcher; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroMatcher) {
			listener.enterMacroMatcher(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroMatcher) {
			listener.exitMacroMatcher(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroMatcher) {
			return visitor.visitMacroMatcher(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroMatchContext extends ParserRuleContext {
	public macroMatchToken(): MacroMatchTokenContext[];
	public macroMatchToken(i: number): MacroMatchTokenContext;
	public macroMatchToken(i?: number): MacroMatchTokenContext | MacroMatchTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MacroMatchTokenContext);
		} else {
			return this.getRuleContext(i, MacroMatchTokenContext);
		}
	}
	public macroMatcher(): MacroMatcherContext | undefined {
		return this.tryGetRuleContext(0, MacroMatcherContext);
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOLLAR, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public macroFragSpec(): MacroFragSpecContext | undefined {
		return this.tryGetRuleContext(0, MacroFragSpecContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_SELFVALUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SELFVALUE, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.RPAREN, 0); }
	public macroRepOp(): MacroRepOpContext | undefined {
		return this.tryGetRuleContext(0, MacroRepOpContext);
	}
	public macroMatch(): MacroMatchContext[];
	public macroMatch(i: number): MacroMatchContext;
	public macroMatch(i?: number): MacroMatchContext | MacroMatchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MacroMatchContext);
		} else {
			return this.getRuleContext(i, MacroMatchContext);
		}
	}
	public macroRepSep(): MacroRepSepContext | undefined {
		return this.tryGetRuleContext(0, MacroRepSepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroMatch; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroMatch) {
			listener.enterMacroMatch(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroMatch) {
			listener.exitMacroMatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroMatch) {
			return visitor.visitMacroMatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroMatchTokenContext extends ParserRuleContext {
	public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext | undefined {
		return this.tryGetRuleContext(0, MacroIdentifierLikeTokenContext);
	}
	public macroLiteralToken(): MacroLiteralTokenContext | undefined {
		return this.tryGetRuleContext(0, MacroLiteralTokenContext);
	}
	public macroPunctuationToken(): MacroPunctuationTokenContext | undefined {
		return this.tryGetRuleContext(0, MacroPunctuationTokenContext);
	}
	public macroRepOp(): MacroRepOpContext | undefined {
		return this.tryGetRuleContext(0, MacroRepOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroMatchToken; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroMatchToken) {
			listener.enterMacroMatchToken(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroMatchToken) {
			listener.exitMacroMatchToken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroMatchToken) {
			return visitor.visitMacroMatchToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroFragSpecContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroFragSpec; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroFragSpec) {
			listener.enterMacroFragSpec(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroFragSpec) {
			listener.exitMacroFragSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroFragSpec) {
			return visitor.visitMacroFragSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroRepSepContext extends ParserRuleContext {
	public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext | undefined {
		return this.tryGetRuleContext(0, MacroIdentifierLikeTokenContext);
	}
	public macroLiteralToken(): MacroLiteralTokenContext | undefined {
		return this.tryGetRuleContext(0, MacroLiteralTokenContext);
	}
	public macroPunctuationToken(): MacroPunctuationTokenContext | undefined {
		return this.tryGetRuleContext(0, MacroPunctuationTokenContext);
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOLLAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroRepSep; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroRepSep) {
			listener.enterMacroRepSep(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroRepSep) {
			listener.exitMacroRepSep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroRepSep) {
			return visitor.visitMacroRepSep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroRepOpContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(RustParser.STAR, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(RustParser.PLUS, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(RustParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroRepOp; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroRepOp) {
			listener.enterMacroRepOp(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroRepOp) {
			listener.exitMacroRepOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroRepOp) {
			return visitor.visitMacroRepOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroTranscriberContext extends ParserRuleContext {
	public delimTokenTree(): DelimTokenTreeContext {
		return this.getRuleContext(0, DelimTokenTreeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroTranscriber; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroTranscriber) {
			listener.enterMacroTranscriber(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroTranscriber) {
			listener.exitMacroTranscriber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroTranscriber) {
			return visitor.visitMacroTranscriber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public visItem(): VisItemContext | undefined {
		return this.tryGetRuleContext(0, VisItemContext);
	}
	public macroItem(): MacroItemContext | undefined {
		return this.tryGetRuleContext(0, MacroItemContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_item; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitItem) {
			return visitor.visitItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisItemContext extends ParserRuleContext {
	public module(): ModuleContext | undefined {
		return this.tryGetRuleContext(0, ModuleContext);
	}
	public externCrate(): ExternCrateContext | undefined {
		return this.tryGetRuleContext(0, ExternCrateContext);
	}
	public useDeclaration(): UseDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UseDeclarationContext);
	}
	public function_(): Function_Context | undefined {
		return this.tryGetRuleContext(0, Function_Context);
	}
	public typeAlias(): TypeAliasContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasContext);
	}
	public struct_(): Struct_Context | undefined {
		return this.tryGetRuleContext(0, Struct_Context);
	}
	public enumeration(): EnumerationContext | undefined {
		return this.tryGetRuleContext(0, EnumerationContext);
	}
	public union_(): Union_Context | undefined {
		return this.tryGetRuleContext(0, Union_Context);
	}
	public constantItem(): ConstantItemContext | undefined {
		return this.tryGetRuleContext(0, ConstantItemContext);
	}
	public staticItem(): StaticItemContext | undefined {
		return this.tryGetRuleContext(0, StaticItemContext);
	}
	public trait_(): Trait_Context | undefined {
		return this.tryGetRuleContext(0, Trait_Context);
	}
	public implementation(): ImplementationContext | undefined {
		return this.tryGetRuleContext(0, ImplementationContext);
	}
	public externBlock(): ExternBlockContext | undefined {
		return this.tryGetRuleContext(0, ExternBlockContext);
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_visItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterVisItem) {
			listener.enterVisItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitVisItem) {
			listener.exitVisItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitVisItem) {
			return visitor.visitVisItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroItemContext extends ParserRuleContext {
	public macroInvocationSemi(): MacroInvocationSemiContext | undefined {
		return this.tryGetRuleContext(0, MacroInvocationSemiContext);
	}
	public macroRulesDefinition(): MacroRulesDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MacroRulesDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroItem) {
			listener.enterMacroItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroItem) {
			listener.exitMacroItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroItem) {
			return visitor.visitMacroItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public KW_MOD(): TerminalNode { return this.getToken(RustParser.KW_MOD, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RustParser.SEMI, 0); }
	public LCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.RCURLYBRACE, 0); }
	public KW_UNSAFE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNSAFE, 0); }
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_module; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternCrateContext extends ParserRuleContext {
	public KW_EXTERN(): TerminalNode { return this.getToken(RustParser.KW_EXTERN, 0); }
	public KW_CRATE(): TerminalNode { return this.getToken(RustParser.KW_CRATE, 0); }
	public crateRef(): CrateRefContext {
		return this.getRuleContext(0, CrateRefContext);
	}
	public SEMI(): TerminalNode { return this.getToken(RustParser.SEMI, 0); }
	public asClause(): AsClauseContext | undefined {
		return this.tryGetRuleContext(0, AsClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_externCrate; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterExternCrate) {
			listener.enterExternCrate(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitExternCrate) {
			listener.exitExternCrate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitExternCrate) {
			return visitor.visitExternCrate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CrateRefContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_SELFVALUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SELFVALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_crateRef; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterCrateRef) {
			listener.enterCrateRef(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitCrateRef) {
			listener.exitCrateRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitCrateRef) {
			return visitor.visitCrateRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsClauseContext extends ParserRuleContext {
	public KW_AS(): TerminalNode { return this.getToken(RustParser.KW_AS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public UNDERSCORE(): TerminalNode | undefined { return this.tryGetToken(RustParser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_asClause; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterAsClause) {
			listener.enterAsClause(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitAsClause) {
			listener.exitAsClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitAsClause) {
			return visitor.visitAsClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseDeclarationContext extends ParserRuleContext {
	public KW_USE(): TerminalNode { return this.getToken(RustParser.KW_USE, 0); }
	public useTree(): UseTreeContext {
		return this.getRuleContext(0, UseTreeContext);
	}
	public SEMI(): TerminalNode { return this.getToken(RustParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_useDeclaration; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterUseDeclaration) {
			listener.enterUseDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitUseDeclaration) {
			listener.exitUseDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitUseDeclaration) {
			return visitor.visitUseDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseTreeContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(RustParser.STAR, 0); }
	public LCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.RCURLYBRACE, 0); }
	public PATHSEP(): TerminalNode | undefined { return this.tryGetToken(RustParser.PATHSEP, 0); }
	public useTree(): UseTreeContext[];
	public useTree(i: number): UseTreeContext;
	public useTree(i?: number): UseTreeContext | UseTreeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UseTreeContext);
		} else {
			return this.getRuleContext(i, UseTreeContext);
		}
	}
	public simplePath(): SimplePathContext | undefined {
		return this.tryGetRuleContext(0, SimplePathContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_AS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public UNDERSCORE(): TerminalNode | undefined { return this.tryGetToken(RustParser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_useTree; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterUseTree) {
			listener.enterUseTree(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitUseTree) {
			listener.exitUseTree(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitUseTree) {
			return visitor.visitUseTree(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_Context extends ParserRuleContext {
	public functionQualifiers(): FunctionQualifiersContext {
		return this.getRuleContext(0, FunctionQualifiersContext);
	}
	public KW_FN(): TerminalNode { return this.getToken(RustParser.KW_FN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public blockExpression(): BlockExpressionContext | undefined {
		return this.tryGetRuleContext(0, BlockExpressionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RustParser.SEMI, 0); }
	public genericParams(): GenericParamsContext | undefined {
		return this.tryGetRuleContext(0, GenericParamsContext);
	}
	public functionParameters(): FunctionParametersContext | undefined {
		return this.tryGetRuleContext(0, FunctionParametersContext);
	}
	public functionReturnType(): FunctionReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionReturnTypeContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_function_; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterFunction_) {
			listener.enterFunction_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitFunction_) {
			listener.exitFunction_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitFunction_) {
			return visitor.visitFunction_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionQualifiersContext extends ParserRuleContext {
	public KW_CONST(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_CONST, 0); }
	public KW_ASYNC(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_ASYNC, 0); }
	public KW_UNSAFE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNSAFE, 0); }
	public KW_EXTERN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_EXTERN, 0); }
	public abi(): AbiContext | undefined {
		return this.tryGetRuleContext(0, AbiContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_functionQualifiers; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterFunctionQualifiers) {
			listener.enterFunctionQualifiers(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitFunctionQualifiers) {
			listener.exitFunctionQualifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitFunctionQualifiers) {
			return visitor.visitFunctionQualifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbiContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.STRING_LITERAL, 0); }
	public RAW_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.RAW_STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_abi; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterAbi) {
			listener.enterAbi(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitAbi) {
			listener.exitAbi(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitAbi) {
			return visitor.visitAbi(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParametersContext extends ParserRuleContext {
	public selfParam(): SelfParamContext | undefined {
		return this.tryGetRuleContext(0, SelfParamContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	public functionParam(): FunctionParamContext[];
	public functionParam(i: number): FunctionParamContext;
	public functionParam(i?: number): FunctionParamContext | FunctionParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionParamContext);
		} else {
			return this.getRuleContext(i, FunctionParamContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_functionParameters; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterFunctionParameters) {
			listener.enterFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitFunctionParameters) {
			listener.exitFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitFunctionParameters) {
			return visitor.visitFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelfParamContext extends ParserRuleContext {
	public shorthandSelf(): ShorthandSelfContext | undefined {
		return this.tryGetRuleContext(0, ShorthandSelfContext);
	}
	public typedSelf(): TypedSelfContext | undefined {
		return this.tryGetRuleContext(0, TypedSelfContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_selfParam; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterSelfParam) {
			listener.enterSelfParam(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitSelfParam) {
			listener.exitSelfParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitSelfParam) {
			return visitor.visitSelfParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShorthandSelfContext extends ParserRuleContext {
	public KW_SELFVALUE(): TerminalNode { return this.getToken(RustParser.KW_SELFVALUE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(RustParser.AND, 0); }
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	public lifetime(): LifetimeContext | undefined {
		return this.tryGetRuleContext(0, LifetimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_shorthandSelf; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterShorthandSelf) {
			listener.enterShorthandSelf(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitShorthandSelf) {
			listener.exitShorthandSelf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitShorthandSelf) {
			return visitor.visitShorthandSelf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedSelfContext extends ParserRuleContext {
	public KW_SELFVALUE(): TerminalNode { return this.getToken(RustParser.KW_SELFVALUE, 0); }
	public COLON(): TerminalNode { return this.getToken(RustParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typedSelf; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypedSelf) {
			listener.enterTypedSelf(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypedSelf) {
			listener.exitTypedSelf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypedSelf) {
			return visitor.visitTypedSelf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParamContext extends ParserRuleContext {
	public functionParamPattern(): FunctionParamPatternContext | undefined {
		return this.tryGetRuleContext(0, FunctionParamPatternContext);
	}
	public DOTDOTDOT(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOTDOTDOT, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_functionParam; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterFunctionParam) {
			listener.enterFunctionParam(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitFunctionParam) {
			listener.exitFunctionParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitFunctionParam) {
			return visitor.visitFunctionParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParamPatternContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public COLON(): TerminalNode { return this.getToken(RustParser.COLON, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public DOTDOTDOT(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOTDOTDOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_functionParamPattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterFunctionParamPattern) {
			listener.enterFunctionParamPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitFunctionParamPattern) {
			listener.exitFunctionParamPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitFunctionParamPattern) {
			return visitor.visitFunctionParamPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionReturnTypeContext extends ParserRuleContext {
	public RARROW(): TerminalNode { return this.getToken(RustParser.RARROW, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_functionReturnType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterFunctionReturnType) {
			listener.enterFunctionReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitFunctionReturnType) {
			listener.exitFunctionReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitFunctionReturnType) {
			return visitor.visitFunctionReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasContext extends ParserRuleContext {
	public KW_TYPE(): TerminalNode { return this.getToken(RustParser.KW_TYPE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMI(): TerminalNode { return this.getToken(RustParser.SEMI, 0); }
	public genericParams(): GenericParamsContext | undefined {
		return this.tryGetRuleContext(0, GenericParamsContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.EQ, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typeAlias; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypeAlias) {
			listener.enterTypeAlias(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypeAlias) {
			listener.exitTypeAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypeAlias) {
			return visitor.visitTypeAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_Context extends ParserRuleContext {
	public structStruct(): StructStructContext | undefined {
		return this.tryGetRuleContext(0, StructStructContext);
	}
	public tupleStruct(): TupleStructContext | undefined {
		return this.tryGetRuleContext(0, TupleStructContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_struct_; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStruct_) {
			listener.enterStruct_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStruct_) {
			listener.exitStruct_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStruct_) {
			return visitor.visitStruct_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructStructContext extends ParserRuleContext {
	public KW_STRUCT(): TerminalNode { return this.getToken(RustParser.KW_STRUCT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode | undefined { return this.tryGetToken(RustParser.RCURLYBRACE, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RustParser.SEMI, 0); }
	public genericParams(): GenericParamsContext | undefined {
		return this.tryGetRuleContext(0, GenericParamsContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public structFields(): StructFieldsContext | undefined {
		return this.tryGetRuleContext(0, StructFieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structStruct; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructStruct) {
			listener.enterStructStruct(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructStruct) {
			listener.exitStructStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructStruct) {
			return visitor.visitStructStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleStructContext extends ParserRuleContext {
	public KW_STRUCT(): TerminalNode { return this.getToken(RustParser.KW_STRUCT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(RustParser.SEMI, 0); }
	public genericParams(): GenericParamsContext | undefined {
		return this.tryGetRuleContext(0, GenericParamsContext);
	}
	public tupleFields(): TupleFieldsContext | undefined {
		return this.tryGetRuleContext(0, TupleFieldsContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tupleStruct; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleStruct) {
			listener.enterTupleStruct(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleStruct) {
			listener.exitTupleStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleStruct) {
			return visitor.visitTupleStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructFieldsContext extends ParserRuleContext {
	public structField(): StructFieldContext[];
	public structField(i: number): StructFieldContext;
	public structField(i?: number): StructFieldContext | StructFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructFieldContext);
		} else {
			return this.getRuleContext(i, StructFieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structFields; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructFields) {
			listener.enterStructFields(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructFields) {
			listener.exitStructFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructFields) {
			return visitor.visitStructFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructFieldContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(RustParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structField; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructField) {
			listener.enterStructField(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructField) {
			listener.exitStructField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructField) {
			return visitor.visitStructField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleFieldsContext extends ParserRuleContext {
	public tupleField(): TupleFieldContext[];
	public tupleField(i: number): TupleFieldContext;
	public tupleField(i?: number): TupleFieldContext | TupleFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TupleFieldContext);
		} else {
			return this.getRuleContext(i, TupleFieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tupleFields; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleFields) {
			listener.enterTupleFields(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleFields) {
			listener.exitTupleFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleFields) {
			return visitor.visitTupleFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleFieldContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tupleField; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleField) {
			listener.enterTupleField(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleField) {
			listener.exitTupleField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleField) {
			return visitor.visitTupleField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationContext extends ParserRuleContext {
	public KW_ENUM(): TerminalNode { return this.getToken(RustParser.KW_ENUM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public genericParams(): GenericParamsContext | undefined {
		return this.tryGetRuleContext(0, GenericParamsContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public enumItems(): EnumItemsContext | undefined {
		return this.tryGetRuleContext(0, EnumItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumeration; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumeration) {
			listener.enterEnumeration(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumeration) {
			listener.exitEnumeration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumeration) {
			return visitor.visitEnumeration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumItemsContext extends ParserRuleContext {
	public enumItem(): EnumItemContext[];
	public enumItem(i: number): EnumItemContext;
	public enumItem(i?: number): EnumItemContext | EnumItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumItemContext);
		} else {
			return this.getRuleContext(i, EnumItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumItems; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumItems) {
			listener.enterEnumItems(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumItems) {
			listener.exitEnumItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumItems) {
			return visitor.visitEnumItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumItemContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public enumItemTuple(): EnumItemTupleContext | undefined {
		return this.tryGetRuleContext(0, EnumItemTupleContext);
	}
	public enumItemStruct(): EnumItemStructContext | undefined {
		return this.tryGetRuleContext(0, EnumItemStructContext);
	}
	public enumItemDiscriminant(): EnumItemDiscriminantContext | undefined {
		return this.tryGetRuleContext(0, EnumItemDiscriminantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumItem) {
			listener.enterEnumItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumItem) {
			listener.exitEnumItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumItem) {
			return visitor.visitEnumItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumItemTupleContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public tupleFields(): TupleFieldsContext | undefined {
		return this.tryGetRuleContext(0, TupleFieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumItemTuple; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumItemTuple) {
			listener.enterEnumItemTuple(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumItemTuple) {
			listener.exitEnumItemTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumItemTuple) {
			return visitor.visitEnumItemTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumItemStructContext extends ParserRuleContext {
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public structFields(): StructFieldsContext | undefined {
		return this.tryGetRuleContext(0, StructFieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumItemStruct; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumItemStruct) {
			listener.enterEnumItemStruct(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumItemStruct) {
			listener.exitEnumItemStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumItemStruct) {
			return visitor.visitEnumItemStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumItemDiscriminantContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(RustParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumItemDiscriminant; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumItemDiscriminant) {
			listener.enterEnumItemDiscriminant(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumItemDiscriminant) {
			listener.exitEnumItemDiscriminant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumItemDiscriminant) {
			return visitor.visitEnumItemDiscriminant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_Context extends ParserRuleContext {
	public KW_UNION(): TerminalNode { return this.getToken(RustParser.KW_UNION, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public structFields(): StructFieldsContext {
		return this.getRuleContext(0, StructFieldsContext);
	}
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public genericParams(): GenericParamsContext | undefined {
		return this.tryGetRuleContext(0, GenericParamsContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_union_; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterUnion_) {
			listener.enterUnion_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitUnion_) {
			listener.exitUnion_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitUnion_) {
			return visitor.visitUnion_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantItemContext extends ParserRuleContext {
	public KW_CONST(): TerminalNode { return this.getToken(RustParser.KW_CONST, 0); }
	public COLON(): TerminalNode { return this.getToken(RustParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public SEMI(): TerminalNode { return this.getToken(RustParser.SEMI, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public UNDERSCORE(): TerminalNode | undefined { return this.tryGetToken(RustParser.UNDERSCORE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_constantItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterConstantItem) {
			listener.enterConstantItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitConstantItem) {
			listener.exitConstantItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitConstantItem) {
			return visitor.visitConstantItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticItemContext extends ParserRuleContext {
	public KW_STATIC(): TerminalNode { return this.getToken(RustParser.KW_STATIC, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(RustParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public SEMI(): TerminalNode { return this.getToken(RustParser.SEMI, 0); }
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_staticItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStaticItem) {
			listener.enterStaticItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStaticItem) {
			listener.exitStaticItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStaticItem) {
			return visitor.visitStaticItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Trait_Context extends ParserRuleContext {
	public KW_TRAIT(): TerminalNode { return this.getToken(RustParser.KW_TRAIT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public KW_UNSAFE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNSAFE, 0); }
	public genericParams(): GenericParamsContext | undefined {
		return this.tryGetRuleContext(0, GenericParamsContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public associatedItem(): AssociatedItemContext[];
	public associatedItem(i: number): AssociatedItemContext;
	public associatedItem(i?: number): AssociatedItemContext | AssociatedItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssociatedItemContext);
		} else {
			return this.getRuleContext(i, AssociatedItemContext);
		}
	}
	public typeParamBounds(): TypeParamBoundsContext | undefined {
		return this.tryGetRuleContext(0, TypeParamBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_trait_; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTrait_) {
			listener.enterTrait_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTrait_) {
			listener.exitTrait_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTrait_) {
			return visitor.visitTrait_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementationContext extends ParserRuleContext {
	public inherentImpl(): InherentImplContext | undefined {
		return this.tryGetRuleContext(0, InherentImplContext);
	}
	public traitImpl(): TraitImplContext | undefined {
		return this.tryGetRuleContext(0, TraitImplContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_implementation; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterImplementation) {
			listener.enterImplementation(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitImplementation) {
			listener.exitImplementation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitImplementation) {
			return visitor.visitImplementation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InherentImplContext extends ParserRuleContext {
	public KW_IMPL(): TerminalNode { return this.getToken(RustParser.KW_IMPL, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public genericParams(): GenericParamsContext | undefined {
		return this.tryGetRuleContext(0, GenericParamsContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public associatedItem(): AssociatedItemContext[];
	public associatedItem(i: number): AssociatedItemContext;
	public associatedItem(i?: number): AssociatedItemContext | AssociatedItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssociatedItemContext);
		} else {
			return this.getRuleContext(i, AssociatedItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_inherentImpl; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterInherentImpl) {
			listener.enterInherentImpl(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitInherentImpl) {
			listener.exitInherentImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitInherentImpl) {
			return visitor.visitInherentImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraitImplContext extends ParserRuleContext {
	public KW_IMPL(): TerminalNode { return this.getToken(RustParser.KW_IMPL, 0); }
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	public KW_FOR(): TerminalNode { return this.getToken(RustParser.KW_FOR, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public KW_UNSAFE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNSAFE, 0); }
	public genericParams(): GenericParamsContext | undefined {
		return this.tryGetRuleContext(0, GenericParamsContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(RustParser.NOT, 0); }
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public associatedItem(): AssociatedItemContext[];
	public associatedItem(i: number): AssociatedItemContext;
	public associatedItem(i?: number): AssociatedItemContext | AssociatedItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssociatedItemContext);
		} else {
			return this.getRuleContext(i, AssociatedItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_traitImpl; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTraitImpl) {
			listener.enterTraitImpl(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTraitImpl) {
			listener.exitTraitImpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTraitImpl) {
			return visitor.visitTraitImpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternBlockContext extends ParserRuleContext {
	public KW_EXTERN(): TerminalNode { return this.getToken(RustParser.KW_EXTERN, 0); }
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public KW_UNSAFE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNSAFE, 0); }
	public abi(): AbiContext | undefined {
		return this.tryGetRuleContext(0, AbiContext);
	}
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public externalItem(): ExternalItemContext[];
	public externalItem(i: number): ExternalItemContext;
	public externalItem(i?: number): ExternalItemContext | ExternalItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExternalItemContext);
		} else {
			return this.getRuleContext(i, ExternalItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_externBlock; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterExternBlock) {
			listener.enterExternBlock(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitExternBlock) {
			listener.exitExternBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitExternBlock) {
			return visitor.visitExternBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalItemContext extends ParserRuleContext {
	public macroInvocationSemi(): MacroInvocationSemiContext | undefined {
		return this.tryGetRuleContext(0, MacroInvocationSemiContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public staticItem(): StaticItemContext | undefined {
		return this.tryGetRuleContext(0, StaticItemContext);
	}
	public function_(): Function_Context | undefined {
		return this.tryGetRuleContext(0, Function_Context);
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_externalItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterExternalItem) {
			listener.enterExternalItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitExternalItem) {
			listener.exitExternalItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitExternalItem) {
			return visitor.visitExternalItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericParamsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(RustParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(RustParser.GT, 0); }
	public genericParam(): GenericParamContext[];
	public genericParam(i: number): GenericParamContext;
	public genericParam(i?: number): GenericParamContext | GenericParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericParamContext);
		} else {
			return this.getRuleContext(i, GenericParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_genericParams; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGenericParams) {
			listener.enterGenericParams(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGenericParams) {
			listener.exitGenericParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGenericParams) {
			return visitor.visitGenericParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericParamContext extends ParserRuleContext {
	public lifetimeParam(): LifetimeParamContext | undefined {
		return this.tryGetRuleContext(0, LifetimeParamContext);
	}
	public typeParam(): TypeParamContext | undefined {
		return this.tryGetRuleContext(0, TypeParamContext);
	}
	public constParam(): ConstParamContext | undefined {
		return this.tryGetRuleContext(0, ConstParamContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_genericParam; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGenericParam) {
			listener.enterGenericParam(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGenericParam) {
			listener.exitGenericParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGenericParam) {
			return visitor.visitGenericParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LifetimeParamContext extends ParserRuleContext {
	public LIFETIME_OR_LABEL(): TerminalNode { return this.getToken(RustParser.LIFETIME_OR_LABEL, 0); }
	public outerAttribute(): OuterAttributeContext | undefined {
		return this.tryGetRuleContext(0, OuterAttributeContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public lifetimeBounds(): LifetimeBoundsContext | undefined {
		return this.tryGetRuleContext(0, LifetimeBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_lifetimeParam; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLifetimeParam) {
			listener.enterLifetimeParam(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLifetimeParam) {
			listener.exitLifetimeParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLifetimeParam) {
			return visitor.visitLifetimeParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParamContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public outerAttribute(): OuterAttributeContext | undefined {
		return this.tryGetRuleContext(0, OuterAttributeContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.EQ, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public typeParamBounds(): TypeParamBoundsContext | undefined {
		return this.tryGetRuleContext(0, TypeParamBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typeParam; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypeParam) {
			listener.enterTypeParam(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypeParam) {
			listener.exitTypeParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypeParam) {
			return visitor.visitTypeParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstParamContext extends ParserRuleContext {
	public KW_CONST(): TerminalNode { return this.getToken(RustParser.KW_CONST, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(RustParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_constParam; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterConstParam) {
			listener.enterConstParam(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitConstParam) {
			listener.exitConstParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitConstParam) {
			return visitor.visitConstParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	public KW_WHERE(): TerminalNode { return this.getToken(RustParser.KW_WHERE, 0); }
	public whereClauseItem(): WhereClauseItemContext[];
	public whereClauseItem(i: number): WhereClauseItemContext;
	public whereClauseItem(i?: number): WhereClauseItemContext | WhereClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhereClauseItemContext);
		} else {
			return this.getRuleContext(i, WhereClauseItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_whereClause; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitWhereClause) {
			listener.exitWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseItemContext extends ParserRuleContext {
	public lifetimeWhereClauseItem(): LifetimeWhereClauseItemContext | undefined {
		return this.tryGetRuleContext(0, LifetimeWhereClauseItemContext);
	}
	public typeBoundWhereClauseItem(): TypeBoundWhereClauseItemContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundWhereClauseItemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_whereClauseItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterWhereClauseItem) {
			listener.enterWhereClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitWhereClauseItem) {
			listener.exitWhereClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitWhereClauseItem) {
			return visitor.visitWhereClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LifetimeWhereClauseItemContext extends ParserRuleContext {
	public lifetime(): LifetimeContext {
		return this.getRuleContext(0, LifetimeContext);
	}
	public COLON(): TerminalNode { return this.getToken(RustParser.COLON, 0); }
	public lifetimeBounds(): LifetimeBoundsContext {
		return this.getRuleContext(0, LifetimeBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_lifetimeWhereClauseItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLifetimeWhereClauseItem) {
			listener.enterLifetimeWhereClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLifetimeWhereClauseItem) {
			listener.exitLifetimeWhereClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLifetimeWhereClauseItem) {
			return visitor.visitLifetimeWhereClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundWhereClauseItemContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public COLON(): TerminalNode { return this.getToken(RustParser.COLON, 0); }
	public forLifetimes(): ForLifetimesContext | undefined {
		return this.tryGetRuleContext(0, ForLifetimesContext);
	}
	public typeParamBounds(): TypeParamBoundsContext | undefined {
		return this.tryGetRuleContext(0, TypeParamBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typeBoundWhereClauseItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypeBoundWhereClauseItem) {
			listener.enterTypeBoundWhereClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypeBoundWhereClauseItem) {
			listener.exitTypeBoundWhereClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypeBoundWhereClauseItem) {
			return visitor.visitTypeBoundWhereClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForLifetimesContext extends ParserRuleContext {
	public KW_FOR(): TerminalNode { return this.getToken(RustParser.KW_FOR, 0); }
	public genericParams(): GenericParamsContext {
		return this.getRuleContext(0, GenericParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_forLifetimes; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterForLifetimes) {
			listener.enterForLifetimes(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitForLifetimes) {
			listener.exitForLifetimes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitForLifetimes) {
			return visitor.visitForLifetimes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssociatedItemContext extends ParserRuleContext {
	public macroInvocationSemi(): MacroInvocationSemiContext | undefined {
		return this.tryGetRuleContext(0, MacroInvocationSemiContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public typeAlias(): TypeAliasContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasContext);
	}
	public constantItem(): ConstantItemContext | undefined {
		return this.tryGetRuleContext(0, ConstantItemContext);
	}
	public function_(): Function_Context | undefined {
		return this.tryGetRuleContext(0, Function_Context);
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_associatedItem; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterAssociatedItem) {
			listener.enterAssociatedItem(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitAssociatedItem) {
			listener.exitAssociatedItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitAssociatedItem) {
			return visitor.visitAssociatedItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerAttributeContext extends ParserRuleContext {
	public POUND(): TerminalNode { return this.getToken(RustParser.POUND, 0); }
	public NOT(): TerminalNode { return this.getToken(RustParser.NOT, 0); }
	public LSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.LSQUAREBRACKET, 0); }
	public attr(): AttrContext {
		return this.getRuleContext(0, AttrContext);
	}
	public RSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.RSQUAREBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_innerAttribute; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterInnerAttribute) {
			listener.enterInnerAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitInnerAttribute) {
			listener.exitInnerAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitInnerAttribute) {
			return visitor.visitInnerAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OuterAttributeContext extends ParserRuleContext {
	public POUND(): TerminalNode { return this.getToken(RustParser.POUND, 0); }
	public LSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.LSQUAREBRACKET, 0); }
	public attr(): AttrContext {
		return this.getRuleContext(0, AttrContext);
	}
	public RSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.RSQUAREBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_outerAttribute; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterOuterAttribute) {
			listener.enterOuterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitOuterAttribute) {
			listener.exitOuterAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitOuterAttribute) {
			return visitor.visitOuterAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrContext extends ParserRuleContext {
	public simplePath(): SimplePathContext {
		return this.getRuleContext(0, SimplePathContext);
	}
	public attrInput(): AttrInputContext | undefined {
		return this.tryGetRuleContext(0, AttrInputContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_attr; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterAttr) {
			listener.enterAttr(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitAttr) {
			listener.exitAttr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitAttr) {
			return visitor.visitAttr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrInputContext extends ParserRuleContext {
	public delimTokenTree(): DelimTokenTreeContext | undefined {
		return this.tryGetRuleContext(0, DelimTokenTreeContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.EQ, 0); }
	public literalExpression(): LiteralExpressionContext | undefined {
		return this.tryGetRuleContext(0, LiteralExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_attrInput; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterAttrInput) {
			listener.enterAttrInput(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitAttrInput) {
			listener.exitAttrInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitAttrInput) {
			return visitor.visitAttrInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RustParser.SEMI, 0); }
	public item(): ItemContext | undefined {
		return this.tryGetRuleContext(0, ItemContext);
	}
	public letStatement(): LetStatementContext | undefined {
		return this.tryGetRuleContext(0, LetStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public macroInvocationSemi(): MacroInvocationSemiContext | undefined {
		return this.tryGetRuleContext(0, MacroInvocationSemiContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_statement; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStatementContext extends ParserRuleContext {
	public KW_LET(): TerminalNode { return this.getToken(RustParser.KW_LET, 0); }
	public patternNoTopAlt(): PatternNoTopAltContext {
		return this.getRuleContext(0, PatternNoTopAltContext);
	}
	public SEMI(): TerminalNode { return this.getToken(RustParser.SEMI, 0); }
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_letStatement; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLetStatement) {
			listener.enterLetStatement(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLetStatement) {
			listener.exitLetStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLetStatement) {
			return visitor.visitLetStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RustParser.SEMI, 0); }
	public expressionWithBlock(): ExpressionWithBlockContext | undefined {
		return this.tryGetRuleContext(0, ExpressionWithBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AttributedExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterAttributedExpression) {
			listener.enterAttributedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitAttributedExpression) {
			listener.exitAttributedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitAttributedExpression) {
			return visitor.visitAttributedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpression_Context extends ExpressionContext {
	public literalExpression(): LiteralExpressionContext {
		return this.getRuleContext(0, LiteralExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLiteralExpression_) {
			listener.enterLiteralExpression_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLiteralExpression_) {
			listener.exitLiteralExpression_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression_) {
			return visitor.visitLiteralExpression_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PathExpression_Context extends ExpressionContext {
	public pathExpression(): PathExpressionContext {
		return this.getRuleContext(0, PathExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPathExpression_) {
			listener.enterPathExpression_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPathExpression_) {
			listener.exitPathExpression_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPathExpression_) {
			return visitor.visitPathExpression_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MethodCallExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(RustParser.DOT, 0); }
	public pathExprSegment(): PathExprSegmentContext {
		return this.getRuleContext(0, PathExprSegmentContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public callParams(): CallParamsContext | undefined {
		return this.tryGetRuleContext(0, CallParamsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMethodCallExpression) {
			listener.enterMethodCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMethodCallExpression) {
			listener.exitMethodCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMethodCallExpression) {
			return visitor.visitMethodCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FieldExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(RustParser.DOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterFieldExpression) {
			listener.enterFieldExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitFieldExpression) {
			listener.exitFieldExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitFieldExpression) {
			return visitor.visitFieldExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleIndexingExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(RustParser.DOT, 0); }
	public tupleIndex(): TupleIndexContext {
		return this.getRuleContext(0, TupleIndexContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleIndexingExpression) {
			listener.enterTupleIndexingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleIndexingExpression) {
			listener.exitTupleIndexingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleIndexingExpression) {
			return visitor.visitTupleIndexingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AwaitExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(RustParser.DOT, 0); }
	public KW_AWAIT(): TerminalNode { return this.getToken(RustParser.KW_AWAIT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterAwaitExpression) {
			listener.enterAwaitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitAwaitExpression) {
			listener.exitAwaitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitAwaitExpression) {
			return visitor.visitAwaitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public callParams(): CallParamsContext | undefined {
		return this.tryGetRuleContext(0, CallParamsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterCallExpression) {
			listener.enterCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitCallExpression) {
			listener.exitCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitCallExpression) {
			return visitor.visitCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.LSQUAREBRACKET, 0); }
	public RSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.RSQUAREBRACKET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterIndexExpression) {
			listener.enterIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitIndexExpression) {
			listener.exitIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitIndexExpression) {
			return visitor.visitIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ErrorPropagationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(RustParser.QUESTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterErrorPropagationExpression) {
			listener.enterErrorPropagationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitErrorPropagationExpression) {
			listener.exitErrorPropagationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitErrorPropagationExpression) {
			return visitor.visitErrorPropagationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BorrowExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(RustParser.AND, 0); }
	public ANDAND(): TerminalNode | undefined { return this.tryGetToken(RustParser.ANDAND, 0); }
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterBorrowExpression) {
			listener.enterBorrowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitBorrowExpression) {
			listener.exitBorrowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitBorrowExpression) {
			return visitor.visitBorrowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceExpressionContext extends ExpressionContext {
	public STAR(): TerminalNode { return this.getToken(RustParser.STAR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterDereferenceExpression) {
			listener.enterDereferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitDereferenceExpression) {
			listener.exitDereferenceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitDereferenceExpression) {
			return visitor.visitDereferenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(RustParser.MINUS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(RustParser.NOT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterNegationExpression) {
			listener.enterNegationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitNegationExpression) {
			listener.exitNegationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitNegationExpression) {
			return visitor.visitNegationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeCastExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(RustParser.KW_AS, 0); }
	public typeNoBounds(): TypeNoBoundsContext {
		return this.getRuleContext(0, TypeNoBoundsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypeCastExpression) {
			listener.enterTypeCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypeCastExpression) {
			listener.exitTypeCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypeCastExpression) {
			return visitor.visitTypeCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticOrLogicalExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(RustParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(RustParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(RustParser.PERCENT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(RustParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(RustParser.MINUS, 0); }
	public shl(): ShlContext | undefined {
		return this.tryGetRuleContext(0, ShlContext);
	}
	public shr(): ShrContext | undefined {
		return this.tryGetRuleContext(0, ShrContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(RustParser.AND, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(RustParser.CARET, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(RustParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterArithmeticOrLogicalExpression) {
			listener.enterArithmeticOrLogicalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitArithmeticOrLogicalExpression) {
			listener.exitArithmeticOrLogicalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitArithmeticOrLogicalExpression) {
			return visitor.visitArithmeticOrLogicalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterComparisonExpression) {
			listener.enterComparisonExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitComparisonExpression) {
			listener.exitComparisonExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitComparisonExpression) {
			return visitor.visitComparisonExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LazyBooleanExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ANDAND(): TerminalNode | undefined { return this.tryGetToken(RustParser.ANDAND, 0); }
	public OROR(): TerminalNode | undefined { return this.tryGetToken(RustParser.OROR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLazyBooleanExpression) {
			listener.enterLazyBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLazyBooleanExpression) {
			listener.exitLazyBooleanExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLazyBooleanExpression) {
			return visitor.visitLazyBooleanExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RangeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOTDOT(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOTDOT, 0); }
	public DOTDOTEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOTDOTEQ, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterRangeExpression) {
			listener.enterRangeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitRangeExpression) {
			listener.exitRangeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitRangeExpression) {
			return visitor.visitRangeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQ(): TerminalNode { return this.getToken(RustParser.EQ, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompoundAssignmentExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public compoundAssignOperator(): CompoundAssignOperatorContext {
		return this.getRuleContext(0, CompoundAssignOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterCompoundAssignmentExpression) {
			listener.enterCompoundAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitCompoundAssignmentExpression) {
			listener.exitCompoundAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitCompoundAssignmentExpression) {
			return visitor.visitCompoundAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ContinueExpressionContext extends ExpressionContext {
	public KW_CONTINUE(): TerminalNode { return this.getToken(RustParser.KW_CONTINUE, 0); }
	public LIFETIME_OR_LABEL(): TerminalNode | undefined { return this.tryGetToken(RustParser.LIFETIME_OR_LABEL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterContinueExpression) {
			listener.enterContinueExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitContinueExpression) {
			listener.exitContinueExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitContinueExpression) {
			return visitor.visitContinueExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BreakExpressionContext extends ExpressionContext {
	public KW_BREAK(): TerminalNode { return this.getToken(RustParser.KW_BREAK, 0); }
	public LIFETIME_OR_LABEL(): TerminalNode | undefined { return this.tryGetToken(RustParser.LIFETIME_OR_LABEL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterBreakExpression) {
			listener.enterBreakExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitBreakExpression) {
			listener.exitBreakExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitBreakExpression) {
			return visitor.visitBreakExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnExpressionContext extends ExpressionContext {
	public KW_RETURN(): TerminalNode { return this.getToken(RustParser.KW_RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterReturnExpression) {
			listener.enterReturnExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitReturnExpression) {
			listener.exitReturnExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitReturnExpression) {
			return visitor.visitReturnExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupedExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGroupedExpression) {
			listener.enterGroupedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGroupedExpression) {
			listener.exitGroupedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGroupedExpression) {
			return visitor.visitGroupedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public LSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.LSQUAREBRACKET, 0); }
	public RSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.RSQUAREBRACKET, 0); }
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public arrayElements(): ArrayElementsContext | undefined {
		return this.tryGetRuleContext(0, ArrayElementsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterArrayExpression) {
			listener.enterArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitArrayExpression) {
			listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public tupleElements(): TupleElementsContext | undefined {
		return this.tryGetRuleContext(0, TupleElementsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructExpression_Context extends ExpressionContext {
	public structExpression(): StructExpressionContext {
		return this.getRuleContext(0, StructExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructExpression_) {
			listener.enterStructExpression_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructExpression_) {
			listener.exitStructExpression_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructExpression_) {
			return visitor.visitStructExpression_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnumerationVariantExpression_Context extends ExpressionContext {
	public enumerationVariantExpression(): EnumerationVariantExpressionContext {
		return this.getRuleContext(0, EnumerationVariantExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumerationVariantExpression_) {
			listener.enterEnumerationVariantExpression_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumerationVariantExpression_) {
			listener.exitEnumerationVariantExpression_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumerationVariantExpression_) {
			return visitor.visitEnumerationVariantExpression_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClosureExpression_Context extends ExpressionContext {
	public closureExpression(): ClosureExpressionContext {
		return this.getRuleContext(0, ClosureExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterClosureExpression_) {
			listener.enterClosureExpression_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitClosureExpression_) {
			listener.exitClosureExpression_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitClosureExpression_) {
			return visitor.visitClosureExpression_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionWithBlock_Context extends ExpressionContext {
	public expressionWithBlock(): ExpressionWithBlockContext {
		return this.getRuleContext(0, ExpressionWithBlockContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterExpressionWithBlock_) {
			listener.enterExpressionWithBlock_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitExpressionWithBlock_) {
			listener.exitExpressionWithBlock_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitExpressionWithBlock_) {
			return visitor.visitExpressionWithBlock_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MacroInvocationAsExpressionContext extends ExpressionContext {
	public macroInvocation(): MacroInvocationContext {
		return this.getRuleContext(0, MacroInvocationContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroInvocationAsExpression) {
			listener.enterMacroInvocationAsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroInvocationAsExpression) {
			listener.exitMacroInvocationAsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroInvocationAsExpression) {
			return visitor.visitMacroInvocationAsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.EQEQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(RustParser.NE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(RustParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(RustParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(RustParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(RustParser.LE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundAssignOperatorContext extends ParserRuleContext {
	public PLUSEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.PLUSEQ, 0); }
	public MINUSEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.MINUSEQ, 0); }
	public STAREQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.STAREQ, 0); }
	public SLASHEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.SLASHEQ, 0); }
	public PERCENTEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.PERCENTEQ, 0); }
	public ANDEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.ANDEQ, 0); }
	public OREQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.OREQ, 0); }
	public CARETEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.CARETEQ, 0); }
	public SHLEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.SHLEQ, 0); }
	public SHREQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.SHREQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_compoundAssignOperator; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterCompoundAssignOperator) {
			listener.enterCompoundAssignOperator(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitCompoundAssignOperator) {
			listener.exitCompoundAssignOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitCompoundAssignOperator) {
			return visitor.visitCompoundAssignOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionWithBlockContext extends ParserRuleContext {
	public expressionWithBlock(): ExpressionWithBlockContext | undefined {
		return this.tryGetRuleContext(0, ExpressionWithBlockContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public blockExpression(): BlockExpressionContext | undefined {
		return this.tryGetRuleContext(0, BlockExpressionContext);
	}
	public asyncBlockExpression(): AsyncBlockExpressionContext | undefined {
		return this.tryGetRuleContext(0, AsyncBlockExpressionContext);
	}
	public unsafeBlockExpression(): UnsafeBlockExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnsafeBlockExpressionContext);
	}
	public loopExpression(): LoopExpressionContext | undefined {
		return this.tryGetRuleContext(0, LoopExpressionContext);
	}
	public ifExpression(): IfExpressionContext | undefined {
		return this.tryGetRuleContext(0, IfExpressionContext);
	}
	public ifLetExpression(): IfLetExpressionContext | undefined {
		return this.tryGetRuleContext(0, IfLetExpressionContext);
	}
	public matchExpression(): MatchExpressionContext | undefined {
		return this.tryGetRuleContext(0, MatchExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_expressionWithBlock; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterExpressionWithBlock) {
			listener.enterExpressionWithBlock(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitExpressionWithBlock) {
			listener.exitExpressionWithBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitExpressionWithBlock) {
			return visitor.visitExpressionWithBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralExpressionContext extends ParserRuleContext {
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.CHAR_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.STRING_LITERAL, 0); }
	public RAW_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.RAW_STRING_LITERAL, 0); }
	public BYTE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.BYTE_LITERAL, 0); }
	public BYTE_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.BYTE_STRING_LITERAL, 0); }
	public RAW_BYTE_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.RAW_BYTE_STRING_LITERAL, 0); }
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.INTEGER_LITERAL, 0); }
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.FLOAT_LITERAL, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_literalExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathExpressionContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext | undefined {
		return this.tryGetRuleContext(0, PathInExpressionContext);
	}
	public qualifiedPathInExpression(): QualifiedPathInExpressionContext | undefined {
		return this.tryGetRuleContext(0, QualifiedPathInExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_pathExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPathExpression) {
			listener.enterPathExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPathExpression) {
			listener.exitPathExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPathExpression) {
			return visitor.visitPathExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockExpressionContext extends ParserRuleContext {
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_blockExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterBlockExpression) {
			listener.enterBlockExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitBlockExpression) {
			listener.exitBlockExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitBlockExpression) {
			return visitor.visitBlockExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_statements; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsyncBlockExpressionContext extends ParserRuleContext {
	public KW_ASYNC(): TerminalNode { return this.getToken(RustParser.KW_ASYNC, 0); }
	public blockExpression(): BlockExpressionContext {
		return this.getRuleContext(0, BlockExpressionContext);
	}
	public KW_MOVE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MOVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_asyncBlockExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterAsyncBlockExpression) {
			listener.enterAsyncBlockExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitAsyncBlockExpression) {
			listener.exitAsyncBlockExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitAsyncBlockExpression) {
			return visitor.visitAsyncBlockExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsafeBlockExpressionContext extends ParserRuleContext {
	public KW_UNSAFE(): TerminalNode { return this.getToken(RustParser.KW_UNSAFE, 0); }
	public blockExpression(): BlockExpressionContext {
		return this.getRuleContext(0, BlockExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_unsafeBlockExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterUnsafeBlockExpression) {
			listener.enterUnsafeBlockExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitUnsafeBlockExpression) {
			listener.exitUnsafeBlockExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitUnsafeBlockExpression) {
			return visitor.visitUnsafeBlockExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayElementsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RustParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_arrayElements; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterArrayElements) {
			listener.enterArrayElements(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitArrayElements) {
			listener.exitArrayElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitArrayElements) {
			return visitor.visitArrayElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleElementsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tupleElements; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleElements) {
			listener.enterTupleElements(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleElements) {
			listener.exitTupleElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleElements) {
			return visitor.visitTupleElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleIndexContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(RustParser.INTEGER_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tupleIndex; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleIndex) {
			listener.enterTupleIndex(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleIndex) {
			listener.exitTupleIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleIndex) {
			return visitor.visitTupleIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructExpressionContext extends ParserRuleContext {
	public structExprStruct(): StructExprStructContext | undefined {
		return this.tryGetRuleContext(0, StructExprStructContext);
	}
	public structExprTuple(): StructExprTupleContext | undefined {
		return this.tryGetRuleContext(0, StructExprTupleContext);
	}
	public structExprUnit(): StructExprUnitContext | undefined {
		return this.tryGetRuleContext(0, StructExprUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructExpression) {
			listener.enterStructExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructExpression) {
			listener.exitStructExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructExpression) {
			return visitor.visitStructExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructExprStructContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext {
		return this.getRuleContext(0, PathInExpressionContext);
	}
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public structExprFields(): StructExprFieldsContext | undefined {
		return this.tryGetRuleContext(0, StructExprFieldsContext);
	}
	public structBase(): StructBaseContext | undefined {
		return this.tryGetRuleContext(0, StructBaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structExprStruct; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructExprStruct) {
			listener.enterStructExprStruct(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructExprStruct) {
			listener.exitStructExprStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructExprStruct) {
			return visitor.visitStructExprStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructExprFieldsContext extends ParserRuleContext {
	public structExprField(): StructExprFieldContext[];
	public structExprField(i: number): StructExprFieldContext;
	public structExprField(i?: number): StructExprFieldContext | StructExprFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructExprFieldContext);
		} else {
			return this.getRuleContext(i, StructExprFieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	public structBase(): StructBaseContext | undefined {
		return this.tryGetRuleContext(0, StructBaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structExprFields; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructExprFields) {
			listener.enterStructExprFields(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructExprFields) {
			listener.exitStructExprFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructExprFields) {
			return visitor.visitStructExprFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructExprFieldContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public tupleIndex(): TupleIndexContext | undefined {
		return this.tryGetRuleContext(0, TupleIndexContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structExprField; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructExprField) {
			listener.enterStructExprField(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructExprField) {
			listener.exitStructExprField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructExprField) {
			return visitor.visitStructExprField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructBaseContext extends ParserRuleContext {
	public DOTDOT(): TerminalNode { return this.getToken(RustParser.DOTDOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structBase; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructBase) {
			listener.enterStructBase(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructBase) {
			listener.exitStructBase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructBase) {
			return visitor.visitStructBase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructExprTupleContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext {
		return this.getRuleContext(0, PathInExpressionContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structExprTuple; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructExprTuple) {
			listener.enterStructExprTuple(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructExprTuple) {
			listener.exitStructExprTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructExprTuple) {
			return visitor.visitStructExprTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructExprUnitContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext {
		return this.getRuleContext(0, PathInExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structExprUnit; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructExprUnit) {
			listener.enterStructExprUnit(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructExprUnit) {
			listener.exitStructExprUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructExprUnit) {
			return visitor.visitStructExprUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationVariantExpressionContext extends ParserRuleContext {
	public enumExprStruct(): EnumExprStructContext | undefined {
		return this.tryGetRuleContext(0, EnumExprStructContext);
	}
	public enumExprTuple(): EnumExprTupleContext | undefined {
		return this.tryGetRuleContext(0, EnumExprTupleContext);
	}
	public enumExprFieldless(): EnumExprFieldlessContext | undefined {
		return this.tryGetRuleContext(0, EnumExprFieldlessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumerationVariantExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumerationVariantExpression) {
			listener.enterEnumerationVariantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumerationVariantExpression) {
			listener.exitEnumerationVariantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumerationVariantExpression) {
			return visitor.visitEnumerationVariantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumExprStructContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext {
		return this.getRuleContext(0, PathInExpressionContext);
	}
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public enumExprFields(): EnumExprFieldsContext | undefined {
		return this.tryGetRuleContext(0, EnumExprFieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumExprStruct; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumExprStruct) {
			listener.enterEnumExprStruct(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumExprStruct) {
			listener.exitEnumExprStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumExprStruct) {
			return visitor.visitEnumExprStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumExprFieldsContext extends ParserRuleContext {
	public enumExprField(): EnumExprFieldContext[];
	public enumExprField(i: number): EnumExprFieldContext;
	public enumExprField(i?: number): EnumExprFieldContext | EnumExprFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumExprFieldContext);
		} else {
			return this.getRuleContext(i, EnumExprFieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumExprFields; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumExprFields) {
			listener.enterEnumExprFields(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumExprFields) {
			listener.exitEnumExprFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumExprFields) {
			return visitor.visitEnumExprFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumExprFieldContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public tupleIndex(): TupleIndexContext | undefined {
		return this.tryGetRuleContext(0, TupleIndexContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumExprField; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumExprField) {
			listener.enterEnumExprField(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumExprField) {
			listener.exitEnumExprField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumExprField) {
			return visitor.visitEnumExprField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumExprTupleContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext {
		return this.getRuleContext(0, PathInExpressionContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumExprTuple; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumExprTuple) {
			listener.enterEnumExprTuple(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumExprTuple) {
			listener.exitEnumExprTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumExprTuple) {
			return visitor.visitEnumExprTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumExprFieldlessContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext {
		return this.getRuleContext(0, PathInExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_enumExprFieldless; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterEnumExprFieldless) {
			listener.enterEnumExprFieldless(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitEnumExprFieldless) {
			listener.exitEnumExprFieldless(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitEnumExprFieldless) {
			return visitor.visitEnumExprFieldless(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallParamsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_callParams; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterCallParams) {
			listener.enterCallParams(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitCallParams) {
			listener.exitCallParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitCallParams) {
			return visitor.visitCallParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureExpressionContext extends ParserRuleContext {
	public OROR(): TerminalNode | undefined { return this.tryGetToken(RustParser.OROR, 0); }
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.OR);
		} else {
			return this.getToken(RustParser.OR, i);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RARROW(): TerminalNode | undefined { return this.tryGetToken(RustParser.RARROW, 0); }
	public typeNoBounds(): TypeNoBoundsContext | undefined {
		return this.tryGetRuleContext(0, TypeNoBoundsContext);
	}
	public blockExpression(): BlockExpressionContext | undefined {
		return this.tryGetRuleContext(0, BlockExpressionContext);
	}
	public KW_MOVE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MOVE, 0); }
	public closureParameters(): ClosureParametersContext | undefined {
		return this.tryGetRuleContext(0, ClosureParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_closureExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterClosureExpression) {
			listener.enterClosureExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitClosureExpression) {
			listener.exitClosureExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitClosureExpression) {
			return visitor.visitClosureExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureParametersContext extends ParserRuleContext {
	public closureParam(): ClosureParamContext[];
	public closureParam(i: number): ClosureParamContext;
	public closureParam(i?: number): ClosureParamContext | ClosureParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClosureParamContext);
		} else {
			return this.getRuleContext(i, ClosureParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_closureParameters; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterClosureParameters) {
			listener.enterClosureParameters(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitClosureParameters) {
			listener.exitClosureParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitClosureParameters) {
			return visitor.visitClosureParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureParamContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_closureParam; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterClosureParam) {
			listener.enterClosureParam(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitClosureParam) {
			listener.exitClosureParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitClosureParam) {
			return visitor.visitClosureParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopExpressionContext extends ParserRuleContext {
	public infiniteLoopExpression(): InfiniteLoopExpressionContext | undefined {
		return this.tryGetRuleContext(0, InfiniteLoopExpressionContext);
	}
	public predicateLoopExpression(): PredicateLoopExpressionContext | undefined {
		return this.tryGetRuleContext(0, PredicateLoopExpressionContext);
	}
	public predicatePatternLoopExpression(): PredicatePatternLoopExpressionContext | undefined {
		return this.tryGetRuleContext(0, PredicatePatternLoopExpressionContext);
	}
	public iteratorLoopExpression(): IteratorLoopExpressionContext | undefined {
		return this.tryGetRuleContext(0, IteratorLoopExpressionContext);
	}
	public loopLabel(): LoopLabelContext | undefined {
		return this.tryGetRuleContext(0, LoopLabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_loopExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLoopExpression) {
			listener.enterLoopExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLoopExpression) {
			listener.exitLoopExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLoopExpression) {
			return visitor.visitLoopExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InfiniteLoopExpressionContext extends ParserRuleContext {
	public KW_LOOP(): TerminalNode { return this.getToken(RustParser.KW_LOOP, 0); }
	public blockExpression(): BlockExpressionContext {
		return this.getRuleContext(0, BlockExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_infiniteLoopExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterInfiniteLoopExpression) {
			listener.enterInfiniteLoopExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitInfiniteLoopExpression) {
			listener.exitInfiniteLoopExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitInfiniteLoopExpression) {
			return visitor.visitInfiniteLoopExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateLoopExpressionContext extends ParserRuleContext {
	public KW_WHILE(): TerminalNode { return this.getToken(RustParser.KW_WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public blockExpression(): BlockExpressionContext {
		return this.getRuleContext(0, BlockExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_predicateLoopExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPredicateLoopExpression) {
			listener.enterPredicateLoopExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPredicateLoopExpression) {
			listener.exitPredicateLoopExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPredicateLoopExpression) {
			return visitor.visitPredicateLoopExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicatePatternLoopExpressionContext extends ParserRuleContext {
	public KW_WHILE(): TerminalNode { return this.getToken(RustParser.KW_WHILE, 0); }
	public KW_LET(): TerminalNode { return this.getToken(RustParser.KW_LET, 0); }
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public EQ(): TerminalNode { return this.getToken(RustParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public blockExpression(): BlockExpressionContext {
		return this.getRuleContext(0, BlockExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_predicatePatternLoopExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPredicatePatternLoopExpression) {
			listener.enterPredicatePatternLoopExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPredicatePatternLoopExpression) {
			listener.exitPredicatePatternLoopExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPredicatePatternLoopExpression) {
			return visitor.visitPredicatePatternLoopExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IteratorLoopExpressionContext extends ParserRuleContext {
	public KW_FOR(): TerminalNode { return this.getToken(RustParser.KW_FOR, 0); }
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public KW_IN(): TerminalNode { return this.getToken(RustParser.KW_IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public blockExpression(): BlockExpressionContext {
		return this.getRuleContext(0, BlockExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_iteratorLoopExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterIteratorLoopExpression) {
			listener.enterIteratorLoopExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitIteratorLoopExpression) {
			listener.exitIteratorLoopExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitIteratorLoopExpression) {
			return visitor.visitIteratorLoopExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopLabelContext extends ParserRuleContext {
	public LIFETIME_OR_LABEL(): TerminalNode { return this.getToken(RustParser.LIFETIME_OR_LABEL, 0); }
	public COLON(): TerminalNode { return this.getToken(RustParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_loopLabel; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLoopLabel) {
			listener.enterLoopLabel(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLoopLabel) {
			listener.exitLoopLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLoopLabel) {
			return visitor.visitLoopLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExpressionContext extends ParserRuleContext {
	public KW_IF(): TerminalNode { return this.getToken(RustParser.KW_IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public blockExpression(): BlockExpressionContext[];
	public blockExpression(i: number): BlockExpressionContext;
	public blockExpression(i?: number): BlockExpressionContext | BlockExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockExpressionContext);
		} else {
			return this.getRuleContext(i, BlockExpressionContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_ELSE, 0); }
	public ifExpression(): IfExpressionContext | undefined {
		return this.tryGetRuleContext(0, IfExpressionContext);
	}
	public ifLetExpression(): IfLetExpressionContext | undefined {
		return this.tryGetRuleContext(0, IfLetExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_ifExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterIfExpression) {
			listener.enterIfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitIfExpression) {
			listener.exitIfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitIfExpression) {
			return visitor.visitIfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfLetExpressionContext extends ParserRuleContext {
	public KW_IF(): TerminalNode { return this.getToken(RustParser.KW_IF, 0); }
	public KW_LET(): TerminalNode { return this.getToken(RustParser.KW_LET, 0); }
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public EQ(): TerminalNode { return this.getToken(RustParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public blockExpression(): BlockExpressionContext[];
	public blockExpression(i: number): BlockExpressionContext;
	public blockExpression(i?: number): BlockExpressionContext | BlockExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockExpressionContext);
		} else {
			return this.getRuleContext(i, BlockExpressionContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_ELSE, 0); }
	public ifExpression(): IfExpressionContext | undefined {
		return this.tryGetRuleContext(0, IfExpressionContext);
	}
	public ifLetExpression(): IfLetExpressionContext | undefined {
		return this.tryGetRuleContext(0, IfLetExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_ifLetExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterIfLetExpression) {
			listener.enterIfLetExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitIfLetExpression) {
			listener.exitIfLetExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitIfLetExpression) {
			return visitor.visitIfLetExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchExpressionContext extends ParserRuleContext {
	public KW_MATCH(): TerminalNode { return this.getToken(RustParser.KW_MATCH, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public innerAttribute(): InnerAttributeContext[];
	public innerAttribute(i: number): InnerAttributeContext;
	public innerAttribute(i?: number): InnerAttributeContext | InnerAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerAttributeContext);
		} else {
			return this.getRuleContext(i, InnerAttributeContext);
		}
	}
	public matchArms(): MatchArmsContext | undefined {
		return this.tryGetRuleContext(0, MatchArmsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_matchExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMatchExpression) {
			listener.enterMatchExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMatchExpression) {
			listener.exitMatchExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMatchExpression) {
			return visitor.visitMatchExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchArmsContext extends ParserRuleContext {
	public matchArm(): MatchArmContext[];
	public matchArm(i: number): MatchArmContext;
	public matchArm(i?: number): MatchArmContext | MatchArmContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MatchArmContext);
		} else {
			return this.getRuleContext(i, MatchArmContext);
		}
	}
	public FATARROW(): TerminalNode[];
	public FATARROW(i: number): TerminalNode;
	public FATARROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.FATARROW);
		} else {
			return this.getToken(RustParser.FATARROW, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public matchArmExpression(): MatchArmExpressionContext[];
	public matchArmExpression(i: number): MatchArmExpressionContext;
	public matchArmExpression(i?: number): MatchArmExpressionContext | MatchArmExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MatchArmExpressionContext);
		} else {
			return this.getRuleContext(i, MatchArmExpressionContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(RustParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_matchArms; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMatchArms) {
			listener.enterMatchArms(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMatchArms) {
			listener.exitMatchArms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMatchArms) {
			return visitor.visitMatchArms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchArmExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(RustParser.COMMA, 0); }
	public expressionWithBlock(): ExpressionWithBlockContext | undefined {
		return this.tryGetRuleContext(0, ExpressionWithBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_matchArmExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMatchArmExpression) {
			listener.enterMatchArmExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMatchArmExpression) {
			listener.exitMatchArmExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMatchArmExpression) {
			return visitor.visitMatchArmExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchArmContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public matchArmGuard(): MatchArmGuardContext | undefined {
		return this.tryGetRuleContext(0, MatchArmGuardContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_matchArm; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMatchArm) {
			listener.enterMatchArm(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMatchArm) {
			listener.exitMatchArm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMatchArm) {
			return visitor.visitMatchArm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchArmGuardContext extends ParserRuleContext {
	public KW_IF(): TerminalNode { return this.getToken(RustParser.KW_IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_matchArmGuard; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMatchArmGuard) {
			listener.enterMatchArmGuard(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMatchArmGuard) {
			listener.exitMatchArmGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMatchArmGuard) {
			return visitor.visitMatchArmGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	public patternNoTopAlt(): PatternNoTopAltContext[];
	public patternNoTopAlt(i: number): PatternNoTopAltContext;
	public patternNoTopAlt(i?: number): PatternNoTopAltContext | PatternNoTopAltContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternNoTopAltContext);
		} else {
			return this.getRuleContext(i, PatternNoTopAltContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.OR);
		} else {
			return this.getToken(RustParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_pattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternNoTopAltContext extends ParserRuleContext {
	public patternWithoutRange(): PatternWithoutRangeContext | undefined {
		return this.tryGetRuleContext(0, PatternWithoutRangeContext);
	}
	public rangePattern(): RangePatternContext | undefined {
		return this.tryGetRuleContext(0, RangePatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_patternNoTopAlt; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPatternNoTopAlt) {
			listener.enterPatternNoTopAlt(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPatternNoTopAlt) {
			listener.exitPatternNoTopAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPatternNoTopAlt) {
			return visitor.visitPatternNoTopAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternWithoutRangeContext extends ParserRuleContext {
	public literalPattern(): LiteralPatternContext | undefined {
		return this.tryGetRuleContext(0, LiteralPatternContext);
	}
	public identifierPattern(): IdentifierPatternContext | undefined {
		return this.tryGetRuleContext(0, IdentifierPatternContext);
	}
	public wildcardPattern(): WildcardPatternContext | undefined {
		return this.tryGetRuleContext(0, WildcardPatternContext);
	}
	public restPattern(): RestPatternContext | undefined {
		return this.tryGetRuleContext(0, RestPatternContext);
	}
	public referencePattern(): ReferencePatternContext | undefined {
		return this.tryGetRuleContext(0, ReferencePatternContext);
	}
	public structPattern(): StructPatternContext | undefined {
		return this.tryGetRuleContext(0, StructPatternContext);
	}
	public tupleStructPattern(): TupleStructPatternContext | undefined {
		return this.tryGetRuleContext(0, TupleStructPatternContext);
	}
	public tuplePattern(): TuplePatternContext | undefined {
		return this.tryGetRuleContext(0, TuplePatternContext);
	}
	public groupedPattern(): GroupedPatternContext | undefined {
		return this.tryGetRuleContext(0, GroupedPatternContext);
	}
	public slicePattern(): SlicePatternContext | undefined {
		return this.tryGetRuleContext(0, SlicePatternContext);
	}
	public pathPattern(): PathPatternContext | undefined {
		return this.tryGetRuleContext(0, PathPatternContext);
	}
	public macroInvocation(): MacroInvocationContext | undefined {
		return this.tryGetRuleContext(0, MacroInvocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_patternWithoutRange; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPatternWithoutRange) {
			listener.enterPatternWithoutRange(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPatternWithoutRange) {
			listener.exitPatternWithoutRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPatternWithoutRange) {
			return visitor.visitPatternWithoutRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralPatternContext extends ParserRuleContext {
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_FALSE, 0); }
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.CHAR_LITERAL, 0); }
	public BYTE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.BYTE_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.STRING_LITERAL, 0); }
	public RAW_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.RAW_STRING_LITERAL, 0); }
	public BYTE_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.BYTE_STRING_LITERAL, 0); }
	public RAW_BYTE_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.RAW_BYTE_STRING_LITERAL, 0); }
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.INTEGER_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(RustParser.MINUS, 0); }
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_literalPattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLiteralPattern) {
			listener.enterLiteralPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLiteralPattern) {
			listener.exitLiteralPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLiteralPattern) {
			return visitor.visitLiteralPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierPatternContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_REF(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_REF, 0); }
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(RustParser.AT, 0); }
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_identifierPattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterIdentifierPattern) {
			listener.enterIdentifierPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitIdentifierPattern) {
			listener.exitIdentifierPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitIdentifierPattern) {
			return visitor.visitIdentifierPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardPatternContext extends ParserRuleContext {
	public UNDERSCORE(): TerminalNode { return this.getToken(RustParser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_wildcardPattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterWildcardPattern) {
			listener.enterWildcardPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitWildcardPattern) {
			listener.exitWildcardPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitWildcardPattern) {
			return visitor.visitWildcardPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RestPatternContext extends ParserRuleContext {
	public DOTDOT(): TerminalNode { return this.getToken(RustParser.DOTDOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_restPattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterRestPattern) {
			listener.enterRestPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitRestPattern) {
			listener.exitRestPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitRestPattern) {
			return visitor.visitRestPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangePatternContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_rangePattern; }
	public copyFrom(ctx: RangePatternContext): void {
		super.copyFrom(ctx);
	}
}
export class InclusiveRangePatternContext extends RangePatternContext {
	public rangePatternBound(): RangePatternBoundContext[];
	public rangePatternBound(i: number): RangePatternBoundContext;
	public rangePatternBound(i?: number): RangePatternBoundContext | RangePatternBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RangePatternBoundContext);
		} else {
			return this.getRuleContext(i, RangePatternBoundContext);
		}
	}
	public DOTDOTEQ(): TerminalNode { return this.getToken(RustParser.DOTDOTEQ, 0); }
	constructor(ctx: RangePatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterInclusiveRangePattern) {
			listener.enterInclusiveRangePattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitInclusiveRangePattern) {
			listener.exitInclusiveRangePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitInclusiveRangePattern) {
			return visitor.visitInclusiveRangePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HalfOpenRangePatternContext extends RangePatternContext {
	public rangePatternBound(): RangePatternBoundContext {
		return this.getRuleContext(0, RangePatternBoundContext);
	}
	public DOTDOT(): TerminalNode { return this.getToken(RustParser.DOTDOT, 0); }
	constructor(ctx: RangePatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterHalfOpenRangePattern) {
			listener.enterHalfOpenRangePattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitHalfOpenRangePattern) {
			listener.exitHalfOpenRangePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitHalfOpenRangePattern) {
			return visitor.visitHalfOpenRangePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObsoleteRangePatternContext extends RangePatternContext {
	public rangePatternBound(): RangePatternBoundContext[];
	public rangePatternBound(i: number): RangePatternBoundContext;
	public rangePatternBound(i?: number): RangePatternBoundContext | RangePatternBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RangePatternBoundContext);
		} else {
			return this.getRuleContext(i, RangePatternBoundContext);
		}
	}
	public DOTDOTDOT(): TerminalNode { return this.getToken(RustParser.DOTDOTDOT, 0); }
	constructor(ctx: RangePatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterObsoleteRangePattern) {
			listener.enterObsoleteRangePattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitObsoleteRangePattern) {
			listener.exitObsoleteRangePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitObsoleteRangePattern) {
			return visitor.visitObsoleteRangePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangePatternBoundContext extends ParserRuleContext {
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.CHAR_LITERAL, 0); }
	public BYTE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.BYTE_LITERAL, 0); }
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.INTEGER_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(RustParser.MINUS, 0); }
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.FLOAT_LITERAL, 0); }
	public pathPattern(): PathPatternContext | undefined {
		return this.tryGetRuleContext(0, PathPatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_rangePatternBound; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterRangePatternBound) {
			listener.enterRangePatternBound(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitRangePatternBound) {
			listener.exitRangePatternBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitRangePatternBound) {
			return visitor.visitRangePatternBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferencePatternContext extends ParserRuleContext {
	public patternWithoutRange(): PatternWithoutRangeContext {
		return this.getRuleContext(0, PatternWithoutRangeContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(RustParser.AND, 0); }
	public ANDAND(): TerminalNode | undefined { return this.tryGetToken(RustParser.ANDAND, 0); }
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_referencePattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterReferencePattern) {
			listener.enterReferencePattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitReferencePattern) {
			listener.exitReferencePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitReferencePattern) {
			return visitor.visitReferencePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructPatternContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext {
		return this.getRuleContext(0, PathInExpressionContext);
	}
	public LCURLYBRACE(): TerminalNode { return this.getToken(RustParser.LCURLYBRACE, 0); }
	public RCURLYBRACE(): TerminalNode { return this.getToken(RustParser.RCURLYBRACE, 0); }
	public structPatternElements(): StructPatternElementsContext | undefined {
		return this.tryGetRuleContext(0, StructPatternElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structPattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructPattern) {
			listener.enterStructPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructPattern) {
			listener.exitStructPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructPattern) {
			return visitor.visitStructPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructPatternElementsContext extends ParserRuleContext {
	public structPatternFields(): StructPatternFieldsContext | undefined {
		return this.tryGetRuleContext(0, StructPatternFieldsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(RustParser.COMMA, 0); }
	public structPatternEtCetera(): StructPatternEtCeteraContext | undefined {
		return this.tryGetRuleContext(0, StructPatternEtCeteraContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structPatternElements; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructPatternElements) {
			listener.enterStructPatternElements(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructPatternElements) {
			listener.exitStructPatternElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructPatternElements) {
			return visitor.visitStructPatternElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructPatternFieldsContext extends ParserRuleContext {
	public structPatternField(): StructPatternFieldContext[];
	public structPatternField(i: number): StructPatternFieldContext;
	public structPatternField(i?: number): StructPatternFieldContext | StructPatternFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructPatternFieldContext);
		} else {
			return this.getRuleContext(i, StructPatternFieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structPatternFields; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructPatternFields) {
			listener.enterStructPatternFields(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructPatternFields) {
			listener.exitStructPatternFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructPatternFields) {
			return visitor.visitStructPatternFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructPatternFieldContext extends ParserRuleContext {
	public tupleIndex(): TupleIndexContext | undefined {
		return this.tryGetRuleContext(0, TupleIndexContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public KW_REF(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_REF, 0); }
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structPatternField; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructPatternField) {
			listener.enterStructPatternField(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructPatternField) {
			listener.exitStructPatternField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructPatternField) {
			return visitor.visitStructPatternField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructPatternEtCeteraContext extends ParserRuleContext {
	public DOTDOT(): TerminalNode { return this.getToken(RustParser.DOTDOT, 0); }
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_structPatternEtCetera; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterStructPatternEtCetera) {
			listener.enterStructPatternEtCetera(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitStructPatternEtCetera) {
			listener.exitStructPatternEtCetera(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitStructPatternEtCetera) {
			return visitor.visitStructPatternEtCetera(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleStructPatternContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext {
		return this.getRuleContext(0, PathInExpressionContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public tupleStructItems(): TupleStructItemsContext | undefined {
		return this.tryGetRuleContext(0, TupleStructItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tupleStructPattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleStructPattern) {
			listener.enterTupleStructPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleStructPattern) {
			listener.exitTupleStructPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleStructPattern) {
			return visitor.visitTupleStructPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleStructItemsContext extends ParserRuleContext {
	public pattern(): PatternContext[];
	public pattern(i: number): PatternContext;
	public pattern(i?: number): PatternContext | PatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternContext);
		} else {
			return this.getRuleContext(i, PatternContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tupleStructItems; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleStructItems) {
			listener.enterTupleStructItems(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleStructItems) {
			listener.exitTupleStructItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleStructItems) {
			return visitor.visitTupleStructItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TuplePatternContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public tuplePatternItems(): TuplePatternItemsContext | undefined {
		return this.tryGetRuleContext(0, TuplePatternItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tuplePattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTuplePattern) {
			listener.enterTuplePattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTuplePattern) {
			listener.exitTuplePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTuplePattern) {
			return visitor.visitTuplePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TuplePatternItemsContext extends ParserRuleContext {
	public pattern(): PatternContext[];
	public pattern(i: number): PatternContext;
	public pattern(i?: number): PatternContext | PatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternContext);
		} else {
			return this.getRuleContext(i, PatternContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	public restPattern(): RestPatternContext | undefined {
		return this.tryGetRuleContext(0, RestPatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tuplePatternItems; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTuplePatternItems) {
			listener.enterTuplePatternItems(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTuplePatternItems) {
			listener.exitTuplePatternItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTuplePatternItems) {
			return visitor.visitTuplePatternItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupedPatternContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_groupedPattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGroupedPattern) {
			listener.enterGroupedPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGroupedPattern) {
			listener.exitGroupedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGroupedPattern) {
			return visitor.visitGroupedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SlicePatternContext extends ParserRuleContext {
	public LSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.LSQUAREBRACKET, 0); }
	public RSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.RSQUAREBRACKET, 0); }
	public slicePatternItems(): SlicePatternItemsContext | undefined {
		return this.tryGetRuleContext(0, SlicePatternItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_slicePattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterSlicePattern) {
			listener.enterSlicePattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitSlicePattern) {
			listener.exitSlicePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitSlicePattern) {
			return visitor.visitSlicePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SlicePatternItemsContext extends ParserRuleContext {
	public pattern(): PatternContext[];
	public pattern(i: number): PatternContext;
	public pattern(i?: number): PatternContext | PatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternContext);
		} else {
			return this.getRuleContext(i, PatternContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_slicePatternItems; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterSlicePatternItems) {
			listener.enterSlicePatternItems(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitSlicePatternItems) {
			listener.exitSlicePatternItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitSlicePatternItems) {
			return visitor.visitSlicePatternItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathPatternContext extends ParserRuleContext {
	public pathInExpression(): PathInExpressionContext | undefined {
		return this.tryGetRuleContext(0, PathInExpressionContext);
	}
	public qualifiedPathInExpression(): QualifiedPathInExpressionContext | undefined {
		return this.tryGetRuleContext(0, QualifiedPathInExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_pathPattern; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPathPattern) {
			listener.enterPathPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPathPattern) {
			listener.exitPathPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPathPattern) {
			return visitor.visitPathPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public typeNoBounds(): TypeNoBoundsContext | undefined {
		return this.tryGetRuleContext(0, TypeNoBoundsContext);
	}
	public implTraitType(): ImplTraitTypeContext | undefined {
		return this.tryGetRuleContext(0, ImplTraitTypeContext);
	}
	public traitObjectType(): TraitObjectTypeContext | undefined {
		return this.tryGetRuleContext(0, TraitObjectTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_type_; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNoBoundsContext extends ParserRuleContext {
	public parenthesizedType(): ParenthesizedTypeContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedTypeContext);
	}
	public implTraitTypeOneBound(): ImplTraitTypeOneBoundContext | undefined {
		return this.tryGetRuleContext(0, ImplTraitTypeOneBoundContext);
	}
	public traitObjectTypeOneBound(): TraitObjectTypeOneBoundContext | undefined {
		return this.tryGetRuleContext(0, TraitObjectTypeOneBoundContext);
	}
	public typePath(): TypePathContext | undefined {
		return this.tryGetRuleContext(0, TypePathContext);
	}
	public tupleType(): TupleTypeContext | undefined {
		return this.tryGetRuleContext(0, TupleTypeContext);
	}
	public neverType(): NeverTypeContext | undefined {
		return this.tryGetRuleContext(0, NeverTypeContext);
	}
	public rawPointerType(): RawPointerTypeContext | undefined {
		return this.tryGetRuleContext(0, RawPointerTypeContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public sliceType(): SliceTypeContext | undefined {
		return this.tryGetRuleContext(0, SliceTypeContext);
	}
	public inferredType(): InferredTypeContext | undefined {
		return this.tryGetRuleContext(0, InferredTypeContext);
	}
	public qualifiedPathInType(): QualifiedPathInTypeContext | undefined {
		return this.tryGetRuleContext(0, QualifiedPathInTypeContext);
	}
	public bareFunctionType(): BareFunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, BareFunctionTypeContext);
	}
	public macroInvocation(): MacroInvocationContext | undefined {
		return this.tryGetRuleContext(0, MacroInvocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typeNoBounds; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypeNoBounds) {
			listener.enterTypeNoBounds(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypeNoBounds) {
			listener.exitTypeNoBounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypeNoBounds) {
			return visitor.visitTypeNoBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenthesizedTypeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_parenthesizedType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterParenthesizedType) {
			listener.enterParenthesizedType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitParenthesizedType) {
			listener.exitParenthesizedType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedType) {
			return visitor.visitParenthesizedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NeverTypeContext extends ParserRuleContext {
	public NOT(): TerminalNode { return this.getToken(RustParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_neverType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterNeverType) {
			listener.enterNeverType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitNeverType) {
			listener.exitNeverType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitNeverType) {
			return visitor.visitNeverType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleTypeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_tupleType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTupleType) {
			listener.enterTupleType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTupleType) {
			listener.exitTupleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTupleType) {
			return visitor.visitTupleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public LSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.LSQUAREBRACKET, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public SEMI(): TerminalNode { return this.getToken(RustParser.SEMI, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.RSQUAREBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceTypeContext extends ParserRuleContext {
	public LSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.LSQUAREBRACKET, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public RSQUAREBRACKET(): TerminalNode { return this.getToken(RustParser.RSQUAREBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_sliceType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterSliceType) {
			listener.enterSliceType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitSliceType) {
			listener.exitSliceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitSliceType) {
			return visitor.visitSliceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceTypeContext extends ParserRuleContext {
	public AND(): TerminalNode { return this.getToken(RustParser.AND, 0); }
	public typeNoBounds(): TypeNoBoundsContext {
		return this.getRuleContext(0, TypeNoBoundsContext);
	}
	public lifetime(): LifetimeContext | undefined {
		return this.tryGetRuleContext(0, LifetimeContext);
	}
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_referenceType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterReferenceType) {
			listener.enterReferenceType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitReferenceType) {
			listener.exitReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitReferenceType) {
			return visitor.visitReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RawPointerTypeContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(RustParser.STAR, 0); }
	public typeNoBounds(): TypeNoBoundsContext {
		return this.getRuleContext(0, TypeNoBoundsContext);
	}
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	public KW_CONST(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_CONST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_rawPointerType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterRawPointerType) {
			listener.enterRawPointerType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitRawPointerType) {
			listener.exitRawPointerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitRawPointerType) {
			return visitor.visitRawPointerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BareFunctionTypeContext extends ParserRuleContext {
	public functionTypeQualifiers(): FunctionTypeQualifiersContext {
		return this.getRuleContext(0, FunctionTypeQualifiersContext);
	}
	public KW_FN(): TerminalNode { return this.getToken(RustParser.KW_FN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public forLifetimes(): ForLifetimesContext | undefined {
		return this.tryGetRuleContext(0, ForLifetimesContext);
	}
	public functionParametersMaybeNamedVariadic(): FunctionParametersMaybeNamedVariadicContext | undefined {
		return this.tryGetRuleContext(0, FunctionParametersMaybeNamedVariadicContext);
	}
	public bareFunctionReturnType(): BareFunctionReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, BareFunctionReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_bareFunctionType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterBareFunctionType) {
			listener.enterBareFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitBareFunctionType) {
			listener.exitBareFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitBareFunctionType) {
			return visitor.visitBareFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeQualifiersContext extends ParserRuleContext {
	public KW_UNSAFE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNSAFE, 0); }
	public KW_EXTERN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_EXTERN, 0); }
	public abi(): AbiContext | undefined {
		return this.tryGetRuleContext(0, AbiContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_functionTypeQualifiers; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterFunctionTypeQualifiers) {
			listener.enterFunctionTypeQualifiers(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitFunctionTypeQualifiers) {
			listener.exitFunctionTypeQualifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitFunctionTypeQualifiers) {
			return visitor.visitFunctionTypeQualifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BareFunctionReturnTypeContext extends ParserRuleContext {
	public RARROW(): TerminalNode { return this.getToken(RustParser.RARROW, 0); }
	public typeNoBounds(): TypeNoBoundsContext {
		return this.getRuleContext(0, TypeNoBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_bareFunctionReturnType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterBareFunctionReturnType) {
			listener.enterBareFunctionReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitBareFunctionReturnType) {
			listener.exitBareFunctionReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitBareFunctionReturnType) {
			return visitor.visitBareFunctionReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParametersMaybeNamedVariadicContext extends ParserRuleContext {
	public maybeNamedFunctionParameters(): MaybeNamedFunctionParametersContext | undefined {
		return this.tryGetRuleContext(0, MaybeNamedFunctionParametersContext);
	}
	public maybeNamedFunctionParametersVariadic(): MaybeNamedFunctionParametersVariadicContext | undefined {
		return this.tryGetRuleContext(0, MaybeNamedFunctionParametersVariadicContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_functionParametersMaybeNamedVariadic; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterFunctionParametersMaybeNamedVariadic) {
			listener.enterFunctionParametersMaybeNamedVariadic(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitFunctionParametersMaybeNamedVariadic) {
			listener.exitFunctionParametersMaybeNamedVariadic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitFunctionParametersMaybeNamedVariadic) {
			return visitor.visitFunctionParametersMaybeNamedVariadic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MaybeNamedFunctionParametersContext extends ParserRuleContext {
	public maybeNamedParam(): MaybeNamedParamContext[];
	public maybeNamedParam(i: number): MaybeNamedParamContext;
	public maybeNamedParam(i?: number): MaybeNamedParamContext | MaybeNamedParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MaybeNamedParamContext);
		} else {
			return this.getRuleContext(i, MaybeNamedParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_maybeNamedFunctionParameters; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMaybeNamedFunctionParameters) {
			listener.enterMaybeNamedFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMaybeNamedFunctionParameters) {
			listener.exitMaybeNamedFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMaybeNamedFunctionParameters) {
			return visitor.visitMaybeNamedFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MaybeNamedParamContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public UNDERSCORE(): TerminalNode | undefined { return this.tryGetToken(RustParser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_maybeNamedParam; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMaybeNamedParam) {
			listener.enterMaybeNamedParam(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMaybeNamedParam) {
			listener.exitMaybeNamedParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMaybeNamedParam) {
			return visitor.visitMaybeNamedParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MaybeNamedFunctionParametersVariadicContext extends ParserRuleContext {
	public maybeNamedParam(): MaybeNamedParamContext[];
	public maybeNamedParam(i: number): MaybeNamedParamContext;
	public maybeNamedParam(i?: number): MaybeNamedParamContext | MaybeNamedParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MaybeNamedParamContext);
		} else {
			return this.getRuleContext(i, MaybeNamedParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	public DOTDOTDOT(): TerminalNode { return this.getToken(RustParser.DOTDOTDOT, 0); }
	public outerAttribute(): OuterAttributeContext[];
	public outerAttribute(i: number): OuterAttributeContext;
	public outerAttribute(i?: number): OuterAttributeContext | OuterAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OuterAttributeContext);
		} else {
			return this.getRuleContext(i, OuterAttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_maybeNamedFunctionParametersVariadic; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMaybeNamedFunctionParametersVariadic) {
			listener.enterMaybeNamedFunctionParametersVariadic(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMaybeNamedFunctionParametersVariadic) {
			listener.exitMaybeNamedFunctionParametersVariadic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMaybeNamedFunctionParametersVariadic) {
			return visitor.visitMaybeNamedFunctionParametersVariadic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraitObjectTypeContext extends ParserRuleContext {
	public typeParamBounds(): TypeParamBoundsContext {
		return this.getRuleContext(0, TypeParamBoundsContext);
	}
	public KW_DYN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_DYN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_traitObjectType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTraitObjectType) {
			listener.enterTraitObjectType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTraitObjectType) {
			listener.exitTraitObjectType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTraitObjectType) {
			return visitor.visitTraitObjectType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraitObjectTypeOneBoundContext extends ParserRuleContext {
	public traitBound(): TraitBoundContext {
		return this.getRuleContext(0, TraitBoundContext);
	}
	public KW_DYN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_DYN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_traitObjectTypeOneBound; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTraitObjectTypeOneBound) {
			listener.enterTraitObjectTypeOneBound(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTraitObjectTypeOneBound) {
			listener.exitTraitObjectTypeOneBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTraitObjectTypeOneBound) {
			return visitor.visitTraitObjectTypeOneBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplTraitTypeContext extends ParserRuleContext {
	public KW_IMPL(): TerminalNode { return this.getToken(RustParser.KW_IMPL, 0); }
	public typeParamBounds(): TypeParamBoundsContext {
		return this.getRuleContext(0, TypeParamBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_implTraitType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterImplTraitType) {
			listener.enterImplTraitType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitImplTraitType) {
			listener.exitImplTraitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitImplTraitType) {
			return visitor.visitImplTraitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplTraitTypeOneBoundContext extends ParserRuleContext {
	public KW_IMPL(): TerminalNode { return this.getToken(RustParser.KW_IMPL, 0); }
	public traitBound(): TraitBoundContext {
		return this.getRuleContext(0, TraitBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_implTraitTypeOneBound; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterImplTraitTypeOneBound) {
			listener.enterImplTraitTypeOneBound(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitImplTraitTypeOneBound) {
			listener.exitImplTraitTypeOneBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitImplTraitTypeOneBound) {
			return visitor.visitImplTraitTypeOneBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InferredTypeContext extends ParserRuleContext {
	public UNDERSCORE(): TerminalNode { return this.getToken(RustParser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_inferredType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterInferredType) {
			listener.enterInferredType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitInferredType) {
			listener.exitInferredType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitInferredType) {
			return visitor.visitInferredType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParamBoundsContext extends ParserRuleContext {
	public typeParamBound(): TypeParamBoundContext[];
	public typeParamBound(i: number): TypeParamBoundContext;
	public typeParamBound(i?: number): TypeParamBoundContext | TypeParamBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParamBoundContext);
		} else {
			return this.getRuleContext(i, TypeParamBoundContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.PLUS);
		} else {
			return this.getToken(RustParser.PLUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typeParamBounds; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypeParamBounds) {
			listener.enterTypeParamBounds(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypeParamBounds) {
			listener.exitTypeParamBounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypeParamBounds) {
			return visitor.visitTypeParamBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParamBoundContext extends ParserRuleContext {
	public lifetime(): LifetimeContext | undefined {
		return this.tryGetRuleContext(0, LifetimeContext);
	}
	public traitBound(): TraitBoundContext | undefined {
		return this.tryGetRuleContext(0, TraitBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typeParamBound; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypeParamBound) {
			listener.enterTypeParamBound(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypeParamBound) {
			listener.exitTypeParamBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypeParamBound) {
			return visitor.visitTypeParamBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraitBoundContext extends ParserRuleContext {
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(RustParser.QUESTION, 0); }
	public forLifetimes(): ForLifetimesContext | undefined {
		return this.tryGetRuleContext(0, ForLifetimesContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_traitBound; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTraitBound) {
			listener.enterTraitBound(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTraitBound) {
			listener.exitTraitBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTraitBound) {
			return visitor.visitTraitBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LifetimeBoundsContext extends ParserRuleContext {
	public lifetime(): LifetimeContext[];
	public lifetime(i: number): LifetimeContext;
	public lifetime(i?: number): LifetimeContext | LifetimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LifetimeContext);
		} else {
			return this.getRuleContext(i, LifetimeContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.PLUS);
		} else {
			return this.getToken(RustParser.PLUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_lifetimeBounds; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLifetimeBounds) {
			listener.enterLifetimeBounds(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLifetimeBounds) {
			listener.exitLifetimeBounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLifetimeBounds) {
			return visitor.visitLifetimeBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LifetimeContext extends ParserRuleContext {
	public LIFETIME_OR_LABEL(): TerminalNode | undefined { return this.tryGetToken(RustParser.LIFETIME_OR_LABEL, 0); }
	public KW_STATICLIFETIME(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_STATICLIFETIME, 0); }
	public KW_UNDERLINELIFETIME(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNDERLINELIFETIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_lifetime; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterLifetime) {
			listener.enterLifetime(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitLifetime) {
			listener.exitLifetime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitLifetime) {
			return visitor.visitLifetime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimplePathContext extends ParserRuleContext {
	public simplePathSegment(): SimplePathSegmentContext[];
	public simplePathSegment(i: number): SimplePathSegmentContext;
	public simplePathSegment(i?: number): SimplePathSegmentContext | SimplePathSegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimplePathSegmentContext);
		} else {
			return this.getRuleContext(i, SimplePathSegmentContext);
		}
	}
	public PATHSEP(): TerminalNode[];
	public PATHSEP(i: number): TerminalNode;
	public PATHSEP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.PATHSEP);
		} else {
			return this.getToken(RustParser.PATHSEP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_simplePath; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterSimplePath) {
			listener.enterSimplePath(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitSimplePath) {
			listener.exitSimplePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitSimplePath) {
			return visitor.visitSimplePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimplePathSegmentContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_SUPER(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SUPER, 0); }
	public KW_SELFVALUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SELFVALUE, 0); }
	public KW_CRATE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_CRATE, 0); }
	public KW_DOLLARCRATE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_DOLLARCRATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_simplePathSegment; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterSimplePathSegment) {
			listener.enterSimplePathSegment(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitSimplePathSegment) {
			listener.exitSimplePathSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitSimplePathSegment) {
			return visitor.visitSimplePathSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathInExpressionContext extends ParserRuleContext {
	public pathExprSegment(): PathExprSegmentContext[];
	public pathExprSegment(i: number): PathExprSegmentContext;
	public pathExprSegment(i?: number): PathExprSegmentContext | PathExprSegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PathExprSegmentContext);
		} else {
			return this.getRuleContext(i, PathExprSegmentContext);
		}
	}
	public PATHSEP(): TerminalNode[];
	public PATHSEP(i: number): TerminalNode;
	public PATHSEP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.PATHSEP);
		} else {
			return this.getToken(RustParser.PATHSEP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_pathInExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPathInExpression) {
			listener.enterPathInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPathInExpression) {
			listener.exitPathInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPathInExpression) {
			return visitor.visitPathInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathExprSegmentContext extends ParserRuleContext {
	public pathIdentSegment(): PathIdentSegmentContext {
		return this.getRuleContext(0, PathIdentSegmentContext);
	}
	public PATHSEP(): TerminalNode | undefined { return this.tryGetToken(RustParser.PATHSEP, 0); }
	public genericArgs(): GenericArgsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_pathExprSegment; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPathExprSegment) {
			listener.enterPathExprSegment(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPathExprSegment) {
			listener.exitPathExprSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPathExprSegment) {
			return visitor.visitPathExprSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathIdentSegmentContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_SUPER(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SUPER, 0); }
	public KW_SELFVALUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SELFVALUE, 0); }
	public KW_SELFTYPE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SELFTYPE, 0); }
	public KW_CRATE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_CRATE, 0); }
	public KW_DOLLARCRATE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_DOLLARCRATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_pathIdentSegment; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterPathIdentSegment) {
			listener.enterPathIdentSegment(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitPathIdentSegment) {
			listener.exitPathIdentSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitPathIdentSegment) {
			return visitor.visitPathIdentSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericArgsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(RustParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(RustParser.GT, 0); }
	public genericArgsLifetimes(): GenericArgsLifetimesContext | undefined {
		return this.tryGetRuleContext(0, GenericArgsLifetimesContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	public genericArgsTypes(): GenericArgsTypesContext | undefined {
		return this.tryGetRuleContext(0, GenericArgsTypesContext);
	}
	public genericArgsBindings(): GenericArgsBindingsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgsBindingsContext);
	}
	public genericArg(): GenericArgContext[];
	public genericArg(i: number): GenericArgContext;
	public genericArg(i?: number): GenericArgContext | GenericArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericArgContext);
		} else {
			return this.getRuleContext(i, GenericArgContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_genericArgs; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGenericArgs) {
			listener.enterGenericArgs(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGenericArgs) {
			listener.exitGenericArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGenericArgs) {
			return visitor.visitGenericArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericArgContext extends ParserRuleContext {
	public lifetime(): LifetimeContext | undefined {
		return this.tryGetRuleContext(0, LifetimeContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public genericArgsConst(): GenericArgsConstContext | undefined {
		return this.tryGetRuleContext(0, GenericArgsConstContext);
	}
	public genericArgsBinding(): GenericArgsBindingContext | undefined {
		return this.tryGetRuleContext(0, GenericArgsBindingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_genericArg; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGenericArg) {
			listener.enterGenericArg(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGenericArg) {
			listener.exitGenericArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGenericArg) {
			return visitor.visitGenericArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericArgsConstContext extends ParserRuleContext {
	public blockExpression(): BlockExpressionContext | undefined {
		return this.tryGetRuleContext(0, BlockExpressionContext);
	}
	public literalExpression(): LiteralExpressionContext | undefined {
		return this.tryGetRuleContext(0, LiteralExpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(RustParser.MINUS, 0); }
	public simplePathSegment(): SimplePathSegmentContext | undefined {
		return this.tryGetRuleContext(0, SimplePathSegmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_genericArgsConst; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGenericArgsConst) {
			listener.enterGenericArgsConst(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGenericArgsConst) {
			listener.exitGenericArgsConst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGenericArgsConst) {
			return visitor.visitGenericArgsConst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericArgsLifetimesContext extends ParserRuleContext {
	public lifetime(): LifetimeContext[];
	public lifetime(i: number): LifetimeContext;
	public lifetime(i?: number): LifetimeContext | LifetimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LifetimeContext);
		} else {
			return this.getRuleContext(i, LifetimeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_genericArgsLifetimes; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGenericArgsLifetimes) {
			listener.enterGenericArgsLifetimes(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGenericArgsLifetimes) {
			listener.exitGenericArgsLifetimes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGenericArgsLifetimes) {
			return visitor.visitGenericArgsLifetimes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericArgsTypesContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_genericArgsTypes; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGenericArgsTypes) {
			listener.enterGenericArgsTypes(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGenericArgsTypes) {
			listener.exitGenericArgsTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGenericArgsTypes) {
			return visitor.visitGenericArgsTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericArgsBindingsContext extends ParserRuleContext {
	public genericArgsBinding(): GenericArgsBindingContext[];
	public genericArgsBinding(i: number): GenericArgsBindingContext;
	public genericArgsBinding(i?: number): GenericArgsBindingContext | GenericArgsBindingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericArgsBindingContext);
		} else {
			return this.getRuleContext(i, GenericArgsBindingContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_genericArgsBindings; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGenericArgsBindings) {
			listener.enterGenericArgsBindings(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGenericArgsBindings) {
			listener.exitGenericArgsBindings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGenericArgsBindings) {
			return visitor.visitGenericArgsBindings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericArgsBindingContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(RustParser.EQ, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_genericArgsBinding; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterGenericArgsBinding) {
			listener.enterGenericArgsBinding(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitGenericArgsBinding) {
			listener.exitGenericArgsBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitGenericArgsBinding) {
			return visitor.visitGenericArgsBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedPathInExpressionContext extends ParserRuleContext {
	public qualifiedPathType(): QualifiedPathTypeContext {
		return this.getRuleContext(0, QualifiedPathTypeContext);
	}
	public PATHSEP(): TerminalNode[];
	public PATHSEP(i: number): TerminalNode;
	public PATHSEP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.PATHSEP);
		} else {
			return this.getToken(RustParser.PATHSEP, i);
		}
	}
	public pathExprSegment(): PathExprSegmentContext[];
	public pathExprSegment(i: number): PathExprSegmentContext;
	public pathExprSegment(i?: number): PathExprSegmentContext | PathExprSegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PathExprSegmentContext);
		} else {
			return this.getRuleContext(i, PathExprSegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_qualifiedPathInExpression; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterQualifiedPathInExpression) {
			listener.enterQualifiedPathInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitQualifiedPathInExpression) {
			listener.exitQualifiedPathInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitQualifiedPathInExpression) {
			return visitor.visitQualifiedPathInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedPathTypeContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(RustParser.LT, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public GT(): TerminalNode { return this.getToken(RustParser.GT, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_AS, 0); }
	public typePath(): TypePathContext | undefined {
		return this.tryGetRuleContext(0, TypePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_qualifiedPathType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterQualifiedPathType) {
			listener.enterQualifiedPathType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitQualifiedPathType) {
			listener.exitQualifiedPathType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitQualifiedPathType) {
			return visitor.visitQualifiedPathType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedPathInTypeContext extends ParserRuleContext {
	public qualifiedPathType(): QualifiedPathTypeContext {
		return this.getRuleContext(0, QualifiedPathTypeContext);
	}
	public PATHSEP(): TerminalNode[];
	public PATHSEP(i: number): TerminalNode;
	public PATHSEP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.PATHSEP);
		} else {
			return this.getToken(RustParser.PATHSEP, i);
		}
	}
	public typePathSegment(): TypePathSegmentContext[];
	public typePathSegment(i: number): TypePathSegmentContext;
	public typePathSegment(i?: number): TypePathSegmentContext | TypePathSegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypePathSegmentContext);
		} else {
			return this.getRuleContext(i, TypePathSegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_qualifiedPathInType; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterQualifiedPathInType) {
			listener.enterQualifiedPathInType(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitQualifiedPathInType) {
			listener.exitQualifiedPathInType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitQualifiedPathInType) {
			return visitor.visitQualifiedPathInType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePathContext extends ParserRuleContext {
	public typePathSegment(): TypePathSegmentContext[];
	public typePathSegment(i: number): TypePathSegmentContext;
	public typePathSegment(i?: number): TypePathSegmentContext | TypePathSegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypePathSegmentContext);
		} else {
			return this.getRuleContext(i, TypePathSegmentContext);
		}
	}
	public PATHSEP(): TerminalNode[];
	public PATHSEP(i: number): TerminalNode;
	public PATHSEP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.PATHSEP);
		} else {
			return this.getToken(RustParser.PATHSEP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typePath; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypePath) {
			listener.enterTypePath(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypePath) {
			listener.exitTypePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypePath) {
			return visitor.visitTypePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePathSegmentContext extends ParserRuleContext {
	public pathIdentSegment(): PathIdentSegmentContext {
		return this.getRuleContext(0, PathIdentSegmentContext);
	}
	public PATHSEP(): TerminalNode | undefined { return this.tryGetToken(RustParser.PATHSEP, 0); }
	public genericArgs(): GenericArgsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgsContext);
	}
	public typePathFn(): TypePathFnContext | undefined {
		return this.tryGetRuleContext(0, TypePathFnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typePathSegment; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypePathSegment) {
			listener.enterTypePathSegment(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypePathSegment) {
			listener.exitTypePathSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypePathSegment) {
			return visitor.visitTypePathSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePathFnContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(RustParser.RPAREN, 0); }
	public typePathInputs(): TypePathInputsContext | undefined {
		return this.tryGetRuleContext(0, TypePathInputsContext);
	}
	public RARROW(): TerminalNode | undefined { return this.tryGetToken(RustParser.RARROW, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typePathFn; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypePathFn) {
			listener.enterTypePathFn(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypePathFn) {
			listener.exitTypePathFn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypePathFn) {
			return visitor.visitTypePathFn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePathInputsContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.COMMA);
		} else {
			return this.getToken(RustParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_typePathInputs; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterTypePathInputs) {
			listener.enterTypePathInputs(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitTypePathInputs) {
			listener.exitTypePathInputs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitTypePathInputs) {
			return visitor.visitTypePathInputs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisibilityContext extends ParserRuleContext {
	public KW_PUB(): TerminalNode { return this.getToken(RustParser.KW_PUB, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(RustParser.RPAREN, 0); }
	public KW_CRATE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_CRATE, 0); }
	public KW_SELFVALUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SELFVALUE, 0); }
	public KW_SUPER(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SUPER, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_IN, 0); }
	public simplePath(): SimplePathContext | undefined {
		return this.tryGetRuleContext(0, SimplePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_visibility; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterVisibility) {
			listener.enterVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitVisibility) {
			listener.exitVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitVisibility) {
			return visitor.visitVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public NON_KEYWORD_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RustParser.NON_KEYWORD_IDENTIFIER, 0); }
	public RAW_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RustParser.RAW_IDENTIFIER, 0); }
	public KW_MACRORULES(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MACRORULES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_identifier; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_AS, 0); }
	public KW_BREAK(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_BREAK, 0); }
	public KW_CONST(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_CONST, 0); }
	public KW_CONTINUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_CONTINUE, 0); }
	public KW_CRATE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_CRATE, 0); }
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_ELSE, 0); }
	public KW_ENUM(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_ENUM, 0); }
	public KW_EXTERN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_EXTERN, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_FALSE, 0); }
	public KW_FN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_FN, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_FOR, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_IF, 0); }
	public KW_IMPL(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_IMPL, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_IN, 0); }
	public KW_LET(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_LET, 0); }
	public KW_LOOP(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_LOOP, 0); }
	public KW_MATCH(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MATCH, 0); }
	public KW_MOD(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MOD, 0); }
	public KW_MOVE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MOVE, 0); }
	public KW_MUT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MUT, 0); }
	public KW_PUB(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_PUB, 0); }
	public KW_REF(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_REF, 0); }
	public KW_RETURN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_RETURN, 0); }
	public KW_SELFVALUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SELFVALUE, 0); }
	public KW_SELFTYPE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SELFTYPE, 0); }
	public KW_STATIC(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_STATIC, 0); }
	public KW_STRUCT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_STRUCT, 0); }
	public KW_SUPER(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_SUPER, 0); }
	public KW_TRAIT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_TRAIT, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_TRUE, 0); }
	public KW_TYPE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_TYPE, 0); }
	public KW_UNSAFE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNSAFE, 0); }
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_USE, 0); }
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_WHERE, 0); }
	public KW_WHILE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_WHILE, 0); }
	public KW_ASYNC(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_ASYNC, 0); }
	public KW_AWAIT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_AWAIT, 0); }
	public KW_DYN(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_DYN, 0); }
	public KW_ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_ABSTRACT, 0); }
	public KW_BECOME(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_BECOME, 0); }
	public KW_BOX(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_BOX, 0); }
	public KW_DO(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_DO, 0); }
	public KW_FINAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_FINAL, 0); }
	public KW_MACRO(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MACRO, 0); }
	public KW_OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_OVERRIDE, 0); }
	public KW_PRIV(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_PRIV, 0); }
	public KW_TYPEOF(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_TYPEOF, 0); }
	public KW_UNSIZED(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNSIZED, 0); }
	public KW_VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_VIRTUAL, 0); }
	public KW_YIELD(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_YIELD, 0); }
	public KW_TRY(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_TRY, 0); }
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNION, 0); }
	public KW_STATICLIFETIME(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_STATICLIFETIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_keyword; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroIdentifierLikeTokenContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_MACRORULES(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_MACRORULES, 0); }
	public KW_UNDERLINELIFETIME(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_UNDERLINELIFETIME, 0); }
	public KW_DOLLARCRATE(): TerminalNode | undefined { return this.tryGetToken(RustParser.KW_DOLLARCRATE, 0); }
	public LIFETIME_OR_LABEL(): TerminalNode | undefined { return this.tryGetToken(RustParser.LIFETIME_OR_LABEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroIdentifierLikeToken; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroIdentifierLikeToken) {
			listener.enterMacroIdentifierLikeToken(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroIdentifierLikeToken) {
			listener.exitMacroIdentifierLikeToken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroIdentifierLikeToken) {
			return visitor.visitMacroIdentifierLikeToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroLiteralTokenContext extends ParserRuleContext {
	public literalExpression(): LiteralExpressionContext {
		return this.getRuleContext(0, LiteralExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroLiteralToken; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroLiteralToken) {
			listener.enterMacroLiteralToken(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroLiteralToken) {
			listener.exitMacroLiteralToken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroLiteralToken) {
			return visitor.visitMacroLiteralToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroPunctuationTokenContext extends ParserRuleContext {
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(RustParser.MINUS, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(RustParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(RustParser.PERCENT, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(RustParser.CARET, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(RustParser.NOT, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(RustParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(RustParser.OR, 0); }
	public ANDAND(): TerminalNode | undefined { return this.tryGetToken(RustParser.ANDAND, 0); }
	public OROR(): TerminalNode | undefined { return this.tryGetToken(RustParser.OROR, 0); }
	public PLUSEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.PLUSEQ, 0); }
	public MINUSEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.MINUSEQ, 0); }
	public STAREQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.STAREQ, 0); }
	public SLASHEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.SLASHEQ, 0); }
	public PERCENTEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.PERCENTEQ, 0); }
	public CARETEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.CARETEQ, 0); }
	public ANDEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.ANDEQ, 0); }
	public OREQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.OREQ, 0); }
	public SHLEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.SHLEQ, 0); }
	public SHREQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.SHREQ, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.EQ, 0); }
	public EQEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.EQEQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(RustParser.NE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(RustParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(RustParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(RustParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(RustParser.LE, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(RustParser.AT, 0); }
	public UNDERSCORE(): TerminalNode | undefined { return this.tryGetToken(RustParser.UNDERSCORE, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOT, 0); }
	public DOTDOT(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOTDOT, 0); }
	public DOTDOTDOT(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOTDOTDOT, 0); }
	public DOTDOTEQ(): TerminalNode | undefined { return this.tryGetToken(RustParser.DOTDOTEQ, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(RustParser.COMMA, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RustParser.SEMI, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(RustParser.COLON, 0); }
	public PATHSEP(): TerminalNode | undefined { return this.tryGetToken(RustParser.PATHSEP, 0); }
	public RARROW(): TerminalNode | undefined { return this.tryGetToken(RustParser.RARROW, 0); }
	public FATARROW(): TerminalNode | undefined { return this.tryGetToken(RustParser.FATARROW, 0); }
	public POUND(): TerminalNode | undefined { return this.tryGetToken(RustParser.POUND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_macroPunctuationToken; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterMacroPunctuationToken) {
			listener.enterMacroPunctuationToken(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitMacroPunctuationToken) {
			listener.exitMacroPunctuationToken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitMacroPunctuationToken) {
			return visitor.visitMacroPunctuationToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShlContext extends ParserRuleContext {
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.LT);
		} else {
			return this.getToken(RustParser.LT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_shl; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterShl) {
			listener.enterShl(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitShl) {
			listener.exitShl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitShl) {
			return visitor.visitShl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShrContext extends ParserRuleContext {
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RustParser.GT);
		} else {
			return this.getToken(RustParser.GT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RustParser.RULE_shr; }
	// @Override
	public enterRule(listener: RustParserListener): void {
		if (listener.enterShr) {
			listener.enterShr(this);
		}
	}
	// @Override
	public exitRule(listener: RustParserListener): void {
		if (listener.exitShr) {
			listener.exitShr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RustParserVisitor<Result>): Result {
		if (visitor.visitShr) {
			return visitor.visitShr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


