var ProjectEditor = function(){
    var editorInstance;
    var currentFile = null;

    function getFileContent(file){
        $.ajax({
            url: $('#file_content_path').val(),
            dataType: 'json',
            type: 'get',
            data: {
                file_path: file,
                initial_project_id: $('#initial_project_id').val()
            },
            success: function(data) {
                currentFile = file;
                editorInstance.setValue(data, -1);
            },
            error: function(e){
                currentFile = null;
                editorInstance.setValue('');
            }
        });
    }

    function saveFile(file){
        $.ajax({
            url: $('#file_content_path').val(),
            dataType: 'json',
            type: 'put',
            data: {
                file_path: file,
                file_content: editorInstance.getValue(),
                initial_project_id: $('#initial_project_id').val()
            }
        });
    }

    return {
        initialize: function(elementId){
            editorInstance = ace.edit(elementId);
            editorInstance.setTheme("ace/theme/monokai");
            editorInstance.getSession().setMode("ace/mode/ruby");
            editorInstance.setShowPrintMargin(false);
        },
        openProject: function(){
            $('#project-structure').fileTree(
                {
                    script: $('#project_structure_path').val() + "?initial_project_id=" + $('#initial_project_id').val(),
                    folderEvent: "dblclick",
                    expandSpeed: -1,
                    collapseSpeed: -1
                },
                function(file) {
                    if(currentFile != null)
                        saveFile(currentFile);
                    getFileContent(file);
                }
            );
        }
    }
}();

$(document).ready(function(){
    ProjectEditor.initialize("editor");
});
