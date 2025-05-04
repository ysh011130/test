// import { useState } from 'react';
// import { db } from './firebase';

// function App() {
//     console.log(db);

//     return (
//         <div></div>
//     );
// }

// export default App;


// App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from "./page/login"; // ✅ 실제 위치에 따라 경로 조정

function App() {
  return (
    <div>
        <nav>
            <Link to="/">홈</Link> | 
            <Link to="/login">로그인</Link>
        </nav>

        <Routes>
            <Route path="/" element={<h1>메인 페이지입니다</h1>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
