$(document).ready(function(){
    $.ajax({
        url: $('#user_repos_url').val(),
        dataType: 'html',
        type: 'GET',
        success: function(data) {
            var repos = JSON.parse(data);
            $('#load-repos-indicator').hide();
            var html = "";
            var clone_repo_url = $('#clone_repo_url').val();
            for(var i = 0; i < repos.length; i++){
                html += '<tr><td><a href="' + repos[i].html_url + '" target="_blank" rel="nofollow">' + repos[i].name + '</a></td>' +
                    '<td><a href="' + clone_repo_url + '?repo_url=' + repos[i].ssh_url + '&repo_name=' + repos[i].name + '" data-method="post" data-remote="true">clone</a></td></tr>';
            }
            $('#repos_list').html(html);
        },
        error: function(e) {
            alert("Error loading repositories: " + e.statusText);
        }
    });
});
