import getWordsForHTMLParser from "../../../../src/languageProcessing/helpers/word/getWordsForHTMLParser";


const testCases = [
	{
		description: "returns an empty array for an empty string",
		text: "",
		expectedResult: [],
	},
	{
		description: "correctly tokenizes a phrase with no punctuation",
		text: "a simple phrase",
		expectedResult: [ "a", " ", "simple", " ", "phrase" ],
	},
	{
		description: "correctly tokenizes a simple sentence",
		text: "This is a simple sentence.",
		expectedResult: [ "This", " ", "is", " ", "a", " ", "simple", " ", "sentence", "." ],
	},
	{
		description: "correctly tokenizes a sentence with a comma",
		text: "This is a simple sentence, with a comma.",
		expectedResult: [ "This", " ", "is", " ", "a", " ", "simple", " ", "sentence", ",", " ", "with", " ", "a", " ", "comma", "." ],
	},
	{
		description: "correctly tokenizes a phrase with a hyphen",
		text: "a-hyphenated-phrase",
		expectedResult: [ "a-hyphenated-phrase" ],
	},
	{
		description: "correctly tokenizes a phrase with an apostrophe",
		text: "a phrase with an apostrophe's",
		expectedResult: [ "a", " ", "phrase", " ", "with", " ", "an", " ", "apostrophe's" ],
	},
	{
		description: "correctly tokenizes a phrase between quotes",
		text: "\"a phrase between quotes\"",
		expectedResult: [ "\"", "a", " ", "phrase", " ", "between", " ", "quotes", "\"" ],
	},
	{
		description: "correctly tokenizes a phrase between parentheses",
		text: "(a phrase between parentheses)",
		expectedResult: [ "(", "a", " ", "phrase", " ", "between", " ", "parentheses", ")" ],
	},
	{
		description: "correctly tokenizes a phrase that starts with a space",
		text: " a phrase that starts with a space",
		expectedResult: [ " ", "a", " ", "phrase", " ", "that", " ", "starts", " ", "with", " ", "a", " ", "space" ],
	},
	{
		description: "correctly tokenizes a phrase that ends with a space",
		text: "a phrase that ends with a space ",
		expectedResult: [ "a", " ", "phrase", " ", "that", " ", "ends", " ", "with", " ", "a", " ", "space", " " ],
	},
	{
		description: "correctly tokenizes a phrase that is separated by non-breaking spaces",
		text: "a\u00a0phrase\u00a0that\u00a0is\u00a0separated\u00a0by\u00a0non-breaking\u00a0spaces",
		expectedResult: [ "a", "\u00a0", "phrase", "\u00a0", "that", "\u00a0", "is", "\u00a0", "separated", "\u00a0", "by", "\u00a0",
			"non-breaking", "\u00a0", "spaces" ],
	},
	{
		description: "correctly tokenizes a phrase that is separated by tabs",
		text: "a\tphrase\tthat\tis\tseparated\tby\ttabs",
		expectedResult: [ "a", "\t", "phrase", "\t", "that", "\t", "is", "\t", "separated", "\t", "by", "\t", "tabs" ],
	},
	{
		description: "correctly tokenizes a shortcode",
		text: "[caption id=\"attachment_3341501\" align=\"alignnone\" width=\"300\"]",
		expectedResult: [ "[", "caption", " ", "id=\"attachment_3341501", "\"", " ", "align=\"alignnone", "\"", " ", "width=\"300", "\"", "]" ],
	},
	{
		description: "correctly tokenizes a shortcode with text",
		text: "[caption]test[/caption]",
		expectedResult: [ "[", "caption", "]", "test", "[", "/caption", "]" ],
	},
	{
		description: "doesn't match with a hashed HTML entity (in this case, '#trade;' for '™') in the beginning or the end of the word",
		text: "one trademark#trade;, and another '#trade;trademark'",
		expectedResult: [ "one", " ", "trademark#trade;", ",", " ", "and", " ", "another", " ", "'", "#trade;trademark", "'" ],
	},
];

describe.each( testCases )( "getWordsForHTMLParser", ( { description, text, expectedResult } ) => {
	it( description, () => {
		expect( getWordsForHTMLParser( text ) ).toEqual( expectedResult );
	} );
} );
