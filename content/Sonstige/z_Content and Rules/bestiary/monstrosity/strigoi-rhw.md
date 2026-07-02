---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Strigoi"
---
# [Strigoi](Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/strigoi-rhw.md)
*Source: RHW p. 270*  

*Magically Mutated Bloodsucker*

Strigoi are vampire-like beings that resemble half-humanoid, half-stirge terrors. By night, these bloodthirsty predators seek humanoids to feed on, draining victims and leaving behind bloodless corpses. Stirges and mosquitoes follow these repulsive monsters in their hunts.

```statblock
"name": "Strigoi (RHW)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "11"
  - !!int "17"
  - !!int "10"
"speed": "30 ft., fly 40 ft."
"saves":
  - "strength": !!int "5"
  - "dexterity": !!int "4"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "necrotic"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 15"
"languages": "Common"
"cr": "4"
"traits":
  - "desc": "The strigoi can magically control stirges within 120 feet of itself using\
      \ a special telepathy."
    "name": "Stirge Telepathy"
"actions":
  - "desc": "The strigoi makes two Claw attacks and one Proboscis attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 10 (2d6 + 3) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 5 (1d4 + 3) Piercing\
      \ damage plus 7 (2d6) Necrotic damage. The target's [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the Necrotic damage taken, and the\
      \ strigoi regains [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ equal to that amount. A creature reduced to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ by this attack dies, leaving behind nothing except its skin and equipment."
    "name": "Proboscis"
"bonus_actions":
  - "desc": "The strigoi summons a swarm of bloodthirsty mosquitoes in a 10-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from itself, which lasts for 1 minute or until the strigoi's [Concentration](Sonstige/z_Content%20and%20Rules/conditions.md#Concentration)\
      \ on it ends. Whenever the swarm enters a creature's space or a creature enters\
      \ the swarm or ends its turn there, that creature is subjected to the following\
      \ effect (a creature makes this save only once per turn, and strigoi and stirges\
      \ are unaffected). *Constitution Saving Throw:* DC 13. *Failure:* 3 (1d6)\
      \ Necrotic damage, and the target has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition until the end of its next turn."
    "name": "Protective Swarm (Recharge 6)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/token/strigoi-rhw.webp"
```
^statblock

## Environment

desert, forest, grassland, hill, mountain, swamp, underdark, urban