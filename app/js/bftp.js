/**
 * Created by Josef on 7/26/2017.
 */

/*
 *   Web3 / Metamask handling
 */

    if (typeof window.web3 !== 'undefined') {
        injectedProvider = window.web3.currentProvider;
        web3 = new Web3(injectedProvider);
        console.log("inject");
        console.log(web3);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider('https://rpc.adahoy.io/'));
    }


    var mmrpc, lhrpc, rmrpc;

    rmrpc = new Web3(new Web3.providers.HttpProvider("https://rpc.adahoy.io/"));

    if (web3.currentProvider.isMetaMask) {
        web3.dest = "metamask";
        mmrpc = web3;
        $("#option_mmrpc").addClass("active");
    }
    // else if (web3.currentProvider.host.indexOf("/localhost:") != -1) {
    //     web3.dest = "localhost";
    //     lhrpc = web3;
    //     $("#option_lhrpc").addClass("active");
    // }
    else if (web3.currentProvider.host == "https://rpc.adahoy.io/") {
        web3.dest = "bftp";
        rmrpc = web3;
    } else {
        web3.dest = "custom";
        console.log("Your RCP is too hipster for me to swallow!");
    }


    $("li", "#rpcSelector").click(function (event) {
        $("li", "#rpcSelector").removeClass("active");
        $(this).addClass("active");

        if ($(this).attr('id') == "option_mmrpc") {
            web3 = mmrpc;
            console.log("Metamask was hooked");
        } else if ($(this).attr('id') == "option_lhrpc") {
            web3 = lhrpc;
            console.log("Local RPC was hooked");
        } else {
            console.log("Element ID missing, can't decide => doing nothing");
        }
        event.preventDefault();
    });