/**
 * [Chart.Crosshairs.js]{@link https://github.com/emn178/Chart.Crosshairs.js}
 *
 * @version 0.1.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2016-2017
 * @license MIT
 */
(function () {
  Chart.pluginService.register({
    beforeDraw: function(chartInstance) {
      if (!chartInstance.tooltip._active || !chartInstance.tooltip._active.length) {
        return;
      }
      if (!chartInstance.options.crosshairs) {
        return;
      }
      var ctx = chartInstance.chart.ctx;
      var tooltip = chartInstance.tooltip._active[0];
      var vertical = false, horizontal = false;
      if (chartInstance.options.crosshairs.mode == 'horizontal') {
        horizontal = true;
      } else if (chartInstance.options.crosshairs.mode == 'both') {
        vertical = true;
        horizontal = true;
      } else {
        vertical = true;
      }

      ctx.save();

      ctx.lineWidth = chartInstance.options.crosshairs.lineWidth || 1;
      ctx.strokeStyle = chartInstance.options.crosshairs.color || 'gray';

      // vertical line
      if (vertical) {
        ctx.beginPath();
        ctx.moveTo(tooltip._view.x, chartInstance.chartArea.top);
        ctx.lineTo(tooltip._view.x, chartInstance.chartArea.bottom);
        ctx.stroke();
      }

      // horizontal line
      if (horizontal) {
        ctx.beginPath();
        ctx.moveTo(chartInstance.chartArea.left, tooltip._view.y);
        ctx.lineTo(chartInstance.chartArea.right, tooltip._view.y);
        ctx.stroke();
      }

      ctx.restore();
    }
  });
})();
