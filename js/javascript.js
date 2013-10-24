
$(document).ready(function () {
    $(function () {
        $(".ya-datepicker").datepicker({
            showOn: "button",
            buttonImage: "images/calendar.gif",
            buttonImageOnly: true
        });
    });

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style")
        msViewportStyle.appendChild(
          document.createTextNode(
            "@-ms-viewport{width:auto!important}"
          )
        )
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
    }

      $('.prev-exp').click(function () {
        $('#prev-experience').slideToggle();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $('.prev-badge').fadeIn();
            $(this).html('Show Previous Experience<i class="icon-arrow-down"></i> ');
        }
        else {
            $(this).addClass('active')
            $('.prev-badge').fadeOut();
            $(this).html('Hide Previous Experience<i class="icon-arrow-up"></i> ');
        }

        return false;
    });

    /*********this block is to show edit and delete button when mouse over on a panel***********/
   
    //ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
    $('.ya-editable-panel').mouseover(function () {
        $(this).addClass('panel-on');
        $(this).removeClass('panel-over');
        //  $('.ya-edit-button').addClass('active');
        //  $('.ya-delete-button').addClass('active'); 


        //ON MOUSEOUT REMOVE THE OVER CLASS
    }).mouseout(function () {
        $(this).removeClass('panel-on');
        $(this).addClass('panel-over');
    });
    /**end of block***/

});
