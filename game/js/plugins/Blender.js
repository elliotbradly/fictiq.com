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
  $DEBUG = true;

  //var blender = require('./js/plugins/122.blender.js')
  const pluginName = "Blender";

  PluginManager.registerCommand(pluginName, "set", (args) => { });

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

    var render = () => {
      //console.log("render")
      window.requestAnimationFrame(render);
    };

    window.requestAnimationFrame(render);

    var count = 0;

    Party.create(2)
    Party.addActor(2, 3)
    Party.setLocation(2, 12, 12, 5)


    Party.create(3)
    Party.addActor(3, 4)
    Party.setLocation(3, 15, 15, 5)


    setTimeout( ()=>{

      Party.switch(2)

    }, 2222 )

    setTimeout( ()=>{

      Party.switch(3)

    }, 12222 )


    setTimeout( ()=>{

      Party.switch(1)

    }, 32222 )


    setInterval(() => {
      count += 1;


     // document.dispatchEvent(
     //   new KeyboardEvent("keydown", {
     //     key: "e",
     //     keyCode: 39, // example values.
     //     code: "ArrowRight", // put everything you need in this object.
     //     which: 69,
     //     shiftKey: false, // you don't need to include values
     //     ctrlKey: false, // if you aren't going to use them.
     //     metaKey: false, // these are here for example's sake.
     //   })
     // );

      //$gameMessage.add('\SEPLAY[]  ' + count );

      //Game_Player_executeMove.call(this, 8);
      //console.log('go')
    }, 1444);
  };

  var Game_Player_executeMove = Game_Player.prototype.executeMove;
  Game_Player.prototype.executeMove = function (direction) {
    //window.location = './vue.html'

    console.log(JSON.stringify(direction));
    //if (direction % 2 == 0) {
    Game_Player_executeMove.call(this, direction);
    //} else {
    // const dirArray = Galv.DM.getHorzVertDirs(direction);
    // this.moveDiagonally(dirArray[0], dirArray[1]);
    //};
  };
})();