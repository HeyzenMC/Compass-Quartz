---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Reanimated Companion"
---
# [Reanimated Companion](Sonstige/z_Content%20and%20Rules/bestiary/undead/reanimated-companion-rhw.md)
*Source: RHW*  

```statblock
"name": "Reanimated Companion (RHW)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac_class": "10 plus your Intelligence modifier"
"modifier": !!int "0"
"stats":
  - !!int "11"
  - !!int "10"
  - !!int "16"
  - !!int "4"
  - !!int "10"
  - !!int "6"
"speed": "30 ft."
"damage_resistances": "necrotic, poison"
"damage_immunities": "lightning"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 60\
  \ ft., passive Perception 10"
"languages": "understands the languages you know"
"traits":
  - "desc": "The companion explodes when it dies. *Dexterity Saving Throw:* DC equals\
      \ your spell save DC, each creature in a 10-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the companion. *Failure:* 2d4 Necrotic damage. *Success:*\
      \ Half damage."
    "name": "Death Burst"
  - "desc": "Whenever the companion is subjected to Lightning damage, it regains a\
      \ number of [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ equal to the Lightning damage dealt."
    "name": "Lightning Absorption"
"actions":
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d4 plus your Intelligence modifier Necrotic damage, and the\
      \ target can't take [Opportunity Attacks](Sonstige/z_Content%20and%20Rules/actions.md#Opportunity%20Attack)\
      \ until the start of its next turn."
    "name": "Dreadful Swipe"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/reanimated-companion-rhw.webp"
```
^statblock