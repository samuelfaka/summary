function payment () {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
}

function cancel() {
    const usd = document.querySelector(".usd");
    Swal.fire({
        icon: "error",
        text: "Order canceled",
    });
    usd.textContent = '$59.99/year';
}

function changeprice() {
    const pop = document.querySelector(".toast");
    pop.style.display = 'flex';
    pop.style.scale = '1';
}

function ok () {
    const minPrice = 20;
    const pop = document.querySelector(".toast");
    const eror = document.querySelector(".eror");
    const usd = document.querySelector(".usd");
    const erorPrice = document.querySelector(".eror-price");
    let priceInput = document.querySelector(".prices").value;
    let price = parseFloat(priceInput);

    if (!priceInput) {
        eror.style.display = "flex";
        erorPrice.style.display = "none";
        pop.style.display = "none";
    } 
    
    else if (price <= minPrice || price === minPrice) {
        erorPrice.style.display = "flex";
        eror.style.display = "none";
        pop.style.display = "none"; 
    } 

    else {
        pop.style.display = "none";
        usd.textContent = `$${price}/year`;
        eror.style.display = "none";
        erorPrice.style.display = "none";
    }
}

function out() {
    const pop = document.querySelector(".b3");
    pop.style.display = "flex";
    pop.style.scale = "1";
}

document.getElementById("closeButton").addEventListener("click", function() {
    const pop = document.querySelector(".b3");
    pop.style.display = "none";
    pop.style.scale = "0";
});

