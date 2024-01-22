import React from "react";

type Props = React.VideoHTMLAttributes<HTMLVideoElement>;

export default function Video(props: Props) {
  const [src, setSrc] = React.useState<string>();

  React.useEffect(() => {
    async function fetchVideoSrc(accountId: number, videoId: number) {
      const pk = `BCpkADawqM0v2j7BUqH-j4TtPVp3qDMOZcwjtmno108oGE2IXt_wxNUER0mGC--hrPCJacsttNT2HH5tbtt9xlto_HJYLGeO6gNMRBuz0V_kBjPaDSqM6-7Qq2RzlbKDJ-wjn_o5PWA8i4Hs`;
      const res = await fetch(`https://edge.api.brightcove.com/playback/v1/accounts/${accountId}/videos/${videoId}`, {
        headers: {
          accept: `application/json;pk=${pk}`,
        },
      });
      const json = await res.json();
      return json.sources.find((source: any) => {
        return source.container === "MP4" && source.src.includes("https");
      })?.src;
    }
    fetchVideoSrc(1386823061001, 6122776057001).then(setSrc).catch(console.error);
  }, []);

  return <video src={src} {...props} />;
}
