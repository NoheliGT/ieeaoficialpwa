import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/ine.jpg";
import projImg2 from "../assets/img/inecc.jpg";
import projImg3 from "../assets/img/puebi.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import 'react-multi-carousel/lib/styles.css';

import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';


import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

function Conocenos() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const projects = [
    {
      title: "Sembrando Vida ",
      description: "Ing. Ernesto",
      imgUrl: projImg1,
    },
    {
      title: "Informatica",
      description: "Lic. Mayra",
      imgUrl: projImg2,
    },
    {
      title: "Recursos humanos",
      description: "Mtra. Elba",
      imgUrl: projImg3,
    },
    {
      title: "Administración",
      description: "Lic. Paloma",
      imgUrl: projImg1,
    },
    {
      title: "Suplente",
      description: "Lic. Juan Salvador",
      imgUrl: projImg2,
    },
    {
      title: "Finanzas",
      description: "Lic. José Delgado Vargas",
      imgUrl: projImg3,
    },
  ];

  const integrantes = [
    {
      nombre: 'Leodegario Herrera Trujillo',
      cargo: 'Delegado Municipal',
      email: 'cz_candelaria@inea.gob.mx',
      telefono: '982 82 6 02 82'
    },
    {
      nombre: 'Paloma de Leon Tula',
      cargo: 'Responsable administrativo',
      email: 'cam_admincz06@inea.gob.mx',
      telefono: '982 82 6 02 82'
    },
    {
      nombre: 'Ernesto Lopez Ek ',
      cargo: 'Responsable de Acreditación',
      email: 'cam_acredcz06@inea.gob.mx0',
      telefono: '982 82 6 02 82'
    },
    {
      nombre: 'Mayra del Carmen Nieva Dominguez',
      cargo: 'Responsable de Informática',
      email: 'cam_inforcz06@inea.gob.mx',
      telefono: '982 82 6 02 82'
    }
  ];
  

  return (
    <section className="project" id="project">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">HISTORIA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">MISIÓN Y VISIÓN</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">DIRECTORIO</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                  <div className="contenedor">
      <Typography variant="body1" className="parrafo" style={{textAlign: "justify"}}>
      El 31 de agosto de 1981, se crea por Decreto Presidencial el Instituto Nacional para la Educación de los Adultos, como Organismo Descentralizado de la Administración Pública Federal, con personalidad y patrimonio propios; con la firme decisión de promover servicios educativos dirigidos a los mexicanos mayores de 15 años que, por diferentes causas, son analfabetos o no han podido iniciar o concluir su educación primaria o secundaria.
      </Typography>
      <Typography variant="body1" className="parrafo" style={{textAlign: "justify"}}>
La propuesta educativa que promueve el INEA, se basa en los principios que señala el artículo 3° constitucional, la Ley Federal de Educación y la Ley Nacional de Educación para Adultos fundamentalmente, la cual define a la educación de adultos como una forma de educación extraescolar que se sustenta en el autodidactismo; que hace del adulto el sujeto y conductor de su propia educación, y la solidaridad social que se refleja en la participación comprometida de la sociedad en la tarea educativa.
El 9 de noviembre de 1998 se firma el Convenio de Coordinación para la Descentralización de los Servicios de Educación para Adultos publicado en el Diario Oficial de la Federación el 30 de agosto de 1999. Este hecho conlleva a que el Ejecutivo del Estado emita el acuerdo de creación del instituto estatal de la Educación para los Adultos (I.E.E.A.), publicado el 22 de abril de 1999. Posteriormente, el 28 de enero del 2000, se firma el acta de entrega-recepción del INEA al IEEA, de los recursos materiales, humanos y financieros con que cuenta el Instituto.
      </Typography>
      <Typography variant="body1" className="parrafo" style={{textAlign: "justify"}}>
El 9 de noviembre de 1998 se firma el Convenio de Coordinación para la Descentralización de los Servicios de Educación para Adultos publicado en el Diario Oficial de la Federación el 30 de agosto de 1999. Este hecho conlleva a que el Ejecutivo del Estado emita el acuerdo de creación del instituto estatal de la Educación para los Adultos (I.E.E.A.), publicado el 22 de abril de 1999. Posteriormente, el 28 de enero del 2000, se firma el acta de entrega-recepción del INEA al IEEA, de los recursos materiales, humanos y financieros con que cuenta el Instituto.
      </Typography>
      <Grid container spacing={2} className="imagenes">
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              image="http://campeche.inea.gob.mx/wp-content/uploads/2020/01/06.jpg"
              title="Imagen 1"
            />
            <CardContent>
              <Typography variant="h3" component="h2" style={{fontSize: 15, textAlign: "center"}} >
                IEEA Delegación 06 Candelaria 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              image="http://campeche.inea.gob.mx/wp-content/uploads/2022/05/Oficinas_Estatal_IEEA-2048x1078.jpg"
              title="Imagen 2"
            />
            <CardContent>
              <Typography variant="h5" component="h2"  style={{fontSize: 15, textAlign: "center"}}>
                Coordinación general Campeche
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              image="https://superchannel12.com/images/publicaciones/124218/124218.jpg"
              title="Imagen 3"
            />
            <CardContent>
              <Typography variant="h5" component="h2" style={{fontSize: 15, textAlign: "center"}}>
                IEEA
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <Card className="card">
      <CardMedia
        className="media"
        image="https://telegra.ph/file/5354e8c6ae5ea64464c5c.png"
        title="Logo de la empresa"
      />
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 15, textAlign: "center"}}>
          MISIÓN:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify"}}>
        El Instituto Estatal de la Educación para los Adultos, es un organismo público descentralizado, encargado de normar, promover, organizar, proporcionar y acreditar el sistema abierto de educación básica para la población de 15 años o más que no ha accedido o ha desertado del sistema escolarizado, a través de la participación social y del Modelo Educación para la Vida y el Trabajo, y ofrecer capacitación no formal para el trabajo, realizar investigaciones, definir modelos educativos, proporcionar materiales didácticos y certificar estudios.
        </Typography>
        <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 15, textAlign: "center"}}>
         VISIÓN:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify"}}>
        Ser una institución innovadora en educación no escolarizada para jóvenes y adultos, en investigaciones, materiales didácticos y estrategias pedagógicas, reconocida a nivel internacional por su contribución formativa con calidad y pertinencia, orientada a mejorar las condiciones de vida de la población joven y adulta en rezago educativo.
        </Typography>
      </CardContent>
    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                  <div className="container" >
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h2 className="text-center mt-4 mb-4" style={{fontSize: 16}}>NUESTROS INTEGRANTES</h2>
        </div>
      </div>
      <div className="row" style={{borderColor: 'white'}}>
        {integrantes.map((integrante, i) => (
          <div className="col-md-4 mb-4" style={{fontSize: 17}} key={i}>
            <div className="card card-custom">
              <div className="card-body">
                <div className="text-center mb-4">
                  <FaUser size={48} />
                </div>
                <h4 className="card-title" style={{fontSize: 17}}> {integrante.nombre}</h4>
                <p className="card-text"> {integrante.cargo}</p>
                <hr />
                <div className="card-text mb-3">
                  <FaEnvelope className="mr-2" /> {integrante.email}
                </div>
                <div className="card-text">
                  <FaPhone className="mr-2" /> {integrante.telefono}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
                         </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  );
}

export default Conocenos;
