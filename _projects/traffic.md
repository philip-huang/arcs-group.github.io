---
layout: default
title: "Intelligent Traffic Management"
permalink: /traffic/
---

<h1>Intelligent Traffic Management</h1>

<div id="wrapper" style="float: left; width: 25%; padding: 10px; text-align: center"> 
    <img src="/files/jiaoyangli/images/PSL-crosswalk-loop.gif" alt="aim" style="max-height:150pt;" />
    <figcaption>Autonomous Intersection Management</figcaption>
</div>
<div id="wrapper" style="float: left; width: 34.8%; padding: 10px; text-align: center"> 
    <img src="/files/jiaoyangli/images/flatland.gif" alt="flatland" style="max-height:150pt;" />
    <figcaption>Rail planning and replanning</figcaption>
</div>
<div id="wrapper" style="float: left; width: 40.2%; padding: 10px; text-align: center">
    <img src="/files/jiaoyangli/images/airport-2x.gif" alt="airport" style="max-height:150pt;" />
    <figcaption>Airport surface coordination</figcaption>
</div>
<div style="clear:both;"></div>

MAPF can be used for traffic management for autonomous vehicle, trains, or airplanes. 
This can reduce traffic congestion, energy consumption, and air pollution. 
The main challenges of applying MAPF to traffic management systems are two-fold. 
First, the systems are neither perfect nor deterministic. 
For example, the environment might cause unexpected disturbances, 
the communication network might not be stable, 
the agents might have incomplete knowledge of the environment, 
and the agents might not be able to execute their deterministic MAPF plans perfectly. 
We need to take such uncertainties into account during path planning and generate robust plans. 
Second, the system needs to operate thousands of (or even more) agents in real-time, 
so extremely efficient MAPF algorithms are required.          

Highlights:
The MAPF-based software we developed for the NeurIPS'20 Flatland Challenge in [1] can plan collision-free paths for **more than 3000 agents** within a few minutes and
deliver deadlock-free actions **in real-time** during execution that are robust to unexpected delays. It outperformed all other solutions, including all reinforcement learning solutions, to **win the overall first place** in both rounds. A comparison of our solution with top reinforcement learning solutions can be found in [2].


<iframe style="display: block; max-width: 500px;"
    src="https://www.youtube.com/embed/Pw4GBL1UhPA"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

Relevant publications: 
[1] [railway planing and replanning](/publications/LiICAPS21) (**winner of the NeurIPS'20 Flatland Challenge**),
[2] [railway planing and replanning with MAPF and MARL](/publications/Laurent21), and
[3] [airport taxiway planning](/publications/LiAIAA19).         
[4] [intersection coordination for autonomous vehicles](/publications/LiAAAI23/)

<div style="float: right;">
    <button onclick="location.href='/research'" type="button">Back to the Research page</button>
</div>
