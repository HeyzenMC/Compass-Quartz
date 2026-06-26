---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Yuan-ti Anathema"
---
# [Yuan-ti Anathema](Sonstige/z_Content%20&%20Rules/bestiary/monstrosity/yuan-ti-anathema-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 272, Volo's Guide to Monsters p. 202*  

As part of their quest for godhood, a yuan-ti abomination might perform a ritual that, if successful, transforms them into an even greater form: a yuan-ti anathema. This ritual demands the sacrifice of hundreds of snakes and requires the abomination to bathe in the blood of their enemies. The transformation is quick but painful.

Anathemas consider themselves demigods on the path to greater divinity. They demand obeisance from weaker creatures and use every resource at their disposal to war against neighbors, seeking the captives, sacrifices, glory, and riches the anathemas believe they need to achieve true divinity.

Anathemas don't age, allowing them to pursue their goals until the end of days. Truly powerful ones might rule multiple yuan-ti cities and bring entire regions under their control.

```statblock
"name": "Yuan-ti Anathema (MPMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d12 + 72"
"modifier": !!int "1"
"stats":
  - !!int "23"
  - !!int "13"
  - !!int "19"
  - !!int "19"
  - !!int "17"
  - !!int "20"
"speed": "40 ft., climb 40 ft., swim 40 ft."
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20&%20Rules/skills.md#Perception)"
    "desc": "+11"
  - "name": "[Stealth](Sonstige/z_Content%20&%20Rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "acid, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Sonstige/z_Content%20&%20Rules/conditions.md#Poisoned)"
"senses": "[blindsight](Sonstige/z_Content%20&%20Rules/senses.md#Blindsight) 30 ft.,\
  \ [darkvision](Sonstige/z_Content%20&%20Rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 21"
"languages": "Abyssal, Common, Draconic"
"cr": "12"
"traits":
  - "desc": "The anathema has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "Any creature of the anathema's choice, other than a snake or a yuan-ti,\
      \ that starts its turn within 30 feet of the anathema must succeed on a DC 17\
      \ Wisdom saving throw or become [frightened](Sonstige/z_Content%20&%20Rules/conditions.md#Frightened)\
      \ of snakes and yuan-ti. A [frightened](Sonstige/z_Content%20&%20Rules/conditions.md#Frightened)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. If a target's saving throw is successful\
      \ or the effect ends for it, the target is immune to this anathema's aura for\
      \ the next 24 hours."
    "name": "Ophidiophobia Aura"
  - "desc": "The anathema has advantage on saves against being [blinded](Sonstige/z_Content%20&%20Rules/conditions.md#Blinded),\
      \ [charmed](Sonstige/z_Content%20&%20Rules/conditions.md#Charmed), [deafened](Sonstige/z_Content%20&%20Rules/conditions.md#Deafened),\
      \ [frightened](Sonstige/z_Content%20&%20Rules/conditions.md#Frightened), [stunned](Sonstige/z_Content%20&%20Rules/conditions.md#Stunned),\
      \ or knocked [unconscious](Sonstige/z_Content%20&%20Rules/conditions.md#Unconscious)."
    "name": "Six Heads"
"actions":
  - "desc": "The anathema makes two Claw attacks and one Flurry of Bites attack."
    "name": "Multiattack (Anathema Form Only)"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 13 (2d6 + 6) slashing damage."
    "name": "Claw (Anathema Form Only)"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one creature. *Hit:*\
      \ 27 (6d6 + 6) piercing damage plus 14 (4d6) poison damage."
    "name": "Flurry of Bites (Anathema Form Only)"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 15 ft., one Large or smaller\
      \ creature. *Hit:* 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage,\
      \ and the target is [grappled](Sonstige/z_Content%20&%20Rules/conditions.md#Grappled)\
      \ (escape DC 16). Until this grapple ends, the target is [restrained](Sonstige/z_Content%20&%20Rules/conditions.md#Restrained),\
      \ and it takes 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage\
      \ at the start of each of its turns. The anathema can constrict only one creature\
      \ at a time."
    "name": "Constrict (Snake Form Only)"
  - "desc": "The anathema casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 17):\n\
      \n**At will:** [animal friendship](Sonstige/z_Content%20&%20Rules/spells/animal-friendship-xphb.md)\
      \ (snakes only)\n\n**3/day each:** [darkness](Sonstige/z_Content%20&%20Rules/spells/darkness-xphb.md),\
      \ [entangle](Sonstige/z_Content%20&%20Rules/spells/entangle-xphb.md), [fear](Sonstige/z_Content%20&%20Rules/spells/fear-xphb.md),\
      \ [polymorph](Sonstige/z_Content%20&%20Rules/spells/polymorph-xphb.md), [suggestion](Sonstige/z_Content%20&%20Rules/spells/suggestion-xphb.md)"
    "name": "Spellcasting (Anathema Form Only)"
"bonus_actions":
  - "desc": "The anathema transforms into a Huge constrictor snake or back into its\
      \ true form. Its statistics are the same in each form. Any equipment it is wearing\
      \ or carrying isn't transformed."
    "name": "Change Shape"
"source":
  - "MPMM"
  - "VGM"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/monstrosity/token/yuan-ti-anathema-mpmm.webp"
```
^statblock

## Environment

desert, forest, underdark