import React, { useState, useRef } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/sembrado.png";
import projImg2 from "../assets/img/ieeaconafes.png";
import projImg3 from "../assets/img/propseraieea.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import emailjs from 'emailjs-com';
import { FcCalendar, FcMoneyTransfer, FcFolder  } from 'react-icons/fc';
import { Typography} from '@material-ui/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import Accordion from 'react-bootstrap/Accordion';
import { toast } from "react-toastify";


function Ofertaeducativa() {

  /* const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    fetch('https://formsubmit.co/ieeacandelaria@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => alert('Formulario enviado'))
      .catch((error) => alert(`Error al enviar el formulario: ${error}`));
  }; */
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_78zks1f', 'template_tvyksk3', form.current, 'P67hRDGfO5QPvVSTg')
      .then((result) => {
        toast.success("Respuesta enviada, gracias.")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
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
      title: "Sembrando Vida",
      description: "Reunión con beneficiarios del programa Sembrando Vida",
      imgUrl: projImg1,
    },
    {
      title: "H. Ayuntamiento de Candelaria y Conafe",
      description: "Entrega de certificados",
      imgUrl: projImg2,
    },
    {
      title: "Vinculación Prospera 2015 e IEEA",
      description: "Combatir la alfabetización",
      imgUrl: projImg3,
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
                    <Nav.Link eventKey="first">PREINSCRIPCIÓN DE EDUCANDO</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">ALFABETIZACIÓN</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">PRIMARIA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="cuarto">SECUNDARIA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="quinto">ALIANZAS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sexto">PREGUNTAS FRECUENTES</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
               <div className='formulario-rojo'>
               <label>RELLENA EL SIGUIENTE FORMULARIO, ¡UN ASESOR SE PONDRA EN CONTACTO CONTIGO MUY PRONTO!</label>
               <br /><br />
               <form ref={form} onSubmit={sendEmail}>
                  <label>Comunidad:</label><label>ㅤ</label>
                  <input placeholder='Escribe tu comunidad' type="text" name="comunidad_usuario" /><label>ㅤ</label>
                  <label>Nombre: </label><label>ㅤ</label>
                  <input placeholder='Escribe tu nombre' type="text" name="nombre_usuario" /><label>ㅤ</label> 
                  <br />
                  <label>Apellidos: </label><label>ㅤ</label> 
                  <input placeholder='Escribe tus apellidos' type="text" name="apellidos_usuario" />
                  <label>ㅤ</label>  <label>Edad: </label><label>ㅤ</label> 
                  <input placeholder='Escribe tu edad' type="text" name="edad_usuario" /><label>ㅤ</label>
                  <label>¿Cúal es el nivel en el que te gustaría participar?  </label> <label>ㅤ</label>
                  <select name="oferta_usuario">
                    <option value="alfabetizacion">Alfabetización</option>
                    <option value="primaria">Primaria</option>
                    <option value="secundaria">Secundaria</option>
                    <option value="mevyt">Mevyt</option>
                  </select>
                  <br />
                  <br />
                  <label>Sexo:</label><label>ㅤ</label> 
                  <select name="sexo_usuario">
                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                  </select>
                  <br />
                  <br />
                  <label>Correo electrónico:</label> <label>ㅤ</label> 
                  <input placeholder='correo@gmail.com' type="email" name="correo_usuario" /><label>ㅤ</label>
                  <br />
                  <label>Estado civil:</label><label>ㅤ</label> 
                  <select name="estado_usuario">
                  <option value="alfabetizacion">Soltero</option>
                  <option value="primaria">Casado</option>
                  <option value="secundaria">Divorciado</option>
                  <option value="Union libre">Unión libre</option>
                </select><label>ㅤ</label>
                <br />
                <br />
                  <label>Comentarios: </label>
                  <br />
                  <textarea placeholder='Deja tus dudas a considerar' name="comentario_usuario" /><label>ㅤ</label>
                  <br />
                  <br />
                  <input type="submit" style={{backgroundColor: '#721c24', color: "white", fontWeight: "bold", width: 120, borderRadius: 5, border: "none", padding: "12px 20px;", height: 40}} value="ENVIAR" />
                </form>
               </div>
               </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <div className='alfa'>
                  <label>
                  La alfabetización es el nivel inicial para que inicies tus estudios básicos acreditando solo tres módulos básicos.
                  <br /><br />
                  1. La palabra<br />
                 2. Para empezar<br />
                  3. Matemáticas para empezar<br /><br />
                  Nuestros modelos educativos están diseñados para que tu aprendizaje sea fácil aprovechando tus experiencias,
                  saberes y conocimientos adquiridos a lo largo de tu vida.<br /><br />
                  La alfabetización esta dirigida a las personas jóvenes y adultas, se le denomina nivel inicial porque va más 
                  allá de la enseñanza del alfabeto, los números y el sistema de escritura y lectura. La alfabetización funcional, 
                  llamada nivel inicial en el MEVyT, pretende que las personas aprendan también a utilizar y aplicar, de manera 
                  continua y eficiente la cultura escrita, de forma que no recaiga en el analfabetismo por desuso, olvido o
                  incomprensión. Por tanto, su objetivo es: propiciar en las personas jóvenes y adultas el desarrollo y uso,
                  con sentido y continuidad, de las habilidades básicas de lectura, escritura y calculo escrito, como 
                  herramienta para poder enfrentar situaciones elementales de su vida cotidiana y para contar con los 
                  elementos básicos que le faciliten seguir aprendiendo.      
                  </label>
                  <br /><br /><br /><br />
                </div>
                  <div className="box"> 
      <div className="point">
        <FcCalendar className="icon" />
        <label>DURACIÓN</label><br />
        <label>El tiempo para terminar la etapa de alfabetización<br /> 
        depende mucho del estudiante, la dedicación,
       la constancia que le <br />ponga a estudiar, asistir a
        clases, cumplir con sus trabajos<br /> de los módulos.</label>
      </div>
      <div className="point">
        <FcMoneyTransfer className="icon" />
        <label>COSTO</label><br />
        <label>Los servicios que ofrecemos y materiales<br /> no tienen ningún costo.</label>
      </div>
      <div className="point">
        <FcFolder className="icon" />
        <label>REQUISITOS</label><br />
        <label>1 copia del acta de nacimiento y original para cotejo. <br />1 copia de la C.U.R.P.<br />
2 fotografías tamaño infantil, de frente con el rostro descubierto, en papel fotográfico mate o semi mate con fondo blanco, y camisa clara.<br />
Solo en caso de tener: 1 copia de la última boleta de grado aprobado y original para cotejo.</label>
      </div>
      <style jsx>{`
        .box {
          background-color: #7d0012;
          color: white;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 20px;
        }
        .point {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </div>

                  </Tab.Pane>
                  <Tab.Pane eventKey="third">

                  <div className='alfa'>
                  <label>                  
                  Si estás interesado en concluir la primaria, en esta sección encontrarás los servicios que te ofrece el INEA 
                  para aprender, acreditar y obtener tu certificado.<br /><br />
                  El nivel intermedio está orientado a los educandos que desean continuar con su educación primaria.<br /><br />
                   Los interesados deben acreditar 12 módulos para obtener su certificado.
                  10 módulos básicos (3 son del nivel inicial y 7 del nivel intermedio) + 2 módulos diversificados que las personas elijan.
                  <br /><br />
              
                  En el INEA te reconocemos tus boletas de calificaciones de la escuela en donde hayas estudiado y además te 
                  reconocemos lo que has aprendido a lo largo de la vida. <br /> <br />
                  ¡Si! La escuela no es el único lugar donde las personas aprendemos cosas. Todos los días aprendemos de las 
                  experiencias que nos ofrece la vida, de lo que oímos y vemos y también aprendemos de nuestros pasatiempos y de nuestro trabajo.  <br /><br />
                  Para saber cómo te reconocemos las boletas de calificación de la escuela donde hayas estudiado haz clic en Tablas de sustitución para que veas
                  a qué equivale lo que haz estudiado y lo que faltaría y que tendrías que estudiar con nosotros, según quieras terminar tu primaria. <br /><br /> 

                  <p > Tablas de sustitución primaria</p>
              
                  Para reconocerte los aprendizajes que has obtenido a lo largo de la vida, en el INEA contamos con una Evaluación Diagnóstica,
                   la que puedes presentar en cuanto te registras como educando del INEA.<br /><br />
                  Si deseas saber más acerca de la Evaluación diagnóstica<br />

                  Las Tablas de sustituciones y la Evaluación diagnóstica se pueden combinar para tu beneficio.
                  </label>
                  <br /><br /><br /><br />
                </div>
                  <div className="box"> 
      <div className="point">
        <FcCalendar className="icon" />
        <label>DURACIÓN</label><br />
        <label>El tiempo para terminar la etapa de alfabetización<br /> 
        depende mucho del estudiante, la dedicación,
       la constancia que le <br />ponga a estudiar, asistir a
        clases, cumplir con sus trabajos<br /> de los módulos.</label>
      </div>
      <div className="point">
        <FcMoneyTransfer className="icon" />
        <label>COSTO</label><br />
        <label>Los servicios que ofrecemos y materiales<br /> no tienen ningún costo.</label>
      </div>
      <div className="point">
        <FcFolder className="icon" />
        <label>REQUISITOS</label><br />
        <label>1 copia del acta de nacimiento y original para cotejo. <br />1 copia de la C.U.R.P.<br />
2 fotografías tamaño infantil, de frente con el rostro descubierto, en papel fotográfico mate o semi mate con fondo blanco, y camisa clara.<br />
Solo en caso de tener: 1 copia de la última boleta de grado aprobado y original para cotejo.</label>
      </div>
      <style jsx>{`
        .box {
          background-color: #7d0012;
          color: white;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 20px;
        }
        .point {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </div>
                         </Tab.Pane>
                         <Tab.Pane eventKey="cuarto">
                         <div className='alfa'>
                  <label>                  
                  En el nivel avanzado se brinda atención a jóvenes y adultos que desean acceder a un nivel superior de 
                  bachillerato. Para certificar la secundaria, las personas deben acreditar 12 módulos:<br /><br />

                  8 módulos básicos del nivel avanzado + 4 módulos diversificados que las personas elijan.<br /><br />
                  <p> ¿Cómo concluir mis estudios?</p>
                  <p > ¿Sabías que terminar tu secundaria es muy sencillo?</p>

                   En el INEA te reconocemos tus boletas de calificaciones de la escuela en donde hayas estudiado y además te reconocemos lo que has aprendido a lo largo de la vida.
                  ¡Si! La escuela no es el único lugar donde las personas aprendemos cosas. Todos los días aprendemos de las experiencias que nos ofrece la vida, de lo que oímos y vemos y también aprendemos de nuestros pasatiempos y de nuestro trabajo.
                  <br /><br />


                  <p > Tablas de sustitución primaria</p>
              
                  Para reconocerte los aprendizajes que has obtenido a lo largo de la vida, en el INEA contamos con una Evaluación Diagnóstica, la que puedes presentar en cuanto te registras como educando del INEA.
                  </label>
                  <br /><br /><br /><br />
                </div>
                  <div className="box"> 
      <div className="point">
        <FcCalendar className="icon" />
        <label>DURACIÓN</label><br />
        <label>El tiempo para terminar la etapa de alfabetización<br /> 
        depende mucho del estudiante, la dedicación,
       la constancia que le <br />ponga a estudiar, asistir a
        clases, cumplir con sus trabajos<br /> de los módulos.</label>
      </div>
      <div className="point">
        <FcMoneyTransfer className="icon" />
        <label>COSTO</label><br />
        <label>Los servicios que ofrecemos y materiales<br /> no tienen ningún costo.</label>
      </div>
      <div className="point">
        <FcFolder className="icon" />
        <label>REQUISITOS</label><br />
        <label>1 copia del acta de nacimiento y original para cotejo. <br />1 copia de la C.U.R.P.<br />
2 fotografías tamaño infantil, de frente con el rostro descubierto, en papel fotográfico mate o semi mate con fondo blanco, y camisa clara.<br />
Solo en caso de tener: 1 copia de la última boleta de grado aprobado y original para cotejo.</label>
      </div>
      <style jsx>{`
        .box {
          background-color: #7d0012;
          color: white;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 20px;
        }
        .point {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </div>


                          </Tab.Pane>
                          
                         <Tab.Pane eventKey="quinto">
                          
                         <div className='alfa'></div>
                         <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>   
                         


                         </Tab.Pane>


                         <Tab.Pane eventKey="sexto">
                          
                         <div className='alfa'></div>
                         <Accordion className="mi-acordeon">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className="panel-heading"  bsPrefix={{background: '#d0f1f7'}} ><strong style={{ color: '#721c24' }}>¿Quién puede estudiar en el IEEA?</strong></Accordion.Header>
                          <Accordion.Body >
                          Cualquier persona interesada en concluir o iniciar sus estudios de 
                          educación básica (alfabetización, primaria y secundaria) mayor de 
                          15 años. En IEEA se cuenta además con un programa llamado “10-14” 
                          el cual brinda la educación primaria a chicos que se encuentran en 
                          este rango de edad. <br /><br />
                          Si te interesa o conoces a alguien que deseé iniciar o concluir sus 
                          estudios de educación básica, en IEEA les atenderemos con gusto. 
                          Sólo necesitas acercarte al Punto de Encuentro, Plaza Comunitaria u 
                          Oficina de IEEA más cercana a tu domicilio o trabajo. En la página 
                          principal del Portal CONEVyT en el módulo de Plazas Comunitarias con 
                          solo teclear tu código postal sabrás donde se ubican las Plazas 
                          Comunitarias más próximas. Acércate a cualquiera de ellas para pedir 
                          información y realizar tu proceso de inscripción.<br /><br />
                          Es importante mencionar que todos los servicios que brinda el IEEA 
                          son totalmente gratuitos.
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                        <Accordion.Header >
                        <strong style={{ color: '#721c24' }}>¿Dónde puedo terminar la primaria o la secundaria?</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                        Si no has concluido tu educación básica (primaria o secundaria), el IEEA te ayuda a terminarla. Sólo debes acudir al Punto de Encuentro, Plaza Comunitaria u Oficina del IEEA más cercana a tu domicilio o trabajo. En la página principal del Portal CONEVyT en el módulo de Plazas Comunitarias con solo teclear tu código postal sabrás donde se ubican las Plazas Comunitarias más próximas. Acércate a cualquiera de ellas para pedir información y realizar tu proceso de inscripción.
                        </Accordion.Body>
                       </Accordion.Item>

                        <Accordion.Item eventKey="2">
                          <Accordion.Header className='bg-secondary'> 
                          <strong style={{ color: '#721c24' }}>
                          ¿Qué necesito estudiar para obtener mi certificado de primaria o secundaria?</strong></Accordion.Header>
                          <Accordion.Body>
                            Para obtener el certificado de terminación de estudios de educación primaria el educando deberá acreditar los 10 módulos básicos del Modelo de Educación para la Vida y el Trabajo, correspondientes a alfabetización y primaria y 2 módulos diversificados.<br /><br />
                            Para obtener el certificado de terminación de estudios de Educación secundaria el educando deberá presentar los 8 módulos básicos del Modelo de Educación para la Vida y el Trabajo correspondientes al nivel secundaria y 4 módulos diversificados.<br /><br />
                            Recuerda que es muy importante que concluyas tu trámite de inscripción, esto evitará que por falta de documentos tu certificado de terminación de estudios no sea expedido a tiempo.
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                          <Accordion.Header> 
                          <strong style={{ color: '#721c24' }}>¿Dónde puedo estudiar o recibir asesorías? </strong></Accordion.Header>
                          <Accordion.Body>
                          En las Plazas Comunitarias o Puntos de Encuentros se forman grupos de estudio y se brinda asesoría a los educandos del IEEA. Estos grupos se reúnen en horarios y días flexibles de acuerdo a la solicitud que se haga a los asesores.
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                          <strong style={{ color: '#721c24' }}>
                          ¿Dónde puedo presentar exámenes de primaria o secundaria?  
                            </strong></Accordion.Header>
                          <Accordion.Body>
                          Si eres educando del IEEA, al terminar el estudio de un módulo o un curso en línea, podrás solicitar a tu Asesor o directamente con tu Técnico Docente la aplicación del examen. Acordando junto con ellos, el día, la hora y el lugar en el que lo presentarás.<br /><br />
                          En caso de no ser educando del IEEA, deberás acudir al Punto de Encuentro, Plaza Comunitaria u oficina del IEEA más cercana a tu domicilio. En la página principal del Portal CONEVyT, en el módulo de Plazas Comunitarias con solo teclear tu código postal sabrás donde se ubican las Plazas Comunitarias próximas a tu casa. Acércate a cualquiera de ellas para pedir información y se aclaren todas tus dudas.
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                          <Accordion.Header>
                          <strong style={{ color: '#721c24' }}>¿Qué son las evidencias y para qué sirven? </strong> </Accordion.Header>
                          <Accordion.Body>
                          Los materiales en los que se pueden estudiar los módulos del MEVyT son en material impreso, en CD y los cursos que se encuentran en el Portal CONEVyT. Con el fin de reconocer el trabajo que realizan nuestros educandos al estudiar sus módulos, una vez que estas listos para presentar el examen, deben llevar a la aplicación lo que llamamos evidencias las cuales se toman en cuenta para la calificación final del examen. Las evidencias son la hoja de avance firmada por el asesor y los ejercicios de auto evaluación de los módulos.
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="6">
                          <Accordion.Header>
                          <strong style={{ color: '#721c24' }}>¿En IEEA hacen validos los conocimientos que ya poseo?</strong> 
                            </Accordion.Header>
                          <Accordion.Body>
                          Si es posible reconocer la serie de conocimientos que nuestros educandos han ido desarrollando a lo largo de su vida y esto se puede hacer de dos formas: una es presentando los antecedentes escolares de grados cursados en sistema escolarizado o bien presentando un examen diagnóstico con el cual acreditas módulos y puedes, incluso, llegar a obtener tu certificado de primaria o secundaria, según sea tu caso.
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7">
                          <Accordion.Header>
                          <strong style={{ color: '#721c24' }}>¿Cómo obtengo copia de mi certificado de INEA?</strong>
                            </Accordion.Header>
                          <Accordion.Body>
                          Para obtener una copia del certificado de primaria o secundaria, es necesario acudir a la Coordinación de Zona en donde se te brindó la atención a fin de realizar el trámite para obtener un duplicado. Esto siempre y cuando tus estudios los hayas realizado en el IEEA, de lo contrario, debes hacer tu solicitud en la Institución que te expidió el documento original.<br /><br />
                          Te sugerimos que al momento de ir a solicitar el trámite lleves copia fotostática del certificado (si cuentas con ella) e identificación con fotografía.
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="8">
                          <Accordion.Header>
                          <strong style={{ color: '#721c24' }}>¿Cómo puedo colaborar con el IEEA?</strong>
                           </Accordion.Header>
                          <Accordion.Body>
                          Existe la inquietud de muchas personas de participar con el IEEA dando asesorías a los adultos, sin embargo, esto no es propiamente un empleo, es una actividad ligada a la acción voluntaria de la gente por la que en ciertos casos se puede recibir una pequeña gratificación. Si te interesa apoyar a la educación de adultos, te invito a que formes parte de nuestro equipo. Acude a la Coordinación de Zona, Punto de Encuentro o Plaza Comunitaria más cercana a tu domicilio ahí te proporcionarán información más detallada. Gracias por consultar nuestra página.
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="9">
                          <Accordion.Header>
                          <strong style={{ color: '#721c24' }}>¿Puedo hacer mi Servicio Social en el IEEA?</strong>
                            </Accordion.Header>
                          <Accordion.Body>
                          Si eres estudiante, en el IEEA puedes llevar a cabo tu Servicio Social. Puedes dar asesorías a los educandos (sí así lo deseas) o aportando tu trabajo en otro ámbito de acción. Sólo es necesario que acudas a la Coordinación de Zona, Punto de Encuentro o Plaza Comunitaria más cercana a tu domicilio o escuela y comentar con ellos esta inquietud para que te den más información al respecto. En la página principal del Portal CONEVyT en el módulo de Plazas Comunitarias con solo teclear tu código postal sabrás donde se ubican las Plazas Comunitarias más próximas.
                          </Accordion.Body>
                        </Accordion.Item>


                      </Accordion>
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

export default Ofertaeducativa;
