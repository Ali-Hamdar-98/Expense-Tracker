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

        updateTable();

        $("#category").val('');
        $("#amount").val('');
        $("#date").val('');
    });

    function updateTable() {
        const newRow = $("<tr>");
        const categoryCell = $("<td>").text(expenses[expenses.length - 1].category);
        const amountCell = $("<td>").text(expenses[expenses.length - 1].amount.toFixed(2));
        const dateCell = $("<td>").text(expenses[expenses.length - 1].date);
        const deleteCell = $("<td>");
        const deleteBtn = $("<button>").text('Delete').addClass('delete');

        deleteBtn.click(function() {
            const index = $(this).closest("tr").index();
            deleteExpense(index);
        });

        deleteCell.append(deleteBtn);
        newRow.append(categoryCell, amountCell, dateCell, deleteCell);
        $("#expneseTableBody").append(newRow);

        totalAmount += expenses[expenses.length - 1].amount;
        $("#totalAmount").text(totalAmount.toFixed(2));
    }

    function deleteExpense(index) {
        const deletedExpense = expenses[index];
        totalAmount -= deletedExpense.amount;
        $("#totalAmount").text(totalAmount.toFixed(2));

        expenses.splice(index, 1);
        $("#expneseTableBody").find("tr").eq(index).remove();
    }

    function showPopupAlert(message) {
        $("#popupMessage").text(message);
        $("#popup").fadeIn();
    }

    $("#popupClose").click(function() {
        $("#popup").fadeOut();
    });
});
