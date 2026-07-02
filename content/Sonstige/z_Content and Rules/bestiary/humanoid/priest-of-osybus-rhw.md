---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Priest of Osybus"
---
# [Priest of Osybus](Sonstige/z_Content%20and%20Rules/bestiary/humanoid/priest-of-osybus-rhw.md)
*Source: RHW p. 261*  

*Necromancer Cursed by Dark Powers*

The priests of Osybus are evil necromancers who steal souls to fuel their malevolent magic. Thanks to a foul bargain made with dread powers, these priests can defy death by transforming into undead.

Centuries ago, Osybus, a mysterious figure of immense ambition and evil, founded the order of priests that now bears his name. Osybus sought to use others' souls to achieve immortality. He forged pacts with any entity that promised him more power, and he delved into any eldritch secret that could possibly prolong his life. He became a devotee of the Dark Powers and tapped into their immortal malice to fuel his apotheosis. As his power grew, he shared his secrets with disciples who wished to defy death in exchange for their worship.

Osybus achieved his goal and became a lich of almost godly power. He rewarded his disciples with a trace of his power in the form of shadowy tattoos. Osybus's boon gave his priests the ability to steal souls and to cheat death by transforming into undead horrors.

The threat posed by Osybus and his disciples raised alarms far and wide. The Ulmist Inquisition—which at the time counted then-mortal Count Strahd von Zarovich as an ally—faced Osybus in battle. Fearing that their master eventually would consume their souls, Osybus's disciples aided the inquisition by destroying Osybus's physical form. As Osybus perished, he cursed his former allies: Their immortality would fail them eventually, and he would become one of the Dark Powers.

To rid themselves of this curse, Osybus's former devotees turned to the same Dark Powers with whom their master had communed. They received a mission: Provide a mighty noble to serve as an earthly vessel for the Dark Powers to enter the world and conquer it. They found a suitable vessel in Strahd von Zarovich. Working in shadows and through intermediaries, the priests whispered hatred to the count. Once the priests corrupted Strahd's heart, they laid the path before him that led to his fall into vampirism.

But Osybus hadn't lied; he became one of the Dark Powers. Those powers conjured a misty prison to contain the newly immortal Strahd, thereby stymieing the priests' ambitions to use the count as a weapon of conquest.

The priests of Osybus still seek to unleash Strahd from the Mists, often using adventurers as pawns. They continue to bear their hated founder's name, for they know it is his original gift that gives them their horrific powers.

```statblock
"name": "Priest of Osybus (RHW)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "16"
  - !!int "18"
  - !!int "17"
  - !!int "11"
"speed": "20 ft., climb 20 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "3"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 13"
"languages": "Common plus two other languages"
"cr": "6"
"traits":
  - "desc": "If damage reduces the priest to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ it receives a random boon. Roll 1d6 to determine the boon the priest receives.\
      \ The priest revives at the start of its next turn with half its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ and its creature type is now Undead."
    "name": "Tattoo of Osybus"
  - "desc": "An aura of dread fills a 15-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the priest. *Wisdom Saving Throw:* DC 15, each non-Undead\
      \ creature that starts its turn in the [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md).\
      \ *Failure:* The target has the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition until the start of its next turn"
    "name": "1: Dread Boon"
  - "desc": "Sticky ectoplasm slows creatures in a 15-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the priest. *Strength Saving Throw:* DC 15, each creature\
      \ that starts its turn in the [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md).\
      \ *Failure:* The target's [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ is reduced by 10 feet until the start of its next turn."
    "name": "2: Ectoplasmic Boon"
  - "desc": "When the priest deals Necrotic damage to a creature, the priest gains\
      \ [Temporary Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/temporary-hit-points-xphb.md)\
      \ equal to the damage dealt."
    "name": "3: Vampiric Boon"
  - "desc": "The priest has a [Fly Speed](Sonstige/z_Content%20and%20Rules/variant-rules/fly-speed-xphb.md)\
      \ of 30 feet and [Immunity](Sonstige/z_Content%20and%20Rules/variant-rules/immunity-xphb.md)\
      \ to Fire damage."
    "name": "4: Blazing Boon"
  - "desc": "The priest has [Resistance](Sonstige/z_Content%20and%20Rules/variant-rules/resistance-xphb.md)\
      \ to Bludgeoning, Piercing, and Slashing damage, and it has [Vulnerability](Sonstige/z_Content%20and%20Rules/variant-rules/vulnerability-xphb.md)\
      \ to Radiant damage. Additionally, the priest can move through other creatures\
      \ and objects as if they were [Difficult Terrain](Sonstige/z_Content%20and%20Rules/variant-rules/difficult-terrain-xphb.md).\
      \ It takes 5 (1d10) Force damage if it ends its turn inside an object."
    "name": "5: Spectral Boon"
  - "desc": "When the priest revives with this boon, all corpses of Small or Medium\
      \ Humanoids in a 30-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the priest rise as Skeletons under the priest's control.\
      \ Additionally, at the end of each of the priest's turns, each non-Undead creature\
      \ in a 5-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the priest takes 5 (1d10) Necrotic damage.\n\nThe priest\
      \ dies and this trait doesn't function if the priest receives a boon it already\
      \ has or the priest's tattoo of Osybus is destroyed. The tattoo is destroyed\
      \ only if the priest takes 15 damage or more on a single turn while the priest\
      \ has 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)."
    "name": "6: Deathly Boon"
"actions":
  - "desc": "The priest makes two attacks, using Soul Blade or Necrotic Bolt in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +7, reach 5 ft. *Hit:* 9 (2d4 + 4) Piercing\
      \ damage. If the target is a creature, it has the [Paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed)\
      \ condition until the start of the priest's next turn. If this damage reduces\
      \ a Medium or smaller creature to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ the creature dies, and its soul becomes trapped in a soul tattoo on the priest's\
      \ body. The soul is freed if the priest dies."
    "name": "Soul Blade"
  - "desc": "*Ranged Attack Roll:* +7, range 120 ft. *Hit:* 30 (4d12 + 4) Necrotic\
      \ damage, and the target can't regain [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ until the start of the priest's next turn."
    "name": "Necrotic Bolt"
"bonus_actions":
  - "desc": "The priest magically animates a soul tattoo on its body that becomes\
      \ a Shadow in an unoccupied space within 5 feet of the priest. The shadow takes\
      \ its turn immediately after the priest on the same [Initiative](Sonstige/z_Content%20and%20Rules/variant-rules/initiative-xphb.md)\
      \ count, and it obeys the priest. The shadow remains animate until it is destroyed,\
      \ it is more than 120 feet from the priest, the priest dies, or the priest uses\
      \ this [Bonus Action](Sonstige/z_Content%20and%20Rules/variant-rules/bonus-action-xphb.md)\
      \ again."
    "name": "Soul Tattoo (Recharge 5-6)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/humanoid/token/priest-of-osybus-rhw.webp"
```
^statblock

## Environment

any