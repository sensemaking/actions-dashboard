const headers = {
  headers: {
    Authorization:
      "Basic Ojc3MjdhOWM1MmIyYjJjZmVlZjQwNTZlYzdjNzcxMmY1YTJiYjc1ZjY=",
  },
}

export const get = (url) => fetch(url, headers).then(x=>x.json());
