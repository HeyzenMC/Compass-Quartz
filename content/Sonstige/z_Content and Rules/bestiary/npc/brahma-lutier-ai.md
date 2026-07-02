---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ai
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Brahma Lutier"
---
# [Brahma Lutier](Sonstige/z_Content%20and%20Rules/bestiary/npc/brahma-lutier-ai.md)
*Source: Acquisitions Incorporated p. 205*  

Formally a former member of the "B" Team, Brahma Lutier is a gifted cartographer, spy, and troubadour. Tutored in at least the latter of those vocations by Audra Courtier (wife of Propha Dran and co-owner of the Dran & Courtier inn of Red Larch), Brahma's specialty is a song of domination that is legendarily difficult to resist.

Her retirement is said to be connected to a falling out with husband Oak Truestrike, and Brahma has been operating as a solo agent for some time now. Known for a personality that is murderous and cheery in equal part, she utilizes an instrument of dragonborn design in combat. Known as a war lute, this unique item comes replete with hidden storage and powerful weaponry.

```statblock
"name": "Brahma Lutier (AI)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "12"
  - !!int "11"
  - !!int "13"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Performance](Sonstige/z_Content%20and%20Rules/skills.md#Performance)"
    "desc": "+5"
  - "name": "[Persuasion](Sonstige/z_Content%20and%20Rules/skills.md#Persuasion)"
    "desc": "+5"
"senses": "passive Perception 13"
"languages": "Common, Elvish"
"cr": "2"
"traits":
  - "desc": "Brahma is a 4th-level spellcaster. Her spellcasting ability is Charisma\
      \ (spell save DC 13, +5 to hit with spell attacks). She has the following\
      \ bard spells prepared:\n\n**Cantrips (at will):** [mage hand](Sonstige/z_Content%20and%20Rules/spells/mage-hand-xphb.md),\
      \ [message](Sonstige/z_Content%20and%20Rules/spells/message-xphb.md), [vicious\
      \ mockery](Sonstige/z_Content%20and%20Rules/spells/vicious-mockery-xphb.md)\n\
      \n**1st level (4 slots):** [charm person](Sonstige/z_Content%20and%20Rules/spells/charm-person-xphb.md),\
      \ [heroism](Sonstige/z_Content%20and%20Rules/spells/heroism-xphb.md), [illusory\
      \ script](Sonstige/z_Content%20and%20Rules/spells/illusory-script-xphb.md),\
      \ [sleep](Sonstige/z_Content%20and%20Rules/spells/sleep-xphb.md), [unseen servant](Sonstige/z_Content%20and%20Rules/spells/unseen-servant-xphb.md)\n\
      \n**2nd level (3 slots):** [cloud of daggers](Sonstige/z_Content%20and%20Rules/spells/cloud-of-daggers-xphb.md),\
      \ [invisibility](Sonstige/z_Content%20and%20Rules/spells/invisibility-xphb.md)"
    "name": "Spellcasting"
  - "desc": "Brahma has advantage on saving throws against being [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
      \ and magic can't put her to sleep."
    "name": "Fey Ancestry"
  - "desc": "Brahma can use a bonus action to target one creature she can see within\
      \ 30 feet of her. If the target can hear Brahma, it must succeed on a DC 13\
      \ Charisma saving throw or have disadvantage on ability checks, attack rolls,\
      \ and saving throws until the start of Brahma's next turn."
    "name": "Taunt (2/Day)"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage."
    "name": "War Lute"
  - "desc": "Brahma targets one creature that can see or hear her, which must succeed\
      \ on a DC 13 Wisdom saving throw or be [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ by her for 1 minute. The target can repeat the save at the end of each of\
      \ its turns, ending the effect on itself on a success. It has disadvantage on\
      \ these saves if being [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ by Brahma is something the target openly or secretly desires. For 1 hour after\
      \ the charm effect ends, the target has disadvantage on Intelligence, Wisdom,\
      \ or Charisma checks made as part of a contest with Brahma."
    "name": "Song of Domination (3/Day)"
"source":
  - "AI"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/brahma-lutier-ai.webp"
```
^statblock