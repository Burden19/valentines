// Calculate distance between two cities (simplified coordinates)
const cityCoordinates = {
    Paris: { lat: 48.8566, lon: 2.3522 },
    Tunis: { lat: 36.8065, lon: 10.1686 },
    "New York": { lat: 40.7128, lon: -74.006 },
    Tokyo: { lat: 35.6762, lon: 139.6503 },
    London: { lat: 51.5074, lon: -0.1278 },
    Sydney: { lat: -33.8688, lon: 151.2093 },
    Dubai: { lat: 25.2048, lon: 55.2708 },
    Toronto: { lat: 43.6532, lon: -79.3832 },
    Sfax: { lat: 34.7406, lon: 10.7603 },
    Leeuwarden: { lat: 53.2012, lon: 5.7999 },
}

// Haversine formula to calculate distance between two coordinates
// Define the type for the keys of cityCoordinates
type CityInfo = { lat: number, lon: number };
type CityName = keyof typeof cityCoordinates;

function calculateDistance(cityA: string, cityB: string) {
    const coordA = (cityCoordinates[cityA as CityName] as CityInfo) || { lat: 0, lon: 0 }
    const coordB = (cityCoordinates[cityB as CityName] as CityInfo) || { lat: 0, lon: 0 }

    const R = 6371 // Earth's radius in kilometers
    const dLat = (coordB.lat - coordA.lat) * (Math.PI / 180)
    const dLon = (coordB.lon - coordA.lon) * (Math.PI / 180)

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(coordA.lat * (Math.PI / 180)) *
        Math.cos(coordB.lat * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = Math.round(R * c)

    return distance
}

export { calculateDistance }
