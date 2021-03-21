function addToDo(evt) {
    if ($("input").val() !== "") {
        $("ul").append($(`<li><button class="delete">X</button><span class="listItem">${$("input").val()}</span></li>`));
        $("input").val("");
    };
    deleteSkill();
}

function deleteSkill() {
    $(".delete").click(function () {
        $(this).closest('li').fadeOut(
            1000
            , function () {
                $(this).remove();
            }
        );
    })
}

$("#addSkills").click(addToDo)