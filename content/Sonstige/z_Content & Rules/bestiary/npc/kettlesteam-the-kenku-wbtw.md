---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/kenku
- ttrpg-cli/monster/type/humanoid/warlock
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Kettlesteam the Kenku"
---
# [Kettlesteam the Kenku](Sonstige/z_Content%20&%20Rules/bestiary/npc/kettlesteam-the-kenku-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 52*  

Kettlesteam the kenku snoops around the carnival under the cover of a [disguise self](Sonstige/z_Content%20&%20Rules/spells/disguise-self-xphb.md) spell, looking to cause trouble. The kenku has stolen the voice of a human mime named Candlefoot (see "Hall of Illusions "earlier in the chapter). While this prize remains in her possession, Kettlesteam can speak clearly in Candlefoot's soft, silky voice.

```statblock
"name": "Kettlesteam the Kenku (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "kenku, warlock"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "10"
  - !!int "11"
  - !!int "10"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "2"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20&%20Rules/skills.md#Arcana)"
    "desc": "+2"
  - "name": "[Deception](Sonstige/z_Content%20&%20Rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Investigation](Sonstige/z_Content%20&%20Rules/skills.md#Investigation)"
    "desc": "+2"
  - "name": "[Perception](Sonstige/z_Content%20&%20Rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Persuasion](Sonstige/z_Content%20&%20Rules/skills.md#Persuasion)"
    "desc": "+5"
  - "name": "[Stealth](Sonstige/z_Content%20&%20Rules/skills.md#Stealth)"
    "desc": "+5"
"gear":
  - "[dagger](Sonstige/z_Content%20&%20Rules/items/dagger-xphb.md)"
"senses": "passive Perception 12"
"languages": "understands Auran and Common but speaks only through the use of her\
  \ Mimicry trait"
"cr": "1"
"traits":
  - "desc": "Kettlesteam can mimic any sounds she has heard, including voices. A creature\
      \ that hears the sounds can tell they are imitations only with a successful\
      \ DC 13 Wisdom ([Insight](Sonstige/z_Content%20&%20Rules/skills.md#Insight))\
      \ check."
    "name": "Mimicry"
"actions":
  - "desc": "Kettlesteam makes two Dagger attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
  - "desc": "Kettlesteam targets one creature she can see within 10 feet of her. The\
      \ target is engulfed in a cloud of magical, sleep-inducing gas and must succeed\
      \ on a DC 13 Constitution saving throw or fall [unconscious](Sonstige/z_Content%20&%20Rules/conditions.md#Unconscious)\
      \ for 1 minute. A creature put to sleep by this gas awakens instantly if it\
      \ takes damage, or if someone uses an action to shake or slap the sleeper awake."
    "name": "Twilight Sleep (2/Day)"
  - "desc": "Kettlesteam casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 13):\n\n**At will:** [disguise self](Sonstige/z_Content%20&%20Rules/spells/disguise-self-xphb.md),\
      \ [friends](Sonstige/z_Content%20&%20Rules/spells/friends-xphb.md), [mage hand](Sonstige/z_Content%20&%20Rules/spells/mage-hand-xphb.md),\
      \ [minor illusion](Sonstige/z_Content%20&%20Rules/spells/minor-illusion-xphb.md)\n\
      \n**1/day each:** [bestow curse](Sonstige/z_Content%20&%20Rules/spells/bestow-curse-xphb.md),\
      \ [faerie fire](Sonstige/z_Content%20&%20Rules/spells/faerie-fire-xphb.md),\
      \ [speak with animals](Sonstige/z_Content%20&%20Rules/spells/speak-with-animals-xphb.md)"
    "name": "Spellcasting"
"source":
  - "WBtW"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/npc/token/kettlesteam-the-kenku-wbtw.webp"
```
^statblock