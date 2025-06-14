let button_display = document.querySelector(".reveal_content");
let content_display = document.querySelector(".hidden_content");

function display_work (){
    if(content_display.classList.contains('reveal_content'))
        content_display.classList.remove('reveal_content');
else{
    content_display.classList.add('reveal_content');
}
}
button_display.addEventListener('click' , display_work);

 