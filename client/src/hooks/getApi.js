import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

export const GetApi = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(
        (req, res) => {
        console.log(req.headers);
        setData(res);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  });
  
  return [isLoading, data, error];
}

