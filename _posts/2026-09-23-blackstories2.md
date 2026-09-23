---
title: "Black Story 2"
date: 2026-09-22
collection: misc
header:
  teaser: /assets/images/blog/black-story-2.png
---

<style>
.black-story {
  max-width: 650px;
  margin-top: 30px;
  position: relative;
}

.black-story .question {
  font-size: 1.15em;
  line-height: 1.7;
  margin-bottom: 30px;
}

.world {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  display: block;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  border: 2px solid #e0e0e0;
  background: #111;
  outline: none;
}

.warning-flash {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  transform: translate(-50%, -50%);
  padding: 16px 12px;
  background: rgba(10, 8, 12, 0.92);
  color: white;
  border: 2px solid white;
  text-align: center;
  font-size: 1.15em;
  font-weight: 700;
  letter-spacing: 0.03em;
  z-index: 5;
  pointer-events: none;
  animation: warningFlash 1.8s ease forwards;
}

.warning-flash.persistent {
  animation: none;
  opacity: 1;
}

@keyframes warningFlash {
  0% {
    opacity: 0;
  }

  12% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.controls {
  margin-top: 12px;
  font-size: 0.85em;
  opacity: 0.55;
}

.going-home {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  color: white;
  font-size: 1.3em;
  z-index: 10;
}

.warning-highlight {
  background: linear-gradient(
    transparent 15%,
    #c7a6ff 15%,
    #c7a6ff 88%,
    transparent 88%
  );
  color: #111;
  padding: 0 3px;
}

.final-message {
  margin-top: 18px;
  max-width: 400px;
  text-align: center;
  font-size: 1.3em;
  font-weight: 500;
  line-height: 1.5;
  color: #6f4b7c;
  opacity: 0;
  animation: finalReveal 3.4s ease forwards;
}

@keyframes finalReveal {
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }

  30% {
    opacity: 0;
    transform: translateY(-4px);
  }

  50% {
    opacity: 1;
    transform: translateY(0);
  }

  58% {
    opacity: 0.05;
  }

  64% {
    opacity: 1;
  }

  70% {
    opacity: 0.35;
  }

  74% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-message {
  margin-top: 16px;
  text-align: center;
  font-size: 1em;
  font-style: italic;
  opacity: 0.7;
  animation: homePulse 1.4s ease-in-out infinite;
}

@keyframes homePulse {
  0%, 100% {
    opacity: 0.35;
  }

  50% {
    opacity: 0.9;
  }
}

.world-wrap {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.loading-world {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  color: white;
  font-size: 1em;
  font-style: italic;
  z-index: 10;
  pointer-events: none;
}

.mobile-controls {
  display: none;
}

#home-button {
  border: 0;
  padding: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-decoration: underline;
  cursor: pointer;
}

@media (hover: none) and (pointer: coarse) {
  .desktop-controls {
    display: none;
  }

  .mobile-controls {
    display: block;
  }
}

.mobile-note {
  display: none;
}

@media (hover: none) and (pointer: coarse) {
  .mobile-note {
    display: block;
    max-width: 400px;
    margin-bottom: 18px;
    padding: 10px 12px;
    font-size: 0.9em;
    line-height: 1.5;
    border-left: 3px solid #c7a6ff;
    background: rgba(199, 166, 255, 0.08);
  }
}

</style>

<div class="black-story">

  <div class="mobile-note">
    <strong>On your phone?</strong><br>
    This works <em>way</em> better on desktop. But since you're here: here's the slightly slow, slightly suboptimal mobile version.
  </div>

  <p class="question">
    Something is waiting to be found.
    <span class="warning-highlight">Don't stay after dark.</span>
    You can always go home by pressing ESC.
  </p>

  <!-- <canvas id="world" class="world" width="192" height="192" tabindex="0"></canvas> -->
  <div class="world-wrap">
  <canvas id="world" class="world" width="192" height="192" tabindex="0"></canvas>
  <div id="loading-world" class="loading-world">Loading world...</div>
  </div>

  <p class="controls desktop-controls">
    Arrow keys / WASD to explore &nbsp;·&nbsp; ESC to go home
  </p>

  <p class="controls mobile-controls">
    Swipe to explore &nbsp;·&nbsp; <button id="home-button">Go home</button>
  </p>

</div>

<script>
(() => {

  // ==================================================
  // CONFIG
  // ==================================================

  const canvas = document.getElementById("world");
  const ctx = canvas.getContext("2d");

  ctx.imageSmoothingEnabled = false;

  const GRID_SIZE = 12;
  const TILE_SIZE = 16;
  const HOUSE_TILE_COUNT = 9;

  const sprites = new Image();
  sprites.src = "/assets/images/blog/Assets.png";

  const monsterSprites = new Image();
  monsterSprites.src = "/assets/images/blog/monster.png";


  // ==================================================
  // DRAWING CACHE
  // ==================================================

  const superpositionCanvas = document.createElement("canvas");
  superpositionCanvas.width = TILE_SIZE;
  superpositionCanvas.height = TILE_SIZE;

  const superpositionCtx = superpositionCanvas.getContext("2d");


  // ==================================================
  // PLAYER SPRITES
  // ==================================================

  const SPRITE_WIDTH = 16;
  const SPRITE_HEIGHT = 16;
  const ROW_PADDING = 16;
  const COLUMN_PADDING = 16;

  const PLAYER_FRAMES = {
    down: [0, 2],
    left: [8, 9],
    right: [6, 7],
    up: [3, 5]
  };

  const MONSTER_FRAMES = {
    down: [{ x: 760, y: 0 }, { x: 985, y: 0 }],
    left: [{ x: 760, y: 195 }, { x: 985, y: 195 }],
    right: [{ x: 760, y: 390 }, { x: 985, y: 390 }],
    up: [{ x: 760, y: 585 }, { x: 985, y: 585 }]
  };

  const MONSTER_CROP_WIDTH = 220;
  const MONSTER_CROP_HEIGHT = 195;


  // ==================================================
  // TRAINING MAP
  // ==================================================

  const SAMPLES = [
    {
      x: 16,
      y: 400,
      cols: 20,
      rows: 8
    }
  ];

  const HOUSE = {
    x: 272,
    y: 144,
    cols: 3,
    rows: 3
  };

  const EDGE_THRESHOLD = 0;


  // ==================================================
  // STATE
  // ==================================================

  let tiles = [];
  let rules = {};
  let world = [];
  let rotationMap = {};
  let edgeCache = {};

  let terrainTileIDs = [];
  let houseGrid = [];
  let houseTileIDs = [];

  let lastWarningLevel = 0;
  let houseGone = false;

  const visited = new Set();

  const player = {
    x: 1,
    y: 2,
    direction: "down",
    frameIndex: 0
  };


  // ==================================================
  // IMAGE HELPERS
  // ==================================================

  function cropTile(sx, sy) {
    const c = document.createElement("canvas");

    c.width = TILE_SIZE;
    c.height = TILE_SIZE;

    const cctx = c.getContext("2d");
    cctx.imageSmoothingEnabled = false;

    cctx.drawImage(sprites, sx, sy, TILE_SIZE, TILE_SIZE, 0, 0, TILE_SIZE, TILE_SIZE);

    return c;
  }


  function rotateCanvas(source, rotation) {
    const c = document.createElement("canvas");

    c.width = TILE_SIZE;
    c.height = TILE_SIZE;

    const cctx = c.getContext("2d");
    cctx.imageSmoothingEnabled = false;

    cctx.translate(TILE_SIZE / 2, TILE_SIZE / 2);
    cctx.rotate(rotation * Math.PI / 2);
    cctx.drawImage(source, -TILE_SIZE / 2, -TILE_SIZE / 2);

    return c;
  }


  function getPixels(c) {
    return c.getContext("2d").getImageData(0, 0, TILE_SIZE, TILE_SIZE);
  }


  function tileHash(c) {
    return Array.from(getPixels(c).data).join(",");
  }


  // ==================================================
  // REGISTER TILE
  // ==================================================

  function registerTile(canvas, weight = 1) {
    const hash = tileHash(canvas);
    const existing = tiles.find(tile => tile.hash === hash);

    if (existing) {
      existing.weight += weight;
      return existing.id;
    }

    const id = tiles.length;

    tiles.push({
      id,
      canvas,
      hash,
      weight
    });

    return id;
  }


  // ==================================================
  // ROTATIONS
  // ==================================================

  function createRotations() {
    const originalTiles = [...tiles];

    for (const tile of originalTiles) {
      rotationMap[tile.id] = [];

      for (let r = 0; r < 4; r++) {
        const rotated = rotateCanvas(tile.canvas, r);
        const rotatedID = registerTile(rotated, r === 0 ? 0 : tile.weight * 0.25);

        rotationMap[tile.id][r] = rotatedID;
      }
    }

    for (const tile of tiles) {
      if (rotationMap[tile.id]) continue;

      rotationMap[tile.id] = [];

      for (let r = 0; r < 4; r++) {
        const rotated = rotateCanvas(tile.canvas, r);
        rotationMap[tile.id][r] = registerTile(rotated, 0);
      }
    }
  }


  // ==================================================
  // RULE HELPERS
  // ==================================================

  function initializeRules() {
    rules = {};

    for (const tile of tiles) {
      rules[tile.id] = {
        up: new Set(),
        down: new Set(),
        left: new Set(),
        right: new Set()
      };
    }
  }


  function opposite(direction) {
    if (direction === "up") return "down";
    if (direction === "down") return "up";
    if (direction === "left") return "right";
    return "left";
  }


  function connect(a, direction, b) {
    rules[a][direction].add(b);
    rules[b][opposite(direction)].add(a);
  }


  // ==================================================
  // ROTATE DIRECTIONS
  // ==================================================

  const DIR_ORDER = ["up", "right", "down", "left"];

  function rotateDirection(direction, rotation) {
    const i = DIR_ORDER.indexOf(direction);
    return DIR_ORDER[(i + rotation) % 4];
  }


  // ==================================================
  // LEARN SAMPLE
  // ==================================================

  function learnSamples() {
    tiles = [];
    rotationMap = {};
    edgeCache = {};

    const hashToID = new Map();
    const grids = [];

    for (const sample of SAMPLES) {
      const grid = Array.from({ length: sample.rows }, () => Array(sample.cols));

      for (let y = 0; y < sample.rows; y++) {
        for (let x = 0; x < sample.cols; x++) {
          const tileCanvas = cropTile(sample.x + x * TILE_SIZE, sample.y + y * TILE_SIZE);
          const hash = tileHash(tileCanvas);

          let id;

          if (hashToID.has(hash)) {
            id = hashToID.get(hash);
            tiles[id].weight++;
          } else {
            id = tiles.length;

            hashToID.set(hash, id);

            tiles.push({
              id,
              canvas: tileCanvas,
              hash,
              weight: 1
            });
          }

          grid[y][x] = id;
        }
      }

      grids.push({
        grid,
        rows: sample.rows,
        cols: sample.cols
      });
    }

    console.log("Original tiles:", tiles.length);

    createRotations();
    cacheTileEdges();

    console.log("Tiles after rotations:", tiles.length);

    initializeRules();

    for (const sample of grids) {
      for (let y = 0; y < sample.rows; y++) {
        for (let x = 0; x < sample.cols; x++) {
          const a = sample.grid[y][x];

          if (x < sample.cols - 1) {
            const b = sample.grid[y][x + 1];

            connect(a, "right", b);

            for (let r = 1; r < 4; r++) {
              connect(rotationMap[a][r], rotateDirection("right", r), rotationMap[b][r]);
            }
          }

          if (y < sample.rows - 1) {
            const b = sample.grid[y + 1][x];

            connect(a, "down", b);

            for (let r = 1; r < 4; r++) {
              connect(rotationMap[a][r], rotateDirection("down", r), rotationMap[b][r]);
            }
          }
        }
      }
    }

    addEdgeCompatibleRules();
    addHouse();

    console.log("Adjacency learning complete.");
  }


  // ==================================================
  // TILE EDGES
  // ==================================================

  function getEdge(tile, direction) {
    const pixels = getPixels(tile.canvas).data;
    const edge = [];

    function pixelAt(x, y) {
      const i = (y * TILE_SIZE + x) * 4;

      return [
        pixels[i],
        pixels[i + 1],
        pixels[i + 2],
        pixels[i + 3]
      ];
    }

    for (let i = 0; i < TILE_SIZE; i++) {
      if (direction === "up") edge.push(pixelAt(i, 0));
      else if (direction === "down") edge.push(pixelAt(i, TILE_SIZE - 1));
      else if (direction === "left") edge.push(pixelAt(0, i));
      else edge.push(pixelAt(TILE_SIZE - 1, i));
    }

    return edge;
  }


  function cacheTileEdges() {
    edgeCache = {};

    for (const tile of tiles) {
      edgeCache[tile.id] = {
        up: getEdge(tile, "up"),
        down: getEdge(tile, "down"),
        left: getEdge(tile, "left"),
        right: getEdge(tile, "right")
      };
    }
  }


  function edgeDifference(edgeA, edgeB) {
    let difference = 0;

    for (let i = 0; i < edgeA.length; i++) {
      for (let c = 0; c < 4; c++) {
        difference += Math.abs(edgeA[i][c] - edgeB[i][c]);
      }
    }

    return difference;
  }


  function edgesMatch(a, direction, b) {
    return edgeDifference(edgeCache[a][direction], edgeCache[b][opposite(direction)]) <= EDGE_THRESHOLD;
  }


  function addEdgeCompatibleRules() {
    const directions = ["up", "down", "left", "right"];

    let added = 0;

    for (const a of tiles) {
      for (const b of tiles) {
        for (const direction of directions) {
          if (rules[a.id][direction].has(b.id)) continue;

          if (edgesMatch(a.id, direction, b.id)) {
            connect(a.id, direction, b.id);
            added++;
          }
        }
      }
    }

    console.log(`Added ${added} edge-compatible relationships`);
  }


  // ==================================================
  // HOUSE
  // ==================================================

  function addHouse() {
    terrainTileIDs = tiles.map(tile => tile.id);

    houseGrid = Array.from({ length: HOUSE.rows }, () => Array(HOUSE.cols));

    for (let y = 0; y < HOUSE.rows; y++) {
      for (let x = 0; x < HOUSE.cols; x++) {
        const tileCanvas = cropTile(HOUSE.x + x * TILE_SIZE, HOUSE.y + y * TILE_SIZE);
        const id = registerTile(tileCanvas, 0);

        houseGrid[y][x] = id;

        if (!rules[id]) {
          rules[id] = {
            up: new Set(),
            down: new Set(),
            left: new Set(),
            right: new Set()
          };
        }
      }
    }

    houseTileIDs = [...new Set(houseGrid.flat())];

    for (let y = 0; y < HOUSE.rows; y++) {
      for (let x = 0; x < HOUSE.cols; x++) {
        const id = houseGrid[y][x];

        if (x < HOUSE.cols - 1) connect(id, "right", houseGrid[y][x + 1]);
        if (y < HOUSE.rows - 1) connect(id, "down", houseGrid[y + 1][x]);
      }
    }

    for (let x = 0; x < HOUSE.cols; x++) {
      for (const terrainID of terrainTileIDs) {
        connect(houseGrid[0][x], "up", terrainID);
        connect(houseGrid[HOUSE.rows - 1][x], "down", terrainID);
      }
    }

    for (let y = 0; y < HOUSE.rows; y++) {
      for (const terrainID of terrainTileIDs) {
        connect(houseGrid[y][0], "left", terrainID);
        connect(houseGrid[y][HOUSE.cols - 1], "right", terrainID);
      }
    }

    console.log("House added:", houseGrid);
  }


  // ==================================================
  // INITIALIZE WORLD
  // ==================================================

  function initializeWorld() {
    world = Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => [...terrainTileIDs]));

    const houseStartX = 0;
    const houseStartY = 0;

    for (let y = 0; y < HOUSE.rows; y++) {
      for (let x = 0; x < HOUSE.cols; x++) {
        world[houseStartY + y][houseStartX + x] = [...houseTileIDs];
      }
    }
  }


  function copyWorld() {
    return world.map(row => row.map(cell => [...cell]));
  }


  function restoreWorld(copy) {
    world = copy.map(row => row.map(cell => [...cell]));
  }


  // ==================================================
  // PROPAGATION
  // ==================================================

  const DIRECTIONS = [
    { dx: 0, dy: -1, rule: "up" },
    { dx: 0, dy: 1, rule: "down" },
    { dx: -1, dy: 0, rule: "left" },
    { dx: 1, dy: 0, rule: "right" }
  ];


  function propagate(startX, startY, changes = null) {
    const stack = [[startX, startY]];

    while (stack.length) {
      const [x, y] = stack.pop();
      const current = world[y][x];

      if (current.length === 0) return false;

      for (const dir of DIRECTIONS) {
        const nx = x + dir.dx;
        const ny = y + dir.dy;

        if (nx < 0 || nx >= GRID_SIZE || ny < 0 || ny >= GRID_SIZE) continue;

        const allowed = new Set();

        for (const id of current) {
          for (const neighbour of rules[id][dir.rule]) {
            allowed.add(neighbour);
          }
        }

        const old = world[ny][nx];
        const filtered = old.filter(id => allowed.has(id));

        if (filtered.length === 0) return false;

        if (filtered.length < old.length) {
          if (changes) changes.push({ x: nx, y: ny, old });
          world[ny][nx] = filtered;
          stack.push([nx, ny]);
        }
      }
    }

    return true;
  }


  // ==================================================
  // WEIGHTED RANDOM ORDER
  // ==================================================

  function weightedRandomOrder(possibilities) {
    const remaining = [...possibilities];
    const result = [];

    while (remaining.length) {
      let total = 0;

      for (const id of remaining) {
        total += Math.max(tiles[id].weight, 0.1);
      }

      let r = Math.random() * total;
      let index = 0;

      for (let i = 0; i < remaining.length; i++) {
        r -= Math.max(tiles[remaining[i]].weight, 0.1);

        if (r <= 0) {
          index = i;
          break;
        }
      }

      result.push(remaining[index]);
      remaining.splice(index, 1);
    }

    return result;
  }


  // ==================================================
  // COLLAPSE
  // ==================================================

  function collapse(x, y) {
    const key = `${x},${y}`;

    if (visited.has(key)) return true;

    const candidates = weightedRandomOrder(world[y][x]);

    for (const choice of candidates) {
      const backup = copyWorld();

      world[y][x] = [choice];

      if (propagate(x, y)) {
        visited.add(key);

        console.log(`Observed (${x}, ${y}) → tile ${choice}`);

        return true;
      }

      restoreWorld(backup);
    }

    console.warn(`No valid collapse at (${x}, ${y})`);

    return false;
  }


  function collapseHouse() {
    const houseStartX = 0;
    const houseStartY = 0;

    for (let y = 0; y < HOUSE.rows; y++) {
      for (let x = 0; x < HOUSE.cols; x++) {
        const worldX = houseStartX + x;
        const worldY = houseStartY + y;

        world[worldY][worldX] = [houseGrid[y][x]];
        visited.add(`${worldX},${worldY}`);
      }
    }

    for (let y = 0; y < HOUSE.rows; y++) {
      for (let x = 0; x < HOUSE.cols; x++) {
        propagate(houseStartX + x, houseStartY + y);
      }
    }

    console.log("Starting house collapsed.");
  }


  // ==================================================
  // PROGRESS
  // ==================================================

  function getExploredCount() {
    return Math.max(0, visited.size - HOUSE_TILE_COUNT);
  }


  function getExplorationProgress() {
    const explorableTiles = GRID_SIZE * GRID_SIZE - HOUSE_TILE_COUNT;
    return getExploredCount() / explorableTiles;
  }


  // ==================================================
  // WARNINGS
  // ==================================================

  function flashWarning(message, persistent = false) {
    const oldFlash = document.querySelector(".warning-flash");

    if (oldFlash) oldFlash.remove();

    const flash = document.createElement("div");

    flash.className = "warning-flash";

    if (persistent) {
      flash.classList.add("persistent");
    }

    flash.innerHTML = message;

    document.querySelector(".black-story").appendChild(flash);

    if (!persistent) {
      setTimeout(() => {
        flash.remove();
      }, 1800);
    }
  }

  function showFinalMessage(message) {
    if (document.querySelector(".final-message")) return;

    const controls = document.querySelectorAll(".controls");
    const final = document.createElement("p");

    final.className = "final-message";
    final.innerHTML = message;

    controls.forEach(control => control.remove());
    document.querySelector(".world-wrap").insertAdjacentElement("afterend", final);
  }

  function getSandTileID() {
    return terrainTileIDs.reduce((best, id) => {
      return tiles[id].weight > tiles[best].weight ? id : best;
    }, terrainTileIDs[0]);
  }

  function removeHouse() {
    if (houseGone) return;

    houseGone = true;

    console.log("The house is gone.");
  }


  function updateWarning() {
    const progress = getExplorationProgress();

    if (progress >= 0.60) {
      removeHouse();
    }

    let level = 0;
    let message = "";

    if (progress >= 0.75) {
      level = 6;
      showFinalMessage("Oh.<br>You thought you were the one being warned, didn't you?");
    } else if (progress >= 0.70) {
      level = 5;
      message = "GO HOME.";
    } else if (progress >= 0.60) {
      level = 4;
      message = "Go home. Now.";
    } else if (progress >= 0.50) {
      level = 3;
      message = "You should go home. [ESC]";
    } else if (progress >= 0.40) {
      level = 2;
      message = "It's getting dark. Turn back. [ESC]";
    } else if (progress >= 0.30) {
      level = 1;
      message = "It's getting late. You can still go home. [ESC]";
    }

    if (level > lastWarningLevel) {
      if (level < 6) flashWarning(message);
      lastWarningLevel = level;
    }
  }

  function showHomeMessage() {
    if (document.querySelector(".home-message")) return;

    const controls = document.querySelectorAll(".controls");
    const message = document.createElement("p");

    message.className = "home-message";
    message.textContent = "Going home...";

    controls.forEach(control => control.remove());
    document.querySelector(".world-wrap").insertAdjacentElement("afterend", message);
  }


  // ==================================================
  // DRAWING
  // ==================================================

  function drawTile(id, x, y, alpha = 1) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(tiles[id].canvas, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    ctx.restore();
  }


  function drawSuperposition(possibilities, x, y) {
    superpositionCtx.clearRect(0, 0, TILE_SIZE, TILE_SIZE);

    superpositionCtx.globalAlpha = 1;
    superpositionCtx.fillStyle = "#29252f";
    superpositionCtx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);

    const alpha = Math.max(0.08, 1 / Math.max(possibilities.length, 5));

    for (const id of possibilities) {
      superpositionCtx.globalAlpha = alpha;
      superpositionCtx.drawImage(tiles[id].canvas, 0, 0, TILE_SIZE, TILE_SIZE);
    }

    ctx.save();
    ctx.filter = "blur(1.2px) brightness(1.15)";
    ctx.drawImage(superpositionCanvas, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    ctx.restore();
  }


  // ==================================================
  // PLAYER
  // ==================================================

  function drawPlayer() {
    const frames = PLAYER_FRAMES[player.direction];
    const frame = frames[player.frameIndex];

    const sx = COLUMN_PADDING + frame * SPRITE_WIDTH;
    const sy = ROW_PADDING;

    const explored = getExploredCount();
    const transformation = Math.max(0, Math.min(1, (explored - 25) / 70));
    const humanOpacity = 1 - transformation;
    const monsterOpacity = transformation;

    ctx.save();
    ctx.globalAlpha = humanOpacity;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(sprites, sx, sy, SPRITE_WIDTH, SPRITE_HEIGHT, player.x * TILE_SIZE, player.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    ctx.restore();

    if (monsterSprites.complete && monsterSprites.naturalWidth > 0) {
      const monsterFrame = MONSTER_FRAMES[player.direction][player.frameIndex];

      ctx.save();
      ctx.globalAlpha = monsterOpacity;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(monsterSprites, monsterFrame.x, monsterFrame.y, MONSTER_CROP_WIDTH, MONSTER_CROP_HEIGHT, player.x * TILE_SIZE, player.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      ctx.restore();
    }
  }


  function setPlayerDirection(direction) {
    if (player.direction !== direction) {
      player.direction = direction;
      player.frameIndex = 0;
    }
  }


  function advancePlayerFrame() {
    const frames = PLAYER_FRAMES[player.direction];
    player.frameIndex = (player.frameIndex + 1) % frames.length;
  }


  // ==================================================
  // DRAW WORLD
  // ==================================================

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const key = `${x},${y}`;
        const isHouseCell = x < HOUSE.cols && y < HOUSE.rows;
        if (houseGone && isHouseCell) {
          drawTile(getSandTileID(), x, y);
        } else if (visited.has(key)) {
          drawTile(world[y][x][0], x, y);
        } else {
          drawSuperposition(world[y][x], x, y);
        }
      }
    }

    const explored = getExploredCount();
    const darkness = Math.min(0.68, explored * 0.009);

    ctx.fillStyle = `rgba(10, 8, 20, ${darkness})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    updateWarning();
  }


  // ==================================================
  // GO HOME
  // ==================================================

  let goingHome = false;

  function goHome() {
    if (houseGone || goingHome) return;

    goingHome = true;
    showHomeMessage();
    walkHome();
  }


  function walkHome() {
    if (houseGone) {
      goingHome = false;
      return;
    }

    const targetX = 1;
    const targetY = 2;

    if (player.x === targetX && player.y === targetY) {
      goingHome = false;

      setTimeout(() => {
        window.location.reload();
      }, 300);

      return;
    }

    let dx = 0;
    let dy = 0;
    let direction = player.direction;

    if (player.x < targetX) {
      dx = 1;
      direction = "right";
    } else if (player.x > targetX) {
      dx = -1;
      direction = "left";
    } else if (player.y < targetY) {
      dy = 1;
      direction = "down";
    } else if (player.y > targetY) {
      dy = -1;
      direction = "up";
    }

    setPlayerDirection(direction);

    player.x += dx;
    player.y += dy;

    advancePlayerFrame();
    draw();

    setTimeout(walkHome, 80);
  }


  // ==================================================
  // MOVEMENT
  // ==================================================

  const blockedCells = new Set([
    "0,0",
    "1,0",
    "2,0",
    "0,1",
    "2,1",
    "2,2",
    "1,1",
    "1,2",
    "0,2"
  ]);


  function getCompatibleFallback(x, y) {
    let candidates = [...terrainTileIDs];

    for (const dir of DIRECTIONS) {
      const nx = x + dir.dx;
      const ny = y + dir.dy;

      if (nx < 0 || nx >= GRID_SIZE || ny < 0 || ny >= GRID_SIZE) continue;
      if (!visited.has(`${nx},${ny}`)) continue;

      const neighbourID = world[ny][nx][0];

      candidates = candidates.filter(id => {
        return rules[id][dir.rule].has(neighbourID);
      });
    }

    if (candidates.length === 0) return null;

    return weightedRandomOrder(candidates)[0];
  }


  function movePlayer(dx, dy, direction) {
    setPlayerDirection(direction);

    const newX = Math.max(0, Math.min(GRID_SIZE - 1, player.x + dx));
    const newY = Math.max(0, Math.min(GRID_SIZE - 1, player.y + dy));

    if (!houseGone && blockedCells.has(`${newX},${newY}`)) {
      draw();
      return;
    }

    if (newX === player.x && newY === player.y) {
      draw();
      return;
    }

    if (!collapse(newX, newY)) {
      const fallback = getCompatibleFallback(newX, newY);

      if (fallback !== null) {
        world[newY][newX] = [fallback];
        visited.add(`${newX},${newY}`);

        console.warn(`Compatible WFC fallback at (${newX}, ${newY})`);
      } else {
        console.warn(`No compatible tile at (${newX}, ${newY})`);
        draw();
        return;
      }
    }

    player.x = newX;
    player.y = newY;

    advancePlayerFrame();
    draw();
  }


  // ==================================================
  // KEYBOARD
  // ==================================================

  window.addEventListener("keydown", event => {
    const key = event.key.toLowerCase();

    if (key === "escape") {
      event.preventDefault();
      goHome();
      return;
    }

    if (key === "arrowup" || key === "w") {
      event.preventDefault();
      movePlayer(0, -1, "up");
    } else if (key === "arrowdown" || key === "s") {
      event.preventDefault();
      movePlayer(0, 1, "down");
    } else if (key === "arrowleft" || key === "a") {
      event.preventDefault();
      movePlayer(-1, 0, "left");
    } else if (key === "arrowright" || key === "d") {
      event.preventDefault();
      movePlayer(1, 0, "right");
    }
  });


  // ==================================================
  // TOUCH / MOBILE
  // ==================================================

  let touchStartX = 0;
  let touchStartY = 0;

  canvas.addEventListener("touchstart", event => {
    const touch = event.touches[0];

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });


  canvas.addEventListener("touchend", event => {
    const touch = event.changedTouches[0];

    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;

    if (Math.max(Math.abs(dx), Math.abs(dy)) < 20) return;

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        movePlayer(1, 0, "right");
      } else {
        movePlayer(-1, 0, "left");
      }
    } else {
      if (dy > 0) {
        movePlayer(0, 1, "down");
      } else {
        movePlayer(0, -1, "up");
      }
    }
  });


  document.getElementById("home-button").addEventListener("click", goHome);

  canvas.addEventListener("click", () => canvas.focus());


  // ==================================================
  // START
  // ==================================================

  sprites.onload = () => {
    learnSamples();
    initializeWorld();
    collapseHouse();

    draw();
    document.getElementById("loading-world").remove();
    canvas.focus();

    console.log("World initialized.");
  };


  monsterSprites.onload = () => {
    if (world.length) draw();
  };


  monsterSprites.onerror = () => {
    console.error("Could not load monster.png");
  };


  sprites.onerror = () => {
    console.error("Could not load Assets.png");
  };

})();
</script>