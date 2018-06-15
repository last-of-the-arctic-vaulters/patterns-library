export const getAllLocaleMonthsArray = (locale = 'en-uk') => {
  const finalArray = [];
  [...Array(12).keys()].forEach((index) => {
    const objDate = new Date();
    objDate.setMonth(index);
    finalArray.push(objDate.toLocaleString(locale, { month: 'long' }));
  });
  return finalArray;
};

export const getCurrentLocaleMonth = (locale = 'en-uk') => {
  const objDate = new Date();
  return objDate.toLocaleString(locale, { month: 'long' });
};

export const getSpecificYears = (maxYears, futureYears) => {
  const currentYear = new Date().getFullYear();
  const finalArray = [];
  if (futureYears) {
    for (let i = 0; i < maxYears; i++) {
      finalArray.push(currentYear + i);
    }
  } else {
    for (let i = 0; i < maxYears; i++) {
      finalArray.push(currentYear - i);
    }
  }
  return finalArray;
};

export const getLocalWeekdayArray = (locale = 'en-uk') => {
  const finalArray = [];
  const objDate = new Date();
  let currentWeekDay = objDate.getDay();
  let currentDay = objDate.getDate();

  while (currentWeekDay !== 1) {
    currentDay += 1;
    objDate.setDate(currentDay);
    currentWeekDay = objDate.getDay();
  }

  [...Array(7).keys()].forEach((index) => {
    objDate.setDate(currentDay + index);
    finalArray.push(objDate.toLocaleString(locale, { weekday: 'long' }).slice(0, 2));
  });
  return finalArray;
};
