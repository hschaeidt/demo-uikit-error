require.config({
    paths: {
        requirejs: "../../bower_components/requirejs/require",
        jquery: "../../bower_components/jquery/dist/jquery",
        uikit: "../../bower_components/uikit/js/uikit.min"
    },
    shim: {
        uikit: {
            deps: [
                "jquery"
            ]
        }
    },
    packages: [

    ]
});

require(["uikit!slideshow"], function(UI) {

});