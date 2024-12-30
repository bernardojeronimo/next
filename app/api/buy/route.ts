export async function POST(data: any) {
  const body = await data.json();
  const resp = await fetch('https://deisishop.pythonanywhere.com/buy/', {
    method: 'POST',
    body: JSON.stringify(body),
  })
  if (!resp.ok) {
    return Response.json({ error: resp.statusText }, { status: resp.status })
  }
  const data2 = await resp.json();
  if (data2.hasOwnProperty('error')) {
    return Response.json({ error: data2.error }, { status: 500 })
  }
  return Response.json(data2)
}