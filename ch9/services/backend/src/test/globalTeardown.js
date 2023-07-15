export default async function globalTeardown() {
  console.log('teardown')
  await global.__MONGOINSTANCE.stop()
}
