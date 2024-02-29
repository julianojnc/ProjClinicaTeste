const ContentHomeIn = ({ img, titulo, texto }) => {
    return(
        <section id="flex-column-reverse" className="clinic-info_description">
          <h3 className="clinic-info_title">{titulo}</h3>
          <div className="description_content">
            
            <div className="clinic-info_desc_txt">
              <p>{texto}</p>
            </div>

            <div className="desc_img-in">
              <img src={img} alt="Imagem de uma equipe de veterinários" />
            </div>

          </div>

          <hr id="hr-unique" />
        </section>
    )
}

export default ContentHomeIn