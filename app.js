document.getElementById("phone-plusBtn").addEventListener("click", function() {
    individualPrice( "phone", 1219, true);

    // const productNumber = document.getElementById("phone-inputPiece").value;
    // const currentPiece = parseInt(productNumber) + 1;
    // document.getElementById("phone-inputPiece").value = currentPiece;

    // const priceTotal = currentPiece * 1219;
    // document.getElementById("phone-total").innerText =  priceTotal;
})

document.getElementById("phone-minusBtn").addEventListener("click", function () {
    individualPrice( "phone" , 1219, false);



})

document.getElementById("case-minusBtn").addEventListener("click", function(){
    individualPrice("case", 59, false);
})

document.getElementById("case-plusBtn").addEventListener("click", function(){
    individualPrice("case", 59, true);
})


function individualPrice(product, price, isIncrease){
    const productNumber = document.getElementById(product + "-inputPiece").value;
    const currentPiece = parseInt(productNumber);

    let updatePiece = currentPiece;


    if(isIncrease == true){
        updatePiece =  currentPiece + 1;
    }
    if (isIncrease == false && currentPiece > 0){
        updatePiece =  currentPiece - 1;
    }
    document.getElementById(product + "-inputPiece").value = updatePiece;

    const priceTotal = updatePiece * price;
    document.getElementById(product + "-total").innerText =  priceTotal;
    calculateTotal()

}

function productPieceNumber(productName){
    const currentPiece = document.getElementById(productName + "-inputPiece").value;
    const pieceNumber = parseInt(currentPiece);
    return pieceNumber;
}

function calculateTotal(){
    const phoneTotal = productPieceNumber("phone") *1219;
    const caseTotal = productPieceNumber("case") * 59;

    const subtoottal = phoneTotal + caseTotal;
    const taxTotal = subtoottal/10;
    const fullTotal = subtoottal + taxTotal;

    document.getElementById("subTotal").innerText = subtoottal;
    document.getElementById("tax").innerText = taxTotal;
    document.getElementById("total").innerText = fullTotal;


}