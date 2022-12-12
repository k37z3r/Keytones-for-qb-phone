/*
 .----------------. .----------------. .----------------.
| .--------------. | .--------------. | .--------------. |
| |   ______     | | |      __      | | |     ____     | |
| |  |_   _ \    | | |     /  \     | | |   .'    `.   | |
| |    | |_) |   | | |    / /\ \    | | |  /  .--.  \  | |
| |    |  __'.   | | |   / ____ \   | | |  | |    | |  | |
| |   _| |__) |  | | | _/ /    \ \_ | | |  \  `--'  /  | |
| |  |_______/   | | ||____|  |____|| | |   `.____.'   | |
| |              | | |              | | |              | |
| '--------------' | '--------------' | '--------------' |
 '----------------' '----------------' '----------------'

© Copyright 2022 all rights reserved

All contents, especially the source code of all files, are protected by copyright. All rights, including reproduction, publication, editing and translation, are reserved.
A legal version for use can be purchased at https://bao.tebex.io/
*/
var playsounds = true;
$(document).on("click",".phone-applications",function(b){if(b.preventDefault(),playsounds){var a=new Audio("./audio/click-21156.mp3");a.volume=.2,a.play()}}),$(document).on("click",".phone-application-container",function(b){if(b.preventDefault(),playsounds){var a=new Audio("./audio/click-21156.mp3");a.volume=.2,a.play()}})