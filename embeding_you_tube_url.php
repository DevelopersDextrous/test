<?php

function getYoutubeIdFromUrl($url) {
    $parts = parse_url($url);
    if (isset($parts['query'])) {
        parse_str($parts['query'], $qs);
        if (isset($qs['v'])) {
            return $qs['v'];
        } else if (isset($qs['vi'])) {
            return $qs['vi'];
        }
    }
    if (isset($parts['path'])) {
        $path = explode('/', trim($parts['path'], '/'));
        return $path[count($path) - 1];
    }
    return false;
}

// Test
$urls = array(
    'https://www.youtube.com/watch?v=wzS8ANZBRNo'
);
foreach ($urls as $url) {
    echo $url . ' : ' . getYoutubeIdFromUrl($url) . "\n";
}
?> 
