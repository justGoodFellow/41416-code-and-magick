'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var min = Infinity;

  times.forEach(function (time) {
    if (time > max) {
      max = time;
    }
    if (time < min) {
      min = time;
    }
  });

  min = 0;

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / (max - min);
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * (time - min);

    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 90 + histoHeight - height);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0, 0,', ((Math.random() * 5) * 50).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join('');
    }

    ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - height, 40, height);

    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
  }
};
