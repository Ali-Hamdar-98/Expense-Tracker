$(document).ready(function() {
    const expenses = [];
    let totalAmount = 0;

    $("#add").click(function() {
        const category = $("#category").val();
        const amount = parseFloat($("#amount").val());
        const date = $("#date").val();

        if (category === '') {
            showPopupAlert('Please enter a category');
            return;
        }

        if (isNaN(amount) || amount <= 0) {
            showPopupAlert('Please enter a valid amount');
            return;
        }

        if (date === '') {
            showPopupAlert('Please select a date');
            return;
        }

        expenses.push({ category, amount, date });

    });
    function showPopupAlert(message) {
        $("#popupMessage").text(message);
        $("#popup").fadeIn();
    }

    $("#popupClose").click(function() {
        $("#popup").fadeOut();
    });
});
