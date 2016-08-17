//2016-08-10
// based on code from:
//  http://stackoverflow.com/questions/3219758/detect-changes-in-the-dom
//
//fetch('http://localhost:8000/statusBarListener.js').then(r => r.text()).then(r => eval(r))
//
// super setup (do after doing ctrl-r from developer tools)
// and running wordcount so a status message appears.
/*
fetch('http://code.jquery.com/jquery-latest.min.js').then(r => r.text()).then(r => eval(r));
fetch('http://code.jquery.com/jquery-latest.min.js').then(r => r.text()).then(r => eval(r));

// then do a word setup so a "Words" appears in the status line
// note: can do the following as a pair
fetch('http://localhost:8000/setupTheme.js').then(r => r.text()).then(r => eval(r));
fetch('http://localhost:8000/statusBarListener.js').then(r => r.text()).then(r => eval(r));
*/


// $('#RiskPostcodeSummary span').on("change", function() {
//$.find('.statusbar-item.left.statusbar-entry:eq(1) span').on("change", function() {
// $(".statusbar-item.left.statusbar-entry:eq(1) span").on("change",
// $("body").on("change",
// $(".monaco-shell-content").on("change", // works
// $($(".statusbar-item.left.statusbar-entry").children()[1]).on("change", // no works
// $('#workbench\\.parts\\.statusbar').on('change',
//   () => {console.log('body.on("change") ->hi')});
//
// $('body').on('change','#workbench\\.parts\\.statusbar',
//   () => {console.log('document.on("change") ->hi-document')});
//
// $('body').on('change','#vt-class',
//   () => {console.log('document.on("change") hi-document2')});
// console.log("pew pew");
  // });
// find element and create an observer instance
// var target = $('#theSpan');
// var $target = $($.find('.statusbar-item.left.statusbar-entry:eq(1)')) .find('span');
// var $target = $('.statusbar-item.left.statusbar-entry:eq(1) span')
//*[@id="workbench.parts.statusbar"]/div[5]/span
// #workbench\2e parts\2e statusbar > div:nth-child(5) > span
// #workbench.parts.statusbar > div:nth-child(5) > span
// var $target = $('body');
var setupTheme = new document.SetupTheme();
// add 'vt-class' to the parent div, so we can more easily identify it
$('#workbench\\.parts\\.statusbar').addClass('vt-class');

var $target =  $('.statusbar-item.left.statusbar-entry').children();

// $target.on("change",
//   () => {console.log('$target.on("change") ->hi2')});
// $($target[1]).on("change",
//   () => {console.log('$target.on("change") ->hi3')});
// $($target[1].innerHTML).on("change",
//   () => {console.log('hi4')});
 // var observer = new WebKitMutationObserver(function(mutations) {
var observer = new MutationObserver(function(mutations) {
    //$('#log').text('input text changed: "' + target.text() + '"');
    console.log('-->mo: mutations=' + mutations + ', length=' + mutations.length);
    for( var i =0; i < mutations.length; i++) {
      console.log('mo: mutations[' + i + '].type=' + mutations[i].type
        + ', target=' + mutations[i].target );
    }
    //console.log('input text changed: "' + $target.text() + '"');
});

var observer2 = new MutationObserver(function(mutations) {
    console.log('observer2 entered');
    for( var i =0; i < mutations.length; i++) {
      console.log('observer2: mutations[' + i + '].type=' + mutations[i].type
        + ', target=' + mutations[i].target
       );

      if (mutations[i].addedNodes.length > 0) {
        for (var j=0; j < mutations[i].addedNodes.length; j++) {
          var addedNode = mutations[i].addedNodes[j];
          console.log('addedNode.innerText=' + addedNode.innerText);

          if (typeof addedNode.innerText !== 'undefined' && addedNode.innerText.match(/Word/)) {
            console.log('about to call sayHello');
            setupTheme.sayHello();
            setupTheme.applyTheme();
          }
        }
      }
    }
});

observer.observe($target[1], {
  childList: true,
  characterData: true,
  subtree: true,
  attributes: true
});

