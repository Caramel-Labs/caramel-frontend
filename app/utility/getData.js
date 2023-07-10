//fetch data from a given endpoint
//return the data as a json object

async function getData(endpoint) {
    const res = await fetch(endpoint)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default getData;