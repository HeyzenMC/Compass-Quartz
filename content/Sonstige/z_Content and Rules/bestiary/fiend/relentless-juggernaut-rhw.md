---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Relentless Juggernaut"
---
# [Relentless Juggernaut](Sonstige/z_Content%20and%20Rules/bestiary/fiend/relentless-juggernaut-rhw.md)
*Source: RHW p. 263*  

Relentless juggernauts are massive brutes that ceaselessly stalk their targets. These juggernauts wield specially crafted blades and blunt stones as implements of obliteration.

## Relentless Killers

*Pact-Bound Murderers*

Relentless killers are fiend-twisted maniacs that arise from mortals who make pacts with nefarious forces. Such killers' powers vary depending on their obsessions and the source of their powers.

```statblock
"name": "Relentless Juggernaut (RHW)"
"size": "Large"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "168"
"hit_dice": "16d10 + 80"
"modifier": !!int "1"
"stats":
  - !!int "22"
  - !!int "12"
  - !!int "20"
  - !!int "8"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 12"
"languages": "understands all but can't speak"
"cr": "12"
"traits":
  - "desc": "If the juggernaut fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The juggernaut regains 10 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ at the start of each of its turns. If the juggernaut takes Radiant damage\
      \ or damage from a [Critical Hit](Sonstige/z_Content%20and%20Rules/variant-rules/critical-hit-xphb.md),\
      \ this trait doesn't function on the juggernaut's next turn. The juggernaut\
      \ dies only if it starts its turn with 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "The juggernaut deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The juggernaut makes two attacks, using Executioner's Blade or Crushing\
      \ Stone in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 10 ft. *Hit:* 19 (3d8 + 6) Slashing\
      \ damage, and the target's [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ is reduced by 10 feet until the end of the juggernaut's next turn."
    "name": "Executioner's Blade"
  - "desc": "*Ranged Attack Roll:* +10, range 60 ft. *Hit:* 13 (2d6 + 6) Bludgeoning\
      \ damage, and the target has the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition until the start of the juggernaut's next turn."
    "name": "Crushing Stone"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the relentless juggernaut can expend a use to take one of the following\
  \ actions. The relentless juggernaut regains all expended uses at the start of each\
  \ of its turns."
"legendary_actions":
  - "desc": "The juggernaut moves up to half its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md),\
      \ ignoring [Difficult Terrain](Sonstige/z_Content%20and%20Rules/variant-rules/difficult-terrain-xphb.md).\
      \ Each creature in its path is subjected to the following effect. *Strength\
      \ Saving Throw:* DC 18. *Failure:* 7 (2d6) Bludgeoning damage, and the target\
      \ has the [Prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone) condition.\
      \ *Failure or Success:* The juggernaut can't take this action again until the\
      \ start of its next turn."
    "name": "Implacable Advance"
  - "desc": "*Dexterity Saving Throw:* DC 18, each creature in a 15-foot [Cone](Sonstige/z_Content%20and%20Rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 11 (1d10 + 6) Slashing damage, and the target is pulled up to\
      \ 10 feet straight toward the juggernaut."
    "name": "Sweeping Blade"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/fiend/token/relentless-juggernaut-rhw.webp"
```
^statblock

## Environment

any