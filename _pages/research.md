---
layout: page
title: research
permalink: /research/
description: How do evolutionary processes mediate ecological patterns?
nav: true
nav_order: 2
---

<style>
  .research-lede{max-width:46rem;margin:0 auto;text-align:center;font-size:1.5rem;font-weight:700;line-height:1.35}
  .research-lede small{display:block;font-weight:400;font-size:1.05rem;color:var(--global-text-color-light);margin-top:.6rem;line-height:1.5}
  .research-chain{max-width:54rem;margin:1.8rem auto .4rem;border:1px solid var(--global-divider-color);border-radius:16px;background:var(--global-card-bg-color);padding:1.6rem 1.3rem 1.3rem;position:relative}
  .research-chain .axis{position:absolute;top:-.7rem;font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:var(--global-theme-color);color:#fff;padding:.2rem .75rem;border-radius:999px}
  .research-chain .axis.l{left:1.3rem}
  .research-chain .axis.r{right:1.3rem}
  .research-chain .chain{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:.5rem;align-items:stretch}
  .research-chain .node{border:1.5px solid;border-radius:12px;background:var(--global-bg-color);padding:.95rem .6rem;text-align:center}
  .research-chain .node .h{font-size:1.1rem;font-weight:700;line-height:1.1}
  .research-chain .node .s{font-size:.8rem;color:var(--global-text-color-light);margin-top:.3rem;line-height:1.3}
  .research-chain .node.evo{border-color:#7c3aed}.research-chain .node.evo .h{color:#7c3aed}
  .research-chain .node.dem{border-color:#0d9488}.research-chain .node.dem .h{color:#0d9488}
  .research-chain .node.dist{border-color:#1d6fb8}.research-chain .node.dist .h{color:#1d6fb8}
  .research-chain .arr{display:flex;align-items:center;justify-content:center;font-size:1.6rem;color:var(--global-text-color-light)}
  .research-chain .cap{text-align:center;color:var(--global-text-color-light);font-size:.85rem;margin:1rem auto 0;max-width:42rem;line-height:1.5}
  .research-philosophy{max-width:46rem;margin:1.5rem auto 2.4rem;text-align:center;line-height:1.65}
  .research-q{margin-top:2.8rem;padding-left:.7rem;border-left:5px solid var(--global-theme-color)}
  .research-q.evo{border-color:#7c3aed}
  .research-q.dem{border-color:#0d9488}
  .research-q.dist{border-color:#1d6fb8}
  .research-sub{color:var(--global-text-color-light);margin:.2rem 0 0;max-width:48rem}
  .research-strip{text-transform:uppercase;letter-spacing:.08em;font-size:.72rem;font-weight:700;color:var(--global-text-color-light);margin:1.3rem 0 .6rem}
  @media(max-width:700px){
    .research-chain .chain{grid-template-columns:1fr}
    .research-chain .arr{transform:rotate(90deg)}
    .research-chain .axis{display:none}
  }
</style>

<p class="research-lede">
  How do evolutionary processes mediate ecological patterns?
  <small>How do changes in allele frequency, through time and across space, shape the abundance and distribution of organisms?</small>
</p>

<div class="research-chain">
  <span class="axis l">◀ across space</span>
  <span class="axis r">through time ▶</span>
  <div class="chain">
    <div class="node evo"><div class="h">Evolution</div><div class="s">selection, drift,<br>gene flow, mutation</div></div>
    <div class="arr">⇄</div>
    <div class="node dem"><div class="h">Demography</div><div class="s">birth, death,<br>population growth</div></div>
    <div class="arr">⇄</div>
    <div class="node dist"><div class="h">Ecology</div><div class="s">distribution, abundance,<br>range limits, persistence</div></div>
  </div>
  <p class="cap">Changes in allele frequency ripple through demography to shape the distribution, abundance, and persistence of populations, and ecology feeds back on evolution in turn. We follow this chain in both directions, across space and time.</p>
</div>

<p class="research-philosophy">
  We come at these questions with whatever tools fit them best: theory and simulation, long-term field data, experiments in nature, and experimental evolution in the lab. No single approach sees the whole picture, so we use several together. We're also not wedded to any one organism: if the processes we study are general, they should hold across very different systems, so we work across plants, insects, and microbes.
</p>

<!-- ============ Evolution ============ -->
<h2 class="research-q evo">When can populations adapt to a changing environment?</h2>
<p class="research-sub">The genetics of adaptation: standing variation, genetic architecture, gene flow, and how quickly evolution can track shifting selection.</p>

<p class="research-strip">Active projects</p>
<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign adapt_projects = site.projects | where: "category", "adapt" | sort: "importance" %}
    {% for project in adapt_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

<p class="research-strip">Key publications</p>
<div class="publications">
  {% bibliography --query @*[keywords~=adapt] %}
</div>

<!-- ============ Demography ============ -->
<h2 class="research-q dem">What lets populations persist through time?</h2>
<p class="research-sub">Long-term demography paired with genomics: which populations grow, decline, or hold on, and what drives those trajectories.</p>

<p class="research-strip">Active projects</p>
<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign persist_projects = site.projects | where: "category", "persist" | sort: "importance" %}
    {% for project in persist_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

<p class="research-strip">Key publications</p>
<div class="publications">
  {% bibliography --query @*[keywords~=persist] %}
</div>

<!-- ============ Ecology / range limits ============ -->
<h2 class="research-q dist">What sets the limits of a species' range?</h2>
<p class="research-sub">How biotic interactions, dispersal, and environmental gradients govern where species can live and how fast they spread into new terrain.</p>

<p class="research-strip">Active projects</p>
<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign range_projects = site.projects | where: "category", "rangelimits" | sort: "importance" %}
    {% for project in range_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

<p class="research-strip">Key publications</p>
<div class="publications">
  {% bibliography --query @*[keywords~=rangelimits] %}
</div>
