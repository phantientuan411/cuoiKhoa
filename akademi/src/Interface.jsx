//trang ho tro hien thi
import FloatingBar from './components/FloattingBar.jsx';
import NavBar from './components/navBar/Navbar.jsx';
import { useState } from 'react';
const Interface = (props) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const handleNavBarToggle = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };
  return (
    <div className='home flex flex-col w-full h-full'>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <FloatingBar />
      </div>
      <div className='h-screen flex'>
        <div style={{ height: '100vh', width: isNavBarOpen ? '250px' : '0', transition: 'width 0.3s ease-in-out', overflowY: 'auto' }}>
          <NavBar />
        </div>
        <main
          style={{
            width: '100%',
            flex: 1,
            padding: '20px',
            transition: 'margin-left 0.3s ease-in-out'
          }}>
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Interface;