/**
 * Created by buben42 on 27.06.2017.
 */
$("#tog-step2").hide();
$("#gt-redeem").hide();


// Public key for message encryption
var publicKey = "\
   -----BEGIN PUBLIC KEY-----\
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlhRrUpk1cx7CQbUVRhKu05SRh\
    RBaIjixRz5NNTYa6W1wOdgNf4PkZOuaXXzXQVbHW0ySmxE7OK8ua9TK4CZ7qEQGE\
    7Xwch4q4lc/YcG1t4pnKWuDuCGOaGuSry+64G0TgygIm/MwsY4VHP9gO/LcHGlyI\
    yT7cnI9oWhWlw0/HOQIDAQAB\
    -----END PUBLIC KEY-----";

var encrypt = new JSEncrypt();
encrypt.setPublicKey(publicKey);

// Set the date we're counting down to
// var countDownDate = new Date("Sep 30, 2017 23:59:59").getTime();
var countDownDate = new Date(1507887092000);
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    if (distance > 0) {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    $("#days span").text(days);
    $("#hours span").text(hours);
    $("#minutes span").text(minutes);
    $("#seconds span").text(seconds);

    if (days > 0) {
        $("#days").show();
    }
        $("#hours").show();
        $("#minutes").show();
        $("#seconds").show()
    }

    if (distance < 0) {
        clearInterval(x);
        $("#days").hide();
        $("#hours").hide();
        $("#minutes").hide();
        $("#seconds").hide();
        $("#tog-step1").hide();
        $("#tog-step2").fadeIn(1000);
    }
}, 1000);


// Contract connection
/*
 *  Token related code
 */

var loadContract = function(_address, _abi) {
    return new Promise(function(resolve, reject) {
        contract = new EmbarkJS.Contract({
            abi: _abi,
            address: _address
        });

        resolve("Contract object loaded");
    });
};
var togAddress = "0x25989d6fb2F9467dA411B12f153adBe958D57b2A";
var togABI = [{"constant":true,"inputs":[],"name":"rateAge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"giveGoldenTicket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"donors","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"},{"name":"proof","type":"bytes"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"useGoldenTicket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finalizeFundraiser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"addressOfMSF","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"expirationDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"prepareFinalization","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentPrice","outputs":[{"name":"price","type":"uint256"},{"name":"maxAtPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundraising","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"haveRandom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensLeft","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"luckyNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundraiserEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"donor","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"tokensGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"raised","type":"uint256"}],"name":"finishFundraiser","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"fundsToMSF","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"fundsToCommunity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"supported","type":"address"},{"indexed":false,"name":"message","type":"string"}],"name":"tokenRedemption","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"winner","type":"address"}],"name":"goldenTicketFound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newOwner","type":"address"}],"name":"goldenTicketMoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"charlie","type":"address"},{"indexed":false,"name":"message","type":"string"}],"name":"goldenTicketUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"description","type":"string"}],"name":"newOraclizeQuery","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"price","type":"string"}],"name":"newRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"price","type":"string"}],"name":"newRandom","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
var contract;
// Invoke contract
loadContract(togAddress, togABI);
var togLeft;

var loadData = function(_contract) {
    return new Promise(function(resolve, reject) {
        var promises = [];

        // Switch web3 just to load data
        $("#gt.redeem").prop('disabled', true);
        $("#tog.redeem").prop('disabled', true);
        console.log("The injected provider was bypassed to connect to the BFTP node to load data");
        web3 = rmrpc;

        promises.push(
            _contract.currentPrice()
                .then(
                    function (result) {
                        $("#cp").text(web3.fromWei(result[0]));
                    }
                )
        );

        promises.push(
            _contract.tokensLeft()
                .then(
                    function (result) {
                        togLeft = result;
                        $("#tl").text(result);
                    }
                )
        );

        var fund, rate;
        fund = web3.fromWei(web3.toDecimal(web3.eth.getBalance(togAddress)));

        promises.push(
            $.getJSON("https://api.kraken.com/0/public/Ticker?pair=ETHUSD")
                .then(
                    function(result) {
                        rate = result.result.XETHZUSD.p[1];
                        funding = (rate*fund);
                        $("#tr").text(Math.floor(rate*fund));
                    }
                )
        );

        Promise.all(promises)
            .then(
                function() {
                    // switch back to Metamask
                    if (mmrpc !== "undefined") {
                        web3 = mmrpc;
                    } else if (lhrpc !== "undefined") {
                        web3 = lhrpc;
                    } else {
                        console.log("Didn't find an rpc to switch back to. Sticking with trusted node => Get METAMASK");
                    }
                    $("#gt.redeem").prop('disabled', false);
                    $("#tog.redeem").prop('disabled', false);
                    resolve("Contract queried for data!");
                }
            );
    });
};

