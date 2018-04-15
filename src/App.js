import React from 'react';
import ResultsList from './ResultsList';
import Controls from './Controls';
import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // results: dummyResults,
      results: [],
      pageNumber: 1,
    };

    this.submitNewConfession = this.submitNewConfession.bind(this);
    this.getMoreResults = this.getMoreResults.bind(this);
  }

  componentDidMount() {
    this.getMoreResults();
  }

  async getMoreResults() {
    const results = await fetch(`api/confession/?page=${this.state.pageNumber}`);
    const resultsJson = await results.json();
    if (resultsJson.results) {
      this.setState(prevState => ({
        results: [...prevState.results, ...resultsJson],
        pageNumber: prevState.pageNumber + 1,
      }));
    }
  }

  async submitNewConfession({
    Title,
    Content,
  }) {
    const Id = parseInt(Math.random() * 1000000000, 10);
    const confessionToSubmit = {
      Title,
      Content,
      Id,
      TimePosted: new Date().toISOString(),
    };
    const headers = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        credentials: 'same-origin',
      }),
      body: JSON.stringify({
        ...confessionToSubmit,
      }),
    };
    const submission = await fetch('api/confession/', headers);
    const submissionJson = await submission.json();
    this.setState(prevState => ({
      results: [submissionJson, ...prevState.results],
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ResultsList
          results={this.state.results}
          getMoreResults={this.getMoreResults}
        />
        <Controls
          submit={this.submitNewConfession}
        />
      </div>
    );
  }
}

// const dummyResults = [
//   {
//     id: 1,
//     title: 'Confession1',
//     content: 'Boy oh boy',
//     timePosted: '0001-01-01T00:00:00',
//   },
//   {
//     id: 1234,
//     title: 'This is a title',
//     content: 'This is some cool content',
//     timePosted: '0001-01-01T00:00:00',
//   },
//   {
//     id: 12345,
//     title: 'This is a title',
//     content: 'This is some cool content',
//     timePosted: '0001-01-01T00:00:00',
//   },
//   {
//     id: 123475,
//     title: 'This is a title',
//     content: 'This is some cool content',
//     timePosted: '0001-01-01T00:00:00',
//   },
//   {
//     id: 1,
//     title: 'Confession1',
//     content: 'Boy oh boy',
//     timePosted: '0001-01-01T00:00:00',
//   },
//   {
//     id: 1234,
//     title: 'This is a title',
//     content: 'This is some cool content',
//     timePosted: '0001-01-01T00:00:00',
//   },
//   {
//     id: 12345,
//     title: 'This is a title',
//     content: 'This is some cool content',
//     timePosted: '0001-01-01T00:00:00',
//   },
//   {
//     id: 123475,
//     title: 'This is a title',
//     content: 'This is some cool content',
//     timePosted: '0001-01-01T00:00:00',
//   },
// ];


export default App;
