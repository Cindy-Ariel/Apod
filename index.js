const titulo = $("#titulo");
const tagImagemAPI = $("#imagem");
const tagVideo = $("#video");
const tagTexto = $("#texto");
const tagBotao = $("#botao");
const imputData = $("#data");

tagVideo.hide();
tagImagemAPI.hide();
tagTexto.hide();

tagBotao.click(() => {
  const dataSelecionada = $(imputData).val();
  $("body").css("background-image", "url('image/imgfundo.jpeg')");
  $.get(
    `https://api.nasa.gov/planetary/apod?api_key=FEj5l4GkuixWAH6qkkahRoexHq0q4Lculo4Co9GN&date=${dataSelecionada}`,
    (resultado) => {
      console.log(resultado);
    }
  )
    .done((resultado) => {
      if (resultado.media_type === "image") {
        tagImagemAPI.attr("src", resultado.url).show();
        tagVideo.hide();
      } else if (resultado.media_type === "video") {
        tagVideo.attr("src", resultado.url).show();
        tagImagemAPI.hide();
      }
      titulo.text(resultado.title).show();
      tagTexto.text(resultado.explanation).show();
    })

    .fail(() => {
      tagImagemAPI.attr(
        "src",
        "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"
      );
    });
});
