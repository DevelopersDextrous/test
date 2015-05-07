<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
        <title>Baraja: A Plugin for Spreading Items in a Card-Like Fashion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="description" content="Baraja: A Plugin for Spreading Items in a Card-Like Fashion" />
        <meta name="keywords" content="jquery, plugin, transform, css3, cards, spread, items, web development" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="../favicon.ico"> 
        <link rel="stylesheet" type="text/css" href="css/baraja.css" />
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/custom.css" />


        <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
        <script type="text/javascript" src="js/modernizr.custom.79639.js"></script>
        <script type="text/javascript" src="js/jquery.baraja.js"></script>

        <style>
            #rotate_1 {
                margin-top: 100px;
                /* Rotate div */
                -ms-transform: rotate(180deg); /* IE 9 */
                -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
                transform: rotate(180deg);
            } 
            #rotate_1 .avatar_pic{
                -ms-transform: rotate(180deg); /* IE 9 */
                -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
                transform: rotate(180deg);
            }
            #rotate_2 {
                margin-top: 20px;
                margin-left: 20px;
                /* Rotate div */
                -ms-transform: rotate(90deg); /* IE 9 */
                -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
                transform: rotate(90deg);
            }
            #rotate_2 .avatar_pic{
                -ms-transform: rotate(-90deg); /* IE 9 */
                -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
                transform: rotate(-90deg);
            }
            #rotate_3 {
                margin-top: -220px;
                margin-right: 20px;
                /* Rotate div */
                -ms-transform: rotate(270deg); /* IE 9 */
                -webkit-transform: rotate(270deg); /* Chrome, Safari, Opera */
                transform: rotate(270deg);
            }
            #rotate_3 .avatar_pic{
                -ms-transform: rotate(90deg); /* IE 9 */
                -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
                transform: rotate(90deg);
            }
            #rotate_4 {
                /*margin-top: 10px;*/
            } 	
            .avatar_pic{
                /*margin: 0 auto;*/
                height: 60px;
                width: 60px;
            }

            div.a {
                width: 50px;
                height:50px;
                background-color:red;
                position:absolute;
                bottom:0;
                top:450px;
                left: 225px;
            }
        </style>
    </head>
    <body>

        <div class="container">

            <!-- Codrops top bar -->
            <div class="codrops-top clearfix">
                <a href="http://tympanus.net/Development/GammaGallery/">
                    <strong>&laquo; Previous Demo: </strong>Gamma Gallery
                </a>
                <span class="right">
                    <a href="http://dribbble.com/jdelamancha">Illustrations by Jason Custer</a>
                    <a href="http://tympanus.net/codrops/?p=12050">
                        <strong>Back to the Codrops Article</strong>
                    </a>
                </span>
            </div><!--/ Codrops top bar -->

            <header class="clearfix">

                <h1>Baraja <span>A plugin for spreading items in a card-like fashion</span></h1>

            </header>

            <section class="main">

                <nav class="actions">
                    <span id="nav-fan">Fan right</span>
                    <span id="nav-fan2">Fan left</span>

                    <span id="nav-fan3">Fan right (asym.)</span>
                    <span id="nav-fan4">Fan left (asym.)</span>

                    <span id="nav-fan5">Rotated spread (horizontal)</span>
                    <span id="nav-fan6">Rotated spread (vertical)</span>

                    <span id="nav-fan7">Linear spread right</span>
                    <span id="nav-fan8">Linear spread left</span>

                    <span id="nav-fan9">Linear spread right (irregular)</span>
                    <span id="nav-fan10">Linear spread left (irregular)</span>

                    <span id="nav-fanOther1">other</span>
                    <span id="nav-fanOther2">other</span>
                    <span id="nav-fanOther3">other</span>
                    <span id="nav-fanOther4">other...</span>

                    <span id="add">Add items</span>
                </nav>

                <div id="outer_div" style=" border: 2px solid green;">

                    <div class='a'>A</div>
                    <div class="baraja-demo" id="rotate_1">													
                        <ul id="baraja-el-1" class="baraja-container">

                        </ul>
                        <img src="images/avatar1.png" class="avatar_pic">	
                    </div>


                    <div class="baraja-demo" id="rotate_2">						
                        <ul id="baraja-el-2" class="baraja-container">

                        </ul>
                        <img src="images/avatar2.png" class="avatar_pic">
                    </div>



                    <div class="baraja-demo" id="rotate_3">					
                        <ul id="baraja-el-3" class="baraja-container">

                        </ul>
                        <img src="images/avatar3.png" class="avatar_pic">
                    </div>

                    <div class="baraja-demo" id="rotate_4">					
                        <ul id="baraja-el-4" class="baraja-container">

                        </ul>
                        <img src="images/avatar4.png" class="avatar_pic">
                    </div>


                </div>
                <div id="test2" style="float: right;">sdfs</div>
                <nav class="actions light">
                    <span id="nav-prev">&lt;</span>
                    <span id="nav-next">&gt;</span>
                    <span id="close">close</span>
                </nav>
            </section>

        </div>

        <script type="text/javascript">
            $(function () {

                var $el = $('#baraja-el'),
                        baraja = $el.baraja();
                var $el1 = $('#baraja-el-1'),
                        baraja_1 = $el1.baraja();
                var $el2 = $('#baraja-el-2'),
                        baraja_2 = $el2.baraja();
                var $el3 = $('#baraja-el-3'),
                        baraja_3 = $el3.baraja();

                // navigation
                $('#nav-prev').on('click', function (event) {

                    baraja.previous();

                });

                $('#nav-next').on('click', function (event) {

                    baraja.next();

                });

                // simple fan
                $('#nav-fan').on('click', function (event) {

                    baraja.fan({
                        speed: 500,
                        easing: 'ease-out',
                        range: 90,
                        direction: 'right',
                        origin: {x: 25, y: 100},
                        center: true
                    });
                    baraja_1.fan({
                        speed: 500,
                        easing: 'ease-out',
                        range: 90,
                        direction: 'right',
                        origin: {x: 25, y: 100},
                        center: true
                    });
                    baraja_2.fan({
                        speed: 500,
                        easing: 'ease-out',
                        range: 90,
                        direction: 'right',
                        origin: {x: 25, y: 100},
                        center: true
                    });
                    baraja_3.fan({
                        speed: 500,
                        easing: 'ease-out',
                        range: 90,
                        direction: 'right',
                        origin: {x: 25, y: 100},
                        center: true
                    });

                });

                // close the baraja
                $('#close').on('click', function (event) {

                    baraja.close();
                    baraja_1.close();
                    baraja_2.close();
                    baraja_3.close();

                });

                // example of how to add more items
                $('#add').on('click', function (event) {

                    if ($(this).hasClass('disabled')) {
                        return false;
                    }

                    $(this).addClass('disabled');

                    baraja.add($('<li><img src="images/6.jpg" alt="image6"/><h4>Serenity</h4><p>Truffaut wes anderson hoodie 3 wolf moon labore, fugiat lomo iphone eiusmod vegan.</p></li><li><img src="images/7.jpg" alt="image7"/><h4>Dark Honor</h4><p>Chillwave mustache pinterest, marfa seitan umami id farm-to-table iphone.</p></li><li><img src="images/8.jpg" alt="image8"/><h4>Nested Happiness</h4><p>Minim post-ironic banksy american apparel iphone wayfarers.</p></li><li><img src="images/9.jpg" alt="image9"/><h4>Cherry Country</h4><p>Sint vinyl Austin street art odd future id trust fund, terry richardson cray.</p></li>'));

                });

            });
        </script>

        <script type="text/javascript">
            var i = 1;
            var k = 0;
            var which = 'shuffling-cards-1';
            var card_holder = ['baraja-el-1', 'baraja-el-2', 'baraja-el-3', 'baraja-el-4'];
            $(document).ready(function () {
                var a = $(".a")
                        , elems = $("#outer_div div").not(a)
                        , pos = function () {
                            return $.map(elems, function (elm, i) {
                                return $(elm).css(["left", "top"])
                            }).reverse()
                        }
                , curr = 0
                        , max = 12
                        , speed = 100;
                $('#test2').html(pos);
                (function animateDiv(elm, p, curr, max) {
                    if (!!p.length) {
                        $(elm)
                                .animate({
                                    left: p[0].left
                                    , top: (parseInt(p[0].top) + $(elm).height())
                                }, speed, function () {
                                    $(this).fadeOut(100, function () {
                                        $(this)
                                                .css({"top": "450px", "left": "225px"})
                                                .fadeIn(0);
                                        p.splice(0, 1);
                                        soundPlay(which);
                                        if (k == 4)
                                        {
                                            k = 0;
                                        }
                                        //$('#test2').html(card_holder[k]);
                                        $('#' + card_holder[k]).prepend('<li><img id="" src="cards/' + shuffled_card[i] + '"/></li>');
                                        k++;
                                        $('#test1').html(i++);

                                        animateDiv(this, p, curr, max)
                                    })

                                })
                    } else if (curr < max) {
                        ++curr;
                        console.log(curr, max);
                        animateDiv(elm, pos(), curr, max)
                    }
                }(a, pos(), curr, max))

            });
        </script>
        <script type="text/javascript">
            var soundEmbed = null;
            //======================================================================
            function soundPlay(which)
            {
                if (!soundEmbed)
                {
                    soundEmbed = document.createElement("embed");
                    soundEmbed.setAttribute("src", "sound/" + which + ".wav");
                    soundEmbed.setAttribute("hidden", true);
                    soundEmbed.setAttribute("autostart", true);
                }
                else
                {
                    document.body.removeChild(soundEmbed);
                    soundEmbed.removed = true;
                    soundEmbed = null;
                    soundEmbed = document.createElement("embed");
                    soundEmbed.setAttribute("src", "sound/" + which + ".wav");
                    soundEmbed.setAttribute("hidden", true);
                    soundEmbed.setAttribute("autostart", true);
                }
                soundEmbed.removed = false;
                document.body.appendChild(soundEmbed);
            }
        </script>

        <script type="text/javascript">
            var cards = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png',
                '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png',
                '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png',
                '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png', '40.png', '41.png', '42.png', '43.png',
                '44.png', '45.png', '46.png', '47.png', '48.png', '49.png', '50.png', '51.png', '52.png'];
            var shuffled_card = shuffle(cards);
            function shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }
            //alert(shuffled_card[5]);
        </script>
    </body>
</html>
