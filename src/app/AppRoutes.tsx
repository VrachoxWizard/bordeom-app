import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Session from '../pages/Session';
import Urge from '../pages/Urge';
import Reflection from '../pages/Reflection';
import Insights from '../pages/Insights';
import Settings from '../pages/Settings';
import About from '../pages/About';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/session" element={<Session />} />
        <Route path="/urge" element={<Urge />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
