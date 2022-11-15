import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ArtDesignPage from "../pages/ArtDesign/ArtDesignPage";
import GlobalConPage from "../pages/GlobalConvergence/GlobalConPage";
import SciTechPage from "../pages/ScienceTech/SciTechPage";
import ComputerScience from "../pages/ScienceTech/ComputerScience";
import DetailPage from "../pages/Detail/DetailPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                <Route exact path="/globalconv" element={<GlobalConPage/>}></Route>
                <Route exact path="/sciencetech" element={<SciTechPage/>}></Route>
                <Route exact path="/artdesign" element={<ArtDesignPage/>}></Route>
                <Route exact path="/computer" element={<ComputerScience/>}></Route>
                <Route exact path="/computer/1" element={<DetailPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
