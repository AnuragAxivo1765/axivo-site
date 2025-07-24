const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=> {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
});

menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("CTyckwV3sTJM02ilU"); // your public key

    menuCloseButton.addEventListener("click", () => menuOpenButton.click());

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.getElementById("name").value;
        if (!userName) {
            alert("Please enter your name.");
            return;
        }

        const userEmail = document.getElementById("email").value;
        if (!userEmail) {
            alert("Please enter your email address.");
            return;
        }

        const message = document.getElementById("message").value;
        if (!message) {
            alert("Please enter a message.");
            return;
        }

        this.reset(); // Reset the form immediately after submit

        emailjs.send("service_tinpl7d", "template_n93c3yu", {
            user_name: userName,
            user_email: userEmail,
            message: message
        })
        .then(function (response) {
            alert(`Thanks, ${userName}! Your message has been sent.`);
            console.log("SUCCESS!", response.status, response.text);
        }, function (error) {
            alert("Failed to send email.");
            console.error("FAILED...", error);
        });
    });
});


window.watsonAssistantChatOptions = {
    integrationID: "a2c95b50-e18c-45bb-b2ce-5636bf84fdc4", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "076b50ca-0115-471f-9f4b-596cfda36ada", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});