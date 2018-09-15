$(function () {
    $(".create-burger").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
        };
        $.post("/api/burgers", newBurger)
            .then(function (data) {
                location.reload();
            });
        $("#new-burger").val("");
    });

    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        console.log("ID: " + id);
        var eatTime = {
            timeEaten: moment().format("dddd, MMMM Do YYYY, h:mm a")
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatTime
        }).then(
            function () {
                console.log("Devoured at:" + eatTime.timeEaten);
                location.reload();
            }
        );
    });
});
$( document ).click(function() {
    $( ".burgerholder" ).effect( "bounce", "slow" );
});