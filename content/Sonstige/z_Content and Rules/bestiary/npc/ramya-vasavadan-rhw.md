---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Ramya Vasavadan"
---
# [Ramya Vasavadan](Sonstige/z_Content%20and%20Rules/bestiary/npc/ramya-vasavadan-rhw.md)
*Source: RHW p. 116*  

Ramya Vasavadan desperately fights to claim and hold power over Kalakeri in a brutal cycle of victory and loss with her equally uncompromising siblings. Unlike most Darklords, Ramya struggles to control her domain, leading her to seek allies in opposing her siblings and their treacherous allies.

In her true form, Ramya is an undead horror, but illusions mask her monstrous appearance. Her true nature is revealed by her chilled skin and her reflection, which always appears withered and terrifying.

Although Ramya's siblings, Arijani and Reeva, aren't Darklords of Kalakeri, they motivate the rebellions in Kalakeri and Ramya's torments. This monstrous pair is detailed in " Arijani and Reeva."

```statblock
"name": "Ramya Vasavadan (RHW)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "190"
"hit_dice": "20d8 + 100"
"modifier": !!int "15"
"stats":
  - !!int "14"
  - !!int "20"
  - !!int "20"
  - !!int "12"
  - !!int "16"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "strength": !!int "7"
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Persuasion](Sonstige/z_Content%20and%20Rules/skills.md#Persuasion)"
    "desc": "+9"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 18"
"languages": "Abyssal, Common"
"cr": "15"
"traits":
  - "desc": "If Ramya dies, her body dissolves into mist, and she gains a new body\
      \ in 1d10 weeks, reviving with all her [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ somewhere in Kalakeri."
    "name": "Darklord Restoration"
  - "desc": "If Ramya fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
  - "desc": "Ramya has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "Undead creatures of Ramya's choice (excluding herself) in a 60-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from her have [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls and saving throws. She can't use this trait if she has the\
      \ [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Marshal Undead"
"actions":
  - "desc": "Ramya makes three Dread Blade attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 5 ft. *Hit:* 12 (2d6 + 5) Slashing\
      \ damage plus 9 (2d8) Necrotic damage."
    "name": "Dread Blade"
  - "desc": "*Dexterity Saving Throw:* DC 17, each creature in a 20-foot-radius [Sphere](Sonstige/z_Content%20and%20Rules/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point Ramya can see within 120 feet. *Failure:* 28 (8d6) Fire\
      \ damage plus 28 (8d6) Necrotic damage. *Success:* Half damage."
    "name": "Vengeful Fire (Recharge 5-6)"
  - "desc": "Ramya casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17):\n\n**At\
      \ will:** [Phantom Steed](Sonstige/z_Content%20and%20Rules/spells/phantom-steed-xphb.md)\n\
      \n**1/day:** [Create Undead](Sonstige/z_Content%20and%20Rules/spells/create-undead-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Ramya casts [Disguise Self](Sonstige/z_Content%20and%20Rules/spells/disguise-self-xphb.md)\
      \ using the same spellcasting ability as Spellcasting. The spell lasts until\
      \ Ramya drops to 80 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ or fewer or uses her Vengeful Fire action. Intelligence ([Investigation](Sonstige/z_Content%20and%20Rules/skills.md#Investigation))\
      \ checks to discern her true appearance are made with [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md).\n\
      \nWhen the disguise ends, each creature in a 30-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from Ramya is subjected to the following effect. Wisdom [Saving\
      \ Throw](Sonstige/z_Content%20and%20Rules/variant-rules/saving-throw-xphb.md):\
      \ DC 17 (the target succeeds automatically if it is a Construct or an Undead).\
      \ Failure: The target has the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition for 1 minute. While [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
      \ the target has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on saving throws.\n"
    "name": "Illusory Disguise"
"reactions":
  - "desc": "Trigger: Ramya is hit by a melee attack roll while holding a weapon.\
      \ _Response:_ Ramya adds 5 to her AC against that attack, possibly causing it\
      \ to miss."
    "name": "Parry"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Ramya can expend a use to take one of the following actions. Ramya regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Ramya moves up to half her [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ and makes one Dread Blade attack."
    "name": "Lunge"
  - "desc": "*Constitution Saving Throw:* DC 17, one creature Ramya can see within\
      \ 120 feet. *Failure:* 21 (6d6) Psychic damage, and the target is cursed until\
      \ the end of its next turn. Until the curse ends, the target can't speak or\
      \ cast spells with a Verbal component. *Success:* Half damage only."
    "name": "Words of Silence"
  - "desc": "Ramya casts [Command](Sonstige/z_Content%20and%20Rules/spells/command-xphb.md),\
      \ using the same spellcasting ability as Spellcasting. Ramya can't take this\
      \ action again until the start of her next turn.\n"
    "name": "Dread Authority"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/ramya-vasavadan-rhw.webp"
```
^statblock