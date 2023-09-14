import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiArticleLine } from "react-icons/ri";
const NewsWidget = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      const apiKey = "eae0100796msh591f891acd51b1fp170b1ejsn86906c4f2693";

      try {
        const response = await axios.get(
          "https://bing-news-search1.p.rapidapi.com/news",
          {
            params: {
              safeSearch: "Off",
              textFormat: "Raw",
            },
            headers: {
              "X-BingApis-SDK": "true",
              "X-RapidAPI-Key": apiKey,
              "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
            },
          }
        );

        setNewsData(response.data.value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className="news-widget max-w-lg mx-auto flex-wrap bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3">
      <h2 className=" text-center">Latest News</h2>
      <ul>
        {newsData.map((article, index) => (
          <div className="hover:text-center">
            <li key={index} className="gap-5 inline-flex">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold"
              >
                <RiArticleLine />
                {article.name}
              </a>
              <span className=" text-sm font-medium text-white">
                {article.datePublished}
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NewsWidget;
