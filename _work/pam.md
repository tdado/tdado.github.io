---
title: "PAM: Predictive attention mechanism for neural decoding of visual perception"
layout: archive
author_profile: true
classes: narrow
---

**Thirza Dado, Lynn Le, Marcel van Gerven, Yağmur Güçlütürk & Umut Güçlü**

BioRxiv  
08 February 2025

## Abstract
In neural decoding, reconstruction seeks to create a literal image from information in brain activity, typically achieved by mapping neural responses to a latent representation of a generative model. A key challenge in this process is understanding how information is processed across visual areas to effectively integrate their neural signals. This requires an attention mechanism that selectively focuses on neural inputs based on their relevance to the task of reconstruction — something conventional attention models, which capture only input-input relationships, cannot achieve. To address this, we introduce predictive attention mechanisms (PAMs), a novel approach that learns task-driven “output queries” during training to focus on the neural responses most relevant for predicting the latents underlying perceived images, effectively allocating attention across brain areas. We validate PAM with two datasets: (i) B2G, which contains GAN-synthesized images, their original latents and multiunit activity data; (ii) Shen-19, which includes real photographs, their inverted latents and functional magnetic resonance imaging data. Beyond achieving state-of-theart reconstructions, PAM offers a key interpretative advantage through the availability of (i) attention weights, revealing how the model’s focus was distributed across visual areas for the task of latent prediction, and (ii) values, capturing the stimulus information decoded from each area.

![pam](/assets/images/work/cover.png)
_This inverse problem of neural decoding seeks to infer the underlying stimulus that triggered the observed neural activity. PAM addresses this by weighting the predicted values with the predicted attention weights (derived from brain activity). For this example from B2G, particularly V4’s visualized value seems to resemble the stimulus. And also for the example from GOD, the warm colors and the dotted pattern from the panther seem to be reflected in the reconstructed value of V4 but not necessarily in the final reconstruction itself._

📝 [Preprint](https://www.biorxiv.org/content/10.1101/2024.06.04.596589v2)

