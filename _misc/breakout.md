---
title: "Break Out"
layout: archive
author_profile: true
classes: wide
---
Learn to implement your own game in <a href="https://unity.com/">Unity</a> during the artificial intelligence master's course <a href="https://neuralcoding.nl/">Computer Graphics & Computer Vision</a> by <a href="https://www.ru.nl/en/people/guclu-u">Dr. Umut Güçlü</a> at Radboud University. <a href="https://lynnle.com/">Lynn Le</a> and myself are present as teaching assistants. Here, you can find my game:

<!-- <b>Enter:</b> start game, <b>R:</b> restart game, <b>Escape:</b> pause game. -->
<i>Enter</i>: start game, <i>R</i>: restart game, <i>Escape</i>: pause game.

<div id="unity-container" class="unity-desktop">
    <canvas id="unity-canvas"></canvas>
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


(Find Lynn's <a href="https://lynnle.com/blog/2020/developing-a-simple-game/">here</a>)

<script>
    var buildUrl = "../../assets/unity/breakout7/Build";
    var loaderUrl = buildUrl + "/breakout7.loader.js";
    var config = {
    dataUrl: buildUrl + "/breakout7.data",
    frameworkUrl: buildUrl + "/breakout7.framework.js",
    codeUrl: buildUrl + "/breakout7.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Breakout",
    productVersion: "1.0",
    };

    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    var loadingBar = document.querySelector("#unity-loading-bar");
    var progressBarFull = document.querySelector("#unity-progress-bar-full");
    var fullscreenButton = document.querySelector("#unity-fullscreen-button");
    var mobileWarning = document.querySelector("#unity-mobile-warning");

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    container.className = "unity-mobile";
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