observer2.observe($('.vt-class')[0], {
  childList: true,
  characterData: true,
  subtree: true,
  attributes: true
});
/*
*/
//observer.disconnect(); - call this to stop observing
// var VT_HELPER = {
//   dummy : function () {
//     return "howdy pardner";
//   },
//
//   getActiveFileForEditor : function ($editorNode) {
//      var $tabs = $editorNode.find('.tabs-container').children();
//
//      console.log('getActiveFileForEditor: $tabs=' + $tabs);
//     //  $tabs.each(function (i,v) {
//     //    if( $(this).attr('aria-selected') === 'true' ) {
//     //       return $(this).attr('title');
//     //    }
//     //  });
//     for(var i=0; i < $tabs.length; i++) {
//       if( $($tabs[i]).attr('aria-selected') === 'true' ) {
//         return $($tabs[i]).attr('title');
//       }
//     }
//   },
//
// };
//
// end helper methods
/*
var VT_NS_observer_factory = function () {
  var factory = {};

  factory.observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
    eventListenerSupported = window.addEventListener;

    return function(obj, callback){
      if( MutationObserver ){
        // define a new observer
        var obs = new MutationObserver(function(mutations, observer){
          if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
          callback();
        });
        // have the observer observe foo for changes in children
        obs.observe( obj, { childList:true, subtree:true });
      }
      else if( eventListenerSupported ){
        obj.addEventListener('DOMNodeInserted', callback, false);
        obj.addEventListener('DOMNodeRemoved', callback, false);
      }
    }
  })();

  return factory;
}

var VT_NS_observer = new VT_NS_observer_factory();

console.log('statusBarListener: entered');
// now call the observeDOM method
VT_NS_observer.observeDOM(
  // document.getElementById('workbench.editors.files.textFileEditor'),function(){
  //TODO: we are hard-coded dependent on getting the second status item..not
  // a very general scenario.  Tighten this up
  $.find('.statusbar-item.left.statusbar-entry:eq(1)'),function(){
    console.log('dom changed');
    var $node = $($.find('.statusbar-item.left.statusbar-entry:eq(1)'));
    // var $node= $('#workbench\\.editors\\.files\\.textFileEditor').children().first();
    //var $node = $('.editor-left').find('.editor-container');
    console.log('$node.class=' + $node.attr('class'));
    console.log('$node.span.text=' + $node.find('span').text());

  });
*/
// var observeDOM = (function(){
//     var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
//         eventListenerSupported = window.addEventListener;
//
//     return function(obj, callback){
//         if( MutationObserver ){
//             // define a new observer
//             var obs = new MutationObserver(function(mutations, observer){
//                 if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
//                     callback();
//             });
//             // have the observer observe foo for changes in children
//             obs.observe( obj, { childList:true, subtree:true });
//         }
//         else if( eventListenerSupported ){
//             obj.addEventListener('DOMNodeInserted', callback, false);
//             obj.addEventListener('DOMNodeRemoved', callback, false);
//         }
//     }
// })();

//console.log('setupListener2: entered');
//console.log('setupListener2: VT.dummy says hi');
// Observe a specific DOM element:
//observeDOM( document.getElementById('workbench.editors.stringEditor') ,function(){
// observeDOM( document.getElementById('workbench.editors.files.textFileEditor') ,function(){
//     console.log('dom changed');
//     var $node= $('#workbench\\.editors\\.files\\.textFileEditor').children().first();
//     //var $node = $('.editor-left').find('.editor-container');
//     console.log('$node.class=' + $node.attr('class'));
//
//     if (typeof $node != "undefined" ) {
//
//       var nodeClass = $node.attr('class');
//
//       redThemeClass = 'vscode-theme-red-themes-red-tmTheme';
//       solarizedDarkThemeClass = 'vscode-theme-solarized-dark-themes-Solarized-dark-tmTheme';
//       var newThemeClass = 'vscode-theme-kimbie-dark-themes-Kimbie_dark-tmTheme';
//
//       if (!nodeClass.match(new RegExp(newThemeClass)) ) {
//
//         var newNodeClass;
//
// //        if(VT_HELPER.getActiveFileForEditor($node.parent().match(/monadutils/)) {
//         var $nodeBase = $('#workbench\\.editors\\.files\\.textFileEditor')
//           .first();
//
//         var activeFile = VT_HELPER.getActiveFileForEditor($nodeBase.parent());
//         console.log("activeFile=" + activeFile);
//
//         if(activeFile.match(new RegExp('monadutils'))) {
//           //console.log('found monadutils.js so would set red theme here');
//           console.log('found monadutils.js so would set solarizedDark theme here');
//           //newNodeClass = nodeClass.replace(/vscode-theme.*\b/, redThemeClass);
//           newNodeClass = nodeClass.replace(/vscode-theme.*\b/, solarizedDarkThemeClass);
//
//           // overflow-guard.scrollable-element
//           var scrollableClass = $('.editor-left').find('.overflow-guard')
//             .children('.monaco-scrollable-element').attr('class');
//           var newScrollableClass = scrollableClass.replace(/vscode-theme.*\b/, redThemeClass);
//           $('.editor-left').find('.overflow-guard')
//           .children('.monaco-scrollable-element')
//           .attr('class', newScrollableClass);
//
//           var bodyClass = $('body').attr('class');
//
//           var newBodyClass = bodyClass.replace(/vscode-theme.*\b/, redThemeClass);
//
//           $('body').attr('class', newBodyClass);
//         }
// //        if (VT_HELPER.getActiveFileForEditor($nodeBase.parent())
// //            .match(new RegExp('monadutils') ))
// //        {
// //            console.log('found monadutils.js so would set red theme here');
// //        }
//         else {
//           newNodeClass = nodeClass.replace(/vscode-theme.*\b/, newThemeClass);
//         }
//         $node.attr('class', newNodeClass);
//       }
//     }
//
// });
