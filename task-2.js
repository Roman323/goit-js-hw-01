let total = 100,
  ordered = 50,
  message = (total, ordered) =>
    console.log(
      total >= ordered
        ? "Заказ оформлен, с вами свяжется менеджер"
        : "На складе недостаточно твоаров!"
    );
message(total, ordered);
ordered = 20;
message(total, ordered);
ordered = 80;
message(total, ordered);
ordered = 130;
message(total, ordered);