/*
 *       User interface controls
 */

// Redeeme related

$("#gt").click(function() {
    if ($(this).hasClass("glow-on")) {
        $(this).removeClass("glow-on");
        $("#gt-redeem").fadeIn(1000);
    }
    else {
        $(this).addClass("glow-on");
        $("#gt-redeem").hide();
    }
});

$("button","#redeem-input").click(function() {
    var message = $("input","#redeem-input").val();
    var encrypted = encrypt.encrypt(message);
    $("input","#redeem-submit").val(encrypted);
    $("#redeem-input").hide();
    $("#redeem-submit").fadeIn(1000);
});

$("#rewind").click(function() {
    $("#redeem-submit").hide();
    $("#redeem-input").show();
});

var msgsenderToG, msgsenderGT;

$("#tog-red").click(function() {
    var message = $("input","#redeem-submit").val();
    contract.redeem(message)
        .then(
            function(result) {
                console.log("Transaction sent, follow the tx hash: ");
                console.log(result);
                var tx = web3.eth.getTransaction(result);
                msgsenderToG = tx.from;

                // TODO: Check minumal gas needed for redeem tx call
                if (tx.gas <= 200000) {
                    console.log("Your transaction can run out of gas");
                }
                $("#tog.redeem").prop('disabled', true);
            }
        )
});

$("button","#gt-redeem-input").click(function() {
    var message = $("input","#gt-redeem-input").val();
    var encrypted = encrypt.encrypt(message);
    $("input","#gt-redeem-submit").val(encrypted);
    $("#gt-redeem-input").hide();
    $("#gt-redeem-submit").fadeIn(1000);
});

$("#gt-red").click(function() {
    var message = $("input","#gt-redeem-submit").val();
    contract.useGoldenTicket(message)
        .then(
            function(result) {
                console.log("Transaction sent, follow the tx hash: ");
                console.log(result);
                var tx = web3.eth.getTransaction(result);
                msgsenderToG = tx.from;

                // TODO: Check minumal gas needed for redeem tx call
                if (tx.gas <= 200000) {
                    console.log("Your transaction can run out of gas");
                }
                $("#gt.redeem").prop('disabled', true);
            }
        )
});

$("#tog-get").click(function() {
    var amount = $("input","#tog-buy").val();
    var price = howMuch(amount,togLeft);

    // so due to Metamask callback requirement
    web3.eth.sendTransaction({
        to:contract.address,
        value:price,
        from:web3.eth.defaultAccount},
        function(error, result){
            if (!error) {
                console.log("Transaction sent, follow the tx hash: ");
                console.log(result);
                $("input","#tog-buy").css("color","green");
                $("#tog-get").html("Get more");
                $("#tog-get").prop('disabled', false);
                // TODO: Check minumal gas needed for redeem tx call

            } else {
                $("#tog-get").prop('disabled', false);
                $("#tog-get").html("Try again");
                console.error(error);
            }
        });
    $("#tog-get").html("Waiting");
    $("#tog-get").prop('disabled', true);
});

//Helper function TODO: fix for MAINNET = just add 0 to price
function currentPrice(_tokensLeft) {

    if (_tokensLeft > 400) {
        return [10000000000000000, _tokensLeft - 400];
    } else if (_tokensLeft > 300) {
        return [20000000000000000, _tokensLeft - 300];
    } else if (_tokensLeft > 200) {
        return [30000000000000000, _tokensLeft - 200];
    } else if (_tokensLeft > 100) {
        return [40000000000000000, _tokensLeft - 100];
    } else {
        return [50000000000000000, _tokensLeft];
    }

}

function howMuch(amount,left) {
    var result =  currentPrice(left);
    var price = result[0];
    var canGet = result[1];

    if (canGet <= 0) {
        return 0;
    } else if (amount <= canGet) {
        return (amount*price);
    } else {
        return ((canGet*price) + howMuch(amount-canGet,left-canGet))
    }
}

// Event watchers
$(document).ready(function() {
    loadData(contract).then(function(result){
        console.log(result);
    });

    contract.tokensGranted("latest")
        .then(
            function (event) {
                loadData(contract);
                console.log(event);
            }
        );

    contract.tokenRedemption({from: msgsenderToG}, "latest")
        .then(
            function (event) {
                //TODO: Show finalization of redemtion
                console.log(event);
            }
        );

    contract.goldenTicketUsed({from: msgsenderGT}, "latest")
        .then(
            function (event) {
                //TODO: Show finalization of redemtion
            }
        );

    if (mmrpc == null) {
        $("#mm-warn").show();
    }
});
