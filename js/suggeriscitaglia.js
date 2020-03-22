$(document).ready(function() {
    $("#calc").click(function() {
        $senopieno = $("#seno").val();
        $torace = $("#torace").val();

        $seno = $senopieno - $torace;
        var seno = Math.round(seno);

        $uscaukband = "Check the measures";
        $eujpband = "Check the measures";
        $aunzband = "Check the measures";
        $czitband = "Check the measures";
        $fresbeband = "Check the measures";

        if ($seno < 0 || $torace < 0 || $senopieno < 0) {
            var errore = 1;
            $uscaukband = "The bust line measure must be greater than that of the band one";
            $eujpband = "The bust line measure must be greater than that of the band one";
            $aunzband = "The bust line measure must be greater than that of the band one";
            $czitband = "The bust line measure must be greater than that of the band one";
            $fresbeband = "The bust line measure must be greater than that of the band one";
            $uscaukcup = "";
            $eujpcup = "";
            $aunzcup = "";
            $czitcup = "";
            $fresbecup = "";
        } else {
            var errore = 0;

            if ($torace <= 57) {
                $uscaukband = "";
                $eujpband = "";
                $aunzband = "";
                $czitband = "";
                $fresbeband = "";
            } else if (($torace => 58) && ($torace <= 62)) {
                $uscaukband = "28";
                $eujpband = "60";
                $aunzband = "6";
                $czitband = "0";
                $fresbeband = "75";
            } else if (($torace => 63) && ($torace <= 67)) {
                $uscaukband = "30";
                $eujpband = "65";
                $aunzband = "8";
                $czitband = "1";
                $fresbeband = "80";
            } else if (($torace => 68) && ($torace <= 72)) {
                $uscaukband = "32";
                $eujpband = "70";
                $aunzband = "10";
                $czitband = "2";
                $fresbeband = "85";
            } else if (($torace => 73) && ($torace <= 77)) {
                $uscaukband = "34";
                $eujpband = "75";
                $aunzband = "12";
                $czitband = "3";
                $fresbeband = "90";
            } else if (($torace => 78) && ($torace <= 82)) {
                $uscaukband = "36";
                $eujpband = "80";
                $aunzband = "14";
                $czitband = "4";
                $fresbeband = "95";
            } else if (($torace => 83) && ($torace <= 87)) {
                $uscaukband = "38";
                $eujpband = "85";
                $aunzband = "16";
                $czitband = "5";
                $fresbeband = "100";
            } else if (($torace => 88) && ($torace <= 92)) {
                $uscaukband = "40";
                $eujpband = "90";
                $aunzband = "18";
                $czitband = "6";
                $fresbeband = "105";
            } else if (($torace => 93) && ($torace <= 97)) {
                $uscaukband = "42";
                $eujpband = "95";
                $aunzband = "20";
                $czitband = "7";
                $fresbeband = "110";
            } else if (($torace => 98) && ($torace <= 102)) {
                $uscaukband = "44";
                $eujpband = "100";
                $aunzband = "22";
                $czitband = "8";
                $fresbeband = "115";
            } else if (($torace => 103) && ($torace <= 107)) {
                $uscaukband = "46";
                $eujpband = "105";
                $aunzband = "24";
                $czitband = "9";
                $fresbeband = "120";
            } else if (($torace => 108) && ($torace <= 112)) {
                $uscaukband = "48";
                $eujpband = "110";
                $aunzband = "26";
                $czitband = "10";
                $fresbeband = "125";
            } else if ($torace => 113) {
                $uscaukband = "Check the measures";
                $eujpband = "Check the measures";
                $aunzband = "Check the measures";
                $czitband = "Check the measures";
                $fresbeband = "Check the measures";
            } else {
                $uscaukband = "";
                $eujpband = "";
                $aunzband = "";
                $czitband = "";
                $fresbeband = "";
            }

            if (errore != 1) {

                if ($seno <= 9) {
                    $uscaukcup = "Check the measures";
                    $eujpcup = "Check the measures";
                    $aunzcup = "Check the measures";
                    $czitcup = "Check the measures";
                    $fresbecup = "Check the measures";
                } else if (($seno => 10) && ($seno <= 11)) {
                    $uscaukcup = "AA";
                    $eujpcup = "AA";
                    $aunzcup = "AA";
                    $czitcup = "A";
                    $fresbecup = "AA";
                } else if (($seno => 12) && ($seno <= 13)) {
                    $uscaukcup = "A";
                    $eujpcup = "A";
                    $aunzcup = "A";
                    $czitcup = "A";
                    $fresbecup = "A";
                } else if (($seno => 14) && ($seno <= 15)) {
                    $uscaukcup = "B";
                    $eujpcup = "B";
                    $aunzcup = "B";
                    $czitcup = "B";
                    $fresbecup = "B";
                } else if (($seno => 16) && ($seno <= 17)) {
                    $uscaukcup = "C";
                    $eujpcup = "C";
                    $aunzcup = "C";
                    $czitcup = "C";
                    $fresbecup = "C";
                } else if (($seno => 18) && ($seno <= 19)) {
                    $uscaukcup = "D";
                    $eujpcup = "D";
                    $aunzcup = "D";
                    $czitcup = "D";
                    $fresbecup = "D";
                } else if (($seno => 20) && ($seno <= 21)) {
                    $uscaukcup = "DD/E";
                    $eujpcup = "E";
                    $aunzcup = "DD";
                    $czitcup = "DD";
                    $fresbecup = "E";
                } else if (($seno => 22) && ($seno <= 23)) {
                    $uscaukcup = "DDD/F";
                    $eujpcup = "F";
                    $aunzcup = "E";
                    $czitcup = "E";
                    $fresbecup = "F";
                } else if (($seno => 24) && ($seno <= 25)) {
                    $uscaukcup = "DDD/G";
                    $eujpcup = "G";
                    $aunzcup = "F";
                    $czitcup = "F";
                    $fresbecup = "G";
                } else if (($seno => 26) && ($seno <= 27)) {
                    $uscaukcup = "H";
                    $eujpcup = "H";
                    $aunzcup = "G";
                    $czitcup = "FF";
                    $fresbecup = "H";
                } else if (($seno => 28) && ($seno <= 29)) {
                    $uscaukcup = "I";
                    $eujpcup = "I";
                    $aunzcup = "H";
                    $czitcup = "G";
                    $fresbecup = "I";
                } else if (($seno => 30) && ($seno <= 31)) {
                    $uscaukcup = "J";
                    $eujpcup = "J";
                    $aunzcup = "I";
                    $czitcup = "GG";
                    $fresbecup = "J";
                } else if ($seno => 31) {
                    $uscaukcup = "Check the measures";
                    $eujpcup = "Check the measures";
                    $aunzcup = "Check the measures";
                    $czitcup = "Check the measures";
                    $fresbecup = "Check the measures";
                } else {
                    $uscaukcup = "";
                    $eujpcup = "";
                    $aunzcup = "";
                    $czitcup = "";
                    $fresbecup = "";
                }
            } else {
                $uscaukcup = "";
                $eujpcup = "";
                $aunzcup = "";
                $czitcup = "";
                $fresbecup = "";
            }
        }
        $("#uscaukSize").html($uscaukband + $uscaukcup);
        $("#eujpSize").html($eujpband + $eujpcup);
        $("#aunzSize").html($aunzband + $aunzcup);
        $("#czitSize").html($czitband + $czitcup);
        $("#fresbeSize").html($fresbeband + $fresbecup);

        //$("#debugSize").html("Seno pieno " + $senopieno + " Seno calcolato " + $seno + " Torace " + $torace);

    });
});