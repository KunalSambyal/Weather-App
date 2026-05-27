export default async function handler(req, res) {
    const { city } = req.query;
    const key = process.env.OPENWEATHER_KEY;

    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`,
    );
    const data = await response.json();
    res.status(response.status).json(data);
}
