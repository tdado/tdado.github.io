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
    display: block;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    color: inherit;
    text-decoration: none;
    transition: transform 0.2s ease;
  }

  .media-item:hover {
    transform: translateY(-2px);
  }

  /* Consistent 16:9 media area */
  .media-image-wrap,
  .media-video-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  .media-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Slightly zoom the NPO image */
  .media-image-wrap.zoom img {
    transform: scale(1.2);
  }

  .media-video-wrap iframe,
  .media-video-wrap video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .media-content {
    padding: 12px;
  }

  .media-title {
    margin-bottom: 4px;
    color: #111;
    font-weight: 600;
    line-height: 1.4;
  }

  .media-source {
    color: #777;
    font-size: 0.9em;
  }

  .media-content audio {
    width: 100%;
    margin-top: 10px;
  }
</style>

<h1 style="color:#DD4124;">Media</h1>

<div class="media-grid">

  <a href="https://npo.nl/start/afspelen/nooit-meer-dood" class="media-item">
    <div class="media-image-wrap zoom">
      <img src="/assets/images/media/diederik-jekel.avif" alt="Nooit meer dood">
    </div>
    <div class="media-content">
      <div class="media-title">Nooit meer dood</div>
      <div class="media-source">NPO</div>
    </div>
  </a>

  <a href="/assets/article.jpg" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/fam.JPG" alt="Een uitzonderlijke operatie">
    </div>
    <div class="media-content">
      <div class="media-title">Een uitzonderlijke operatie</div>
      <div class="media-source">Moesson Magazine</div>
    </div>
  </a>

  <a href="https://www.gld.nl/nieuws/8385003/gedachtenlezen-kan-niet-deze-onderzoekers-kunnen-het-wel-met-ai" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/e8b06a79-6a44-31d9-8e37-8ffda36e8230.jpg" alt="Omroep Gelderland">
    </div>
    <div class="media-content">
      <div class="media-title">Gedachtenlezen kan niet? Deze onderzoekers kunnen het wél met AI</div>
      <div class="media-source">Omroep Gelderland</div>
    </div>
  </a>

  <a href="https://www.ru.nl/onderzoek/onderzoeksnieuws/gedachtenlezen-door-afbeeldingen-te-maken-op-basis-van-hersenactiviteit" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/ai-gedachtelezen-klein.png.webp" alt="Radboud University">
    </div>
    <div class="media-content">
      <div class="media-title">“Gedachtenlezen” door afbeeldingen te maken op basis van hersenactiviteit</div>
      <div class="media-source">Onderzoeksnieuws (RU)</div>
    </div>
  </a>

  <a href="https://tweakers.net/reviews/13598/hersenchips-geven-patienten-hun-spraak-terug-en-bedrijven-toegang-tot-hun-brein.html" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/decoding.jpg" alt="Tweakers">
    </div>
    <div class="media-content">
      <div class="media-title">Hersenchips geven patiënten hun spraak terug en bedrijven toegang tot hun brein</div>
      <div class="media-source">Tweakers</div>
    </div>
  </a>

  <a href="https://www.newscientist.com/article/2438107-mind-reading-ai-recreates-what-youre-looking-at-with-amazing-accuracy/" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/ns.webp" alt="New Scientist">
    </div>
    <div class="media-content">
      <div class="media-title">Mind-reading AI recreates what you're looking at with amazing accuracy</div>
      <div class="media-source">New Scientist</div>
    </div>
  </a>

  <a href="/assets/Seiten_72_73_Handelsblatt_2023-06-30.pdf" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/avif.avif" alt="Handelsblatt">
    </div>
    <div class="media-content">
      <div class="media-title">Wie KI lernt, unsere Gedanken zu lesen</div>
      <div class="media-source">Handelsblatt</div>
    </div>
  </a>

  <a href="https://www.nu.nl/tech/6261140/de-computer-weet-wat-je-ziet-hoe-breinsignalen-worden-omgezet-in-beeld.html" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/ai-mri.avif" alt="NU.nl">
    </div>
    <div class="media-content">
      <div class="media-title">De computer weet wat je ziet: hoe breinsignalen worden omgezet in beeld</div>
      <div class="media-source">NU.nl</div>
    </div>
  </a>

  <a href="https://www.volkskrant.nl/voorpagina/kunstmatige-intelligentie-helpt-bij-het-uitlezen-van-uw-brein-~b8f6a303/" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/kunstmatige-intelligentie-helpt-bij-het-uitlezen-van-uw-brei.jpeg" alt="De Volkskrant">
    </div>
    <div class="media-content">
      <div class="media-title">Kunstmatige intelligentie helpt bij het uitlezen van uw brein</div>
      <div class="media-source">De Volkskrant</div>
    </div>
  </a>

  <a href="https://www.vice.com/en/article/wxje8n/researchers-use-ai-to-generate-images-based-on-peoples-brain-activity" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/1677867737233-mri.webp" alt="Vice">
    </div>
    <div class="media-content">
      <div class="media-title">Researchers Use AI to Generate Images Based on People's Brain Activity</div>
      <div class="media-source">Vice</div>
    </div>
  </a>

  <a href="https://www.bbc.co.uk/programmes/m001bhvs" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/p0bfswk9.jpg" alt="BBC Newsday">
    </div>
    <div class="media-content">
      <div class="media-title">Newsday – BBC World Service 24-08-2022</div>
      <div class="media-source">BBC</div>
      <audio src="/assets/bbc.mp3" controls preload="metadata"></audio>
    </div>
  </a>

  <a href="https://www.mailplus.co.uk/edition/health/good-health/214983/are-these-pictures-proof-brain-scans-can-read-our-minds" class="media-item">
    <div class="media-image-wrap">
      <img src="/assets/images/media/214aa59ed2c2-header4557220.jpg" alt="Daily Mail">
    </div>
    <div class="media-content">
      <div class="media-title">Are these pictures PROOF brain scans can read our minds?</div>
      <div class="media-source">Daily Mail</div>
    </div>
  </a>

  <div class="media-item">
    <div class="media-video-wrap">
      <iframe
        src="https://www.youtube.com/embed/sL1CUWM1qaY"
        title="Inside the Dutch machine that can read people's minds"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <div class="media-content">
      <div class="media-title">Inside the Dutch machine that can read people's minds</div>
      <div class="media-source">DW, Science Unscripted</div>
    </div>
  </div>

  <div class="media-item">
    <div class="media-video-wrap">
      <iframe
        src="https://www.youtube.com/embed/9xfq_Kod7KQ"
        title="Brain Awareness Week: Research Insights"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <div class="media-content">
      <div class="media-title">Brain Awareness Week: Research Insights</div>
      <div class="media-source">Radboud University</div>
    </div>
  </div>

  <div class="media-item">
    <div class="media-video-wrap">
      <video controls playsinline>
        <source src="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="media-content">
      <div class="media-title">
        <a href="https://drive.google.com/file/d/1K0ZGX91Sogmksyc1_INhr4fgJy99S5lJ/view?usp=sharing" target="_blank" rel="noopener">
          Kennisclip: profielwerkstuk schrijven
        </a>
      </div>
      <div class="media-source">Radboud Pre-University College</div>
    </div>
  </div>

</div>