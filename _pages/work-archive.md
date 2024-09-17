---
permalink: /work-archive/
entries_layout: grid
classes: wide
layout: collection
author_profile: true

# feature_row:
#   - image_path: /assets/images/put/red2.png
#     alt: "PAM"
#     title: "PAM"
#     url: "/work/pam"
#     excerpt: "'Predictive Attention Mechanism'"
#   - image_path: /assets/images/put/red2.png
#     alt: "Dicoding"
#     title: "Dicoding"
#     url: "/work/dicoding"
#     excerpt: "'DIfferential neural deCODING'"
#   - image_path: /assets/images/put/red2.png
#     alt: "Brain2GAN"
#     title: "Brain2GAN"
#     url: "/work/brain2gan"
#     excerpt: "'Feature-disentangled neural coding'"
#   - image_path: /assets/images/put/red2.png
#     alt: "Hyper"
#     title: "Hyper"
#     url: "/work/hyper"
#     excerpt: "'HYperrealistic neural decoding of PERception"
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
}
.titles {
    color: #555; /* Dark grey for subtle emphasis */
}
</style>

<h1 style="color:#DD4124;">Work</h1>
<b>Artificial Intelligence &middot; Cognitive Neuroscience &middot; Generative Modeling &middot; Neural Coding</b><br>

Throughout my PhD, I balanced research (~90%) with teaching (~10%) as well as speaking engagements to share and advance knowledge. This is an overview of my endeavors:

<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Research »</h2>
<ul style="display:none;">
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Le, L., van Gerven, M., Gucluturk, Y., & Guclu, U. (2024). <a href="/work/pam">PAM: Predictive attention mechanism for neural decoding of visual perception.</a> bioRxiv, 2024-06.
    </li> 
    <li style="list-style-type: square">
        <b>Dado, T.</b>, & Güçlü, U. (2024). <a href="/work/dicoding">Get more from less: Differential neural decoding for effective reconstruction of perceived naturalistic stimuli from noisy and scarce neural data.</a> In Proceedings of the Annual Meeting of the Cognitive Science Society (Vol. 46).
    </li> 
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Papale, P., Lozano, A., Le, L., Wang, F., van Gerven, M., ... & Güçlü, U. (2024). <a href="/work/brain2gan">Brain2GAN: Feature-disentangled neural encoding and decoding of visual perception in the primate brain.</a> PLoS computational biology, 20(5), e1012058.
    </li> 
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Papale, P., Lozano, A., Le, L., van Gerven, M., Roelfsema, P., Güçlütürk, Y., & Güçlü, U. (2023). <a href="https://2023.ccneuro.org/proceedings/0000813.pdf?s=W&pn=1495">Feature-disentangled reconstruction of perception from multi-unit recording.</a> In Conference on Cognitive Computational Neuroscience.
    </li>
    <li style="list-style-type: square">
        Le, L., Papale, P., Lozano, A., <b>Dado, T.</b>, Wang, F., van Gerven, M., Roelfsema, P., Güçlütürk, Y., & Güçlü, U. (2023). <a href="https://2023.ccneuro.org/proceedings/0001032.pdf?s=W&pn=1564">End-to-end reconstruction of natural images from multi-unit recordings with Brain2Pix.</a> In Conference on Cognitive Computational Neuroscience. 
    </li>
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Güçlütürk, Y., Ambrogioni, L., Ras, G., Bosch, S., van Gerven, M., & Güçlü, U. (2022). <a href="/work/hyper">Hyperrealistic neural decoding for reconstructing faces from fMRI activations via the GAN latent space.</a> Scientific reports, 12(1), 141.
    </li>
    <li style="list-style-type: square">
        <b>Dado, T.</b>, Güçlütürk, Y., Ambrogioni, L., Ras, G., Bosch, S., van Gerven, M., & Güçlü, U. (2022). <a href="/assets/files/hyper21.pdf">Hyperrealistic neural decoding of faces.</a> International IEEE EMBS Conference on Neural Engineering.
    </li>
    <li style="list-style-type: square">
        Güçlü, U. & <b>Dado, T.</b> (2021). <a href="/assets/files/afrt21.pdf">Affine feature response transforms.</a> International IEEE EMBS Conference on Neural Engineering.
    </li>
</ul>


<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Teaching »</h2>
<ul style="display:none;">
  <li style="list-style-type: square"><b>Teaching assistant</b> &nbsp; <a href="https://summerschool.uva.nl/content/summer-courses/abc-summerschool/neuro-ai.html">ABC Summer School: Neuro-AI</a> <span style="display: inline-block; float: right;"><i>2024</i></span></li>
  <li style="list-style-type: square"><b>Guest lecturer</b> &nbsp; <a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-mki73-ai-neurotechnology/">Artificial intelligence for neurotechnology</a><span style="display: inline-block; float: right;"><i>2021 to 2024</i></span></li>
  <li style="list-style-type: square"><b>Teaching assistant</b> &nbsp; <a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-bki230a-deep-learning/">Deep learning</a><span style="display: inline-block; float: right;"><i>2021 to 2024</i></span></li>
  <li style="list-style-type: square"><b>Teaching assistant</b> &nbsp; <a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-mki95-computer-graphics-computer-vision/">Computer graphics and computer vision</a><span style="display: inline-block; float: right;"><i>2020 to 2024</i></span></li>
  <li style="list-style-type: square"><b>Guest lecturer</b> &nbsp; Proefstuderen<a href="#footnote1" class="footnote">1</a> <span style="display: inline-block; float: right;"><i>2022</i></span></li>
  <li style="list-style-type: square"><b>Member</b> &nbsp; Information and orientation team<a href="#footnote1" class="footnote">1</a> <span style="display: inline-block; float: right;"><i>2022</i></span></li>
  <li style="list-style-type: square"><b>Teaching assistant</b> &nbsp; Human-computer interaction <span style="display: inline-block; float: right;"><i>2021</i></span></li>
  <li style="list-style-type: square"><b>Teaching assistant</b> &nbsp; Brain reading and writing <span style="display: inline-block; float: right;"><i>2020</i></span></li>
