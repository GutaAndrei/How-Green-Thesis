const currentDate = Date.now();
const activities = [
  {
    date: new Date(currentDate),
    devices: [
      {
        watts: 670,
        hours: 10,
        name: "Computer",
      },
      {
        watts: 50,
        hours: 20,
        name: "Phone",
      },
    ],
  },
  {
    date: new Date(currentDate),
    devices: [
      {
        watts: 60,
        hours: 2,
        name: "Lamp",
      },
      {
        watts: 60,
        hours: 4,
        name: "Dish washer",
      },
    ],
  },
];

export default activities;
