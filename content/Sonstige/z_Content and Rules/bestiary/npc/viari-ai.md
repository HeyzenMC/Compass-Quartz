---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ai
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Viari"
---
# [Viari](Sonstige/z_Content%20and%20Rules/bestiary/npc/viari-ai.md)
*Source: Acquisitions Incorporated p. 198*  

> [!quote]  
> 
> I know a story about that...

A product of life on a small-town farm, the rogue known as Viari carries fond memories of those childhood days and his loving family. (Well, except for that thing where his parents insist on thinking of his older brother as the successful one.) But he can be quick to show self-consciousness when talking of where he came from, and he never speaks of the name he bore in that former life After quickly rising in the ranks of Acquisitions Incorporated since joining that august team, Viari has come to head what's known as the organization's Stabbing Department. A potent threat in both dueling and earnest debate, he demonstrates an equal flair for planning and forethought, mad combat moves (involving leaping off high places whenever possible), and dark vengeance.

Viari's career as an adventurer was nearly cut short during a battle of which the bards still sing. Unleashing a devastating attack with the aptly named Apocalypse Dagger, the rogue destroyed a giant single-handedly—and lost his arm in the process. Although Viari was made bodily whole again in an equally dramatic magical fashion, some of those closest to him have noticed that those miraculous events weigh on him still, perhaps suggesting consequences that only he foresees.

```statblock
"name": "Viari (AI)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Good"
"ac": !!int "18"
"ac_class": "[+1 studded leather](Sonstige/z_Content%20and%20Rules/items/1-armor-xdmg.md);\
  \ 19 while wielding two melee weapons"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "5"
"stats":
  - !!int "12"
  - !!int "20"
  - !!int "14"
  - !!int "10"
  - !!int "8"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "intelligence": !!int "3"
"skillsaves":
  - "name": "[Acrobatics](Sonstige/z_Content%20and%20Rules/skills.md#Acrobatics)"
    "desc": "+11"
  - "name": "[Athletics](Sonstige/z_Content%20and%20Rules/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Performance](Sonstige/z_Content%20and%20Rules/skills.md#Performance)"
    "desc": "+5"
  - "name": "[Persuasion](Sonstige/z_Content%20and%20Rules/skills.md#Persuasion)"
    "desc": "+5"
  - "name": "[Sleight of Hand](Sonstige/z_Content%20and%20Rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+11"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+8"
"gear":
  - "[+1 shortsword](Sonstige/z_Content%20and%20Rules/items/1-weapon-xdmg.md)"
  - "[dagger](Sonstige/z_Content%20and%20Rules/items/dagger-xphb.md)"
  - "[rapier](Sonstige/z_Content%20and%20Rules/items/rapier-xphb.md)"
"senses": "passive Perception 15"
"languages": "Common, Draconic, Thieves' cant"
"cr": "5"
"traits":
  - "desc": "If Viari is subjected to an effect that allows him to make a Dexterity\
      \ saving throw to take only half damage, he instead takes no damage if he succeeds\
      \ on the saving throw, and only half damage if he fails. He can't use this trait\
      \ if he's [incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)."
    "name": "Evasion"
  - "desc": "Climbing does not cost Viari extra movement. Additionally, when he makes\
      \ a running jump, the distance he covers increases by 5 feet."
    "name": "Second-Story Work"
  - "desc": "Viari deals an extra 14 (4d6) damage when he hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of Viari that isn't [incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ and Viari doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "Viari makes two attacks with his shortsword and two attacks with his\
      \ rapier."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (1d6 + 6) piercing damage."
    "name": "+1 Shortsword"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (1d8 + 5) piercing damage."
    "name": "Rapier"
  - "desc": "*Melee  or Ranged Weapon Attack:* +8 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 7 (1d4 + 5) piercing damage."
    "name": "Dagger"
"reactions":
  - "desc": "Viari halves the damage that he takes from an attack that hits him. He\
      \ must be able to see the attacker."
    "name": "Uncanny Dodge"
"source":
  - "AI"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/viari-ai.webp"
```
^statblock