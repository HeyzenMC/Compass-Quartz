---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Geryon"
---
# [Geryon](Sonstige/z_Content%20and%20Rules/bestiary/npc/geryon-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 136, Mordenkainen's Tome of Foes p. 173*  

Geryon is locked in an endless struggle with Levistus for control of Stygia. The two have fought for centuries, each displacing the other innumerable times. Currently, Levistus claims lordship over Stygia, but he has been trapped in an enormous block of ice at the command of Asmodeus. In response, Geryon is marshaling his followers, hoping to use this opportunity to replace his hated rival.

Among the archdevils, Geryon is known for his martial prowess. He is a ferocious hunter and a relentless tracker. He often joins his troops in battle; he loves to feel flesh and steel sundered beneath his claws and to taste his foes' blood. Yet Geryon's ferocity has also limited his ability to collect souls and forge an effective hierarchy. Sages who study the Nine Hells believe the battle for control of Stygia is a test staged by Asmodeus in hopes of purging the worst impulses from both Geryon and Levistus—or discovering a competent replacement for both.

## Cultists of Geryon

> [!note]
> See the Cult of Geryon entry.

## Geryon's Lair

Geryon has recently reclaimed his ancient fortress, Coldsteel, a sprawling complex that rises from the icy center of Stygia. He roams the passages, spitting oaths of vengeance against Asmodeus and hatching schemes to reclaim his standing from Levistus. The challenge rating of Geryon is 23 (50,000 XP) when he's encountered in his lair.

```statblock
"name": "Geryon (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "300"
"hit_dice": "24d12 + 144"
"modifier": !!int "3"
"stats":
  - !!int "29"
  - !!int "17"
  - !!int "22"
  - !!int "19"
  - !!int "16"
  - !!int "23"
"speed": "30 ft., fly 50 ft."
"saves":
  - "dexterity": !!int "10"
  - "constitution": !!int "13"
  - "wisdom": !!int "10"
  - "charisma": !!int "13"
"skillsaves":
  - "name": "[Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)"
    "desc": "+13"
  - "name": "[Intimidation](Sonstige/z_Content%20and%20Rules/skills.md#Intimidation)"
    "desc": "+13"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+10"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 120 ft.,\
  \ passive Perception 20"
"languages": "all, telepathy 120 ft."
"cr": "22"
"traits":
  - "desc": "If Geryon fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Geryon has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Geryon regains 20 hit points at the start of his turn. If he takes radiant\
      \ damage, this trait doesn't function at the start of his next turn. Geryon\
      \ dies only if he starts his turn with 0 hit points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "Geryon makes one Claw attack and one Stinger attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +16 to hit, reach 15 ft., one target. *Hit:*\
      \ 23 (4d6 + 9) cold damage. If the target is Large or smaller, it is [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ (DC 24), and it is [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ until the grapple ends. Geryon can grapple one creature at a time. If the\
      \ target is already [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ by Geryon, the target takes an extra 27 (6d8) cold damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +16 to hit, reach 20 ft., one creature. *Hit:*\
      \ 14 (2d4 + 9) force damage, and the target must succeed on a DC 21 Constitution\
      \ saving throw or take 13 (2d12) poison damage and become [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ until it finishes a short or long rest. The target's hit point maximum is\
      \ reduced by an amount equal to half the poison damage taken. This reduction\
      \ lasts until the [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition is removed. The target dies if its hit point maximum is reduced\
      \ to 0."
    "name": "Stinger"
  - "desc": "Geryon teleports, along with any equipment he is wearing and carrying,\
      \ up to 120 feet to an unoccupied space he can see."
    "name": "Teleport"
  - "desc": "Geryon casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 21):\n\n**At\
      \ will:** [alter self](Sonstige/z_Content%20and%20Rules/spells/alter-self-xphb.md)\
      \ (can become Medium when changing his appearance), [detect magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md),\
      \ [ice storm](Sonstige/z_Content%20and%20Rules/spells/ice-storm-xphb.md), [invisibility](Sonstige/z_Content%20and%20Rules/spells/invisibility-xphb.md)\
      \ (self only), [locate object](Sonstige/z_Content%20and%20Rules/spells/locate-object-xphb.md),\
      \ [suggestion](Sonstige/z_Content%20and%20Rules/spells/suggestion-xphb.md),\
      \ [wall of ice](Sonstige/z_Content%20and%20Rules/spells/wall-of-ice-xphb.md)\n\
      \n**1/day:** [banishment](Sonstige/z_Content%20and%20Rules/spells/banishment-xphb.md)"
    "name": "Spellcasting"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Geryon can expend a use to take one of the following actions. Geryon regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Geryon targets one creature he can see within 60 feet of him. The target\
      \ must succeed on a DC 23 Wisdom saving throw or become [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ of Geryon until the end of its next turn."
    "name": "Infernal Glare"
  - "desc": "Geryon uses Teleport."
    "name": "Teleport"
  - "desc": "Geryon makes one Stinger attack."
    "name": "Swift Sting (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/geryon-mpmm.webp"
```
^statblock