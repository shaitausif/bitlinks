"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState(false);

  const generate = (params) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("");
        setshorturl("");
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        console.log(result);
        if (result.error) {
          toast.error(result.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          toast.success(result.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className="mx-auto max-w-lg my-16 p-5 bg-purple-100 flex flex-col gap-4 rounded-lg">
        <h1 className="font-bold text-center text-xl">
          Generate your short URL's
        </h1>
        <div className="flex flex-col gap-2">
          <input
          required
            type="text"
            value={url}
            className="px-4 py-2 focus:outline-purple-400 rounded-md"
            placeholder="Enter your URL"
            onChange={(e) => {
              seturl(e.target.value);
            }}
          />

          <input
          required
            type="text"
            value={shorturl}
            placeholder="Enter your preferred short URL text"
            onChange={(e) => {
              setshorturl(e.target.value);
            }}
            className="px-4 py-2 focus:outline-purple-400 rounded-md"
          />
          <button disabled={url.length <5 || shorturl.length == 0}
            onClick={generate}
            className="bg-purple-400 rounded-lg shadow-lg py-1 text-white font-bold my-3 hover:bg-purple-500 hover:transition-all"
          >
            Generate
          </button>
        </div>
        {generated && (
          <>
            <span className="font-bold text-lg">Your Link :</span>
            <code>
              
              <Link target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </>
        )}
      </div>
    </>
  );
};

export default shorten;
