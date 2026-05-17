declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "leaflet" {
  const L: any;
  export default L;
}

declare module "leaflet-routing-machine";