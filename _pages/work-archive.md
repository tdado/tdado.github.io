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
<!-- <b>Artificial Intelligence &middot; Cognitive Neuroscience &middot; Generative Modeling &middot; Neural Coding</b><br> -->

<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Research »</h2>
<ul style="display:none;">
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Le, L., van Gerven, M., Güçlütürk, Y., & Güçlü, U. (2025). <a href="https://www.biorxiv.org/content/10.1101/2024.06.04.596589v2">PAM: Predictive attention mechanism for neural decoding of visual perception.</a> bioRxiv, 2025-02.
    </li> 
    <li style="list-style-type: square">
        Le, L., Kimman, N., <b>Dado, T.</b>, Seeliger, K., Papale, P., Lozano, A., Roelfsema, P., van Gerven, M., Güçlütürk, Y. and Güçlü, U. (2025). <a href="https://arxiv.org/pdf/2501.03741">Neural encoding with affine feature response transforms.</a> arXiv preprint arXiv:2501.03741.
    </li> 
    <li style="list-style-type: square">
        Le, L., <b>Dado, T.</b>, Seeliger, K., Papale, P., Lozano, A., Roelfsema, P., Güçlütürk, Y., van Gerven, M. and Güçlü, U. (2025). <a href="https://arxiv.org/pdf/2501.03051">Inverse receptive field attention for naturalistic image reconstruction from the brain.</a> arXiv preprint arXiv:2501.03051.
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
        <span class="event-description"><b>Guest lecturer</b> &nbsp; <a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-mki73-ai-neurotechnology/" class="event-name">Artificial intelligence for neurotechnology</a></span>
        <span class="event-date"><i>2021 to 2025</i></span>
    </li>
    <li class="event-item">
        <span class="event-description"><b>Tutorial creator</b> &nbsp; <a href="https://summerschool.uva.nl/content/summer-courses/abc-summerschool/neuro-ai.html" class="event-name">ABC Summer School: Neuro-AI</a></span>
        <span class="event-date"><i>2024</i></span>
    </li>
    <li class="event-item">
        <span class="event-description"><b>Teaching assistant</b> &nbsp; <a href="https://summerschool.uva.nl/content/summer-courses/abc-summerschool/neuro-ai.html" class="event-name">ABC Summer School: Neuro-AI</a></span>
        <span class="event-date"><i>2024</i></span>
    </li>
    <li class="event-item">
        <span class="event-description"><b>Teaching assistant</b> &nbsp; <a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-bki230a-deep-learning/" class="event-name">Deep learning</a></span>
        <span class="event-date"><i>2021 to 2024</i></span>
    </li>
    <li class="event-item">
        <span class="event-description"><b>Teaching assistant</b> &nbsp; <a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-mki95-computer-graphics-computer-vision/" class="event-name">Computer graphics and computer vision</a></span>
        <span class="event-date"><i>2020 to 2024</i></span>
    </li>
    <li class="event-item">
        <span class="event-description"><b>Guest lecturer</b> &nbsp; <span class="event-name">Proefstuderen</span></span>
        <span class="event-date"><i>2022</i></span>
    </li>
    <li class="event-item">
        <span class="event-description"><b>Member</b> &nbsp; <span class="event-name">Information and orientation team</span></span>
        <span class="event-date"><i>2022</i></span>
    </li>
    <li class="event-item">
        <span class="event-description"><b>Teaching assistant</b> &nbsp; <span class="event-name">Human-computer interaction</span></span>
        <span class="event-date"><i>2021</i></span>
    </li>
    <li class="event-item">
        <span class="event-description"><b>Teaching assistant</b> &nbsp; <span class="event-name">Brain reading and writing</span></span>
        <span class="event-date"><i>2020</i></span>
    </li>
</ul>


