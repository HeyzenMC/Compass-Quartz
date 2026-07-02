---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/wizard
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Nagpa"
---
# [Nagpa](Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/nagpa-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 189, Mordenkainen's Tome of Foes p. 215*  

Long ago, the Raven Queen cursed a cabal of powerful wizards for meddling in a ritual that would have helped avert a war between the gods. She transformed them into the scabrous, birdlike creatures known as nagpas and rendered them able to acquire new lore and magical power only from the ruins of fallen civilizations and great calamities.

Nagpas still fear the Raven Queen and do their best to avoid her and her agents. When it's impossible to do so, they become cringing, fawning things, eager to please and thereby escape further attention from her cold gaze. All the original thirteen remain alive, thanks to their cunning and their willingness to do whatever is necessary to survive.

Hungry to claim more power despite the Raven Queen's curse, nagpas strive to bring about world-shaking destruction. From the shadows, they manipulate events to bring about ruin. They can bring to bear an array of spells to turn other creatures into their agents, influencing their decisions in subtle ways and making them unwitting accomplices in their own destruction. Nagpas are extraordinarily patient and pursue several schemes simultaneously, so if one plan goes awry, they can shift their focus to another. Typically, nagpas emerge from the shadows only when they can deliver a finishing blow. They then revel in the grand devastation their plotting brought about—looting libraries, plundering vaults, and prying secrets of arcane lore and power from the wreckage.

```statblock
"name": "Nagpa (MPMM)"
"size": "Medium"
"type": "monstrosity"
"subtype": "wizard"
"alignment": "Typically  Neutral Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "203"
"hit_dice": "37d8 + 37"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "15"
  - !!int "12"
  - !!int "23"
  - !!int "18"
  - !!int "21"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "12"
  - "wisdom": !!int "10"
  - "charisma": !!int "11"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+12"
  - "name": "[Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)"
    "desc": "+11"
  - "name": "[History](Sonstige/z_Content%20and%20Rules/skills.md#History)"
    "desc": "+12"
  - "name": "[Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)"
    "desc": "+10"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+10"
"senses": "[truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 120 ft.,\
  \ passive Perception 20"
"languages": "Common plus up to five other languages"
"cr": "17"
"actions":
  - "desc": "The nagpa makes three Staff or Deathly Ray attacks. It can replace one\
      \ attack with a use of Spellcasting."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d6 + 2) bludgeoning damage plus 24 (7d6) necrotic damage."
    "name": "Staff"
  - "desc": "*Ranged Spell Attack:* +12 to hit, range 120 ft., one target. *Hit:*\
      \ 30 (7d6 + 6) necrotic damage."
    "name": "Deathly Ray"
  - "desc": "The nagpa casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (spell save DC 20):\n\n**At will:** [detect magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md),\
      \ [mage hand](Sonstige/z_Content%20and%20Rules/spells/mage-hand-xphb.md), [message](Sonstige/z_Content%20and%20Rules/spells/message-xphb.md),\
      \ [minor illusion](Sonstige/z_Content%20and%20Rules/spells/minor-illusion-xphb.md)\n\
      \n**2/day each:** [fireball](Sonstige/z_Content%20and%20Rules/spells/fireball-xphb.md),\
      \ [fly](Sonstige/z_Content%20and%20Rules/spells/fly-xphb.md), [hold person](Sonstige/z_Content%20and%20Rules/spells/hold-person-xphb.md),\
      \ [suggestion](Sonstige/z_Content%20and%20Rules/spells/suggestion-xphb.md),\
      \ [wall of fire](Sonstige/z_Content%20and%20Rules/spells/wall-of-fire-xphb.md)\n\
      \n**1/day each:** [dominate person](Sonstige/z_Content%20and%20Rules/spells/dominate-person-xphb.md),\
      \ [etherealness](Sonstige/z_Content%20and%20Rules/spells/etherealness-xphb.md),\
      \ [feeblemind](Sonstige/z_Content%20and%20Rules/spells/befuddlement-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The nagpa targets one creature it can see within 90 feet of it. The target\
      \ must make a DC 20 Charisma saving throw. An evil creature makes the save with\
      \ disadvantage. On a failed save, the target is [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ by the nagpa until the start of the nagpa's next turn. On a successful save,\
      \ the target becomes immune to the nagpa's Corruption for the next 24 hours."
    "name": "Corruption"
  - "desc": "The nagpa forces each creature within 30 feet of it to make a DC 20 Wisdom\
      \ saving throw, excluding Undead and Constructs. On a failed save, a target\
      \ is [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed) for\
      \ 1 minute. A [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Paralysis (Recharge 6-6)"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/token/nagpa-mpmm.webp"
```
^statblock

## Environment

coastal, desert, forest, swamp, underdark, urban