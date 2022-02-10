export const LINEBREAK = "@@LINEBREAK@@";

const CHARACTERS = [
  "Swimming out till the sea turns blue..",
  "一直游到海水变蓝.. 🌊"
];

const SPACECHARACTER = "&nbsp;";

export const BILLS = [
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(9) + "Alipay -¥10000.00 + -¥10000.00 = -¥20000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "2022-02-15",
  SPACECHARACTER.repeat(9) + "Salary +¥14750.00",
  SPACECHARACTER.repeat(0) +
    "Monthly Expense -[(¥15.00 + ¥15.00) × 20] + -[(¥15.00 + ¥30.00 + ¥30.00) × 20] + -¥328.00 + -¥3500.00 = ",
  SPACECHARACTER.repeat(16) +
    "-¥600.00 + -¥1500.00 + -¥328.00 + -¥3500.00 = -¥6000.00",
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
      SPACECHARACTER.repeat(3),
      "Game",
      SPACECHARACTER.repeat(3),
      "+",
      SPACECHARACTER.repeat(3),
      "House"
    ].join(""),
  SPACECHARACTER.repeat(0) +
    "Residual salary +¥14750.00 + -¥6000.00 = +¥10000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(9) + "Alipay -¥20000.00 + +¥10000.00 = -¥10000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "2022-03-15",
  SPACECHARACTER.repeat(9) + "Salary +¥14750.00",
  SPACECHARACTER.repeat(0) +
    "Monthly Expense -¥600.00 + -¥1500.00 + -¥328.00 + -¥3500.00 = -¥6000.00",
  SPACECHARACTER.repeat(0) +
    "Residual salary +¥14750.00 + -¥6000.00 = +¥10000.00",
  LINEBREAK,
  SPACECHARACTER.repeat(16) + "Debt adjustment",
  SPACECHARACTER.repeat(9) + "Alipay -¥10000.00 + +¥10000.00 = ¥0.00"
];

export default CHARACTERS;
