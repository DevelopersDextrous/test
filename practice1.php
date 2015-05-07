<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>jQuery UI Dialog - Animation</title>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css">
        <script src="//code.jquery.com/jquery-1.10.2.js"></script>
        <script src="//code.jquery.com/ui/1.11.3/jquery-ui.js"></script>
        <link rel="stylesheet" href="/resources/demos/style.css">
        <style type="text/css">
            .ui-dialog-titlebar-close {
                display: none; 
            }

        </style>
    </head>
    <body>

        <div id="dialog" title="Spades">
            <p>Welcome to the World of Spades Game</p>
            <button id="lets_play" type="button">Let's Play</button>
        </div>

        <script>
            $(function () {
                $("#dialog").dialog({
                    autoOpen: true,
                    show: {
                        effect: "blind",
                        duration: 1000
                    }
                });


            });
        </script>
        <script type="text/javascript">
            $("#lets_play").click(function () {
                $(".ui-dialog-titlebar").css("display", "none");

                $('#dialog').hide("explode", {pieces: 4}, 4000);
            });
        </script>

    </body>
</html>