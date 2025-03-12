const fetch = require("node-fetch");

exports.handler = async (event) => {
  const visitorIP = event.headers["x-forwarded-for"] || "Неизвестно";
  const userAgent = event.headers["user-agent"] || "Неизвестно";
  const referrer = event.headers["referer"] || "Прямой вход";

  console.log(`Новый посетитель: ${visitorIP}, Браузер: ${userAgent}, Откуда пришёл: ${referrer}`);

  // Отправляем данные в Google Sheets через SheetDB
  await fetch("https://sheetdb.io/api/v1/r4itwxfkjcos1", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: { IP: visitorIP, Браузер: userAgent, Реферал: referrer, Дата: new Date().toISOString() } }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Данные записаны", ip: visitorIP, userAgent, referrer }),
  };
};
