---
permalink: /about/
title: "About"
layout: collection
author_profile: true
classes: wide
---
<style>
  .about-container {
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }

  .about-text {
    flex: 1;
    line-height: 1.6;
    font-size: 1.1em;
  }

  .about-img {
    width: 300px;
    height: auto;
    align-self: flex-start;
    margin-top: 20px;
    max-width: 100%; /* Makes sure it scales with screen size */
  }

  /* Responsive Design for Small Screens */
  @media (max-width: 768px) { /* Adjusts for tablets & phones */
    .about-container {
      flex-direction: column; /* Stack image below text */
      align-items: center; /* Center content */
      text-align: center;
    }

    .about-img {
      width: 70%; /* Scale image dynamically */
      max-width: 200px; /* Prevents it from getting too big */
      margin-top: 10px;
    }
  }
</style>


<div style="about-container">
  <div style="about-text">
    <p id="about">
        Thirza Dado (1993) is a postdoctoral researcher at the <a href="https://www.predictivebrainlab.com/">Predictive Brain Lab</a> of prof. Floris de Lange at the <a href="https://www.ru.nl/en/donders-institute">Donders Institute for Brain, Cognition and Behaviour</a> of the <a href="https://www.ru.nl/en">Radboud University</a>, where she works on curiosity in biological and artificial systems. Curiosity is the intrinsic drive to seek information and engage with the unknown. Its reward lies in the intellectual satisfaction of knowing, a fulfillment that comes from within rather than from external incentives like money or praise. Previously, she completed her PhD on neural coding with synthesized reality, which was funded by a personal top-talent fellowship. Before that, she obtained double master’s degrees in artificial intelligence and cognitive neuroscience with cum laude.
    </p> 
  </div>

  <img style="width: 300px; height: auto; align-self: flex-start; margin-top: 20px;" src="/assets/images/profile2.png" alt="Thirza Dado's profile picture">
</div>