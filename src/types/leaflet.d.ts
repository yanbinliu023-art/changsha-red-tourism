declare module 'leaflet' {
  export type LatLngExpression = [number, number] | { lat: number; lng: number }
  export type LatLngBoundsExpression = LatLngExpression[]

  export interface FitBoundsOptions {
    padding?: [number, number]
  }

  export interface LayerOptions {
    pane?: string
    attribution?: string
  }

  export interface InteractiveLayerOptions extends LayerOptions {
    interactive?: boolean
  }

  export interface MapOptions {
    center?: LatLngExpression
    zoom?: number
    scrollWheelZoom?: boolean
  }

  export interface TileLayerOptions extends LayerOptions {
    attribution?: string
  }

  export interface MarkerOptions extends InteractiveLayerOptions {
    icon?: Icon
    title?: string
  }

  export interface PopupOptions extends LayerOptions {
    maxWidth?: number
  }

  export interface TooltipOptions extends LayerOptions {
    direction?: string
  }

  export interface PathOptions extends InteractiveLayerOptions {
    color?: string
    weight?: number
  }

  export interface CircleMarkerOptions extends PathOptions {
    radius?: number
  }

  export interface CircleOptions extends CircleMarkerOptions {
    radius?: number
  }

  export interface GridLayerOptions extends LayerOptions {
    tileSize?: number
  }

  export interface ImageOverlayOptions extends InteractiveLayerOptions {
    opacity?: number
  }

  export interface VideoOverlayOptions extends ImageOverlayOptions {
    autoplay?: boolean
  }

  export interface WMSOptions extends TileLayerOptions {
    layers?: string
  }

  export interface WMSParams {
    layers?: string
  }

  export interface GeoJSONOptions extends InteractiveLayerOptions {
    style?: PathOptions
  }

  export interface ControlOptions {
    position?: string
  }

  export interface LeafletEventHandlerFnMap {
    [eventName: string]: (...args: unknown[]) => void
  }

  export class Evented {}
  export class Layer extends Evented {}
  export class LayerGroup extends Layer {}
  export class FeatureGroup extends LayerGroup {}
  export class Path extends Layer {}
  export class Map extends Evented {}
  export class TileLayer extends Layer {}
  export class Marker<T = unknown> extends Layer {}
  export class Popup extends Layer {}
  export class Tooltip extends Layer {}
  export class Circle extends Path {}
  export class CircleMarker extends Circle {}
  export class Rectangle extends Path {}
  export class Polyline extends Path {}
  export class Polygon extends Polyline {}
  export class ImageOverlay extends Layer {}
  export class VideoOverlay extends ImageOverlay {}
  export class SVGOverlay extends ImageOverlay {}
  export class GeoJSON extends Layer {}
  export class GridLayer extends Layer {}
  export class LatLngBounds {}

  export namespace Icon {
    class Default {
      static mergeOptions(options: {
        iconRetinaUrl: string
        iconUrl: string
        shadowUrl: string
      }): void
    }
  }

  export class Icon {}
  export class DivIcon extends Icon {}

  export function divIcon(options: {
    className?: string
    html?: string
    iconSize?: [number, number]
    iconAnchor?: [number, number]
    popupAnchor?: [number, number]
  }): DivIcon

  export namespace Control {
    class Layers extends Layer {}
  }

  export class Control extends Layer {}

  export const DomUtil: {
    addClass(element: HTMLElement, className: string): void
    removeClass(element: HTMLElement, className: string): void
  }

  const L: typeof import('leaflet')
  export default L
}
