$(document).ready(function(){
    var terminalProperties = {
        prompt: $('#username').val() + '@railstest:~$ '
    };

    $('#terminal').terminal(function(command, term) {
            if (command !== '') {
                var step = ProjectProgress.currentStep();
                if(step.use == "terminal"){
                    if(step.command == command.replace(/\s+/g, ' ')){
                        step.responce(term, terminalProperties);
                        ProjectProgress.nextStep();
                    }
                    else {
                        term.error('Unexpected command. Please, follow the instructions');
                    }
                }
                else {
                    term.error('Unexpected command. Please, follow the instructions');
                }
            }
            else {
                term.echo('');
            }
        },
        { greetings: 'RailsLearning.com',
            name: 'rails_project_terminal',
            height: 200,
            prompt: terminalProperties.prompt
        }
    );
});
