import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import CardDetails from "./components/Cards/CardDetails"; 

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [selectedCharacter, setSelectedCharacter] = useState(null);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [loading, setLoading] = useState(false);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
 
  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
        setLoading(false); 
      } catch (error) {
        console.error("Hata oluştu:", error);
        setLoading(false); 
      }
    })();
  }, [api]);
  
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick <span className="text-primary">&</span> Morty
      </h1>
  
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
  
      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />
          <div className="col-8">
            {loading ? ( 
              <div className="text-center my-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Yükleniyor...</span>
                </div>
              </div>
            ) : (
              selectedCharacter ? (
                <CardDetails 
                  character={selectedCharacter} 
                  onBack={() => setSelectedCharacter(null)} 
                />
              ) : (
                <div className="row">
                  <Cards results={results} setSelectedCharacter={setSelectedCharacter} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
  
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
