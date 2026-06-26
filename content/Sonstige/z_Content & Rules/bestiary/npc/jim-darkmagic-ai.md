---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ai
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Jim Darkmagic"
---
# [Jim Darkmagic](Sonstige/z_Content%20&%20Rules/bestiary/npc/jim-darkmagic-ai.md)
*Source: Acquisitions Incorporated p. 197*  

> [!quote]  
> 
> Have a magical day!

James Winifred Darkmagic III is the scion of a mysterious, multiplanar wizarding family. Jim's arcane pedigree has long preceded him, incorporating equally healthy amounts of magical training and innate eldritch prowess. However, despite a natural talent that could have allowed him to make a name for himself as a court wizard, or perhaps "that strange old man in the village," Jim's original penchant was not for the magic of scroll or spell, but for the stage.

As an entertainer and purveyor of the "Jim Darkmagic Experience," the legendary mage can often be found in markets and town squares, performing feats of mundane legerdemain. The renown he has earned for these feats is nearly equaled by the reputation that follows him as chief arcanist (and occasional arsonist) for Acquisitions Incorporated. And although his skills as an adventurer and real wizard remain highly sought after, Jim looks forward to a well-earned retirement, at which point he hopes to become a "real wizard"-by which he means a fake wizard-full time.

```statblock
"name": "Jim Darkmagic (AI)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Sonstige/z_Content%20&%20Rules/spells/mage-armor-xphb.md)"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "10"
  - !!int "18"
  - !!int "12"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Acrobatics](Sonstige/z_Content%20&%20Rules/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Animal Handling](Sonstige/z_Content%20&%20Rules/skills.md#Animal%20Handling)"
    "desc": "+4"
  - "name": "[Arcana](Sonstige/z_Content%20&%20Rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](Sonstige/z_Content%20&%20Rules/skills.md#History)"
    "desc": "+7"
  - "name": "[Performance](Sonstige/z_Content%20&%20Rules/skills.md#Performance)"
    "desc": "+5"
"gear":
  - "[dagger](Sonstige/z_Content%20&%20Rules/items/dagger-xphb.md)"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "Jim is a 9th-level spellcaster. His spellcasting ability is Intelligence\
      \ (spell save DC 15, +7 to hit with spell attacks). He has the following wizard\
      \ spells prepared:\n\n**Cantrips (at will):** [fire bolt](Sonstige/z_Content%20&%20Rules/spells/fire-bolt-xphb.md),\
      \ [friends](Sonstige/z_Content%20&%20Rules/spells/friends-xphb.md), [mage hand](Sonstige/z_Content%20&%20Rules/spells/mage-hand-xphb.md),\
      \ [minor illusion](Sonstige/z_Content%20&%20Rules/spells/minor-illusion-xphb.md),\
      \ [prestidigitation](Sonstige/z_Content%20&%20Rules/spells/prestidigitation-xphb.md)\n\
      \n**1st level (4 slots):** [disguise self](Sonstige/z_Content%20&%20Rules/spells/disguise-self-xphb.md),\
      \ [Jim's magic missile](Sonstige/z_Content%20&%20Rules/spells/jims-magic-missile-ai.md)*,\
      \ [mage armor](Sonstige/z_Content%20&%20Rules/spells/mage-armor-xphb.md)\n\n\
      **2nd level (3 slots):** [invisibility](Sonstige/z_Content%20&%20Rules/spells/invisibility-xphb.md),\
      \ [Jim's glowing coin](Sonstige/z_Content%20&%20Rules/spells/jims-glowing-coin-ai.md)*\n\
      \n**3rd level (3 slots):** [incite greed](Sonstige/z_Content%20&%20Rules/spells/incite-greed-ai.md)*,\
      \ [fireball](Sonstige/z_Content%20&%20Rules/spells/fireball-xphb.md)\n\n**4th\
      \ level (3 slots):** [conjure minor elementals](Sonstige/z_Content%20&%20Rules/spells/conjure-minor-elementals-xphb.md),\
      \ [polymorph](Sonstige/z_Content%20&%20Rules/spells/polymorph-xphb.md)\n\n**5th\
      \ level (1 slots):** [mislead](Sonstige/z_Content%20&%20Rules/spells/mislead-xphb.md)\n\
      \n*New spell introduced in chapter 3"
    "name": "Spellcasting"
  - "desc": "Jim carries a [wand of wonder](Sonstige/z_Content%20&%20Rules/items/wand-of-wonder-xdmg.md)."
    "name": "Special Equipment"
  - "desc": "As a bonus action, Jim teleports up to 30 feet to a space he can see.\
      \ The space must be unoccupied or occupied by a willing Small or Medium creature.\
      \ If the latter, Jim and the willing creature both teleport, swapping places."
    "name": "Benign Transportation (Recharges after Jim Casts a Conjuration Spell\
      \ of 1st Level or Higher)"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
  - "desc": "Jim conjures an inanimate object, no larger than 3 feet on a side and\
      \ no more than 10 pounds, in his hand or on the ground in an unoccupied space\
      \ he can see within 10 feet of him. The object is visibly magical, radiating\
      \ dim light out to 5 feet. It disappears if it takes any damage, after 1 hour,\
      \ or when Jim uses this feature again."
    "name": "Minor Conjuration"
"source":
  - "AI"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/npc/token/jim-darkmagic-ai.webp"
```
^statblock