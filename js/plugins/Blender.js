//=============================================================================
// RPG Maker MZ - Blender
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Enhance Roll Playing Game.
 * @author Brad Henderson
 *
 * @help Blender.js
 *
 * This plugin provides a command to call a common event when a picture is
 * clicked.
 *
 * Use it in the following procedure.
 *   1. Execute "Show Picture" to display your button image.
 *   2. Call the plugin command "Set Button Picture".
 *
 * @command set
 * @text Set Button Picture
 * @desc Makes the specified picture clickable.
 *
 * @arg pictureId
 * @type number
 * @min 1
 * @max 100
 * @default 1
 * @text Picture Number
 * @desc Control number of the picture.
 *
 * @arg commonEventId
 * @type common_event
 * @default 1
 * @text Common Event
 * @desc Common event to call when the picture is clicked.
 */

(() => {

  $DEBUG = true

  var blender = require('./js/plugins/122.blender.js')
  const pluginName = "Blender";

  var render = () => {
    console.log("render")
    window.requestAnimationFrame(render)
  }

  window.requestAnimationFrame(render)

  PluginManager.registerCommand(pluginName, "set", (args) => {

  });

  Scene_Boot.prototype.startNormalGame = function () {

    // alert("open game")
    //this.checkPlayerLocation();
    DataManager.setupNewGame();

    //if (DataManager.isAnySavefileExists()) {
    //    SceneManager.goto(Scene_Title);
    //} else {
    SceneManager.goto(Scene_Map);
    //}

    Window_TitleCommand.initCommandPosition();
  };


})();



