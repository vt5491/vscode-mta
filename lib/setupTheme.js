// 2016-08-16
//
/*
fetch('http://localhost:8000/setupTheme.js').then(r => r.text()).then(r => eval(r));
*/
//
document.SetupTheme = function () {
  var factory = {};

  factory.getRedTheme = function () {
    var redThemeText = `
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.comment { font-style: italic; color: rgba(231, 192, 192, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.constant { color: rgba(153, 70, 70, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.keyword { color: rgba(241, 39, 39, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.entity { color: rgba(254, 199, 88, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.storage { font-weight: bold; color: rgba(255, 98, 98, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.string { color: rgba(205, 141, 141, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.support { color: rgba(157, 243, 159, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.variable { font-style: italic; color: rgba(251, 154, 75, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.invalid { color: rgba(255, 255, 255, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.text.source {  }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.text.html.ruby.source {  }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.entity.other.inherited-class { text-decoration: underline; color: rgba(170, 85, 7, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.string.quoted.source { color: rgba(157, 243, 159, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.string.constant { color: rgba(255, 232, 98, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.string.regexp { color: rgba(255, 180, 84, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.string.variable { color: rgba(237, 239, 125, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.support.function { color: rgba(255, 180, 84, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.support.constant { color: rgba(235, 147, 154, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.declaration.sgml.html.declaration.doctype { color: rgba(115, 129, 125, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.declaration.sgml.html.declaration.doctype.entity { color: rgba(115, 129, 125, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.declaration.sgml.html.declaration.doctype.string { color: rgba(115, 129, 125, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.declaration.xml-processing { color: rgba(115, 129, 125, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.declaration.xml-processing.entity { color: rgba(115, 129, 125, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.declaration.xml-processing.string { color: rgba(115, 129, 125, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.declaration.tag { color: rgba(236, 13, 30, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.declaration.tag.entity { color: rgba(236, 13, 30, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.tag { color: rgba(236, 13, 30, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.tag.entity { color: rgba(236, 13, 30, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.selector.css.entity.name.tag { color: rgba(170, 85, 7, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.selector.css.entity.other.attribute-name.id { color: rgba(254, 199, 88, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.selector.css.entity.other.attribute-name.class { color: rgba(65, 168, 62, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.support.type.property-name.css { color: rgba(150, 221, 59, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.property-group.support.constant.property-value.css { font-style: italic; color: rgba(255, 232, 98, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.property-value.support.constant.property-value.css { font-style: italic; color: rgba(255, 232, 98, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.property-value.support.constant.named-color.css { color: rgba(255, 232, 98, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.property-value.constant { color: rgba(255, 232, 98, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.preprocessor.at-rule.keyword.control.at-rule { color: rgba(253, 98, 9, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.constructor.argument.css { color: rgba(236, 151, 153, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.diff { font-style: italic; color: rgba(248, 248, 248, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.meta.diff.header { font-style: italic; color: rgba(248, 248, 248, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.deleted { color: rgba(236, 151, 153, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.changed { color: rgba(248, 248, 248, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.inserted { color: rgba(65, 168, 62, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.quote { color: rgba(241, 39, 39, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.list { color: rgba(255, 98, 98, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.bold { color: rgba(251, 154, 75, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.italic { color: rgba(251, 154, 75, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.inline.raw { color: rgba(205, 141, 141, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.heading { color: rgba(254, 199, 88, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.markup.heading.setext { color: rgba(254, 199, 88, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .monaco-editor-background { background-color: rgba(57, 0, 0, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .glyph-margin { background-color: rgba(57, 0, 0, 1); }
    .vs-dark.vscode-theme-red-themes-red-tmTheme .monaco-workbench .monaco-editor-background { background-color: rgba(57, 0, 0, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token { color: rgba(248, 248, 248, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .focused .selected-text { background-color: rgba(117, 0, 0, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .selected-text { background-color: rgba(117, 0, 0, 0.5); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .current-line { background-color: rgba(0, 0, 0, 0.29); border:0; }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .cursor { background-color: rgba(151, 0, 0, 1); border-color: rgba(151, 0, 0, 1); color: rgba(104, 255, 255, 1); }
    .monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .token.whitespace { color: rgba(193, 0, 0, 1) }
    `;

    redThemeText += `.monaco-editor.vs-dark.vscode-theme-red-themes-red-tmTheme .lines-content .cigr { background: rgba(193, 0, 0, 1); }`;

    return redThemeText;
  };

  factory.sayHello = function () {
    console.log("setupTheme.sayHello: howdy pardner");
  }

  factory.applyTheme = function() {
    var newThemeText, newThemeClass;
    var redThemeText, redThemeClass;

    redThemeText = factory.getRedTheme();

    redThemeClass = 'vscode-theme-red-themes-red-tmTheme';
    newThemeClass = redThemeClass;

    // $.find('.contributedColorTheme')[0].textContent = redThemeText + kimbieThemeText + solarizedDarkThemeText;
    $.find('.contributedColorTheme')[0].textContent = redThemeText;

    var bodyClass = $('body').attr('class');

    var newBodyClass = bodyClass.replace(/vscode-theme.*\b/, newThemeClass);

    $('body').attr('class', newBodyClass);

    // editor div class
    var $leftEditor = $('.editor-left').find('.monaco-editor:eq(0)');
    var editorClass = $leftEditor.attr('class');
    var newEditorClass = editorClass.replace(/vscode-theme.*\b/, redThemeClass);
    $leftEditor.attr('class', newEditorClass);

    // overflow-guard.scrollable-element
    var scrollableClass = $('.editor-left').find('.overflow-guard').children('.monaco-scrollable-element').attr('class');
    var newScrollableClass = scrollableClass.replace(/vscode-theme.*\b/, newThemeClass);
    $('.editor-left').find('.overflow-guard')
    .children('.monaco-scrollable-element')
    .attr('class', newScrollableClass);
  }

  return factory;
}
