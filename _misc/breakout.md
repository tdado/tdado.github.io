---
title: "Break Out"
layout: archive
author_profile: true
classes: wide
---

Enter: start game,
R: restart game,
Escape: pause game.


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
    <div id="unity-build-title">Breakout</div>
    </div>
</div>
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
