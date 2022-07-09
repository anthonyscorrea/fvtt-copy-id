function copyIdText(toCopy) {
    //check if directly writing to clipboard is possible ("unsecure" sources are blocked from clipboard)
    if (navigator.clipboard != undefined) {
        navigator.clipboard.writeText(toCopy);
        console.log("CopyID | Copied the ID: " + toCopy);
    }
    else {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", toCopy);
        console.log("CopyID | Prompt with ID due to lack of permission with: " + toCopy);
        if (!game.settings.get("fvtt-copy-id", "suppressWarningPopups")) {
            ui.notifications.warn("CopyID | Fallback due to lacking clipboard permission! (no SSL/HTTPS? --> check README)");
            console.warn("CopyID | Fallback to prompt since clipboard permission is lacking. Check README for more information on how to fix.");
        }
    }
};
Hooks.on('ready', function () {
    //Warn gm on lack of permissions
    if (location.protocol !== 'https:' && game.user.isGM && !game.settings.get("fvtt-copy-id", "suppressWarningPopups")) {
        ui.notifications.warn("CopyID | Without HTTPS/SSL the permission to write to clipboard is missing. Check Readme for more info.");
        console.warn("CopyID | Without HTTPS/SSL the permission to write to clipboard is missing. Check Readme for more info.");
    }
    if (!game.settings.get("fvtt-copy-id", "copyIdVisibility") || game.user.isGM) {
        //actor window
        Hooks.on('getActorSheetHeaderButtons', function (actor, buttons) {
            // console.log("CopyID: trying to render the button!");
            const copyIDButton = {
                label: "ID",
                class: "copy-ID",
                icon: "fas fa-paperclip",
                onclick: () => {
                    // check if actor is compendium entry
                    if (actor.document.compendium) {
                        copyIdText("@Compendium[" + actor.document.compendium.collection + "." + actor.id.substring(6) + "]{" + actor.actor.name + "}");
                    }
                    else {
                        copyIdText("@Actor[" + actor.id.substring(6) + "]{" + actor.actor.name + "}");
                    }
                }
            };
            buttons.unshift(copyIDButton);
            return buttons;
        });
        //item window
        Hooks.on('renderItemSheet', (app, html, data) => {
            let openButton = $(`<a class="copy-ID" title="ID"><i class="fas fa-paperclip"></i>ID</a>`);
            openButton.click(event => {
                //check if item is compendium entry
                if (app.item.compendium) {
                    copyIdText("@Compendium[" + app.item.compendium.collection + "." + app.item.id + "]{" + app.item.name + "}");
                }
                else {
                    copyIdText("@Item[" + app.item.id + "]{" + app.item.name + "}");
                }
            });

            html.closest('.app').find('.copy-ID').remove();
            let titleElement = html.closest('.app').find('.header-button');
            openButton.insertBefore(titleElement[0]);
        });
        //scene window
        Hooks.on('renderSceneConfig', (app, html, data) => {
            let openButton = $(`<a class="copy-ID" title="ID"><i class="fas fa-paperclip"></i>ID</a>`);
            openButton.click(event => {
                //check if scene is compendium entry
                if (app.document.compendium) {
                    copyIdText("@Compendium[" + app.document.compendium.collection + "." + app.id.substring(13) + "]{" + app.object.name + "}");
                }
                else {
                    copyIdText("@Scene[" + app.id.substring(13) + "]{" + app.object.name + "}");
                }
            });
            html.closest('.app').find('.copy-ID').remove();
            let titleElement = html.closest('.app').find('.header-button');
            openButton.insertBefore(titleElement[0]);
        });
    }
});