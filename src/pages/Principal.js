import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  orderBy,
  where,
  startAfter,
} from "firebase/firestore";
import React, { useState, useEffect, Component } from "react";
import BlogSection from "../components/BlogSection";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Tags from "../components/Tags";
import FeatureBlogs from "../components/FeatureBlogs";
import Trending from "../components/Trending";
import Search from "../components/Search";
import { isEmpty, isNull } from "lodash";
import { useLocation } from "react-router-dom";
import Category from "../components/Category";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import icono from '../assets/img/location.svg';
import L from 'leaflet'; // Importar Leaflet


const icon = L.icon({
  iconUrl: icono,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});


function useQuery() {
  return new URLSearchParams(useLocation().search);
  
}
const position = [18.185320, -91.045510]; // Coordenadas de Campeche, México

const Principal = ({ setActive, user, active }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const [lastVisible, setLastVisible] = useState(null);
  const [trendBlogs, setTrendBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(null);
  const [hide, setHide] = useState(false);
  const queryString = useQuery();
  const searchQuery = queryString.get("searchQuery");
  const location = useLocation();

  const getTrendingBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const trendQuery = query(blogRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendBlogs = [];
    querySnapshot.forEach((doc) => {
      trendBlogs.push({ id: doc.id, ...doc.data() });
    });
    setTrendBlogs(trendBlogs);
  };

  useEffect(() => {
    getTrendingBlogs();
    setSearch("");
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
        setTotalBlogs(list);
        // setBlogs(list);
        setLoading(false);
        setActive("principal");
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      getTrendingBlogs();
    };
  }, [setActive, active]);

  useEffect(() => {
    getBlogs();
    setHide(false);
  }, [active]);

  const getBlogs = async () => {
    const blogRef = collection(db, "blogs");
    console.log(blogRef);
    const firstFour = query(blogRef, orderBy("title"), limit(4));
    const docSnapshot = await getDocs(firstFour);
    setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
  };

  console.log("blogs", blogs);

  const updateState = (docSnapshot) => {
    const isCollectionEmpty = docSnapshot.size === 0;
    if (!isCollectionEmpty) {
      const blogsData = docSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs((blogs) => [...blogs, ...blogsData]);
      setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
    } else {
      toast.info("No hay más publicaciones para mostrar");
      setHide(true);
    }
  };

  const fetchMore = async () => {
    setLoading(true);
    const blogRef = collection(db, "blogs");
    const nextFour = query(
      blogRef,
      orderBy("title"),
      limit(4),
      startAfter(lastVisible)
    );
    const docSnapshot = await getDocs(nextFour);
    updateState(docSnapshot);
    setLoading(false);
  };

  const searchBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const searchTitleQuery = query(blogRef, where("title", "==", searchQuery));
    const searchTagQuery = query(
      blogRef,
      where("tags", "array-contains", searchQuery)
    );
    const titleSnapshot = await getDocs(searchTitleQuery);
    const tagSnapshot = await getDocs(searchTagQuery);

    let searchTitleBlogs = [];
    let searchTagBlogs = [];
    titleSnapshot.forEach((doc) => {
      searchTitleBlogs.push({ id: doc.id, ...doc.data() });
    });
    tagSnapshot.forEach((doc) => {
      searchTagBlogs.push({ id: doc.id, ...doc.data() });
    });
    const combinedSearchBlogs = searchTitleBlogs.concat(searchTagBlogs);
    setBlogs(combinedSearchBlogs);
    setHide(true);
    setActive("");
  };

  useEffect(() => {
    if (!isNull(searchQuery)) {
      searchBlogs();
    }
  }, [searchQuery]);

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("¿Estas seguro de eliminar esta publicación?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Publicación eliminada correctamente");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (isEmpty(value)) {
      console.log("test");
      getBlogs();
      setHide(false);
    }
    setSearch(value);
  };

  // category count
  const counts = totalBlogs.reduce((prevValue, currentValue) => {
    let name = currentValue.category;
    if (!prevValue.hasOwnProperty(name)) {
      prevValue[name] = 0;
    }
    prevValue[name]++;
    // delete prevValue["undefined"];
    return prevValue;
  }, {});

  const categoryCount = Object.keys(counts).map((k) => {
    return {
      category: k,
      count: counts[k],
    };
  });

  console.log("categoryCount", categoryCount);

  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding">
        <div className="row mx-0">
          <Trending blogs={trendBlogs} />
          <div className="col-md-8">
            <div className="blog-heading text-start py-2 mb-4">PUBLICACIONES RECIENTES</div>
            {blogs.length === 0 && location.pathname !== "/" && (
              <>
                <h4>
                  ¡No hay publicaciones relacionadas con esta palabra! :{" "}
                  <strong>{searchQuery}</strong>
                </h4>
              </>
            )}
            {blogs?.map((blog) => (
              <BlogSection
                key={blog.id}
                user={user}
                handleDelete={handleDelete}
                {...blog}
              />
            ))}

            {!hide && (
              <button className="btn btn-danger" style={{fontWeight: "bold"}} onClick={fetchMore}>
                Ver más
              </button>
            )}
          </div>
          <div className="col-md-3">
            <Search search={search} handleChange={handleChange} />
            <div className="blog-heading text-start py-2 mb-4">ETIQUETAS</div>
            <Tags tags={tags} />
            <FeatureBlogs title={"MÁS POPULAR"} blogs={blogs} />
            <Category catgBlogsCount={categoryCount} />
          </div>
        </div>
      </div>
    <footer className="footer">
      <div className="footer-container">
        <div className="contact">
          <h4><b>CONTACTO</b></h4>
          <p> <b>Dirección:</b> Calle 16 Sin Número esquina con Calle 19, Colonia Centro C.P. 24330 Altos Banco Azteca.</p>
          <p><b>Teléfono:</b> 982 82 6 02 82</p>
          <p><b>Correo electrónico:</b> cz_candelaria@inea.gob.mx</p>
        </div>
        <div className="social">
          <h4><b>REDES SOCIALES</b></h4>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100082960767721&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="hhttps://wa.me/529983674522?text=Estoy+interesado+en+formar+parte+del+IEEA.+%C2%BFPodria+brindarme+mas+informaci%C3%B3n+al+respecto%3F"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>
        <MapContainer
      center={position}
      zoom={15}
      style={{ height: "200px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.facebook.com/profile.php?id=100082960767721&mibextid=ZbWKwL">IEEA 06 CANDELARIA</a>'
      />
      
      <Marker position={position} icon={icon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
      <div
        style={{
          marginTop: "30px",
          marginBottom: "50px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      ></div>
    </MapContainer>
      </div>
    </footer>
    </div>
     
  );
};

export default Principal;
