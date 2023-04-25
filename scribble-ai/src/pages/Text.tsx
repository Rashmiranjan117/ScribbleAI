import { useState } from "react";
import axios from "axios";
import './sass/text/text.css'

export interface ResType {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: {
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
    index: number;
  }[];
}

const messageReq = (payload: string) => {
  return axios.post("http://localhost:8080/text/", payload);
};

const Text = () => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<ResType | null>(null);

  const handlePost = () => {
    messageReq(query)
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
    setQuery("");
  };
  console.log(response);
  return (
    <div className="text">
      <section className="sidebar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>Demo</li>
        </ul>
        <nav>Made by User</nav>
      </section>
      <section className="main">
      <input
        type="text"
        placeholder="Enter Query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handlePost}>Send</button>
      </section>
     
    </div>
  );
};

export default Text;
