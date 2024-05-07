---
title: "Get more from less: Differential neural decoding for effective reconstruction from limited training data"
layout: archive
author_profile: true
classes: wide
---

07 May 2024

Thirza Dado & Umut Güçlü

<br>
Accepted at CogSci 2024 - coming soon.
<br>

## Abstract
Decoding naturalistic stimuli from neural recordings is a significant challenge in systems neuroscience, primarily due to the high-dimensional and nonlinear characteristics of stimulus-response interactions, and is further exacerbated by the limited availability and noisiness of neural data. While contemporary approaches that incorporate generative models, such as Generative Adversarial Networks (GANs), attempt to address these issues by mapping neural responses to latent representations, they do not fully overcome the aforementioned obstacles. In this work, we present a novel paradigm of differential neural decoding that focuses on the relative changes in neural response patterns which not only expands the training data quadratically but also inherently denoises it. By leveraging the Euclidean and feature-disentangled geometry of the latent space, this approach achieves geometrically coherent transformations of stimuli (aligned with how individual feature directions can be manipulated by the generator of a GAN). We trained a decoder to predict changes in latent vectors based on the corresponding changes in neural responses. The latent vector itself is derived by vector addition of the predicted latent change (indicative of stimulus shift) to a reference latent which is then inputted to the generator for reconstruction of the perceived stimulus. Overall, our results demonstrate that this geometrically principled framework facilitates more effective reconstruction of naturalistic stimuli from limited and noisy neural data by differential analysis in sensory processing.

[Poster](/assets/files/nvp23.pdf)

