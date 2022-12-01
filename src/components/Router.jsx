import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ArtDesignPage from "../pages/ArtDesign/ArtDesignPage";
import GlobalConPage from "../pages/GlobalConvergence/GlobalConPage";
import SciTechPage from "../pages/ScienceTech/SciTechPage";
import ComputerScience from "../pages/ScienceTech/ComputerScience";
import DetailPage from "../pages/Detail/DetailPage";

import JoinPage from '../pages/MyPage/JoinPage';
import LoginPage from '../pages/MyPage/LoginPage';
import RegisterPage from '../pages/MyPage/RegisterPage';

import MyPage from "../pages/MyPage/MyPage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";


export default function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                
                <Route exact path="/global" element={<GlobalConPage/>}></Route>
                {/* <Route exact path="/science" element={<SciTechPage/>}></Route>
                <Route exact path="/art" element={<ArtDesignPage/>}></Route> */}
                <Route path="/works/:department/:major" element={<ComputerScience/>}></Route>

                <Route exact path="/works" element={<GalleryPage/>}></Route>
                <Route exact path="/joinpage" element={<JoinPage/>}></Route>
                <Route exact path="/loginpage" element={<LoginPage/>}></Route>
                <Route exact path="/registerpage" element={<RegisterPage/>}></Route>

                <Route exact path="/works/:id" element={<DetailPage/>}></Route>
                <Route exact path="/mypage" element={<MyPage/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}