<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Speaking engagements »</h2>
<ul style="display:none;">
  <li class="event-item">
    <span class="event-description"><b>TBA</b> &nbsp; <span class="event-name">Conference on Cognitive Computational Neuroscience</span></span>
    <span class="event-date"><i>Amsterdam, Netherlands, 2025</i></span>
  </li>
  <li class="event-item">
    <span class="event-description"><b>Speaker</b> &nbsp; <span class="event-name">Visual Inference Lab | Kriegeskorte, Columbia University</span></span>
    <span class="event-date"><i>New York, US, 2025</i></span>
  </li>
  <hr>
  <li class="event-item">
    <span class="event-description"><b>Attendee</b> &nbsp; <span class="event-name">Foraging Conference</span></span>
    <span class="event-date"><i>Lyon, France, 2024</i></span>
  </li>
  <li class="event-item">
    <span class="event-description"><b>Speaker</b> &nbsp; <span class="event-name">46th Annual Meeting of the Cognitive Science Society</span></span>
    <span class="event-date"><i>Rotterdam, Netherlands, 2024</i></span>
  </li>
  <hr>

  <li class="event-item">
    <span class="event-description"><b>Poster presenter</b> &nbsp; <span class="event-name">19th NVP Winter Conference on Brain & Cognition</span></span>
    <span class="event-date"><i>Egmond aan Zee, Netherlands, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Speaker</b> &nbsp; <span class="event-name">Dept. Brain & Cognition, Psychology, University of Amsterdam</span></span>
    <span class="event-date"><i>Amsterdam, Netherlands, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Poster presenter</b> &nbsp; <span class="event-name">Innovation Center for Artificial Intelligence Day</span></span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Poster presenter</b> &nbsp; <span class="event-name">Conference on Cognitive Computational Neuroscience</span></span>
    <span class="event-date"><i>Oxford, United Kingdom, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Poster presenter</b> &nbsp; <span class="event-name">Donders Poster Session</span></span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Student ambassador</b> &nbsp; <span class="event-name">Women of NeurotechEU</span></span>
    <span class="event-date"><i>Cluj-Napoca, Romania, 2023</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Poster presenter</b> &nbsp; <span class="event-name">9th Dutch Bio-Medical Engineering Conference</span></span>
    <span class="event-date"><i>Egmond aan Zee, Netherlands, 2023</i></span>
  </li>
  <hr>

  <li class="event-item">
    <span class="event-description"><b>Speaker</b> &nbsp; <span class="event-name">Max Planck RG Vision and Comp. Cognition | Hebart Lab</span></span>
    <span class="event-date"><i>Leipzig, Germany, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Organiser</b> &nbsp; <span class="event-name">Synapses Lecture Series</span></span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Attendee</b> &nbsp; <span class="event-name">European Conference on Visual Perception</span></span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Speaker</b> &nbsp; <span class="event-name">Pre-master Introduction Day</span></span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Student ambassador</b> &nbsp; <span class="event-name">3rd NeurotechEU Board of Rectors Meeting</span></span>
    <span class="event-date"><i>Cluj-Napoca, Romania, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Poster presenter</b> &nbsp; <span class="event-name">18th NVP Winter Conference on Brain & Cognition</span></span>
    <span class="event-date"><i>Egmond aan Zee, Netherlands, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Speaker</b> &nbsp; <span class="event-name">Dondrite Career Event</span></span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2022</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Poster presenter</b> &nbsp; <span class="event-name">Donders Poster Session</span></span>
    <span class="event-date"><i>Nijmegen, Netherlands, 2022</i></span>
  </li>
  <hr>

  <li class="event-item">
    <span class="event-description"><b>Poster presenter</b> &nbsp; <span class="event-name">10th International IEEE/EMBS Conference on Neural Engineering</span></span>
    <span class="event-date"><i>Virtual, 2021</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Speaker</b> &nbsp; <span class="event-name">Welcoming Synapses: From Cajal to NeurotechEU</span></span>
    <span class="event-date"><i>Virtual, 2021</i></span>
  </li>

  <li class="event-item">
    <span class="event-description"><b>Speaker</b> &nbsp; <span class="event-name">Functional Analysis Meeting, DCCN</span></span>
    <span class="event-date"><i>Virtual, 2021</i></span>
  </li>
  <hr>

  <li class="event-item">
    <span class="event-description"><b>Poster presenter</b> &nbsp; <span class="event-name">Donders Poster Session</span></span>
    <span class="event-date"><i>Virtual, 2020</i></span>
  </li>
</ul>

<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Research grants and prizes »</h2>
<ul style="display:none;">
  <li style="list-style-type: square">NeurotechEU Best Presentation Award <span style="display: inline-block; float: right;"><i>2021</i></span></li>
  <li style="list-style-type: square">DCC Student Assistant Grant <span style="display: inline-block; float: right;"><i>2021</i></span></li>
  <li style="list-style-type: square">Donders Best Poster Award <span style="display: inline-block; float: right;"><i>2020</i></span></li>
  <li style="list-style-type: square">AI TOPtalent PhD Fellowship <span style="display: inline-block; float: right;"><i>2020</i></span></li>
  <li style="list-style-type: square">DCC Student Assistant Fellowship <span style="display: inline-block; float: right;"><i>2020</i></span></li>
</ul>
<br>