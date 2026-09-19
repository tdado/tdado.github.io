---
permalink: /work-archive/
entries_layout: grid
classes: wide
layout: collection
author_profile: true
---

<script>
  document.addEventListener("DOMContentLoaded", function() {
      var coll = document.getElementsByClassName("collapsible");
      for (var i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
              this.classList.toggle("active");
              var content = this.nextElementSibling;
              if (content.style.display === "none") {
                  content.style.display = "block";
              } else {
                  content.style.display = "none";
              }
          });
      }
  });
</script>

<style>
  .collapsible {
  background-color: #ecf1f8;
  color: #345995 !important;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: background-color 0.3s; 
  }

  .collapsible:after {
    content: '\002B';
    font-weight: bold;
    float: right;
    margin-left: 5px;
  }

  .active:after {
    content: "\2212";
  }

  a.footnote {
      text-decoration: none;
      color: #933f7a; /* Change color as needed */
      vertical-align: super;
      font-size: smaller;
  }
  
  /* Basic styling for the flex container */
  .event-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0px 0;
  }

  /* Styling for the text content in the left */
  .event-description {
    flex: 1;
    font-weight: bold;
    color: #333;
  }

  /* Styling for the event name (not bold) */
  .event-name {
    font-weight: normal;
    color: #333;
  }

  /* Styling for the date on the right */
  .event-date {
    flex-shrink: 0;
    font-style: italic;
    color: #777;
    margin-left: 10px;
  }

  .lab-affiliations {
    margin: 22px 0 30px 0;
    color: #777;
    font-size: 0.95em;
  }

  .lab-affiliations a {
    font-weight: 600;
  }

  .work-themes {
  color: #777;
  font-size: 0.95em;
  margin-bottom: 18px;
}

  @media (max-width: 768px) {
    body {
      font-size: 13px;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    hr {
      margin-top: 25px;
      margin-bottom: 25px;
    }

    ul.events li{
      margin-bottom: 20px;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }
    .event-item {
      flex-direction: column;
      align-items: flex-start;
    }
    .event-date {
      margin-left: 0;
      margin-top: 5px;
    }
}
.titles {
    color: #555; /* Dark grey for subtle emphasis */
}

</style>

<h1 style="color:#DD4124;">Work</h1>
<div class="work-themes">
  Exploration &middot; Visual Prediction &middot; Neural coding &middot; NeuroAI
</div>

<div class="lab-affiliations">
  <b>Labs:</b>
  <a href="https://www.predictivebrainlab.com/" target="_blank">Predictive Brain Lab</a>
  &nbsp;&middot;&nbsp;
  <a href="https://nin.nl/research-groups/levelt/" target="_blank">Levelt Group</a>
</div>

<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Research »</h2>
<ul style="display:none;">
    <li style="list-style-type: square">
        <b>Dado, T.</b>, de Lange, F., Berlot, E. (2025). <a href="/work/seeking">From seeing to seeking: belief-based exploration in gamified environments.</a> In Conference on Cognitive Computational Neuroscience. 
    </li> 
    <li style="list-style-type: square">
        Le, L., Kimman, N., <b>Dado, T.</b>, Seeliger, K., Papale, P., Lozano, A., Roelfsema, P., van Gerven, M., Güçlütürk, Y. and Güçlü, U. (2025). <a href="https://arxiv.org/pdf/2501.03741">Neural encoding with affine feature response transforms.</a> arXiv preprint arXiv:2501.03741.
    </li> 
    <li style="list-style-type: square">
        Le, L., <b>Dado, T.</b>, Seeliger, K., Papale, P., Lozano, A., Roelfsema, P., Güçlütürk, Y., van Gerven, M. and Güçlü, U. (2025). <a href="https://arxiv.org/pdf/2501.03051">Inverse receptive field attention for naturalistic image reconstruction from the brain.</a> arXiv preprint arXiv:2501.03051.
    </li> 
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Le, L., van Gerven, M., Güçlütürk, Y., & Güçlü, U. (2024). <a href="/work/pam">PAM: Predictive attention mechanism for neural decoding of visual perception.</a> bioRxiv, 2025-02.
    </li> 
    <li style="list-style-type: square">
        Le, L., Papale, P., Seeliger, K., Lozano, A., <b>Dado, T.</b>, Wang, F., Roelfsema, P.R., van Gerven, M., Güçlütürk, Y. and Güçlü, U. (2024). <a href="https://openreview.net/pdf?id=OWwdlxwnFN">MonkeySee: Space-time-resolved reconstructions of natural images from macaque multi-unit activity.</a> In The Thirty-eighth Annual Conference on Neural Information Processing Systems.
    </li> 
    <li style="list-style-type: square">
        <b>Dado, T.</b>, & Güçlü, U. (2024). <a href="/work/dicoding">Get more from less: Differential neural decoding for effective reconstruction of perceived naturalistic stimuli from noisy and scarce neural data.</a> In Proceedings of the Annual Meeting of the Cognitive Science Society (Vol. 46).
    </li> 
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Papale, P., Lozano, A., Le, L., Wang, F., van Gerven, M., ... & Güçlü, U. (2024). <a href="/work/brain2gan">Brain2GAN: Feature-disentangled neural encoding and decoding of visual perception in the primate brain.</a> PLoS Computational Biology, 20(5), e1012058.
    </li> 
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Papale, P., Lozano, A., Le, L., van Gerven, M., Roelfsema, P., Güçlütürk, Y., & Güçlü, U. (2023). <a href="https://2023.ccneuro.org/proceedings/0000813.pdf?s=W&pn=1495">Feature-disentangled reconstruction of perception from multi-unit recording.</a> In Conference on Cognitive Computational Neuroscience.
    </li>
    <li style="list-style-type: square">
        Le, L., Papale, P., Lozano, A., <b>Dado, T.</b>, Wang, F., van Gerven, M., Roelfsema, P., Güçlütürk, Y., & Güçlü, U. (2023). <a href="https://2023.ccneuro.org/proceedings/0001032.pdf?s=W&pn=1564">End-to-end reconstruction of natural images from multi-unit recordings with Brain2Pix.</a> In Conference on Cognitive Computational Neuroscience. 
    </li>
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Güçlütürk, Y., Ambrogioni, L., Ras, G., Bosch, S., van Gerven, M., & Güçlü, U. (2022). <a href="/work/hyper">Hyperrealistic neural decoding for reconstructing faces from fMRI activations via the GAN latent space.</a> Scientific Reports, 12(1), 141.
    </li>
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Güçlütürk, Y., Ambrogioni, L., Ras, G., Bosch, S., van Gerven, M., & Güçlü, U. (2021). <a href="/assets/files/hyper21.pdf">Hyperrealistic neural decoding of faces.</a> International IEEE EMBS Conference on Neural Engineering.
    </li>
    <li style="list-style-type: square">
        Güçlü, U. & <b>Dado, T.</b> (2021). <a href="/assets/files/afrt21.pdf">Affine feature response transforms.</a> International IEEE EMBS Conference on Neural Engineering.
    </li>
</ul>


<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Teaching »</h2>
<ul style="display:none;">
    <li class="event-item">
        <span class="event-description">
            <b><a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-mki73-ai-neurotechnology/">Artificial intelligence for neurotechnology</a></b>
            <span class="event-name">&middot; Guest lecturer</span>
        </span>
        <span class="event-date"><i>2021–2025</i></span>
    </li>
    <li class="event-item">
        <span class="event-description">
            <b><a href="https://summerschool.uva.nl/content/summer-courses/abc-summerschool/neuro-ai.html">ABC Summer School: Neuro-AI</a></b>
            <span class="event-name">&middot; Tutorial creator &amp; teaching assistant</span>
        </span>
        <span class="event-date"><i>2024</i></span>
    </li>
    <li class="event-item">
        <span class="event-description">
            <b><a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-bki230a-deep-learning/">Deep learning</a></b>
            <span class="event-name">&middot; Teaching assistant</span>
        </span>
        <span class="event-date"><i>2021–2024</i></span>
    </li>
    <li class="event-item">
        <span class="event-description">
            <b><a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-mki95-computer-graphics-computer-vision/">Computer graphics and computer vision</a></b>
            <span class="event-name">&middot; Teaching assistant</span>
        </span>
        <span class="event-date"><i>2020–2024</i></span>
    </li>
    <li class="event-item">
        <span class="event-description">
            <b>Proefstuderen</b>
            <span class="event-name">&middot; Guest lecturer</span>
        </span>
        <span class="event-date"><i>2022</i></span>
    </li>
    <li class="event-item">
        <span class="event-description">
            <b>Information and orientation team</b>
            <span class="event-name">&middot; Student advisor</span>
        </span>
        <span class="event-date"><i>2022</i></span>
    </li>
    <li class="event-item">
        <span class="event-description">
            <b>Human-computer interaction</b>
            <span class="event-name">&middot; Teaching assistant</span>
        </span>
        <span class="event-date"><i>2021</i></span>
    </li>
    <li class="event-item">
        <span class="event-description">
            <b>Brain reading and writing</b>
            <span class="event-name">&middot; Teaching assistant</span>
        </span>
        <span class="event-date"><i>2020</i></span>
    </li>

</ul>

<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Academic activities »</h2>
<ul style="display:none;">

  <li class="event-item">
    <span class="event-description">
      <b><a href="https://donders-neuro-ai-focus-group.github.io/" target="_blank" class="event-name-link">Donders Neuro-AI Focus Group</a></b>
      <span class="event-name">&middot; Co-organizer</span>
    </span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2025–present</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>NEAT</b> <span class="event-name">&middot; Talk &amp; poster</span>
    </span>
    <span class="event-date"><i>Osnabrück, Germany, 2026</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Donders Poster Session</b> <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2026</i></span>
  </li>

  <hr>

  <li class="event-item">
    <span class="event-description">
      <b>20th NVP Winter Conference</b> <span class="event-name">&middot; Talk &amp; poster</span>
    </span>
    <span class="event-date"><i>Egmond aan Zee, Netherlands, 2025</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Qua Art – Qua Science (De Museumfabriek)</b> <span class="event-name">&middot; Talk</span>
    </span>
    <span class="event-date"><i>Enschede, Netherlands, 2025</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Donders-NIN Day</b> <span class="event-name">&middot; Talk</span>
    </span>
    <span class="event-date"><i>Amsterdam, Netherlands, 2025</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Donders Neuro-AI Focus Group</b> <span class="event-name">&middot; Talk</span>
    </span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2025</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>8th Conference on CCN</b> <span class="event-name">&middot; Co-organizer &amp; poster</span>
    </span>
    <span class="event-date"><i>Amsterdam, Netherlands, 2025</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>NeuroTechHub: Mind-Reading Technology</b> <span class="event-name">&middot; Talk</span>
    </span>
    <span class="event-date"><i>Virtual, 2025</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Visual Inference Lab, Columbia University (Kriegeskorte Lab)</b> <span class="event-name">&middot; Talk</span>
    </span>
    <span class="event-date"><i>New York, US, 2025</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>46th Annual Meeting of the Cognitive Science Society</b> <span class="event-name">&middot; Talk</span>
    </span>
    <span class="event-date"><i>Rotterdam, Netherlands, 2024</i></span>
  </li>

  <hr>

  <li class="event-item">
    <span class="event-description">
      <b>19th NVP Winter Conference</b> <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Egmond aan Zee, Netherlands, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Dept. Brain &amp; Cognition, Psychology, University of Amsterdam</b> <span class="event-name">&middot; Talk</span>
    </span>
    <span class="event-date"><i>Amsterdam, Netherlands, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b><a href="https://icai.ai/">Innovation Center for Artificial Intelligence Day</a></b>
      <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>6th Conference on CCN</b> <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Oxford, United Kingdom, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Donders Poster Session</b> <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Women of NeurotechEU</b> <span class="event-name">&middot; Student ambassador</span>
    </span>
    <span class="event-date"><i>Cluj-Napoca, Romania, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>9th Dutch Bio-Medical Engineering Conference</b> <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Egmond aan Zee, Netherlands, 2023</i></span>
  </li>

  <hr>

  <li class="event-item">
    <span class="event-description">
      <b>Max Planck RG Vision and Comp. Cognition (Hebart Lab)</b> <span class="event-name">&middot; Talk</span>
    </span>
    <span class="event-date"><i>Leipzig, Germany, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Synapses Lecture Series (NeurotechEU)</b> <span class="event-name">&middot; Organizer</span>
    </span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>3rd NeurotechEU Board of Rectors Meeting</b> <span class="event-name">&middot; Student ambassador</span>
    </span>
    <span class="event-date"><i>Cluj-Napoca, Romania, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>18th NVP Winter Conference</b> <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Egmond aan Zee, Netherlands, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Donders Poster Session</b> <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2022</i></span>
  </li>

  <hr>

  <li class="event-item">
    <span class="event-description">
      <b>10th International IEEE/EMBS Conference on Neural Engineering</b> <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Virtual, 2021</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Welcoming Synapses: From Cajal to NeurotechEU</b> <span class="event-name">&middot; Talk</span>
    </span>
    <span class="event-date"><i>Virtual, 2021</i></span>
  </li>

  <li class="event-item">
    <span class="event-description">
      <b>Donders Poster Session</b> <span class="event-name">&middot; Poster</span>
    </span>
    <span class="event-date"><i>Virtual, 2020</i></span>
  </li>

</ul>


<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Awards & Funding »</h2>
<ul style="display:none;">
  <li style="list-style-type: square"><a href="https://www.ru.nl/en/donders-institute/news/donders-research-stimulation-funds-call-for-new-collaborations-and-focus-groups">Donders Research Stimulation Funds</a><span style="display: inline-block; float: right;"><i>2025, 2026</i></span></li>
  <li style="list-style-type: square">NeurotechEU Best Presentation Award <span style="display: inline-block; float: right;"><i>2021</i></span></li>
  <li style="list-style-type: square">DCC Student Assistant Grant <span style="display: inline-block; float: right;"><i>2021</i></span></li>
  <li style="list-style-type: square">Donders Best Poster Award <span style="display: inline-block; float: right;"><i>2020</i></span></li>
  <li style="list-style-type: square">AI TOPtalent PhD Fellowship <span style="display: inline-block; float: right;"><i>2020</i></span></li>
  <li style="list-style-type: square">DCC Student Assistant Fellowship <span style="display: inline-block; float: right;"><i>2020</i></span></li>
</ul>
<br>

<!-- Foraging Conference
European Conference on Visual Perception
Pre-master Introduction Day
Dondrite Career Event
Functional Analysis Meeting, DCCN -->