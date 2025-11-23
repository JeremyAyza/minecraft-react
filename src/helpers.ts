import { nanoid } from 'nanoid';
import type { Cube } from './types';

export function generateHouse(origin = [0, 1, 0]) {
  const [px, _, pz] = origin;

  // La casa aparece justo enfrente del jugador
  const baseX = px - 3;     // centramos la casa para que quede simétrica
  const baseY = -1;
  const baseZ = pz - 20;

  const blocks: Cube[] = [];

  // Tamaño de la casa
  const width = 8;
  const depth = 6;
  const height = 4;

  // --- Piso (wood) ---
  // for (let x = 0; x < width; x++) {
  //   for (let z = 0; z < depth; z++) {
  //     blocks.push({
  //       id: nanoid(),
  //       pos: [baseX + x, baseY, baseZ + z],
  //       texture: 'wood'
  //     });
  //   }
  // }

  // --- Paredes ---
  for (let y = 1; y <= height; y++) {
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        const isWall =
          x === 0 || x === width - 1 || z === 0 || z === depth - 1;

        if (!isWall) continue;

        // --- ENTRADA 2×2 (hueco) ---
        const entryX1 = Math.floor(width / 2) - 1; // ejemplo: 6 → 2–3
        const entryX2 = entryX1 + 1;
        const entryZ = depth - 1; // entrada en la pared frontal

        const isDoor =
          (x === entryX1 || x === entryX2) &&
          z === entryZ &&
          (y === 1 || y === 2);

        if (isDoor) continue; // hueco de puerta

        // --- VENTANAS: huecos en el nivel 2 (vacíos) ---
        const windowY = 2;

        const isWindow =
          y === windowY &&
          (
            // ventana frontal
            (z === 0) && (x === entryX1 || x === entryX2) ||
            // ventana trasera
            // (z === depth - 1 && (x === 1 || x === width - 2)) ||
            // ventanas laterales
            (x === 0 && (z === 2 || z === 3)) ||
            (x === width - 1 && (z === 2 || z === 3))
          );

        if (isWindow) continue; // hueco

        // Esquinas con troncos
        const isCorner =
          (x === 0 || x === width - 1) &&
          (z === 0 || z === depth - 1);

        blocks.push({
          id: nanoid(),
          pos: [baseX + x, baseY + y, baseZ + z],
          texture: isCorner ? 'log' : 'wood'
        });
      }
    }
  }

  // --- Techo (wood) ---
  // --- Techo (log, cónico/piramidal) ---
  let sizeX = width + 2;   // el techo arranca más grande que la casa
  let sizeZ = depth + 2;
  let roofY = height + 1;  // primera capa del techo

  // Mientras haya capas suficientes para hacer un cono
  while (sizeX > 0 && sizeZ > 0) {
    const offsetX = Math.floor((width - sizeX) / 2);
    const offsetZ = Math.floor((depth - sizeZ) / 2);

    for (let x = 0; x < sizeX; x++) {
      for (let z = 0; z < sizeZ; z++) {
        blocks.push({
          id: nanoid(),
          pos: [
            baseX + x + offsetX,
            baseY + roofY,
            baseZ + z + offsetZ
          ],
          texture: 'log'
        });
      }
    }

    // Subimos una capa y reducimos el tamaño para formar pirámide
    sizeX -= 2;
    sizeZ -= 2;
    roofY += 1;
  }


  return blocks;
}



export function generateTrees(areaOrigin = [0, 0, 0], count = 4) {
  const [ox, oy, oz] = areaOrigin;
  const blocks: Cube[] = [];

  const minX = ox - 20;
  const maxX = ox + 20;

  const minZ = oz - 20;
  const maxZ = oz + 20;

  for (let i = 0; i < count; i++) {
    // Distribución natural
    const x = Math.floor(Math.random() * (maxX - minX) + minX);
    const z = Math.floor(Math.random() * (maxZ - minZ) + minZ);

    const trunkHeight = Math.floor(Math.random() * 3) + 4; // 4–6 de alto

    // Tronco
    for (let y = 0; y < trunkHeight; y++) {
      blocks.push({
        id: nanoid(),
        pos: [x, oy + y, z],
        texture: 'log'
      });
    }

    // Copa — esfera cúbica con grass
    const radius = 2;
    const topY = oy + trunkHeight;

    for (let dx = -radius; dx <= radius; dx++) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (Math.abs(dx) + Math.abs(dy) + Math.abs(dz) <= radius + 1) {
            blocks.push({
              id: nanoid(),
              pos: [x + dx, topY + dy, z + dz],
              texture: 'grass'
            });
          }
        }
      }
    }
  }

  return blocks;
}




export function generateCurvedBridge(start = [10, 10, 1], end = [10, 0, 20]) {
  const [sx, sy, sz] = start;
  const [ex, ey, ez] = end;

  const blocks: Cube[] = [];

  const steps = 20;          // resolución de la curva
  const width = 3;           // ancho del puente
  const archHeight = 3;      // altura de la curvatura

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;

    // Interpolación lineal
    const x = sx + (ex - sx) * t;
    const z = sz + (ez - sz) * t;

    // Curva parabólica suave: y = arco
    const y =
      sy +
      (ey - sy) * t +
      Math.sin(t * Math.PI) * archHeight;

    // Piso del puente (wood)
    for (let w = -Math.floor(width / 2); w <= Math.floor(width / 2); w++) {
      blocks.push({
        id: nanoid(),
        pos: [Math.round(x + w), Math.round(y), Math.round(z)],
        texture: 'wood'
      });
    }

    // Barandales (log)
    blocks.push({
      id: nanoid(),
      pos: [Math.round(x - width / 2), Math.round(y + 1), Math.round(z)],
      texture: 'log'
    });
    blocks.push({
      id: nanoid(),
      pos: [Math.round(x + width / 2), Math.round(y + 1), Math.round(z)],
      texture: 'log'
    });
  }

  return blocks;
}
