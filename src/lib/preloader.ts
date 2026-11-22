export const PRELOADER_SEEN_KEY = "preloader-seen";

// Runs before first paint (inlined in the root layout's <head>) so returning
// visitors in the same tab and reduced-motion users never see a flash of the
// loader. It lives in the layout rather than in <Preloader> because React
// never executes a <script> rendered by a component on the client.
export const preloaderSkipScript = `try{if(sessionStorage.getItem('${PRELOADER_SEEN_KEY}')||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.loader='skip'}}catch(e){}`;
