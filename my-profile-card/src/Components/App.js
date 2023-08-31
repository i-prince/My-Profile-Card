import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ProfileCard from '/ProfileCard';
import Hobbies from './Hobbies';
import Footer from './Footer';
function App() {
return (
<div className="App">
<Navbar />
<ProfileCard />
<Hobbies />
<Footer />
</div>
);
}
export default App;