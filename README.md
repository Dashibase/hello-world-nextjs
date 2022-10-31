# Hello World plugin using Next.js

![Hello World plugin block](/public/hello-world-plugin-block.png)

[Dashibase](https://dashibase.com/) lets you build internal admin dashboards using a Notion-like UI. 

You can extend the functionality of your dashboards by developing a plugin. For example, you could display each customer's Stripe information, show support tickets from Zendesk, send emails via SendGrid, and more.

This is a simple Hello World example plugin to show you:

- What data you can receive from Dashibase to use in your plugin
- How to create a simple plugin with Next.js

## Getting Started

### 1. Set up a dashboard in Dashibase

You can skip this step if you already have a dashboard in Dashibase. 

If not, you can sign up for free [here](https://dashibase.com/). After you have created a dashboard and added a table from your database, click into any of the items on your table. Here is where we will add the plugin.

### 2. Clone and deploy this repo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDashibase%2Fhello-world-nextjs)

Click on the button above to clone and deploy the plugin through Vercel.

Your Hello World plugin is now ready.

### 3. Add plugin to your dashboard

Go back to your dashboard in Dashibase. While viewing any of the items on a table, add a Plugin block by typing '/plugin'. Then, add the URL of your deployed plugin and click "Set up".

You should see the Hello World app, which tells you the setup data that Dashibase sent to the plugin. 

When you are developing your plugin, you could use the setup data to select which data you want to use in your plugin. Let's say you have a table of customers, you could pull the email field of each customer via the `email` column and use it in your plugin. See [our Stripe plugin](https://github.com/Dashibase/dashibase-stripe-customer-plugin) for a concrete example.

If you have any questions, feel free to reach us via Twitter ([@dashibase](https://twitter.com/dashibase)) or sk@dashibase.com.

## Learn More

You might find the following resources helpful:

- [Hello World Next.js plugin tutorial](https://dashibase.com/docs/hello-world-nextjs-plugin/)
- [Plugin API reference](https://dashibase.com/docs/plugin-api/)

