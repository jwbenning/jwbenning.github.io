---
layout: page
title: research (full draft)
permalink: /research-full/
published: false
description:
nav: false
nav_order: 2
last_updated: 2026-09-08
---

<style>
  /* ── lede ─────────────────────────────────────────────── */
  .research-lede{max-width:46rem;margin:0 auto;text-align:center;font-size:1.5rem;font-weight:700;line-height:1.35}
  .research-lede small{display:block;font-weight:400;font-size:1.05rem;color:var(--global-text-color-light);margin-top:.6rem;line-height:1.5}
  /* ── eco / evo / demography schematic ─────────────────── */
  .triad{max-width:52rem;margin:1.6rem auto .5rem}
  .triad-row{display:flex;align-items:stretch;gap:0}
  .triad-node{flex:1 1 0;min-width:0;border:1px solid var(--global-divider-color);border-top:3px solid var(--nc);
    border-radius:10px;padding:.7rem .8rem;background:var(--global-card-bg-color)}
  .triad-node .eyebrow{display:block;font-size:.6rem;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:var(--nc)}
  .triad-node .what{display:block;font-size:.98rem;font-weight:700;line-height:1.25;margin-top:.2rem}
  .triad-node .parts{display:block;font-size:.76rem;line-height:1.4;color:var(--global-text-color-light);margin-top:.25rem}
  .triad-node.evo{--nc:#7c3aed} .triad-node.dem{--nc:#0d9488} .triad-node.eco{--nc:#1d6fb8}
  .triad-link{flex:0 0 8.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;
    gap:.3rem;padding:0 .5rem;text-align:center}
  .triad-link span{font-size:.72rem;line-height:1.3;color:var(--global-text-color-light)}
  .triad-link .shaft{width:100%;height:1px;background:var(--global-divider-color);position:relative}
  .triad-link .shaft::after{content:"";position:absolute;right:0;top:-3.5px;border-left:7px solid var(--global-divider-color);
    border-top:4px solid transparent;border-bottom:4px solid transparent}
  .triad-back{display:flex;align-items:center;gap:.55rem;margin:.7rem 0 0;padding:.5rem .8rem;
    border:1px dashed var(--global-divider-color);border-radius:10px}
  .triad-back .ret{flex:none;font-size:.95rem;color:var(--global-text-color-light)}
  .triad-back span{font-size:.78rem;line-height:1.4;color:var(--global-text-color-light)}
  @media(max-width:720px){
    .triad-row{flex-direction:column}
    .triad-link{flex:0 0 auto;padding:.5rem 0;width:100%}
    .triad-link .shaft{width:1px;height:1.1rem}
    .triad-link .shaft::after{right:-3.5px;top:auto;bottom:0;border-left:4px solid transparent;
      border-right:4px solid transparent;border-top:7px solid var(--global-divider-color);border-bottom:0}
  }
  .research-philosophy{max-width:48rem;margin:1.2rem auto 1.8rem;text-align:center;line-height:1.65;color:var(--global-text-color-light)}


  /* ── the tile grid ────────────────────────────────────── */
  .sys-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:1rem;align-items:start}
  .sys{border:1px solid var(--global-divider-color);border-radius:14px;overflow:hidden;background:var(--global-card-bg-color);transition:box-shadow .18s ease,border-color .18s ease}
  .sys[open]{grid-column:1/-1;box-shadow:0 6px 26px rgba(20,30,40,.09)}
  .sys>summary{list-style:none;cursor:pointer;display:block;position:relative;padding:0;margin:0}
  .sys>summary::-webkit-details-marker{display:none}

  .sys-tile{position:relative;display:block;width:100%;aspect-ratio:16/10;overflow:hidden;background:#eef1f4}
  .sys[open] .sys-tile{aspect-ratio:auto;height:210px}
  .sys-tile img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s ease,filter .25s ease}
  .sys:hover .sys-tile img,.sys[open] .sys-tile img{transform:scale(1.04)}
  /* the label sits under a scrim that only appears on hover (or when open) */
  .sys-scrim{position:absolute;inset:0;display:flex;align-items:flex-end;padding:1rem 1.1rem;
    background:linear-gradient(to top,rgba(12,18,24,.82) 0%,rgba(12,18,24,.35) 45%,rgba(12,18,24,0) 100%);
    opacity:0;transition:opacity .22s ease}
  .sys:hover .sys-scrim,.sys[open] .sys-scrim,.sys>summary:focus-visible .sys-scrim{opacity:1}
  .sys-tile-name{color:#fff;font-size:1.18rem;font-weight:700;line-height:1.25;letter-spacing:-.01em;text-shadow:0 1px 12px rgba(0,0,0,.5)}
  .sys-tile-name i{display:block;font-style:italic;font-weight:500;font-size:.78em;opacity:.85;margin-top:.1rem}
  .sys-tile-name .cue{display:block;font-size:.68rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;opacity:.75;margin-top:.35rem}
  .sys[open] .sys-tile-name .cue::after{content:" — click to close"}
  /* no hover on touch: keep the label permanently visible */
  @media (hover:none){ .sys-scrim{opacity:1} }

  .sys-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;
    background:repeating-linear-gradient(135deg,#f2f5f7,#f2f5f7 10px,#eaeef1 10px,#eaeef1 20px);
    color:#8a949e;font-size:.68rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase}

  /* ── the expanded panel ───────────────────────────────── */
  .sys-panel{padding:1.3rem 1.3rem 1.5rem;border-top:1px solid var(--global-divider-color)}
  .sys-hook{color:var(--global-text-color-light);font-size:1.02rem;line-height:1.5;margin:0 0 .7rem;max-width:56ch}
  .sys-panel .sys-body{margin:1rem 0 0}
  .sys-panel .sys-body p{line-height:1.68;max-width:64ch}
  .sys-work{margin:1.1rem 0 0;padding:0;list-style:none;display:grid;gap:.55rem}
  .sys-work li{padding-left:1rem;position:relative;line-height:1.6;max-width:64ch}
  .sys-work li::before{content:"";position:absolute;left:0;top:.62em;width:6px;height:6px;border-radius:50%;background:currentColor;opacity:.32}
  .sys-figs{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:.7rem;margin:1.2rem 0 0}
  .sys-figs figure{margin:0}
  .sys-figs img{border-radius:8px;aspect-ratio:4/3;object-fit:cover;width:100%;display:block}
  .sys-figs figcaption{font-size:.76rem;color:var(--global-text-color-light);line-height:1.4;margin-top:.3rem}
  .sys-pubs{margin:1.4rem 0 0;padding-top:1rem;border-top:1px dashed var(--global-divider-color)}
  .sys-pubs h3{font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;font-weight:700;color:var(--global-text-color-light);margin:0 0 .4rem}
  .sys-pubs .publications ol.bibliography{font-size:.92rem}
  .sys-pubs .publications ol.bibliography li{margin-bottom:.7rem}
  .sys-fund{margin:1.2rem 0 0;padding:.6rem .9rem;border:1px solid var(--global-divider-color);border-left:3px solid var(--global-theme-color);border-radius:0 8px 8px 0}
  .sys-fund .lab{font-size:.66rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light);display:block;margin-bottom:.15rem}
  .sys-fund ul{margin:0;padding-left:1.05rem;font-size:.9rem}
  .sys-people{font-size:.87rem;color:var(--global-text-color-light);font-style:italic;margin:1.1rem 0 0}
  .sys-credit{font-size:.76rem;color:var(--global-text-color-light);margin:.45rem 0 0}
</style>

<p class="research-lede">
  Evolutionary ecology
  <small>How do changes in allele frequency, through time and across space, shape population abundances and species’ distributions?</small>
</p>

<div class="triad">
  <div class="triad-row">
    <div class="triad-node evo">
      <span class="eyebrow">Evolution</span>
      <span class="what">Allele frequencies</span>
      <span class="parts">selection, drift, gene flow, mutation</span>
    </div>
    <div class="triad-link">
      <span>change birth and death rates</span>
      <span class="shaft"></span>
    </div>
    <div class="triad-node dem">
      <span class="eyebrow">Demography</span>
      <span class="what">Vital rates</span>
      <span class="parts">birth, death, dispersal</span>
    </div>
    <div class="triad-link">
      <span>set where populations persist</span>
      <span class="shaft"></span>
    </div>
    <div class="triad-node eco">
      <span class="eyebrow">Ecology</span>
      <span class="what">Abundance and distribution</span>
      <span class="parts">range limits, species interactions</span>
    </div>
  </div>
  <p class="triad-back">
    <span class="ret" aria-hidden="true">&#8630;</span>
    <span>And back again: where a population sits in the landscape decides which environment it
    meets, and so which alleles are favoured.</span>
  </p>
</div>

<p class="research-philosophy">
  We work across varied systems with a broad suite of tools: field experiments, theory and
  simulation, long-term observational data on natural communities, and experimental evolution
  in the lab.
</p>

<div class="sys-grid">
{% for sys in site.data.systems %}{% unless sys.hidden %}
  <details class="sys" id="sys-{{ sys.key }}">
    <summary>
      <span class="sys-tile">
        {% if sys.thumb %}
          <img src="{{ sys.thumb | relative_url }}" alt="{{ sys.thumb_alt }}">
        {% else %}
          <span class="sys-ph">Photo needed</span>
        {% endif %}
        <span class="sys-scrim">
          <span class="sys-tile-name">{{ sys.name }}{% if sys.latin %}<i>{{ sys.latin }}</i>{% endif %}<span class="cue">Click to expand</span></span>
        </span>
      </span>
    </summary>

    <div class="sys-panel">
      <p class="sys-hook">{{ sys.hook }}</p>
      <div class="sys-body">{{ sys.blurb | markdownify }}</div>

      {% if sys.work and sys.work.size > 0 %}
      <ul class="sys-work">
        {% for w in sys.work %}<li>{{ w | markdownify | remove: '<p>' | remove: '</p>' }}</li>{% endfor %}
      </ul>
      {% endif %}

      {% if sys.figures and sys.figures.size > 0 %}
      <div class="sys-figs">
        {% for f in sys.figures %}
        <figure>
          <img src="{{ f.path | relative_url }}" alt="{{ f.alt }}">
          <figcaption>{{ f.caption }}</figcaption>
        </figure>
        {% endfor %}
      </div>
      {% endif %}

      {% case sys.key %}
      {% when 'cx' %}
        <div class="sys-pubs"><h3>Publications</h3>
        {% bibliography --query @*[keywords~=syscx] --group_by none %}
        </div>
      {% when 'expevo' %}
        <div class="sys-pubs"><h3>Publications</h3>
        {% bibliography --query @*[keywords~=sysexpevo] --group_by none %}
        </div>
      {% when 'invasions' %}
        <div class="sys-pubs"><h3>Publications</h3>
        {% bibliography --query @*[keywords~=sysinvasions] --group_by none %}
        </div>
      {% endcase %}

      {% if sys.funding and sys.funding.size > 0 %}
      <div class="sys-fund">
        <span class="lab">Supported by</span>
        <ul>{% for g in sys.funding %}<li>{{ g }}</li>{% endfor %}</ul>
      </div>
      {% endif %}

      {% if sys.people %}<p class="sys-people">{{ sys.people }}</p>{% endif %}
      {% if sys.thumb_credit %}<p class="sys-credit">Header photo by {{ sys.thumb_credit }}.</p>{% endif %}
    </div>
  </details>
{% endunless %}{% endfor %}
</div>
