const players = [
  { name: "Messi", goals: 30 },
  undefined,
  { name: "Ronaldo", goals: 28 },
  { name: "Neymar", goals: 22 },
  { goals: 2 },
  { name: "Mbappé", goals: 25 },
  { name: "Pele", goals: null },
];

const validRule = ({ name, goals } = {}) => {
  return !!name && !!goals;
};

//Lọc các player
const validPlayers = players.filter(validRule);

//Tìm cầu thủ có nhiều bàn thắng nhất
let topGoal = 0;
let topPlayer = null;

validPlayers.forEach((item) => {
  if (item?.goals > topGoal) {
    topGoal = item?.goals;
    topPlayer = item;
  }
});

//In ra màn hình
console.log("Danh sách cầu thủ hợp lệ: ", validPlayers);
console.log("Cầu thủ ghi nhiều bàn thắng nhất: ", topPlayer);
