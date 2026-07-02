---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Carrion Stalker"
---
# [Carrion Stalker](Sonstige/z_Content%20and%20Rules/bestiary/aberration/carrion-stalker-rhw.md)
*Source: RHW p. 240*  

*Gut-Bursting Corpse Eater*

Carrion stalkers are parasites that feed on corpses, infesting bodies with their maggot-like young. While stalkers can survive off corpses, they're attracted to movement and ambush any who disturb them. The foul parasites attach to their prey, using their stingers to implant their larvae into living victims. If a carrion stalker doesn't slay and consume its foe, its larvae grow rapidly within that creature. After a day of gestation, a larva bursts from its host as a mature carrion stalker in an eruption as horrifying as it is lethal.

Carrion stalkers have symbiotic relationships with carrion crawlers. Carrion crawlers won't devour bodies infested by carrion stalkers, but they might pick up stalker larvae as they root among filth. The crawlers then spread these young, infecting sewers or graveyards with carrion stalkers. In return, carrion stalkers avoid preying on carrion crawlers.

Battlefields, mass graves, and similar sites make natural homes for carrion stalkers. While corpses left by plagues or wars might coax carrion stalkers into streets or alleys, these vile parasites rarely creep onto the surface unless they become an overwhelming infestation.

```statblock
"name": "Carrion Stalker (RHW)"
"size": "Tiny"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "55"
"hit_dice": "10d4 + 30"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "17"
  - !!int "16"
  - !!int "2"
  - !!int "13"
  - !!int "6"
"speed": "30 ft., burrow 30 ft."
"senses": "Tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"actions":
  - "desc": "The carrion stalker makes two Tentacle attacks and one Stinger attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 8 (2d4 + 3) Piercing\
      \ damage, and the carrion stalker attaches to the target. While attached, the\
      \ carrion stalker can't make Tentacle attacks against other targets.\n\nThe\
      \ carrion stalker can detach itself by spending 5 feet of movement. The target\
      \ or a creature within 5 feet of it can detach the carrion stalker as an action."
    "name": "Tentacle"
  - "desc": "*Melee Attack Roll:* +5 (with [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ if the carrion stalker is attached to the target), reach 5 ft. *Hit:* 7 (2d6)\
      \ Poison damage, and the target is subjected to the following effect. *Constitution\
      \ Saving Throw:* DC 13. *Failure:* The target has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition. While [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ in this way, the target is infested with a carrion stalker larva. If the target\
      \ is still [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ in this way after 24 hours, the effect ends as the larva becomes a fully grown\
      \ Carrion Stalker, which bursts from the target's chest and kills it."
    "name": "Stinger"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/aberration/token/carrion-stalker-rhw.webp"
```
^statblock

## Environment

swamp, underdark, urban