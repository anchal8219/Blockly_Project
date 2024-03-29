// Define the playSound function to play the corresponding sound
function playSound(soundId) {
    console.log(soundId)
    var audio = document.getElementById(soundId);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    } else {
      console.error(`Audio element with ID '${soundId}' not found.`);
    }
  }
  

// Set up the Blockly workspace and change listener
document.addEventListener('DOMContentLoaded', function() {
    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox')
    });

    workspace.addChangeListener(function(event) {
        if (event.type == Blockly.Events.BLOCK_MOVE || event.type == Blockly.Events.BLOCK_CREATE ||
            event.type == Blockly.Events.BLOCK_DELETE || event.type == Blockly.Events.BLOCK_CHANGE) {
            var code = Blockly.JavaScript.workspaceToCode(workspace);
            console.log(code); // Output generated code to console for testing
            // Parse generated code and trigger sound playback if necessary
            if (code.includes("play_sound")) {
                var match = code.match(/'([^']+)'/); // Extract sound ID from generated code
                if (match) {
                    var soundId = match[1];
                    playSound(soundId);
                }
            }
        }
    });
});
