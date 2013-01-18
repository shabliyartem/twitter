var ProjectProgress = function(){
    var steps = [
        {use: "nothing",
            action: function(){
                $('#terminal-window').modal({
                    keyboard: false
                    //,backdrop: false
                });
                ProjectProgress.nextStep();
            }
        },
        {use: "terminal", command: "rails new myblog",
            action: function(){
                showTip('#terminal-window', "Create new rails project named 'myblog' via terminal using <i>rails new</i> command. <br>Type in <b>'rails new myblog'</b>");
            },
            responce: function(terminal){
                terminal.pause();
                ProjectProgress.pause();
                $.ajax({
                    url: $('#initial_projects_path').val(),
                    dataType: 'json',
                    type: 'post',
                    data: { initial_project_name: $('#initial_project_name').val() },
                    success: function(data) {
                        terminal.resume();
                        ProjectProgress.resume();
                        ProjectProgress.nextStep();
                        terminal.echo("      [[;#00E400;]create]                                            ");
                        terminal.echo("      [[;#00E400;]create]  README.rdoc                               ");
                        terminal.echo("      [[;#00E400;]create]  Rakefile                                  ");
                        terminal.echo("      [[;#00E400;]create]  config.ru                                 ");
                        terminal.echo("      [[;#00E400;]create]  .gitignore                                ");
                        terminal.echo("      [[;#00E400;]create]  Gemfile                                   ");
                        terminal.echo("      [[;#00E400;]create]  app                                       ");
                        terminal.echo("      [[;#00E400;]create]  app/assets/images/rails.png               ");
                        terminal.echo("      [[;#00E400;]create]  app/assets/javascripts/application.js     ");
                        terminal.echo("      [[;#00E400;]create]  app/assets/stylesheets/application.css    ");
                        terminal.echo("      [[;#00E400;]create]  app/controllers/application_controller.rb ");
                        terminal.echo("      [[;#00E400;]create]  app/helpers/application_helper.rb         ");
                        terminal.echo("      [[;#00E400;]create]  app/mailers                               ");
                        terminal.echo("      [[;#00E400;]create]  app/models                                ");
                        terminal.echo("      [[;#00E400;]create]  app/views/layouts/application.html.erb    ");
                        terminal.echo("      [[;#00E400;]create]  app/mailers/.gitkeep                      ");
                        terminal.echo("      [[;#00E400;]create]  app/models/.gitkeep                       ");
                        terminal.echo("      [[;#00E400;]create]  config                                    ");
                        terminal.echo("      [[;#00E400;]create]  config/routes.rb                          ");
                        terminal.echo("      [[;#00E400;]create]  config/application.rb                     ");
                        terminal.echo("      [[;#00E400;]create]  config/environment.rb                     ");
                        terminal.echo("      [[;#00E400;]create]  config/environments                       ");
                        terminal.echo("      [[;#00E400;]create]  config/environments/development.rb        ");
                        terminal.echo("      [[;#00E400;]create]  config/environments/production.rb         ");
                        terminal.echo("      [[;#00E400;]create]  config/environments/test.rb               ");
                        terminal.echo("      [[;#00E400;]create]  config/initializers                       ");
                        terminal.echo("      [[;#00E400;]create]  config/initializers/backtrace_silencers.rb");
                        terminal.echo("      [[;#00E400;]create]  config/initializers/inflections.rb        ");
                        terminal.echo("      [[;#00E400;]create]  config/initializers/mime_types.rb         ");
                        terminal.echo("      [[;#00E400;]create]  config/initializers/secret_token.rb       ");
                        terminal.echo("      [[;#00E400;]create]  config/initializers/session_store.rb      ");
                        terminal.echo("      [[;#00E400;]create]  config/initializers/wrap_parameters.rb    ");
                        terminal.echo("      [[;#00E400;]create]  config/locales                            ");
                        terminal.echo("      [[;#00E400;]create]  config/locales/en.yml                     ");
                        terminal.echo("      [[;#00E400;]create]  config/boot.rb                            ");
                        terminal.echo("      [[;#00E400;]create]  config/database.yml                       ");
                        terminal.echo("      [[;#00E400;]create]  db                                        ");
                        terminal.echo("      [[;#00E400;]create]  db/seeds.rb                               ");
                        terminal.echo("      [[;#00E400;]create]  doc                                       ");
                        terminal.echo("      [[;#00E400;]create]  doc/README_FOR_APP                        ");
                        terminal.echo("      [[;#00E400;]create]  lib                                       ");
                        terminal.echo("      [[;#00E400;]create]  lib/tasks                                 ");
                        terminal.echo("      [[;#00E400;]create]  lib/tasks/.gitkeep                        ");
                        terminal.echo("      [[;#00E400;]create]  lib/assets                                ");
                        terminal.echo("      [[;#00E400;]create]  lib/assets/.gitkeep                       ");
                        terminal.echo("      [[;#00E400;]create]  log                                       ");
                        terminal.echo("      [[;#00E400;]create]  log/.gitkeep                              ");
                        terminal.echo("      [[;#00E400;]create]  public                                    ");
                        terminal.echo("      [[;#00E400;]create]  public/404.html                           ");
                        terminal.echo("      [[;#00E400;]create]  public/422.html                           ");
                        terminal.echo("      [[;#00E400;]create]  public/500.html                           ");
                        terminal.echo("      [[;#00E400;]create]  public/favicon.ico                        ");
                        terminal.echo("      [[;#00E400;]create]  public/index.html                         ");
                        terminal.echo("      [[;#00E400;]create]  public/robots.txt                         ");
                        terminal.echo("      [[;#00E400;]create]  script                                    ");
                        terminal.echo("      [[;#00E400;]create]  script/rails                              ");
                        terminal.echo("      [[;#00E400;]create]  test/fixtures                             ");
                        terminal.echo("      [[;#00E400;]create]  test/fixtures/.gitkeep                    ");
                        terminal.echo("      [[;#00E400;]create]  test/functional                           ");
                        terminal.echo("      [[;#00E400;]create]  test/functional/.gitkeep                  ");
                        terminal.echo("      [[;#00E400;]create]  test/integration                          ");
                        terminal.echo("      [[;#00E400;]create]  test/integration/.gitkeep                 ");
                        terminal.echo("      [[;#00E400;]create]  test/unit                                 ");
                        terminal.echo("      [[;#00E400;]create]  test/unit/.gitkeep                        ");
                        terminal.echo("      [[;#00E400;]create]  test/performance/browsing_test.rb         ");
                        terminal.echo("      [[;#00E400;]create]  test/test_helper.rb                       ");
                        terminal.echo("      [[;#00E400;]create]  tmp/cache                                 ");
                        terminal.echo("      [[;#00E400;]create]  tmp/cache/assets                          ");
                        terminal.echo("      [[;#00E400;]create]  vendor/assets/javascripts                 ");
                        terminal.echo("      [[;#00E400;]create]  vendor/assets/javascripts/.gitkeep        ");
                        terminal.echo("      [[;#00E400;]create]  vendor/assets/stylesheets                 ");
                        terminal.echo("      [[;#00E400;]create]  vendor/assets/stylesheets/.gitkeep        ");
                        terminal.echo("      [[;#00E400;]create]  vendor/plugins                            ");
                        terminal.echo("      [[;#00E400;]create]  vendor/plugins/.gitkeep                   ");
                        terminal.echo("         [[;#00E400;]run]  bundle install                            ");
                        terminal.echo("Fetching gem metadata from httрs://rubygems.org/...........          ");
                        terminal.echo("Fetching gem metadata from httрs://rubygems.org/..                   ");
                        terminal.echo("Using rake (10.0.3)                                                  ");
                        terminal.echo("Using i18n (0.6.1)                                                   ");
                        terminal.echo("  [[i;;]blah blah blah...]                                           ");
                        terminal.echo("Using uglifier (1.3.0)                                               ");
                        terminal.echo("[[;#4E9A06;]Your bundle is complete! Use `bundle show [gemname]` to see where a bundled gem is installed.]");
                    },
                    error: function(e) {
                        terminal.resume();
                        ProjectProgress.resume();
                        ProjectProgress.nextStep();
                        terminal.error("Error while creating project: " + JSON.parse(e.responseText));
                    }
                });
                terminal.disable();
            }
        },
        {use: "terminal", command: "cd myblog",
            action: function(){
                showTip('#terminal-window', "Go to the created project folder. <br>Type in <b>'cd myblog'</b>");
            },
            responce: function(terminal, terminalProperties){
                terminal.set_prompt(terminalProperties.prompt.replace('$', '/myblog$'));
                terminal.disable();
            }
        },
        {use: "terminal", command: "rails generate scaffold Post title:string content:text",
            action: function(){
                showTip('#terminal-window', "Create a scaffold for your blog-posts using <i>'command rails generate scaffold'</i>. <br>Type in <b>'rails generate scaffold Post title:string content:text'</b>");
            },
            responce: function(terminal){
                terminal.echo("      [[;#FFFFFF;]invoke]  active_record                               ");
                terminal.echo("      [[;#00E400;]create]    db/migrate/20130117103411_create_posts.rb ");
                terminal.echo("      [[;#00E400;]create]    app/models/post.rb                        ");
                terminal.echo("      [[;#FFFFFF;]invoke]    test_unit                                 ");
                terminal.echo("      [[;#00E400;]create]      test/unit/post_test.rb                  ");
                terminal.echo("      [[;#00E400;]create]      test/fixtures/posts.yml                 ");
                terminal.echo("      [[;#FFFFFF;]invoke]  resource_route                              ");
                terminal.echo("      [[;#00E400;]create]    resources :posts                          ");
                terminal.echo("      [[;#FFFFFF;]invoke]  scaffold_controller                         ");
                terminal.echo("      [[;#00E400;]create]    app/controllers/posts_controller.rb       ");
                terminal.echo("      [[;#FFFFFF;]invoke]    erb                                       ");
                terminal.echo("      [[;#00E400;]create]      app/views/posts                         ");
                terminal.echo("      [[;#00E400;]create]      app/views/posts/index.html.erb          ");
                terminal.echo("      [[;#00E400;]create]      app/views/posts/edit.html.erb           ");
                terminal.echo("      [[;#00E400;]create]      app/views/posts/show.html.erb           ");
                terminal.echo("      [[;#00E400;]create]      app/views/posts/new.html.erb            ");
                terminal.echo("      [[;#00E400;]create]      app/views/posts/_form.html.erb          ");
                terminal.echo("      [[;#FFFFFF;]invoke]    test_unit                                 ");
                terminal.echo("      [[;#00E400;]create]      test/functional/posts_controller_test.rb");
                terminal.echo("      [[;#FFFFFF;]invoke]    helper                                    ");
                terminal.echo("      [[;#00E400;]create]      app/helpers/posts_helper.rb             ");
                terminal.echo("      [[;#FFFFFF;]invoke]      test_unit                               ");
                terminal.echo("      [[;#00E400;]create]        test/unit/helpers/posts_helper_test.rb");
                terminal.echo("      [[;#FFFFFF;]invoke]  assets                                      ");
                terminal.echo("      [[;#FFFFFF;]invoke]    coffee                                    ");
                terminal.echo("      [[;#00E400;]create]      app/assets/javascripts/posts.js.coffee  ");
                terminal.echo("      [[;#FFFFFF;]invoke]    scss                                      ");
                terminal.echo("      [[;#00E400;]create]      app/assets/stylesheets/posts.css.scss   ");
                terminal.echo("      [[;#FFFFFF;]invoke]  scss                                        ");
                terminal.echo("      [[;#00E400;]create]    app/assets/stylesheets/scaffolds.css.scss ");
            }
        },
        {use: "terminal", command: "rails generate scaffold Comment username:string useremail:string content:text",
            action: function(){
                showTip('#terminal-window', "Create a scaffold for comments to your posts in the same way. <br>Type in <b>'rails generate scaffold Comment username:string useremail:string content:text'</b>");
            },
            responce: function(terminal){
                terminal.echo("      [[;#FFFFFF;]invoke]  active_record");
                terminal.echo("      [[;#00E400;]create]    db/migrate/20130117105019_create_comments.rb ");
                terminal.echo("      [[;#00E400;]create]    app/models/comment.rb                        ");
                terminal.echo("      [[;#FFFFFF;]invoke]    test_unit                                    ");
                terminal.echo("      [[;#00E400;]create]      test/unit/comment_test.rb                  ");
                terminal.echo("      [[;#00E400;]create]      test/fixtures/comments.yml                 ");
                terminal.echo("      [[;#FFFFFF;]invoke]  resource_route                                 ");
                terminal.echo("       [[;#00E400;]route]    resources :comments                          ");
                terminal.echo("      [[;#FFFFFF;]invoke]  scaffold_controller                            ");
                terminal.echo("      [[;#00E400;]create]    app/controllers/comments_controller.rb       ");
                terminal.echo("      [[;#FFFFFF;]invoke]    erb                                          ");
                terminal.echo("      [[;#00E400;]create]      app/views/comments                         ");
                terminal.echo("      [[;#00E400;]create]      app/views/comments/index.html.erb          ");
                terminal.echo("      [[;#00E400;]create]      app/views/comments/edit.html.erb           ");
                terminal.echo("      [[;#00E400;]create]      app/views/comments/show.html.erb           ");
                terminal.echo("      [[;#00E400;]create]      app/views/comments/new.html.erb            ");
                terminal.echo("      [[;#00E400;]create]      app/views/comments/_form.html.erb          ");
                terminal.echo("      [[;#FFFFFF;]invoke]    test_unit                                    ");
                terminal.echo("      [[;#00E400;]create]      test/functional/comments_controller_test.rb");
                terminal.echo("      [[;#FFFFFF;]invoke]    helper                                       ");
                terminal.echo("      [[;#00E400;]create]      app/helpers/comments_helper.rb             ");
                terminal.echo("      [[;#FFFFFF;]invoke]      test_unit                                  ");
                terminal.echo("      [[;#00E400;]create]        test/unit/helpers/comments_helper_test.rb");
                terminal.echo("      [[;#FFFFFF;]invoke]  assets                                         ");
                terminal.echo("      [[;#FFFFFF;]invoke]    coffee                                       ");
                terminal.echo("      [[;#00E400;]create]      app/assets/javascripts/comments.js.coffee  ");
                terminal.echo("      [[;#FFFFFF;]invoke]    scss                                         ");
                terminal.echo("      [[;#00E400;]create]      app/assets/stylesheets/comments.css.scss   ");
                terminal.echo("      [[;#FFFFFF;]invoke]  scss                                           ");
                terminal.echo("   [[;#2CB3E7;]identical]    app/assets/stylesheets/scaffolds.css.scss    ");
            }
        },
        {use: "terminal", command: "rake db:create",
            action: function(){
                showTip('#terminal-window', "Create dtabase using <i>rake db:create<i> command. <br>Type in <b>'rake db:create'</b>");
            },
            responce: function(){ }
        },
        {use: "terminal", command: "rake db:migrate",
            action: function(){
                showTip('#terminal-window', "Run migrations using <i>rake db:migrate<i> command. <br>Type in <b>'rake db:migrate'</b>");
            },
            responce: function(terminal){
                terminal.echo("==  CreatePosts: migrating =============================");
                terminal.echo("    -- create_table(:posts)                             ");
                terminal.echo("-> 0.0359s                                              ");
                terminal.echo("==  CreatePosts: migrated (0.0361s) ====================");
                terminal.echo("                                                        ");
                terminal.echo("==  CreateComments: migrating ==========================");
                terminal.echo("    -- create_table(:comments)                          ");
                terminal.echo("-> 0.0016s                                              ");
                terminal.echo("==  CreateComments: migrated (0.0017s) =================");
                terminal.disable();
            }
        },
        {use: "nothing",
            action: function(){
                $('#terminal-window').modal('hide');
                $('#editor-window').modal({
                    keyboard: false
                    //,backdrop: false
                });
                ProjectProgress.nextStep();
            }
        },
        {use: "editor",
            action: function(){
                showTip('#editor-window', "Edit your Gemfile. Add <b>gem 'twitter-bootstrap-rails'</b> to it");
            }
        }
    ];
    var curStepIdx = 0;
    var isPaused = false;

    function currentStep(){
        return steps[curStepIdx] != undefined ? steps[curStepIdx] : {};
    }

    function showTip(selector, content, title) {
        title = "TIPPP";
        $('.popover').remove();
        if($(selector).data().popover){
            console.log('editing popover');
            $(selector).data().popover.options.title = (title || "");
            $(selector).data().popover.options.content = (content || "");
        }
        else{
            console.log('creating popover');
            $(selector).popover({
                title: title,
                content: content,
                placement: 'left',
                html: true,
                trigger: 'manual'
            });
        }
        $(selector).popover('show');
    }

    return {
        currentStep: function(){
            return currentStep();
        },
        nextStep: function(){
            if(!isPaused){
                curStepIdx++;
                if(currentStep().action)
                    currentStep().action();
            }
        },
        startWith: function(index){
            curStepIdx = index;
            if(currentStep().action)
                currentStep().action();
        },
        pause: function(){
            isPaused = true;
        },
        resume: function(){
            isPaused = false;
        }
    }
}();

$(document).ready(function(){
    ProjectProgress.startWith(0);
});