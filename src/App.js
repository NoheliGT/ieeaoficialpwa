import { useState, useEffect } from "react";
import "./App.css";
import "./style.scss";
import "./media-query.css";
import Principal from "./pages/Principal";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./pages/Detail";
import AñadirPublicacion from "./pages/AñadirPublicacion";
import Acerca from "./pages/Acerca";
import Conocenos from "./pages/Conocenos";
import Ofertaeducativa from "./pages/Ofertaeducativa";
import Error from "./pages/Error";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import TagBlog from "./pages/TagBlog";
import Categoria from "./pages/Categoria";
import ScrollToTop from "./components/ScrollToTop";
import Publicacion from "./pages/Publicacion";


function App() {
  const [active, setActive] = useState("principal");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };

  return (
    <div className="App">
      <Header
        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
      <ScrollToTop />
      <ToastContainer position="top-center" />
      <Routes>
        <Route
          path="/"
          element={<Principal setActive={setActive} active={active} user={user} />}
        />
        <Route
          path="/search"
          element={<Principal setActive={setActive} user={user} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail setActive={setActive} user={user} />}
        />
        <Route
          path="/create"
          element={
            user?.uid ? <AñadirPublicacion user={user} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/update/:id"
          element={
            user?.uid ? (
              <AñadirPublicacion user={user} setActive={setActive} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/ofertaeducativa" element={<Ofertaeducativa />} />
        <Route path="/blogs" element={<Publicacion setActive={setActive} />} />
        <Route path="/tag/:tag" element={<TagBlog setActive={setActive} />} />
        <Route path="/category/:category" element={<Categoria setActive={setActive}  />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route
          path="/auth"
          element={<Auth setActive={setActive} setUser={setUser} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
