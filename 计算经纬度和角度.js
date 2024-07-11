// 计算两点之间相等距离的所有坐标点
function calculateEqualDistanceCoordinates(lat1, lon1, lat2, lon2, equalDistance) {
  const coordinates = [];
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  const distance = Math.sqrt(dLat * dLat + dLon * dLon);

  const numOfPoints = Math.floor(distance / equalDistance);
  const deltaLat = dLat / distance * equalDistance;
  const deltaLon = dLon / distance * equalDistance;

  let currentLat = lat1;
  let currentLon = lon1;
  for (let i = 0; i < numOfPoints; i++) {
    currentLat += deltaLat;
    currentLon += deltaLon;
    coordinates.push({ lat: currentLat, lon: currentLon });
  }

  return coordinates;
}

// 计算线的角度
function calculateLineAngle(lat1, lon1, lat2, lon2) {
  const dLon = lon2 - lon1;
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  const angle = Math.atan2(y, x);

  // 将弧度转换为角度
  const angleInDegrees = angle * (180 / Math.PI);
  return angleInDegrees;
}

// 示例使用
const lat1 = 20.1442;  // 第一个点的纬度
const lon1 = 123.8524; // 第一个点的经度
const lat2 = 19.5203;  // 第二个点的纬度
const lon2 = 122.0750; // 第二个点的经度
const equalDistance = 0.01; // 相等距离

const coordinates = calculateEqualDistanceCoordinates(lat1, lon1, lat2, lon2, equalDistance);
const lineAngle = calculateLineAngle(lat1, lon1, lat2, lon2);

console.log('坐标点:');
coordinates.forEach(coord => {
  console.log(coord.lat + ', ' + coord.lon);
});

console.log('线的角度: ' + lineAngle);
