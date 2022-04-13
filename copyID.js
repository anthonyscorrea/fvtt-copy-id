Hooks.on('ready', function () {
    if (!game.settings.get("fvtt-copy-id", "copyIdVisibility") || game.user.isGM) {
        //actor window
        Hooks.on('getActorSheetHeaderButtons', function (actor, buttons) {
            console.log("CopyID: trying to render the button!");
            const copyIDButton = {
                label: "ID",
                class: "copy-ID",
                icon: "fas fa-paperclip",
                onclick: () => {
                    navigator.clipboard.writeText("@Actor[" + actor.id.substring(6) + "]{" + actor.actor.name + "}");
                    console.log("CopyID | Copied the ID: " + "@Actor[" + actor.id.substring(6) + "]{" + actor.actor.name + "}");
                }
            };
            buttons.unshift(copyIDButton);

            return buttons;
        });
        //item window
        Hooks.on('renderItemSheet', (app, html, data) => {
            let openButton = $(`<a class="copy-ID" title="ID"><i class="fas fa-paperclip"></i>ID</a>`);
            openButton.click(event => {
                navigator.clipboard.writeText("@Item[" + app.item.id + "]{" + app.item.name + "}");
                console.log("CopyID | Copied the ID: " + "@Item[" + app.item.id + "]{" + app.item.name + "}");
            });

            html.closest('.app').find('.copy-ID').remove();
            let titleElement = html.closest('.app').find('.header-button');
            openButton.insertBefore(titleElement[0]);
        });
        //scene window
        Hooks.on('renderSceneConfig', (app, html, data) => {
            let openButton = $(`<a class="copy-ID" title="ID"><i class="fas fa-paperclip"></i>ID</a>`);
            openButton.click(event => {
                navigator.clipboard.writeText("@Scene[" + app.id.substring(13) + "]{" + app.object.name + "}");
                console.log("CopyID | Copied the ID: " + "@Scene[" + app.id.substring(13) + "]{" + app.object.name + "}");
            });
            html.closest('.app').find('.copy-ID').remove();
            let titleElement = html.closest('.app').find('.header-button');
            openButton.insertBefore(titleElement[0]);
        });
    }
});