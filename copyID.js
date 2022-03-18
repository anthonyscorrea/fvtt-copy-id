Hooks.on('ready', function () {
    if (game.user.isGM) {
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
    }
});