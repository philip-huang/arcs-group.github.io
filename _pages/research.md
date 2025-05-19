---
layout: default
title: "Research Areas"
permalink: /research/
---

<!-- TODO: add sections on TPG, env opt, and learning-based MAPF -->

# Research Areas 

Our research focuses on developing fundamental algorithms that enable large teams of autonomous agents
to accomplish collaborative tasks intelligently in dynamic environments.

A summary of our ongoing research can be found [here](/files/jiaoyangli/ARCS-2024-Orientation-Poster.pdf) \[updated: August 2024\].

---------------------

### Multi-Agent Path Finding (MAPF)
<img src="/files/jiaoyangli/images/mapf-demo.gif" style="float:right;width:150pt;padding-left:10px;"/>
We aim to develop principled algorithms to solve challenging MAPF instances 
via a variety of AI and optimization technologies, such as
constraint reasoning, heuristic search, stochastic local search, and machine learning.

- [Research overview on MAPF algorithms](/mapf) \[updated: September 2022\].
- [Research overview on generalizing MAPF for various multi-robot systems](/mamp) \[updated: May 2025\].

<details style="margin-top: 0; margin-bottom: 0;">
    <summary>Relevant publications</summary>
    {% assign relevant_pubs = site.data.pubs | where: "tags", "mapf" %}
    <ul style="margin-bottom: 0;">
        {% for pub in relevant_pubs %}
            {% include pub-list.html %}
        {% endfor %}
    </ul>
</details>

<br>
<br>

---------------------

### Coordination of Large Robot Teams in Automated Warehouses
<img src="/files/jiaoyangli/images/warehouse-5x.gif" style="float:right;width:200pt;padding-left:10px;"/>
We aim to combine task planning, path planning, and execution 
to coordinate thousands of mobile robots to fulfill delivery tasks in automated warehouses.

- [Research overview](/warehouse) \[updated: September 2022\].

<details style="margin-top: 0; margin-bottom: 0;">
    <summary>Relevant publications</summary>
    {% assign relevant_pubs = site.data.pubs | where: "tags", "warehouse" %}
    <ul style="margin-bottom: 0;">
        {% for pub in relevant_pubs %}
            {% include pub-list.html %}
        {% endfor %}
    </ul>
</details>

<br>
<br>

---------------------

### Multi-Robotic-Arm Cooperative Manipulation
<img src="/files/jiaoyangli/images/bar.gif" style="float:right;width:150pt;padding-left:10px;"/>
We aim to develop combined task planning, motion planning, and execution frameworks
to jointly plan safe, low-cost plans
for a team of robotic arms to perform cooperative manipulation and assembly. 

- [Dual-arm lego assembly](https://intelligent-control-lab.github.io/APEX-MR/) \[updated: January 2025\].
- [Research overview](/arm) \[updated: September 2022\].

<details style="margin-top: 0; margin-bottom: 0;">
    <summary>Relevant publications</summary>
    {% assign relevant_pubs = site.data.pubs | where: "tags", "arm" %}
    <ul style="margin-bottom: 0;">
        {% for pub in relevant_pubs %}
            {% include pub-list.html %}
        {% endfor %}
    </ul>
</details>

<br>
<br>

---------------------

### Environment Optimization for Fostering Agent Collaboration
<img src="/files/jiaoyangli/images/envopt-overview.gif" style="float:right;width:300pt;padding-left:10px;"/>
While traditional research in multi-agent systems focuses on improving agents' algorithms under fixed environmental settings, 
our team takes a complementary perspective: We aim to optimize the environment itself to enhance multi-agent performance. 

- [Research overview](/envopt) \[updated: May 2025\].

<details style="margin-top: 0; margin-bottom: 0;">
    <summary>Relevant publications</summary>
    {% assign relevant_pubs = site.data.pubs | where: "tags", "envopt" %}
    <ul style="margin-bottom: 0;">
        {% for pub in relevant_pubs %}
            {% include pub-list.html %}
        {% endfor %}
    </ul>
</details>

<br>
<br>

---------------------

### From Plan to Reality: Robust Execution for Multi-Robot Systems
<img src="/files/jiaoyangli/images/sync-vs-async.gif" title="execution" style="float:right;width:260pt;padding-left:10px;"  alt="overview"/>

While state-of-the-art MAPF planners can generate collision-free paths for hundreds or even thousands of agents within seconds, 
they often overlook critical real-world factors, such as robot dynamics, timing constraints, and execution uncertainty.
We aim to bridge this gap by developing a robust and safe multi-robot planning and execution framework 
that can reliably execute MAPF-generated plans, even when those plans are imperfect or subject to real-world disturbances.

- [Research overview](/execution) \[updated: May 2025\].

<details style="margin-top: 0; margin-bottom: 0;">
    <summary>Relevant publications</summary>
    {% assign relevant_pubs = site.data.pubs | where: "tags", "execution" %}
    <ul style="margin-bottom: 0;">
        {% for pub in relevant_pubs %}
            {% include pub-list.html %}
        {% endfor %}
    </ul>
</details>

<br>
<br>

---------------------

### Intelligent Traffic Management
<img src="/files/jiaoyangli/images/flatland.gif" style="float:right;width:200pt;padding-left:10px;"/>
We aim to develop intelligent planning systems to coordinate
trains, airplanes, autonomous vehicle, etc. on complex road networks under uncertainty.

- [Research overview](/traffic) \[updated: September 2022\].

<details style="margin-top: 0; margin-bottom: 0;">
    <summary>Relevant publications</summary>
    {% assign relevant_pubs = site.data.pubs | where: "tags", "traffic" %}
    <ul style="margin-bottom: 0;">
        {% for pub in relevant_pubs %}
            {% include pub-list.html %}
        {% endfor %}
    </ul>
</details>