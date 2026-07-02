---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Bodytaker Plant"
---
# [Bodytaker Plant](Sonstige/z_Content%20and%20Rules/bestiary/plant/bodytaker-plant-rhw.md)
*Source: RHW p. 237*  

A bodytaker plant uses its powerful vines to capture victims or accept captives brought to it by podling servants. The plant drags prey into an attached pod where the captive is dissolved over the course of hours. After the process is complete, a duplicate of the captive emerges as a subservient podling. Nothing of the original creature remains, though its noncompostable gear might be recovered after the bodytaker plant is slain.

A bodytaker plant's podlings are extensions of the plant's will, and the plant has no qualms about sacrificing podlings or using them as shields in battle. While bodytaker plants can communicate telepathically, most do so only in desperate cases, preferring to speak through their podlings—potentially speaking through several at once.

A bodytaker plant grows where its seed fell from space, or it might later have its podlings relocate it to a hidden sanctuary. Roll on or choose a result from the Bodytaker Plant Sanctuary table to inspire where such a plant might grow.

| dice: 1d4 | The Bodytaker Plant Grows In... |
|-----------|---------------------------------|
| 1 | A building converted into a greenhouse. |
| 2 | A hidden caldera or cenote. |
| 3 | An overgrown circle of standing stones. |
| 4 | The sanctuary of a ruined cathedral. |
^1-the-bodytaker-plant-grows-in

## Bodytaker Plants

*Body-Snatching Alien Flora*

Bodytaker plants are intelligent organisms that originated on a long-ruined planet of the Material Plane. To outlive their doomed world, these enigmatic plants spread their seeds to the stars. In rare cases, their meteorite-like seeds fall to fertile worlds and take root. What emerges is a new bodytaker plant that seeks to grow and propagate until its kind dominates the entire world. As assistants, the plant creates eerie vegetative duplicates of the world's inhabitants called bodytaker podlings. Podlings serve the bodytaker plants' will, infiltrating societies and replacing the individuals they resemble. Ultimately, podlings seek to isolate inhabitants so they can become fertilizer for the bodytaker plant that created them or fodder for more podlings.

```statblock
"name": "Bodytaker Plant (RHW)"
"size": "Huge"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "20"
  - !!int "14"
  - !!int "14"
  - !!int "18"
"speed": "10 ft., climb 10 ft., swim 10 ft."
"damage_vulnerabilities": "poison"
"condition_immunities": "[blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded),\
  \ [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed), [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened), [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone)"
"senses": "[Blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 120\
  \ ft., passive Perception 12"
"languages": "telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "The plant can see through and communicate telepathically with any of\
      \ its podlings within 10 miles of it. When the plant dies, its podlings also\
      \ die."
    "name": "Podling Link"
  - "desc": "If the plant dies, it revives with all its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 days. This trait doesn't function if the plant is reduced to 0 [Hit\
      \ Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ by Poison damage or its remains are sprinkled with salt."
    "name": "Rejuvenation"
"actions":
  - "desc": "The plant makes three Vine attacks. It can replace one attack with a\
      \ use of Entrapping Pod."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 20 ft. *Hit:* 17 (3d8 + 4) Slashing\
      \ damage. If the target is a Large or smaller creature, it has the [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ condition (escape DC 14) from one of four vines."
    "name": "Vine"
  - "desc": "*Strength Saving Throw:* DC 15, one Large or smaller creature the plant\
      \ is grappling. *Failure:* The target is pulled into the plant's space, is no\
      \ longer [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled),\
      \ and is trapped in the plant's pod. While trapped, the target has the [Blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded)\
      \ and [Paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed)\
      \ conditions, and it has [Total Cover](Sonstige/z_Content%20and%20Rules/variant-rules/cover-xphb.md)\
      \ against attacks and other effects outside the pod. After 2d4 hours, the\
      \ trapped target dies, and if it was a Humanoid, a Bodytaker Podling resembling\
      \ it emerges from the pod.\n\nA creature outside the pod and within 5 feet of\
      \ the plant can take an action to make a DC 14 Strength ([Athletics](Sonstige/z_Content%20and%20Rules/skills.md#Athletics))\
      \ check. On a successful check, the target is removed from the pod, falls in\
      \ a space within 5 feet of the plant, and has the [Prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone)\
      \ condition. If the plant dies, the trapped target is no longer [Blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded)\
      \ or [Paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed) and\
      \ can escape from the pod using 5 feet of movement, exiting [Prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone)."
    "name": "Entrapping Pod"
"reactions":
  - "desc": "Trigger: An attack roll hits the plant while a podling is within 5 feet\
      \ of the plant. _Response:_ The plant halves the damage it takes from that attack,\
      \ and the podling takes the other half of the damage."
    "name": "Transfer Harm"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/plant/token/bodytaker-plant-rhw.webp"
```
^statblock

## Environment

forest, grassland, hill, swamp