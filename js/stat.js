'use strict';

var defaultTextColor = '#000';
var defaultFont = '16px PT Mono';
var cloudWidth = 420;
var cloudHeight = 270;

var drawCloud = function (ctx, x, y) {
  var offset = 10;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + offset, y + offset, cloudWidth, cloudHeight);

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
};

var drawText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color || defaultTextColor;
  ctx.font = font || defaultFont;
  ctx.fillText(text, x, y);
};

var getMax = function (array) {
  var max = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
};

var getRandomColorBar = function () {
  return [
    'rgba(0, 0,',
    ((Math.random() * 5) * 50).toFixed(0),
    ',',
    (Math.random()).toFixed(1),
    ')'
  ].join('');
};

window.renderStatistics = function (ctx, names, times) {
  var positionX = 100;
  var positionY = 10;

  drawCloud(ctx, positionX, positionY);
  drawText(ctx, 'Ура вы победили!', positionX + 20, positionY + 30);
  drawText(ctx, 'Список результатов:', positionX + 20, positionY + 50);

  var max = getMax(times);

  var histogramHeight = 150;
  var histogramX = 140;
  var step = histogramHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;
    var barPositionX = histogramX + columnIndent * i;

    var topTextPositionY = 90 + histogramHeight - height;
    var barTextPositionY = 100 + histogramHeight - height;
    var bottomTextPositionY = 100 + histogramHeight + 20;

    // Рисуем имя игрока
    drawText(ctx, time.toFixed(0), barPositionX, topTextPositionY);

    // Рисуем бар
    ctx.fillStyle = (name === 'Вы')
      ? 'rgba(255, 0, 0, 1)'
      : getRandomColorBar();
    ctx.fillRect(barPositionX, barTextPositionY, 40, height);

    // Рисуем кол-во очков игрока
    drawText(ctx, name, barPositionX, bottomTextPositionY);
  }
};
