---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Vampire Mind Flayer"
---
# [Vampire Mind Flayer](Sonstige/z_Content%20and%20Rules/bestiary/undead/vampire-mind-flayer-rhw.md)
*Source: RHW p. 276*  

Vampire mind flayers originate from the alien domain of Bluetspur (see " Other Domains of Dread "). In seeking a cure for their degenerating elder brain, the illithids of that realm tried radical experiments. The results were mind flayer tadpoles infected with vampirism. These terrors developed into mature mind flayers capable of harvesting psychic sustenance from sapient minds. After feeding on psionic energies, vampire mind flayers return to Bluetspur and are reabsorbed by the elder brain, releasing stolen psionic essences amid a hormone brine.

Vampire mind flayers are bestial creatures that lack control over their psychic abilities. Rather than focused mind blasts, they unleash waves of nauseating, mentally disruptive sensations. They use their viciously barbed tentacles to drain their victims' mental energy. Mind flayers loathe vampire mind flayers and view them as abominations. Nevertheless, they employ their warped brethren in desperate pursuits, such as preserving the elder brain of Bluetspur.

## Vampires

*Monstrous Life Drinkers*

Horrific varieties of blood-drinking vampires spread their wickedness across the Domains of Dread.

```statblock
"name": "Vampire Mind Flayer (RHW)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "5"
  - !!int "15"
  - !!int "18"
"speed": "30 ft., climb 30 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "5"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 15"
"languages": "understands Deep Speech but can't speak"
"cr": "5"
"traits":
  - "desc": "The mind flayer can climb difficult surfaces, including along ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The mind flayer takes 20 Radiant damage if it starts its turn in sunlight.\
      \ While in sunlight, it has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls and ability checks."
    "name": "Sunlight Hypersensitivity"
"actions":
  - "desc": "The mind flayer makes two Claw attacks, or one Claw attack and one Tentacles\
      \ attack, and uses Mind Burst if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 8 (1d8 + 4) Slashing\
      \ damage plus 10 (3d6) Necrotic damage."
    "name": "Claw"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 11 (2d6 + 4) Piercing\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ condition (escape DC 14)."
    "name": "Tentacles"
  - "desc": "*Wisdom Saving Throw:* DC 15, one creature the mind flayer has [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled).\
      \ *Failure:* 21 (6d6) Psychic damage, and the creature gains 1 [Exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion)\
      \ level. The target's [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the Psychic damage taken, and the\
      \ mind flayer regains [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ equal to that amount."
    "name": "Drink Sapience"
  - "desc": "*Intelligence Saving Throw:* DC 15, each creature in a 30-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the mind flayer. *Failure:* The target has the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Mind Burst (Recharge 5-6)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/vampire-mind-flayer-rhw.webp"
```
^statblock

## Environment

underdark, urban