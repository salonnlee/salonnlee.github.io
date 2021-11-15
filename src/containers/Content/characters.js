export const LINEBREAK = "@@LINEBREAK@@";

const CHARACTERS = [
  "Swimming out till the sea turns blue..",
  "一直游到海水变蓝.. 🌊"
];

const SPACECHARACTER = "&nbsp;";

export const BILLS = [
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(5) + "Du Xiaoman -¥7500.00 = -¥7500.00",
  SPACECHARACTER.repeat(9) +
    "Alipay -¥10000.00 + -¥10000.00 + -¥20000.00 = -¥40000.00",
  SPACECHARACTER.repeat(5) + "Total Debt -¥40000.00 + -¥7500.00 = -¥47500.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "2021-12-15",
  SPACECHARACTER.repeat(9) + "Salary +¥14750.00",
  SPACECHARACTER.repeat(0) +
    "Monthly Expense -[(¥15.00 + ¥15.00) × 20] + -[(¥15.00 + ¥30.00 + ¥30.00) × 20] + -(¥200.00 × 4) + -(¥128.00 + ¥328.00) + -¥1750.00 = ",
  SPACECHARACTER.repeat(16) +
    "-¥600.00 + -¥1500.00 + -¥800.00 + -¥500.00 + -¥1750.00 = -¥5150.00",
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
      SPACECHARACTER.repeat(1),
      "Medicine",
      SPACECHARACTER.repeat(1),
      "+",
      SPACECHARACTER.repeat(3),
      "Game",
      SPACECHARACTER.repeat(3),
      "+",
      SPACECHARACTER.repeat(3),
      "House"
    ].join(""),
  SPACECHARACTER.repeat(0) +
    "Residual salary +¥14750.00 + -¥5150.00 = +¥10000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(5) + "Du Xiaoman -¥7500.00 + +¥7500.00 = ¥0.00",
  SPACECHARACTER.repeat(9) +
    "Alipay -¥10000.00 + -¥10000.00 + -¥20000.00 + +¥2500.00 = -¥40000.00",
  SPACECHARACTER.repeat(5) + "Total Debt -¥10000.00 + -¥10000.00 + -¥20000.00 = -¥40000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "2022-01-15",
  SPACECHARACTER.repeat(9) + "Salary +¥14750.00",
  SPACECHARACTER.repeat(0) +
    "Monthly Expense -¥600.00 + -¥1500.00 + -¥800.00 + -¥500.00 + -¥1750.00 = -¥5150.00",
  SPACECHARACTER.repeat(0) +
    "Residual salary +¥14750.00 + -¥5150.00 = +¥10000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(9) +
    "Alipay -¥10000.00 + -¥10000.00 + -¥20000.00 + +¥10000.00 = -¥30000.00",
  SPACECHARACTER.repeat(5) + "Total Debt -¥30000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "2022-02-01 Spring"
];

export default CHARACTERS;
