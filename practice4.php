<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <title>Moving</title>
        <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
        <script type="text/javascript" src="js/jquery.my_js.js"></script>
        <script type="text/javascript" src="js/bootstrap-modal.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>

        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="css/myCSS.css" />

    </head>
    <body>
        <button type="button" id="myModal" data-toggle="modal" data-target="#myModal">Launch modal</button>
        <div id="outer_div">
            <img class="a" src="images/back_view_card.jpg" alt="" />
            <!--<div class='a'>A</div>-->
            <div id="card_holder_4" class='b'>B</div>
            <div id="card_holder_3" class='c'>C</div>
            <div id="card_holder_2" class='d'>D</div>
            <div id="card_holder_1" class='e'>E</div>

        </div>
        <div id="test1" style="float: right;">counter</div>
        <br>
        <div id="test2" style="float: right;">sdfs</div>
        <br>
        <div id="test3"></div><br>
        <!--        <div id="card_holder_1" style="float: right;">card_holder_1</div><br>
                <div id="card_holder_2" style="float: right;">card_holder_2</div><br>
                <div id="card_holder_3" style="float: right;">card_holder_3</div><br>
                <div id="card_holder_4" style="float: right;">card_holder_4</div><br>-->
        <script type="text/javascript">
            $("button").click(function () {
                $('#myModal').modal('show');
            });
        </script>
    </body>

</html>

