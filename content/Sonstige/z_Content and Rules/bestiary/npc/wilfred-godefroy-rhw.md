---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Wilfred Godefroy"
---
# [Wilfred Godefroy](Sonstige/z_Content%20and%20Rules/bestiary/npc/wilfred-godefroy-rhw.md)
*Source: RHW p. 142*  

Lord Wilfred Godefroy rules the afterlife of all who die in Mordent. Arrogant, impatient, and vengeful, the Darklord seeks any opportunity to exert his control and reinforce his undying noble standing.

Lord Godefroy haunts the House on Gryphon Hill, along with countless other spirits. Wilfred can send mobs of obedient spirits to do his will anywhere in the domain. He uses his control over the dead to influence the living, threatening to harm his victims' dead loved ones if they don't obey his fickle commands.

A generation ago, the creators of the mist-piercing device called the Apparatus vanished from Mordent. Lord Godefroy has discovered the hidden machine, but, to his frustration, lacks a way to use it.

```statblock
"name": "Wilfred Godefroy (RHW)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "72"
"hit_dice": "16d8"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "10"
  - !!int "13"
  - !!int "14"
  - !!int "17"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  - "name": "[Intimidation](Sonstige/z_Content%20and%20Rules/skills.md#Intimidation)"
    "desc": "+6"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "acid, bludgeoning, cold, fire, lightning, piercing, slashing,\
  \ thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled),\
  \ [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed), [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned), [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone),\
  \ [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained), [unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)"
"gear":
  - "[hunting rifle](Sonstige/z_Content%20and%20Rules/items/hunting-rifle-xdmg.md)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 15"
"languages": "Common"
"cr": "6"
"traits":
  - "desc": "If Wilfred dies, he revives with all his [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Mordent."
    "name": "Darklord Restoration"
  - "desc": "Wilfred can move through other creatures and objects as if they were\
      \ [Difficult Terrain](Sonstige/z_Content%20and%20Rules/variant-rules/difficult-terrain-xphb.md).\
      \ He takes 5 (1d10) Force damage if he ends his turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "If Wilfred fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
  - "desc": "Grasping, ghostly servants surround Wilfred in a 5-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from him. A creature that ends its turn in this area is subjected\
      \ to the following effect. *Charisma Saving Throw:* DC 14. *Failure:* The target\
      \ has the [Charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ condition. While the creature is [Charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ in this way, its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ is reduced to 0. The target repeats the save at the end of each of its turns,\
      \ ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Possessive Aura"
"actions":
  - "desc": "Wilfred makes two attacks, using [Object](Sonstige/z_Content%20and%20Rules/variant-rules/object-xphb.md)\
      \ Slam or Hunting Rifle in any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 10 (2d6 + 3) Force damage."
    "name": "Object Slam"
  - "desc": "*Ranged Attack Roll:* +6, range 40/120 ft. *Hit:* 9 (1d12 + 3) Necrotic\
      \ damage."
    "name": "Hunting Rifle"
"reactions":
  - "desc": "Trigger: A creature Wilfred can see makes an attack roll against him.\
      \ _Response:_ Wilfred chooses a Small or Medium creature within 5 feet of himself\
      \ that has the [Charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ condition. Wilfred and that creature swap places, and the creature becomes\
      \ the target of the attack instead."
    "name": "Redirect Attack"
"regional_effects":
  - "desc": "Mordent is altered by Lord Godefroy's presence, creating the following\
      \ effects:\n\n- **Closing the Borders.** While in his domain, Lord Godefroy\
      \ can close or open the borders to Mordent. While the borders are closed, the\
      \ groans and whispers of the dead fill the Mists surrounding Mordent. Creatures\
      \ in the Mists have the [Deafened](Sonstige/z_Content%20and%20Rules/conditions.md#Deafened)\
      \ condition.  \n- **Ears Everywhere.** While in his domain, Lord Godefroy can\
      \ cast [Sending](Sonstige/z_Content%20and%20Rules/spells/sending-xphb.md), requiring\
      \ no Material components and using Charisma as the spellcasting ability. When\
      \ casting the spell in this way, Lord Godefroy can target any Undead creature\
      \ in Mordent, in addition to the usual targets.  \n- **Spectral Serfs.** A Humanoid\
      \ that dies in Mordent rises 7 days later as a [Specter](Sonstige/z_Content%20and%20Rules/bestiary/undead/specter-xmm.md)\
      \ under Lord Godefroy's control, unless the Humanoid is restored to life.  \n\
      \nIf Wilfred dies, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Wilfred can expend a use to take one of the following actions. Wilfred regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Wilfred teleports up to 60 feet to an unoccupied space he can see, and\
      \ each creature within 10 feet of the space he left takes 4 (1d8) Necrotic\
      \ damage. Wilfred can't take this action again until the start of his next turn."
    "name": "Bone-Chilling Step"
  - "desc": "*Dexterity Saving Throw:* DC 14, one creature Wilfred can see within\
      \ 120 feet. *Failure:* 16 (2d12 + 3) Necrotic damage, and the target can't\
      \ regain [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ until the start of its next turn. *Failure or Success:* Wilfred can't take\
      \ this action again until the start of his next turn."
    "name": "Fated Bullet"
  - "desc": "Wilfred makes one [Object](Sonstige/z_Content%20and%20Rules/variant-rules/object-xphb.md)\
      \ Slam attack."
    "name": "Slam"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/wilfred-godefroy-rhw.webp"
```
^statblock