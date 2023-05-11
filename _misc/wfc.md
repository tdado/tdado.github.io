---
title: "Wave function collapse"
layout: archive
author_profile: true
classes: wide
---

Learn to procedurally generate images based on a sample image using the <a href="https://github.com/mxgmn/WaveFunctionCollapse">wave function collapse algorithm</a> during the artificial intelligence master's course <a href="https://neuralcoding.nl/">Computer Graphics & Computer Vision</a> by <a href="https://www.ru.nl/en/people/guclu-u">Dr. Umut Güçlü</a> at Radboud University. <a href="https://lynnle.com/">Lynn</a>, <a href="https://www.ru.nl/personen/appel-m">Michelle</a> and myself are present as teaching assistants.  

In the weird world of quantum mechanics, quantum particles can be in lots of different states simultaneously, represented by a wave function. Imagine you are trying to catch a butterfly but don't know exactly where it is; it could be on a flower, in the air or somewhere else. The wave function then describes the probability of all these different states of the butterfly. However, when we actually <i>observe</i> the butterfly's state, the wave function <i>collapses</i> and the butterfly is forced to take on <u>one</u> specific state. It's like you caught the butterfly and can now see its exact colors. 🦋✨

The synthesis algorithm <b>wave function collapse</b> is loosely inspired on the concept from quantum mechanics; it uses a set of probabilities to describe all the possible states of a texture in superposition, which are then collapsed one-by-one to generate the resulting output pattern.


<table>
  <tr>
    <td><img src="/assets/images/wfc/Skyline_.png"></td>
    <td><img src="/assets/images/wfc/Skyline_1.gif"></td>
    <td><img src="/assets/images/wfc/Skyline_2.gif"></td>
    <td><img src="/assets/images/wfc/Skyline_3.gif"></td>
  </tr>
    <tr>
    <td><img src="/assets/images/wfc/Skyline2_.png"></td>
    <td><img src="/assets/images/wfc/Skyline2_1.gif"></td>
    <td><img src="/assets/images/wfc/Skyline2_2.gif"></td>
    <td><img src="/assets/images/wfc/Skyline2_3.gif"></td>
  </tr>
    <tr>
    <td><img src="/assets/images/wfc/Maze_.png"></td>
    <td><img src="/assets/images/wfc/Maze_1.gif"></td>
    <td><img src="/assets/images/wfc/Maze_2.gif"></td>
    <td><img src="/assets/images/wfc/Maze_3.gif"></td>
  </tr>
</table>

<i>The gifs show the process of synthesis by gradually collapsing the states in the output images. Starting in superposition, each state collapse brings the image closer to a fully-collapsed pattern that looks locally similar to the input sample image (shown as the smaller image on the left).</i>





