---
permalink: /media/
layout: collection
author_profile: true
classes: wide
---

<style>
  .media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .media-item {
    background-color: #ffffff; /* White background for the tiles */
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Light shadow for a floating effect */
    text-decoration: none; /* Remove underline from link */
    color: inherit; /* Inherit text color */
    display: block; /* Ensure the entire tile is clickable */
  }

  .media-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow on hover */
  }

  .media-item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .media-content {
    padding: 10px;
  }

  .media-title {
    font-weight: bold;
    color: #333; /* Darker text color for contrast */
    margin-bottom: 5px;
  }

  .media-source {
    color: #555; /* Slightly lighter text color for the source */
    font-size: 0.9em;
  }
</style>

<h1 style="color: #DD4124;">Media</h1>

<div class="media-grid">
  <a href="https://www.newscientist.com/article/2438107-mind-reading-ai-recreates-what-youre-looking-at-with-amazing-accuracy/" class="media-item">
    <img src="/assets/images/media/ns.webp" alt="New Scientist">
    <div class="media-content">
      <div class="media-title">Mind-reading AI recreates what you're looking at with amazing accuracy</div>
      <div class="media-source">New Scientist</div>
    </div>
  </a>

  <a href="/assets/Seiten_72_73_Handelsblatt_2023-06-30.pdf" class="media-item">
    <img src="/assets/images/media/avif.avif" alt="Handelsblatt">
    <div class="media-content">
      <div class="media-title">Wie KI lernt, unsere Gedanken zu lesen</div>
      <div class="media-source">Handelsblatt</div>
    </div>
  </a>

  <a href="https://www.nu.nl/tech/6261140/de-computer-weet-wat-je-ziet-hoe-breinsignalen-worden-omgezet-in-beeld.html" class="media-item">
    <img src="/assets/images/media/ai-mri.avif" alt="NU.nl">
    <div class="media-content">
      <div class="media-title">De computer weet wat je ziet: hoe breinsignalen worden omgezet in beeld</div>
      <div class="media-source">NU.nl</div>
    </div>
  </a>

  <a href="https://www.volkskrant.nl/voorpagina/kunstmatige-intelligentie-helpt-bij-het-uitlezen-van-uw-brein-~b8f6a303/" class="media-item">
    <img src="/assets/images/media/kunstmatige-intelligentie-helpt-bij-het-uitlezen-van-uw-brei.jpeg" alt="De Volkskrant">
    <div class="media-content">
      <div class="media-title">Kunstmatige intelligentie helpt bij het uitlezen van uw brein</div>
      <div class="media-source">De Volkskrant</div>
    </div>
  </a>

  <a href="https://www.vice.com/en/article/wxje8n/researchers-use-ai-to-generate-images-based-on-peoples-brain-activity" class="media-item">
    <img src="/assets/images/media/1677867737233-mri.webp" alt="Vice">
    <div class="media-content">
      <div class="media-title">Researchers Use AI to Generate Images Based on People's Brain Activity</div>
      <div class="media-source">Vice</div>
    </div>
  </a>

  <a href="https://www.bbc.co.uk/programmes/m001bhvs" class="media-item">
    <img src="/assets/images/media/p0bfswk9.jpg" alt="BBC Newsday">
    <div class="media-content">
      <div class="media-title">Newsday - BBC World Service 24-08-2022</div>
      <div class="media-source">BBC</div>
      <audio src="/assets/bbc.mp3" controls preload></audio>
    </div>
  </a>

  <a href="https://www.mailplus.co.uk/edition/health/good-health/214983/are-these-pictures-proof-brain-scans-can-read-our-minds" class="media-item">
    <img src="/assets/images/media/214aa59ed2c2-header4557220.jpg" alt="Daily Mail">
    <div class="media-content">
      <div class="media-title">Are these pictures PROOF brain scans can read our minds?</div>
      <div class="media-source">Daily Mail</div>
    </div>
  </a>

<div class="media-item">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/sL1CUWM1qaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div class="media-content">
    <div class="media-title">Inside the Dutch machine that can read people's minds</div>
    <div class="media-source">DW, Science Unscripted</div>
  </div>
</div>

<div class="media-item">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/9xfq_Kod7KQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div class="media-content">
    <div class="media-title">Brain Awareness Week: Research Insights</div>
    <div class="media-source">Radboud University</div>
  </div>
</div>
</div>