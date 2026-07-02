---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Brain in a Jar"
---
# [Brain in a Jar](Sonstige/z_Content%20and%20Rules/bestiary/undead/brain-in-a-jar-rhw.md)
*Source: RHW p. 239*  

*Disembodied, Manipulative Mastermind*

A brain in a jar is the gray matter of one who cheated death through magic or strange surgeries. It now forces its will on those around it.

Some brains in jars are the result of strange experiments, bizarre punishments, or the aberrant preservation methods of creatures and mi-go. A brain in a jar's container might be an alien contraption, ostentatious glassware, or a mundane canister.

```statblock
"name": "Brain in a Jar (RHW)"
"size": "Small"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "11"
"hp": !!int "55"
"hit_dice": "10d6 + 20"
"modifier": !!int "-4"
"stats":
  - !!int "1"
  - !!int "3"
  - !!int "15"
  - !!int "19"
  - !!int "10"
  - !!int "15"
"speed": "5 ft., fly 20 ft. (hover)"
"saves":
  - "intelligence": !!int "6"
  - "charisma": !!int "4"
"condition_immunities": "[exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed)"
"senses": "[Blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 120\
  \ ft., passive Perception 10"
"languages": "telepathy 60 ft. understands Common plus three other languages but can't\
  \ speak; telepathy 60 ft."
"cr": "3"
"traits":
  - "desc": "The brain magically senses the location of any creature within 300 feet\
      \ of itself that has an Intelligence score of 3 or higher, regardless of interposing\
      \ barriers."
    "name": "Detect Intelligence"
  - "desc": "The brain has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The brain makes two Disrupting Burst attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 120 ft. *Hit:*\
      \ 11 (2d6 + 4) Psychic damage. The target can't take Reactions until the end\
      \ of its next turn, and it has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on saving throws to maintain [Concentration](Sonstige/z_Content%20and%20Rules/conditions.md#Concentration)\
      \ until the end of its next turn."
    "name": "Disrupting Burst"
  - "desc": "*Intelligence Saving Throw:* DC 14, each creature in a 60-foot [Cone](Sonstige/z_Content%20and%20Rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 14 (4d6) Psychic damage, and the target has the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition until the end of the brain's next turn. *Success:* Half damage only."
    "name": "Mind Blast (Recharge 5-6)"
  - "desc": "The brain casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\n\
      **At will:** [Charm Person](Sonstige/z_Content%20and%20Rules/spells/charm-person-xphb.md),\
      \ [Detect Thoughts](Sonstige/z_Content%20and%20Rules/spells/detect-thoughts-xphb.md),\
      \ [Mage Hand](Sonstige/z_Content%20and%20Rules/spells/mage-hand-xphb.md)\n\n\
      **1/day each:** [Compulsion](Sonstige/z_Content%20and%20Rules/spells/compulsion-xphb.md),\
      \ [Hold Person](Sonstige/z_Content%20and%20Rules/spells/hold-person-xphb.md)\
      \ (level 3 version)"
    "name": "Spellcasting"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/brain-in-a-jar-rhw.webp"
```
^statblock

## Environment

urban