const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;
console.log("API KEY:", API_KEY);
const BASE_URL =
  "https://api.geoapify.com/v1/geocode/autocomplete";

export async function fetchLocationSuggestions(query) {
  console.group("Geoapify Search");
  console.log("================================");
  console.log("Received Query:", query);
  console.log("Type:", typeof query);
  
  try {
    if (!query || typeof query !== "string") {
      console.warn("Invalid query received:", query);
      console.groupEnd();
      return [];
    }

    const searchText = query.trim();

    console.log("Search Text:", searchText);

    if (searchText.length < 2) {
      console.warn("Query too short");
      console.groupEnd();
      return [];
    }

    const url =
      `${BASE_URL}?text=${encodeURIComponent(searchText)}` +
      `&limit=5&apiKey=${API_KEY}`;

    console.log("Request URL:", url);

    const response = await fetch(url);

    console.log("Status:", response.status);
    console.log("OK:", response.ok);

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const data = await response.json();

    console.log("Response Data:", data);

    console.groupEnd();

    return data.features || [];
  } catch (error) {
    console.error("Geoapify Error:", error);
    console.groupEnd();
    return [];
  }
}