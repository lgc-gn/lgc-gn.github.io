---
title: InizioEngine | Summary
date: 2026-01-18 
categories: [Current Projects, InizioEngine]
tags: [opengl, cpp]
description: A custom game engine built in C++ and OpenGL
media_subpath: /assets/img/projects/inizioengine/
image: inizioThumbnail.png
---


## The Basics

This project came about from my previous software rasterizer project. I wanted to build off that idea and branch out into OpenGL to create my own game engine, as part of a 2-week final project for my computer graphics course. 

To begin the process, I referenced previous code alongside video tutorials to create a sort of free camera controller that views a 3D cube in an empty space.

![scanline demo](inizio3DCube.gif){: width="450" height="450" }
_Early free camera and 3D cube_

## Skybox

```cpp

// --------------------------------------------------------
// Capsule collision helper 
// --------------------------------------------------------

static inline glm::vec3 ClosestPointOnTriangle(const glm::vec3& p,
    const glm::vec3& a,
    const glm::vec3& b,
    const glm::vec3& c)
{
    glm::vec3 ab = b - a;
    glm::vec3 ac = c - a;
    glm::vec3 ap = p - a;

    float d1 = glm::dot(ab, ap);
    float d2 = glm::dot(ac, ap);
    if (d1 <= 0.0f && d2 <= 0.0f) return a;

    glm::vec3 bp = p - b;
    float d3 = glm::dot(ab, bp);
    float d4 = glm::dot(ac, bp);
    if (d3 >= 0.0f && d4 <= d3) return b;

    float vc = d1 * d4 - d3 * d2;
    if (vc <= 0.0f && d1 >= 0.0f && d3 <= 0.0f) {
        float v = d1 / (d1 - d3);
        return a + v * ab;
    }

    glm::vec3 cp = p - c;
    float d5 = glm::dot(ab, cp);
    float d6 = glm::dot(ac, cp);
    if (d6 >= 0.0f && d5 <= d6) return c;

    float vb = d5 * d2 - d1 * d6;
    if (vb <= 0.0f && d2 >= 0.0f && d6 <= 0.0f) {
        float w = d2 / (d2 - d6);
        return a + w * ac;
    }

    float va = d3 * d6 - d5 * d4;
    if (va <= 0.0f && (d4 - d3) >= 0.0f && (d5 - d6) >= 0.0f) {
        float w = (d4 - d3) / ((d4 - d3) + (d5 - d6));
        return b + w * (c - b);
    }

    float denom = 1.0f / (va + vb + vc);
    float v = vb * denom;
    float w = vc * denom;
    return a + ab * v + ac * w;
}

```


## Final Implementation

{%
  include embed/video.html
  src='inizioAnimations.webm'
  title='Demo video'
  autoplay=false
  loop=true
  muted=true
%}

## Reflection

As a game developer hobbyist, this project really opened my eyes on how much modern game engines handle under the hood for the user. 