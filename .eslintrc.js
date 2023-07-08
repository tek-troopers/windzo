module.exports = {
	root : true,
	env  : {
		browser : true,
		es2021  : true,
		node    : true
	},
	globals : {
		$ : true
	},
	extends : [
		'eslint:recommended',
		'plugin:vue/strongly-recommended',
		'prettier'
	],
	parserOptions : {
		ecmaVersion : 12,
		sourceType  : 'module'
	},
	settings : {
		// "html/indent": "0",   // code should start at the beginning of the line (no initial indentation).
		// "html/indent": "+2",  // indentation is the <script> indentation plus two spaces.
		'html/indent' : 'tab' // indentation is one tab at the beginning of the line.
	},
	rules : {
		/**
		 *?     | 0 --> "off" - rule off
		 *todo  | 1 --> "warn" - rule warning
		 *!     | 2 --> "error" - rule error
		 **/

		'no-unused-vars'                        : process.env.NODE_ENV === 'production' ? 1 : 0,
		'no-undef'                              : process.env.NODE_ENV === 'production' ? 1 : 2,
		'sort-vars'                             : process.env.NODE_ENV === 'production' ? 1 : 2,
		'brace-style'                           : process.env.NODE_ENV === 'production' ? 1 : 2,
		'default-param-last'                    : process.env.NODE_ENV === 'production' ? 1 : 2,
		'no-empty'                              : process.env.NODE_ENV === 'production' ? 1 : 1,
		'no-console'                            : process.env.NODE_ENV === 'production' ? 1 : 0,
		'no-debugger'                           : process.env.NODE_ENV === 'production' ? 1 : 1,
		'no-unexpected-multiline'               : process.env.NODE_ENV === 'production' ? 1 : 1,
		'no-prototype-builtins'                 : process.env.NODE_ENV === 'production' ? 1 : 1,
		'no-dupe-keys'                          : process.env.NODE_ENV === 'production' ? 1 : 2,
		'vue/no-useless-template-attributes'    : process.env.NODE_ENV === 'production' ? 1 : 1,
		'vue/multi-word-component-names'        : process.env.NODE_ENV === 'production' ? 1 : 0,
		'vue/no-multiple-template-root'         : process.env.NODE_ENV === 'production' ? 0 : 0,
		'vue/no-v-html '                        : process.env.NODE_ENV === 'production' ? 1 : 0,
		'vue/no-unused-components'              : process.env.NODE_ENV === 'production' ? 1 : 1,
		'vue/order-in-components'               : process.env.NODE_ENV === 'production' ? 1 : 1,
		'vue/no-dupe-keys'                      : process.env.NODE_ENV === 'production' ? 1 : 2,
		'vue/attribute-hyphenation'             : process.env.NODE_ENV === 'production' ? 1 : 1,
		'vue/html-self-closing'                 : process.env.NODE_ENV === 'production' ? 1 : 1,
		'vue/no-use-v-if-with-v-for'            : process.env.NODE_ENV === 'production' ? 1 : 1,
		'vue/no-parsing-error'                  : process.env.NODE_ENV === 'production' ? 1 : 1,
		'vue/return-in-computed-property'       : process.env.NODE_ENV === 'production' ? 1 : 1,
		'vue/require-valid-default-prop'        : process.env.NODE_ENV === 'production' ? 1 : 1,
		'vue/component-name-in-template-casing' : [process.env.NODE_ENV === 'production' ? 0 : 1, 'kebab-case'],
		'operator-linebreak'                    : [ process.env.NODE_ENV === 'production' ? 1 : 2, 'none'],
		'multiline-ternary'                     : [ process.env.NODE_ENV === 'production' ? 1 : 2, 'never'],
		'vue/multiline-ternary'                 : [ process.env.NODE_ENV === 'production' ? 1 : 2, 'never'],
		'function-call-argument-newline'        : [ process.env.NODE_ENV === 'production' ? 1 : 1, 'never'], // No line breaks between arguments
		'quotes'                                : [process.env.NODE_ENV === 'production' ? 0 : 1, 'single'],
		'semi'                                  : [process.env.NODE_ENV === 'production' ? 0 : 1, 'always'], // Force no semicolon ending

		'comma-dangle' : [
			process.env.NODE_ENV === 'production' ? 1 : 1,
			{
				arrays    : 'only-multiline',
				objects   : 'only-multiline',
				imports   : 'only-multiline',
				exports   : 'only-multiline',
				functions : 'only-multiline'
			}
		],
		'key-spacing' : [
			process.env.NODE_ENV === 'production' ? 0 : 2,
			{
				singleLine : {
					beforeColon : true,
					afterColon  : true
				},
				multiLine : {
					beforeColon : true,
					afterColon  : true,
					align       : 'colon'
				}
			}
		],
		indent : [
			process.env.NODE_ENV === 'production' ? 0 : 1,
			'tab',
			{
				ObjectExpression         : 1,
				ArrayExpression          : 1,
				MemberExpression         : 1,
				offsetTernaryExpressions : true,
				VariableDeclarator       : 'first',
				StaticBlock              : { body : 1 },
				CallExpression           : { arguments : 'first' },
				FunctionExpression       : { parameters : 'first' },
				ignoredNodes             : ['ConditionalExpression']
			}
		],
		'vue/html-indent' : [
			process.env.NODE_ENV === 'production' ? 0 : 1,
			4,
			{
				attribute                 : 1,
				baseIndent                : 1,
				closeBracket              : 0,
				alignAttributesVertically : true,
				ignores                   : []
			}
		],
		'vue/html-closing-bracket-newline' : [
			process.env.NODE_ENV === 'production' ? 0 : 1,
			{
				singleline : 'never',
				multiline  : 'never'
			}
		],
		'vue/first-attribute-linebreak' : [
			process.env.NODE_ENV === 'production' ? 0 : 1,
			{
				singleline : 'beside',
				multiline  : 'beside'
			}
		],
		'vue/html-closing-bracket-spacing' : [
			process.env.NODE_ENV === 'production' ? 1 : 2,
			{
				startTag       : 'never',
				endTag         : 'never',
				selfClosingTag : 'always'
			}
		],
		'vue/singleline-html-element-content-newline' : [
			process.env.NODE_ENV === 'production' ? 1 : 2,
			{
				ignoreWhenNoAttributes : true,
				ignoreWhenEmpty        : true,
				ignores                : [
					'pre',
					'textarea',
					'p',
					'h1',
					'h2',
					'h3',
					'span',
					'div'
				]
			}
		],
		'no-trailing-spaces' : [
			process.env.NODE_ENV === 'production' ? 0 : 1,
			{
				skipBlankLines : true
			}
		],
		'no-multi-spaces' : [
			process.env.NODE_ENV === 'production' ? 1 : 2,
			{
				exceptions : {
					BinaryExpression   : true,
					VariableDeclarator : true,
					ImportDeclaration  : true
				}
			}
		],
		'space-unary-ops' : [
			process.env.NODE_ENV === 'production' ? 1 : 2,
			{
				words     : true,
				nonwords  : false,
				overrides : {
					new  : false,
					'++' : true
				}
			}
		],
		'function-paren-newline' : [
			process.env.NODE_ENV === 'production' ? 1 : 2,
			{
				minItems : 20
			}
		],
		'no-extra-parens' : [
			process.env.NODE_ENV === 'production' ? 1 : 2,
			'all',
			{
				ignoreJSX : 'single-line'
			}
		],
		'newline-per-chained-call' : [
			process.env.NODE_ENV === 'production' ? 1 : 2,
			{
				ignoreChainWithDepth : 2
			}
		],
		'vue/no-irregular-whitespace' : [
			process.env.NODE_ENV === 'production' ? 1 : 2,
			{
				skipStrings             : true,
				skipComments            : false,
				skipRegExps             : false,
				skipTemplates           : false,
				skipHTMLAttributeValues : false,
				skipHTMLTextContents    : false
			}
		],
		'vue/multiline-html-element-content-newline' : [
			process.env.NODE_ENV === 'production' ? 1 : 2,
			{
				ignoreWhenEmpty : true,
				allowEmptyLines : false,
				ignores         : [
					'pre',
					'textarea',
					'p',
					'h1',
					'h2',
					'h3',
					'span',
					'div'
				]
			}
		]
		// 'sort-keys' : [ process.env.NODE_ENV === 'production' ? 1 : 2, 'asc', {
		// 	'allowLineSeparatedGroups' : true,
		// 	'caseSensitive'            : true,
		// 	'natural'                  : false,
		// 	'minKeys'                  : 2
		// }]
	},
	overrides : [
		{
			files : [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env : {
				jest : true
			}
		}
	]
};