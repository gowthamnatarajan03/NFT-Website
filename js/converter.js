//// fetch fiat names
async function fetchFiatNames() {
    try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        if (!response.ok) {
            throw new Error("Failed to fetch fiat names");
        }
        const data = await response.json();
        return Object.keys(data.rates);
    } catch (error) {
        console.error(error);
        return [];
    }
}

//// add fiat options to the dropdown
async function addFiatOptions() {
    const fiatNames = await fetchFiatNames();
    const optionsList = document.querySelector(".options2");
    optionsList.innerHTML = "";
    fiatNames.forEach(fiat => {
        let option = document.createElement("li");
        option.textContent = fiat;
        option.addEventListener("click", function() {
            updateFiatName(this.textContent);
        });
        optionsList.appendChild(option);
    });
}

//// update the selected fiat
function updateFiatName(selectedFiat) {
    const inputField = document.querySelector(".input2");
    inputField.value = "";
    const selectButton = document.querySelector(".select-btn2 span");
    selectButton.textContent = selectedFiat;
    const wrapper = document.querySelector(".wrapper2");
    wrapper.classList.remove("active");
}

//// initialize dropdowns
async function initializeDropdowns() {
    await addFiatOptions();
    document.querySelector(".select-btn2").addEventListener("click", function() {
        const wrapper = document.querySelector(".wrapper2");
        wrapper.classList.toggle("active");
    });
}
document.getElementById("convertBtn").addEventListener("click", convertEthToFiat);
document.addEventListener("DOMContentLoaded", initializeDropdowns);

//// handle conversion and display result
async function convertEthToFiat() {
    const selectedFiat = document.querySelector(".select-btn2 span").innerText.toLowerCase();

    const ethAmount = parseFloat(document.getElementById("ethAmount").value);
    if (isNaN(ethAmount) || ethAmount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid Ethereum amount.";
        document.getElementById("result").style.display = "block";
        return;
    }

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=${selectedFiat}`);
        if (!response.ok) {
            throw new Error("Failed to fetch conversion rate.");
        }
        const data = await response.json();
        
        if (!data.ethereum || !data.ethereum[selectedFiat]) {
            throw new Error("Conversion rate not available.");
        }

        const rate = data.ethereum[selectedFiat];
        const convertedAmount = ethAmount * rate;
        document.getElementById("result").textContent = `${ethAmount} ETH = ${convertedAmount.toFixed(2)} ${selectedFiat.toUpperCase()}`;
        document.getElementById("result").style.display = "block";
    } catch (error) {
        console.error(error);
        document.getElementById("result").textContent = "Failed to perform conversion. Please try again later.";
        document.getElementById("result").style.display = "block";
    }
}

//// handle search for fiat options
document.querySelector(".input2").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const optionsList = document.querySelector(".options2");
    const options = optionsList.querySelectorAll("li");
    let matchFound = false;
    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            option.style.display = "block";
            matchFound = true;
        } else {
            option.style.display = "none";
        }
    });
    if (!matchFound) {
        optionsList.innerHTML = `<li>Oops!!!, ${searchTerm} is not available.</li>`;
    } 
});

//// handle backspace key press for Ethereum input
document.querySelector(".input2").addEventListener("keydown", function(event) {
    if (event.key === 'Backspace') {
        const optionsList = document.querySelector(".options2");
        optionsList.innerHTML = ""; 
        addFiatOptions(); 
    }
});