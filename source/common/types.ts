
// Packets

export type Packet = CPacket | SPacket
export type CSPacket = PacketUpdatePoint | PacketUpdateLayer | PacketRemoveLayer | PacketRemovePoint | PacketLog
export type CPacket = CSPacket | PacketFetchLayer | PacketFetchPoint
export type SPacket = CSPacket

export interface PacketUpdatePoint {
    type: "update-point",
    data: IPoint
}
export interface PacketRemovePoint {
    type: "remove-point"
    id: ID
}
export interface PacketUpdateLayer {
    type: "update-layer"
    data: ILayer
}
export interface PacketRemoveLayer {
    type: "remove-layer"
    id: ID
}
export interface PacketFetchPoint {
    type: "fetch-point"
    rect: IRect
}
export interface PacketFetchLayer {
    type: "fetch-layer",
    id: ID
}
export interface PacketLog {
    type: "log",
    message: string
}

// Interfaces

export type ID = number
export type Color = [number, number, number, number]

export interface IPoint {
    id: ID
    x: number
    y: number
    quad: ID
    order: number
    stroke: ID
    layer: ID
}

export interface ILayer {
    id: ID,
    style: ILayerStyle
}

export interface ILayerStyle {
    line_width: number
    stroke_color?: Color
    fill_color?: Color
    priority: number
}

export interface IRect {
    tl: { x: number, y: number },
    br: { x: number, y: number }
}

export function DEFAULT_STYLE(): ILayerStyle { return { line_width: 3, stroke_color: [0, 0, 255, 255], priority: 0 } }
export function NEW_ID(): ID { return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) }
