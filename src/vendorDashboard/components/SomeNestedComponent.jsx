import { Routes, Route } from 'react-router-dom';
import AddArticle from './forms/AddArticle';

function SomeNestedComponent() {
  return (
    <div>
      <h2>Some Nested Component</h2>
      <Routes>
        <Route path="child" element={<AddArticle />} />
        {/* More nested routes */}
      </Routes>
    </div>
  );
}

export default SomeNestedComponent;
