---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Haunting Revenant"
---
# [Haunting Revenant](Sonstige/z_Content%20and%20Rules/bestiary/undead/haunting-revenant-xmm.md)
*Source: Monster Manual (2024) p. 260*  

Haunting revenants possess ruins and forsaken places connected with their deaths—such as abandoned buildings, wrecked ships, or junk heaps. These revenants lurk in plain sight, waiting for their foes to near, then trap their victims within their massive bodies. Those inside a revenant might be battered by animate furnishings or more unsettling manifestations of the revenant's hatred.

The places haunting revenants lurk swiftly gain infamous reputations.

## Revenants

*Vengeance from beyond the Grave*

- **Habitat.** Forest, Swamp, Urban  
- **Treasure.** Any  

Wrathful spirits bent on revenge, revenants possess corpses and other materials, using them to seek justice or vent their rage on those who wronged them. Revenants refuse to rest until those they seek to punish are no more. If their bodies are destroyed, revenants claim new forms and continue their ruthless quests.

```statblock
"name": "Haunting Revenant (XMM)"
"size": "Gargantuan"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "203"
"hit_dice": "14d20 + 56"
"modifier": !!int "5"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "18"
  - !!int "16"
  - !!int "18"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "constitution": !!int "8"
  - "wisdom": !!int "8"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled), [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed),\
  \ [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
  \ [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone), [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained),\
  \ [unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)"
"senses": "[Truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 60 ft.,\
  \ passive Perception 14"
"languages": "Common plus two other languages"
"cr": "10"
"traits":
  - "desc": "*Constitution Saving Throw:* DC 17, any creature that casts a spell while\
      \ inside the revenant's space. *Failure:* The spell fails and is wasted."
    "name": "Haunted Zone"
  - "desc": "If the revenant dies, it revives 24 hours later unless [Dispel Evil and\
      \ Good](Sonstige/z_Content%20and%20Rules/spells/dispel-evil-and-good-xphb.md)\
      \ is cast on its remains. If it revives, it animates another Gargantuan object\
      \ or structure elsewhere on the same plane of existence; it now looks different\
      \ but uses the same stat block and returns with all its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)."
    "name": "Undead Restoration"
"actions":
  - "desc": "The revenant makes two Object Slam attacks and uses Invitation."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +9 (with [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ if the target is inside the revenant's space), reach 10 ft. or range 30/90\
      \ ft. *Hit:* 27 (5d8 + 5) Bludgeoning damage."
    "name": "Object Slam"
  - "desc": "*Charisma Saving Throw:* DC 17, each creature in a 60-foot [Cone](Sonstige/z_Content%20and%20Rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* The target is teleported inside the revenant's space and swallowed.\
      \ A swallowed creature has [Total Cover](Sonstige/z_Content%20and%20Rules/variant-rules/cover-xphb.md)\
      \ against attacks and other effects outside the revenant.\n\nWhile the revenant\
      \ has [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ a swallowed creature can leave the revenant's space only by using magic that\
      \ enables planar travel, such as the [Plane Shift](Sonstige/z_Content%20and%20Rules/spells/plane-shift-xphb.md)\
      \ spell."
    "name": "Invitation"
"source":
  - "XMM"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/haunting-revenant-xmm.webp"
```
^statblock

## Environment

forest, swamp, urban