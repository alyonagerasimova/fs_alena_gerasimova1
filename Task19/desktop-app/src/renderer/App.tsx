import './App.css';
import { Route, Routes, MemoryRouter as Router } from 'react-router-dom';
import { Home } from './module/components/Home';
import { AnimalCreate } from './module/components/AnimalCreate';
import { AnimalEdit } from './module/components/AnimalEdit';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create"
          element={
            <div className="container">
              <div className="content">
                <AnimalCreate />
              </div>
            </div>
          }
        />
        <Route
          path="/pet/:id"
          element={
            <div className="container">
              <div className="content">
                <AnimalEdit />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
