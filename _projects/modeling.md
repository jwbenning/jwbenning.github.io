---
layout: page
title: Theory and simulation
description: Models of range limits, dispersal evolution, and adaptation to a changing environment
img:
importance: 1
category: modeling
---

Models let us ask questions that no experiment can reach: what happens over hundreds of generations, across a whole range, under environments we can specify exactly. We build individual-based simulations — mostly in [SLiM](https://messerlab.org/slim/) — of populations evolving across space and through time, and use them both to generate predictions we then test in the field and the lab, and to interpret patterns we have already measured.

Three threads run through this work. The first asks what stabilizes a range edge: we found that increasing *temporal* variance in the environment, rather than any spatial barrier, is enough to hold a range limit in place. The second asks how dispersal itself evolves during an expansion, and how the shape of the environmental gradient a population is spreading along changes that trajectory. The third pairs simulation directly with data, using demographic and genetic models to ask why a population that clearly experienced strong selection during a severe drought nonetheless failed to adapt.

## Key publications
{% bibliography --query @*[keywords~=projmodeling] --group_by none --sort_by year --order descending %}
