
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchLoremData } from '../redux/actions';
import './../styles/App.css';

const App = ({ loading, data, error, fetchLoremData }) => {
  useEffect(() => {
    fetchLoremData();
  }, []);

  return (
    <div id="main">
        {/* Do not remove the main div */}
        {loading && <p>Loading...</p>}
        
        {error && <p>Error: {error}</p>}
        
        {data && !loading && (
          <div>
            <h1>A Short Narration of Lorem Ipsum</h1>
            <p>{data.text || JSON.stringify(data)}</p>
          </div>
        )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  error: state.error
});

const mapDispatchToProps = {
  fetchLoremData
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
