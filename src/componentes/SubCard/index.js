const SubCard = ({itens}) => {

  return (
    <section className="contentcard opencard">
      <ul>
        {itens.map((subCardItem, index) => (
          <li key={index}>{subCardItem}</li>
        ))}
      </ul>
    </section>
  );
}

export default SubCard;