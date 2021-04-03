(function () {
    const inputs = document.querySelectorAll('input');
    if (!inputs.length) {
        return;
    }
    const DATA = {
        "Holder name": "Ali Gasymov",
        "Card number": "5403414685553195",
        "Expiry": "01/25",
        "CVV/CVC": "123",
    };
    const inputAttrs = ["placeholder", "name", "title"];
    let dataKeys = Object.keys(DATA);
    inputs.forEach((input) => {
        inputAttrs.forEach((attribute) => {
            const value = input.getAttribute(attribute);
            if (dataKeys.includes(value)) {
                input.value = DATA[value];
            }
        })
    })
})();
