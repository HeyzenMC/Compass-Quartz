---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cleric
- ttrpg-cli/monster/type/humanoid/drow-elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Drow Matron Mother"
---
# [Drow Matron Mother](Sonstige/z_Content%20and%20Rules/bestiary/humanoid/drow-matron-mother-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 104, Mordenkainen's Tome of Foes p. 186*  

Among drow followers of [Lolth](Sonstige/z_Content%20and%20Rules/deities/drow-lolth-mtf.md), each noble house is led by a matron mother, an influential priestess of Lolth charged with carrying out the god's will while also advancing the interests of the family. Matron mothers embody the scheming and treachery associated with the Queen of Spiders. Each stands at the center of a vast conspiratorial web, with demons, spiders, and conscripted soldiers positioned between them and their enemies. Although matron mothers command great power, that power depends on maintaining the Spider Queen's favor, and the goddess sometimes capriciously takes back what she has given. The stat block here represents a matron mother at the height of her power.

A matron mother is almost never encountered alone. She is typically accompanied by a [drow favored consort](Sonstige/z_Content%20and%20Rules/bestiary/humanoid/drow-favored-consort-mpmm.md) and a [drow house captain](Sonstige/z_Content%20and%20Rules/bestiary/humanoid/drow-house-captain-mpmm.md), each of whom appears in this book. Other Underdark creatures might also be in the priestess's presence, providing protection or advice.

## Mothers of Rebellion

Some matron mothers renounce [Lolth](Sonstige/z_Content%20and%20Rules/deities/drow-lolth-mtf.md) and join the war against their former goddess. Such drow could be of any alignment, and they lose the following abilities in the stat block: Lolth's Fickle Favor, Summon Servant, and Compel Demon. Even without these abilities, drow matron mothers are formidable opponents, and several of them hold positions of great influence in the Underdark armies arrayed against the followers of Lolth.

## A Matron Mother's Lair

The palace of a drow matron mother is her home and fortress. Sigils throughout the building allow the matron mother to use the following lair actions while within it.

Any temple of [Lolth](Sonstige/z_Content%20and%20Rules/deities/drow-lolth-mtf.md) also functions as a matron mother's lair while she is inside it, unless she has renounced Lolth or another matron mother is present. When two or more matron mothers gather within a temple of their goddess, none of them can use it as their lair.

