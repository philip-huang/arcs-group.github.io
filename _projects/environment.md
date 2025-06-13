---
layout: default
title: "Environment Optimization for Multi-Agent Systems"
permalink: /envopt/
---

# Environment Optimization for Fostering Agent Collaboration

<img src="/files/jiaoyangli/images/envopt-overview.gif" title="overview" style="float:right;width:400pt;padding-left:10px;"  alt="overview"/>

While traditional research in multi-agent systems focuses on improving agents' algorithms under fixed environmental settings, 
our team takes a complementary perspective: **We optimize the environment itself to enhance multi-agent performance**. 
By tailoring the environment to align with agents’ capabilities, planning strategies, and data distributions, 
we can unlock higher levels of coordination and efficiency. 
Inspired by procedural content generation in video games, 
our key idea is to **treat the multi-agent simulator as a black box**, 
which encapsulates planning, control, and evaluation, 
and to search for environments that maximize its performance output.

This new direction raises several core research challenges:
* How can we represent and parameterize complex environments?
* How do we incorporate domain-specific constraints into the optimization?
* How do we define objectives when explicit environment preferences are unavailable?
* How do we efficiently search when each evaluation is expensive?

---------------------

## Warehouse Physical Layout Design

<div class="text-with-figure">
    <figure class="right-figure" style="width: 200pt">
        <img src="/files/jiaoyangli/images/kiva.png" style="width: 200pt" alt="Comparison of algorithm vs environment optimization">
        <figcaption>
            A typical warehouse layout. Green and orange squares represent shelves and robots, respectively. 
            The grey region on the left represents workstations.
        </figcaption>
    </figure>
    <p>
        Warehouse automation today relies on fleets of robots that autonomously transport inventory pods throughout massive storage facilities. 
        Yet, while planning and coordination algorithms for these robots have seen significant advances, 
        <strong>the warehouse environments they operate in remain largely unchanged</strong> &mdash; still designed around the needs of human workers.
    </p>
    <p>
        Most layouts feature grid-like arrangements of rectangular shelf clusters and standardized aisle patterns, 
        optimized for human accessibility and pathfinding. 
        However, these patterns are largely irrelevant to robots, 
        which are not constrained by human ergonomics or visual navigation. 
        In fact, such rigid layouts can even impede robotic efficiency and throughput.
    </p>
    <p>   
        To bridge this gap, we developed layout optimization algorithms that searches for high-performing warehouse layouts 
        tailored specifically to the capabilities of robot fleets and their underlying planning stack. 
    </p>
</div>

<h5 style="color: #666"><strong>✨ Notable Results:</strong></h5>

<div class="text-with-figure">
    <figure class="left-figure">
        <img src="/files/jiaoyangli/images/env-vs-alg.png" style="width: 150pt" alt="Comparison of algorithm vs environment optimization">
    </figure>
    <p>
        <strong>1. Layout optimization outpaces algorithmic progress:</strong>
        While decades of research in MAPF algorithms have brought steady gains in throughput, 
        our results reveal that optimizing the environment can yield substantially greater performance improvements. 
        Specifically, RHCR (a state-of-the-art MAPF solver from 2021) achieves only a 30% throughput increase over WHCA* (a basic solver from 2005). 
        However, when paired with our layout optimization framework, RHCR achieves a remarkable 80% improvement, 
        underscoring the often-overlooked power of environment design in multi-agent systems.
    </p>
</div>

<div class="text-with-figure">
    <figure class="left-figure">
        <img src="/files/jiaoyangli/images/NCA-idea.png" style="width: 230pt" alt="NCA idea">
    </figure>
    <p>
        <strong>2. Optimizing a layout generator instead of a layout itself:</strong>
        While directly optimizing warehouse layouts can lead to performance gains, 
        it is computationally intensive and often limited to small-scale environments. 
        Moreover, the resulting layouts tend to lack clear structure, making them difficult for humans to interpret or trust.
        To overcome these limitations, we propose optimizing a layout generator based on Neural Cellular Automata (NCA). 
        This approach offers two key advantages:
        (1) <i>Scalability</i>: The generator can be trained on small layouts and generalize to large-scale environments with thousands of agents.
        (2) <i>Interpretability</i>: The generated layouts exhibit clear local patterns, making them easier to analyze and potentially adapt manually.
    </p>
    
</div>

<p>
    Below shows an example warehouse simulation with 300 robots transporting goods from shelves (black cells) to workstations (pink cells). 
    Since shelves are non-traversable, robots must position themselves at adjacent endpoints (blue cells) to retrieve items. 
    In the traditional layout (a), robots frequently experience congestion and deadlocks. 
    The optimized layout (b) significantly improves flow and reduces congestion. The pattern-aware optimized layout 
    (c) further enhances interpretability by introducing structured local patterns, while maintaining comparable performance.
