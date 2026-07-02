---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Ebonbane"
---
# [Ebonbane](Sonstige/z_Content%20and%20Rules/bestiary/npc/ebonbane-rhw.md)
*Source: RHW p. 150*  

*Ebonbane*is an evil, sapient blade that seeks to annihilate the legacy of the Shadowlands' greatest hero and her allies. This includes all with the Shadowborn name and every member of the Circle. Ebonbane is a magic weapon, but within Shadowborn Manor, it becomes a creature that can move on its own. Beyond the manor, it doesn't use its stat block—it requires a wielder to work its evil in the world.

Many who attempt to attune to the weapon are slain outright by its evil. Those who do manage to wield*Ebonbane*must endure the Darklord's constant demands and risk becoming its pawn (see " Sentient Magic Items " in the Dungeon Master's Guide). If unattended outside Shadowborn Manor,*Ebonbane*eventually finds its way back there. No one can carry*Ebonbane*out of the Shadowlands. If someone tries, the sword vanishes and reappears in Shadowborn Manor.*Ebonbane*has a flamboyant personality and a penchant for the dramatic and sadistic. It has no regard for life and delights in animating the corpses of foes, then destroying them in front of their allies. When it speaks, it uses language that mocks the elevated speech of knights.

```statblock
"name": "Ebonbane (RHW)"
"size": "Small"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "130"
"hit_dice": "29d6 + 29"
"modifier": !!int "14"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "13"
  - !!int "17"
  - !!int "14"
  - !!int "19"
"speed": "5 ft., fly 50 ft. (hover)"
"saves":
  - "constitution": !!int "6"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[History](Sonstige/z_Content%20and%20Rules/skills.md#History)"
    "desc": "+8"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "bludgeoning, fire, piercing, psychic, slashing"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [deafened](Sonstige/z_Content%20and%20Rules/conditions.md#Deafened), [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened), [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed),\
  \ [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 120 ft.,\
  \ passive Perception 17"
"languages": "Common; telepathy 10 ft."
"cr": "13"
"traits":
  - "desc": "If Ebonbane dies, it revives with all its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks, teleporting somewhere in Shadowborn Manor. Until it revives,\
      \ Ebonbane acts as a +3 Longsword when wielded by a creature."
    "name": "Darklord Restoration"
  - "desc": "If Ebonbane fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
  - "desc": "Ebonbane has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Ebonbane makes three Darkflame Slash attacks. It can replace one of these\
      \ attacks with a use of Possess [Dead](Sonstige/z_Content%20and%20Rules/variant-rules/dead-xphb.md)\
      \ if available."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +9, reach 5 ft. or range 90 ft. *Hit:*\
      \ 9 (1d10 + 4) Slashing damage plus 10 (3d6) Necrotic damage."
    "name": "Darkflame Slash"
  - "desc": "Ebonbane raises a Medium or Small Humanoid corpse within 5 feet of itself\
      \ and possesses it. The corpse wields Ebonbane and is under its control. Ebonbane\
      \ gains 50 [Temporary Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/temporary-hit-points-xphb.md),\
      \ and its statistics are the same, except its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ increases to 30 feet, and it can speak through the corpse using any language\
      \ the corpse knew in life.\n\nThe possession lasts until Ebonbane drops to 0\
      \ [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ or Ebonbane ends the possession as a [Bonus Action](Sonstige/z_Content%20and%20Rules/variant-rules/bonus-action-xphb.md).\
      \ Once the possession ends, Ebonbane can't possess the corpse again. The corpse\
      \ crumbles to dust 24 hours after the possession ends."
    "name": "Possess Dead (Recharge 5-6)"
  - "desc": "*Charisma Saving Throw:* DC 17, one willing Humanoid within 5 feet. *Failure:*\
      \ 36 (8d8) Force damage. If this damage reduces the target to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ Ebonbane devourers its soul. A creature whose soul has been devoured by Ebonbane\
      \ can be restored to life only by a [Wish](Sonstige/z_Content%20and%20Rules/spells/wish-xphb.md)\
      \ spell. *Success:* The target attunes to Ebonbane and can wield the sword."
    "name": "Worthy Wielder"
"reactions":
  - "desc": "Trigger: Ebonbane is hit by a melee attack roll. _Response:_ Ebonbane\
      \ adds 5 to its AC against that attack, possibly causing it to miss."
    "name": "Parry"
"regional_effects":
  - "desc": "The Shadowlands is altered by *Ebonbane*'s presence, creating the following\
      \ effects:\n\n- **Closing the Borders.** While in its domain, Ebonbane can close\
      \ or open the borders of the Shadowlands at will. While the borders are closed,\
      \ whirling blades of magic fly through the Mists surrounding the Shadowlands.\
      \ A creature that enters the Mists for the first time on a turn or starts its\
      \ turn there must succeed on a DC 15 Dexterity saving throw or take 3d10 Force\
      \ damage. A creature makes this save only once per turn.  \n- **Haunted Woods.**\
      \ The forest within 1 mile of Ebonbane's lair is wreathed in a powerful illusion.\
      \ Whenever a creature other than Ebonbane or the sword's allies finishes a Short\
      \ or Long Rest in that area, it must succeed on a DC 15 Intelligence saving\
      \ throw, or it is lost in the forest, always finding itself at the location\
      \ it started in until it finishes a Short or Long Rest.  \n- **Turning Weapons.**\
      \ While in its lair, Ebonbane can transform nonmagical [Greatswords](Sonstige/z_Content%20and%20Rules/items/greatsword-xphb.md)\
      \ and [Longswords](Sonstige/z_Content%20and%20Rules/items/longsword-xphb.md)\
      \ within 1 mile of the lair into [Animated Flying Swords](Sonstige/z_Content%20and%20Rules/bestiary/construct/animated-flying-sword-xmm.md)\
      \ by completing a 24-hour ritual.  \n\nIf *Ebonbane* is destroyed, these effects\
      \ end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Ebonbane can expend a use to take one of the following actions. Ebonbane\
  \ regains all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Ebonbane moves up to half its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ and makes one Darkflame Slash attack."
    "name": "Retaliate"
  - "desc": "*Constitution Saving Throw:* DC 17, each creature of Ebonbane's choice\
      \ in a 30-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from Ebonbane. *Failure:* The target has the [Blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded)\
      \ condition and repeats the save at the end of each of its turns. The target\
      \ succeeds automatically after 1 minute. *Failure or Success:* Ebonbane can't\
      \ take this action again until the start of its next turn."
    "name": "Runic Flare"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/ebonbane-rhw.webp"
```
^statblock