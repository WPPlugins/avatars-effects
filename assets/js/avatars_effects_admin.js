jQuery(document).ready(function ($) {
    // opened checked sections ad page loading
    for (var i = 0; i < $(".aveff_options_page .input-wrap2 input[type=checkbox]").length; i++) {
        var checkboxNumber = i + 1;
        if ($(".input-wrap2-" + checkboxNumber + " input[type=checkbox]").is(":checked")) {
            $(".input-wrap2-" + checkboxNumber + " input[type=checkbox]").parents(".aveff_toggle_block_wrap").find(".hide-for-default").slideDown(200);
            $(".input-wrap2-" + checkboxNumber + " input[type=checkbox]").parent().css("border-color", "#0d9c0d");
        } else {
            $(".input-wrap2-" + checkboxNumber + " input[type=checkbox]").parents(".aveff_toggle_block_wrap").find(".hide-for-default").slideUp(200);
            $(".input-wrap2-" + checkboxNumber + " input[type=checkbox]").parent().css("border-color", "#d30000");
        }
    }

    $(document).delegate(".aveff_options_page .input-wrap2 input[type=checkbox]", "change", function () {
        var nearestInputsParent = $(this).parents(".aveff_toggle_block_wrap").find(".hide-for-default"),
                eachInputValue = "";
        if ($(this).is(":checked")) {
            $(this).parents(".aveff_toggle_block_wrap").find(".hide-for-default").slideDown(200);
            $(this).parent().css("border-color", "#0d9c0d");
            nearestInputsParent.find("li").each(function () {
                if (typeof $(this).find("[data-unique-attribut]").val() !== "undefined" && typeof $(this).find(".aveff_avatar_prop_unit").text() !== "undefined") {
                    eachInputValue = $(this).find("[data-unique-attribut]").val() + $(this).find(".aveff_avatar_prop_unit").text();
                    $("#aveff_example_avatar_for_review .avatar").css($(this).find("[data-unique-attribut]").data('unique-attribut'), eachInputValue);
                }
            });
        } else {
            $(this).parents(".aveff_toggle_block_wrap").find(".hide-for-default").slideUp(200);
            $(this).parent().css("border-color", "#d30000");
            if ($(this).attr("data-meaning")) {

            } else {
                nearestInputsParent.find("li").each(function () {
                    if (typeof $(this).find("[data-unique-attribut]").data('input-default-val') != "undefined") {
                        eachInputValue = $(this).find("[data-unique-attribut]").data('input-default-val') + $(this).find(".aveff_avatar_prop_unit").text();
                        $("#aveff_example_avatar_for_review .avatar").css($(this).find("[data-unique-attribut]").data('unique-attribut'), eachInputValue);
                    }
                });
            }
        }
    });

    // avatar zoom sizing range value
    $(".aveff_options_page input[type=range]").change(function () {
        $(this).prev().children(".aveff_zoom_size_value").text($(this).val());
    });

    // example avatar runtime styling
    $(document).delegate(".aveff_options_page table [data-unique-attribut]", "change", function () {
        var inputVal = $(this).val().length ? $(this).val() : $(this).data("input-default-val");
        var imgProperty = $(this).attr("data-unique-attribut");

        var imgRotateProperty = $(this).attr("data-unique-attribut");
        var imgPropertyPoint = $(this).attr("data-point-attribut");
        var cssCont = {};
        cssCont[imgProperty] = inputVal + imgPropertyPoint;

        $(".aveff_example_avatar_for_review .aveff_example_avatar").css(cssCont);
    });


    // enable and desable example avatar shadow
    $(document).delegate(".aveff_options_page table #aveff_avatar_shadow input", "change", function () {
        var shadowProperties = " ";
        $(".aveff_options_page table #aveff_avatar_shadow input:not([type=checkbox])").each(function () {
            var eachInputVal = $(this).val().length ? $(this).val() : 0;
            shadowProperties = shadowProperties + " " + eachInputVal + $(this).attr("data-point-attribut");
        });
        $(".aveff_example_avatar_for_review .aveff_example_avatar").css("box-shadow", shadowProperties);
        if ($(this).attr("type") == "checkbox" && !$(this).is(":checked")) {
            $(".aveff_example_avatar_for_review .aveff_example_avatar").css("box-shadow", "0 0 0 0 rgba(0,0,0,0)");
        }
    });

    // enable and desable example avatar rotation
    $(document).delegate(".aveff_options_page table #aveff_avatar_rotation input", "change", function () {
        var shadowProperties = " ";
        var eachRotateProp = " ";
        $(".aveff_options_page table #carv_avatar_rotate input:not([type=checkbox])").each(function () {
            var eachInputVal = $(this).val().length ? $(this).val() : 0;
            eachRotateProp = eachRotateProp + " " + $(this).attr("data-unique-attribut") + "(" + eachInputVal + "deg)";
        });
        $(".aveff_example_avatar_for_review .aveff_example_avatar").css("transform", "perspective(100px) " + eachRotateProp);
        // desable
        if ($(this).attr("type") == "checkbox" && !$(this).is(":checked")) {
            $(".aveff_example_avatar_for_review .aveff_example_avatar").css("transform", "rotate(0)");
        }
    });

    if ($("input#enable_avatar_zoom").is(":checked")) {
        $(".aveff_example_avatar_for_review .aveff_example_avatar").addClass("allow-zoom");
    } else {
        $(".aveff_example_avatar_for_review .aveff_example_avatar").removeClass("allow-zoom");
    }
    $("input#enable_avatar_zoom").change(function () {
        $(".aveff_example_avatar_for_review .aveff_example_avatar").toggleClass("allow-zoom");
    });

}); // end ready