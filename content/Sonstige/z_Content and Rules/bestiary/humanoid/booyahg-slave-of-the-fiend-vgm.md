---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/vgm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Booyahg Slave of the Fiend"
---
# [Booyahg Slave of the Fiend](Sonstige/z_Content%20and%20Rules/bestiary/humanoid/booyahg-slave-of-the-fiend-vgm.md)
*Source: Volo's Guide to Monsters p. 42*  

This goblin warlock serves a patron who can extract payment in flesh if the goblin doesn't do as promised. Often this patron is a coven of hags serving as the tribe's boss, a fiend that has made its way into the world, or an undying lord such as a lich or a vampire. (For more information on undying lord patrons, see the "Sword Coast Adventurer's Guide").

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

```statblock
"name": "Booyahg Slave of the Fiend (VGM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Sonstige/z_Content%20and%20Rules/spells/mage-armor-xphb.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "15"
  - !!int "12"
  - !!int "12"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "4"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)"
    "desc": "+7"
  - "name": "[Persuasion](Sonstige/z_Content%20and%20Rules/skills.md#Persuasion)"
    "desc": "+7"
  - "name": "[Religion](Sonstige/z_Content%20and%20Rules/skills.md#Religion)"
    "desc": "+4"
"damage_resistances": "slashing from nonmagical attacks not made with silvered weapons"
"gear":
  - "[mace](Sonstige/z_Content%20and%20Rules/items/mace-xphb.md)"
"senses": "[darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., [darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60 ft.,\
  \ passive Perception 11"
"languages": "any two languages (usually Abyssal or Infernal), Goblin"
"cr": "7"
"traits":
  - "desc": "The goblin is a 17th-level spellcaster. Its spellcasting ability is Charisma\
      \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended\
      \ spell slots when it finishes a short or long rest. It knows the following\
      \ warlock spells:\n\n**Cantrips (at will):** [eldritch blast](Sonstige/z_Content%20and%20Rules/spells/eldritch-blast-xphb.md),\
      \ [fire bolt](Sonstige/z_Content%20and%20Rules/spells/fire-bolt-xphb.md), [friends](Sonstige/z_Content%20and%20Rules/spells/friends-xphb.md),\
      \ [mage hand](Sonstige/z_Content%20and%20Rules/spells/mage-hand-xphb.md), [minor\
      \ illusion](Sonstige/z_Content%20and%20Rules/spells/minor-illusion-xphb.md),\
      \ [prestidigitation](Sonstige/z_Content%20and%20Rules/spells/prestidigitation-xphb.md),\
      \ [shocking grasp](Sonstige/z_Content%20and%20Rules/spells/shocking-grasp-xphb.md)\n\
      \n**1st-5th level (4 slots):** [banishment](Sonstige/z_Content%20and%20Rules/spells/banishment-xphb.md),\
      \ [burning hands](Sonstige/z_Content%20and%20Rules/spells/burning-hands-xphb.md),\
      \ [flame strike](Sonstige/z_Content%20and%20Rules/spells/flame-strike-xphb.md),\
      \ [hellish rebuke](Sonstige/z_Content%20and%20Rules/spells/hellish-rebuke-xphb.md),\
      \ [magic circle](Sonstige/z_Content%20and%20Rules/spells/magic-circle-xphb.md),\
      \ [scorching ray](Sonstige/z_Content%20and%20Rules/spells/scorching-ray-xphb.md),\
      \ [scrying](Sonstige/z_Content%20and%20Rules/spells/scrying-xphb.md), [stinking\
      \ cloud](Sonstige/z_Content%20and%20Rules/spells/stinking-cloud-xphb.md), [suggestion](Sonstige/z_Content%20and%20Rules/spells/suggestion-xphb.md),\
      \ [wall of fire](Sonstige/z_Content%20and%20Rules/spells/wall-of-fire-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The goblin's innate spellcasting ability is Charisma. It can innately\
      \ cast the following spells (spell save DC 15), requiring no material components:\n\
      \n**At will:** [alter self](Sonstige/z_Content%20and%20Rules/spells/alter-self-xphb.md),\
      \ [false life](Sonstige/z_Content%20and%20Rules/spells/false-life-xphb.md),\
      \ [levitate](Sonstige/z_Content%20and%20Rules/spells/levitate-xphb.md) (self\
      \ only), [mage armor](Sonstige/z_Content%20and%20Rules/spells/mage-armor-xphb.md)\
      \ (self only), [silent image](Sonstige/z_Content%20and%20Rules/spells/silent-image-xphb.md)\n\
      \n**1/day each:** [feeblemind](Sonstige/z_Content%20and%20Rules/spells/befuddlement-xphb.md),\
      \ [finger of death](Sonstige/z_Content%20and%20Rules/spells/finger-of-death-xphb.md),\
      \ [plane shift](Sonstige/z_Content%20and%20Rules/spells/plane-shift-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "When the goblin makes an ability check or saving throw, it can add a\
      \ d10 to the roll. It can do this after the roll is made but before any of\
      \ the roll's effects occur."
    "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
  - "desc": "The goblin"
    "name": "Nimble Escape"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3\
      \ (1d6) bludgeoning damage plus 10 (3d6) fire damage."
    "name": "Mace"
"source":
  - "VGM"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/humanoid/token/booyahg-slave-of-the-fiend-vgm.webp"
```
^statblock