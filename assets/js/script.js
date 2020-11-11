pokemonJson.map((item, index)=>{
    let pokemonItem = document.querySelectorAll('#header, #card').cloneNode(true);

    document.querySelectorAll('.card').append(pokemonItem);
    
});

//Botão voltar ao topo
$(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 718){
      $('#voltar').addClass('scrollTop');
    }else{
      $('#voltar').removeClass('scrollTop');
    }
  
  });




   //FIXAR O MENU DE NAVEGAÇÃO NO TOPO
  $(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 718){
      $('.card').addClass('card-background');
      $('.card').addClass('fixed-top');
    }else{
      $('.card').removeClass('card-background');
      $('.card').removeClass('fixed-top');
    }
    
  });







