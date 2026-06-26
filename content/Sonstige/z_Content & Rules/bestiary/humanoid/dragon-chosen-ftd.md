---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ftd
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Dragon Chosen"
---
# [Dragon Chosen](Sonstige/z_Content%20&%20Rules/bestiary/humanoid/dragon-chosen-ftd.md)
*Source: Fizban's Treasury of Dragons p. 189*  

Dragon chosen are mighty warriors who offer their bodies as vessels for a dragon's might. They serve as enforcers of their masters' will; they often accompany dragon speakers—and are quick to defend them if they sense any ill intent. Dragon chosen are skilled in close combat, using two weapons to tear at their foes.

## Dragon Followers

Dragons boast many minions, students, employees, acolytes, and thralls. Dragon followers are those servitors whose devotion to a dragon approaches fanatical reverence and who receive magical power from the dragon in return.

Dragon followers might serve and revere any kind of dragon, and their behavior and beliefs reflect the ethos of the dragon they follow. Many dragon followers have personal stories of benevolent dragons sharing great knowledge, protecting their towns, or sparing their lives during some foolhardy adventure. Other followers seek to uncover the mysteries of draconic nature and live a life worthy of their dragon's reward, and they dream of a world where dragons can live among them as their rulers.

```statblock
"name": "Dragon Chosen (FTD)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "14"
  - !!int "10"
  - !!int "13"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "strength": !!int "6"
  - "dexterity": !!int "6"
  - "constitution": !!int "4"
"skillsaves":
  - "name": "[Athletics](Sonstige/z_Content%20&%20Rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Perception](Sonstige/z_Content%20&%20Rules/skills.md#Perception)"
    "desc": "+3"
"condition_immunities": "[frightened](Sonstige/z_Content%20&%20Rules/conditions.md#Frightened)"
"gear":
  - "[handaxe](Sonstige/z_Content%20&%20Rules/items/handaxe-xphb.md)"
  - "[shortsword](Sonstige/z_Content%20&%20Rules/items/shortsword-xphb.md)"
"senses": "passive Perception 13"
"languages": "Common, Draconic"
"cr": "3"
"actions":
  - "desc": "The chosen makes one Handaxe attack and two Shortsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 7 (1d6 + 4) slashing damage. *Hit or Miss:* The\
      \ handaxe magically returns to the chosen's hand immediately after a ranged\
      \ attack."
    "name": "Handaxe"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) piercing damage."
    "name": "Shortsword"
"reactions":
  - "desc": "Immediately after the chosen takes damage from a creature within 5 feet\
      \ of it, it can make a Shortsword attack with advantage against that creature."
    "name": "Biting Rebuke"
"source":
  - "FTD"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/humanoid/token/dragon-chosen-ftd.webp"
```
^statblock