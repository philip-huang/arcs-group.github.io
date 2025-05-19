---
layout: default
title: "Planning for Complex Robot Teams"
permalink: /mamp/
---

<h1>Planning for Complex Robot Teams</h1>

<div class="text-with-figure">
    <figure class="right-figure">
        <img src="/files/jiaoyangli/images/mixed-robot-team.png" style="width:150pt;"  alt="Multi-Robot Coordination Framework"/>
    </figure>
    <p>
        Agents in MAPF are unrealistic and homogeneous, 
        in the sense that each agent occupies exactly one vertex at any timestep and 
        traverses exactly one edge or wait at its current vertex from one timestep to the next one. 
        In the real world, however, robots might be of different shapes, 
        have different kinematic constraints, and have different capabilities. 
        We therefore aim to close the gap 
        between the abstract agent models used by MAPF and the various complex robot models needed in the real world.
    </p>
</div>

---------------------

## From 2D Gird World to General Graphs with Different Robot Kinematics
<div style="display: flex; flex-wrap: wrap; text-align: center">
    <div style="min-width:310px;flex: 1;margin: 5px;">
        <img src="/files/jiaoyangli/images/arena.gif" width="200px" alt="arena"/>
        <figcaption>Searching in a 2D space.</figcaption>
    </div>
    <div style="min-width:310px;flex: 1;margin: 5px;">
        <img src="/files/jiaoyangli/images/3Dmaze.gif" width="309px" alt="3D maze"/>
        <figcaption>Searching in a 3D space.</figcaption>
    </div>
    <div style="min-width:310px;flex: 1;margin: 5px;">
        <img src="/files/jiaoyangli/images/bar.gif" width="200px" alt="arm" />
        <figcaption>Searching in a high-dimensional space (i.e., configuration space).</figcaption>
    </div>
</div>
<div style="clear:both;"></div>

The agents in MAPF navigate on a general graph, which gives us the flexibility of applying MAPF algorithms to robots in 2D, 3D, and even higher-dimensional space, such as mobile robots, drones, and robotic arms. 
The challenge is how to build such graphs and handle agents with different kinematics.

{% assign target_ids = "ChenSoCS22,Chen22,ChenAAAI21robust,LiAAAI19large" | split: "," %}
<details style="margin-top: 0; margin-bottom: 0;">
    <summary style="color: #666;"><strong>Relevant publications</strong></summary>
    {% for id in target_ids %}
        {% assign pub = site.data.pubs | where: "key", id | first %}
        {% include pub-thumbnail.html %}
    {% endfor %}
</details>

---------------------

## From MAPF to Multi-Robot Motion Planning

<img src="/files/jiaoyangli/images/mapf-app-framework.png" style="float:right;width:350pt;padding:10px;"  alt="Multi-Robot Coordination Framework"/>
Beyond directly reasoning over MAPF graphs in different spaces for various applications,
most MAPF planners can be viewed as hierarchical frameworks, as illustrated in the figure on the right.
This perspective allows us to integrate MAPF algorithms with different single-agent motion planners and collision checkers,
enabling MAPF to address a broader class of Multi-Agent Motion Planning (MAMP) problems that incorporate robot dynamics.

We have developed MAPF-based MAMP planners that rely on the following types of single-agent planners:

* Sampling-based
* Optimization-based 
* Diffusion-based
* RL-based (although, technically, this is not necessarily for motion planning)

{% assign target_ids = "ShaoulICLR25,WangAAAI25,YanAAAI25,YanRAL24,ShaoulICAPS24,ShaoulSoCS24,ChenAAAI21s2m2," | split: "," %}
<details style="margin-top: 0; margin-bottom: 0;">
    <summary style="color: #666;"><strong>Relevant publications</strong></summary>
    {% for id in target_ids %}
        {% assign pub = site.data.pubs | where: "key", id | first %}
        {% include pub-thumbnail.html %}
    {% endfor %}
</details>

---------------------

## Moving in formation
<p style="text-align:center;">
    <img src="/files/jiaoyangli/images/formation-random-4x.gif" style="max-height:150pt" alt="formation-random"/>
    <img src="/files/jiaoyangli/images/formation-tight-4x.gif" style="max-height:150pt" alt="formation-tight"/>
    <img src="/files/jiaoyangli/images/formation-wide-4x.gif" style="max-height:150pt" alt="formation-wide"/>
</p>
Robots sometimes are required to move to their goal locations 
while maintaining a desired formation (i.e., spatial pattern), 
in order to reduce the system cost, increase the robustness and efficiency of the system. 

{% assign target_ids = "LiAAMAS20" | split: "," %}
<details style="margin-top: 0; margin-bottom: 0;">
    <summary style="color: #666;"><strong>Relevant publications</strong></summary>
    {% for id in target_ids %}
        {% assign pub = site.data.pubs | where: "key", id | first %}
        {% include pub-thumbnail.html %}
    {% endfor %}
</details>

<div style="float: right;">
    <button onclick="location.href='/research'" type="button">Back to the Research page</button>
</div>