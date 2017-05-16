// ==UserScript==
// @name        User Style Inject
// @namespace   zcyzcy88
// @include     *
// @grant       none
// @run-at      document-start
// ==/UserScript==

// Thanks http://qiita.com/cyokodog@github/items/2e66410c3a61ebd8670e
Element.prototype.prependChild = function (el) {
	this.insertBefore(el, this.firstChild)
}

var x = document.createElement('style')
x.innerHTML = 'sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}fieldset{border:1.5px solid silver;margin:0 2px;padding:.35em .625em .75em}abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}body,button,input,optgroup,select,textarea{font-size:1em;font-family:sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;line-height:1.15}code,kbd,pre,samp,var{font-size:.9em;font-family:SFMono-Regular,Consolas,monospace,sans-serif!important}::selection{color:#000!important;background:#9cf!important}a::selection{color:#00c!important}'
document.head.prependChild(x)
