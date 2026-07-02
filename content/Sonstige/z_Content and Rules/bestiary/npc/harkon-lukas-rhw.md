---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Harkon Lukas"
---
# [Harkon Lukas](Sonstige/z_Content%20and%20Rules/bestiary/npc/harkon-lukas-rhw.md)
*Source: RHW p. 124*  

The charming werewolf Harkon Lukas manipulates those around him to satisfy his narcissistic needs for adulation and control. Endlessly seeking fame, Harkon travels widely, earning applause and accolades. Yet, whenever he returns to a town he's performed in, he finds he's been forgotten. Lukas believes he needs just the right song or inspiration to make himself unforgettable. To that end, he searches for talented protégés, cultivating their skills, then stealing their work. He ensures their loyalty by gifting them copies of his cursed wolf-tooth necklace, Harkon's Bite, or by transforming them into werewolves. He then manipulates these victims into believing only he will accept them.

Harkon wears a signature wide-brimmed hat and wolf-tooth necklace, and he carries a violin he calls Bleeding Heart. He uses flattery to charm those he takes an interest in. A skilled artist who declines the offer to become his protégé often earns his obsession. The Darklord might go to any extreme to claim such performers' talents as his own.

```statblock
"name": "Harkon Lukas (RHW)"
"size": "Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "187"
"hit_dice": "22d8 + 88"
"modifier": !!int "14"
"stats":
  - !!int "21"
  - !!int "18"
  - !!int "19"
  - !!int "14"
  - !!int "16"
  - !!int "19"
"speed": "30 ft., 40 ft. (hybrid form only), 50 ft. (dire wolf form only)"
"saves":
  - "constitution": !!int "9"
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Performance](Sonstige/z_Content%20and%20Rules/skills.md#Performance)"
    "desc": "+9"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+9"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"gear":
  - "[viol](Sonstige/z_Content%20and%20Rules/items/viol-xphb.md)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 18"
"languages": "Common (can't speak in dire wolf form)"
"cr": "14"
"traits":
  - "desc": "Harkon has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on attack rolls against any creature that doesn't have all its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)."
    "name": "Blood Frenzy"
  - "desc": "If Harkon dies, he revives with all his [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 weeks somewhere in Kartakass."
    "name": "Darklord Restoration"
  - "desc": "If Harkon fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Domain)"
  - "desc": "Harkon gains 10 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ at the start of each of its turns if he has at least 1 [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md).\
      \ If Harkon takes Radiant damage, this trait doesn't function at the start of\
      \ its next turn."
    "name": "Regeneration"
"actions":
  - "desc": "Harkon makes two Swipe attacks. He can replace one attack with (A) Bite\
      \ or (B) Enthralling Performance."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 5 ft. *Hit:* 14 (2d8 + 5) Piercing\
      \ damage plus 14 (4d6) Necrotic damage. If the target is a Humanoid, it is\
      \ subjected to the following effect: *Constitution Saving Throw:* DC 17. *Failure:*\
      \ The target is cursed. If the cursed target drops to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ it instead becomes a Werewolf under the DM's control and has 50 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md).\
      \ The curse can't be removed until Harkon dies. *Success:* The target is immune\
      \ to Harkon's curse for 24 hours."
    "name": "Bite (Dire Wolf or Hybrid Form Only)"
  - "desc": "*Melee Attack Roll:* +10, reach 5 ft. *Hit:* 16 (2d10 + 5) Slashing\
      \ damage. If the target is a Medium or smaller creature, it has the [Prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone)\
      \ condition."
    "name": "Swipe (Dire Wolf or Hybrid Form Only)"
  - "desc": "*Wisdom Saving Throw:* DC 17, each creature in a 30-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from Harkon. *Failure:* The target has the [Charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ condition for 1 hour or until it takes damage."
    "name": "Enthralling Performance (Humanoid Form Only)"
"bonus_actions":
  - "desc": "Harkon shape-shifts into a Large dire wolf-humanoid hybrid or a Large\
      \ dire wolf, or he returns to his true humanoid form. His game statistics, other\
      \ than his size, are the same in each form. Any equipment he is wearing or carrying\
      \ isn't transformed."
    "name": "Shape-Shift"
"regional_effects":
  - "desc": "Kartakass is altered by Harkon's presence, creating the following effects:\n\
      \n- **Beast Spies.** From dawn until dusk, Tiny Beasts in the domain magically\
      \ gain the ability to understand Common and can communicate telepathically with\
      \ other Beasts and Monstrosities.  \n- **Children of the Night.** Harkon exerts\
      \ influence over the animals of his domain. From dusk until dawn, Medium or\
      \ smaller Beasts within 1 miles of Harkon have the [Charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ condition. If Harkon pleases, these animals become [Hostile](Sonstige/z_Content%20and%20Rules/variant-rules/hostile-attitude-xphb.md)\
      \ to creatures other than Harkon and his allies.  \n- **Closing the Borders.**\
      \ While in his domain, Harkon can close or open the borders to Kartakass at\
      \ will. While the borders are closed, a strange melody fills the Mists surrounding\
      \ Kartakass. A creature that enters the Mists for the first time on a turn or\
      \ starts its turn in them must succeed on a DC 15 Wisdom saving throw, or it\
      \ has the [Unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)\
      \ condition for 1d6 hours, then awakes within sight of the town of Harmonia\
      \ in Kartakass. A creature makes this save only once per turn.  \n\nIf Harkon\
      \ dies, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Harkon can expend a use to take one of the following actions. Harkon regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Harkon uses Shape-Shift to return to his humanoid form, then uses the\
      \ following effect. *Wisdom Saving Throw:* DC 17, each creature of Harkon's\
      \ choice that he can see within 30 feet of himself (creatures [Charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ by Harkon automatically fail this save). *Failure:* 16 (3d10) Psychic damage.\
      \ *Failure or Success:* Harkon can't take this action again until the start\
      \ of his next turn."
    "name": "Crushing Insult"
  - "desc": "Harkon moves up to half his [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ and makes one Swipe attack."
    "name": "Pounce"
  - "desc": "Harkon uses Shape-Shift to turn into his hybrid or dire wolf form and\
      \ then makes one Bite attack. Harkon can't take this action again until the\
      \ start of his next turn."
    "name": "Surprise Bite"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/harkon-lukas-rhw.webp"
```
^statblock