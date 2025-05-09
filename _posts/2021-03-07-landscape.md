---
title: "Landscape generation"
layout: posts
classes: wide
header:
    teaser: /assets/images/tiles/landscape.png
---

{{ page.date | date: '%Y, %d %B' }}

In the master's course <a href="https://www.ru.nl/courseguides/socsci/courses-osiris/ai/sow-mki95-computer-graphics-computer-vision/">Computer Graphics & Computer Vision</a>, students procedurally generate their own mountain-like terrain in Unity using Perlin noise. This was my landscape. 

Click on any button in the window below to start playing.

<i>It ends at infinity, so it never ends.</i>


<div id="unity-container" class="unity-desktop">
    <canvas id="unity-canvas" width=960 height=600></canvas>
    <div id="unity-loading-bar">
    <div id="unity-logo"></div>
    <div id="unity-progress-bar-empty">
        <div id="unity-progress-bar-full"></div>
    </div>
    </div>
    <div id="unity-mobile-warning">
    WebGL builds are not supported on mobile devices.
    </div>
    <div id="unity-footer">
    <div id="unity-webgl-logo"></div>
    <div id="unity-fullscreen-button"></div>
    </div>
</div>
<script>
    var buildUrl = "../../assets/unity/landscape7/Build";
    var loaderUrl = buildUrl + "/landscape7.loader.js";
    var config = {
    dataUrl: buildUrl + "/landscape7.data",
    frameworkUrl: buildUrl + "/landscape7.framework.js",
    codeUrl: buildUrl + "/landscape7.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "LandscapeGeneration",
    productVersion: "1",
    };

    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    var loadingBar = document.querySelector("#unity-loading-bar");
    var progressBarFull = document.querySelector("#unity-progress-bar-full");
    var fullscreenButton = document.querySelector("#unity-fullscreen-button");
    var mobileWarning = document.querySelector("#unity-mobile-warning");

    // By default Unity keeps WebGL canvas render target size matched with
    // the DOM size of the canvas element (scaled by window.devicePixelRatio)
    // Set this to false if you want to decouple this synchronization from
    // happening inside the engine, and you would instead like to size up
    // the canvas DOM size and WebGL render target sizes yourself.
    // config.matchWebGLToCanvasSize = false;

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    container.className = "unity-mobile";
    // Avoid draining fillrate performance on mobile devices,
    // and default/override low DPI mode on mobile browsers.
    config.devicePixelRatio = 1;
    mobileWarning.style.display = "block";
    setTimeout(() => {
        mobileWarning.style.display = "none";
    }, 5000);
    } else {
    canvas.style.width = "960px";
    canvas.style.height = "600px";
    }
    loadingBar.style.display = "block";

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance) => {
        loadingBar.style.display = "none";
        fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
        };
    }).catch((message) => {
        alert(message);
    });
    };
    document.body.appendChild(script);
</script>


