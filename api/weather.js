export default async function handler(req, res) {
  const { lat, lon } = req.query;
  const key = process.env.OPENWEATHER_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
  );
  const data = await response.json();
  res.status(response.status).json(data);
}