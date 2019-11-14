import { useEffect, useState } from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  const [appEnv, setAppEnv] = useState(null);

  useEffect(() => {
    async function getAppEnv() {
      const res = await fetch('/api/appEnv');
      const { appEnv } = await res.json();
      setAppEnv(appEnv);
    }
    getAppEnv();
  }, []);

  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div className="hero">
        <h1 className="title">Welcome to {appEnv}!</h1>

        <p className="date">
          The date is:&nbsp;{' '}
          {date ? (
            <span>
              <b>{date.date}</b>
            </span>
          ) : (
            <span className="loading" />
          )}
        </p>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .users {
          display: flex;
          justify-content: center;
          margin: 2em;
        }
        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          justify-content:space-between;
        }
        .card {
          padding: 1em;
          margin: 1em;
          width: 35%;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          color: #777;
        }
        .card .label {
          font-weight: bold;
          color: #777;
          margin:0;
          padding:0;
        }
      `}</style>
    </div>
  );
};

export default Home;
