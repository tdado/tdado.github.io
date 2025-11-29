---
permalink: /about/
title: "About"
layout: collection
author_profile: true
classes: wide
---
<style>
  /* Make sure the container enforces side-by-side layout */
  .about-container {
    display: flex;
    align-items: flex-start; /* Aligns text and image to the top */
    justify-content: flex-start; /* Ensures text and image stay in place */
    gap: 40px; /* Ensures space between text and image */
    max-width: 1100px; /* Prevents excessive width */
    width: 100%;
    margin: 0 auto; /* Centers the container */
  }

  /* Force text to take a reasonable amount of width */
  .about-text {
    width: 65%; /* Prevents text from taking full width */
    max-width: 700px; /* Prevents excessive stretching */
    line-height: 1.6;
    font-size: 1.1em;
  }

  .about-img {
    margin-top: 0px;
    height: 320px;
    width: 210px;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 8px;
  }

    .about-figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 210px;
  }

  .about-caption {
    margin-top: 8px;
    margin-bottom: 4px;
    font-size: 0.85em;
    color: #666;
    text-align: center;
  }

  @media (max-width: 768px) {
    .about-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .about-text {
      width: 90%;
    }
    .about-img {
      margin-top: 10px;
      width: 70%;
      height: auto;
      object-fit: contain;
    }
  }
</style>


<div class="about-container">
  <div class="about-text">
    <p id="about">
        Thirza Dado (1993) is a postdoctoral researcher at the <a href="https://www.predictivebrainlab.com/">Predictive Brain Lab</a> of prof. Floris de Lange at the <a href="https://www.ru.nl/en/donders-institute">Donders Institute for Brain, Cognition and Behaviour</a> of the <a href="https://www.ru.nl/en">Radboud University</a>, where she works on curiosity in biological and artificial systems. Curiosity is the intrinsic drive to seek information and engage with the unknown. Its reward lies in the intellectual satisfaction of knowing, a fulfillment that comes from within rather than from external incentives like money or praise. Previously, she completed her PhD on neural coding with synthesized reality, which was funded by a personal top-talent fellowship. Before that, she obtained double master’s degrees in artificial intelligence and cognitive neuroscience with cum laude. Outside the lab, she loves snowboarding in winter and roadtripping the Atlantic coast in summer.
    </p> 
  </div>
  <figure class="about-figure">
  <img class="about-img" src="/assets/images/SB.jpeg" alt="How snowboarding's going.">
  <figcaption class="about-caption">Winter.</figcaption>
</figure>

</div>