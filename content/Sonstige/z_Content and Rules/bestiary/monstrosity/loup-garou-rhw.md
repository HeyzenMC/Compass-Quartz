---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Loup Garou"
---
# [Loup Garou](Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/loup-garou-rhw.md)
*Source: RHW p. 252*  

*Legendary Lycanthrope*

Loup garou are powerful lycanthropes capable of transforming into hulking dire wolves. They actively seek to spread the curse of lycanthropy, creating packs of subservient werewolves that can reduce communities to ruins and ravage whole regions. The strain of lycanthropy spread by a loup garou is harder to cure than typical varieties. Only slaying a loup garou can free the monster's victims from their affliction.

```statblock
"name": "Loup Garou (RHW)"
"size": "Small or Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "187"
"hit_dice": "22d8 + 88"
"modifier": !!int "9"
"stats":
  - !!int "24"
  - !!int "18"
  - !!int "21"
  - !!int "14"
  - !!int "16"
  - !!int "16"
"speed": "30 ft., 40 ft. (hybrid form only), 50 ft. (dire wolf form only)"
"saves":
  - "dexterity": !!int "9"
  - "constitution": !!int "10"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+9"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"gear":
  - "[longsword](Sonstige/z_Content%20and%20Rules/items/longsword-xphb.md)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 18"
"languages": "Common (can't speak in dire wolf form)"
"cr": "13"
"traits":
  - "desc": "If the loup garou fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "The loup garou makes two attacks, using Longsword or Rend in any combination.\
      \ It can replace one attack with a Bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +12, reach 5 ft. *Hit:* 16 (2d8 + 7) Piercing\
      \ damage plus 14 (4d6) Necrotic damage. If the target is a Humanoid, it is\
      \ subjected to the following effect. *Constitution Saving Throw:* DC 18. *Failure:*\
      \ The target is cursed. If the cursed target drops to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ it instead becomes a Werewolf under the DM's control and has 10 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md).\
      \ The curse can't be removed until this loup garou dies. *Success:* The target\
      \ is immune to this loup garou's curse for 24 hours."
    "name": "Bite (Dire Wolf or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +12, reach 5 ft. *Hit:* 18 (2d10 + 7) Slashing\
      \ damage plus 3 (1d6) Necrotic damage."
    "name": "Longsword (Humanoid or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +12, reach 5 ft. *Hit:* 16 (2d8 + 7) Slashing\
      \ damage. If the target is a Medium or smaller creature, it has the [Prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone)\
      \ condition."
    "name": "Rend (Dire Wolf or Hybrid Form Only)"
"bonus_actions":
  - "desc": "The loup garou shape-shifts into a Large dire wolf-humanoid hybrid or\
      \ a Large dire wolf, or it returns to its true humanoid form. Its game statistics,\
      \ other than its size, are the same in each form. Any equipment it is wearing\
      \ or carrying isn't transformed."
    "name": "Shape-Shift"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the loup garou can expend a use to take one of the following actions. The\
  \ loup garou regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The loup garou moves up to half its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ without provoking [Opportunity Attacks](Sonstige/z_Content%20and%20Rules/actions.md#Opportunity%20Attack)\
      \ and makes one Longsword or Rend attack."
    "name": "Mauling Charge"
  - "desc": "The loup garou uses Shape-Shift, turning into its hybrid or dire wolf\
      \ form, then makes one Bite attack. The loup garou can't take this action again\
      \ until the start of its next turn."
    "name": "Surprise Bite"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/token/loup-garou-rhw.webp"
```
^statblock

## Environment

forest, swamp, urban