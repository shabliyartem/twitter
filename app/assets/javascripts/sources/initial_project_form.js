var ProjectProgress = function(){
    var steps = [
        {use: "terminal", command: "rails new myblog",
            tip: "Create new rails project named 'myblog' via terminal using <i>rails new</i> command. <br>Type in <b>'rails new myblog'</b>",
            top: "100px", left: "420px",
            responce: function(terminal, terminalProperties){
                terminal.echo("[[b;;]creating new rails app]");
                terminal.echo("  [[;#00E400;]created] app");
                terminal.echo("  [[;#00E400;]created] db");
                terminal.echo("  [[;#00E400;]created] config");
                terminal.echo("  [[i;;]blah blah blah...]");
            }
        },
        {use: "terminal", command: "cd myblog",
            tip: "Go to the created project folder. <br>Type in <b>'cd myblog'</b>",
            top: "150px", left: "420px",
            responce: function(terminal, terminalProperties){
                terminal.set_prompt(terminalProperties.prompt.replace('$', '/myblog$'));
            }
        },
        {use: "terminal", command: "rails generate scaffold Post title:string content:text",
            tip: "Create a scaffold for your blog-posts using <i>'command rails generate scaffold'</i>. <br>Type in <b>'rails generate scaffold Post title:string, content:text'</b>",
            top: "200px", left: "420px",
            responce: function(terminal, terminalProperties){
                terminal.echo("[[b;;]Scaffolding Post]");
                terminal.echo("  [[;#00E400;]created] models/posts.rb");
                terminal.echo("  [[;#00E400;]created] controllers/posts_controller.rb");
                terminal.echo("  [[i;;]blah blah blah...]");
                terminal.disable();
            }
        }
    ];
    var curStepIdx = 0;

    function currentStep(){
        return steps[curStepIdx] != undefined ? steps[curStepIdx] : {};
    }

    function redrawTip(){
        $("#tip-text").html(currentStep().tip);
        $("#tip").css('top', currentStep().top);
        $("#tip").css('left', currentStep().left);
    }

    return {
        currentStep: function(){
            return currentStep();
        },
        nextStep: function(){
            curStepIdx++;
            redrawTip();
        },
        startWith: function(index){
            curStepIdx = index;
            redrawTip();
            $("#tip").show();
        }
    }
}();

$(document).ready(function(){
    ProjectProgress.startWith(0);
});