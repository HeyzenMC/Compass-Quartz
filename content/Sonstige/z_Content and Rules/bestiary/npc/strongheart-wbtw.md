---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/paladin
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Strongheart"
---
# [Strongheart](Sonstige/z_Content%20and%20Rules/bestiary/npc/strongheart-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 228*  

Strongheart is a fearless seeker of justice, risking his life to ensure that good triumphs over evil. He is thoughtful, kind, and seldom rash, yet never hesitant to punish those who spit in the face of law and order.

Strongheart doesn't worship a god but devotes himself to an ideal: that the world can be spared from evil by those who have enough courage to stand against it.

```statblock
"name": "Strongheart (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, paladin"
"alignment": "Lawful Good"
"ac": !!int "20"
"ac_class": "[plate armor](Sonstige/z_Content%20and%20Rules/items/plate-armor-xphb.md),\
  \ [shield](Sonstige/z_Content%20and%20Rules/items/shield-xphb.md)"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "12"
  - !!int "13"
  - !!int "12"
  - !!int "13"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "3"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)"
    "desc": "+3"
  - "name": "[Persuasion](Sonstige/z_Content%20and%20Rules/skills.md#Persuasion)"
    "desc": "+5"
"condition_immunities": "[frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"gear":
  - "[steel](Sonstige/z_Content%20and%20Rules/items/steel-wbtw.md)"
"senses": "passive Perception 11"
"languages": "Common, Dwarvish"
"cr": "4"
"traits":
  - "desc": "Strongheart wields [Steel](Sonstige/z_Content%20and%20Rules/items/steel-wbtw.md),\
      \ a sentient, lawful good longsword (see appendix A)."
    "name": "Special Equipment"
"actions":
  - "desc": "Strongheart makes three Steel attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage when used with\
      \ two hands. Once on each of his turns, Strongheart can also cause the blade\
      \ to gleam with holy light. If he does so, the target is [blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded)\
      \ until the start of Strongheart's next turn."
    "name": "Steel"
  - "desc": "While holding Steel, Strongheart casts [revivify](Sonstige/z_Content%20and%20Rules/spells/revivify-xphb.md)."
    "name": "Revivify (Recharges at the Next Dawn)"
  - "desc": "Strongheart casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 13):\n\n**3/day each:** [command](Sonstige/z_Content%20and%20Rules/spells/command-xphb.md),\
      \ [detect evil and good](Sonstige/z_Content%20and%20Rules/spells/detect-evil-and-good-xphb.md),\
      \ [protection from evil and good](Sonstige/z_Content%20and%20Rules/spells/protection-from-evil-and-good-xphb.md)\n\
      \n**1/day each:** [lesser restoration](Sonstige/z_Content%20and%20Rules/spells/lesser-restoration-xphb.md),\
      \ [remove curse](Sonstige/z_Content%20and%20Rules/spells/remove-curse-xphb.md),\
      \ [zone of truth](Sonstige/z_Content%20and%20Rules/spells/zone-of-truth-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "When a creature Strongheart can see attacks another creature that is\
      \ within 5 feet of him, Strongheart can use his reaction to impose disadvantage\
      \ on the attack roll, provided he is carrying a shield."
    "name": "Protect Another"
"source":
  - "WBtW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/strongheart-wbtw.webp"
```
^statblock