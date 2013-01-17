$(document).ready(function(){
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    //var JavaScriptMode = require("ace/mode/javascript").Mode;
    //editor.getSession().setMode(new JavaScriptMode());
    editor.getSession().setMode("ace/mode/ruby");
});
