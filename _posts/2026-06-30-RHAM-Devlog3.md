---
title: Rhamnusia | Devlog 3
date: 2026-06-30 
categories: [Current Projects, Rhamnusia]
tags: [gamedev, unity, csharp, blender]
description: Diving into the art side of game development
media_subpath: /assets/img/projects/rhamnusia/
image: devlog3/rhamPlayerModelV1.png
---

## Overview

I've always been more of a technical person, leaving the art stuff to my older brother who was more into that sort of thing. However, to really start taking this solo project seriously I know I have to deviate away from free art assets and begin developing my own.

## My 3D Male Basemodel

The first step to really personalizing my game project was creating a human base model I could use for my own armor sets and animations.

Good news in regards to this was I already had a headstart, as digging through my hard drive I found an already existing human base model which I had created all the way back in high school as part of a personal class project.

![rham model properties](devlog3/rhamModelStats.png){: width="300" height="300" }
_This has been sitting around since sophomore year of highschool_

Bad news, however, is that the model isn't *great*, and it's not rigged or animated either. So both of those tasks were for today's me to deal with. Immediately it can be seen that the model is quite thin and lacks fingers, but is definitely salvageable:

![rham model old](devlog3/rhamOldModel.png){: width="500" height="500" }

The first steps to improving it came by broadening the shoulders and legs to slightly reduce the stick figure look. That fixed look is the thumbnail of this post. The next steps being to fully model the hands and rig it, I have been looking into tools to assist in that such as Blender's built-in **rigify** plugin.

This also has to be split into 4 separate meshes as well  (Head, Chest, Arms, Legs), as my draft for an equipment system involves replacing the skinned mesh renderer components that create when importing to Unity to whatever armor piece the player chooses to equip. 

## Starting Out Drawing Concept Art


To start out, I have had an Intuos drawing tablet for a while. Bought it on sale for cheap and was mainly using it for note taking and doodles during college lecture. Now however, I'd have to actually use it for it's intended purpose of drawing. 

![rham model old](devlog3/rhamBeginningArmorConceptArt.png){: width="500" height="500" }

The main things I have been practicing as of late are basic human anatomy, as I want to sketch my armor designs on paper before actually trying to model them out. 