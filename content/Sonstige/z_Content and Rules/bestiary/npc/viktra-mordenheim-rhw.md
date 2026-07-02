---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Viktra Mordenheim"
---
# [Viktra Mordenheim](Sonstige/z_Content%20and%20Rules/bestiary/npc/viktra-mordenheim-rhw.md)
*Source: RHW p. 132*  

From her laboratory at Schloss Mordenheim, Dr. Viktra Mordenheim uses her scientific genius to create horrors and wonders. All manner of undead and constructs march from her laboratory, but such flawed creations don't satisfy Mordenheim. Rather, she seeks to re-create or reclaim her greatest creation, the Unbreakable Heart, a miraculous device that grants life to Mordenheim's elusive reanimated victim, Elise.

```statblock
"name": "Viktra Mordenheim (RHW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "123"
"hit_dice": "19d8 + 38"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "15"
  - !!int "21"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "constitution": !!int "5"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[Investigation](Sonstige/z_Content%20and%20Rules/skills.md#Investigation)"
    "desc": "+8"
  - "name": "[Medicine](Sonstige/z_Content%20and%20Rules/skills.md#Medicine)"
    "desc": "+6"
"gear":
  - "[studded leather armor](Sonstige/z_Content%20and%20Rules/items/studded-leather-armor-xphb.md)"
"senses": "passive Perception 10"
"languages": "Common, Draconic, Dwarvish, Elvish, Goblin, Halfling"
"cr": "7"
"traits":
  - "desc": "At the end of each of Viktra's turns, each of her Construct allies in\
      \ a 5-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from Viktra gains 5 [Temporary Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/temporary-hit-points-xphb.md).\
      \ This trait doesn't function if Viktra has the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Bolster Inventions"
  - "desc": "If Viktra dies, she revives with all her [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Lamordia."
    "name": "Darklord Restoration"
  - "desc": "If Viktra fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
"actions":
  - "desc": "Viktra makes two Lightning Rod attacks. She can replace one attack with\
      \ a use of Syringe."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 90 ft. *Hit:*\
      \ 12 (2d8 + 3) Lightning damage, and the target can't take Reactions until\
      \ the start of its next turn."
    "name": "Lightning Rod"
  - "desc": "*Constitution Saving Throw:* DC 16, one creature Viktra can see within\
      \ 5 feet. *Failure:* The target has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition for 1 minute. While [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ in this way, the target suffers one of the following effects (Viktra's choice).\
      \ The target repeats the save at the end of each of its turns, ending the effect\
      \ on itself on a success. The target succeeds automatically after 1 minute:\n\
      \n- **Corrosive Serum.** The target takes 10 (4d4) Acid damage at the start\
      \ of each of its turns, and its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ decreases by 10 feet.  \n- **Deadly Serum.** The target takes 11 (2d10)\
      \ Necrotic damage at the start of each of its turns, and it can't regain [Hit\
      \ Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md).\
      \  \n- **Mind-Altering Serum.** The target takes 10 (3d6) Psychic damage at\
      \ the start of each of its turns, and it has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on saving throws to maintain [Concentration](Sonstige/z_Content%20and%20Rules/conditions.md#Concentration).\
      \  "
    "name": "Syringe"
"bonus_actions":
  - "desc": "Viktra casts [Animate Objects](Sonstige/z_Content%20and%20Rules/spells/animate-objects-xphb.md),\
      \ using Intelligence as the spellcasting ability.\n"
    "name": "Activate Constructs (1/Day)"
"reactions":
  - "desc": "Trigger: A creature Viktra can see makes an attack roll against her.\
      \ _Response:_ Viktra chooses a Small or Medium ally within 5 feet of herself.\
      \ Viktra and that ally swap places, and the ally becomes the target of the attack\
      \ instead."
    "name": "Redirect Attack"
"regional_effects":
  - "desc": "Lamordia is altered by Viktra's presence, creating the following effects:\n\
      \n- **Air of Obsession.** When a creature fails a Constitution saving throw\
      \ to maintain [Concentration](Sonstige/z_Content%20and%20Rules/conditions.md#Concentration),\
      \ that creature takes 3 (1d6) Psychic damage.  \n- **Closing the Borders.**\
      \ While in her domain, Viktra can close or open the borders to Lamordia. While\
      \ the borders are closed, lightning storms roll through the Mists surrounding\
      \ Lamordia. A creature that enters the Mists for the first time on a turn or\
      \ starts its turn there makes a DC 15 Dexterity saving throw, taking 4d6 Lightning\
      \ damage on a failed save and half as much on a successful one. A creature makes\
      \ this save only once per turn.  \n\nIf Viktra dies, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Viktra can expend a use to take one of the following actions. Viktra regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Viktra moves up to half her [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ and makes one Lightning Rod attack. Viktra can't take this action again until\
      \ the start of her next turn."
    "name": "Shocking Prod"
  - "desc": "*Dexterity Saving Throw:* DC 16, each creature in a 10-foot-radius [Sphere](Sonstige/z_Content%20and%20Rules/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point Viktra can see within 90 feet. *Failure:* 5 (2d4) Lightning\
      \ damage. *Success:* Half damage."
    "name": "Static Explosion"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/viktra-mordenheim-rhw.webp"
```
^statblock