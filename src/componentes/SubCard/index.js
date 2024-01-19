const SubCard = (props) => {
    const subCardList = [`${props.itens}`]
    return (
      <section className="contentcard opencard">
  
        <ul>
          {subCardList.map((subCardItem, index) => (
            <li key={index.toString()}>{subCardItem}</li>
          ))}
        </ul>
  
      </section>
    )
  }
  
  export default SubCard
  