/**
 * Created by buben42 on 27.06.2017.
 */
$("#tog-step2").hide();
$("#gt-redeem").hide();


// Set the date we're counting down to
//var countDownDate = new Date("Sep 30, 2017 23:59:59").getTime();

// start = 1509537600;
// end = 1514160000;
var countDownDate = new Date(1514160000000);
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
        $("#tog-buy").hide();
        $("#tog-step1").hide();

        if (window.innerWidth > 600) {
            $("#tog-step2").fadeIn(1000);
        }
    }
}, 1000);


// Contract connection
/*
 *  Token related code
 */

var loadContract = function(_address, _abi) {
    return new Promise(function(resolve, reject) {
        tokenContract = new EmbarkJS.Contract({
            abi: _abi,
            address: _address
        });

        resolve("Token contract object loaded");
    });
};
var loadContract2 = function(_address, _abi) {
    return new Promise(function(resolve, reject) {
        fundingContract = new EmbarkJS.Contract({
            abi: _abi,
            address: _address
        });

        resolve("Funding contract object loaded");
    });
};
var togAddress = "0xC79F025b6A48192DbcAC11a1Fe6d2AAFb6911894";
var togABI = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"goldenTicketOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"giveGoldenTicket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"useGoldenTicket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"expirationDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"supported","type":"address"},{"indexed":false,"name":"message","type":"string"}],"name":"tokenRedemption","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newOwner","type":"address"}],"name":"goldenTicketMoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"charlie","type":"address"},{"indexed":false,"name":"message","type":"string"}],"name":"goldenTicketUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
var cfAddress = "0xc22407B1F34e494B7F85187FaFC2ce5D13871FFB";
var cfABI = [{"constant":true,"inputs":[],"name":"rateAge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"donors","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"},{"name":"proof","type":"bytes"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"weiRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"addressOfMSF","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hasRate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"communityAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isFinalized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"gasLimit","type":"uint256"}],"name":"loadRate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"currentPrice","outputs":[{"name":"price","type":"uint256"},{"name":"maxAtPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"gasLimit","type":"uint256"}],"name":"loadRandom","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"tokensLeft","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hasRandom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"beneficiary","type":"address"}],"name":"buyTokens","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"hasEnded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_startTime","type":"uint256"},{"name":"_endTime","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"raised","type":"uint256"}],"name":"finishFundraiser","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"fundsToMSF","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"fundsToCommunity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"winner","type":"address"}],"name":"goldenTicketFound","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"description","type":"string"}],"name":"newOraclizeQuery","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"price","type":"string"}],"name":"newRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"price","type":"string"}],"name":"newRandom","type":"event"},{"anonymous":false,"inputs":[],"name":"Finalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"purchaser","type":"address"},{"indexed":true,"name":"beneficiary","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"}];


var fundingContract, tokenContract;

// Invoke contracts
loadContract(togAddress, togABI);
loadContract2(cfAddress, cfABI);
var togLeft;

var loadData = function() {
    return new Promise(function(resolve, reject) {
        var promises = [];

        // Switch web3 just to load data
        $("#gt.redeem").prop('disabled', true);
        $("#tog.redeem").prop('disabled', true);
        console.log("The injected provider was bypassed to connect to the BFTP node to load data");
        web3 = rmrpc;

        promises.push(
            fundingContract.currentPrice()
                .then(
                    function (result) {
                        $("#cp").text(web3.fromWei(result[0]));
                    }
                )
        );

        promises.push(
            fundingContract.tokensLeft()
                .then(
                    function (result) {
                        togLeft = result;
                        $("#tl").text(result);
                    }
                )
        );

        var fund, rate;
        fund = web3.fromWei(web3.toDecimal(web3.eth.getBalance(cfAddress)));

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
    var hashed = web3.sha3(message);
    $("input","#redeem-submit").val(hashed);
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
    tokenContract.redeem(message)
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
    var hashed = web3.sha3(message);
    $("input","#gt-redeem-submit").val(hashed);
    $("#gt-redeem-input").hide();
    $("#gt-redeem-submit").fadeIn(1000);
});

$("#gt-rewind").click(function() {
    $("#gt-redeem-submit").hide();
    $("#gt-redeem-input").show();
});

$("#gt-red").click(function() {
    var message = $("input","#gt-redeem-submit").val();
    tokenContract.useGoldenTicket(message)
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

    if (web3.eth.accounts[0] == undefined) {
        $(".tog-error","#tog-buy").show()
    }
    else {
        $("#tog-get").html("Waiting");
        $("#tog-get").prop('disabled', true);
        // so due to Metamask callback requirement
        web3.eth.sendTransaction({
                to: fundingContract.address,
                value: price,
                from: web3.eth.accounts[0]
            },
            function (error, result) {
                if (!error) {
                    $(".tog-error", "#tog-buy").hide()
                    console.log("Transaction sent, follow the tx hash: ");
                    console.log(result);
                    $("input", "#tog-buy").css("color", "green");
                    $("#tog-get").html("Get more");
                    $("#tog-get").prop('disabled', false);
                    // TODO: Check minumal gas needed for redeem tx call

                } else {
                    $("#tog-get").prop('disabled', false);
                    $("#tog-get").html("Try again");
                    console.error(error);
                }
            });
    }
});

function currentPrice(_tokensLeft) {

    if (_tokensLeft > 400) {
        return [100000000000000000, _tokensLeft - 400];
    } else if (_tokensLeft > 300) {
        return [200000000000000000, _tokensLeft - 300];
    } else if (_tokensLeft > 200) {
        return [300000000000000000, _tokensLeft - 200];
    } else if (_tokensLeft > 100) {
        return [400000000000000000, _tokensLeft - 100];
    } else {
        return [500000000000000000, _tokensLeft];
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
    loadData(fundingContract).then(function(result){
        console.log(result);
    });

    fundingContract.TokenPurchase("latest")
        .then(
            function (event) {
                loadData();
                console.log(event);
            }
        );

    tokenContract.tokenRedemption({from: msgsenderToG}, "latest")
        .then(
            function (event) {
                //TODO: Show finalization of redemtion
                console.log(event);
            }
        );

    tokenContract.goldenTicketUsed({from: msgsenderGT}, "latest")
        .then(
            function (event) {
                //TODO: Show finalization of redemtion
            }
        );

    if (mmrpc == null) {
        $("#mm-warn").show();
        $("#tog-buy").hide();
    }

    if (web3.eth.accounts[0] == undefined) {

    }
    // mmrpc.eth.getAccounts(function(err, accounts){
    //     if (err != null) console.error("An error occurred: "+err);
    //     else if (accounts.length == 0) {
    //         console.log("User is not logged in to MetaMask")
    //         $('#tog-buy').hide();
    //         $('#tog-donate').hide();
    //     }
    //     else console.log("User is logged in to MetaMask");
    // });

});
