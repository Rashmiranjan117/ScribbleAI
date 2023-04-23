import { useState } from "react";
import axios from "axios";

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
    <div>
      <input
        type="text"
        placeholder="Enter Query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handlePost}>Send</button>
    </div>
  );
};

export default Text;
