export const LINEBREAK = "@@LINEBREAK@@";

const CHARACTERS = [
  "Swimming out till the sea turns blue..",
  "一直游到海水变蓝.. 🌊"
];

const SPACECHARACTER = "&nbsp;";

export const BILLS = [
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(10) + "Baidu -¥8472.79 + -¥15000.00 = -¥23472.79",
  SPACECHARACTER.repeat(9) +
    "Alipay -¥10000.00 + -¥10000.00 + -¥10142.60 = -¥30142.60",
  SPACECHARACTER.repeat(5) + "Total Debt -¥23472.79 + -¥30142.60 = -¥53615.39",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "2021-11-15",
  SPACECHARACTER.repeat(9) + "Salary +¥14750.00",
  SPACECHARACTER.repeat(0) +
    "Monthly Expense -[(¥15 + ¥15) × 20] + -[(¥30.00 + ¥30.00) × 20] + -(¥300.00 × 4) + -¥1750.00 = ",
  SPACECHARACTER.repeat(16) +
    "-¥600.00 + -¥1200.00 + -¥1200.00 + -¥1750.00 = -¥4750.00",
  SPACECHARACTER.repeat(16) +
    [
      SPACECHARACTER.repeat(3),
      "Car",
      SPACECHARACTER.repeat(3),
      "+",
      SPACECHARACTER.repeat(3),
      "Meals",
      SPACECHARACTER.repeat(3),
      "+",
      SPACECHARACTER.repeat(2),
      "Medicine",
      SPACECHARACTER.repeat(1),
      "+",
      SPACECHARACTER.repeat(3),
      "House"
    ].join(""),
  SPACECHARACTER.repeat(0) +
    "Residual salary +¥14750.00 + -¥4750.00 = +¥10000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(10) +
    "Baidu -¥8472.79 + -¥15000.00 + +¥23472.79 = ¥0.00",
  SPACECHARACTER.repeat(9) +
    "Alipay -¥10000.00 + -¥10000.00 + -¥10142.60 + +¥10142.60 + -¥20000.00 = -¥40000.00",
  SPACECHARACTER.repeat(5) +
    "Total Debt (-¥23472.79 + -¥30142.60) + (+¥10000.00 + *+¥3615.39*) = -¥40000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "2021-12-15",
  SPACECHARACTER.repeat(9) + "Salary +¥14750.00",
  SPACECHARACTER.repeat(0) +
    "Monthly Expense -¥600.00 + -¥1200.00 + -¥1200.00 + -¥1750.00 = -¥4750.00",
  SPACECHARACTER.repeat(0) +
    "Residual salary +¥14750.00 + -¥4750.00 = +¥10000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(9) +
    "Alipay -¥10000.00 + -¥10000.00 + -¥20000.00 + +¥10000.00 = -¥30000.00",
  SPACECHARACTER.repeat(5) + "Total Debt -¥10000.00 + -¥20000.00 = -¥30000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "2021-01-15",
  SPACECHARACTER.repeat(9) + "Salary +¥14750.00",
  SPACECHARACTER.repeat(0) +
    "Monthly Expense -¥600.00 + -¥1200.00 + -¥1200.00 + -¥1750.00 = -¥4750.00",
  SPACECHARACTER.repeat(0) +
    "Residual salary +¥14750.00 + -¥4750.00 = +¥10000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(9) +
    "Alipay -¥10000.00 + -¥20000.00 + (+¥10000.00) = -¥20000.00",
  SPACECHARACTER.repeat(5) + "Total Debt -¥20000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "2022-02-01 Spring"
];

export default CHARACTERS;
