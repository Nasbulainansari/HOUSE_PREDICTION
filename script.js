function predictPrice() {
    let area = document.getElementById("area").value;
    let bedrooms = document.getElementById("bedrooms").value;
    let age = document.getElementById("age").value;

    if (area === "" || bedrooms === "" || age === "") {
        alert("⚠️ Please fill all the fields");
        return;
    }

    // Simple Price Estimation Formula
    let price = (parseInt(area) * 5500) + (parseInt(bedrooms) * 250000) - (parseInt(age) * 60000);
    
    document.getElementById("result").innerHTML = "💰 Estimated Price: ₹" + price.toLocaleString() + " Lakhs";
}