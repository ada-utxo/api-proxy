export default async function handler(req, res) {
  const r = await fetch("https://www.googleapis.com/oauth2/v3/certs");
  const data = await r.json();

  res.setHeader("Cache-Control", "s-maxage=3600");
  res.status(200).json(data);
}
