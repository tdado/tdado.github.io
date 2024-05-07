---
title: "Brain2GAN: Feature-disentangled neural encoding and decoding of visual perception in the primate brain"
layout: archive
author_profile: true
classes: wide
---

07 May 2024

Thirza Dado, Paolo Papale, Antonio Lozano, Lynn Le, Feng Wang, Marcel van Gerven, Pieter Roelfsema, Yağmur Güçlütürk & Umut Güçlü



## Abstract
A challenging goal of neural coding is to characterize the neural representations underlying visual perception. To this end, multi-unit activity (MUA) of macaque visual cortex was recorded in a passive fixation task upon presentation of faces and natural images. We analyzed the relationship between MUA and latent representations of state-of-the-art deep generative models, including the conventional and feature-disentangled representations of generative adversarial networks (GANs) (i.e., z- and w-latents of StyleGAN, respectively) and language-contrastive representations of latent diffusion networks (i.e., CLIP-latents of Stable Diffusion). A mass univariate neural encoding analysis of the latent representations showed that feature-disentangled w representations outperform both z and CLIP representations in explaining neural responses. Further, w-latent features were found to be positioned at the higher end of the complexity gradient which indicates that they capture visual information relevant to high-level neural activity. Subsequently, a multivariate neural decoding analysis of the feature-disentangled representations resulted in state-of-the-art spatiotemporal reconstructions of visual perception. Taken together, our results not only highlight the important role of feature-disentanglement in shaping high-level neural representations underlying visual perception but also serve as an important benchmark for the future of neural coding.



[Full paper](https://doi.org/10.1371/journal.pcbi.1012058) / [GitHub repository](https://github.com/neuralcodinglab/brain2gan) / Neural datasets [faces](https://figshare.com/articles/dataset/Brain2GAN_StyleGAN3_/25638114) & [images](https://figshare.com/articles/dataset/Brain2GAN_StyleGAN-XL_/25637856) / [Poster](/assets/files/ccn23.pdf) 
<br>
<br>



![b2g-xl_image](/assets/images/work/abstr.png)
*Test set stimulus (top) reconstruction (bottom) from brain activity.*


<!-- <table>
  <tr>
    <td><img src="/assets/images/work/0093.gif"></td>
    <td><img src="/assets/images/work/0018.gif"></td>
    <td><img src="/assets/images/work/0038.gif"></td>
    <td><img src="/assets/images/work/0001.gif"></td>
    <td><img src="/assets/images/work/0094.gif"></td>
    <td><img src="/assets/images/work/0197.gif"></td>
    <td><img src="/assets/images/work/0081.gif"></td>
    <td><img src="/assets/images/work/0114.gif"></td>
  </tr>
</table>
*Time-based reconstruction: meaningful information is extracted from the stimulus-evoked brain responses in time.* -->