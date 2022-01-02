import Head from "next/head";
import { useEffect } from "react";
import { connect } from "react-redux";
import Config from "./../../config";
const Index = (props) => {
  let w_website_name = "";
  try {
    w_website_name = props.pageConfigData.w_website_name;
  } catch (error) {
    console.log(error);
  }
  useEffect(() => {
    try {
      let pathname = window.location.pathname;
      let [x, b, fid = "", page = 1] = pathname.split("/");
      b == "" ? (b = "home") : "";
      let logData = {
        title: "",
      };
      if (b == "article") {
        logData.title = document.querySelector(".post-title").innerText;
        logData.id = fid;
      } else if (b == "categories") {
        logData.title = document.querySelector("#site-title").innerText;
        logData.page = page;
      } else if (b == "home") {
        logData.title = document.querySelector("#site-title").innerText;
        logData.page = page;
      } else if (b == "archives") {
        logData.title = document.querySelector("#site-title").innerText;
        logData.page = page;
      }
      window.spm(`${Config.blogCode}.${b}.enter`, logData);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Head>
      <title>{w_website_name}</title>
      <link
        rel="preload"
        as="style"
        onload="this.rel='stylesheet'"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <link rel="stylesheet" href="/index.css" />
      <script async src="/lib/waline.min.js"></script>
      <script src="/lib/spm.js"></script>
      <script src="/index.js"></script>
    </Head>
  );
};

export default connect((state) => state)(Index);
