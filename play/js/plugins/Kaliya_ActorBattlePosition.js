//=============================================================================
// Kaliya's Plugins - Actor Battle Position - for RPG Maker MZ
// Kaliya_ActorBattlePosition.js
//=============================================================================
 /*:
* @target MZ
* @plugindesc Actor Battle Positions
* @author Kaliya
*
* @help
* 
*/


var Imported = Imported || {};
Imported.Kaliya_ActorBattlePosition = true;
var Kaliya = Kaliya || {};
Kaliya.ActorBattlePosition = Kaliya.ActorBattlePosition || {};
Kaliya.ActorBattlePosition.version = 1.00;

Kaliya.ActorBattlePosition.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
Sprite_Actor.prototype.setActorHome = function(index) {
    if ($gameTroop.troop()) {
        const pages = $gameTroop.troop().pages;
        const page = pages[0];
        if (page) {
            const list = page.list;
            for (const command of list) {
                if ([108, 408].contains(command.code)) {
                     const text = command.parameters[0];
                     if (text.match(/<Battle Position:[ ](\d+)[,][ ]?([-]?\d+)[,][ ]?([-]?\d+)>/i)) {
                         const actorId = Number(RegExp.$1);
                         if (this._actor.actorId() === actorId) {
                             const x = Number(RegExp.$2);
                             const y = Number(RegExp.$3);
                             this.setHome(x, y);
                             return;
                         }
                     }
                }
            }
        }
    }
    if (this._actor && this._actor.actor()) {
        const note = this._actor.actor().note;
        if (note.match(/<Battle Position:[ ]([-]?\d+)[,][ ]?([-]?\d+)>/i)) {
            const x = Number(RegExp.$1);
            const y = Number(RegExp.$2);
            this.setHome(x, y);
            return;
        }
    }
    return Kaliya.ActorBattlePosition.Sprite_Actor_setActorHome.call(this, index);
};