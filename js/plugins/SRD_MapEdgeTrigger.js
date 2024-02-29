/*:
 * @plugindesc Allows for events to be triggered when pushing the map's edge.
 * @author SumRndmDde
 * @help
 * sorry, don't feel like writing a help thing for tonight
 *
 * just use <Edge Trigger> in event.
 * make sure it's below priority!
 */

var SRD = SRD || {};
SRD.MapEdgeTrigger = SRD.MapEdgeTrigger || {};

SRD.MapEdgeTrigger.EDGE_TRIGGER_ID = 50;

SRD.MapEdgeTrigger._Game_Player_startMapEvent = Game_Player.prototype.startMapEvent;
Game_Player.prototype.startMapEvent = function(x, y, triggers, normal) {
	SRD.MapEdgeTrigger._Game_Player_startMapEvent.apply(this, arguments);
	this.startEdgeMapEvents(x, y, triggers);
};

Game_Player.prototype.startEdgeMapEvents = function(x, y, triggers) {
	if(!$gameMap.isEventRunning()) {
		if(!$gameMap.isValid(x, y) && !triggers.contains(0)) {
			this.checkTileForValidEdgeEvent(x - 1, y);
			this.checkTileForValidEdgeEvent(x + 1, y);
			this.checkTileForValidEdgeEvent(x, y - 1);
			this.checkTileForValidEdgeEvent(x, y + 1);
		}
	}
}

Game_Player.prototype.checkTileForValidEdgeEvent = function(x, y) {
	if($gameMap.isValid(x, y)) {
		$gameMap.eventsXy(x, y).forEach(function(event) {
			if(event.isTriggerIn([SRD.MapEdgeTrigger.EDGE_TRIGGER_ID]) && event._priorityType === 0) {
				event.start();
			}
		});
	}
}

SRD.MapEdgeTrigger._Game_Event_isTriggerIn = Game_Event.prototype.isTriggerIn;
Game_Event.prototype.isTriggerIn = function(triggers) {
	if(this.event().note.match(/<\s*Edge[ ]?Trigger\s*>/i)) {
		return triggers.contains(SRD.MapEdgeTrigger.EDGE_TRIGGER_ID);
	}
    return SRD.MapEdgeTrigger._Game_Event_isTriggerIn.apply(this, arguments);
};