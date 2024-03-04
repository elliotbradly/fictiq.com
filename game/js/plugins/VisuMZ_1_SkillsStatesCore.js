//=============================================================================
// VisuStella MZ - Skills & States Core
// VisuMZ_1_SkillsStatesCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SkillsStatesCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillsStatesCore = VisuMZ.SkillsStatesCore || {};
VisuMZ.SkillsStatesCore.version = 1.26;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.26] [SkillsStatesCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skills_and_States_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Skills & States Core plugin extends and builds upon the functionality of
 * RPG Maker MZ's inherent skill, state, and buff functionalities and allows
 * game devs to customize its various aspects.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assigning multiple Skill Types to Skills.
 * * Making custom Skill Cost Types (such as HP, Gold, and Items).
 * * Allowing Skill Costs to become percentile-based or dynamic either directly
 *   through the Skills themselves or through trait-like notetags.
 * * Replacing gauges for different classes to display different types of
 *   Skill Cost Type resources.
 * * Hiding/Showing and enabling/disabling skills based on switches, learned
 *   skills, and code.
 * * Setting rulings for states, including if they're cleared upon death, how
 *   reapplying the state affects their turn count, and more.
 * * Allowing states to be categorized and affected by categories, too.
 * * Displaying turn counts on states drawn in the window or on sprites.
 * * Manipulation of state, buff, and debuff turns through skill and item
 *   effect notetags.
 * * Create custom damage over time state calculations through notetags.
 * * Allow database objects to apply passive states to its user.
 * * Passive states can have conditions before they become active as well.
 * * Updated Skill Menu Scene layout to fit more modern appearances.
 * * Added bonus if Items & Equips Core is installed to utilize the Shop Status
 *   Window to display skill data inside the Skill Menu.
 * * Control over various aspects of the Skill Menu Scene.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Action End Removal for States
 * 
 * - If your Plugin Parameter settings for "Action End Update" are enabled,
 * then "Action End" has been updated so that it actually applies per action
 * used instead of just being at the start of a battler's action set.
 * 
 * - However, there are side effects to this: if a state has the "Cannot Move"
 * restriction along with the "Action End" removal timing, then unsurprisingly,
 * the state will never wear off because it's now based on actual actions
 * ending. To offset this and remove confusion, "Action End" auto-removal
 * timings for states with "Cannot Move" restrictions will be turned into
 * "Turn End" auto-removal timings while the "Action End Update" is enabled.
 * 
 * - This automatic change won't make it behave like an "Action End" removal
 * timing would, but it's better than completely softlocking a battler.
 * 
 * ---
 *
 * Buff & Debuff Level Management
 *
 * - In RPG Maker MZ, buffs and debuffs when applied to one another will shift
 * the buff modifier level up or down. This plugin will add an extra change to
 * the mechanic by making it so that once the buff modifier level reaches a
 * neutral point, the buff or debuff is removed altogether and resets the buff
 * and debuff turn counter for better accuracy.
 *
 * ---
 *
 * Skill Costs
 *
 * - In RPG Maker MZ, skill costs used to be hard-coded. Now, all Skill Cost
 * Types are now moved to the Plugin Parameters, including MP and TP. This
 * means that from payment to checking for them, it's all done through the
 * options available.
 *
 * - By default in RPG Maker MZ, displayed skill costs would only display only
 * one type: TP if available, then MP. If a skill costs both TP and MP, then
 * only TP was displayed. This plugin changes that aspect by displaying all the
 * cost types available in order of the Plugin Parameter Skill Cost Types.
 *
 * - By default in RPG Maker MZ, displayed skill costs were only color-coded.
 * This plugin changes that aspect by displaying the Skill Cost Type's name
 * alongside the cost. This is to help color-blind players distinguish what
 * costs a skill has.
 *
 * ---
 *
 * Sprite Gauges
 *
 * - Sprite Gauges in RPG Maker MZ by default are hard-coded and only work for
 * HP, MP, TP, and Time (used for ATB). This plugin makes it possible for them
 * to be customized through the use of Plugin Parameters under the Skill Cost
 * Types and their related-JavaScript entries.
 *
 * ---
 * 
 * State Displays
 * 
 * - To put values onto states and display them separately from the state turns
 * you can use the following script calls.
 * 
 *   battler.getStateDisplay(stateId)
 *   - This returns whatever value is stored for the specified battler under
 *     that specific state value.
 *   - If there is no value to be returned it will return an empty string.
 * 
 *   battler.setStateDisplay(stateId, value)
 *   - This sets the display for the battler's specific state to whatever you
 *     declared as the value.
 *   - The value is best used as a number or a string.
 * 
 *   battler.clearStateDisplay(stateId)
 *   - This clears the display for the battler's specific state.
 *   - In short, this sets the stored display value to an empty string.
 * 
 * ---
 *
 * Window Functions Moved
 *
 * - Some functions found in RPG Maker MZ's default code for Window_StatusBase
 * and Window_SkillList are now moved to Window_Base to make the functions
 * available throughout all windows for usage.
 *
 * ---
 *
 * ============================================================================
 * Slip Damage Popup Clarification
 * ============================================================================
 * 
 * Slip Damage popups only show one popup for HP, MP, and TP each and it is the
 * grand total of all the states and effects combined regardless of the number
 * of states and effects on a battler. This is how it is in vanilla RPG Maker
 * MZ and this is how we intend for it to be with the VisuStella MZ library.
 * 
 * This is NOT a bug!
 * 
 * The reason we are not changing this is because it does not properly relay
 * information to the player accurately. When multiple popups appear, players
 * only have roughly a second and a half to calculate it all for any form of
 * information takeaway. We feel it is better suited for the player's overall
 * convenience to show a cummulative change and steer the experience towards a
 * more positive one.
 *
 * ============================================================================
 * Passive State Clarification
 * ============================================================================
 * 
 * This section will explain various misconceptions regarding passive states.
 * No, passive states do not work the same way as states code-wise. Yes, they
 * use the same effects as states mechanically, but there are differences.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * === General Skill Notetags ===
 *
 * The following are general notetags that are skill-related.
 *
 * ---
 *
 * <Skill Type: x>
 * <Skill Types: x,x,x>
 *
 * <Skill Type: name>
 * <Skill Types: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Marks the skill to have multiple Skill Types, meaning they would appear
 *   under different skill types without needing to create duplicate skills.
 * - Replace 'x' with a number value representing the Skill Type's ID.
 * - If using 'name' notetag variant, replace 'name' with the Skill Type(s)
 *   name desired to be added.
 *
 * ---
 * 
 * <List Name: name>
 * 
 * - Used for: Skill Notetags
 * - Makes the name of the skill appear different when show in the skill list.
 * - Using \V[x] as a part of the name will display that variable.
 * 
 * ---
 *
 * === Skill Cost Notetags ===
 *
 * The following are notetags that can be used to adjust skill costs. Some of
 * these notetags are added through the Plugin Parameter: Skill Cost Types and
 * can be altered there. This also means that some of these notetags can have
 * their functionality altered and/or removed.
 *
 * ---
 *
 * <type Cost: x>
 * <type Cost: x%>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to designate costs of custom or already existing
 *   types that cannot be made by the Database Editor.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the exact type cost value.
 *   This lets you bypass the Database Editor's limit of 9,999 MP and 100 TP.
 * - The 'x%' version is replaced with a percentile value to determine a cost
 *   equal to a % of the type's maximum quantity limit.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: 500>
 *   <MP Cost: 25%>
 *   <Gold Cost: 3000>
 *   <Potion Cost: 5>
 *
 * ---
 *
 * <type Cost Max: x>
 * <type Cost Min: x>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to ensure conditional and % costs don't become too
 *   large or too small.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the maximum or minimum values
 *   that the cost can be.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost Max: 1500>
 *   <MP Cost Min: 5>
 *   <Gold Cost Max: 10000>
 *   <Potion Cost Min: 3>
 *
 * ---
 *
 * <type Cost: +x>
 * <type Cost: -x>
 *
 * <type Cost: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - For % notetag variant: Replace 'x' with a number value to determine the
 *   rate to adjust the Skill Cost Type by as a flat value. This is applied
 *   before <type Cost: +x> and <type Cost: -x> notetags.
 * - For + and - notetag variants: Replace 'x' with a number value to determine
 *   how much to adjust the Skill Cost Type by as a flat value. This is applied
 *   after <type Cost: x%> notetags.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: +20>
 *   <MP Cost: -10>
 *   <Gold Cost: 50%>
 *   <Potion Cost: 200%>
 *
 * ---
 *
 * <Custom Cost Text>
 *  text
 * </Custom Cost Text>
 *
 * - Used for: Skill Notetags
 * - Allows you to insert custom text into the skill's cost area towards the
 *   end of the costs.
 * - Replace 'text' with the text you wish to display.
 * - Text codes may be used.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Costs ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine any dynamic Skill Cost Types used for particular skills.
 *
 * ---
 *
 * <JS type Cost>
 *  code
 *  code
 *  cost = code;
 * </JS type Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'code' to determine the type 'cost' of the skill.
 * - Insert the final type cost into the 'cost' variable.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - Functionality for the notetag can be altered in the Plugin Parameters.
 *
 * ---
 *
 * === Gauge Replacement Notetags ===
 *
 * Certain classes can have their gauges swapped out for other Skill Cost
 * Types. This is especially helpful for the classes that don't utilize those
 * Skill Cost Types. You can mix and match them however you want.
 *
 * ---
 *
 * <Replace HP Gauge: type>
 * <Replace MP Gauge: type>
 * <Replace TP Gauge: type>
 *
 * - Used for: Class Notetags
 * - Replaces the HP (1st), MP (2nd), or TP (3rd) gauge with a different Skill
 *   Cost Type.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'type' with 'none' to not display any gauges there.
 * - The <Replace TP Gauge: type> will require 'Display TP in Window' setting
 *   to be on in the Database > System 1 tab.
 * - Functionality for the notetags can be altered by changes made to the
 *   Skill & States Core Plugin Parameters.
 *
 * ---
 *
 * === Skill Accessibility Notetags ===
 *
 * Sometimes, you don't want all skills to be visible whether it be to hide
 * menu-only skills during battle, until certain switches are turned ON/OFF, or
 * until certain skills have been learned.
 *
 * ---
 *
 * <Hide in Battle>
 * <Hide outside Battle>
 *
 * - Used for: Skill Notetags
 * - Makes the specific skill visible or hidden depending on whether or not the
 *   player is currently in battle.
 *
 * ---
 *
 * <Show Switch: x>
 *
 * <Show All Switches: x,x,x>
 * <Show Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Switch: x>
 *
 * <Hide All Switches: x,x,x>
 * <Hide Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if learned Skill: x>
 *
 * <Show if learned All Skills: x,x,x>
 * <Show if learned Any Skills: x,x,x>
 *
 * <Show if learned Skill: name>
 *
 * <Show if learned All Skills: name, name, name>
 * <Show if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if learned Skill: x>
 *
 * <Hide if learned All Skills: x,x,x>
 * <Hide if learned Any Skills: x,x,x>
 *
 * <Hide if learned Skill: name>
 *
 * <Hide if learned All Skills: name, name, name>
 * <Hide if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if has Skill: x>
 *
 * <Show if have All Skills: x,x,x>
 * <Show if have Any Skills: x,x,x>
 *
 * <Show if has Skill: name>
 *
 * <Show if have All Skills: name, name, name>
 * <Show if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if has Skill: x>
 *
 * <Hide if have All Skills: x,x,x>
 * <Hide if have Any Skills: x,x,x>
 *
 * <Hide if has Skill: name>
 *
 * <Hide if have All Skills: name, name, name>
 * <Hide if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, skill will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, skill will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if a skill can be accessible visibly or through usage.
 *
 * ---
 *
 * <JS Skill Visible>
 *  code
 *  code
 *  visible = code;
 * </JS Skill Visible>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on JavaScript code.
 * - Replace 'code' to determine the type visibility of the skill.
 * - The 'visible' variable returns a boolean (true/false) to determine if the
 *   skill will be visible or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other visibility conditions must be met for this code to count.
 *
 * ---
 *
 * <JS Skill Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Skill Enable>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on JavaScript code.
 * - Replace 'code' to determine the type enabled status of the skill.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   skill will be enabled or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other skill conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === General State-Related Notetags ===
 *
 * The following notetags are centered around states, such as how their turn
 * counts are displayed, items and skills that affect state turns, if the state
 * can avoid removal by death state, etc.
 *
 * ---
 *
 * <No Death Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon death.
 * - This allows this state to be added to an already dead battler, too.
 *
 * ---
 *
 * <No Recover All Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon using the Recover All command.
 *
 * ---
 *
 * <Group Defeat>
 *
 * - Used for: State Notetags
 * - If an entire party is affected by states with the <Group Defeat> notetag,
 *   they are considered defeated.
 * - Usage for this includes party-wide petrification, frozen, etc.
 *
 * ---
 *
 * <Reapply Rules: Ignore>
 * <Reapply Rules: Reset>
 * <Reapply Rules: Greater>
 * <Reapply Rules: Add>
 *
 * - Used for: State Notetags
 * - Choose what kind of rules this state follows if the state is being applied
 *   to a target that already has the state. This affects turns specifically.
 * - 'Ignore' will bypass any turn changes.
 * - 'Reset' will recalculate the state's turns.
 * - 'Greater' will choose to either keep the current turn count if it's higher
 *   than the reset amount or reset it if the current turn count is lower.
 * - 'Add' will add the state's turn count to the applied amount.
 * - If this notetag isn't used, it will use the rules set in the States >
 *   Plugin Parameters.
 *
 * ---
 *
 * <Positive State>
 * <Negative State>
 *
 * - Used for: State Notetags
 * - Marks the state as a positive state or negative state, also altering the
 *   state's turn count color to match the Plugin Parameter settings.
 * - This also puts the state into either the 'Positive' category or
 *   'Negative' category.
 *
 * ---
 *
 * <Category: name>
 * <Category: name, name, name>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace 'name' with a category name to mark this state as.
 * - Insert multiples of this to mark the state with  multiple categories.
 *
 * ---
 *
 * <Categories>
 *  name
 *  name
 * </Categories>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace each 'name' with a category name to mark this state as.
 *
 * ---
 * 
 * <Resist State Category: name>
 * <Resist State Categories: name, name, name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 * 
 * <Resist State Categories>
 *  name
 *  name
 *  name
 * </Resist State Categories>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 *
 * <State x Category Remove: y>
 * 
 * <State x Category Remove: All>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to remove 'y' states from specific category 'x'.
 * - Replace 'x' with a category name to remove from.
 * - Replace 'y' with the number of times to remove from that category.
 * - Use the 'All' variant to remove all of the states of that category.
 * - Insert multiples of this to remove different types of categories.
 *
 * ---
 *
 * <Hide State Turns>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - This will by pass any Plugin Parameter settings.
 *
 * ---
 *
 * <Turn Color: x>
 * <Turn Color: #rrggbb>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - Determines the color of the state's turn count.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <State id Turns: +x>
 * <State id Turns: -x>
 *
 * <Set State id Turns: x>
 *
 * <State name Turns: +x>
 * <State name Turns: -x>
 *
 * <Set State name Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by state 'id' or state 'name', change the state
 *   turn duration for target.
 * - For 'id' variant, replace 'id' with the ID of the state to modify.
 * - For 'name' variant, replace 'name' with the name of the state to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple states at once.
 *
 * ---
 *
 * <param Buff Turns: +x>
 * <param Buff Turns: -x>
 *
 * <Set param Buff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' buff, change that buff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter buff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * <param Debuff Turns: +x>
 * <param Debuff Turns: -x>
 *
 * <Set param Debuff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' debuff, change that debuff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter debuff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * === JavaScript Notetags: On Add/Erase/Expire ===
 *
 * Using JavaScript code, you can use create custom effects that occur when a
 * state has bee added, erased, or expired.
 * 
 * ---
 *
 * <JS On Add State>
 *  code
 *  code
 * </JS On Add State>
 *
 * - Used for: State Notetags
 * - When a state is added, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Erase State>
 *  code
 *  code
 * </JS On Erase State>
 *
 * - Used for: State Notetags
 * - When a state is erased, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Expire State>
 *  code
 *  code
 * </JS On Expire State>
 *
 * - Used for: State Notetags
 * - When a state has expired, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * === JavaScript Notetags: Slip Damage/Healing ===
 *
 * Slip Damage, in RPG Maker vocabulary, refers to damage over time. The
 * following notetags allow you to perform custom slip damage/healing.
 *
 * ---
 *
 * <JS type Slip Damage>
 *  code
 *  code
 *  damage = code;
 * </JS type Slip Damage>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip damage is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip damage.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the damage.
 * - The 'state' variable refers to the current state being affected.
 * - The 'damage' variable is the finalized slip damage to be dealt.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 *
 * <JS type Slip Heal>
 *  code
 *  code
 *  heal = code;
 * </JS type Slip Heal>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip healing is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip healing.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the healing.
 * - The 'state' variable refers to the current state being affected.
 * - The 'heal' variable is the finalized slip healing to be recovered.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 * 
 * <JS Slip Refresh>
 * 
 * - Used for: State Notetags
 * - Refreshes the calculations made for the JS Slip Damage/Heal amounts at the
 *   start of each regeneration phase to allow for dynamic damage ranges.
 * 
 * ---
 *
 * === Passive State Notetags ===
 *
 * Passive States are states that are always applied to actors and enemies
 * provided that their conditions have been met. These can be granted through
 * database objects or through the Passive States Plugin Parameters.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * <Passive State: x>
 * <Passive States: x,x,x>
 *
 * <Passive State: name>
 * <Passive States: name, name, name>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy Notetags
 * - Adds passive state(s) x to trait object, applying it to related actor or
 *   enemy unit(s).
 * - Replace 'x' with a number to determine which state to add as a passive.
 * - If using 'name' notetag variant, replace 'name' with the name of the
 *   state(s) to add as a passive.
 * - Note: If you plan on applying a passive state through a skill, it must be
 *   through a skill that has been learned by the target and not a skill that
 *   is given through a trait.
 *
 * ---
 *
 * <Passive Stackable>
 *
 * - Used for: State Notetags
 * - Makes it possible for this passive state to be added multiple times.
 * - Otherwise, only one instance of the passive state can be available.
 *
 * ---
 *
 * <Passive Condition Class: id>
 * <Passive Condition Classes: id, id, id>
 *
 * <Passive Condition Class: name>
 * <Passive Condition Classes: name, name, name>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on the actor's
 *   current class. As long as the actor's current class matches one of the
 *   data entries, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Multiclass: id>
 * <Passive Condition Multiclass: id, id, id>
 *
 * <Passive Condition Multiclass: name>
 * <Passive Condition Multiclass: name, name, name>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_ClassChangeSystem!
 * - Determines the passive condition of the passive state based on the actor's
 *   multiclasses. As long as the actor has any of the matching classes
 *   assigned as a multiclass, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Switch ON: x>
 *
 * <Passive Condition All Switches ON: x,x,x>
 * <Passive Condition Any Switch ON: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are ON. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are ON. Otherwise, it would not be met.
 *
 * ---
 *
 * <Passive Condition Switch OFF: x>
 *
 * <Passive Condition All Switches OFF: x,x,x>
 * <Passive Condition Any Switch OFF: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are OFF. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are OFF. Otherwise, it would not be met.
 *
 * ---
 *
 * === JavaScript Notetags: Passive State ===
 *
 * The following is a notetag made for users with JavaScript knowledge to
 * determine if a passive state's condition can be met.
 *
 * ---
 *
 * <JS Passive Condition>
 *  code
 *  code
 *  condition = code;
 * </JS Passive Condition>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the state based on JavaScript code.
 * - Replace 'code' to determine if a passive state's condition has been met.
 * - The 'condition' variable returns a boolean (true/false) to determine if
 *   the passive state's condition is met or not.
 * - The 'user' variable refers to the user affected by the passive state.
 * - The 'state' variable refers to the passive state being checked.
 * - All other passive conditions must be met for this code to count.
 * 
 * **NOTE** Not everything can be used as a custom JS Passive Condition due to
 * limitations of the code. There are failsafe checks to prevent infinite loops
 * and some passive conditions will not register for this reason and the
 * conditional checks will behave as if the passive states have NOT been
 * applied for this reason. Such examples include the following:
 * 
 * - A passive state that requires another passive state
 * - A passive state that requires a trait effect from another state
 * - A passive state that requires a parameter value altered by another state
 * - A passive state that requires equipment to be worn but its equipment type
 *   access is provided by another state.
 * - Anything else that is similar in style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Skill Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust various aspects of the game regarding skills
 * from the custom Skill Menu Layout to global custom effects made in code.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Skill Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * Skill Type Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Skill Type Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Skill Type Window.
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Skill Menu?:
 *   - Show the Shop Status Window in the Skill Menu?
 *   - This is enabled if the Updated Layout is on.
 * 
 *   Adjust List Window?:
 *   - Automatically adjust the Skill List Window in the Skill Menu if using
 *     the Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Shop Status Window in the
 *     Skill Menu.
 *
 * ---
 *
 * Skill Types
 * 
 *   Hidden Skill Types:
 *   - Insert the ID's of the Skill Types you want hidden from view ingame.
 * 
 *   Hidden During Battle:
 *   - Insert the ID's of the Skill Types you want hidden during battle only.
 * 
 *   Icon: Normal Type:
 *   - Icon used for normal skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 * 
 *   Icon: Magic Type:
 *   - Icon used for magic skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Skill Conditions:
 *   - JavaScript code for a global-wide skill condition check.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Cost Types
 * ============================================================================
 *
 * Skill Cost Types are the resources that are used for your skills. These can
 * range from the default MP and TP resources to the newly added HP, Gold, and
 * Potion resources.
 *
 * ---
 *
 * Settings
 * 
 *   Name:
 *   - A name for this Skill Cost Type.
 * 
 *   Icon:
 *   - Icon used for this Skill Cost Type.
 *   - Use 0 for no icon.
 * 
 *   Font Color:
 *   - Text Color used to display this cost.
 *   - For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * 
 *   Font Size:
 *   - Font size used to display this cost.
 *
 * ---
 *
 * Cost Processing
 * 
 *   JS: Cost Calculation:
 *   - Code on how to calculate this resource cost for the skill.
 * 
 *   JS: Can Pay Cost?:
 *   - Code on calculating whether or not the user is able to pay the cost.
 * 
 *   JS: Paying Cost:
 *   - Code for if met, this is the actual process of paying of the cost.
 *
 * ---
 *
 * Window Display
 * 
 *   JS: Show Cost?:
 *   - Code for determining if the cost is shown or not.
 * 
 *   JS: Cost Text:
 *   - Code to determine the text (with Text Code support) used for the
 *     displayed cost.
 *
 * ---
 *
 * Gauge Display
 * 
 *   JS: Maximum Value:
 *   - Code to determine the maximum value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Current Value:
 *   - Code to determine the current value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Draw Gauge:
 *   - Code to determine how to draw the Skill Cost resource for this 
 *     gauge type.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General State Settings
 * ============================================================================
 *
 * These are general settings regarding RPG Maker MZ's state-related aspects
 * from how turns are reapplied to custom code that's ran whenever states are
 * added, erased, or expired.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying states.
 *   - Ignore: State doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let states go up to.
 *   - This can be changed with the <Max Turns: x> notetag.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display state turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Turn Color: Neutral:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Positive:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Negative:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Data Display
 * 
 *   Show Data?:
 *   - Display state data on top of window icons and sprites?
 * 
 *   Data Font Size:
 *   - Font size used for displaying state data.
 * 
 *   Offset X:
 *   - Offset the X position of the state data display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the state data display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is added.
 * 
 *   JS: On Erase State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is erased.
 * 
 *   JS: On Expire State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     has expired.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Buff/Debuff Settings
 * ============================================================================
 *
 * Buffs and debuffs don't count as states by RPG Maker MZ's mechanics, but
 * they do function close enough for them to be added to this plugin for
 * adjusting. Change these settings to make buffs and debuffs work to your
 * game's needs.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying buffs/debuffs.
 *   - Ignore: Buff/Debuff doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let buffs and debuffs go up to.
 *
 * ---
 *
 * Stacking
 * 
 *   Max Stacks: Buff:
 *   - Maximum number of stacks for buffs.
 * 
 *   Max Stacks: Debuff:
 *   - Maximum number of stacks for debuffs.
 * 
 *   JS: Buff/Debuff Rate:
 *   - Code to determine how much buffs and debuffs affect parameters.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display buff and debuff turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Color: Buffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Debuffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Rate Display
 * 
 *   Show Rate?:
 *   - Display buff and debuff rate on top of window icons and sprites?
 * 
 *   Rate Font Size:
 *   - Font size used for displaying rate.
 * 
 *   Offset X:
 *   - Offset the X position of the rate display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the rate display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Add Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Erase Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Erase Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Expire Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Expire Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Passive State Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust passive states that can affect all actors and
 * enemies as well as have global conditions.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * List
 * 
 *   Global Passives:
 *   - A list of passive states to affect actors and enemies.
 * 
 *   Actor-Only Passives:
 *   - A list of passive states to affect actors only.
 * 
 *   Enemy Passives:
 *   - A list of passive states to affect enemies only.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Condition Check:
 *   - JavaScript code for a global-wide passive condition check.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.26: January 20, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Conditional Passive Bypass check is now stronger to prevent even more
 *    infinite loops from happening. Update made by Olivia.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > State Settings > General > Turn End on Map
 * **** Update any state and buff turns on the map after this many steps.
 * **** Use 0 to disable.
 * 
 * Version 1.25: November 11, 2021
 * * Bug Fixes!
 * ** Hidden skill notetags should no longer crash upon not detecting actors
 *    for learned skills. Fix made by Olivia.
 * 
 * Version 1.24: November 4, 2021
 * * Documentation Update!
 * ** Added section: "Slip Damage Popup Clarification"
 * *** Slip Damage popups only show one popup for HP, MP, and TP each and it is
 *     the grand total of all the states and effects combined regardless of the
 *     number of states and effects on a battler. This is how it is in vanilla
 *     RPG Maker MZ and this is how we intend for it to be with the VisuStella
 *     MZ library.
 * *** This is NOT a bug!
 * *** The reason we are not changing this is because it does not properly
 *     relay information to the player accurately. When multiple popups appear,
 *     players only have roughly a second and a half to calculate it all for
 *     any form of information takeaway. We feel it is better suited for the
 *     player's overall convenience to show a cummulative change and steer the
 *     experience towards a more positive one.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.23: September 17, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * *** Skill Cost Types Plugin Parameters need to be updated for those who want
 *     the updated gauges. This can be done easily with the following steps:
 * **** Step 1: Create a new project.
 * **** Step 2: Install Skills and States Core version 1.23 into it.
 * **** Step 3: Copy the Plugin Parameter Settings for "Skill Cost Types".
 * **** Step 4: Return back to your original project.
 * **** Step 5: Paste Plugin Parameter Settings on top of "Skill Cost Types".
 * 
 * Version 1.22: August 6, 2021
 * * Documentation Update!
 * ** "Action End Removal for States" under Major Updates is changed to:
 * *** If your Plugin Parameter settings for "Action End Update" are enabled,
 *     then "Action End" has been updated so that it actually applies per
 *     action used instead of just being at the start of a battler's action
 *     set.
 * *** However, there are side effects to this: if a state has the "Cannot
 *     Move" restriction along with the "Action End" removal timing, then
 *     unsurprisingly, the state will never wear off because it's now based on
 *     actual actions ending. To offset this and remove confusion, "Action End"
 *     auto-removal timings for states with "Cannot Move" restrictions will be
 *     turned into "Turn End" auto-removal timings while the "Action End
 *     Update" is enabled.
 * *** This automatic change won't make it behave like an "Action End" removal
 *     timing would, but it's better than completely softlocking a battler.
 * * Feature Update!
 * ** Those using "Cannot Move" states with "Action End" auto-removal will now
 *    have be automatically converted into "Turn End" auto-removal if the
 *    plugin parameter "Action End Update" is set to true. Update by Irina.
 * 
 * Version 1.21: July 30, 2021
 * * Documentation Update!
 * ** Expanded "Action End Removal for States" section in Major Changes.
 * *** These changes have been in effect since Version 1.07 but have not been
 *     explained in excess detail in the documentation since.
 * **** Action End has been updated so that it actually applies per action used
 *      instead of just being at the start of a battler's action set. However,
 *      there are side effects to this: if a state has the "Cannot Move"
 *      restriction along with the "Action End" removal timing, then
 *      unsurprisingly, the state will never wear off because it's now based on
 *      actual actions ending. There are two solutions to this:
 * **** Don't make "Cannot Move" restriction states with "Action End". This is
 *      not a workaround. This is how the state removal is intended to work
 *      under the new change.
 * **** Go to the Skills & States Core Plugin Parameters, go to State
 *      Setttings, look for "Action End Update", and set it to false. You now
 *      reverted the removal timing system back to how it originally was in RPG
 *      Maker MZ's default battle system where it only updates based on an
 *      action set rather than per actual action ending.
 * 
 * Version 1.20: June 18, 2021
 * * Feature Update!
 * ** Updated automatic caching for conditional passive states to update more
 *    efficiently. Update made by Arisu.
 * 
 * Version 1.19: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.18: May 21, 2021
 * * Documentation Update
 * ** Added "Passive State Clarification" section.
 * *** As there is a lot of confusion regarding how passive states work and how
 *     people still miss the explanations found in the "Passive State Notetags"
 *     section AND the "Plugin Parameters: Passive State Settings", we are
 *     adding a third section to explain how they work.
 * *** All three sections will contain the full detailed explanation of how
 *     passive states work to clear common misconceptions about them.
 * 
 * Version 1.17: May 7, 2021
 * * Bug Fixes
 * ** State category removal is now usable outside of battle. Fix by Irina.
 * 
 * Version 1.16: April 30, 2021
 * * Bug Fixes!
 * ** When states with step removal have the <No Recover All Clear> or
 *    <No Death Clear> notetags, their step counter is no longer reset either.
 *    Fix made by Irina.
 * * New Features!
 * ** New notetag added by Arisu!
 * *** <List Name: name>
 * **** Makes the name of the skill appear different when show in the skill
 *      list. Using \V[x] as a part of the name will display that variable.
 * 
 * Version 1.15: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.14: March 12, 2021
 * * Bug Fixes!
 * ** Max HP Buff/Debuff should now display its turn counter. Fix by Yanfly.
 * * Documentation Update!
 * ** For the <JS Passive Condition>, we've added documentation on the
 *    limitations of passive conditions since they have been reported as bug
 *    reports, when in reality, they are failsafes to prevent infinite loops.
 *    Such limitations include the following:
 * *** A passive state that requires another passive state
 * *** A passive state that requires a trait effect from another state
 * *** A passive state that requires a parameter value altered by another state
 * *** A passive state that requires equipment to be worn but its equipment
 *     type access is provided by another state.
 * *** Anything else that is similar in style.
 * 
 * Version 1.13: February 26, 2021
 * * Documentation Update!
 * ** For <JS type Slip Damage> and <JS type Slip Heal> notetags, added the
 *    following notes:
 * *** When these states are applied via action effects, the slip calculations
 *     are one time calculations made upon applying and the damage is cached to
 *     be used for future on regeneration calculations.
 * *** For that reason, do not include game mechanics here such as adding
 *     states, buffs, debuffs, etc. as this notetag is meant for calculations
 *     only. Use the VisuStella Battle Core's <JS Pre-Regenerate> and
 *     <JS Post-Regenerate> notetags for game mechanics instead.
 * *** Passive states and states with the <JS Slip Refresh> notetag are exempt
 *     from the one time calculation and recalculated each regeneration phase.
 * * Feature Update!
 * ** Changed slip refresh requirements to entail <JS Slip Refresh> notetag for
 *    extra clarity. Update made by Olivia.
 * 
 * Version 1.12: February 19, 2021
 * * Feature Update
 * ** Changed the way passive state infinite stacking as a blanket coverage.
 *    Update made by Olivia.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Added a check to prevent passive states from infinitely stacking. Fix
 *    made by Olivia.
 * 
 * Version 1.10: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Skill Settings > Background Type
 * 
 * Version 1.09: January 1, 2021
 * * Bug Fixes!
 * ** Custom JS TP slip damage and healing should now work properly.
 *    Fix made by Yanfly.
 * 
 * Version 1.08: December 25, 2020
 * * Bug Fixes!
 * ** <JS On Add State> should no longer trigger multiple times for the death
 *    state. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for updated feature(s)!
 * * Feature Update!
 * ** <No Death Clear> can now allow the affected state to be added to an
 *    already dead battler. Update made by Yanfly.
 * 
 * Version 1.07: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Passive Condition Multiclass: id>
 * *** <Passive Condition Multiclass: id, id, id>
 * *** <Passive Condition Multiclass: name>
 * *** <Passive Condition Multiclass: name, name, name>
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > States > General > Action End Update
 * **** States with "Action End" auto-removal will also update turns at the end
 *      of each action instead of all actions.
 * ***** Turn this off if you wish for state turn updates to function like they
 *       do by default for "Action End".
 * 
 * Version 1.06: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.05: November 15, 2020
 * * Bug Fixes!
 * ** The alignment of the Skill Type Window is now fixed and will reflect upon
 *    the default settings. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** <State x Category Remove: All> notetag added by Yanfly.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: September 27, 2020
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.03: September 13, 2020
 * * Bug Fixes!
 * ** <JS type Slip Damage> custom notetags now work for passive states. Fix
 *    made by Olivia.
 * ** Setting the Command Window style to "Text Only" will no longer add in
 *    the icon text codes. Bug fixed by Yanfly.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** The JS Notetags for Add, Erase, and Expire states are now fixed. Fix made
 *    by Yanfly.
 * * Documentation Update!
 * ** <Show if learned Skill: x> and <Hide if learned Skill: x> notetags have
 *    the following added to their descriptions:
 * *** This does not apply to skills added by traits on actors, classes, any
 *     equipment, or states. These are not considered learned skills. They are
 *     considered temporary skills.
 * * New Features!
 * ** Notetags added by Yanfly:
 * *** <Show if has Skill: x>
 * *** <Show if have All Skills: x,x,x>
 * *** <Show if have Any Skills: x,x,x>
 * *** <Show if has Skill: name>
 * *** <Show if have All Skills: name, name, name>
 * *** <Show if have Any Skills: name, name, name>
 * *** <Hide if has Skill: x>
 * *** <Hide if have All Skills: x,x,x>
 * *** <Hide if have Any Skills: x,x,x>
 * *** <Hide if has Skill: name>
 * *** <Hide if have All Skills: name, name, name>
 * *** <Hide if have Any Skills: name, name, name>
 * *** These have been added to remove the confusion regarding learned skills
 *     as skills added through trait effects are not considered learned skills
 *     by RPG Maker MZ.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Passive states from Elements & Status Menu Core are now functional.
 *    Fix made by Olivia.
 * * Compatibility Update
 * ** Extended functions to allow for better compatibility.
 * * Updated documentation
 * ** Explains that passive states are not directly applied and are therefore
 *    not affected by code such as "a.isStateAffected(10)".
 * ** Instead, use "a.states().includes($dataStates[10])"
 * ** "Use #rrggbb for a hex color." lines now replaced with
 *    "For a hex color, use #rrggbb with VisuMZ_1_MessageCore"
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param SkillsStatesCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Skills:struct
 * @text Skill Settings
 * @type struct<Skills>
 * @desc Adjust general skill settings here.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","SkillTypeWindow":"","CmdStyle:str":"auto","CmdTextAlign:str":"left","ListWindow":"","ListWindowCols:num":"1","ShopStatusWindow":"","ShowShopStatus:eval":"true","SkillSceneAdjustSkillList:eval":"true","SkillMenuStatusRect:func":"\"const ww = this.shopStatusWidth();\\nconst wh = this._itemWindow.height;\\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\\nconst wy = this._itemWindow.y;\\nreturn new Rectangle(wx, wy, ww, wh);\"","SkillTypes":"","HiddenSkillTypes:arraynum":"[]","BattleHiddenSkillTypes:arraynum":"[]","IconStypeNorm:num":"78","IconStypeMagic:num":"79","CustomJS":"","SkillConditionJS:func":"\"// Declare Variables\\nconst skill = arguments[0];\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet enabled = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn enabled;\""}
 *
 * @param Costs:arraystruct
 * @text Skill Cost Types
 * @parent Skills:struct
 * @type struct<Cost>[]
 * @desc A list of all the skill cost types added by this plugin
 * and the code that controls them in-game.
 * @default ["{\"Name:str\":\"HP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"20\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mhp / 100);\\\\n}\\\\nif (note.match(/<JS HP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS HP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<HP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<HP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<HP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<HP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nif (cost <= 0) {\\\\n    return true;\\\\n} else {\\\\n    return user._hp > cost;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._hp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.hp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mhp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.hp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.hpGaugeColor1();\\\\nconst color2 = ColorManager.hpGaugeColor2();\\\\nconst label = TextManager.hpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.hpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"MP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"23\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = Math.floor(skill.mpCost * user.mcr);\\\\nif (note.match(/<MP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mmp / 100);\\\\n}\\\\nif (note.match(/<JS MP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS MP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<MP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<MP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<MP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<MP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._mp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._mp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.mp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mmp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.mpGaugeColor1();\\\\nconst color2 = ColorManager.mpGaugeColor2();\\\\nconst label = TextManager.mpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.mpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"TP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"29\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = skill.tpCost;\\\\nif (note.match(/<TP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.maxTp() / 100);\\\\n}\\\\nif (note.match(/<JS TP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS TP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<TP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<TP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<TP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<TP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._tp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._tp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.tp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.maxTp();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.tp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.tpGaugeColor1();\\\\nconst color2 = ColorManager.tpGaugeColor2();\\\\nconst label = TextManager.tpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.tpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Gold\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"17\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * $gameParty.gold() / 100);\\\\n}\\\\nif (note.match(/<JS GOLD COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS GOLD COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<GOLD COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<GOLD COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<GOLD COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<GOLD COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn $gameParty.gold() >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\n$gameParty.loseGold(cost);\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.currencyUnit;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxGold();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.gold();\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Label\\\\nconst label = TextManager.currencyUnit;\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = sprite.bitmapWidth();\\\\nconst lh = sprite.bitmapHeight();\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Potion\",\"Settings\":\"\",\"Icon:num\":\"176\",\"FontColor:str\":\"0\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<POTION COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<JS POTION COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS POTION COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<POTION COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<POTION COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<POTION COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<POTION COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return Boolean\\\\nif (user.isActor() && cost > 0) {\\\\n    return $gameParty.numItems(item) >= cost;\\\\n} else {\\\\n    return true;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Process Payment\\\\nif (user.isActor()) {\\\\n    $gameParty.loseItem(item, cost);\\\\n}\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = settings.Name;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '×%1'.format(cost);\\\\n\\\\n// Text: Add Icon\\\\ntext += '\\\\\\\\\\\\\\\\I[%1]'.format(item.iconIndex);\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxItems(item);\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.numItems(item);\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.textColor(30);\\\\nconst color2 = ColorManager.textColor(31);\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst item = $dataItems[7];\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Icon\\\\nconst iconIndex = item.iconIndex;\\\\nconst iconBitmap = ImageManager.loadSystem(\\\\\\\"IconSet\\\\\\\");\\\\nconst pw = ImageManager.iconWidth;\\\\nconst ph = ImageManager.iconHeight;\\\\nconst sx = (iconIndex % 16) * pw;\\\\nconst sy = Math.floor(iconIndex / 16) * ph;\\\\nbitmap.blt(iconBitmap, sx, sy, pw, ph, 0, 0, 24, 24);\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}"]
 *
 * @param BreakSkills
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param States:struct
 * @text State Settings
 * @type struct<States>
 * @desc Adjust general state settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","ActionEndUpdate:eval":"true","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorNeutral:str":"0","ColorPositive:str":"24","ColorNegative:str":"27","Data":"","ShowData:eval":"true","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\"","onEraseStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param Buffs:struct
 * @text Buff/Debuff Settings
 * @parent States:struct
 * @type struct<Buffs>
 * @desc Adjust general buff/debuff settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","Stacking":"","StackBuffMax:num":"2","StackDebuffMax:num":"2","MultiplierJS:func":"\"// Declare Variables\\nconst user = this;\\nconst paramId = arguments[0];\\nconst buffLevel = arguments[1];\\nlet rate = 1;\\n\\n// Perform Calculations\\nrate += buffLevel * 0.25;\\n\\n// Return Rate\\nreturn Math.max(0, rate);\"","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorBuff:str":"24","ColorDebuff:str":"27","Data":"","ShowData:eval":"false","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onAddDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param PassiveStates:struct
 * @text Passive States
 * @parent States:struct
 * @type struct<PassiveStates>
 * @desc Adjust passive state settings here.
 * @default {"List":"","Global:arraynum":"[]","Actor:arraynum":"[]","Enemy:arraynum":"[]","CustomJS":"","PassiveConditionJS:func":"\"// Declare Variables\\nconst state = arguments[0];\\nconst stateId = state.id;\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet condition = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn condition;\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Skill Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Skills:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Skill Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent SkillTypeWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Skill Type Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent SkillTypeWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Skill Type Window.
 * @default left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Skill Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Skill Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param SkillSceneAdjustSkillList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Skill List Window in the Skill Menu if using the Shop Status Window?
 * @default true
 *
 * @param SkillSceneStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Shop Status Window in the Skill Menu.
 * @default "const ww = this.shopStatusWidth();\nconst wh = this._itemWindow.height;\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\nconst wy = this._itemWindow.y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SkillTypes
 * @text Skill Types
 *
 * @param HiddenSkillTypes:arraynum
 * @text Hidden Skill Types
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden from view ingame.
 * @default []
 *
 * @param BattleHiddenSkillTypes:arraynum
 * @text Hidden During Battle
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden during battle only.
 * @default []
 *
 * @param IconStypeNorm:num
 * @text Icon: Normal Type
 * @parent SkillTypes
 * @desc Icon used for normal skill types that aren't assigned any icons.
 * @default 78
 *
 * @param IconStypeMagic:num
 * @text Icon: Magic Type
 * @parent SkillTypes
 * @desc Icon used for magic skill types that aren't assigned any icons.
 * @default 79
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param SkillConditionJS:func
 * @text JS: Skill Conditions
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide skill condition check.
 * @default "// Declare Variables\nconst skill = arguments[0];\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet enabled = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn enabled;"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Cost Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Cost:
 *
 * @param Name:str
 * @text Name
 * @desc A name for this Skill Cost Type.
 * @default Untitled
 *
 * @param Settings
 *
 * @param Icon:num
 * @text Icon
 * @parent Settings
 * @desc Icon used for this Skill Cost Type.
 * Use 0 for no icon.
 * @default 0
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Settings
 * @desc Text Color used to display this cost.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @parent Settings
 * @type number
 * @min 1
 * @desc Font size used to display this cost.
 * @default 22
 *
 * @param Cost
 * @text Cost Processing
 *
 * @param CalcJS:func
 * @text JS: Cost Calculation
 * @parent Cost
 * @type note
 * @desc Code on how to calculate this resource cost for the skill.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nlet cost = 0;\n\n// Return cost value\nreturn Math.round(Math.max(0, cost));"
 *
 * @param CanPayJS:func
 * @text JS: Can Pay Cost?
 * @parent Cost
 * @type note
 * @desc Code on calculating whether or not the user is able to pay the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn true;"
 *
 * @param PayJS:func
 * @text JS: Paying Cost
 * @parent Cost
 * @type note
 * @desc Code for if met, this is the actual process of paying of the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Process Payment\n"
 *
 * @param Windows
 * @text Window Display
 *
 * @param ShowJS:func
 * @text JS: Show Cost?
 * @parent  Windows
 * @type note
 * @desc Code for determining if the cost is shown or not.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn cost > 0;"
 *
 * @param TextJS:func
 * @text JS: Cost Text
 * @parent  Windows
 * @type note
 * @desc Code to determine the text (with Text Code support) used for the displayed cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\nconst settings = arguments[2];\nconst fontSize = settings.FontSize;\nconst color = settings.FontColor;\nconst name = settings.Name;\nconst icon = settings.Icon;\nlet text = '';\n\n// Text: Change Font Size\ntext += '\\\\FS[%1]'.format(fontSize);\n\n// Text: Add Color\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\n    text += '\\\\HexColor<#%1>'.format(String(RegExp.$1));\n} else {\n    text += '\\\\C[%1]'.format(color);\n}\n\n// Text: Add Cost\ntext += '%1 %2'.format(cost, name);\n\n// Text: Add Icon\nif (icon  > 0) {\n    text += '\\\\I[%1]'.format(icon);\n}\n\n// Return text\nreturn text;"
 *
 * @param Gauges
 * @text Gauge Display
 *
 * @param GaugeMaxJS:func
 * @text JS: Maximum Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the maximum value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeCurrentJS:func
 * @text JS: Current Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the current value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeDrawJS:func
 * @text JS: Draw Gauge
 * @parent  Gauges
 * @type note
 * @desc Code to determine how to draw the Skill Cost resource for this gauge type.
 * @default "// Declare Variables\nconst sprite = this;\nconst settings = sprite._costSettings;\nconst bitmap = sprite.bitmap;\nconst user = sprite._battler;\nconst currentValue = sprite.currentDisplayedValue();\n\n// Draw Gauge\nconst color1 = ColorManager.textColor(30);\nconst color2 = ColorManager.textColor(31);\nconst gx = 0;\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\nconst gw = sprite.bitmapWidth() - gx;\nconst gh = sprite.gaugeHeight();\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\n\n// Draw Label\nconst label = settings.Name;\nconst lx = 4;\nconst ly = 0;\nconst lw = sprite.bitmapWidth();\nconst lh = sprite.bitmapHeight();\nsprite.setupLabelFont();\nbitmap.paintOpacity = 255;\nbitmap.drawText(label, lx, ly, lw, lh, \"left\");\n\n// Draw Value\nconst vw = sprite.bitmapWidth() - 2;\nconst vh = sprite.bitmapHeight();\nsprite.setupValueFont();\nbitmap.textColor = ColorManager.normalColor();\nbitmap.drawText(currentValue, 0, 0, vw, vh, \"right\");"
 *
 */
/* ----------------------------------------------------------------------------
 * General State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~States:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: State doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying states.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let states go up to.
 * This can be changed with the <Max Turns: x> notetag.
 * @default 9999
 *
 * @param ActionEndUpdate:eval
 * @text Action End Update
 * @parent General
 * @type boolean
 * @on Update Each Action
 * @off Don't Change
 * @desc States with "Action End" auto-removal will also update
 * turns at the end of each action instead of all actions.
 * @default true
 *
 * @param TurnEndOnMap:num
 * @text Turn End on Map
 * @parent General
 * @type number
 * @desc Update any state and buff turns on the map after
 * this many steps. Use 0 to disable.
 * @default 20
 *
 * @param Turns
 * @text Turn Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param ColorNeutral:str
 * @text Turn Color: Neutral
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorPositive:str
 * @text Turn Color: Positive
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorNegative:str
 * @text Turn Color: Negative
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Data Display
 *
 * @param ShowData:eval
 * @text Show Data?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state data on top of window icons and sprites?
 * @default true
 *
 * @param DataFontSize:num
 * @text Data Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying state data.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the state data display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the state data display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddStateJS:func
 * @text JS: On Add State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is added.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseStateJS:func
 * @text JS: On Erase State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is erased.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireStateJS:func
 * @text JS: On Expire State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state has expired.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * General Buff/Debuff Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buffs:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: Buff/Debuff doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying buffs/debuffs.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let buffs and debuffs go up to.
 * @default 9999
 *
 * @param Stacking
 *
 * @param StackBuffMax:num
 * @text Max Stacks: Buff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for buffs.
 * @default 2
 *
 * @param StackDebuffMax:num
 * @text Max Stacks: Debuff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for debuffs.
 * @default 2
 *
 * @param MultiplierJS:func
 * @text JS: Buff/Debuff Rate
 * @parent Stacking
 * @type note
 * @desc Code to determine how much buffs and debuffs affect parameters.
 * @default "// Declare Variables\nconst user = this;\nconst paramId = arguments[0];\nconst buffLevel = arguments[1];\nlet rate = 1;\n\n// Perform Calculations\nrate += buffLevel * 0.25;\n\n// Return Rate\nreturn Math.max(0, rate);"
 *
 * @param Turns
 * @text Turns Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param ColorBuff:str
 * @text Turn Color: Buffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorDebuff:str
 * @text Turn Color: Debuffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Rate Display
 *
 * @param ShowData:eval
 * @text Show Rate?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff rate on top of window icons and sprites?
 * @default false
 *
 * @param DataFontSize:num
 * @text Rate Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying rate.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the rate display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the rate display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddBuffJS:func
 * @text JS: On Add Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onAddDebuffJS:func
 * @text JS: On Add Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseBuffJS:func
 * @text JS: On Erase Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseDebuffJS:func
 * @text JS: On Erase Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireBuffJS:func
 * @text JS: On Expire Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireDebuffJS:func
 * @text JS: On Expire Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Passive State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PassiveStates:
 *
 * @param List
 *
 * @param Global:arraynum
 * @text Global Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors and enemies.
 * @default []
 *
 * @param Actor:arraynum
 * @text Actor-Only Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors only.
 * @default []
 *
 * @param Enemy:arraynum
 * @text Enemy Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect enemies only.
 * @default []
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param PassiveConditionJS:func
 * @text JS: Condition Check
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide passive condition check.
 * @default "// Declare Variables\nconst state = arguments[0];\nconst stateId = state.id;\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet condition = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn condition;"
 *
 */
//=============================================================================

function _0x5c24(_0x1acdd3,_0x5b24be){const _0x39db3c=_0x39db();return _0x5c24=function(_0x5c242b,_0x3f0f56){_0x5c242b=_0x5c242b-0x186;let _0x452752=_0x39db3c[_0x5c242b];return _0x452752;},_0x5c24(_0x1acdd3,_0x5b24be);}const _0x5c102f=_0x5c24;(function(_0xb81703,_0x1d941a){const _0x26a8a5=_0x5c24,_0x31b7ec=_0xb81703();while(!![]){try{const _0x1a24e6=parseInt(_0x26a8a5(0x221))/0x1*(parseInt(_0x26a8a5(0x18b))/0x2)+parseInt(_0x26a8a5(0x31d))/0x3+-parseInt(_0x26a8a5(0x37a))/0x4+parseInt(_0x26a8a5(0x222))/0x5*(parseInt(_0x26a8a5(0x343))/0x6)+parseInt(_0x26a8a5(0x1e7))/0x7+parseInt(_0x26a8a5(0x371))/0x8*(-parseInt(_0x26a8a5(0x37d))/0x9)+-parseInt(_0x26a8a5(0x29f))/0xa*(parseInt(_0x26a8a5(0x335))/0xb);if(_0x1a24e6===_0x1d941a)break;else _0x31b7ec['push'](_0x31b7ec['shift']());}catch(_0x4bc439){_0x31b7ec['push'](_0x31b7ec['shift']());}}}(_0x39db,0x7bd23));var label=_0x5c102f(0x3a5),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x5c102f(0x2ad)](function(_0x41dc7e){const _0x2b084a=_0x5c102f;return _0x41dc7e[_0x2b084a(0x1de)]&&_0x41dc7e[_0x2b084a(0x1b0)][_0x2b084a(0x1f7)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x5c102f(0x308)]||{},VisuMZ[_0x5c102f(0x32f)]=function(_0x51a55d,_0x4dcf51){const _0x1c6138=_0x5c102f;for(const _0x21dbb5 in _0x4dcf51){if(_0x21dbb5[_0x1c6138(0x29e)](/(.*):(.*)/i)){const _0x14b7fc=String(RegExp['$1']),_0x862328=String(RegExp['$2'])[_0x1c6138(0x3b8)]()[_0x1c6138(0x353)]();let _0x189a29,_0x1e0be8,_0x1650f9;switch(_0x862328){case'NUM':_0x189a29=_0x4dcf51[_0x21dbb5]!==''?Number(_0x4dcf51[_0x21dbb5]):0x0;break;case'ARRAYNUM':_0x1e0be8=_0x4dcf51[_0x21dbb5]!==''?JSON[_0x1c6138(0x19d)](_0x4dcf51[_0x21dbb5]):[],_0x189a29=_0x1e0be8[_0x1c6138(0x1e1)](_0x12ae68=>Number(_0x12ae68));break;case'EVAL':_0x189a29=_0x4dcf51[_0x21dbb5]!==''?eval(_0x4dcf51[_0x21dbb5]):null;break;case _0x1c6138(0x302):_0x1e0be8=_0x4dcf51[_0x21dbb5]!==''?JSON['parse'](_0x4dcf51[_0x21dbb5]):[],_0x189a29=_0x1e0be8[_0x1c6138(0x1e1)](_0x48d898=>eval(_0x48d898));break;case _0x1c6138(0x21b):_0x189a29=_0x4dcf51[_0x21dbb5]!==''?JSON[_0x1c6138(0x19d)](_0x4dcf51[_0x21dbb5]):'';break;case _0x1c6138(0x36f):_0x1e0be8=_0x4dcf51[_0x21dbb5]!==''?JSON['parse'](_0x4dcf51[_0x21dbb5]):[],_0x189a29=_0x1e0be8[_0x1c6138(0x1e1)](_0x4c6b93=>JSON[_0x1c6138(0x19d)](_0x4c6b93));break;case _0x1c6138(0x22e):_0x189a29=_0x4dcf51[_0x21dbb5]!==''?new Function(JSON['parse'](_0x4dcf51[_0x21dbb5])):new Function('return\x200');break;case _0x1c6138(0x242):_0x1e0be8=_0x4dcf51[_0x21dbb5]!==''?JSON[_0x1c6138(0x19d)](_0x4dcf51[_0x21dbb5]):[],_0x189a29=_0x1e0be8[_0x1c6138(0x1e1)](_0x2fd21f=>new Function(JSON['parse'](_0x2fd21f)));break;case _0x1c6138(0x3a7):_0x189a29=_0x4dcf51[_0x21dbb5]!==''?String(_0x4dcf51[_0x21dbb5]):'';break;case _0x1c6138(0x25c):_0x1e0be8=_0x4dcf51[_0x21dbb5]!==''?JSON[_0x1c6138(0x19d)](_0x4dcf51[_0x21dbb5]):[],_0x189a29=_0x1e0be8[_0x1c6138(0x1e1)](_0x1cd950=>String(_0x1cd950));break;case _0x1c6138(0x2f4):_0x1650f9=_0x4dcf51[_0x21dbb5]!==''?JSON[_0x1c6138(0x19d)](_0x4dcf51[_0x21dbb5]):{},_0x51a55d[_0x14b7fc]={},VisuMZ[_0x1c6138(0x32f)](_0x51a55d[_0x14b7fc],_0x1650f9);continue;case _0x1c6138(0x327):_0x1e0be8=_0x4dcf51[_0x21dbb5]!==''?JSON[_0x1c6138(0x19d)](_0x4dcf51[_0x21dbb5]):[],_0x189a29=_0x1e0be8[_0x1c6138(0x1e1)](_0x339123=>VisuMZ[_0x1c6138(0x32f)]({},JSON['parse'](_0x339123)));break;default:continue;}_0x51a55d[_0x14b7fc]=_0x189a29;}}return _0x51a55d;},(_0x5cb168=>{const _0x5effa3=_0x5c102f,_0x425796=_0x5cb168['name'];for(const _0x55a9d4 of dependencies){if(!Imported[_0x55a9d4]){alert(_0x5effa3(0x393)[_0x5effa3(0x2ec)](_0x425796,_0x55a9d4)),SceneManager[_0x5effa3(0x2e1)]();break;}}const _0x387018=_0x5cb168[_0x5effa3(0x1b0)];if(_0x387018[_0x5effa3(0x29e)](/\[Version[ ](.*?)\]/i)){const _0x34d4a0=Number(RegExp['$1']);_0x34d4a0!==VisuMZ[label]['version']&&(alert(_0x5effa3(0x38b)['format'](_0x425796,_0x34d4a0)),SceneManager[_0x5effa3(0x2e1)]());}if(_0x387018['match'](/\[Tier[ ](\d+)\]/i)){const _0x286f2d=Number(RegExp['$1']);_0x286f2d<tier?(alert(_0x5effa3(0x306)[_0x5effa3(0x2ec)](_0x425796,_0x286f2d,tier)),SceneManager[_0x5effa3(0x2e1)]()):tier=Math[_0x5effa3(0x19e)](_0x286f2d,tier);}VisuMZ[_0x5effa3(0x32f)](VisuMZ[label][_0x5effa3(0x308)],_0x5cb168[_0x5effa3(0x31a)]);})(pluginData),VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x191)]=Scene_Boot[_0x5c102f(0x317)][_0x5c102f(0x3ae)],Scene_Boot[_0x5c102f(0x317)][_0x5c102f(0x3ae)]=function(){const _0xd1064d=_0x5c102f;VisuMZ['SkillsStatesCore'][_0xd1064d(0x191)][_0xd1064d(0x2ed)](this),this[_0xd1064d(0x24d)](),VisuMZ[_0xd1064d(0x3a5)][_0xd1064d(0x235)]();},Scene_Boot['prototype'][_0x5c102f(0x24d)]=function(){const _0x5704da=_0x5c102f;if(VisuMZ['ParseAllNotetags'])return;this[_0x5704da(0x1c0)](),this[_0x5704da(0x27c)]();},Scene_Boot[_0x5c102f(0x317)][_0x5c102f(0x1c0)]=function(){const _0x1a9fbe=_0x5c102f;for(const _0x285cc4 of $dataSkills){if(!_0x285cc4)continue;VisuMZ[_0x1a9fbe(0x3a5)][_0x1a9fbe(0x30f)](_0x285cc4),VisuMZ['SkillsStatesCore']['Parse_Notetags_Skill_JS'](_0x285cc4);}},Scene_Boot[_0x5c102f(0x317)][_0x5c102f(0x27c)]=function(){const _0x60b067=_0x5c102f;for(const _0x327420 of $dataStates){if(!_0x327420)continue;VisuMZ[_0x60b067(0x3a5)][_0x60b067(0x333)](_0x327420),VisuMZ[_0x60b067(0x3a5)][_0x60b067(0x348)](_0x327420),VisuMZ[_0x60b067(0x3a5)][_0x60b067(0x2aa)](_0x327420),VisuMZ['SkillsStatesCore'][_0x60b067(0x1f0)](_0x327420);}},VisuMZ[_0x5c102f(0x3a5)]['ParseSkillNotetags']=VisuMZ[_0x5c102f(0x23c)],VisuMZ['ParseSkillNotetags']=function(_0x2549f5){const _0x5ee330=_0x5c102f;VisuMZ[_0x5ee330(0x3a5)]['ParseSkillNotetags'][_0x5ee330(0x2ed)](this,_0x2549f5),VisuMZ[_0x5ee330(0x3a5)][_0x5ee330(0x30f)](_0x2549f5),VisuMZ[_0x5ee330(0x3a5)]['Parse_Notetags_Skill_JS'](_0x2549f5);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2b8)]=VisuMZ[_0x5c102f(0x2b8)],VisuMZ[_0x5c102f(0x2b8)]=function(_0x31c831){const _0x33a3e4=_0x5c102f;VisuMZ[_0x33a3e4(0x3a5)][_0x33a3e4(0x2b8)][_0x33a3e4(0x2ed)](this,_0x31c831),VisuMZ[_0x33a3e4(0x3a5)][_0x33a3e4(0x333)](_0x31c831),VisuMZ[_0x33a3e4(0x3a5)][_0x33a3e4(0x348)](_0x31c831),VisuMZ[_0x33a3e4(0x3a5)]['Parse_Notetags_State_SlipEffectJS'](_0x31c831),VisuMZ[_0x33a3e4(0x3a5)][_0x33a3e4(0x1f0)](_0x31c831);},VisuMZ[_0x5c102f(0x3a5)]['Parse_Notetags_Skill_Cost']=function(_0x13d6cd){const _0x750316=_0x5c102f,_0x26eff9=_0x13d6cd[_0x750316(0x2ac)];_0x26eff9[_0x750316(0x29e)](/<MP COST:[ ](\d+)>/i)&&(_0x13d6cd['mpCost']=Number(RegExp['$1'])),_0x26eff9[_0x750316(0x29e)](/<TP COST:[ ](\d+)>/i)&&(_0x13d6cd['tpCost']=Number(RegExp['$1']));},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x34d)]={},VisuMZ['SkillsStatesCore'][_0x5c102f(0x1c5)]={},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2bd)]=function(_0x329b29){const _0x465bd5=_0x5c102f,_0x33886d=_0x329b29[_0x465bd5(0x2ac)];if(_0x33886d[_0x465bd5(0x29e)](/<JS SKILL ENABLE>\s*([\s\S]*)\s*<\/JS SKILL ENABLE>/i)){const _0x11184e=String(RegExp['$1']),_0x4b704d=_0x465bd5(0x27e)[_0x465bd5(0x2ec)](_0x11184e);VisuMZ[_0x465bd5(0x3a5)][_0x465bd5(0x34d)][_0x329b29['id']]=new Function(_0x465bd5(0x1ef),_0x4b704d);}if(_0x33886d[_0x465bd5(0x29e)](/<JS SKILL VISIBLE>\s*([\s\S]*)\s*<\/JS SKILL VISIBLE>/i)){const _0x3507cc=String(RegExp['$1']),_0x300f2b=_0x465bd5(0x3c8)[_0x465bd5(0x2ec)](_0x3507cc);VisuMZ[_0x465bd5(0x3a5)][_0x465bd5(0x1c5)][_0x329b29['id']]=new Function(_0x465bd5(0x1ef),_0x300f2b);}},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x333)]=function(_0xfb315e){const _0x386087=_0x5c102f;_0xfb315e[_0x386087(0x397)]=[_0x386087(0x207),_0x386087(0x1f2)];const _0x1ae002=_0xfb315e[_0x386087(0x2ac)],_0x1860bc=_0x1ae002[_0x386087(0x29e)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x1860bc)for(const _0x1424b6 of _0x1860bc){_0x1424b6[_0x386087(0x29e)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x3d2680=String(RegExp['$1'])[_0x386087(0x3b8)]()[_0x386087(0x353)]()[_0x386087(0x28b)](',');for(const _0x30bf31 of _0x3d2680){_0xfb315e[_0x386087(0x397)]['push'](_0x30bf31[_0x386087(0x353)]());}}if(_0x1ae002['match'](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x3abe64=RegExp['$1']['split'](/[\r\n]+/);for(const _0x22f99b of _0x3abe64){_0xfb315e[_0x386087(0x397)][_0x386087(0x1ee)](_0x22f99b[_0x386087(0x3b8)]()[_0x386087(0x353)]());}}_0x1ae002['match'](/<POSITIVE STATE>/i)&&_0xfb315e[_0x386087(0x397)]['push'](_0x386087(0x2a3)),_0x1ae002['match'](/<NEGATIVE STATE>/i)&&_0xfb315e['categories'][_0x386087(0x1ee)]('NEGATIVE');},VisuMZ[_0x5c102f(0x3a5)]['statePassiveConditionJS']={},VisuMZ[_0x5c102f(0x3a5)]['Parse_Notetags_State_PassiveJS']=function(_0x151684){const _0x46e8c9=_0x5c102f,_0x9affba=_0x151684['note'];if(_0x9affba['match'](/<JS PASSIVE CONDITION>\s*([\s\S]*)\s*<\/JS PASSIVE CONDITION>/i)){const _0x47c374=String(RegExp['$1']),_0x53da86=_0x46e8c9(0x3b7)['format'](_0x47c374);VisuMZ[_0x46e8c9(0x3a5)][_0x46e8c9(0x32b)][_0x151684['id']]=new Function('state',_0x53da86);}},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2dc)]={},VisuMZ['SkillsStatesCore']['stateHpSlipHealJS']={},VisuMZ[_0x5c102f(0x3a5)]['stateMpSlipDamageJS']={},VisuMZ[_0x5c102f(0x3a5)]['stateMpSlipHealJS']={},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x25b)]={},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x347)]={},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2aa)]=function(_0x4551ef){const _0x5556aa=_0x5c102f,_0x301f53=_0x4551ef[_0x5556aa(0x2ac)],_0x2853ef=_0x5556aa(0x1cf);if(_0x301f53[_0x5556aa(0x29e)](/<JS HP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS HP SLIP DAMAGE>/i)){const _0x2d605b=String(RegExp['$1']),_0x136752=_0x2853ef[_0x5556aa(0x2ec)](_0x2d605b,_0x5556aa(0x2fc),-0x1,'slipHp');VisuMZ['SkillsStatesCore']['stateHpSlipDamageJS'][_0x4551ef['id']]=new Function(_0x5556aa(0x2de),_0x136752);}else{if(_0x301f53[_0x5556aa(0x29e)](/<JS HP SLIP HEAL>\s*([\s\S]*)\s*<\/JS HP SLIP HEAL>/i)){const _0x310b81=String(RegExp['$1']),_0x49a674=_0x2853ef[_0x5556aa(0x2ec)](_0x310b81,_0x5556aa(0x1e3),0x1,'slipHp');VisuMZ[_0x5556aa(0x3a5)][_0x5556aa(0x387)][_0x4551ef['id']]=new Function('stateId',_0x49a674);}}if(_0x301f53[_0x5556aa(0x29e)](/<JS MP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS MP SLIP DAMAGE>/i)){const _0x4f1a3c=String(RegExp['$1']),_0x47c5c2=_0x2853ef['format'](_0x4f1a3c,_0x5556aa(0x2fc),-0x1,_0x5556aa(0x206));VisuMZ[_0x5556aa(0x3a5)]['stateMpSlipDamageJS'][_0x4551ef['id']]=new Function('stateId',_0x47c5c2);}else{if(_0x301f53[_0x5556aa(0x29e)](/<JS MP SLIP HEAL>\s*([\s\S]*)\s*<\/JS MP SLIP HEAL>/i)){const _0x4153e2=String(RegExp['$1']),_0x2c8a96=_0x2853ef[_0x5556aa(0x2ec)](_0x4153e2,_0x5556aa(0x1e3),0x1,'slipMp');VisuMZ[_0x5556aa(0x3a5)][_0x5556aa(0x39b)][_0x4551ef['id']]=new Function(_0x5556aa(0x2de),_0x2c8a96);}}if(_0x301f53[_0x5556aa(0x29e)](/<JS TP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS TP SLIP DAMAGE>/i)){const _0x1a99a0=String(RegExp['$1']),_0x5ef317=_0x2853ef[_0x5556aa(0x2ec)](_0x1a99a0,_0x5556aa(0x2fc),-0x1,_0x5556aa(0x3d3));VisuMZ[_0x5556aa(0x3a5)]['stateTpSlipDamageJS'][_0x4551ef['id']]=new Function('stateId',_0x5ef317);}else{if(_0x301f53[_0x5556aa(0x29e)](/<JS TP SLIP HEAL>\s*([\s\S]*)\s*<\/JS TP SLIP HEAL>/i)){const _0x8cdfd7=String(RegExp['$1']),_0x29df45=_0x2853ef['format'](_0x8cdfd7,_0x5556aa(0x1e3),0x1,_0x5556aa(0x3d3));VisuMZ[_0x5556aa(0x3a5)][_0x5556aa(0x347)][_0x4551ef['id']]=new Function(_0x5556aa(0x2de),_0x29df45);}}},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x28c)]={},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x231)]={},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x384)]={},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1f0)]=function(_0x563e83){const _0x2d44b2=_0x5c102f,_0x2fd7ab=_0x563e83[_0x2d44b2(0x2ac)],_0x239091=_0x2d44b2(0x2cf);if(_0x2fd7ab[_0x2d44b2(0x29e)](/<JS ON ADD STATE>\s*([\s\S]*)\s*<\/JS ON ADD STATE>/i)){const _0x25480a=String(RegExp['$1']),_0x95e7d0=_0x239091['format'](_0x25480a);VisuMZ['SkillsStatesCore'][_0x2d44b2(0x28c)][_0x563e83['id']]=new Function(_0x2d44b2(0x2de),_0x95e7d0);}if(_0x2fd7ab['match'](/<JS ON ERASE STATE>\s*([\s\S]*)\s*<\/JS ON ERASE STATE>/i)){const _0x34614b=String(RegExp['$1']),_0x443655=_0x239091[_0x2d44b2(0x2ec)](_0x34614b);VisuMZ['SkillsStatesCore'][_0x2d44b2(0x231)][_0x563e83['id']]=new Function(_0x2d44b2(0x2de),_0x443655);}if(_0x2fd7ab[_0x2d44b2(0x29e)](/<JS ON EXPIRE STATE>\s*([\s\S]*)\s*<\/JS ON EXPIRE STATE>/i)){const _0x31d0e6=String(RegExp['$1']),_0x5d7779=_0x239091['format'](_0x31d0e6);VisuMZ[_0x2d44b2(0x3a5)][_0x2d44b2(0x384)][_0x563e83['id']]=new Function('stateId',_0x5d7779);}},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x235)]=function(){const _0xd7e836=_0x5c102f;if(!VisuMZ[_0xd7e836(0x3a5)][_0xd7e836(0x308)][_0xd7e836(0x2e2)][_0xd7e836(0x1a4)])return;for(const _0x29e19f of $dataStates){if(!_0x29e19f)continue;_0x29e19f[_0xd7e836(0x284)]===0x4&&_0x29e19f['autoRemovalTiming']===0x1&&(_0x29e19f[_0xd7e836(0x1a0)]=0x2);}},DataManager['getClassIdWithName']=function(_0x31cba2){const _0x1db3a4=_0x5c102f;_0x31cba2=_0x31cba2[_0x1db3a4(0x3b8)]()['trim'](),this['_classIDs']=this[_0x1db3a4(0x23e)]||{};if(this[_0x1db3a4(0x23e)][_0x31cba2])return this[_0x1db3a4(0x23e)][_0x31cba2];for(const _0x4e9622 of $dataClasses){if(!_0x4e9622)continue;let _0x568d61=_0x4e9622[_0x1db3a4(0x1c3)];_0x568d61=_0x568d61[_0x1db3a4(0x3b4)](/\x1I\[(\d+)\]/gi,''),_0x568d61=_0x568d61['replace'](/\\I\[(\d+)\]/gi,''),this['_classIDs'][_0x568d61['toUpperCase']()[_0x1db3a4(0x353)]()]=_0x4e9622['id'];}return this[_0x1db3a4(0x23e)][_0x31cba2]||0x0;},DataManager['getSkillTypes']=function(_0x4837a0){const _0x453aa4=_0x5c102f;this[_0x453aa4(0x38f)]=this['_stypeIDs']||{};if(this[_0x453aa4(0x38f)][_0x4837a0['id']])return this[_0x453aa4(0x38f)][_0x4837a0['id']];this['_stypeIDs'][_0x4837a0['id']]=[_0x4837a0[_0x453aa4(0x1bf)]];if(_0x4837a0[_0x453aa4(0x2ac)][_0x453aa4(0x29e)](/<SKILL[ ](?:TYPE|TYPES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5e5b72=JSON[_0x453aa4(0x19d)]('['+RegExp['$1'][_0x453aa4(0x29e)](/\d+/g)+']');this[_0x453aa4(0x38f)][_0x4837a0['id']]=this[_0x453aa4(0x38f)][_0x4837a0['id']][_0x453aa4(0x3bc)](_0x5e5b72);}else{if(_0x4837a0[_0x453aa4(0x2ac)][_0x453aa4(0x29e)](/<SKILL[ ](?:TYPE|TYPES):[ ](.*)>/i)){const _0x5e8c26=RegExp['$1'][_0x453aa4(0x28b)](',');for(const _0x4accee of _0x5e8c26){const _0x18de2f=DataManager[_0x453aa4(0x30a)](_0x4accee);if(_0x18de2f)this[_0x453aa4(0x38f)][_0x4837a0['id']][_0x453aa4(0x1ee)](_0x18de2f);}}}return this[_0x453aa4(0x38f)][_0x4837a0['id']];},DataManager['getStypeIdWithName']=function(_0x55c9f9){const _0x36acbb=_0x5c102f;_0x55c9f9=_0x55c9f9['toUpperCase']()[_0x36acbb(0x353)](),this['_stypeIDs']=this[_0x36acbb(0x38f)]||{};if(this[_0x36acbb(0x38f)][_0x55c9f9])return this[_0x36acbb(0x38f)][_0x55c9f9];for(let _0x434ab9=0x1;_0x434ab9<0x64;_0x434ab9++){if(!$dataSystem[_0x36acbb(0x2a5)][_0x434ab9])continue;let _0x6c366d=$dataSystem[_0x36acbb(0x2a5)][_0x434ab9][_0x36acbb(0x3b8)]()[_0x36acbb(0x353)]();_0x6c366d=_0x6c366d['replace'](/\x1I\[(\d+)\]/gi,''),_0x6c366d=_0x6c366d[_0x36acbb(0x3b4)](/\\I\[(\d+)\]/gi,''),this[_0x36acbb(0x38f)][_0x6c366d]=_0x434ab9;}return this[_0x36acbb(0x38f)][_0x55c9f9]||0x0;},DataManager[_0x5c102f(0x372)]=function(_0x13b63b){const _0x56e5fd=_0x5c102f;_0x13b63b=_0x13b63b['toUpperCase']()[_0x56e5fd(0x353)](),this[_0x56e5fd(0x290)]=this[_0x56e5fd(0x290)]||{};if(this[_0x56e5fd(0x290)][_0x13b63b])return this[_0x56e5fd(0x290)][_0x13b63b];for(const _0xcdb1ef of $dataSkills){if(!_0xcdb1ef)continue;this['_skillIDs'][_0xcdb1ef[_0x56e5fd(0x1c3)][_0x56e5fd(0x3b8)]()[_0x56e5fd(0x353)]()]=_0xcdb1ef['id'];}return this[_0x56e5fd(0x290)][_0x13b63b]||0x0;},DataManager[_0x5c102f(0x1cd)]=function(_0x5b95d5){const _0x510314=_0x5c102f;_0x5b95d5=_0x5b95d5['toUpperCase']()[_0x510314(0x353)](),this['_stateIDs']=this['_stateIDs']||{};if(this[_0x510314(0x19a)][_0x5b95d5])return this['_stateIDs'][_0x5b95d5];for(const _0x1136d9 of $dataStates){if(!_0x1136d9)continue;this[_0x510314(0x19a)][_0x1136d9[_0x510314(0x1c3)]['toUpperCase']()['trim']()]=_0x1136d9['id'];}return this[_0x510314(0x19a)][_0x5b95d5]||0x0;},DataManager[_0x5c102f(0x3b6)]=function(_0x3659f5){const _0x5cb740=_0x5c102f;this[_0x5cb740(0x199)]=this['_stateMaxTurns']||{};if(this[_0x5cb740(0x199)][_0x3659f5])return this[_0x5cb740(0x199)][_0x3659f5];return $dataStates[_0x3659f5][_0x5cb740(0x2ac)][_0x5cb740(0x29e)](/<MAX TURNS:[ ](\d+)>/i)?this[_0x5cb740(0x199)][_0x3659f5]=Number(RegExp['$1']):this['_stateMaxTurns'][_0x3659f5]=VisuMZ['SkillsStatesCore'][_0x5cb740(0x308)][_0x5cb740(0x2e2)][_0x5cb740(0x3cc)],this['_stateMaxTurns'][_0x3659f5];},ColorManager[_0x5c102f(0x3bd)]=function(_0x71e6e1,_0x1c5411){const _0x71985e=_0x5c102f;return _0x1c5411=String(_0x1c5411),this[_0x71985e(0x3ca)]=this[_0x71985e(0x3ca)]||{},_0x1c5411[_0x71985e(0x29e)](/#(.*)/i)?this[_0x71985e(0x3ca)][_0x71e6e1]=_0x71985e(0x190)[_0x71985e(0x2ec)](String(RegExp['$1'])):this[_0x71985e(0x3ca)][_0x71e6e1]=this[_0x71985e(0x29b)](Number(_0x1c5411)),this['_colorCache'][_0x71e6e1];},ColorManager[_0x5c102f(0x3af)]=function(_0x3b151b){const _0x150e8a=_0x5c102f;return _0x3b151b=String(_0x3b151b),_0x3b151b[_0x150e8a(0x29e)](/#(.*)/i)?'#%1'['format'](String(RegExp['$1'])):this[_0x150e8a(0x29b)](Number(_0x3b151b));},ColorManager[_0x5c102f(0x248)]=function(_0x44240c){const _0x4e7cbd=_0x5c102f;if(typeof _0x44240c===_0x4e7cbd(0x3bb))_0x44240c=$dataStates[_0x44240c];const _0x3fb932='_stored_state-%1-color'[_0x4e7cbd(0x2ec)](_0x44240c['id']);this['_colorCache']=this[_0x4e7cbd(0x3ca)]||{};if(this[_0x4e7cbd(0x3ca)][_0x3fb932])return this[_0x4e7cbd(0x3ca)][_0x3fb932];const _0xff8744=this['retrieveStateColor'](_0x44240c);return this[_0x4e7cbd(0x3bd)](_0x3fb932,_0xff8744);},ColorManager[_0x5c102f(0x377)]=function(_0x14111f){const _0xa08126=_0x5c102f,_0x35e27c=_0x14111f[_0xa08126(0x2ac)];if(_0x35e27c[_0xa08126(0x29e)](/<TURN COLOR:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0x35e27c[_0xa08126(0x29e)](/<POSITIVE STATE>/i))return VisuMZ[_0xa08126(0x3a5)][_0xa08126(0x308)][_0xa08126(0x2e2)]['ColorPositive'];else return _0x35e27c[_0xa08126(0x29e)](/<NEGATIVE STATE>/i)?VisuMZ[_0xa08126(0x3a5)]['Settings'][_0xa08126(0x2e2)][_0xa08126(0x1be)]:VisuMZ[_0xa08126(0x3a5)]['Settings'][_0xa08126(0x2e2)][_0xa08126(0x251)];}},ColorManager[_0x5c102f(0x1ea)]=function(){const _0x409fc9=_0x5c102f,_0x44e411=_0x409fc9(0x194);this[_0x409fc9(0x3ca)]=this[_0x409fc9(0x3ca)]||{};if(this[_0x409fc9(0x3ca)][_0x44e411])return this[_0x409fc9(0x3ca)][_0x44e411];const _0x2dcead=VisuMZ[_0x409fc9(0x3a5)][_0x409fc9(0x308)][_0x409fc9(0x1c1)][_0x409fc9(0x395)];return this[_0x409fc9(0x3bd)](_0x44e411,_0x2dcead);},ColorManager[_0x5c102f(0x1d2)]=function(){const _0xc5c842=_0x5c102f,_0x82d7f6=_0xc5c842(0x196);this[_0xc5c842(0x3ca)]=this[_0xc5c842(0x3ca)]||{};if(this[_0xc5c842(0x3ca)][_0x82d7f6])return this[_0xc5c842(0x3ca)][_0x82d7f6];const _0xac4bb7=VisuMZ[_0xc5c842(0x3a5)][_0xc5c842(0x308)][_0xc5c842(0x1c1)][_0xc5c842(0x324)];return this[_0xc5c842(0x3bd)](_0x82d7f6,_0xac4bb7);},VisuMZ['SkillsStatesCore'][_0x5c102f(0x21e)]=BattleManager[_0x5c102f(0x38d)],BattleManager['endAction']=function(){const _0x558256=_0x5c102f;this[_0x558256(0x358)](),VisuMZ[_0x558256(0x3a5)][_0x558256(0x21e)][_0x558256(0x2ed)](this);},BattleManager[_0x5c102f(0x358)]=function(){const _0x33acee=_0x5c102f,_0x102346=VisuMZ[_0x33acee(0x3a5)][_0x33acee(0x308)]['States'];if(!_0x102346)return;if(_0x102346[_0x33acee(0x1a4)]===![])return;if(!this['_subject'])return;this[_0x33acee(0x1df)][_0x33acee(0x358)]();},Game_Battler['prototype'][_0x5c102f(0x358)]=function(){const _0x3ada35=_0x5c102f;if(BattleManager[_0x3ada35(0x36b)]!=='action')return;if(this['_lastStatesActionEndFrameCount']===Graphics[_0x3ada35(0x268)])return;this[_0x3ada35(0x315)]=Graphics['frameCount'];for(const _0x3bd994 of this['_states']){const _0x37f0d1=$dataStates[_0x3bd994];if(!_0x37f0d1)continue;if(_0x37f0d1['autoRemovalTiming']!==0x1)continue;this[_0x3ada35(0x1e6)][_0x3bd994]>0x0&&this[_0x3ada35(0x1e6)][_0x3bd994]--;}this['removeStatesAuto'](0x1);},Game_BattlerBase['prototype'][_0x5c102f(0x1b2)]=function(){const _0x221f39=_0x5c102f,_0x457130=VisuMZ[_0x221f39(0x3a5)][_0x221f39(0x308)][_0x221f39(0x2e2)];for(const _0x49f4b1 of this[_0x221f39(0x34e)]){const _0x549758=$dataStates[_0x49f4b1];if(_0x457130&&_0x457130[_0x221f39(0x1a4)]!==![]){if(_0x549758&&_0x549758[_0x221f39(0x1a0)]===0x1)continue;}this[_0x221f39(0x1e6)][_0x49f4b1]>0x0&&this['_stateTurns'][_0x49f4b1]--;}},VisuMZ['SkillsStatesCore'][_0x5c102f(0x332)]=Game_Action[_0x5c102f(0x317)][_0x5c102f(0x3d2)],Game_Action['prototype'][_0x5c102f(0x3d2)]=function(_0x3c640b){const _0x47864f=_0x5c102f;VisuMZ[_0x47864f(0x3a5)][_0x47864f(0x332)][_0x47864f(0x2ed)](this,_0x3c640b),this[_0x47864f(0x2ae)](_0x3c640b);},Game_Action['prototype'][_0x5c102f(0x2ae)]=function(_0x43f369){const _0x38cc0b=_0x5c102f;this['applyStateCategoryRemovalEffects'](_0x43f369),this[_0x38cc0b(0x2b6)](_0x43f369),this[_0x38cc0b(0x23f)](_0x43f369),this['applyDebuffTurnManipulationEffects'](_0x43f369);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2b2)]=Game_Action[_0x5c102f(0x317)]['testApply'],Game_Action[_0x5c102f(0x317)][_0x5c102f(0x21c)]=function(_0x174d81){const _0x29166e=_0x5c102f;if(this['testSkillStatesCoreNotetags'](_0x174d81))return!![];return VisuMZ[_0x29166e(0x3a5)][_0x29166e(0x2b2)]['call'](this,_0x174d81);},Game_Action[_0x5c102f(0x317)][_0x5c102f(0x2cb)]=function(_0x41e633){const _0x302e02=_0x5c102f,_0x130561=this[_0x302e02(0x25a)]()[_0x302e02(0x2ac)];if(_0x130561[_0x302e02(0x29e)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](.*)>/i)){const _0x1ae6d5=String(RegExp['$1']);if(_0x41e633['isStateCategoryAffected'](_0x1ae6d5))return!![];}if(_0x130561[_0x302e02(0x29e)](/<SET STATE[ ](\d+)[ ]TURNS:[ ](.*)>/i)){const _0x520747=Number(RegExp['$1']);if(_0x41e633[_0x302e02(0x210)](_0x520747))return!![];}else{if(_0x130561['match'](/<SET STATE[ ](.*)[ ]TURNS:[ ](.*)>/i)){const _0x54818c=DataManager[_0x302e02(0x1cd)](RegExp['$1']);if(_0x41e633[_0x302e02(0x210)](_0x54818c))return!![];}}return![];},Game_Action['prototype']['applyStateCategoryRemovalEffects']=function(_0x2fd404){const _0x16aef2=_0x5c102f;if(_0x2fd404[_0x16aef2(0x1b6)]()['length']<=0x0)return;const _0x5066eb=this[_0x16aef2(0x25a)]()[_0x16aef2(0x2ac)];if(_0x5066eb[_0x16aef2(0x29e)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/i)){const _0x26569b=String(RegExp['$1']);_0x2fd404[_0x16aef2(0x325)](_0x26569b);}const _0x5df19=_0x5066eb[_0x16aef2(0x29e)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/gi);if(_0x5df19)for(const _0xf66c79 of _0x5df19){_0xf66c79[_0x16aef2(0x29e)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/i);const _0xbec90d=String(RegExp['$1']),_0x177d71=Number(RegExp['$2']);_0x2fd404[_0x16aef2(0x1ca)](_0xbec90d,_0x177d71);}},Game_Action[_0x5c102f(0x317)]['applyStateTurnManipulationEffects']=function(_0x3f64b7){const _0xcdf7b=_0x5c102f,_0x1a9b3c=this['item']()[_0xcdf7b(0x2ac)],_0x2ab46f=_0x1a9b3c[_0xcdf7b(0x29e)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/gi);if(_0x2ab46f)for(const _0x5a45d6 of _0x2ab46f){let _0x5bb87f=0x0,_0xbe6b1b=0x0;if(_0x5a45d6[_0xcdf7b(0x29e)](/<SET STATE[ ](\d+)[ ]TURNS:[ ](\d+)>/i))_0x5bb87f=Number(RegExp['$1']),_0xbe6b1b=Number(RegExp['$2']);else _0x5a45d6[_0xcdf7b(0x29e)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/i)&&(_0x5bb87f=DataManager[_0xcdf7b(0x1cd)](RegExp['$1']),_0xbe6b1b=Number(RegExp['$2']));_0x3f64b7[_0xcdf7b(0x30b)](_0x5bb87f,_0xbe6b1b),this[_0xcdf7b(0x213)](_0x3f64b7);}const _0x2fadd3=_0x1a9b3c['match'](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/gi);if(_0x2fadd3)for(const _0x5f5512 of _0x2fadd3){let _0x5750dd=0x0,_0x5d7a1d=0x0;if(_0x5f5512[_0xcdf7b(0x29e)](/<STATE[ ](\d+)[ ]TURNS:[ ]([\+\-]\d+)>/i))_0x5750dd=Number(RegExp['$1']),_0x5d7a1d=Number(RegExp['$2']);else _0x5f5512['match'](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/i)&&(_0x5750dd=DataManager[_0xcdf7b(0x1cd)](RegExp['$1']),_0x5d7a1d=Number(RegExp['$2']));_0x3f64b7[_0xcdf7b(0x32a)](_0x5750dd,_0x5d7a1d),this[_0xcdf7b(0x213)](_0x3f64b7);}},Game_Action[_0x5c102f(0x317)][_0x5c102f(0x23f)]=function(_0x360a0f){const _0x1fdd5f=_0x5c102f,_0x192370=[_0x1fdd5f(0x2ab),'MAXMP',_0x1fdd5f(0x351),'DEF',_0x1fdd5f(0x223),_0x1fdd5f(0x2df),_0x1fdd5f(0x1fb),'LUK'],_0x1ed1ba=this[_0x1fdd5f(0x25a)]()[_0x1fdd5f(0x2ac)],_0x56f4a6=_0x1ed1ba[_0x1fdd5f(0x29e)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/gi);if(_0x56f4a6)for(const _0x5a95f3 of _0x56f4a6){_0x5a95f3[_0x1fdd5f(0x29e)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/i);const _0x1d212d=_0x192370[_0x1fdd5f(0x3bf)](String(RegExp['$1'])[_0x1fdd5f(0x3b8)]()),_0x1eec15=Number(RegExp['$2']);_0x1d212d>=0x0&&(_0x360a0f[_0x1fdd5f(0x2d3)](_0x1d212d,_0x1eec15),this[_0x1fdd5f(0x213)](_0x360a0f));}const _0x2866bc=_0x1ed1ba[_0x1fdd5f(0x29e)](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0x2866bc)for(const _0x2b3f08 of _0x56f4a6){_0x2b3f08[_0x1fdd5f(0x29e)](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/i);const _0xb77826=_0x192370['indexOf'](String(RegExp['$1'])[_0x1fdd5f(0x3b8)]()),_0x5e67f9=Number(RegExp['$2']);_0xb77826>=0x0&&(_0x360a0f['addBuffTurns'](_0xb77826,_0x5e67f9),this[_0x1fdd5f(0x213)](_0x360a0f));}},Game_Action[_0x5c102f(0x317)][_0x5c102f(0x273)]=function(_0x1b07ed){const _0x3752d6=_0x5c102f,_0x1afc5c=[_0x3752d6(0x2ab),'MAXMP',_0x3752d6(0x351),_0x3752d6(0x1d0),_0x3752d6(0x223),'MDF',_0x3752d6(0x1fb),_0x3752d6(0x1d4)],_0x558cf8=this[_0x3752d6(0x25a)]()['note'],_0x287e5f=_0x558cf8['match'](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/gi);if(_0x287e5f)for(const _0xb14362 of _0x287e5f){_0xb14362[_0x3752d6(0x29e)](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/i);const _0x5acd31=_0x1afc5c[_0x3752d6(0x3bf)](String(RegExp['$1'])[_0x3752d6(0x3b8)]()),_0x21038e=Number(RegExp['$2']);_0x5acd31>=0x0&&(_0x1b07ed['setDebuffTurns'](_0x5acd31,_0x21038e),this[_0x3752d6(0x213)](_0x1b07ed));}const _0x4a55fe=_0x558cf8['match'](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0x4a55fe)for(const _0x25b4af of _0x287e5f){_0x25b4af[_0x3752d6(0x29e)](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x95d5aa=_0x1afc5c[_0x3752d6(0x3bf)](String(RegExp['$1'])[_0x3752d6(0x3b8)]()),_0x50871a=Number(RegExp['$2']);_0x95d5aa>=0x0&&(_0x1b07ed[_0x3752d6(0x256)](_0x95d5aa,_0x50871a),this['makeSuccess'](_0x1b07ed));}},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x237)]=Game_BattlerBase['prototype'][_0x5c102f(0x352)],Game_BattlerBase['prototype'][_0x5c102f(0x352)]=function(){const _0x31accf=_0x5c102f;this[_0x31accf(0x3c1)]={},this['initMembersSkillsStatesCore'](),VisuMZ[_0x31accf(0x3a5)]['Game_BattlerBase_initMembers'][_0x31accf(0x2ed)](this);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x375)]=function(){const _0xc812a8=_0x5c102f;this[_0xc812a8(0x354)]='',this[_0xc812a8(0x322)]={},this['_stateDisplay']={},this['_stateOrigin']={};},Game_BattlerBase['prototype'][_0x5c102f(0x3a3)]=function(_0x68ee8c){return this['_cache']=this['_cache']||{},this['_cache'][_0x68ee8c]!==undefined;},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1bd)]=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x36a)],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x36a)]=function(){const _0xba9247=_0x5c102f;this[_0xba9247(0x3c1)]={},VisuMZ[_0xba9247(0x3a5)][_0xba9247(0x1bd)][_0xba9247(0x2ed)](this);},VisuMZ['SkillsStatesCore'][_0x5c102f(0x1f8)]=Game_BattlerBase['prototype'][_0x5c102f(0x32d)],Game_BattlerBase[_0x5c102f(0x317)]['eraseState']=function(_0x36f060){const _0x39e512=_0x5c102f;let _0x34551b=this[_0x39e512(0x210)](_0x36f060);VisuMZ[_0x39e512(0x3a5)][_0x39e512(0x1f8)][_0x39e512(0x2ed)](this,_0x36f060);if(_0x34551b&&!this[_0x39e512(0x210)](_0x36f060))this[_0x39e512(0x236)](_0x36f060);},Game_BattlerBase[_0x5c102f(0x317)]['onRemoveState']=function(_0x192b58){const _0x4e4503=_0x5c102f;this[_0x4e4503(0x320)](_0x192b58),this[_0x4e4503(0x1bb)](_0x192b58),this[_0x4e4503(0x2b0)](_0x192b58);},VisuMZ['SkillsStatesCore']['Game_BattlerBase_resetStateCounts']=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x35a)],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x35a)]=function(_0x59be65){const _0x413910=_0x5c102f,_0x76361d=$dataStates[_0x59be65],_0x2b2730=this[_0x413910(0x3b2)](_0x59be65),_0x28f876=this[_0x413910(0x38c)](_0x76361d)[_0x413910(0x2c6)]()['trim']();switch(_0x28f876){case _0x413910(0x312):if(_0x2b2730<=0x0)VisuMZ[_0x413910(0x3a5)][_0x413910(0x1b5)][_0x413910(0x2ed)](this,_0x59be65);break;case _0x413910(0x19f):VisuMZ['SkillsStatesCore'][_0x413910(0x1b5)][_0x413910(0x2ed)](this,_0x59be65);break;case _0x413910(0x330):VisuMZ[_0x413910(0x3a5)][_0x413910(0x1b5)]['call'](this,_0x59be65),this['_stateTurns'][_0x59be65]=Math['max'](this['_stateTurns'][_0x59be65],_0x2b2730);break;case _0x413910(0x2cd):VisuMZ[_0x413910(0x3a5)]['Game_BattlerBase_resetStateCounts']['call'](this,_0x59be65),this['_stateTurns'][_0x59be65]+=_0x2b2730;break;default:VisuMZ['SkillsStatesCore'][_0x413910(0x1b5)][_0x413910(0x2ed)](this,_0x59be65);break;}},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x38c)]=function(_0x1e445c){const _0x186fb6=_0x5c102f,_0x1e2eb3=_0x1e445c[_0x186fb6(0x2ac)];return _0x1e2eb3['match'](/<REAPPLY RULES:[ ](.*)>/i)?String(RegExp['$1']):VisuMZ[_0x186fb6(0x3a5)]['Settings']['States'][_0x186fb6(0x367)];},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x39a)]=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2b7)],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2b7)]=function(_0x2f719b,_0x3e29b9){const _0x411b39=_0x5c102f,_0x2dd159=VisuMZ[_0x411b39(0x3a5)]['Settings'][_0x411b39(0x1c1)][_0x411b39(0x367)],_0x5c20c3=this[_0x411b39(0x2d6)](_0x2f719b);switch(_0x2dd159){case _0x411b39(0x312):if(_0x5c20c3<=0x0)this[_0x411b39(0x2f5)][_0x2f719b]=_0x3e29b9;break;case _0x411b39(0x19f):this['_buffTurns'][_0x2f719b]=_0x3e29b9;break;case'greater':this[_0x411b39(0x2f5)][_0x2f719b]=Math[_0x411b39(0x19e)](_0x5c20c3,_0x3e29b9);break;case _0x411b39(0x2cd):this[_0x411b39(0x2f5)][_0x2f719b]+=_0x3e29b9;break;default:VisuMZ[_0x411b39(0x3a5)][_0x411b39(0x39a)][_0x411b39(0x2ed)](this,_0x2f719b,_0x3e29b9);break;}const _0x2af421=VisuMZ[_0x411b39(0x3a5)][_0x411b39(0x308)][_0x411b39(0x1c1)][_0x411b39(0x3cc)];this[_0x411b39(0x2f5)][_0x2f719b]=this['_buffTurns'][_0x2f719b][_0x411b39(0x20a)](0x0,_0x2af421);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x22c)]=function(){const _0x20730d=_0x5c102f;if(this[_0x20730d(0x3c1)][_0x20730d(0x283)]!==undefined)return this[_0x20730d(0x3c1)]['groupDefeat'];this[_0x20730d(0x3c1)][_0x20730d(0x283)]=![];const _0x127838=this['states']();for(const _0x260574 of _0x127838){if(!_0x260574)continue;if(_0x260574[_0x20730d(0x2ac)][_0x20730d(0x29e)](/<GROUP DEFEAT>/i)){this[_0x20730d(0x3c1)][_0x20730d(0x283)]=!![];break;}}return this[_0x20730d(0x3c1)][_0x20730d(0x283)];},VisuMZ[_0x5c102f(0x3a5)]['Game_BattlerBase_clearStates']=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1d7)],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1d7)]=function(){const _0x143412=_0x5c102f;this[_0x143412(0x203)]()!==''?this['clearStatesWithStateRetain']():(VisuMZ[_0x143412(0x3a5)][_0x143412(0x3cd)][_0x143412(0x2ed)](this),this['initMembersSkillsStatesCore']());},Game_Actor['prototype'][_0x5c102f(0x1d7)]=function(){const _0x3ac744=_0x5c102f;this[_0x3ac744(0x2ba)]=this[_0x3ac744(0x2ba)]||{},Game_Battler['prototype']['clearStates'][_0x3ac744(0x2ed)](this);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1ec)]=function(){const _0x1a7713=_0x5c102f,_0x4e06b7=this[_0x1a7713(0x1b6)]();for(const _0x4c3c5b of _0x4e06b7){if(_0x4c3c5b&&this['canClearState'](_0x4c3c5b))this[_0x1a7713(0x32d)](_0x4c3c5b['id']);}this[_0x1a7713(0x3c1)]={};},Game_BattlerBase['prototype'][_0x5c102f(0x34c)]=function(_0x2b8c49){const _0x26075b=_0x5c102f,_0x5f0a34=this[_0x26075b(0x203)]();if(_0x5f0a34!==''){const _0x116fc2=_0x2b8c49[_0x26075b(0x2ac)];if(_0x5f0a34==='death'&&_0x116fc2['match'](/<NO DEATH CLEAR>/i))return![];if(_0x5f0a34===_0x26075b(0x209)&&_0x116fc2[_0x26075b(0x29e)](/<NO RECOVER ALL CLEAR>/i))return![];}return this[_0x26075b(0x210)](_0x2b8c49['id']);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x203)]=function(){const _0x2c8269=_0x5c102f;return this[_0x2c8269(0x354)];},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2f1)]=function(_0x3d9308){const _0x200e79=_0x5c102f;this[_0x200e79(0x354)]=_0x3d9308;},Game_BattlerBase['prototype'][_0x5c102f(0x1e5)]=function(){this['_stateRetainType']='';},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x318)]=Game_BattlerBase[_0x5c102f(0x317)]['die'],Game_BattlerBase[_0x5c102f(0x317)]['die']=function(){const _0x49e307=_0x5c102f;this[_0x49e307(0x2f1)]('death'),VisuMZ[_0x49e307(0x3a5)]['Game_BattlerBase_die']['call'](this),this['clearStateRetainType']();},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x360)]=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1b7)],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1b7)]=function(){const _0x43f66c=_0x5c102f;this[_0x43f66c(0x2f1)](_0x43f66c(0x209)),VisuMZ['SkillsStatesCore']['Game_BattlerBase_recoverAll'][_0x43f66c(0x2ed)](this),this[_0x43f66c(0x1e5)]();},Game_BattlerBase['prototype']['canPaySkillCost']=function(_0x1f5e9e){const _0x26b96d=_0x5c102f;for(settings of VisuMZ[_0x26b96d(0x3a5)]['Settings'][_0x26b96d(0x1af)]){const _0x54afa6=settings[_0x26b96d(0x287)][_0x26b96d(0x2ed)](this,_0x1f5e9e);if(!settings[_0x26b96d(0x1a9)]['call'](this,_0x1f5e9e,_0x54afa6))return![];}return!![];},Game_BattlerBase[_0x5c102f(0x317)]['paySkillCost']=function(_0x56c0f0){const _0x2949a7=_0x5c102f;for(settings of VisuMZ[_0x2949a7(0x3a5)]['Settings'][_0x2949a7(0x1af)]){const _0x14f9d8=settings['CalcJS']['call'](this,_0x56c0f0);settings[_0x2949a7(0x232)]['call'](this,_0x56c0f0,_0x14f9d8);}},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2fb)]=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x3c0)],Game_BattlerBase[_0x5c102f(0x317)]['meetsSkillConditions']=function(_0x418fa1){const _0x4f5c05=_0x5c102f;if(!_0x418fa1)return![];if(!VisuMZ[_0x4f5c05(0x3a5)][_0x4f5c05(0x2fb)][_0x4f5c05(0x2ed)](this,_0x418fa1))return![];if(!this[_0x4f5c05(0x35b)](_0x418fa1))return![];if(!this['meetsSkillConditionsEnableJS'](_0x418fa1))return![];if(!this[_0x4f5c05(0x3d0)](_0x418fa1))return![];return!![];},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x35b)]=function(_0x5e5552){if(!this['checkSkillConditionsSwitchNotetags'](_0x5e5552))return![];return!![];},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1db)]=function(_0x3c5cac){const _0x377140=_0x5c102f,_0x376349=_0x3c5cac[_0x377140(0x2ac)];if(_0x376349[_0x377140(0x29e)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x53b530=JSON[_0x377140(0x19d)]('['+RegExp['$1'][_0x377140(0x29e)](/\d+/g)+']');for(const _0x3f37ae of _0x53b530){if(!$gameSwitches[_0x377140(0x344)](_0x3f37ae))return![];}return!![];}if(_0x376349[_0x377140(0x29e)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2a1dea=JSON[_0x377140(0x19d)]('['+RegExp['$1'][_0x377140(0x29e)](/\d+/g)+']');for(const _0x1f72f1 of _0x2a1dea){if(!$gameSwitches[_0x377140(0x344)](_0x1f72f1))return![];}return!![];}if(_0x376349['match'](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x358976=JSON[_0x377140(0x19d)]('['+RegExp['$1'][_0x377140(0x29e)](/\d+/g)+']');for(const _0x477dee of _0x358976){if($gameSwitches[_0x377140(0x344)](_0x477dee))return!![];}return![];}if(_0x376349['match'](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x126b33=JSON[_0x377140(0x19d)]('['+RegExp['$1'][_0x377140(0x29e)](/\d+/g)+']');for(const _0x152350 of _0x126b33){if(!$gameSwitches[_0x377140(0x344)](_0x152350))return!![];}return![];}if(_0x376349[_0x377140(0x29e)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3cecf3=JSON[_0x377140(0x19d)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x52d3fc of _0x3cecf3){if(!$gameSwitches[_0x377140(0x344)](_0x52d3fc))return!![];}return![];}if(_0x376349[_0x377140(0x29e)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x45c945=JSON[_0x377140(0x19d)]('['+RegExp['$1'][_0x377140(0x29e)](/\d+/g)+']');for(const _0x3d387c of _0x45c945){if($gameSwitches[_0x377140(0x344)](_0x3d387c))return![];}return!![];}return!![];},Game_BattlerBase[_0x5c102f(0x317)]['meetsSkillConditionsEnableJS']=function(_0x3561b2){const _0x4d9093=_0x5c102f,_0x43e503=_0x3561b2['note'],_0x42d39e=VisuMZ[_0x4d9093(0x3a5)][_0x4d9093(0x34d)];return _0x42d39e[_0x3561b2['id']]?_0x42d39e[_0x3561b2['id']][_0x4d9093(0x2ed)](this,_0x3561b2):!![];},Game_BattlerBase[_0x5c102f(0x317)]['meetsSkillConditionsGlobalJS']=function(_0x3f072c){const _0x5918c3=_0x5c102f;return VisuMZ[_0x5918c3(0x3a5)]['Settings'][_0x5918c3(0x2f6)]['SkillConditionJS']['call'](this,_0x3f072c);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x34b)]=Game_BattlerBase[_0x5c102f(0x317)]['skillMpCost'],Game_BattlerBase['prototype'][_0x5c102f(0x394)]=function(_0x3d3417){const _0x54f203=_0x5c102f;for(settings of VisuMZ[_0x54f203(0x3a5)][_0x54f203(0x308)][_0x54f203(0x1af)]){if(settings['Name'][_0x54f203(0x3b8)]()==='MP')return settings[_0x54f203(0x287)][_0x54f203(0x2ed)](this,_0x3d3417);}return VisuMZ[_0x54f203(0x3a5)][_0x54f203(0x34b)][_0x54f203(0x2ed)](this,_0x3d3417);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2b4)]=Game_BattlerBase['prototype'][_0x5c102f(0x21f)],Game_BattlerBase['prototype'][_0x5c102f(0x21f)]=function(_0x1143a9){const _0x484420=_0x5c102f;for(settings of VisuMZ[_0x484420(0x3a5)][_0x484420(0x308)][_0x484420(0x1af)]){if(settings['Name'][_0x484420(0x3b8)]()==='TP')return settings[_0x484420(0x287)]['call'](this,_0x1143a9);}return VisuMZ[_0x484420(0x3a5)]['Game_BattlerBase_skillTpCost'][_0x484420(0x2ed)](this,_0x1143a9);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x373)]=function(_0x3af6f0){const _0x229e95=_0x5c102f;if(typeof _0x3af6f0===_0x229e95(0x3bb))_0x3af6f0=$dataStates[_0x3af6f0];return this[_0x229e95(0x1b6)]()[_0x229e95(0x1f7)](_0x3af6f0);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x383)]=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1b6)],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1b6)]=function(){const _0xfbba21=_0x5c102f;let _0x3db9c5=VisuMZ[_0xfbba21(0x3a5)][_0xfbba21(0x383)][_0xfbba21(0x2ed)](this);if($gameTemp[_0xfbba21(0x202)])return _0x3db9c5;return $gameTemp['_checkingPassiveStates']=!![],this[_0xfbba21(0x381)](_0x3db9c5),$gameTemp[_0xfbba21(0x202)]=undefined,_0x3db9c5;},Game_BattlerBase[_0x5c102f(0x317)]['addPassiveStates']=function(_0x3945fa){const _0x27776d=_0x5c102f,_0x298b40=this[_0x27776d(0x33e)]();for(state of _0x298b40){if(!state)continue;if(!this[_0x27776d(0x2a7)](state)&&_0x3945fa['includes'](state))continue;_0x3945fa['push'](state);}_0x298b40[_0x27776d(0x3cb)]>0x0&&_0x3945fa['sort']((_0x165b03,_0x178610)=>{const _0x428a39=_0x27776d,_0x3086a9=_0x165b03['priority'],_0x1de47d=_0x178610[_0x428a39(0x345)];if(_0x3086a9!==_0x1de47d)return _0x1de47d-_0x3086a9;return _0x165b03-_0x178610;});},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2a7)]=function(_0x365b3d){const _0x191b89=_0x5c102f;return _0x365b3d[_0x191b89(0x2ac)][_0x191b89(0x29e)](/<PASSIVE STACKABLE>/i);},VisuMZ[_0x5c102f(0x3a5)]['Game_BattlerBase_traitsSet']=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x33c)],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x33c)]=function(_0x3b9f6e){const _0x491934=_0x5c102f;this[_0x491934(0x2fd)]=!![];let _0x729580=VisuMZ[_0x491934(0x3a5)]['Game_BattlerBase_traitsSet'][_0x491934(0x2ed)](this,_0x3b9f6e);return this[_0x491934(0x2fd)]=undefined,_0x729580;},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x27b)]=function(){const _0x414f87=_0x5c102f;let _0x3abf38=[];this[_0x414f87(0x37f)]=this[_0x414f87(0x37f)]||{};for(;;){_0x3abf38=[];let _0x257f99=!![];for(const _0x326065 of this['_cache'][_0x414f87(0x33e)]){const _0x37e018=$dataStates[_0x326065];if(!_0x37e018)continue;let _0x14c69d=this['meetsPassiveStateConditions'](_0x37e018);this[_0x414f87(0x37f)][_0x326065]!==_0x14c69d&&(_0x257f99=![],this[_0x414f87(0x37f)][_0x326065]=_0x14c69d);if(!_0x14c69d)continue;_0x3abf38['push'](_0x37e018);}if(_0x257f99)break;else{if(!this[_0x414f87(0x2fd)])this[_0x414f87(0x36a)]();this['createPassiveStatesCache']();}}return _0x3abf38;},Game_BattlerBase[_0x5c102f(0x317)]['meetsPassiveStateConditions']=function(_0x53196d){const _0x51ab94=_0x5c102f;if(!this[_0x51ab94(0x2e0)](_0x53196d))return![];if(!this[_0x51ab94(0x334)](_0x53196d))return![];if(!this[_0x51ab94(0x2b1)](_0x53196d))return![];if(!this[_0x51ab94(0x1bc)](_0x53196d))return![];return!![];},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2e0)]=function(_0x51c323){return!![];},Game_Actor[_0x5c102f(0x317)]['meetsPassiveStateConditionClasses']=function(_0x4d2052){const _0x24ea40=_0x5c102f,_0xb45428=_0x4d2052['note'];if(_0xb45428['match'](/<PASSIVE CONDITION[ ](?:CLASS|CLASSES):[ ](.*)>/i)){const _0x5dff9e=String(RegExp['$1'])[_0x24ea40(0x28b)](',')[_0x24ea40(0x1e1)](_0x2a0a98=>_0x2a0a98['trim']()),_0x11003e=VisuMZ['SkillsStatesCore'][_0x24ea40(0x385)](_0x5dff9e);return _0x11003e[_0x24ea40(0x1f7)](this[_0x24ea40(0x2bf)]());}if(_0xb45428[_0x24ea40(0x29e)](/<PASSIVE CONDITION[ ](?:MULTICLASS|MULTICLASSES):[ ](.*)>/i)){const _0x47b00f=String(RegExp['$1'])['split'](',')[_0x24ea40(0x1e1)](_0x582306=>_0x582306['trim']()),_0x165c15=VisuMZ[_0x24ea40(0x3a5)][_0x24ea40(0x385)](_0x47b00f);let _0x4d6765=[this['currentClass']()];return Imported['VisuMZ_2_ClassChangeSystem']&&this[_0x24ea40(0x26c)]&&(_0x4d6765=this[_0x24ea40(0x26c)]()),_0x165c15[_0x24ea40(0x2ad)](_0x59c05e=>_0x4d6765[_0x24ea40(0x1f7)](_0x59c05e))['length']>0x0;}return Game_BattlerBase[_0x24ea40(0x317)][_0x24ea40(0x2e0)]['call'](this,_0x4d2052);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x385)]=function(_0xcc1a02){const _0x996504=_0x5c102f,_0x209cfe=[];for(let _0x2eeb0a of _0xcc1a02){_0x2eeb0a=(String(_0x2eeb0a)||'')[_0x996504(0x353)]();const _0x16a3d2=/^\d+$/[_0x996504(0x253)](_0x2eeb0a);_0x16a3d2?_0x209cfe['push'](Number(_0x2eeb0a)):_0x209cfe[_0x996504(0x1ee)](DataManager['getClassIdWithName'](_0x2eeb0a));}return _0x209cfe[_0x996504(0x1e1)](_0x2796b4=>$dataClasses[Number(_0x2796b4)])[_0x996504(0x2a6)](null);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x334)]=function(_0x365d73){const _0x1df688=_0x5c102f,_0x3d45d2=_0x365d73[_0x1df688(0x2ac)];if(_0x3d45d2[_0x1df688(0x29e)](/<PASSIVE CONDITION[ ](?:SWITCH|SWITCHES)[ ]ON:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x15f6a8=JSON[_0x1df688(0x19d)]('['+RegExp['$1'][_0x1df688(0x29e)](/\d+/g)+']');for(const _0x928706 of _0x15f6a8){if(!$gameSwitches[_0x1df688(0x344)](_0x928706))return![];}return!![];}if(_0x3d45d2[_0x1df688(0x29e)](/<PASSIVE CONDITION ALL[ ](?:SWITCH|SWITCHES)[ ]ON:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x6bc201=JSON['parse']('['+RegExp['$1'][_0x1df688(0x29e)](/\d+/g)+']');for(const _0x571f98 of _0x6bc201){if(!$gameSwitches['value'](_0x571f98))return![];}return!![];}if(_0x3d45d2['match'](/<PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]ON:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x165bd4=JSON[_0x1df688(0x19d)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0xce622d of _0x165bd4){if($gameSwitches['value'](_0xce622d))return!![];}return![];}if(_0x3d45d2[_0x1df688(0x29e)](/<PASSIVE CONDITION[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x33c00a=JSON[_0x1df688(0x19d)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x1e4038 of _0x33c00a){if(!$gameSwitches[_0x1df688(0x344)](_0x1e4038))return!![];}return![];}if(_0x3d45d2[_0x1df688(0x29e)](/<PASSIVE CONDITION ALL[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x34e330=JSON[_0x1df688(0x19d)]('['+RegExp['$1'][_0x1df688(0x29e)](/\d+/g)+']');for(const _0x49ba78 of _0x34e330){if(!$gameSwitches[_0x1df688(0x344)](_0x49ba78))return!![];}return![];}if(_0x3d45d2['match'](/<PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x58d1cd=JSON['parse']('['+RegExp['$1'][_0x1df688(0x29e)](/\d+/g)+']');for(const _0x373f12 of _0x58d1cd){if($gameSwitches[_0x1df688(0x344)](_0x373f12))return![];}return!![];}return!![];},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2b1)]=function(_0x5315a0){const _0x451daa=_0x5c102f,_0x538114=VisuMZ[_0x451daa(0x3a5)][_0x451daa(0x32b)];if(_0x538114[_0x5315a0['id']]&&!_0x538114[_0x5315a0['id']]['call'](this,_0x5315a0))return![];return!![];},Game_BattlerBase['prototype']['meetsPassiveStateGlobalConditionJS']=function(_0x2586fa){const _0x159e7a=_0x5c102f;return VisuMZ[_0x159e7a(0x3a5)][_0x159e7a(0x308)]['PassiveStates'][_0x159e7a(0x1ba)][_0x159e7a(0x2ed)](this,_0x2586fa);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x33e)]=function(){const _0x557e9b=_0x5c102f;if(this[_0x557e9b(0x3a3)](_0x557e9b(0x33e)))return this[_0x557e9b(0x27b)]();if(this['_checkingVisuMzPassiveStateObjects'])return[];return this[_0x557e9b(0x195)]=!![],this['createPassiveStatesCache'](),this[_0x557e9b(0x195)]=undefined,this['convertPassiveStates']();},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x3d1)]=function(){const _0x10b416=_0x5c102f;this['_checkingVisuMzPassiveStateObjects']=!![],this[_0x10b416(0x3c1)][_0x10b416(0x33e)]=[],this[_0x10b416(0x225)](),this[_0x10b416(0x29d)](),this[_0x10b416(0x233)](),this[_0x10b416(0x195)]=undefined;},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x225)]=function(){const _0x24066a=_0x5c102f;if(Imported[_0x24066a(0x1a7)])this[_0x24066a(0x226)]();},Game_BattlerBase[_0x5c102f(0x317)]['passiveStateObjects']=function(){return[];},Game_BattlerBase['prototype'][_0x5c102f(0x29d)]=function(){const _0x560cc6=_0x5c102f,_0x5bd491=this[_0x560cc6(0x305)]();for(const _0x53b10e of _0x5bd491){if(!_0x53b10e)continue;const _0x19acca=_0x53b10e[_0x560cc6(0x2ac)][_0x560cc6(0x29e)](/<PASSIVE (?:STATE|STATES):[ ](.*)>/gi);if(_0x19acca)for(const _0x305fa5 of _0x19acca){_0x305fa5[_0x560cc6(0x29e)](/<PASSIVE (?:STATE|STATES):[ ](.*)>/i);const _0x4a7889=RegExp['$1'];if(_0x4a7889[_0x560cc6(0x29e)](/(\d+(?:\s*,\s*\d+)*)/i)){const _0x56e14c=JSON[_0x560cc6(0x19d)]('['+RegExp['$1']['match'](/\d+/g)+']');this[_0x560cc6(0x3c1)][_0x560cc6(0x33e)]=this[_0x560cc6(0x3c1)][_0x560cc6(0x33e)]['concat'](_0x56e14c);}else{const _0x13528c=_0x4a7889[_0x560cc6(0x28b)](',');for(const _0x3a8547 of _0x13528c){const _0x4fa56e=DataManager[_0x560cc6(0x1cd)](_0x3a8547);if(_0x4fa56e)this[_0x560cc6(0x3c1)][_0x560cc6(0x33e)][_0x560cc6(0x1ee)](_0x4fa56e);}}}}},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x233)]=function(){const _0x3ab403=_0x5c102f,_0x49a127=VisuMZ[_0x3ab403(0x3a5)][_0x3ab403(0x308)]['PassiveStates'][_0x3ab403(0x35e)];this[_0x3ab403(0x3c1)][_0x3ab403(0x33e)]=this[_0x3ab403(0x3c1)]['passiveStates']['concat'](_0x49a127);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x3b2)]=function(_0x2bafb4){const _0x204e90=_0x5c102f;if(typeof _0x2bafb4!==_0x204e90(0x3bb))_0x2bafb4=_0x2bafb4['id'];return this[_0x204e90(0x1e6)][_0x2bafb4]||0x0;},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x30b)]=function(_0x3e51f3,_0x345849){const _0x23b65f=_0x5c102f;if(typeof _0x3e51f3!=='number')_0x3e51f3=_0x3e51f3['id'];if(this['isStateAffected'](_0x3e51f3)){const _0x7c8791=DataManager['stateMaximumTurns'](_0x3e51f3);this[_0x23b65f(0x1e6)][_0x3e51f3]=_0x345849['clamp'](0x0,_0x7c8791);if(this[_0x23b65f(0x1e6)][_0x3e51f3]<=0x0)this[_0x23b65f(0x26f)](_0x3e51f3);}},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x32a)]=function(_0x359f57,_0x186b8a){if(typeof _0x359f57!=='number')_0x359f57=_0x359f57['id'];this['isStateAffected'](_0x359f57)&&(_0x186b8a+=this['stateTurns'](_0x359f57),this['setStateTurns'](_0x359f57,_0x186b8a));},VisuMZ['SkillsStatesCore'][_0x5c102f(0x20b)]=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x294)],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x294)]=function(_0x37aa65){const _0x4d962c=_0x5c102f,_0x4fe574=this[_0x4d962c(0x2c7)][_0x37aa65];VisuMZ[_0x4d962c(0x3a5)][_0x4d962c(0x20b)]['call'](this,_0x37aa65);if(_0x4fe574>0x0)this[_0x4d962c(0x349)](_0x37aa65);if(_0x4fe574<0x0)this[_0x4d962c(0x257)](_0x37aa65);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1a6)]=Game_BattlerBase[_0x5c102f(0x317)]['increaseBuff'],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2af)]=function(_0x1f2796){const _0x59af59=_0x5c102f;VisuMZ[_0x59af59(0x3a5)][_0x59af59(0x1a6)]['call'](this,_0x1f2796);if(!this['isBuffOrDebuffAffected'](_0x1f2796))this[_0x59af59(0x294)](_0x1f2796);},VisuMZ['SkillsStatesCore'][_0x5c102f(0x3a6)]=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2db)],Game_BattlerBase['prototype']['decreaseBuff']=function(_0x16ee3b){const _0xef14e5=_0x5c102f;VisuMZ[_0xef14e5(0x3a5)][_0xef14e5(0x3a6)]['call'](this,_0x16ee3b);if(!this[_0xef14e5(0x22d)](_0x16ee3b))this['eraseBuff'](_0x16ee3b);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x349)]=function(_0x258866){},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x257)]=function(_0x513662){},Game_BattlerBase[_0x5c102f(0x317)]['isMaxBuffAffected']=function(_0x40128f){const _0x46bd69=_0x5c102f;return this[_0x46bd69(0x2c7)][_0x40128f]===VisuMZ['SkillsStatesCore'][_0x46bd69(0x308)][_0x46bd69(0x1c1)][_0x46bd69(0x261)];},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1fe)]=function(_0x27c4c4){const _0x2fe525=_0x5c102f;return this[_0x2fe525(0x2c7)][_0x27c4c4]===-VisuMZ['SkillsStatesCore'][_0x2fe525(0x308)][_0x2fe525(0x1c1)][_0x2fe525(0x208)];},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2d9)]=Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x369)],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x369)]=function(_0x5c0662,_0x2b41be){const _0x129031=_0x5c102f;return _0x5c0662=_0x5c0662[_0x129031(0x20a)](-0x2,0x2),VisuMZ[_0x129031(0x3a5)]['Game_BattlerBase_buffIconIndex']['call'](this,_0x5c0662,_0x2b41be);},Game_BattlerBase['prototype'][_0x5c102f(0x216)]=function(_0x66d0ba){const _0xed04ae=_0x5c102f,_0x2ebff0=this[_0xed04ae(0x2c7)][_0x66d0ba];return VisuMZ[_0xed04ae(0x3a5)][_0xed04ae(0x308)]['Buffs']['MultiplierJS'][_0xed04ae(0x2ed)](this,_0x66d0ba,_0x2ebff0);},Game_BattlerBase[_0x5c102f(0x317)]['buffTurns']=function(_0x500cdc){const _0x119dd9=_0x5c102f;return this[_0x119dd9(0x2f5)][_0x500cdc]||0x0;},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x391)]=function(_0x2d3876){const _0x1bf78c=_0x5c102f;return this[_0x1bf78c(0x2d6)](_0x2d3876);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2d3)]=function(_0x4955e5,_0x4c287a){const _0x185526=_0x5c102f;if(this[_0x185526(0x2f3)](_0x4955e5)){const _0x2a156f=VisuMZ[_0x185526(0x3a5)][_0x185526(0x308)][_0x185526(0x1c1)]['MaxTurns'];this[_0x185526(0x2f5)][_0x4955e5]=_0x4c287a[_0x185526(0x20a)](0x0,_0x2a156f);}},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x39e)]=function(_0x4a9b73,_0x488578){const _0x5e9bb7=_0x5c102f;this[_0x5e9bb7(0x2f3)](_0x4a9b73)&&(_0x488578+=this[_0x5e9bb7(0x2d6)](stateId),this[_0x5e9bb7(0x30b)](_0x4a9b73,_0x488578));},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x32c)]=function(_0x126bc0,_0x295713){const _0xfa4224=_0x5c102f;if(this[_0xfa4224(0x255)](_0x126bc0)){const _0x2d8bd1=VisuMZ[_0xfa4224(0x3a5)]['Settings'][_0xfa4224(0x1c1)]['MaxTurns'];this['_buffTurns'][_0x126bc0]=_0x295713['clamp'](0x0,_0x2d8bd1);}},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x256)]=function(_0x4302d1,_0x2d41a2){const _0x3c4c11=_0x5c102f;this[_0x3c4c11(0x255)](_0x4302d1)&&(_0x2d41a2+=this[_0x3c4c11(0x2d6)](stateId),this['setStateTurns'](_0x4302d1,_0x2d41a2));},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x211)]=function(_0x1bdd2a){const _0x13e2a2=_0x5c102f;if(typeof _0x1bdd2a!==_0x13e2a2(0x3bb))_0x1bdd2a=_0x1bdd2a['id'];return this[_0x13e2a2(0x322)]=this[_0x13e2a2(0x322)]||{},this[_0x13e2a2(0x322)][_0x1bdd2a]=this['_stateData'][_0x1bdd2a]||{},this[_0x13e2a2(0x322)][_0x1bdd2a];},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1d9)]=function(_0x1152bb,_0x1213db){const _0xd075d9=_0x5c102f;if(typeof _0x1152bb!==_0xd075d9(0x3bb))_0x1152bb=_0x1152bb['id'];const _0x40feba=this[_0xd075d9(0x211)](_0x1152bb);return _0x40feba[_0x1213db];},Game_BattlerBase['prototype'][_0x5c102f(0x3ad)]=function(_0x7c7c41,_0xc19d0a,_0x1c9b24){const _0x185112=_0x5c102f;if(typeof _0x7c7c41!==_0x185112(0x3bb))_0x7c7c41=_0x7c7c41['id'];const _0x4f57a7=this[_0x185112(0x211)](_0x7c7c41);_0x4f57a7[_0xc19d0a]=_0x1c9b24;},Game_BattlerBase[_0x5c102f(0x317)]['clearStateData']=function(_0x156640){const _0x5463d6=_0x5c102f;if(typeof _0x156640!==_0x5463d6(0x3bb))_0x156640=_0x156640['id'];this[_0x5463d6(0x322)]=this[_0x5463d6(0x322)]||{},this[_0x5463d6(0x322)][_0x156640]={};},Game_BattlerBase[_0x5c102f(0x317)]['getStateDisplay']=function(_0x4dfde0){const _0x317f4e=_0x5c102f;if(typeof _0x4dfde0!==_0x317f4e(0x3bb))_0x4dfde0=_0x4dfde0['id'];return this['_stateDisplay']=this[_0x317f4e(0x2dd)]||{},this[_0x317f4e(0x2dd)][_0x4dfde0]===undefined&&(this[_0x317f4e(0x2dd)][_0x4dfde0]=''),this['_stateDisplay'][_0x4dfde0];},Game_BattlerBase[_0x5c102f(0x317)]['setStateDisplay']=function(_0x21b589,_0x3f99ea){const _0x28c928=_0x5c102f;if(typeof _0x21b589!==_0x28c928(0x3bb))_0x21b589=_0x21b589['id'];this[_0x28c928(0x2dd)]=this[_0x28c928(0x2dd)]||{},this[_0x28c928(0x2dd)][_0x21b589]=_0x3f99ea;},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x1bb)]=function(_0x30d0c7){const _0x478477=_0x5c102f;if(typeof _0x30d0c7!==_0x478477(0x3bb))_0x30d0c7=_0x30d0c7['id'];this['_stateDisplay']=this[_0x478477(0x2dd)]||{},this[_0x478477(0x2dd)][_0x30d0c7]='';},Game_BattlerBase['prototype'][_0x5c102f(0x278)]=function(_0x596419){const _0x5226e3=_0x5c102f;if(typeof _0x596419!==_0x5226e3(0x3bb))_0x596419=_0x596419['id'];this[_0x5226e3(0x2be)]=this[_0x5226e3(0x2be)]||{},this[_0x5226e3(0x2be)][_0x596419]=this['_stateOrigin'][_0x596419]||'user';const _0xaaf8d6=this['_stateOrigin'][_0x596419];return this[_0x5226e3(0x319)](_0xaaf8d6);},Game_BattlerBase['prototype']['setStateOrigin']=function(_0xfb2a93,_0x9b8cd2){const _0x23dd9d=_0x5c102f;this[_0x23dd9d(0x2be)]=this[_0x23dd9d(0x2be)]||{};const _0x539b09=_0x9b8cd2?this[_0x23dd9d(0x380)](_0x9b8cd2):this['getCurrentStateOriginKey']();this['_stateOrigin'][_0xfb2a93]=_0x539b09;},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x2b0)]=function(_0x2eafba){const _0x2c0acf=_0x5c102f;this[_0x2c0acf(0x2be)]=this[_0x2c0acf(0x2be)]||{},delete this[_0x2c0acf(0x2be)][_0x2eafba];},Game_BattlerBase['prototype']['getCurrentStateOriginKey']=function(){const _0x2309f1=_0x5c102f,_0x344191=this[_0x2309f1(0x288)]();return this[_0x2309f1(0x380)](_0x344191);},Game_BattlerBase[_0x5c102f(0x317)]['getCurrentStateActiveUser']=function(){const _0xdfa777=_0x5c102f;if($gameParty[_0xdfa777(0x1c9)]()){if(BattleManager['_subject'])return BattleManager[_0xdfa777(0x1df)];else{if(BattleManager[_0xdfa777(0x2a9)])return BattleManager[_0xdfa777(0x2a9)];}}else{const _0x368ef3=SceneManager[_0xdfa777(0x3ce)];if(![Scene_Map,Scene_Item][_0xdfa777(0x1f7)](_0x368ef3[_0xdfa777(0x340)]))return $gameParty[_0xdfa777(0x24c)]();}return this;},Game_BattlerBase[_0x5c102f(0x317)]['convertTargetToStateOriginKey']=function(_0x814665){const _0x13c7f5=_0x5c102f;if(!_0x814665)return _0x13c7f5(0x2a4);if(_0x814665[_0x13c7f5(0x250)]())return _0x13c7f5(0x2a0)['format'](_0x814665[_0x13c7f5(0x365)]());else{const _0xb7d407=_0x13c7f5(0x1a5)[_0x13c7f5(0x2ec)](_0x814665[_0x13c7f5(0x1fd)]()),_0x136e1c=_0x13c7f5(0x19b)['format'](_0x814665[_0x13c7f5(0x388)]()),_0x4863ef=_0x13c7f5(0x18a)['format']($gameTroop[_0x13c7f5(0x289)]());return _0x13c7f5(0x3ac)['format'](_0xb7d407,_0x136e1c,_0x4863ef);}return _0x13c7f5(0x2a4);},Game_BattlerBase[_0x5c102f(0x317)]['getStateOriginByKey']=function(_0x156190){const _0x5a3de2=_0x5c102f;if(_0x156190===_0x5a3de2(0x2a4))return this;else{if(_0x156190['match'](/<actor-(\d+)>/i))return $gameActors[_0x5a3de2(0x1a1)](Number(RegExp['$1']));else{if($gameParty[_0x5a3de2(0x1c9)]()&&_0x156190[_0x5a3de2(0x29e)](/<troop-(\d+)>/i)){const _0x4892ae=Number(RegExp['$1']);if(_0x4892ae===$gameTroop['getCurrentTroopUniqueID']()){if(_0x156190[_0x5a3de2(0x29e)](/<member-(\d+)>/i))return $gameTroop[_0x5a3de2(0x2da)]()[Number(RegExp['$1'])];}}if(_0x156190[_0x5a3de2(0x29e)](/<enemy-(\d+)>/i))return new Game_Enemy(Number(RegExp['$1']),-0x1f4,-0x1f4);}}return this;},VisuMZ[_0x5c102f(0x3a5)]['Game_Battler_addState']=Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x31f)],Game_Battler['prototype']['addState']=function(_0x28488a){const _0x3f4f47=_0x5c102f,_0x1e9b42=this[_0x3f4f47(0x356)](_0x28488a);VisuMZ[_0x3f4f47(0x3a5)][_0x3f4f47(0x1e8)]['call'](this,_0x28488a);if(_0x1e9b42&&this['hasState']($dataStates[_0x28488a])){this[_0x3f4f47(0x311)](_0x28488a);;}},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2bc)]=Game_Battler['prototype'][_0x5c102f(0x356)],Game_Battler['prototype']['isStateAddable']=function(_0x4256c5){const _0x42973f=_0x5c102f,_0x35779c=$dataStates[_0x4256c5];if(_0x35779c&&_0x35779c[_0x42973f(0x2ac)][_0x42973f(0x29e)](/<NO DEATH CLEAR>/i))return!this[_0x42973f(0x31e)](_0x4256c5)&&!this['isStateRestrict'](_0x4256c5)&&!this[_0x42973f(0x36c)]['isStateRemoved'](_0x4256c5);return VisuMZ[_0x42973f(0x3a5)]['Game_Battler_isStateAddable'][_0x42973f(0x2ed)](this,_0x4256c5);},Game_Battler['prototype'][_0x5c102f(0x311)]=function(_0xf6dd75){const _0x23af14=_0x5c102f;this[_0x23af14(0x277)](_0xf6dd75),this['onAddStateMakeCustomSlipValues'](_0xf6dd75),this['onAddStateCustomJS'](_0xf6dd75),this[_0x23af14(0x399)](_0xf6dd75);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x236)]=function(_0x4cba67){const _0x4418f2=_0x5c102f;Game_BattlerBase[_0x4418f2(0x317)][_0x4418f2(0x236)][_0x4418f2(0x2ed)](this,_0x4cba67),this[_0x4418f2(0x2b5)](_0x4cba67),this[_0x4418f2(0x296)](_0x4cba67);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x285)]=function(_0x813b02){const _0x1d2b12=_0x5c102f;for(const _0x2b041c of this[_0x1d2b12(0x1b6)]()){this['isStateExpired'](_0x2b041c['id'])&&_0x2b041c[_0x1d2b12(0x1a0)]===_0x813b02&&(this[_0x1d2b12(0x26f)](_0x2b041c['id']),this[_0x1d2b12(0x2bb)](_0x2b041c['id']),this['onExpireStateGlobalJS'](_0x2b041c['id']));}},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x2bb)]=function(_0x62b673){const _0x273ae4=_0x5c102f;this[_0x273ae4(0x1d5)](_0x62b673);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x382)]=function(_0x3cb574){const _0x5289d8=_0x5c102f;if(this['_tempActor']||this[_0x5289d8(0x20f)])return;const _0xa56e54=VisuMZ['SkillsStatesCore'][_0x5289d8(0x28c)];if(_0xa56e54[_0x3cb574])_0xa56e54[_0x3cb574]['call'](this,_0x3cb574);},Game_Battler['prototype'][_0x5c102f(0x2b5)]=function(_0x40fd23){const _0x427b91=_0x5c102f;if(this[_0x427b91(0x2c3)]||this[_0x427b91(0x20f)])return;const _0x2b1b67=VisuMZ[_0x427b91(0x3a5)][_0x427b91(0x231)];if(_0x2b1b67[_0x40fd23])_0x2b1b67[_0x40fd23][_0x427b91(0x2ed)](this,_0x40fd23);},Game_Battler[_0x5c102f(0x317)]['onExpireStateCustomJS']=function(_0x39e10d){const _0x1d5718=_0x5c102f;if(this[_0x1d5718(0x2c3)]||this[_0x1d5718(0x20f)])return;const _0x12fbea=VisuMZ[_0x1d5718(0x3a5)][_0x1d5718(0x384)];if(_0x12fbea[_0x39e10d])_0x12fbea[_0x39e10d][_0x1d5718(0x2ed)](this,_0x39e10d);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x399)]=function(_0x4086b4){const _0x71c580=_0x5c102f;if(this[_0x71c580(0x2c3)]||this['_tempBattler'])return;try{VisuMZ['SkillsStatesCore'][_0x71c580(0x308)][_0x71c580(0x2e2)][_0x71c580(0x297)][_0x71c580(0x2ed)](this,_0x4086b4);}catch(_0x12a054){if($gameTemp['isPlaytest']())console['log'](_0x12a054);}},Game_Battler['prototype'][_0x5c102f(0x296)]=function(_0x3ceac0){const _0xb4d5a9=_0x5c102f;if(this[_0xb4d5a9(0x2c3)]||this[_0xb4d5a9(0x20f)])return;try{VisuMZ['SkillsStatesCore']['Settings'][_0xb4d5a9(0x2e2)]['onEraseStateJS'][_0xb4d5a9(0x2ed)](this,_0x3ceac0);}catch(_0xcd7e80){if($gameTemp[_0xb4d5a9(0x22b)]())console[_0xb4d5a9(0x336)](_0xcd7e80);}},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x2ee)]=function(_0x1d8e9c){const _0x4a479a=_0x5c102f;if(this[_0x4a479a(0x2c3)]||this['_tempBattler'])return;try{VisuMZ[_0x4a479a(0x3a5)][_0x4a479a(0x308)][_0x4a479a(0x2e2)]['onExpireStateJS'][_0x4a479a(0x2ed)](this,_0x1d8e9c);}catch(_0x1dceb3){if($gameTemp[_0x4a479a(0x22b)]())console['log'](_0x1dceb3);}},Game_Battler['prototype'][_0x5c102f(0x3ab)]=function(_0x193219){const _0x3b3e25=_0x5c102f;return _0x193219=_0x193219['toUpperCase']()[_0x3b3e25(0x353)](),this[_0x3b3e25(0x1b6)]()[_0x3b3e25(0x2ad)](_0x1901ea=>_0x1901ea[_0x3b3e25(0x397)][_0x3b3e25(0x1f7)](_0x193219));},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x1ca)]=function(_0x22c1a3,_0x4a4886){const _0x590cf5=_0x5c102f;_0x22c1a3=_0x22c1a3[_0x590cf5(0x3b8)]()[_0x590cf5(0x353)](),_0x4a4886=_0x4a4886||0x0;const _0x29543e=this['statesByCategory'](_0x22c1a3),_0x21e69a=[];for(const _0xb15ddb of _0x29543e){if(!_0xb15ddb)continue;if(_0x4a4886<=0x0)return;_0x21e69a['push'](_0xb15ddb['id']),this['_result'][_0x590cf5(0x26a)]=!![],_0x4a4886--;}while(_0x21e69a[_0x590cf5(0x3cb)]>0x0){this[_0x590cf5(0x26f)](_0x21e69a[_0x590cf5(0x228)]());}},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x325)]=function(_0x3cbcaa){const _0x4610c5=_0x5c102f;_0x3cbcaa=_0x3cbcaa[_0x4610c5(0x3b8)]()['trim']();const _0x4aaa95=this[_0x4610c5(0x3ab)](_0x3cbcaa),_0x509b84=[];for(const _0xabc0b8 of _0x4aaa95){if(!_0xabc0b8)continue;_0x509b84[_0x4610c5(0x1ee)](_0xabc0b8['id']),this[_0x4610c5(0x36c)][_0x4610c5(0x26a)]=!![];}while(_0x509b84[_0x4610c5(0x3cb)]>0x0){this['removeState'](_0x509b84['shift']());}},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x1e4)]=function(_0x3ec82a){const _0x3ee194=_0x5c102f;return this[_0x3ee194(0x2c1)](_0x3ec82a)>0x0;},Game_Battler['prototype']['hasStateCategory']=function(_0x29cf7e){return this['totalStateCategory'](_0x29cf7e)>0x0;},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x2c1)]=function(_0x595282){const _0x40c794=_0x5c102f,_0x461237=this['statesByCategory'](_0x595282)[_0x40c794(0x2ad)](_0x2ba906=>this[_0x40c794(0x210)](_0x2ba906['id']));return _0x461237[_0x40c794(0x3cb)];},Game_Battler['prototype'][_0x5c102f(0x2e3)]=function(_0xf09569){const _0x23d246=this['statesByCategory'](_0xf09569);return _0x23d246['length'];},VisuMZ['SkillsStatesCore']['Game_BattlerBase_isStateResist']=Game_BattlerBase[_0x5c102f(0x317)]['isStateResist'],Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x31e)]=function(_0x4af093){const _0xc53ba5=_0x5c102f,_0x3c7704=$dataStates[_0x4af093];if(_0x3c7704&&_0x3c7704['categories'][_0xc53ba5(0x3cb)]>0x0)for(const _0x107f30 of _0x3c7704[_0xc53ba5(0x397)]){if(this[_0xc53ba5(0x1a3)](_0x107f30))return!![];}return VisuMZ[_0xc53ba5(0x3a5)][_0xc53ba5(0x24f)][_0xc53ba5(0x2ed)](this,_0x4af093);},Game_BattlerBase[_0x5c102f(0x317)]['isStateCategoryResisted']=function(_0x4aaad1){const _0x5452fa=_0x5c102f;let _0x906ed1=_0x5452fa(0x263);if(this[_0x5452fa(0x3a3)](_0x906ed1))return this[_0x5452fa(0x3c1)][_0x906ed1][_0x5452fa(0x1f7)](_0x4aaad1);return this[_0x5452fa(0x3c1)][_0x906ed1]=this['makeResistedStateCategories'](),this[_0x5452fa(0x3c1)][_0x906ed1][_0x5452fa(0x1f7)](_0x4aaad1);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x28f)]=function(){const _0xb43198=_0x5c102f,_0xaa3127=/<RESIST STATE (?:CATEGORY|CATEGORIES):[ ](.*)>/gi,_0x10e332=/<RESIST STATE (?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/RESIST STATE (?:CATEGORY|CATEGORIES)>/i;let _0x464d8d=[];for(const _0x57624e of this['traitObjects']()){if(!_0x57624e)continue;const _0x1c0326=_0x57624e[_0xb43198(0x2ac)],_0x1faf33=_0x1c0326[_0xb43198(0x29e)](_0xaa3127);if(_0x1faf33)for(const _0x599d33 of _0x1faf33){_0x599d33['match'](_0xaa3127);const _0x4ea6b2=String(RegExp['$1'])[_0xb43198(0x28b)](',')[_0xb43198(0x1e1)](_0xa704b3=>String(_0xa704b3)['toUpperCase']()[_0xb43198(0x353)]());_0x464d8d=_0x464d8d['concat'](_0x4ea6b2);}if(_0x1c0326['match'](_0x10e332)){const _0x5c0101=String(RegExp['$1'])[_0xb43198(0x28b)](/[\r\n]+/)['map'](_0x3ee1d8=>String(_0x3ee1d8)[_0xb43198(0x3b8)]()['trim']());_0x464d8d=_0x464d8d[_0xb43198(0x3bc)](_0x5c0101);}}return _0x464d8d;},VisuMZ['SkillsStatesCore']['Game_Battler_addBuff']=Game_Battler[_0x5c102f(0x317)]['addBuff'],Game_Battler[_0x5c102f(0x317)]['addBuff']=function(_0x4f5ca2,_0x12c183){const _0x3d87dd=_0x5c102f;VisuMZ[_0x3d87dd(0x3a5)][_0x3d87dd(0x368)][_0x3d87dd(0x2ed)](this,_0x4f5ca2,_0x12c183),this[_0x3d87dd(0x2f3)](_0x4f5ca2)&&this[_0x3d87dd(0x2e7)](_0x4f5ca2,_0x12c183);},Game_Battler['prototype'][_0x5c102f(0x3a0)]=function(_0x1b3937){},VisuMZ['SkillsStatesCore'][_0x5c102f(0x3c3)]=Game_Battler['prototype'][_0x5c102f(0x31b)],Game_Battler[_0x5c102f(0x317)]['addDebuff']=function(_0x16371d,_0x14343e){const _0x2054d0=_0x5c102f;VisuMZ[_0x2054d0(0x3a5)][_0x2054d0(0x3c3)][_0x2054d0(0x2ed)](this,_0x16371d,_0x14343e),this['isDebuffAffected'](_0x16371d)&&this[_0x2054d0(0x329)](_0x16371d,_0x14343e);},Game_Battler[_0x5c102f(0x317)]['removeBuffsAuto']=function(){const _0x5d8265=_0x5c102f;for(let _0x3ec92c=0x0;_0x3ec92c<this[_0x5d8265(0x212)]();_0x3ec92c++){if(this['isBuffExpired'](_0x3ec92c)){const _0x598f2d=this[_0x5d8265(0x2c7)][_0x3ec92c];this[_0x5d8265(0x2fa)](_0x3ec92c);if(_0x598f2d>0x0)this[_0x5d8265(0x328)](_0x3ec92c);if(_0x598f2d<0x0)this[_0x5d8265(0x1b3)](_0x3ec92c);}}},Game_Battler[_0x5c102f(0x317)]['onAddBuff']=function(_0xa6b7ab,_0x4e961b){const _0x279bd7=_0x5c102f;this[_0x279bd7(0x2c9)](_0xa6b7ab,_0x4e961b);},Game_Battler[_0x5c102f(0x317)]['onAddDebuff']=function(_0x52ede6,_0x237807){const _0x91f2a2=_0x5c102f;this[_0x91f2a2(0x25e)](_0x52ede6,_0x237807);},Game_Battler['prototype']['onEraseBuff']=function(_0x5ab37a){const _0x3b0440=_0x5c102f;Game_BattlerBase[_0x3b0440(0x317)][_0x3b0440(0x349)]['call'](this,_0x5ab37a),this['onEraseBuffGlobalJS'](_0x5ab37a);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x257)]=function(_0x5bdade){const _0x45dc33=_0x5c102f;Game_BattlerBase[_0x45dc33(0x317)][_0x45dc33(0x257)]['call'](this,_0x5bdade),this[_0x45dc33(0x316)](_0x5bdade);},Game_Battler[_0x5c102f(0x317)]['onExpireBuff']=function(_0x3e9b1d){const _0xabbbee=_0x5c102f;this[_0xabbbee(0x30e)](_0x3e9b1d);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x1b3)]=function(_0x800ad1){const _0x2ca00e=_0x5c102f;this[_0x2ca00e(0x1cb)](_0x800ad1);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x2c9)]=function(_0x6e70ec,_0x47a351){const _0x287ed6=_0x5c102f;VisuMZ['SkillsStatesCore']['Settings'][_0x287ed6(0x1c1)]['onAddBuffJS']['call'](this,_0x6e70ec,_0x47a351);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x25e)]=function(_0x32f15b,_0x3cd00d){const _0x43a136=_0x5c102f;VisuMZ[_0x43a136(0x3a5)]['Settings']['Buffs']['onAddDebuffJS'][_0x43a136(0x2ed)](this,_0x32f15b,_0x3cd00d);},Game_BattlerBase[_0x5c102f(0x317)]['onEraseBuffGlobalJS']=function(_0x198c35){const _0x1a7b76=_0x5c102f;VisuMZ['SkillsStatesCore'][_0x1a7b76(0x308)][_0x1a7b76(0x1c1)][_0x1a7b76(0x398)][_0x1a7b76(0x2ed)](this,_0x198c35);},Game_BattlerBase[_0x5c102f(0x317)][_0x5c102f(0x316)]=function(_0x398b96){const _0x47ce50=_0x5c102f;VisuMZ[_0x47ce50(0x3a5)][_0x47ce50(0x308)][_0x47ce50(0x1c1)][_0x47ce50(0x378)][_0x47ce50(0x2ed)](this,_0x398b96);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x30e)]=function(_0x1a35b2){const _0x3470c0=_0x5c102f;VisuMZ[_0x3470c0(0x3a5)][_0x3470c0(0x308)][_0x3470c0(0x1c1)][_0x3470c0(0x355)]['call'](this,_0x1a35b2);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x1cb)]=function(_0x7981ff){const _0x4c119b=_0x5c102f;VisuMZ[_0x4c119b(0x3a5)]['Settings'][_0x4c119b(0x1c1)][_0x4c119b(0x2c4)][_0x4c119b(0x2ed)](this,_0x7981ff);},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x299)]=function(_0x1fdb6e){const _0x4439fd=_0x5c102f,_0x3ed03a=VisuMZ[_0x4439fd(0x3a5)],_0x2e79ea=[_0x4439fd(0x2dc),_0x4439fd(0x387),'stateMpSlipDamageJS',_0x4439fd(0x39b),_0x4439fd(0x25b),_0x4439fd(0x347)];for(const _0x1c54f0 of _0x2e79ea){_0x3ed03a[_0x1c54f0][_0x1fdb6e]&&_0x3ed03a[_0x1c54f0][_0x1fdb6e][_0x4439fd(0x2ed)](this,_0x1fdb6e);}},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x24b)]=Game_Battler[_0x5c102f(0x317)]['regenerateAll'],Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x2a8)]=function(){const _0x477481=_0x5c102f;VisuMZ['SkillsStatesCore'][_0x477481(0x24b)][_0x477481(0x2ed)](this);},Game_Battler['prototype'][_0x5c102f(0x188)]=function(){const _0x1f0e6a=_0x5c102f;for(const _0x5ab20e of this[_0x1f0e6a(0x33e)]()){if(!_0x5ab20e)continue;this[_0x1f0e6a(0x299)](_0x5ab20e['id']);}},Game_Battler['prototype']['recalculateSlipDamageJS']=function(){const _0x183060=_0x5c102f;for(const _0x1fd933 of this[_0x183060(0x1b6)]()){if(!_0x1fd933)continue;_0x1fd933[_0x183060(0x2ac)][_0x183060(0x29e)](/<JS SLIP REFRESH>/i)&&this[_0x183060(0x299)](_0x1fd933['id']);}},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x18c)]=function(){const _0x10a4aa=_0x5c102f;if(!this[_0x10a4aa(0x32e)]())return;const _0xd01056=this['states']();for(const _0x30e5a3 of _0xd01056){if(!_0x30e5a3)continue;this[_0x10a4aa(0x272)](_0x30e5a3);}},Game_Battler[_0x5c102f(0x317)][_0x5c102f(0x272)]=function(_0x2ab6d8){const _0x5f25e9=_0x5c102f,_0x2e3cc4=this[_0x5f25e9(0x1d9)](_0x2ab6d8['id'],_0x5f25e9(0x2d2))||0x0,_0x4830e5=-this[_0x5f25e9(0x227)](),_0xe85596=Math[_0x5f25e9(0x19e)](_0x2e3cc4,_0x4830e5);if(_0xe85596!==0x0)this[_0x5f25e9(0x1fc)](_0xe85596);const _0x186f04=this[_0x5f25e9(0x1d9)](_0x2ab6d8['id'],_0x5f25e9(0x206))||0x0;if(_0x186f04!==0x0)this[_0x5f25e9(0x2ce)](_0x186f04);const _0x986c86=this[_0x5f25e9(0x1d9)](_0x2ab6d8['id'],'slipTp')||0x0;if(_0x986c86!==0x0)this['gainSilentTp'](_0x986c86);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x30c)]=Game_Actor[_0x5c102f(0x317)][_0x5c102f(0x2a5)],Game_Actor['prototype'][_0x5c102f(0x2a5)]=function(){const _0x5cc73e=_0x5c102f,_0x5f558a=VisuMZ[_0x5cc73e(0x3a5)][_0x5cc73e(0x30c)][_0x5cc73e(0x2ed)](this),_0x281759=VisuMZ[_0x5cc73e(0x3a5)][_0x5cc73e(0x308)][_0x5cc73e(0x2f6)];let _0x3b466b=_0x281759[_0x5cc73e(0x1e9)];return $gameParty['inBattle']()&&(_0x3b466b=_0x3b466b['concat'](_0x281759[_0x5cc73e(0x240)])),_0x5f558a[_0x5cc73e(0x2ad)](_0xa68eb=>!_0x3b466b[_0x5cc73e(0x1f7)](_0xa68eb));},Game_Actor[_0x5c102f(0x317)]['usableSkills']=function(){const _0x2a5c89=_0x5c102f;return this[_0x2a5c89(0x20d)]()[_0x2a5c89(0x2ad)](_0x1f82e8=>this[_0x2a5c89(0x23b)](_0x1f82e8));},Game_Actor['prototype'][_0x5c102f(0x23b)]=function(_0xa647c2){const _0x21f1d3=_0x5c102f;if(!this[_0x21f1d3(0x39f)](_0xa647c2))return![];if(!_0xa647c2)return![];if(!this[_0x21f1d3(0x2d4)](_0xa647c2))return![];if(this['isSkillHidden'](_0xa647c2))return![];return!![];},Game_Actor[_0x5c102f(0x317)][_0x5c102f(0x2d4)]=function(_0xf4c2d6){const _0x35b6cf=_0x5c102f,_0x43c3fa=this['skillTypes'](),_0x3254a2=DataManager[_0x35b6cf(0x189)](_0xf4c2d6),_0x2a0ad8=_0x43c3fa[_0x35b6cf(0x2ad)](_0x836e30=>_0x3254a2['includes'](_0x836e30));return _0x2a0ad8[_0x35b6cf(0x3cb)]>0x0;},Game_Actor[_0x5c102f(0x317)][_0x5c102f(0x28d)]=function(_0x5a12fe){const _0x4e1c61=_0x5c102f;if(!VisuMZ[_0x4e1c61(0x3a5)][_0x4e1c61(0x224)](this,_0x5a12fe))return!![];if(!VisuMZ[_0x4e1c61(0x3a5)][_0x4e1c61(0x1ff)](this,_0x5a12fe))return!![];if(!VisuMZ['SkillsStatesCore'][_0x4e1c61(0x2d7)](this,_0x5a12fe))return!![];return![];},Game_Actor['prototype'][_0x5c102f(0x305)]=function(){const _0xb2e69e=_0x5c102f;let _0x2aed48=[this[_0xb2e69e(0x1a1)](),this[_0xb2e69e(0x2bf)]()];_0x2aed48=_0x2aed48[_0xb2e69e(0x3bc)](this['equips']()['filter'](_0x4924d2=>_0x4924d2));for(const _0x322ed1 of this[_0xb2e69e(0x269)]){const _0x55eff7=$dataSkills[_0x322ed1];if(_0x55eff7)_0x2aed48[_0xb2e69e(0x1ee)](_0x55eff7);}return _0x2aed48;},Game_Actor[_0x5c102f(0x317)]['addPassiveStatesByPluginParameters']=function(){const _0x30abb5=_0x5c102f;Game_Battler[_0x30abb5(0x317)]['addPassiveStatesByPluginParameters'][_0x30abb5(0x2ed)](this);const _0x11917c=VisuMZ[_0x30abb5(0x3a5)]['Settings'][_0x30abb5(0x282)][_0x30abb5(0x243)];this['_cache']['passiveStates']=this[_0x30abb5(0x3c1)][_0x30abb5(0x33e)]['concat'](_0x11917c);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x286)]=Game_Actor['prototype'][_0x5c102f(0x2cc)],Game_Actor['prototype'][_0x5c102f(0x2cc)]=function(_0x1fd02f){const _0x3b36f3=_0x5c102f;VisuMZ[_0x3b36f3(0x3a5)][_0x3b36f3(0x286)][_0x3b36f3(0x2ed)](this,_0x1fd02f),this['_cache']={};},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x276)]=Game_Actor[_0x5c102f(0x317)]['forgetSkill'],Game_Actor[_0x5c102f(0x317)][_0x5c102f(0x262)]=function(_0x434b05){const _0x108a1b=_0x5c102f;VisuMZ[_0x108a1b(0x3a5)]['Game_Actor_forgetSkill'][_0x108a1b(0x2ed)](this,_0x434b05),this['_cache']={};},Game_Actor['prototype'][_0x5c102f(0x1c7)]=function(){const _0x44db20=_0x5c102f;return VisuMZ['SkillsStatesCore'][_0x44db20(0x308)]['States']['TurnEndOnMap']??0x14;},Game_Enemy[_0x5c102f(0x317)][_0x5c102f(0x305)]=function(){const _0x3ee756=_0x5c102f;let _0x3c0e38=[this['enemy']()];return _0x3c0e38['concat'](this[_0x3ee756(0x20d)]());},Game_Enemy['prototype']['addPassiveStatesByPluginParameters']=function(){const _0x2a66fb=_0x5c102f;Game_Battler[_0x2a66fb(0x317)][_0x2a66fb(0x233)][_0x2a66fb(0x2ed)](this);const _0x247ba5=VisuMZ['SkillsStatesCore'][_0x2a66fb(0x308)][_0x2a66fb(0x282)]['Enemy'];this['_cache']['passiveStates']=this[_0x2a66fb(0x3c1)]['passiveStates'][_0x2a66fb(0x3bc)](_0x247ba5);},Game_Enemy[_0x5c102f(0x317)][_0x5c102f(0x20d)]=function(){const _0x48b543=_0x5c102f,_0x55f105=[];for(const _0x355afa of this[_0x48b543(0x1ad)]()['actions']){const _0x27e621=$dataSkills[_0x355afa[_0x48b543(0x3c2)]];if(_0x27e621&&!_0x55f105[_0x48b543(0x1f7)](_0x27e621))_0x55f105[_0x48b543(0x1ee)](_0x27e621);}return _0x55f105;},Game_Enemy[_0x5c102f(0x317)][_0x5c102f(0x3a2)]=function(_0xe7e57a){const _0x2f4744=_0x5c102f;return this[_0x2f4744(0x373)]($dataStates[_0xe7e57a]);},VisuMZ[_0x5c102f(0x3a5)]['Game_Unit_isAllDead']=Game_Unit['prototype']['isAllDead'],Game_Unit[_0x5c102f(0x317)][_0x5c102f(0x362)]=function(){const _0x7197f4=_0x5c102f;if(this['isPartyAllAffectedByGroupDefeatStates']())return!![];return VisuMZ['SkillsStatesCore'][_0x7197f4(0x204)][_0x7197f4(0x2ed)](this);},Game_Unit[_0x5c102f(0x317)][_0x5c102f(0x28a)]=function(){const _0x305374=_0x5c102f,_0x5a3c31=this[_0x305374(0x2d5)]();for(const _0x428b63 of _0x5a3c31){if(!_0x428b63[_0x305374(0x22c)]())return![];}return!![];},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x28e)]=Game_Troop[_0x5c102f(0x317)][_0x5c102f(0x310)],Game_Troop[_0x5c102f(0x317)][_0x5c102f(0x310)]=function(_0x197cef){const _0x1d2ded=_0x5c102f;VisuMZ['SkillsStatesCore']['Game_Troop_setup']['call'](this,_0x197cef),this[_0x1d2ded(0x370)]();},Game_Troop['prototype'][_0x5c102f(0x370)]=function(){const _0x1a04ba=_0x5c102f;this[_0x1a04ba(0x2b9)]=Graphics[_0x1a04ba(0x268)];},Game_Troop['prototype'][_0x5c102f(0x289)]=function(){const _0xd369a1=_0x5c102f;return this['_currentTroopUniqueID']=this['_currentTroopUniqueID']||Graphics['frameCount'],this[_0xd369a1(0x2b9)];},Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x1dc)]=function(){const _0x2147cc=_0x5c102f;if(ConfigManager[_0x2147cc(0x326)]&&ConfigManager[_0x2147cc(0x21a)]!==undefined)return ConfigManager[_0x2147cc(0x21a)];else{if(this['isUseSkillsStatesCoreUpdatedLayout']())return this['updatedLayoutStyle']()[_0x2147cc(0x29e)](/LOWER/i);else Scene_ItemBase[_0x2147cc(0x317)]['isRightInputMode'][_0x2147cc(0x2ed)](this);}},Scene_Skill['prototype']['isRightInputMode']=function(){const _0xfbbe18=_0x5c102f;if(ConfigManager[_0xfbbe18(0x326)]&&ConfigManager['uiInputPosition']!==undefined)return ConfigManager[_0xfbbe18(0x3be)];else return this[_0xfbbe18(0x271)]()?this['updatedLayoutStyle']()[_0xfbbe18(0x29e)](/RIGHT/i):Scene_ItemBase['prototype'][_0xfbbe18(0x1aa)][_0xfbbe18(0x2ed)](this);},Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x2fe)]=function(){const _0x496c8c=_0x5c102f;return VisuMZ[_0x496c8c(0x3a5)][_0x496c8c(0x308)][_0x496c8c(0x2f6)][_0x496c8c(0x1c8)];},Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x3c6)]=function(){const _0x48e50b=_0x5c102f;return this[_0x48e50b(0x2f7)]&&this['_categoryWindow'][_0x48e50b(0x3c6)]();},Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x271)]=function(){const _0x3a9f2c=_0x5c102f;return VisuMZ[_0x3a9f2c(0x3a5)][_0x3a9f2c(0x308)]['Skills'][_0x3a9f2c(0x379)];},VisuMZ['SkillsStatesCore'][_0x5c102f(0x26e)]=Scene_Skill['prototype'][_0x5c102f(0x3c7)],Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x3c7)]=function(){const _0xa6ed5c=_0x5c102f;return this[_0xa6ed5c(0x271)]()?this['helpWindowRectSkillsStatesCore']():VisuMZ['SkillsStatesCore'][_0xa6ed5c(0x26e)][_0xa6ed5c(0x2ed)](this);},Scene_Skill[_0x5c102f(0x317)]['helpWindowRectSkillsStatesCore']=function(){const _0x248d45=_0x5c102f,_0x3ce311=0x0,_0x1e22fc=this[_0x248d45(0x31c)](),_0x266480=Graphics[_0x248d45(0x254)],_0x33b5e1=this[_0x248d45(0x2f0)]();return new Rectangle(_0x3ce311,_0x1e22fc,_0x266480,_0x33b5e1);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x264)]=Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x33f)],Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x33f)]=function(){const _0x51437=_0x5c102f;return this[_0x51437(0x271)]()?this['skillTypeWindowRectSkillsStatesCore']():VisuMZ[_0x51437(0x3a5)][_0x51437(0x264)][_0x51437(0x2ed)](this);},Scene_Skill[_0x5c102f(0x317)]['skillTypeWindowRectSkillsStatesCore']=function(){const _0x27c8a2=_0x5c102f,_0x22aa76=this['mainCommandWidth'](),_0x481e8b=this['calcWindowHeight'](0x3,!![]),_0x2cf573=this[_0x27c8a2(0x1aa)]()?Graphics['boxWidth']-_0x22aa76:0x0,_0x1de25c=this[_0x27c8a2(0x249)]();return new Rectangle(_0x2cf573,_0x1de25c,_0x22aa76,_0x481e8b);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1eb)]=Scene_Skill['prototype']['statusWindowRect'],Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x246)]=function(){const _0x3c2d6f=_0x5c102f;return this[_0x3c2d6f(0x271)]()?this['statusWindowRectSkillsStatesCore']():VisuMZ[_0x3c2d6f(0x3a5)][_0x3c2d6f(0x1eb)][_0x3c2d6f(0x2ed)](this);},Scene_Skill[_0x5c102f(0x317)]['statusWindowRectSkillsStatesCore']=function(){const _0x4bc261=_0x5c102f,_0x4b8e9d=Graphics[_0x4bc261(0x254)]-this[_0x4bc261(0x361)](),_0x2a356a=this['_skillTypeWindow'][_0x4bc261(0x3a9)],_0x19df94=this[_0x4bc261(0x1aa)]()?0x0:Graphics['boxWidth']-_0x4b8e9d,_0x4c827b=this[_0x4bc261(0x249)]();return new Rectangle(_0x19df94,_0x4c827b,_0x4b8e9d,_0x2a356a);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1d6)]=Scene_Skill['prototype'][_0x5c102f(0x2f2)],Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x2f2)]=function(){const _0x37a6b5=_0x5c102f;VisuMZ[_0x37a6b5(0x3a5)][_0x37a6b5(0x1d6)][_0x37a6b5(0x2ed)](this),this[_0x37a6b5(0x234)]()&&this[_0x37a6b5(0x205)]();},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x259)]=Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x281)],Scene_Skill[_0x5c102f(0x317)]['itemWindowRect']=function(){const _0x1e02e0=_0x5c102f;if(this[_0x1e02e0(0x271)]())return this[_0x1e02e0(0x1ed)]();else{const _0x3985f9=VisuMZ[_0x1e02e0(0x3a5)]['Scene_Skill_itemWindowRect'][_0x1e02e0(0x2ed)](this);return this['allowCreateShopStatusWindow']()&&this[_0x1e02e0(0x26d)]()&&(_0x3985f9['width']-=this[_0x1e02e0(0x321)]()),_0x3985f9;}},Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x1ed)]=function(){const _0x224b71=_0x5c102f,_0x1bb341=Graphics[_0x224b71(0x254)]-this['shopStatusWidth'](),_0x379377=this[_0x224b71(0x3a4)]()-this['_statusWindow'][_0x224b71(0x3a9)],_0x29cf1a=this[_0x224b71(0x1aa)]()?Graphics['boxWidth']-_0x1bb341:0x0,_0x10d627=this['_statusWindow']['y']+this[_0x224b71(0x245)][_0x224b71(0x3a9)];return new Rectangle(_0x29cf1a,_0x10d627,_0x1bb341,_0x379377);},Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x234)]=function(){const _0xc35303=_0x5c102f;if(!Imported[_0xc35303(0x24a)])return![];else return this[_0xc35303(0x271)]()?!![]:VisuMZ[_0xc35303(0x3a5)][_0xc35303(0x308)]['Skills'][_0xc35303(0x33d)];},Scene_Skill[_0x5c102f(0x317)]['adjustItemWidthByShopStatus']=function(){const _0x17bbef=_0x5c102f;return VisuMZ[_0x17bbef(0x3a5)][_0x17bbef(0x308)]['Skills']['SkillSceneAdjustSkillList'];},Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x205)]=function(){const _0x14aa3f=_0x5c102f,_0xed228=this[_0x14aa3f(0x35d)]();this['_shopStatusWindow']=new Window_ShopStatus(_0xed228),this['addWindow'](this[_0x14aa3f(0x34a)]),this[_0x14aa3f(0x386)][_0x14aa3f(0x337)](this[_0x14aa3f(0x34a)]);const _0x2badd6=VisuMZ[_0x14aa3f(0x3a5)]['Settings'][_0x14aa3f(0x2f6)]['SkillSceneStatusBgType'];this[_0x14aa3f(0x34a)][_0x14aa3f(0x23d)](_0x2badd6||0x0);},Scene_Skill['prototype'][_0x5c102f(0x35d)]=function(){const _0x4812ed=_0x5c102f;return this['isUseSkillsStatesCoreUpdatedLayout']()?this[_0x4812ed(0x37c)]():VisuMZ[_0x4812ed(0x3a5)][_0x4812ed(0x308)][_0x4812ed(0x2f6)][_0x4812ed(0x359)][_0x4812ed(0x2ed)](this);},Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x37c)]=function(){const _0x279a03=_0x5c102f,_0x2ed5d7=this[_0x279a03(0x321)](),_0x215cd2=this[_0x279a03(0x386)][_0x279a03(0x3a9)],_0x32d2a3=this[_0x279a03(0x1aa)]()?0x0:Graphics['boxWidth']-this[_0x279a03(0x321)](),_0x409b06=this[_0x279a03(0x386)]['y'];return new Rectangle(_0x32d2a3,_0x409b06,_0x2ed5d7,_0x215cd2);},Scene_Skill[_0x5c102f(0x317)]['shopStatusWidth']=function(){const _0x39384d=_0x5c102f;return Imported[_0x39384d(0x24a)]?Scene_Shop['prototype'][_0x39384d(0x229)]():0x0;},Scene_Skill[_0x5c102f(0x317)][_0x5c102f(0x3b1)]=function(){const _0x2666cf=_0x5c102f;return this[_0x2666cf(0x38a)]&&this['_skillTypeWindow'][_0x2666cf(0x2d1)]?TextManager[_0x2666cf(0x342)]:'';},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x22f)]=Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x352)],Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x352)]=function(){const _0x562c33=_0x5c102f;VisuMZ[_0x562c33(0x3a5)]['Sprite_Gauge_initMembers']['call'](this),this[_0x562c33(0x2d0)]=null;},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x274)]=Sprite_Gauge[_0x5c102f(0x317)]['setup'],Sprite_Gauge['prototype'][_0x5c102f(0x310)]=function(_0x4df98e,_0x1b9539){const _0x3cddf0=_0x5c102f;this[_0x3cddf0(0x279)](_0x4df98e,_0x1b9539),_0x1b9539=_0x1b9539['toLowerCase'](),VisuMZ[_0x3cddf0(0x3a5)]['Sprite_Gauge_setup']['call'](this,_0x4df98e,_0x1b9539);},Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x279)]=function(_0x271347,_0x26ad7b){const _0x12b454=_0x5c102f,_0x5e3fe7=VisuMZ[_0x12b454(0x3a5)]['Settings'][_0x12b454(0x1af)]['filter'](_0x33e1d6=>_0x33e1d6['Name'][_0x12b454(0x3b8)]()===_0x26ad7b['toUpperCase']());_0x5e3fe7[_0x12b454(0x3cb)]>=0x1?this[_0x12b454(0x2d0)]=_0x5e3fe7[0x0]:this[_0x12b454(0x2d0)]=null;},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1ce)]=Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x35c)],Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x35c)]=function(){const _0xc10c21=_0x5c102f;return this['_battler']&&this[_0xc10c21(0x2d0)]?this[_0xc10c21(0x363)]():VisuMZ['SkillsStatesCore']['Sprite_Gauge_currentValue'][_0xc10c21(0x2ed)](this);},Sprite_Gauge[_0x5c102f(0x317)]['currentValueSkillsStatesCore']=function(){const _0x10f852=_0x5c102f;return this[_0x10f852(0x2d0)][_0x10f852(0x36e)][_0x10f852(0x2ed)](this['_battler']);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1b8)]=Sprite_Gauge[_0x5c102f(0x317)]['currentMaxValue'],Sprite_Gauge['prototype'][_0x5c102f(0x2a2)]=function(){const _0x2346b1=_0x5c102f;return this[_0x2346b1(0x2e4)]&&this[_0x2346b1(0x2d0)]?this[_0x2346b1(0x2ff)]():VisuMZ[_0x2346b1(0x3a5)][_0x2346b1(0x1b8)][_0x2346b1(0x2ed)](this);},Sprite_Gauge[_0x5c102f(0x317)]['currentMaxValueSkillsStatesCore']=function(){const _0x590496=_0x5c102f;return this[_0x590496(0x2d0)][_0x590496(0x1a2)][_0x590496(0x2ed)](this[_0x590496(0x2e4)]);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x314)]=Sprite_Gauge['prototype']['gaugeRate'],Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x1c2)]=function(){const _0x40449b=_0x5c102f,_0x57ebb9=VisuMZ['SkillsStatesCore']['Sprite_Gauge_gaugeRate']['call'](this);return _0x57ebb9[_0x40449b(0x20a)](0x0,0x1);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1da)]=Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x338)],Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x338)]=function(){const _0x43eb9c=_0x5c102f;this[_0x43eb9c(0x2e4)]&&this[_0x43eb9c(0x2d0)]?(this[_0x43eb9c(0x23a)][_0x43eb9c(0x3c5)](),this[_0x43eb9c(0x1c6)]()):VisuMZ[_0x43eb9c(0x3a5)][_0x43eb9c(0x1da)][_0x43eb9c(0x2ed)](this);},Sprite_Gauge['prototype'][_0x5c102f(0x339)]=function(){const _0x173cca=_0x5c102f;let _0x2bbc56=this[_0x173cca(0x35c)]();return Imported['VisuMZ_0_CoreEngine']&&this['useDigitGrouping']()&&(_0x2bbc56=VisuMZ['GroupDigits'](_0x2bbc56)),_0x2bbc56;},Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x1c6)]=function(){const _0x4579b9=_0x5c102f;this['_costSettings'][_0x4579b9(0x331)][_0x4579b9(0x2ed)](this);},Sprite_Gauge[_0x5c102f(0x317)][_0x5c102f(0x18f)]=function(_0x43d5f1,_0x47989b,_0xc9373c,_0x3cfa9c,_0x97d1d5,_0x17421b){const _0x35dfff=_0x5c102f,_0x40bbd6=this[_0x35dfff(0x1c2)](),_0xee863=Math[_0x35dfff(0x303)]((_0x97d1d5-0x2)*_0x40bbd6),_0x224bbb=_0x17421b-0x2,_0x446b06=this[_0x35dfff(0x197)]();this[_0x35dfff(0x23a)][_0x35dfff(0x275)](_0xc9373c,_0x3cfa9c,_0x97d1d5,_0x17421b,_0x446b06),this[_0x35dfff(0x23a)][_0x35dfff(0x291)](_0xc9373c+0x1,_0x3cfa9c+0x1,_0xee863,_0x224bbb,_0x43d5f1,_0x47989b);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1ab)]=Sprite_StateIcon['prototype'][_0x5c102f(0x1c4)],Sprite_StateIcon['prototype']['loadBitmap']=function(){const _0x352565=_0x5c102f;VisuMZ['SkillsStatesCore']['Sprite_StateIcon_loadBitmap']['call'](this),this[_0x352565(0x39d)]();},Sprite_StateIcon[_0x5c102f(0x317)]['createTurnDisplaySprite']=function(){const _0x105c00=_0x5c102f,_0x11e996=Window_Base[_0x105c00(0x317)][_0x105c00(0x247)]();this[_0x105c00(0x241)]=new Sprite(),this['_turnDisplaySprite'][_0x105c00(0x23a)]=new Bitmap(ImageManager[_0x105c00(0x2d8)],_0x11e996),this[_0x105c00(0x241)][_0x105c00(0x376)]['x']=this['anchor']['x'],this['_turnDisplaySprite'][_0x105c00(0x376)]['y']=this['anchor']['y'],this[_0x105c00(0x1f9)](this[_0x105c00(0x241)]),this[_0x105c00(0x1f5)]=this[_0x105c00(0x241)][_0x105c00(0x23a)];},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x323)]=Sprite_StateIcon[_0x5c102f(0x317)][_0x5c102f(0x1e2)],Sprite_StateIcon['prototype'][_0x5c102f(0x1e2)]=function(){const _0x546b7e=_0x5c102f;VisuMZ[_0x546b7e(0x3a5)][_0x546b7e(0x323)][_0x546b7e(0x2ed)](this),this[_0x546b7e(0x357)]();},Sprite_StateIcon[_0x5c102f(0x317)]['drawText']=function(_0x391b8d,_0x159d81,_0x7345c7,_0x5f515d,_0x211ac4){const _0x25da08=_0x5c102f;this[_0x25da08(0x1f5)][_0x25da08(0x18e)](_0x391b8d,_0x159d81,_0x7345c7,_0x5f515d,this[_0x25da08(0x1f5)][_0x25da08(0x3a9)],_0x211ac4);},Sprite_StateIcon[_0x5c102f(0x317)]['updateTurnDisplaySprite']=function(){const _0x380430=_0x5c102f;this[_0x380430(0x293)](),this[_0x380430(0x1f5)][_0x380430(0x3c5)]();const _0x3fd5bc=this[_0x380430(0x2e4)];if(!_0x3fd5bc)return;const _0x377e45=_0x3fd5bc[_0x380430(0x1b6)]()['filter'](_0x1f3a06=>_0x1f3a06['iconIndex']>0x0),_0x4c2710=[...Array(0x8)[_0x380430(0x24e)]()][_0x380430(0x2ad)](_0xf5d9d3=>_0x3fd5bc['buff'](_0xf5d9d3)!==0x0),_0x15c3c1=this[_0x380430(0x2b3)],_0x257090=_0x377e45[_0x15c3c1];if(_0x257090)Window_Base['prototype'][_0x380430(0x350)]['call'](this,_0x3fd5bc,_0x257090,0x0,0x0),Window_Base[_0x380430(0x317)][_0x380430(0x3aa)][_0x380430(0x2ed)](this,_0x3fd5bc,_0x257090,0x0,0x0);else{const _0x13dfab=_0x4c2710[_0x15c3c1-_0x377e45[_0x380430(0x3cb)]];if(_0x13dfab===undefined)return;Window_Base[_0x380430(0x317)][_0x380430(0x258)][_0x380430(0x2ed)](this,_0x3fd5bc,_0x13dfab,0x0,0x0),Window_Base[_0x380430(0x317)][_0x380430(0x37b)][_0x380430(0x2ed)](this,_0x3fd5bc,_0x13dfab,0x0,0x0);}},Sprite_StateIcon['prototype']['resetFontSettings']=function(){const _0x1ad03d=_0x5c102f;this[_0x1ad03d(0x1f5)][_0x1ad03d(0x214)]=$gameSystem['mainFontFace'](),this['contents'][_0x1ad03d(0x3a1)]=$gameSystem[_0x1ad03d(0x1f3)](),this['resetTextColor']();},Sprite_StateIcon[_0x5c102f(0x317)]['resetTextColor']=function(){const _0x3001b3=_0x5c102f;this['changeTextColor'](ColorManager[_0x3001b3(0x219)]()),this['changeOutlineColor'](ColorManager[_0x3001b3(0x1f1)]());},Sprite_StateIcon[_0x5c102f(0x317)][_0x5c102f(0x2c0)]=function(_0x2b13c7){const _0xd9197e=_0x5c102f;this[_0xd9197e(0x1f5)]['textColor']=_0x2b13c7;},Sprite_StateIcon['prototype']['changeOutlineColor']=function(_0x2994ce){const _0x4ac617=_0x5c102f;this[_0x4ac617(0x1f5)][_0x4ac617(0x1f1)]=_0x2994ce;},Sprite_StateIcon[_0x5c102f(0x317)][_0x5c102f(0x187)]=function(){const _0x521686=_0x5c102f;this['_hidden']=!![],this[_0x521686(0x1ae)]();},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x2c8)]=function(_0x1ab6fb,_0x183c25,_0x4eb8bf,_0x437d22,_0x16c082){const _0x2b2d51=_0x5c102f,_0x281df2=this[_0x2b2d51(0x25d)](_0x1ab6fb,_0x183c25),_0x5c507=this['textSizeEx'](_0x281df2,_0x4eb8bf,_0x437d22,_0x16c082),_0x2f5de7=_0x4eb8bf+_0x16c082-_0x5c507['width'];this[_0x2b2d51(0x3b0)](_0x281df2,_0x2f5de7,_0x437d22,_0x16c082),this[_0x2b2d51(0x293)]();},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x25d)]=function(_0x1fa541,_0x48f660){const _0x4b2096=_0x5c102f;let _0x2b6290='';for(settings of VisuMZ[_0x4b2096(0x3a5)]['Settings'][_0x4b2096(0x1af)]){if(!this['isSkillCostShown'](_0x1fa541,_0x48f660,settings))continue;if(_0x2b6290['length']>0x0)_0x2b6290+=this[_0x4b2096(0x1b4)]();_0x2b6290+=this['createSkillCostText'](_0x1fa541,_0x48f660,settings);}_0x2b6290=this[_0x4b2096(0x3d4)](_0x1fa541,_0x48f660,_0x2b6290);if(_0x48f660['note']['match'](/<CUSTOM COST TEXT>\s*([\s\S]*)\s*<\/CUSTOM COST TEXT>/i)){if(_0x2b6290[_0x4b2096(0x3cb)]>0x0)_0x2b6290+=this[_0x4b2096(0x1b4)]();_0x2b6290+=String(RegExp['$1']);}return _0x2b6290;},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x3d4)]=function(_0xfeea0c,_0x3bc009,_0xb98288){return _0xb98288;},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x1b1)]=function(_0x2035fc,_0x495e77,_0x1556c3){const _0x19ad42=_0x5c102f,_0x2626ae=_0x1556c3['CalcJS'][_0x19ad42(0x2ed)](_0x2035fc,_0x495e77);return _0x1556c3[_0x19ad42(0x3b9)][_0x19ad42(0x2ed)](_0x2035fc,_0x495e77,_0x2626ae,_0x1556c3);},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x2ef)]=function(_0x2e8d9d,_0x1ad305,_0x20646e){const _0x492a1f=_0x5c102f,_0xf6e29f=_0x20646e['CalcJS'][_0x492a1f(0x2ed)](_0x2e8d9d,_0x1ad305);return _0x20646e['TextJS'][_0x492a1f(0x2ed)](_0x2e8d9d,_0x1ad305,_0xf6e29f,_0x20646e);},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x1b4)]=function(){return'\x20';},Window_Base[_0x5c102f(0x317)]['drawActorIcons']=function(_0x23fd30,_0x535df0,_0x3eb72d,_0x35a65c){const _0x11131c=_0x5c102f;if(!_0x23fd30)return;VisuMZ[_0x11131c(0x3a5)]['Window_StatusBase_drawActorIcons']['call'](this,_0x23fd30,_0x535df0,_0x3eb72d,_0x35a65c),this[_0x11131c(0x27f)](_0x23fd30,_0x535df0,_0x3eb72d,_0x35a65c);},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x27f)]=function(_0x4680dc,_0x5067e6,_0x2c5d96,_0x16c8d7){const _0x31674a=_0x5c102f;_0x16c8d7=_0x16c8d7||0x90;const _0x5ba872=ImageManager[_0x31674a(0x2d8)],_0x146b09=_0x4680dc[_0x31674a(0x396)]()['slice'](0x0,Math[_0x31674a(0x303)](_0x16c8d7/_0x5ba872)),_0x268d05=_0x4680dc['states']()[_0x31674a(0x2ad)](_0x2ef55c=>_0x2ef55c[_0x31674a(0x30d)]>0x0),_0x288f11=[...Array(0x8)['keys']()][_0x31674a(0x2ad)](_0x3f2abf=>_0x4680dc[_0x31674a(0x1f4)](_0x3f2abf)!==0x0),_0x4e6c06=[];let _0x5395f1=_0x5067e6;for(let _0x16e26b=0x0;_0x16e26b<_0x146b09[_0x31674a(0x3cb)];_0x16e26b++){this['resetFontSettings']();const _0x4272f9=_0x268d05[_0x16e26b];if(_0x4272f9)!_0x4e6c06['includes'](_0x4272f9)&&this[_0x31674a(0x350)](_0x4680dc,_0x4272f9,_0x5395f1,_0x2c5d96),this['drawActorStateData'](_0x4680dc,_0x4272f9,_0x5395f1,_0x2c5d96),_0x4e6c06['push'](_0x4272f9);else{const _0x337b8b=_0x288f11[_0x16e26b-_0x268d05[_0x31674a(0x3cb)]];this[_0x31674a(0x258)](_0x4680dc,_0x337b8b,_0x5395f1,_0x2c5d96),this['drawActorBuffRates'](_0x4680dc,_0x337b8b,_0x5395f1,_0x2c5d96);}_0x5395f1+=_0x5ba872;}},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x350)]=function(_0x40a7b4,_0xf18892,_0x62711f,_0x2c1f27){const _0x3c5353=_0x5c102f;if(!VisuMZ[_0x3c5353(0x3a5)]['Settings'][_0x3c5353(0x2e2)][_0x3c5353(0x292)])return;if(!_0x40a7b4[_0x3c5353(0x210)](_0xf18892['id']))return;if(_0xf18892[_0x3c5353(0x1a0)]===0x0)return;if(_0xf18892[_0x3c5353(0x2ac)][_0x3c5353(0x29e)](/<HIDE STATE TURNS>/i))return;const _0x1a8f3c=_0x40a7b4[_0x3c5353(0x3b2)](_0xf18892['id']),_0x36809d=ImageManager['iconWidth'],_0x4e5183=ColorManager[_0x3c5353(0x248)](_0xf18892);this[_0x3c5353(0x2c0)](_0x4e5183),this['changeOutlineColor']('rgba(0,\x200,\x200,\x201)'),this[_0x3c5353(0x1f5)]['fontBold']=!![],this[_0x3c5353(0x1f5)][_0x3c5353(0x3a1)]=VisuMZ[_0x3c5353(0x3a5)]['Settings'][_0x3c5353(0x2e2)][_0x3c5353(0x230)],_0x62711f+=VisuMZ[_0x3c5353(0x3a5)][_0x3c5353(0x308)]['States']['TurnOffsetX'],_0x2c1f27+=VisuMZ['SkillsStatesCore']['Settings'][_0x3c5353(0x2e2)]['TurnOffsetY'],this[_0x3c5353(0x18e)](_0x1a8f3c,_0x62711f,_0x2c1f27,_0x36809d,'right'),this['contents'][_0x3c5353(0x19c)]=![],this[_0x3c5353(0x293)]();},Window_Base['prototype'][_0x5c102f(0x3aa)]=function(_0x2c4968,_0x525d93,_0x312e4a,_0xab63ee){const _0x3d1c67=_0x5c102f;if(!VisuMZ[_0x3d1c67(0x3a5)][_0x3d1c67(0x308)]['States'][_0x3d1c67(0x29a)])return;const _0x369f82=ImageManager[_0x3d1c67(0x2d8)],_0xcf330d=ImageManager[_0x3d1c67(0x239)]/0x2,_0x5d7ef1=ColorManager[_0x3d1c67(0x219)]();this[_0x3d1c67(0x2c0)](_0x5d7ef1),this[_0x3d1c67(0x3b5)](_0x3d1c67(0x2e5)),this[_0x3d1c67(0x1f5)][_0x3d1c67(0x19c)]=!![],this[_0x3d1c67(0x1f5)][_0x3d1c67(0x3a1)]=VisuMZ[_0x3d1c67(0x3a5)][_0x3d1c67(0x308)][_0x3d1c67(0x2e2)][_0x3d1c67(0x193)],_0x312e4a+=VisuMZ[_0x3d1c67(0x3a5)][_0x3d1c67(0x308)][_0x3d1c67(0x2e2)][_0x3d1c67(0x217)],_0xab63ee+=VisuMZ[_0x3d1c67(0x3a5)][_0x3d1c67(0x308)][_0x3d1c67(0x2e2)][_0x3d1c67(0x341)];const _0x2c4fbc=String(_0x2c4968[_0x3d1c67(0x364)](_0x525d93['id']));this[_0x3d1c67(0x18e)](_0x2c4fbc,_0x312e4a,_0xab63ee,_0x369f82,'center'),this['contents'][_0x3d1c67(0x19c)]=![],this[_0x3d1c67(0x293)]();},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x258)]=function(_0x3fbb17,_0x1f1772,_0x2f1dc6,_0x271cac){const _0xa309=_0x5c102f;if(!VisuMZ['SkillsStatesCore'][_0xa309(0x308)][_0xa309(0x1c1)][_0xa309(0x292)])return;const _0x1b04f5=_0x3fbb17[_0xa309(0x1f4)](_0x1f1772);if(_0x1b04f5===0x0)return;const _0x29616b=_0x3fbb17[_0xa309(0x2d6)](_0x1f1772),_0x21c87d=ImageManager[_0xa309(0x2d8)],_0x573ed0=_0x1b04f5>0x0?ColorManager[_0xa309(0x1ea)]():ColorManager[_0xa309(0x1d2)]();this[_0xa309(0x2c0)](_0x573ed0),this['changeOutlineColor'](_0xa309(0x2e5)),this[_0xa309(0x1f5)][_0xa309(0x19c)]=!![],this[_0xa309(0x1f5)][_0xa309(0x3a1)]=VisuMZ[_0xa309(0x3a5)][_0xa309(0x308)]['Buffs']['TurnFontSize'],_0x2f1dc6+=VisuMZ[_0xa309(0x3a5)][_0xa309(0x308)][_0xa309(0x1c1)][_0xa309(0x29c)],_0x271cac+=VisuMZ[_0xa309(0x3a5)][_0xa309(0x308)]['Buffs'][_0xa309(0x218)],this['drawText'](_0x29616b,_0x2f1dc6,_0x271cac,_0x21c87d,'right'),this[_0xa309(0x1f5)]['fontBold']=![],this[_0xa309(0x293)]();},Window_Base[_0x5c102f(0x317)][_0x5c102f(0x37b)]=function(_0x5f1b89,_0x4210ab,_0x4e32ca,_0x50d7b9){const _0xf075f9=_0x5c102f;if(!VisuMZ[_0xf075f9(0x3a5)]['Settings'][_0xf075f9(0x1c1)][_0xf075f9(0x29a)])return;const _0x319592=_0x5f1b89[_0xf075f9(0x216)](_0x4210ab),_0x23d1b2=_0x5f1b89[_0xf075f9(0x1f4)](_0x4210ab),_0x2f5e07=ImageManager['iconWidth'],_0x50a453=ImageManager[_0xf075f9(0x239)]/0x2,_0x1b22c1=_0x23d1b2>0x0?ColorManager[_0xf075f9(0x1ea)]():ColorManager[_0xf075f9(0x1d2)]();this['changeTextColor'](_0x1b22c1),this[_0xf075f9(0x3b5)]('rgba(0,\x200,\x200,\x201)'),this[_0xf075f9(0x1f5)][_0xf075f9(0x19c)]=!![],this['contents'][_0xf075f9(0x3a1)]=VisuMZ[_0xf075f9(0x3a5)][_0xf075f9(0x308)][_0xf075f9(0x1c1)]['DataFontSize'],_0x4e32ca+=VisuMZ[_0xf075f9(0x3a5)][_0xf075f9(0x308)][_0xf075f9(0x1c1)]['DataOffsetX'],_0x50d7b9+=VisuMZ[_0xf075f9(0x3a5)]['Settings']['Buffs']['DataOffsetY'];const _0x5b4473=_0xf075f9(0x304)['format'](Math[_0xf075f9(0x2eb)](_0x319592*0x64));this[_0xf075f9(0x18e)](_0x5b4473,_0x4e32ca,_0x50d7b9,_0x2f5e07,_0xf075f9(0x389)),this[_0xf075f9(0x1f5)][_0xf075f9(0x19c)]=![],this[_0xf075f9(0x293)]();},VisuMZ['SkillsStatesCore']['Window_StatusBase_placeGauge']=Window_StatusBase[_0x5c102f(0x317)][_0x5c102f(0x21d)],Window_StatusBase['prototype']['placeGauge']=function(_0x888a68,_0x4aaa45,_0x33b9d2,_0x268e29){const _0x110691=_0x5c102f;if(_0x888a68[_0x110691(0x250)]())_0x4aaa45=this[_0x110691(0x3b3)](_0x888a68,_0x4aaa45);this[_0x110691(0x266)](_0x888a68,_0x4aaa45,_0x33b9d2,_0x268e29);},Window_StatusBase[_0x5c102f(0x317)][_0x5c102f(0x266)]=function(_0x14dbde,_0x55eb02,_0x3cbfd7,_0x3e8623){const _0xad7504=_0x5c102f;if(['none','untitled'][_0xad7504(0x1f7)](_0x55eb02['toLowerCase']()))return;VisuMZ['SkillsStatesCore']['Window_StatusBase_placeGauge'][_0xad7504(0x2ed)](this,_0x14dbde,_0x55eb02,_0x3cbfd7,_0x3e8623);},Window_StatusBase[_0x5c102f(0x317)]['convertGaugeTypeSkillsStatesCore']=function(_0x3a92de,_0x2f2001){const _0x1e092b=_0x5c102f,_0x2f0e22=_0x3a92de[_0x1e092b(0x2bf)]()[_0x1e092b(0x2ac)];if(_0x2f2001==='hp'&&_0x2f0e22['match'](/<REPLACE HP GAUGE:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0x2f2001==='mp'&&_0x2f0e22[_0x1e092b(0x29e)](/<REPLACE MP GAUGE:[ ](.*)>/i))return String(RegExp['$1']);else return _0x2f2001==='tp'&&_0x2f0e22[_0x1e092b(0x29e)](/<REPLACE TP GAUGE:[ ](.*)>/i)?String(RegExp['$1']):_0x2f2001;}},VisuMZ['SkillsStatesCore'][_0x5c102f(0x265)]=Window_StatusBase[_0x5c102f(0x317)][_0x5c102f(0x298)],Window_StatusBase[_0x5c102f(0x317)]['drawActorIcons']=function(_0xc33d2a,_0x188a05,_0x102750,_0x42a867){const _0x7f77bf=_0x5c102f;if(!_0xc33d2a)return;Window_Base['prototype']['drawActorIcons'][_0x7f77bf(0x2ed)](this,_0xc33d2a,_0x188a05,_0x102750,_0x42a867);},VisuMZ[_0x5c102f(0x3a5)]['Window_SkillType_initialize']=Window_SkillType[_0x5c102f(0x317)]['initialize'],Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x309)]=function(_0x2d7f42){const _0x2f9831=_0x5c102f;VisuMZ[_0x2f9831(0x3a5)][_0x2f9831(0x1d3)][_0x2f9831(0x2ed)](this,_0x2d7f42),this['createCommandNameWindow'](_0x2d7f42);},Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x192)]=function(_0x3602f0){const _0x1610ec=_0x5c102f,_0x587e53=new Rectangle(0x0,0x0,_0x3602f0[_0x1610ec(0x215)],_0x3602f0[_0x1610ec(0x3a9)]);this[_0x1610ec(0x220)]=new Window_Base(_0x587e53),this[_0x1610ec(0x220)][_0x1610ec(0x3c9)]=0x0,this[_0x1610ec(0x1f9)](this[_0x1610ec(0x220)]),this[_0x1610ec(0x186)]();},Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x366)]=function(){const _0x1cfc0f=_0x5c102f;Window_Command[_0x1cfc0f(0x317)][_0x1cfc0f(0x366)][_0x1cfc0f(0x2ed)](this);if(this['_commandNameWindow'])this['updateCommandNameWindow']();},Window_SkillType['prototype'][_0x5c102f(0x186)]=function(){const _0x3084c9=_0x5c102f,_0x1c4bb7=this['_commandNameWindow'];_0x1c4bb7[_0x3084c9(0x1f5)][_0x3084c9(0x3c5)]();const _0x5b0eb2=this[_0x3084c9(0x260)](this[_0x3084c9(0x388)]());if(_0x5b0eb2===_0x3084c9(0x390)&&this[_0x3084c9(0x38e)]()>0x0){const _0x560c58=this[_0x3084c9(0x270)](this[_0x3084c9(0x388)]());let _0x151689=this['commandName'](this[_0x3084c9(0x388)]());_0x151689=_0x151689[_0x3084c9(0x3b4)](/\\I\[(\d+)\]/gi,''),_0x1c4bb7[_0x3084c9(0x293)](),this[_0x3084c9(0x2c2)](_0x151689,_0x560c58),this[_0x3084c9(0x1d1)](_0x151689,_0x560c58),this[_0x3084c9(0x20e)](_0x151689,_0x560c58);}},Window_SkillType[_0x5c102f(0x317)]['commandNameWindowDrawBackground']=function(_0x5d7a4a,_0x498e98){},Window_SkillType[_0x5c102f(0x317)]['commandNameWindowDrawText']=function(_0x826d07,_0x161e2b){const _0x29e630=_0x5c102f,_0x16cd6c=this[_0x29e630(0x220)];_0x16cd6c[_0x29e630(0x18e)](_0x826d07,0x0,_0x161e2b['y'],_0x16cd6c[_0x29e630(0x27d)],'center');},Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x20e)]=function(_0x4a3572,_0xf3b848){const _0x4e0012=_0x5c102f,_0x1ee105=this[_0x4e0012(0x220)],_0x6fff5=$gameSystem[_0x4e0012(0x36d)](),_0x3e802c=_0xf3b848['x']+Math[_0x4e0012(0x303)](_0xf3b848[_0x4e0012(0x215)]/0x2)+_0x6fff5;_0x1ee105['x']=_0x1ee105[_0x4e0012(0x215)]/-0x2+_0x3e802c,_0x1ee105['y']=Math[_0x4e0012(0x303)](_0xf3b848[_0x4e0012(0x3a9)]/0x2);},Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x3c6)]=function(){const _0x42eef5=_0x5c102f;return Imported[_0x42eef5(0x1f6)]&&Window_Command[_0x42eef5(0x317)]['isUseModernControls'][_0x42eef5(0x2ed)](this);},Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x25f)]=function(){const _0x2fe05c=_0x5c102f;if(!this[_0x2fe05c(0x39c)])return;const _0x2cb700=this['_actor']['skillTypes']();for(const _0x30719c of _0x2cb700){const _0x1c2105=this[_0x2fe05c(0x1dd)](_0x30719c);this['addCommand'](_0x1c2105,_0x2fe05c(0x1ef),!![],_0x30719c);}},Window_SkillType['prototype'][_0x5c102f(0x1dd)]=function(_0x57d033){const _0x49883f=_0x5c102f;let _0x32332e=$dataSystem[_0x49883f(0x2a5)][_0x57d033];if(_0x32332e[_0x49883f(0x29e)](/\\I\[(\d+)\]/i))return _0x32332e;if(this['commandStyle']()===_0x49883f(0x2f8))return _0x32332e;const _0x32a368=VisuMZ[_0x49883f(0x3a5)][_0x49883f(0x308)]['Skills'],_0xf35a3b=$dataSystem[_0x49883f(0x1d8)][_0x49883f(0x1f7)](_0x57d033),_0x156b13=_0xf35a3b?_0x32a368['IconStypeMagic']:_0x32a368[_0x49883f(0x22a)];return _0x49883f(0x34f)['format'](_0x156b13,_0x32332e);},Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x33a)]=function(){const _0x52466e=_0x5c102f;return VisuMZ[_0x52466e(0x3a5)][_0x52466e(0x308)]['Skills']['CmdTextAlign'];},Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x1ac)]=function(_0x6df504){const _0x3c19e1=_0x5c102f,_0x209a05=this[_0x3c19e1(0x260)](_0x6df504);if(_0x209a05===_0x3c19e1(0x1fa))this[_0x3c19e1(0x1b9)](_0x6df504);else _0x209a05===_0x3c19e1(0x390)?this[_0x3c19e1(0x20c)](_0x6df504):Window_Command['prototype'][_0x3c19e1(0x1ac)][_0x3c19e1(0x2ed)](this,_0x6df504);},Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x198)]=function(){return VisuMZ['SkillsStatesCore']['Settings']['Skills']['CmdStyle'];},Window_SkillType['prototype'][_0x5c102f(0x260)]=function(_0x1382bc){const _0x453776=_0x5c102f;if(_0x1382bc<0x0)return'text';const _0x40c6c1=this[_0x453776(0x198)]();if(_0x40c6c1!=='auto')return _0x40c6c1;else{if(this[_0x453776(0x38e)]()>0x0){const _0x4f02ef=this[_0x453776(0x2a1)](_0x1382bc);if(_0x4f02ef[_0x453776(0x29e)](/\\I\[(\d+)\]/i)){const _0x2aa305=this[_0x453776(0x270)](_0x1382bc),_0x69717f=this[_0x453776(0x295)](_0x4f02ef)[_0x453776(0x215)];return _0x69717f<=_0x2aa305[_0x453776(0x215)]?'iconText':_0x453776(0x390);}}}return _0x453776(0x2f8);},Window_SkillType[_0x5c102f(0x317)][_0x5c102f(0x1b9)]=function(_0x70fce2){const _0x253b6d=_0x5c102f,_0x177579=this[_0x253b6d(0x270)](_0x70fce2),_0x2ab6a3=this[_0x253b6d(0x2a1)](_0x70fce2),_0x399f8a=this[_0x253b6d(0x295)](_0x2ab6a3)[_0x253b6d(0x215)];this[_0x253b6d(0x2ca)](this[_0x253b6d(0x33b)](_0x70fce2));const _0x2f84ed=this[_0x253b6d(0x33a)]();if(_0x2f84ed===_0x253b6d(0x280))this[_0x253b6d(0x3b0)](_0x2ab6a3,_0x177579['x']+_0x177579[_0x253b6d(0x215)]-_0x399f8a,_0x177579['y'],_0x399f8a);else{if(_0x2f84ed==='center'){const _0x2502db=_0x177579['x']+Math[_0x253b6d(0x303)]((_0x177579['width']-_0x399f8a)/0x2);this['drawTextEx'](_0x2ab6a3,_0x2502db,_0x177579['y'],_0x399f8a);}else this[_0x253b6d(0x3b0)](_0x2ab6a3,_0x177579['x'],_0x177579['y'],_0x399f8a);}},Window_SkillType['prototype'][_0x5c102f(0x20c)]=function(_0x49d905){const _0x50f528=_0x5c102f;this[_0x50f528(0x2a1)](_0x49d905)[_0x50f528(0x29e)](/\\I\[(\d+)\]/i);const _0x1caab1=Number(RegExp['$1'])||0x0,_0x255989=this[_0x50f528(0x270)](_0x49d905),_0x3a9ed1=_0x255989['x']+Math[_0x50f528(0x303)]((_0x255989['width']-ImageManager['iconWidth'])/0x2),_0x282dbd=_0x255989['y']+(_0x255989[_0x50f528(0x3a9)]-ImageManager[_0x50f528(0x239)])/0x2;this[_0x50f528(0x238)](_0x1caab1,_0x3a9ed1,_0x282dbd);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x1cc)]=Window_SkillStatus[_0x5c102f(0x317)][_0x5c102f(0x36a)],Window_SkillStatus[_0x5c102f(0x317)][_0x5c102f(0x36a)]=function(){const _0x2c35e1=_0x5c102f;VisuMZ['SkillsStatesCore']['Window_SkillStatus_refresh'][_0x2c35e1(0x2ed)](this);if(this[_0x2c35e1(0x39c)])this['drawExtendedSkillsStatesCoreStatus']();},Window_SkillStatus[_0x5c102f(0x317)][_0x5c102f(0x200)]=function(){const _0x3d6c5b=_0x5c102f;if(!Imported['VisuMZ_0_CoreEngine'])return;if(!Imported[_0x3d6c5b(0x37e)])return;const _0x471dc8=this[_0x3d6c5b(0x3a8)]();let _0x5c08b0=this[_0x3d6c5b(0x2ea)]()/0x2+0xb4+0xb4+0xb4,_0x2242dd=this['innerWidth']-_0x5c08b0-0x2;if(_0x2242dd>=0x12c){const _0x2b87f4=VisuMZ['CoreEngine'][_0x3d6c5b(0x308)][_0x3d6c5b(0x2c5)][_0x3d6c5b(0x2e9)],_0x3b9401=Math['floor'](_0x2242dd/0x2)-0x18;let _0x1797b8=_0x5c08b0,_0xd9f167=Math['floor']((this['innerHeight']-Math['ceil'](_0x2b87f4['length']/0x2)*_0x471dc8)/0x2),_0x5c4335=0x0;for(const _0x97e5d7 of _0x2b87f4){this['drawExtendedParameter'](_0x1797b8,_0xd9f167,_0x3b9401,_0x97e5d7),_0x5c4335++,_0x5c4335%0x2===0x0?(_0x1797b8=_0x5c08b0,_0xd9f167+=_0x471dc8):_0x1797b8+=_0x3b9401+0x18;}}this[_0x3d6c5b(0x293)]();},Window_SkillStatus[_0x5c102f(0x317)][_0x5c102f(0x201)]=function(_0x49d93f,_0x1e5834,_0x4d90d6,_0x5cd0ab){const _0x3bdfdb=_0x5c102f,_0x2d23b5=this[_0x3bdfdb(0x3a8)]();this[_0x3bdfdb(0x293)](),this['drawParamText'](_0x49d93f,_0x1e5834,_0x4d90d6,_0x5cd0ab,!![]),this[_0x3bdfdb(0x18d)](),this[_0x3bdfdb(0x1f5)][_0x3bdfdb(0x3a1)]-=0x8;const _0x50f871=this[_0x3bdfdb(0x39c)][_0x3bdfdb(0x307)](_0x5cd0ab,!![]);this[_0x3bdfdb(0x1f5)]['drawText'](_0x50f871,_0x49d93f,_0x1e5834,_0x4d90d6,_0x2d23b5,'right');},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x252)]=Window_SkillList[_0x5c102f(0x317)]['includes'],Window_SkillList[_0x5c102f(0x317)][_0x5c102f(0x1f7)]=function(_0x4e95af){const _0xda01f1=_0x5c102f;return this[_0xda01f1(0x3c4)](_0x4e95af);},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2f9)]=Window_SkillList['prototype']['maxCols'],Window_SkillList[_0x5c102f(0x317)][_0x5c102f(0x374)]=function(){const _0x49e86b=_0x5c102f;return SceneManager[_0x49e86b(0x3ce)][_0x49e86b(0x340)]===Scene_Battle?VisuMZ[_0x49e86b(0x3a5)][_0x49e86b(0x2f9)]['call'](this):VisuMZ[_0x49e86b(0x3a5)]['Settings'][_0x49e86b(0x2f6)][_0x49e86b(0x3cf)];},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2e6)]=Window_SkillList[_0x5c102f(0x317)]['setActor'],Window_SkillList['prototype'][_0x5c102f(0x301)]=function(_0xe3dae2){const _0x1de121=_0x5c102f,_0x3d5868=this[_0x1de121(0x39c)]!==_0xe3dae2;VisuMZ[_0x1de121(0x3a5)][_0x1de121(0x2e6)][_0x1de121(0x2ed)](this,_0xe3dae2),_0x3d5868&&(this[_0x1de121(0x245)]&&this['_statusWindow'][_0x1de121(0x340)]===Window_ShopStatus&&this[_0x1de121(0x245)]['setItem'](this[_0x1de121(0x3ba)](0x0)));},Window_SkillList[_0x5c102f(0x317)]['setStypeId']=function(_0x28cebc){const _0x19d0a9=_0x5c102f;if(this[_0x19d0a9(0x35f)]===_0x28cebc)return;this[_0x19d0a9(0x35f)]=_0x28cebc,this[_0x19d0a9(0x36a)](),this[_0x19d0a9(0x26b)](0x0,0x0),this[_0x19d0a9(0x245)]&&this[_0x19d0a9(0x245)][_0x19d0a9(0x340)]===Window_ShopStatus&&this[_0x19d0a9(0x245)][_0x19d0a9(0x244)](this[_0x19d0a9(0x3ba)](0x0));},Window_SkillList[_0x5c102f(0x317)][_0x5c102f(0x3c4)]=function(_0x261d7d){const _0x21e93e=_0x5c102f;if(!_0x261d7d)return VisuMZ[_0x21e93e(0x3a5)][_0x21e93e(0x252)][_0x21e93e(0x2ed)](this,_0x261d7d);if(!this[_0x21e93e(0x313)](_0x261d7d))return![];if(!this[_0x21e93e(0x346)](_0x261d7d))return![];if(!this['checkShowHideJS'](_0x261d7d))return![];return!![];},Window_SkillList['prototype'][_0x5c102f(0x313)]=function(_0x4aa383){const _0x597fea=_0x5c102f;return DataManager['getSkillTypes'](_0x4aa383)['includes'](this[_0x597fea(0x35f)]);},Window_SkillList['prototype'][_0x5c102f(0x346)]=function(_0x34a46b){const _0x1188aa=_0x5c102f;if(!VisuMZ[_0x1188aa(0x3a5)]['CheckVisibleBattleNotetags'](this[_0x1188aa(0x39c)],_0x34a46b))return![];if(!VisuMZ[_0x1188aa(0x3a5)]['CheckVisibleSwitchNotetags'](this[_0x1188aa(0x39c)],_0x34a46b))return![];if(!VisuMZ[_0x1188aa(0x3a5)][_0x1188aa(0x2d7)](this['_actor'],_0x34a46b))return![];return!![];},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x224)]=function(_0x221cd5,_0x1c46bc){const _0x385270=_0x5c102f,_0x6eb906=_0x1c46bc[_0x385270(0x2ac)];if(_0x6eb906[_0x385270(0x29e)](/<HIDE IN BATTLE>/i)&&$gameParty[_0x385270(0x1c9)]())return![];else return _0x6eb906['match'](/<HIDE OUTSIDE BATTLE>/i)&&!$gameParty[_0x385270(0x1c9)]()?![]:!![];},VisuMZ[_0x5c102f(0x3a5)]['CheckVisibleSwitchNotetags']=function(_0x2dd236,_0x4d7b32){const _0x21c836=_0x5c102f,_0x2b0e04=_0x4d7b32['note'];if(_0x2b0e04[_0x21c836(0x29e)](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3cceb0=JSON['parse']('['+RegExp['$1'][_0x21c836(0x29e)](/\d+/g)+']');for(const _0x4c025b of _0x3cceb0){if(!$gameSwitches['value'](_0x4c025b))return![];}return!![];}if(_0x2b0e04[_0x21c836(0x29e)](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1f85e5=JSON[_0x21c836(0x19d)]('['+RegExp['$1'][_0x21c836(0x29e)](/\d+/g)+']');for(const _0x1acc98 of _0x1f85e5){if(!$gameSwitches[_0x21c836(0x344)](_0x1acc98))return![];}return!![];}if(_0x2b0e04[_0x21c836(0x29e)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5128aa=JSON[_0x21c836(0x19d)]('['+RegExp['$1'][_0x21c836(0x29e)](/\d+/g)+']');for(const _0x315982 of _0x5128aa){if($gameSwitches['value'](_0x315982))return!![];}return![];}if(_0x2b0e04[_0x21c836(0x29e)](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x54d4d9=JSON[_0x21c836(0x19d)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x1142ac of _0x54d4d9){if(!$gameSwitches['value'](_0x1142ac))return!![];}return![];}if(_0x2b0e04[_0x21c836(0x29e)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2b8e7a=JSON['parse']('['+RegExp['$1'][_0x21c836(0x29e)](/\d+/g)+']');for(const _0x573532 of _0x2b8e7a){if(!$gameSwitches[_0x21c836(0x344)](_0x573532))return!![];}return![];}if(_0x2b0e04['match'](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1f0440=JSON[_0x21c836(0x19d)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x1dfcae of _0x1f0440){if($gameSwitches[_0x21c836(0x344)](_0x1dfcae))return![];}return!![];}return!![];},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2d7)]=function(_0x2337a8,_0x4878ec){const _0x50c428=_0x5c102f,_0x93b64c=_0x4878ec[_0x50c428(0x2ac)];if(_0x93b64c[_0x50c428(0x29e)](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1f8c4d=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0xc7a8a0 of _0x1f8c4d){if(!_0x2337a8[_0x50c428(0x267)](_0xc7a8a0))return![];}return!![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0xc84d16=RegExp['$1'][_0x50c428(0x28b)](',');for(const _0x1a7c9d of _0xc84d16){const _0x2bc924=DataManager[_0x50c428(0x372)](_0x1a7c9d);if(!_0x2bc924)continue;if(!_0x2337a8[_0x50c428(0x267)](_0x2bc924))return![];}return!![];}}if(_0x93b64c[_0x50c428(0x29e)](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2f8189=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0x265d6a of _0x2f8189){if(!_0x2337a8[_0x50c428(0x267)](_0x265d6a))return![];}return!![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x4decbd=RegExp['$1']['split'](',');for(const _0x2c1f5d of _0x4decbd){const _0x406f6d=DataManager['getSkillIdWithName'](_0x2c1f5d);if(!_0x406f6d)continue;if(!_0x2337a8['isLearnedSkill'](_0x406f6d))return![];}return!![];}}if(_0x93b64c['match'](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1ae340=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0x1e182f of _0x1ae340){if(_0x2337a8[_0x50c428(0x267)](_0x1e182f))return!![];}return![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x5797b8=RegExp['$1'][_0x50c428(0x28b)](',');for(const _0x43502b of _0x5797b8){const _0x493556=DataManager[_0x50c428(0x372)](_0x43502b);if(!_0x493556)continue;if(_0x2337a8[_0x50c428(0x267)](_0x493556))return!![];}return![];}}if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5c1aad=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x53a799 of _0x5c1aad){if(!_0x2337a8['isLearnedSkill'](_0x53a799))return!![];}return![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x37a2b0=RegExp['$1']['split'](',');for(const _0x2fad98 of _0x37a2b0){const _0x3fc10d=DataManager['getSkillIdWithName'](_0x2fad98);if(!_0x3fc10d)continue;if(!_0x2337a8[_0x50c428(0x267)](_0x3fc10d))return!![];}return![];}}if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x58f718=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x1967e9 of _0x58f718){if(!_0x2337a8[_0x50c428(0x267)](_0x1967e9))return!![];}return![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x3298e5=RegExp['$1'][_0x50c428(0x28b)](',');for(const _0x657f2a of _0x3298e5){const _0x10fa20=DataManager[_0x50c428(0x372)](_0x657f2a);if(!_0x10fa20)continue;if(!_0x2337a8[_0x50c428(0x267)](_0x10fa20))return!![];}return![];}}if(_0x93b64c['match'](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x39056e=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0x8d6cf7 of _0x39056e){if(_0x2337a8[_0x50c428(0x267)](_0x8d6cf7))return![];}return!![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x23afba=RegExp['$1']['split'](',');for(const _0x5c08aa of _0x23afba){const _0x2a256c=DataManager['getSkillIdWithName'](_0x5c08aa);if(!_0x2a256c)continue;if(_0x2337a8[_0x50c428(0x267)](_0x2a256c))return![];}return!![];}}if(_0x93b64c[_0x50c428(0x29e)](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4286d5=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0x2f7835 of _0x4286d5){if(!_0x2337a8[_0x50c428(0x300)](_0x2f7835))return![];}return!![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x4d8eab=RegExp['$1']['split'](',');for(const _0x2df439 of _0x4d8eab){const _0x4eceab=DataManager['getSkillIdWithName'](_0x2df439);if(!_0x4eceab)continue;if(!_0x2337a8[_0x50c428(0x300)](_0x4eceab))return![];}return!![];}}if(_0x93b64c['match'](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3c2e08=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0x5605df of _0x3c2e08){if(!_0x2337a8[_0x50c428(0x300)](_0x5605df))return![];}return!![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x121e28=RegExp['$1']['split'](',');for(const _0x3e1aa3 of _0x121e28){const _0x38bcf1=DataManager[_0x50c428(0x372)](_0x3e1aa3);if(!_0x38bcf1)continue;if(!_0x2337a8[_0x50c428(0x300)](_0x38bcf1))return![];}return!![];}}if(_0x93b64c[_0x50c428(0x29e)](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2dd003=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0x2acb93 of _0x2dd003){if(_0x2337a8[_0x50c428(0x300)](_0x2acb93))return!![];}return![];}else{if(_0x93b64c['match'](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x3b491e=RegExp['$1'][_0x50c428(0x28b)](',');for(const _0x15c63b of _0x3b491e){const _0x518be6=DataManager['getSkillIdWithName'](_0x15c63b);if(!_0x518be6)continue;if(_0x2337a8[_0x50c428(0x300)](_0x518be6))return!![];}return![];}}if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x25ff46=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0x5e123b of _0x25ff46){if(!_0x2337a8[_0x50c428(0x300)](_0x5e123b))return!![];}return![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x23514b=RegExp['$1'][_0x50c428(0x28b)](',');for(const _0x1bf49c of _0x23514b){const _0x237a2c=DataManager[_0x50c428(0x372)](_0x1bf49c);if(!_0x237a2c)continue;if(!_0x2337a8[_0x50c428(0x300)](_0x237a2c))return!![];}return![];}}if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xc324bf=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0x4dc551 of _0xc324bf){if(!_0x2337a8[_0x50c428(0x300)](_0x4dc551))return!![];}return![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x18e59b=RegExp['$1']['split'](',');for(const _0x10659b of _0x18e59b){const _0x3a174b=DataManager[_0x50c428(0x372)](_0x10659b);if(!_0x3a174b)continue;if(!_0x2337a8['hasSkill'](_0x3a174b))return!![];}return![];}}if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x45ed86=JSON[_0x50c428(0x19d)]('['+RegExp['$1'][_0x50c428(0x29e)](/\d+/g)+']');for(const _0x1ff76f of _0x45ed86){if(_0x2337a8[_0x50c428(0x300)](_0x1ff76f))return![];}return!![];}else{if(_0x93b64c[_0x50c428(0x29e)](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x1b9447=RegExp['$1']['split'](',');for(const _0x4c12d6 of _0x1b9447){const _0x48c96=DataManager[_0x50c428(0x372)](_0x4c12d6);if(!_0x48c96)continue;if(_0x2337a8[_0x50c428(0x300)](_0x48c96))return![];}return!![];}}return!![];},Window_SkillList['prototype'][_0x5c102f(0x1e0)]=function(_0x5a2e1b){const _0x44604e=_0x5c102f,_0x53b189=_0x5a2e1b[_0x44604e(0x2ac)],_0x19fb6b=VisuMZ[_0x44604e(0x3a5)][_0x44604e(0x1c5)];return _0x19fb6b[_0x5a2e1b['id']]?_0x19fb6b[_0x5a2e1b['id']][_0x44604e(0x2ed)](this,_0x5a2e1b):!![];},VisuMZ['SkillsStatesCore']['Window_SkillList_drawItem']=Window_SkillList[_0x5c102f(0x317)][_0x5c102f(0x1ac)],Window_SkillList[_0x5c102f(0x317)]['drawItem']=function(_0x405bcc){const _0x41a357=_0x5c102f,_0x2f1ffc=this[_0x41a357(0x3ba)](_0x405bcc),_0x2ac7f9=_0x2f1ffc[_0x41a357(0x1c3)];if(_0x2f1ffc)this[_0x41a357(0x392)](_0x2f1ffc);VisuMZ['SkillsStatesCore'][_0x41a357(0x1a8)][_0x41a357(0x2ed)](this,_0x405bcc);if(_0x2f1ffc)_0x2f1ffc['name']=_0x2ac7f9;},Window_SkillList[_0x5c102f(0x317)][_0x5c102f(0x392)]=function(_0x3d3cbd){const _0x1509d8=_0x5c102f;if(_0x3d3cbd&&_0x3d3cbd['note'][_0x1509d8(0x29e)](/<LIST NAME:[ ](.*)>/i)){_0x3d3cbd[_0x1509d8(0x1c3)]=String(RegExp['$1'])[_0x1509d8(0x353)]();for(;;){if(_0x3d3cbd['name']['match'](/\\V\[(\d+)\]/gi))_0x3d3cbd[_0x1509d8(0x1c3)]=_0x3d3cbd['name'][_0x1509d8(0x3b4)](/\\V\[(\d+)\]/gi,(_0x59966d,_0xbc128f)=>$gameVariables[_0x1509d8(0x344)](parseInt(_0xbc128f)));else break;}}},Window_SkillList[_0x5c102f(0x317)][_0x5c102f(0x2c8)]=function(_0x25a0b5,_0x3254fc,_0xd07211,_0x219614){const _0x33cce8=_0x5c102f;Window_Base[_0x33cce8(0x317)]['drawSkillCost']['call'](this,this[_0x33cce8(0x39c)],_0x25a0b5,_0x3254fc,_0xd07211,_0x219614);},Window_SkillList[_0x5c102f(0x317)][_0x5c102f(0x337)]=function(_0x4d2aee){const _0x4bbd8e=_0x5c102f;this[_0x4bbd8e(0x245)]=_0x4d2aee,this[_0x4bbd8e(0x366)]();},VisuMZ[_0x5c102f(0x3a5)][_0x5c102f(0x2e8)]=Window_SkillList[_0x5c102f(0x317)][_0x5c102f(0x27a)],Window_SkillList[_0x5c102f(0x317)][_0x5c102f(0x27a)]=function(){const _0xa26c9e=_0x5c102f;VisuMZ[_0xa26c9e(0x3a5)]['Window_SkillList_updateHelp'][_0xa26c9e(0x2ed)](this),this['_statusWindow']&&this[_0xa26c9e(0x245)][_0xa26c9e(0x340)]===Window_ShopStatus&&this[_0xa26c9e(0x245)][_0xa26c9e(0x244)](this[_0xa26c9e(0x25a)]());};function _0x39db(){const _0x18a81f=['Window_SkillList_includes','test','boxWidth','isDebuffAffected','addDebuffTurns','onEraseDebuff','drawActorBuffTurns','Scene_Skill_itemWindowRect','item','stateTpSlipDamageJS','ARRAYSTR','createAllSkillCostText','onAddDebuffGlobalJS','makeCommandList','commandStyleCheck','StackBuffMax','forgetSkill','stateCategoriesResisted','Scene_Skill_skillTypeWindowRect','Window_StatusBase_drawActorIcons','placeExactGauge','isLearnedSkill','frameCount','_skills','success','scrollTo','multiclasses','adjustItemWidthByShopStatus','Scene_Skill_helpWindowRect','removeState','itemLineRect','isUseSkillsStatesCoreUpdatedLayout','onRegenerateCustomStateDamageOverTime','applyDebuffTurnManipulationEffects','Sprite_Gauge_setup','fillRect','Game_Actor_forgetSkill','setStateOrigin','getStateOrigin','setupSkillsStatesCore','updateHelp','convertPassiveStates','process_VisuMZ_SkillsStatesCore_State_Notetags','innerWidth','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','drawActorIconsAllTurnCounters','right','itemWindowRect','PassiveStates','groupDefeat','restriction','removeStatesAuto','Game_Actor_learnSkill','CalcJS','getCurrentStateActiveUser','getCurrentTroopUniqueID','isPartyAllAffectedByGroupDefeatStates','split','stateAddJS','isSkillHidden','Game_Troop_setup','makeResistedStateCategories','_skillIDs','gradientFillRect','ShowTurns','resetFontSettings','eraseBuff','textSizeEx','onEraseStateGlobalJS','onAddStateJS','drawActorIcons','onAddStateMakeCustomSlipValues','ShowData','textColor','TurnOffsetX','addPassiveStatesByNotetag','match','86780GIPcPJ','<actor-%1>','commandName','currentMaxValue','POSITIVE','user','skillTypes','remove','isPassiveStateStackable','regenerateAll','_currentActor','Parse_Notetags_State_SlipEffectJS','MAXHP','note','filter','applySkillsStatesCoreEffects','increaseBuff','clearStateOrigin','meetsPassiveStateConditionJS','Game_Action_testApply','_animationIndex','Game_BattlerBase_skillTpCost','onEraseStateCustomJS','applyStateTurnManipulationEffects','overwriteBuffTurns','ParseStateNotetags','_currentTroopUniqueID','_stateSteps','onExpireState','Game_Battler_isStateAddable','Parse_Notetags_Skill_JS','_stateOrigin','currentClass','changeTextColor','totalStateCategoryAffected','commandNameWindowDrawBackground','_tempActor','onExpireDebuffJS','Param','toLowerCase','_buffs','drawSkillCost','onAddBuffGlobalJS','changePaintOpacity','testSkillStatesCoreNotetags','learnSkill','add','gainMp','\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this.getCurrentStateActiveUser();\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','_costSettings','active','slipHp','setBuffTurns','isSkillTypeMatchForUse','aliveMembers','buffTurns','CheckVisibleSkillNotetags','iconWidth','Game_BattlerBase_buffIconIndex','members','decreaseBuff','stateHpSlipDamageJS','_stateDisplay','stateId','MDF','meetsPassiveStateConditionClasses','exit','States','totalStateCategory','_battler','rgba(0,\x200,\x200,\x201)','Window_SkillList_setActor','onAddBuff','Window_SkillList_updateHelp','DisplayedParams','colSpacing','round','format','call','onExpireStateGlobalJS','createSkillCostText','helpAreaHeight','setStateRetainType','createItemWindow','isBuffAffected','STRUCT','_buffTurns','Skills','_categoryWindow','text','Window_SkillList_maxCols','removeBuff','Game_BattlerBase_meetsSkillConditions','damage','_checkingTraitsSetSkillsStatesCore','updatedLayoutStyle','currentMaxValueSkillsStatesCore','hasSkill','setActor','ARRAYEVAL','floor','%1%','passiveStateObjects','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','paramValueByName','Settings','initialize','getStypeIdWithName','setStateTurns','Game_Actor_skillTypes','iconIndex','onExpireBuffGlobalJS','Parse_Notetags_Skill_Cost','setup','onAddState','ignore','checkSkillTypeMatch','Sprite_Gauge_gaugeRate','_lastStatesActionEndFrameCount','onEraseDebuffGlobalJS','prototype','Game_BattlerBase_die','getStateOriginByKey','parameters','addDebuff','helpAreaTop','2178546Ipkayz','isStateResist','addState','clearStateData','shopStatusWidth','_stateData','Sprite_StateIcon_updateFrame','ColorDebuff','removeStatesByCategoryAll','uiMenuStyle','ARRAYSTRUCT','onExpireBuff','onAddDebuff','addStateTurns','statePassiveConditionJS','setDebuffTurns','eraseState','isAlive','ConvertParams','greater','GaugeDrawJS','Game_Action_applyItemUserEffect','Parse_Notetags_State_Category','meetsPassiveStateConditionSwitches','2629UZEZtr','log','setStatusWindow','redraw','currentDisplayedValue','itemTextAlign','isCommandEnabled','traitsSet','ShowShopStatus','passiveStates','skillTypeWindowRect','constructor','DataOffsetY','buttonAssistSwitch','132hwRvko','value','priority','checkShowHideNotetags','stateTpSlipHealJS','Parse_Notetags_State_PassiveJS','onEraseBuff','_shopStatusWindow','Game_BattlerBase_skillMpCost','canClearState','skillEnableJS','_states','\x5cI[%1]%2','drawActorStateTurns','ATK','initMembers','trim','_stateRetainType','onExpireBuffJS','isStateAddable','updateTurnDisplaySprite','updateStatesActionEnd','SkillMenuStatusRect','resetStateCounts','checkSkillConditionsNotetags','currentValue','shopStatusWindowRect','Global','_stypeId','Game_BattlerBase_recoverAll','mainCommandWidth','isAllDead','currentValueSkillsStatesCore','getStateDisplay','actorId','callUpdateHelp','ReapplyRules','Game_Battler_addBuff','buffIconIndex','refresh','_phase','_result','windowPadding','GaugeCurrentJS','ARRAYJSON','makeCurrentTroopUniqueID','254984txiyvs','getSkillIdWithName','hasState','maxCols','initMembersSkillsStatesCore','anchor','retrieveStateColor','onEraseDebuffJS','EnableLayout','2360096YdJmqE','drawActorBuffRates','shopStatusWindowRectSkillsStatesCore','36CNuXhJ','VisuMZ_1_MainMenuCore','_passiveStateResults','convertTargetToStateOriginKey','addPassiveStates','onAddStateCustomJS','Game_BattlerBase_states','stateExpireJS','ParseClassIDs','_itemWindow','stateHpSlipHealJS','index','center','_skillTypeWindow','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','getStateReapplyRulings','endAction','maxItems','_stypeIDs','icon','debuffTurns','alterSkillName','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','skillMpCost','ColorBuff','allIcons','categories','onEraseBuffJS','onAddStateGlobalJS','Game_BattlerBase_overwriteBuffTurns','stateMpSlipHealJS','_actor','createTurnDisplaySprite','addBuffTurns','canUse','isBuffPrevented','fontSize','meetsStateCondition','checkCacheKey','mainAreaHeight','SkillsStatesCore','Game_BattlerBase_decreaseBuff','STR','gaugeLineHeight','height','drawActorStateData','statesByCategory','%1\x20%2\x20%3','setStateData','onDatabaseLoaded','getColor','drawTextEx','buttonAssistText1','stateTurns','convertGaugeTypeSkillsStatesCore','replace','changeOutlineColor','stateMaximumTurns','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20condition\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20condition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','toUpperCase','ShowJS','itemAt','number','concat','getColorDataFromPluginParameters','uiInputPosition','indexOf','meetsSkillConditions','_cache','skillId','Game_Battler_addDebuff','includesSkillsStatesCore','clear','isUseModernControls','helpWindowRect','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','opacity','_colorCache','length','MaxTurns','Game_BattlerBase_clearStates','_scene','ListWindowCols','meetsSkillConditionsGlobalJS','createPassiveStatesCache','applyItemUserEffect','slipTp','makeAdditionalSkillCostText','updateCommandNameWindow','hide','setPassiveStateSlipDamageJS','getSkillTypes','<troop-%1>','6190wtQYBO','regenerateAllSkillsStatesCore','resetTextColor','drawText','drawFullGauge','#%1','Scene_Boot_onDatabaseLoaded','createCommandNameWindow','DataFontSize','_stored_buffColor','_checkingVisuMzPassiveStateObjects','_stored_debuffColor','gaugeBackColor','commandStyle','_stateMaxTurns','_stateIDs','<member-%1>','fontBold','parse','max','reset','autoRemovalTiming','actor','GaugeMaxJS','isStateCategoryResisted','ActionEndUpdate','<enemy-%1>','Game_BattlerBase_increaseBuff','VisuMZ_1_ElementStatusCore','Window_SkillList_drawItem','CanPayJS','isRightInputMode','Sprite_StateIcon_loadBitmap','drawItem','enemy','updateVisibility','Costs','description','isSkillCostShown','updateStateTurns','onExpireDebuff','skillCostSeparator','Game_BattlerBase_resetStateCounts','states','recoverAll','Sprite_Gauge_currentMaxValue','drawItemStyleIconText','PassiveConditionJS','clearStateDisplay','meetsPassiveStateGlobalConditionJS','Game_BattlerBase_refresh','ColorNegative','stypeId','process_VisuMZ_SkillsStatesCore_Skill_Notetags','Buffs','gaugeRate','name','loadBitmap','skillVisibleJS','redrawSkillsStatesCore','stepsForTurn','LayoutStyle','inBattle','removeStatesByCategory','onExpireDebuffGlobalJS','Window_SkillStatus_refresh','getStateIdWithName','Sprite_Gauge_currentValue','\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20%2\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20%2\x20=\x20Math.round(Math.max(0,\x20%2)\x20*\x20%3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20this.setStateData(stateId,\x20\x27%4\x27,\x20%2);\x0a\x20\x20\x20\x20','DEF','commandNameWindowDrawText','debuffColor','Window_SkillType_initialize','LUK','onExpireStateCustomJS','Scene_Skill_createItemWindow','clearStates','magicSkills','getStateData','Sprite_Gauge_redraw','checkSkillConditionsSwitchNotetags','isBottomHelpMode','makeCommandName','status','_subject','checkShowHideJS','map','updateFrame','heal','isStateCategoryAffected','clearStateRetainType','_stateTurns','6907075qDccKv','Game_Battler_addState','HiddenSkillTypes','buffColor','Scene_Skill_statusWindowRect','clearStatesWithStateRetain','itemWindowRectSkillsStatesCore','push','skill','Parse_Notetags_State_ApplyRemoveLeaveJS','outlineColor','ANY','mainFontSize','buff','contents','VisuMZ_0_CoreEngine','includes','Game_BattlerBase_eraseState','addChild','iconText','AGI','gainHp','enemyId','isMaxDebuffAffected','CheckVisibleSwitchNotetags','drawExtendedSkillsStatesCoreStatus','drawExtendedParameter','_checkingPassiveStates','getStateRetainType','Game_Unit_isAllDead','createShopStatusWindow','slipMp','ALL','StackDebuffMax','recover\x20all','clamp','Game_BattlerBase_eraseBuff','drawItemStyleIcon','skills','commandNameWindowCenter','_tempBattler','isStateAffected','stateData','buffLength','makeSuccess','fontFace','width','paramBuffRate','DataOffsetX','TurnOffsetY','normalColor','uiHelpPosition','JSON','testApply','placeGauge','BattleManager_endAction','skillTpCost','_commandNameWindow','230zOZHEq','198630hQdHmF','MAT','CheckVisibleBattleNotetags','addPassiveStatesFromOtherPlugins','addPassiveStatesTraitSets','maxSlipDamage','shift','statusWidth','IconStypeNorm','isPlaytest','isGroupDefeatStateAffected','isBuffOrDebuffAffected','FUNC','Sprite_Gauge_initMembers','TurnFontSize','stateEraseJS','PayJS','addPassiveStatesByPluginParameters','allowCreateShopStatusWindow','CheckIncompatibleStates','onRemoveState','Game_BattlerBase_initMembers','drawIcon','iconHeight','bitmap','isSkillUsableForAutoBattle','ParseSkillNotetags','setBackgroundType','_classIDs','applyBuffTurnManipulationEffects','BattleHiddenSkillTypes','_turnDisplaySprite','ARRAYFUNC','Actor','setItem','_statusWindow','statusWindowRect','lineHeight','stateColor','mainAreaTop','VisuMZ_1_ItemsEquipsCore','Game_Battler_regenerateAll','menuActor','process_VisuMZ_SkillsStatesCore_Notetags','keys','Game_BattlerBase_isStateResist','isActor','ColorNeutral'];_0x39db=function(){return _0x18a81f;};return _0x39db();}