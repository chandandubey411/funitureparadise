import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contct";
import CategoryProducts from "./components/CategoryProducts";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
          <Footer />
        </div>
      ),
    },
    {
      path: "/products",
      element: (
        <div>
          <Navbar />
          <Products />
          <Footer />
        </div>
      ),
    },
    {
      path: "/products/:category",
      element: (
        <>
          <Navbar />
          <CategoryProducts />
          <Footer />
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <div>
          <Navbar />
          <Gallery />
          <Footer />
        </div>
      ),
    },
    {
      path: "/reviews",
      element: (
        <div>
          <Navbar />
          <Reviews />
          <Footer />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Navbar />
          <Contact />
          <Footer />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
