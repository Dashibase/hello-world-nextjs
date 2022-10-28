import { useEffect, useState } from 'react'

export default function Home() {
  const [setupData, setSetupData] = useState()

  async function importClient() {
    const PluginClient = (await import('@dashibase/plugin-client')).default
    const client = new PluginClient()

    client.onSetup((data) => {
      // Prints a log when a SETUP message is received  
      console.log(`Received SETUP message ${JSON.stringify(data)}`)
      setSetupData(setupData => ({...data}))
    })
    
    // Inform Dashibase that plugin is ready to be setup
    client.init()
  }
  
  useEffect(() => {
    importClient()
  }, [])

  return (
    <>
      <h1>Hello World!</h1>
      <p>This is a simple plugin example to show you what you could do with your plugin</p>

      <p>After you enter your plugin URL, you will receive the following setup data from Dashibase to use in your plugin:</p>
      <ul>
        <li>columnIds: { setupData ? (setupData.columnIds) : (<span>Loading</span>) }</li>
        <li>foreignColumnIds: { setupData ? (setupData.foreignColumnIds) : (<span>Loading</span>) }</li>
        <li>id: { setupData ? (setupData.id) : (<span>Loading</span>) }</li>
        <li>messageType: { setupData ? (setupData.messageType) : (<span>Loading</span>) }</li>
        <li>store: { setupData ? (setupData.stores) : (<span>Loading</span>) }</li>
      </ul>

      <p>You can use the columnIds to pull any info about the item (e.g. email address, Stripe ID, etc.) to use in your plugin.</p>
    </>
  )
}