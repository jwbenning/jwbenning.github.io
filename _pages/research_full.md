---
layout: page
title: research (full draft)
permalink: /research-full/
published: false
description:
nav: false
nav_order: 2
---

<style>
  .research-lede{max-width:46rem;margin:0 auto;text-align:center;font-size:1.5rem;font-weight:700;line-height:1.35}
  .research-lede small{display:block;font-weight:400;font-size:1.05rem;color:var(--global-text-color-light);margin-top:.6rem;line-height:1.5}
  .research-chain{max-width:54rem;margin:1.8rem auto .4rem;border:1px solid var(--global-divider-color);border-radius:16px;background:var(--global-card-bg-color);padding:1.6rem 1.3rem 1.3rem;position:relative}
  .research-chain .dims{display:flex;justify-content:center;align-items:center;gap:.55rem;margin:0 0 1.1rem;flex-wrap:wrap}
  .research-chain .dim{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:var(--global-theme-color);color:#fff;padding:.2rem .8rem;border-radius:999px}
  .research-chain .dims .amp{color:var(--global-text-color-light);font-size:.72rem;font-weight:700}
  .research-tri{display:block;width:100%;height:auto;max-width:620px;margin:0 auto}
  .research-tri .bx{fill:var(--global-bg-color);stroke-width:1.5}
  .research-tri .lab{font-size:19px;font-weight:700}
  .research-tri .sub{font-size:12.5px;fill:var(--global-text-color-light)}
  .research-tri .edge{stroke:var(--global-text-color-light);stroke-width:1.6;fill:none}
  .research-tri .ahead{fill:var(--global-text-color-light)}
  .research-chain .cap{text-align:center;color:var(--global-text-color-light);font-size:.85rem;margin:1rem auto 0;max-width:42rem;line-height:1.5}
  .research-philosophy{max-width:46rem;margin:1.5rem auto 2.4rem;text-align:center;line-height:1.65}
  .research-q{margin-top:2.8rem;padding-left:.7rem;border-left:5px solid var(--global-theme-color)}
  .research-sub{color:var(--global-text-color-light);margin:.2rem 0 0;max-width:48rem}
  .research-strip{text-transform:uppercase;letter-spacing:.08em;font-size:.72rem;font-weight:700;color:var(--global-text-color-light);margin:1.3rem 0 .6rem}
  /* expandable project cards */
  .rp-list{display:flex;flex-direction:column;gap:.6rem;margin:.4rem 0}
  .rp-card{border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);overflow:hidden;transition:border-color .15s ease,box-shadow .15s ease}
  .rp-card:hover{border-color:var(--global-theme-color)}
  .rp-card[open]{box-shadow:0 4px 18px rgba(20,30,40,.07)}
  .rp-card>summary{list-style:none;cursor:pointer;display:flex;align-items:flex-start;gap:.9rem;padding:.85rem 1.05rem;user-select:none}
  .rp-card>summary::-webkit-details-marker{display:none}
  .rp-head{flex:1;min-width:0}
  .rp-title{display:block;font-weight:700;font-size:1.05rem;line-height:1.25;color:var(--global-text-color)}
  .rp-desc{display:block;color:var(--global-text-color-light);font-size:.9rem;line-height:1.4;margin-top:.2rem}
  .rp-chevron{flex:none;margin-top:.35rem;width:.55rem;height:.55rem;border-right:2px solid var(--global-text-color-light);border-bottom:2px solid var(--global-text-color-light);transform:rotate(-45deg);transition:transform .15s ease}
  .rp-card[open] .rp-chevron{transform:rotate(45deg)}
  .rp-card>summary:hover .rp-title{color:var(--global-theme-color)}
  .rp-body{padding:0 1.05rem 1.05rem;border-top:1px solid var(--global-divider-color);margin-top:-.1rem}
  .rp-body>p:first-child{margin-top:.9rem}
  .rp-body em{font-style:italic}
  .rp-links{margin-top:.6rem;font-size:.85rem}
  .rp-links a{color:var(--global-text-color-light)}
  .rp-links a:hover{color:var(--global-theme-color)}
  /* "Key publications" heading + list inside an expanded card */
  .rp-body h2{font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;font-weight:700;color:var(--global-text-color-light);margin:1.3rem 0 .3rem}
  .rp-body .publications{margin-top:.2rem}
  .rp-body .publications ol.bibliography{font-size:.92rem}
  .rp-body .publications ol.bibliography li{margin-bottom:.7rem}
  @media(max-width:700px){
    .research-tri .lab{font-size:22px}
    .research-tri .sub{font-size:14px}
  }
