/*\
title: $:/core/modules/parsers/wikiparser/rules/syslink.js
type: application/javascript
module-type: wikirule

Wiki text inline rule for system tiddler links.
Can be suppressed preceding them with `~`.
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.name = "syslink";
exports.types = {inline: true};

exports.init = function(parser) {
	this.parser = parser;
	// Regexp to match
	this.matchRegExp = /~?\$:\/[a-zA-Z/.-]+/mg;
};

exports.parse = function() {
	var match = this.match[0];
	// Move past the match
	this.parser.pos = this.matchRegExp.lastIndex;
	// Create the link unless it is suppressed
	if(match.substr(0,1) === "~") {
		return [{type: "text", text: match.substr(1)}];
	} else {
		return [{
			type: "link",
			attributes: {
				to: {type: "string", value: match}
			},
			children: [{
				type: "text",
				text: match
			}]
		}];
	}
};

})();