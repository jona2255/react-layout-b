import { Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="d-flex contenido">
      <Container as="main" className="fondo-contenedor vw-75">
        <Row as="ul" sm={3} lg={4} className="list-unstyled">
          <li>
            <Button id="boton" className="boton gt30 p-3" type="button">Equipos asigndos a mayores de 30</Button>
          </li>
          <li>
            <Button className="boton tarragona p-3" type="button">Equipos asignados a personas de Tarragona</Button>
          </li>
          <li>
            <Button className="boton provincias p-3" type="button">Provincias donde hay equipos</Button>
          </li>
          <li>
            <Button className="boton puestos p-3" type="button">Puestos de trabajadores con equipo</Button>
          </li>
          <li>
            <Button className="boton edad-media p-3" type="button">Media de edad de los trabajadores</Button>
          </li>
          <li>
            <Button className="boton orden-edad p-3" type="button">Equipos ordenados por edad</Button>
          </li>
          <li>
            <Button className="boton sobremesa p-3" type="button">Equipos de tipo sobremesa</Button>
          </li>
          <li>
            <Button className="boton trabajadores-portatil p-3" type="button">Trabajadores con equipo portátil</Button>
          </li>
          <li>
            <Button className="boton equipos-tipo p-3" type="button">Equipos organizados por tipo</Button>
          </li>
          <li>
            <Button className="boton portatiles-tarragona p-3" type="button">Equipos portátiles asignados en
            Tarragona</Button>
          </li>
          <li>
            <Button className="boton resumen p-3" type="button">Resumen de equipos asignados</Button>
          </li>
        </Row>
      </Container>
      <aside className="contenido-secundario">
        <div className="consola consola-size">Aquí deberiamos introducir un tremendo código, pero no se me ocurre nada así que... A joderse</div>
      </aside>
    </div>
  );
}

export default App;
