export default interface WeatherResponseINTF {
    date?: number | null,
    condition?: string | null,
    nowTemp?: number | null,
    dayTemp?: number | null,
    minTemp?: number | null,
    maxTemp?: number | null,
    icon?: string | null
}