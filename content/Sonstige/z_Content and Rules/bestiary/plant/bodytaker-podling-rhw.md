---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Bodytaker Podling"
---
# [Bodytaker Podling](Sonstige/z_Content%20and%20Rules/bestiary/plant/bodytaker-podling-rhw.md)
*Source: RHW p. 236*  

A bodytaker podling is a near-perfect replica of a creature consumed by a bodytaker plant. A podling possesses the appearance and memories of the being it duplicates, but it is entirely loyal to the bodytaker plant that created it. Fundamentally, a podling isn't its own creature but an expendable appendage of a bodytaker plant.

Bodytaker podlings frequently exhibit behaviors that suggest their true nature. Most often, they miss the nuances of social interactions. Some might talk in a stilted, jerky cadence or refer to themselves in the third person. Close friends and family members of those replaced by a podling might realize that their loved one has changed, but few imagine the cause behind such a dramatic shift. A podling might try to avoid suspicion by claiming to be ill or redirect doubt by insisting others are behaving oddly. If confronted with evidence of its plant nature, or if caught tending to a bodytaker plant, the podling throws itself into battle and fights to the death.

Roll on or choose a result from the Podling Behaviors table to inspire the unusual habits a podling might demonstrate.

| dice: 1d6 | The Podling Exhibits the Strange Habit of... |
|-----------|----------------------------------------------|
| 1 | Drinking water from dirty troughs. |
| 2 | Eating one type of food for all meals. |
| 3 | Excessive and unabashed sunbathing. |
| 4 | Forgoing shoes to feel the dirt. |
| 5 | Pausing and listening to unheard sounds. |
| 6 | Whispering to flowers and houseplants. |
^1-the-podling-exhibits-the-strange-habit-of

## Bodytaker Plants

*Body-Snatching Alien Flora*

Bodytaker plants are intelligent organisms that originated on a long-ruined planet of the Material Plane. To outlive their doomed world, these enigmatic plants spread their seeds to the stars. In rare cases, their meteorite-like seeds fall to fertile worlds and take root. What emerges is a new bodytaker plant that seeks to grow and propagate until its kind dominates the entire world. As assistants, the plant creates eerie vegetative duplicates of the world's inhabitants called bodytaker podlings. Podlings serve the bodytaker plants' will, infiltrating societies and replacing the individuals they resemble. Ultimately, podlings seek to isolate inhabitants so they can become fertilizer for the bodytaker plant that created them or fodder for more podlings.

```statblock
"name": "Bodytaker Podling (RHW)"
"size": "Small or Medium"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "11"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)"
    "desc": "+4"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"senses": "[Blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 30\
  \ ft., passive Perception 10"
"languages": "Deep Speech plus one other language"
"cr": "1/2"
"traits":
  - "desc": "The podling is a physical copy of a creature digested by a Bodytaker\
      \ Plant. The podling has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on Charisma ([Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception))\
      \ checks made to pass as the digested creature. The podling melts into a slurry\
      \ when it dies."
    "name": "Semblance of Life"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Bludgeoning\
      \ damage."
    "name": "Slam"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/plant/token/bodytaker-podling-rhw.webp"
```
^statblock

## Environment

forest, grassland, hill, swamp