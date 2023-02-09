export const getDirection = (deg: number) => {
  let direction = "";
  if (deg === 0 || deg === 360) {
    direction = "Северный";
  } else if (deg > 0 && deg < 90) {
    direction = "Северо-восточный";
  } else if (deg === 90) {
    direction = "Восточный";
  } else if (deg > 90 && deg < 180) {
    direction = "Юго-восточный";
  } else if (deg === 180) {
    direction = "Южный";
  } else if (deg > 180 && deg < 270) {
    direction = "Юго-Западный";
  } else if (deg === 270) {
    direction = "Западный";
  } else if (deg > 270 && deg < 360) {
    direction = "Северо-западный";
  }

  return direction;
};

export const getTime = (targetoffset: number, index: number) => {
  const date = new Date();
  date.setTime(date.getTime() + index * 60 * 60 * 1000);
  const currentOffset = date.getTimezoneOffset();
  const offset = currentOffset + targetoffset / 60;

  let hour = date.getHours() + offset / 60;
  if (hour < 0) {
    hour = 24 + hour;
  } else if (hour === 24)
  {
    hour = 0;
  }

  const converthour = hour < 10 ? "0" + hour : hour;

  return `${converthour}:00`;
};
