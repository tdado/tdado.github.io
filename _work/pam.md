---
title: "PAM: Predictive attention mechanism for neural decoding of visual perception"
layout: archive
author_profile: true
classes: narrow
---

**Thirza Dado, Lynn Le, Marcel van Gerven, Yağmur Güçlütürk & Umut Güçlü**

BioRxiv  
09 June 2024 

## Abstract
Attention mechanisms enhance deep learning models by focusing on the most relevant parts of the input data. We introduce predictive attention mechanisms (PAMs) – a novel approach that dynamically derives queries during training which is beneficial when predefined queries are unavailable. We applied PAMs to neural decoding, a field challenged by the inherent complexity of neural data that prevents access to queries. Concretely, we designed a PAM to reconstruct perceived images from brain activity via the latent space of a generative adversarial network (GAN). We processed stimulus-evoked brain activity from various visual areas with separate attention heads, transforming it into a latent vector which was then fed to the GAN’s generator to reconstruct the visual stimulus. Driven by prediction-target discrepancies during training, PAMs optimized their queries to identify and prioritize the most relevant neural patterns that required focused attention. We validated our PAM with two datasets: the first dataset (B2G) with GAN-synthesized images, their original latents and multi-unit activity data; the second dataset (GOD) with real photographs, their inverted latents and functional magnetic resonance imaging data. Our findings demonstrate state-of-the-art reconstructions of perception and show that attention weights increasingly favor downstream visual areas. Moreover, visualizing the values from different brain areas enhanced interpretability in terms of their contribution to the final image reconstruction. Interestingly, the values from downstream areas (IT for B2G; LOC for GOD) appeared visually distinct from the stimuli despite receiving the most attention. This suggests that these values help guide the model to important latent regions, integrating information necessary for high-quality reconstructions. Taken together, this work advances visual neuroscience and sets a new standard for machine learning applications in interpreting complex data.

![pam](/assets/images/work/cover.png)
_This inverse problem of neural decoding seeks to infer the underlying stimulus that triggered the observed neural activity. PAM addresses this by weighting the predicted values with the predicted attention weights (derived from brain activity). For this example from B2G, particularly V4’s visualized value seems to resemble the stimulus. And also for the example from GOD, the warm colors and the dotted pattern from the panther seem to be reflected in the reconstructed value of V4 but not necessarily in the final reconstruction itself._

📝 [Preprint](https://www.biorxiv.org/content/10.1101/2024.06.04.596589v1.abstract)

