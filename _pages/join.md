---
layout: page
permalink: /join/
last_updated: 2026-09-01
title: join
description:
nav: true
nav_order: 8

# Flip these to turn the "Recruiting" / "Not currently recruiting" pill on each
# section. One word each; nothing else needs touching.
recruiting:
  undergraduates: true
  graduate_students: true
  postdocs: false
---

<style>
  .join-list{display:flex;flex-direction:column;gap:.7rem;margin:1.6rem 0 0}
  .join-card{border:1px solid var(--global-divider-color);border-radius:12px;background:var(--global-card-bg-color);overflow:hidden;transition:border-color .15s ease,box-shadow .15s ease}
  .join-card:hover{border-color:var(--global-theme-color)}
  .join-card[open]{box-shadow:0 4px 18px rgba(20,30,40,.07)}
  .join-card>summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:.9rem;padding:.95rem 1.15rem;user-select:none}
  .join-card>summary::-webkit-details-marker{display:none}
  .join-head{flex:1;min-width:0;display:flex;align-items:center;gap:.7rem;flex-wrap:wrap}
  .join-title{font-weight:700;font-size:1.1rem;line-height:1.3;color:var(--global-text-color)}
  .join-flag{font-size:.68rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:.14rem .6rem;border-radius:999px;white-space:nowrap}
  .join-flag.yes{background:var(--global-theme-color);color:#fff}
  .join-flag.no{background:transparent;color:var(--global-text-color-light);border:1px solid var(--global-divider-color)}
  .join-chevron{flex:none;width:.55rem;height:.55rem;border-right:2px solid var(--global-text-color-light);border-bottom:2px solid var(--global-text-color-light);transform:rotate(-45deg);transition:transform .15s ease}
  .join-card[open] .join-chevron{transform:rotate(45deg)}
  .join-body{padding:0 1.15rem 1.1rem;line-height:1.65}
  .join-body p:last-child{margin-bottom:0}
</style>

We're always looking for collaborators. Cornell offers a stimulating intellectual environment nestled in the natural beauty of the Finger Lakes region of upstate New York. The lab launched in July 2025 within Cornell's [Department of Ecology & Evolutionary Biology](https://ecologyandevolution.cornell.edu/), and works on how populations respond to novel environments across space and time — using a mix of plants, insects, and microbes and a combination of empirical and theoretical approaches.

<div class="join-list">

  <details class="join-card">
    <summary>
      <span class="join-head">
        <span class="join-title">Undergraduate students</span>
        {% if page.recruiting.undergraduates %}<span class="join-flag yes">Recruiting</span>{% else %}<span class="join-flag no">Not currently recruiting</span>{% endif %}
      </span>
      <span class="join-chevron"></span>
    </summary>
    <div class="join-body">
  <p>Cornell undergraduates interested in research with the lab should contact
  <a href="mailto:jbenning@cornell.edu">John</a> directly. Please include a short note on your
  background, what you'd like to work on, and your year/major.</p>
  </div>
  </details>

  <details class="join-card">
    <summary>
      <span class="join-head">
        <span class="join-title">Graduate students</span>
        {% if page.recruiting.graduate_students %}<span class="join-flag yes">Recruiting</span>{% else %}<span class="join-flag no">Not currently recruiting</span>{% endif %}
      </span>
      <span class="join-chevron"></span>
    </summary>
    <div class="join-body">
  <p>The Fall 2026 application window has closed. <strong>We will be recruiting a PhD student
  to start Fall 2027.</strong></p>
  <p>If you're interested in joining the Benning Lab as a PhD student at Cornell, please fill out
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScAYiXx9ZPS7TAvKs_pKGzmY8JL5HUe_CyiBX6yCBLEmhXeAg/viewform?usp=header">this short form</a>
  to share some information about your background and your motivation for joining the lab.</p>
  <p>Starting in June, we'll review submissions during the first two weeks of each month. So if you
  submit before June 1, you'll hear from John by the third week in June; if you submit in June, you'll
  hear from John by the third week of July, and so on. If you don't hear back within that window, or if
  you have a question on a different timeline (e.g., a funding-application deadline or an eligibility
  question), please reach out to <a href="mailto:jbenning@cornell.edu">John</a> directly.</p>
  <p>Read more about Cornell's application process
  <a href="https://ecologyandevolution.cornell.edu/graduate">here</a>. You can compare stipends across
  similar graduate programs with <a href="https://mlgaynor.com/BiologyPhDStipends/">this great resource</a>
  created by Michelle L. Gaynor and Rhett M. Rautsaw.</p>
  </div>
  </details>

  <details class="join-card">
    <summary>
      <span class="join-head">
        <span class="join-title">Postdocs</span>
        {% if page.recruiting.postdocs %}<span class="join-flag yes">Recruiting</span>{% else %}<span class="join-flag no">Not currently recruiting</span>{% endif %}
      </span>
      <span class="join-chevron"></span>
    </summary>
    <div class="join-body">
  <p>We're excited to sponsor strong candidates for postdoctoral fellowships such as the
  <a href="https://www.nsf.gov/funding/opportunities/postdoctoral-research-fellowships-biology-prfb">NSF PRFB</a>,
  the <a href="https://www.simonsfoundation.org/grant/simons-postdoctoral-fellowships-in-plant-biology/">Simons Postdoctoral Fellowships in Plant Biology</a>,
  or <a href="https://atkinson.cornell.edu/cornell-atkinson-postdocs-rfp/">Cornell's Atkinson Postdoctoral Fellowship</a>.
  If you'd like to explore a fellowship together, reach out to
  <a href="mailto:jbenning@cornell.edu">John</a> with a CV and a short note on what you're interested in.</p>
  </div>
  </details>

</div>
