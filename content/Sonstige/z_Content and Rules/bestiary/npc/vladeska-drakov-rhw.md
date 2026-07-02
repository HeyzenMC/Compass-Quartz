---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Vladeska Drakov"
---
# [Vladeska Drakov](Sonstige/z_Content%20and%20Rules/bestiary/npc/vladeska-drakov-rhw.md)
*Source: RHW p. 80*  

General of a demoralized occupying army, Vladeska Drakov rules what little of Falkovnia hasn't been overrun by the dead. A cunning authoritarian, she believes any tactics—no matter how immoral—are permissible in the pursuit of victory. The Mists torment her by keeping her ever on the edge of defeat, exhausting her and forcing her to watch her precision fail in the face of an endless string of emergencies and an undefeatable enemy horde. Drakov is ever being pushed to the edge. Hunger, sleep deprivation, and the endless demands of terrified troops and civilians drive her toward outbursts of paranoia and violence.

```statblock
"name": "Vladeska Drakov (RHW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "170"
"hit_dice": "20d8 + 80"
"modifier": !!int "6"
"stats":
  - !!int "19"
  - !!int "15"
  - !!int "18"
  - !!int "14"
  - !!int "13"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "constitution": !!int "8"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Athletics](Sonstige/z_Content%20and%20Rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+5"
"condition_immunities": "[frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"gear":
  - "[pike](Sonstige/z_Content%20and%20Rules/items/pike-xphb.md)"
  - "six [spears](Sonstige/z_Content%20and%20Rules/items/spear-xphb.md)"
  - "[studded leather armor](Sonstige/z_Content%20and%20Rules/items/studded-leather-armor-xphb.md)"
"senses": "passive Perception 15"
"languages": "Common, Giant, Orc"
"cr": "12"
"traits":
  - "desc": "If Vladeska dies, she revives with all her [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Falkovnia."
    "name": "Darklord Restoration"
  - "desc": "If Vladeska fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
"actions":
  - "desc": "Vladeska makes two Pike attacks. She can replace one attack with an Impaling\
      \ Spear attack."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +8, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 13 (2d8 + 4) Piercing damage, and the target is impaled on Vladeska's\
      \ spear. While impaled, the creature has the [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ condition and takes 3 (1d6) Piercing damage at the start of each of its\
      \ turns. The target or a creature within 5 feet of it can take an action to\
      \ remove it from the spear."
    "name": "Impaling Spear"
  - "desc": "*Melee Attack Roll:* +8, reach 10 ft. *Hit:* 15 (2d10 + 4) Piercing\
      \ damage."
    "name": "Pike"
  - "desc": "*Dexterity Saving Throw:* DC 15, each creature in a 20-foot-radius, 60-foot-high\
      \ [Cylinder](Sonstige/z_Content%20and%20Rules/variant-rules/cylinder-area-of-effect-xphb.md)\
      \ centered on a point Vladeska can see within 300 feet. *Failure:* 13 (3d8)\
      \ Bludgeoning damage plus 13 (3d8) Fire damage, and the target has the [Prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone)\
      \ condition. *Success:* Half damage only."
    "name": "Artillery Fire (1/Day)"
"reactions":
  - "desc": "Trigger: A creature Vladeska can see makes an attack roll against her.\
      \ _Response:_ Vladeska chooses a Small or Medium ally within 5 feet of herself.\
      \ She and that ally swap places, and the ally becomes the target of the attack\
      \ instead."
    "name": "Redirect Attack"
"regional_effects":
  - "desc": "Falkovnia is altered by Drakov's presence, creating the following effects:\n\
      \n- **Authoritarian Regime.** Drakov's allies have [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on Wisdom saving throws.  \n- **Closing the Borders.** Drakov can't close\
      \ or open the borders of her domain. Falkovnia's borders are usually closed,\
      \ but they open one week every month starting on the night of the new moon.\
      \  \n- **Endless War.** Whenever a creature other than Drakov or her allies\
      \ finishes a Long Rest in the domain, roll 1d20. On a 1, the creature doesn't\
      \ remove any [Exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion)\
      \ levels as a result of finishing that rest, and the creature gains 1 Exhaustion\
      \ level.  \n\nIf Drakov dies, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Vladeska can expend a use to take one of the following actions. Vladeska\
  \ regains all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Vladeska moves up to half her [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ and makes one Pike attack."
    "name": "Advance"
  - "desc": "Vladeska makes an Impaling Spear attack. If the attack hits and the target\
      \ is a creature, each ally of the target within 30 feet is subjected to the\
      \ following effect. *Wisdom Saving Throw:* DC 15. *Failure:* The target has\
      \ the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition until the end of its next turn. *Failure or Success:* Vladeska can't\
      \ take this action again until the start of her next turn."
    "name": "Dreadful Impaling"
  - "desc": "*Dexterity Saving Throw:* DC 15, one creature Vladeska can see within\
      \ 120 feet. *Failure:* 14 (4d6 + 3) Piercing damage, and the target's [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ is halved until the end of its next turn."
    "name": "Order Ballista"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/vladeska-drakov-rhw.webp"
```
^statblock