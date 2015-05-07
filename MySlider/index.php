<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <title>Image Train Slider</title>
        <script src="js/jquery-1.11.2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="css/mystyle.css">

    </head>
    <body>
        <div class="outer_div">
            <div class="inner_div">
                <img src="images/1.jpg" alt="" />
                <img src="images/2.jpg" alt="" />
                <img src="images/3.jpg" alt="" />
                <img src="images/4.jpg" alt="" />
                <img src="images/5.jpg" alt="" />
                <img src="images/6.jpg" alt="" />
                <img src="images/7.jpg" alt="" />
                <img src="images/8.jpg" alt="" />
                <img src="images/9.jpg" alt="" />
                <img src="images/10.jpg" alt="" />
                <img src="images/11.jpg" alt="" />
                <img id="last_image" src="images/12.jpg" alt="" />
            </div>
        </div>
        <!--        <div id="counter_div"></div>
                <p>top : </p><div id="top_pos_div"></div><br>
                <p>left : </p><div id="left_pos_div"></div><br>
                <p>pix : </p><div id="pix_div"></div>-->
        <script type="text/javascript">
//            var counter = 0;
//            var pix = 0;
            function animateImage() {
                $(".inner_div").animate({left: "-=300"}, 5000, "linear", animateImage);
//                counter++;
//                pix = pix + 300;
//                $("#counter_div").html(counter);
//                $("#pix_div").html(pix);
                x = $("#last_image").offset();
//                ($("#top_pos_div").html(x.top));
//                $("#left_pos_div").html(x.left);
                if (x.left < 1283.00)
                {

                    $('<img src="images/1.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/2.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/3.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/4.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/5.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/6.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/7.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/8.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/9.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/10.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/11.jpg" alt="" />').appendTo(".inner_div");
                    $('<img src="images/12.jpg" alt="" />').appendTo(".inner_div");


                }
            }
            $(document).ready(function () {
                animateImage();
            });

        </script>
    </body>
</html>