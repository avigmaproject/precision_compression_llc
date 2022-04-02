import React from "react";
import { WebView } from "react-native-webview";

export default function PdfView() {
  return (
    <WebView
      source={{
        uri:
          "https://www.precisioncompression.com/images/brochures/Precision_Compression_Brochure_20_w.pdf",
        // uri:
        //   "https://www.adda247.com/jobs/wp-content/uploads/sites/12/2022/02/01195238/rsmssb-computer-basic-and-senior-recruitment-2022.pdf",
      }}
      originWhitelist={["*"]}
      onLoadEnd={() => this.props.navigation.goBack()}
    />
  );
}
