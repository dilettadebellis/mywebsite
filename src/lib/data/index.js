import axios from "axios";

export async function fetchData(resource, lang = "en_GB", base = "/data") {
  try {
    let url;
    if (lang) {
      url = `${base}/${lang}/${resource}.json`;
    } else {
      url = `${base}/${resource}.json`;
    }
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.status !== 200) {
      return {
        status: response.status,
        error: `HTTP error! status: ${response.status}`,
      };
    }
    return {
      status: 200,
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      error: error.toString(),
    };
  }
}
