var ProjectEditor = function(){
    var editorInstance;

    function ajax(){
        $.ajax({
            url: $('#initial_projects_path').val(),
            dataType: 'json',
            type: 'post',
            data: { initial_project_name: $('#initial_project_name').val() },
            success: function(data, e1, e2) {
                console.log('data: ' + data);
                console.log('e1: ' + e1);
                console.log('e2: ' + e2);
            },
            error: function(e) {
                console.log("Error while creating project: " + JSON.parse(e.responseText));
            }
        });
    }

    return {
        initialize: function(elementId){
            editorInstance = ace.edit(elementId);
            editorInstance.setTheme("ace/theme/monokai");
            editorInstance.getSession().setMode("ace/mode/ruby");
        },
        openProject: function(projPath){
            $('#project-structure').fileTree(
                { script: $('#project_structure_path').val() },
                function(file) {
                    //TODO треба отримувати вміст цього файлу
                    editorInstance.setValue(file);
                }
            );
        },
        open: function(file){
            editorInstance.setValue('def sdahfgidshfgsdfhn asd\n  a = asd;\n  asdfsdfsadfasdf(a); if true\nend');
        }
    }
}();

$(document).ready(function(){
    ProjectEditor.initialize("editor");
});
