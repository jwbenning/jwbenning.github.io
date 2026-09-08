---
layout: page
title: research (full draft)
permalink: /research-full/
published: false
description:
nav: false
nav_order: 2
last_updated: 2026-09-07
---

<style>
  /* ── lede ─────────────────────────────────────────────── */
  .research-lede{max-width:46rem;margin:0 auto;text-align:center;font-size:1.5rem;font-weight:700;line-height:1.35}
  .research-lede small{display:block;font-weight:400;font-size:1.05rem;color:var(--global-text-color-light);margin-top:.6rem;line-height:1.5}
  .research-philosophy{max-width:46rem;margin:1.2rem auto 1.8rem;text-align:center;line-height:1.65;color:var(--global-text-color-light)}

  /* ── method tag vocabulary ────────────────────────────── */
  .tags{display:flex;flex-wrap:wrap;gap:.35rem;align-items:center}
  .tag{display:inline-block;font-size:.7rem;line-height:1.5;padding:.1rem .55rem;border-radius:999px;white-space:nowrap}
  .tag.method{background:transparent;color:var(--global-text-color-light);border:1px solid var(--global-divider-color);font-weight:600}
  .method-key{border:1px solid var(--global-divider-color);border-radius:12px;padding:.75rem .95rem;margin:0 0 2.2rem;background:var(--global-card-bg-color);display:flex;gap:.7rem;align-items:baseline;flex-wrap:wrap}
  .method-key .lab{font-size:.66rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light)}

  /* ── system section ───────────────────────────────────── */
  .sys{margin:0 0 3.2rem;padding-top:1.4rem;border-top:1px solid var(--global-divider-color)}
  .sys-head{display:grid;grid-template-columns:150px 1fr;gap:1.1rem;align-items:start}
  .sys-thumb{width:150px;height:110px;border-radius:10px;overflow:hidden;background:#eef1f4}
  .sys-thumb img{width:100%;height:100%;object-fit:cover;display:block}
  .sys-name{font-size:1.4rem;font-weight:700;line-height:1.2;margin:0}
  .sys-name i{display:block;font-style:italic;font-weight:600;font-size:.72em;color:var(--global-text-color-light);margin-top:.15rem}
  .sys-hook{color:var(--global-text-color-light);font-size:.98rem;line-height:1.5;margin:.5rem 0 .6rem;max-width:52ch}
  .sys-body{margin:1.1rem 0 0}
  .sys-body p{line-height:1.68;max-width:62ch}
  .sys-figs{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:.7rem;margin:1.1rem 0 0}
  .sys-figs figure{margin:0}
  .sys-figs img{border-radius:8px;aspect-ratio:4/3;object-fit:cover;width:100%;display:block}
  .sys-figs figcaption{font-size:.76rem;color:var(--global-text-color-light);line-height:1.4;margin-top:.3rem}
  .sys-people{font-size:.87rem;color:var(--global-text-color-light);font-style:italic;margin:1rem 0 0}
  .sys-fund{margin:1rem 0 0;padding:.6rem .9rem;border:1px solid var(--global-divider-color);border-left:3px solid var(--global-theme-color);border-radius:0 8px 8px 0;background:var(--global-card-bg-color)}
  .sys-fund .lab{font-size:.66rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light);display:block;margin-bottom:.15rem}
  .sys-fund ul{margin:0;padding-left:1.05rem;font-size:.9rem}
  .research-strip{text-transform:uppercase;letter-spacing:.08em;font-size:.72rem;font-weight:700;color:var(--global-text-color-light);margin:1.6rem 0 .5rem}
  .ph{display:flex;align-items:center;justify-content:center;text-align:center;height:100%;padding:.4rem;border-radius:10px;
    background:repeating-linear-gradient(135deg,#f2f5f7,#f2f5f7 9px,#eaeef1 9px,#eaeef1 18px);
    border:1px dashed #c3ccd4;color:#8a949e;font-size:.62rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase}

  /* ── expandable project rows ──────────────────────────── */
  .rp-list{display:flex;flex-direction:column;gap:.6rem;margin:.4rem 0}
  .rp-card{border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);overflow:hidden;transition:border-color .15s ease,box-shadow .15s ease}
  .rp-card:hover{border-color:var(--global-theme-color)}
  .rp-card[open]{box-shadow:0 4px 18px rgba(20,30,40,.07)}
  .rp-card>summary{list-style:none;cursor:pointer;display:flex;align-items:flex-start;gap:.9rem;padding:.85rem 1.05rem;user-select:none}
  .rp-card>summary::-webkit-details-marker{display:none}
  .rp-head{flex:1;min-width:0}
  .rp-title{display:block;font-weight:700;font-size:1.05rem;line-height:1.25;color:var(--global-text-color)}
  .rp-desc{display:block;color:var(--global-text-color-light);font-size:.9rem;line-height:1.4;margin-top:.2rem}
  .rp-tags{margin-top:.4rem}
  .rp-chevron{flex:none;margin-top:.35rem;width:.55rem;height:.55rem;border-right:2px solid var(--global-text-color-light);border-bottom:2px solid var(--global-text-color-light);transform:rotate(-45deg);transition:transform .15s ease}
  .rp-card[open] .rp-chevron{transform:rotate(45deg)}
  .rp-card>summary:hover .rp-title{color:var(--global-theme-color)}
  .rp-body{padding:0 1.05rem 1.05rem;border-top:1px solid var(--global-divider-color);margin-top:-.1rem}
  .rp-body>p:first-child{margin-top:.9rem}
  .rp-links{margin-top:.6rem;font-size:.85rem}
  .rp-links a{color:var(--global-text-color-light)}
  .rp-links a:hover{color:var(--global-theme-color)}
  .rp-body h2{font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;font-weight:700;color:var(--global-text-color-light);margin:1.3rem 0 .3rem}
  .rp-body .publications{margin-top:.2rem}
  .rp-body .publications ol.bibliography{font-size:.92rem}
  .rp-body .publications ol.bibliography li{margin-bottom:.7rem}

  @media(max-width:620px){
    .sys-head{grid-template-columns:1fr}
    .sys-thumb{width:100%;height:150px}
  }
</style>

<p class="research-lede">
  Evolutionary ecology
  <small>How do changes in allele frequency, through time and across space, shape population abundances and species’ distributions?</small>
</p>

<p class="research-philosophy">
  We work on five systems, with a broad suite of tools: theory and simulation, long-term field
  data, experiments in the field, and experimental evolution in the lab. Every system below is
  tagged by the methods we use on it.
</p>

<div class="method-key">
  <span class="lab">Methods</span>
  <span class="tags">
    <span class="tag method">field experiments</span>
    <span class="tag method">long-term demography</span>
    <span class="tag method">population genomics</span>
    <span class="tag method">experimental evolution</span>
    <span class="tag method">common gardens</span>
    <span class="tag method">modeling &amp; simulation</span>
    <span class="tag method">archival &amp; resurvey</span>
  </span>
</div>

{% for sys in site.data.systems %}
<section class="sys" id="sys-{{ sys.key }}">
  <div class="sys-head">
    <div class="sys-thumb">
      {% if sys.thumb %}
        <img src="{{ sys.thumb | relative_url }}" alt="{{ sys.thumb_alt }}">
      {% else %}
        <span class="ph">Photo<br>needed</span>
      {% endif %}
    </div>
    <div>
      <h2 class="sys-name">{{ sys.name }}<i>{{ sys.latin }}</i></h2>
      <p class="sys-hook">{{ sys.hook }}</p>
      <span class="tags">
        {% for m in sys.methods %}<span class="tag method">{{ m }}</span>{% endfor %}
      </span>
    </div>
  </div>

  <div class="sys-body">
    {{ sys.blurb | markdownify }}
  </div>

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

  {% assign sys_projects = site.projects | where: "system", sys.key | sort: "importance" %}
  {% if sys_projects.size > 0 %}
  <p class="research-strip">Projects — click to expand for details &amp; papers</p>
  <div class="rp-list">
    {% for project in sys_projects %}
      {% include research_project.liquid %}
    {% endfor %}
  </div>
  {% endif %}

  {% if sys.funding and sys.funding.size > 0 %}
  <div class="sys-fund">
    <span class="lab">Supported by</span>
    <ul>{% for g in sys.funding %}<li>{{ g }}</li>{% endfor %}</ul>
  </div>
  {% endif %}

  {% if sys.people %}<p class="sys-people">{{ sys.people }}</p>{% endif %}
</section>
{% endfor %}
