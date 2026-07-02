---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/lycanthrope
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Gennifer Weathermay-Foxgrove"
---
# [Gennifer Weathermay-Foxgrove](Sonstige/z_Content%20and%20Rules/bestiary/npc/gennifer-weathermay-foxgrove-rhw.md)
*Source: RHW p. 278*  

Gennifer learned a variety of medicinal and spiritual practices, both traditional and esoteric, from Rudolph van Richten. She has conducted in-depth studies of lycanthropy to help her and her sister pursue Natalia Vhorishkova, who remains at large. Secretly, Gennifer fears that she might have been infected with lycanthropy after their encounter with Natalia. She hasn't shown signs of the curse yet, but she takes medication of her own concoction to ward off unwanted transformation. Gennifer quietly researches lycanthropy, searching for medicinal cures.

## Weathermay-Foxgrove Twins

*Adventurous Paranormal Investigators*

Twins Gennifer and Laurie Weathermay-Foxgrove are monster hunters who've built a reputation as heroes in the domain of "Mordent", and their reputation is spreading in domains beyond. The daughters of the mayor of Mordentshire, Alice Weathermay, the twins can often be found at their home, Heather House, or at that of their adopted uncle, [Doctor Rudolph van Richten](Sonstige/z_Content%20and%20Rules/bestiary/npc/rudolph-van-richten-rhw.md).

In their youth, Gennifer and Laurie channeled their curiosity and propensity for troublemaking into solving local mysteries. The twins' uncle—renowned monster hunter George Weathermay—returned to Mordent with his fiancée, Natalia Vhorishkova, just before the twins' sixteenth birthday. The twins realized Natalia was manipulating their beloved uncle and eventually exposed her as a werewolf who was using George to pursue Rudolph van Richten. After the twins saved their uncle and the doctor from the werewolf, George and Rudolph encouraged the girls' investigative instincts by training them as monster hunters.

Ever since, Gennifer and Laurie have aided Rudolph in his research and on adventurers across the Land of the Mists. Increasingly, the twins have struck out on their own, allying with heroes such as [Ez d'Avenir](Sonstige/z_Content%20and%20Rules/bestiary/npc/ez-davenir-rhw.md) and Savra Sunstar to solve mysteries and hunt evil across domains.

```statblock
"name": "Gennifer Weathermay-Foxgrove (RHW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, lycanthrope"
"alignment": "Lawful Good"
"ac": !!int "14"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "13"
  - !!int "15"
  - !!int "17"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Investigation](Sonstige/z_Content%20and%20Rules/skills.md#Investigation)"
    "desc": "+4"
  - "name": "[Medicine](Sonstige/z_Content%20and%20Rules/skills.md#Medicine)"
    "desc": "+5"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+4"
"gear":
  - "[component pouch](Sonstige/z_Content%20and%20Rules/items/component-pouch-xphb.md)"
  - "[dagger](Sonstige/z_Content%20and%20Rules/items/dagger-xphb.md)"
"senses": "passive Perception 13"
"languages": "Common, Draconic, Infernal"
"cr": "3"
"traits":
  - "desc": "If reduced to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ Gennifer succumbs to lycanthropy. Her statistics are replaced by those of\
      \ the Werewolf stat block, but she retains her alignment; personality; Intelligence,\
      \ Wisdom, and Charisma scores; proficiencies; and languages known. She then\
      \ immediately revives in her hybrid form with all her [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)."
    "name": "Suppressed Lycanthropy"
"actions":
  - "desc": "Gennifer makes two attacks, using Blessed Dagger or Radiant Wisp in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +4, reach 5 ft. or range 20/60 ft.\
      \ *Hit:* 4 (1d4 + 2) Piercing damage plus 9 (2d8) Radiant damage."
    "name": "Blessed Dagger"
  - "desc": "*Ranged Attack Roll:* +5, range 60 ft. *Hit:* 14 (2d10 + 3) Radiant\
      \ damage."
    "name": "Radiant Wisp"
  - "desc": "*Constitution Saving Throw:* DC 13, each creature in a 15-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from Gennifer. *Failure:* 18 (4d8) Radiant damage. If the target\
      \ is an Undead creature, it has the [Stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned)\
      \ condition until the end of its next turn."
    "name": "Esoteric Ward (Recharge 6)"
  - "desc": "Gennifer casts one of the following spells, using Wisdom as the spellcasting\
      \ ability (spell save DC 13):\n\n**At will:** [Light](Sonstige/z_Content%20and%20Rules/spells/light-xphb.md),\
      \ [Mending](Sonstige/z_Content%20and%20Rules/spells/mending-xphb.md)\n\n**1/day\
      \ each:** [Locate Animals or Plants](Sonstige/z_Content%20and%20Rules/spells/locate-animals-or-plants-xphb.md),\
      \ [Magic Circle](Sonstige/z_Content%20and%20Rules/spells/magic-circle-xphb.md),\
      \ [Protection from Poison](Sonstige/z_Content%20and%20Rules/spells/protection-from-poison-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Gennifer casts [Healing Word](Sonstige/z_Content%20and%20Rules/spells/healing-word-xphb.md),\
      \ using the same spellcasting ability as Spellcasting.\n"
    "name": "Occult Aid (2/Day)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/gennifer-weathermay-foxgrove-rhw.webp"
```
^statblock