</style>

<p class="research-lede">
  Evolutionary ecology
  <small>How do changes in allele frequency, through time and across space, shape population abundances and species’ distributions?</small>
</p>

<div class="research-chain">
  <div class="dims">
    <span class="dim">across space</span>
    <span class="amp">and</span>
    <span class="dim">through time</span>
  </div>
  <svg class="research-tri" viewBox="0 0 640 372" role="img" aria-label="Evolution, demography, and ecology each act on one another">
    <defs>
      <marker id="tri-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
        <path class="ahead" d="M0,0 L10,5 L0,10 z" />
      </marker>
    </defs>
    <line class="edge" x1="258" y1="122" x2="158" y2="252" marker-start="url(#tri-ah)" marker-end="url(#tri-ah)" />
    <line class="edge" x1="382" y1="122" x2="482" y2="252" marker-start="url(#tri-ah)" marker-end="url(#tri-ah)" />
    <line class="edge" x1="238" y1="308" x2="402" y2="308" marker-start="url(#tri-ah)" marker-end="url(#tri-ah)" />

    <rect class="bx" x="210" y="18" width="220" height="96" rx="12" stroke="#7c3aed" />
    <text class="lab" x="320" y="52" text-anchor="middle" fill="#7c3aed">Evolution</text>
    <text class="sub" x="320" y="76" text-anchor="middle">selection, drift,</text>
    <text class="sub" x="320" y="94" text-anchor="middle">gene flow, mutation</text>

    <rect class="bx" x="12" y="260" width="220" height="96" rx="12" stroke="#0d9488" />
    <text class="lab" x="122" y="294" text-anchor="middle" fill="#0d9488">Demography</text>
    <text class="sub" x="122" y="318" text-anchor="middle">birth, death,</text>
    <text class="sub" x="122" y="336" text-anchor="middle">population growth</text>

    <rect class="bx" x="408" y="260" width="220" height="96" rx="12" stroke="#1d6fb8" />
    <text class="lab" x="518" y="288" text-anchor="middle" fill="#1d6fb8">Ecology</text>
    <text class="sub" x="518" y="310" text-anchor="middle">distribution, abundance,</text>
    <text class="sub" x="518" y="328" text-anchor="middle">range limits,</text>
    <text class="sub" x="518" y="346" text-anchor="middle">species interactions</text>
  </svg>
  <p class="cap">Lorem ipsum</p>
</div>

<p class="research-philosophy">
  We tackle questions with a broad suite of tools: theory and simulation, long-term field data, experiments in the field, and experimental evolution in the lab. We work across plants, insects, and microbes.
</p>

<!-- ============ Natural systems ============ -->
<h2 class="research-q">Natural systems</h2>
<p class="research-sub">Lorem ipsum</p>

<p class="research-strip">Projects — click to expand for details &amp; papers</p>
<div class="rp-list">
  {% assign natural_projects = site.projects | where: "category", "natural" | sort: "importance" %}
  {% for project in natural_projects %}
    {% include research_project.liquid %}
  {% endfor %}
</div>

<!-- ============ Experimental evolution ============ -->
<h2 class="research-q">Experimental evolution</h2>
<p class="research-sub">Lorem ipsum</p>

<p class="research-strip">Projects — click to expand for details &amp; papers</p>
<div class="rp-list">
  {% assign experimental_projects = site.projects | where: "category", "experimental" | sort: "importance" %}
  {% for project in experimental_projects %}
    {% include research_project.liquid %}
  {% endfor %}
</div>

<!-- ============ Theory and simulation ============ -->
<h2 class="research-q">Theory and simulation</h2>
<p class="research-sub">Lorem ipsum</p>

<p class="research-strip">Projects — click to expand for details &amp; papers</p>
<div class="rp-list">
  {% assign modeling_projects = site.projects | where: "category", "modeling" | sort: "importance" %}
  {% for project in modeling_projects %}
    {% include research_project.liquid %}
  {% endfor %}
</div>

<!-- ============ Foundations ============ -->
<h2 class="research-q">Foundations &amp; collaborations</h2>
<div class="rp-list">
  {% assign foundation_projects = site.projects | where: "category", "foundations" | sort: "importance" %}
  {% for project in foundation_projects %}
    {% include research_project.liquid %}
  {% endfor %}
</div>
