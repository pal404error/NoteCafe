import React from "react";

export default function Pdf() {
    return(
        <>
       <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"  />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div class="w3-top">
  <div class="w3-bar w3-red w3-card w3-left-align w3-large">
    
    <a href="/" class="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
    <a href="/note" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Notes</a>
    <a href="/todo" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">To-Do List</a>
    <a href="/chat" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Community Chat</a>
    <a href="/pdf" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Pdf Reader</a>
    <a href="/logout" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">LOGOUT</a>
  </div>
</div>
<head>
    <title>PDF Reader</title>

    <script src="script.js" charset="utf-8"></script>
    <link href="pdf.css" rel="stylesheet" />
  </head>
  <body>
    <br /> <br/> <br/> <br/>
    <h3 id="bott">Paste link to upload your pdf :</h3>
    <input id="txt" type="text" name="PDF" id="mypdf" onchange="link(mypdf)" />
    <iframe src="" width="100%" height="700px" id="ifram">
    </iframe>
  </body>
  </>
    )
}

