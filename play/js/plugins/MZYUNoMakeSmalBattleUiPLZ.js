// Adjust Battle Window
Window_BattleStatus.prototype.maxCols = function() {
    return $gameParty.battleMembers().length;
};

Scene_Battle.prototype.statusWindowRect = function() {
    const extra = 10;
    const ww = 192 * $gameParty.battleMembers().length + 30;//Graphics.boxWidth - 192;
    const wh = this.windowAreaHeight() + extra;
    const wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;
    const wy = Graphics.boxHeight - wh + extra - 4;
    return new Rectangle(wx, wy, ww, wh);
};

// Adjust Message Boxes
Scene_Map.prototype.messageWindowRect = function() {
    const ww = 780;
    const wh = this.calcWindowHeight(4, false) + 8;
    const wx = (Graphics.boxWidth - ww) / 2;
    const wy = 0;
    return new Rectangle(wx, wy, ww, wh);
};
// Adjust Show Choice Window
Window_ChoiceList.prototype.windowX = function() {
    const positionType = $gameMessage.choicePositionType();
    if (positionType === 1) {
        return (Graphics.boxWidth - this.windowWidth()) / 2;
    } else if (positionType === 2) {
        return Graphics.boxWidth - this.windowWidth() - 247;
    } else {
        return 0;
    }
};