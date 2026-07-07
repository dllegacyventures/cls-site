// Jarvis-Schwarm: Punktwolke auf Kugel-Basis, rotiert langsam, atmet, driftet.
// Einbinden: <canvas class="jarvis-swarm" width="240" height="240" data-particles="52">
(function () {
  function start(canvas) {
    var ctx = canvas.getContext('2d');
    var W = canvas.width, H = canvas.height;
    var N = parseInt(canvas.getAttribute('data-particles') || '52', 10);
    var R = Math.min(W, H) * 0.33;
    var pts = [];
    for (var i = 0; i < N; i++) {
      // Fibonacci-Kugel für gleichmäßige Verteilung
      var y = 1 - (i / (N - 1)) * 2;
      var rad = Math.sqrt(Math.max(0, 1 - y * y));
      var th = i * 2.399963229728653;
      pts.push({
        x: Math.cos(th) * rad, y: y, z: Math.sin(th) * rad,
        ph: Math.random() * Math.PI * 2,
        sp: 0.5 + Math.random() * 1.1,
        sz: (1.4 + Math.random() * 2.3) * (W / 240)
      });
    }
    function frame(now) {
      var t = now * 0.001;
      ctx.clearRect(0, 0, W, H);
      var rotY = t * 0.32;
      var rotX = Math.sin(t * 0.18) * 0.4;
      var breathe = 1 + Math.sin(t * 0.75) * 0.06;
      var cx = W / 2, cy = H / 2;

      // kräftiger Glow-Kern
      var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.8);
      g.addColorStop(0, 'rgba(255,170,45,0.32)');
      g.addColorStop(0.55, 'rgba(255,159,28,0.12)');
      g.addColorStop(1, 'rgba(255,159,28,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        var jitter = 1 + Math.sin(t * p.sp + p.ph) * 0.13;
        var x1 = p.x * Math.cos(rotY) + p.z * Math.sin(rotY);
        var z1 = -p.x * Math.sin(rotY) + p.z * Math.cos(rotY);
        var y1 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        var z2 = p.y * Math.sin(rotX) + z1 * Math.cos(rotX);
        var r = R * breathe * jitter;
        var px = cx + x1 * r, py = cy + y1 * r;
        var depth = (z2 + 1) / 2;
        var a = 0.4 + depth * 0.6;
        var s = p.sz * (0.55 + depth * 0.85);
        // vordere Punkte heller/goldener als hintere
        var col = depth > 0.55 ? '255,201,96' : '255,159,28';

        // weicher Halo um jeden Punkt
        ctx.beginPath();
        ctx.fillStyle = 'rgba(' + col + ',' + (a * 0.22).toFixed(3) + ')';
        ctx.arc(px, py, s * 2.8, 0, 6.2832);
        ctx.fill();
        // Kern
        ctx.beginPath();
        ctx.fillStyle = 'rgba(' + col + ',' + a.toFixed(3) + ')';
        ctx.arc(px, py, s, 0, 6.2832);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var list = document.querySelectorAll('canvas.jarvis-swarm');
  for (var i = 0; i < list.length; i++) start(list[i]);
})();