</p>

<div id="wrapper" style="float: left; width: 33%; padding: 10px; text-align: center">
    <video height="150pt" autoplay loop controls> 
            <source type="video/mp4" src="/files/jiaoyangli/images/human-designed-map.mp4" /> 
        </video>
        <figcaption>(a) Traditional warehouse layout</figcaption>
</div>
<div id="wrapper" style="float: left; width: 33%; padding: 10px; text-align: center"> 
    <video height="150pt" autoplay loop controls> 
        <source type="video/mp4" src="/files/jiaoyangli/images/dsage-map.mp4" /> 
    </video>
    <figcaption>(b) Optimized layout</figcaption>
</div>
<div id="wrapper" style="float: left; width: 33%; padding: 10px; text-align: center">
    <video height="150pt" autoplay loop controls> 
        <source type="video/mp4" src="/files/jiaoyangli/images/NCA-map.mp4" /> 
    </video>
    <figcaption>(c) Optimized layout with patterns</figcaption>
</div>
<div style="clear:both;"></div>

{% assign target_ids = "ZhangIJCAI23,ZhangNeurIPS23" | split: "," %}
<details style="margin-top: 0; margin-bottom: 0;">
    <summary style="color: #666;"><strong>Relevant publications</strong></summary>
    {% for id in target_ids %}
        {% assign pub = site.data.pubs | where: "key", id | first %}
        {% include pub-thumbnail.html %}
    {% endfor %}
</details>

---------------------

## Virtual Environment Optimization via Guidance Graphs

<img src="/files/jiaoyangli/images/guidance-graph.png" title="overview" style="float:right;width:200pt;padding-left:10px;"  alt="overview"/>

Encouraged by the promising results of physical environment optimization, 
we extended this idea to **multi-agent domains where the environment cannot be physically reconfigured**. 
To this end, we introduced the concept of virtual environment optimization, 
representing the virtual environment as a guidance graph. 
A guidance graph preserves represents the traversability of the environment as graph 
and introduces an edge cost for each possible action an agent can take at each vertex. 
By optimizing the edge weights, the guidance graph provides high-level navigational cues to agents, 
helping them move in more structured and cooperative patterns. 
Even though the physical map remains unchanged, 
this virtual layer can significantly reduce traffic congestion and improve overall throughput.

<h5 style="color: #666"><strong>✨ Notable Results:</strong></h5>

<div class="text-with-figure">
    <figure class="left-figure">
        <img src="/files/jiaoyangli/images/cen-vs-dec.png" style="width: 200pt" alt="centralize vs decentralize">
    </figure>
    <p>
        <strong>1. Closing the performance gap between centralized and decentralized planning:</strong>
        By overlaying a guidance graph, the decentralized PIBT planner achieved throughput comparable to the centralized RHCR 
        for small numbers of agents and surpassed both in large numbers of agents.
        Note that the addition of guidance graphs preserves the decentralized nature of PIBT and introduce negligible computational overhead.  
    </p>
</div>

<div class="text-with-figure">
    <figure class="left-figure">
        <img src="/files/jiaoyangli/images/LoRR-guidance.gif" style="width: 250pt" alt="LoRR">
    </figure>
    <p>
        <strong>2. First place in the League of Robot Runners:</strong>
        We won a MAPF competition sponsored by Amazon Robotics in 2023, which focuses on fast solvers
        (< 1 sec) for challenging lifelong MAPF problems involving extreme agent density of up to 98%. 
        In addition to the advanced planning algorithms we have developed, the utilization of
        the guidance graph was instrumental in our victory.
    </p>
</div>

<div class="text-with-figure">
    <figure class="left-figure">
        <img src="/files/jiaoyangli/images/onlineGGO.png" style="width: 250pt" alt="LoRR">
    </figure>
    <p>
        <strong>3. Online guidance graph optimization:</strong>
        Instead of optimizing an offline guidance graph that provides static guidance, 
        we propose an <i>online guidance policy</i> that dynamically adapts the guidance graph over time using <i>real-time traffic information</i>. 
        This online framework is particularly well-suited for environments where task distributions evolve, 
        such as warehouses with shifting demand or fleets operating in changing conditions.
        Empirical results show significant performance gains:
        (1) Up to 30.75% improvement in throughput over offline (static) guidance methods.
        (2) Up to 52.42% improvement over existing manually-designed online guidance.
    </p>
</div>

{% assign target_ids = "ZangAAAI25,JiangICRA25,ZhangIJCAI24,JiangSoCS24" | split: "," %}
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
