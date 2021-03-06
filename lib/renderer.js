var hljs = require("highlight.js")
var marked = require("marked")
var fmt = require("util").format

// Markdown Syntax Highlighting
// See https://github.com/chjj/marked/pull/418
var renderer = module.exports = new marked.Renderer();
renderer.code = function(code, language){
  return fmt(
    "<pre><code class=\"hljs %s\">%s</code></pre>",
    language,
    hljs.highlight(language, code).value
  )
};
