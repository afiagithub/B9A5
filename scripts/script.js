const allBtn = document.getElementsByClassName("seat-btn");

for (const btn of allBtn){
    btn.addEventListener("click", function (e){
        const seat = e.target;
        seat.style.backgroundColor = "#1DD100";
        seat.style.color = "white";
        seat.disabled = true
        
        // Table row added
        const tableRow = document.createElement("tr");
        const seatNum = document.createElement("td");
        const seatType = document.createElement("td");
        const seatPrice = document.createElement("td");

        seatNum.innerText = seat.innerText;
        seatType.innerText = "Economy";
        seatPrice.innerText = 550;
        tableRow.appendChild(seatNum);
        tableRow.appendChild(seatType);
        tableRow.appendChild(seatPrice);

        const seatTable = document.getElementById('seat-table');
        let rowCount = seatTable.childElementCount;  
        if(rowCount == 4){
            alert("Not Allowed");
            seat.style.backgroundColor = "#0307120D";
            seat.style.color = "#03071280";
        }
        else{
            seatTable.appendChild(tableRow);
            rowCount += 1;
        } 
        setText('seatBooked', rowCount);

        let seatLeft = 40 - rowCount;
        setText('seat-avail', seatLeft);

        totalPrice(rowCount);
    });
}

function setText(idTarget, value){
    const item = document.getElementById(idTarget);
    item.innerText = value;
}

function totalPrice(count){
    let totPrice = 550 * count;
    setText('total-price', totPrice);
    setText('grand-total', totPrice);
}

function couponPrice(){
    let couponCode = document.getElementById("coupon").value;
    let grandPrice = document.getElementById("grand-total").innerText;

    let form = document.getElementById("coupon-form");
    let grandTotal = parseInt(grandPrice);
    // console.log(couponCode);

    if(couponCode === 'NEW15'){
        grandTotal = grandTotal - (grandTotal * 0.15);
        form.classList.add("hidden");
    }
    else if(couponCode === 'Couple 20'){
        grandTotal = grandTotal - (grandTotal * 0.20);
        form.classList.add("hidden");
    }
    else{
        alert("Not a valid Coupon code");
    }    
    setText('grand-total', grandTotal);
}