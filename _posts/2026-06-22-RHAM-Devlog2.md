---
title: Rhamnusia | Devlog 2
date: 2026-06-22 
categories: [Current Projects, Rhamnusia]
tags: [gamedev, unity, csharp]
description: Remaking combat and enemy AI systems
media_subpath: /assets/img/projects/rhamnusia/
image: rhamEnemyAI.png
---

## Overview

Last devlog, I rebuilt my movement system. This devlog focuses on the same but for my combat and enemy systems.

*More images TBA*

## Player Combat Logic

A lot of the combat design carried over from my old project, so this was less about inventing new mechanics and more about porting the parts that worked and cutting  the parts that didn't. Attacks, dodges, blocks, and parries each become a state that slots into the **Focus** side of the player's state hierarchy.

### Improved Hitbox Logic

My Attacks are data-driven. Each one is an *AttackData* scriptable object that describes its animation, damage, hitbox shape, and timing. The animation clip itself driving everything through events. 

What's new in this version is how the system decides what a hit does. As before it relied on a singleton that simply subtracted health, now it just asks the target, "you got hit, what happens?". The target then resovles it and hands back the result, with the attacker reacting to whatever is received. This small change makes it much more streamlined, as my old code relied on special-casing on the attacker's side quite a lot.

### Attacks and Combos

My old project was capable of storing and handling attack chains, but it was fixed in that once an attack in a chain was performed, even if you waited an hour, the next chain attack would be performed rather than beginning with the first again. This has been fixed and streamlined such that each attack animation has it's combo window marked with animation events, allowing smooth chaining between attacks. 

### Blocking, Parrying, and Dodging

The block and parry systems were mostly copy-pasted from my old code but with the major improvement of directional detection. In my old project, the player could block attacks to their back, but now that I have implemented a raycast this is no longer possible. The system remains the same in that both parrying and blocking come out of a single guard input. Holding it raises your guard, and the opening moments of that animation contain the parry window, if an attack is landed during it the damage is entirely negated and the opponent is staggered. If not, the enemy can continue their chain and the player takes a portion of that landed attack's damage as chip damage.

Dodging, however, is new. It's a quick dash from any direction with i-frames controlled via animation events as well.

## Enemy Combat Logic

Now that I felt good in the player's side of things, enemies were the next focus. I built them with their own finite state machine as well, the same layout but with different states such as: chasing, attacking, staggered, and dying. Movement runs using Unity's AI NavMesh systems, and most importantly, enemies reuse the exact same hitbox and attack data the player does. I see this as extremely useful down the line if I want to mimic the player's combat style in any way.

### Improving Enemy Player Detection

![Enemy AI Demo](rhamEnemyAIDemo.gif){: width="600" height="600" }
_Basic human enemy patrolling between 2 points_

My old detection system functioned off a single raycast and distance change, while it worked, it was seriously rudimentary and unintuitive. As it being a single line meaning that the player could be in what should be the enemy's field of view but isn't detected at all until they cross that single raycast. The alternative I added was a vision cone, with the player needing to be in that cone's arc and in clear line of sight before it reacts.

While it detection checks every frame, I've made sure to make it as efficient as possible. As before the raycast even starts it ensures the player is within the detection range using a squared-distance comparison first, then a dot-product test for the cone angle. I've made a note to test the performance more in=depth later however, as I have heard that enemy detection can be rather pricey with many enemies in the scene.

## What's Next

Now that I feel the core gameplay is solid, I think it would be best to shift my focus towards the art direction side of game development. I can't rely on free models forever, and to really make this feel unique and not just a tech demo I feel it's imperative to start making my own art.