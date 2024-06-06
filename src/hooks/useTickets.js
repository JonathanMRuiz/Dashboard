import { useState, useEffect } from "react";

const useTickets = (url, sortBy = "price", sortDirection = "asc") => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ruta del archivo JSON en S3
  const datajson =
    "https://scrapalex.s3.eu-west-2.amazonaws.com/event_data.json";

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(datajson)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTickets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // No es necesario incluir datajson en las dependencias de useEffect

  const sortedTickets = [...tickets].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortBy] - b[sortBy];
    } else {
      return b[sortBy] - a[sortBy];
    }
  });

  return { tickets: sortedTickets, loading, error };
};

export default useTickets;
