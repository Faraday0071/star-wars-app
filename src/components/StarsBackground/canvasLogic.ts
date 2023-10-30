type Star = {
    x: number;
    y: number;
    z: number;
}

export const canvasLogic = (canvas: HTMLCanvasElement) => {
    const c = canvas.getContext('2d') as CanvasRenderingContext2D;

    let w: number;
    let h: number;

    const setCanvasExtents = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }

    setCanvasExtents();

    window.addEventListener('resize', setCanvasExtents)

    const makeStars = (count: number) => {
      const out = []
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000
        };
        out.push(s)
      }
      return out
    }

    const stars: Star[] = makeStars(10000);

    const clear = () => {
      c.fillStyle = 'black'
      c.fillRect(0, 0, canvas.width, canvas.height);
    }

    const putPixel = (x: number, y: number, brightness: number) => {
      const intensity = brightness * 255
      const rgb = 'rgb(' + intensity + ',' + intensity + ',' + intensity + ')'
      c.fillStyle = rgb
      c.fillRect(x, y, 1, 1)
    }

    const moveStars = (distance: number) => {
      const count = stars.length
      for (let i = 0; i < count; i++) {
        const s = stars[i]
        s.z -= distance
        while (s.z <= 1) {
          s.z += 1000
        }
      }
    };

    let prevTime: number;
    const init = (time: number) => {
      prevTime = time
      requestAnimationFrame(tick)
    };

    const tick = (time: number) => {
      const elapsed = time - prevTime
      prevTime = time

      moveStars(elapsed * 0.1)

      clear()

      const cx = w / 2
      const cy = h / 2

      const count = stars.length
      for (let i = 0; i < count; i++) {
        const star = stars[i]

        const x = cx + star.x / (star.z * 0.001)
        const y = cy + star.y / (star.z * 0.001)

        if (x < 0 || x >= w || y < 0 || y >= h) {
          continue;
        }

        const d = star.z / 1000.0
        const b = 1 - d * d

        putPixel(x, y, b)
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(init);

    return () => {
      window.removeEventListener('resize', setCanvasExtents)
    }
}