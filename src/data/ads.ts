import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Page Builder replaces the sample inventory and leaves matching codes empty; only Adsterra Integrator supplies real codes.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "<script>\n  atOptions = {\n    'key' : '4e60ffdc40a2cb44082d9882a8a809ca',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/4e60ffdc40a2cb44082d9882a8a809ca\"></script>",
    "page-top-468x60": "<script>\n  atOptions = {\n    'key' : '0f8dc35cfac52e1e5f40577a412627dc',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/0f8dc35cfac52e1e5f40577a412627dc\"></script>",
    "page-top-320x50": "<script>\n  atOptions = {\n    'key' : '4ca4409857820ff39b0b5a78a3904c3d',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/4ca4409857820ff39b0b5a78a3904c3d\"></script>",
    "home-after-entry-native-banner": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/ea2ba337f4743e22185161c999ed7c0b\"></script>\n<div id=\"container-ea2ba337f4743e22185161c999ed7c0b\"></div>",
    "home-topic-break-728x90": "<script>\n  atOptions = {\n    'key' : '4e60ffdc40a2cb44082d9882a8a809ca',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/4e60ffdc40a2cb44082d9882a8a809ca\"></script>",
    "home-topic-break-468x60": "<script>\n  atOptions = {\n    'key' : '0f8dc35cfac52e1e5f40577a412627dc',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/0f8dc35cfac52e1e5f40577a412627dc\"></script>",
    "home-topic-break-300x250": "<script>\n  atOptions = {\n    'key' : '118d83960b575b4c4ff437eaf00d5beb',\n    'format' : 'iframe',\n    'height' : 250,\n    'width' : 300,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/118d83960b575b4c4ff437eaf00d5beb\"></script>",
    "guide-native-native-banner": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/ea2ba337f4743e22185161c999ed7c0b\"></script>\n<div id=\"container-ea2ba337f4743e22185161c999ed7c0b\"></div>",
    "guide-section-break-728x90": "<script>\n  atOptions = {\n    'key' : '4e60ffdc40a2cb44082d9882a8a809ca',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/4e60ffdc40a2cb44082d9882a8a809ca\"></script>",
    "guide-section-break-468x60": "<script>\n  atOptions = {\n    'key' : '0f8dc35cfac52e1e5f40577a412627dc',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/0f8dc35cfac52e1e5f40577a412627dc\"></script>",
    "guide-section-break-320x50": "<script>\n  atOptions = {\n    'key' : '4ca4409857820ff39b0b5a78a3904c3d',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/4ca4409857820ff39b0b5a78a3904c3d\"></script>",
    "guide-before-faq-468x60": "<script>\n  atOptions = {\n    'key' : '0f8dc35cfac52e1e5f40577a412627dc',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/0f8dc35cfac52e1e5f40577a412627dc\"></script>",
    "guide-before-faq-320x50": "<script>\n  atOptions = {\n    'key' : '4ca4409857820ff39b0b5a78a3904c3d',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/4ca4409857820ff39b0b5a78a3904c3d\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/b67eb6f35a10e37eeb2a618d135427f7",
  },
};

export const adInventory = inventory;
