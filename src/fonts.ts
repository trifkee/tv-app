const basePath = ""; //import.meta.env.BASE_URL;

export default [
  {
    type: "msdf",
    fontFamily: "Roboto",
    descriptors: {
      weight: 700,
    },
    atlasDataUrl: basePath + "fonts/Roboto-Bold.msdf.json",
    atlasUrl: basePath + "fonts/Roboto-Bold.msdf.png",
  } as const,
  {
    type: "msdf",
    fontFamily: "Roboto",
    descriptors: {
      weight: 400,
    },
    atlasDataUrl: basePath + "fonts/Roboto-Regular.msdf.json",
    atlasUrl: basePath + "fonts/Roboto-Regular.msdf.png",
  } as const,
  {
    type: "msdf",
    fontFamily: "Arial",
    descriptors: {
      weight: 500,
    },
    atlasDataUrl: basePath + "fonts/Roboto-Regular.msdf.json",
    atlasUrl: basePath + "fonts/Roboto-Regular.msdf.png",
  } as const,
];
