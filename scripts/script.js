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
    let rowsCount = document.getElementById('seat-table').childElementCount;

    if(rowsCount < 4){
        alert("You need to buy 4 tickets to apply a coupon");        
    }
    else{
        if(couponCode === 'NEW15'){
            grandPrice = grandPrice - (grandPrice * 0.15);
            form.classList.add("hidden");
        }
        else if(couponCode === 'Couple 20'){
            grandPrice = grandPrice - (grandPrice * 0.20);
            form.classList.add("hidden");
        }
        else{
            alert("Not a valid Coupon code");
        }        
    }   
    setText('grand-total', grandPrice);
}

function formValidate(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    let rowsCount = document.getElementById('seat-table').childElementCount;

    if(rowsCount > 0 && name !== "" && phone !== ""){
        let successModal = document.getElementById("modal");
        successModal.classList.remove("hidden");

        hideSection("header");
        hideSection("coupons");
        hideSection("ticketSection");
        hideSection("footer");
    }
    else{
        alert("Please ensure that you have booked at least one ticket and also provide the passenger name and phone number")
    }
}

function hideSection(id){
    let section = document.getElementById(id);
    section.classList.add("hidden");
}