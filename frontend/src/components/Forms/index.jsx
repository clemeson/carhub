

function Forms() {
  return (
    <>
      <form>
        <label className="form-label fs-3 fw-bold">Buscar um carro...</label>
        <div className="mb-3 d-flex flex-column flex-md-row">
          <input
            type="email"
            className="form-control me-md-3 mb-2 mb-md-0 w-100 w-md-75"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Digite o Modelo, Marca, Ano, Cor do carro que deseja alugar..."
          />
          <button type="submit" className="btn btn-warning w-25 w-md-auto mx-auto">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Forms;
