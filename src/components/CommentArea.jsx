import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3M2VjNzQzYTU2ODAwMTU4ZWMzZTMiLCJpYXQiOjE3MjQzMzM3NjgsImV4cCI6MTcyNTU0MzM2OH0.Oq9ap6WUQdXsEZ8kKryELhNWZbscuL5zdSNFswuQNIk",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    fetchComments();
  }, [asin]);

  return (
    <div>
      {isLoading && <Loading />}
      {error && <Error />}
      {!isLoading && !error && (
        <>
          <CommentsList comments={comments} />
          <AddComment asin={asin} setComments={setComments} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
