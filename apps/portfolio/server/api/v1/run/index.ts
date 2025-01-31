export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  console.log("🚀 ~ defineEventHandler ~ query:", query)
  const config = useRuntimeConfig();


  const response = await fetch(`https://www.strava.com/api/v3/athlete`, {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  })
  
  console.log("🚀 ~ fetchStravaData ~ response:", response)

  if (!response.ok) {
    throw new Error(`Error fetching data from strava ${response.statusText}`)
  }
  
  const activities = await response.json();

  return activities;
})
