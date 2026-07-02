---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Vampire Nosferatu"
---
# [Vampire Nosferatu](Sonstige/z_Content%20and%20Rules/bestiary/undead/vampire-nosferatu-rhw.md)
*Source: RHW p. 275*  

Nosferatu are vicious, feral hunters cursed with a primal offshoot of the curse of vampirism. These ravenous, graceless predators stalk the night, desperately seeking blood and barely remembered comforts of life.

Nosferatu feed on anything with blood. Heaps of mutilated rats, stables turned into slaughterhouses, and fields covered in massacred livestock might mark a nosferatu's presence. Nosferatu lurk in forgotten places scoured of the living, such as charnel caves, cursed ruins, and desecrated barrow mounds.

For a few moments after feeding, nosferatu become lucid enough to recollect glimpses of their past lives. Even in these instances, though, they remain duplicitous schemers.

## Vampires

*Monstrous Life Drinkers*

Horrific varieties of blood-drinking vampires spread their wickedness across the Domains of Dread.

```statblock
"name": "Vampire Nosferatu (RHW)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "85"
"hit_dice": "9d8 + 45"
"modifier": !!int "7"
"stats":
  - !!int "20"
  - !!int "18"
  - !!int "21"
  - !!int "6"
  - !!int "17"
  - !!int "14"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "8"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+10"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 16"
"languages": "Common plus one other language"
"cr": "8"
"traits":
  - "desc": "The nosferatu has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls against any creature that doesn't have all its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)."
    "name": "Blood Frenzy"
  - "desc": "The nosferatu regains 10 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ at the start of each of its turns if it has at least 1 [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md).\
      \ If the nosferatu takes Radiant damage, this trait doesn't function on the\
      \ nosferatu's next turn."
    "name": "Regeneration"
  - "desc": "The nosferatu can climb difficult surfaces, including along ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The nosferatu takes 20 Radiant damage if it starts its turn in sunlight.\
      \ While in sunlight, it has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls and ability checks."
    "name": "Sunlight Hypersensitivity"
"actions":
  - "desc": "The nosferatu makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 9 (1d8 + 5) Piercing\
      \ damage plus 11 (2d10) Necrotic damage. The target's [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the Necrotic damage taken, and the\
      \ nosferatu regains [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ equal to that amount."
    "name": "Bite"
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 9 (1d8 + 5) Slashing\
      \ damage."
    "name": "Claw"
  - "desc": "*Constitution Saving Throw:* DC 16, each creature in a 15-foot [Cone](Sonstige/z_Content%20and%20Rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 27 (6d8) Necrotic damage, and the creature can't regain [Hit\
      \ Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ for 1 minute. *Success:* Half damage only."
    "name": "Blood Spew (Recharge 5-6)"
"reactions":
  - "desc": "Trigger: A [Bloodied](Sonstige/z_Content%20and%20Rules/conditions.md#Bloodied)\
      \ creature the nosferatu can see within 40 feet takes damage. _Response:_ The\
      \ nosferatu moves up to its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ without provoking [Opportunity Attacks](Sonstige/z_Content%20and%20Rules/actions.md#Opportunity%20Attack)\
      \ and makes a Claw attack against the triggering creature."
    "name": "Bloodthirsty Slash"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/vampire-nosferatu-rhw.webp"
```
^statblock

## Environment

underdark, urban