---
title: Rhamnusia | Devlog 1
date: 2026-06-15 
categories: [Current Projects, Rhamnusia]
tags: [gamedev, unity, csharp]
description: Refactoring old code, developing advanced movement systems
media_subpath: /assets/img/projects/rhamnusia/
image: rhamNewMovement.png
---

## Overview

This first devlog covers the beginning of my game's rewrite.

## Refactoring Old Code

### Player State Machine

The core of this rewrite is my new hierarchy state machine. My old setup had grown into a sprawl of various states with hack-y transitions across all of them. This greatly prevented the overall design I wanted to shift my project towards, as I wanted two main player states: traversal and focus. The former was the unequipped/sheathed state that allowed more dynamic movement and environment interactivity, this being based on games like Monster Hunter and Dragon's Dogma. The latter being the equipped/unsheathed state, that enabled combat with a 3rd person shoulder camera and lock-on system to keep the player's enemies in view at all times.

## Advanced Movement Systems

This time around, I really wanted to expand upon my basic movement systems. I want the player to be able to move around the environments with greater freedom. 

### Wallrunning

![Wallrun Demo Gif](rhamWallRunDemo.gif){: width="600" height="600" }
_Wallrun Demo_

When the player is airborne and moving alongisde a near-vertical wall, a sideways raycast picks it up and drops them into a wall-run. From there the state takes over the player's motion through that raw movement path, projecting their velocity along the wall's tanget and applying gentler gravity to allow the player to move a long it, and adds a little inward force to keep the player pinned against the surface of the wall. A subtle camera roll kicks in as well to signify the player's wall-running state. Optionally, the player can jump off the wall and carry momentum forward.

![Darksider's 2 Reference Gif](rhamWallRunReference.gif){: width="600" height="600" }
_Darksiders 2's wallrunning system served as inspiration_

It also tracks which side the wall is on and feeds that to the player's animator, so left and right wall-runs can play their corresponding animations.

### Ledge Grabbing/Mantling

Ledge grabbing comes down to two raycasts working together, with one firing forward to find a valid wall in front of the player, and another downwards just past its top edge to confirm there's actually a standable surface within reach. If both are valid, then the player snaps into a hang.

![Ledge Grab/Mantle Demo Gif](rhamLedgeGrabMantleDemo.gif){: width="600" height="600" }
_Ledge Grab/Mantle Demo_

From there, the player can push up to a mantle where the model climbs up and over onto the ledge along a scripted path, or drop back off into the air. The system still needs a little improvement however, as the player's model doesn't seem to perfectly grab the ledge visually.

### Walljumping

Walljumping was the last mechanic I built for this new advanced movement system. Jumping into a wall perpendicularly and inputting another jump while in contact, kicks the player off it for a burst of vertical height. It'

![Walljump Demo Gif](rhamWalljumpDemo.gif){: width="600" height="600" }
_Walljump Demo_

All these systems tie in together nicely, and will absolutely be played around when I get to creating environments.

## What's Next

To continue on this refactoring, the next system I immediately want to tackle is my old combat mechanics and enemy AI. The traversal side feels good, I now want the combat to match it by porting over parts of my old systems that worked, and cleaning up what didn't.