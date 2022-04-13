Hooks.on('init', () => {
    game.settings.register("fvtt-copy-id", "copyIdVisibility", {
        name: "GM only",
        hint: "Display the copyID Button for GM only. (NOTE: Setting only applies for users after they reload.)",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: value => {
            console.log(value);
        }
    });
});