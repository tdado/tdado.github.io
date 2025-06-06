---
title: "Hyperrealistic neural decoding for reconstructing faces from fMRI activations via the GAN latent space"
layout: archive
author_profile: true
classes: wide
---

<p style="letter-spacing: -0.5px;"><b>
Thirza Dado, Yağmur Güçlütürk, Luca Ambrogioni, Gabriëlle Ras, Sander Bosch, Marcel van Gerven & Umut Güçlü
</b></p>




Scientific Reports  
07 Jan 2022 

📝 [Full paper](https://www.nature.com/articles/s41598-021-03938-w)  
🔑 [GitHub repo](https://github.com/tdado/hyper)  
🧠 [fMRI responses](https://openneuro.org/datasets/ds004280/versions/1.0.1)  


<div style="width: 75%; margin: 0 auto; text-align: center;">
<h2>Abstract</h2>
    <p>Neural decoding can be conceptualized as the problem of mapping brain responses back to sensory stimuli via a feature space. We introduce (i) a novel experimental paradigm that uses well-controlled yet highly naturalistic stimuli with a priori known feature representations and (ii) an implementation thereof for HYPerrealistic reconstruction of PERception (HYPER) of faces from brain recordings. To this end, we embrace the use of generative adversarial networks (GANs) at the earliest step of our neural decoding pipeline by acquiring fMRI data as participants perceive face images synthesized by the generator network of a GAN. We show that the latent vectors used for generation effectively capture the same defining stimulus properties as the fMRI measurements. As such, these latents (conditioned on the GAN) are used as the in-between feature representations underlying the perceived images that can be predicted in neural decoding for (re-)generation of the originally perceived stimuli, leading to the most accurate reconstructions of perception to date.</p>
    <br>

    <img src="/assets/images/work/hyper_image.png" alt="hyper_image">
    <p><i>Stimuli and their reconstructions from recorded brain activity. The three blocks show twelve arbitrarily chosen but representative test set examples. The first column displays the face stimuli ("stim") whereas the second and third column display the corresponding reconstructions from brain activations from subject 1 ("S1") and 2 ("S2"), respectively. The row numbers denote the test set number (in total, there were 36 test set stimuli).</i></p>
</div>



