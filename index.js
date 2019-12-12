// check and uncheck items on the list by clicking the "Check" button

$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked', );
});

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
$('form').submit(function(e){
    e.preventDefault();
    let word = $('input').val();
    let newItem = $('ul').append(`<li>
    <span class="shopping-item">${word}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
    return newItem;
})



// permanently remove items from the list
$('.shopping-list').on('click', 'li', function(e){
    $(this).remove();
}); 



// Hint: you may find it helpful to read up on and use the following jQuery methods: 
//.submit(), preventDefault(), toggleClass(), and closest().