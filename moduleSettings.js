Hooks.on('init', () => {
    game.settings.register("fvtt-copy-id", "copyIdVisibility", {
        name: "GM only",
        hint: "Display the copyID Button for GM only. (NOTE: Setting only applies for users after they reload.)",
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });
    game.settings.register("fvtt-copy-id", "suppressWarningPopups",{
        name: "Suppress Warnings",
        hint: "Suppress all visual (and console) warnings of the SSL mechanism.",
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    })
});