---
layout: page
title: research
permalink: /research/
description: How do populations cope with environmental change?
nav: true
nav_order: 2
display_categories: [adaptation, range limits, eco-evolutionary genomics]
horizontal: false
---

We work at the interface of ecology, evolution, and genomics, using a mix of natural systems and laboratory model organisms to ask how populations and species respond to environmental change across space and time. What enables a species to track a shifting climate, or to spread into new habitat? When do populations adapt to novel pressures, and when do they fail? How does the genetic architecture of fitness, the structure of dispersal, and the web of species interactions jointly shape these outcomes?

Our work spans field experiments, common gardens, population and quantitative genomics, experimental evolution in the lab, and theoretical/simulation modeling. We currently work in three overlapping areas:

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
