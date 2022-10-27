import { useEffect } from 'react'

export default function Home() {
  async function importClient() {
    const PluginClient = (await import('@dashibase/plugin-client')).default
    const client = new PluginClient()

    client.onSetup((data) => {
      // Prints a log when a SETUP message is received  
      console.log(`Received SETUP message ${JSON.stringify(data)}`)
    })
    
    // Inform Dashibase that plugin is ready to be setup
    client.init()
  }
  
  useEffect(() => {
    importClient()
  }, [])

  return (
    <div>Hello World!</div>
  )
}