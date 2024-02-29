const ContentHome = ({ img, titulo, texto }) => {
    return (
        <section className="clinic-info_description">
            <h3>{titulo}</h3>
            <div className="description_content">
                <div className="desc_img">
                    <img src={img} alt="Veterinary white woman with a dog" />
                </div>

                <div className="clinic-info_desc_txt">
                    <p>{texto}</p>
                </div>
            </div>

            <hr />

        </section>
    )
}

export default ContentHome