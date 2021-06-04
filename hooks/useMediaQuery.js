// import { useEffect, useState } from 'react';

// function useMediaQuery(query) {
//   const hasWindow = typeof window !== 'undefined';
//   let [matches, setMatches] = useState(
//     hasWindow && window.matchMedia(query).matches
//   );

//   useEffect(() => {
//     if (hasWindow) {
//       let media = window.matchMedia(query);
//       if (media.matches !== matches) {
//         setMatches(media.matches);
//       }

//       let listener = () => setMatches(media.matches);
//       media.addListener(listener);
//       return () => media.removeListener(listener);
//     }
//   }, [query]);

//   return matches;
// }

// export default useMediaQuery;

// // const useWindowDimensions = () => {
// //   const hasWindow = typeof window !== 'undefined';

// //   function getWindowDimensions() {
// //     const width = hasWindow ? window.innerWidth : null;
// //     const height = hasWindow ? window.innerHeight : null;
// //     return {
// //       width,
// //       height,
// //     };
// //   }

// //   const [windowDimensions, setWindowDimensions] = useState(
// //     getWindowDimensions()
// //   );

// //   useEffect(() => {
// //     if (hasWindow) {
// //       function handleResize() {
// //         setWindowDimensions(getWindowDimensions());
// //       }

// //       window.addEventListener('resize', handleResize);
// //       return () => window.removeEventListener('resize', handleResize);
// //     }
// //   }, [hasWindow]);

// //   return windowDimensions;
// // };

// // export default useWindowDimensions;