</ul>

<h2 class="collapsible" style="color: #5B5EA6; cursor: pointer;">Speaking engagements »</h2>
<ul style="display:none;">

  <li style="list-style-type: square; text-align: justify;"><b>Speaker</b> &nbsp; CogSci
  <span style="display: inline-block; float: right;"><i>Rotterdam, Netherlands, 2024</i></span></li>

  <hr>

  <li style="list-style-type: square; text-align: justify;"><b>Poster presenter</b> &nbsp; 19th NVP Winter Conference on Brain & Cognition
  <span style="display: inline-block; float: right;"><i>Egmond aan Zee, Netherlands, 2023</i></span></li>

  <li style="list-style-type: square; text-align: justify;"><b>Speaker</b> &nbsp; Department of Brain & Cognition, Psychology, UvA (lab visit)
  <span style="display: inline-block; float: right;"><i>Amsterdam, Netherlands, 2023</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Poster presenter</b> &nbsp; Innovation Center for Artificial Intelligence Day
  <span style="display: inline-block; float: right;"><i>Nijmegen, Netherlands, 2023</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Poster presenter</b> &nbsp; Conference on Cognitive Computational Neuroscience
  <span style="display: inline-block; float: right;"><i>Oxford, United Kingdom, 2023</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Poster presenter</b> &nbsp; Donders Poster Session<a href="#footnote1" class="footnote">2</a>
  <span style="display: inline-block; float: right;"><i>Nijmegen, Netherlands, 2023</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Student ambassador</b> &nbsp; Women of NeurotechEU<a href="#footnote1" class="footnote">3</a>
  <span style="display: inline-block; float: right;"><i>Cluj-Napoca, Romania, 2023</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Poster presenter</b> &nbsp; 9th Dutch Bio-Medical Engineering Conference
  <span style="display: inline-block; float: right;"><i>Egmond aan Zee, Netherlands, 2023</i></span></li>

  <hr>

  <li style="list-style-type: square; text-align: left;"><b>Speaker</b> &nbsp; Max Planck Research Group Vision and Computational Cognition (lab visit)
  <span style="display: inline-block; float: right;"><i>Leipzig, Germany, 2022</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Organiser</b> &nbsp; Synapses Lecture Series<a href="#footnote1" class="footnote">3</a>
  <span style="display: inline-block; float: right;"><i>Nijmegen, Netherlands, 2022</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Attendee</b> &nbsp; European Conference on Visual Perception
  <span style="display: inline-block; float: right;"><i>Nijmegen, Netherlands, 2022</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Speaker</b> &nbsp; Pre-master Introduction Day<a href="#footnote1" class="footnote">1</a>
  <span style="display: inline-block; float: right;"><i>Nijmegen, Netherlands, 2022</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Finalist</b> &nbsp; AI Song Contest
  <span style="display: inline-block; float: right;"><i>Liege, Belgium, 2022</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Student ambassador</b> &nbsp; 3rd NeurotechEU Board of Rectors Meeting<a href="#footnote1" class="footnote">3</a>
  <span style="display: inline-block; float: right;"><i>Cluj-Napoca, Romania, 2022</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Poster presenter</b> &nbsp; 18th NVP Winter Conference on Brain & Cognition
  <span style="display: inline-block; float: right;"><i>Egmond aan Zee, Netherlands, 2022</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Speaker</b> &nbsp; Dondrite Career Event<a href="#footnote1" class="footnote">4</a>
  <span style="display: inline-block; float: right;"><i>Nijmegen, Netherlands, 2022</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Poster presenter</b> &nbsp; Donders Poster Session<a href="#footnote1" class="footnote">1</a>
  <span style="display: inline-block; float: right;"><i>Nijmegen, Netherlands, 2022</i></span></li>

  <hr>

  <li style="list-style-type: square; text-align: left;"><b>Poster presenter</b> &nbsp; 10th International IEEE/EMBS Conference on Neural Engineering
  <span style="display: inline-block; float: right;"><i>Virtual, 2021</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Speaker</b> &nbsp; Welcoming Synapses: From Cajal to NeurotechEU<a href="#footnote1" class="footnote">3</a>
  <span style="display: inline-block; float: right;"><i>Virtual, 2021</i></span></li>

  <li style="list-style-type: square; text-align: left;"><b>Speaker</b> &nbsp; Functional Analysis Meeting, Donders Centre for Cognitive Neuroimaging (lab visit)
  <span style="display: inline-block; float: right;"><i>Virtual, 2021</i></span></li>

  <hr>

  <li style="list-style-type: square; text-align: left;"><b>Poster presenter</b> &nbsp; Donders Poster Session<a href="#footnote1" class="footnote">2</a>
  <span style="display: inline-block; float: right;"><i>Virtual, 2020</i></span></li>
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

<footer>
  <p id="footnotes" style="font-size: smaller;">
    <sup style="color: #933f7a;">1</sup>The master's programme of Cognitive Neuroscience, Radboud University;
    <sup style="color: #933f7a;">2</sup>Donders Institute for Brain, Cognition and Behaviour;
    <sup style="color: #933f7a;">3</sup>NeurotechEU; The European University of Brain and Technology;
    <sup style="color: #933f7a;">4</sup>Dondrite: study association of the master's Cognitive Neuroscience;
  </p>
</footer>