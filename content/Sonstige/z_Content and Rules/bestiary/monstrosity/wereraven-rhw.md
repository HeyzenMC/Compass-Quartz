---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Wereraven"
---
# [Wereraven](Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/wereraven-rhw.md)
*Source: RHW p. 280*  

*Ominous Shape-Shifter*

Wereravens are secretive, cautious lycanthropes that seek to blend into society and subtly combat evil. To avoid the claws of the wicked forces that oppose them, and to protect those they hold dear, wereravens hide their identities and rarely reveal their hybrid forms. Nevertheless, folktales persist of eerie, raven-winged figures who appear prior to disasters, share mysterious prophecies, and aid hapless victims. Such stories are true in a way, as evil hunts wereravens wherever they go.

Because evil frequently travels in packs, wereravens flock together to battle such threats. They congregate in hard-to-reach aeries within or just outside urban settlements, such as atop bell towers, lighthouses, or ancient trees. Wereraven groups tend to be loosely organized, since members understand the importance of anonymity.

The Keepers of the Feather) is one example of a secret society of evil-opposing wereravens.

```statblock
"name": "Wereraven (RHW)"
"size": "Small or Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "54"
"hit_dice": "12d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "11"
  - !!int "13"
  - !!int "15"
  - !!int "14"
"speed": "30 ft., fly 50 ft. (raven or hybrid form only)"
"skillsaves":
  - "name": "[Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)"
    "desc": "+4"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+6"
"gear":
  - "[shortbow](Sonstige/z_Content%20and%20Rules/items/shortbow-xphb.md)"
"senses": "passive Perception 16"
"languages": "Common plus one other language"
"cr": "2"
"traits":
  - "desc": "The wereraven can mimic voices and animal sounds. A creature that hears\
      \ this mimicry can tell it is an imitation only with a successful DC 12 Wisdom\
      \ ([Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)) check."
    "name": "Mimicry"
"actions":
  - "desc": "The wereraven makes two attacks, using Scratch or Shortbow in any combination.\
      \ It can replace one attack with a Beak attack."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 11 (2d8 + 2) Piercing\
      \ damage. If the target is a Humanoid, it is subjected to the following effect.\
      \ *Constitution Saving Throw:* DC 10. *Failure:* The target is cursed. If the\
      \ cursed target drops to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ it instead becomes a Wereraven under the DM's control and has 10 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* The target is immune to this wereraven's curse for 24 hours."
    "name": "Beak (Raven or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 7 (2d4 + 2) Slashing\
      \ damage."
    "name": "Scratch"
  - "desc": "*Ranged Attack Roll:* +4, range 80/320 ft. *Hit:* 9 (2d6 + 2) Piercing\
      \ damage."
    "name": "Shortbow (Humanoid or Hybrid Form Only)"
"bonus_actions":
  - "desc": "The wereraven shape-shifts into a Medium raven-humanoid hybrid or a Small\
      \ raven, or it returns to its true humanoid form. Its game statistics, other\
      \ than its size, are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed."
    "name": "Shape-Shift"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/token/wereraven-rhw.webp"
```
^statblock

## Environment

forest, urban