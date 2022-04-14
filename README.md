# fvtt-copy-id
Foundry VTT Module that adds a button to copy the link ID of entities like actors for use elsewhere into the clipboard. You can achieve the same by drag-and-dropping it into a journal page and copying that out. 
This module simply gives a little button to some windows to make it easier.  It will use the full foundry journal format (like `@Item[IokSbCSael7Hc8Cq]{Driftglobe}` or `@Scene[xdntImH0Xubnfk41]{Worldmap}`)
(Top right the paperclip "ID" button) ![link button](copy_ID_example.png)

## Settings
- (Global) GM-only mode: Only makes the button visible for GM Users
- (Global) Suppress Warnings: Suppresses the nagging warnings when not using SSL/HTTPS

## Known Issues
 - Unfortunately due to a lack of clipboard permission on "unsecured" pages the module can't write into clipboard directly. The solution is to [enable https in foundry](https://foundryvtt.com/article/ssl/). But the module falls back on a prompt out of which you can copy from.  
 
## Motivation
I startet using [Obsidian.md](https://obsidian.md/) for my campaign information. But since I also wanted the information to be available in Foundry I import them with the [lava-flow](https://github.com/Praxxian/lava-flow) module. Since I write the stuff outside of Foundry however, I can't easily link actors and items in my files.   
This is why I made this little module to make that workflow easier. And in case anyone has the same problem I thought to publish this module as well.   
  
This is my first module in Foundry so excuse any mistakes and gladly submit feedback in some form or another.

## Credits
I took inspiration on how to add the buttons from [actor-link-indicator](https://github.com/saif-ellafi/foundryvtt-actor-link-indicator) and [item-macro](https://github.com/Kekilla0/Item-Macro). 
