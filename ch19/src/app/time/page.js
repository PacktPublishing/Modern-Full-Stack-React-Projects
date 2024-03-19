export default async function TimePage() {
  const timeRequest = await fetch('https://worldtimeapi.org/api/timezone/UTC', {
    next: { revalidate: 10 },
  })
  const time = await timeRequest.json()
  return <div>Current timestamp: {time?.datetime}</div>
}
