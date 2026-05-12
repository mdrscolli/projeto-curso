import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";

import Error from "./componentes/Error";
import Equipe from "./componentes/Equipe";
import DisciplinasCurriculares from "./componentes/DisciplinasCurriculares";
import DisciplinasTecnicas from "./componentes/DisciplinasTecnicas";
import ListarDisciplinaTecnica from "./componentes/ListarDisciplinaTecnica";
import SobreCurso from "./componentes/SobreCurso";
import ListarDisciplinaCurricular from "./componentes/ListarDisciplinaCurricular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
  return(
    <BrowserRouter>
    <>
    <Header />
    <Routes> 
      <Route path="*" element={<Error/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/sobreCurso" element={<SobreCurso/>}/>
      <Route path="/disciplinasTecnicas" element={<DisciplinasTecnicas/>}/>
      <Route path="/disciplinasCurriculares" element={<DisciplinasCurriculares/>}/>
      
<Route path="/disciplinaTecnica/:id" element={<ListarDisciplinaTecnica/>}/>
<Route path="/disciplinaCurricular/:id" element={<ListarDisciplinaCurricular/>}/>

      <Route path="/equipe" element={<Equipe/>}/>
   </Routes>
    <Footer />
    </>
    </BrowserRouter>
  );
}

export default App;
