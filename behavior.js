console.log("behavior.js is running");


const promoCode = document.querySelector(".promo-code");
const copyButton = document.querySelector(".copy-code");

function copyCode() {
	navigator.clipboard.writeText(promoCode.textContent);
	copyButton.textContent = "Copied!";
	setTimeout(function () {
		copyButton.textContent = "Copy code";
	}, 2000);
}

copyButton.addEventListener("click", copyCode)
