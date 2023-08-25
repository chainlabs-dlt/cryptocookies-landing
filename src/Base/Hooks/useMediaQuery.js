import React, { useState } from "react";
import { useEffect } from "react";

const defaultMediaWidth = 1440;
const mediaQueries = [
  {
    media: "(min-width: 1181px)",
    maxWidth: defaultMediaWidth,
  },
  {
    media: "(max-width: 1024)",
    maxWidth: 1024,
  },
  {
    media: "(max-width: 840px)",
    maxWidth: 840,
  },
  {
    media: "(max-width: 750px)",
    maxWidth: 750,
  },
  {
    media: "(max-width: 540px)",
    maxWidth: 540,
  },
];

const useMediaQuery = () => {
  const [maxWidth, setMedia] = useState(defaultMediaWidth);

  const checkWidth = React.useCallback((e) => {
    let isMax = true;
    for (let index = 0; index < mediaQueries.length; index++) {
      let mql = mediaQueries[index];

      if (mql.media === e.media) {
        isMax = false;
        setMedia(
          e.matches
            ? mql.maxWidth
            : mediaQueries[index - 1]
            ? mediaQueries[index - 1].maxWidth
            : defaultMediaWidth
        );
        break;
      }
    }
    if (isMax) {
      setMedia(defaultMediaWidth);
    }
  }, []);

  useEffect(() => {
    const mqlMediaArray = [];
    mediaQueries.forEach((mql) => {
      const mqlMedia = window.matchMedia(mql.media);
      mqlMedia.addListener(checkWidth);
      mqlMediaArray.push(mqlMedia);
    });

    setMedia(window.innerWidth);

    return () => {
      mqlMediaArray.forEach((mqlMedia) => {
        mqlMedia.removeListener(checkWidth);
      });
    };
  }, [maxWidth, checkWidth]);

  return maxWidth;
};

export default useMediaQuery;
