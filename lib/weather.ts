export async function getWeather(lat: number, lon: number) {
    const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
    );

    if (!res.ok) throw new Error('Weather failed');
    return res.json();
}
