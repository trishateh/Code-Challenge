let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let address = id("address"),
    amount = id("amount")
    otp = id("otp"),
    form = id("form"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(address, 0, "address cannot be blank");
    engine(amount, 1, "Amount cannot be blank");
    engine(otp, 2, "OTP cannot be blank");
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}