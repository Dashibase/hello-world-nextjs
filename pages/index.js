import PluginClient from '@dashibase/plugin-client'

export default function Home() {
  const client = new PluginClient()
  
  client.onSetup((data) => {
    // Prints a log when a SETUP message is received  
    console.log(`Received SETUP message ${JSON.stringify(data)}`)
  })
  
  // Inform Dashibase that plugin is ready to be setup
  client.init()

  return (
    <div>Hello World!</div>
  )
}