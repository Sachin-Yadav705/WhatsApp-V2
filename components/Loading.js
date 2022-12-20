import React from "react";
import { SpinnerCircular } from "spinners-react";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png"
          alt=""
          height={200}
          style={{ marginBottom: 20 }}
        />
      </div>
      <SpinnerCircular color="#3CBC2B" size={50} />
    </center>
  );
}

export default Loading;
