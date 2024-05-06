function getGradient(chart, treshold) {
  const gradient = createLinearGradient(chart);
  addGradientColorStops(chart, treshold, gradient);
  return gradient;
}

function createLinearGradient(chart) {
  const xStartPoint = 0;
  const yStartPoint = 0;
  const xEndPoint = 0;
  const yEndPoint = chart.height;

  return chart.ctx.createLinearGradient(
    xStartPoint,
    yStartPoint,
    xEndPoint,
    yEndPoint
  );
}

function addGradientColorStops(chart, treshold, gradient) {
  const gradientStart = 0;
  const tresholdStop = getTresholdStop(chart, treshold);
  const gradientEnd = 1;

  const gray = "rgba(0, 0, 0, 0.1)";
  const red = "rgba(255, 99, 132, 0.5)";

  gradient.addColorStop(gradientStart, gray);
  gradient.addColorStop(tresholdStop, gray);
  gradient.addColorStop(tresholdStop, red);
  gradient.addColorStop(gradientEnd, red);
}

function getTresholdStop(chart, treshold) {
  const gradientStart = 0;
  const gradientEnd = 1;
  const pixelValue = chart.scales.y.getPixelForValue(treshold) / chart.height;

  return pixelValue > gradientStart
    ? Math.min(gradientEnd, pixelValue)
    : gradientStart;
}

export { getGradient };
