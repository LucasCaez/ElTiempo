export const getApiInfo = async (city) => {

    const db = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city || 'Madrid'}&appid=8ef782c6f7dd241a13c5ecdb736e2a47`)
    const data = await db.json()

    if(db.coun)
    return data;

}
