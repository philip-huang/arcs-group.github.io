---
layout: default
title: "Multi-Robot Plan Execution"
permalink: /execution/
---

# From Plan to Reality: Robust Execution for Multi-Robot Systems

<img src="/files/jiaoyangli/images/sync-vs-async.gif" title="execution" style="float:right;width:300pt;padding-left:10px;"  alt="overview"/>

Coordinating a large team of robots for navigation tasks in a congested environment, such as automated warehouses, 
poses a critical challenge. While current [Multi-Agent Path Finding (MAPF)](/mapf) solvers show promises 
by generating paths in seconds for hundreds of agents (simplified versions of robots) and providing
important theoretical guarantees such as soundness, completeness, and even optimality, they
overlook real-world constraints like robot dynamics and execution uncertainties. 
So naively executing them synchronously can be very inefficient (see the figure on the right).

Our goal is to **bridge this gap by developing a safe and effective multi-robot path planning and execution
framework**. This framework aims to enable thousands of heterogeneous robots to navigate in
the presence of complex obstacles, non-holonomic dynamics, actuation limits, and disturbances
while minimizing travel times and communication efforts. We are currently exploring two research
lines to achieve this goal: Generating MAPF plans that account for only important robot
dynamics and uncertainties and developing execution frameworks to safely execute potentially
imperfect MAPF plans. 

---------------------

## MAPF Planning with Robot Dynamics

<img src="/files/jiaoyangli/images/mapf-app-framework.png" style="float:right;width:350pt;padding:10px;"  alt="Multi-Robot Coordination Framework"/>

Most MAPF planners can be viewed as hierarchical frameworks, as illustrated in the figure on the right.
This perspective allows us to integrate MAPF algorithms with different single-agent motion planners and collision checkers,
enabling MAPF to address a broader class of Multi-Agent Motion Planning problems that incorporate robot dynamics.
See more details [here](/mamp/).

{% assign target_ids = "YanAAAI25,YanRAL24" | split: "," %}
<details style="margin-top: 0; margin-bottom: 0;">
    <summary style="color: #666;"><strong>Relevant publications</strong></summary>
    {% for id in target_ids %}
        {% assign pub = site.data.pubs | where: "key", id | first %}
        {% include pub-thumbnail.html %}
    {% endfor %}
</details>

---------------------

## Multi-Robot Execution and Monitoring

<img src="/files/jiaoyangli/images/diff-mapf-models.png" title="overview" style="float:right;width:300pt;padding-left:10px;"  alt="overview"/>

Due to incomplete knowledge of the world and the dynamics of robot interactions, creating perfect MAPF models is impractical. 
Moreover, building more accurate MAPF models will significantly reduce the scalability of the planner, as evidenced by the figure on the right.

Therefore, our philosophy is to model only critical components of the robot dynamics during MAPF planning
and use clever coordination and control strategies during execution to address exact robot dynamics and uncertainty.
This is achieved through the use of **Temporal Plan Graphs (TPGs)**.
Given a MAPF plan, a TPG allows arbitrary modification of robot speeds as long as the order of
visits to locations by different robots remains unchanged. Hence,we can implement a distributed
execution policy: Each robot controls its own speed and can move to its next location only if all
preceding robots have already visited it. This approach ensures robustness to imperfect MAPF
models and accommodates various unexpected events, such as deviations in robot speeds due to
actuator errors and breakdowns.

<div style="display: flex; flex-wrap: wrap; text-align: center">
    <div style="min-width:180px;flex: 1;margin: 5px;">
        <img src="/files/jiaoyangli/images/stn-intersection-map.png" height="180px" alt="arena"/>
        <figcaption>(a) MAPF plan where two robots cross an intersection.</figcaption>
    </div>
    <div style="min-width:180px;flex: 1;margin: 5px;">
        <img src="/files/jiaoyangli/images/stn-corridor-map.png" height="180px" alt="3D maze"/>
        <figcaption>(b) MAPF plan where two robots cross a corridor.</figcaption>
    </div>
    <div style="min-width:500px;flex: 1;margin: 5px;">
        <img src="/files/jiaoyangli/images/stn.png" height="180px" alt="arm" />
        <figcaption>
            (c) Corresponding TPGs. In (a), robot 1 visits cell C before robot 2, 
            so we add to the TPG a type-2 edge from vertex C of robot 1 to that of robot 2. 
            The TPG for (b) is constructed similarly.
        </figcaption>
    </div>
</div>
<div style="clear:both;"></div>

<figure style="text-align: center;">
  <img src="/files/jiaoyangli/images/lego-tpg.png" alt="TPG execution for LEGO assembly" style="width: 500pt; height: auto;">
  <figcaption>Example TPG execution for coordinating robot arms.</figcaption>
</figure>

A TPG has two important properties:
1. Its execution ensures collision-free movement if passing orders are specified at all potential colliding locations; and
2. its execution ensures deadlock-free movement if the TPG graph is cycle-free. 

Consequently, constructing and optimizing TPGs can be effectively abstracted as some graph problems.
For example, we can dynamically re-optimize the passing order at every location based on the current robot
progress by searching for acyclic TPGs that lead to better execution time. 
We can also preprocesses the TPG graph by identifying noncritical passing orders, 
whose modification will not lead to deadlocks. 
Moreover, this execution framework can be applied to various robotic systems, 
such as mobile robots as well as robotic arms.

{% assign target_ids = "Yan25,JiangAAAI25,HuangRSS25,SuAAAI24,FengICAPS24" | split: "," %}
<details style="margin-top: 0; margin-bottom: 0;">
    <summary style="color: #666;"><strong>Relevant publications</strong></summary>
    {% for id in target_ids %}
        {% assign pub = site.data.pubs | where: "key", id | first %}
        {% if pub == nil %}
            {% assign pub = site.data.preprints | where: "key", id | first %}
        {% endif %}
        {% include pub-thumbnail.html %}
    {% endfor %}
</details>

[//]: # (## Scalable Physical-Based Testbed for Evaluating MAPF Plans)


<div style="float: right;">
    <button onclick="location.href='/research'" type="button">Back to the Research page</button>
</div>
