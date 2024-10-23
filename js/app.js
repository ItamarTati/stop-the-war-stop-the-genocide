async function getData() {
  const url = "https://data.techforpalestine.org/api/v2/killed-in-gaza.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

let data = getData();


console.log(data)
