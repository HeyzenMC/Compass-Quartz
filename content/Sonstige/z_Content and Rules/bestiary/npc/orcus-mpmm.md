---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/26
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Orcus"
---
# [Orcus](Sonstige/z_Content%20and%20Rules/bestiary/npc/orcus-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 204, Mordenkainen's Tome of Foes p. 153*  

Orcus is the Demon Prince of Undeath, also known as the Blood Lord. While he takes pleasure in the sufferings of the living, he far prefers the company and service of Undead. His desire is to see all life quenched and the multiverse transformed into a vast necropolis populated solely by Undead creatures under his command.

Orcus rewards those who spread death in his name by granting them a small portion of his power. The least of these become [ghouls](Sonstige/z_Content%20and%20Rules/bestiary/undead/ghoul-xmm.md) and [zombies](Sonstige/z_Content%20and%20Rules/bestiary/undead/zombie-xmm.md) that serve in his legions, while his favored servants are the cultists and necromancers who murder the living and then manipulate the dead, emulating their dread master.

Orcus is a bestial creature of corruption with a diseased, decaying look. He has the lower torso of a goat and a humanlike upper body with a belly swollen with rot. Great bat wings sprout from his shoulders, and his head is like the skull of a goat, the flesh nearly rotted from it. In one hand, he wields the legendary [Wand of Orcus](Sonstige/z_Content%20and%20Rules/items/wand-of-orcus-xdmg.md), which is described in the *Dungeon Master's Guide*.

## Cultists of Orcus

> [!note]
> See the Cult of Orcus entry.

## Orcus's Lair

Orcus makes his lair in the fortress city of Naratyr, which is on Thanatos, the layer of the Abyss that he rules. Surrounded by a moat fed by the River Styx, Naratyr is an eerily quiet and cold city, its streets empty for hours at a time. The central castle of bone has interior walls of flesh and carpets made of woven hair. The city contains wandering Undead, many of which are engaged in continuous battles with one another.

```statblock
"name": "Orcus (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor; 20 with the [Wand of Orcus](Sonstige/z_Content%20and%20Rules/items/wand-of-orcus-xdmg.md)"
"hp": !!int "405"
"hit_dice": "30d12 + 210"
"modifier": !!int "2"
"stats":
  - !!int "27"
  - !!int "14"
  - !!int "25"
  - !!int "20"
  - !!int "20"
  - !!int "25"
"speed": "40 ft., fly 40 ft."
"saves":
  - "dexterity": !!int "10"
  - "constitution": !!int "15"
  - "wisdom": !!int "13"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+13"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+13"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"gear":
  - "[wand of orcus](Sonstige/z_Content%20and%20Rules/items/wand-of-orcus-xdmg.md)"
"senses": "[truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 120 ft.,\
  \ passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
  - "desc": "If Orcus fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Orcus has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Orcus can cast [animate dead](Sonstige/z_Content%20and%20Rules/spells/animate-dead-xphb.md)\
      \ (at will) and [create undead](Sonstige/z_Content%20and%20Rules/spells/create-undead-xphb.md)\
      \ (3/day). He chooses the level at which the spells are cast, and the creatures\
      \ created by them remain under his control indefinitely. Additionally, he can\
      \ cast [create undead](Sonstige/z_Content%20and%20Rules/spells/create-undead-xphb.md)\
      \ even when it isn't night."
    "name": "Master of Undeath"
  - "desc": "Orcus wields the [Wand of Orcus](Sonstige/z_Content%20and%20Rules/items/wand-of-orcus-xdmg.md)."
    "name": "Special Equipment"
"actions":
  - "desc": "Orcus makes three Wand of Orcus, Tail, or Necrotic Bolt attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +19 to hit, reach 10 ft., one target. *Hit:*\
      \ 24 (3d8 + 11) bludgeoning damage plus 13 (2d12) necrotic damage."
    "name": "Wand of Orcus"
  - "desc": "*Melee Weapon Attack:* +16 to hit, reach 10 ft., one target. *Hit:*\
      \ 21 (3d8 + 8) force damage plus 9 (2d8) poison damage."
    "name": "Tail"
  - "desc": "*Ranged Spell Attack:* +15 to hit, range 120 ft., one target. *Hit:*\
      \ 29 (5d8 + 7) necrotic damage."
    "name": "Necrotic Bolt"
  - "desc": "While holding the [Wand of Orcus](Sonstige/z_Content%20and%20Rules/items/wand-of-orcus-xdmg.md),\
      \ Orcus conjures Undead creatures whose combined average hit points don't exceed\
      \ 500. These creatures magically rise up from the ground or otherwise form in\
      \ unoccupied spaces within 300 feet of Orcus and obey his commands until they\
      \ are destroyed or until he dismisses them as an action."
    "name": "Conjure Undead (1/Day)"
  - "desc": "Orcus casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 23):\n\n**At\
      \ will:** [detect magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md)\n\
      \n**3/day:** [dispel magic](Sonstige/z_Content%20and%20Rules/spells/dispel-magic-xphb.md)\n\
      \n**1/day:** [time stop](Sonstige/z_Content%20and%20Rules/spells/time-stop-xphb.md)"
    "name": "Spellcasting"
  - "desc": "While holding the [Wand of Orcus](Sonstige/z_Content%20and%20Rules/items/wand-of-orcus-xdmg.md),\
      \ Orcus casts one of the following spells (spell save DC 18), some of which\
      \ require charges; the wand has 7 charges to fuel these spells, and it regains\
      \ 1d4 + 3 charges daily at dawn:\n\n**At will:** [animate dead](Sonstige/z_Content%20and%20Rules/spells/animate-dead-xphb.md)\
      \ (as an action), [blight](Sonstige/z_Content%20and%20Rules/spells/blight-xphb.md),\
      \ [speak with dead](Sonstige/z_Content%20and%20Rules/spells/speak-with-dead-xphb.md)\n\
      \n**2 charges each:** [power word kill](Sonstige/z_Content%20and%20Rules/spells/power-word-kill-xphb.md)\n\
      \n**1 charge each:** [circle of death](Sonstige/z_Content%20and%20Rules/spells/circle-of-death-xphb.md),\
      \ [finger of death](Sonstige/z_Content%20and%20Rules/spells/finger-of-death-xphb.md)"
    "name": "Wand Spellcasting"
"legendary_description": "Orcus can take 3 legendary actions, choosing from the options\
  \ below. Only one legendary action option can be used at a time and only at the\
  \ end of another creature's turn. Orcus regains spent legendary actions at the start\
  \ of his turn."
"legendary_actions":
  - "desc": "Orcus makes one Tail or Necrotic Bolt attack."
    "name": "Attack"
  - "desc": "Orcus chooses a point on the ground that he can see within 100 feet of\
      \ him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot\
      \ radius rises from that point and lasts until the end of Orcus's next turn.\
      \ Creatures in that area have vulnerability to necrotic damage."
    "name": "Creeping Death (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/orcus-mpmm.webp"
```
^statblock