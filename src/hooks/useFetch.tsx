export const useFetch = async () => {
  const res = await fetch("https://swapi.dev/api/people/");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};
