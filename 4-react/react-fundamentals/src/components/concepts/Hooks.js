import React, {useState, useEffect} from 'react';

const Hooks = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});

  const Hooks2 = () => {
    const [results, queryNum, setQueryNum] = useNumHook('');

    useEffect(() => {
      if (queryNum !== ''){
        fetch(`http://numbersapi.com/${queryNum}`)
        .then(res => res.text())
        .then(json => {
          setResults(json);
          console.log(json)
        })
      }
    }, [queryNum])

    return(
      <div className="main">
        <div className="mainDiv">
          <h3>Enter a number below to see a number fact</h3>
          <input value={queryNum} onChange={e => setQueryNum(e.target.value)} placeholder="enter a number" />
          {results ? <h2>{results}</h2> : <div></div>}
        </div>
      </div>
    )
  }



  const fetcher = () => {
    fetch(`https://swapi.co/api/people/${query}`)
    .then(res => res.json())
    .then(json => {setResults(json); console.log(json)})
  }

  return(
    <div className="main">
      <div className="mainDiv">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter your sw character number"/>
        <button onClick={() => fetcher()}>Click for Character!</button>
        {results ? <h2>{results.name}</h2> : <div></div>}
      </div>
    </div>
  )
}

export default Hooks;

const useNumHook = (num) => {
  const [queryNum, setQueryNum] = useState(num);
  const [results, setResults] = useState('');

  return [results, queryNum, setQueryNum];
}