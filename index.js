$("#botao").click(() => {
  const dataSelecionada = $("#data").val();

  $.get(
    `https://api.nasa.gov/planetary/apod?api_key=FEj5l4GkuixWAH6qkkahRoexHq0q4Lculo4Co9GN&date=${dataSelecionada}`,
    (resultado) => {
      console.log(resultado);
    }
  )
    .done((resultado) => {
      if (resultado.media_type === "image") {
        $("#imagem").attr("src", resultado.url);
      } else if (resultado.media_type === "video") {
        $("#video").attr("src", resultado.url);
      }
    })
    .fail(() => {
      $("#imagem").attr(
        "src",
        "https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"
      );
    });
});
