
import './App.css';
import Imageslider from './components/Imageslider';
import Parallaxslider from './components/Parallaxslider';


function App() {

  const images = [
    'https://wallpaperaccess.com/full/3014596.jpg',
    'https://wallpapercave.com/wp/wp1874156.jpg',
    'https://c.wallhere.com/photos/a7/a6/dinner_dof_matlagning_fotosondag_malm_restaurant_cooking_sweden-415554.jpg!d',
    
  ];

  
  return (
    <div >
       <h1 style={{textAlign:'center'}}>Parallax Effect</h1>
      <Parallaxslider images={images} />
      <div  style={{ height: '200vh' }}>
      <Imageslider/>
         {/* Add content to create scrolling */}
        {/* Your page content */}
      </div>
     
    </div>
  );
}

export default App;
