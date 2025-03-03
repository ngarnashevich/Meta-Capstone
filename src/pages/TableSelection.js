import TableMap from "../assets/Choose a table.png";

function TableSelection() {
  return (
    <>
      <header>
        <div></div>
        progress bar
      </header>

      <section>
        <h2>Table Selection</h2>
        <div className="table-location">
          <p>Table Selection: </p>
          <div className="table-location-options">
            <label className="table-radio">
              <input
                type="radio"
                id="indoors"
                name="location"
                value="Indoors"
                checked
              />
              Indoors
            </label>

            <label className="table-radio">
              <input
                type="radio"
                id="outdoors"
                name="location"
                value="Outdoors"
              />
              Outdoors
            </label>
          </div>
        </div>
      </section>
      <section className="table-selection">
        <h2>Choose a Table</h2>
        <img src={TableMap} alt="restaurant floor map with table locations" />
      </section>
    </>
  );
}

export default TableSelection;
