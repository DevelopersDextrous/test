{
// alert("Height of div: " + $("#outer_div").height());
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
//    alert(shuffled_card[5]);
}
{
    var i = 0;
    var k = 0;
    var which = 'shuffling-cards-1';
    var card_holder = ['card_holder_1', 'card_holder_2', 'card_holder_3', 'card_holder_4'];
    $(document).ready(function () {
        var a = $(".a")
                , elems = $("#outer_div div").not(a)
                , pos = function () {
                    return $.map(elems, function (el, i) {
                        return $(el).css(["left", "top"])
                    }).reverse()
                }
        , curr = 0
                , max = 12
                , speed = 10;
        $('#test2').html(pos);
        (function animateDiv(el, p, curr, max) {
            if (!!p.length) {
                $(el)
                        .animate({
                            left: p[0].left
                            , top: (parseInt(p[0].top) + $(el).height())
                        }, speed, function () {
                            $(this).fadeOut(100, function () {
                                $(this)
                                        .css({"top": "450px", "left": "225px"})
                                        .fadeIn(0);
                                p.splice(0, 1);
//                                    soundPlay(which);
                                if (k == 4)
                                {
                                    k = 0;
                                }
                                $('#test2').html(shuffled_card[i]);
                                $('#' + card_holder[k]).prepend('<li><img id="" src="images/cards/'+shuffled_card[i]+'" /></li>');
                                k++;
                                i++;
                                $('#test1').html(i);
                                if(i==52)
                                {
                                    a.fadeOut(10);
                                }
                                animateDiv(this, p, curr, max)
                            })

                        })
            } else if (curr < max) {
                ++curr;
                console.log(curr, max);
                animateDiv(el, pos(), curr, max)
            }
        }(a, pos(), curr, max))

    });
}
{
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
}