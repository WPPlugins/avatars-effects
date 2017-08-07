jQuery(document).ready(function ($) {
    function setAvatarParentSize() {
        var aveffAvatarSize = $(".aveff_avatar_parent > img:first-child").width();
        for (var i = 0; i < $(".aveff_avatar_parent").length; i++) {
            console.log($(".aveff_avatar_parent:eq(" + i + ") > img.avatar").width());
            $(".aveff_avatar_parent:eq(" + i + ")").css({
                "width": $(".aveff_avatar_parent:eq(" + i + ") > img:first-child").width(),
                "height": $(".aveff_avatar_parent:eq(" + i + ") > img:first-child").height()
            });
        }
    }

    function getAvatarStyle() {
        $(".aveff_avatar_parent > .avatar").each(function () {
            var avatarFloat = $(this).css("float");
            $(this).parent().css("float", avatarFloat);
        });
    }

    getAvatarStyle();


}); // end ready