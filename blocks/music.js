import * as Blockly from 'blockly/core';

Blockly.Blocks['play_sound'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Play Sound")
            .appendField(new Blockly.FieldDropdown([
                ["Sound 1", "sound1"],
                ["Sound 2", "sound2"],
                ["Sound 3", "sound3"]
            ]), "SOUND");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
