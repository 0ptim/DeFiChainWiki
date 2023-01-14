---
title: Advanced Guide
description: TODO - Short description of this page.
---

This guide shows you how you can make large changes to the wiki like adding new pages or changing the site structure. If you just want to make a small edit on a page, have a look at the [Basic Guide](./Contribute.md).

If you need assistance, ask in the [Telegram group](https://t.me/defichain_wiki) for help.

### Requirements

Of cource, if you know how this all works you don't have to work exactly as provided here. But if you're new and just want to follow along, make sure you have all requirements fullfilled.

- To help work on the Wiki you need a GitHub account. You can create a free account [here](https://github.com/join).
- All the pages are written using the **Markdown** syntax. Here's a handy [cheat sheet](https://www.markdownguide.org/cheat-sheet/).
- [Git](https://git-scm.com/downloads) installed on your machine ([Video Tutorial](https://www.youtube.com/watch?v=F02LEVYEmQw)).
- [Visual Studio Code](https://code.visualstudio.com/download) installed on your machine.
- [GitHub Desktop](https://desktop.github.com/) installed on your machine.

### 1. Clone the wiki code

Visit the [project page](https://github.com/0ptim/DeFiChainWiki) on GitHub and on `Code` and then on `Open with GitHub Desktop`.

GitHub Desktop should open up automatically and present a window to you, where you can chose where to store the files on your hard drive. Just choose something that fits you. Click `Clone`.

### 2. Open and run the project

Click on `Open in Visual Studio Code`. In the menu bar on the top left click on `View` ▶ `Terminal`.

In the terminal you have to execute this command once.

```bash
npm install
```

As soon as this is done, enter this command to start the website locally on your device. The browser should open the site automatically. If not, just open [http://localhost:3000](http://localhost:3000/) in your browser.

```bash
npm start
```

:::info
If you come back another day and want to start the website again, just run the second command again.
:::

### 3. Edit the wiki

Now you can make changes to whatever page/file you like. If you save a file, the changes will be visible on the local website.

You can read up