```statblock
"name": "Drow Matron Mother (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, Drow elf"
"alignment": "Typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "[half plate](Sonstige/z_Content%20and%20Rules/items/half-plate-armor-xphb.md)"
"hp": !!int "247"
"hit_dice": "33d8 + 99"
"modifier": !!int "4"
"stats":
  - !!int "12"
  - !!int "18"
  - !!int "16"
  - !!int "17"
  - !!int "21"
  - !!int "22"
"speed": "30 ft."
"saves":
  - "constitution": !!int "9"
  - "wisdom": !!int "11"
  - "charisma": !!int "12"
"skillsaves":
  - "name": "[Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)"
    "desc": "+11"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+11"
  - "name": "[Religion](Sonstige/z_Content%20and%20Rules/skills.md#Religion)"
    "desc": "+9"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+10"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 21"
"languages": "Elvish, Undercommon"
"cr": "20"
"traits":
  - "desc": "The drow has advantage on saving throws against being [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
      \ and magic can't put the drow to sleep."
    "name": "Fey Ancestry"
  - "desc": "The drow wields a [tentacle rod](Sonstige/z_Content%20and%20Rules/items/tentacle-rod-xdmg.md)."
    "name": "Special Equipment"
  - "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The drow makes two Demon Staff attacks or one Demon Staff attack and\
      \ three Tentacle Rod attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 7 (1d6 + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if used\
      \ with two hands, plus 14 (4d6) psychic damage. The target must succeed on\
      \ a DC 19 Wisdom saving throw or become [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ of the drow for 1 minute. The [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Demon Staff"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 15 ft., one creature. *Hit:*\
      \ 3 (1d6) bludgeoning damage. If the target is hit three times by the [rod](Sonstige/z_Content%20and%20Rules/items/tentacle-rod-xdmg.md)\
      \ on one turn, the target must succeed on a DC 15 Constitution saving throw\
      \ or suffer the following effects for 1 minute: the target's speed is halved,\
      \ it has disadvantage on Dexterity saving throws, and it can't use reactions.\
      \ Moreover, on each of its turns, it can take either an action or a bonus action,\
      \ but not both. At the end of each of its turns, it can repeat the saving throw,\
      \ ending the effect on itself on a success."
    "name": "Tentacle Rod"
  - "desc": "A 10-foot-radius, 40-foot-high column of divine fire sprouts in an area\
      \ up to 120 feet away from the drow. Each creature in the column must make a\
      \ DC 20 Dexterity saving throw, taking 14 (4d6) fire damage and 14 (4d6)\
      \ radiant damage on a failed save, or half as much damage on a successful one."
    "name": "Divine Flame (2/Day)"
  - "desc": "The drow casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 20):\n\n**At\
      \ will:** [command](Sonstige/z_Content%20and%20Rules/spells/command-xphb.md),\
      \ [dancing lights](Sonstige/z_Content%20and%20Rules/spells/dancing-lights-xphb.md),\
      \ [detect magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md),\
      \ [thaumaturgy](Sonstige/z_Content%20and%20Rules/spells/thaumaturgy-xphb.md)\n\
      \n**2/day each:** [banishment](Sonstige/z_Content%20and%20Rules/spells/banishment-xphb.md),\
      \ [blade barrier](Sonstige/z_Content%20and%20Rules/spells/blade-barrier-xphb.md),\
      \ [cure wounds](Sonstige/z_Content%20and%20Rules/spells/cure-wounds-xphb.md),\
      \ [hold person](Sonstige/z_Content%20and%20Rules/spells/hold-person-xphb.md),\
      \ [plane shift](Sonstige/z_Content%20and%20Rules/spells/plane-shift-xphb.md),\
      \ [silence](Sonstige/z_Content%20and%20Rules/spells/silence-xphb.md)\n\n**1/day\
      \ each:** [clairvoyance](Sonstige/z_Content%20and%20Rules/spells/clairvoyance-xphb.md),\
      \ [darkness](Sonstige/z_Content%20and%20Rules/spells/darkness-xphb.md), [detect\
      \ thoughts](Sonstige/z_Content%20and%20Rules/spells/detect-thoughts-xphb.md),\
      \ [dispel magic](Sonstige/z_Content%20and%20Rules/spells/dispel-magic-xphb.md),\
      \ [faerie fire](Sonstige/z_Content%20and%20Rules/spells/faerie-fire-xphb.md),\
      \ [gate](Sonstige/z_Content%20and%20Rules/spells/gate-xphb.md), [levitate](Sonstige/z_Content%20and%20Rules/spells/levitate-xphb.md)\
      \ (self only), [suggestion](Sonstige/z_Content%20and%20Rules/spells/suggestion-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The drow bestows the Spider Queen's blessing on one ally she can see\
      \ within 30 feet of her. The ally takes 7 (2d6) psychic damage but has advantage\
      \ on the next attack roll it makes before the end of its next turn."
    "name": "Lolth's Fickle Favor"
  - "desc": "The drow magically summons a [glabrezu](Sonstige/z_Content%20and%20Rules/bestiary/fiend/glabrezu-xmm.md)\
      \ or a [yochlol](Sonstige/z_Content%20and%20Rules/bestiary/fiend/yochlol-xmm.md).\
      \ The summoned creature appears in an unoccupied space within 60 feet of its\
      \ summoner, acts as an ally of its summoner, and can't summon other demons.\
      \ It remains for 10 minutes, until it or its summoner dies, or until its summoner\
      \ dismisses it as an action."
    "name": "Summon Servant (1/Day)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the drow matron mother can expend a use to take one of the following actions.\
  \ The drow matron mother regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "An allied demon within 30 feet of the drow uses its reaction to make\
      \ one attack against a target of the drow's choice that she can see."
    "name": "Compel Demon"
  - "desc": "The drow makes one Demon Staff attack."
    "name": "Demon Staff"
  - "desc": "The drow uses Spellcasting."
    "name": "Cast a Spell (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/humanoid/token/drow-matron-mother-mpmm.webp"
```
^statblock

## Environment

underdark